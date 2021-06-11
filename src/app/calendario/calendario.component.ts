import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    // Ativa e define o cabeçalho do Calendario
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    // Define qual a visualização inicial do calendario (mes, semana, dia, lista)
    initialView: 'timeGridDay',
    // Habilita ou desabilita os fins de semana
    weekends: true,
    // Diz se pode ou não ser editável
    editable: true,
    // Diz se pode ou não ser selecionável
    selectable: true,
    // Cria um esboço em volta da celula q se está arrastando para demonstrar q o lugar q estava era "reservado"
    selectMirror: true,
    // 
    dayMaxEvents: true,
    expandRows: true,
    select: this.criarEvento.bind(this),
    eventClick: this.removerEvento.bind(this),
    // dateClick: this.selecionarDia.bind(this),
    locale: 'pt-br',
    buttonText: {
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      list: 'Lista',
      day: 'Dia'
    },
    dayHeaderFormat: {
      weekday: 'long'
    },
    slotMinTime: '09:00:00',
    slotMaxTime: '18:00:00',
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit'
    },
    selectOverlap: false,
    events: [
      { title: 'Reunião Agendada Automaticamente', date: '2021-06-11', backgroundColor: 'tomato', borderColor: 'white' },
      { title: 'Reunião Agendada Automaticamente', date: '2021-06-14', backgroundColor: 'tomato', borderColor: 'white' }
    ]


  };

  criarEvento(celulaSelecionada: DateSelectArg) {
    const titulo = "Compromisso Agendado Manualmente"
    const calendarioAPI = celulaSelecionada.view.calendar;

    if (titulo) {
      calendarioAPI.addEvent({
        id: '0987654321',
        title: titulo,
        start: celulaSelecionada.startStr,
        end: celulaSelecionada.endStr,
        allDay: celulaSelecionada.allDay
      });
    }
  }

  removerEvento(eventoSelecionado: EventClickArg) {
    if (eventoSelecionado.event.title) {
      eventoSelecionado.event.remove();
    }
  }

  selecionarDia(celulaSelecionada: any) {
    alert('date click! ' + celulaSelecionada.dateStr)
  }

}
