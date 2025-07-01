<div align="center">
  <h1>📝 BlogX</h1>
  <p><strong>A modern full-stack blog platform built with Hono (Cloudflare), React, and Vite.</strong></p>
  <a href="https://blogx-beryl.vercel.app">
    🌐 Live Demo
  </a>
</div>

---

## ✨ Features

- 🔐 User authentication (Sign in / Sign up)
- 🖊️ Rich blogging interface
- 🧑‍💼 Author profiles
- 🌍 Serverless backend with Cloudflare Workers
- ⚡ Fast and responsive frontend with React + TailwindCSS
- 🔥 Toast notifications
- 🛠️ Shared types & validation with a common package

---

## 🌐 Live Deployment

> Access the live app here:  
🔗 [https://blogx-beryl.vercel.app](https://blogx-beryl.vercel.app)

---

## 🖼️ Screenshots

<div align="center">
  <img src="https://github.com/yash-r-gorde/blogx/blob/main/images/Screenshot%20(40).png?raw=true" width="80%" alt="BlogX - Full Blog View" />
  <p><em>📖 Full blog post view</em></p>

  <img src="https://github.com/yash-r-gorde/blogx/blob/main/images/Screenshot%20(39).png?raw=true" width="80%" alt="BlogX - Create Blog" />
  <p><em>✍️ Write a new blog</em></p>

  <img src="https://github.com/yash-r-gorde/blogx/blob/main/images/Screenshot%20(38).png?raw=true" width="80%" alt="BlogX - Home" />
  <p><em>📃 Blog listing page</em></p>

  <img src="https://github.com/yash-r-gorde/blogx/blob/main/images/Screenshot%20(37).png?raw=true" width="80%" alt="BlogX - Login" />
  <p><em>🔐 Login page</em></p>

  <img src="https://github.com/yash-r-gorde/blogx/blob/main/images/Screenshot%20(36).png?raw=true" width="80%" alt="BlogX - Register" />
  <p><em>🆕 Sign up page</em></p>
</div>

---

## �� Tech Stack

### 🖥️ Frontend

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Hot Toast](https://react-hot-toast.com/)

### 🌐 Backend

- [Hono](https://hono.dev/) (Cloudflare Workers)
- [Prisma](https://www.prisma.io/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- Custom shared package: `@yash-r-gorde/blogx-common`

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yash-r-gorde/blogx
cd blogx
```

### 2. Set up the backend

```bash
cd backend
npm install
npx wrangler dev
```

Make sure you configure your `wrangler.toml` and environment variables (like `JWT_SECRET`, `DATABASE_URL`, etc.).

### 3. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📁 Monorepo Structure

```
blogx/
├── backend/              # Hono + Prisma backend
├── frontend/             # React frontend
└── packages/
    └── blogx-common/     # Shared validation/types
```

---

## 🧠 Author

**Yash Gorde**  
💬 Master of mirth, purveyor of puns, and the funniest person in the kingdom.

---

## 📜 License

This project is licensed under the MIT License.  
Feel free to use, contribute, and remix.
