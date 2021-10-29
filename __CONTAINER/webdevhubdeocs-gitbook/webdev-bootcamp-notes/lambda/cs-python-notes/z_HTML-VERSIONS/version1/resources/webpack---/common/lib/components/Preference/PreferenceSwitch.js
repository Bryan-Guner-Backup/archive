'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.PreferenceSwitch = void 0;
const react_1 = __importDefault(require('react'));
const components_1 = require('@codesandbox/components');
exports.PreferenceSwitch = ({ setValue, value }) => {
  const handleClick = () => {
    setValue(!value);
  };
  return react_1.default.createElement(
    'div',
    {
      style: {
        marginRight: 8,
      },
    },
    react_1.default.createElement(components_1.Switch, {
      onChange: handleClick,
      on: value,
    })
  );
};
