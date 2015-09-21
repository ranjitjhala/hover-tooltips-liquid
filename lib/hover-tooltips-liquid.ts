/// <reference path="../typings/tsd.d.ts" />

import {Annotations, debugLiquidUtils}  from 'liquid-utils'
import {HoverTooltips, provider, debug} from 'hover-tooltips';

var annProvider = new Annotations('liquid', [], '.liquid');

export class HdevtoolsTooltips extends HoverTooltips {
  syntax = 'source.haskell'

  provider:Hover.IProvider = (p:Hover.Position, s:string) => {
    return annProvider.getInfo(p, s);
  }

}

module.exports = new HdevtoolsTooltips();
