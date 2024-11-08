const GetList = (author, keyword) => {
    return [
        {
            id: 1,
            title: "标题1",
            content: "内容1",
            author: "张三",
            creatAt: 1730874674066
        },
        {
            id: 2,
            title: "标题2",
            content: "内容2",
            author: "李四",
            creatAt: 1730874722634
        }
    ];
}
const GetDetail = (id) => {
    return {
        id: 1,
        title: "标题1",
        content: "内容1",
        author: "张三byID",
        creatAt: 1730874674066
    };
}
const CreatBlog = (blogdata={}) => {
    return {
        id:1        
    };
}
const ModifyBlog = (id, blogdata={}) => {
    console.log("blogData:", blogdata={});
    return false;
}
const DeleteBlog = (id) => {    
    return true;
}
module.exports = {
    GetList,
    GetDetail,
    CreatBlog,
    ModifyBlog,
    DeleteBlog
};