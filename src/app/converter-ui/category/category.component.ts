import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';
import { ConverterCategoryDef } from 'src/app/shared/converter-def.class';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  converterCategoryDefs!: ConverterCategoryDef[];

  constructor(private conversionService: ConversionEngineService) {}

  ngOnInit(): void {
    this.converterCategoryDefs = this.conversionService.getConverterCategories()

    this.parentForm.get("categoryValue")?.valueChanges.subscribe((value) => {
      // console.log(`CategoryComponent ${value}`);
      // this.conversionService.setCategoryIdx(value);
    });
  }
}
