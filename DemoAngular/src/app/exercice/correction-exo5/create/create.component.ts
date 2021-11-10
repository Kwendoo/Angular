import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Fan } from '../models/fan';
import { FanService } from '../services/fan.service';
import { DateValid } from '../validators/dateValidators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  fg : FormGroup;

  constructor(
    private _fanService : FanService,
    private _builder : FormBuilder
  ) { }

  ngOnInit(): void {

    this.initForm();

  }

  initForm() : void {
    this.fg = this._builder.group({
      nom : [null, Validators.required],
      dateNaiss : [null, [Validators.required, DateValid()]],
      series : this._builder.array([])
    });
  }

  getSeries() : FormArray{
    return this.fg.get('series') as FormArray;
  }

  addSeries() : void{
    this.getSeries().push(new FormControl(null, Validators.required));
  }

  removeSeries(id : number) : void{
    this.getSeries().removeAt(id);
  }

  submitForm(){
    let newFan = new Fan();
    newFan.nom = this.fg.get('nom').value;
    newFan.dateNaiss = this.fg.get('dateNaiss').value;
    newFan.serie = this.fg.get('series').value ? this.fg.get('series').value : [];

    this._fanService.saveFan(newFan);
    this.fg.reset();
  }

}
