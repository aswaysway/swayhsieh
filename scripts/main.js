const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container");
const headerColor = "";

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 150) {
    header.style.backgroundColor = "#1f1e1e";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

// Hero img Fade In
const hero_img = document.querySelectorAll("#hero-img img"),
i = 1;
Array.prototype.forEach.call(hero_img, function (img) {
  setTimeout(function () {
    img.classList.add("visible");
  }, 700 * i);
});

// Read More Button
$('.read-more-btn').on('click', function(){
  $(this).siblings('.text').toggleClass('show-more');

  let replaceText = $(this).siblings('.text').hasClass('show-more') ? "Read Less" : "Read More";
  $(this).text(replaceText);
});