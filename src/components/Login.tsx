import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import fire from '../config'

function Login () {
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
          console.log('Signed in')
          history.push('/')
        })
        .catch((err) => {
          setUser({
            ...user,
            email: '',
            password: ''
          })
          console.log(err)
          toast.error('You are not registered. Try registering first')
        })
    } else {
      toast.error('Please fill all the fields')
    }
  }

  return (
    <div className="container login-box mt-4">
      <ToastContainer />
      <div className="row">
        <div className="col-6 text-center">
          <img src="https://avatars0.githubusercontent.com/u/71917554?s=200&v=4" alt="the coding culture" style={{ height: '60%', verticalAlign: 'middle' }} />
        </div>
        <div className="col-6">
          <h1 className="text-center">Log In</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-control" type="text" placeholder="xyz@gmail.com" value={email} onChange={handleChange('email')} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Password</label>
              <input className="form-control" type="password" placeholder="*confidential" value={password} onChange={handleChange('password')} />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-success">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
