import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  education = [
    {
      school: "Mt. St. Mary Seminary",
      degree: "M Cert LPM",
      gradyear: "2016"
    },
    {
      school: "University of Cincinnati",
      degree: "BS IPS",
      gradyear: "1985"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
