jQuery(($) => {
      $('.select').on('click', '.select__head', function () {
          if ($(this).hasClass('open')) {
              $(this).removeClass('open');
              $(this).next().fadeOut();
          } else {
              $('.select__head').removeClass('open');
              $('.select__list').fadeOut();
              $(this).addClass('open');
              $(this).next().fadeIn();
          }
      });
  
      $('.select').on('click', '.select__item', function () {
          $('.select__head').removeClass('open');
          $(this).parent().fadeOut();
          $(this).parent().prev().text($(this).text());
          $(this).parent().prev().prev().val($(this).text());
      });
  
      $(document).click(function (e) {
          if (!$(e.target).closest('.select').length) {
              $('.select__head').removeClass('open');
              $('.select__list').fadeOut();
          }
      });
  });

const burgerMenu = document.querySelector('.burger');
const checkbox = document.querySelector('.burger__checkbox');
checkbox.addEventListener('click', function () {
   if (checkbox.checked == true) {
      burgerMenu.classList.add('active');
      document.body.classList.add('lock');
   }
   else {
      burgerMenu.classList.remove('active');
      document.body.classList.remove('lock');
   }
});

const preferencesMenu = document.querySelector('.preferences__menu');
const preferencesCheckbox = document.querySelector('.preferences__checkbox');
preferencesCheckbox.addEventListener('click', function () {
   if (preferencesCheckbox.checked == true) {
      preferencesMenu.classList.add('active');
      preferencesCheckbox.classList.add('active');
      document.body.classList.add('lock');
   }
   else {
      preferencesMenu.classList.remove('active');
      preferencesCheckbox.classList.remove('active');
      document.body.classList.remove('lock');
   }
});


const searchBtn = document.querySelector('#mobile-first__search');
const searchMobile = document.querySelector('#mobile__search');
searchBtn.addEventListener('click', function (){
    if( searchBtn.classList.contains('active')){
        searchBtn.classList.remove('active')
        searchMobile.classList.remove('active')
    }
    else{
        searchBtn.classList.add('active')
        searchMobile.classList.add('active')
    }
})