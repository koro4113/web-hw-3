console.log("مرحبا بك في برنامج توظيف المبرمجين برجى الأجابه على الأسئلة التالية");

// ادخال المعلومات
let name = prompt("ادخل اسمك");
let age = parseInt(prompt("ادخل عمرك"));
let experience = parseInt(prompt("كم عدد سنوات الخبرة لديك؟؟"));

// اللغات
let languges = [
"1:html", 
"2:css",
"3:javescript",
"4:PHP",
"5:swift",
"6:jave"
]


// الطباعة
console.log("لغات البرمجه");
  console.log(languges[0]);
     console.log(languges[1]);
       console.log(languges[2]);
          console.log(languges[3]);
             console.log(languges[4]);
               console.log(languges[5]);


// ادخال اللغات
               let lang1 = parseInt(prompt("ادخل لغة برمجه من لغات البرمحه التي تتقنها"));
               let lang2 = parseInt(prompt("ادخل لغة برمجه اخرى من لغات البرمحه التي تتقنها"));


 
if(age > 25 && age < 40 && experience > 3 && lang1 == 3 || lang2 == 3){

    console.log(  "مبروك لقد تم قبولك" + " " + name )


} 
else{
console.log("انت لست بشخص مميز مرفوض")
}

// number 2



function logger (hotday) {
 for (let i = 0; i < hotday.length; i++) {
console.log(hotday[i]);
  }
}
function feh(hotday) {
for (let i = 0; i < hotday.length; i++) {
re_array.push(parseInt((hotday[i]- 32) * (5 / 9)));
  }
return re_array;
}
function hottestDays (hotday, min_value) {
 for (let i = 0; i < hotday.length; i++) {
 if (hotday[i] > min_value) {
hot.push(hotday[i]);
      }
  }
  return hot;
} 





let f_temp_array = [35, 72, 98, 116];
let threshold = 72;
let hot = [];
let re_array = [];
function logHottestDays(input_array, min_value) {
logger(fromFeh(hottestDays(input_array, min_value)));
}
logHottestDays(f_temp_array, threshold);



// number3



let csd=[];
 function Calculator(){
    let quiz= document.getElementById("input").value;
 
    let midterm = document.getElementById("input1").value;
    
 let  finaltest = document.getElementById("input2").value;
      
let or= document.getElementById("input3").value;

  let quiz1= Number(quiz);
  let midterm1= Number(midterm);
  let  finaltest1 = Number(finaltest);
  let or1 =  Number(or);
  let kuz=((quiz1 /10)+ (midterm1/25)+ (finaltest1 /50)+(oral1 /15 ));
  
  console.log(kuz);
if(
    kuz >= 90 
  
)
 {
console.log(kuz+" A")
}
 else if(
 kuz >= 80 
)
    {
console.log(kuz+" B")
   
}
else if(
    kuz >=70  
)
    {
console.log(kuz+" C")   
}
else if(
    kuz >= 60 
)
    {
console.log(kuz+" C")   
}
else
{
   console.log(kuz+" f")
}
 }
 
