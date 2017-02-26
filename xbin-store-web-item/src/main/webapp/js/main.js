/*!Name: main.js
 * Date: 2017-2-14 17:14:17 */
define("MOD_ROOT/js/main",function(require,exports,module){function n(n){var o=[];o.push("common")
    ,o=o.concat(n.modules),o.push("lazyinit");for(var t=0;t<o.length;t++)o[t]="MOD_ROOT/js/"+o[t];
    /debug=show_modules/.test(location.href)&&console.log(o),require.async(o,function(){for(var t=Array.prototype
        .slice.call(arguments),i=t.length,e=0;i>e;e++){var module=t[e];module&&"function"==typeof module.init
        ?module.init(n):console.warn("Module[%s] must be exports a init function.",o[e])}})}module.exports.__id
    ="main",module.exports.init=n});