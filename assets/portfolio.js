function validate()
{
    var name=document.forms["myForm"]["name"].value;
    var email=document.forms["myForm"]["email"].value;
    var country=document.forms["myForm"]["country"].value;
    var subject=document.forms["myForm"]["subject"].value;
    if(name=="" && email=="" && country=="" && subject=="")
    {
        alert("All fields are required");
        return false;
    }
    alert("ThankYou")
}