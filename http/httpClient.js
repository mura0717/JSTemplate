import {baseURL} from "../models/apiInfo.js";
import {handleResponse} from "./httpResponse.js";

export const getRequest = async endpoint => {
    try {
        return await fetch(`${baseURL}${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(handleResponse);
    } catch (err) {
        console.log(err);
        return undefined;
    }
}

export const postRequest = async (endpoint, body) => {
    try {
        return await fetch(`${baseURL}${endpoint}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(handleResponse);
    } catch (err) {
        console.log(err);
        return undefined;
    }
}

export const patchRequest = async (endpoint, body) => {
    return await fetch(`${baseURL}${endpoint}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(handleResponse)
        .catch((err) => {
            console.log(err);
            return {
                message: err.message,
            };
        });
}

export const deleteRequest = async (endpoint, body) => {
    return await fetch(`${baseURL}${endpoint}`, {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(handleResponse)
        .catch((err) => {
            console.log(err);
            return {
                message: err.message,
            };
        });
}