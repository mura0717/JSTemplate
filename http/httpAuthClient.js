import {handleResponse} from "./httpResponse.js";
import {baseURL} from "../api/apiInfo.js";

export const getRequest = async endpoint => {
  try {
    return await performGetRequest(`${baseURL}${endpoint}`)
        .then(handleResponse);
  } catch (err) {
    return undefined;
  }
}

export const  postRequest = async (endpoint, body) => {
  try {
    return await performRequest(`${baseURL}${endpoint}`,"POST",body)
        .then(handleResponse);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

export const patchRequest = async (endpoint, body) => {
  try {
    return await performRequest(`${baseURL}${endpoint}`,"PATCH",body).then(handleResponse);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

export const deleteRequest = async (endpoint, body) => {
  try {
    return await performRequest(`${baseURL}${endpoint}`,"DELETE",body).then(handleResponse);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const performGetRequest = async url => {
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
}

const performRequest = async (url, method, body = undefined) => {
  return await fetch(url, {
    method: method,
    body: body ? JSON.stringify(body) : "",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
}