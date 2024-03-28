import { environment } from "environment/environment";


export const GlobalVariable = Object.freeze({
    BASE_URL: environment.API_URL,
});

export const ApiUrls = Object.freeze({
    GET_EMPLOYEE: `${GlobalVariable.BASE_URL}employees`,
})