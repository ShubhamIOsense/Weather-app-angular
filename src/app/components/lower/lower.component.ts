import { Component, OnInit } from "@angular/core";
import {
  faCloud,
  faTemperature2,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { WeatherData } from "src/app/models/weather.model";
import { WeatherService } from "src/app/services/weather.service";

@Component({
  selector: "app-lower",
  templateUrl: "./lower.component.html",
  styleUrls: ["./lower.component.css"],
})
export class LowerComponent implements OnInit {
  minTemp = faTemperature2;
  maxTemp = faCloud;
  humidity = faWater;
  wind = faWind;

  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.weatherData.subscribe((data) => {
      this.weatherData = data;
      console.log(data);
    });
  }

  farToC(temp: number) {
    return (temp - 32) / 1.8;
  }
}
