import { expect, test } from '@jest/globals';
import { tact_apiManager } from "../tactable_api";
import { accessPoint, comparePromiseObjectsLength, comparePromiseObjects} from "../test_helper"

// import  { mocked } from 'ts-jest/utils';
// import { IClient, ITestObject, IArrayTestObjects} from "./interface_tactable"
// import { ApiManager, TodoClient, TYPE } from "./tactable";
// import { MockedFunction } from "ts-jest/dist/utils/testing";
// import {Container, inject, injectable} from "inversify";

//////////////////////////////////////////////////////////////////////
// Integration Tests
// Tests does not test directly for error handling

test(
    "Integration test for valid client injection (Object Length)",
    () => {
        let endpointTest:string = "https://jsonplaceholder.typicode.com/todos"
        let tactApiManage = tact_apiManager.fetchData(endpointTest)
        let otherData:Promise<any> = accessPoint(endpointTest)
        const equalLength:Promise<boolean> = comparePromiseObjectsLength(tactApiManage, otherData)
        equalLength.then(boolvalue => expect(boolvalue).toEqual(true))
    }
)

test(
    "Integration test for valid client injection (Deep Object Equality)",
    () => {
        let endpointTest:string = "https://jsonplaceholder.typicode.com/todos"
        let tactApiManage = tact_apiManager.fetchData(endpointTest)
        let otherData:Promise<any> = accessPoint(endpointTest)
        // const equalLength:Promise<boolean> = comparePromiseObjectsLength(tactApi, otherData)
        let objectEquality:Promise<boolean> = comparePromiseObjects(tactApiManage, otherData)
        
        return objectEquality.then(boolvalue => {
            expect(boolvalue).toEqual(true)})
    }
)




//////////////////////////////////////////////////////////////////////
//Failed Integration Test Attempt
// Missing required @injectable annotation in: mockConstructor
// Could not Figure out this Error (Probably need to deep dive in Mock cLasses)
// The idea was to actually mock TodoClient and Inject it into ApiManager
// I need a better undertanding


// const TodoClientMock = jest.fn<IClient, any>(
//     () => ({
//         allData: jest.fn().mockReturnValue(Promise.resolve(arrayApiData))
//     }));


// let testContainer = new Container()
// testContainer.bind<ApiManager>(TYPE.ApiManager).to(ApiManager);
// testContainer.bind<TodoClient>(TYPE.TodoClient).to(TodoClientMock)

// const newClient = new TodoClientMock()

// test("Integration Test", () => {
//         // console.log(TodoClient) 

//         let test_apiManager = testContainer.get<ApiManager>(TYPE.ApiManager)
//         // console.log(newClient.allData(""))
//         // console.log(tact_apiManager.fetchData())
//         console.log(test_apiManager.fetchData())
// })

//////////////////////////////////////////////////////////////////////
