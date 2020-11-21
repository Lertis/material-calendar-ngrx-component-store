import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { ICalendarInfo, IDatesInfo } from "../entity";


@Injectable()
export class DatesStore extends ComponentStore<ICalendarInfo> {
	constructor() {
		super({ dates: [] });
	}

	dates$: Observable<IDatesInfo[]> = this.select(state => state.dates);

	readonly updateDatesInfo = this.updater((state, dates: IDatesInfo[]) => ({ ...state, dates }));
}
