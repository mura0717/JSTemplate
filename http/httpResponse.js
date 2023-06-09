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