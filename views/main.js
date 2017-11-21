let html = require('choo/html')
let article = require('../components/article.js')

let TITLE = '!'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="sans-serif">
      <h1 class="f3 ph5 pv4 mt0 bg-washed-blue near-black bt bb b--gray">
        Nicole K. Anderson
      </h1>

      <div class="ph3 ph4-ns">
        ${state.articles.map(article)}
      </div>
    </body>
  `
}
