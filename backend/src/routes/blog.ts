import { Context, Hono } from "hono";
import authMiddleware from "../middleware";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { postSchema, Post, postUpdateSchema, PostUdpate, idSchema, ID } from "@yash-r-gorde/blogx-common";

const router = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();

router.use(authMiddleware)

router.post('/', async (c: Context) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body: Post = await c.req.json();

    const { success } = postSchema.safeParse(body)

    if (!success) {
        return c.json({ message: "Invalid inputs" }, 422)
    }
    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                published: body.published,
                authorId: c.get('userId')
            }
        })
        return c.json({ id: post.id }, 200)
    } catch (error) {
        return c.json({ message: 'Internal Server Error' }, 500)
    }
})

router.put('/', async (c: Context) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body: PostUdpate = await c.req.json()

    const { success } = postUpdateSchema.safeParse(body)

    if (!success) {
        return c.json({ message: "Invalid inputs" }, 422)
    }

    try {
        await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })
        return c.json({ message: "Post updated successfully" }, 200)
    } catch (error) {
        return c.json({ message: 'Internal Server Error' }, 500)
    }
})


// TODO: add pagination
router.get('/bulk', async (c: Context) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            posts
        })
    } catch (error) {
        return c.json({ message: 'Internal Server Error' }, 500)
    }
})

router.get('/:id', async (c: Context) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const id: ID = c.req.param('id');

    const { success } = idSchema.safeParse(id);

    if (!success) {
        return c.json({ message: 'Invalid ID format' }, 400);
    }

    try {
        const post = await prisma.post.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true,
                    }
                }
            }
        })
        return c.json({ post }, 200)
    } catch (error) {
        return c.json({ message: 'Internal Server Error' }, 500)
    }
})
export default router;