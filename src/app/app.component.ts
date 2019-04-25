import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let endpoint = `http://api.apixu.com/v1/current.json?key=6be977757c8d4ff1b85173710192404&q=`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather Clash';
  winner = '...';
  city1 = '';
  city2 = '';
  weatherComp = [];
  weather1Points = 0;
  weather2Points = 0;
  private weather1 = [];
  private weather2 = [];
  constructor(private http: HttpClient) {}

  get_weather1(city: string): void {
    let city1 = city;
    this.city1 = city;
    console.log(city1);
    this.http.get(`${endpoint + city1}`).subscribe((res: any[]) => {
      console.log(res);
      this.weather1 = res;

      console.log('w1', this.weather1);
      if (
        this.weather1.current.humidity >= 51 &&
        this.weather1.current.humidity <= 71
      ) {
        this.weather1Points += 20;
      } else if (
        this.weather1.current.humidity <= 50 &&
        this.weather1.current.humidity >= 30
      ) {
        this.weather1Points -= 20;
      } else if (
        this.weather1.current.humidity <= 29 &&
        this.weather1.current.humidity >= 0
      ) {
        this.weather1Points -= 30;
      } else if (this.weather1.current.humidity > 71) {
        this.weather1Points += 40;
      }
      if (this.weather1.current.precip_mm > 0) {
        this.weather1Points += 20;
      }
      if (this.weather1.current.temp_f <= 30) {
        this.weather1Points += 40;
      } else if (
        this.weather1.current.temp_f > 31 &&
        this.weather1.current.temp_f <= 50
      ) {
        this.weather1Points += 30;
      } else if (
        this.weather1.current.temp_f > 51 &&
        this.weather1.current.temp_f <= 60
      ) {
        this.weather1Points += 20;
      } else if (
        this.weather1.current.temp_f > 61 &&
        this.weather1.current.temp_f <= 70
      ) {
        this.weather1Points += 10;
      } else if (
        this.weather1.current.temp_f > 71 &&
        this.weather1.current.temp_f <= 80
      ) {
        this.weather1Points -= 10;
      } else if (this.weather1.current.temp_f > 81) {
        this.weather1Points += 10;
      }
      console.log('1', this.weather1Points);
    });
  }
  get_weather2(city: string): void {
    let city2 = city;
    this.city2 = city;
    console.log(city2);
    this.http.get(`${endpoint + city2}`).subscribe((res: any[]) => {
      console.log(res);
      this.weather2 = res;
      console.log('w2', this.weather2);
      if (
        this.weather2.current.humidity >= 51 &&
        this.weather2.current.humidity <= 71
      ) {
        this.weather2Points += 20;
      } else if (
        this.weather2.current.humidity <= 50 &&
        this.weather2.current.humidity >= 30
      ) {
        this.weather2Points -= 20;
      } else if (
        this.weather2.current.humidity <= 29 &&
        this.weather2.current.humidity >= 0
      ) {
        this.weather2Points -= 30;
      } else if (this.weather2.current.humidity > 71) {
        this.weather2Points += 40;
      }
      if (this.weather2.current.precip_mm > 0) {
        this.weather2Points += 20;
      }
      if (this.weather2.current.temp_f <= 30) {
        this.weather2Points += 40;
      } else if (
        this.weather2.current.temp_f > 31 &&
        this.weather2.current.temp_f <= 50
      ) {
        this.weather2Points += 30;
      } else if (
        this.weather2.current.temp_f > 51 &&
        this.weather2.current.temp_f <= 60
      ) {
        this.weather2Points += 20;
      } else if (
        this.weather2.current.temp_f > 61 &&
        this.weather2.current.temp_f <= 70
      ) {
        this.weather2Points += 10;
      } else if (
        this.weather2.current.temp_f > 71 &&
        this.weather2.current.temp_f <= 80
      ) {
        this.weather2Points -= 10;
      } else if (this.weather2.current.temp_f > 81) {
        this.weather2Points += 10;
      }
      console.log('2', this.weather2Points);
    });
  }
  compare(): void {
    console.log('1', this.weather1Points);
    console.log('2', this.weather2Points);
    if (this.weather1Points == this.weather2Points) {
      this.winner = 'Its A Tie!';
    } else if (this.weather1Points > this.weather2Points) {
      this.winner = this.city2;
    } else {
      this.winner = this.city1;
    }
  }
}
