/*
Author: Giovanni Harvey
Date Created: June 12, 2021
Task: Standard Programming Test Tactable.io
*/

// Binding the the Classes to the Container

import { Container } from "inversify";
import { ApiManager, TodoClient, TYPE } from "./tactable_class";

let myContainer = new Container();
myContainer.bind<ApiManager>(TYPE.ApiManager).to(ApiManager);

myContainer.bind<TodoClient>(TYPE.TodoClient).to(TodoClient);

// https://github.com/inversify/InversifyJS/blob/master/wiki/classes_as_id.md

export { myContainer };