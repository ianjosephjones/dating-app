import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, resource, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected title = 'Dating App';

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: resource => console.log(resource),
      error: error => console.error(error),
      complete: () => console.log('Request complete')
    });
  }

}
