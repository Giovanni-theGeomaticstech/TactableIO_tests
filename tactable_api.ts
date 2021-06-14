/*
Author: Giovanni Harvey
Date Created: June 12, 2021
Task: Standard Programming Test Tactable.io
*/

// File For the Container Based API

import { myContainer } from "./inversify_tactable.config"
import { ApiManager,TodoClient, TYPE } from "./tactable_class"

let tact_apiManager:ApiManager = myContainer.get<ApiManager>(TYPE.ApiManager)

let tact_todoClient:TodoClient = myContainer.get<TodoClient>(TYPE.TodoClient)

export { tact_apiManager, tact_todoClient }
