import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { MatTableDataSource } from '@angular/material';

import { Projects } from '../interface/Projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  dislayColumns: string[] = ['id', 'projectName', 'isActive'];
  dataSource: any;

  constructor(private service: ProjectService, private router: Router) { }

  ngOnInit() {
    this.service.get().subscribe((res) => {
      this.dataSource = new MatTableDataSource<Projects>(res as Projects[]);
    });
  }

  addProject() {
    this.router.navigate(['createproject'])
  }
}
