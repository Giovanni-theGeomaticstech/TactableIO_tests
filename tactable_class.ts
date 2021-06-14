/*
Author: Giovanni Harvey
Date Created: June 10, 2021
Task: Standard Programming Test Tactable.io
*/

// API Classes

import axios from "axios";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IApi, IClient } from "./interface_tactable"

const TYPE = {
    TodoClient: Symbol.for("TodoClient"),
    ApiManager: Symbol.for("ApiManager")
}

@injectable()
class TodoClient implements IClient{

    allData(endpoint:string): Promise<any[]>{
        // Returns all the data from the endpoint
        return axios.get(endpoint)
            .then(resp=>resp.data)
            .catch(error => console.error(error))
    }

    dataByUserId(endpoint:string, userId:number): Promise<any[]>{
        // Returns data for the userGroup
        return axios.get(endpoint)
            .then(resp=> {
                let responseData = resp.data
                return responseData.filter(element => {
                    return element['userId'] === userId
                })
            })
            .catch(error => console.error(error))
    }

    dataById(endpoint:string, id:number): Promise<{}>{
        // Returns data for one object
        return axios.get(endpoint)
            .then(resp=> {
                let responseData = resp.data
                return responseData.filter(element => {
                    return element['id'] === id
                })[0]
            })
            .catch(error => console.error(error))
    }

}   

// API Manager Class
@injectable()
class ApiManager implements IApi{
    
    //fields
    defaultEndpoint:string;
    client: TodoClient;

    //Constructor
    public constructor(@inject(TYPE.TodoClient) client: TodoClient){ // endpoint is just for any other api calls
        this.defaultEndpoint = "https://jsonplaceholder.typicode.com/todos"
        this.client = client
    }

    // Implement Fetch Data Method
    fetchData(endpoint?:string):Promise<any[]> {
        // return endpoint ? this.client.allData(endpoint):this.client.allData(this.defaultEndpoint)
        return this.client.allData(endpoint || this.defaultEndpoint)
    }
}

export {ApiManager, TodoClient, TYPE}
