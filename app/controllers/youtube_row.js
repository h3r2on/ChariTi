var APP = require("core");

var DATA = arguments[0] || {};

$.Wrapper.id = DATA.id || 0;
$.Wrapper.url = DATA.url || "";
$.Wrapper.setTitle = DATA.heading || "";
$.heading.text = DATA.heading || "";
$.subHeading.color = APP.Settings.colors.primary || "#000";
$.subHeading.text = DATA.subHeading || "";