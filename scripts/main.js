'use strict'

const projects = [
  {
    "name": "Smokey Feet",
    "description": "The WordPress API is used to fetch the content into a React app. With a custom WordPress plug-in custom post types were added and made available to the WordPress API.",
    "live_url": "https://www.smokeyfeet.com",
    "code_url": "https://github.com/hakonbja/smokeyTen",
    "img_url": "../images/sf_card_img.jpg",
    "type": "website",
    "technologies": [
      "React.js",
      "REST API",
      "PHP",
      "HTML/CSS"
    ]
  },
  {
    "name": "Swing Foundation",
    "description": "A multi page website built with WordPress. Makes use of a custom theme and custom plugins.",
    "live_url": "https://www.swingfoundation.nl",
    "code_url": "https://github.com/hakonbja/swingfoundation",
    "img_url": "../images/swifo_card_img.png",
    "type": "website",
    "technologies": [
      "Gulp",
      "WordPress",
      "PHP",
      "HTML/CSS"
    ]
  },
  {
    "name": "Mastermind",
    "description": "A React.js version of the board game Mastermind from the 70's. Try to guess the color code in as few tries possible.",
    "live_url": "https://mm2.hakonbjarnason.com",
    "code_url": "https://github.com/hakonbja/mastermind_v2",
    "img_url": "../images/mm_card_img.png",
    "type": "game",
    "technologies": [
      "React.js",
      "HTML/CSS"
    ]
  },
  {
    "name": "Pianist Hákon Bjarnason",
    "description": "My first public website I made for my own piano teaching business.",
    "live_url": "https://hakonbjarnason.com",
    "code_url": "https://github.com/hakonbja/hakonbjarnason.com",
    "img_url": "../images/hb_card_img.jpg",
    "type": "website",
    "technologies": [
      "jQuery",
      "Bootstrap",
      "AWS",
      "HTML/CSS"
    ]
  },
];

const skills = [
  {
    "header": "Code I write",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ]
  },
  {
    "header": "Tools I use",
    "skills": [
      "React.js",
      "ESLint",
      "Gulp",
      "NPM",
      "SCSS",
      "Git",
      "jQuery",
      "Bootstrap",
      "Wordpress"
    ]
  },
  {
    "header": "Software I use",
    "skills": [
      "VS Code",
      "Figma",
      "Illustrator",
      "Photoshop",
      "InDesign"
    ]
  },
  {
    "header": "Languages I speak",
    "skills": [
      "English",
      "Dutch",
      "Icelandic"
    ]
  },
]

function projectTemplate(project, i) {
  return `
  <article class="${(i % 2 == 1) ? `flyLeft` : `flyRight`}">
    <div class="desktop">
      <aside class="image">
        <a href="${project.live_url}" target="_blank" rel="noreferrer" title="Go to live demo"><img src="${project.img_url}" alt="Image of ${project.name}"/></a>
      </aside>
      <div class="mid-container">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="links-container">
          <ul class="links">
            ${(project.live_url) ? `<li><a href="${project.live_url}" target="_blank" rel="noreferrer">Live Demo</a></li>` : ``}
            ${(project.code_url) ? `<li><a href="${project.code_url}" target="_blank" rel="noreferrer">View Code</a></li>` : ``}
          </ul>
        </div>
      </div>
      <aside class="tech">
        <h4 class="tech-type">/${project.type}/</h4>
        <ul class="tech-list">
          ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
        </ul>
      </aside>
    </div>
    
      <div class="mobile">
        <h3>${project.name}</h3>
        <h4 class="tech-type">/${project.type}/</h4>
        <div class="text-image-wrapper">
          <div class="image-container">
            <a href="${project.live_url}" target="_blank" rel="noreferrer" title="Go to live demo"><img src="${project.img_url}"/></a>
          </div>
          <p>${project.description}</p>
        </div>
        <ul class="tech-list">
          ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
        </ul>
        <ul class="links">
          ${(project.live_url) ? `<li><a href="${project.live_url}" target="_blank" rel="noreferrer">Live Demo</a></li>` : ``}
          ${(project.code_url) ? `<li><a href="${project.code_url}" target="_blank" rel="noreferrer">View Code</a></li>` : ``}
        </ul>
      </div>

    </article>

  `
}

function renderProjects() {
  document.getElementById('allProjects').innerHTML = `
  ${projects.map(projectTemplate).join('')}
  `;
}

function skillsTemplate(skillGroup) {
  return `
    <article>
      <h5>${skillGroup.header}</h5>
      <ul class="skills-list">
        ${skillGroup.skills.map( skill => {
          return `
            <li>${skill}</li>`
        }).join('')}
      </ul>
    </article>
  `
}

function renderSkills() {
  document.getElementById('allSkills').innerHTML = `
  ${skills.map(skillsTemplate).join('')}
  `;
}

/* Intersection Observers */
  /* sections <-> navlinks observer */
function setSectionsObservers() {
  const sections = document.querySelectorAll('section');
  
  const options = {
    rootMargin: "-445px 0px -240px 0px",
  };
  
  const sectionsObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
      const linkId = `${entry.target.id}Link`
      const link = document.getElementById(linkId);
  
      if (link) {
        if (entry.isIntersecting) {
          link.classList.add('selected')
        } else if (!entry.isIntersecting) {
          link.classList.remove('selected')
        }
      }
      
    });
  }, options);
  
  sections.forEach((section) => {
    sectionsObserver.observe(section);
  });
}

  /* home <-> navbar observer */
function setHeroObserver() {
  const home = document.getElementById('home');
  const header = document.getElementsByTagName('header')[0];

  const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
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
  const articles = document.querySelectorAll('.flyRight, .flyLeft');

  const options = {
    rootMargin: '0px 0px -250px 0px',
  };
  
  const articlesObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('flown');
        articlesObserver.unobserve(entry.target);
      }
    });
  }, options);

  articles.forEach( (article) => {
    articlesObserver.observe(article);
  })
}


/* Contact form functionality */

function enableFormSubmission() {
  document.getElementById('contact-form').addEventListener('submit', sendDataToAPI);
}

function sendDataToAPI(e) {
  e.preventDefault();

  document.getElementById('submit-success').classList.remove('submit-shown');
  document.getElementById('submit-failure').classList.remove('submit-shown');

  const formName = document.querySelector('.form-name').value;
  const formEmail = document.querySelector('.form-email').value;
  const formMessage = document.querySelector('.form-message').value;

  const body = {
    name: formName,
    email: formEmail,
    message: formMessage
  }

  const endpoint = 'https://957gy8fzk0.execute-api.eu-west-1.amazonaws.com/live/contact';

  const lambdaRequest = new Request(endpoint, {
    method: 'POST',
    // Quick note: 'no-cors' mode is for development on localhost only!
    // mode: 'no-cors',
    body: JSON.stringify(body),
  });

  fetch(lambdaRequest)
  .then(response => {
    if (response.status === 200) {
      onSubmitSuccess();
    } else {
      onSubmitFailure();
    }
  })
  .catch(error => console.log(error));
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


  window.addEventListener('scroll', () => {
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
  const currentY = window.scrollY;
  const target = document.getElementById(id);
  const startY = startPct * window.innerHeight;
  const endY = endPct * window.innerHeight;
  const delta = -1 / (endY - startY);
  const constant = endY / (endY - startY);
  let opacity = currentY * delta + constant;

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
  if (navigator.appVersion.indexOf("Mac")!=-1) {
    document.getElementById('frame').style.paddingTop = '0.2em';
  }
}

document.onreadystatechange = () => {
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
}