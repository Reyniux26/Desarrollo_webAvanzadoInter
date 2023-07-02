import React from 'react'

export default function Principio ({ title, campus1, campus2, campus3, description1, description2, descrption3, buttonLink, link }) {
  return (
    <section className='cards contenedor'>
      <h2 className='titulo'>{title}</h2>
      <div className='content-cards'>
        <article className='card'>
          <i className='far fa-clone' />
          <h3>{campus1}</h3>
          <p>{description1}</p>
          <a href={buttonLink} className='cta'>{link}</a>
        </article>
        <article className='card'>
          <i className='fas fa-database' />
          <h3>{campus2}</h3>
          <p>{description2}</p>
          <a href={buttonLink} className='cta'>{link}</a>
        </article>
        <article className='card'>
          <i className='far fa-object-group' />
          <h3>{campus3}</h3>
          <p>{descrption3}</p>
          <a href={buttonLink} className='cta'>{link}</a>
        </article>
      </div>
    </section>
  )
}
