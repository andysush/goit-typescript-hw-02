/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Suturday,
	Sunday,
}

function isWeekend(day: Days): boolean {
	switch (day) {
		case Days.Suturday:
		case Days.Sunday:
			return true;
		default:
			return false;
	}
}
