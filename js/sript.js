let clones =  parseInt(prompt("ingrese numero de clones"));

while ( clones < 20 ) {
    console.log( "creaste " + clones  + " clones");
    clones = parseInt(prompt("creaste " + clones + " clones"));
}if ( clones > 20 ){
    clones = prompt( "No puedo hacer mas kage bushin no jutsu");
}