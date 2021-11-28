import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ContactFormService } from '../_services/contact-form.service';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.scss']
})
export class ContactHomeComponent implements OnInit {

  cForm: FormGroup;

  constructor(private _cfs: ContactFormService) { 
    this.cForm = this._cfs.createContactForm();
  }

  ngOnInit(): void {
  }


  get fullName(): AbstractControl | null {
    return this.cForm.get('fullName');
  }

  get age(): AbstractControl | null {
    return this.cForm.get('age');
  }

  get phoneNumber(): AbstractControl | null {
    return this.cForm.get('phoneNumber');
  }

  get gender(): AbstractControl | null {
    return this.cForm.get('gender');
  }

  onSubmit(): void {
    
  }
}
