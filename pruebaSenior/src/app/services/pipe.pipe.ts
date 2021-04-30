import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args != null) {
      if (args=='EUR')
          value = value*0.83;                        
    }else{
      value = value; 
    }          
    return value;
  }

}
