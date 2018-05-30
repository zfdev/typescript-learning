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
        return new Promise(function (resolve, reject) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsWUFBQztBQUFELENBOUNBLEFBOENDLENBOUNtQiw0QkFBWSxHQThDL0I7QUFFTyxzQkFBSyIsImZpbGUiOiJmcmFtZXdvcmsvbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICcuL2V2ZW50X2VtaXR0ZXInO1xyXG5cclxuZnVuY3Rpb24gTW9kZWxTZXR0aW5ncyhzZXJ2aWNlVXJsOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogYW55KXsgICBcclxuICAgICAgICB2YXIgb3JpZ2luYWwgPSB0YXJnZXQ7XHJcbiAgICAgICAgZnVuY3Rpb24gY29uc3RydWN0KGNvbnN0cnVjdG9yLCBhcmdzKXtcclxuICAgICAgICAgICAgdmFyIGM6IGFueSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYy5wcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBjKCk7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLl9zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGY6IGFueSA9IGZ1bmN0aW9uKC4uLmFyZ3Mpe1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0KG9yaWdpbmFsLCBhcmdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGYucHJvdG90eXBlID0gb3JpZ2luYWwucHJvdG90eXBlO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNb2RlbCBleHRlbmRzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElNb2RlbHtcclxuICAgIHByaXZhdGUgX3NlcnZpY2VVcmw6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3Ipe1xyXG4gICAgICAgIHN1cGVyKG1ldGlhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kZWwucHJvdG90eXBlLmRpc3Bvc2UoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVxdWVzdEFzeW5jKG1ldGhvZDogc3RyaW5nLCBkYXRhVHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZTogKHIpID0+IHZvaWQsIHJlamVjdDogKGUpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLl9zZXJ2aWNlVXJsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSB8fCB7fSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBkYXRhVHlwZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKC4uLmFyZ3M6IGFueVtdKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEFzeW5jKGRhdGFUeXBlOiBzdHJpbmcsIGRhdGE6IGFueSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEFzeW5jKCdHRVQnLCBkYXRhVHlwZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBvc3RBc3luYyhkYXRhVHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RBc3luYygnUE9TVCcsIGRhdGFUeXBlLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcHV0QXN5bmMoZGF0YVR5cGU6IHN0cmluZywgZGF0YTogYW55KXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0QXN5bmMoJ1BVVCcsIGRhdGFUeXBlLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGVsZXRlQXN5bmMoZGF0YVR5cGU6IHN0cmluZywgZGF0YTogYW55KXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0QXN5bmMoJ0RFTEVURScsIGRhdGFUeXBlLCBkYXRhKTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7TW9kZWwsIE1vZGVsU2V0dGluZ3N9OyJdfQ==
