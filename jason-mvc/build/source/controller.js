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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsaURBQTZDO0FBRzdDO0lBQXlCLDhCQUFZO0lBQ2pDLG9CQUFZLFFBQW1CO2VBQzNCLGtCQUFNLFFBQVEsQ0FBQztJQUNuQixDQUFDO0lBQ00sK0JBQVUsR0FBakI7UUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUNNLDRCQUFPLEdBQWQ7UUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FWQSxBQVVDLENBVndCLDRCQUFZLEdBVXBDO0FBRU8sZ0NBQVUiLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2ludGVyZmFjZXMudHNcIiAvPlxyXG5cclxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJy4vZXZlbnRfZW1pdHRlcic7XHJcbmltcG9ydCB7QXBwRXZlbnR9IGZyb20gJy4vYXBwX2V2ZW50JztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIgaW1wbGVtZW50cyBJQ29udHJvbGxlcntcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3Ipe1xyXG4gICAgICAgIHN1cGVyKG1ldGlhdG9yKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWR7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250cm9sbGVyLnByb3RvdHlwZS5pbml0aWFsaXplKCkgaXMgYWJzdHJhY3QgeW91IG11c3QgaW1wbGVtZW50IGl0IScpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xsZXIucHJvdG90eXBlLmRpc3Bvc2UoKSBpcyBhYnN0cmFjdCB5b3UgbXVzdCBpbXBsZW1lbnQgaXQhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Q29udHJvbGxlcn07Il19
