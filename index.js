//template_9exigz5
//service_27kksii
//R8oBZTkYZOIJ6GDrB

let isContactOpen = false;
let isDark = false;

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.contact__form--loading');
    const success = document.querySelector('.contact__form--success');

    loading.classList += " contact__form--overlay--visible"  

    emailjs
    .sendForm(
      'service_27kksii',
      'template_c8yawii',
      event.target,
      'R8oBZTkYZOIJ6GDrB'
    ).then(() => {
        loading.classList.remove("contact__form--overlay--visible");
        success.classList += " contact__form--overlay--visible";
    }).catch(() => {
        loading.classList.remove("contact__form--overlay--visible");
        alert("The email service is temporarily unavailable. Please contact me at ryanblazejewski00@gmail.com");
    })
    
}

function toggleContact() {
    isContactOpen = !isContactOpen;
    if(isContactOpen)
        return document.body.classList += " contact__open";
    return document.body.classList.remove("contact__open");
}

function toggleContrast() {
    isDark = !isDark;
    if(isDark)
        return document.body.classList += " dark__mode";
    return document.body.classList.remove("dark__mode");
}