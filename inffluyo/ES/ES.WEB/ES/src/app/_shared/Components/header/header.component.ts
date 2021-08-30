import { Component, OnInit } from '@angular/core';
import { configuration } from 'src/app/_models/configuration/configuration.model';

@Component({
  selector: 'inffluyo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public dataHead: configuration = new configuration();
  constructor() { }

  ngOnInit(): void {
  }

}
