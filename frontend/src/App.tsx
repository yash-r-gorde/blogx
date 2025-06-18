import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
const Signin = lazy(() => import('./pages/Signin'));
const Signup = lazy(() => import('./pages/Signup'));
const Blog = lazy(() => import('./pages/Blog'));


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Suspense fallback={"loading..."}><Signin/></Suspense>}/>
        <Route path="/signup" element={<Suspense fallback={"loading..."}><Signup/></Suspense>}/>
        <Route path="/blog" element={<Suspense fallback={"loading..."}><Blog/></Suspense>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
