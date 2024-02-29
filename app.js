//Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. 
//При пропажі фокусу - <div> так само пропадає
let myInput = document.querySelector('input[type="text"]');
let myMessage = document.querySelector('.message');

const toggleMessage = () => { myMessage.classList.toggle('active'); };
//Hover effect
// myInput.addEventListener("mouseover", toggleMessage)
// myInput.addEventListener("mouseout", toggleMessage)


//Focus
myInput.addEventListener("focus", toggleMessage);
myInput.addEventListener("blur", toggleMessage);
