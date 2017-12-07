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
      description: 'Worked on full site redesign in Drupal 7, contributing on multiple levels of the codebase, from custom Drupal modules to front-end styling. Since the launch in September 2015, additional projects have included setting up end-to-end and visual regression testing using Nightwatch and Wraith, creating custom workflows with the Mailchimp API, and improving measurement of site metrics through Google Analytics and Tag Manager. Beyond regular maintenance and feature additions, developed multiple stand-alone, interactive experiences in single-page application style to facilitate deeper user engagement.',
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
          caption: 'OMSI.edu space science map, using Leaflet.',
          link: {
            url: 'https://omsi.edu/space#map',
            text: 'OMSI.edu/space'
          }
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
          caption: 'OMSI.edu quiz, made with React.',
          link: {
            url: 'https://omsi.edu/quiz',
            text: 'OMSI.edu/quiz'
          }
        }
      ]
    },
    {
      type: 'project',
      title: 'Increasing Rust\'s Reach',
      intro: 'rustw, a web frontend for the Rust compiler',
      link: 'https://github.com/nkanderson/rustw',
      linkText: 'rustw on github',
      description: 'Was one of 12 participants selected to work with Rust core team members to improve Rust development tools and resources. Focus of project work has been on rustw, a web frontend for the Rust compiler built with React & Redux. To date, improvements have been made to the development experience, adding API documentation and tools like JSON server, as well as the end user experience, with URL routing and a cleaner layout.',
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
      description: 'Met weekly with team over two project seasons to create a data product exploring urban development in Portland. First season contribution centered on the front-end javascript used to aggregate data from microservices and create an animated map using Leaflet. During the second season, main contributions were to the ETL pipeline, using Python and the Pandas library to prepare data from Zillow before it was loaded into a PostgreSQL database.',
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
      link: 'https://nkanderson-sandbox.nyc3.digitaloceanspaces.com/horsethief-lake/index.html',
      linkText: 'Link',
      description: 'Sandbox project using the HTML Canvas element, CSS animation, and just a little parallax.',
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
      link: 'https://nkanderson-sandbox.nyc3.digitaloceanspaces.com/construction/index.html',
      linkText: 'Link',
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
