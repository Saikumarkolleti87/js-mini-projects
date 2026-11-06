// Requirement: price a movie ticket by age, student status and day.
// Stop/edge cases: under 16 at a 21:00+ show gets no ticket; free tickets get no Tuesday discount.
// Names: LATE_SHOW_HOUR, MIN_LATE_SHOW_AGE, TUESDAY_DISCOUNT, price

const LATE_SHOW_HOUR = 21;
const MIN_LATE_SHOW_AGE = 16;
const TUESDAY_DISCOUNT = 2;

const age = 10;
const day = "Saturday";
const showHour = 18; // 24-hour clock: 18 = 6 pm, 21 = 9 pm
const isStudent = false;

if (showHour >= LATE_SHOW_HOUR && age < MIN_LATE_SHOW_AGE) {
  console.log("Sorry, this show is not allowed for your age.");
} else {
  let price;

  if (age < 3) {
    price = 0;
  } else if (age <= 12) {
    price = 8;
  } else if (age >= 65) {
    price = 9;
  } else if (isStudent) {
    price = 10;
  } else {
    price = 14;
  }

  if (day === "Tuesday" && price > 0) {
    price -= TUESDAY_DISCOUNT;
  }

  console.log(`Ticket for age ${age} on ${day} at ${showHour}:00 — Price: $${price}`);
}