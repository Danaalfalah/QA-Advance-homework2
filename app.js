console.log(" Students Grade Marks")

let studentsName=["Mahmoud","Dana","Zaid","Esmael"]
let studentsMarks=[43,80,66,33]

function StudentsMarks(params) {

    for (let i = 0; i< studentsName.length; i++) {

      for (let k = 0; k <studentsName.length; k++) {
       if (studentsMarks[k]>=50 && i==k) {
        console.log("Congrats "+studentsName[i]+" your score : " +studentsMarks[k]+" and you have passed 💖")
        continue;
       }
       else if (studentsMarks[k]<=50 && i==k){
        console.log("Sorry "+studentsName[i]+" your score : " +studentsMarks[k]+" and you have failed 😢 ")
        
       }
      
        
      }
        
    }
    
}

StudentsMarks()


