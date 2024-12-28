const textElem = document.getElementById("welcome");
const hours = new Date().getHours();
if( (hours > 6) && (hours < 12)){
    textElem.innerHTML = "Good Morning! ";
}else if(hours < 16){
    textElem.innerHTML = "Good Afternoon! ";
}else{
    textElem.innerHTML = "Good Evening! ";
}