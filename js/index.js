

// var registry ={
//     "student": "Endi Vulka",
//     "country" : "Albania",
//     "age": "27",
// }
// document.write(registry.student + " you are from " + registry.country + " and you are " + registry.age + " years old" );


var registry ={
    "student": "Endi Vulka",
    "country" : "Albania",
    "age": "27",
    informacion: function (){
        return this.student + " you are from " + this.country 
    }
}
document.write(registry.informacion());
// document.write(registry.student + " you are from " + registry.country + " and you are " + registry.age + " years old" );
document.getElementsByTagName("h1")[0].addEventListener("click",function(){
    this.innerHTML="CKEMI"
})