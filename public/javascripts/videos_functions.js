var elem = document.querySelector('.sidenav');
var options = { 'edge': 'right' }
var instance = M.Sidenav.init(elem, options);

var elem = document.querySelectorAll('.tooltipped');
console.log(elem);
opts = {};
var tooltip_instance = M.Tooltip.init(elem, opts);

var elem = document.querySelector('.fixed-action-btn');
options = {
    direction: 'right',
    hoverEnabled: true
};
var instance = M.FloatingActionButton.init(elem, options);


//USING SOCIAL VUE