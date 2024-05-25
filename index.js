function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  function studentMsg(totalScores, studentScore) {
    // Calculate the class average
    let classAverage = getAverage(totalScores);
    
    // Get the student's letter grade
    let studentGrade = getGrade(studentScore);
    
    // Determine if the student passed or failed
    let result = studentGrade !== 'F' ? "You passed the course." : "You failed the course.";
    
    // Construct the message
    let message = "Class average: " + classAverage + ". Your grade: " + studentGrade + ". " + result;
    
    return message;
}

// Example usage
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
