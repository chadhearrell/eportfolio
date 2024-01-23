let activeId = "";

$(function () {
  $(document).scroll(function () {

    //Used to show/hide the Back to Top button
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
  parseId();
});

//Parse the ID from the URL
const parseId = function () {
  const params = new URLSearchParams(window.location.search);

  if (params.has("id")) {
    const idValue = params.get("id");
    activeId = idValue;
    generatePage();
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

  let htmlStr_title = obj.title;
  let htmlStr_tags = "";
  let htmlStr_role = obj.role;
  let htmlStr_scope = obj.scope;
  let htmlStr_solution = obj.solution;
  let htmlStr_artifacts = "";
  const imageFilenames = Array.from({
    length: obj.imageRange
  }, (_, index) => `images/${activeId}_${index.toString().padStart(3, '0')}.jpg`);

  obj.keywords.sort();
  obj.keywords.forEach(element => {
    htmlStr_tags += `<span class="badge bg-primary tag">${element}</span> `;
  });

  for (var i = 0; i < imageFilenames.length; i++) {
    const imageName = imageFilenames[i];
    htmlStr_artifacts += `<div class="col-lg-6 col-md-6 portfolio-item">      
                                  <a href="${imageName}" data-toggle="lightbox" data-gallery="example-gallery" class="col-lg-6 togglelb">                              
                                    <div class="asset-wrap">                                                                    
                                      <img src="${imageName}" class="img-fluid" alt="Gallery Image ${i+1}">                                     
                                    </div> 
                                  </a>
                                </div>`;
  }

  $("#projectTitle").html(htmlStr_title);
  $("#projectTags").html(htmlStr_tags);
  $("#projectRole").html(htmlStr_role);
  $("#projectScope").html(htmlStr_scope);
  $("#projectSolution").html(htmlStr_solution);
  $("#projectArtifacts").html(htmlStr_artifacts);

  const options = {
    keyboard: true,
    size: 'fullscreen'
  };

  document.querySelectorAll('.togglelb').forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    const lightbox = new Lightbox(el, options);
    lightbox.show();
  }));
}