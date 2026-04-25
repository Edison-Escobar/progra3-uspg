import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-tareas',
  imports: [CommonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas implements OnInit {
  title = "Listado de Tareas";
  url = "http://localhost:3000/tareas";
  tareas = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.url).subscribe({
      next: (data) => this.tareas.set(data),
      error: (err) => console.error('Error:', err)
    });
  }


}
