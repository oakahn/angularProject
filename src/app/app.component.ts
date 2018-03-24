import { Component, OnInit } from '@angular/core';
import { CallServiceService } from './call-service.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  list:Employee[];
  tmp: Employee = new Employee();
  constructor(private callservice: CallServiceService){

  }
  ngOnInit():void{
    this.callservice.getData().subscribe(res=>{
      this.list = res;
    })
  }
  onShow(data){
    console.log(data);
      this.list.push(data)
    }

  onEdit(data){
    console.log(data)
    this.tmp = data.item;
  }
  onDelete(data){
    console.log(data)
    this.list.splice(data)
  }
  onUpdate(data){
    console.log(data);
  }
}
