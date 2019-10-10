'use strict';

var projects = [{
  "name": "Swing Foundation",
  "description": "A multi page website built on WordPress, styled with a custom theme. New content has to be added frequently and old content changed. With the use of custom post types this process can be done quickly via the WordPress Admin Dashboard.",
  "live_url": "https://www.swingfoundation.nl",
  "code_url": "https://github.com/hakonbja/swingfoundation",
  "img_url": "../images/swifo_card_img.png",
  "type": "website",
  "technologies": ["Gulp", "WordPress", "PHP", "JavaScript", "HTML/CSS"]
}, {
  "name": "Mastermind",
  "description": "A React version of the board game Mastermind from the 70’s. The goal of the game is to guess a color combination with the help of hints. I had made this game before, using JS and jQuery, in the beginning of 2018. One and a half year later I saw that I could do it better and decided to re-make it.",
  "live_url": "https://mm2.hakonbjarnason.com",
  "code_url": "https://github.com/hakonbja/mastermind_v2",
  "img_url": "../images/mm_card_img.png",
  "type": "game",
  "technologies": ["React", "HTML/CSS"]
}, {
  "name": "Invoice Maker",
  "description": "An app made in Google Apps Script to create invoices for my piano teaching business. It uses the Google Calendar API to import planned classes and calculate the prices.",
  "code_url": "https://github.com/hakonbja/invoice_maker",
  "img_url": "../images/invoicemaker_logos_only.png",
  "type": "app",
  "technologies": ["Apps Script", "JavaScript", "HTML/CSS"]
}, {
  "name": "Smokey Feet",
  "description": "A remake of a website built on WordPress. Made in React and uses WordPress as a headless CMS.",
  "live_url": "https://www.smokeyfeet.com",
  "code_url": "https://github.com/hakonbja/smokeyTen",
  "img_url": "../images/sf_card_img.jpg",
  "type": "in progress",
  "technologies": ["React", "REST API", "PHP", "HTML/CSS"]
}];
var skills = [{
  "header": "Code I write",
  "skills": ["HTML", "CSS", "JavaScript", "PHP"]
}, {
  "header": "Tools I use",
  "skills": ["React", "ESLint", "Gulp", "NPM", "SCSS", "Git", "AWS", "jQuery", "Bootstrap", "Wordpress"]
}, {
  "header": "Software I use",
  "skills": ["VS Code", "Figma", "Illustrator", "Photoshop", "InDesign"]
}, {
  "header": "Languages I speak",
  "skills": ["English", "Dutch", "Icelandic"]
}];

function projectTemplate(project, i) {
  return "\n  <article class=\"".concat(i % 2 == 1 ? "flyLeft" : "flyRight", "\">\n    <div class=\"desktop\">\n      <aside class=\"image\">\n        <a href=\"").concat(project.live_url, "\" target=\"_blank\" rel=\"noreferrer\" title=\"Go to live demo\"><img src=\"").concat(project.img_url, "\" alt=\"Image of ").concat(project.name, "\"/></a>\n      </aside>\n      <div class=\"mid-container\">\n        <h3>").concat(project.name, "</h3>\n        <p>").concat(project.description, "</p>\n        <div class=\"links-container\">\n          <ul class=\"links\">\n            ").concat(project.live_url ? "<li><a href=\"".concat(project.live_url, "\" target=\"_blank\" rel=\"noreferrer\">Live Demo</a></li>") : "", "\n            ").concat(project.code_url ? "<li><a href=\"".concat(project.code_url, "\" target=\"_blank\" rel=\"noreferrer\">View Code</a></li>") : "", "\n          </ul>\n        </div>\n      </div>\n      <aside class=\"tech\">\n        <h4 class=\"tech-type\">/").concat(project.type, "/</h4>\n        <ul class=\"tech-list\">\n          ").concat(project.technologies.map(function (tech) {
    return "<li>".concat(tech, "</li>");
  }).join(''), "\n        </ul>\n      </aside>\n    </div>\n    \n      <div class=\"mobile\">\n        <h3>").concat(project.name, "</h3>\n        <h4 class=\"tech-type\">/").concat(project.type, "/</h4>\n        <div class=\"text-image-wrapper\">\n          <div class=\"image-container\">\n            <a href=\"").concat(project.live_url, "\" target=\"_blank\" rel=\"noreferrer\" title=\"Go to live demo\"><img src=\"").concat(project.img_url, "\" alt=\"Image of ").concat(project.name, "\"/></a>\n          </div>\n          <p>").concat(project.description, "</p>\n        </div>\n        <ul class=\"tech-list\">\n          ").concat(project.technologies.map(function (tech) {
    return "<li>".concat(tech, "</li>");
  }).join(''), "\n        </ul>\n        <ul class=\"links\">\n          ").concat(project.live_url ? "<li><a href=\"".concat(project.live_url, "\" target=\"_blank\" rel=\"noreferrer\">Live Demo</a></li>") : "", "\n          ").concat(project.code_url ? "<li><a href=\"".concat(project.code_url, "\" target=\"_blank\" rel=\"noreferrer\">View Code</a></li>") : "", "\n        </ul>\n      </div>\n\n    </article>\n\n  ");
}

function renderProjects() {
  document.getElementById('allProjects').innerHTML = "\n  ".concat(projects.map(projectTemplate).join(''), "\n  ");
}

function skillsTemplate(skillGroup) {
  return "\n    <article>\n      <h5>".concat(skillGroup.header, "</h5>\n      <ul class=\"skills-list\">\n        ").concat(skillGroup.skills.map(function (skill) {
    return "\n            <li>".concat(skill, "</li>");
  }).join(''), "\n      </ul>\n    </article>\n  ");
}

function renderSkills() {
  document.getElementById('allSkills').innerHTML = "\n  ".concat(skills.map(skillsTemplate).join(''), "\n  ");
}
/* Intersection Observers */

/* sections <-> navlinks observer */


function setSectionsObservers() {
  var sections = document.querySelectorAll('section');
  var options = {
    rootMargin: "-445px 0px -240px 0px"
  };
  var sectionsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var linkId = "".concat(entry.target.id, "Link");
      var link = document.getElementById(linkId);

      if (link) {
        if (entry.isIntersecting) {
          link.classList.add('selected');
        } else if (!entry.isIntersecting) {
          link.classList.remove('selected');
        }
      }
    });
  }, options);
  sections.forEach(function (section) {
    sectionsObserver.observe(section);
  });
}
/* home <-> navbar observer */


function setHeroObserver() {
  var home = document.getElementById('home');
  var header = document.getElementsByTagName('header')[0];
  var homeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        header.classList.add('visible');
      } else if (entry.isIntersecting) {
        header.classList.remove('visible');
      }
    });
  });
  homeObserver.observe(home);
}
/* article <-> flying observer */


function setArticleObserver() {
  var articles = document.querySelectorAll('.flyRight, .flyLeft');
  var options = {
    rootMargin: '0px 0px -250px 0px'
  };
  var articlesObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('flown');
        articlesObserver.unobserve(entry.target);
      }
    });
  }, options);
  articles.forEach(function (article) {
    articlesObserver.observe(article);
  });
}
/* Contact form functionality */


function enableFormSubmission() {
  document.getElementById('contact-form').addEventListener('submit', sendDataToAPI);
}

function sendDataToAPI(e) {
  e.preventDefault();
  document.getElementById('submit-success').classList.remove('submit-shown');
  document.getElementById('submit-failure').classList.remove('submit-shown');
  var formName = document.querySelector('.form-name').value;
  var formEmail = document.querySelector('.form-email').value;
  var formMessage = document.querySelector('.form-message').value;
  var body = {
    name: formName,
    email: formEmail,
    message: formMessage
  };
  var endpoint = 'https://957gy8fzk0.execute-api.eu-west-1.amazonaws.com/live/contact';
  var lambdaRequest = new Request(endpoint, {
    method: 'POST',
    // Quick note: 'no-cors' mode is for development on localhost only!
    // mode: 'no-cors',
    body: JSON.stringify(body)
  });
  fetch(lambdaRequest).then(function (response) {
    if (response.status === 200) {
      onSubmitSuccess();
    } else {
      onSubmitFailure();
    }
  })["catch"](function (error) {
    return console.log(error);
  });
}

function onSubmitSuccess() {
  document.getElementById('submit-success').classList.add('submit-shown');
  document.getElementById('submit-failure').classList.remove('submit-shown');
}

function onSubmitFailure() {
  document.getElementById('submit-failure').classList.add('submit-shown');
  document.getElementById('submit-success').classList.remove('submit-shown');
}
/* Fade things on scroll */


function setFadeChanges() {
  window.addEventListener('scroll', function () {
    decreaseOpacity(0.05, 0.95, 'bg-gradient');
    increaseOpacity(0.45, 0.85, 'logo');
    decreaseOpacity(0.05, 0.53, 'big-logo');
  });
}

function decreaseOpacity(startPct, endPct, id) {
  changeOpacity(startPct, endPct, id, false);
}

function increaseOpacity(startPct, endPct, id) {
  changeOpacity(startPct, endPct, id, true);
}

function changeOpacity(startPct, endPct, id, bool) {
  // if bool === true => increase opacity, if false => decrease opacity
  var currentY = window.scrollY;
  var target = document.getElementById(id);
  var startY = startPct * window.innerHeight;
  var endY = endPct * window.innerHeight;
  var delta = -1 / (endY - startY);
  var constant = endY / (endY - startY);
  var opacity = currentY * delta + constant;

  if (bool) {
    opacity = 1 - opacity;

    if (currentY <= startY) {
      target.style.opacity = 0;
      target.style.visibility = 'hidden';
      return;
    } else if (currentY > endY) {
      target.style.opacity = 1;
      return;
    }
  }

  if (!bool) {
    if (currentY <= startY) {
      target.style.opacity = 1;
      return;
    } else if (currentY > endY) {
      target.style.opacity = 0;
      target.style.visibility = 'hidden';
      return;
    }
  }

  target.style.opacity = opacity;
  target.style.visibility = 'visible';
}
/* Detect MacOS and change CSS */


function ifMac() {
  if (navigator.appVersion.indexOf("Mac") != -1) {
    document.getElementById('frame').style.paddingTop = '0.2em';
  }
}

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    renderProjects();
    renderSkills();
    setSectionsObservers();
    setHeroObserver();
    setArticleObserver();
    enableFormSubmission();
    setFadeChanges();
    ifMac();
  }
};