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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9ldmVudF9lbWl0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUE7SUFHSSxzQkFBWSxRQUFtQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBQ00sbUNBQVksR0FBbkIsVUFBb0IsS0FBZ0I7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNNLHdDQUFpQixHQUF4QixVQUF5QixNQUF3QjtRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUNNLDBDQUFtQixHQUExQjtRQUNJLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBRU8sb0NBQVkiLCJmaWxlIjoiZnJhbWV3b3JrL2V2ZW50X2VtaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7QXBwRXZlbnR9IGZyb20gJy4vYXBwX2V2ZW50JztcclxuXHJcbmNsYXNzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElFdmVudEVtaXR0ZXJ7XHJcbiAgICBwcm90ZWN0ZWQgX21ldGlhdG9yOiBJTWVkaWF0b3I7XHJcbiAgICBwcm90ZWN0ZWQgX2V2ZW50czogQXJyYXk8SUFwcEV2ZW50PjtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3Ipe1xyXG4gICAgICAgIHRoaXMuX21ldGlhdG9yID0gbWV0aWF0b3I7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHJpZ2dlckV2ZW50KGV2ZW50OiBJQXBwRXZlbnQpe1xyXG4gICAgICAgIHRoaXMuX21ldGlhdG9yLnB1Ymxpc2goZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN1YnNjcmliZVRvRXZlbnRzKGV2ZW50czogQXJyYXk8SUFwcEV2ZW50Pil7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gZXZlbnRzO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPCB0aGlzLl9ldmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLl9tZXRpYXRvci5zdWJzY3JpYmUodGhpcy5fZXZlbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdW5zdWJzY3JpYmVUb0V2ZW50cygpe1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPCB0aGlzLl9ldmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLl9tZXRpYXRvci51bnN1YnNjcmliZSh0aGlzLl9ldmVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtFdmVudEVtaXR0ZXJ9Il19
