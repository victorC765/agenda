"use client"
import { AiFillCalendar } from "react-icons/ai";
import FullCalendar from '@fullcalendar/react'
import dayGripPlugin from '@fullcalendar/daygrid';
import interactionPlugin, {Draggable, DropArg} from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'
export default function Home() {
  return (
    <main className="m-14">
      <div className="w-90 ">
      <h1 className='flex text-2xl justify-center p-2 w-80 rounded-sm bg-pink-600'>Agenda proyect
      <AiFillCalendar />
      </h1>
      </div>
      <div>
      <FullCalendar
      plugins={[
        dayGripPlugin,
        interactionPlugin,
        timeGridPlugin
      ]}
      headerToolbar={{
        start: 'dayGridMonth,timeGridWeek,timeGridDay custom1',
        center: 'title',
        end: 'custom2 prevYear,prev,next,nextYear'
      }}
      event={{}}
      nowIndicator={true}
      editable={true}
      droppable={true}
      selectable={true}
      selectMirror={true}
      //dateClick={{}}
     // drop={}
     // eventClick={}
      />
      </div>
    </main>
  );
}
