import React from 'react'
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const path = location.pathname;

  let title = 'Ventixe';

  if (path === '/') {
    title = 'Events';
  } else if (path.startsWith('/events/booking')) {
    title = 'Booking';
  } else if (path.startsWith('/events/')) {
    title = 'Event Details';
  }

  return (
    <header>
      {title}
    </header>
  );
}

export default Header
