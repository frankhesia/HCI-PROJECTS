function computeGrade() {
    const midterm = parseFloat(document.getElementById('midterm').value);
    const final = parseFloat(document.getElementById('final').value);

    if (isNaN(midterm) || isNaN(final)) {
        alert("Please enter valid numbers for both grades.");
        return;
    }

    const average = (midterm + final) / 2;
    document.getElementById('finalGrade').value = average.toFixed(2);
    document.getElementById('remarks').value = getRemark(average);
}

function getRemark(grade) {
    if (grade >= 100) return "1.0";
    else if (grade >= 98) return "1.1";
    else if (grade >= 95) return "1.2";
    else if (grade >= 93) return "1.3";
    else if (grade >= 90) return "1.5";
    else if (grade >= 89) return "1.6";
    else if (grade >= 87) return "1.8";
    else if (grade >= 86) return "1.9";
    else if (grade >= 85) return "2.0";
    else if (grade >= 84) return "2.1";
    else if (grade >= 83) return "2.2";
    else if (grade >= 82) return "2.3";
    else if (grade >= 81) return "2.4";
    else if (grade >= 80) return "2.5";
    else if (grade >= 78) return "2.6";
    else if (grade >= 77) return "2.7";
    else if (grade >= 76) return "2.8";
    else if (grade >= 75) return "2.9";
    else if (grade >= 70) return "3.0";
    else return "5.0";
}

function clearForm() {
    document.getElementById('studentName').value = "";
    document.getElementById('studentNumber').value = "";
    document.getElementById('midterm').value = "";
    document.getElementById('final').value = "";
    document.getElementById('finalGrade').value = "";
    document.getElementById('remarks').value = "";
}
