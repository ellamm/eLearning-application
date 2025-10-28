const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatDate(dateString) {
  if (!dateString || typeof dateString !== "string") {
    return "";
  }

  try {
    const parts = dateString.split(" ");
    const datePart = parts[0];
    const timePart = parts[1];

    const [day, month, year] = datePart.split(".");

    const dayNumber = parseInt(day, 10);
    const monthNumber = parseInt(month, 10);

    if (
      isNaN(dayNumber) ||
      isNaN(monthNumber) ||
      monthNumber < 1 ||
      monthNumber > 12
    ) {
      return "Invalid date format";
    }

    const monthName = MONTH_NAMES[monthNumber - 1];

    return `${dayNumber} ${monthName} ${year} ${timePart}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
}
