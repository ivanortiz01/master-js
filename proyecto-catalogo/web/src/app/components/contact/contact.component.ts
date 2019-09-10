import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public widthToSlider: any;
  public captions: boolean
  public author : any;

  @ViewChild('textos', {static: false}) textos;

  constructor() {
    this.captions = false;
   }

  ngOnInit() {
      // var opcionClasica = document.querySelector("#texto").innerHTML;
      // console.log(opcionClasica);

      // console.log(this.textos);
  }  

  cargarSlider() {
    this.widthToSlider = this.widthSlider;
  }

  resetearSlider() {
    this.widthToSlider = false;
  }

  getAuthor(event) {
    console.log("evento desde padre:");
    console.log(event);

    this.author = event;
  }

}
