const wrapper = document.querySelector(".wrapper");
generateBtn = document.querySelector(".form button");
qrInput = document.querySelector(".form input");
qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", ()=>{
    let qrValue = qrInput.value;
     if(!qrValue) return;
     generateBtn.innerText = "Generating QR Code.."
    qrImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerText="Generating QR Code"
    })
    
});
qrInput.addEventListener("Keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
 
    }
})

