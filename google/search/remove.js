{
    const selectors = [
        `.bzXtMb.M8OgIe.dRpWwb:has(.hdzaWe)`,
        `.hdzaWe`,
        `div[role="listitem"]:has(a[href*="udm=50"])`
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

        const aiPAAs = document.querySelectorAll(`div[jsname="yEVEwb"]:has([jsname="cUzNTd"])`)

        for (const elem of aiPAAs) {
            elem.remove()
        }

        const emptyPAAs = document.querySelectorAll(`.ULSxyf:has([jsname="N760b"]):not(:has([jsname="yEVEwb"]))`)

        for (const elem of emptyPAAs) {
            elem.remove()
        }
    }
}