const Card = ({ item }) => {
  const { title, url, img } = item
  return (
    <a className='card-item' target='_blanck' rel='noreferrer' href={url}>
      <img src={img} alt={title} className='card-img' />
      <h3 className='card-title'>{title}</h3>
    </a>
  )
}
export default Card
