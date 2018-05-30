"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var event_emitter_1 = require("./event_emitter");
var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller(metiator) {
        return _super.call(this, metiator) || this;
    }
    Controller.prototype.initialize = function () {
        throw new Error('Controller.prototype.initialize() is abstract you must implement it!');
    };
    Controller.prototype.dispose = function () {
        throw new Error('Controller.prototype.dispose() is abstract you must implement it!');
    };
    return Controller;
}(event_emitter_1.EventEmitter));
exports.Controller = Controller;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLGlEQUE2QztBQUc3QztJQUF5Qiw4QkFBWTtJQUNqQyxvQkFBWSxRQUFtQjtlQUMzQixrQkFBTSxRQUFRLENBQUM7SUFDbkIsQ0FBQztJQUNNLCtCQUFVLEdBQWpCO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFDTSw0QkFBTyxHQUFkO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDTCxpQkFBQztBQUFELENBVkEsQUFVQyxDQVZ3Qiw0QkFBWSxHQVVwQztBQUVPLGdDQUFVIiwiZmlsZSI6ImZyYW1ld29yay9jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy50c1wiIC8+XHJcblxyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnLi9ldmVudF9lbWl0dGVyJztcclxuaW1wb3J0IHtBcHBFdmVudH0gZnJvbSAnLi9hcHBfZXZlbnQnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElDb250cm9sbGVye1xyXG4gICAgY29uc3RydWN0b3IobWV0aWF0b3I6IElNZWRpYXRvcil7XHJcbiAgICAgICAgc3VwZXIobWV0aWF0b3IpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluaXRpYWxpemUoKTogdm9pZHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemUoKSBpcyBhYnN0cmFjdCB5b3UgbXVzdCBpbXBsZW1lbnQgaXQhJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lke1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29udHJvbGxlci5wcm90b3R5cGUuZGlzcG9zZSgpIGlzIGFic3RyYWN0IHlvdSBtdXN0IGltcGxlbWVudCBpdCEnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtDb250cm9sbGVyfTsiXX0=
