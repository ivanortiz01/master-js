import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: Project;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getProject(id);
    });
  }

  getProject(id) {
    this._projectService.getProject(id).subscribe(
      response => {
        console.log(response);

        this.project = response.project;
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteProject(id) {
    this._projectService.deleteProject(id).subscribe(
      response => {
        console.log(response.project);
        if(response.projectRemoved) {
          this._router.navigate(["/proyectos"]);
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  setConfirm(confirm) {
    this.confirm = confirm;
  }
}
