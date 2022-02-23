import {NgModule} from '@angular/core';
import {TicketListComponent} from './tickets/ticket-list';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from './students/student-list/student-list.component';
import {StudentFormComponent} from './students/student-form/student-form.component';
import {TicketFormComponent} from './tickets/ticket-form';
import {StudentDetailComponent} from './students/student-detail/student-detail.component';

const routes: Routes = [
  {path: 'tickets', component: TicketListComponent},
  {path: 'students/:id', component: StudentDetailComponent},
  {path: 'students', component: StudentListComponent},
  {path: 'ticket-list', component: TicketListComponent},
  {path: 'student-form', component: StudentFormComponent},
  {path: 'ticket-form', component: TicketFormComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
