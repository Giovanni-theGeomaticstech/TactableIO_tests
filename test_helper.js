"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var lodash = require('lodash');
var endpoint = "http://services.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer";
function accessPoint(endpoint) {
    // Retrieve data from endpoints
    return axios_1["default"].get(endpoint)
        .then(function (resp) { return resp.data; })["catch"](function (error) { return console.error(error); });
}
exports.accessPoint = accessPoint;
function comparePromiseObjectsLength(a, b) {
    // Comparison of the length of two Promise Objects
    return a.then(function (aData) {
        return b.then(function (bData) {
            // console.log(bData.length == aData.length)
            return bData.length == aData.length;
        });
    });
}
exports.comparePromiseObjectsLength = comparePromiseObjectsLength;
function comparePromiseObjects(a, b) {
    // Deep Comparison of two Promise Objects using Lodash
    return a.then(function (aData) {
        return b.then(function (bData) {
            // console.log(lodash.isEqual(bData, aData))
            return lodash.isEqual(bData, aData);
        });
    });
}
exports.comparePromiseObjects = comparePromiseObjects;
