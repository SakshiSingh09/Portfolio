import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { MdWavingHand } from "react-icons/md";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact')
  }
  return (
    <section id="home" className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hi, I'm Sakshi {<MdWavingHand size={50}/>}
        </h1>
        <h3>
          (Front-End Developer)
        </h3>
      </div>
      <div className='home__contact-me'>
        <button onClick={handleNavigate}>Hire Me</button>
      </div>
    </section>
  )
}

export default Home;