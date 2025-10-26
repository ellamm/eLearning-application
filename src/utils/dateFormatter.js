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

    const monthName = MONTH_NAMES[parseInt(month, 10) - 1];
    const dayNumber = parseInt(day, 10);

    return `${dayNumber} ${monthName} ${year} ${timePart}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
}
