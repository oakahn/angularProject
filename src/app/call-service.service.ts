import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Mock } from 'protractor/built/driverProviders';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CallServiceService {
  mockDate: Employee[] = [
    { id: 1, name: "yossatron" },
    { id: 2, name: "kuyfluck" }
  ];
  constructor(private http: HttpClient) { }
  getData(): Observable<Employee[]> {
    return this.http.get<Employee[]>('').pipe(
      tap(rep => console.log(rep)),
      catchError( err => of(this.mockDate))
    );
  }
  deleteData(data){
    this.http.post('',data).pipe(
      catchError(err => of(this.mockDate))
    );
    const found = this.mockDate.findIndex(row => row.id == data.id);
    this.mockDate.splice(found,1);
  }

  editData(data){
    const found = this.mockDate.findIndex(row => row.id == data.id)
    this.mockDate[found] = data
    this.mockDate.splice(found,1,data);
  }
}
