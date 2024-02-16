import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact')
  }
  return (
    <section id="home" className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello, I'm Sakshi,
          <br />
          Front-end Developer
        </h1>
      </div>
      <div className='home__contact-me'>
        <button onClick={handleNavigate}>Hire Me</button>
      </div>
    </section>
  )
}

export default Home;