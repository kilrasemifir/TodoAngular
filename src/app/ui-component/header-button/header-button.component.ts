import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.css']
})
export class HeaderButtonComponent implements OnInit {

  @Input() label: string = "";
  @Input() urlPath: string = "";
  @Output() onClickEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler(){
    this.onClickEvent.emit();
  }

}
