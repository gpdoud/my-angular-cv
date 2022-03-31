import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Greg Doud";
  contact: string = "4900 Parkway Dr. | Mason, OH 45040 | gdoud@maxtrain.com | 513-322-8888";
  technologies: string[] = [
    "Git", "GitHub", "SQL", "C#", "EF", "WebApi", "Java", "Spring", 
    "HTML", "CSS", "Bootstrap", "Javascript", "jQuery", 
    "Typescript", "Angular"
  ];
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
}
