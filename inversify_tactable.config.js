"use strict";
/*
Author: Giovanni Harvey
Date Created: June 12, 2021
Task: Standard Programming Test Tactable.io
*/
exports.__esModule = true;
// Binding the the Classes to the Container
var inversify_1 = require("inversify");
var tactable_class_1 = require("./tactable_class");
var myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
myContainer.bind(tactable_class_1.TYPE.ApiManager).to(tactable_class_1.ApiManager);
myContainer.bind(tactable_class_1.TYPE.TodoClient).to(tactable_class_1.TodoClient);
