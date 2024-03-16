import '@/styles/homepage.scss'
import Bg from '@/assets/bg.png'
import SearchBar from '../components/searchBar/SearchBar'
import heroBoxData from '../data/homepageData'
import HeroBox from '../components/heroBox/HeroBox'

const HomePage = () => {
  return (
    <section className='homePage'>
      {/* HERO LEFT */}
      <div className='textContainer'>
        <div className='wrapper'>
          <div className='hero-copy'>
            <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
            <p className='subtitle'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut
              provident, beatae excepturi recusandae dolores similique!
            </p>
          </div>
          <SearchBar />
          <div className='boxes'>
            {heroBoxData.map((box) => (
              <HeroBox
                key={box.id}
                title={box.title}
                description={box.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='imageContainer'>
        <img src={Bg} alt='' />
      </div>
    </section>
  )
}

export default HomePage
