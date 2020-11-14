import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HumidityPageRoutingModule } from './humidity-routing.module';

import { HumidityPage } from './humidity.page';
import {ChartModule} from 'angular2-highcharts';
import * as highcharts from 'highcharts'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HumidityPageRoutingModule,
    ChartModule.forRoot(highcharts)
  ],
  declarations: [HumidityPage]
})
export class HumidityPageModule {}
