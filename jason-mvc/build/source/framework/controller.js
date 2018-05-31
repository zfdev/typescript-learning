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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLGlEQUErQztBQVMvQztJQUF5Qiw4QkFBWTtJQUNqQyxvQkFBWSxRQUFtQjtlQUMzQixrQkFBTSxRQUFRLENBQUM7SUFDbkIsQ0FBQztJQUNNLCtCQUFVLEdBQWpCO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFDTSw0QkFBTyxHQUFkO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDTCxpQkFBQztBQUFELENBVkEsQUFVQyxDQVZ3Qiw0QkFBWSxHQVVwQztBQUVRLGdDQUFVIiwiZmlsZSI6ImZyYW1ld29yay9jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICcuL2V2ZW50X2VtaXR0ZXInO1xyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJy4vYXBwX2V2ZW50JztcclxuLyoqXHJcbiAqIFxyXG4gKiBcclxuICogQGNsYXNzIENvbnRyb2xsZXJcclxuICogQGV4dGVuZHMge0V2ZW50RW1pdHRlcn1cclxuICogQGltcGxlbWVudHMge0lDb250cm9sbGVyfVxyXG4gKi9cclxuY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3IpIHtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemUoKSBpcyBhYnN0cmFjdCB5b3UgbXVzdCBpbXBsZW1lbnQgaXQhJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xsZXIucHJvdG90eXBlLmRpc3Bvc2UoKSBpcyBhYnN0cmFjdCB5b3UgbXVzdCBpbXBsZW1lbnQgaXQhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IENvbnRyb2xsZXIgfTsiXX0=
