import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  public eventos : any;

  constructor(private http: HttpClient) {
    //Tengp mi variable url_eventos
    let url_eventos = 'http://localhost:8000/api/evento/listar';
    //realizamos una consulta get para traer la url_eventos =http.get->TRAER ALGO
    this.http.get(url_eventos).subscribe(
      ( data : any ) => {
        console.log(data);
        this.eventos = data;
      }
    )
  }   
}
