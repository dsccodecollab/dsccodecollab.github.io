import React, { useState } from 'react'
import { toast } from 'react-toastify'
import fire from '../config'

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    universityName: ''
  })

  const { email, password, confirmPassword, name, universityName } = user

  const handleChange = (text) => (e) => {
    setUser({ ...user, [text]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        if (password.length < 6) {
          toast.error('Password must be greater than 5 characters')
        } else {
          fire.auth().createUserWithEmailAndPassword(email, password)
            .then((success) => {
              fire.firestore().collection('users').add({
                name: name,
                email: email,
                universityName: universityName
              })
                .then((user) => {
                  console.log('user created')
                })
                .catch(() => {
                  console.log('failed to store user')
                })
              setUser({
                ...user,
                email: '',
                password: '',
                confirmPassword: '',
                name: '',
                universityName: ''
              })
              toast.success('Registered for the upcoming contest. Check your email for more details.')
            })
            .catch((err) => {
              setUser({
                ...user,
                email: '',
                password: '',
                confirmPassword: '',
                name: '',
                universityName: ''
              })
              toast.error(err.message)
            })
        }
      } else {
        toast.error('Password and confirm Password must be same')
      }
    } else {
      toast.error('Please fill all the fields')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="class_form">
      <h2 className="text-center mb-4 title">Subscribe</h2>
      <input type="hidden" name="message" value="Hello just checking" />
      <div className="form-group px-3">
        <i className="fas fa-user"></i>
        <input type="text" className="" name="name" placeholder="Full Name" value={name} onChange={handleChange('name')} />
      </div>
      <div className="form-group px-3">
        <i className="fas fa-envelope"></i>
        <input type="email" className="" placeholder="xyz@gmail.com" name="email" value={email} onChange={handleChange('email')} />
      </div>
      <div className="form-group px-3">
        <i className="fas fa-university"></i>
        <input type="text" className="" placeholder="University Name" value={universityName} onChange={handleChange('universityName')} />
      </div>
      <div className="form-group px-3">
        <i className="fas fa-unlock-alt"></i>
        <input type="password" className="" placeholder="Passsword" value={password} onChange={handleChange('password')} />
      </div>
      <div className="form-group px-3">
        <i className="fas fa-unlock-alt"></i>
        <input type="password" className="" placeholder="Confirm Password" value={confirmPassword} onChange={handleChange('confirmPassword')} />
      </div>
      <div className="text-center mt-3">
        <button type="submit" className="btn btn-success px-5 py-2">Submit</button>
      </div>
    </form>
  )
}

export default Register
