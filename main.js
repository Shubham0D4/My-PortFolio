// gives current date and time
var currentdate = new Date(); 
var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();




if (localStorage.getItem('visitorCount')) {
    let count = parseInt(localStorage.getItem('visitorCount'));
    count++;
    localStorage.setItem('visitorCount', count);
} else {
    localStorage.setItem('visitorCount', 1);
}
let count = localStorage.getItem('visitorCount');



var div = document.querySelector(".date");
div.innerHTML = datetime;
var visits = document.querySelector(".visitors");
visits.innerHTML = count;


//empty the fields after press

var btn = document.querySelector(".input");
btn.addEventListener('click', ()=>{
    document.querySelector("input").value = "";
    document.querySelector(".mail").value = "";
    document.querySelector("textarea").value = "";
    document.querySelector(".user").focus();
});




// optimise this all code create a responsive code using css keeping color thene and bacic structur same and no manipulation of links Also responcie code seprate from main css file. and store responsive code in another file. give me optimised and responsive code. responsiveness should be all device based. like from smallest mobile screen to biggest desktop screen.