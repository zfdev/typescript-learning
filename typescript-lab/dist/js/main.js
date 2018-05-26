"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function logType(target, key) {
    var t = Reflect.getMetadata('design:type', target, key);
    console.log(key + " type: " + t.name);
}
var Person = (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.saySomething = function (something) {
        return this.name + '' + this.surname + something;
    };
    __decorate([
        log,
        __metadata("design:type", String)
    ], Person.prototype, "name", void 0);
    __decorate([
        logType,
        __param(0, log),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], Person.prototype, "saySomething", null);
    Person = __decorate([
        log,
        __metadata("design:paramtypes", [String, String])
    ], Person);
    return Person;
}());
function logClass(target) {
    var original = target;
    function construct(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("New:" + original.name);
        return construct(original, args);
    };
    f.prototype = original.prototype;
    return f;
}
var me = new Person('Jason', 'Zhang');
me.saySomething('Hello');
function logMethod(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var a = args.map(function (a) { return JSON.stringify(a); }).join();
        var result = originalMethod.apply(this, args);
        var r = JSON.stringify(result);
        console.log("Call:" + key + "(" + a + ")=>" + r);
        return result;
    };
    return descriptor;
}
function logProperty(target, key) {
    var _val = this[key];
    var getter = function () {
        console.log("Get: " + key + " => " + _val);
        return _val;
    };
    var setter = function (newVal) {
        console.log("Set: " + key + " => " + newVal);
        _val = newVal;
    };
    if (delete this[key]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
function logParameter(target, key, index) {
    var metadataKey = "_log_" + key + "_parameters";
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}
function readMetadata(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var metadataKey = "_log_" + key + "_parameters";
        var indices = target[metadataKey];
        if (Array.isArray(indices)) {
            for (var i = 0; i < args.length; i++) {
                if (indices.indexOf(i) !== -1) {
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log(key + " arg[" + i + "]: " + argStr);
                }
            }
            var result = originalMethod.apply(this, args);
            return result;
        }
    };
    return descriptor;
}
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    switch (args.length) {
        case 1:
            return logClass.apply(this, args);
        case 2:
            logProperty.apply(this.args);
            break;
        case 3:
            if (typeof args[2] === "number") {
                logParameter.apply(this, args);
            }
            return logMethod.apply(this, args);
        default:
            throw new Error('Decorators are not valid here!');
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0YsSUFBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUM7Z0JBQzNCLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QztZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztLQUN6RDtBQUNMLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vVGFnIGZ1bmN0aW9uOiBVc2VyIHRvIGN1c3RvbSB0ZW1wbGF0ZSBzdHJpbmcgcHJvY2Vzc29yXHJcbi8vIGxldCBzYXk6c3RyaW5nID0gJ2EgYmlyZCBpbiBoYW5kID4gdHdvIGluIHRoZSBidXNoJztcclxuLy8gbGV0IGh0bWw6YW55ID0gaHRtbEVzY2FwZSBgPGRpdj4gSSB3b3VsZCBqdXN0IGxpa2UgdG8gc2F5IDogJHtzYXl9PC9kaXY+YDtcclxuXHJcbi8vIGZ1bmN0aW9uIGh0bWxFc2NhcGUobGl0ZXJhbHM6IGFueSwgLi4ucGxhY2Vob2xkZXJzOmFueVtdKTogYW55IHtcclxuLy8gICAgIGxldCByZXN1bHQ6c3RyaW5nID0gXCJcIjtcclxuXHJcbi8vICAgICAvLyBpbnRlcmxlYXZlIHRoZSBsaXRlcmFscyB3aXRoIHRoZSBwbGFjZWhvbGRlcnNcclxuLy8gICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHBsYWNlaG9sZGVycy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgIHJlc3VsdCArPSBsaXRlcmFsc1tpXTtcclxuLy8gICAgICAgICByZXN1bHQgKz0gcGxhY2Vob2xkZXJzW2ldXHJcbi8vICAgICAgICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXHJcbi8vICAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcclxuLy8gICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcclxuLy8gICAgICAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxyXG4vLyAgICAgICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8vIGFkZCB0aGUgbGFzdCBsaXRlcmFsXHJcbi8vICAgICByZXN1bHQgKz0gbGl0ZXJhbHNbbGl0ZXJhbHMubGVuZ3RoIC0gMV07XHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyB9XHJcbi8vIGFsZXJ0KGh0bWwpO1xyXG5cclxuLy9IaWdoIGxldmVsIGZ1bmNpdG9uXHJcbi8vIGZ1bmN0aW9uIGJhcihjYiA6KCk9PnZvaWQpe1xyXG4vLyAgICAgY2IoKTtcclxuLy8gfVxyXG5cclxuLy9BcnJvdyBGdW5jdGlvblxyXG4vLyBjbGFzcyBQZXJzb257XHJcbi8vICAgICBuYW1lOiBzdHJpbmc7XHJcbi8vICAgICBjb25zdHJ1Y3RvcihuYW1lOnN0cmluZyl7XHJcbi8vICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuLy8gICAgIH1cclxuLy8gICAgIGdyZWV0KCl7XHJcbi8vICAgICAgICAgYWxlcnQoYEhpISBNeSBuYW1lIGlzICR7dGhpcy5uYW1lfWApO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLy8gZ3JlZXREZWxheSh0aW1lOiBudW1iZXIpe1xyXG4vLyAgICAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAvLyAgICAgICAgIGFsZXJ0KGBIaSEgTXkgbmFtZSBpcyAke3RoaXMubmFtZX1gKTsgXHJcbi8vICAgICAvLyAgICAgfSwgdGltZSk7XHJcbi8vICAgICAvLyB9ICBcclxuLy8gICAgIGdyZWV0RGVsYXkodGltZTogbnVtYmVyKXtcclxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy9iaW5kIHNjb3BlXHJcbi8vICAgICAgICAgICAgIGFsZXJ0KGBIaSEgTXkgbmFtZSBpcyAke3RoaXMubmFtZX1gKTsgXHJcbi8vICAgICAgICAgfSwgdGltZSk7XHJcbi8vICAgICB9ICAgIFxyXG4vLyB9XHJcblxyXG4vLyB2YXIgbmV3UGVvcGxlID0gbmV3IFBlcnNvbihcIkphc29uXCIpO1xyXG4vLyBuZXdQZW9wbGUuZ3JlZXQoKTtcclxuLy8gbmV3UGVvcGxlLmdyZWV0RGVsYXkoNTAwMCk7XHJcblxyXG4vL1Byb21pc2VcclxuLy8gLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi5cXC4uXFx0eXBpbmdzXFxnbG9iYWxzXFxoYW5kbGViYXJzXFxpbmRleC5kLnRzXCIgLz4gXHJcbi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuLy8gaW1wb3J0ICogYXMgUSBmcm9tICdRJztcclxuLy9pbXBvcnQgeyBVc2VyTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzJztcclxuLy8gdHlwZSBjYiA9IChqc29uOmFueSkgPT4gdm9pZDtcclxuLy8gY2xhc3MgVmlld3tcclxuLy8gICAgIHByaXZhdGUgX2NvbnRhaW5lcjogc3RyaW5nO1xyXG4vLyAgICAgcHJpdmF0ZSBfdGVtcGxhdGVVcmw6IHN0cmluZztcclxuLy8gICAgIHByaXZhdGUgX3NlcnZpY2VVcmw6IHN0cmluZztcclxuLy8gICAgIHByaXZhdGUgX2FyZ3M6IGFueTtcclxuLy8gICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55KXtcclxuLy8gICAgICAgICB0aGlzLl9jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyO1xyXG4vLyAgICAgICAgIHRoaXMuX3RlbXBsYXRlVXJsID0gY29uZmlnLnRlbXBsYXRlVXJsO1xyXG4vLyAgICAgICAgIHRoaXMuX3NlcnZpY2VVcmwgPSBjb25maWcuc2VydmljZVVybDtcclxuLy8gICAgICAgICB0aGlzLl9hcmdzID0gY29uZmlnLmFyZ3M7XHJcbi8vICAgICB9XHJcbi8vICAgICBwcml2YXRlIF9sb2FkSnNvbih1cmw6IHN0cmluZywgYXJnczogYW55LCBjYjogY2IsIGVycm9yQ2I6Y2Ipe1xyXG4vLyAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgIHVybDogdXJsLFxyXG4vLyAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4vLyAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbi8vICAgICAgICAgICAgIGRhdGE6IGFyZ3MsXHJcbi8vICAgICAgICAgICAgIHN1Y2Nlc3M6IChqc29uKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjYihqc29uKTtcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgZXJyb3I6IChlKT0+e1xyXG4vLyAgICAgICAgICAgICAgICAgZXJyb3JDYihlKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vICAgICBwcml2YXRlIF9sb2FkSGJzKHVybDogc3RyaW5nLCBjYjogY2IsIGVycm9yQ2I6Y2Ipe1xyXG4vLyAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgIHVybDogdXJsLFxyXG4vLyAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4vLyAgICAgICAgICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXHJcbi8vICAgICAgICAgICAgIHN1Y2Nlc3M6IChoYnMpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGNiKGhicyk7XHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIGVycm9yOiAoZSk9PntcclxuLy8gICAgICAgICAgICAgICAgIGVycm9yQ2IoZSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcHJpdmF0ZSBfY29tcGlsZUhicyhoYnM6IHN0cmluZywgY2I6IGNiLCBlcnJvckNiOmNiKXtcclxuLy8gICAgICAgICB0cnl7XHJcbi8vICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShoYnMpO1xyXG4vLyAgICAgICAgICAgICBjYih0ZW1wbGF0ZSk7XHJcbi8vICAgICAgICAgfWNhdGNoKGUpe1xyXG4vLyAgICAgICAgICAgICBlcnJvckNiKGUpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHByaXZhdGUgX2pzb25Ub0h0bWwodGVtcGxhdGU6IGFueSwganNvbjogYW55LCBjYjogY2IsIGVycm9yQ2I6Y2IpeyAgICAgICAgXHJcbi8vICAgICAgICAgdHJ5e1xyXG4vLyAgICAgICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKGpzb24pO1xyXG4vLyAgICAgICAgICAgICBjYihodG1sKTtcclxuLy8gICAgICAgICB9Y2F0Y2goZSl7XHJcbi8vICAgICAgICAgICAgIGVycm9yQ2IoZSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSBcclxuLy8gICAgIHByaXZhdGUgX2FwcGVuZEh0bWwoaHRtbDogc3RyaW5nLCBjYjogY2IsIGVycm9yQ2I6Y2Ipe1xyXG4vLyAgICAgICAgIHRyeXtcclxuLy8gICAgICAgICAgICAgaWYoJCh0aGlzLl9jb250YWluZXIpLmxlbmd0aCA9PT0gMCl7XHJcbi8vICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb250YWluZXIgbm90IGZvdW5kIVwiKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAkKHRoaXMuX2NvbnRhaW5lcikuaHRtbChodG1sKTtcclxuLy8gICAgICAgICAgICAgY2IoJCh0aGlzLl9jb250YWluZXIpKTtcclxuLy8gICAgICAgICB9Y2F0Y2goZSl7XHJcbi8vICAgICAgICAgICAgIGVycm9yQ2IoZSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcHVibGljIHJlbmRlcihjYjogY2IsIGVycm9yQ2I6IGNiKXtcclxuLy8gICAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLl9sb2FkSnNvbih0aGlzLl9zZXJ2aWNlVXJsLCB0aGlzLl9hcmdzLCAoanNvbik9PntcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRIYnModGhpcy5fdGVtcGxhdGVVcmwsIChoYnMpPT57XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29tcGlsZUhicyhoYnMsICh0ZW1wbGF0ZSk9PntcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fanNvblRvSHRtbCh0ZW1wbGF0ZSwganNvbiwgKGh0bWwpPT57XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRIdG1sKGh0bWwsIGNiLCBlcnJvckNiKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3JDYilcclxuLy8gICAgICAgICAgICAgICAgICAgICB9LCBlcnJvckNiKTtcclxuLy8gICAgICAgICAgICAgICAgIH0sIGVycm9yQ2IpO1xyXG4vLyAgICAgICAgICAgICB9LCBlcnJvckNiKTtcclxuLy8gICAgICAgICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICAgICAgICAgIGVycm9yQ2IoZSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjbGFzcyBWaWV3QXN5bmN7XHJcbi8vICAgICBwcml2YXRlIF9jb250YWluZXI6IHN0cmluZztcclxuLy8gICAgIHByaXZhdGUgX3RlbXBsYXRlVXJsOiBzdHJpbmc7XHJcbi8vICAgICBwcml2YXRlIF9zZXJ2aWNlVXJsOiBzdHJpbmc7XHJcbi8vICAgICBwcml2YXRlIF9hcmdzOiBhbnk7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSl7XHJcbi8vICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lcjtcclxuLy8gICAgICAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybDtcclxuLy8gICAgICAgICB0aGlzLl9zZXJ2aWNlVXJsID0gY29uZmlnLnNlcnZpY2VVcmw7XHJcbi8vICAgICAgICAgdGhpcy5fYXJncyA9IGNvbmZpZy5hcmdzO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcHJpdmF0ZSBfbG9hZEpzb25Bc3luYyh1cmw6IHN0cmluZywgYXJnczogYW55KXtcclxuLy8gICAgICAgICByZXR1cm4gUS5Qcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbi8vICAgICAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbi8vICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbi8vICAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxyXG4vLyAgICAgICAgICAgICAgICAgc3VjY2VzczogKGpzb24pID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24pO1xyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIGVycm9yOiAoZSk9PntcclxuLy8gICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcHJpdmF0ZSBfbG9hZEhic0FzeW5jKHVybDogc3RyaW5nKXtcclxuLy8gICAgICAgICByZXR1cm4gUS5Qcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbi8vICAgICAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbi8vICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXHJcbi8vICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoaGJzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShoYnMpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIGVycm9yOiAoZSk9PntcclxuLy8gICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgIH1cclxuLy8gICAgIHByaXZhdGUgX2NvbXBpbGVIYnNBc3luYyhoYnM6IHN0cmluZyl7XHJcbi8vICAgICAgICAgcmV0dXJuIFEuUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4vLyAgICAgICAgICAgICB0cnl7XHJcbi8vICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoaGJzKTtcclxuLy8gICAgICAgICAgICAgICAgIHJlc29sdmUodGVtcGxhdGUpO1xyXG4vLyAgICAgICAgICAgICB9Y2F0Y2goZSl7XHJcbi8vICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9KTsgICAgXHJcblxyXG4vLyAgICAgfVxyXG4vLyAgICAgcHJpdmF0ZSBfanNvblRvSHRtbEFzeW5jKHRlbXBsYXRlOiBhbnksIGpzb246IGFueSl7XHJcbi8vICAgICAgICAgcmV0dXJuIFEuUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4vLyAgICAgICAgICAgICB0cnl7XHJcbi8vICAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKGpzb24pO1xyXG4vLyAgICAgICAgICAgICAgICAgcmVzb2x2ZShodG1sKTtcclxuLy8gICAgICAgICAgICAgfWNhdGNoKGUpe1xyXG4vLyAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICBcclxuLy8gICAgIH0gXHJcbi8vICAgICBwcml2YXRlIF9hcHBlbmRIdG1sQXN5bmMoaHRtbDogc3RyaW5nLCBjb250YWluZXI6IHN0cmluZyl7XHJcbi8vICAgICAgICAgcmV0dXJuIFEuUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4vLyAgICAgICAgICAgICB0cnl7XHJcbi8vICAgICAgICAgICAgICAgICB2YXIgJGNvbnRhaW5lcjogYW55ID0gJChjb250YWluZXIpO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYoJGNvbnRhaW5lci5sZW5ndGggPT09IDApe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbnRhaW5lciBub3QgZm91bmQhXCIpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5odG1sKGh0bWwpO1xyXG4vLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSgkY29udGFpbmVyKTtcclxuLy8gICAgICAgICAgICAgfWNhdGNoKGUpe1xyXG4vLyAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7ICAgICBcclxuXHJcbi8vICAgICB9XHJcbi8vICAgICBwdWJsaWMgcmVuZGVyQXN5bmMoKXtcclxuLy8gICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbi8vICAgICAgICAgICAgIHRyeXtcclxuLy8gICAgICAgICAgICAgICAgIHZhciBnZXRKc29uID0gdGhpcy5fbG9hZEpzb25Bc3luYyh0aGlzLl9zZXJ2aWNlVXJsLCB0aGlzLl9hcmdzKTtcclxuLy8gICAgICAgICAgICAgICAgIHZhciBnZXRUZW1wbGF0ZSA9IHRoaXMuX2xvYWRIYnNBc3luYyh0aGlzLl90ZW1wbGF0ZVVybCkudGhlbih0aGlzLl9jb21waWxlSGJzQXN5bmMpO1xyXG4vLyAgICAgICAgICAgICAgICAgUS5hbGwoWydnZXRKc29uJywgJ2dldFRlbXBsYXRlJ10pLnRoZW4oKHJlc3VsdHMpPT57XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGpzb24gPSByZXN1bHRzWzBdO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHJlc3VsdHNbMV07XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5fanNvblRvSHRtbEFzeW5jKHRlbXBsYXRlLCBqc29uKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC50aGVuKChodG1sOnN0cmluZyk9PntcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGVuZEh0bWxBc3luYyhodG1sLCB0aGlzLl9jb250YWluZXIpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAudGhlbigoJGNvbnRhaW5lcjogYW55KT0+e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCRjb250YWluZXIpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgfWNhdGNoKGUpe1xyXG4vLyAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7ICAgICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiAqZm9vKCl7XHJcbi8vICAgICB5aWVsZCAxO1xyXG4vLyAgICAgeWllbGQgMjtcclxuLy8gICAgIHlpZWxkIDM7XHJcbi8vICAgICB5aWVsZCA0O1xyXG4vLyAgICAgcmV0dXJuIDU7XHJcbi8vIH1cclxuXHJcbi8vIHZhciBiYXIgPSBuZXcgZm9vKCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcbi8vIGJhci5uZXh0KCk7XHJcblxyXG4vLyB2YXIgcDogUHJvbWlzZTxudW1iZXI+O1xyXG4vLyBhc3luYyBmdW5jaXRvbiBmbigpOiBQcm9taXNlPG51bWJlcj57XHJcbi8vICAgICB2YXIgaSA9IGF3YWl0IHA7XHJcbi8vICAgICByZXR1cm4gMSArIGk7XHJcbi8vIH1cclxuXHJcbi8vUHJvbWlzZVxyXG4vLy8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uXFwuLlxcdHlwaW5nc1xcbW9kdWxlc1xccVxcaW5kZXguZC50c1wiIC8+IFxyXG5cclxuXHJcbi8vIGNsYXNzIE5vdEdlbmVyaWNVc2VyUmVwb3NpdG9yeXtcclxuLy8gICAgIHByaXZhdGUgX3VybDogc3RyaW5nO1xyXG4vLyAgICAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpe1xyXG4vLyAgICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwdWJsaWMgZ2V0QXN5bmMoKXtcclxuLy8gICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlOiAodXNlcnM6IFVzZXJbXSkgPT4gdm9pZCwgcmVqZWN0KT0+e1xyXG4vLyAgICAgICAgICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLl91cmwsXHJcbi8vICAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4vLyAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4vLyAgICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpPT57XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJzID0gPFVzZXJbXT5kYXRhLml0ZW1zO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodXNlcnMpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIGVycm9yOiAoZSk9PntcclxuLy8gICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjbGFzcyBOb3RHZW5lcmljVGFsa1JlcG9zaXRvcnl7XHJcbi8vICAgICBwcml2YXRlIF91cmw6IHN0cmluZztcclxuLy8gICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKXtcclxuLy8gICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcHVibGljIGdldEFzeW5jKCl7XHJcbi8vICAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZTogKHVzZXJzOiBUYWxrW10pID0+IHZvaWQsIHJlamVjdCk9PntcclxuLy8gICAgICAgICAgICAgJC5hamF4KHtcclxuLy8gICAgICAgICAgICAgICAgIHVybDogdGhpcy5fdXJsLFxyXG4vLyAgICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuLy8gICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKT0+e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciB0YWxrcyA9IDxUYWxrW10+ZGF0YS5pdGVtcztcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRhbGtzKTtcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICBlcnJvcjogKGUpPT57XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH0gICAgXHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIFVzZXIgaW1wbGVtZW50cyBWYWxpZGF0YWJsZUludGVyZmFjZXtcclxuLy8gICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbi8vICAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcclxuLy8gICAgIHB1YmxpYyBpc1ZhbGlkKCk6IGJvb2xlYW57XHJcbi8vICAgICAgICAgcmV0dXJuIHRydWU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIFRhbGsgaW1wbGVtZW50cyBWYWxpZGF0YWJsZUludGVyZmFjZXtcclxuLy8gICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4vLyAgICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbi8vICAgICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZztcclxuLy8gICAgIHB1YmxpYyB1cmw6IHN0cmluZztcclxuLy8gICAgIHB1YmxpYyB5ZWFyOiBzdHJpbmc7XHJcbi8vICAgICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFue1xyXG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgfSAgICBcclxuLy8gfVxyXG5cclxuLy8gaW50ZXJmYWNlIFZhbGlkYXRhYmxlSW50ZXJmYWNle1xyXG4vLyAgICAgaXNWYWxpZCgpOiBib29sZWFuO1xyXG4vLyB9XHJcblxyXG4vLyBjbGFzcyBHZW5lcmljUmVwb3NpdG9yeTxUIGV4dGVuZHMgVmFsaWRhdGFibGVJbnRlcmZhY2U+e1xyXG4vLyAgICAgcHJpdmF0ZSBfdXJsOiBzdHJpbmc7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZyl7XHJcbi8vICAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHB1YmxpYyBnZXRBc3luYygpe1xyXG4vLyAgICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmU6ICh1c2VyczogVFtdKSA9PiB2b2lkLCByZWplY3QpPT57XHJcbi8vICAgICAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuX3VybCxcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbi8vICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbi8vICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSk9PntcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSA8VFtdPmRhdGEuaXRlbXM7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RzID0gPFRbXT5bXTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDsgaTwgaXRlbXMubGVuZ3RoOyBpKyspe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtc1tpXS5pc1ZhbGlkKCkpe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdHMucHVzaChpdGVtc1tpXSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShsaXN0cyk7XHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgZXJyb3I6IChlKT0+e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9ICAgIFxyXG4vLyB9XHJcblxyXG4vLyB2YXIgdXNlclJlcG9zaXRvcnkgPSBuZXcgR2VuZXJpY1JlcG9zaXRvcnk8VXNlcj4oXCIuL2RlbW9zL3NoYXJlZC91c2Vycy5qc29uXCIpO1xyXG4vLyB1c2VyUmVwb3NpdG9yeS5nZXRBc3luYygpLnRoZW4oZnVuY3Rpb24odXNlcnM6IFVzZXJbXSl7XHJcbi8vICAgICBjb25zb2xlLmxvZygnbm90R2VuZXJpY1VzZXJSZXBvc2l0b3J5ID0+JywgdXNlcnMpO1xyXG4vLyB9KTtcclxuXHJcbi8vIHZhciB0YWxrUmVwb3NpdG9yeSA9IG5ldyBHZW5lcmljUmVwb3NpdG9yeTxUYWxrPihcIi4vZGVtb3Mvc2hhcmVkL3RhbGtzLmpzb25cIik7XHJcbi8vIHRhbGtSZXBvc2l0b3J5LmdldEFzeW5jKCkudGhlbihmdW5jdGlvbih0YWxrczogVGFsa1tdKXtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdub3RHZW5lcmljVXNlclJlcG9zaXRvcnkgPT4nLCB0YWxrcyk7XHJcbi8vIH0pO1xyXG5cclxuLy8gaW50ZXJmYWNlIElNeUludGVyZmFjZXtcclxuLy8gICAgIGRvU29tZVRoaW5nOiAoKT0+e31cclxuLy8gfVxyXG5cclxuLy8gaW50ZXJmYWNlIElNeVNlY29uZEludGVyZmFjZXtcclxuLy8gICAgIGRvU29tZVRoaW5nRWxzZTogKCk9Pnt9XHJcbi8vIH1cclxuXHJcbi8vIGludGVyZmFjZSBJQ2hpbGRJbnRlcmZhY2UgZXh0ZW5kcyBJTXlJbnRlcmZhY2UsIElNeVNlY29uZEludGVyZmFjZXtcclxuXHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIEV4YW1wbGU8VCBleHRlbmRzIElDaGlsZEludGVyZmFjZT57XHJcbi8vICAgICBwcml2YXRlIGdlbmVyaWNQcm9wZXJ0eTogVDtcclxuLy8gICAgIHVzZXJUKCl7XHJcbi8vICAgICAgICAgdGhpcy5nZW5lcmljUHJvcGVydHkuZG9Tb21lVGhpbmcoKTtcclxuLy8gICAgICAgICB0aGlzLmdlbmVyaWNQcm9wZXJ0eS5kb1NvbWVUaGluZ0Vsc2UoKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLy8gZnVuY3Rpb24gZmFjdG9yeU5vdFdvcmtpbmc8VD4oKTpUe1xyXG4vLyAvLyAgICAgcmV0dXJuIG5ldyBUKCk7XHJcbi8vIC8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGZhY3Rvcnk8VD4oKTpUe1xyXG4vLyAgICAgdmFyIHR5cGU6IHtuZXcoKTogVDt9XHJcbi8vICAgICByZXR1cm4gbmV3IHR5cGUoKTtcclxuLy8gfVxyXG5cclxuLy8gLy8gdmFyIG5vdEdlbmVyaWNVc2VyUmVwb3NpdG9yeSA9IG5ldyBOb3RHZW5lcmljVXNlclJlcG9zaXRvcnkoXCIuL2RlbW9zL3NoYXJlZC91c2Vycy5qc29uXCIpO1xyXG4vLyAvLyBub3RHZW5lcmljVXNlclJlcG9zaXRvcnkuZ2V0QXN5bmMoKS50aGVuKGZ1bmN0aW9uKHVzZXJzOiBVc2VyW10pe1xyXG4vLyAvLyAgICAgY29uc29sZS5sb2coJ25vdEdlbmVyaWNVc2VyUmVwb3NpdG9yeSA9PicsIHVzZXJzKTtcclxuLy8gLy8gfSk7XHJcblxyXG4vLyBpbnRlcmZhY2UgUGVyc2lzdGFuY2VTZXJ2aWNlSW50ZXJmYWNle1xyXG4vLyAgICAgc2F2ZShlbnRpdHk6IGFueSk6IG51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgQ29va2llUGVyc2lzdGFuY2VTZXJ2aWNlIGltcGxlbWVudHMgUGVyc2lzdGFuY2VTZXJ2aWNlSW50ZXJmYWNle1xyXG4vLyAgICAgc2F2ZShlbnRpdHk6IGFueSk6IG51bWJlcntcclxuLy8gICAgICAgICB2YXIgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgKyAxKTtcclxuLy8gICAgICAgICByZXR1cm4gaWQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIExvY2FsU3RvcmFnZVBlcnNpc3RhbmNlU2VydmljZSBpbXBsZW1lbnRzIFBlcnNpc3RhbmNlU2VydmljZUludGVyZmFjZXtcclxuLy8gICAgIHNhdmUoZW50aXR5OiBhbnkpOiBudW1iZXJ7XHJcbi8vICAgICAgICAgdmFyIGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwICsgMSk7XHJcbi8vICAgICAgICAgcmV0dXJuIGlkO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC8v5LiA5Liq5pa55rOV5bqU6K+l5L6d6LWW5LqO5oq96LGh6ICM5LiN5piv5LiA5Liq5a6e5L6LXHJcbi8vIGNsYXNzIEZhdm91cml0ZXNDb250cm9sbGVye1xyXG4vLyAgICAgcHJpdmF0ZSBfcGVyc2lzdGFuY2VTZXJ2aWNlOiBQZXJzaXN0YW5jZVNlcnZpY2VJbnRlcmZhY2U7XHJcbi8vICAgICBjb25zdHJ1Y3RvcihwZXJzaXN0YW5jZVNlcnZpY2U6IFBlcnNpc3RhbmNlU2VydmljZUludGVyZmFjZSl7XHJcbi8vICAgICAgICAgdGhpcy5fcGVyc2lzdGFuY2VTZXJ2aWNlID0gcGVyc2lzdGFuY2VTZXJ2aWNlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcHVibGljIHNhdmVBc0Zhdm91cml0ZShhcnRpY2xlSWQ6IG51bWJlcil7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX3BlcnNpc3RhbmNlU2VydmljZS5zYXZlKGFydGljbGVJZCk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIHZhciBmYXZDb250cm9sbGVyID0gbmV3IEZhdm91cml0ZXNDb250cm9sbGVyKG5ldyBDb29raWVQZXJzaXN0YW5jZVNlcnZpY2UoKSk7XHJcbi8vIHZhciBmYXZDb250cm9sbGVyID0gbmV3IEZhdm91cml0ZXNDb250cm9sbGVyKG5ldyBMb2NhbFN0b3JhZ2VQZXJzaXN0YW5jZVNlcnZpY2UoKSk7XHJcblxyXG4vLyBpbnRlcmZhY2UgVmVoaWNsZUludGVyZmFjZXtcclxuLy8gICAgIGdldFNwZWVkKCk6IG51bWJlcjtcclxuLy8gICAgIGdldFZlaGljbGVUeXBlOiBzdHJpbmc7XHJcbi8vICAgICBpc1RheFBheWVkKGNhcklkOiBzdHJpbmcpOmJvb2xlYW47XHJcbi8vIH1cclxuXHJcbi8vIGludGVyZmFjZSBDb3VudGVyIHtcclxuLy8gICAgIChzdGFydDogbnVtYmVyKTogc3RyaW5nO1xyXG4vLyAgICAgaW50ZXJ2YWw6IG51bWJlcjtcclxuLy8gICAgIHJlc2V0KCk6IHZvaWQ7XHJcbi8vIH1cclxuXHJcbi8vIC8vSHlicmlkIFR5cGVzXHJcbi8vIGZ1bmN0aW9uIGdldENvdW50ZXIoKTogQ291bnRlciB7XHJcbi8vICAgICBsZXQgY291bnRlciA9IDxDb3VudGVyPmZ1bmN0aW9uKHN0YXJ0OiBudW1iZXIpe307XHJcbi8vICAgICBjb3VudGVyLmludGVydmFsID0gMTIzO1xyXG4vLyAgICAgY291bnRlci5yZXNldCA9IGZ1bmN0aW9uICgpIHsgfTsgICAgXHJcbi8vICAgICByZXR1cm4gY291bnRlcjtcclxuLy8gfVxyXG5cclxuLy8gbGV0IGMgPSBnZXRDb3VudGVyKCk7XHJcbi8vIGMoMTApO1xyXG4vLyBjLnJlc2V0KCk7XHJcbi8vIGMuaW50ZXJ2YWwgPSA1LjA7XHJcblxyXG4vLyAvL1xyXG4vLyBjbGFzcyBDb250cm9sIHtcclxuLy8gICAgIHN0YXRlOiBhbnk7XHJcbi8vIH1cclxuXHJcbi8vIGludGVyZmFjZSBTZWxlY3RhYmxlQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xyXG4vLyAgICAgc2VsZWN0KCk6IHZvaWQ7XHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbnRyb2wgaW1wbGVtZW50cyBTZWxlY3RhYmxlQ29udHJvbCB7XHJcbi8vICAgICBzZWxlY3QoKSB7IH1cclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgVGV4dEJveCBleHRlbmRzIENvbnRyb2wge1xyXG4vLyAgICAgc2VsZWN0KCkgeyB9XHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIEltYWdlVGVzdCBpbXBsZW1lbnRzIFNlbGVjdGFibGVDb250cm9sIHtcclxuLy8gICAgIHN0YXRlOiBhbnk7XHJcbi8vICAgICBzZWxlY3QoKSB7IH1cclxuLy8gfVxyXG4vLyBpbXBvcnQgVGVzdFVzZXJNb2R1bGUgPSBhcHAubW9kdWxlLlVzZXJNb2R1bGU7XHJcbi8vIHZhciB1c2VyID0gbmV3IFRlc3RVc2VyTW9kdWxlKCk7XHJcblxyXG4vLyBpbXBvcnQge1VzZXJWYWxpZGF0b3IsIFRhbGtWYWxpZGF0b3J9IGZyb20gJy4vdmFsaWRhdGlvbic7XHJcblxyXG4vLyBjbGFzcyBNYXRoMXtcclxuLy8gICAgIHB1YmxpYyBzdGF0aWMgcG93KGJhc2U6IG51bWJlciwgZXhwb25lbnQ6IG51bWJlcil7XHJcbi8vICAgICAgICAgdmFyIHJlc3VsdCA9IGJhc2U7XHJcbi8vICAgICAgICAgZm9yKHZhciBpPTE7IGk8ZXhwb25lbnQ7IGkrKyl7XHJcbi8vICAgICAgICAgICAgIHJlc3VsdCAqPSByZXN1bHQqYmFzZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy9UeXBlc2NyaXB0IFxyXG4vLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvcmVmbGVjdC1tZXRhZGF0YS9pbmRleC5kLnRzXCIgLz4gXHJcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XHJcblxyXG5mdW5jdGlvbiBsb2dUeXBlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZyl7XHJcbiAgICB2YXIgdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgdGFyZ2V0LCBrZXkpO1xyXG4gICAgY29uc29sZS5sb2coYCR7a2V5fSB0eXBlOiAke3QubmFtZX1gKTtcclxufVxyXG5cclxuQGxvZ1xyXG5jbGFzcyBQZXJzb257XHJcbiAgICBAbG9nXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHN1cm5hbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgc3VybmFtZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc3VybmFtZSA9IHN1cm5hbWU7XHJcbiAgICB9XHJcbiAgICBAbG9nVHlwZVxyXG4gICAgcHVibGljIHNheVNvbWV0aGluZyhAbG9nIHNvbWV0aGluZzogc3RyaW5nKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArICcnICsgdGhpcy5zdXJuYW1lICsgc29tZXRoaW5nO1xyXG4gICAgfVxyXG59XHJcbiBcclxuLy9DbGFzcyBkZWNvcmF0b3JcclxuLy9Vc2UgdG8gbW9kaWZ5IHRoZSBjbGFzcyBjb250cnVjdG9yIGZ1bmN0aW9uXHJcbi8v5p6E6YCg5Zmo6YCa6L+H6L+U5Zue5LiA5Liq5paw55qE5p6E6YCg5Ye95pWw77yM6KaG55uW5Y6f5pyJ55qE5p6E6YCg5Ye95pWw77yM5LuO6ICM5a6e546w5b+r6YCf5L+u5pS55LiA5Liq57G755qE5p6E6YCg5Ye95pWw55qE5Yqf6IO977yM6L+Z5Lic6KW/56Gu5a6e5aW95ZWKXHJcbmZ1bmN0aW9uIGxvZ0NsYXNzKHRhcmdldDogYW55KXtcclxuICAgIHZhciBvcmlnaW5hbCA9IHRhcmdldDsgLy/kv53lrZjljp/mnInmnoTpgKDlh73mlbDnmoTlvJXnlKhcclxuICAgIC8v55So5LqO55Sf5oiQ57G755qE5a6e5L6L55qE5bel5YW35pa55rOVXHJcbiAgICBmdW5jdGlvbiBjb25zdHJ1Y3QoY29uc3RydWN0b3IsIGFyZ3MpeyBcclxuICAgICAgICB2YXIgYzogYW55ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjLnByb3RvdHlwZSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuICAgICAgICByZXR1cm4gbmV3IGMoKTtcclxuICAgIH1cclxuICAgIC8v5paw55qE5p6E6YCg5Ye95pWw6KGM5Li6XHJcbiAgICAvL+aWsOeahOaehOmAoOWHveaVsOWunueOsOS6hui+k+WHumNvbnNvbGXnmoTooYzkuLpcclxuICAgIHZhciBmOmFueSA9IGZ1bmN0aW9uKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3OlwiICsgb3JpZ2luYWwubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdChvcmlnaW5hbCwgYXJncyk7XHJcbiAgICB9XHJcbiAgICAvL+WkjeWItuWOn+WeiyDkvb/lvpdpbnN0YW5jZW9m5Ye95pWw6IO95aSf5q2j5bi45bel5L2cXHJcbiAgICBmLnByb3RvdHlwZSA9IG9yaWdpbmFsLnByb3RvdHlwZTtcclxuICAgIHJldHVybiBmO1xyXG59XHJcblxyXG52YXIgbWUgPSBuZXcgUGVyc29uKCdKYXNvbicsICdaaGFuZycpO1xyXG5tZS5zYXlTb21ldGhpbmcoJ0hlbGxvJyk7XHJcblxyXG4vL01ldGhvZCBkZWNvcmF0b3JcclxuZnVuY3Rpb24gbG9nTWV0aG9kKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KXtcclxuICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XHJcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oLi4uYXJnczogYW55W10pe1xyXG4gICAgICAgIHZhciBhID0gYXJncy5tYXAoYSA9PiBKU09OLnN0cmluZ2lmeShhKSkuam9pbigpO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICB2YXIgciA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYENhbGw6JHtrZXl9KCR7YX0pPT4ke3J9YCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xyXG59XHJcblxyXG5cclxuLy9Qcm9wZXJ0eSBkZWNvcmF0b3JcclxuZnVuY3Rpb24gbG9nUHJvcGVydHkodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKXtcclxuICAgIHZhciBfdmFsID0gdGhpc1trZXldO1xyXG4gICAgdmFyIGdldHRlciA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEdldDogJHtrZXl9ID0+ICR7X3ZhbH1gKTtcclxuICAgICAgICByZXR1cm4gX3ZhbDtcclxuICAgIH1cclxuICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbihuZXdWYWwpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTZXQ6ICR7a2V5fSA9PiAke25ld1ZhbH1gKTtcclxuICAgICAgICBfdmFsID0gbmV3VmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGRlbGV0ZSB0aGlzW2tleV0pe1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICBnZXQ6IGdldHRlcixcclxuICAgICAgICAgICAgc2V0OiBzZXR0ZXIsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL1BhcmFtZXRlciBkZWNvcmF0b3JcclxuZnVuY3Rpb24gbG9nUGFyYW1ldGVyKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcil7XHJcbiAgICB2YXIgbWV0YWRhdGFLZXkgPSBgX2xvZ18ke2tleX1fcGFyYW1ldGVyc2A7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KHRhcmdldFttZXRhZGF0YUtleV0pKXtcclxuICAgICAgICB0YXJnZXRbbWV0YWRhdGFLZXldLnB1c2goaW5kZXgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdGFyZ2V0W21ldGFkYXRhS2V5XSA9IFtpbmRleF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRNZXRhZGF0YSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IGFueSl7XHJcbiAgICB2YXIgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKXtcclxuICAgICAgICB2YXIgbWV0YWRhdGFLZXkgPSBgX2xvZ18ke2tleX1fcGFyYW1ldGVyc2A7XHJcbiAgICAgICAgdmFyIGluZGljZXMgPSB0YXJnZXRbbWV0YWRhdGFLZXldO1xyXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoaW5kaWNlcykpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxhcmdzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKGluZGljZXMuaW5kZXhPZihpKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmcgPSBhcmdzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdTdHIgPSBKU09OLnN0cmluZ2lmeShhcmcpIHx8IGFyZy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2tleX0gYXJnWyR7aX1dOiAke2FyZ1N0cn1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gb3JpZ2luYWxNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XHJcbn1cclxuXHJcbi8vRGVjb3JhdG9yIGZhY3RvcnlcclxuZnVuY3Rpb24gbG9nKC4uLmFyZ3M6IGFueVtdKXtcclxuICAgIHN3aXRjaChhcmdzLmxlbmd0aCl7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICByZXR1cm4gbG9nQ2xhc3MuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBsb2dQcm9wZXJ0eS5hcHBseSh0aGlzLiBhcmdzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBpZih0eXBlb2YgYXJnc1syXSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICBsb2dQYXJhbWV0ZXIuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGxvZ01ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZWNvcmF0b3JzIGFyZSBub3QgdmFsaWQgaGVyZSEnKTtcclxuICAgIH1cclxufSJdfQ==
