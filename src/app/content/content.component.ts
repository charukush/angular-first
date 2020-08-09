import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  data = "Loading...";
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/dev/content').toPromise().then(resp => {
      console.log(resp);
      this.data = resp.message[0].title;
    });
  }

}
