import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeservice'
})
export class PipeservicePipe implements PipeTransform {

  transform(value: string): string {
    return value="hi hello";
  }

}
