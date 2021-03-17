import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded',
})
export class VatAddedPipe implements PipeTransform {
  transform(value: number, rate: number): number {
    return value + (value * rate) / 100;
  }
  //ilk değer değiştirilecek değer ikinci değer parametre sonuncu dönüş tipi. pipe ın eklendiği yerdeki unitPrice buraya otomatik gelir.
}
