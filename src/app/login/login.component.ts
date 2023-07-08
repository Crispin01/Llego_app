import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router){

  }

  enviar( f:NgForm ) {
    console.log('email',f.form.value.email);
    console.log('password',f.form.value.password);

      let url_login = 'http://localhost:8000/api/usuario/login';

      this.http.post(url_login, {
        'correo' : f.form.value.email,
        'contraseña' : f.form.value.password
      }).subscribe(
        ( data : any ) => {
          console.log(data);
          if (data === 0) {
            alert("El usario y/o contraseña no existe");
          }
          else {
            alert("Login correcto!");
            this.router.navigateByUrl('listado');
          }
        }
      )

  }
}
