// faq
var box =document.querySelectorAll(".box");

for(i=0;i<box.length;i++){
    box[i].addEventListener("click",function(){
        this.classList.toggle("active");
    })
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    loop:true,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
        }
    }
})



document.addEventListener("DOMContentLoaded", () => {
      const form = document.getElementById("myForm");

      form.addEventListener("submit", (event) => {
        event.preventDefault(); // stop reload

        const name = form.querySelector('[name="name"]').value;
        const email = form.querySelector('[name="email"]').value;

        Swal.fire({
          title: "Form Submitted!",
          text: `Name: ${name}, Email: ${email}`,
          icon: "success"
        });

        form.reset();
      });
    });


    function formatDateTime(date) {
      const options = {
        month: "short",   // "Jan", "Feb", "Mar", etc.
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true      // 12-hour format with AM/PM
      };
      return date.toLocaleString("en-US", options);
    }
const now = new Date(); 
document.getElementById("clock").innerHTML = formatDateTime(now); 

