import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { User } from '../nebular/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {
  Password = false;
  form: FormGroup;
  carga:boolean = false;

  constructor(private fb: FormBuilder, private apiService:ApiService, private router: Router,
    private toastr: NbToastrService) {
    this.form = fb.group({
      user: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  login(valid) {

    this.carga = true;

    if (valid) {
      const input = this.form.value;

      this.apiService.general({codigo:input.user,password:btoa(input.password)},"login").subscribe((res: any) => {
        // console.log(res.message);
        if (res.message==="invalido") {
          this.toastr.warning("Verifica tus  datos", 'Wrong');
        } else {
          this.apiService.general({codigo:input.user},"show").subscribe((res: User) => {
            this.apiService.LocalUser(res);
            if(res.rol==="usuario"){
              this.router.navigate(['/general/principal']);
            }else{
              this.router.navigate(['/general/principalAdmin']);
            }
          });
          setTimeout(() => {
            this.toastr.success('', 'Bienvenido');
          }, 1000);
        }

        this.carga = false;
      }, err => {
        this.carga = false;
      });
    } else {
      this.carga = false;
    }
  }
}
