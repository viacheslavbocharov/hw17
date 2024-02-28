//Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. 
//При пропажі фокусу - <div> так само пропадає
let myElement = document.querySelector('.text');
let myMessage = document.querySelector('.message');

const toggleMessage = () => { myMessage.classList.toggle('active'); };

myElement.addEventListener("mouseover", toggleMessage)
myElement.addEventListener("mouseout", toggleMessage)