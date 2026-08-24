class Router {
    constructor() {
        this.routes = {};
    }

    get(path, handler) {
        this.routes[`GET ${path}`] = handler;
    }

    post(path, handler) {
        this.routes[`POST ${path}`] = handler;
    }

    handle(method, path, req, res) {
        const key = `${method} ${path}`;
        const handler = this.routes[key];

        if (!handler) {
            res.statusCode = 404;
            return res.end("404 Not Found");
        }

        handler(req, res);
    }
}

module.exports = Router;