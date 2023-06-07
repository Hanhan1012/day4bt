//1
let grades = prompt('Enter grade:')
if (grades >= 80){
  console.log(`A`)  
} else if (grades >=70 && grades <= 89){
    console.log(`B`)
} else if (grades >=60 && grades <= 69){
    console.log(`C`)
}
else if (grades >=50&& grades <= 59){
    console.log(`D`)
}else{
    console.log(`F`)
}
//2
const month2 = prompt('Enter month:')
if (month2 === 'September' || month2=== 'October' || month2==="November"){
  console.log(`Autumn.`)  
} else if (month2==="December" || month2 === "January"  || month2=== "February" ){
    console.log(`Winter.`)
}else if (month2=== "March" || month2 === "April" || month2===  "May" ){
    console.log(`Spring`)
}else {
    console.log(`Summer`)
}
//3

let day = prompt('What is the day today ?')
if (day === 'Friday') {
    console.log(`Friday is a working day`)  
  } else if (day==="FrIDAy" ){
      console.log(`Friday is a working day`)
  }else if (day=== "saturDaY" ){
      console.log(`Saturday is a weekend`)
  }else if (day==="Saturday" ){
        console.log(`Saturday is a weekend`)
    }else {
      console.log(`It is not a week day.`)
  }

