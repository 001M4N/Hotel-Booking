export default function genReservedDate() {
  const dayMilliSeconds = 24 * 60 * 60 * 1000;
  const maxDuration = 5;
  const timeWindow = 7;
  const currentDate = new Date().getTime();

  const randomStartDate =
    Math.floor(Math.random() * (timeWindow + 1)) * dayMilliSeconds;

  const randomDuration =
    Math.floor(Math.random() * (maxDuration + 1)) * dayMilliSeconds;

  let startDate = new Date(currentDate + randomStartDate);
  let endDate = new Date(startDate.getTime() + randomDuration);

  startDate = startDate.toISOString().split("T")[0]; // the date part not time
  endDate = endDate.toISOString().split("T")[0];

  return { startDate, endDate };
}
