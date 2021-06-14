"use strict";
/*
Author: Giovanni Harvey
Date Created: June 10, 2021
Task: Standard Programming Test Tactable.io
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
// API Classes
var axios_1 = require("axios");
var inversify_1 = require("inversify");
require("reflect-metadata");
var TYPE = {
    TodoClient: Symbol["for"]("TodoClient"),
    ApiManager: Symbol["for"]("ApiManager")
};
exports.TYPE = TYPE;
var TodoClient = /** @class */ (function () {
    function TodoClient() {
    }
    TodoClient.prototype.allData = function (endpoint) {
        // Returns all the data from the endpoint
        return axios_1["default"].get(endpoint)
            .then(function (resp) { return resp.data; })["catch"](function (error) { return console.error(error); });
    };
    TodoClient.prototype.dataByUserId = function (endpoint, userId) {
        // Returns data for the userGroup
        return axios_1["default"].get(endpoint)
            .then(function (resp) {
            var responseData = resp.data;
            return responseData.filter(function (element) {
                return element['userId'] === userId;
            });
        })["catch"](function (error) { return console.error(error); });
    };
    TodoClient.prototype.dataById = function (endpoint, id) {
        // Returns data for one object
        return axios_1["default"].get(endpoint)
            .then(function (resp) {
            var responseData = resp.data;
            return responseData.filter(function (element) {
                return element['id'] === id;
            })[0];
        })["catch"](function (error) { return console.error(error); });
    };
    TodoClient = __decorate([
        inversify_1.injectable()
    ], TodoClient);
    return TodoClient;
}());
exports.TodoClient = TodoClient;
// API Manager Class
var ApiManager = /** @class */ (function () {
    //Constructor
    function ApiManager(client) {
        this.defaultEndpoint = "https://jsonplaceholder.typicode.com/todos";
        this.client = client;
    }
    // Implement Fetch Data Method
    ApiManager.prototype.fetchData = function (endpoint) {
        // return endpoint ? this.client.allData(endpoint):this.client.allData(this.defaultEndpoint)
        return this.client.allData(endpoint || this.defaultEndpoint);
    };
    ApiManager = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(TYPE.TodoClient))
    ], ApiManager);
    return ApiManager;
}());
exports.ApiManager = ApiManager;
