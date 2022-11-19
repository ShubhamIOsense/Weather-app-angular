import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { WeatherService } from "src/app/services/weather.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  // cityName?: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  onSearch(form: NgForm) {
    console.log(form.value);
    this.weatherService.searchData(form.value.city_name);
  }
}
