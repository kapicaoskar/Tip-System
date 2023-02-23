import $ from 'jquery';
let price = ""
let paymentMethod = ""
let redirectLink = ""
let paymentToken = ""
let nick = ""
let message = ""
let email = ""


export default (props) => {
    function transfer(){
        $("#paypal").css("border", "transparent")
        $("#blik").css("border-color", "transparent")
        $("#transfer").css("border", "1.9px solid rgb(57, 46, 255)")
        paymentMethod = "transfer"
    }
    function blik(){
        $("#paypal").css("border", "transparent")
        $("#transfer").css("border-color", "transparent")
        $("#blik").css("border", "1.9px solid rgb(57, 46, 255)")
        paymentMethod = "blik"
    }
    function paypal(){
        $("#transfer").css("border", "transparent")
        $("#blik").css("border-color", "transparent")
        $("#paypal").css("border", "1.9px solid rgb(57, 46, 255)")
        paymentMethod = "paypal"
    }
    function payButton(){
        price = $('#price').val()
        email = $('#email').val()
        message = $('#message').val()
        nick = $('#nick').val()
        if (price === "" || paymentMethod === "" ){
          const para = document.createElement("H2");
          para.setAttribute("id", "textError2")
      const node = document.createTextNode("Upewnij się że wypełniłeś wszystkie pola!");
      para.appendChild(node);
      const footerDoc = document.querySelector("#formData2")
      if( $('#textError2').length )         
      {} else {footerDoc.appendChild(para)}
      } else {
      //Your api to generate checkout needs to return redirectLink and paymentToken
      $.get(`https://api.oskar.dev/stores/${props.serviceToken}/payments/public/?email=${email}&paymentChannel=${paymentMethod}&price=${price}`, function( data , xhr) {
        redirectLink = data.redirectUrl;
        paymentToken = data.tokenPayment;
        window.location.href = redirectLink;
      });
      }
      }
    return (
        <div id="hider2">
<div id="formData2" className="flex justify-center m-auto mt-[-10px] ">
<p className="ml-[-310px] text-white    Inter font-bold mt-[385px] flex justify-left" id="priceText">Kwota</p>
<input id="price" type="number" placeholder="Kwota minimum 5.00 zł" className="border-transparent focus:outline-none placeholder:text-base    text-white pl-[14px] w-[359px] h-[51px] rounded-lg absolute top-2/4 flex justify-center m-auto mt-[-40px]   bg-slate-800 "></input>
<p className="ml-[-160px] text-white    Inter font-bold mt-[480px] flex absolute justify-left rounded-lg " id="payMethod">Wybierz metodę płatnośći</p>
<div id="paypal" className="w-[165px] h-[75px] flex justify-center      m-auto right-48 absolute inset-x-0  bg-slate-800 rounded-lg mt-[510px]  " onClick={paypal}>
<img alt="paypal-logo" src="https://cdn.discordapp.com/attachments/1076893397597573281/1077314141003448351/Paypal_2014_logo.png" className="w-[50px] h-[50px] mt-3"></img>
</div>
<div id="blik" className="w-[165px] h-[75px] flex justify-center      m-auto left-48 absolute inset-x-0  bg-slate-800 rounded-lg mt-[510px]  " onClick={blik}>
<img alt="blik-logo" src="https://cdn.discordapp.com/attachments/1076893397597573281/1077315280168030258/blik-logo-A759DC4120-seeklogo.com.png" className="w-[70px] h-[40px] mt-4"></img>
</div>
<div id="transfer" className="w-[165px] h-[75px] flex justify-center      m-auto  absolute inset-x-0  bg-slate-800 rounded-lg mt-[595px]  " onClick={transfer}>
<img id="transferIMG" alt="transfer-logo" src="https://cdn.discordapp.com/attachments/1057070797996441621/1065716194142855198/22323232-removebg-preview.png" className="w-[70px] h-[70px] ml-4 mt-[2px] absolute"></img>
</div>

<p id="text" className="  absolute w-[442px]  Inter font-regular mt-[685px] flex justify-left">Klikając przycisk “Zakup” oświadczam, że zapoznałem/-am się z regulaminem serwisu <a className="absolute mt-[24px] ml-[165px] text-indigo-400">five-pay.net  ( https://five-pay.net/tos )  </a> </p>
<p id="text2" className="  absolute w-[442px]  Inter font-regular mt-[735px] flex justify-left">Klikając przycisk “Zakup” oświadczam, że zapoznałem/-am się, że nie przysługuje mi prawo do odstąpienia od umowy zawartej elektronicznie </p>
<button id="payButton" className="text-white text-2xl Inter font-bold pt-1 w-[442px] duration-500 hover:bg-indigo-700     h-[45px] rounded-lg absolute top-2/4 flex justify-center m-auto mt-[360px]   bg-indigo-400  "  onClick={payButton} >Zakup</button>
</div>
</div>
    )
}