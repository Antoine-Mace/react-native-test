import {platform} from './device.js'

export const COLOR_PRIMARY = '#26D093';
export const COLOR_PRIMARY2 = '#24A577';
export const COLOR_PRIMARY3 = '#218460';
export const COLOR_ERROR = '#E74C3C';
export const COLOR_WHITE = '#FFF';
export const COLOR_WHITE2 = '#F8F8F8';
export const COLOR_GREY = '#737373';
export const COLOR_BLACK = '#000000';

export const COLOR_BORDER = '#D9D5DC'

export const COLOR_ACTIVETAB = (platform === 'ios') ? COLOR_PRIMARY : COLOR_WHITE;