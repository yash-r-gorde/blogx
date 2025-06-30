import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
const Signin = lazy(() => import('./pages/Signin'));
const Signup = lazy(() => import('./pages/Signup'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Blog = lazy(() => import('./pages/Blog'));
const MeRedirect = lazy(() => import('./components/MeRedirect'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));
const Publish = lazy(() => import('./pages/Publish'));



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Suspense fallback={"loading..."}><MeRedirect /></Suspense>} />
          <Route path="/signin" element={<Suspense fallback={"loading..."}><Signin /></Suspense>} />
          <Route path="/signup" element={<Suspense fallback={"loading..."}><Signup /></Suspense>} />

          <Route path="/blogs" element={
            <ProtectedRoute>
              <Suspense fallback={"loading..."}><Blogs /></Suspense>
            </ProtectedRoute>
          } />

          <Route path="/blog/:id" element={
            <ProtectedRoute>
              <Suspense fallback={"loading..."}><Blog /></Suspense>
            </ProtectedRoute>
          } />

          <Route path="/publish" element={
            <ProtectedRoute>
              <Suspense fallback={"loading..."}><Publish /></Suspense>
            </ProtectedRoute>
          } />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
