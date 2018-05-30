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
        return new Promise(function (resolve, reject) {
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
        return new Promise(function (resolve, reject) {
            try {
                var template = Handlebars.compile(source);
                resolve(template);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    View.prototype.getTemplateAsync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
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
    View.prototype.renderAsync = function (model) {
        var _this = this;
        return new Promise(function (resolve, reject) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQWhGQSxBQWdGQyxDQWhGa0IsNEJBQVksR0FnRjlCO0FBRVEsb0JBQUkiLCJmaWxlIjoiZnJhbWV3b3JrL3ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvaGFuZGxlYmFycy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4vZXZlbnRfZW1pdHRlcic7XHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnLi9hcHBfZXZlbnQnO1xyXG5cclxuZnVuY3Rpb24gVmlld1NldHRpbmdzKHRlbXBsYXRlVXJsOiBzdHJpbmcsIGNvbnRhaW5lcjogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWw6IGFueSA9IHRhcmdldDtcclxuICAgICAgICBmdW5jdGlvbiBjb25zdHJ1Y3QoY29uc3RydWN0b3I6IGFueSwgYXJncyk6IGFueSB7XHJcbiAgICAgICAgICAgIHZhciBjOiBhbnkgPSBmdW5jdGlvbiAoY29udHJ1Y3RvcjogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjLnByb3RvdHlwZSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlOiBhbnkgPSBuZXcgYygpO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5fY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5fdGVtcGxhdGVVcmwgPSB0ZW1wbGF0ZVVybDtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGY6IGFueSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Qob3JpZ2luYWwsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGYucHJvdG90eXBlID0gb3JpZ2luYWwucHJvdG90eXBlO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBWaWV3IGV4dGVuZHMgRXZlbnRFbWl0dGVyIGltcGxlbWVudHMgSVZpZXcge1xyXG4gICAgcHJvdGVjdGVkIF9jb250YWluZXI6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3RlbXBsYXRlVXJsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF90ZW1wbGF0ZURlbGVnYXRlOiBIYW5kbGViYXJzVGVtcGxhdGVEZWxlZ2F0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXRpYXRvcjogSU1lZGlhdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobWV0aWF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSgpIGlzIGFic3RyYWN0IGFuZCBtdXN0IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmlldy5wcm90b3R5cGUuZGlzcG9zZSgpIGlzIGFic3RyYWN0IGFuZCBtdXN0IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBiaW5kRG9tRXZlbnRzKG1vZGVsOiBhbnkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpZXcucHJvdG90eXBlLmJpbmREb21FdmVudHMoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdW5iaW5kRG9tRXZlbnRzKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmlldy5wcm90b3R5cGUudW5iaW5kRG9tRXZlbnRzKCkgaXMgYWJzdHJhY3QgYW5kIG11c3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkVGVtcGxhdGVBc3luYygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IChyKSA9PiB2b2lkLCByZWplY3Q6IChlKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLl90ZW1wbGF0ZVVybCxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBpbGVUZW1wbGF0ZUFzeW5jKHNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAocikgPT4gdm9pZCwgcmVqZWN0OiAoZSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRlbXBsYXRlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUZW1wbGF0ZUFzeW5jKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHIpID0+IHZvaWQsIHJlamVjdDogKGUpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3RlbXBsYXRlRGVsZWdhdGUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl90ZW1wbGF0ZURlbGVnYXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZW1wbGF0ZUFzeW5jKCkudGhlbigoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZVRlbXBsYXRlQXN5bmMoc291cmNlKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHRlbXBsYXRlRGVsZWdhdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGVtcGxhdGVEZWxlZ2F0ZSA9IHRlbXBsYXRlRGVsZWdhdDtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3RlbXBsYXRlRGVsZWdhdGUpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fdGVtcGxhdGVEZWxlZ2F0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyQXN5bmMobW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IChyKSA9PiB2b2lkLCByZWplY3Q6IChlKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGVtcGxhdGVBc3luYygpXHJcbiAgICAgICAgICAgICAgICAudGhlbigodGVtcGxhdGVEZWxlZ2F0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gdGhpcy5fdGVtcGxhdGVEZWxlZ2F0ZShtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLl9jb250YWluZXIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7IHJlamVjdChlKSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVmlldywgVmlld1NldHRpbmdzIH07Il19
