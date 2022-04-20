arry=[
    "arry one",
    "arry two",
    "arry three",
    "arry for",
    "arry five",
    "arry six",
    "arry end"
]




for (let i = 0; i <= arry.length+1; i++) {
    
    if(i == arry.length ){i = -1;}
    
    
    setTimeout(()=>{

        console.log(arry[i]);
        
    },i*2000)
    
    


}
