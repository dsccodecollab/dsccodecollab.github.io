import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import fire from '../config'
import { useHistory } from 'react-router-dom'

const Register = () => {
  const history = useHistory()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    universityName: ''
  })

  const { email, password, confirmPassword } = user

  const handleChange = (text) => (e) => {
    setUser({ ...user, [text]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        fire.auth().createUserWithEmailAndPassword(email, password)
          .then((success) => {
            setUser({
              ...user,
              email: '',
              password: '',
              confirmPassword: ''
            })
            history.push('/')
          })
          .catch((err) => {
            setUser({
              ...user,
              email: '',
              password: '',
              confirmPassword: ''
            })
            toast.error(err.message)
          })
      } else {
        toast.error('Password and confirm Password must be same')
      }
    } else {
      toast.error('Please fill all the fields')
    }
  }

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 col-sm-12 text-center">
          <img src="https://avatars0.githubusercontent.com/u/71917554?s=200&v=4" alt="the Coding Culture" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h1 className="text-center">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" placeholder="xyz@gmail.com" value={email} onChange={handleChange('email')} />
            </div>
            <div className="form-group">
              <label htmlFor="university">University Name</label>
              <input type="text" className="form-control" placeholder="University Name" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" placeholder="Passsword" value={password} onChange={handleChange('password')} />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm Password" value={confirmPassword} onChange={handleChange('confirmPassword')} />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
