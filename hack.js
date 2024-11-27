// script.js
const starthack=()=>{
const phone=document.getElementById("phone").value;
const insta=document.getElementById("insta").value;
const whole=document.getElementById("whole").value;
const user=document.getElementById("userinput").value;

if(!user){
    alert("Please Enter a target");
    return;
}

const output = document.getElementById("output");

const messages = [
    `Target acquired: ${user}`,
  "Initializing Hackerman Console...",
  "Establishing Connection to Mainframe...",
  `Hacking ${user}...`,

  "Breaching Security Protocols...",
  "Accessing Admin Privileges...",
  "Uploading Fake Virus...",
  "System Breached! Access Granted!",
  
];

if (phone) {
    messages.push(`hacked: ${user}`);
  }




  output.innerHTML = "";

let index = 0;

function printMessage() {
  if (index < messages.length) {
    
    const message = messages[index];
    const newLine = document.createElement("p");
    newLine.textContent = message;
    output.appendChild(newLine);
    output.scrollTop = output.scrollHeight;
    index++;
    setTimeout(printMessage, 1000); // Adjust typing speed here
  }
}


setTimeout(()=>{ 
    messages.push(`Prank Successful! ${user} has been hacked by Hackerman! Just kidding! 😜`);
    const message = messages[index];
    const newLine = document.createElement("p");
    newLine.textContent = message;
    output.appendChild(newLine);
    output.scrollTop = output.scrollHeight;
    index++;

},20000);

printMessage();}


