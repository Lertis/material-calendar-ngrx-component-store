import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { CalendarHeaderComponent } from "./calendar/calendar-header/calendar-header.component";
import { CalendarComponent } from "./calendar/calendar.component";

import { ApiService } from "./services/api.service";

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
		HttpClientModule,
		...MATERIAL_MODULES
	],
	exports: [CalendarComponent, CalendarHeaderComponent],
	providers: [ApiService]
})
export class CalendarModule { }
