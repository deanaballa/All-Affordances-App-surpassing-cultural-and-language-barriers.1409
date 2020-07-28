import Login1 from "../../views/pages/login1/login1";
import Signup1 from "../../views/pages/signup1/signup1";
import Login2 from "../../views/pages/login2/login2";
import Signup2 from "../../views/pages/signup2/signup2";

export default Backbone.Router.extend({

  routes: {
    "": "signup1",
    "/": "signup1",
    "signup1": "signup1",
    "login1": "login1",
    "signup2": "signup2",
    "login2": "login2",

  },

  preinitialize() {

  },

  initialize: function () {

  },

  login1: function () {
    new Login1();
  },

  signup1: function () {
    new Signup1();
  },

  login2: function () {
    new Login2();
  },

  signup2: function () {
    new Signup2();
  },
});
