import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value: Object, args:string[]) : any {
    return Object.keys(value);
  }
}