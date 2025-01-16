import moment from "moment-business-days"
import date from 'date-and-time'


/**
 * Converts the formatted Numbers from Salesforce to Clean numerical strings
 * 
 * @param formatedText 
 * @returns formated amount without ","
 * 
 * @example
 * formatedAmountToNumber("USD 12,300,000.55")     // Returns: 1230000.55
 */
export function formatedAmountToNumber(
        formatedText: string
): string {
        const amount = Number(
                formatedText
                        .replaceAll('USD', '')
                        .replaceAll(',', '')
                        .trim()
        ).toFixed(2)
        return amount
}

/**
 * Adds or subtracts a specified number of days to/from a given date.
 * 
 * @param date - The original date object.
 * @param days - The number of days to add (positive) or subtract (negative).
 * @returns The new date object after adjustment.
 */
function addDays(date: Date, days: number): Date {
        const result = new Date(date)
        result.setDate(result.getDate() + days)
        return result
}

/**
 * Adds or subtracts a specified number of months to/from a given date.
 * 
 * @param date - The original date object.
 * @param months - The number of months to add (positive) or subtract (negative).
 * @returns The new date object after adjustment.
 */
function addMonths(date: Date, months: number): Date {
        const result = new Date(date)
        result.setMonth(result.getMonth() + months)
        return result
}

/**
 * Adds or subtracts a specified number of years to/from a given date.
 * 
 * @param date - The original date object.
 * @param years - The number of years to add (positive) or subtract (negative).
 * @returns The new date object after adjustment.
 */
function addYears(date: Date, years: number): Date {
        const result = new Date(date)
        result.setFullYear(result.getFullYear() + years)
        return result
}

/**
 * Adjusts a given date by adding or subtracting a specified number of days, months, or years.
 * 
 * @param dateStr - The date string in "mm/dd/yyyy" format.
 * @param value - The number of units to adjust the date by. Can be positive or negative.
 * @param unit - The unit of time to adjust ("days", "months", "years").
 * @returns The adjusted date string in "mm/dd/yyyy" format.
 * 
 * @example
 * adjustDate("06/04/2024", 10, "days")   // Returns: "6/14/2024"
 * adjustDate("06/04/2024", 2, "months")  // Returns: "8/4/2024"
 * adjustDate("06/04/2024", 1, "years")   // Returns: "6/4/2025"
 */
export function adjustDate(
        dateStr: string,
        operation: "add" | "subtract",
        value: number,
        unit: "days" | "months" | "years",
        
): string {
        // Parse the input date string
        const [month, day, year] = dateStr.split('/').map(Number)
        const date = new Date(year, month - 1, day) // Note: month is zero-based in Date constructor
        const actualValue = operation === "add" ? value : value * (-1)

        // Adjust the date based on the specified unit
        let adjustedDate: Date
        switch (unit) {
                case "days":
                        adjustedDate = addDays(date, actualValue)
                        break
                case "months":
                        adjustedDate = addMonths(date, actualValue)
                        break
                case "years":
                        adjustedDate = addYears(date, actualValue)
                        break
                default:
                        throw new Error("Invalid unit specified. Use 'days', 'months', or 'years'.")
        }

        // Format the adjusted date to "mm/dd/yyyy"
        const adjustedMonth = String(adjustedDate.getMonth() + 1)
        const adjustedDay = String(adjustedDate.getDate())
        const adjustedYear = adjustedDate.getFullYear()

        return `${adjustedMonth}/${adjustedDay}/${adjustedYear}`
}

/**
 * Converts a zero-padded formated date to nonzero-padded
 * 
 * @param dateString - The date string in "mm/dd/yyyy" format.
 * 
 * @example
 * nonZeroPaddedDate("06/04/2024")   // Returns: "6/4/2024"
 */
export function nonZeroPaddedDate(dateString: string): string {
        const [month, day, year] = dateString.split("/");
        const nonZeroPaddedMonth = parseInt(month, 10);
        const nonZeroPaddedDay = parseInt(day, 10);
        return `${nonZeroPaddedMonth}/${nonZeroPaddedDay}/${year}`;
}

/**
 * Adds business days to a specific date formatted "mm/dd/yyyy"
 * 
 * @param initialdate - The date string in "mm/dd/yyyy" format.
 * @param days - number of Business days to be added
 * list of holidays [Birthday of Martin Luther King Jr: 1/20/2025, Christmas Day: 12/25/2025, Columbus Day: 10/13/2025, Inauguration Day: 1/20/2025, Independence Day: 7/4/2025,
 * Juneteenth National Independance Day: 6/19/2025, Labor Day: 9/1/2025, Memorial Day: 5/26/2025, New Year's Day: 1/1/2025, Thanksgiving Day: 11/27/2025, Veterans Day: 11/11/2025, Washington's Bithday: 2/17/2025]
 * holidays must be updated on an yearly basis, from Salesforce Business Hours Holiday list
 * 
 * @example
 * addBussinessDays("26/8/2024", 6)   // Returns: "9/3/2024"
 * 
 */
export function addBussinessDays(initialdate: string, days: number): string {
        moment.updateLocale('us', {
                holidays: ['1/20/2025', '12/25/2025', '10/13/2025', '1/20/2025', '7/4/2025', '6/19/2025', '9/1/2025', '5/26/2025', "1/1/2025", "11/27/2025", "11/11/2025", "2/17/2025"],
                holidayFormat: 'MM/DD/YYYY',
                workingWeekdays: [1, 2, 3, 4, 5]
        })
        const dateAfteraddedBusinessDays = moment(initialdate, 'MM/DD/YYYY').businessAdd(days).toDate()
        const dateStringAfteraddedBusinessDays = nonZeroPaddedDate(date.format(dateAfteraddedBusinessDays,'MM/DD/YYYY'))
        return dateStringAfteraddedBusinessDays
}
