// First question answer 

const exampleArray=[1,2,3,4,5,6]
const nthElement=5

function returnElements(arr,n){
     if (n>arr.length){
        return exampleArray
     }
     else if (n<1){
        return []
     }
     else{
        return arr.slice(-n)
     }
}

console.log(returnElements(exampleArray,nthElement))

// Second question answer 

const inputNumber=25468

function insertDashesBetweenEvenNums(numberValue){
    let initialaString=""
    const strNum=numberValue.toString()
    for (let num=0;num<=strNum.length-1;num++){
        if (Number(strNum[num])%2==0 && Number(strNum[num+1])%2==0){
            initialaString=initialaString+strNum[num]+"-"
        }
        else{
            initialaString+=strNum[num]
        }
    }
    return initialaString
}
    

console.log(insertDashesBetweenEvenNums(inputNumber))

// Third question answer 

let oneDimentionaArr=[]
// Problem solved using recursion
function flatten(nestedArray){
    for (let item of nestedArray){
        if (Array.isArray(item)){
            flatten(item)
        }
        else{
            oneDimentionaArr.push(item)
        }
    }
    return oneDimentionaArr
}

// Problem solved with flat function using (Infinite) as parameter to the flat() method
// function flatten(nestedArray){
//     return nestedArray.flat(Infinity)
// }

console.log(flatten([1,[2,7],[3,[[4]]],[5,6]]))

// 4th question answer 

var library=[{title:"The Road Ahead",author:"Bill Gates",libraryId:1254},
{title:"Walter Isaacson",author:"Steve Jobs",libraryId:4264},
{title:"Mockingjay: The Final Books of The Final Games",author:"Suzanne Collins",libraryId:3245}]

console.log(sortArrayOfObjects(library))

function sortArrayOfObjects(library){
    const sortedArr=library.sort((accumulator,currentValue)=>accumulator.libraryId-currentValue.libraryId)
    return sortedArr
}

// 5th question answer 

const colorsObject={red:"#FF0000",green:"#00FF00",white:"#FFFFFF"}

function manupulateColorsObject(colorsObject){
    let newArr={}
    const keyValuesArray=Object.entries(colorsObject)
    for (let [key,value] of keyValuesArray){
        newArr[value]=key
    }
     return newArr
}

console.log(manupulateColorsObject(colorsObject))

// 6th question answer 

// import array 
// a=[4,6,8,3,7,8]
// print(a[-3]) output:3
// print(a[-5]) output:6 
// print(a[-1]) output:8

// 7th question answer 

// l=[3,5,8,2,9,0,1]
// def findMeanOfList(listOfNums):
//     if listOfNums:
//         print(sum(listOfNums)/len(listOfNums))
//     else:
//         print("We can't find mean with empty array")
// findMeanOfList(l)

// 8th question answer 

// Data mining and machine learning are 
// two related technologies that are often used 
// interchangeably. Data mining is the process of finding patte
// rns and insights in large datasets. Machine learning is the process of developing algor
// ithms and models that learn from data and make predictions or decisions. 
// Data mining is used on existing datasets to find patterns. 
// Machine learning is trained on a "training" dataset, 
// which teaches the computer how to make sense of data and make 
//  predictions about new datasets. 
// Data mining is limited to how data is organized and collected. 
// Machine learning identifies the correlations between 
// all relevant data points to deliver accurate conclusions. 
// Data mining is used to define a business problem. 
// Machine learning techniques can be used to resolve the problem.


// 9th question answer 

// Model selection is a crucial phase in the development 
// of precise predictive models in machine learning. 
// Selecting the correct model is important to get the desired outcome.

// 10th question answer 

// The three stages to build the hypotheses in machine 
// learning are model building, model testing and applying model.








