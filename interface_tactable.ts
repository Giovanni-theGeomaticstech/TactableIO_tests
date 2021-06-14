/*
Author: Giovanni Harvey
Date Created: June 10, 2021
Task: Standard Programming Test Tactable.io
*/

// Interface Definitions

// API Interface
export interface IApi{
    // Remember endpoint is for any other enpoints
    fetchData(endpoint?:string):Promise<any[]>; // returns a Promise (may need fields too)
}


// CLient Based Interface
export interface IClient{
    allData(endpoint:string):Promise<any[]>;
    dataByUserId(endpoint:string, userId:number):Promise<any[]>;
    dataById(endpoint:string, id:number):Promise<{}>;
}

// For Testing purposes (tactable_http.test)

// Object for client Interface
export interface ITestObject {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
    visible: string
}

//Array of Objects for Client Interface
export interface IArrayTestObjects{
    [index:number]:ITestObject
}
