import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../models/student';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private url = 'http://localhost:9428';
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject([]);
  private listStudent: Student[];

  constructor(private http: HttpClient) {
  }

  getStudent() {
    this.http.get<Student[]>(`${this.url}/api/students`).subscribe(value => {
      this.listStudent = value;
      this.students$.next(this.listStudent);
      console.log(this.listStudent);
    });
  }

  deleteStudent(id) {
    this.http.delete(`${this.url}/api/students/${id}`).subscribe(value => {
      this.getStudent();
      console.log('deleted');
    });
  }

  addStudent(student: Student) {
    this.http.post(`${this.url}/api/students`, student).subscribe(value => {
      this.getStudent();
      console.log('added');
    });
  }

  putStudent(student: Student) {
    this.http.put(`${this.url}/api/students/${student.id}`, student).subscribe(value => {
      console.log(value);
    });
  }

  getStudentById(id) {
    return this.http.get(`${this.url}/api/students/${id}`);
  }
}
