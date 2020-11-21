import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy } from "@angular/core";
import { DateAdapter, MatDateFormats, MAT_DATE_FORMATS } from "@angular/material/core";
import { MatCalendar } from "@angular/material/datepicker";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
	selector: "app-calendar-header",
	templateUrl: "./calendar-header.component.html",
	styleUrls: ["./calendar-header.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarHeaderComponent<D> implements OnDestroy {
	private readonly destroy$ = new Subject<void>();

	constructor(
		@Inject(MAT_DATE_FORMATS) private readonly dateFormats: MatDateFormats,
		private readonly calendar: MatCalendar<D>,
		private readonly dateAdapter: DateAdapter<D>,
		private readonly cdr: ChangeDetectorRef) {
		this.calendar.stateChanges.pipe(
			takeUntil(this.destroy$)
		).subscribe(() => this.cdr.markForCheck());
	}

	get periodLabel(): string {
		return this.dateAdapter
			.format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
			.toLocaleUpperCase();
	}

	previousClicked(mode: "month" | "year"): void {
		this.calendar.activeDate = mode === "month" ?
			this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
			this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
	}

	nextClicked(mode: "month" | "year"): void {
		this.calendar.activeDate = mode === "month" ?
			this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
			this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
