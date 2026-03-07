import { useState, useEffect } from 'react'
import { getContactSubmissions } from '../lib/supabase'

const Admin = () => {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [selectedSubmission, setSelectedSubmission] = useState(null)

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = 'jawsadmin2024' // Change this to your desired password

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions()
    }
  }, [isAuthenticated])

  const loadSubmissions = async () => {
    try {
      const data = await getContactSubmissions()
      setSubmissions(data)
    } catch (error) {
      console.error('Error loading submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect password')
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="card p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-navy-700 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page bg-gray-100 min-h-screen">
      <div className="section-container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-navy-700">Contact Form Submissions</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="btn-secondary"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-electric-blue-500"></div>
          </div>
        ) : submissions.length === 0 ? (
          <div className="card p-12 text-center">
            <p className="text-gray-600 text-lg">No submissions yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div key={submission.id} className="card p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-700">{submission.name}</h3>
                    <p className="text-electric-blue-500">{submission.email}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {formatDate(submission.created_at)}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="font-semibold text-gray-700">Subject: </span>
                  <span className="text-gray-600">{submission.subject}</span>
                </div>
                <div>
                  <button
                    onClick={() => setSelectedSubmission(
                      selectedSubmission?.id === submission.id ? null : submission
                    )}
                    className="text-electric-blue-500 hover:text-electric-blue-600 font-semibold"
                  >
                    {selectedSubmission?.id === submission.id ? 'Hide Message' : 'View Message'}
                  </button>
                </div>
                {selectedSubmission?.id === submission.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 whitespace-pre-wrap">{submission.message}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin

