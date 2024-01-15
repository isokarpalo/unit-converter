import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';

@Component({
  selector: 'app-conversion-input',
  templateUrl: './conversion-input.component.html',
  styleUrls: ['./conversion-input.component.css']
})
export class ConversionInputComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  conversionInUnitText: string = "Input";

  constructor(private conversionService: ConversionEngineService) {}

  ngOnInit() {
    // converter change detected
    this.parentForm.get("converterValue")?.valueChanges.subscribe((value) => {
      this.conversionService.setConversionIdx(value);
      let conversionDef = this.conversionService.getCurrentConversion();
      this.conversionInUnitText = "Input as " + conversionDef.inUnit;
    });

    // category change detection
    this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      this.conversionInUnitText = "Input";
    });

    // input field change 
    this.parentForm.get("conversionInput")?.valueChanges.subscribe((value) => {
      let coeff = this.conversionService.getCurrentConversion().coeff;
      let output_value = value * coeff;
      this.parentForm.get("conversionOutput")?.setValue(output_value);
    });
  }

}