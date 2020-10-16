function getSolutions(a,b,c) {
  
  let x = [ ],
      x1,
      x2; 
  let D = (b**2) - (4*a*c);
  
  
  if(D < 0){
    return {D, roots:[], rootResult: "Уравнение не имеет вещественных корней"};

  }else if (D > 0) {
    x1 = (-b - Math.sqrt(D)) / (2 * a);
    x2 = (-b + Math.sqrt(D)) / (2 * a);
    return {D, roots: [x1,x2], rootResult: "Уравнение имеет два корня x1 =" + x1 + "x2 =" + x2};

  }else if (D == 0) {
    x1 = -b / (2*a);
    return {D, roots: [x1], rootResult: "Уравнение имеет один корень X₁ =" + x1}; 
  }
}

function showSolutionsMessage (a,b,c) {

  let result = getSolutions(a,b,c); 

  return `Вычисляем корни квадратного уравнения ${a}x2 + ${b}x + ${c} \n` + `Значение дискриминанта:${result.D} \n` + result.rootResult;
   
} 





function getAverageMark(marks) {
  let averageMark = 0;
     
  if (marks.length == 0) {
    return 0;
  }
    
  for (let i = 0; i < marks.length; i++) {
    averageMark += marks[i];  
  }
  
  return averageMark/marks.length;
}


function getAverageScore(data) {
  let i = 0;
  let sum = 0;
  for (let prop in data) {
    i += 1;
    if (i < 10) {
      let value = getAverageMark(data[prop]);
      data[prop] = value; 
    } else {
      delete data[prop];
      }
  }
  let average1 = Object.values(data);
  let averageSum = getAverageMark(average1);
  data.average = averageSum;  
  return data;
}





function getDecodedValue(secret) {
  
  return (secret <= 0) ? 'Эмильо' : 'Родриго'; 
}



function getPersonData(secretData) {

  let i = 0; 
  for (let prop in secretData) {
    let value = getDecodedValue(secretData[prop]); 
    if (i == 0) {
      secretData[prop] = value; 
      secretData.firstname = secretData[prop];
    } else if (i == 1) {   
      secretData[prop] = value; 
      secretData.secondname = secretData[prop];
    }
     i += 1;
  }
  delete secretData.aaa;
  delete secretData.bbb;
  return secretData;
}

console.log(getPersonData({aaa:0, bbb:1}))

