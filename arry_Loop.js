const arry=[
    "arry one",
    "arry two",
    "arry three",
    "arry for",
    "arry five",
    "arry six",
    "arry end"
]










let limit = 0

function arryloop() {


    console.log(arry[limit]);

    limit++;

    if(limit == arry.length){limit = 0}


    setTimeout(arryloop, 1000)
  }
  
  arryloop();




  
