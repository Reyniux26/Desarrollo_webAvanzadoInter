const ImageCard = ({ title, url }) => {
  return (
    <div className='image-container'>
      <img src={url} alt={title} className='image-view' />
    </div>
  )
}
export default ImageCard
