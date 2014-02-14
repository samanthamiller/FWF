angular.module("PonyApp").service("ponyService",function(){

    var ponyArray= [
        {ponyName: "Pinky Pie",
         type: "Earth"
        },
        {ponyName: "Scootaloo",
         type: "Pegasus"
        },
        {ponyName: "Princess Luna",
         type: "Unicorn"
        }
    ];
this.getPonies= function(){
    var ponyList = JSON.parse(localStorage.getItem("poniesLS")) || ponyArray;
    ponyArray = ponyList;
    return ponyArray;
};
this.getPonyAt= function(idx){
    return ponyArray[idx];
};  
    
this.addNewPony= function(pPonyName, pType){
    
    var savePony= {ponyName: pPonyName, type: pType};    
    ponyArray.push(savePony);
    localStorage.setItem("poniesLS", JSON.stringify(ponyArray));
    window.location.hash = "/listview";

}
    
});

