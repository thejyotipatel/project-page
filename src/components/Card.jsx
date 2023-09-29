import imgs from '../assets/edie-homepage.png'
const Card = () => {
  return (
    <a className='card-item'>
      <img src={imgs} alt='project' className='card-img' />
      <h5>project</h5>
    </a>
  )
}
export default Card
