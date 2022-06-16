import React from 'react'
import "./Slider.css"
import { useInView } from 'react-intersection-observer';

const Slider = ({imageSrc, title, subtitle, flipped}) => {

  const { ref, inView} = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  /**
   * If the card is not flipped, render the image first, then the content. If the card is flipped,
   * render the content first, then the image. **/
  const renderContent = () => {
      if(!flipped){
          return (
          <>
            <img src={imageSrc} alt='travel' className='slider_image'/>
            <div className='slider_content'>
                <h1 className='slider_title'>{title}</h1>
                <p>{subtitle}</p>
            </div>
          </>
          )
      } else {
          return (
          <>
            <div className='slider_content'>
                <h1 className='slider_title'>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <img src={imageSrc} alt='travel' className='slider_image'/>
          </>
          )
      }
  }

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
        {
            renderContent()
        }
    </div>
  )
}

export default Slider