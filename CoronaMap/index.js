function updateMap() {
    console.log("Updating map with realtime data")
    // fetch API is used to take data from a data field
    // fetch ke andar ka url promise return krta hai
    fetch("/data.json")    
        .then(response => response.json())
        .then(rsp => {   // rsp is an object which stores array_data
            console.log(rsp.data)   // rsp.data : we get array only
            rsp.data.forEach(element => {       // we are taking data from data.json
                latitude = element.latitude;    
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = "rgb(${cases}, 0, 0)";
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: true,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map); 
            });
        })
}

let interval = 20000;
setInterval( updateMap, interval);    // ek time interval pe ek function ko read krta hai