import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, str: any): any {
    if (str == "") {
      return value;
    }
    let newValues = value.filter((item: {
      date: any; name: any;
    }) => item.name.toLowerCase().includes(str.toLowerCase()) || item.date.toString().toLowerCase().includes(str.toLowerCase()));
    return newValues
  }

}
