import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bucks'
})
export class BucksPipe implements PipeTransform {

  transform(value: any): string {
    return value + " bucks";
  }

}
