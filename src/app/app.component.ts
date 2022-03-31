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


}
