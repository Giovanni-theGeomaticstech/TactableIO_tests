"use strict";
/*
Author: Giovanni Harvey
Date Created: June 12, 2021
Task: Standard Programming Test Tactable.io
*/
exports.__esModule = true;
// File For the Container Based API
var inversify_tactable_config_1 = require("./inversify_tactable.config");
var tactable_class_1 = require("./tactable_class");
var tact_apiManager = inversify_tactable_config_1.myContainer.get(tactable_class_1.TYPE.ApiManager);
exports.tact_apiManager = tact_apiManager;
var tact_todoClient = inversify_tactable_config_1.myContainer.get(tactable_class_1.TYPE.TodoClient);
exports.tact_todoClient = tact_todoClient;
