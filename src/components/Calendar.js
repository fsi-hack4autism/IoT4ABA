import React from 'react';
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';

function Calendar() {
  const events = [
    { id: '0', title: 'event 1', start: new Date(), end: new Date(new Date() + 60000 * 120) },
    { id: '1', title: 'event 2', start: new Date(new Date() + 60000 * 30) }
  ];

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
              click: function() {
                alert('clicked the custom button!');
              }
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
    </div>
  );
}
export default Calendar;