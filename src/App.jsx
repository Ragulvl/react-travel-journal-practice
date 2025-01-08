import './App.css'
import Navbar from './component/Navbar.jsx'
import TravelCard from './component/TravelCard.jsx'
import data from './data.js'

function App() {

  const travelCards = data.map(item => (
    <TravelCard
      key={item.id}
      title={item.title}
      country={item.country}
      mapLink={item.mapLink}
      date={item.date}
      description={item.description}
      image={item.image}
    />
  ))

  return (
    <>
      <Navbar />
      {travelCards}
    </>
  )
}

export default App
