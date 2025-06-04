import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './assets/pages/Events'
import EventDetails from './assets/pages/EventDetails'
import Bookings from './assets/pages/Bookings'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Events />} />  
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/events/booking/:id" element={<Bookings />} />
      </Routes>
    </>

  )
}

export default App
