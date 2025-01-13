import { Injectable } from '@angular/core';
import { Perfil } from '../interfaces/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor() { }
  

  guardarDatos(perfil: Perfil){
    localStorage.setItem('perfil',JSON.stringify (perfil));
  }

  leerDatos(){
    const perfil = localStorage.getItem('perfil');
    return perfil ? JSON.parse(perfil) : undefined;
  }
}
