import { createMiddleware } from 'hono/factory'
import { Context, Next } from "hono"
import { verify } from "hono/jwt";
import { contextStorage } from 'hono/context-storage';

const authMiddleware = createMiddleware< {
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>(async (c: Context, next: Next) => {
  const authorization = c.req.header('Authorization')

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return c.json({ message: "Unauthorized" }, 401)
  }

  const token = authorization.split(' ')[1]

  try {
    const { userId } = await verify(token, c.env?.JWT_SECRET)
    c.set('userId', `${userId}`)
    await next();
  } catch (error) {
    return c.json({ message: "Unauthorized" }, 401)
  }
})

export default authMiddleware