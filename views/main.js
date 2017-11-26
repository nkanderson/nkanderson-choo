let html = require('choo/html')
let article = require('../components/article.js')
let card = require('../components/card.js')

let TITLE = '!'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="sans-serif">
      <header class="ph5 pt2 pb4 mv0 bg-washed-blue bt bb b--gray">
        <h1 class="near-black mb0">
          Nicole K. Anderson
        </h1>
        <p class="f3 mv1">Web Developer</p>
        <p class="f3 mv1">Portland, OR</p>
        ${/* add github icon and link here */''}
      </header>
      

      <div class="ph3 ph4-ns">
        ${state.articles.map(article)}
      </div>

      <div class="ph3 ph4-ns bg-dark-blue pv4">
        <h2 class="ph4 white">Sandbox</h2>
        <div class="flex flex-column flex-row-ns justify-between">
          ${state.sandbox.map(card)}
        </div>
      </div>
    </body>
  `
}
