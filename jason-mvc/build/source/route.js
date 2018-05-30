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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFJSSxlQUFZLGNBQXNCLEVBQUUsVUFBa0IsRUFBRSxJQUFjO1FBQ2xFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTSx5QkFBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQztRQUNiLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxHQUFNLElBQUksQ0FBQyxjQUFjLFNBQUksSUFBSSxDQUFDLFVBQVUsU0FBSSxLQUFPLENBQUM7UUFDekQsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsWUFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBQ08sc0JBQUsiLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmNsYXNzIFJvdXRlIGltcGxlbWVudHMgSVJvdXRle1xyXG4gICAgcHVibGljIGNvbnRyb2xsZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWN0aW9uTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGFyZ3M6IE9iamVjdFtdO1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlck5hbWU6IHN0cmluZywgYWN0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBPYmplY3RbXSl7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyTmFtZSA9IGNvbnRyb2xsZXJOYW1lO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uTmFtZSA9IGFjdGlvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTpzdHJpbmd7XHJcbiAgICAgICAgdmFyIHMsIHNhcmdzO1xyXG4gICAgICAgIHNhcmdzID0gdGhpcy5hcmdzLm1hcChhID0+IGEudG9TdHJpbmcoKSkuam9pbihcIi9cIik7XHJcbiAgICAgICAgcyA9IGAke3RoaXMuY29udHJvbGxlck5hbWV9LyR7dGhpcy5hY3Rpb25OYW1lfS8ke3NhcmdzfWA7XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9IFxyXG59XHJcbmV4cG9ydCB7Um91dGV9OyJdfQ==
