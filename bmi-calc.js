let height = document.getElementById("heightInput")
let weight = document.getElementById("weightInput")
let btn = document.getElementById("calculateBtn")
let result = document.getElementById("result")

btn.addEventListener("click", handleButtonClick)
function handleButtonClick(bmi){
    return weight / (height * height)
}


result.innerHTML("Jūsu ĶMI ir " + bmi )


let bmi;
if(height_status && weight_status){
    bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
}
    if(bmi < 18.5){
        result.innerHTML = "Nepietiekams svars : " + bmi;
    }
    else if(bmi >= 18.5 && bmi < 24.9  ) {
        result.innerHTML = "Normāls svars : " + bmi;
    }
    else if(bmi >= 25 && bmi < 29.9 ) {
        result.innerHTML = "Liekais svars : " + bmi;
    }
    else{
        result.innerHTML = "Aptaukošanās : " + bmi;
    }
