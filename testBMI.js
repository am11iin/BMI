 document.getElementById("subbmit-btn").addEventListener("click", function() {
        var weight = parseFloat(document.getElementById("weight-input").value);
        var height = parseFloat(document.getElementById("height-input").value);
        // console.log(weight, height);
        if (isNaN(weight) || isNaN(height) || height <= 0) {
            alert("Please enter valid weight and height values.");
            return;
        }

        var bmi = weight / (height * height);
        document.getElementById("bmi").innerHTML = "Your BMI is: " + bmi;

        var category;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }
        document.getElementById("bmi-category").innerHTML = "BMI Category: " + category;
    });
