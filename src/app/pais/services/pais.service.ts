import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  private fields: string = 'name;capital;flag;currencies;translations;nativeName;altSpellings;region;subregion;population;numericCode;alpha3Code;alpha2Code'

  get httpSimpleParams(){
    return new HttpParams().set('fields', 'name;flag;translations;population;alpha2Code');
  }
  

  constructor(private http: HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{    
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpSimpleParams});
  }
  
  buscarCapital(termino:string): Observable<Country[]>{    
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpSimpleParams});
  }
  
  buscarRegion(termino:string): Observable<Country[]>{    
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpSimpleParams});
  }
  
  getPaisPorAlpha(id:string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}?fields=${this.fields}`;
    return this.http.get<Country>(url);
  }
}
