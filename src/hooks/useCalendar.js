import { dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import es from 'date-fns/locale/es'
import { useEffect, useState } from 'react'



export const useCalendar = (travelsData) => {

  const locales = {
    'es': es
  }
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: (date) => startOfWeek(date, { locale: es }),
    getDay,
    locales
  })

  const [currentView, setCurrentView] = useState('month')
  const [eventsCalendar, setEventCalendar] = useState([])
  const [navigate, setNavigate] = useState(new Date())
  const [modal, setModal] = useState(false)
  const [selectTravel, setSelectTravel] = useState({})

  const handleModalTravel = (event) => {
    const selectedTravel = travelsData.filter(travel => travel.key === event.key)
    setSelectTravel(selectedTravel[0])
    setModal(true)
  }

  useEffect(() => {
    const events = travelsData.map(travel => ({
      key: travel?.key,
      title: travel?.general?.travelDestination, 
      start: new Date(travel?.general?.travelDepartureDate),
      end: new Date(travel?.general?.travelReturnDate),
      color: "#9487F5"
    }))
    setEventCalendar(events)
  }, [travelsData])

  
  return {
    localizer,
    currentView,
    eventsCalendar,
    navigate,
    modal,
    selectTravel,
    setCurrentView,
    setNavigate,
    handleModalTravel,
    setModal
  }
}