import { useCalendar } from "../hooks/useCalendar"
import { Calendar as CalendarWidget } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import ModalTravelCalendar from "./ModalTravelCalendar"
import { AnimatePresence } from "framer-motion"

const Calendar = ({travelsData}) => {

  const {localizer, currentView, eventsCalendar, navigate, setCurrentView, setNavigate, handleModalTravel, modal, selectTravel, setModal, colors} = useCalendar(travelsData)

  return (
    <>
      <div className="w-full h-[900px] flex items-center justify-center flex-col p-5 lg:h-full">
        <CalendarWidget 
          className='w-full' 
          views={['month', 'day', 'agenda']} 
          date={navigate} 
          view={currentView} 
          onNavigate={(date) => {setNavigate(date)}} 
          onView={view => setCurrentView(view)} 
          defaultView='month' localizer={localizer}
          onSelectEvent={(event) => handleModalTravel(event)}
          events={eventsCalendar} 
          startAccessor="start" 
          endAccessor="end"
          messages={{
            today: 'Hoy',
            previous: 'Anterior',
            next: 'Siguiente',
            month: 'Mes',
            day: 'Día',
            date: 'Fecha',
            time: 'Hora',
            event: 'Viaje',
            noEventsInRange: 'No hay viajes este mes'
          }}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: event.color,
              borderRadius: '5px',
              color: 'white',
              border: 'none',
              padding: '2px 5px',
              cursor: 'pointer'
            }
          })}
        />
      </div>
      <AnimatePresence mode="wait">
        {modal && <ModalTravelCalendar selectTravel={selectTravel} setModal={setModal}/>}
      </AnimatePresence>
    </>
  )
}

export default Calendar
