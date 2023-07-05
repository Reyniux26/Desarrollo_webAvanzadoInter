
const Elemento = ({ id, title,  url, nombre }) => {
  return
   (
        <div>
          <h5>{id}</h5>
          <a href={url}>{title}</a>
          <h2>{nombre}</h2>
              
              
            </div>
  )
}
export default Elemento
