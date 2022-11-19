import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-upper",
  templateUrl: "./upper.component.html",
  styleUrls: ["./upper.component.css"],
})
export class UpperComponent implements OnInit {
  hot: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
