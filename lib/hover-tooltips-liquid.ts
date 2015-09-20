/// <reference path="../typings/hover.d.ts" />

import {Annotations, debugLiquidUtils}  from 'liquid-utils'
import {HoverTooltips, provider, debug} from 'hover-tooltips';

var annotProvider = new Annotations('liquid', [], '.liquid');

export class HdevtoolsTooltips extends HoverTooltips {
  provider:Hover.IProvider = provider(hdevtoolsProvider);
  syntax = 'source.haskell'
}

module.exports = new HdevtoolsTooltips();
