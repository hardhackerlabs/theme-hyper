'use strict';

const backgroundColor = '#282433';
const foregroundColor = '#eee9fc';
const borderColor = '#282433';
const cursorColor = '#eee9fc';
const colors = {
  black: '#282433',
  red: '#e965a5',
  green: '#b1f2a7',
  yellow: '#ebde76',
  blue: '#b1baf4',
  magenta: '#e192ef',
  cyan: '#b3f4f3',
  white: '#eee9fc',
  lightBlack: '#3f3951',
  lightRed: '#e965a5',
  lightGreen: '#b1f2a7',
  lightYellow: '#ebde76',
  lightBlue: '#b1baf4',
  lightMagenta: '#e192ef',
  lightCyan: '#b3f4f3',
  lightWhite: '#eee9fc',
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
      }

      .tab_active:before {
        border-color: ${borderColor};
      }
    `,
  });
};
