import React from 'react'
import {FaGithub} from 'react-icons/fa'
const footerYear =new Date().getFullYear()


function footer() {
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <FaGithub className='text-4xl'/>
        <p>Copywright &copy; {footerYear} All rights reserved</p>
    </footer>
  )
}

export default footer