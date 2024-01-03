import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

constructor(private client:HttpClient) { }
deleteService(id: any) {
  return this.client.delete("http://localhost:3000/booknow/" + id);
}

}
