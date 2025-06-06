import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Bookings = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [event, setEvent] = useState({})
  const [formData, setFormData] = useState({ 
    eventId: id, 
    firstName: '', 
    lastName: '',
    email: '', 
    streetName: '', 
    postalCode: '', 
    city: '',
    ticketQuantity: 1
  })

  useEffect(() => {
    getEvent()
  }, [])
    
  const getEvent = async () => {
    try {
      const res = await fetch(`https://eventventixe-eza6ffcgf3bah6ep.swedencentral-01.azurewebsites.net/api/events/${id}`)
      if (!res.ok) throw new Error("Failed to fetch event")

      const data = await res.json()
      setEvent(data.result)
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target 
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`https://ventixebooking-edeghyc5fzdkgqgk.swedencentral-01.azurewebsites.net/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        console.error("Booking failded")
      } else {
        console.log("Booking successful")
        navigate('/')
      }
    } catch (err) {
      console.error("Error submitting booking", err)
    }
  }

  return (
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>    
        <div className='booking-card'>
          <h1>Book Event - {event.title}</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className='input-form'>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder='First Name'/>
              </div>
              <div className='input-form'>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder='Last Name'/>
              </div>
              <div className='input-form'>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='E-mail'/>
              </div>
              <div className='input-form'>
                <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required placeholder='Street Name'/>
              </div>
              <div className='input-form'>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required placeholder='Postal Code'/>
              </div>
              <div className='input-form'>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder='City'/>
              </div>
              <button type="submit">Book Now</button>
            </form>
        </div>
      </main>
      <Footer />
    </div>


  )
}

export default Bookings
