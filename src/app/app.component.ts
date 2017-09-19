import { TimerComponent } from './timer/timer.component';
import { Component, OnInit } from '@angular/core';
import { HackathonService } from './hackathon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  constructor(private hackathon: HackathonService) {}
  colors;
  score = 0;
  ngOnInit() {
    this.colors = this.hackathon.shuffle(['white', '#acacac', '#e3e3e3', '#5a5a5a']);
    console.log(this.colors);
  }
  onClick(color) {
    if (color === 'white' && this.hackathon.finish) {
      this.score++;
    }
    console.log(this.score);
  }


}
