import { z } from "zod/v4";

export const signupSchema = z.object({
    name: z.string().min(1, { message: "This field has to be filled." }),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    password: z
        .string()
        .min(8, 'The password must be at least 8 characters long')
        .max(32, 'The password must be a maximun 32 characters')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/)
});

export type Signup = z.infer<typeof signupSchema>;


export const signinSchema = z.object({
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),

    password: z
        .string()
        .min(8, { message: 'The password must be at least 8 characters long' })
        .max(32, 'The password must be a maximun 32 characters')
});


export type Signin = z.infer<typeof signinSchema>;


export const postSchema = z.object({
    title: z.string().trim().min(1, "Title is required"),
    content: z.string().trim().min(1, "Content cannot be empty"),
    published: z.coerce.boolean()
});

export type Post = z.infer<typeof postSchema>;


export const postUpdateSchema = z.object({
    id: z.string().uuid(),
    title: z.string().trim().optional(),
    content: z.string().trim().optional()
});

export type PostUdpate = z.infer<typeof postUpdateSchema>;


export const idSchema = z.string().uuid()

export type ID = z.infer<typeof idSchema>;