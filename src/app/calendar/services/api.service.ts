import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
	constructor(private readonly http: HttpClient) {}

	getRequest<T>(url: string): Observable<T> {
		return this.http.get<T>(url);
	}
}
