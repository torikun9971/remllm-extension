{
    const selectors = [
        `a[href*="i/grok"]`,
        `.css-175oi2r.r-12vffkv:has(> * > * > button[aria-label="Grok"])`
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