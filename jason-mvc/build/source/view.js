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
function ViewSettings(templateUrl, container) {
    return function (target) {
        var original = target;
        function construct(constructor, args) {
            var c = function (contructor, args) {
                return constructor.apply(this, args);
            };
            c.prototype = constructor.prototype;
            var instance = new c();
            instance._container = container;
            instance._templateUrl = templateUrl;
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
exports.ViewSettings = ViewSettings;
var View = (function (_super) {
    __extends(View, _super);
    function View(metiator) {
        return _super.call(this, metiator) || this;
    }
    View.prototype.initialize = function () {
        throw new Error('View.prototype.initialize() is abstract and must implemented.');
    };
    View.prototype.dispose = function () {
        throw new Error('View.prototype.dispose() is abstract and must implemented.');
    };
    View.prototype.bindDomEvents = function (model) {
        throw new Error('View.prototype.bindDomEvents() is abstract and must implemented.');
    };
    View.prototype.unbindDomEvents = function () {
        throw new Error('View.prototype.unbindDomEvents() is abstract and must implemented.');
    };
    View.prototype.loadTemplateAsync = function () {
        var _this = this;
        return Q.Promise(function (resolve, reject) {
            $.ajax({
                method: 'GET',
                url: _this._templateUrl,
                dataType: 'text',
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
    View.prototype.compileTemplateAsync = function (source) {
        return Q.Promise(function (resolve, reject) {
            try {
                var template = Handlebars.complie(source);
                resolve(template);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    View.prototype.getTemplateAsync = function () {
        var _this = this;
        return Q.Promise(function (resolve, reject) {
            if (_this._templateDelegate === undefined || _this._templateDelegate === null) {
                _this.loadTemplateAsync().then(function (source) {
                    return _this.compileTemplateAsync(source);
                }).then(function (templateDelegat) {
                    _this._templateDelegate = templateDelegat;
                    resolve(_this._templateDelegate);
                }).catch(function (e) {
                    reject(e);
                });
            }
            else {
                resolve(_this._templateDelegate);
            }
        });
    };
    View.prototype.renderAsync = function () {
        var _this = this;
        return Q.Promise(function (resolve, reject) {
            _this.getTemplateAsync()
                .then(function (templateDelegate) {
                var html = _this._templateDelegate(model);
                $(_this._container).html(html);
                resolve(model);
            })
                .catch(function (e) { reject(e); });
        });
    };
    return View;
}(event_emitter_1.EventEmitter));
exports.View = View;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsV0FBQztBQUFELENBaEZBLEFBZ0ZDLENBaEZrQiw0QkFBWSxHQWdGOUI7QUFFTyxvQkFBSSIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL3EvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnLi9ldmVudF9lbWl0dGVyJztcclxuaW1wb3J0IHtBcHBFdmVudH0gZnJvbSAnLi9hcHBfZXZlbnQnO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncSc7XHJcblxyXG5mdW5jdGlvbiBWaWV3U2V0dGluZ3ModGVtcGxhdGVVcmw6IHN0cmluZywgY29udGFpbmVyOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogYW55KXtcclxuICAgICAgICB2YXIgb3JpZ2luYWwgPSB0YXJnZXQ7ICBcclxuICAgICAgICBmdW5jdGlvbiBjb25zdHJ1Y3QoY29uc3RydWN0b3IsIGFyZ3Mpe1xyXG4gICAgICAgICAgICB2YXIgYzogYW55ID0gZnVuY3Rpb24oY29udHJ1Y3RvcjogYW55LCBhcmdzOiBhbnkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGMucHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgYygpO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5fY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5fdGVtcGxhdGVVcmwgPSB0ZW1wbGF0ZVVybDtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGY6IGFueSA9IGZ1bmN0aW9uKC4uLmFyZ3Mpe1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0KG9yaWdpbmFsLCBhcmdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGYucHJvdG90eXBlID0gb3JpZ2luYWwucHJvdG90eXBlO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBWaWV3IGV4dGVuZHMgRXZlbnRFbWl0dGVyIGltcGxlbWVudHMgSVZpZXd7XHJcbiAgICBwcm90ZWN0ZWQgX2NvbnRhaW5lcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVVcmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3RlbXBsYXRlRGVsZWdhdGU6IEhhbmRsZWJhcnNUZW1wbGF0ZURlbGVnYXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3Ipe1xyXG4gICAgICAgIHN1cGVyKG1ldGlhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSgpIGlzIGFic3RyYWN0IGFuZCBtdXN0IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWaWV3LnByb3RvdHlwZS5kaXNwb3NlKCkgaXMgYWJzdHJhY3QgYW5kIG11c3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBiaW5kRG9tRXZlbnRzKG1vZGVsOiBhbnkpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmlldy5wcm90b3R5cGUuYmluZERvbUV2ZW50cygpIGlzIGFic3RyYWN0IGFuZCBtdXN0IGltcGxlbWVudGVkLicpOyAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdW5iaW5kRG9tRXZlbnRzKCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWaWV3LnByb3RvdHlwZS51bmJpbmREb21FdmVudHMoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRUZW1wbGF0ZUFzeW5jKCl7XHJcbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZTogKHIpID0+IHt9LCByZWplY3Q6IChlKSA9Pnt9KSA9PiB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLl90ZW1wbGF0ZVVybCxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKC4uLmFyZ3M6IGFueVtdKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21waWxlVGVtcGxhdGVBc3luYyhzb3VyY2U6IHN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZTogKHIpID0+IHt9LCByZWplY3Q6IChlKSA9Pnt9KSA9PiB7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGxpZShzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGVtcGxhdGVBc3luYygpe1xyXG4gICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmU6IChyKSA9PiB7fSwgcmVqZWN0OiAoZSkgPT57fSkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLl90ZW1wbGF0ZURlbGVnYXRlID09PSB1bmRlZmluZWQgfHwgdGhpcy5fdGVtcGxhdGVEZWxlZ2F0ZSA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZW1wbGF0ZUFzeW5jKCkudGhlbigoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZVRlbXBsYXRlQXN5bmMoc291cmNlKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHRlbXBsYXRlRGVsZWdhdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RlbXBsYXRlRGVsZWdhdGUgPSB0ZW1wbGF0ZURlbGVnYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl90ZW1wbGF0ZURlbGVnYXRlKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fdGVtcGxhdGVEZWxlZ2F0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyQXN5bmMoKXtcclxuICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlOiAocikgPT4ge30sIHJlamVjdDogKGUpID0+e30pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXRUZW1wbGF0ZUFzeW5jKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCh0ZW1wbGF0ZURlbGVnYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSB0aGlzLl90ZW1wbGF0ZURlbGVnYXRlKG1vZGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuX2NvbnRhaW5lcikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHsgcmVqZWN0KGUpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1ZpZXcsIFZpZXdTZXR0aW5nc307Il19
