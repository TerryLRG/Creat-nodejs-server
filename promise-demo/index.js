
// const GetDataFromJSON = (fileName, callBack) => {
//     let filePath = path.resolve(__dirname, "data", fileName);
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             console.error(err.message);
//             return;
//         }
//         callBack(JSON.parse(data));
//     });
// }
// GetDataFromJSON("a.json", (aData) => {
//     console.log("a json:", aData);
//     GetDataFromJSON(aData.next, (bData) => {
//         console.log("b json:", bData);h
//         GetDataFromJSON(bData.next, (cData) => {
//             console.log("c json:", cData);
//         })
//     })
// });
const fs = require("fs");
const path = require("path");
const GetDataFromJSON = (fileName)=>{
    const promise = new Promise((resolve,reject)=>{
        const filePath = path.resolve(__dirname,"data",fileName);
        fs.readFile(filePath,(err,data)=>{
            if (err) {
                reject(err);
                return;
            }
            resolve(JSON.parse(data.toString()));
        });        
    });
    return promise;
}
GetDataFromJSON("a.json").then((adata)=>{
    console.log("adata:",adata);
    return GetDataFromJSON(adata.next);
}).then((bdata)=>{
    console.log("bdata:",bdata);
    return GetDataFromJSON(bdata.next);
}).then((cdata)=>{
    console.log("cdata:",cdata);
});