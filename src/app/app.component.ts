import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  data = {
    id: 1,
    content: "Something",
  }  as any;
  constructor(private http: HttpClient) {
    http.get('resource').subscribe(data => {
      this.data = data
      console.log(data)
    });
    
  }
}