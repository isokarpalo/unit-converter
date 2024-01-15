import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.css']
})
export class CategoryIconComponent implements OnInit {
  @Input() parentForm!: FormGroup;

   categoryIcon!: string;

  constructor(private conversionService: ConversionEngineService) {}

  ngOnInit() {
    // should change with category, not working
    // this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
    //   this.conversionService.setCategoryIdx(value);
       this.categoryIcon = this.conversionService.converterCategories[0].icon;
    // });

  }

}