import React, { useState } from 'react'
import { toast } from 'react-toastify'
import fire from '../config'
import '../styles/registration.css'
import axios from 'axios'

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
                  axios.post('https://email-api-thecodingculture.herokuapp.com/send_email', {
                    email: email
                  })
                    .then((s) => {
                      console.log('Email send')
                    })
                    .catch(() => console.log('error sending mail'))
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
              toast.success('Thanks for subscribing. We will send you a mail shortly with further updates')
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
    <form onSubmit={handleSubmit} className="flex flex-col justify-center h-full">
      <h2 className="text-center mb-4 title text-white">Register</h2>
      <input type="hidden" name="message" value="Hello just checking" />
      <div className="custom-form-group px-3">
        <i className="fas fa-user"></i>
        <input type="text" className="pl-4" name="name" placeholder="Full Name" value={name} onChange={handleChange('name')} />
      </div>
      <div className="custom-form-group px-3">
        <i className="fas fa-envelope"></i>
        <input type="email" className="pl-4" placeholder="xyz@example.com" name="email" value={email} onChange={handleChange('email')} />
      </div>
      <div className="custom-form-group px-3">
        <i className="fas fa-university"></i>
        <input type="text" className="pl-4" placeholder="University Name" value={universityName} onChange={handleChange('universityName')} />
      </div>
      <div className="custom-form-group px-3">
        <i className="fas fa-unlock-alt"></i>
        <input type="password" className="pl-4" placeholder="Password" value={password} onChange={handleChange('password')} />
      </div>
      <div className="custom-form-group px-3">
        <i className="fas fa-unlock-alt"></i>
        <input type="password" className="pl-4" placeholder="Confirm Password" value={confirmPassword} onChange={handleChange('confirmPassword')} />
      </div>
      <div className="text-center mt-3">
        <button type="submit" className="orange-button px-5 py-2">Submit</button>
      </div>
    </form>
  )
}

export default Register
