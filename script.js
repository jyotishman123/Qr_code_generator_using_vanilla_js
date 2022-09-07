let Link_Area = document.getElementsByClassName("link-area")[0];
let GenBtn = document.getElementById("Generatebtn");
let Input = document.getElementsByTagName("input")[0];
let para  = document.getElementsByClassName("para1")[0];

GenBtn.addEventListener("click",()=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET",`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Input.value}`,true)
     
   xhr.responseType = "blob"
  //  console.log(xhr.responseType)
   xhr.send();
    xhr.addEventListener("load",()=>{
      if(xhr.readyState == 4){
        console.log(xhr.response)
        let file = URL.createObjectURL(xhr.response);
        
        para.innerHTML = "Your Qr is"
        Link_Area.innerHTML = `
    <div class="image-section">
    <img src="${file}" alt="">
</div>
<a href="${file}" download="qr_code"><button id="Downloadbtn">Download</button></a>
<button id="return">Return</button>

`
const returnbtn = document.getElementById("return")
returnbtn.addEventListener("click",returnfync)
// console.log(file)
      }
    })
})


function returnfync(){
location.reload()
}