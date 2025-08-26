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

lc_lightbox('.elem', {
  wrap_class: 'lcl_fade_oc',
  gallery : true, 
  thumb_attr: 'data-lcl-thumb', 
  skin: 'dark',
  // more options here
}); 