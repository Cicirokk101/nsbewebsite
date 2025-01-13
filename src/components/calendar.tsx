'use client';

import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { isSameDay } from 'date-fns';
import { styled } from '@mui/material/styles';

interface Event {
  date: Date;
  title: string;
  description: string;
  time: string;
  location: string;
}

// Create styled components for custom sizing
const StyledDateCalendar = styled(DateCalendar)({
  width: '400px',
  height: '450px',
  '& .MuiDayCalendar-weekDayLabel': {
    fontSize: '1rem',
  },
  '& .MuiPickersDay-root': {
    fontSize: '1rem',
    width: '40px',
    height: '40px',
  }
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#166534',
    },
    secondary: {
      main: '#ffc451',
    },
  }
});

const events: Event[] = [
  {
    date: new Date(2024, 1, 14), // February 14, 2024
    title: 'NSBE General Meeting',
    description: 'Monthly general body meeting',
    time: '6:00 PM',
    location: 'ECSW 1.355'
  },
  {
    date: new Date(2024, 1, 20), // February 20, 2024
    title: 'Resume Workshop',
    description: 'Learn how to create an effective resume',
    time: '5:30 PM',
    location: 'ECSW 1.315'
  },
];

function CustomDay(props: PickersDayProps<Date>) {
  const { day, ...other } = props;
  const hasEventOnDay = events.some(event => isSameDay(event.date, day));

  return (
    <div className="relative">
      <PickersDay 
        day={day} 
        {...other} 
        sx={{ 
          fontSize: '1rem',
          width: '40px',
          height: '40px'
        }}
      />
      {hasEventOnDay && (
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-600 rounded-full" />
      )}
    </div>
  );
}

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      // Find event for the selected date
      const foundEvent = events.find(event => isSameDay(event.date, date));
      setSelectedEvent(foundEvent || null);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="relative bg-white rounded-lg shadow-lg p-6">
          <div className="flex gap-6">
            <StyledDateCalendar
              value={selectedDate}
              onChange={handleDateChange}
              slots={{
                day: CustomDay
              }}
            />
            
            {/* Event Details Panel */}
            <div className="w-72 border-l pl-6">
              <div className="mb-4">
                <h3 className="font-semibold text-green-600 text-lg">
                  {selectedDate?.toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </h3>
              </div>
              
              {selectedEvent ? (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">{selectedEvent.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{selectedEvent.description}</p>
                  <div className="text-sm text-gray-500">
                    <p className="mb-1">⏰ {selectedEvent.time}</p>
                    <p>📍 {selectedEvent.location}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">No events scheduled for this date</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default EventCalendar;