import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { WeatherData } from "../models/weather.model";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  weatherData = new Subject<WeatherData>();
  isError = new Subject<boolean>();

  getWeatherData(city: string) {
    this.http
      .get<WeatherData>(environment.weatherUrl, {
        headers: new HttpHeaders()
          .set(
            environment.XRapidAPIHostHeaderName,
            environment.XRapidAPIHostHeaderValue
          )
          .set(
            environment.XRapidAPIKeyHeaderName,
            environment.XRapidAPIKeyheaderVlaue
          ),
        params: new HttpParams().set("q", city),
      })
      .subscribe(
        (data) => {
          this.weatherData.next(data);
          this.isError.next(false);
        },
        (error) => {
          this.isError.next(true);
          setTimeout(() => {
            this.isError.next(false);
          }, 3000);
        }
      );
  }

  searchData(name: string) {
    this.getWeatherData(name);
  }
}
