//----Create a close button and append it to each list item----
var myNodelist=document.getElementsByTagName("LI")
var i;
for(i=0; i<myNodelist.length; i++){
    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7")
    span.className="close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    // <span class=close>"u00D7"</span>, then attach this ele to every lists.
}

//----Click on a close button to hide the current list item----
var close=document.getElementsByClassName("close");
var i;
for(i=0; i<close.length; i++){
    close[i].onclick=function() {
        var div=this.parentElement
        div.style.display="none"
    }
}

//----Add a "checked" symbol when clicking on a list item----
var list=document.querySelector('ul')
list.addEventListener('click', function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked')
        //return ele and class
        // change the ele and class to 'checked'
    }
}, false)
        //classList: return css style; target: return element;

//----Create a new list item when clicking on the Add button----
function newElement(){
    var li=document.createElement("li")
    var inputValue=document.getElementById("myInput").value
    var t=document.createTextNode(inputValue)
    li.appendChild(t)
    //When clicked, create new list and attach with input value

    //If the input is empty, print alert. Otherwise add the input value to the list.    
    if(inputValue===''){
        alert("You must write something!")
    }else{
        document.getElementById("myUL").appendChild(li)
    }

    // reset the textbox
    document.getElementById("myInput").value="";

    // create close button for new list
    var span=document.createElement("SPAN")
    var txt=document.createTextNode("\u00D7")
    span.className="close"
    span.appendChild(txt)
    li.appendChild(span)

    for(i=0; i<close.length; i++){
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display="none";
        }
    }
}