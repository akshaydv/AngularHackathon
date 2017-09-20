import { Submit } from './submit';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { HackathonService } from './hackathon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  sub: Subscription;
  constructor(private hackathon: HackathonService) {}
  score = 0;
  public ticks = 0;
  ngOnInit() {
    this.hackathon.colors = this.hackathon.shuffle(['white', '#acacac', '#e3e3e3', '#5a5a5a']);
    console.log(this.hackathon.colors);
  }
  onClick(color) {
    if (color === 'white' && this.hackathon.finish && this.hackathon.score) {
      this.score++;
    }
    console.log(this.score);
  }
  // tslint:disable-next-line:one-line

}



