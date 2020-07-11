/**
 * @namespace PIXI
 */

import { AfterEffects, AEDataInterceptor, AEDataLoader } from '.';

interface Window {
  PIXI: any;
}

declare let window: Window;
window.PIXI.AfterEffects = AfterEffects;
window.PIXI.AEDataLoader = AEDataLoader;
window.PIXI.AEDataInterceptor = AEDataInterceptor;
