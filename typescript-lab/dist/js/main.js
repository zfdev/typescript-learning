"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
var View = (function () {
    function View(config) {
        this._container = config.container;
        this._templateUrl = config.templateUrl;
        this._serviceUrl = config.serviceUrl;
        this._args = config.args;
    }
    View.prototype._loadJson = function (url, args, cb, errorCb) {
        jquery_1["default"].ajax({
            url: url,
            type: "GET",
            dataType: "json",
            data: args,
            success: function (json) {
                cb(json);
            },
            error: function (e) {
                errorCb(e);
            }
        });
    };
    View.prototype._loadHbs = function (url, cb, errorCb) {
        jquery_1["default"].ajax({
            url: url,
            type: "GET",
            dataType: "text",
            success: function (hbs) {
                cb(hbs);
            },
            error: function (e) {
                errorCb(e);
            }
        });
    };
    View.prototype._compileHbs = function (hbs, cb, errorCb) {
        try {
            var template = Handlebars.compile(hbs);
            cb(template);
        }
        catch (e) {
            errorCb(e);
        }
    };
    View.prototype._jsonToHtml = function (template, json, cb, errorCb) {
        try {
            var html = template(json);
            cb(html);
        }
        catch (e) {
            errorCb(e);
        }
    };
    View.prototype._appendHtml = function (html, cb, errorCb) {
        try {
            if (jquery_1["default"](this._container).length === 0) {
                throw new Error("Container not found!");
            }
            jquery_1["default"](this._container).html(html);
            cb(jquery_1["default"](this._container));
        }
        catch (e) {
            errorCb(e);
        }
    };
    View.prototype.render = function (cb, errorCb) {
        var _this = this;
        try {
            this._loadJson(this._serviceUrl, this._args, function (json) {
                _this._loadHbs(_this._templateUrl, function (hbs) {
                    _this._compileHbs(hbs, function (template) {
                        _this._jsonToHtml(template, json, function (html) {
                            _this._appendHtml(html, cb, errorCb);
                        }, errorCb);
                    }, errorCb);
                }, errorCb);
            }, errorCb);
        }
        catch (e) {
            errorCb(e);
        }
    };
    return View;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QVcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSTtnQkFDOUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLFVBQUMsR0FBRztvQkFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxRQUFRO3dCQUMzQixLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBQyxJQUFJOzRCQUNsQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQ3hDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQTtvQkFDZixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDZjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7SUFDTCxDQUFDO0lBQ0wsV0FBQztBQUFELENBaEZBLEFBZ0ZDLElBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vVGFnIGZ1bmN0aW9uOiBVc2VyIHRvIGN1c3RvbSB0ZW1wbGF0ZSBzdHJpbmcgcHJvY2Vzc29yXHJcbi8vIGxldCBzYXk6c3RyaW5nID0gJ2EgYmlyZCBpbiBoYW5kID4gdHdvIGluIHRoZSBidXNoJztcclxuLy8gbGV0IGh0bWw6YW55ID0gaHRtbEVzY2FwZSBgPGRpdj4gSSB3b3VsZCBqdXN0IGxpa2UgdG8gc2F5IDogJHtzYXl9PC9kaXY+YDtcclxuXHJcbi8vIGZ1bmN0aW9uIGh0bWxFc2NhcGUobGl0ZXJhbHM6IGFueSwgLi4ucGxhY2Vob2xkZXJzOmFueVtdKTogYW55IHtcclxuLy8gICAgIGxldCByZXN1bHQ6c3RyaW5nID0gXCJcIjtcclxuXHJcbi8vICAgICAvLyBpbnRlcmxlYXZlIHRoZSBsaXRlcmFscyB3aXRoIHRoZSBwbGFjZWhvbGRlcnNcclxuLy8gICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHBsYWNlaG9sZGVycy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgIHJlc3VsdCArPSBsaXRlcmFsc1tpXTtcclxuLy8gICAgICAgICByZXN1bHQgKz0gcGxhY2Vob2xkZXJzW2ldXHJcbi8vICAgICAgICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXHJcbi8vICAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcclxuLy8gICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcclxuLy8gICAgICAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxyXG4vLyAgICAgICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8vIGFkZCB0aGUgbGFzdCBsaXRlcmFsXHJcbi8vICAgICByZXN1bHQgKz0gbGl0ZXJhbHNbbGl0ZXJhbHMubGVuZ3RoIC0gMV07XHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyB9XHJcbi8vIGFsZXJ0KGh0bWwpO1xyXG5cclxuLy9IaWdoIGxldmVsIGZ1bmNpdG9uXHJcbi8vIGZ1bmN0aW9uIGJhcihjYiA6KCk9PnZvaWQpe1xyXG4vLyAgICAgY2IoKTtcclxuLy8gfVxyXG5cclxuLy9BcnJvdyBGdW5jdGlvblxyXG4vLyBjbGFzcyBQZXJzb257XHJcbi8vICAgICBuYW1lOiBzdHJpbmc7XHJcbi8vICAgICBjb25zdHJ1Y3RvcihuYW1lOnN0cmluZyl7XHJcbi8vICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuLy8gICAgIH1cclxuLy8gICAgIGdyZWV0KCl7XHJcbi8vICAgICAgICAgYWxlcnQoYEhpISBNeSBuYW1lIGlzICR7dGhpcy5uYW1lfWApO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLy8gZ3JlZXREZWxheSh0aW1lOiBudW1iZXIpe1xyXG4vLyAgICAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAvLyAgICAgICAgIGFsZXJ0KGBIaSEgTXkgbmFtZSBpcyAke3RoaXMubmFtZX1gKTsgXHJcbi8vICAgICAvLyAgICAgfSwgdGltZSk7XHJcbi8vICAgICAvLyB9ICBcclxuLy8gICAgIGdyZWV0RGVsYXkodGltZTogbnVtYmVyKXtcclxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy9iaW5kIHNjb3BlXHJcbi8vICAgICAgICAgICAgIGFsZXJ0KGBIaSEgTXkgbmFtZSBpcyAke3RoaXMubmFtZX1gKTsgXHJcbi8vICAgICAgICAgfSwgdGltZSk7XHJcbi8vICAgICB9ICAgIFxyXG4vLyB9XHJcblxyXG4vLyB2YXIgbmV3UGVvcGxlID0gbmV3IFBlcnNvbihcIkphc29uXCIpO1xyXG4vLyBuZXdQZW9wbGUuZ3JlZXQoKTtcclxuLy8gbmV3UGVvcGxlLmdyZWV0RGVsYXkoNTAwMCk7XHJcblxyXG4vL1Byb21pc2VcclxuLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi5cXC4uXFx0eXBpbmdzXFxnbG9iYWxzXFxoYW5kbGViYXJzXFxpbmRleC5kLnRzXCIgLz4gXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuLy8gaW1wb3J0ICogYXMgUSBmcm9tICdRJztcclxudHlwZSBjYiA9IChqc29uOmFueSkgPT4gdm9pZDtcclxuY2xhc3MgVmlld3tcclxuICAgIHByaXZhdGUgX2NvbnRhaW5lcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVVcmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3NlcnZpY2VVcmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2FyZ3M6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55KXtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlVXJsID0gY29uZmlnLnRlbXBsYXRlVXJsO1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2VVcmwgPSBjb25maWcuc2VydmljZVVybDtcclxuICAgICAgICB0aGlzLl9hcmdzID0gY29uZmlnLmFyZ3M7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9sb2FkSnNvbih1cmw6IHN0cmluZywgYXJnczogYW55LCBjYjogY2IsIGVycm9yQ2I6Y2Ipe1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGFyZ3MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihqc29uKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IChlKT0+e1xyXG4gICAgICAgICAgICAgICAgZXJyb3JDYihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9sb2FkSGJzKHVybDogc3RyaW5nLCBjYjogY2IsIGVycm9yQ2I6Y2Ipe1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChoYnMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNiKGhicyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiAoZSk9PntcclxuICAgICAgICAgICAgICAgIGVycm9yQ2IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfY29tcGlsZUhicyhoYnM6IHN0cmluZywgY2I6IGNiLCBlcnJvckNiOmNiKXtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShoYnMpO1xyXG4gICAgICAgICAgICBjYih0ZW1wbGF0ZSk7XHJcbiAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICBlcnJvckNiKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX2pzb25Ub0h0bWwodGVtcGxhdGU6IGFueSwganNvbjogYW55LCBjYjogY2IsIGVycm9yQ2I6Y2IpeyAgICAgICAgXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKGpzb24pO1xyXG4gICAgICAgICAgICBjYihodG1sKTtcclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIGVycm9yQ2IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIHByaXZhdGUgX2FwcGVuZEh0bWwoaHRtbDogc3RyaW5nLCBjYjogY2IsIGVycm9yQ2I6Y2Ipe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgaWYoJCh0aGlzLl9jb250YWluZXIpLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb250YWluZXIgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMuX2NvbnRhaW5lcikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgY2IoJCh0aGlzLl9jb250YWluZXIpKTtcclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIGVycm9yQ2IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbmRlcihjYjogY2IsIGVycm9yQ2I6IGNiKXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkSnNvbih0aGlzLl9zZXJ2aWNlVXJsLCB0aGlzLl9hcmdzLCAoanNvbik9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRIYnModGhpcy5fdGVtcGxhdGVVcmwsIChoYnMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29tcGlsZUhicyhoYnMsICh0ZW1wbGF0ZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fanNvblRvSHRtbCh0ZW1wbGF0ZSwganNvbiwgKGh0bWwpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRIdG1sKGh0bWwsIGNiLCBlcnJvckNiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3JDYilcclxuICAgICAgICAgICAgICAgICAgICB9LCBlcnJvckNiKTtcclxuICAgICAgICAgICAgICAgIH0sIGVycm9yQ2IpO1xyXG4gICAgICAgICAgICB9LCBlcnJvckNiKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGVycm9yQ2IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjbGFzcyBWaWV3QXN5bmN7XHJcbi8vICAgICBwcml2YXRlIF9jb250YWluZXI6IHN0cmluZztcclxuLy8gICAgIHByaXZhdGUgX3RlbXBsYXRlVXJsOiBzdHJpbmc7XHJcbi8vICAgICBwcml2YXRlIF9zZXJ2aWNlVXJsOiBzdHJpbmc7XHJcbi8vICAgICBwcml2YXRlIF9hcmdzOiBhbnk7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSl7XHJcbi8vICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lcjtcclxuLy8gICAgICAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybDtcclxuLy8gICAgICAgICB0aGlzLl9zZXJ2aWNlVXJsID0gY29uZmlnLnNlcnZpY2VVcmw7XHJcbi8vICAgICAgICAgdGhpcy5fYXJncyA9IGNvbmZpZy5hcmdzO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcHJpdmF0ZSBfbG9hZEpzb25Bc3luYyh1cmw6IHN0cmluZywgYXJnczogYW55KXtcclxuLy8gICAgICAgICByZXR1cm4gUS5Qcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbi8vICAgICAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbi8vICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbi8vICAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxyXG4vLyAgICAgICAgICAgICAgICAgc3VjY2VzczogKGpzb24pID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24pO1xyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIGVycm9yOiAoZSk9PntcclxuLy8gICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcHJpdmF0ZSBfbG9hZEhic0FzeW5jKHVybDogc3RyaW5nKXtcclxuLy8gICAgICAgICByZXR1cm4gUS5Qcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbi8vICAgICAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbi8vICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXHJcbi8vICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoaGJzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShoYnMpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIGVycm9yOiAoZSk9PntcclxuLy8gICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgIH1cclxuLy8gICAgIHByaXZhdGUgX2NvbXBpbGVIYnNBc3luYyhoYnM6IHN0cmluZyl7XHJcbi8vICAgICAgICAgcmV0dXJuIFEuUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4vLyAgICAgICAgICAgICB0cnl7XHJcbi8vICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoaGJzKTtcclxuLy8gICAgICAgICAgICAgICAgIHJlc29sdmUodGVtcGxhdGUpO1xyXG4vLyAgICAgICAgICAgICB9Y2F0Y2goZSl7XHJcbi8vICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9KTsgICAgXHJcblxyXG4vLyAgICAgfVxyXG4vLyAgICAgcHJpdmF0ZSBfanNvblRvSHRtbEFzeW5jKHRlbXBsYXRlOiBhbnksIGpzb246IGFueSl7XHJcbi8vICAgICAgICAgcmV0dXJuIFEuUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4vLyAgICAgICAgICAgICB0cnl7XHJcbi8vICAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKGpzb24pO1xyXG4vLyAgICAgICAgICAgICAgICAgcmVzb2x2ZShodG1sKTtcclxuLy8gICAgICAgICAgICAgfWNhdGNoKGUpe1xyXG4vLyAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICBcclxuLy8gICAgIH0gXHJcbi8vICAgICBwcml2YXRlIF9hcHBlbmRIdG1sQXN5bmMoaHRtbDogc3RyaW5nLCBjb250YWluZXI6IHN0cmluZyl7XHJcbi8vICAgICAgICAgcmV0dXJuIFEuUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4vLyAgICAgICAgICAgICB0cnl7XHJcbi8vICAgICAgICAgICAgICAgICB2YXIgJGNvbnRhaW5lcjogYW55ID0gJChjb250YWluZXIpO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYoJGNvbnRhaW5lci5sZW5ndGggPT09IDApe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbnRhaW5lciBub3QgZm91bmQhXCIpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5odG1sKGh0bWwpO1xyXG4vLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSgkY29udGFpbmVyKTtcclxuLy8gICAgICAgICAgICAgfWNhdGNoKGUpe1xyXG4vLyAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7ICAgICBcclxuXHJcbi8vICAgICB9XHJcbi8vICAgICBwdWJsaWMgcmVuZGVyQXN5bmMoKXtcclxuLy8gICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbi8vICAgICAgICAgICAgIHRyeXtcclxuLy8gICAgICAgICAgICAgICAgIHZhciBnZXRKc29uID0gdGhpcy5fbG9hZEpzb25Bc3luYyh0aGlzLl9zZXJ2aWNlVXJsLCB0aGlzLl9hcmdzKTtcclxuLy8gICAgICAgICAgICAgICAgIHZhciBnZXRUZW1wbGF0ZSA9IHRoaXMuX2xvYWRIYnNBc3luYyh0aGlzLl90ZW1wbGF0ZVVybCkudGhlbih0aGlzLl9jb21waWxlSGJzQXN5bmMpO1xyXG4vLyAgICAgICAgICAgICAgICAgUS5hbGwoWydnZXRKc29uJywgJ2dldFRlbXBsYXRlJ10pLnRoZW4oKHJlc3VsdHMpPT57XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGpzb24gPSByZXN1bHRzWzBdO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHJlc3VsdHNbMV07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5fanNvblRvSHRtbEFzeW5jKHRlbXBsYXRlLCBqc29uKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC50aGVuKChodG1sOnN0cmluZyk9PntcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGVuZEh0bWxBc3luYyhodG1sLCB0aGlzLl9jb250YWluZXIpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAudGhlbigoJGNvbnRhaW5lcjogYW55KT0+e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCRjb250YWluZXIpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgfWNhdGNoKGUpe1xyXG4vLyAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7ICAgICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiAqZm9vKCl7XHJcbi8vICAgICB5aWVsZCAxO1xyXG4vLyAgICAgeWllbGQgMjtcclxuLy8gICAgIHlpZWxkIDM7XHJcbi8vICAgICB5aWVsZCA0O1xyXG4vLyAgICAgcmV0dXJuIDU7XHJcbi8vIH1cclxuXHJcbi8vIHZhciBiYXIgPSBuZXcgZm9vKCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcblxyXG4vLyB2YXIgcDogUHJvbWlzZTxudW1iZXI+O1xyXG4vLyBhc3luYyBmdW5jaXRvbiBmbigpOiBQcm9taXNlPG51bWJlcj57XHJcbi8vICAgICB2YXIgaSA9IGF3YWl0IHA7XHJcbi8vICAgICByZXR1cm4gMSArIGk7XHJcbi8vIH0iXX0=