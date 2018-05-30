"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Route = (function () {
    function Route(controllerName, actionName, args) {
        this.controllerName = controllerName;
        this.actionName = actionName;
        this.args = args;
    }
    Route.prototype.serialize = function () {
        var s, sargs;
        sargs = this.args.map(function (a) { return a.toString(); }).join("/");
        s = this.controllerName + "/" + this.actionName + "/" + sargs;
        return s;
    };
    return Route;
}());
exports.Route = Route;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBSUksZUFBWSxjQUFzQixFQUFFLFVBQWtCLEVBQUUsSUFBYztRQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ00seUJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUM7UUFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELENBQUMsR0FBTSxJQUFJLENBQUMsY0FBYyxTQUFJLElBQUksQ0FBQyxVQUFVLFNBQUksS0FBTyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQUNPLHNCQUFLIiwiZmlsZSI6ImZyYW1ld29yay9yb3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2ludGVyZmFjZXMudHNcIiAvPlxyXG5cclxuY2xhc3MgUm91dGUgaW1wbGVtZW50cyBJUm91dGV7XHJcbiAgICBwdWJsaWMgY29udHJvbGxlck5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBhY3Rpb25OYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXJnczogT2JqZWN0W107XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyTmFtZTogc3RyaW5nLCBhY3Rpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IE9iamVjdFtdKXtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJOYW1lID0gY29udHJvbGxlck5hbWU7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25OYW1lID0gYWN0aW9uTmFtZTtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOnN0cmluZ3tcclxuICAgICAgICB2YXIgcywgc2FyZ3M7XHJcbiAgICAgICAgc2FyZ3MgPSB0aGlzLmFyZ3MubWFwKGEgPT4gYS50b1N0cmluZygpKS5qb2luKFwiL1wiKTtcclxuICAgICAgICBzID0gYCR7dGhpcy5jb250cm9sbGVyTmFtZX0vJHt0aGlzLmFjdGlvbk5hbWV9LyR7c2FyZ3N9YDtcclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH0gXHJcbn1cclxuZXhwb3J0IHtSb3V0ZX07Il19
