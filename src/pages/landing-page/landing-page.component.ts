import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [HomeComponent]
})
export class LandingPageComponent implements OnInit {
  title = 'Welcome to Dev Mappouras Website';

  constructor() { }

  ngOnInit() {
  }

}
