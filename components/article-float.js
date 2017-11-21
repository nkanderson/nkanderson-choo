let html = require('choo/html')

module.exports = function (article) {
  let { title, description, img } = article
  return html`
        <article class="container">
            <div class="cf" style="background: url(${img}) no-repeat center center fixed; background-size: cover;">
                <div class="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
                    <header class="bb b--black-70 pv4">
                        <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">${title}</h3>
                        <h4 class="f3 fw4 i lh-title mt0"></h4>
                    </header>
                    <section class="pt5 pb4">
                        <p class="times lh-copy measure f4 mt0">
                        ${description}
                        </p>
                    </section>
                </div>
            </div>
        </article>
    `
}
