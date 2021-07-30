function compute()
{
    var principal = document.getElementById("principal").value;
    var initialrate = document.getElementById("rate").defaultValue;
    var years = document.getElementById("years").value;
    var interest = principal * years * initialrate /100;
    var year = new Date().getFullYear()+parseInt(years);

    if (principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
    document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+initialrate+"%\</mark\>.\<br\>You will receive an amount of \<mark\>"+interest+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
    document.getElementById("rate").defaultValue=rateval; 
}
