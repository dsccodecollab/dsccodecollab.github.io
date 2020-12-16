import React, { useState } from 'react'
import { toast } from 'react-toastify'
import fire from '../config'
import '../styles/registration.css'
// import axios from 'axios'

const Register = () => {
  const [loading, setLoading] = useState(false)

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

  const validateData = () => {
    if (name && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        toast.error('Password and confirm Password must be same')
        return false
      }
      if (password.length < 6) {
        toast.error('Password must be atleast 6 characters')
        return false
      }
      return true
    } else {
      toast.error('Please fill all the fields')
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateData()) {
      setLoading(true)
      try {
        await fire.auth().createUserWithEmailAndPassword(email, password)
        await fire.firestore().collection('users').add({
          name: name,
          email: email,
          universityName: universityName
        })
        // uncomment it when the email service is back up
        // await axios.post('https://email-api-thecodingculture.herokuapp.com/send_email', { email: email })

        toast.success('You have successfully registered for the upcoming contest.')
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          toast.success('You have successfullt registered for the upcoming contest.')
        } else {
          toast.error(error.message)
        }
      } finally {
        setUser({
          ...user,
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
          universityName: ''
        })
        setLoading(false)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center h-full">
      <h2 className="text-center mb-4 title text-white">Subscribe</h2>
      <input type="hidden" name="message" value="Hello just checking" />
      <div className="custom-form-group pl-3">
        <i className="fas fa-user"></i>
        <input type="text" className="pl-4" name="name" placeholder="Full Name" value={name} onChange={handleChange('name')} />
      </div>
      <div className="custom-form-group pl-3">
        <i className="fas fa-envelope"></i>
        <input type="email" className="pl-4" placeholder="xyz@example.com" name="email" value={email} onChange={handleChange('email')} />
      </div>
      <div className="custom-form-group pl-3">
        <i className="fas fa-university"></i>
        <input type="text" className="pl-4" placeholder="University Name" value={universityName} onChange={handleChange('universityName')} />
      </div>
      <div className="custom-form-group pl-3">
        <i className="fas fa-unlock-alt"></i>
        <input type="password" className="pl-4" placeholder="Password" value={password} onChange={handleChange('password')} />
      </div>
      <div className="custom-form-group pl-3">
        <i className="fas fa-unlock-alt"></i>
        <input type="password" className="pl-4" placeholder="Confirm Password" value={confirmPassword} onChange={handleChange('confirmPassword')} />
      </div>
      <div className="text-center mt-3">
        <button type="submit" className="orange-button px-5 py-2">
          {
            loading
              ? <p className="animate-pulse">Processing....</p>

              : <p>Submit</p>
          }
        </button>
      </div>
    </form>
  )
}

export default Register
