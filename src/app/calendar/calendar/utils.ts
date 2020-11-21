import { NO_INFO } from "../entity";
import * as moment from "moment";

export function isWeekdayAbleToSelected(currentDate: moment.Moment, disableWeekend: boolean): boolean {
	const curentDay = currentDate.day();
	return disableWeekend && (curentDay === 0 || curentDay === 6);
}

export function getDateFromHtmlAttribute(slot: any): moment.Moment {
	return moment(slot.getAttribute("aria-label"), ["MMMM DD YYYY", "DD MMMM YYYY"]);
}

export function createTooltipDomTree(htmlElement: HTMLElement, tooltipsArr: Array<string> = []): void {
	const emptyTooltipDomElement = document.createElement("span");
	emptyTooltipDomElement.classList.add("tooltip-text");
	htmlElement.appendChild(updateTooltipDomTree(emptyTooltipDomElement, tooltipsArr));
}

export function updateTooltipDomTree(tooltipDomElement: HTMLElement, tooltipsArr: Array<string> = []): HTMLElement {
	tooltipDomElement.innerHTML = "";
	if (tooltipsArr && tooltipsArr.length) {
		tooltipsArr.forEach(tooltipPart => {
			const tooltipPartDomElement = document.createElement("span");
			tooltipPartDomElement.innerHTML = tooltipPart;
			tooltipPartDomElement.classList.add("tooltip-part-section");
			tooltipDomElement.appendChild(tooltipPartDomElement);
		});
	} else {
		tooltipDomElement.innerHTML = NO_INFO;
	}
	return tooltipDomElement;
}
