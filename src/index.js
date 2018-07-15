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
var React = require("react");
var ScrollList = /** @class */ (function (_super) {
    __extends(ScrollList, _super);
    function ScrollList(props) {
        var _this = _super.call(this, props) || this;
        _this.onScroll = function (e) {
            if (e.target === _this.scrollingContainer) {
                var scrollTop = e.target.scrollTop;
                _this.setState({
                    scrollTop: scrollTop
                });
            }
        };
        _this.renderDisplayContent = function () {
            var scrollTop = _this.state.scrollTop;
            var _a = _this.props, rowHeight = _a.rowHeight, rowRenderer = _a.rowRenderer, total = _a.total;
            var startIndex = Math.floor(scrollTop / rowHeight);
            var endIndex = Math.min(startIndex + _this.limit, total - 1);
            var content = [];
            for (var i = startIndex; i <= endIndex; i++) {
                content.push(rowRenderer({
                    index: i,
                    style: {
                        height: rowHeight,
                        left: 0,
                        right: 0,
                        position: "absolute",
                        top: i * rowHeight
                    }
                }));
            }
            return content;
        };
        _this.state = {
            scrollTop: 0
        };
        return _this;
    }
    Object.defineProperty(ScrollList.prototype, "limit", {
        get: function () {
            var _a = this.props, rowHeight = _a.rowHeight, height = _a.height;
            return Math.ceil(height / rowHeight);
        },
        enumerable: true,
        configurable: true
    });
    ScrollList.prototype.render = function () {
        var _this = this;
        var _a = this.props, height = _a.height, total = _a.total, rowHeight = _a.rowHeight;
        return (React.createElement("div", { style: {
                overflowX: "hidden",
                overflowY: "auto",
                height: height
            }, onScroll: this.onScroll, ref: function (container) { return (_this.scrollingContainer = container); } },
            React.createElement("div", { style: {
                    height: total * rowHeight,
                    position: "relative"
                } }, this.renderDisplayContent())));
    };
    return ScrollList;
}(React.PureComponent));
exports.ScrollList = ScrollList;
