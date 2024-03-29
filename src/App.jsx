import Navbar from '@/components/navbar/Navbar'
import './styles/layout.scss'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <HomePage />
      </div>
    </div>
  )
}

export default App
