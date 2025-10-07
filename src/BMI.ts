/**
 * Calculate BMI
 * - Accepts weight in KG as a parameter (type number)
 * - Accepts height in CM as a parameter (type number)
 * - returns the calculated BMI (type number)
 * - The equation for BMI is (weight (kg) / height^2(m)).
 */
function calculateBMI(weight: number, height: number): number {
  // Write your code here 👇🏼
  const BMI = (10000 * weight) / height ** 2;
  // Stop making changes here!
  return BMI;
}

/**
 * Get BMI State
 * - Accepts BMI as a parameter (type number)
 * - returns a BMIStatus type indicating the BMI category (type BMIStatus)
 */

// Don't change this type
type BMIStatus = "underweight" | "healthy" | "overweight" | "obese";

function getBMIState(BMI: number): BMIStatus {
  // Don't change this variable
  let BMIState: BMIStatus = "obese";
  // Write your code here 👇🏼
  if (BMI < 18.5) BMIState = "underweight";
  else if (BMI >= 18.5 && BMI < 25) BMIState = "healthy";
  else if (BMI >= 25 && BMI < 30) BMIState = "overweight";
  else BMIState = "obese";

  // Stop making changes here!
  return BMIState;
}

/**
 * Get BMI State by Age
 * - Accepts BMI as a parameter (type number)
 * - Accepts age as a parameter (type number)
 * - returns a HealthStatus type indicating the BMI state (type HealthStatus)
 */

// Don't change this type
type HealthStatus = "not healthy" | "healthy";

function getBMIStateByAge(BMI: number, age: number): HealthStatus {
  // Don't change this variable
  let BMIState: HealthStatus = "not healthy";
  // Write your code here 👇🏼
  if (19 <= age && age <= 24 && 19 <= BMI && BMI <= 24) BMIState = "healthy";
  else if (25 <= age && age <= 34 && 20 <= BMI && BMI <= 25)
    BMIState = "healthy";
  else if (35 <= age && age <= 44 && 21 <= BMI && BMI <= 26)
    BMIState = "healthy";
  else if (45 <= age && age <= 54 && 22 <= BMI && BMI <= 27)
    BMIState = "healthy";
  else if (55 <= age && age <= 64 && 23 <= BMI && BMI <= 28)
    BMIState = "healthy";
  else if (age >= 65 && 24 <= BMI && BMI <= 29) BMIState = "healthy";
  else BMIState = "not healthy";
  // Stop making changes here!
  return BMIState;
}

export { calculateBMI, getBMIState, getBMIStateByAge };
