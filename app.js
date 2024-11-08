const routeHandler = require("./src/routes/blogRoutes")

const GetPostData = (req) => {
    let postPromise = new Promise((resolve, reject) => {

        if (req.method.toUpperCase() !== "POST") {
            resolve({});
            console.log("no post");
            return;
        }

        if (req.headers["content-type"] !== "application/json") {
            resolve({});
            console.log(req.headers);
            return;
        }

        let postData = "";

        req.on("data", (chunk) => {
            postData += chunk.toString();
        });
        req.on("end", () => {
            if (postData.length === 0) {
                resolve({});
                return;
            }
            else {
                resolve(JSON.parse(postData));
            }
        });

    });
    return postPromise;
}

const serverHandler = (req, res) => {
    //设置响应格式
    res.setHeader("Content-Type", "application/json");
    //获取完整路径
    let fullURL = `http://${req.headers.host}${req.url}`;
    //获取URL信息
    let urlInfo = new URL(fullURL);
    let pathName = urlInfo.pathname;
    //获取get请求的参数
    let paramet = Object.fromEntries(urlInfo.searchParams.entries());
    console.log("pathName:", pathName);
    console.log("paramet:", paramet);
    console.log("method:",req.method);
    req.query = paramet;

    GetPostData(req).then((postPromiseData) => {
        //通过blogRoutes路由处理请求
        req.body = postPromiseData;
        const blogData = routeHandler(req, res, urlInfo);
        if (blogData) {
            res.end(JSON.stringify(blogData));
            return;
        }
        //如果未匹配路由则抛出404
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 not found");
        res.end();
    });
};
module.exports = serverHandler;