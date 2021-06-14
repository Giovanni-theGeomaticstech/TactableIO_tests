import axios from "axios";
import  { mocked } from 'ts-jest/utils';
import { expect, test } from '@jest/globals';
import { IArrayTestObjects} from "../interface_tactable"
import { tact_todoClient } from "../tactable_api";

//////////////////////////////////////////////////////////////////////
// API Call Tests
// Tests does not test directly for error handling

jest.mock("axios");
const mockedAxios = mocked(axios, true); //mocked Axios library

let endpoint = "https://jsonplaceholder.typicode.com/todos"
const arrayApiData:IArrayTestObjects = [
    {
        userId: 25,
        id: 100,
        title: "Buchard",
        completed: true,
        visible: "yes"
    },
    {
        userId: 5,
        id: 10,
        title: "Based on Fun",
        completed: false,
        visible: "no"
    },
]


test("API All Client Data tests", () => {
    const response = {data:arrayApiData}

    //For Promise Implementation
    mockedAxios.get.mockImplementation(() => Promise.resolve(response))    
    tact_todoClient.allData(endpoint).then(data => expect(data).toEqual(arrayApiData))
})

test("API For Data By Client User Id groups tests", () => {
    const response = {data:arrayApiData}

    //For Promise Implementation
    mockedAxios.get.mockImplementation(() => Promise.resolve(response))
    tact_todoClient.dataByUserId(endpoint, 25).then(data => expect(data).toEqual([arrayApiData[0]]))
})

test("API For Data By Client Id tests", () => {
    const response = {data:arrayApiData}

    //For Promise Implementation
    mockedAxios.get.mockImplementation(() => Promise.resolve(response))
    tact_todoClient.dataById(endpoint, 10).then(data => expect(data).toEqual(arrayApiData[1]))
})
//////////////////////////////////////////////////////////////////////
