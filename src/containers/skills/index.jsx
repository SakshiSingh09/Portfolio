import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs';
import { skillData } from '../../utils/skills'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress'
import './styles.scss'

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent headerText="Skills" icon={ <BsInfoCircleFill size={40} />}/>
      <div className='skills__content-wrapper'>
        {
          skillData.map((skill,i) => {
            return(
              <div key={i} className='skills__content-wrapper__inner-content'>
                <Animate
                  play
                  duration = {1}
                  delay = {0.3}
                  start = {{
                    transform : 'translateX(-200px)'
                  }}
                  end = {{
                    transform : 'translateX(0px)'
                  }}
                >
                  <h3 className='skills__content-wrapper__inner-content__category-text'>{skill.label}</h3>
                  <div className='skills__content-wrapper__inner-content__progressbar-container'>
                    {
                      skill.data.map((skillitem,i) => {
                        return(
                          <AnimateKeyframes
                            playduration = {1}
                            keyframes={["opacity : 1", "opacity : 0"]}
                            iterationCount={1}
                            key={i}
                          >
                            <div className='progress-bar-wrapper' key={i}>
                              <p>{skillitem.skillname}</p>
                              <Line 
                                percent={skillitem.percentage}
                                strokeWidth="2"
                                strokeColor="var(--yellow-theme-main-color)"
                                trailWidth={"2"}
                                strokeLinecap='square'
                              />
                            </div>
                          </AnimateKeyframes>
                        )
                      })
                    }
                  </div>
                </Animate>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Skills
