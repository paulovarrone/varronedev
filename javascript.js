 // MENU NAVIGATION ANIMATION

 const list = document.querySelectorAll('.list');
 function activeLink(){
     list.forEach((item) => 
     item.classList.remove('active'));
     this.classList.add('active');
 }
 list.forEach((item) => 
 item.addEventListener('click', activeLink));

 // LANGUAGE CHANGE

 const flagUK = document.getElementById("flag-uk");
 const flagBR = document.getElementById("flag-br");
 
 const text1 = document.querySelector(".txt1");
 const text2 = document.querySelector(".txt2");
 const text3 = document.querySelector(".txt3");
 
 const h1 = document.querySelector(".h1"); 
 const h2 = document.querySelector(".h2"); 
 const h3 = document.querySelector(".h3"); 
 const h4 = document.querySelector(".h4"); 

 // STORE ORIGINAL TEXT IN PAGE (PT-BR)
 const originalText1 = text1.textContent;
 const originalText2 = text2.textContent;
 const originalText3 = text3.textContent;

 const originalH1 = h1.textContent;
 const originalH2 = h2.textContent;
 const originalH3 = h3.textContent;
 const originalH4 = h4.textContent;


 // EVENT MANIPULATOR WHEN UK FLAG IS CLICKED
 flagUK.addEventListener("click", function() {
     // TEXT CHANGE TO ENGLISH
     h1.textContent = "Welcome"

     text1.textContent = "• My name is Paulo, and I am a Systems Information student. With knowledge in HTML, CSS, and JavaScript, and I am excited to continue improving my skills in these languages, creating modern and intuitive solutions for the web. I am studying each language in depth, and as I progress in my learning, I plan to delve deeper into popular frameworks. I am open to learning new technologies and market trends to enhance my skills.";

     h2.textContent = "About me"

     text2.textContent = "• Paulo is a Systems Information student who is always seeking to improve his knowledge in the technology field. With fluency in English, Italian, and Portuguese, Paulo's determination and persistence are preparing him to become a talented and innovative web developer, capable of creating creative and efficient solutions for the demands of the technology market. His passion for technology, combined with his fluency in multiple languages, makes Paulo a versatile and promising individual in the field of information technology.";

     h3.textContent = "Contact"

     text3.textContent ="• Hello! If you would like to get in touch with me, I would be happy to chat with you. You can send me a message through WhatsApp or LinkedIn. Feel free to send me your questions, comments, or suggestions - I am always open to new ideas and suggestions. I look forward to hearing from you! ";
     
     h4.textContent = "My  projects"
 });

 // EVENT MANIPULATOR WHEN BR FLAG IS CLICKED
 flagBR.addEventListener("click", function() {
     // BACK ORIGINAL TEXT TO DEFAULT (PT-BR)
     text1.textContent = originalText1;
     text2.textContent = originalText2;
     text3.textContent = originalText3;
     h1.textContent = originalH1; 
     h2.textContent = originalH2; 
     h3.textContent = originalH3; 
     h4.textContent = originalH4; 

 });


 // TEXT CHANGE IN CENTER WHEN CLICK IN NAVIGATION MENU

 const texts = document.querySelectorAll('div[id^="div-"]');
 const buttons = document.querySelectorAll('a[id^="a-"]');

 buttons.forEach((button, index) => {
 button.addEventListener('click', () => {
     texts.forEach((text, textIndex) => {
     if (textIndex === index) {
         text.style.display = '';
     } else {
         text.style.display = 'none';
     }
     });
 });
 });