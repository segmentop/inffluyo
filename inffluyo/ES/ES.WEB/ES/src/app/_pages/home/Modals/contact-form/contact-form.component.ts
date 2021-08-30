import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'inffluyo-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(
    public modal: NgbActiveModal, private fb: FormBuilder) { }

  public form: FormGroup;
  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.form = this.fb.group({
      company:[null]
    });
  }

}
