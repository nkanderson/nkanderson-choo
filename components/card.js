const css = require('sheetify')
const html = require('choo/html')
const picture = require('./picture.js')

const prefix = css`
    :host figure {
        margin: 0px;
    }
`

module.exports = function (sandboxItem) {
  let { title, description, images, link, linkText } = sandboxItem
  return html`
        <article class="mw5 center bg-white pa3 pa3-ns mv3 ba b--near-black">
                <div class="tc ${prefix}">
                    ${images.map(picture)}
                    <h1 class="f4">${title}</h1>
                    <hr class="mw3 bb bw1 b--black-10">
                </div>
                <p class="lh-copy measure center f6 black-70 ph1">
                    ${description}
                    ${link ? html`<span class="pl1">
                    <a class="underline link black bg-animate hover-bg-dark-blue hover-white" 
                       href="${link}">[${linkText}]</a>
                    </span>
                ` : ''}
                </p>
        </article>
    `
}
