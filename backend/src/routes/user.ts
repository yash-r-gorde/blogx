import { Context, Hono } from 'hono';
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from 'hono/jwt'
import bcryptjs from "bcryptjs"
import { signupSchema, Signup, signinSchema, Signin } from '@yash-r-gorde/blogx-common';
import authMiddleware from '../middleware';

const router = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>();

router.get('/me', authMiddleware, async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: c.get('userId')
      },
      select: {
        id: true,
        name: true
      }
    })

    if (!user) {
      return c.json({ message: "User not found" }, 403);
    }

    return c.json({
      user
    }, 200)

  } catch (error) {
    return c.json({ error: "Internal server error" }, 500);
  }
})


router.post('/signup', async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())

  const body: Signup = await c.req.json()

  const { success } = signupSchema.safeParse(body)

  if (!success) {
    return c.json({ error: "Invalid inputs" }, 400);
  }

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: await bcryptjs.hash(body.password, 10)
      }
    })
    const token = await sign({ userId: user.id }, c.env?.JWT_SECRET)
    return c.json({
      jwt: token
    }, 200)
  } catch (error) {
    return c.json({ error: "Failed to create user" }, 400);
  }
})

router.post('/signin', async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())

  const body: Signin = await c.req.json()

  const { success } = signinSchema.safeParse(body)

  if (!success) {
    return c.json({ message: "Invalid inputs" }, 422);
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      },
    })

    if (!user) {
      return c.json({ message: "User not found" }, 403);
    }

    const isValidPassword = await bcryptjs.compare(body.password, user.password)

    if (!isValidPassword) {
      return c.json({ message: "Invalid password" }, 401);
    }

    const token = await sign({ userId: user.id }, c.env?.JWT_SECRET)

    return c.json({
      jwt: token
    }, 200)

  } catch (error) {
    return c.json({ error: "Internal server error" }, 500);
  }
})


export default router;