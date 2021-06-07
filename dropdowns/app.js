//School - Samarth
function setSchoolValue() {
    var sel = document.getElementById("school");
    var text= sel.options[sel.selectedIndex].text;
}

function setBooksValue() {
    var val = document.getElementById("books").value;  
    var custombooks = document.getElementById('suppliesbox'); 
    var sel = document.getElementById("books");
    var text= sel.options[sel.selectedIndex].text;
    if(val==="2") {
        document.getElementById("suppliesbox").removeAttribute('disabled');
    }
    else{
        document.getElementById("suppliesbox").disabled = true;
    }
}

function setTravelValue() {
    var val = document.getElementById("travel").value;
    var customtravel = document.getElementById('travelbox');
    var sel = document.getElementById("travel");
    var text= sel.options[sel.selectedIndex].text;
    if(val==="9") {
        document.getElementById("travelbox").removeAttribute('disabled');
    }
    else{
        document.getElementById("travelbox").disabled = true;
    }
}

//In/Out of State - Amshala
function setResidencyValue(){
    var sel = document.getElementById("residency");
    var text = sel.options[sel.selectedIndex].text;
}

//Year - Geetanjali
function setYearValue() {
    var sel = document.getElementById("year");
    var text= sel.options[sel.selectedIndex].text;
    alert(text);
 }  
//Dining - Kevin

function setDiningValue() {
    var val = document.getElementById("dining").value;
    var sel = document.getElementById("travel");
    var text = sel.options[sel.selectedIndex].text;
    if(val==="2") {
        document.getElementById("diningbox").removeAttribute('disabled');
    }
    else{
        document.getElementById("diningbox").disabled = true;
    }
}

function customTravelActivated(){
    //validate money value inputted
    var customtravel = document.getElementById('travelbox').value;
    alert(customtravel);
}

function customSuppliesActivated(){
    var customsupplies = document.getElementById('suppliesbox').value;
    alert(customsupplies);
}

function customDiningActivated(){
    var customdining = document.getElementById('diningbox').value;
    alert(customdining);
}

function customMiscActivated(){
    var custommisc = document.getElementById('miscboxz').value;
    alert(custommisc);
}

function calculate(){
    var sum = "SUM";
    alert(sum);
}
