import {Injectable} from '@angular/core';
import {Ticket} from '../../models/ticket';
import {BehaviorSubject} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../models/student';
import {tick} from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private ticketList: Ticket[];
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);
  private url = 'http://localhost:9428';

  constructor(private http: HttpClient) {
  }

  getTicket() {
    this.http.get<Ticket[]>(`${this.url}/api/tickets`).subscribe(value => {
      this.ticketList = value;
      this.tickets$.next(this.ticketList);
      console.log(this.ticketList);
    });
  }

  archiveTicket(ticket: Ticket) {
    console.log(ticket);
    this.http.put(`${this.url}/api/tickets/${ticket.id}`, {archived: true}).subscribe(value => {
      this.getTicket();
      console.log(value);
    });
  }

  addTicket(ticket: Ticket) {
    this.http.post(`${this.url}/api/tickets`, ticket).subscribe(value => {
      this.getTicket();
      console.log('added');
    });
  }
}
