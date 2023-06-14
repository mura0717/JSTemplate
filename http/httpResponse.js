export async function handleResponse(res) {
    if(res.status === 401)
        handleNotAuthorized()
    else if(res.status === 403)
        handleForbidden()
    else if (!res.ok)
        await handleNotOk(res)
    return res.json()
}

const handleNotAuthorized = () => {
    alert("You are not authorized to view this page")
}

const handleForbidden = () => {
    alert("You do not have permission to view this page")
}

const handleNotOk = async res => {
    const errorResponse = await res.json()
    const error = new Error(errorResponse.message)
    error.fullResponse = errorResponse
    throw error
}

/**
 * Small utility function to use in the first "then()" when fetching data from a REST API that supply error-responses as JSON
 *
 * Use like this--> const responseData = await fetch(URL,{..}).then(handleHttpErrors)
 */
export async function handleHttpErrors(res) {
    if (!res.ok) {
      const errorResponse = await res.json();
      const error = new Error(errorResponse.message);
      // @ts-ignore
      error.fullResponse = errorResponse;
      throw error;
    }
    return res.json();
  }
  
  /**
   * HINT --> USE DOMPurify.santitize(..) to sanitize a full string of tags to be inserted
   * via innerHTLM
   * Tablerows are required to be inside a table tag, so use this small utility function to
   * santitize a string with TableRows only (made from data with map)
   * DOMPurify is available here, because it's imported in index.html, and as so available in all
   * your JavaScript files
   */
  export function sanitizeStringWithTableRows(tableRows) {
    let secureRows = DOMPurify.sanitize("<table>" + tableRows + "</table>");
    secureRows = secureRows.replace("<table>", "").replace("</table>", "");
    return secureRows;
  }