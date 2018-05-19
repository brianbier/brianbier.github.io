var app = new Vue({
  el: '#app',
  data: {
    selectedProject: null,
    modalVisable: false,
    orientationSize: null,
    projects: {
      'coast-guard-foundation': {
        image: '/images/coastguardfoundation.jpg',
        description: 'The Coast Guard Foundation is a nonprofit that provides financial and material support to students at the Coast Guard Academy, members of the Coast Guard, Coast Guard Auxiliary, and their families. As developer, I focused on building a responsive website that puts the clients photos, philosophy and simplistic navigation front and centered. It was built using Nuxt.js and Tachyons css utility classes. Nuxt.js provideds all configurations needed to make developing server render applications more enjoyable using Vue.js. Tachyon is a new framework that focuses on custom design without writting css. It also makes it easier to follow by other developers and not having to figure out what each class is doing.',
        title: 'Coast Guard Foundation:',
        type: 'Web Development',
        subHeading: 'Supporting those who protect our nation',
        tech: ['Nuxt.js', 'Vue.js', 'webpack', 'gulp', 'craftCMS', 'php', 'Tachyon', 'html5'],
        link: 'https://coastguardfoundation.org/',
        linkText: 'www.coastguardfoundation.org'
      },
      'peconic-land-trust': {
        image: '/images/peconic.png',
        description: 'Peconic Land Trust works to protect over 12,000 acres of natural lands on Long Island. I focused on building a beautiful responsive website that was more appealing to their active users groups. I built the website from start to finish and developed Vue.js components to handle pages of the website, such as the calendar and places to visit. I built an API endpoint to manage their events making it easier for users to flow throught the calendar page.',
        title: 'Peconic Land Trust:',
        type: 'Web Development',
        subHeading: 'Conserving Long Island',
        tech: ['craftCMS', 'Twig', 'laravel valet', 'gulp', 'webpack', 'vue.js', 'bootstrap 4', 'html5', 'sass'],
        link: 'https://peconiclandtrust.org/',
        linkText: 'www.peconiclandtrust.org'
      },
      'eyetoeye': {
        image: '/images/eyetoeye.jpg',
        description: 'Eye to eye helps transition students from a place of discomfort to a newfound sense of assurance and belonging. As a developer, I decided to create alot of resuable Vue.js components and Tailwind css Utility classes. It helped with the rapid development of this website. I implemented Vue.js throughout the website for example in the mentoring page. I built a flickity slider component that handles all sliders throughout the site and created a google maps component that shows all of the clients chapters thorught the United States.',
        title: 'Eye To Eye:',
        type: 'Web Development',
        subHeading: 'It takes 1 to help 1',
        tech: ['craftCMS', 'google Maps Api', 'Vue.js', 'Twig', 'Laravel Valet', 'gulp', 'html5', 'Tailwind css'],
        link: 'https://eyetoeyenational.org/mentoring',
        linkText: 'www.eyetoeyenational.org'
      },
      'cgc-therapy': {
        image: '/images/cgc-therapy.jpg',
        description: 'Cgc therapy was established in 2010 providing the highest quality of psychotherapy services to individuals, couples, and families. As a Freelancer I was tasked to design and develope a new website that made it easy for the public to feel welcoming in the most simplistic way possible.',
        title: 'cgc therapy:',
        type: 'Web Development',
        subHeading: 'A Common Ground',
        tech: ['craftCMS', 'Twig', 'Laravel Valet', 'gulp', 'bootstrap 4', 'html5', 'sass'],
        link: 'http://cgctherapy.com/',
        linkText: 'www.cgctherapy.com'
      },
      'sasha-ostojic': {
        image: '/images/sasha-ostojic.jpg',
        description: 'By presenting ideas the right way, as digestible, data-driven insights, ideas can spark conversations and collaborations to deliver real world solutions and create a positive impact in a variety of topics. As a freelancer I volunteer to built a fully functional website using Ruby on Rails which helped with the understanding of creating a CRUD application.',
        title: 'Sasha Ostojic:',
        type: 'Web Development',
        subHeading: 'Digestible Data-Driven Insights',
        tech: ['Ruby on Rails', 'Heroku', 'Jquery', 'Html5', 'Sass', 'SendGrid', 'devise gem', 'friendly_id gem', 'bcrypt gem', 'redcarpet gem', 'mail_form gem'],
        link: 'http://www.sashaostojic.com/',
        linkText: 'www.sashaostojic.com'
      }
    }
  },
  created() {
    // window.addEventListener('orientationchange', () => {
      // alert(window.orientation);
      this.orientationSize = window.orientation;
      console.log(document.documentElement.clientWidth);
    // }, false);
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('orientationchange', () => {
        // alert(window.orientation);
        this.orientationSize = window.orientation;
      }, false);
    })
  },
  methods: {
    orientation(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
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