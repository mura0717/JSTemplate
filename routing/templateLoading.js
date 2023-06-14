export const renderPage = async pageUrl => {
    const template = await loadTemplate(pageUrl)
    setContent(template,"content")
}

export const renderTemplate = async (pageUrl, contentId) => {
    const template = await loadTemplate(pageUrl)
    setContent(template,contentId)
}

/**
 * Appends the provided template to the node with the id contentId
 * @param {*} template The HTML-Template to render
 * @param {string} contentId
 */
/* export function renderTemplate(template, contentId) {
    const clone = template.content.cloneNode(true);
    const content = document.getElementById(contentId);
    content.innerHTML = "";
    content.appendChild(clone);
  } */

/**
 * Loads an external file with an html-template, adds it to the body of your page, and returns the template
 * The file to be loaded can contain more than one template, but the one that will be returned must
 * be the first one in the file and this does not require an id
 * @param {string} page - Path to the file containing the template ('/templates/template.html')
 * @return {Promise<*>} On succesfull resolvement, the HtmlTemplate found in the file
 */
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