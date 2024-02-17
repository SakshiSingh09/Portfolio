import React from 'react'
import './styles.scss'
import PageHeaderContent from '../../components/pageHeaderContent';
import { CgProfile } from "react-icons/cg";
import personalDetails from '../../utils/personalDetails';
import { Animate } from 'react-simple-animate';
import {DiApple, DiAndroid} from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent headerText="About Me" icon={ <CgProfile size={40} />}/>

      <div className='about__content'>
        <div className='about__content__personalWrapper'>
        <Animate
          play
          duration = {1.5}
          delay={1}
          start={{
            transform: "translateX(-900px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}
          >
          <h3>Front End Developer</h3>
          <p>{personalDetails.job_summary}</p>
        </Animate>

        <Animate
          play
          duration = {1.5}
          delay={1}
          start={{
            transform: "translateX(500px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}
          >
          <h3>Personal Information</h3>
          <ul>
            {
              (personalDetails.details).map((detail,i) => {
                {console.log(detail)}
                return(
                  <li key={i}>
                    <span className='title'>{detail.label}:</span>
                    <span className='value'> {detail.value}</span>
                </li>
                )
              })
            }
          </ul>
        </Animate>
        </div>
        <div className='about__content__servicesWrapper'>
          <Animate
            play
            duration = {1.5}
            delay={1}
            start={{
              transform: "translateX(500px)"
            }}
            end={{
              transform: "translateX(0px)"
            }}>
            <div className='about__content__servicesWrapper__innerContent'>
              <div>
                <FaDev size={60} color='var(--yellow-theme-main-color)'/>
              </div>
              <div>
                <DiAndroid size={60} color='var(--yellow-theme-main-color)'/>
              </div>
              <div>
                <FaDatabase size={60} color='var(--yellow-theme-main-color)'/>
              </div>
              <div>
                <DiApple size={60} color='var(--yellow-theme-main-color)'/>
              </div>
            </div>
          </Animate>
        </div>
      </div>      
    </section>
    
  )
}

export default About;
