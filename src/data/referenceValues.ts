export const workDaysPerYear = 200
const averageCO2perMeal = 1.6 // @TODO where does this number come from?

export default {
  totalAverage: 7000,

  foodAverage: workDaysPerYear * averageCO2perMeal,
  travelAverage: 3000,
  commuteAverage: 2000,
}