let scrollOffset = 460;
let animProgressBars = true;
let animStats = true;
let activeId = "";

$(function() {
    $(document).scroll(function() {
        let scrollTop = $(this).scrollTop();

        // Proficiencies animation
        if (scrollTop >= Math.round($("#about").position().top - scrollOffset) && animProgressBars) {
            $("div.progress").find(".progress-bar").each(function() {
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
                $(".progress-bar").addClass("animated");
            });
            animProgressBars = false;
        }

        // Stats block animation
        if (scrollTop >= Math.round($("#stats-block").position().top - scrollOffset) && animStats) {
            counterInit();
            animStats = false;
        }
    });

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    $("#currentYear").html(year);

    let displayName = portfolioOwner.name;
    let possessive = displayName.endsWith("s") ? `${displayName}'` : `${displayName}'s`;
    $("#siteTitle").html(`${possessive} ePortfolio`);

    AOS.init();
    initHeroAnimation();
    generatePortfolio();
    updateBrandAndAbout();
    generateProficiencies();
    generateCompetencies();
    generateStatsBlock();
    generateFinalCTA();
});

function initHeroAnimation() {
    const phrases = portfolioOwner.heroAnimation || [];

    if (!phrases.length || !$(".text-slider").length) {
        $(".intro-tagline").hide();
        return;
    }

    $(".text-slider-items").empty();

    if (typeof Typed !== "undefined") {
        new Typed(".text-slider", {
            strings: phrases,
            typeSpeed: 50,
            backDelay: 1500,
            loop: true,
            backSpeed: 30
        });
    }
}

function updateBrandAndAbout() {
    if (portfolioOwner) {
        $(".navbar-brand").text(portfolioOwner.name);
        $("#about-content").html(portfolioOwner.about +
            `<br/><br/><a href="${portfolioOwner.linkedin}" class="btn btn-primary" target="_blank" title="Let's Connect">Let's Connect <i class="fa-solid fa-arrow-right"></i></a>`);
    }
}

function generateProficiencies() {
    if (!portfolioOwner?.proficiencies) return;
    let html = "";
    portfolioOwner.proficiencies.forEach(item => {
        html += `
      <span>${item.label}</span>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="${item.value}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>`;
    });

    $("#proficiencies-container").html(html);
}

function generateCompetencies() {
    if (!portfolioOwner?.competencies) return;

    let html = '<div class="row row-cols-1 row-cols-md-4 g-4">';
    portfolioOwner.competencies.forEach(item => {
        html += `
      <div class="col">
        <div class="card text-center p-3">
          <div class="service-ico">
            <i class="fa-solid ${item.icon}"></i>
          </div>
          <h5 class="card-title mt-3">${item.title}</h5>
        </div>
      </div>`;
    });
    html += '</div>';

    $("#competencies-container").html(html);
}

function generatePortfolio() {
    const grouped = {};
    data.forEach(project => {
        const categoryName = projectCategories[project.categoryKey] || "Other";
        if (!grouped[categoryName]) {
            grouped[categoryName] = [];
        }
        grouped[categoryName].push(project);
    });

    let htmlStr = "";

    Object.entries(grouped).forEach(([category, projects]) => {
        htmlStr += `<h3 class="portfolio-category-header mb-4">${category}</h3><div class="row g-4">`;

        projects.forEach(project => {
            htmlStr += `
        <div class="col-lg-4 col-md-6">
          <div class="artifact-card h-100">
            <img src="images/${project.id}_thumb.jpg" alt="${project.title}" class="artifact-thumb" />
            <div class="artifact-content">
              <h4 class="artifact-title">${project.title}</h4>
              <p class="artifact-year">${project.year}</p>
              <p class="artifact-description">${project.description || ''}</p>
              <a class="btn" href="#" onclick="modalHandler(event, '${project.id}')" title="View Project">View Project</a>
            </div>
          </div>
        </div>`;
        });

        htmlStr += `</div><br/>`;
    });

    $("#portfolioAssets").html(htmlStr);
}

function modalHandler(event, idValue) {
    event.preventDefault();
    activeId = idValue;
    generateModalContent();
    $("#projectModal").modal("show");
    $("#projectModal").scrollTop(0);
}

function updateModalNavButtons() {

    const obj = data.find(item => item.id === activeId);
    if (!obj || !obj.categoryKey) return;

    const categoryProjects = data.filter(p => p.categoryKey === obj.categoryKey);
    const currentIndex = categoryProjects.findIndex(p => p.id === activeId);

    const $prevBtn = $("#prevProject");
    const $nextBtn = $("#nextProject");

    if (categoryProjects.length <= 1) {
        $prevBtn.prop("disabled", true);
        $nextBtn.prop("disabled", true);
        return;
    }

    $prevBtn.prop("disabled", false);
    $nextBtn.prop("disabled", false);

    $prevBtn.off("click").on("click", function() {
        const prevIndex = (currentIndex - 1 + categoryProjects.length) % categoryProjects.length;
        activeId = categoryProjects[prevIndex].id;
        generateModalContent();
    });

    $nextBtn.off("click").on("click", function() {
        const nextIndex = (currentIndex + 1) % categoryProjects.length;
        activeId = categoryProjects[nextIndex].id;
        generateModalContent();
    });
}

function generateModalContent() {
    const obj = data.find(item => item.id === activeId);
    if (!obj) return;

    $("#projectTitle").html(obj.title || "");
    $("#projectSubtitle").html(obj.year || "");

    const tagHTML = (obj.keywords || [])
        .map(tag => `<span class="badge tag me-2">${tag}</span>`)
        .join("");
    $("#projectTags").html(tagHTML);

    renderProjectCarousel(obj || {});

    if (obj.specialNote) {
        $("#specialNote").removeClass("hidden");
    } else {
        $("#specialNote").addClass("hidden");
    }

    if (obj.demo && obj.demo.length > 0) {
        const demoHTML = obj.demo
            .map(d => `<a href="${d.link}" target="_blank" class="btn btn-outline-primary me-2 mb-2">${d.title || "View Demo"}</a>`)
            .join("");
        $("#demoLinks").html(demoHTML).show();
    } else {
        $("#demoLinks").hide();
    }

    const aboutText = [obj.role, obj.scope].filter(Boolean).join("<br><br>");
    $("#projectAbout").html(aboutText || "");
    $("#projectSolution").html(obj.solution || "");
}

function renderProjectCarousel(obj) {
    $("#carouselContainer").remove();

    const count = obj.imageRange || 0;
    if (count === 0) return;

    let slides = "";
    for (let i = 0; i < count; i++) {
        const index = i.toString().padStart(3, '0');
        const pngPath = `images/${obj.id}_${index}.png`;
        const jpgPath = `images/${obj.id}_${index}.jpg`;

        // Start with PNG and swap to JPG if PNG fails
        slides += `
      <div class="carousel-slide ${i === 0 ? "active" : ""}">
        <img src="${pngPath}" 
             onerror="this.onerror=null; this.src='${jpgPath}';" 
             alt="Project Image ${i + 1}">
      </div>`;
    }

    const hasControls = count > 1;
    const controls = hasControls ?
        `
      <button class="carousel-prev" aria-label="Previous">&#10094;</button>
      <button class="carousel-next" aria-label="Next">&#10095;</button>` :
        "";

    const carouselHTML = `
    <div id="carouselContainer">
      <div class="carousel-wrapper">
        ${slides}
        ${controls}
      </div>
    </div>`;

    $("#projectTags").after(carouselHTML);

    if (hasControls) {
        let currentSlide = 0;

        $(".carousel-prev").click(() => {
            const total = count;
            $(".carousel-slide").removeClass("active");
            currentSlide = (currentSlide - 1 + total) % total;
            $(".carousel-slide").eq(currentSlide).addClass("active");
        });

        $(".carousel-next").click(() => {
            const total = count;
            $(".carousel-slide").removeClass("active");
            currentSlide = (currentSlide + 1) % total;
            $(".carousel-slide").eq(currentSlide).addClass("active");
        });
    }

    updateModalNavButtons();
}

function generateStatsBlock() {
    if (!portfolioOwner?.stats) return;

    let html = '<div class="container"><div class="row text-center">';
    portfolioOwner.stats.forEach(stat => {
        html += `
      <div class="col-md-3 py-4">
        <div class="number-container">
          <h1 class="number" data-number="${stat.number}">0</h1>
          <span class="plus">${stat.suffix || ""}</span>
        </div>
        <p>${stat.label}</p>
      </div>`;
    });
    html += '</div></div>';

    $("#stats-block").html(html);
}

function generateFinalCTA() {
    const linkedin = portfolioOwner?.linkedin || "#";

    const html = `
    <div class="container text-center py-5">
      <h2 class="sectionHeader">Want to Learn More?</h2>
      <a href="${linkedin}" target="_blank" class="btn btn-primary mt-3" title="Let's Connect">Let's Connect <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  `;

    $("#final-cta").html(html);

}

function counterInit() {
    const comma_separator = $.animateNumber.numberStepFactories.separator(",");

    $(".number").each(function() {
        const $el = $(this);
        const num = $el.data("number");

        if (!$el.hasClass("animated")) {
            $el.animateNumber({
                number: num,
                numberStep: comma_separator
            }, 3000);
            $el.addClass("animated");
        }
    });
}