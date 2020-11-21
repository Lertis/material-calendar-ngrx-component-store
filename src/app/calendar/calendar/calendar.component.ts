import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CalendarHeaderComponent } from "./calendar-header/calendar-header.component";
import * as moment from "moment";

@Component({
	selector: "app-calendar",
	templateUrl: "./calendar.component.html",
	styleUrls: ["./calendar.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {
	private readonly DATE_FORMAT = "YYYY-MM-DD";
	date = { obj: moment(new Date()).format(this.DATE_FORMAT) };
	readonly calendarHeaderComponent = CalendarHeaderComponent;

	dateClass = (dateForCheck: Date) => {
		console.log("dateClass", dateForCheck);
		return "normalDate";
	}

	datepickerOpened(): void {
		console.log("datepickerOpened");
	}

	datepickerClosed(): void {
		console.log("datepickerClosed");
	}
}
