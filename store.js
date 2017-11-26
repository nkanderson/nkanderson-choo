module.exports = store

function store (state, emitter) {
  // state.totalClicks = 0
  // initialize state
  state.articles = [
    {
      type: 'work',
      title: 'OMSI',
      intro: 'OMSI.edu site using Drupal 7, Python scripting, custom workflows with the Mailchimp API ',
      description: 'Lorem ipsum heeey',
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
          alt: 'OMSI.edu map with Space Science content',
          caption: 'OMSI.edu map with Space Science content'
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
          caption: 'OMSI.edu Camps and Classes quiz intro page'
        }
      ]
    },
    {
      type: 'project',
      title: 'Increasing Rust\'s Reach',
      intro: 'Working on rustw, a web frontend for the Rust compiler',
      description: 'Lorem ipsum heeey',
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
      type: 'work',
      title: 'Isolary',
      intro: 'Custom applications using the Laravel PHP framework.',
      description: 'Lorem ipsum heeey',
      images: [
        {
          mobile: {
            src: 'https://placeimg.com/640/480/tech',
            type: 'jpeg'
          },
          main: {
            src: 'https://placeimg.com/640/480/tech',
            type: 'jpeg'
          },
          webp: {
            src: 'https://placeimg.com/640/480/tech'
          },
          alt: 'placeholder tech image'
        }
      ]
    },
    {
      type: 'project',
      title: 'Hack Oregon',
      intro: 'Worked two seasons on PlotPDX, an urban development-themed data project',
      description: 'Lorem ipsum heeey',
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
      description: 'Sandbox project using Canvas and lite parallax',
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
          caption: ''
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
