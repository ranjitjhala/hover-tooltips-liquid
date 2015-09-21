/// <reference path="../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var liquid_utils_1 = require('liquid-utils');
var hover_tooltips_1 = require('hover-tooltips');
var annProvider = new liquid_utils_1.Annotations('liquid', [], '.liquid');
var HdevtoolsTooltips = (function (_super) {
    __extends(HdevtoolsTooltips, _super);
    function HdevtoolsTooltips() {
        _super.apply(this, arguments);
        this.syntax = 'source.haskell';
        this.provider = function (p, s) {
            return annProvider.getInfo(p, s);
        };
    }
    return HdevtoolsTooltips;
})(hover_tooltips_1.HoverTooltips);
exports.HdevtoolsTooltips = HdevtoolsTooltips;
module.exports = new HdevtoolsTooltips();
