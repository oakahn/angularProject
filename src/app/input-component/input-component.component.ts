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
  isEdit = false;
  index: number;
  constructor() { }

  @Output() param = new EventEmitter();
  @Input() item;

  ngOnInit() {
  }

  onUpdate() {
    this.listofTable[this.index] = this.input;
    this.input = "";
    this.isEdit = false;
  }
  onClick(name) {
    // this.listofTable.push(this.input);
    // this.input = '';
    console.log(name)
    this.item.name = name;
    this.param.emit(this.item);
    this.item = new Employee();
    // console.log(this.item)
    // this.param.emit(this.item);
    // this.input = '';
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
