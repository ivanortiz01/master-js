import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public saveProject;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Crear Proyecto";
    this.project = new Project("", "", "", "", new Date().getFullYear(), "", "");
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.project);

    //subir imagen
    this._projectService.saveProject(this.project).subscribe(
      response => {
        this.status = "failed";
        if (response.project) {
          if (this.filesToUpload) {
          //Subir imagen
          this._uploadService.makeFileRequest(Global.url + "/upload-image/" + response.project._id, [], this.filesToUpload, 'image')
            .then((result: any) => {
              console.log(result);

              this.status = "success"
              this.saveProject = result.project;
              form.reset();              
            });          
          } else {
            this.status = "success"
              this.saveProject = response.project;
              form.reset();           
          }
        }
        
        console.log(response);
      },
      error => {
        console.error(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    console.log(fileInput);

    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
