const marks = [95,54,67,83,49,76];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    total = calculateAverage(marks);
    if (total>90) return "Grade A"
    if (total>80) return "Grade B"
    if (total>70) return "Grade C"
    if (total>60) return "Grade D"
    return "Grade F"
}

function calculateAverage(array){
    let total = 0;
    for(let x = 0;x<marks.length;x++)
        total += marks[x];
    return(total/marks.length);

}