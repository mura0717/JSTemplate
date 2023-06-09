import {baseURL} from "../models/apiInfo.js";
import {handleResponse} from "./httpResponse.js";

/**
 * Make a GET request to the targetted endpoint
 * @param {string} endpoint
 * @example const data = await fetchClient.get("/users")
 */
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

/**
 * Make a POST request to the targetted endpoint
 * @param {string} endpoint
 * @param {object} body
 * @example const data = await fetchClient.post("/users", {"username": "test", "password": "1234"})
 */
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

/**
 * Make a PATCH request to the targetted endpoint
 * @param {string} endpoint
 * @param {object} body
 * @example const data = await fetchClient.patch("/users", {"username": "test", "password": "1234"})
 */

export const patchRequest = async (endpoint, body) => {
    return await fetch(`${baseURL}${endpoint}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(handleResponse)
        .catch((err) => {
            console.log(err);
            return {
                message: err.message,
            };
        });
}