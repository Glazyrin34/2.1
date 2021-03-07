"use strict";

//Задача 1
function getSolutions (a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let x1, x2;

    if(D < 0) {
        return {
            D,
            roots: []
        };
    } else if (D === 0) {
        x1 = (-b)/(2 * a);
        
        return {
            D,
            roots: [x1]
        }
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);

        return {
            D,
            roots: [x1, x2]
        }
    }
}

function showSolutionsMessage (a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень x1 = ${result.roots[0]}`);
    } else if (result.D > 0) {
       console.log(`Уравнение имеет два корня. x1 = ${result.roots[0]}, x2 = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//Задача 2
function getAverageScore(data) {
    let averageScore = {};
    let objectLength = 0;

    for (let key in data) {
        averageScore[key] = getAverageMark(data[key]);
        objectLength++;
    }
    if (objectLength === 0) {
        return averageScore.average = 0;
    }

    averageScore.average = (Object.values(averageScore).reduce((a, b) => a + b)) / objectLength;

    return averageScore;
}

function getAverageMark(marks) {
    let sum = 0;

    if (marks.length === 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let averageSum = sum / marks.length;
    
    return averageSum;
}

console.log(getAverageScore({geometry: [2, 4, 5],
    algebra: [2,4,5,2,3,4],
    russian: [3,3,4,5],
    physics:[5,5]}));
