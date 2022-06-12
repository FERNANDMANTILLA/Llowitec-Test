import {responsiveScript} from '../js/responsive.js';


document.addEventListener('DOMContentLoaded', function() {
    responsiveScript();
    window.onresize= responsiveScript;
});