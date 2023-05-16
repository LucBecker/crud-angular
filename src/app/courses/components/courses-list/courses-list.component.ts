import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { __values } from 'tslib';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[] = [];
  @Output() add =  new EventEmitter(false);
  @Output() edit =  new EventEmitter(false);
  @Output() remove =  new EventEmitter(false);

  readonly displayedColumns = ['name', 'category','actions'];

  constructor(){ }


  ngOnInit(): void {
  }

  adicionarCurso(){
    this.add.emit(true);
  }

  editarCurso(course: Course){
    this.edit.emit(course);
  }

  OnDelete(course: Course){
    this.remove.emit(course);
  }

}
