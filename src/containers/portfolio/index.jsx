import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import CaraImg from '../../assets/images/Cara_Img.png';
import NewsAppImg from '../../assets/images/News_Img.png';
import YtubeCloneImg from '../../assets/images/Youtube_Clone_Img.png';
import CryptoImg from '../../assets/images/Crypto_Img.png';
import './styles.scss'

const portfolioData = [
  {
    name : "Cara Ecommerce",
    image : CaraImg,
    link : ""
  },
  {
    name : "News App",
    image : NewsAppImg,
    link : ""
  },
  {
    name : "Youtube Clone",
    image : YtubeCloneImg,
    link : "https://main--celebrated-cascaron-1e48bb.netlify.app/"
  },
  {
    name : "Crypto-Currency App",
    image : CryptoImg,
    link : "https://crypto-app-beta-sooty.vercel.app/"
  },
  {
    name : "Application HomePage",
    image : CryptoImg,
    link : "https://main--superb-cheesecake-8f819b.netlify.app/"
  }
]

const Portfolio = () => {
  
  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent headerText="Portfolio" icon={ <BsInfoCircleFill size={40} />}/>
      <div className='portfolio__content'>
        <div className='portfolio__content__cards'>
          {
            portfolioData.map((item) => {
              return(
                <div className='portfolio__content__cards__item'>
                  <div className='portfolio__content__cards__item__img-wrapper'>
                    <a href={item.link} target='_blank'>
                      <img alt='dummy data' src={item.image}/>
                    </a>
                    <h3>{item.name}</h3>
                  </div> 
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio
