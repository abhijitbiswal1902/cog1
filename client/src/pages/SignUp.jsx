import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '', // Ensure role is part of the initial state
  })
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleOptionChange = (event) => {
    setFormData({ ...formData, role: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(false)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      console.log(data)
      setLoading(false)
      if (data.success === false) {
        setError(true)
        return
      }
      navigate('/sign-in')
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:ring focus:ring-green-300 focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:ring focus:ring-green-300 focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:ring focus:ring-green-300 focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="org"
                checked={formData.role === 'org'}
                onChange={handleOptionChange}
                className="text-green-600 focus:ring focus:ring-green-300"
              />
              <span className="ml-2 text-gray-700">ORG</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="gamer"
                checked={formData.role === 'gamer'}
                onChange={handleOptionChange}
                className="text-green-600 focus:ring focus:ring-green-300"
              />
              <span className="ml-2 text-gray-700">GAMER</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="host"
                checked={formData.role === 'host'}
                onChange={handleOptionChange}
                className="text-green-600 focus:ring focus:ring-green-300"
              />
              <span className="ml-2 text-gray-700">HOST</span>
            </label>
          </div>
          <button
            disabled={loading}
            className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-500 focus:ring focus:ring-green-300 focus:outline-none disabled:opacity-50"
          >
            {loading ? 'Loading...' : `Sign Up as ${formData.role}`}
          </button>
          {/* <OAuth /> */}
        </form>
        <div className="flex justify-center gap-2 mt-4 text-gray-700">
          <p>Have an account?</p>
          <Link to="/sign-in" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </div>
        {error && (
          <p className="mt-4 text-center text-red-600">Something went wrong!</p>
        )}
      </div>
    </div>
  )
}
