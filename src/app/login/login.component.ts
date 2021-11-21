import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

 interface Usuario{
   codigo:string;
   contrasenia:string;
 }


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formLogin: any;
  titulo = 'Login';


  constructor(private fb: FormBuilder) {

    this.formLogin = this.fb.group({
      codigo: ['', Validators.required],
      contrasenia: ['', Validators.required],
    });
}




  ngOnInit(): void {}

  mostrarInfo():void{
  const credenciales =  this.formLogin.getRawValue();
  alert(JSON.stringify(credenciales));
  }
}


