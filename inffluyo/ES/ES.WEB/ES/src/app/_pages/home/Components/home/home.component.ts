import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { configuration } from 'src/app/_models/configuration/configuration.model';
import { ContactFormComponent } from '../../Modals/contact-form/contact-form.component';

@Component({
  selector: 'inffluyo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  public data: configuration = new configuration();
  ngOnInit(): void {
  }
  
  public openModal(type: any) {
    const ref = this.modalService.open(ContactFormComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false
    });
  }
}
