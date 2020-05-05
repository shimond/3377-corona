import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, suffix: string = '!', count = 1): unknown {
    return value + ' ' + suffix.repeat(count);
  }

}
