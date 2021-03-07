"use strict";

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
        return "Уравнение не имеет вещественных корней";
    } else if (result.D === 0) {
        return `Уравнение имеет один корень x1 = ${result.roots[0]}`;
    } else if (result.D > 0) {
        return `Уравнение имеет два корня. x1 = ${result.roots[0]}, x2 = ${result.roots[1]}`
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2); 

function getAverageMark(marks) {
    
}