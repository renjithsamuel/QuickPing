import {io} from "socket.io-client";

const socket  = io('http://localhost:3000');

socket.on("connect",()=>{
    console.log(`you have connected with the server with socket id : ${socket.id}`);
})



function displaymessage(msg){
    if(msg==='')return;
    let box = document.getElementById('box');
    let addedmsg = document.createElement('div');
    addedmsg.innerHTML = msg;
    addedmsg.style.border = '1px solid grey';
    addedmsg.style.backgroundColor = 'grey';
    addedmsg.style.color = 'white';

    addedmsg.style.borderRadius = '15px';
    addedmsg.style.height = '2vh';
    addedmsg.style.marginBottom = '3vh';
    addedmsg.style.padding = '1vh';
    box.appendChild(addedmsg)    
    // box.innerHTML = msg;
    msg = '';
}

socket.on('recived-message',(msg)=>{
    displaymessage(msg);
})


let msg = document.getElementById('msgbtn');
msg.addEventListener('click', ()=>{
    let msg = document.getElementById('msginp').value;
    socket.emit("send-message", msg);


    // console.log(msg);
    if(msg==='')return;
    let box = document.getElementById('box');
    let addedmsg = document.createElement('div');
    addedmsg.innerHTML = msg;
    addedmsg.style.border = '1px solid grey';
    addedmsg.style.borderRadius = '15px';
    addedmsg.style.height = '2vh';
    addedmsg.style.marginBottom = '3vh';
    addedmsg.style.padding = '1vh';
    box.appendChild(addedmsg)    
    // box.innerHTML = msg;
    msg = '';
});