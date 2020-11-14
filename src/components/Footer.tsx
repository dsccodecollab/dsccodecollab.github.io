import React from 'react'
import '../styles/footer.css'
function Footer () {
  return (
    <footer className="sticky-bottom footer px-5 py-5 mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h2>The Coding Culture</h2>
          <p>Copyright 2020 | All Rights Reserved</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h2>Quick Links</h2>
          <ul>
            <li>About Us</li>
            <li>Sponsors</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h2>Contact us</h2>
          <p>thecodingculture@gmail.com</p>
          <button type="button" className="btn btn-info">Send Us an email</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
