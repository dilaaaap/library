let myLibrary = [];

document.addEventListener('click', function(e) {
    e = window.event;
    var target = e.target, text = target.innerText;
    if(target.tagName.toLowerCase() == 'button')
    {
      if(text == 'Read'){
            Unread(target)
        }
        else if(text == 'Unread'){
            Read(target)
        }
        else if(text == 'Remove'){
            Remove(target)
        }
       
        }
    
    },false);
function Book(name,author,pages,readStatus){

}

function addBook() {
    var div = document.createElement("div");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var formData = new FormData(document.getElementById("bookForm"));
    let i = 0;
    let name1 = "";
    let author1 = "";
    let pages1 = "";
    let read1 = "off";
    const form = document.getElementById('bookForm');
    for(var p of formData){
        if (i == 0){
            i++;
             name1 = p[1];
        }
        else if (i == 1){
            i++;
             author1 = p[1];
        }
        else if (i == 2){
            i++;
             pages1 = p[1];
        }
        else{
             read1 = p[1];
        }
        
    }
    console.log('read1 is')
    console.log(read1)
    p1.innerHTML = name1;
    p2.innerHTML = author1;
    p3.innerHTML = pages1;
    if(read1 == "on"){
        button1.innerHTML = "Read";
        button1.style.backgroundColor = "green";
    }
    else{
        button1.innerHTML = "Unread";
        button1.style.backgroundColor = "red";
    }
    div.className = "card";
    p1.className = "name";
    p2.className = "author";
    p3.className = "pages";
    button1.className = "readUnread";
    button2.className = "remove";
   
    button2.innerHTML = "Remove";
    document.getElementById("books").appendChild(div);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(button1);
    div.appendChild(button2); 
    closeBookForm()
    document.getElementById("name").innerHTML = "";
    document.getElementById("author").innerHTML = "";
    document.getElementById("pages").innerHTML = "";
    document.getElementById("reader").checked = false;
    form.reset();
}
function Login(){
    openForm()
}
function Read(input){
    input.innerHTML = "Read";
    input.style.backgroundColor = "green";
}
function Unread(input){
    input.innerHTML = "Unread";
    input.style.backgroundColor = "red";
}
function Remove(input){
    input.parentElement.remove();
}
function openForm(){
    document.getElementById("popupForm").style.display="block";
}
function closeForm(){
    document.getElementById("popupForm").style.display="none";
}
function openBookForm(){
    document.getElementById("popupBookForm").style.display="block";
}
function closeBookForm(){
    document.getElementById("popupBookForm").style.display="none";
}