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
      img: {
        mobile: {
          src: 'https://placeimg.com/640/480/arch',
          type: 'jpeg'
        },
        img: {
          src: 'https://placeimg.com/640/480/arch',
          type: 'jpeg'
        },
        webp: {
          src: 'https://placeimg.com/640/480/arch'
        },
        alt: 'placeholder architecture image'
      }
    },
    {
      type: 'project',
      title: 'Increasing Rust\'s Reach',
      intro: 'Working on rustw, a web frontend for the Rust compiler',
      description: 'Lorem ipsum heeey',
      img: {
        mobile: {
          src: 'https://placeimg.com/640/480/animals',
          type: 'jpeg'
        },
        img: {
          src: 'https://placeimg.com/640/480/animals',
          type: 'jpeg'
        },
        webp: {
          src: 'https://placeimg.com/640/480/animals'
        },
        alt: 'placeholder animals image'
      }
    },
    {
      type: 'work',
      title: 'Isolary',
      intro: 'Custom applications using the Laravel PHP framework.',
      description: 'Lorem ipsum heeey',
      img: {
        mobile: {
          src: 'https://placeimg.com/640/480/tech',
          type: 'jpeg'
        },
        img: {
          src: 'https://placeimg.com/640/480/tech',
          type: 'jpeg'
        },
        webp: {
          src: 'https://placeimg.com/640/480/tech'
        },
        alt: 'placeholder tech image'
      }
    },
    {
      type: 'project',
      title: 'Hack Oregon',
      intro: 'Worked two seasons on PlotPDX, an urban development-themed data project',
      description: 'Lorem ipsum heeey',
      img: {
        mobile: {
          src: 'https://placeimg.com/640/480/nature',
          type: 'jpeg'
        },
        img: {
          src: 'https://placeimg.com/640/480/nature',
          type: 'jpeg'
        },
        webp: {
          src: 'https://placeimg.com/640/480/nature'
        },
        alt: 'placeholder nature image'
      }
    }
  ]

  emitter.on('DOMContentLoaded', function () {
    // emitter.on('clicks:add', function (count) {
    //   state.totalClicks += count
    //   emitter.emit(state.events.RENDER)
    // })
  })
}
