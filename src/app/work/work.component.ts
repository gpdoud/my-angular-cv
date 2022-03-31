import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  workHistories = [
    {
      name: "MAX Technical Training",
      role: "Sr. Instructor",
      location: "Mason, OH",
      duration: "May 2017 - present",
      accomplishments: [
        "Taught full-stack boot camp",
        "Taught Angular"
      ]
    },
    {
      name: "The Iron Yard",
      role: "Instructor",
      location: "Greenville, SC",
      duration: "July 2016 - May 2017",
      accomplishments: [
        "Taught full-stack boot camp"
      ]
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}