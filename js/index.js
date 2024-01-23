let arr = ["about", "services", "portfolio", "contact"];

$(function () {
  $(document).scroll(function () {

    //Animate fun fact div
    if ($(this).scrollTop() >= $("#funfact").position().top) {
      counterInit();
    }

    //Update navbar button selection
    arr.forEach(element => {
      if ($(this).scrollTop() == $("#home").position().top) {
        resetActiveBtns();
      }
      else if ($(this).scrollTop() >= $(`#${element}`).position().top) {
        resetActiveBtns();        
        $(`#menu-${element}`).addClass("active");
      }
    });

    //Show/hide the Back to Top button  
    if ($(this).scrollTop() > 20) {
      $("#btn-back-to-top").css("display", "block");
    } else {
      $("#btn-back-to-top").css("display", "none");
    }
  });

  var currentDate = new Date();
  var year = currentDate.getFullYear();
  $("#currentYear").html(year);

  AOS.init();
  generatePortfolio();
});

//Update navbar button color on click
$("a").on("click", function () {
  let id = $(this).attr("id");
  resetActiveBtns();
  $(this).addClass("active");
});

//Reset navbar button colors
const resetActiveBtns = function () {
  arr.forEach(element => {
    $(`#menu-${element}`).removeClass("active");
  });
};

//Generate the portfolio assets
const generatePortfolio = function () {
  let htmlStr = "";

  for (var i = 0; i < data.length; i++) {
    let id = data[i].id;
    let title = data[i].title;
    let year = data[i].year;

    htmlStr += `<div class="col-lg-4 col-md-6 portfolio-item">
      <div class="portfolio-wrap">
        <a href="projects.html?id=${id}">
        <img src="images/${id}_thumb.jpg" class="img-fluid" alt="${title}">
        <div class="portfolio-info">
        
        <h4>${title}</h4>
        <p>${year}</p>        
        
        </div>
      </div>
      </a>
      </div>`
  }

  $("#portfolioAssets").html(htmlStr);
}

//Contact form Submit button handler
$('#submitBtn').on('click', function () {
  var name = $('#name').val();
  var emailAddress = $('#emailAddress').val();
  var message = $('#message').val();

  var subject = encodeURIComponent('Portfolio');
  var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + emailAddress + '\nMessage: ' + message);

  var mailtoLink = 'mailto:chadhearrell@mailinator.com?subject=' + subject + '&body=' + body;
  window.open(mailtoLink, '_blank');
});

//Animates the 'typing' text on page Hero
if ($(".text-slider").length == 1) {
  var typed_strings = $(".text-slider-items").text();
  var typed = new Typed(".text-slider", {
    strings: typed_strings.split(","),
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    backSpeed: 30
  });
}

//Animates the Fun Fact section
const counterInit = function () {
  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(",");
  $(".number").each(function () {
    var $this = $(this),
      num = $this.data('number');
    $this.animateNumber({
      number: num,
      numberStep: comma_separator_number_step
    }, 5000);
  });
}