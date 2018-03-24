import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { CallServiceService } from '../call-service.service';
@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  @Input()   listofTable;
  @Output() param = new EventEmitter;
  @Output() index = new EventEmitter;
  input:string;
  constructor(private callServiceService:CallServiceService) { }

  ngOnInit() {
  }

  onDelete(item,i){
    this.callServiceService.deleteData(item);
  }
  onEdit(item,i){
    
    this.param.emit({ item,i})
  }
}
