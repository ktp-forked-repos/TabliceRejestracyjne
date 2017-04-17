import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tabs: any, fraza: any): any {
    if (fraza === undefined) return tabs;
     return tabs.filter(function(tab){
      if(tab.skrot.toLowerCase().includes(fraza.toLowerCase()))
      return tab.skrot.toLowerCase().includes(fraza.toLowerCase());
      else return tab.nazwa.toLowerCase().includes(fraza.toLowerCase());
    })
  }

}
