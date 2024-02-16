import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './styles.scss'

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <PageHeaderContent headerText="Contact Me" icon={ <BsInfoCircleFill size={40} />}/>
      <div className='contact__content'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}
        >
          <h3 className='contact__content__header-text'>Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}
        >
          <div className='contact__content__form'>
            <div className='contact__content__form__controls-wrapper'>
              <div className='nameWrapper'>
                <input className='inputName' name='name' type={'text'} required/>
                <label htmlFor='name' className='nameLabel'>Name</label>
              </div>
              <div className='emailWrapper'>
                <input className='inputEmail' name='email' type={'text'} required/>
                <label htmlFor='email' className='emailLabel'>E-Mail</label>
              </div>
              <div className='descriptionWrapper'>
                <textarea rows="5" className='inputDescription' name='description' type={'text'} required/>
                <label htmlFor='description' className='descriptionLabel'>Description</label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  )
}

export default Contact
