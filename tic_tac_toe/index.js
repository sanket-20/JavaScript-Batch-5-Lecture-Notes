const state = [1,0,1,1,0,0,0,1,1];

// var count = 1;
var flag = true;
document.getElementById("mainDiv").addEventListener('click', (e)=>{
    // if(count%2==1)
    //     e.target.innerText = "X";  
    // else
    //     e.target.innerText = "O"; 
    // ++count;
    var id = e.target.id;
    console.log(id);
    if(state[id] == 1 || state[id] == 0){
        if(flag){
            e.target.innerText = "X"; 
            state[id]="X";
            flag = !flag; 
        }
        else{
            e.target.innerText = "O"; 
            state[id]="O"; 
            flag = !flag;
        }
    }
    // else
    // {
    //     alert("Not allowed");
    // }
    
    console.log(state);
});