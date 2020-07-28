import { showLoader, hideLoader } from "../../../controllers/utils/loader-utils";
const template = require('./template.pug');
require("./style.css");

export default Backbone.View.extend({
    el: "body",
    events: {

    },

    initialize() {
        this.render()
            .then(()=>{
                hideLoader();
                this.initElements();
            });
    },

    render() {
        return new Promise(resolve => {
            resolve(this.$el.html(template()));
        });
    },

    initElements() {
        this.$submit = this.$(".submit");
        this.$email = this.$(".email");
        this.$password = this.$(".password");
    },

});
