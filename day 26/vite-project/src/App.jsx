import Card from './components/card/Card'
import Faq from './components/faq/Faq'
import Hero from './components/hero/Hero'
import './style.css'

function App() {

  return (
    <>
      <div className='all-container border'>
      <Hero />
      <h1 className='text-5xl font-bold text-center py-8'>Hello world!</h1>
      <button className="btn btn-outline btn-secondary">Secondary</button>
      <Card />
      <Faq />
      </div>
    </>
  )
}

export default App
