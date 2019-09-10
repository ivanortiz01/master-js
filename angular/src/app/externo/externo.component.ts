import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userID: any;
  public fecha: any;
  public newUser: any;
  public saveUser:any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userID = 1;
    this.newUser = {
      "name": "",
      "job": ""
    }
  }

  ngOnInit() {
    this.fecha = new Date(2019,8,29);

    this.cargaUsuario();
  }

  cargaUsuario() {
    this.user = false;
    this._peticionesService.getUSer(this.userID).subscribe(
      result => {
        console.log(result);
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form) {
    this._peticionesService.addUser(this.newUser).subscribe(
      response => {
        console.log(response);
        this.saveUser = response;
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );

  }
}
