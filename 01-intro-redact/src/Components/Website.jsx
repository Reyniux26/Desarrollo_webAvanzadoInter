import React from 'react'
import ilustracion1 from '../assets/img/ilustracion1.svg'
function Website ({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className='wave-contenedor website'>
      <img src={ilustracion1} alt='' />
      <div className='contenedor-textos-main'>
        <h2 className='titulo left'>{title}</h2>
        <p className='parrafo'>{subtitle}
        </p>
        <a href={buttonLink} className='cta'>{buttonText}</a>
      </div>
    </section>
  )
}

export default Website
