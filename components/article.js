const css = require('sheetify')
const html = require('choo/html')
const picture = require('./picture.js')

const articleItem = css`
    :host:first-child {
        border-top: 0px;
    }
    :host:last-child {
        border-bottom: 0px;
    }
`

module.exports = function (article) {
  let { title, intro, description, images, link, linkText } = article
  return html`
        <article class="pv4 mv3 bt bb bw1 b--near-white ${articleItem}">
            <div class="flex flex-column flex-row-ns justify-between">
                <div class="w-100 w-50-ns pa3 pa4-ns black-70 f3">
                    <header class="bb b--black-70 pv4">
                        <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3">${title}</h3>
                        <h4 class="f4 fw4 lh-title mt0">${intro}</h4>
                    </header>
                    <section class="pt5 pb4">
                        <p class="lh-copy measure black f5 mt0">
                            ${description}
                            ${link ? html`<span class="pl1">
                                    <a class="underline link black bg-animate hover-bg-dark-blue hover-white" 
                                       href="${link}">[${linkText}]</a>
                                    </span>
                                ` : ''}
                        </p>
                    </section>
                </div>
                <div class='w-100 w-50-ns'>
                    ${images.map(picture)}
                </div>
            </div>
        </article>
    `
    // box-shadow: 0px 1px 5px 0px rgb(200, 200, 200);
}
