import React, { useState } from 'react'
import { toast } from 'react-toastify'
import fire from '../../config'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const handleChange = (text) => (e) => {
    setUser({ ...user, [text]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email && password) {
      try {
        await fire.auth().signInWithEmailAndPassword(email, password)
        toast.success('Login successful')
      } catch (err) {
        toast.error(err.message)
      } finally {
        setUser({
          email: '',
          password: ''
        })
      }
    } else {
      toast.error('Please fill all the fields')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center h-full">
      <h2 className="text-center mb-4 title text-white">Sign In</h2>
      <div className="custom-form-group pl-3">
        <i className="fas fa-envelope"></i>
        <input type="email" className="pl-4" placeholder="xyz@example.com" name="email" value={email} onChange={handleChange('email')} />
      </div>
      <div className="custom-form-group pl-3">
        <i className="fas fa-unlock-alt"></i>
        <input type="password" className="pl-4" placeholder="Password" value={password} onChange={handleChange('password')} />
      </div>
      <div className="text-center mt-3">
        <button type="submit" className="orange-button px-5 py-2">Log in</button>
      </div>
    </form>
  )
}

export default Login
