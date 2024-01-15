import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConversionEngineService } from '../shared/conversion-engine.service';

@Component({
  selector: 'app-converter-ui',
  templateUrl: './converter-ui.component.html',
  styleUrls: ['./converter-ui.component.css']
})
export class ConverterUiComponent implements OnInit {
  parentForm!: FormGroup;

  constructor(private fb: FormBuilder, 
    private conversionService: ConversionEngineService) {}

  ngOnInit(): void {
    let firstCategoryName = this.conversionService.getConverterCategories()[0].name;
    let firstConverterName = this.conversionService.getCurrentConversions()[0].name;
    
    this.parentForm = this.fb.group({
      categoryValue: new FormControl(firstCategoryName),
      converterValue: new FormControl(firstConverterName),
      conversionInput: new FormControl(),
      conversionOutput: new FormControl()
    });

    this.parentForm.valueChanges.subscribe((value) => {
      console.log(`Value change: ${JSON.stringify(value)}`);
    });
  }
}
