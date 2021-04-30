import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/nebular/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.scss']
})
export class MainAdminComponent implements OnInit {
  public rol:User;
  constructor(private apiService:ApiService, private router: Router) { 
    this.rol={_id:"",cargo:"",codigo:"",edad:null,nombre:"",pais:"",password:"",rol:""}
  }

  ngOnInit() {
    this.rol = this.apiService.getLocalUser();
    if(this.rol.rol==="usuario"){
      this.router.navigate(['/general/principal']);
    }
  }

}
