import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-4';

  public str: string = "";

  public obj = [{ name: "viren", date: new Date("03-25-2022") }, { name: "karan", date: new Date("08-12-2020") }, { name: "raj", date: new Date("03-10-2019") }]

  public header = Object.keys(this.obj[0])
}
