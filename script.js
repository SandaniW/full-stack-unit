const heading = document.getElementById("welcome");
const hours = new Date().getHours();
let greeting;
if( (hours > 6) && (hours < 12)){
    greeting = "Good Morning!";
}else if(hours < 16){
    greeting = "Good Afternoon! ";
}else{
    greeting = "Good Evening! ";
}
heading.innerHTML = greeting + "<br>" + heading.textContent;