import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private _fb: FormBuilder) { 

  }

  public createContactForm(): FormGroup {
    return this._fb.group({
      fullName: ['', Validators.required],
      age: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

}
