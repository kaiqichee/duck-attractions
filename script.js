
function Submit(input) {
    event.preventDefault();

    u=document.getElementById("username").value;
    d=document.getElementById("date").value;
    i=document.getElementById("Img").value;
    c=document.getElementById("comment").value;

    if(i=="great"){
       l="happy.png";
    }
    else if(i=="good"){
       l="happy.png";
    }
    else if(i=="okay"){
       l="happy.png";
    }
    else if(i=="bad"){
       l="happy.png";
    }

    newComment(u,d,l,c);
}

function newComment(username, date, img, comment) {
    var newDiv=document.createElement("div");
    newDiv.className="review";
    document.getElementById("review").append(newDiv);
 
 
    var newH=document.createElement("h");
    var hContent=document.createTextNode(username);
    //var hContent2=document.createTextNode(date);
    newH.appendChild(hContent);
    //newH.appendChild(hContent2);
    newDiv.append(newH);

    var newP=document.createElement("p");
    var pContent=document.createTextNode(date);
    newP.appendChild(pContent);
    newDiv.append(newP);
 
    var newImg=document.createElement('img');
    newImg.src=img;
    newImg.className="rating";
    newImg.alt="rating photo";
    newDiv.append(newImg);
 
 
    var newP2=document.createElement("p");
    var pContent2=document.createTextNode(comment);
    newP2.appendChild(pContent2);
    newDiv.append(newP2);
 }
 
 window.onload = () => {
    postForm.addEventListener('submit', Submit);
 }