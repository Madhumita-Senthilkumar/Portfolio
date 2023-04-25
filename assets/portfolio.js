function validate()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var country=document.getElementById("country").value;
    var subject=document.getElementById("subject").value;
    if(name=="" && email=="" && country=="" && subject=="")
    {
        alert("All fields are required");
        return false;
    }
}