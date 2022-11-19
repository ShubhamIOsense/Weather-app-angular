import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UpperComponent } from "./components/upper/upper.component";
import { LowerComponent } from "./components/lower/lower.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { WeatherService } from "./services/weather.service";
import { HttpClientModule } from "@angular/common/http";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UpperComponent,
    LowerComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
