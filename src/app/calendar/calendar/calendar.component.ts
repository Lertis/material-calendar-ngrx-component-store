import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { DateFilterFn } from "@angular/material/datepicker";
import { CalendarHeaderComponent } from "./calendar-header/calendar-header.component";
import { DateStatusesClasses, ONLY_WEEKDAYS } from "./../entity";
import * as util from "./utils";
import * as moment from "moment";

@Component({
	selector: "app-calendar",
	templateUrl: "./calendar.component.html",
	styleUrls: ["./calendar.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {

	@Input() disableWeekdays = false;
	@Input() monthCalendarView = [];

	private readonly DATE_FORMAT = "YYYY-MM-DD";
	date = { obj: moment(new Date(2020, 11, 9)).format(this.DATE_FORMAT) };
	readonly calendarHeaderComponent = CalendarHeaderComponent;

	datepickerFilter: DateFilterFn<Date | null> = (dateForCheck: Date | null) => {
		if (dateForCheck === null) {
			return false;
		}

		if (this.disableWeekdays) {
			// Prevent Saturday and Sunday from being selected.
			return this.isDayWeekend(dateForCheck);
		} else {
			return false;
		}
	}

	private isDayWeekend(day: Date): boolean {
		const numberOfTheDay = day.getDay();
		return numberOfTheDay !== 0 && numberOfTheDay !== 6;
	}

	dateClass = (dateForCheck: Date) => {
		// Mock classes for days
		const dayNumber = dateForCheck.getDay();
		if (dayNumber === 2) {
			return DateStatusesClasses.Valid;
		}
		if (dayNumber === 3) {
			return DateStatusesClasses.Black;
		}
		if (dayNumber === 4) {
			return DateStatusesClasses.Warning;
		}
		if (dayNumber === 1 || dayNumber === 5) {
			return DateStatusesClasses.Full;
		}
		return "";
	}

	updateDayTooltips(): void {
		const elements = document.querySelectorAll(".endDate .mat-calendar-content");
		const dateSlots: any = elements.length > 0 ?
			Array.from(elements[0].querySelectorAll(".mat-calendar-body-cell")) : [];

		dateSlots.forEach((slot: any) => {
			const slotArea = util.getDateFromHtmlAttribute(slot);
			if (util.isWeekdayAbleToSelected(slotArea, this.disableWeekdays)) {
				const htmlElement: HTMLElement = slot.querySelectorAll("div")[0];
				htmlElement.classList.add("tooltip");
				util.createTooltipDomTree(htmlElement, [ONLY_WEEKDAYS]);
			}
		});
	}

	datepickerOpened(): void {
		setTimeout(() => {
		//	this.updateDayTooltips();
		});
	}

	datepickerClosed(): void {
		console.log("datepickerClosed");
	}
}
