import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {

  tabs = {
    education : true,
    work : false
  }

  services_modal: boolean;

  constructor() {
    this.services_modal = false;
  }

  ngOnInit() {
  }

  modalOpened(){
    this.services_modal = !this.services_modal;
  }

}
