import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { User } from 'src/app/nebular/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { ObsService } from 'src/app/services/obs.service';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss']
})
export class ListUsuariosComponent implements OnInit, OnDestroy {

  public suscripcion: Subscription;
  public listData:User[]=[];
  public listDataCopy:User[]=[];
  
  constructor(private apiService:ApiService, 
    public dialog: NbDialogService,
    private obsService: ObsService) { }

  ngOnInit() {
    this.consumo();
    this.suscripcion = this.obsService.dato$.subscribe(dato=>{
      if(dato==="Todos"){
        this.consumo()
      }else{
        this.listData=[];
        this.listDataCopy.find(element=>{
          if(element.cargo===dato){
            this.listData.push(element);
          }
        })
      }
    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  consumo(){
    this.apiService.getGeneral("users").subscribe((res: any) => {
      this.listData=res;
      this.listDataCopy=res;
    });
  }

  editar(user){
    this.dialog.open(DialogEditComponent,
      {
        closeOnBackdropClick:false, closeOnEsc:true, autoFocus:false,
        context:{
          placeholder: user
        }
      })
      .onClose.subscribe(resp=>{
        this.consumo();
      })
  }

}
