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
var Q = require("q");
function ModelSettings(serviceUrl) {
    return function (target) {
        var original = target;
        function construct(constructor, args) {
            var c = function () {
                return constructor.apply(this, args);
            };
            c.prototype = constructor.prototype;
            var instance = new c();
            instance._serviceUrl = serviceUrl;
            return instance;
        }
        var f = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return construct(original, args);
        };
        f.prototype = original.prototype;
        return f;
    };
}
exports.ModelSettings = ModelSettings;
var Model = (function (_super) {
    __extends(Model, _super);
    function Model(metiator) {
        return _super.call(this, metiator) || this;
    }
    Model.prototype.initialize = function () {
        throw new Error('Model.prototype.initialize() is abstract and must implemented.');
    };
    Model.prototype.dispose = function () {
        throw new Error('Model.prototype.dispose() is abstract and must implemented.');
    };
    Model.prototype.requestAsync = function (method, dataType, data) {
        var _this = this;
        return Q.Promise(function (resolve, reject) {
            $.ajax({
                method: method,
                url: _this._serviceUrl,
                data: data || {},
                dataType: dataType,
                success: function (response) {
                    resolve(response);
                },
                error: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    reject(args);
                }
            });
        });
    };
    Model.prototype.getAsync = function (dataType, data) {
        return this.requestAsync('GET', dataType, data);
    };
    Model.prototype.postAsync = function (dataType, data) {
        return this.requestAsync('POST', dataType, data);
    };
    Model.prototype.putAsync = function (dataType, data) {
        return this.requestAsync('PUT', dataType, data);
    };
    Model.prototype.deleteAsync = function (dataType, data) {
        return this.requestAsync('DELETE', dataType, data);
    };
    return Model;
}(event_emitter_1.EventEmitter));
exports.Model = Model;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsQ0E5Q21CLDRCQUFZLEdBOEMvQjtBQUVPLHNCQUFLIiwiZmlsZSI6Im1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL3EvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnLi9ldmVudF9lbWl0dGVyJztcclxuaW1wb3J0ICogYXMgUSBmcm9tICdxJztcclxuXHJcbmZ1bmN0aW9uIE1vZGVsU2V0dGluZ3Moc2VydmljZVVybDogc3RyaW5nKXtcclxuICAgIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6IGFueSl7ICAgXHJcbiAgICAgICAgdmFyIG9yaWdpbmFsID0gdGFyZ2V0O1xyXG4gICAgICAgIGZ1bmN0aW9uIGNvbnN0cnVjdChjb25zdHJ1Y3RvciwgYXJncyl7XHJcbiAgICAgICAgICAgIHZhciBjOiBhbnkgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGMucHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgYygpO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5fc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmOiBhbnkgPSBmdW5jdGlvbiguLi5hcmdzKXtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdChvcmlnaW5hbCwgYXJncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmLnByb3RvdHlwZSA9IG9yaWdpbmFsLnByb3RvdHlwZTtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9kZWwgZXh0ZW5kcyBFdmVudEVtaXR0ZXIgaW1wbGVtZW50cyBJTW9kZWx7XHJcbiAgICBwcml2YXRlIF9zZXJ2aWNlVXJsOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRpYXRvcjogSU1lZGlhdG9yKXtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpemUoKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZGVsLnByb3RvdHlwZS5pbml0aWFsaXplKCkgaXMgYWJzdHJhY3QgYW5kIG11c3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZGVsLnByb3RvdHlwZS5kaXNwb3NlKCkgaXMgYWJzdHJhY3QgYW5kIG11c3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlcXVlc3RBc3luYyhtZXRob2Q6IHN0cmluZywgZGF0YVR5cGU6IHN0cmluZywgZGF0YTogYW55KXtcclxuICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlOiAocikgPT4ge30sIHJlamVjdDogKGUpID0+IHt9KSA9PiB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHVybDogdGhpcy5fc2VydmljZVVybCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgfHwge30sXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogZGF0YVR5cGUsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICguLi5hcmdzOiBhbnlbXSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRBc3luYyhkYXRhVHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RBc3luYygnR0VUJywgZGF0YVR5cGUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwb3N0QXN5bmMoZGF0YVR5cGU6IHN0cmluZywgZGF0YTogYW55KXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0QXN5bmMoJ1BPU1QnLCBkYXRhVHlwZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHB1dEFzeW5jKGRhdGFUeXBlOiBzdHJpbmcsIGRhdGE6IGFueSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEFzeW5jKCdQVVQnLCBkYXRhVHlwZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRlbGV0ZUFzeW5jKGRhdGFUeXBlOiBzdHJpbmcsIGRhdGE6IGFueSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEFzeW5jKCdERUxFVEUnLCBkYXRhVHlwZSwgZGF0YSk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5leHBvcnQge01vZGVsLCBNb2RlbFNldHRpbmdzfTsiXX0=
