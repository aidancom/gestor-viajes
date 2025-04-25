import { useCalendar } from "../hooks/useCalendar"
import { Calendar as CalendarWidget } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const Calendar = ({travelsData}) => {

  const {localizer, currentView, eventsCalendar, navigate, setCurrentView, setNavigate, handleModalTravel} = useCalendar(travelsData)

  return (
    <div className="w-full h-[900px] flex items-center justify-center flex-col p-5 lg:h-full">
      <CalendarWidget 
        className='w-full' 
        views={['month', 'day', 'agenda']} 
        date={navigate} 
        view={currentView} 
        onNavigate={(date) => {setNavigate(date)}} 
        onView={view => setCurrentView(view)} 
        defaultView='month' localizer={localizer}
        onSelectEvent={handleModalTravel}
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
      />
    </div>
  )
}

export default Calendar
