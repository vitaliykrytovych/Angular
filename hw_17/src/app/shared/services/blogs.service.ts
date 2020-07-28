import { Injectable } from '@angular/core';
import { IBlog } from '../../shared/interfaces/blog.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private url: string;

  constructor( private http: HttpClient ) {
    this.url = 'http://localhost:3000/posts';
  }
  getJSONBlogs(): Observable<Array<IBlog>> {
    return this.http.get<Array<IBlog>>(this.url);
  }
  postJSONBlogs(objPost: IBlog): Observable<IBlog> {
    return this.http.post<IBlog>(this.url, objPost);
  }
  deleteJSONBlogs(id: number): Observable<IBlog> {
    return this.http.delete<IBlog>(`${this.url}/${id}`);
  }
  updateJSONBlogs(objPost: IBlog): Observable<IBlog> {
    return this.http.put<IBlog>(`${this.url}/${objPost.id}`, objPost);
  }
}
