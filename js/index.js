let arr = ["about", "services", "portfolio", "contact"];
let scrollOffset = 460;
let activeId = "";

$(function () {
  $(document).scroll(function () {

    //Animate progress on enter
    let animProgressBars = true;
    if ($(this).scrollTop() >= Math.round($("#competencies").position().top - scrollOffset) && animProgressBars) {                        
        $("div.progress").find(".progress-bar").each(function(){
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
          $(".progress-bar").addClass("animated");
        });          
        animProgressBars = false;
    }

    //Animate fun fact div
   if ($(this).scrollTop() >= Math.round($("#portfolio").position().top - scrollOffset)) {
      counterInit();
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
    let keywords = data[i].keywords;
    let featuredStar = "";

    htmlStr += `<div class="col-lg-4 col-md-6 portfolio-item" data-tags="${keywords}">
    ${featuredStar}
      <div class="portfolio-wrap">
        
        <a href="#" data-id="${id}" title="${title}" onclick="modalHandler(event, '${id}')">
        <div class="portfolio-image-container">
          <img src="images/${id}_thumb.jpg" class="img-fluid" alt="${title}">
           <div class="overlay"></div>
        </div>
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


function modalHandler(event, idValue) {
  event.preventDefault(); 
  activeId = idValue;
  generatePage();
  $("#projectModal").modal("show");
  $("#projectModal").scrollTop(0);
}

  //Update the links  
  $("#prevProject").on("click", function () {
    navigateProject("prev");
    $("body").addClass("no-scroll");
  });
  
  $("#nextProject").on("click", function () {
    navigateProject("next");
    $("body").addClass("no-scroll");
  });  

  $("#projectModal").on("show.bs.modal", function () {
    $("body").addClass("no-scroll");
  });
  
  $("#projectModal").on("hidden.bs.modal", function () {
    $("body").removeClass("no-scroll");
  });


  function navigateProject(direction) {
    const currentElement = $(`[data-id="${activeId}"]`).closest(".portfolio-item");
    let targetElement;
  
    if (direction === "prev") {
      targetElement = currentElement.prev(".portfolio-item");
    } else if (direction === "next") {
      targetElement = currentElement.next(".portfolio-item");
    }
  
    if (targetElement.length) {
      const newId = targetElement.find("[data-id]").data("id");
      modalHandler(event, newId); 
     }
  }

//Get the object data based on the ID
const getObjData = function () {
  for (var i = 0; i < data.length; i++) {
    const id = data[i].id;

    if (id === activeId) {
      return data[i];
    }
  }
}

//Generate the page content based on the slide ID
const generatePage = function () {

  const obj = getObjData();

  // Reset special note
  $("#specialNote").addClass("hidden");

  let htmlStr_title = obj.title;
  let htmlStr_tags = "";
  let htmlStr_role = obj.role;
  let htmlStr_scope = obj.scope;
  let htmlStr_solution = obj.solution;
  let hasSpecialNote = obj.specialNote;
  let htmlStr_artifacts = "";
  let htmlStr_subtitle = obj.year;
  const imageFilenames = Array.from({
    length: obj.imageRange
  }, (_, index) => `images/${activeId}_${index.toString().padStart(3, '0')}.jpg`);

  obj.keywords.sort();
  obj.keywords.forEach(element => {
    htmlStr_tags += `<span class="badge tag">${element}</span> `;
  });

  for (var i = 0; i < imageFilenames.length; i++) {
    const imageName = imageFilenames[i];
    htmlStr_artifacts += `<div class="col-12 mb-4 d-flex justify-content-center portfolio-item">      
                                    <img src="${imageName}" class="img-fluid custom-rounded" alt="Gallery Image ${i+1}" title="Gallery Image ${i+1}">                                     
                                  </div> 
                                </div>`;
  }

  $("#projectTitle").html(htmlStr_title);
  $("#projectTags").html(htmlStr_tags);
  $("#projectRole").html(htmlStr_role);
  $("#projectScope").html(htmlStr_scope);
  $("#projectSolution").html(htmlStr_solution);
  $("#projectArtifacts").html(htmlStr_artifacts);
  $("#projectSubtitle").html(htmlStr_subtitle);
  if(hasSpecialNote){
    $("#specialNote").removeClass("hidden");
  }  
}

//----------

//Filter functionality
$(".filter-option[data-filter='All']").trigger("click");

  $(".filter-option").click(function(event) {
    event.preventDefault(); 
    
    var filter = $(this).data("filter");

    $(".filter-option").removeClass("active");
    $(this).addClass("active");

    if (filter === "All") {
      $(".portfolio-item").fadeIn();
    } else {

      $(".portfolio-item").fadeOut();
      $(".portfolio-item").each(function() {
        var itemTags = $(this).data("tags").split(","); 
        if (itemTags.includes(filter)) {
          $(this).fadeIn();
        }
      });
    }

    $("#dropdownMenuButton").text("Filter by: " + (filter === "All" ?  "All" : filter));
    $(".dropdown-menu").removeClass("show");
  });

  $("#dropdownMenuButton").click(function(event) {
    event.stopPropagation();
    $(".dropdown-menu").toggleClass("show");
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".dropdown-menu").removeClass("show");
    }
  });

var scrolled = false;

$(window).on('scroll', function() {
  var portfolioSectionTop = $('#portfolio').offset().top; 
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  if (viewportBottom > portfolioSectionTop && !$('.portfolio-item').hasClass('fade-in')) {
    $('.portfolio-item').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass('fade-in');
      }
    });
  }
});
