import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contactoUsuario';
import { $ } from 'protractor';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public contactoUsuario: ContactoUsuario;

  constructor() { 
    this.contactoUsuario = new ContactoUsuario('', '', '', '', '');
  }

  ngOnInit() {        
  }

  onSubmit(form) {    
    console.log("Evento submit ejecutado");
    console.log(this.contactoUsuario);
    form.reset();
  }

}
