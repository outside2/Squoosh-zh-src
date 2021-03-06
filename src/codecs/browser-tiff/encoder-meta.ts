import { canvasEncodeTest } from '../generic/util';

export interface EncodeOptions { }
export interface EncoderState { type: typeof type; options: EncodeOptions; }

export const type = 'browser-tiff';
export const label = '浏览器 tiff';
export const mimeType = 'image/tiff';
export const extension = 'tiff';
export const defaultOptions: EncodeOptions = {};
export const featureTest = () => canvasEncodeTest(mimeType);
