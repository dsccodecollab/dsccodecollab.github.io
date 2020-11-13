import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import fire from '../config'

const Login = () => {
  const history = useHistory()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const handleChange = (text) => (e) => {
    setUser({ ...user, [text]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      fire.auth().signInWithEmailAndPassword(email, password)
        .then((success) => {
          setUser({
            ...user,
            email: '',
            password: ''
          })
          history.push('/')
        })
        .catch((err) => {
          setUser({
            ...user,
            email: '',
            password: ''
          })
          toast.error(err.message)
        })
    } else {
      toast.error('Please fill all the fields')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="py-5">
      <h1 className="text-center mb-4 title">Sign in</h1>
      <div className="form-group px-3">
        <i className="fas fa-user"></i>
        <input className="" type="text" placeholder="xyz@gmail.com" value={email} onChange={handleChange('email')} />
      </div>
      <div className="form-group px-3">
        <i className="fas fa-user"></i>
        <input className="" type="password" placeholder="confidential" value={password} onChange={handleChange('password')} />
      </div>
      <div className="text-center mt-3">
        <button type="submit" className="btn btn-success px-5">Log in</button>
      </div>
    </form>
  )
}

export default Login
