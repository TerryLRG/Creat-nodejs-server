const { SuccessModel, ErrModel } = require("../model/responseModel");
const {
    GetList,
    GetDetail,
    CreatBlog,
    ModifyBlog,
    DeleteBlog
} = require("../controllers/blogController");

const blogRouteHandler = (req, res, urlInfo) => {
    //将URL中的请求方式标准化
    let method = req.method.toUpperCase();

    const id = req.query.id;
    const blogData = req.body;

    //获取博客列表的路由
    if (method === "GET" && urlInfo.pathname === "/api/list/getBlogList") {
        const author = req.query.author || "";
        const keyword = req.query.keyword || "";
        console.log(`author:${author}|keyword:${keyword}`);
        const listData = GetList(author, keyword);
        return new SuccessModel(listData);
        // return JSON.stringify({Message:"Get请求处理完成"});
    }
    //获取博客详情的路由
    if (method === "GET" && urlInfo.pathname === "/api/list/getDetailByID") {
        const id = req.query.id || "";
        console.log(`author:${author}|keyword:${keyword}`);
        const listData = GetDetail(id);
        return new SuccessModel(listData);
        // return JSON.stringify({Message:"Get请求处理完成"});
    }
    //新建博客的路由
    if (method === "POST" && urlInfo.pathname === "/api/list/creatBlog") {
        const newBlogData = CreatBlog(blogData);
        return new SuccessModel(newBlogData);
    }
    //修改博客的路由
    if (method === "POST" && urlInfo.pathname === "/api/list/modifyBlog") {
        const state = ModifyBlog(id, blogData);
        if (state) {
            return new SuccessModel("修改成功");
        } else {
            return new ErrModel("修改失败");
        }
    }
    //删除博客的路由
    if (method === "POST" && urlInfo.pathname === "/api/list/deleteBlog") {
        const state = DeleteBlog(id);
        if (state) {
            return new SuccessModel("删除成功");
        } else {
            return new ErrModel("删除失败");
        }
    }
};
module.exports = blogRouteHandler;