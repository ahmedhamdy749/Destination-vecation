(function(){
    "use strict";

    const detailsForm = document.querySelector('#destination_details_form');
detailsForm.addEventListener('sumit', handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    const destname = event.target.elements['name'].value;
    const destlocation = event.target.elements['location'].value;
    const destphoto = event.target.elements['photo'].value;
    const destdesc = event.target.elements['description'].value;
    for (var i=0; i< detailsForm.clientHeight; i++){

        detailsForm.elements[i].value="";
    }

    var destCard = creatDestinationCard(destname, destlocation, destphoto, destdesc);
    // creat card here....

    var wishlistcontainer = document.getElementById('destination_container');
    if(wishlistcontainer.children.length===0){
        document.getElementById('title').innerHTML = "my wish List";
      }
      document.querySelector('#destination_container').appendChild(destCard);
}

function creatDestinationCard(name, location, photoURL, description){

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.setAttribute('alt', name);
    const constantPhotoUrl = "images/signpost.jpg";

    if (photoURL.length === 0){
        img.setAttribute('src', constantPhotoUrl);
    }
    else{
        img.setAttribute('src',photoURL );
    }

    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className="card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);


    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);



    if(description.length !== 0){

        const cardText = document.createElement("p");
        cardText.className="card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }


    const cardDeletebtn = document.createElement("button");
    cardDeletebtn.innerText = "Remove";
    cardDeletebtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeletebtn);


    card.appendChild(cardBody);
    return card;
}

function removeDestination(event){
    const card =event.target.parntElement.parentElement;
    card.remove();
}
})();



