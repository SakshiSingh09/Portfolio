import React, { Fragment, useState } from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BiSolidContact } from "react-icons/bi";
import { Animate } from 'react-simple-animate'
import './styles.scss'
import emailjs from 'emailjs-com';
import emailValidator from 'email-validator';
import Alert from '../alert/index';

const Contact = () => {

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_description: ''
  });
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    message: '',
    warning: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if(emailValidator.validate(formData.from_email)){
      return 1;
    }
    
    return 0;

  }

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    if(validateForm()){
      emailjs.send('service_meud6km', 'template_eofnfhb', formData, 'baB3AEBt9JcqxlLTO')
      .then((result) => {
        console.log(result.text);
        setAlertMsg({
          message: `Hey! ${formData.from_name}. Thank you connecting with me. :)`,
          warning: false
        })
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
          setFormData({
            from_name: '',
            from_email: '',
            from_description: ''
          }) 
        },4000) 
      }, (error) => {
        console.log(error.text);
        setAlertMsg({
          message: 'Sorry! Cannot send the connect request. :(',
          warning: true
        })
      });
    }else{
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
        setFormData({
          from_name: '',
          from_email: '',
          from_description: ''
        })
      },4000)
      setAlertMsg({
        message: 'Wrong email entered. Please recheck your email',
        warning: true
      })
      
    }

  }
  return (
   <Fragment>
    <section id='contact' className='contact'>
      <PageHeaderContent headerText="Contact Me" icon={ <BiSolidContact size={40} />}/>
      <div className='contact__content'>
        {
          alert ? <Alert alertMsg={alertMsg}/> : null
        }   
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
          <form className='contact__content__form' onSubmit={handleSubmit}>
            <div className='contact__content__form__controls-wrapper'>
              <div className='nameWrapper'>
                <input className='inputName' name='from_name' type={'text'} onChange={handleChange} required/>
                <label htmlFor='from_name' className='nameLabel'>Name</label>
              </div>
              <div className='emailWrapper'>
                <input className='inputEmail' name='from_email' type={'email'} onChange={handleChange} required/>
                <label htmlFor='from_email' className='emailLabel'>E-Mail</label>
              </div>
              <div className='descriptionWrapper'>
                <input style={{height: '200px'}} className='inputDescription' name='from_description' type={'text'} onChange={handleChange} required/>
                <label htmlFor='from_description' className='descriptionLabel'>Description</label>
              </div>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </Animate>
      </div>
    </section>
   </Fragment>
  )
}

export default Contact
