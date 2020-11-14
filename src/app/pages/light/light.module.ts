import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightPageRoutingModule } from './light-routing.module';

import { LightPage } from './light.page';
import {ChartModule} from 'angular2-highcharts';
import * as highcharts from 'highcharts'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightPageRoutingModule,
    ChartModule.forRoot(highcharts)
  ],
  declarations: [LightPage]
})
export class LightPageModule {}
