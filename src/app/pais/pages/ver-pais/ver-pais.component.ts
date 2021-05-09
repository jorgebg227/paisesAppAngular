import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [`.monedas {font-size:1em; font-weight:100}`]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorAlpha(id) ),
        tap( console.log )
      )
      .subscribe( pais =>  this.pais=pais );
  }

}
