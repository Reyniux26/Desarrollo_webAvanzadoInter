import { FaWhatsapp } from 'react-icons/fa'
const ProductCard = ({ id, title, description, url, price, quantity }) => {
  const grayscale = quantity === 0 ? { filter: 'grayscale(100%) brightness(60%)' } : {}
  const availabilityText = quantity === 0 ? 'Agotado' : 'Disponible'
  const availabilityClass = quantity === 0 ? 'availability-tag out-of-stock' : 'availability-tag'
  const handleWhatsAppClick = () => {
    const message = `Hola, me interesa comprar el producto ${title}. ¿Todavía esta disponible?`
    const phoneNumber = '1234567890'
    const encodedMessage = encodeURI(message)
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    window.open(whatsappURL)
  }
  return (
    <div className='col-md-3 my-3 d-flex align-items-stretch'>
      <div className='card'>
        <a href={`/product/${id}`}>
          <div className='image-container'>
            <img className='product-image' src={`/assets/img/${url}`} alt={title} style={grayscale} />
            <div className={availabilityClass}>{availabilityText}</div>
          </div>
        </a>
        <div className='card-body d-flex flex-column justify-content-between'>
          <div>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
          </div>

          <div className='mx-auto mt-3'>
            <p className='card-price'>${price}</p>
            <button className='whatsapp-button' onClick={handleWhatsAppClick}>
              <FaWhatsapp />
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
