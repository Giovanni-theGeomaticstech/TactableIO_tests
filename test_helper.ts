// Helper File with functions used in testing

import axios from "axios";
var lodash = require('lodash');

// let endpoint = "http://services.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer"

function accessPoint(endpoint:string):Promise<any>{
    // Retrieve data from endpoints
    return axios.get(endpoint)
        .then(resp=>resp.data)
        .catch(error => console.error(error))
}

function comparePromiseObjectsLength(a:Promise<any[]>, b:Promise<any[]>):Promise<boolean>{
    // Comparison of the length of two Promise Objects
    return a.then(aData => 
        b.then(bData => {
            // console.log(bData.length == aData.length)
            return bData.length === aData.length
        }));
}

function comparePromiseObjects(a:Promise<any[]>, b:Promise<any[]>):Promise<boolean>{
    // Deep Comparison of two Promise Objects using Lodash
    return a.then(aData => 
        b.then(bData => {
            // console.log(lodash.isEqual(bData, aData))
            return lodash.isEqual(bData, aData)
        }));
}

export { accessPoint, comparePromiseObjectsLength, comparePromiseObjects}