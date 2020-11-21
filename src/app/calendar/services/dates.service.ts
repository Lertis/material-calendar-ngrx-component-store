import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ApiService } from "./api.service";
import { IDatesInfo, MOCK_CALENDAR_DATES } from "../entity";
import { environment } from "../../../environments/environment";


@Injectable()
export class DatesService {
	constructor(private readonly api: ApiService) {
	}

	getDates(url: string): Observable<IDatesInfo[]> {
		return environment.production ? this.api.getRequest(url) : of(MOCK_CALENDAR_DATES) ;
	}
}
