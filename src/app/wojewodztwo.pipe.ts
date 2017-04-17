import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wojewodztwo'
})
export class WojewodztwoPipe implements PipeTransform {

  transform(tabs: any, woj: any): any {
    if (woj === undefined) return tabs;
    return tabs.filter(function(tab){
      if(woj.length == 1) return tab.skrot.substring(0,1).includes(woj);
      return tab.skrot.substring(0,2).includes(woj);
    })
    }
}
