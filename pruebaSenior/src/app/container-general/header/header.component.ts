import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ObsService } from 'src/app/services/obs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public valorSelect:string="Todos";
  public lista=[
    "Vendedor",
    "Administrativo",
    "Recursos Humanos",
    "Conductor",
    "Developer",
  ]
  constructor(private router: Router, 
              private toastr: NbToastrService,
              private obsService: ObsService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    setTimeout(() => {
      this.toastr.success('Te esperamos pronto...','Adiós');
    });
  }

  filtro(event){
    this.obsService.dato$.emit(this.valorSelect)
  }

}
