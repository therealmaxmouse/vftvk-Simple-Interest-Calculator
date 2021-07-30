function compute()
{
    var principal = document.getElementById("principal").value;
    var initialrate = document.getElementById("rate").defaultValue;
    var years = document.getElementById("years").value;
    var interest = principal * years * initialrate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+initialrate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
    document.getElementById("rate").defaultValue=rateval; 
}
