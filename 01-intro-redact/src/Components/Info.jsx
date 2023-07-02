import React from 'react'

export default function Info ({ title, description }) {
  return (
    <section className='info'>
      <div className='contenedor'>
        <h2 className='titulo left'>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}
