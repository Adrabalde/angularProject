import {Component, OnInit} from '@angular/core';
import {Student} from '../../../models/student';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../../services/student/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  private student: Student;

  putStudent(notes) {
    if (notes === '') {
      this.student.notes = ' ';
    } else {
      this.student.notes = notes;
    }
    this.studentService.putStudent(this.student);
  }

  constructor(private route: ActivatedRoute, public studentService: StudentService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentById(id).subscribe(value => this.student = value);
  }

}
