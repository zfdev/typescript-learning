"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = (function () {
    function EventEmitter(metiator) {
        this._metiator = metiator;
    }
    EventEmitter.prototype.triggerEvent = function (event) {
        this._metiator.publish(event);
    };
    EventEmitter.prototype.subscribeToEvents = function (events) {
        this._events = events;
        for (var i = 0; i < this._events.length; i++) {
            this._metiator.subscribe(this._events[i]);
        }
    };
    EventEmitter.prototype.unsubscribeToEvents = function () {
        for (var i = 0; i < this._events.length; i++) {
            this._metiator.unsubscribe(this._events[i]);
        }
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50X2VtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQTtJQUdJLHNCQUFZLFFBQW1CO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFDTSxtQ0FBWSxHQUFuQixVQUFvQixLQUFnQjtRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ00sd0NBQWlCLEdBQXhCLFVBQXlCLE1BQXdCO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0M7SUFDTCxDQUFDO0lBQ00sMENBQW1CLEdBQTFCO1FBQ0ksS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQztJQUNMLENBQUM7SUFDTCxtQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFFTyxvQ0FBWSIsImZpbGUiOiJldmVudF9lbWl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy50c1wiIC8+XHJcblxyXG5pbXBvcnQge0FwcEV2ZW50fSBmcm9tICcuL2FwcF9ldmVudCc7XHJcblxyXG5jbGFzcyBFdmVudEVtaXR0ZXIgaW1wbGVtZW50cyBJRXZlbnRFbWl0dGVye1xyXG4gICAgcHJvdGVjdGVkIF9tZXRpYXRvcjogSU1lZGlhdG9yO1xyXG4gICAgcHJvdGVjdGVkIF9ldmVudHM6IEFycmF5PElBcHBFdmVudD47XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRpYXRvcjogSU1lZGlhdG9yKXtcclxuICAgICAgICB0aGlzLl9tZXRpYXRvciA9IG1ldGlhdG9yO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRyaWdnZXJFdmVudChldmVudDogSUFwcEV2ZW50KXtcclxuICAgICAgICB0aGlzLl9tZXRpYXRvci5wdWJsaXNoKGV2ZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdWJzY3JpYmVUb0V2ZW50cyhldmVudHM6IEFycmF5PElBcHBFdmVudD4pe1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IGV2ZW50cztcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTwgdGhpcy5fZXZlbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5fbWV0aWF0b3Iuc3Vic2NyaWJlKHRoaXMuX2V2ZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHVuc3Vic2NyaWJlVG9FdmVudHMoKXtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTwgdGhpcy5fZXZlbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5fbWV0aWF0b3IudW5zdWJzY3JpYmUodGhpcy5fZXZlbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7RXZlbnRFbWl0dGVyfSJdfQ==
