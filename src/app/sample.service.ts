import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './home/model/model';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }
getMusic(){
return this.http.get<Company[]>('https://api.openbrewerydb.org/breweries')

}


}
