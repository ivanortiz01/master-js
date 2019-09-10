import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  @Input('etiquetas') captions: boolean;
  @Output() getAuthor = new EventEmitter();
  
  public author: any;

  constructor() { 
    this.author = {
      "name": "Pablito",
      "lastname": "Perez",
      "website": "blabla.es",
      "youtube": "pablito5644"
    }
  }

  ngOnInit() {
    $("#logo").click(function (e) {
      e.preventDefault();
      $("header").css("background", "green")
        .css("height", "150px");
    });

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }

  sendEvent(event) {
    console.log("evento desde hijo:");
    console.log(event);
    this.getAuthor.emit(this.author);
  }

}
