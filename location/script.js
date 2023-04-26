
//declarar uma funcao chamada getLocation, que será responsavel 
//por obter a localizaçao do usuario

let lat, lon;


function getLocation(){

    //testar se nao existe a localizacao 

    if(!navigator.geolocation){

        return null;
    }

    //se ele passar pelo erro, pegamos a localizaçao
    navigator.geolocation.getCurrentPosition(function(pos){

        //a seguir, vamos selecionar o elemento HTML com o ID "lat"
        //e atualizar o seu conteudo de texto (innerText) com a latitude
        //obtida a partir do objeto Position(pos.coords.latitude)
        
        lat = document.getElementById("lat").innerHTML=pos.coords.latitude

        //a seguir, vamos selecionar o elemento HTML com o ID "lat"

        lon = document.getElementById("lon").innerHTML=pos.coords.longitude

        
    })

}


function initMap() {
    // The location of Uluru
    const uluru = { lat: lat, lng: lon };
    
    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    }
    initMap()
    getLocation()