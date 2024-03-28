import { environment } from "environment/environment";


export const GlobalVariable = Object.freeze({
    BASE_URL: environment.API_URL,
});

export const ApiUrls = Object.freeze({
    // HR
    // For Employees
    GET_EMPLOYEE: `${GlobalVariable.BASE_URL}employees`,
  
  //For Holidays
    GET_HOLIDAYS: `${GlobalVariable.BASE_URL}holidays`,

    //For Jobs
    GET_JOBS: `${GlobalVariable.BASE_URL}jobs`,
})

