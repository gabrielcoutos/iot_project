import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {DweetSettingsEnum} from 'src/enum/DweetSettingsEnum'
import Dweet from 'src/models/Dweet';
import With from 'src/models/With';
import Content from 'src/models/Content';

@Injectable({
  providedIn: 'root'
})
export class DweetService {
  private dweetioApiUrl = DweetSettingsEnum.DWEET_URL_GET_ALL;
  private thingName = DweetSettingsEnum.DWEET_THING_NAME;

  constructor (private http: HttpClient) {}
   
  loadLastDweets(){
    return this.http.get(this.dweetioApiUrl + this.thingName.toString())
  }

  private formatDate(date: any): string {
    let originalDate: string = date;
    var dateParse = originalDate.slice(0, 10)
    return dateParse
  }

  private formatTime(date: any): string {
    let originalDate: string = date;
    var dateParse = originalDate.slice(11, 19)
    return dateParse
  }

  preencherDweet(data: any): Dweet {
    let dweet: Dweet
    let _withs: Array<With>
    let _date: string
    let _time: string

    _withs = new Array<With>()

    for (let _with of data.with) {
      let tempContent:Content
      tempContent=new Content(_with.content.temperatura);

      _date=this.formatDate(_with.created)
      _time=this.formatTime(_with.created)

      let tempWith:With
      tempWith=new With(_with.thing,_with.created,tempContent,_date,_time)
      _withs.push(tempWith)
    }
    dweet = new Dweet(data.this, data.by, data.the, _withs)

    return dweet
  }
}
