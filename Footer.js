import React from 'react'
// they added a const called today
const Footer = () => {
    const today = new Date();

  return (
    <footer>
        <p>Copyright &copy;{today.getFullYear()}</p>
    </footer>
  )
}

export default Footer