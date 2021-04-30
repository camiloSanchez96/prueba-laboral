import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/nebular/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public rol:User;
  public placeholder:User;

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'FAF SA' },
    { name: 'Bob Kelso', title: 'Tolero SAS' },
    { name: 'Janitor', title: 'Cantor SAS' },
    { name: 'Perry Cox', title: 'Kantar' },
    { name: 'Ben Sullivan', title: 'ENTROS SAS' },
  ];

  constructor(private apiService:ApiService, private router: Router) { 
    this.rol={_id:"",cargo:"",codigo:"",edad:null,nombre:"",pais:"",password:"",rol:""}
  }

  ngOnInit() {
    this.rol = this.apiService.getLocalUser();
    if(this.rol.rol!=="usuario"){
      this.router.navigate(['/general/principalAdmin']);
    }

    this.consultar();
  }

  consultar(){
    this.apiService.general({codigo:this.rol.codigo},"show").subscribe((res: User) => {
      this.placeholder = res;
    });
  }

}
