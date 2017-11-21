let html = require('choo/html')
let picture = require('./picture.js')

module.exports = function (article) {
    let { type, title, intro, description, img } = article;
    let picClasses = 'w-100 w-50-ns'
    return html`
        <article class="pv5">
            <div class="flex flex-column flex-row-ns justify-between">
                <div class="w-100 w-40-ns pa3 pa4-ns bg-white black-70 f3">
                    <header class="bb b--black-70 pv4">
                        <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3">${title}</h3>
                        <h4 class="f4 fw4 lh-title mt0">${intro}</h4>
                    </header>
                    <section class="pt5 pb4">
                        <p class="times lh-copy measure black f5 mt0">
                            ${description}
                        </p>
                    </section>
                </div>
                ${picture(img, picClasses)}
            </div>
        </article>
    `
}