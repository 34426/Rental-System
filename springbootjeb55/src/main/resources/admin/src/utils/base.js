const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootjeb55/",
            name: "springbootjeb55",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootjeb55/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "租房管理系统"
        } 
    }
}
export default base
