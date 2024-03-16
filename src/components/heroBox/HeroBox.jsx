import './heroBox.scss'

const HeroBox = ({ title, description }) => {
  return (
    <div key={title} className='box'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default HeroBox
