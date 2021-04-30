import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { User } from 'src/app/nebular/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnInit {

  public placeholder:User;
  public lista=[
    "Vendedor",
    "Administrativo",
    "Recursos Humanos",
    "Conductor",
    "Developer",
  ]
  public roles=[
    {name:"Usuario",codigo:"usuario"},
    {name:"Administrador", codigo:"Administrador"}
  ]

  constructor(protected dialogRef: NbDialogRef<DialogEditComponent>,
    private apiService:ApiService,
    private toastr: NbToastrService) { }

  ngOnInit() {

    
  }

  close(){
    this.apiService.general(this.placeholder,"update").subscribe((res: any) => {
      if(res.status===true){
        this.toastr.success('', res.message);
        this.dialogRef.close();
      }else{
        this.toastr.success('', res.message);
      }

    });
  }

}
