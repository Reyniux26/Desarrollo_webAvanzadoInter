import './App.css'
import ilustracion from './assets/img/ilustracion.svg'
import uno from './assets/img/uno.jpg'
import dos from './assets/img/dos.jpg'
import tres from './assets/img/tres.jpg'
import cuatro from './assets/img/cuatro.jpg'
import cinco from './assets/img/cinco.jpg'
import seis from './assets/img/seis.jpg'
import Hero from './Components/Hero'
import Website from './Components/Website'
import Info from './Components/Info'
import Principio from './Components/Principio'

function App () {
  return (
    <>
      <Hero
        title='Bienvenidos Delfines'
        subtitle='Estamos aprendiendo props'
        buttonText='Conoce mas'
        buttonLink='#Contact'
      />
      <Website
        title='Orgullosamente Delfines'
        subtitle='Por la grandeza de México'
        buttonText='UNACAR'
        buttonLink='www.unacar.mx'
      />

      <Info
        title='UNACAR'
        description='La maxima casa de estudios se encuentra en Ciudad del Carmen Campeche, cuenta con 45 carreras en todos los ambitos'
      />

      <Principio
        title='Campus y Facultades'
        campus1='Campus 1'
        campus2='Campus 2'
        campus3='Campus 3'
        description1='Facultades de Educación, Ciencias de la información, Administrativos'
        description2='Es la preparatoria Durmina '
        descrption3='Facultades de Ingenería, Arquitectura y Ciencias de la Salud.'
        buttonLink='www.unacar.mx'
        link='Para +Informacion'
      />
      <section className='galeria'>
        <div className='contenedor'>
          <h2 className='titulo'>Our work</h2>
          <article className='galeria-cont'>
            <img src={uno} alt='' />
            <img src={dos} alt='' />
            <img src={tres} alt='' />
            <img src={cuatro} alt='' />
            <img src={cinco} alt='' />
            <img src={seis} alt='' />
          </article>
        </div>
      </section>

      <section className='info-last'>

        <div className='contenedor last-section'>
          <div className='contenedor-textos-main'>
            <h2 className='titulo left'>Title of section</h2>
            <p className='parrafo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit nostrum expedita quasi odio architecto laudantium sunt nemo dicta atque?</p>
            <a href='' className='cta'>Learn more</a>
          </div>
          <img src={ilustracion} alt='' />
        </div>

        <div className='svg-wave' style={{ height: '150px', overflow: 'hidden' }}>
          <svg
            viewBox='0 0 500 150' preserveAspectRatio='none'
            style={{ height: '100%', width: '100%' }}
          >
            <path
              d='M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z'
              style={{ stroke: 'none', fill: '#f5576c' }}
            />
          </svg>
        </div>
      </section>

      <footer id='contacto'>
        <div className='contenedor'>
          <h2 className='titulo'>Contact us</h2>
          <form action='' className='form'>
            <input className='input' type='text' name='' id='' placeholder='Nombre' />
            <input className='input' type='email' name='' id='' placeholder='Email' />
            <textarea className='input' name='' id='' cols='30' rows='10' placeholder='Mensaje' />
            <input className='input' type='submit' value='Enviar' />
          </form>
        </div>
      </footer>
    </>
  )
}

export default App
