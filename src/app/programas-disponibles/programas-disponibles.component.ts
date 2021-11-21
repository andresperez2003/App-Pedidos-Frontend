import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-programas-disponibles',
  templateUrl: './programas-disponibles.component.html',
  styleUrls: ['./programas-disponibles.component.scss']
})
export class ProgramasDisponiblesComponent implements OnInit {
rutazRaiz='localhost::3000/'

  constructor(private http: HttpClient) {
    this.requestgetProgramas().subscribe(
{
  next: (v)=>{
    alert('Gracias, ya tengo los datos');
  },
  error:(e)=>{
alert('Uy, un error');
  },
  complete: ()=>{
alert('Se completo');
  }
}
    );
  }

  ngOnInit(): void {
  }

  requestgetProgramas():Observable<any>{
    return this.http.get(this.rutazRaiz+'programa-academicos')

  }


}
