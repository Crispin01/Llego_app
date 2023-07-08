import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  constructor(private http: HttpClient, private router: Router){

  }

  enviar( f:NgForm ) {
    // Validamos que los campos lleguen
    console.log('nombre',f.form.value.nombre);
    console.log('apellido',f.form.value.apellido);
    console.log('email',f.form.value.email);
    console.log('password',f.form.value.password);

      let url_registro = 'http://localhost:8000/api/usuario/registrar';

      this.http.post(url_registro, {
        'nombre' : f.form.value.nombre,
        'apellido' : f.form.value.apellido,
        'correo' : f.form.value.email,
        'contraseña' : f.form.value.password,
        'fecha_nacimiento' : f.form.value.fecha_nacimiento,
        'telefono' : f.form.value.telefono,
        'plata' : f.form.value.plata,
        'ciudad' : f.form.value.ciudad,
        'yape' : f.form.value.yape,
        'plin' : f.form.value.plin,
        'genero' : f.form.value.genero
      }).subscribe(
          ( data : any ) => {
            console.log(data);
              alert("Se registro correctamente!");
              this.router.navigateByUrl('/');
        }
      )

  }

}
