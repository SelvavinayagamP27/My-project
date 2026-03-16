function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;

    if (!weight || !height) {
        document.getElementById("result").innerHTML = "Please enter valid values!";
        return;
    }

    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    document.getElementById("result").innerHTML =
        `Your BMI is ${bmi.toFixed(2)} ( <b>${category}</b> )`;
}
