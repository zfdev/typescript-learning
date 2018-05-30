"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mediator = (function () {
    function Mediator(isDebug) {
        if (isDebug === void 0) { isDebug = false; }
        this._$ = $({});
        this._isDebug = isDebug;
    }
    Mediator.prototype.publish = function (e) {
        if (this._isDebug === true) {
            console.log(new Date().getTime(), "PUBLISH", e.topic, e.data);
        }
        this._$.trigger(e.topic, e.data);
    };
    Mediator.prototype.subscribe = function (e) {
        if (this._isDebug === true) {
            console.log(new Date().getTime(), "SUBSCRIBE", e.topic, e.data);
        }
        this._$.on(e.topic, e.data);
    };
    Mediator.prototype.unsubscribe = function (e) {
        if (this._isDebug === true) {
            console.log(new Date().getTime(), "UNSUBSCRIBE", e.topic, e.data);
        }
        this._$.off(e.topic, e.data);
    };
    return Mediator;
}());
exports.Mediator = Mediator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9tZWRpYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBR0ksa0JBQVksT0FBdUI7UUFBdkIsd0JBQUEsRUFBQSxlQUF1QjtRQUMvQixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBQ00sMEJBQU8sR0FBZCxVQUFlLENBQVk7UUFDdkIsSUFBRyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNNLDRCQUFTLEdBQWhCLFVBQWlCLENBQVk7UUFDekIsSUFBRyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNNLDhCQUFXLEdBQWxCLFVBQW1CLENBQVk7UUFDM0IsSUFBRyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBRU8sNEJBQVEiLCJmaWxlIjoiZnJhbWV3b3JrL21lZGlhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmNsYXNzIE1lZGlhdG9yIGltcGxlbWVudHMgSU1lZGlhdG9ye1xyXG4gICAgcHJpdmF0ZSBfJDogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBfaXNEZWJ1ZztcclxuICAgIGNvbnN0cnVjdG9yKGlzRGVidWc6Ym9vbGVhbiA9IGZhbHNlKXtcclxuICAgICAgICB0aGlzLl8kID0gJCh7fSk7XHJcbiAgICAgICAgdGhpcy5faXNEZWJ1ZyA9IGlzRGVidWc7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcHVibGlzaChlOiBJQXBwRXZlbnQpOnZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5faXNEZWJ1ZyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBcIlBVQkxJU0hcIiwgZS50b3BpYywgZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fJC50cmlnZ2VyKGUudG9waWMsIGUuZGF0YSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3Vic2NyaWJlKGU6IElBcHBFdmVudCk6dm9pZHtcclxuICAgICAgICBpZih0aGlzLl9pc0RlYnVnID09PSB0cnVlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3IERhdGUoKS5nZXRUaW1lKCksIFwiU1VCU0NSSUJFXCIsIGUudG9waWMsIGUuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuXyQub24oZS50b3BpYywgZS5kYXRhKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1bnN1YnNjcmliZShlOiBJQXBwRXZlbnQpOnZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5faXNEZWJ1ZyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBcIlVOU1VCU0NSSUJFXCIsIGUudG9waWMsIGUuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuXyQub2ZmKGUudG9waWMsIGUuZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7TWVkaWF0b3J9OyJdfQ==
