import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {
  header = "Basic Angular"
  input: string;
  showMeInput: string;
  listofTable = [];
  index: number;
  constructor() { }

  @Output() param = new EventEmitter();
  @Input() item;
  @Output() edit = new EventEmitter();
  @Input() isEdit = false;
  ngOnInit() {
  }

  onUpdate(name) {
    console.log(name)
    this.item.name = name;
    this.edit.emit(this.item);
    this.item = new Employee();
    this.isEdit = false;
  }
  onClick(id,name) {
    this.item.name = name;
    this.item.id = id;
    this.param.emit(this.item);
    this.item = new Employee();
  }

  onDelete(item, index) {
    this.listofTable.splice(index)
  }
  onEdit(item, index) {
    this.index = index;
    this.isEdit = true;
    this.input = item;
  }
}
