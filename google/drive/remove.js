{
    const selectors = [
        `.a-w-x .h-Yo:has(+ .h-v .Nsw7Y)`,
        `.a-w-x .h-v:has(.Nsw7Y)`,
        `.a-s-tb-sc-Ja-Q.a-s-tb-sc-Ja-Q-Nm.a-s-tb-Kg-Q:has(.h-sb-Ic.h-R-d.a-c-d.a-r-d.iQnZTe.SMHH7)`,
        `.gb_ze.gb_ye[id="WWNEkf"]`
    ]

    purgeLLMElements()

    document.addEventListener("DOMContentLoaded", purgeLLMElements)
    window.addEventListener("load", purgeLLMElements)

    document.addEventListener("readystatechange", () => {
        if (!document.body) return

        let observer = new MutationObserver((mutations) => {
            purgeLLMElements()
        })

        observer.observe(document.body, { childList : true })
    })


    function purgeLLMElements() {
        for (const selector of selectors) {
            const elements = document.querySelectorAll(selector)

            for (const element of elements) {
                element.remove()
            }
        }
    }
}