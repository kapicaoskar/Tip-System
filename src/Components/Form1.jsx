import $ from 'jquery';
let message = ""
let nick = ""
let email = ""


export default () => {
    function nextButton() {
        message = $('#message').val()
        nick = $('#nick').val()
        email = $('#email').val()
        if (nick === "" || message === "" || email === "" || email.includes("@") === false || email.includes(".") === false){
          const para = document.createElement("H2");
          para.setAttribute("id", "textError")
      const node = document.createTextNode("Upewnij się że wypełniłeś wszystkie pola!");
      para.appendChild(node);
      const footerDoc = document.querySelector("#formData")
      if( $('#textError').length )         
      {} else {footerDoc.appendChild(para)}
      } else {
        $('#textError').hide()
          $("#hider").css("display", "none");
          $("#container-tips").slideUp(300)
          setTimeout(function() {
            $("#hider2").css("display", "block");
            $("#container-tips").slideDown(300)
          }, 1000);
      }
      
    
    }
    return (
      
        <div id="hider">
<div id="formData" className="flex justify-center m-auto mt-[-10px] ">
<p className="ml-[-265px] text-white    Inter font-bold mt-[385px] flex justify-left" id="nicktext">Wpisz swój nick</p>
<input id="nick" type="text" placeholder="Twój nick" className="border-transparent focus:outline-none placeholder:text-base    text-white pl-[14px] w-[359px] h-[51px] rounded-lg absolute top-2/4 flex justify-center m-auto mt-[-40px]   bg-slate-800 "></input>

<p className="ml-[-120px] text-white    Inter font-bold mt-[485px] flex justify-left" id="emailtext">Adres email</p>
<input id="email" type="email" placeholder="Twój adres mail" className="border-transparent focus:outline-none placeholder:text-base    text-white pl-[14px] w-[359px] h-[51px] rounded-lg absolute top-2/4 flex justify-center m-auto mt-[60px]   bg-slate-800 "></input>

<p className="ml-[-90px] text-white    Inter font-bold mt-[585px] flex justify-left" id="messagetext">Wiadomość</p>
<input id="message" type="text" placeholder="Wpisz wiadomość (maksymalnie 50 znaków)" maxLength="50" className="border-transparent focus:outline-none placeholder:text-base    text-white pl-[14px] w-[359px] h-[123px] rounded-lg absolute top-2/4 flex justify-center m-auto mt-[160px]  pb-20 bg-slate-800 "></input>

<button id="nextButton" className="text-white text-2xl Inter font-bold pt-2 w-[359px] duration-500 hover:bg-indigo-700     h-[51px] rounded-lg absolute top-2/4 flex justify-center m-auto mt-[310px]   bg-indigo-400  "  onClick={nextButton} >Dalej</button>
</div> 
</div>



    )
}