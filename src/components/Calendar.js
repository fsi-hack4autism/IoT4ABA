import React from 'react';
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';
import NewEventModal from './NewEventModal';

function Calendar() {
  const events = [
    { id: '0', title: 'event 1', start: new Date(), end: new Date(new Date() + 60000 * 120) },
    { id: '1', title: 'event 2', start: new Date(new Date() + 60000 * 30) }
  ];
  const [open, setOpen] = React.useState(false);

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <div>
      <div className="header-padding"></div>
      <div className="calendar-padding">
        <FullCalendar
          defaultView="timeGridWeek"
          plugins={[ timeGridPlugin ]}
          events={ events }
          allDaySlot={ false }
          contentHeight="auto"
          customButtons={{
            addEvent: {
              text: 'New Event',
              click: () => { setOpen(true) }
            }
          }}
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'addEvent'
          }}
          buttonText={{ today: 'Today' }}
        />
      </div>
      <NewEventModal
        open={ open }
        closeModal={ closeModal }
      ></NewEventModal>
    </div>
  );
}
export default Calendar;