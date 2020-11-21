import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { CalendarHeaderComponent } from "./calendar/calendar-header/calendar-header.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CommonModule } from "@angular/common";
const MATERIAL_MODULES = [
	MatDatepickerModule,
	MatNativeDateModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatButtonModule
];

@NgModule({
	declarations: [CalendarComponent, CalendarHeaderComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		...MATERIAL_MODULES
	],
	exports: [CalendarComponent, CalendarHeaderComponent],
})
export class CalendarModule { }
