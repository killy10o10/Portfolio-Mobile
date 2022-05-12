const projects = [
  //= == Card 1===//
  {
    image: './resource/project-thumbnail-desktop.svg',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveVersion: 'https://killy10o10.github.io/Portfolio-Mobile/',
    sourceLink: 'https://github.com/killy10o10/Portfolio-Mobile',

  },
  //= == Card 2===//
  {
    image: './resource/project-info-thumbnail.svg',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveVersion: 'https://killy10o10.github.io/Portfolio-Mobile/',
    sourceLink: 'https://github.com/killy10o10/Portfolio-Mobile',

  },
  //= == Card 3===//
  {
    image: './resource/project-thumbnail-desktop.svg',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveVersion: 'https://killy10o10.github.io/Portfolio-Mobile/',
    sourceLink: 'https://github.com/killy10o10/Portfolio-Mobile',

  },
  //= == Card 4===//
  {
    image: './resource/project-info-thumbnail.svg',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveVersion: 'https://killy10o10.github.io/Portfolio-Mobile/',
    sourceLink: 'https://github.com/killy10o10/Portfolio-Mobile',

  },
  //= == Card 5===//
  {
    image: './resource/project-thumbnail-desktop.svg',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveVersion: 'https://killy10o10.github.io/Portfolio-Mobile/',
    sourceLink: 'https://github.com/killy10o10/Portfolio-Mobile',

  },
  //= == Card 6===//
  {
    image: './resource/project-info-thumbnail.svg',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveVersion: 'https://killy10o10.github.io/Portfolio-Mobile/',
    sourceLink: 'https://github.com/killy10o10/Portfolio-Mobile',

  },
];

const projectSection = document.querySelector('#projects');
const buttons = Array.from(document.querySelectorAll('.modal-button'));

const cardModal = projects.map((card) => ` <div class="project-card-bg">
    <div class="project-card">
      <button type="button" class="close-project"><i class="fa-solid fa-xmark"></i></button>
      <div class="project-thumbnail">
        <img src="${card.image}" alt="">
      </div>
      <div class="project-info">
        <div class="heading-tools">
          <h4 class="project-card-heading">${card.title}</h4>
          <ul class="flex-list">
           ${card.technologies.map((technology) => `<li>${technology}</li>`).join('')}
          </ul>
        </div>
        <div class="project-buttons">
          <a  class="button project-button" href="${card.liveVersion}">See Live
            <img src="./resource/see-live-icon.svg" alt="">
          </a>
          <a class="button project-button" href="${card.sourceLink}">See Source
            <img src="./resource/github_icon.svg" alt="">
          </a>
      </div>
      </div>
      <p class="project-description">${card.description}</p>
    </div>
  </div>`);

buttons.forEach((button) => {
  if (button.id === 'button-1') {
    button.addEventListener('click', () => {
      projectSection.innerHTML += cardModal[0];
    });
  } else if (button.id === 'button-2') {
    button.addEventListener('click', () => {
      projectSection.innerHTML += cardModal[1];
    });
  } else if (button.id === 'button-3') {
    button.addEventListener('click', () => {
      projectSection.innerHTML += cardModal[2];
    });
  } else if (button.id === 'button-4') {
    button.addEventListener('click', () => {
      projectSection.innerHTML += cardModal[3];
    });
  } else if (button.id === 'button-5') {
    button.addEventListener('click', () => {
      projectSection.innerHTML += cardModal[4];
    });
  } else if (button.id === 'button-6') {
    button.addEventListener('click', () => {
      projectSection.innerHTML += cardModal[5];
    });
  }
});
