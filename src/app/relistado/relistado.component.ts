import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relistado',
  templateUrl: './relistado.component.html',
  styleUrls: ['./relistado.component.scss']
})
export class RelistadoComponent {

  constructor(private http: HttpClient, private router: Router){

  }

   enviar( f:NgForm ) {
  //   // Validamos que los campos lleguen
  //   console.log('nombre',f.form.value.nombre);
  //   console.log('apellido',f.form.value.apellido);
  //   console.log('email',f.form.value.email);
  //   console.log('password',f.form.value.password);

      let url_registro = 'http://localhost:8000/api/evento/registrar';

      this.http.post(url_registro, {
        'nombre' : f.form.value.nombre,
        'descripcion' : f.form.value.descripcion,
        'fecha' : f.form.value.fecha,
        'hora' : f.form.value.hora,
        'direccion' : f.form.value.direccion,
        'referencia' : f.form.value.referencia,
        'organizador' : f.form.value.organizador,
        'requisitos' : f.form.value.requisitos,
        'motivo' : f.form.value.motivo,
        'costo_total' : f.form.value.costo_total,
      }).subscribe(
          ( data : any ) => {
            console.log(data);
              alert("Se registro correctamente!");
              this.router.navigateByUrl('/');
        }
      )

  }

}
