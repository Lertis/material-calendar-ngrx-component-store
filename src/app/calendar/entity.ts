export interface IDatesInfo {
	cssClass: string;
}

export interface ICalendarInfo {
	dates: IDatesInfo[];
}

export enum DateStatusesClasses {
	Valid = "dateValid",
	Black = "dateBlackout",
	Warning = "dateWarning",
	Full = "dateFull"
}

export const ONLY_WEEKDAYS = "Only weekdays can be selected";
export const NO_INFO = "There are no info";

export const MOCK_CALENDAR_DATES: IDatesInfo[] = [
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Warning },
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Full },
	{ cssClass: DateStatusesClasses.Warning },
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Black },
	{ cssClass: DateStatusesClasses.Full },
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Black },
	{ cssClass: DateStatusesClasses.Black },
	{ cssClass: DateStatusesClasses.Warning },
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Warning },
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Black },
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Black },
	{ cssClass: DateStatusesClasses.Full },
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Black },
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Black },
	{ cssClass: DateStatusesClasses.Warning },
	{ cssClass: DateStatusesClasses.Black },
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Black },
	{ cssClass: DateStatusesClasses.Valid },
	{ cssClass: DateStatusesClasses.Black }
];
