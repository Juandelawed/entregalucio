import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablasService {

  constructor() { }

  roles = [
    {
      id : 1,
      nombreRol : "estudiante",
      estado : "activo"
    }
  ]
  usuarios = [
    {
      idUser: 10,
      nombre: "uribe",
      contraseña: "1234",
      rolAsignado: 1
    }
  ]
  perfiles = [
      {
        idPerfil : 20,
        idUser: 10,
        edad: "21",
        FotoAvatar : "assets/img/usuario-sin-foto"
      }
  ]

  public getRoles(){
    return this.roles
  }

  public getUsuario(){
    return this.usuarios
  }

  public getPerfiles(){
    return this.perfiles
  }

  agregarRol(rol: any){
    this.roles.push(rol)
  }

  agregarUsaurio(user: any){
    this.usuarios.push(user)
  }

  agregarPerfil(perfil : any){
    this.perfiles.push(perfil)
  }

}
