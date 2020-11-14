import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['home'])
  }

}
