import { Injectable } from '@angular/core';
import { ConversionDef } from './conversion-def.class';
import { ConverterCategoryDef } from './converter-def.class';

@Injectable({
  providedIn: 'root'
})
export class ConversionEngineService {

  weightDefs: ConversionDef[] = [
    new ConversionDef("Grams to ounces", "g", "oz", 0.0352739619),
    new ConversionDef("Ounces to grams", "oz", "g", 28.3495231),
  ];

  distanceDefs: ConversionDef[] = [
    new ConversionDef("Meters to yards", "Meters", "Yards", 1.0936),
    new ConversionDef("Yards to meters", "Yards", "Meters", 0.9144),
  ];

  currencyDefs: ConversionDef[] = [
    new ConversionDef("Euros to dollars", "Euros", "Dollars", 1.06),
    new ConversionDef("Dollars to Euros", "Dollars", "Euros", 0.94)
  ]
  
  converterCategories: ConverterCategoryDef[] = [
    new ConverterCategoryDef("Length", "fa fa-ravelry", this.distanceDefs),
    new ConverterCategoryDef("Weight", "fa fa-balance-scale", this.weightDefs),
    new ConverterCategoryDef("Currency", "fa fa-eur", this.currencyDefs)
  ];

  private categoryIdx = 0;
  private conversionIdx = 0;

  constructor() { }

  getConverterCategories(): ConverterCategoryDef[] {
    return this.converterCategories;
  }

  getCurrentConversions(): ConversionDef[] {
    return this.converterCategories[this.categoryIdx].conversions;
  }

  getCurrentConversion(): ConversionDef {
    return this.converterCategories[this.categoryIdx].conversions[this.conversionIdx];
  }

  setCategoryIdx(name: string) {
    for(let i = 0; 1 < this.converterCategories.length; i++) {
      if(name == this.converterCategories[i].name) {
        this.categoryIdx = i;
        return;
      }
    }
    return;
  }

  setConversionIdx(name: string) {
    let conversionDefs = this.converterCategories[this.categoryIdx].conversions;

    for(let i = 0; 1 < conversionDefs.length; i++) {
      if(name == conversionDefs[i].name) {
        this.conversionIdx = i;
        return;
      }
    }
    return;
  }
}
