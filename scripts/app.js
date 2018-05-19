var app = new Vue({
  el: '#app',
  data: {
    selectedProject: null,
    modalVisable: false,
    projects: {
      'coast-guard-foundation': {
        image: '/images/coastguardfoundation.jpg',
        description: 'The Coast Guard Foundation is a nonprofit that provides financial and material support to students at the Coast Guard Academy, members of the Coast Guard, Coast Guard Auxiliary. I mainly focused on building a responsive website with a  simplistic look and feel. It was built using Nuxt.js and Tachyons CSS utility classes. Nuxt.js provides all configurations needed to make developing server render applications more enjoyable while using Vue.js. Tachyon is a new framework that focuses on custom design without writing CSS.',
        title: 'Coast Guard Foundation',
        type: 'Web Development',
        subHeading: 'Supporting those who protect our nation',
        tech: ['Nuxt.js', 'Vue.js', 'Webpack', 'Gulp', 'craftCMS', 'Php', 'Tachyon', 'Hmtl5'],
        link: 'https://coastguardfoundation.org/',
        linkText: 'www.coastguardfoundation.org'
      },
      'peconic-land-trust': {
        image: '/images/peconic.png',
        description: 'Peconic Land Trust works to protect over 12,000 acres of natural lands on Long Island. I focused on building a beautiful responsive website that was more appealing to their active user\'s. I built the website using Twig as a templating language and Vue.js components. Examples of the Vue components can be found on the Places to visit page and the Calendar Page.',
        title: 'Peconic Land Trust',
        type: 'Web Development',
        subHeading: 'Conserving Long Island',
        tech: ['craftCMS', 'Twig', 'laravel valet', 'Gulp', 'Webpack', 'Vue.js', 'Boostrap 4', 'Hmtl5', 'Sass'],
        link: 'https://peconiclandtrust.org/',
        linkText: 'www.peconiclandtrust.org'
      },
      'eyetoeye': {
        image: '/images/eyetoeye.png',
        description: 'Eye to eye helps transition students from a place of discomfort to a newfound sense of assurance and belonging. As a developer, I decided to create a lot of reusable Vue.js components while utilizing Tailwind CSS Utility classes. It helped with the rapid development of this website. I implemented Vue.js throughout the website for example on the mentoring page. I built a flickity component that handles all sliders throughout the site and created a google maps component that shows all of the client\'s chapters throughout the United States.',
        title: 'Eye To Eye',
        type: 'Web Development',
        subHeading: 'It takes 1 to help 1',
        tech: ['craftCMS', 'google Maps Api', 'Vue.js', 'Twig', 'Laravel Valet', 'Gulp', 'Hmtl5', 'Tailwind css'],
        link: 'https://eyetoeyenational.org/mentoring',
        linkText: 'www.eyetoeyenational.org'
      },
      'cgc-therapy': {
        image: '/images/cgc-therapy.jpg',
        description: 'Cgc therapy was established in 2010 providing the highest quality of psychotherapy services to individuals, couples, and families. As a Freelancer, I was tasked to design and develop a new website that made it easy for the public to feel welcome in the most simplistic way possible.',
        title: 'cgc therapy',
        type: 'Web Development',
        subHeading: 'A Common Ground',
        tech: ['craftCMS', 'Twig', 'Laravel Valet', 'Gulp', 'Boostrap 4', 'Hmtl5', 'Sass'],
        link: 'http://cgctherapy.com/',
        linkText: 'www.cgctherapy.com'
      },
      'sasha-ostojic': {
        image: '/images/sashaostojic.png',
        description: 'By presenting ideas the right way, as digestible, data-driven insights, ideas can spark conversations and collaborations to deliver real-world solutions and create a positive impact on a variety of topics. As a freelancer, I volunteer to build a fully functional website using Ruby on Rails which helped with the understanding of creating a CRUD application and Utilizing gems.',
        title: 'Sasha Ostojic',
        type: 'Web Development',
        subHeading: 'Digestible Data-Driven Insights',
        tech: ['Ruby on Rails', 'Heroku', 'Jquery', 'Hmtl5', 'Sass', 'SendGrid', 'devise gem', 'friendly_id gem', 'bcrypt gem', 'redcarpet gem', 'mail_form gem'],
        link: 'http://www.sashaostojic.com/',
        linkText: 'www.sashaostojic.com'
      }
    }
  },
  methods: {
    openModal(slug) {
      this.modalVisable = !this.modalVisable

      this.selectedProject = this.projects[slug]
    },
    closeModal() {
      this.modalVisable = !this.modalVisable
      this.selectedProject = null
    }
  }
})