import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  providers: [LoaderService],
  imports: [CommonModule]
})
export class SpinnerComponent implements OnInit {

  constructor(
    public loader: LoaderService
  ) { }

  ngOnInit(): void {
  }

  //global spinner source:
  //https://danielk.tech/home/angular-how-to-add-a-loading-spinner

}
