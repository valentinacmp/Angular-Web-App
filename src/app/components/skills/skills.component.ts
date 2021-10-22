import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills_opened = true;

  showSkills = {
    skills_1 : true,
    skills_2 : false
  }

  constructor() {
    console.log(this.showSkills)
  }

  ngOnInit() {
  }

  openSkills(opened){
    this.skills_opened = opened;
    console.log('skill' , this.skills_opened);
  }

}
