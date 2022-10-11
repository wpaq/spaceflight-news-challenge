"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routes = require('./routes');

const app = _express2.default.call(void 0, );
const port = process.env.PORT || 3333;

app.use(_express2.default.json());
app.use(_routes.routes);

app.listen(port, () => console.log(`Running in http://localhost/${port}`));