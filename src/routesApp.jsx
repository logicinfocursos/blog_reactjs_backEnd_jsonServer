import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard'
import Products from './pages/products'
import Post from './pages/posts/post'
import Posts from './pages/posts/posts'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

                <Route exact path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Products />} />
                <Route path="/post" element={<Post />} />
                <Route path="/Post/:id" element={<Post />} />
                <Route path="/posts" element={<Posts />} />

            </Routes>
        </BrowserRouter>
    )
}
