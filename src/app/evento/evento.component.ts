import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent {

  public evento : any;

  constructor(private http: HttpClient, private route : ActivatedRoute) {
    //Esto es para capturar la variable ID
    let id = this.route.snapshot.params['id'];
    console.log(id);
    //Tengo mi variable url_eventos
    let url_evento = 'http://localhost:8000/api/evento/detalle/'+id;
    //realizamos una consulta get para traer la url_eventos =http.get->TRAER ALGO
    this.http.get(url_evento).subscribe(
      ( data : any ) => {
        console.log(data);
        this.evento = data;
      }
    )
  }   

}
