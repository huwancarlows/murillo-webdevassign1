
      function calculate() {
        // get the values of the grades
        const grade1 = parseFloat(document.getElementById("subject1").value);
        const grade2 = parseFloat(document.getElementById("subject2").value);
        const grade3 = parseFloat(document.getElementById("subject3").value);
        const grade4 = parseFloat(document.getElementById("subject4").value);
        const grade5 = parseFloat(document.getElementById("subject5").value);
        const grade6 = parseFloat(document.getElementById("subject6").value);
        const grade7 = parseFloat(document.getElementById("subject7").value);
        // calculate the weighted average
        const weightedAverage =
        (grade1 +
            grade2 +
            grade3 +
            grade4 +
            grade5 +
            grade6 +
            grade7) /
          7;
        // display the result
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `Your general weighted
        average is ${weightedAverage.toFixed(2)}`;
        resultElement.style.display = "block";
        // display the grade description, grading scale, and remarks
        const gradeDescriptionElement =
          document.getElementById("grade-description");
        if (weightedAverage >= 100) {
          gradeDescriptionElement.innerHTML =
            "Grade Description: DOES NOT EXIST <br> Grading Scale: 100 ABOVE <br> Remarks: DOES NOT EXIST";
        } else if (weightedAverage >= 90) {
            gradeDescriptionElement.innerHTML =
              "Grade Description:  VERY SATISFACTORY <br> Grading Scale: 90-99 <br> Remarks: PASSED";
        } else if (weightedAverage >= 85) {
          gradeDescriptionElement.innerHTML =
            "Grade Description:  VERY SATISFACTORY <br> Grading Scale: 85-89 <br> Remarks: PASSED";
        } else if (weightedAverage >= 80) {
          gradeDescriptionElement.innerHTML =
            "Grade Description: SATISFACTORY <br> Grading Scale: 80-84 <br> Remarks: PASSED";
        } else if (weightedAverage >= 75) {
          gradeDescriptionElement.innerHTML =
            "Grade Description: FAIRLY SATISFACTORY <br> Grading Scale: 75-79 <br> Remarks: PASSED";
        } else {
          gradeDescriptionElement.innerHTML =
            "Grade Description: DID NOT MEET EXPECTATIONS <br> Grading Scale: below 75 <br> Remarks: FAILED!";
        }
    }