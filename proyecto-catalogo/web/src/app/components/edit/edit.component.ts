import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public saveProject;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.title = "Editar Proyecto";
    this.url = Global.url;
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

  onSubmit(form) {
    this._projectService.updateProject(this.project).subscribe(
      response => {
        this.status = "failed";
        if (response.projectUpdate) {
          if (this.filesToUpload) {
            //Subir imagen
            this._uploadService.makeFileRequest(Global.url + "/upload-image/" + response.projectUpdate._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                console.log(result);

                this.status = "success"
                this.saveProject = result.project;                
              });
          } else {
            this.status = "success"
            this.saveProject = response.projectUpdate;
          }
        }

        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    console.log(fileInput);

    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
