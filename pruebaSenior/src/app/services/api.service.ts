import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../nebular/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }

general(data, nameService){
  const path = environment.url+'/'+nameService;
  return this.http.post(path, data);
}


getGeneral(nameService){
  const path = environment.url+'/'+nameService;
  return this.http.get(path);
}

LocalUser(info:User) {
  localStorage.setItem('data', btoa(JSON.stringify(info)));
}

getLocalUser() {
  let datos = localStorage.getItem('data');
  if(datos!==null){
    return JSON.parse(atob(datos));
  }else{
    return null;
  }
  
}
}
