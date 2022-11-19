import { Component, OnInit } from "@angular/core";
import { WeatherData } from "src/app/models/weather.model";
import { WeatherService } from "src/app/services/weather.service";

@Component({
  selector: "app-upper",
  templateUrl: "./upper.component.html",
  styleUrls: ["./upper.component.css"],
})
export class UpperComponent implements OnInit {
  hot: boolean = true;
  upperWeatherData?: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData("delhi");
    this.weatherService.weatherData.subscribe((data) => {
      this.upperWeatherData = data;
      this.hot = this.upperWeatherData.current.temp_c < 15 ? false : true;
    });
  }
}
