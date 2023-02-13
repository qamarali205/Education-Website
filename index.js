// change navbar style  on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window_scroll', window.scrollY>100)
});

//show/hide faq answer

const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        //change icon

        const icon=faq.querySelector('.faq_icon i');
        if(icon.className==='uil uil-plus'){
            icon.className='uil uil-minus';
        }else{
            icon.className='uil uil-plus';
        }
    })
});

// Swiper js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // width >=600
     breakpoints: {
        600: {
            slidesPerView:2
        }
     }
  });

  // show/hide nav menu

  const menu=document.querySelector('.nav_menu');
  const menubtn=document.querySelector('#open-menu-btn');
  const closebtn=document.querySelector('#close-menu-btn');

  menubtn.addEventListener('click', () =>{
    menu.style.display='flex';
    closebtn.style.display="inline-block";
    menubtn.style.display='none';
    //console.log(closebtn);
  });

  // close nav menu

  const closeNav=() =>{
    menu.style.display='none';
    closebtn.style.display="none";
    menubtn.style.display='inline-block';
  }
  closebtn.addEventListener('click', closeNav);