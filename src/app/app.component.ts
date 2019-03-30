import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Employye } from '../app/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular7-with-stubby';
  SERVER_URL = environment.server_url;
  employeeList: Employye[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchEmployeeList();
  }

  fetchEmployeeList() {
    const url = this.SERVER_URL + '/employeesList';
    this.http.get(url).subscribe((response: Employye[]) => {
      this.employeeList = response;
    });
  }
}
