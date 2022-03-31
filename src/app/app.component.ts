import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Greg Doud";
  contact: string = "4900 Parkway Dr. | Mason, OH 45040 | gdoud@maxtrain.com | 513-322-8888";
  technologies = [
    { a:"Git", b:"GitHub", c:"SQL", d:"C#" },
    { a:"EF", b:"WebApi", c:"Java", d:"Spring" },
    { a:"HTML", b:"CSS", c:"Bootstrap", d:"Javascript" },
    { a:"jQuery", b:"Typescript", c:"Angular", d:"" },
  ];

}
