module.exports = store

function store (state, emitter) {
  // state.totalClicks = 0
  // initialize state
  state.articles = [
    {
      type: 'work',
      title: 'OMSI',
      intro: 'OMSI.edu site using Drupal 7',
      link: 'https://omsi.edu',
      linkText: 'OMSI.edu',
      description: 'I was involved in the full-site redesign of omsi.edu, working on everything from custom Drupal modules in PHP to front-end styling using Sass and BEM. Since the launch in September 2015, I\'ve set up end-to-end and visual regression testing using Nightwatch and Wraith, created custom workflows with the Mailchimp API, and improved measurment of site metrics through improved analytics and data collection. Using Python scripts and the Pandas library for data cleanup and import, I\'ve reduced time spent on regular content management and updates.',
      images: [
        {
          mobile: {
            src: '/assets/OMSI-Home.png',
            type: 'png'
          },
          main: {
            src: '/assets/OMSI-Home.png',
            type: 'png'
          },
          webp: {
            src: '/assets/OMSI-Home.webp'
          },
          alt: 'OMSI.edu homepage',
          caption: 'OMSI.edu homepage'
        },
        {
          mobile: {
            src: '/assets/OMSI-Space.png',
            type: 'png'
          },
          main: {
            src: '/assets/OMSI-Space.png',
            type: 'png'
          },
          webp: {
            src: '/assets/OMSI-Space.webp'
          },
          alt: 'OMSI.edu map with space science content',
          caption: 'OMSI.edu space science map, using Leaflet'
        },
        {
          mobile: {
            src: '/assets/OMSI-Quiz.png',
            type: 'png'
          },
          main: {
            src: '/assets/OMSI-Quiz.png',
            type: 'png'
          },
          webp: {
            src: '/assets/OMSI-Quiz.webp'
          },
          alt: 'OMSI.edu camps and classes quiz intro',
          caption: 'OMSI.edu quiz, using React'
        }
      ]
    },
    {
      type: 'project',
      title: 'Increasing Rust\'s Reach',
      intro: 'rustw, a web frontend for the Rust compiler',
      link: 'https://github.com/nkanderson/rustw',
      linkText: 'rustw on github',
      description: 'Was one of 12 participants selected to work with Rust core team members to improve Rust development tools and resources. Worked on rustw, a web frontend for the Rust compiler, built with React & Redux.',
      images: [
        {
          mobile: {
            src: '/assets/Rustw-sourceview.png',
            type: 'png'
          },
          main: {
            src: '/assets/Rustw-sourceview.png',
            type: 'png'
          },
          webp: {
            src: '/assets/Rustw-sourceview.webp'
          },
          alt: 'Rustw source view of file',
          caption: 'Rustw source view of file'
        },
        {
          mobile: {
            src: '/assets/Rustw-search.png',
            type: 'png'
          },
          main: {
            src: '/assets/Rustw-search.png',
            type: 'png'
          },
          webp: {
            src: '/assets/Rustw-search.webp'
          },
          alt: 'Rustw term search',
          caption: 'Rustw term search'
        }
      ]
    },
    {
      type: 'project',
      title: 'Hack Oregon',
      intro: 'PlotPDX, an urban development-themed data project',
      link: 'http://plotpdx.org',
      linkText: 'PlotPDX',
      description: 'I worked for two project seasons on PlotPDX. My first season contribution centered on the front-end javascript used to aggregate data from microservices and create an animated map using Leaflet. During the second season, I contributed to the ETL pipeline for housing data from Zillow in a PostgreSQL database, using Python and the Pandas library to prepare data.',
      images: [
        {
          mobile: {
            src: '/assets/PlotPDX-season-2.png',
            type: 'png'
          },
          main: {
            src: '/assets/PlotPDX-season-2.png',
            type: 'png'
          },
          webp: {
            src: '/assets/PlotPDX-season-2.webp'
          },
          alt: 'Season 2, PlotPDX',
          caption: 'Season 2, PlotPDX'
        },
        {
          mobile: {
            src: '/assets/PlotPDX-season-1.png',
            type: 'png'
          },
          main: {
            src: '/assets/PlotPDX-season-1.png',
            type: 'png'
          },
          webp: {
            src: '/assets/PlotPDX-season-1.webp'
          },
          alt: 'Season 1, PlotPDX',
          caption: 'Season 1, PlotPDX'
        }
      ]
    }
  ]

  state.sandbox = [
    {
      title: 'Horsethief Lake',
      description: 'Sandbox project using the Canvas element, CSS animation, and just a little parallax.',
      images: [
        {
          mobile: {
            src: '/assets/Horsethief-Lake.png',
            type: 'png'
          },
          main: {
            src: '/assets/Horsethief-Lake.png',
            type: 'png'
          },
          webp: {
            src: '/assets/Horsethief-Lake.webp'
          },
          alt: 'Screenshot of Horsethief Lake page',
          caption: '',
          displayCaption: false
        }
      ]
    },
    {
      title: 'Under Construction',
      description: 'Classic "under construction" trope, but with webm, a video format allowing for transparent backgrounds.',
      images: [
        {
          mobile: {
            src: '/assets/Under-Construction.gif',
            type: 'gif'
          },
          main: {
            src: '/assets/Under-Construction.gif',
            type: 'gif'
          },
          alt: 'Animated GIF of construction worker breaking through wall',
          caption: '',
          displayCaption: false
        }
      ]
    }
  ]

  emitter.on('DOMContentLoaded', function () {
    // emitter.on('clicks:add', function (count) {
    //   state.totalClicks += count
    //   emitter.emit(state.events.RENDER)
    // })
  })
}
