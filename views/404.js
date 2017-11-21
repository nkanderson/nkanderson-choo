var html = require('choo/html')

var TITLE = '! - route not found'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="sans-serif">
      <h1 class="f3 ph4 pv4 mt0 bg-washed-blue near-black bt bb b--gray">
        404 - route not found
      </h1>
      <div class="ph3 ph4-ns">
        <a href="/" class="link black underline">
          Back to main
        </a>
      </div>
    </body>
  `
}
