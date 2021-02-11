import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
const [username, setUsername] = useState('')
const [password, setPassword] = useState('') 


  useEffect(() => {
    const fechData = async () => {
      const blogs = await blogService.getAll()
      setBlogs(blogs)
    }
    fechData()
  }, [])

  return (
    <div>
      <h2>blogs</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} {...{ blog }} />
      ))}
    </div>
  )
}

export default App
