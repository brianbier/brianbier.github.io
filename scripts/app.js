var app = new Vue({
  el: '#app',
  data: {
    selectedProject: null,
    modalVisable: false,
    projects: {
      'coast-guard-foundation': {
        image: '',
        description: '',
        title: '',
        type: '',
        subHeading: '',
        tech: [],
        link: '',
        linktext: 'www.cgctherapy.com'
      },
      'cgc-therapy': {
        image: '/Users/brianbier/sites/brianbier.github.io/images/cgc-therapy.jpg',
        description: 'Cgc therapy was established in 2010 providing the highest quality of psychotherapy services to individuals, couples, and families. As a Freelancer I was tasked to design and develope a new website that made it easy for the public to feel welcoming in the most simplistic way possible.',
        title: 'cgc therapy',
        type: 'Web Development',
        subHeading: 'A Common Ground',
        tech: ['craft-cms', 'Twig', 'php','bootstrap 4', 'html5', 'scss'],
        link: 'http://cgctherapy.com/',
        linkText: 'www.cgctherapy.com'
      },
      'peconic-land-trust': {
        image: '',
        description: '',
        title: '',
        type: '',
        subHeading: '',
        tech: [],
        link: '',
        linktext: 'www.cgctherapy.com'
      },
      'eyetoeye': {
        image: '',
        description: '',
        title: '',
        type: '',
        subHeading: '',
        tech: [],
        link: '',
        linktext: 'www.cgctherapy.com'
      },
      'sasha-ostojic': {
        image: '',
        description: '',
        title: '',
        type: '',
        subHeading: '',
        tech: [],
        link: '',
        linktext: 'www.cgctherapy.com'
      }
    }
  },
  methods: {
    openModal(slug){
      this.modalVisable = !this.modalVisable
      console.log(this.projects[slug])
      this.selectedProject = this.projects[slug]
    },
    closeModal(){
      this.modalVisable = !this.modalVisable
      this.selectedProject = null
    }
  }
})