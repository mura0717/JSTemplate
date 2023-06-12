export const renderPage = async pageUrl => {
    const template = await loadTemplate(pageUrl)
    setContent(template,"content")
}

export const renderTemplate = async (pageUrl, contentId) => {
    const template = await loadTemplate(pageUrl)
    setContent(template,contentId)
}

const loadTemplate = async page => {
    const resHtml = await fetch(page).then((r) => {
        if (!r.ok) {
            throw new Error(`Failed to load the page: '${page}' `);
        }
        return r.text();
    });
    const div = document.createElement("div");
    div.innerHTML = resHtml;
    return div.querySelector("template");
}

const setContent = (template,contentId) => {
    const clone = template.content.cloneNode(true);
    const content = document.getElementById(contentId);
    content.innerHTML = "";
    content.appendChild(clone);
}