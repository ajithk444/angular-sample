import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent {

  constructor() { }

  createProjectFormGroup = new FormGroup({
    name: new FormControl(''),
    isActive: new FormControl('')
  })
}
