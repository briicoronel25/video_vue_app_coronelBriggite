var elem = document.querySelector('.sidenav');
options = { 'edge': 'right' }
var instance = M.Sidenav.init(elem, options);

var elem = document.querySelectorAll('.tooltipped');
console.log(elem);
opts = {};
var tooltip_instance = M.Tooltip.init(elem, opts);