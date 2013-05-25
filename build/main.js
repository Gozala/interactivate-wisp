require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"wisp/runtime":[function(require,module,exports){
module.exports=require('YbrU3i');
},{}],"YbrU3i":[function(require,module,exports){
(function(){var _ns_ = {
  "id": "wisp.runtime",
  "doc": "Core primitives required for runtime"
};;

var identity = function identity(x) {
  return x;
};
exports.identity = identity;

var isOdd = function isOdd(n) {
  return n % 2 === 1;
};
exports.isOdd = isOdd;

var isEven = function isEven(n) {
  return n % 2 === 0;
};
exports.isEven = isEven;

var isDictionary = function isDictionary(form) {
  return (isObject(form)) && (isObject(Object.getPrototypeOf(form))) && (isNil(Object.getPrototypeOf(Object.getPrototypeOf(form))));
};
exports.isDictionary = isDictionary;

var dictionary = function dictionary() {
  return (function loop(keyValues, result) {
    var recur = loop;
    while (recur === loop) {
      recur = keyValues.length ?
      (function() {
        (result || 0)[(keyValues || 0)[0]] = (keyValues || 0)[1];
        return (keyValues = keyValues.slice(2), result = result, loop);
      })() :
      result;
    };
    return recur;
  })(Array.prototype.slice.call(arguments), {});
};
exports.dictionary = dictionary;

var keys = function keys(dictionary) {
  return Object.keys(dictionary);
};
exports.keys = keys;

var vals = function vals(dictionary) {
  return keys(dictionary).map(function(key) {
    return (dictionary || 0)[key];
  });
};
exports.vals = vals;

var keyValues = function keyValues(dictionary) {
  return keys(dictionary).map(function(key) {
    return [key, (dictionary || 0)[key]];
  });
};
exports.keyValues = keyValues;

var merge = function merge() {
  return Object.create(Object.prototype, Array.prototype.slice.call(arguments).reduce(function(descriptor, dictionary) {
    isObject(dictionary) ?
      Object.keys(dictionary).forEach(function(key) {
        return (descriptor || 0)[key] = Object.getOwnPropertyDescriptor(dictionary, key);
      }) :
      void(0);
    return descriptor;
  }, Object.create(Object.prototype)));
};
exports.merge = merge;

var isContainsVector = function isContainsVector(vector, element) {
  return vector.indexOf(element) >= 0;
};
exports.isContainsVector = isContainsVector;

var mapDictionary = function mapDictionary(source, f) {
  return Object.keys(source).reduce(function(target, key) {
    (target || 0)[key] = f((source || 0)[key]);
    return target;
  }, {});
};
exports.mapDictionary = mapDictionary;

var toString = Object.prototype.toString;
exports.toString = toString;

var isFn = typeof(/./) === "function" ?
  function isFn(x) {
    return toString.call(x) === "[object Function]";
  } :
  function isFn(x) {
    return typeof(x) === "function";
  };
exports.isFn = isFn;

var isString = function isString(x) {
  return (typeof(x) === "string") || (toString.call(x) === "[object String]");
};
exports.isString = isString;

var isNumber = function isNumber(x) {
  return (typeof(x) === "number") || (toString.call(x) === "[object Number]");
};
exports.isNumber = isNumber;

var isVector = isFn(Array.isArray) ?
  Array.isArray :
  function isVector(x) {
    return toString.call(x) === "[object Array]";
  };
exports.isVector = isVector;

var isDate = function isDate(x) {
  return toString.call(x) === "[object Date]";
};
exports.isDate = isDate;

var isBoolean = function isBoolean(x) {
  return (x === true) || (x === false) || (toString.call(x) === "[object Boolean]");
};
exports.isBoolean = isBoolean;

var isRePattern = function isRePattern(x) {
  return toString.call(x) === "[object RegExp]";
};
exports.isRePattern = isRePattern;

var isObject = function isObject(x) {
  return x && (typeof(x) === "object");
};
exports.isObject = isObject;

var isNil = function isNil(x) {
  return (x === void(0)) || (x === null);
};
exports.isNil = isNil;

var isTrue = function isTrue(x) {
  return x === true;
};
exports.isTrue = isTrue;

var isFalse = function isFalse(x) {
  return x === true;
};
exports.isFalse = isFalse;

var reFind = function reFind(re, s) {
  var matches = re.exec(s);
  return !(isNil(matches)) ?
    matches.length === 1 ?
      (matches || 0)[0] :
      matches :
    void(0);
};
exports.reFind = reFind;

var reMatches = function reMatches(pattern, source) {
  var matches = pattern.exec(source);
  return (!(isNil(matches))) && ((matches || 0)[0] === source) ?
    matches.length === 1 ?
      (matches || 0)[0] :
      matches :
    void(0);
};
exports.reMatches = reMatches;

var rePattern = function rePattern(s) {
  var match = reFind(/^(?:\(\?([idmsux]*)\))?(.*)/, s);
  return new RegExp((match || 0)[2], (match || 0)[1]);
};
exports.rePattern = rePattern;

var inc = function inc(x) {
  return x + 1;
};
exports.inc = inc;

var dec = function dec(x) {
  return x - 1;
};
exports.dec = dec;

var str = function str() {
  return String.prototype.concat.apply("", arguments);
};
exports.str = str;

var char = function char(code) {
  return String.fromCharCode(code);
};
exports.char = char;

var int = function int(x) {
  return isNumber(x) ?
    x >= 0 ?
      Math.floor(x) :
      Math.floor(x) :
    x.charCodeAt(0);
};
exports.int = int;

var subs = function subs(string, start, end) {
  return string.substring(start, end);
};
exports.subs = subs;

var isPatternEqual = function isPatternEqual(x, y) {
  return (isRePattern(x)) && (isRePattern(y)) && (x.source === y.source) && (x.global === y.global) && (x.multiline === y.multiline) && (x.ignoreCase === y.ignoreCase);
};

var isDateEqual = function isDateEqual(x, y) {
  return (isDate(x)) && (isDate(y)) && (Number(x) === Number(y));
};

var isDictionaryEqual = function isDictionaryEqual(x, y) {
  return (isObject(x)) && (isObject(y)) && ((function() {
    var xKeys = keys(x);
    var yKeys = keys(y);
    var xCount = xKeys.length;
    var yCount = yKeys.length;
    return (xCount === yCount) && ((function loop(index, count, keys) {
      var recur = loop;
      while (recur === loop) {
        recur = index < count ?
        isEquivalent((x || 0)[(keys || 0)[index]], (y || 0)[(keys || 0)[index]]) ?
          (index = inc(index), count = count, keys = keys, loop) :
          false :
        true;
      };
      return recur;
    })(0, xCount, xKeys));
  })());
};

var isVectorEqual = function isVectorEqual(x, y) {
  return (isVector(x)) && (isVector(y)) && (x.length === y.length) && ((function loop(xs, ys, index, count) {
    var recur = loop;
    while (recur === loop) {
      recur = index < count ?
      isEquivalent((xs || 0)[index], (ys || 0)[index]) ?
        (xs = xs, ys = ys, index = inc(index), count = count, loop) :
        false :
      true;
    };
    return recur;
  })(x, y, 0, x.length));
};

var isEquivalent = function isEquivalent(x, y) {
  switch (arguments.length) {
    case 1:
      return true;
    case 2:
      return (x === y) || (isNil(x) ?
        isNil(y) :
      isNil(y) ?
        isNil(x) :
      isString(x) ?
        false :
      isNumber(x) ?
        false :
      isFn(x) ?
        false :
      isBoolean(x) ?
        false :
      isDate(x) ?
        isDateEqual(x, y) :
      isVector(x) ?
        isVectorEqual(x, y, [], []) :
      isRePattern(x) ?
        isPatternEqual(x, y) :
      "else" ?
        isDictionaryEqual(x, y) :
        void(0));

    default:
      var more = Array.prototype.slice.call(arguments, 2);
      return (function loop(previous, current, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = (isEquivalent(previous, current)) && (index < count ?
          (previous = current, current = (more || 0)[index], index = inc(index), count = count, loop) :
          true);
        };
        return recur;
      })(x, y, 0, more.length);
  };
  return void(0);
};

var isEqual = isEquivalent;
exports.isEqual = isEqual;

var isStrictEqual = function isStrictEqual(x, y) {
  switch (arguments.length) {
    case 1:
      return true;
    case 2:
      return x === y;

    default:
      var more = Array.prototype.slice.call(arguments, 2);
      return (function loop(previous, current, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = (previous === current) && (index < count ?
          (previous = current, current = (more || 0)[index], index = inc(index), count = count, loop) :
          true);
        };
        return recur;
      })(x, y, 0, more.length);
  };
  return void(0);
};
exports.isStrictEqual = isStrictEqual;

var greaterThan = function greaterThan(x, y) {
  switch (arguments.length) {
    case 1:
      return true;
    case 2:
      return x > y;

    default:
      var more = Array.prototype.slice.call(arguments, 2);
      return (function loop(previous, current, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = (previous > current) && (index < count ?
          (previous = current, current = (more || 0)[index], index = inc(index), count = count, loop) :
          true);
        };
        return recur;
      })(x, y, 0, more.length);
  };
  return void(0);
};
exports.greaterThan = greaterThan;

var notLessThan = function notLessThan(x, y) {
  switch (arguments.length) {
    case 1:
      return true;
    case 2:
      return x >= y;

    default:
      var more = Array.prototype.slice.call(arguments, 2);
      return (function loop(previous, current, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = (previous >= current) && (index < count ?
          (previous = current, current = (more || 0)[index], index = inc(index), count = count, loop) :
          true);
        };
        return recur;
      })(x, y, 0, more.length);
  };
  return void(0);
};
exports.notLessThan = notLessThan;

var lessThan = function lessThan(x, y) {
  switch (arguments.length) {
    case 1:
      return true;
    case 2:
      return x < y;

    default:
      var more = Array.prototype.slice.call(arguments, 2);
      return (function loop(previous, current, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = (previous < current) && (index < count ?
          (previous = current, current = (more || 0)[index], index = inc(index), count = count, loop) :
          true);
        };
        return recur;
      })(x, y, 0, more.length);
  };
  return void(0);
};
exports.lessThan = lessThan;

var notGreaterThan = function notGreaterThan(x, y) {
  switch (arguments.length) {
    case 1:
      return true;
    case 2:
      return x <= y;

    default:
      var more = Array.prototype.slice.call(arguments, 2);
      return (function loop(previous, current, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = (previous <= current) && (index < count ?
          (previous = current, current = (more || 0)[index], index = inc(index), count = count, loop) :
          true);
        };
        return recur;
      })(x, y, 0, more.length);
  };
  return void(0);
};
exports.notGreaterThan = notGreaterThan;

var sum = function sum(a, b, c, d, e, f) {
  switch (arguments.length) {
    case 0:
      return 0;
    case 1:
      return a;
    case 2:
      return a + b;
    case 3:
      return a + b + c;
    case 4:
      return a + b + c + d;
    case 5:
      return a + b + c + d + e;
    case 6:
      return a + b + c + d + e + f;

    default:
      var more = Array.prototype.slice.call(arguments, 6);
      return (function loop(value, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = index < count ?
          (value = value + ((more || 0)[index]), index = inc(index), count = count, loop) :
          value;
        };
        return recur;
      })(a + b + c + d + e + f, 0, more.length);
  };
  return void(0);
};
exports.sum = sum;

var subtract = function subtract(a, b, c, d, e, f) {
  switch (arguments.length) {
    case 0:
      return (function() { throw TypeError("Wrong number of args passed to: -"); })();
    case 1:
      return 0 - a;
    case 2:
      return a - b;
    case 3:
      return a - b - c;
    case 4:
      return a - b - c - d;
    case 5:
      return a - b - c - d - e;
    case 6:
      return a - b - c - d - e - f;

    default:
      var more = Array.prototype.slice.call(arguments, 6);
      return (function loop(value, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = index < count ?
          (value = value - ((more || 0)[index]), index = inc(index), count = count, loop) :
          value;
        };
        return recur;
      })(a - b - c - d - e - f, 0, more.length);
  };
  return void(0);
};
exports.subtract = subtract;

var divide = function divide(a, b, c, d, e, f) {
  switch (arguments.length) {
    case 0:
      return (function() { throw TypeError("Wrong number of args passed to: /"); })();
    case 1:
      return 1 / a;
    case 2:
      return a / b;
    case 3:
      return a / b / c;
    case 4:
      return a / b / c / d;
    case 5:
      return a / b / c / d / e;
    case 6:
      return a / b / c / d / e / f;

    default:
      var more = Array.prototype.slice.call(arguments, 6);
      return (function loop(value, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = index < count ?
          (value = value / ((more || 0)[index]), index = inc(index), count = count, loop) :
          value;
        };
        return recur;
      })(a / b / c / d / e / f, 0, more.length);
  };
  return void(0);
};
exports.divide = divide;

var multiply = function multiply(a, b, c, d, e, f) {
  switch (arguments.length) {
    case 0:
      return 1;
    case 1:
      return a;
    case 2:
      return a * b;
    case 3:
      return a * b * c;
    case 4:
      return a * b * c * d;
    case 5:
      return a * b * c * d * e;
    case 6:
      return a * b * c * d * e * f;

    default:
      var more = Array.prototype.slice.call(arguments, 6);
      return (function loop(value, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = index < count ?
          (value = value * ((more || 0)[index]), index = inc(index), count = count, loop) :
          value;
        };
        return recur;
      })(a * b * c * d * e * f, 0, more.length);
  };
  return void(0);
};
exports.multiply = multiply;

var and = function and(a, b, c, d, e, f) {
  switch (arguments.length) {
    case 0:
      return true;
    case 1:
      return a;
    case 2:
      return a && b;
    case 3:
      return a && b && c;
    case 4:
      return a && b && c && d;
    case 5:
      return a && b && c && d && e;
    case 6:
      return a && b && c && d && e && f;

    default:
      var more = Array.prototype.slice.call(arguments, 6);
      return (function loop(value, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = index < count ?
          (value = value && ((more || 0)[index]), index = inc(index), count = count, loop) :
          value;
        };
        return recur;
      })(a && b && c && d && e && f, 0, more.length);
  };
  return void(0);
};
exports.and = and;

var or = function or(a, b, c, d, e, f) {
  switch (arguments.length) {
    case 0:
      return void(0);
    case 1:
      return a;
    case 2:
      return a || b;
    case 3:
      return a || b || c;
    case 4:
      return a || b || c || d;
    case 5:
      return a || b || c || d || e;
    case 6:
      return a || b || c || d || e || f;

    default:
      var more = Array.prototype.slice.call(arguments, 6);
      return (function loop(value, index, count) {
        var recur = loop;
        while (recur === loop) {
          recur = index < count ?
          (value = value || ((more || 0)[index]), index = inc(index), count = count, loop) :
          value;
        };
        return recur;
      })(a || b || c || d || e || f, 0, more.length);
  };
  return void(0);
};
exports.or = or;

var print = function print() {
  var more = Array.prototype.slice.call(arguments, 0);
  return console.log.apply(console.log, more);
};
exports.print = print
})()
},{}],"wisp/ast":[function(require,module,exports){
module.exports=require('nw8hg9');
},{}],"nw8hg9":[function(require,module,exports){
var _ns_ = {
  "id": "wisp.ast"
};
var wisp_sequence = require("./sequence");
var isList = wisp_sequence.isList;
var isSequential = wisp_sequence.isSequential;
var first = wisp_sequence.first;
var second = wisp_sequence.second;
var count = wisp_sequence.count;
var last = wisp_sequence.last;
var map = wisp_sequence.map;
var vec = wisp_sequence.vec;;
var wisp_string = require("./string");
var split = wisp_string.split;
var join = wisp_string.join;;
var wisp_runtime = require("./runtime");
var isNil = wisp_runtime.isNil;
var isVector = wisp_runtime.isVector;
var isNumber = wisp_runtime.isNumber;
var isString = wisp_runtime.isString;
var isBoolean = wisp_runtime.isBoolean;
var isObject = wisp_runtime.isObject;
var isDate = wisp_runtime.isDate;
var isRePattern = wisp_runtime.isRePattern;
var isDictionary = wisp_runtime.isDictionary;
var str = wisp_runtime.str;
var inc = wisp_runtime.inc;
var subs = wisp_runtime.subs;
var isEqual = wisp_runtime.isEqual;;;

var withMeta = function withMeta(value, metadata) {
  Object.defineProperty(value, "metadata", {
    "value": metadata,
    "configurable": true
  });
  return value;
};
exports.withMeta = withMeta;

var meta = function meta(value) {
  return isObject(value) ?
    value.metadata :
    void(0);
};
exports.meta = meta;

var __nsSeparator__ = "⁄";
exports.__nsSeparator__ = __nsSeparator__;

var Symbol = function Symbol(namespace, name) {
  this.namespace = namespace;
  this.name = name;
  return this;
};

Symbol.type = "wisp.symbol";

Symbol.prototype.type = Symbol.type;

Symbol.prototype.toString = function() {
  var ns = namespace(this);
  return ns ?
    "" + ns + "/" + (name(this)) :
    "" + (name(this));
};

var symbol = function symbol(ns, id) {
  return isSymbol(ns) ?
    ns :
  isKeyword(ns) ?
    new Symbol(namespace(ns), name(ns)) :
  isNil(id) ?
    new Symbol(void(0), ns) :
  "else" ?
    new Symbol(ns, id) :
    void(0);
};
exports.symbol = symbol;

var isSymbol = function isSymbol(x) {
  return x && (Symbol.type === x.type);
};
exports.isSymbol = isSymbol;

var isKeyword = function isKeyword(x) {
  return (isString(x)) && (count(x) > 1) && (first(x) === "꞉");
};
exports.isKeyword = isKeyword;

var keyword = function keyword(ns, id) {
  return isKeyword(ns) ?
    ns :
  isSymbol(ns) ?
    "" + "꞉" + (name(ns)) :
  isNil(id) ?
    "" + "꞉" + ns :
  isNil(ns) ?
    "" + "꞉" + id :
  "else" ?
    "" + "꞉" + ns + __nsSeparator__ + id :
    void(0);
};
exports.keyword = keyword;

var keywordName = function keywordName(value) {
  return last(split(subs(value, 1), __nsSeparator__));
};

var name = function name(value) {
  return isSymbol(value) ?
    value.name :
  isKeyword(value) ?
    keywordName(value) :
  isString(value) ?
    value :
  "else" ?
    (function() { throw new TypeError("" + "Doesn't support name: " + value); })() :
    void(0);
};
exports.name = name;

var keywordNamespace = function keywordNamespace(x) {
  var parts = split(subs(x, 1), __nsSeparator__);
  return count(parts) > 1 ?
    (parts || 0)[0] :
    void(0);
};

var namespace = function namespace(x) {
  return isSymbol(x) ?
    x.namespace :
  isKeyword(x) ?
    keywordNamespace(x) :
  "else" ?
    (function() { throw new TypeError("" + "Doesn't supports namespace: " + x); })() :
    void(0);
};
exports.namespace = namespace;

var gensym = function gensym(prefix) {
  return symbol("" + (isNil(prefix) ?
    "G__" :
    prefix) + (gensym.base = gensym.base + 1));
};
exports.gensym = gensym;

gensym.base = 0;

var isUnquote = function isUnquote(form) {
  return (isList(form)) && (isEqual(first(form), symbol(void(0), "unquote")));
};
exports.isUnquote = isUnquote;

var isUnquoteSplicing = function isUnquoteSplicing(form) {
  return (isList(form)) && (isEqual(first(form), symbol(void(0), "unquote-splicing")));
};
exports.isUnquoteSplicing = isUnquoteSplicing;

var isQuote = function isQuote(form) {
  return (isList(form)) && (isEqual(first(form), symbol(void(0), "quote")));
};
exports.isQuote = isQuote;

var isSyntaxQuote = function isSyntaxQuote(form) {
  return (isList(form)) && (isEqual(first(form), symbol(void(0), "syntax-quote")));
};
exports.isSyntaxQuote = isSyntaxQuote;

var normalize = function normalize(n, len) {
  return (function loop(ns) {
    var recur = loop;
    while (recur === loop) {
      recur = count(ns) < len ?
      (ns = "" + "0" + ns, loop) :
      ns;
    };
    return recur;
  })("" + n);
};

var quoteString = function quoteString(s) {
  s = join("\\\"", split(s, "\""));
  s = join("\\\\", split(s, "\\"));
  s = join("\\b", split(s, ""));
  s = join("\\f", split(s, ""));
  s = join("\\n", split(s, "\n"));
  s = join("\\r", split(s, "\r"));
  s = join("\\t", split(s, "\t"));
  return "" + "\"" + s + "\"";
};
exports.quoteString = quoteString;

var prStr = function prStr(x) {
  return isNil(x) ?
    "nil" :
  isKeyword(x) ?
    namespace(x) ?
      "" + ":" + (namespace(x)) + "/" + (name(x)) :
      "" + ":" + (name(x)) :
  isString(x) ?
    quoteString(x) :
  isDate(x) ?
    "" + "#inst \"" + (x.getUTCFullYear()) + "-" + (normalize(inc(x.getUTCMonth()), 2)) + "-" + (normalize(x.getUTCDate(), 2)) + "T" + (normalize(x.getUTCHours(), 2)) + ":" + (normalize(x.getUTCMinutes(), 2)) + ":" + (normalize(x.getUTCSeconds(), 2)) + "." + (normalize(x.getUTCMilliseconds(), 3)) + "-" + "00:00\"" :
  isVector(x) ?
    "" + "[" + (join(" ", map(prStr, vec(x)))) + "]" :
  isDictionary(x) ?
    "" + "{" + (join(", ", map(function(pair) {
      return "" + (prStr(first(pair))) + " " + (prStr(second(pair)));
    }, x))) + "}" :
  isSequential(x) ?
    "" + "(" + (join(" ", map(prStr, vec(x)))) + ")" :
  isRePattern(x) ?
    "" + "#\"" + (join("\\/", split(x.source, "/"))) + "\"" :
  "else" ?
    "" + x :
    void(0);
};
exports.prStr = prStr
},{"./sequence":"gdziIz","./string":"BI22ma","./runtime":"YbrU3i"}],"wisp/sequence":[function(require,module,exports){
module.exports=require('gdziIz');
},{}],"gdziIz":[function(require,module,exports){
var _ns_ = {
  "id": "wisp.sequence"
};
var wisp_runtime = require("./runtime");
var isNil = wisp_runtime.isNil;
var isVector = wisp_runtime.isVector;
var isFn = wisp_runtime.isFn;
var isNumber = wisp_runtime.isNumber;
var isString = wisp_runtime.isString;
var isDictionary = wisp_runtime.isDictionary;
var keyValues = wisp_runtime.keyValues;
var str = wisp_runtime.str;
var dec = wisp_runtime.dec;
var inc = wisp_runtime.inc;
var merge = wisp_runtime.merge;
var dictionary = wisp_runtime.dictionary;;;

var List = function List(head, tail) {
  this.head = head;
  this.tail = tail || (list());
  this.length = inc(count(this.tail));
  return this;
};

List.prototype.length = 0;

List.type = "wisp.list";

List.prototype.type = List.type;

List.prototype.tail = Object.create(List.prototype);

List.prototype.toString = function() {
  return (function loop(result, list) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(list) ?
      "" + "(" + (result.substr(1)) + ")" :
      (result = "" + result + " " + (isVector(first(list)) ?
        "" + "[" + (first(list).join(" ")) + "]" :
      isNil(first(list)) ?
        "nil" :
      isString(first(list)) ?
        JSON.stringify(first(list)) :
      isNumber(first(list)) ?
        JSON.stringify(first(list)) :
        first(list)), list = rest(list), loop);
    };
    return recur;
  })("", this);
};

var lazySeqValue = function lazySeqValue(lazySeq) {
  return !(lazySeq.realized) ?
    (lazySeq.realized = true) && (lazySeq.x = lazySeq.x()) :
    lazySeq.x;
};

var LazySeq = function LazySeq(realized, x) {
  this.realized = realized || false;
  this.x = x;
  return this;
};

LazySeq.type = "wisp.lazy.seq";

LazySeq.prototype.type = LazySeq.type;

var lazySeq = function lazySeq(realized, body) {
  return new LazySeq(realized, body);
};
exports.lazySeq = lazySeq;

var isLazySeq = function isLazySeq(value) {
  return value && (LazySeq.type === value.type);
};
exports.isLazySeq = isLazySeq;

undefined;

var isList = function isList(value) {
  return value && (List.type === value.type);
};
exports.isList = isList;

var list = function list() {
  return arguments.length === 0 ?
    Object.create(List.prototype) :
    Array.prototype.slice.call(arguments).reduceRight(function(tail, head) {
      return cons(head, tail);
    }, list());
};
exports.list = list;

var cons = function cons(head, tail) {
  return new List(head, tail);
};
exports.cons = cons;

var reverseList = function reverseList(sequence) {
  return (function loop(items, source) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(source) ?
      list.apply(list, items) :
      (items = [first(source)].concat(items), source = rest(source), loop);
    };
    return recur;
  })([], sequence);
};

var isSequential = function isSequential(x) {
  return (isList(x)) || (isVector(x)) || (isLazySeq(x)) || (isDictionary(x)) || (isString(x));
};
exports.isSequential = isSequential;

var reverse = function reverse(sequence) {
  return isList(sequence) ?
    reverseList(sequence) :
  isVector(sequence) ?
    sequence.reverse() :
  isNil(sequence) ?
    list() :
  "else" ?
    reverse(seq(sequence)) :
    void(0);
};
exports.reverse = reverse;

var map = function map(f, sequence) {
  return isVector(sequence) ?
    sequence.map(f) :
  isList(sequence) ?
    mapList(f, sequence) :
  isNil(sequence) ?
    list() :
  "else" ?
    map(f, seq(sequence)) :
    void(0);
};
exports.map = map;

var mapList = function mapList(f, sequence) {
  return (function loop(result, items) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(items) ?
      reverse(result) :
      (result = cons(f(first(items)), result), items = rest(items), loop);
    };
    return recur;
  })(list(), sequence);
};

var filter = function filter(isF, sequence) {
  return isVector(sequence) ?
    sequence.filter(isF) :
  isList(sequence) ?
    filterList(isF, sequence) :
  isNil(sequence) ?
    list() :
  "else" ?
    filter(isF, seq(sequence)) :
    void(0);
};
exports.filter = filter;

var filterList = function filterList(isF, sequence) {
  return (function loop(result, items) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(items) ?
      reverse(result) :
      (result = isF(first(items)) ?
        cons(first(items), result) :
        result, items = rest(items), loop);
    };
    return recur;
  })(list(), sequence);
};

var reduce = function reduce(f) {
  var params = Array.prototype.slice.call(arguments, 1);
  return (function() {
    var hasInitial = count(params) >= 2;
    var initial = hasInitial ?
      first(params) :
      void(0);
    var sequence = hasInitial ?
      second(params) :
      first(params);
    return isNil(sequence) ?
      initial :
    isVector(sequence) ?
      hasInitial ?
        sequence.reduce(f, initial) :
        sequence.reduce(f) :
    isList(sequence) ?
      hasInitial ?
        reduceList(f, initial, sequence) :
        reduceList(f, first(sequence), rest(sequence)) :
    "else" ?
      reduce(f, initial, seq(sequence)) :
      void(0);
  })();
};
exports.reduce = reduce;

var reduceList = function reduceList(f, initial, sequence) {
  return (function loop(result, items) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(items) ?
      result :
      (result = f(result, first(items)), items = rest(items), loop);
    };
    return recur;
  })(initial, sequence);
};

var count = function count(sequence) {
  return isNil(sequence) ?
    0 :
    (seq(sequence)).length;
};
exports.count = count;

var isEmpty = function isEmpty(sequence) {
  return count(sequence) === 0;
};
exports.isEmpty = isEmpty;

var first = function first(sequence) {
  return isNil(sequence) ?
    void(0) :
  isList(sequence) ?
    sequence.head :
  (isVector(sequence)) || (isString(sequence)) ?
    (sequence || 0)[0] :
  isLazySeq(sequence) ?
    first(lazySeqValue(sequence)) :
  "else" ?
    first(seq(sequence)) :
    void(0);
};
exports.first = first;

var second = function second(sequence) {
  return isNil(sequence) ?
    void(0) :
  isList(sequence) ?
    first(rest(sequence)) :
  (isVector(sequence)) || (isString(sequence)) ?
    (sequence || 0)[1] :
  isLazySeq(sequence) ?
    second(lazySeqValue(sequence)) :
  "else" ?
    first(rest(seq(sequence))) :
    void(0);
};
exports.second = second;

var third = function third(sequence) {
  return isNil(sequence) ?
    void(0) :
  isList(sequence) ?
    first(rest(rest(sequence))) :
  (isVector(sequence)) || (isString(sequence)) ?
    (sequence || 0)[2] :
  isLazySeq(sequence) ?
    third(lazySeqValue(sequence)) :
  "else" ?
    second(rest(seq(sequence))) :
    void(0);
};
exports.third = third;

var rest = function rest(sequence) {
  return isNil(sequence) ?
    list() :
  isList(sequence) ?
    sequence.tail :
  (isVector(sequence)) || (isString(sequence)) ?
    sequence.slice(1) :
  isLazySeq(sequence) ?
    rest(lazySeqValue(sequence)) :
  "else" ?
    rest(seq(sequence)) :
    void(0);
};
exports.rest = rest;

var lastOfList = function lastOfList(list) {
  return (function loop(item, items) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(items) ?
      item :
      (item = first(items), items = rest(items), loop);
    };
    return recur;
  })(first(list), rest(list));
};

var last = function last(sequence) {
  return (isVector(sequence)) || (isString(sequence)) ?
    (sequence || 0)[dec(count(sequence))] :
  isList(sequence) ?
    lastOfList(sequence) :
  isNil(sequence) ?
    void(0) :
  isLazySeq(sequence) ?
    last(lazySeqValue(sequence)) :
  "else" ?
    last(seq(sequence)) :
    void(0);
};
exports.last = last;

var butlast = function butlast(sequence) {
  var items = isNil(sequence) ?
    void(0) :
  isString(sequence) ?
    subs(sequence, 0, dec(count(sequence))) :
  isVector(sequence) ?
    sequence.slice(0, dec(count(sequence))) :
  isList(sequence) ?
    list.apply(list, butlast(vec(sequence))) :
  isLazySeq(sequence) ?
    butlast(lazySeqValue(sequence)) :
  "else" ?
    butlast(seq(sequence)) :
    void(0);
  return !((isNil(items)) || (isEmpty(items))) ?
    items :
    void(0);
};
exports.butlast = butlast;

var take = function take(n, sequence) {
  return isNil(sequence) ?
    list() :
  isVector(sequence) ?
    takeFromVector(n, sequence) :
  isList(sequence) ?
    takeFromList(n, sequence) :
  isLazySeq(sequence) ?
    take(n, lazySeqValue(sequence)) :
  "else" ?
    take(n, seq(sequence)) :
    void(0);
};
exports.take = take;

var takeVectorWhile = function takeVectorWhile(predicate, vector) {
  return (function loop(result, tail, head) {
    var recur = loop;
    while (recur === loop) {
      recur = (!(isEmpty(tail))) && (predicate(head)) ?
      (result = conj(result, head), tail = rest(tail), head = first(tail), loop) :
      result;
    };
    return recur;
  })([], vector, first(vector));
};

var takeListWhile = function takeListWhile(predicate, items) {
  return (function loop(result, tail, head) {
    var recur = loop;
    while (recur === loop) {
      recur = (!(isEmpty(tail))) && (isPredicate(head)) ?
      (result = conj(result, head), tail = rest(tail), head = first(tail), loop) :
      list.apply(list, result);
    };
    return recur;
  })([], items, first(items));
};

var takeWhile = function takeWhile(predicate, sequence) {
  return isNil(sequence) ?
    list() :
  isVector(sequence) ?
    takeVectorWhile(predicate, sequence) :
  isList(sequence) ?
    takeVectorWhile(predicate, sequence) :
  "else" ?
    takeWhile(predicate, lazySeqValue(sequence)) :
    void(0);
};
exports.takeWhile = takeWhile;

var takeFromVector = function takeFromVector(n, vector) {
  return vector.slice(0, n);
};

var takeFromList = function takeFromList(n, sequence) {
  return (function loop(taken, items, n) {
    var recur = loop;
    while (recur === loop) {
      recur = (n === 0) || (isEmpty(items)) ?
      reverse(taken) :
      (taken = cons(first(items), taken), items = rest(items), n = dec(n), loop);
    };
    return recur;
  })(list(), sequence, n);
};

var dropFromList = function dropFromList(n, sequence) {
  return (function loop(left, items) {
    var recur = loop;
    while (recur === loop) {
      recur = (left < 1) || (isEmpty(items)) ?
      items :
      (left = dec(left), items = rest(items), loop);
    };
    return recur;
  })(n, sequence);
};

var drop = function drop(n, sequence) {
  return n <= 0 ?
    sequence :
  isString(sequence) ?
    sequence.substr(n) :
  isVector(sequence) ?
    sequence.slice(n) :
  isList(sequence) ?
    dropFromList(n, sequence) :
  isNil(sequence) ?
    list() :
  isLazySeq(sequence) ?
    drop(n, lazySeqValue(sequence)) :
  "else" ?
    drop(n, seq(sequence)) :
    void(0);
};
exports.drop = drop;

var conjList = function conjList(sequence, items) {
  return reduce(function(result, item) {
    return cons(item, result);
  }, sequence, items);
};

var conj = function conj(sequence) {
  var items = Array.prototype.slice.call(arguments, 1);
  return isVector(sequence) ?
    sequence.concat(items) :
  isString(sequence) ?
    "" + sequence + (str.apply(str, items)) :
  isNil(sequence) ?
    list.apply(list, reverse(items)) :
  (isList(sequence)) || (isLazySeq()) ?
    conjList(sequence, items) :
  isDictionary(sequence) ?
    merge(sequence, merge.apply(merge, items)) :
  "else" ?
    (function() { throw TypeError("" + "Type can't be conjoined " + sequence); })() :
    void(0);
};
exports.conj = conj;

var assoc = function assoc(source) {
  var keyValues = Array.prototype.slice.call(arguments, 1);
  return conj(source, dictionary.apply(dictionary, keyValues));
};
exports.assoc = assoc;

var concat = function concat() {
  var sequences = Array.prototype.slice.call(arguments, 0);
  return reverse(reduce(function(result, sequence) {
    return reduce(function(result, item) {
      return cons(item, result);
    }, result, seq(sequence));
  }, list(), sequences));
};
exports.concat = concat;

var seq = function seq(sequence) {
  return isNil(sequence) ?
    void(0) :
  (isVector(sequence)) || (isList(sequence)) || (isLazySeq(sequence)) ?
    sequence :
  isString(sequence) ?
    Array.prototype.slice.call(sequence) :
  isDictionary(sequence) ?
    keyValues(sequence) :
  "default" ?
    (function() { throw TypeError("" + "Can not seq " + sequence); })() :
    void(0);
};
exports.seq = seq;

var isSeq = function isSeq(sequence) {
  return (isList(sequence)) || (isLazySeq(sequence));
};
exports.isSeq = isSeq;

var listToVector = function listToVector(source) {
  return (function loop(result, list) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(list) ?
      result :
      (result = (function() {
        result.push(first(list));
        return result;
      })(), list = rest(list), loop);
    };
    return recur;
  })([], source);
};

var vec = function vec(sequence) {
  return isNil(sequence) ?
    [] :
  isVector(sequence) ?
    sequence :
  isList(sequence) ?
    listToVector(sequence) :
  "else" ?
    vec(seq(sequence)) :
    void(0);
};
exports.vec = vec;

var sort = function sort(f, items) {
  var hasComparator = isFn(f);
  var items = (!(hasComparator)) && (isNil(items)) ?
    f :
    items;
  var compare = hasComparator ?
    function(a, b) {
      return f(a, b) ?
        0 :
        1;
    } :
    void(0);
  return isNil(items) ?
    list() :
  isVector(items) ?
    items.sort(compare) :
  isList(items) ?
    list.apply(list, vec(items).sort(compare)) :
  isDictionary(items) ?
    seq(items).sort(compare) :
  "else" ?
    sort(f, seq(items)) :
    void(0);
};
exports.sort = sort;

var repeat = function repeat(n, x) {
  return (function loop(n, result) {
    var recur = loop;
    while (recur === loop) {
      recur = n <= 0 ?
      result :
      (n = dec(n), result = conj(result, x), loop);
    };
    return recur;
  })(n, []);
};
exports.repeat = repeat
},{"./runtime":"YbrU3i"}],"wisp/reader":[function(require,module,exports){
module.exports=require('yCUXAg');
},{}],"yCUXAg":[function(require,module,exports){
var _ns_ = {
  "id": "wisp.reader",
  "doc": "Reader module provides functions for reading text input\n  as wisp data structures"
};
var wisp_sequence = require("./sequence");
var list = wisp_sequence.list;
var isList = wisp_sequence.isList;
var count = wisp_sequence.count;
var isEmpty = wisp_sequence.isEmpty;
var first = wisp_sequence.first;
var second = wisp_sequence.second;
var third = wisp_sequence.third;
var rest = wisp_sequence.rest;
var map = wisp_sequence.map;
var vec = wisp_sequence.vec;
var cons = wisp_sequence.cons;
var conj = wisp_sequence.conj;
var concat = wisp_sequence.concat;
var last = wisp_sequence.last;
var butlast = wisp_sequence.butlast;
var sort = wisp_sequence.sort;
var lazySeq = wisp_sequence.lazySeq;;
var wisp_runtime = require("./runtime");
var isOdd = wisp_runtime.isOdd;
var dictionary = wisp_runtime.dictionary;
var keys = wisp_runtime.keys;
var isNil = wisp_runtime.isNil;
var inc = wisp_runtime.inc;
var dec = wisp_runtime.dec;
var isVector = wisp_runtime.isVector;
var isString = wisp_runtime.isString;
var isNumber = wisp_runtime.isNumber;
var isBoolean = wisp_runtime.isBoolean;
var isObject = wisp_runtime.isObject;
var isDictionary = wisp_runtime.isDictionary;
var rePattern = wisp_runtime.rePattern;
var reMatches = wisp_runtime.reMatches;
var reFind = wisp_runtime.reFind;
var str = wisp_runtime.str;
var subs = wisp_runtime.subs;
var char = wisp_runtime.char;
var vals = wisp_runtime.vals;
var isEqual = wisp_runtime.isEqual;;
var wisp_ast = require("./ast");
var isSymbol = wisp_ast.isSymbol;
var symbol = wisp_ast.symbol;
var isKeyword = wisp_ast.isKeyword;
var keyword = wisp_ast.keyword;
var meta = wisp_ast.meta;
var withMeta = wisp_ast.withMeta;
var name = wisp_ast.name;
var gensym = wisp_ast.gensym;;
var wisp_string = require("./string");
var split = wisp_string.split;
var join = wisp_string.join;;;

var pushBackReader = function pushBackReader(source, uri) {
  return {
    "lines": split(source, "\n"),
    "buffer": "",
    "uri": uri,
    "column": -1,
    "line": 0
  };
};
exports.pushBackReader = pushBackReader;

var peekChar = function peekChar(reader) {
  var line = ((reader || 0)["lines"])[(reader || 0)["line"]];
  var column = inc((reader || 0)["column"]);
  return isNil(line) ?
    void(0) :
    (line[column]) || "\n";
};
exports.peekChar = peekChar;

var readChar = function readChar(reader) {
  var ch = peekChar(reader);
  isNewline(peekChar(reader)) ?
    (function() {
      (reader || 0)["line"] = inc((reader || 0)["line"]);
      return (reader || 0)["column"] = -1;
    })() :
    (reader || 0)["column"] = inc((reader || 0)["column"]);
  return ch;
};
exports.readChar = readChar;

var isNewline = function isNewline(ch) {
  return "\n" === ch;
};
exports.isNewline = isNewline;

var isBreakingWhitespace = function isBreakingWhitespace(ch) {
  return (ch === " ") || (ch === "\t") || (ch === "\n") || (ch === "\r");
};
exports.isBreakingWhitespace = isBreakingWhitespace;

var isWhitespace = function isWhitespace(ch) {
  return (isBreakingWhitespace(ch)) || ("," === ch);
};
exports.isWhitespace = isWhitespace;

var isNumeric = function isNumeric(ch) {
  return (ch === "0") || (ch === "1") || (ch === "2") || (ch === "3") || (ch === "4") || (ch === "5") || (ch === "6") || (ch === "7") || (ch === "8") || (ch === "9");
};
exports.isNumeric = isNumeric;

var isCommentPrefix = function isCommentPrefix(ch) {
  return ";" === ch;
};
exports.isCommentPrefix = isCommentPrefix;

var isNumberLiteral = function isNumberLiteral(reader, initch) {
  return (isNumeric(initch)) || ((("+" === initch) || ("-" === initch)) && (isNumeric(peekChar(reader))));
};
exports.isNumberLiteral = isNumberLiteral;

var readerError = function readerError(reader, message) {
  var text = "" + message + "\n" + "line:" + ((reader || 0)["line"]) + "\n" + "column:" + ((reader || 0)["column"]);
  var error = SyntaxError(text, (reader || 0)["uri"]);
  error.line = (reader || 0)["line"];
  error.column = (reader || 0)["column"];
  error.uri = (reader || 0)["uri"];
  return (function() { throw error; })();
};
exports.readerError = readerError;

var isMacroTerminating = function isMacroTerminating(ch) {
  return (!(ch === "#")) && (!(ch === "'")) && (!(ch === ":")) && (macros(ch));
};
exports.isMacroTerminating = isMacroTerminating;

var readToken = function readToken(reader, initch) {
  return (function loop(buffer, ch) {
    var recur = loop;
    while (recur === loop) {
      recur = (isNil(ch)) || (isWhitespace(ch)) || (isMacroTerminating(ch)) ?
      buffer :
      (buffer = "" + buffer + (readChar(reader)), ch = peekChar(reader), loop);
    };
    return recur;
  })(initch, peekChar(reader));
};
exports.readToken = readToken;

var skipLine = function skipLine(reader, _) {
  return (function loop() {
    var recur = loop;
    while (recur === loop) {
      recur = (function() {
      var ch = readChar(reader);
      return (ch === "\n") || (ch === "\r") || (isNil(ch)) ?
        reader :
        (loop);
    })();
    };
    return recur;
  })();
};
exports.skipLine = skipLine;

var intPattern = rePattern("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$");
exports.intPattern = intPattern;

var ratioPattern = rePattern("([-+]?[0-9]+)/([0-9]+)");
exports.ratioPattern = ratioPattern;

var floatPattern = rePattern("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
exports.floatPattern = floatPattern;

var matchInt = function matchInt(s) {
  var groups = reFind(intPattern, s);
  var group3 = groups[2];
  return !((isNil(group3)) || (count(group3) < 1)) ?
    0 :
    (function() {
      var negate = "-" === groups[1] ?
        -1 :
        1;
      var a = groups[3] ?
        [groups[3], 10] :
      groups[4] ?
        [groups[4], 16] :
      groups[5] ?
        [groups[5], 8] :
      groups[7] ?
        [groups[7], parseInt(groups[7])] :
      "else" ?
        [void(0), void(0)] :
        void(0);
      var n = a[0];
      var radix = a[1];
      return isNil(n) ?
        void(0) :
        negate * (parseInt(n, radix));
    })();
};
exports.matchInt = matchInt;

var matchRatio = function matchRatio(s) {
  var groups = reFind(ratioPattern, s);
  var numinator = groups[1];
  var denominator = groups[2];
  return (parseInt(numinator)) / (parseInt(denominator));
};
exports.matchRatio = matchRatio;

var matchFloat = function matchFloat(s) {
  return parseFloat(s);
};
exports.matchFloat = matchFloat;

var matchNumber = function matchNumber(s) {
  return reMatches(intPattern, s) ?
    matchInt(s) :
  reMatches(ratioPattern, s) ?
    matchRatio(s) :
  reMatches(floatPattern, s) ?
    matchFloat(s) :
    void(0);
};
exports.matchNumber = matchNumber;

var escapeCharMap = function escapeCharMap(c) {
  return c === "t" ?
    "\t" :
  c === "r" ?
    "\r" :
  c === "n" ?
    "\n" :
  c === "\\" ?
    "\\" :
  c === "\"" ?
    "\"" :
  c === "b" ?
    "" :
  c === "f" ?
    "" :
  "else" ?
    void(0) :
    void(0);
};
exports.escapeCharMap = escapeCharMap;

var read2Chars = function read2Chars(reader) {
  return "" + (readChar(reader)) + (readChar(reader));
};
exports.read2Chars = read2Chars;

var read4Chars = function read4Chars(reader) {
  return "" + (readChar(reader)) + (readChar(reader)) + (readChar(reader)) + (readChar(reader));
};
exports.read4Chars = read4Chars;

var unicode2Pattern = rePattern("[0-9A-Fa-f]{2}");
exports.unicode2Pattern = unicode2Pattern;

var unicode4Pattern = rePattern("[0-9A-Fa-f]{4}");
exports.unicode4Pattern = unicode4Pattern;

var validateUnicodeEscape = function validateUnicodeEscape(unicodePattern, reader, escapeChar, unicodeStr) {
  return reMatches(unicodePattern, unicodeStr) ?
    unicodeStr :
    readerError(reader, "" + "Unexpected unicode escape " + "\\" + escapeChar + unicodeStr);
};
exports.validateUnicodeEscape = validateUnicodeEscape;

var makeUnicodeChar = function makeUnicodeChar(codeStr, base) {
  var base = base || 16;
  var code = parseInt(codeStr, base);
  return char(code);
};
exports.makeUnicodeChar = makeUnicodeChar;

var escapeChar = function escapeChar(buffer, reader) {
  var ch = readChar(reader);
  var mapresult = escapeCharMap(ch);
  return mapresult ?
    mapresult :
  ch === "x" ?
    makeUnicodeChar(validateUnicodeEscape(unicode2Pattern, reader, ch, read2Chars(reader))) :
  ch === "u" ?
    makeUnicodeChar(validateUnicodeEscape(unicode4Pattern, reader, ch, read4Chars(reader))) :
  isNumeric(ch) ?
    char(ch) :
  "else" ?
    readerError(reader, "" + "Unexpected unicode escape " + "\\" + ch) :
    void(0);
};
exports.escapeChar = escapeChar;

var readPast = function readPast(predicate, reader) {
  return (function loop(_) {
    var recur = loop;
    while (recur === loop) {
      recur = predicate(peekChar(reader)) ?
      (_ = readChar(reader), loop) :
      peekChar(reader);
    };
    return recur;
  })(void(0));
};
exports.readPast = readPast;

var readDelimitedList = function readDelimitedList(delim, reader, isRecursive) {
  return (function loop(form) {
    var recur = loop;
    while (recur === loop) {
      recur = (function() {
      var ch = readPast(isWhitespace, reader);
      !(ch) ?
        readerError(reader, "EOF") :
        void(0);
      return delim === ch ?
        (function() {
          readChar(reader);
          return form;
        })() :
        (function() {
          var macro = macros(ch);
          return macro ?
            (function() {
              var result = macro(reader, readChar(reader));
              return (form = result === reader ?
                form :
                conj(form, result), loop);
            })() :
            (function() {
              var o = read(reader, true, void(0), isRecursive);
              return (form = o === reader ?
                form :
                conj(form, o), loop);
            })();
        })();
    })();
    };
    return recur;
  })([]);
};
exports.readDelimitedList = readDelimitedList;

var notImplemented = function notImplemented(reader, ch) {
  return readerError(reader, "" + "Reader for " + ch + " not implemented yet");
};
exports.notImplemented = notImplemented;

var readDispatch = function readDispatch(reader, _) {
  var ch = readChar(reader);
  var dm = dispatchMacros(ch);
  return dm ?
    dm(reader, _) :
    (function() {
      var object = maybeReadTaggedType(reader, ch);
      return object ?
        object :
        readerError(reader, "No dispatch macro for ", ch);
    })();
};
exports.readDispatch = readDispatch;

var readUnmatchedDelimiter = function readUnmatchedDelimiter(rdr, ch) {
  return readerError(rdr, "Unmached delimiter ", ch);
};
exports.readUnmatchedDelimiter = readUnmatchedDelimiter;

var readList = function readList(reader, _) {
  var form = readDelimitedList(")", reader, true);
  return withMeta(list.apply(list, form), meta(form));
};
exports.readList = readList;

var readComment = function readComment(reader, _) {
  return (function loop(buffer, ch) {
    var recur = loop;
    while (recur === loop) {
      recur = (isNil(ch)) || ("\n" === ch) ?
      reader || (list(symbol(void(0), "comment"), buffer)) :
    ("\\" === ch) ?
      (buffer = "" + buffer + (escapeChar(buffer, reader)), ch = readChar(reader), loop) :
    "else" ?
      (buffer = "" + buffer + ch, ch = readChar(reader), loop) :
      void(0);
    };
    return recur;
  })("", readChar(reader));
};
exports.readComment = readComment;

var readVector = function readVector(reader) {
  return readDelimitedList("]", reader, true);
};
exports.readVector = readVector;

var readMap = function readMap(reader) {
  var form = readDelimitedList("}", reader, true);
  return isOdd(count(form)) ?
    readerError(reader, "Map literal must contain an even number of forms") :
    withMeta(dictionary.apply(dictionary, form), meta(form));
};
exports.readMap = readMap;

var readSet = function readSet(reader, _) {
  var form = readDelimitedList("}", reader, true);
  return withMeta(concat([symbol(void(0), "set")], form), meta(form));
};
exports.readSet = readSet;

var readNumber = function readNumber(reader, initch) {
  return (function loop(buffer, ch) {
    var recur = loop;
    while (recur === loop) {
      recur = (isNil(ch)) || (isWhitespace(ch)) || (macros(ch)) ?
      (function() {
        var match = matchNumber(buffer);
        return isNil(match) ?
          readerError(reader, "Invalid number format [", buffer, "]") :
          match;
      })() :
      (buffer = "" + buffer + (readChar(reader)), ch = peekChar(reader), loop);
    };
    return recur;
  })(initch, peekChar(reader));
};
exports.readNumber = readNumber;

var readString = function readString(reader) {
  return (function loop(buffer, ch) {
    var recur = loop;
    while (recur === loop) {
      recur = isNil(ch) ?
      readerError(reader, "EOF while reading string") :
    "\\" === ch ?
      (buffer = "" + buffer + (escapeChar(buffer, reader)), ch = readChar(reader), loop) :
    "\"" === ch ?
      buffer :
    "default" ?
      (buffer = "" + buffer + ch, ch = readChar(reader), loop) :
      void(0);
    };
    return recur;
  })("", readChar(reader));
};
exports.readString = readString;

var readUnquote = function readUnquote(reader) {
  var ch = peekChar(reader);
  return !(ch) ?
    readerError(reader, "EOF while reading character") :
  ch === "@" ?
    (function() {
      readChar(reader);
      return list(symbol(void(0), "unquote-splicing"), read(reader, true, void(0), true));
    })() :
    list(symbol(void(0), "unquote"), read(reader, true, void(0), true));
};
exports.readUnquote = readUnquote;

var specialSymbols = function specialSymbols(text, notFound) {
  return text === "nil" ?
    void(0) :
  text === "true" ?
    true :
  text === "false" ?
    false :
  "else" ?
    notFound :
    void(0);
};
exports.specialSymbols = specialSymbols;

var readSymbol = function readSymbol(reader, initch) {
  var token = readToken(reader, initch);
  var parts = split(token, "/");
  var hasNs = (count(parts) > 1) && (count(token) > 1);
  var ns = first(parts);
  var name = join("/", rest(parts));
  return hasNs ?
    symbol(ns, name) :
    specialSymbols(token, symbol(token));
};
exports.readSymbol = readSymbol;

var readKeyword = function readKeyword(reader, initch) {
  var token = readToken(reader, readChar(reader));
  var parts = split(token, "/");
  var name = last(parts);
  var ns = count(parts) > 1 ?
    join("/", butlast(parts)) :
    void(0);
  var issue = last(ns) === ":" ?
    "namespace can't ends with \":\"" :
  last(name) === ":" ?
    "name can't end with \":\"" :
  last(name) === "/" ?
    "name can't end with \"/\"" :
  count(split(token, "::")) > 1 ?
    "name can't contain \"::\"" :
    void(0);
  return issue ?
    readerError(reader, "Invalid token (", issue, "): ", token) :
  (!(ns)) && (first(name) === ":") ?
    keyword(rest(name)) :
    keyword(ns, name);
};
exports.readKeyword = readKeyword;

var desugarMeta = function desugarMeta(f) {
  return isKeyword(f) ?
    dictionary(name(f), true) :
  isSymbol(f) ?
    {
      "tag": f
    } :
  isString(f) ?
    {
      "tag": f
    } :
  "else" ?
    f :
    void(0);
};
exports.desugarMeta = desugarMeta;

var wrappingReader = function wrappingReader(prefix) {
  return function(reader) {
    return list(prefix, read(reader, true, void(0), true));
  };
};
exports.wrappingReader = wrappingReader;

var throwingReader = function throwingReader(msg) {
  return function(reader) {
    return readerError(reader, msg);
  };
};
exports.throwingReader = throwingReader;

var readMeta = function readMeta(reader, _) {
  var metadata = desugarMeta(read(reader, true, void(0), true));
  !(isDictionary(metadata)) ?
    readerError(reader, "Metadata must be Symbol, Keyword, String or Map") :
    void(0);
  return (function() {
    var form = read(reader, true, void(0), true);
    return isObject(form) ?
      withMeta(form, conj(metadata, meta(form))) :
      form;
  })();
};
exports.readMeta = readMeta;

var readRegex = function readRegex(reader) {
  return (function loop(buffer, ch) {
    var recur = loop;
    while (recur === loop) {
      recur = isNil(ch) ?
      readerError(reader, "EOF while reading string") :
    "\\" === ch ?
      (buffer = "" + buffer + ch + (readChar(reader)), ch = readChar(reader), loop) :
    "\"" === ch ?
      rePattern(buffer) :
    "default" ?
      (buffer = "" + buffer + ch, ch = readChar(reader), loop) :
      void(0);
    };
    return recur;
  })("", readChar(reader));
};
exports.readRegex = readRegex;

var readParam = function readParam(reader, initch) {
  var form = readSymbol(reader, initch);
  return isEqual(form, symbol("%")) ?
    symbol("%1") :
    form;
};
exports.readParam = readParam;

var isParam = function isParam(form) {
  return (isSymbol(form)) && ("%" === first(name(form)));
};
exports.isParam = isParam;

var lambdaParamsHash = function lambdaParamsHash(form) {
  return isParam(form) ?
    dictionary(form, form) :
  (isDictionary(form)) || (isVector(form)) || (isList(form)) ?
    conj.apply(conj, map(lambdaParamsHash, vec(form))) :
  "else" ?
    {} :
    void(0);
};
exports.lambdaParamsHash = lambdaParamsHash;

var lambdaParams = function lambdaParams(body) {
  var names = sort(vals(lambdaParamsHash(body)));
  var variadic = isEqual(first(names), symbol("%&"));
  var n = variadic && (count(names) === 1) ?
    0 :
    parseInt(rest(name(last(names))));
  var params = (function loop(names, i) {
    var recur = loop;
    while (recur === loop) {
      recur = i <= n ?
      (names = conj(names, symbol("" + "%" + i)), i = inc(i), loop) :
      names;
    };
    return recur;
  })([], 1);
  return variadic ?
    conj(params, symbol(void(0), "&"), symbol(void(0), "%&")) :
    names;
};
exports.lambdaParams = lambdaParams;

var readLambda = function readLambda(reader) {
  var body = readList(reader);
  return list(symbol(void(0), "fn"), lambdaParams(body), body);
};
exports.readLambda = readLambda;

var readDiscard = function readDiscard(reader, _) {
  read(reader, true, void(0), true);
  return reader;
};
exports.readDiscard = readDiscard;

var macros = function macros(c) {
  return c === "\"" ?
    readString :
  c === ":" ?
    readKeyword :
  c === ";" ?
    readComment :
  c === "'" ?
    wrappingReader(symbol(void(0), "quote")) :
  c === "@" ?
    wrappingReader(symbol(void(0), "deref")) :
  c === "^" ?
    readMeta :
  c === "`" ?
    wrappingReader(symbol(void(0), "syntax-quote")) :
  c === "~" ?
    readUnquote :
  c === "(" ?
    readList :
  c === ")" ?
    readUnmatchedDelimiter :
  c === "[" ?
    readVector :
  c === "]" ?
    readUnmatchedDelimiter :
  c === "{" ?
    readMap :
  c === "}" ?
    readUnmatchedDelimiter :
  c === "\\" ?
    readChar :
  c === "%" ?
    readParam :
  c === "#" ?
    readDispatch :
  "else" ?
    void(0) :
    void(0);
};
exports.macros = macros;

var dispatchMacros = function dispatchMacros(s) {
  return s === "{" ?
    readSet :
  s === "(" ?
    readLambda :
  s === "<" ?
    throwingReader("Unreadable form") :
  s === "\"" ?
    readRegex :
  s === "!" ?
    readComment :
  s === "_" ?
    readDiscard :
  "else" ?
    void(0) :
    void(0);
};
exports.dispatchMacros = dispatchMacros;

var readForm = function readForm(reader, ch) {
  var start = {
    "line": (reader || 0)["line"],
    "column": (reader || 0)["column"]
  };
  var readMacro = macros(ch);
  var form = readMacro ?
    readMacro(reader, ch) :
  isNumberLiteral(reader, ch) ?
    readNumber(reader, ch) :
  "else" ?
    readSymbol(reader, ch) :
    void(0);
  return form === reader ?
    form :
  !((isString(form)) || (isNumber(form)) || (isBoolean(form)) || (isNil(form)) || (isKeyword(form))) ?
    withMeta(form, conj({
      "start": start,
      "end": {
        "line": (reader || 0)["line"],
        "column": (reader || 0)["column"]
      }
    }, meta(form))) :
  "else" ?
    form :
    void(0);
};
exports.readForm = readForm;

var read = function read(reader, eofIsError, sentinel, isRecursive) {
  return (function loop() {
    var recur = loop;
    while (recur === loop) {
      recur = (function() {
      var ch = readChar(reader);
      var form = isNil(ch) ?
        eofIsError ?
          readerError(reader, "EOF") :
          sentinel :
      isWhitespace(ch) ?
        reader :
      isCommentPrefix(ch) ?
        read(readComment(reader, ch), eofIsError, sentinel, isRecursive) :
      "else" ?
        readForm(reader, ch) :
        void(0);
      return form === reader ?
        (loop) :
        form;
    })();
    };
    return recur;
  })();
};
exports.read = read;

var read_ = function read_(source, uri) {
  var reader = pushBackReader(source, uri);
  var eof = gensym();
  return (function loop(forms, form) {
    var recur = loop;
    while (recur === loop) {
      recur = form === eof ?
      forms :
      (forms = conj(forms, form), form = read(reader, false, eof, false), loop);
    };
    return recur;
  })([], read(reader, false, eof, false));
};
exports.read_ = read_;

var readFromString = function readFromString(source, uri) {
  var reader = pushBackReader(source, uri);
  return read(reader, true, void(0), false);
};
exports.readFromString = readFromString;

var readUuid = function readUuid(uuid) {
  return isString(uuid) ?
    list(symbol(void(0), "UUID."), uuid) :
    readerError(void(0), "UUID literal expects a string as its representation.");
};

var readQueue = function readQueue(items) {
  return isVector(items) ?
    list(symbol(void(0), "PersistentQueue."), items) :
    readerError(void(0), "Queue literal expects a vector for its elements.");
};

var __tagTable__ = dictionary("uuid", readUuid, "queue", readQueue);
exports.__tagTable__ = __tagTable__;

var maybeReadTaggedType = function maybeReadTaggedType(reader, initch) {
  var tag = readSymbol(reader, initch);
  var pfn = (__tagTable__ || 0)[name(tag)];
  return pfn ?
    pfn(read(reader, true, void(0), false)) :
    readerError(reader, "" + "Could not find tag parser for " + (name(tag)) + " in " + ("" + (keys(__tagTable__))));
};
exports.maybeReadTaggedType = maybeReadTaggedType
},{"./sequence":"gdziIz","./runtime":"YbrU3i","./ast":"nw8hg9","./string":"BI22ma"}],"wisp/compiler":[function(require,module,exports){
module.exports=require('baogts');
},{}],"baogts":[function(require,module,exports){
var _ns_ = {
  "id": "wisp.compiler",
  "doc": "wisp language compiler"
};
var wisp_reader = require("./reader");
var readFromString = wisp_reader.readFromString;;
var wisp_ast = require("./ast");
var meta = wisp_ast.meta;
var withMeta = wisp_ast.withMeta;
var isSymbol = wisp_ast.isSymbol;
var symbol = wisp_ast.symbol;
var isKeyword = wisp_ast.isKeyword;
var keyword = wisp_ast.keyword;
var namespace = wisp_ast.namespace;
var isUnquote = wisp_ast.isUnquote;
var isUnquoteSplicing = wisp_ast.isUnquoteSplicing;
var isQuote = wisp_ast.isQuote;
var isSyntaxQuote = wisp_ast.isSyntaxQuote;
var name = wisp_ast.name;
var gensym = wisp_ast.gensym;
var prStr = wisp_ast.prStr;;
var wisp_sequence = require("./sequence");
var isEmpty = wisp_sequence.isEmpty;
var count = wisp_sequence.count;
var isList = wisp_sequence.isList;
var list = wisp_sequence.list;
var first = wisp_sequence.first;
var second = wisp_sequence.second;
var third = wisp_sequence.third;
var rest = wisp_sequence.rest;
var cons = wisp_sequence.cons;
var conj = wisp_sequence.conj;
var reverse = wisp_sequence.reverse;
var reduce = wisp_sequence.reduce;
var vec = wisp_sequence.vec;
var last = wisp_sequence.last;
var repeat = wisp_sequence.repeat;
var map = wisp_sequence.map;
var filter = wisp_sequence.filter;
var take = wisp_sequence.take;
var concat = wisp_sequence.concat;
var isSeq = wisp_sequence.isSeq;;
var wisp_runtime = require("./runtime");
var isOdd = wisp_runtime.isOdd;
var isDictionary = wisp_runtime.isDictionary;
var dictionary = wisp_runtime.dictionary;
var merge = wisp_runtime.merge;
var keys = wisp_runtime.keys;
var vals = wisp_runtime.vals;
var isContainsVector = wisp_runtime.isContainsVector;
var mapDictionary = wisp_runtime.mapDictionary;
var isString = wisp_runtime.isString;
var isNumber = wisp_runtime.isNumber;
var isVector = wisp_runtime.isVector;
var isBoolean = wisp_runtime.isBoolean;
var subs = wisp_runtime.subs;
var reFind = wisp_runtime.reFind;
var isTrue = wisp_runtime.isTrue;
var isFalse = wisp_runtime.isFalse;
var isNil = wisp_runtime.isNil;
var isRePattern = wisp_runtime.isRePattern;
var inc = wisp_runtime.inc;
var dec = wisp_runtime.dec;
var str = wisp_runtime.str;
var char = wisp_runtime.char;
var int = wisp_runtime.int;
var isEqual = wisp_runtime.isEqual;
var isStrictEqual = wisp_runtime.isStrictEqual;;
var wisp_string = require("./string");
var split = wisp_string.split;
var join = wisp_string.join;
var upperCase = wisp_string.upperCase;
var replace = wisp_string.replace;;
var wisp_backend_javascript_writer = require("./backend/javascript/writer");
var writeReference = wisp_backend_javascript_writer.writeReference;
var writeKeywordReference = wisp_backend_javascript_writer.writeKeywordReference;
var writeKeyword = wisp_backend_javascript_writer.writeKeyword;
var writeSymbol = wisp_backend_javascript_writer.writeSymbol;
var writeNil = wisp_backend_javascript_writer.writeNil;
var writeComment = wisp_backend_javascript_writer.writeComment;
var writeNumber = wisp_backend_javascript_writer.writeNumber;
var writeString = wisp_backend_javascript_writer.writeString;
var writeBoolean = wisp_backend_javascript_writer.writeBoolean;;;

var isSelfEvaluating = function isSelfEvaluating(form) {
  return (isNumber(form)) || ((isString(form)) && (!(isSymbol(form))) && (!(isKeyword(form)))) || (isBoolean(form)) || (isNil(form)) || (isRePattern(form));
};
exports.isSelfEvaluating = isSelfEvaluating;

var __macros__ = {};
exports.__macros__ = __macros__;

var executeMacro = function executeMacro(name, form) {
  return (__macros__ || 0)[name].apply((__macros__ || 0)[name], vec(form));
};
exports.executeMacro = executeMacro;

var installMacro = function installMacro(name, macroFn) {
  return (__macros__ || 0)[name] = macroFn;
};
exports.installMacro = installMacro;

var isMacro = function isMacro(name) {
  return (isSymbol(name)) && ((__macros__ || 0)[name]) && true;
};
exports.isMacro = isMacro;

var makeMacro = function makeMacro(pattern, body) {
  var macroFn = concat(list(symbol(void(0), "fn"), pattern), body);
  return eval("" + "(" + (compile(macroexpand(macroFn))) + ")");
};
exports.makeMacro = makeMacro;

installMacro(symbol(void(0), "defmacro"), function(name, signature) {
  var body = Array.prototype.slice.call(arguments, 2);
  return installMacro(name, makeMacro(signature, body));
});

var __specials__ = {};
exports.__specials__ = __specials__;

var installSpecial = function installSpecial(name, f, validator) {
  return (__specials__ || 0)[name] = function(form) {
    validator ?
      validator(form) :
      void(0);
    return f(withMeta(rest(form), meta(form)));
  };
};
exports.installSpecial = installSpecial;

var isSpecial = function isSpecial(name) {
  return (isSymbol(name)) && ((__specials__ || 0)[name]) && true;
};
exports.isSpecial = isSpecial;

var executeSpecial = function executeSpecial(name, form) {
  return ((__specials__ || 0)[name])(form);
};
exports.executeSpecial = executeSpecial;

var opt = function opt(argument, fallback) {
  return (isNil(argument)) || (isEmpty(argument)) ?
    fallback :
    first(argument);
};
exports.opt = opt;

var applyForm = function applyForm(fnName, form, isQuoted) {
  return cons(fnName, isQuoted ?
    map(function(e) {
      return list(symbol(void(0), "quote"), e);
    }, form) :
    form, form);
};
exports.applyForm = applyForm;

var applyUnquotedForm = function applyUnquotedForm(fnName, form) {
  return cons(fnName, map(function(e) {
    return isUnquote(e) ?
      second(e) :
    (isList(e)) && (isKeyword(first(e))) ?
      list(symbol(void(0), "syntax-quote"), second(e)) :
      list(symbol(void(0), "syntax-quote"), e);
  }, form));
};
exports.applyUnquotedForm = applyUnquotedForm;

var splitSplices = function splitSplices(form, fnName) {
  var makeSplice = function makeSplice(form) {
    return (isSelfEvaluating(form)) || (isSymbol(form)) ?
      applyUnquotedForm(fnName, list(form)) :
      applyUnquotedForm(fnName, form);
  };
  return (function loop(nodes, slices, acc) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(nodes) ?
      reverse(isEmpty(acc) ?
        slices :
        cons(makeSplice(reverse(acc)), slices)) :
      (function() {
        var node = first(nodes);
        return isUnquoteSplicing(node) ?
          (nodes = rest(nodes), slices = cons(second(node), isEmpty(acc) ?
            slices :
            cons(makeSplice(reverse(acc)), slices)), acc = list(), loop) :
          (nodes = rest(nodes), slices = slices, acc = cons(node, acc), loop);
      })();
    };
    return recur;
  })(form, list(), list());
};
exports.splitSplices = splitSplices;

var syntaxQuoteSplit = function syntaxQuoteSplit(appendName, fnName, form) {
  var slices = splitSplices(form, fnName);
  var n = count(slices);
  return n === 0 ?
    list(fnName) :
  n === 1 ?
    first(slices) :
  "default" ?
    applyForm(appendName, slices) :
    void(0);
};
exports.syntaxQuoteSplit = syntaxQuoteSplit;

var compileObject = function compileObject(form, isQuoted) {
  return isKeyword(form) ?
    writeKeyword(form) :
  isSymbol(form) ?
    writeSymbol(form) :
  isNumber(form) ?
    writeNumber(form) :
  isString(form) ?
    writeString(form) :
  isBoolean(form) ?
    writeBoolean(form) :
  isNil(form) ?
    writeNil(form) :
  isRePattern(form) ?
    compileRePattern(form) :
  isVector(form) ?
    compile(applyForm(symbol(void(0), "vector"), list.apply(list, form), isQuoted)) :
  isList(form) ?
    compile(applyForm(symbol(void(0), "list"), form, isQuoted)) :
  isDictionary(form) ?
    compileDictionary(isQuoted ?
      mapDictionary(form, function(x) {
        return list(symbol(void(0), "quote"), x);
      }) :
      form) :
    void(0);
};
exports.compileObject = compileObject;

var compileSyntaxQuotedVector = function compileSyntaxQuotedVector(form) {
  var concatForm = syntaxQuoteSplit(symbol(void(0), "concat"), symbol(void(0), "vector"), list.apply(list, form));
  return compile(count(concatForm) > 1 ?
    list(symbol(void(0), "vec"), concatForm) :
    concatForm);
};
exports.compileSyntaxQuotedVector = compileSyntaxQuotedVector;

var compileSyntaxQuoted = function compileSyntaxQuoted(form) {
  return isList(form) ?
    compile(syntaxQuoteSplit(symbol(void(0), "concat"), symbol(void(0), "list"), form)) :
  isVector(form) ?
    compileSyntaxQuotedVector(form) :
  "else" ?
    compileObject(form) :
    void(0);
};
exports.compileSyntaxQuoted = compileSyntaxQuoted;

var compile = function compile(form) {
  return isSelfEvaluating(form) ?
    compileObject(form) :
  isSymbol(form) ?
    writeReference(form) :
  isKeyword(form) ?
    writeKeywordReference(form) :
  isVector(form) ?
    compileObject(form) :
  isDictionary(form) ?
    compileObject(form) :
  isList(form) ?
    (function() {
      var head = first(form);
      return isEmpty(form) ?
        compileObject(form, true) :
      isQuote(form) ?
        compileObject(second(form), true) :
      isSyntaxQuote(form) ?
        compileSyntaxQuoted(second(form)) :
      isSpecial(head) ?
        executeSpecial(head, form) :
      isKeyword(head) ?
        compile(list(symbol(void(0), "get"), second(form), head)) :
      "else" ?
        (function() {
          return !((isSymbol(head)) || (isList(head))) ?
            (function() { throw compilerError(form, "" + "operator is not a procedure: " + head); })() :
            compileInvoke(form);
        })() :
        void(0);
    })() :
    void(0);
};
exports.compile = compile;

var compile_ = function compile_(forms) {
  return reduce(function(result, form) {
    return "" + result + (isEmpty(result) ?
      "" :
      ";\n\n") + (compile(isList(form) ?
      withMeta(macroexpand(form), conj({
        "top": true
      }, meta(form))) :
      form));
  }, "", forms);
};
exports.compile_ = compile_;

var compileProgram = function compileProgram(forms) {
  return reduce(function(result, form) {
    return "" + result + (isEmpty(result) ?
      "" :
      ";\n\n") + (compile(isList(form) ?
      withMeta(macroexpand(form), conj({
        "top": true
      }, meta(form))) :
      form));
  }, "", forms);
};
exports.compileProgram = compileProgram;

var macroexpand1 = function macroexpand1(form) {
  return isList(form) ?
    (function() {
      var op = first(form);
      var id = isSymbol(op) ?
        name(op) :
        void(0);
      return isSpecial(op) ?
        form :
      isMacro(op) ?
        executeMacro(op, rest(form)) :
      (isSymbol(op)) && (!(id === ".")) ?
        first(id) === "." ?
          count(form) < 2 ?
            (function() { throw Error("Malformed member expression, expecting (.member target ...)"); })() :
            cons(symbol(void(0), "."), cons(second(form), cons(symbol(subs(id, 1)), rest(rest(form))))) :
        last(id) === "." ?
          cons(symbol(void(0), "new"), cons(symbol(subs(id, 0, dec(count(id)))), rest(form))) :
          form :
      "else" ?
        form :
        void(0);
    })() :
    form;
};
exports.macroexpand1 = macroexpand1;

var macroexpand = function macroexpand(form) {
  return (function loop(original, expanded) {
    var recur = loop;
    while (recur === loop) {
      recur = original === expanded ?
      original :
      (original = expanded, expanded = macroexpand1(expanded), loop);
    };
    return recur;
  })(form, macroexpand1(form));
};
exports.macroexpand = macroexpand;

var _lineBreakPattern_ = /\n(?=[^\n])/m;
exports._lineBreakPattern_ = _lineBreakPattern_;

var indent = function indent(code, indentation) {
  return join(indentation, split(code, _lineBreakPattern_));
};
exports.indent = indent;

var compileTemplate = function compileTemplate(form) {
  var indentPattern = /\n *$/;
  var getIndentation = function(code) {
    return (reFind(indentPattern, code)) || "\n";
  };
  return (function loop(code, parts, values) {
    var recur = loop;
    while (recur === loop) {
      recur = count(parts) > 1 ?
      (code = "" + code + (first(parts)) + (indent("" + (first(values)), getIndentation(first(parts)))), parts = rest(parts), values = rest(values), loop) :
      "" + code + (first(parts));
    };
    return recur;
  })("", split(first(form), "~{}"), rest(form));
};
exports.compileTemplate = compileTemplate;

var compileDef = function compileDef(form) {
  var id = first(form);
  var isExport = ((((meta(form)) || {}) || 0)["top"]) && (!((((meta(id)) || {}) || 0)["private"]));
  var attribute = symbol(namespace(id), "" + "-" + (name(id)));
  return isExport ?
    compileTemplate(list("var ~{};\n~{}", compile(cons(symbol(void(0), "set!"), form)), compile(list(symbol(void(0), "set!"), list(symbol(void(0), "."), symbol(void(0), "exports"), attribute), id)))) :
    compileTemplate(list("var ~{}", compile(cons(symbol(void(0), "set!"), form))));
};
exports.compileDef = compileDef;

var compileIfElse = function compileIfElse(form) {
  var condition = macroexpand(first(form));
  var thenExpression = macroexpand(second(form));
  var elseExpression = macroexpand(third(form));
  return compileTemplate(list((isList(elseExpression)) && (isEqual(first(elseExpression), symbol(void(0), "if"))) ?
    "~{} ?\n  ~{} :\n~{}" :
    "~{} ?\n  ~{} :\n  ~{}", compile(condition), compile(thenExpression), compile(elseExpression)));
};
exports.compileIfElse = compileIfElse;

var compileDictionary = function compileDictionary(form) {
  var body = (function loop(body, names) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(names) ?
      body :
      (body = "" + (isNil(body) ?
        "" :
        "" + body + ",\n") + (compileTemplate(list("~{}: ~{}", compile(first(names)), compile(macroexpand((form || 0)[first(names)]))))), names = rest(names), loop);
    };
    return recur;
  })(void(0), keys(form));
  return isNil(body) ?
    "{}" :
    compileTemplate(list("{\n  ~{}\n}", body));
};
exports.compileDictionary = compileDictionary;

var desugarFnName = function desugarFnName(form) {
  return (isSymbol(first(form))) || (isNil(first(form))) ?
    form :
    cons(void(0), form);
};
exports.desugarFnName = desugarFnName;

var desugarFnDoc = function desugarFnDoc(form) {
  return (isString(second(form))) || (isNil(second(form))) ?
    form :
    cons(first(form), cons(void(0), rest(form)));
};
exports.desugarFnDoc = desugarFnDoc;

var desugarFnAttrs = function desugarFnAttrs(form) {
  return (isDictionary(third(form))) || (isNil(third(form))) ?
    form :
    cons(first(form), cons(second(form), cons(void(0), rest(rest(form)))));
};
exports.desugarFnAttrs = desugarFnAttrs;

var compileDesugaredFn = function compileDesugaredFn(name, doc, attrs, params, body) {
  return compileTemplate(isNil(name) ?
    list("function(~{}) {\n  ~{}\n}", join(", ", map(compile, (params || 0)["names"])), compileFnBody(map(macroexpand, body), params)) :
    list("function ~{}(~{}) {\n  ~{}\n}", compile(name), join(", ", map(compile, (params || 0)["names"])), compileFnBody(map(macroexpand, body), params)));
};
exports.compileDesugaredFn = compileDesugaredFn;

var compileStatements = function compileStatements(form, prefix) {
  return (function loop(result, expression, expressions) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(expressions) ?
      "" + result + (isNil(prefix) ?
        "" :
        prefix) + (compile(macroexpand(expression))) + ";" :
      (result = "" + result + (compile(macroexpand(expression))) + ";\n", expression = first(expressions), expressions = rest(expressions), loop);
    };
    return recur;
  })("", first(form), rest(form));
};
exports.compileStatements = compileStatements;

var compileFnBody = function compileFnBody(form, params) {
  return (isDictionary(params)) && ((params || 0)["rest"]) ?
    compileStatements(cons(list(symbol(void(0), "def"), (params || 0)["rest"], list(symbol(void(0), "Array.prototype.slice.call"), symbol(void(0), "arguments"), (params || 0)["arity"])), form), "return ") :
  (count(form) === 1) && (isList(first(form))) && (isEqual(first(first(form)), symbol(void(0), "do"))) ?
    compileFnBody(rest(first(form)), params) :
    compileStatements(form, "return ");
};
exports.compileFnBody = compileFnBody;

var desugarParams = function desugarParams(params) {
  return (function loop(names, params) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(params) ?
      {
        "names": names,
        "arity": count(names),
        "rest": void(0)
      } :
    isEqual(first(params), symbol(void(0), "&")) ?
      isEqual(count(params), 1) ?
        {
          "names": names,
          "arity": count(names),
          "rest": void(0)
        } :
      isEqual(count(params), 2) ?
        {
          "names": names,
          "arity": count(names),
          "rest": second(params)
        } :
      "else" ?
        (function() { throw TypeError("Unexpected number of parameters after &"); })() :
        void(0) :
    "else" ?
      (names = conj(names, first(params)), params = rest(params), loop) :
      void(0);
    };
    return recur;
  })([], params);
};
exports.desugarParams = desugarParams;

var analyzeOverloadedFn = function analyzeOverloadedFn(name, doc, attrs, overloads) {
  return map(function(overload) {
    var params = desugarParams(first(overload));
    return {
      "rest": (params || 0)["rest"],
      "names": (params || 0)["names"],
      "arity": (params || 0)["arity"],
      "body": rest(overload)
    };
  }, overloads);
};
exports.analyzeOverloadedFn = analyzeOverloadedFn;

var compileOverloadedFn = function compileOverloadedFn(name, doc, attrs, overloads) {
  var methods = analyzeOverloadedFn(name, doc, attrs, overloads);
  var fixedMethods = filter(function(method) {
    return !((method || 0)["rest"]);
  }, methods);
  var variadic = first(filter(function(method) {
    return (method || 0)["rest"];
  }, methods));
  var names = reduce(function(names, params) {
    return count(names) > (params || 0)["arity"] ?
      names :
      (params || 0)["names"];
  }, [], methods);
  return list(symbol(void(0), "fn"), name, doc, attrs, names, list(symbol(void(0), "raw*"), compileSwitch(symbol(void(0), "arguments.length"), map(function(method) {
    return cons((method || 0)["arity"], list(symbol(void(0), "raw*"), compileFnBody(concat(compileRebind(names, (method || 0)["names"]), (method || 0)["body"]))));
  }, fixedMethods), isNil(variadic) ?
    list(symbol(void(0), "throw"), list(symbol(void(0), "Error"), "Invalid arity")) :
    list(symbol(void(0), "raw*"), compileFnBody(concat(compileRebind(cons(list(symbol(void(0), "Array.prototype.slice.call"), symbol(void(0), "arguments"), (variadic || 0)["arity"]), names), cons((variadic || 0)["rest"], (variadic || 0)["names"])), (variadic || 0)["body"]))))), void(0));
};
exports.compileOverloadedFn = compileOverloadedFn;

var compileRebind = function compileRebind(bindings, names) {
  return (function loop(form, bindings, names) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(names) ?
      reverse(form) :
      (form = isEqual(first(names), first(bindings)) ?
        form :
        cons(list(symbol(void(0), "def"), first(names), first(bindings)), form), bindings = rest(bindings), names = rest(names), loop);
    };
    return recur;
  })(list(), bindings, names);
};
exports.compileRebind = compileRebind;

var compileSwitchCases = function compileSwitchCases(cases) {
  return reduce(function(form, caseExpression) {
    return "" + form + (compileTemplate(list("case ~{}:\n  ~{}\n", compile(macroexpand(first(caseExpression))), compile(macroexpand(rest(caseExpression))))));
  }, "", cases);
};
exports.compileSwitchCases = compileSwitchCases;

var compileSwitch = function compileSwitch(value, cases, defaultCase) {
  return compileTemplate(list("switch (~{}) {\n  ~{}\n  default:\n    ~{}\n}", compile(macroexpand(value)), compileSwitchCases(cases), compile(macroexpand(defaultCase))));
};
exports.compileSwitch = compileSwitch;

var compileFn = function compileFn(form) {
  var signature = desugarFnAttrs(desugarFnDoc(desugarFnName(form)));
  var name = first(signature);
  var doc = second(signature);
  var attrs = third(signature);
  return isVector(third(rest(signature))) ?
    compileDesugaredFn(name, doc, attrs, desugarParams(third(rest(signature))), rest(rest(rest(rest(signature))))) :
    compile(compileOverloadedFn(name, doc, attrs, rest(rest(rest(signature)))));
};
exports.compileFn = compileFn;

var compileInvoke = function compileInvoke(form) {
  return compileTemplate(list(isList(first(form)) ?
    "(~{})(~{})" :
    "~{}(~{})", compile(first(form)), compileGroup(rest(form))));
};
exports.compileInvoke = compileInvoke;

var compileGroup = function compileGroup(form, wrap) {
  return wrap ?
    "" + "(" + (compileGroup(form)) + ")" :
    join(", ", vec(map(compile, map(macroexpand, form))));
};
exports.compileGroup = compileGroup;

var compileDo = function compileDo(form) {
  return compile(list(cons(symbol(void(0), "fn"), cons([], form))));
};
exports.compileDo = compileDo;

var defineBindings = function defineBindings(form) {
  return (function loop(defs, bindings) {
    var recur = loop;
    while (recur === loop) {
      recur = count(bindings) === 0 ?
      reverse(defs) :
      (defs = cons(list(symbol(void(0), "def"), (bindings || 0)[0], (bindings || 0)[1]), defs), bindings = rest(rest(bindings)), loop);
    };
    return recur;
  })(list(), form);
};
exports.defineBindings = defineBindings;

var compileThrow = function compileThrow(form) {
  return compileTemplate(list("(function() { throw ~{}; })()", compile(macroexpand(first(form)))));
};
exports.compileThrow = compileThrow;

var compileSet = function compileSet(form) {
  return compileTemplate(list("~{} = ~{}", compile(macroexpand(first(form))), compile(macroexpand(second(form)))));
};
exports.compileSet = compileSet;

var compileVector = function compileVector(form) {
  return compileTemplate(list("[~{}]", compileGroup(form)));
};
exports.compileVector = compileVector;

var compileTry = function compileTry(form) {
  return (function loop(tryExprs, catchExprs, finallyExprs, exprs) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(exprs) ?
      isEmpty(catchExprs) ?
        compileTemplate(list("(function() {\ntry {\n  ~{}\n} finally {\n  ~{}\n}})()", compileFnBody(tryExprs), compileFnBody(finallyExprs))) :
      isEmpty(finallyExprs) ?
        compileTemplate(list("(function() {\ntry {\n  ~{}\n} catch (~{}) {\n  ~{}\n}})()", compileFnBody(tryExprs), compile(first(catchExprs)), compileFnBody(rest(catchExprs)))) :
        compileTemplate(list("(function() {\ntry {\n  ~{}\n} catch (~{}) {\n  ~{}\n} finally {\n  ~{}\n}})()", compileFnBody(tryExprs), compile(first(catchExprs)), compileFnBody(rest(catchExprs)), compileFnBody(finallyExprs))) :
    isEqual(first(first(exprs)), symbol(void(0), "catch")) ?
      (tryExprs = tryExprs, catchExprs = rest(first(exprs)), finallyExprs = finallyExprs, exprs = rest(exprs), loop) :
    isEqual(first(first(exprs)), symbol(void(0), "finally")) ?
      (tryExprs = tryExprs, catchExprs = catchExprs, finallyExprs = rest(first(exprs)), exprs = rest(exprs), loop) :
      (tryExprs = cons(first(exprs), tryExprs), catchExprs = catchExprs, finallyExprs = finallyExprs, exprs = rest(exprs), loop);
    };
    return recur;
  })(list(), list(), list(), reverse(form));
};
exports.compileTry = compileTry;

var compileProperty = function compileProperty(form) {
  return (name(second(form)))[0] === "-" ?
    compileTemplate(list(isList(first(form)) ?
      "(~{}).~{}" :
      "~{}.~{}", compile(macroexpand(first(form))), compile(macroexpand(symbol(subs(name(second(form)), 1)))))) :
    compileTemplate(list("~{}.~{}(~{})", compile(macroexpand(first(form))), compile(macroexpand(second(form))), compileGroup(rest(rest(form)))));
};
exports.compileProperty = compileProperty;

var compileApply = function compileApply(form) {
  return compile(list(symbol(void(0), "."), first(form), symbol(void(0), "apply"), first(form), second(form)));
};
exports.compileApply = compileApply;

var compileNew = function compileNew(form) {
  return compileTemplate(list("new ~{}", compile(form)));
};
exports.compileNew = compileNew;

var compileAget = function compileAget(form) {
  var target = macroexpand(first(form));
  var attribute = macroexpand(second(form));
  var notFound = third(form);
  var template = isList(target) ?
    "(~{})[~{}]" :
    "~{}[~{}]";
  return notFound ?
    compile(list(symbol(void(0), "or"), list(symbol(void(0), "get"), first(form), second(form)), macroexpand(notFound))) :
    compileTemplate(list(template, compile(target), compile(attribute)));
};
exports.compileAget = compileAget;

var compileGet = function compileGet(form) {
  return compileAget(cons(list(symbol(void(0), "or"), first(form), 0), rest(form)));
};
exports.compileGet = compileGet;

var compileInstance = function compileInstance(form) {
  return compileTemplate(list("~{} instanceof ~{}", compile(macroexpand(second(form))), compile(macroexpand(first(form)))));
};
exports.compileInstance = compileInstance;

var compileNot = function compileNot(form) {
  return compileTemplate(list("!(~{})", compile(macroexpand(first(form)))));
};
exports.compileNot = compileNot;

var compileLoop = function compileLoop(form) {
  var bindings = (function loop(names, values, tokens) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(tokens) ?
      {
        "names": names,
        "values": values
      } :
      (names = conj(names, first(tokens)), values = conj(values, second(tokens)), tokens = rest(rest(tokens)), loop);
    };
    return recur;
  })([], [], first(form));
  var names = (bindings || 0)["names"];
  var values = (bindings || 0)["values"];
  var body = rest(form);
  return compile(cons(cons(symbol(void(0), "fn"), cons(symbol(void(0), "loop"), cons(names, compileRecur(names, body)))), list.apply(list, values)));
};
exports.compileLoop = compileLoop;

var rebindBindings = function rebindBindings(names, values) {
  return (function loop(result, names, values) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(names) ?
      reverse(result) :
      (result = cons(list(symbol(void(0), "set!"), first(names), first(values)), result), names = rest(names), values = rest(values), loop);
    };
    return recur;
  })(list(), names, values);
};
exports.rebindBindings = rebindBindings;

var expandRecur = function expandRecur(names, body) {
  return map(function(form) {
    return isList(form) ?
      isEqual(first(form), symbol(void(0), "recur")) ?
        list(symbol(void(0), "raw*"), compileGroup(concat(rebindBindings(names, rest(form)), list(symbol(void(0), "loop"))), true)) :
        expandRecur(names, form) :
      form;
  }, body);
};
exports.expandRecur = expandRecur;

var compileRecur = function compileRecur(names, body) {
  return list(list(symbol(void(0), "raw*"), compileTemplate(list("var recur = loop;\nwhile (recur === loop) {\n  recur = ~{}\n}", compileStatements(expandRecur(names, body))))), symbol(void(0), "recur"));
};
exports.compileRecur = compileRecur;

var compileRaw = function compileRaw(form) {
  return first(form);
};
exports.compileRaw = compileRaw;

installSpecial(symbol(void(0), "set!"), compileSet);

installSpecial(symbol(void(0), "get"), compileGet);

installSpecial(symbol(void(0), "aget"), compileAget);

installSpecial(symbol(void(0), "def"), compileDef);

installSpecial(symbol(void(0), "if"), compileIfElse);

installSpecial(symbol(void(0), "do"), compileDo);

installSpecial(symbol(void(0), "do*"), compileStatements);

installSpecial(symbol(void(0), "fn"), compileFn);

installSpecial(symbol(void(0), "throw"), compileThrow);

installSpecial(symbol(void(0), "vector"), compileVector);

installSpecial(symbol(void(0), "try"), compileTry);

installSpecial(symbol(void(0), "."), compileProperty);

installSpecial(symbol(void(0), "apply"), compileApply);

installSpecial(symbol(void(0), "new"), compileNew);

installSpecial(symbol(void(0), "instance?"), compileInstance);

installSpecial(symbol(void(0), "not"), compileNot);

installSpecial(symbol(void(0), "loop"), compileLoop);

installSpecial(symbol(void(0), "raw*"), compileRaw);

installSpecial(symbol(void(0), "comment"), writeComment);

var compileRePattern = function compileRePattern(form) {
  return "" + form;
};
exports.compileRePattern = compileRePattern;

var installNative = function installNative(alias, operator, validator, fallback) {
  return installSpecial(alias, function(form) {
    return isEmpty(form) ?
      fallback :
      reduce(function(left, right) {
        return compileTemplate(list("~{} ~{} ~{}", left, name(operator), right));
      }, map(function(operand) {
        return compileTemplate(list(isList(operand) ?
          "(~{})" :
          "~{}", compile(macroexpand(operand))));
      }, form));
  }, validator);
};
exports.installNative = installNative;

var installOperator = function installOperator(alias, operator) {
  return installSpecial(alias, function(form) {
    return (function loop(result, left, right, operands) {
      var recur = loop;
      while (recur === loop) {
        recur = isEmpty(operands) ?
        "" + result + (compileTemplate(list("~{} ~{} ~{}", compile(macroexpand(left)), name(operator), compile(macroexpand(right))))) :
        (result = "" + result + (compileTemplate(list("~{} ~{} ~{} && ", compile(macroexpand(left)), name(operator), compile(macroexpand(right))))), left = right, right = first(operands), operands = rest(operands), loop);
      };
      return recur;
    })("", first(form), second(form), rest(rest(form)));
  }, verifyTwo);
};
exports.installOperator = installOperator;

var compilerError = function compilerError(form, message) {
  var error = Error("" + message);
  error.line = 1;
  return (function() { throw error; })();
};
exports.compilerError = compilerError;

var verifyTwo = function verifyTwo(form) {
  return (isEmpty(rest(form))) || (isEmpty(rest(rest(form)))) ?
    (function() { throw compilerError(form, "" + (first(form)) + " form requires at least two operands"); })() :
    void(0);
};
exports.verifyTwo = verifyTwo;

installNative(symbol(void(0), "+"), symbol(void(0), "+"), void(0), 0);

installNative(symbol(void(0), "-"), symbol(void(0), "-"), void(0), "NaN");

installNative(symbol(void(0), "*"), symbol(void(0), "*"), void(0), 1);

installNative(symbol(void(0), "/"), symbol(void(0), "/"), verifyTwo);

installNative(symbol(void(0), "mod"), symbol("%"), verifyTwo);

installNative(symbol(void(0), "and"), symbol(void(0), "&&"));

installNative(symbol(void(0), "or"), symbol(void(0), "||"));

installOperator(symbol(void(0), "not="), symbol(void(0), "!="));

installOperator(symbol(void(0), "=="), symbol(void(0), "==="));

installOperator(symbol(void(0), "identical?"), symbol(void(0), "==="));

installOperator(symbol(void(0), ">"), symbol(void(0), ">"));

installOperator(symbol(void(0), ">="), symbol(void(0), ">="));

installOperator(symbol(void(0), "<"), symbol(void(0), "<"));

installOperator(symbol(void(0), "<="), symbol(void(0), "<="));

installNative(symbol(void(0), "bit-and"), symbol(void(0), "&"), verifyTwo);

installNative(symbol(void(0), "bit-or"), symbol(void(0), "|"), verifyTwo);

installNative(symbol(void(0), "bit-xor"), symbol("^"));

installNative(symbol(void(0), "bit-not"), symbol("~"), verifyTwo);

installNative(symbol(void(0), "bit-shift-left"), symbol(void(0), "<<"), verifyTwo);

installNative(symbol(void(0), "bit-shift-right"), symbol(void(0), ">>"), verifyTwo);

installNative(symbol(void(0), "bit-shift-right-zero-fil"), symbol(void(0), ">>>"), verifyTwo);

installMacro(symbol(void(0), "str"), function str() {
  var forms = Array.prototype.slice.call(arguments, 0);
  return concat(list(symbol(void(0), "+"), ""), forms);
});

installMacro(symbol(void(0), "let"), function letMacro(bindings) {
  var body = Array.prototype.slice.call(arguments, 1);
  return cons(symbol(void(0), "do"), concat(defineBindings(bindings), body));
});

installMacro(symbol(void(0), "cond"), function cond() {
  var clauses = Array.prototype.slice.call(arguments, 0);
  return !(isEmpty(clauses)) ?
    list(symbol(void(0), "if"), first(clauses), isEmpty(rest(clauses)) ?
      (function() { throw Error("cond requires an even number of forms"); })() :
      second(clauses), cons(symbol(void(0), "cond"), rest(rest(clauses)))) :
    void(0);
});

installMacro(symbol(void(0), "defn"), function defn(name) {
  var body = Array.prototype.slice.call(arguments, 1);
  return list(symbol(void(0), "def"), name, concat(list(symbol(void(0), "fn"), name), body));
});

installMacro(symbol(void(0), "defn-"), function defn(name) {
  var body = Array.prototype.slice.call(arguments, 1);
  return concat(list(symbol(void(0), "defn"), withMeta(name, conj({
    "private": true
  }, meta(name)))), body);
});

installMacro(symbol(void(0), "assert"), function assert(x, message) {
  var title = message || "";
  var assertion = prStr(x);
  var uri = (x || 0)["uri"];
  var form = isList(x) ?
    second(x) :
    x;
  return list(symbol(void(0), "do"), list(symbol(void(0), "if"), list(symbol(void(0), "and"), list(symbol(void(0), "not"), list(symbol(void(0), "identical?"), list(symbol(void(0), "typeof"), symbol(void(0), "**verbose**")), "undefined")), symbol(void(0), "**verbose**")), list(symbol(void(0), ".log"), symbol(void(0), "console"), "Assert:", assertion)), list(symbol(void(0), "if"), list(symbol(void(0), "not"), x), list(symbol(void(0), "throw"), list(symbol(void(0), "Error."), list(symbol(void(0), "str"), "Assert failed: ", title, "\n\nAssertion:\n\n", assertion, "\n\nActual:\n\n", form, "\n--------------\n"), uri))));
});

var parseReferences = function parseReferences(forms) {
  return reduce(function(references, form) {
    isSeq(form) ?
      (references || 0)[name(first(form))] = vec(rest(form)) :
      void(0);
    return references;
  }, {}, forms);
};
exports.parseReferences = parseReferences;

var parseRequire = function parseRequire(form) {
  var requirement = isSymbol(form) ?
    [form] :
    vec(form);
  var id = first(requirement);
  var params = dictionary.apply(dictionary, rest(requirement));
  var imports = reduce(function(imports, name) {
    (imports || 0)[name] = ((imports || 0)[name]) || name;
    return imports;
  }, conj({}, (params || 0)["꞉rename"]), (params || 0)["꞉refer"]);
  return conj({
    "id": id,
    "imports": imports
  }, params);
};
exports.parseRequire = parseRequire;

var analyzeNs = function analyzeNs(form) {
  var id = first(form);
  var params = rest(form);
  var doc = isString(first(params)) ?
    first(params) :
    void(0);
  var references = parseReferences(doc ?
    rest(params) :
    params);
  return withMeta(form, {
    "id": id,
    "doc": doc,
    "require": (references || 0)["require"] ?
      map(parseRequire, (references || 0)["require"]) :
      void(0)
  });
};
exports.analyzeNs = analyzeNs;

var idToNs = function idToNs(id) {
  return symbol(void(0), join("*", split("" + id, ".")));
};
exports.idToNs = idToNs;

var nameToField = function nameToField(name) {
  return symbol(void(0), "" + "-" + name);
};
exports.nameToField = nameToField;

var compileImport = function compileImport(module) {
  return function(form) {
    return list(symbol(void(0), "def"), second(form), list(symbol(void(0), "."), module, nameToField(first(form))));
  };
};
exports.compileImport = compileImport;

var compileRequire = function compileRequire(requirer) {
  return function(form) {
    var id = (form || 0)["id"];
    var requirement = idToNs(((form || 0)["꞉as"]) || id);
    var path = resolve(requirer, id);
    var imports = (form || 0)["imports"];
    return concat([symbol(void(0), "do*"), list(symbol(void(0), "def"), requirement, list(symbol(void(0), "require"), path))], imports ?
      map(compileImport(requirement), imports) :
      void(0));
  };
};
exports.compileRequire = compileRequire;

var resolve = function resolve(from, to) {
  var requirer = split("" + from, ".");
  var requirement = split("" + to, ".");
  var isRelative = (!("" + from === "" + to)) && (first(requirer) === first(requirement));
  return isRelative ?
    (function loop(from, to) {
      var recur = loop;
      while (recur === loop) {
        recur = first(from) === first(to) ?
        (from = rest(from), to = rest(to), loop) :
        join("/", concat(["."], repeat(dec(count(from)), ".."), to));
      };
      return recur;
    })(requirer, requirement) :
    join("/", requirement);
};
exports.resolve = resolve;

var compileNs = function compileNs() {
  var form = Array.prototype.slice.call(arguments, 0);
  return (function() {
    var metadata = meta(analyzeNs(form));
    var id = "" + ((metadata || 0)["id"]);
    var doc = (metadata || 0)["doc"];
    var requirements = (metadata || 0)["require"];
    var ns = doc ?
      {
        "id": id,
        "doc": doc
      } :
      {
        "id": id
      };
    return concat([symbol(void(0), "do*"), list(symbol(void(0), "def"), symbol(void(0), "*ns*"), ns)], requirements ?
      map(compileRequire(id), requirements) :
      void(0));
  })();
};
exports.compileNs = compileNs;

installMacro(symbol(void(0), "ns"), compileNs);

installMacro(symbol(void(0), "print"), function() {
  var more = Array.prototype.slice.call(arguments, 0);
  "Prints the object(s) to the output for human consumption.";
  return concat(list(symbol(void(0), ".log"), symbol(void(0), "console")), more);
})
},{"./reader":"yCUXAg","./ast":"nw8hg9","./sequence":"gdziIz","./runtime":"YbrU3i","./string":"BI22ma","./backend/javascript/writer":1}],"wisp/string":[function(require,module,exports){
module.exports=require('BI22ma');
},{}],"BI22ma":[function(require,module,exports){
var _ns_ = {
  "id": "wisp.string"
};
var wisp_runtime = require("./runtime");
var str = wisp_runtime.str;
var subs = wisp_runtime.subs;
var reMatches = wisp_runtime.reMatches;
var isNil = wisp_runtime.isNil;
var isString = wisp_runtime.isString;;
var wisp_sequence = require("./sequence");
var vec = wisp_sequence.vec;
var isEmpty = wisp_sequence.isEmpty;;;

var split = function split(string, pattern, limit) {
  return string.split(pattern, limit);
};
exports.split = split;

var join = function join(separator, coll) {
  switch (arguments.length) {
    case 1:
      var coll = separator;
      return str.apply(str, vec(coll));
    case 2:
      return vec(coll).join(separator);

    default:
      (function() { throw Error("Invalid arity"); })()
  };
  return void(0);
};
exports.join = join;

var upperCase = function upperCase(string) {
  return string.toUpperCase();
};
exports.upperCase = upperCase;

var upperCase = function upperCase(string) {
  return string.toUpperCase();
};
exports.upperCase = upperCase;

var lowerCase = function lowerCase(string) {
  return string.toLowerCase();
};
exports.lowerCase = lowerCase;

var capitalize = function capitalize(string) {
  return count(string) < 2 ?
    upperCase(string) :
    "" + (upperCase(subs(s, 0, 1))) + (lowerCase(subs(s, 1)));
};
exports.capitalize = capitalize;

var replace = function replace(string, match, replacement) {
  return string.replace(match, replacement);
};
exports.replace = replace;

var __LEFTSPACES__ = /^\s\s*/;
exports.__LEFTSPACES__ = __LEFTSPACES__;

var __RIGHTSPACES__ = /\s\s*$/;
exports.__RIGHTSPACES__ = __RIGHTSPACES__;

var __SPACES__ = /^\s\s*$/;
exports.__SPACES__ = __SPACES__;

var triml = isNil("".trimLeft) ?
  function(string) {
    return string.replace(__LEFTSPACES__, "");
  } :
  function triml(string) {
    return string.trimLeft();
  };
exports.triml = triml;

var trimr = isNil("".trimRight) ?
  function(string) {
    return string.replace(__RIGHTSPACES__, "");
  } :
  function trimr(string) {
    return string.trimRight();
  };
exports.trimr = trimr;

var trim = isNil("".trim) ?
  function(string) {
    return string.replace(__LEFTSPACES__).replace(__RIGHTSPACES__);
  } :
  function trim(string) {
    return string.trim();
  };
exports.trim = trim;

var isBlank = function isBlank(string) {
  return (isNil(string)) || (isEmpty(string)) || (reMatches(__SPACES__, string));
};
exports.isBlank = isBlank
},{"./runtime":"YbrU3i","./sequence":"gdziIz"}],"wisp/analyzer":[function(require,module,exports){
module.exports=require('KkLEpA');
},{}],"KkLEpA":[function(require,module,exports){
var _ns_ = "wisp.analyzer";
module.namespace = _ns_;
var symbol = (require("./ast")).symbol;
var isSymbol = (require("./ast")).isSymbol;
var isKeyword = (require("./ast")).isKeyword;
var meta = (require("./ast")).meta;
var name = (require("./ast")).name;
var namespace = (require("./ast")).namespace;
var isSeq = (require("./sequence")).isSeq;
var seq = (require("./sequence")).seq;
var conj = (require("./sequence")).conj;
var map = (require("./sequence")).map;
var isEvery = (require("./sequence")).isEvery;
var interleave = (require("./sequence")).interleave;
var isEmpty = (require("./sequence")).isEmpty;
var list_ = (require("./sequence")).list_;
var list = (require("./sequence")).list;
var first = (require("./sequence")).first;
var last = (require("./sequence")).last;
var rest = (require("./sequence")).rest;
var count = (require("./sequence")).count;
var isVector = (require("./runtime")).isVector;
var isDictionary = (require("./runtime")).isDictionary;
var isString = (require("./runtime")).isString;
var keys = (require("./runtime")).keys;
var vals = (require("./runtime")).vals;
var isEqual = (require("./runtime")).isEqual;
var isNil = (require("./runtime")).isNil;
var merge = (require("./runtime")).merge;
var split = (require("./string")).split;;

var getIn = function getIn(dictionary, keys, notFound) {
  return (function loop(target, sentinel, keys) {
    var recur = loop;
    while (recur === loop) {
      recur = isEmpty(keys) ?
      target :
      (function() {
        var result = (((target || 0) || 0)[first(keys)]) || sentinel;
        return result === sentinel ?
          notFound :
          (target = result, sentinel = sentinel, keys = rest(keys), loop);
      })();
    };
    return recur;
  })(dictionary, {}, keys);
};
exports.getIn = getIn;

var emptyEnv = function emptyEnv(ns) {
  "Utility function that creates empty namespaces";
  return {
    "ns": ns,
    "namespaces": {},
    "context": "statement",
    "locals": {}
  };
};
exports.emptyEnv = emptyEnv;

var localBinding = function localBinding(env, form) {
  return (((env || 0)["locals"]) || 0)[form];
};

var isCoreName = function isCoreName(env, sym) {
  return false;
};
exports.isCoreName = isCoreName;

var resolveNsAlias = function resolveNsAlias(env, name) {
  var sym = symbol(name);
  return (((((((env || 0)["ns"]) || 0)["requires"]) || 0) || 0)[sym]) || sym;
};
exports.resolveNsAlias = resolveNsAlias;

var resolveExistingVar = function resolveExistingVar(env, form) {
  return isEqual(namespace(form), "js") ?
    {
      "name": form,
      "ns": symbol(void(0), "js")
    } :
    (function() {
      var namespaces = (env || 0)["namespaces"];
      var s = "" + form;
      var binding = localBinding(env, form);
      return binding ?
        binding :
      namespace(form) ?
        (function() {
          var ns = namespace(form);
          var ns = isEqual("clojure.core", ns) ?
            "cljs.core" :
            ns;
          var fullNs = resolveNsAlias(env, ns);
          var id = symbol(name(form));
          return merge(getIn(namespaces, [fullNs, "defs", id]), {
            "name": symbol("" + fullNs, "" + (name(form))),
            "ns": fullNs
          });
        })() :
      "else" ?
        (function() {
          var fullNs = isCoreName(env, form) ?
            symbol(void(0), "cljs.core") :
            (((env || 0)["ns"]) || 0)["name"];
          return merge(getIn(namespaces, [fullNs, "defs", form]), {
            "name": symbol("" + fullNs, "" + form),
            "ns": fullNs
          });
        })() :
        void(0);
    })();
};
exports.resolveExistingVar = resolveExistingVar;

var isSpecial = function isSpecial(op) {
  return (isEqual(op, symbol(void(0), "if"))) || (isEqual(op, symbol(void(0), "def"))) || (isEqual(op, symbol(void(0), "fn*"))) || (isEqual(op, symbol(void(0), "do"))) || (isEqual(op, symbol(void(0), "let*"))) || (isEqual(op, symbol(void(0), "loop*"))) || (isEqual(op, symbol(void(0), "letfn*"))) || (isEqual(op, symbol(void(0), "throw"))) || (isEqual(op, symbol(void(0), "try*"))) || (isEqual(op, symbol(void(0), "recur"))) || (isEqual(op, symbol(void(0), "new"))) || (isEqual(op, symbol(void(0), "set!"))) || (isEqual(op, symbol(void(0), "ns"))) || (isEqual(op, symbol(void(0), "deftype*"))) || (isEqual(op, symbol(void(0), "defrecord*"))) || (isEqual(op, symbol(void(0), "."))) || (isEqual(op, symbol(void(0), "js*"))) || (isEqual(op, symbol(void(0), "&"))) || (isEqual(op, symbol(void(0), "quote")));
};
exports.isSpecial = isSpecial;

var analyzeSeq = function analyzeSeq(env, form, name) {
  var env = conj(env, {
    "line": (((meta(form)) || 0)["line"]) || ((env || 0)["line"])
  });
  return (function() {
    var op = first(form);
    (function() {
      (!(typeof(__verbose__) === "undefined")) && __verbose__ ?
        console.log("Assert:", "(not (nil? op))") :
        void(0);
      return !(!(isNil(op))) ?
        (function() { throw new Error("" + "Assert failed: " + "Can't call nil" + "\n\nAssertion:\n\n" + "(not (nil? op))" + "\n\nActual:\n\n" + (isNil(op)) + "\n--------------\n", void(0)); })() :
        void(0);
    })();
    return (function() {
      var expansion = macroexpand(form);
      return isSpecial(op) ?
        parse(op, env, form, name) :
        parseInvoke(env, form);
    })();
  })();
};
exports.analyzeSeq = analyzeSeq;

var isMethodCall = function isMethodCall(form) {
  return isEqual(first(form), ".");
};

var isInstantiation = function isInstantiation(form) {
  return isEqual(last(form), ".");
};

var getNsExclude = function getNsExclude(env, sym) {
  return (((((env || 0)["ns"]) || 0)["excludes"]) || 0)[sym];
};

var getNsName = function getNsName(env) {
  return (((env || 0)["ns"]) || 0)["name"];
};

var getMacroUses = function getMacroUses(env, sym) {
  return (((((env || 0)["ns"]) || 0)["uses-macros"]) || 0)[sym];
};

var isMacroSym = function isMacroSym(env, sym) {
  var namespaces = (env || 0)["namespaces"];
  var local = localBinding(env, sym);
  var nsId = getNsName(env);
  return !(local || (((getNsExclude(env, sym)) || (getIn(namespaces, [nsId, "excludes", sym]))) && (!((getMacroUses(env, sym)) || (getIn(namespaces, [nsId, "uses-macros", sym]))))));
};
exports.isMacroSym = isMacroSym;

var getExpander = function getExpander(sym, env) {
  var op = (isMacroSym(env, sym)) && (resolveExistingVar(emptyEnv(), sym));
  return op && ((op || 0)["macro"]) ?
    eval("" + (munge((op || 0)["name"]))) :
    void(0);
};
exports.getExpander = getExpander;

var isSugar = function isSugar(op) {
  var id = "" + op;
  return (first(id) === ".") || (last(id) === ".");
};
exports.isSugar = isSugar;

var isMacro = function isMacro(op) {
  return false;
};
exports.isMacro = isMacro;

var desugar1 = function desugar1(form) {
  var id = "" + form;
  var params = rest(form);
  var metadata = meta(form);
  return isMethodCall(id) ?
    withMeta(list_(symbol(void(0), "."), first(param), symbol(subs(id, 1)), rest(params)), metadata) :
  isInstantiation(id) ?
    withMeta(list_(symbol(void(0), "new"), symbol(subs(opname, 0, dec(count(opname)))), params), metadata) :
  "else" ?
    form :
    void(0);
};
exports.desugar1 = desugar1;

var macroexpand1 = function macroexpand1(form) {
  var op = first(form);
  return isSpecial(op) ?
    form :
  isSugar(op) ?
    desugar1(form) :
  isMacro(op) ?
    getExpander(op).apply(getExpander(op), form) :
  "else" ?
    form :
    void(0);
};
exports.macroexpand1 = macroexpand1;

var macroexpand = function macroexpand(form) {
  return (function loop(form, expansion) {
    var recur = loop;
    while (recur === loop) {
      recur = form === expansion ?
      form :
      (form = expansion, expansion = macroexpand1(expansion), loop);
    };
    return recur;
  })(form, macroexpand1(form));
};
exports.macroexpand = macroexpand;

var analyzeSymbol = function analyzeSymbol(env, symbol) {
  var result = {
    "env": env,
    "form": symbol
  };
  var locals = (env || 0)["locals"];
  var local = (locals || 0)[symbol];
  return conj(result, {
    "op": "var",
    "info": local ?
      local :
      resolveExistingVar(env, symbol)
  });
};
exports.analyzeSymbol = analyzeSymbol;

var _readerNsName_ = symbol("clojure.reader", "reader");

var analyzeKeyword = function analyzeKeyword(env, form) {
  return {
    "op": "constant",
    "env": env,
    "form": isEqual(namespace(form), name(_readerNsName_)) ?
      keyword(name((((env || 0)["ns"]) || 0)["name"]), name(form)) :
      form
  };
};
exports.analyzeKeyword = analyzeKeyword;

var isSimpleKey = function isSimpleKey(x) {
  return (isString(x)) || (isKeyword(x));
};
exports.isSimpleKey = isSimpleKey;

var analyzeDictionary = function analyzeDictionary(env, form, name) {
  var exprEnv = conj(env, {
    "context": "expr"
  });
  var names = keys(form);
  var isSimpleKeys = isEvery(isSimpleKey, names);
  var ks = disallowingRecur(vec(map(function($1) {
    return analyze(exprEnv, $1, name);
  }, names)));
  var vs = disallowingRecur(vec(map(function($1) {
    return analyze(exprEnv, $1, name);
  }, vals(form))));
  return analyzeWrapMeta({
    "op": "map",
    "env": env,
    "form": form,
    "keys": ks,
    "vals": vs,
    "simple-keys?": isSimpleKeys,
    "children": vec(interleave(ks, vs))
  }, name);
};
exports.analyzeDictionary = analyzeDictionary;

var analyzeVector = function analyzeVector(env, form, name) {
  var exprEnv = conj(env, {
    "context": "expr"
  });
  var items = disallowingRecur(vec(map(function($1) {
    return analyze(exprEnv, $1, name);
  }, form)));
  return analyzeWrapMeta({
    "op": "vector",
    "env": env,
    "form": form,
    "items": items,
    "children": items
  }, name);
};
exports.analyzeVector = analyzeVector;

var analyzeWrapMeta = function analyzeWrapMeta(expr, name) {
  var form = (expr || 0)["form"];
  var metadata = meta(form);
  var env = (expr || 0)["env"];
  var expr = metadata ?
    assocIn(expr, ["env", "context"], "expr") :
    void(0);
  var metaExpr = metadata ?
    analyzeMap(env, metadata, name) :
    void(0);
  return metadata ?
    {
      "op": "meta",
      "env": env,
      "form": form,
      "meta": metaExpr,
      "expr": expr,
      "children": [metaExpr, expr]
    } :
    expr;
};
exports.analyzeWrapMeta = analyzeWrapMeta;

var analyzeMap = function analyzeMap(env, form, name) {
  var exprEnv = conj(env, {
    "context": "expr"
  });
  var isSimpleKeys = isEvery(function($1) {
    return (isString($1)) || (isKeyword($1));
  }, keys(form));
  var ks = disallowingRecur(vec(map(function($1) {
    return analyze(exprEnv, $1, name);
  }, keys(form))));
  var vs = disallowingRecur(vec(map(function($1) {
    return analyze(exprEnv, $1, name);
  }, vals(form))));
  return analyzeWrapMeta({
    "op": "map",
    "env": env,
    "form": form,
    "keys": ks,
    "vals": vs,
    "simple-keys?": isSimpleKeys,
    "children": vec(interleave(ks, vs))
  }, name);
};
exports.analyzeMap = analyzeMap;

var analyze = function analyze(env, form, name) {
  switch (arguments.length) {
    case 2:
      return analyze(env, form, void(0));
    case 3:
      return isSymbol(form) ?
        analyzeSymbol(env, form) :
      isKeyword(form) ?
        analyzeKeyword(env, form) :
      (isSeq(form)) && (!(isEmpty(form))) ?
        analyzeSeq(env, form, name) :
      isDictionary(form) ?
        analyzeDictionary(env, form, name) :
      isVector(form) ?
        analyzeVector(env, form, name) :
      "else" ?
        {
          "op": "constant",
          "env": env,
          "form": form
        } :
        void(0);

    default:
      (function() { throw Error("Invalid arity"); })()
  };
  return void(0);
};
exports.analyze = analyze

},{"./ast":"nw8hg9","./sequence":"gdziIz","./runtime":"YbrU3i","./string":"BI22ma"}],2:[function(require,module,exports){
(function(global){var _ns_ = {
  "id": "interactivate-wisp.main"
};
var interactivate = require("interactivate");;
var hashare = require("codemirror-hashare");;
var persist = require("codemirror-persist");;
var interactivateWisp_host = require("./host");
var startHost = interactivateWisp_host.startHost;;;

interactivate(CodeMirror);

hashare(CodeMirror);

persist(CodeMirror);

startHost();

var editor = CodeMirror(document.body, {
  "persist": true,
  "matchBrackets": true,
  "electricChars": true,
  "styleActiveLine": true,
  "autofocus": true,
  "theme": "solarized dark",
  "mode": "clojure",
  "value": (document.getElementById("intro")).textContent,
  "interactivate": true,
  "interactiveSeparator": /^;; =>[^\n]*$/m,
  "extraKeys": {
    "Tab": "indentSelection"
  }
});
exports.editor = editor;

global.editor = editor
})(window)
},{"./host":3,"codemirror-hashare":4,"codemirror-persist":5,"interactivate":6}],4:[function(require,module,exports){
"use strict";

var save = "save@hashare"
var load = "load@hashare"

function plugin(CodeMirror) {
  CodeMirror.defineOption("hashare", false, function(editor, value) {
    /**
    Takes editor and enables persists changes to the buffer across the sessions.
    **/
    if (value) {
      var saving = false
      editor[save] = function(event) {
        location.hash = encodeURIComponent(editor.getValue())
      }
      editor[load] = function() {
        var value = decodeURIComponent(window.location.hash.substr(1))
        if (value && value !== editor.getValue()) editor.setValue(value)
      }
      window.addEventListener("blur", editor[save], false)
      window.addEventListener("hashchange", editor[load], false)

      editor[load]()
    } else {
      window.removeEventListener("blur", editor[save], false)
      window.removeEventListener("blur", editor[load], false)
    }
  })
}

module.exports = plugin

},{}],5:[function(require,module,exports){
"use strict";

function onChange(editor) {
  localStorage[window.location.href.split("#")[0]] = editor.getValue()
}

function setup(editor, value) {
  /**
  Takes editor and enables persists changes to the buffer across the sessions.
  **/
  if (value) {
    var address = window.location.href.split("#")[0]
    var persisted = localStorage[address] || editor.getValue()
    editor.setValue(persisted)
    editor.on("change", onChange)
  } else {
    editor.off("change", onChange)
  }
}

function plugin(CodeMirror) {
  CodeMirror.defineOption("persist", false, setup)
}

module.exports = plugin

},{}],7:[function(require,module,exports){
var events = require('events');

exports.isArray = isArray;
exports.isDate = function(obj){return Object.prototype.toString.call(obj) === '[object Date]'};
exports.isRegExp = function(obj){return Object.prototype.toString.call(obj) === '[object RegExp]'};


exports.print = function () {};
exports.puts = function () {};
exports.debug = function() {};

exports.inspect = function(obj, showHidden, depth, colors) {
  var seen = [];

  var stylize = function(str, styleType) {
    // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
    var styles =
        { 'bold' : [1, 22],
          'italic' : [3, 23],
          'underline' : [4, 24],
          'inverse' : [7, 27],
          'white' : [37, 39],
          'grey' : [90, 39],
          'black' : [30, 39],
          'blue' : [34, 39],
          'cyan' : [36, 39],
          'green' : [32, 39],
          'magenta' : [35, 39],
          'red' : [31, 39],
          'yellow' : [33, 39] };

    var style =
        { 'special': 'cyan',
          'number': 'blue',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'date': 'magenta',
          // "name": intentionally not styling
          'regexp': 'red' }[styleType];

    if (style) {
      return '\033[' + styles[style][0] + 'm' + str +
             '\033[' + styles[style][1] + 'm';
    } else {
      return str;
    }
  };
  if (! colors) {
    stylize = function(str, styleType) { return str; };
  }

  function format(value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (value && typeof value.inspect === 'function' &&
        // Filter out the util module, it's inspect function is special
        value !== exports &&
        // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
      return value.inspect(recurseTimes);
    }

    // Primitive types cannot have properties
    switch (typeof value) {
      case 'undefined':
        return stylize('undefined', 'undefined');

      case 'string':
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                                 .replace(/'/g, "\\'")
                                                 .replace(/\\"/g, '"') + '\'';
        return stylize(simple, 'string');

      case 'number':
        return stylize('' + value, 'number');

      case 'boolean':
        return stylize('' + value, 'boolean');
    }
    // For some reason typeof null is "object", so special case here.
    if (value === null) {
      return stylize('null', 'null');
    }

    // Look up the keys of the object.
    var visible_keys = Object_keys(value);
    var keys = showHidden ? Object_getOwnPropertyNames(value) : visible_keys;

    // Functions without properties can be shortcutted.
    if (typeof value === 'function' && keys.length === 0) {
      if (isRegExp(value)) {
        return stylize('' + value, 'regexp');
      } else {
        var name = value.name ? ': ' + value.name : '';
        return stylize('[Function' + name + ']', 'special');
      }
    }

    // Dates without properties can be shortcutted
    if (isDate(value) && keys.length === 0) {
      return stylize(value.toUTCString(), 'date');
    }

    var base, type, braces;
    // Determine the object type
    if (isArray(value)) {
      type = 'Array';
      braces = ['[', ']'];
    } else {
      type = 'Object';
      braces = ['{', '}'];
    }

    // Make functions say that they are functions
    if (typeof value === 'function') {
      var n = value.name ? ': ' + value.name : '';
      base = (isRegExp(value)) ? ' ' + value : ' [Function' + n + ']';
    } else {
      base = '';
    }

    // Make dates with properties first say the date
    if (isDate(value)) {
      base = ' ' + value.toUTCString();
    }

    if (keys.length === 0) {
      return braces[0] + base + braces[1];
    }

    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return stylize('' + value, 'regexp');
      } else {
        return stylize('[Object]', 'special');
      }
    }

    seen.push(value);

    var output = keys.map(function(key) {
      var name, str;
      if (value.__lookupGetter__) {
        if (value.__lookupGetter__(key)) {
          if (value.__lookupSetter__(key)) {
            str = stylize('[Getter/Setter]', 'special');
          } else {
            str = stylize('[Getter]', 'special');
          }
        } else {
          if (value.__lookupSetter__(key)) {
            str = stylize('[Setter]', 'special');
          }
        }
      }
      if (visible_keys.indexOf(key) < 0) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (seen.indexOf(value[key]) < 0) {
          if (recurseTimes === null) {
            str = format(value[key]);
          } else {
            str = format(value[key], recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (isArray(value)) {
              str = str.split('\n').map(function(line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = stylize('[Circular]', 'special');
        }
      }
      if (typeof name === 'undefined') {
        if (type === 'Array' && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'")
                     .replace(/\\"/g, '"')
                     .replace(/(^"|"$)/g, "'");
          name = stylize(name, 'string');
        }
      }

      return name + ': ' + str;
    });

    seen.pop();

    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
      numLinesEst++;
      if (cur.indexOf('\n') >= 0) numLinesEst++;
      return prev + cur.length + 1;
    }, 0);

    if (length > 50) {
      output = braces[0] +
               (base === '' ? '' : base + '\n ') +
               ' ' +
               output.join(',\n  ') +
               ' ' +
               braces[1];

    } else {
      output = braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }

    return output;
  }
  return format(obj, (typeof depth === 'undefined' ? 2 : depth));
};


function isArray(ar) {
  return ar instanceof Array ||
         Array.isArray(ar) ||
         (ar && ar !== Object.prototype && isArray(ar.__proto__));
}


function isRegExp(re) {
  return re instanceof RegExp ||
    (typeof re === 'object' && Object.prototype.toString.call(re) === '[object RegExp]');
}


function isDate(d) {
  if (d instanceof Date) return true;
  if (typeof d !== 'object') return false;
  var properties = Date.prototype && Object_getOwnPropertyNames(Date.prototype);
  var proto = d.__proto__ && Object_getOwnPropertyNames(d.__proto__);
  return JSON.stringify(proto) === JSON.stringify(properties);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}

exports.log = function (msg) {};

exports.pump = null;

var Object_keys = Object.keys || function (obj) {
    var res = [];
    for (var key in obj) res.push(key);
    return res;
};

var Object_getOwnPropertyNames = Object.getOwnPropertyNames || function (obj) {
    var res = [];
    for (var key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) res.push(key);
    }
    return res;
};

var Object_create = Object.create || function (prototype, properties) {
    // from es5-shim
    var object;
    if (prototype === null) {
        object = { '__proto__' : null };
    }
    else {
        if (typeof prototype !== 'object') {
            throw new TypeError(
                'typeof prototype[' + (typeof prototype) + '] != \'object\''
            );
        }
        var Type = function () {};
        Type.prototype = prototype;
        object = new Type();
        object.__proto__ = prototype;
    }
    if (typeof properties !== 'undefined' && Object.defineProperties) {
        Object.defineProperties(object, properties);
    }
    return object;
};

exports.inherits = function(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object_create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (typeof f !== 'string') {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(exports.inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j': return JSON.stringify(args[i++]);
      default:
        return x;
    }
  });
  for(var x = args[i]; i < len; x = args[++i]){
    if (x === null || typeof x !== 'object') {
      str += ' ' + x;
    } else {
      str += ' ' + exports.inspect(x);
    }
  }
  return str;
};

},{"events":8}],3:[function(require,module,exports){
var _ns_ = {
  "id": "interactivate-wisp.host"
};
var render = require("interactivate/render");;
var wisp_reader = require("wisp/reader");
var read_ = wisp_reader.read_;;
var wisp_compiler = require("wisp/compiler");
var compile_ = wisp_compiler.compile_;;
var wisp_sequence = require("wisp/sequence");
var first = wisp_sequence.first;
var rest = wisp_sequence.rest;
var list = wisp_sequence.list;;
var wisp_ast = require("wisp/ast");
var symbol = wisp_ast.symbol;
var prStr = wisp_ast.prStr;;
var wisp_runtime = require("wisp/runtime");
var subs = wisp_runtime.subs;;
var util = require("util");
var inspect = util.inspect;;;

var __out__ = function __out__() {
  return void(0);
};
exports.__out__ = __out__;

window.exports = {};

window.module = {
  "exports": window.exports
};

window.list = list;

window.symbol = symbol;

window.Out = __out__;

window.__printCompiled__ = false;

window.__printRead__ = false;

var EvaluationResult = function EvaluationResult(output) {
  this.value = output;
  return this;
};
exports.EvaluationResult = EvaluationResult;

render.define(EvaluationResult, function(result) {
  var output = result.value;
  var view = document.createElement("pre");
  view.innerHTML = ((output || 0)["error"]) || ("" + (__printRead__ ?
    "" + "<h1>Read</h1>" + "<div>" + (inspect((output || 0)["forms"])) + "</div>" :
    "") + (__printCompiled__ ?
    "" + "<h3>Compiled JS</h3>" + "<div>" + ((output || 0)["js-code"]) + "</div>" :
    "") + "<h3>Eval result</h3>" + "<div>" + ((output || 0)["print"]) + "</div>");
  return view;
});

var send = function send(packet) {
  var event = document.createEvent("CustomEvent");
  event.initCustomEvent("client", false, true, packet);
  return window.dispatchEvent(event);
};
exports.send = send;

var startHost = function startHost() {
  return window.addEventListener("server", handle, false);
};
exports.startHost = startHost;

var handle = function handle(packet) {
  var address = (((packet || 0)["detail"]) || 0)["to"];
  var input = (((packet || 0)["detail"]) || 0)["source"];
  var output = evaluate(input);
  var result = new EvaluationResult(output);
  (__out__ || 0)[address] = result;
  return send({
    "from": address,
    "message": result
  });
};
exports.handle = handle;

var evaluate = function evaluate(input) {
  return (function() {
  try {
    return (function() {
      var forms = read_(input);
      var jsCode = compile_(forms);
      var prefixCode = "var" === subs(jsCode, 0, 3) ?
        "" :
        "_ = ";
      var jsNormalized = "" + "try { " + prefixCode + jsCode + " } catch(e) { e }";
      var result = window.eval(jsNormalized);
      return {
        "input": input,
        "forms": forms,
        "js-code": jsCode,
        "result": result,
        "print": prStr(result)
      };
    })();
  } catch (error) {
    return {
      "input": input,
      "error": error
    };
  }})();
};
exports.evaluate = evaluate
},{"wisp/reader":"yCUXAg","wisp/compiler":"baogts","wisp/sequence":"gdziIz","wisp/ast":"nw8hg9","wisp/runtime":"YbrU3i","util":7,"interactivate/render":9}],1:[function(require,module,exports){
var _ns_ = {
  "id": "wisp.backend.javascript.writer",
  "doc": "Compiler backend for for writing JS output"
};
var wisp_ast = require("./../../ast");
var name = wisp_ast.name;
var namespace = wisp_ast.namespace;
var symbol = wisp_ast.symbol;
var isSymbol = wisp_ast.isSymbol;
var isKeyword = wisp_ast.isKeyword;;
var wisp_sequence = require("./../../sequence");
var list = wisp_sequence.list;
var first = wisp_sequence.first;
var rest = wisp_sequence.rest;
var isList = wisp_sequence.isList;
var vec = wisp_sequence.vec;
var map = wisp_sequence.map;
var count = wisp_sequence.count;
var last = wisp_sequence.last;
var reduce = wisp_sequence.reduce;
var isEmpty = wisp_sequence.isEmpty;;
var wisp_runtime = require("./../../runtime");
var isTrue = wisp_runtime.isTrue;
var isNil = wisp_runtime.isNil;
var isString = wisp_runtime.isString;
var isNumber = wisp_runtime.isNumber;
var isVector = wisp_runtime.isVector;
var isDictionary = wisp_runtime.isDictionary;
var isBoolean = wisp_runtime.isBoolean;
var isRePattern = wisp_runtime.isRePattern;
var reFind = wisp_runtime.reFind;
var dec = wisp_runtime.dec;
var subs = wisp_runtime.subs;;
var wisp_string = require("./../../string");
var replace = wisp_string.replace;
var join = wisp_string.join;
var split = wisp_string.split;
var upperCase = wisp_string.upperCase;;;

var writeReference = function writeReference(form) {
  "Translates references from clojure convention to JS:\n\n  **macros**      __macros__\n  list->vector    listToVector\n  set!            set\n  foo_bar         foo_bar\n  number?         isNumber\n  create-server   createServer";
  return (function() {
    var id = name(form);
    id = id === "*" ?
      "multiply" :
    id === "/" ?
      "divide" :
    id === "+" ?
      "sum" :
    id === "-" ?
      "subtract" :
    id === "=" ?
      "equal?" :
    id === "==" ?
      "strict-equal?" :
    id === "<=" ?
      "not-greater-than" :
    id === ">=" ?
      "not-less-than" :
    id === ">" ?
      "greater-than" :
    id === "<" ?
      "less-than" :
    "else" ?
      id :
      void(0);
    id = join("_", split(id, "*"));
    id = join("-to-", split(id, "->"));
    id = join(split(id, "!"));
    id = join("$", split(id, "%"));
    id = join("-plus-", split(id, "+"));
    id = join("-and-", split(id, "&"));
    id = last(id) === "?" ?
      "" + "is-" + (subs(id, 0, dec(count(id)))) :
      id;
    id = reduce(function(result, key) {
      return "" + result + ((!(isEmpty(result))) && (!(isEmpty(key))) ?
        "" + (upperCase((key || 0)[0])) + (subs(key, 1)) :
        key);
    }, "", split(id, "-"));
    return id;
  })();
};
exports.writeReference = writeReference;

var writeKeywordReference = function writeKeywordReference(form) {
  return "" + "\"" + (name(form)) + "\"";
};
exports.writeKeywordReference = writeKeywordReference;

var writeKeyword = function writeKeyword(form) {
  return "" + "\"" + "꞉" + (name(form)) + "\"";
};
exports.writeKeyword = writeKeyword;

var writeSymbol = function writeSymbol(form) {
  return write(list(symbol(void(0), "symbol"), namespace(form), name(form)));
};
exports.writeSymbol = writeSymbol;

var writeNil = function writeNil(form) {
  return "void(0)";
};
exports.writeNil = writeNil;

var writeNumber = function writeNumber(form) {
  return form;
};
exports.writeNumber = writeNumber;

var writeBoolean = function writeBoolean(form) {
  return isTrue(form) ?
    "true" :
    "false";
};
exports.writeBoolean = writeBoolean;

var writeString = function writeString(form) {
  form = replace(form, RegExp("\\\\", "g"), "\\\\");
  form = replace(form, RegExp("\n", "g"), "\\n");
  form = replace(form, RegExp("\r", "g"), "\\r");
  form = replace(form, RegExp("\t", "g"), "\\t");
  form = replace(form, RegExp("\"", "g"), "\\\"");
  return "" + "\"" + form + "\"";
};
exports.writeString = writeString;

var writeTemplate = function writeTemplate() {
  var form = Array.prototype.slice.call(arguments, 0);
  return (function() {
    var indentPattern = /\n *$/;
    var lineBreakPatter = RegExp("\n", "g");
    var getIndentation = function(code) {
      return (reFind(indentPattern, code)) || "\n";
    };
    return (function loop(code, parts, values) {
      var recur = loop;
      while (recur === loop) {
        recur = count(parts) > 1 ?
        (code = "" + code + (first(parts)) + (replace("" + "" + (first(values)), lineBreakPatter, getIndentation(first(parts)))), parts = rest(parts), values = rest(values), loop) :
        "" + code + (first(parts));
      };
      return recur;
    })("", split(first(form), "~{}"), rest(form));
  })();
};
exports.writeTemplate = writeTemplate;

var writeGroup = function writeGroup() {
  var forms = Array.prototype.slice.call(arguments, 0);
  return join(", ", forms);
};
exports.writeGroup = writeGroup;

var writeInvoke = function writeInvoke(callee) {
  var params = Array.prototype.slice.call(arguments, 1);
  return writeTemplate("~{}(~{})", callee, writeGroup.apply(writeGroup, params));
};
exports.writeInvoke = writeInvoke;

var writeError = function writeError(message) {
  return function() {
    return (function() { throw Error(message); })();
  };
};
exports.writeError = writeError;

var writeVector = writeError("Vectors are not supported");
exports.writeVector = writeVector;

var writeDictionary = writeError("Dictionaries are not supported");
exports.writeDictionary = writeDictionary;

var writePattern = writeError("Regular expressions are not supported");
exports.writePattern = writePattern;

var compileComment = function compileComment(form) {
  return compileTemplate(list("//~{}\n", first(form)));
};
exports.compileComment = compileComment;

var writeDef = function writeDef(form) {
  var id = first(form);
  var isExport = ((((meta(form)) || {}) || 0)["top"]) && (!((((meta(id)) || {}) || 0)["private"]));
  var attribute = symbol(namespace(id), "" + "-" + (name(id)));
  return isExport ?
    compileTemplate(list("var ~{};\n~{}", compile(cons(symbol(void(0), "set!"), form)), compile(list(symbol(void(0), "set!"), list(symbol(void(0), "."), symbol(void(0), "exports"), attribute), id)))) :
    compileTemplate(list("var ~{}", compile(cons(symbol(void(0), "set!"), form))));
};
exports.writeDef = writeDef;

var write = function write(form) {
  return isNil(form) ?
    writeNil(form) :
  isSymbol(form) ?
    writeReference(form) :
  isKeyword(form) ?
    writeKeywordReference(form) :
  isString(form) ?
    writeString(form) :
  isNumber(form) ?
    writeNumber(form) :
  isBoolean(form) ?
    writeBoolean(form) :
  isRePattern(form) ?
    writePattern(form) :
  isVector(form) ?
    writeVector(form) :
  isDictionary(form) ?
    writeDictionary() :
  isList(form) ?
    writeInvoke.apply(writeInvoke, map(write, vec(form))) :
  "else" ?
    writeError("Unsupported form") :
    void(0);
};
exports.write = write
},{"./../../ast":"nw8hg9","./../../sequence":"gdziIz","./../../runtime":"YbrU3i","./../../string":"BI22ma"}],10:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],8:[function(require,module,exports){
(function(process){if (!process.EventEmitter) process.EventEmitter = function () {};

var EventEmitter = exports.EventEmitter = process.EventEmitter;
var isArray = typeof Array.isArray === 'function'
    ? Array.isArray
    : function (xs) {
        return Object.prototype.toString.call(xs) === '[object Array]'
    }
;
function indexOf (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i = 0; i < xs.length; i++) {
        if (x === xs[i]) return i;
    }
    return -1;
}

// By default EventEmitters will print a warning if more than
// 10 listeners are added to it. This is a useful default which
// helps finding memory leaks.
//
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
var defaultMaxListeners = 10;
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!this._events) this._events = {};
  this._events.maxListeners = n;
};


EventEmitter.prototype.emit = function(type) {
  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events || !this._events.error ||
        (isArray(this._events.error) && !this._events.error.length))
    {
      if (arguments[1] instanceof Error) {
        throw arguments[1]; // Unhandled 'error' event
      } else {
        throw new Error("Uncaught, unspecified 'error' event.");
      }
      return false;
    }
  }

  if (!this._events) return false;
  var handler = this._events[type];
  if (!handler) return false;

  if (typeof handler == 'function') {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        var args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
    return true;

  } else if (isArray(handler)) {
    var args = Array.prototype.slice.call(arguments, 1);

    var listeners = handler.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i].apply(this, args);
    }
    return true;

  } else {
    return false;
  }
};

// EventEmitter is defined in src/node_events.cc
// EventEmitter.prototype.emit() is also defined there.
EventEmitter.prototype.addListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('addListener only takes instances of Function');
  }

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type == "newListeners"! Before
  // adding it to the listeners, first emit "newListeners".
  this.emit('newListener', type, listener);

  if (!this._events[type]) {
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  } else if (isArray(this._events[type])) {

    // Check for listener leak
    if (!this._events[type].warned) {
      var m;
      if (this._events.maxListeners !== undefined) {
        m = this._events.maxListeners;
      } else {
        m = defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' +
                      'leak detected. %d listeners added. ' +
                      'Use emitter.setMaxListeners() to increase limit.',
                      this._events[type].length);
        console.trace();
      }
    }

    // If we've already got an array, just append.
    this._events[type].push(listener);
  } else {
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  var self = this;
  self.on(type, function g() {
    self.removeListener(type, g);
    listener.apply(this, arguments);
  });

  return this;
};

EventEmitter.prototype.removeListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('removeListener only takes instances of Function');
  }

  // does not use listeners(), so no side effect of creating _events[type]
  if (!this._events || !this._events[type]) return this;

  var list = this._events[type];

  if (isArray(list)) {
    var i = indexOf(list, listener);
    if (i < 0) return this;
    list.splice(i, 1);
    if (list.length == 0)
      delete this._events[type];
  } else if (this._events[type] === listener) {
    delete this._events[type];
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  if (arguments.length === 0) {
    this._events = {};
    return this;
  }

  // does not use listeners(), so no side effect of creating _events[type]
  if (type && this._events && this._events[type]) this._events[type] = null;
  return this;
};

EventEmitter.prototype.listeners = function(type) {
  if (!this._events) this._events = {};
  if (!this._events[type]) this._events[type] = [];
  if (!isArray(this._events[type])) {
    this._events[type] = [this._events[type]];
  }
  return this._events[type];
};

})(require("__browserify_process"))
},{"__browserify_process":10}],6:[function(require,module,exports){
"use strict";

var diff = require("diffpatcher/diff")
var patch = require("diffpatcher/patch")
var output = require("./output")
var makeOutput = output.makeOutput
var writeOutput = output.write


var Out = "out@interactivate"
var In = "in@interactivate"
var Reciever = "receiver@interactivate"

function makeOptionGetter(name) {
  return function getOption(editor) {
    return editor.getOption(name)
  }
}

var getRenderRate = makeOptionGetter("interactiveSpeed")
var getSectionSeparator = makeOptionGetter("interactiveSeparator")


var slicer = Array.prototype.slice
function throttle(f, delay) {
  /**
  Creates function that calls throttles calls to given `f` such that,
  it's only called if no further calls are made with in the time
  frame (in miliseconds) returned by given `delay.apply(this, arguments)`
  function.
  **/
  var id = 0
  return function throttled() {
    clearTimeout(id, throttled)
    var ms = delay.apply(this, arguments) || 0
    id = setTimeout.apply(this, [f, ms].concat(slicer.call(arguments)))
  }
}



function calculate(editor) {
  var state = editor[In]
  var input = editor.getValue()
  var separator = getSectionSeparator(editor)
  var sections = input.split(separator)
  var activeLine = editor.getCursor().line

  sections.pop() // last section does not has execution marker so skip it.

  var change = Object.keys(sections).reduce(function(result, index) {
    var input = sections[index]
    var line = result.line + input.split("\n").length - 1
    result.line = line
    var delta = {input: input.trim(), line: line, visible: activeLine !== line}
    result.state[index] = state[index] ? patch(state[index], delta) :
                          delta

    return result
  }, { line: 0, state: {} })

  return diff(editor[In], change.state)
}


function send(packet) {
  var event = document.createEvent("CustomEvent")
  event.initCustomEvent("server", false, true, packet)
  window.dispatchEvent(event)
}


function recieve(editor, event) {
  var packet = event.detail
  var delta = {}
  delta[packet.from] = {pending: null,
                        result: packet.message}
  write(editor, delta)
}

function print(editor) {
  if (!editor.getOption("interactivate")) throw editor.constructor.Pass
  editor.operation(function() {
    var cursor = editor.getCursor()
    editor.replaceSelection("\n// =>\n")
    editor.setCursor({ line: cursor.line + 2, ch: 0 })
  })
}


function getMarkerFor(editor, view) {
  var markers = editor.getAllMarks()
  var count = markers.length
  while (count) {
    count = count - 1
    var marker = markers[count]
    if (marker.replacedWith === view) return marker
  }
  return null
}


function write(editor, changes) {
  var doc = editor.getDoc()
  Object.keys(changes).sort().reduce(function(_, id) {
    if (!editor[Out][id]) editor[Out][id] = makeOutput(id)

    var output = editor[Out][id]
    var change = changes[id]
    if (change === null) editor[Out][id] = null

    writeOutput(output, editor, change)
  }, null)
  editor[In] = patch(editor[In], changes)
}

function post(changes) {
  Object.keys(changes).reduce(function(_, id) {
    var change = changes[id]
    if (change && change.input) {
      send({ to: id, source: change.input })
    }
  }, null)
}

// Function finds modified sections and queues up messegase to an
// eval host. In adition it also renders output views (if they
// do not exist yet) where eval results are written.
var renderOutput = throttle(function render(editor) {
  var delta = calculate(editor)
  var changes = Object.keys(delta).reduce(function(changes, id) {
    var change = delta[id]
    // Only mark change pending if there is some input to be evaled.
    if (change && change.input) change.pending = true
    return changes
  }, delta)

  write(editor, changes)
  post(changes)
}, getRenderRate)

var hideOutput = throttle(function render(editor) {
  var line = editor.getCursor().line
  var state = editor[In]
  var changes = Object.keys(state).reduce(function(delta, id) {
    var value = state[id]
    if (value.line === line) delta[id] = {visible: false}
    else if (!value.visible) delta[id] = {visible: true, line: value.line}

    return delta
  }, [])

  if (changes.length) write(editor, changes)
}, function() { return 200 })


function tooglePlugin(editor, value) {
  if (value) {
    editor[Reciever] = recieve.bind(recieve, editor)
    editor[In] = {}
    editor[Out] = {}
    editor.on("change", renderOutput)
    editor.on("cursorActivity", hideOutput)
    window.addEventListener("client", editor[Reciever], false)
  } else {
    editor.off("change", renderOutput)
    editor.off("cursorActivity", hideOutput)
    window.removeEventListener("client", editor[Reciever], false)
    editor[Reciever] = null
    editor[In] = null
    editor[Out] = null
  }
}

function install(CodeMirror) {
  // Fix constructor property so that it could be accessed from the
  // instance.
  CodeMirror.prototype.constructor = CodeMirror;
  CodeMirror.defaults.interactiveSpeed = 300
  CodeMirror.defaults.interactiveSeparator = /^\/\/ \=\>[^\n]*$/m
  CodeMirror.keyMap.macDefault["Cmd-Enter"] = print
  CodeMirror.keyMap.pcDefault["Ctrl-Enter"] = print

  CodeMirror.defineOption("interactivate", false, tooglePlugin)
}

module.exports = install

},{"diffpatcher/diff":11,"diffpatcher/patch":12,"./output":13}],13:[function(require,module,exports){
var makeView = require("./view").makeView
var render = require("./render")

function Output(id) {
  this.id = id
}

function makeOutput(id) {
  return new Output(id)
}


function clear(output) {
  output.marker.clear()
  output.widget.clear()
}

function mark(output, editor, line) {
  output.marker = editor.markText({line: line, ch: 0},
                                  {line: line},
                                  {collapsed: true,
                                   inclusiveLeft: false,
                                   inclusiveRight: true,
                                   })

  output.widget = editor.addLineWidget(line,
                                       output.view,
                                       {showIfHidden: true,
                                        noHScroll:true})
}

function move(output, editor, line) {
  var position = output.marker.find()
  if (!position || position.line !== line) {
    clear(output)
    mark(output, editor, line)
  }
}

function write(output, editor, state) {
  var view = output.view || (output.view = makeView(editor, output.id))
  if (state === null) return clear(output)

  if (state.pending) output.view.style.opacity = "0.2"
  else if (state.pending === null) output.view.style.opacity = ""

  if (state.result) {
    var content = render(state.result)
    view.body.innerHTML = ""
    if (content instanceof Element) view.body.appendChild(content)
    else view.body.textContent = content
  }

  if (state.visible === true) mark(output, editor, state.line)
  if (state.visible === false) clear(output)
  if (state.line) move(output, editor, state.line)
}

exports.makeOutput = makeOutput
exports.write = write
},{"./view":14,"./render":9}],9:[function(require,module,exports){
"use strict";

var method = require("method")
var util = require("util")


// Render function takes arbitrary data structure and returns something
// that can visually represent it.
var render = method("render@interactivate")

render.define(function(value) {
  return util.inspect(value)
})

render.define(Error, function(error) {
  return String(error)
})

render.define(Element, function(element) {
  return element
})

module.exports = render

},{"util":7,"method":15}],16:[function(require,module,exports){
"use strict";

function rebase(result, parent, delta) {
  Object.keys(parent).forEach(function(key) {
    // If `parent[key]` is `null` it means attribute was deleted in previous
    // update. We skip such properties as there is no use in keeping them
    // around. If `delta[key]` is `null` we skip these properties too as
    // the have being deleted.
    if (!(parent[key] == null || (key in delta && delta[key] == null)))
      result[key] = parent[key]
  }, result)
  Object.keys(delta).forEach(function(key) {
    if (key in parent) {
      var current = delta[key]
      var previous = parent[key]
      if (current === previous) current = current
      // If `delta[key]` is `null` it's delete so we just skip property.
      else if (current == null) current = current
      // If value is of primitive type (function or regexps should not
      // even be here) we just update in place.
      else if (typeof(current) !== "object") result[key] = current
      // If previous value associated with this key was primitive
      // and it's mapped to non primitive
      else if (typeof(previous) !== "object") result[key] = current
      else result[key] = rebase({}, previous, current)
    } else {
      result[key] = delta[key]
    }
  })
  return result
}

module.exports = rebase

},{}],14:[function(require,module,exports){
var TEAR_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGpJREFUeNpi/P//PwM2wMSAA7CACEYggLKZgfgvEP8BCYAwKxALAjEPEH8B4g9MUI5IWlqayevXr9eCaCBfGGSSVnJysu/Xr1+fAx3y/9u3by9BfIb29vZCmCAMgCQZ/+NwL07nUlECIMAAMr41sxvv6oEAAAAASUVORK5CYII="

var OUTPUT_STYLE = [
  "margin-left: -10px",
  "padding: 0",
  "whitespace: normal",
  "text-shadow: none"
].join(";")

var TOP_STYLE = [
  "position: relative",
  "z-index: 2",
  "height: 12px",
  "background-clip: padding-box",
  "background: url('" + TEAR_IMAGE + "') top right repeat-x"
].join(";")

var BOTTOM_STYLE = [
  "position: relative",
  "z-index: 2",
  "height: 12px",
  "background-clip: padding-box",
  "background: url('" + TEAR_IMAGE + "') top left repeat-x",
  "-webkit-transform: rotate(180deg)",
  "-o-transform: rotate(180deg)",
  "transform: rotate(180deg)"
].join(";")

var BOX_STYLE = [
  "-moz-box-shadow: 0 0 30px -2px #000",
  "-webkit-box-shadow: 0 0 30px -2px #000",
  "box-shadow: 0 0 30px -2px #000",
  "color: black",
  "background: white",
  "position: relative",
  "margin: 0px",
  "width: 100%"
].join(";")

var HEAD_STYLE = [
  "display: table-cell",
  "padding: 10px",
  "padding-left: 20px",
  "white-space: pre",
  "color: white",
  "text-shadow: 0px 1px 5px #000",
  "vertical-align: top"
].join(";")

var BODY_STYLE = [
  "display: table-cell",
  "padding: 10px",
  "width: 100%"
].join(";")

var TEMPLATE = [
  "<div style=\"" + OUTPUT_STYLE + "\">",
  "  <div class='cm-live-output-border-top' style=\"" + TOP_STYLE + "\"> </div>",
  "  <div class='cm-live-output-box' style=\"" + BOX_STYLE + "\">",
  "    <h1 class='cm-live-output-head' style=\"" + HEAD_STYLE + "\">Out[0]</h1>",
  "    <pre class='cm-live-output-body' style=\"" + BODY_STYLE + "\"></pre>",
  "  </div>",
  "  <div class='cm-live-output-border-bottom' style=\"" + BOTTOM_STYLE + "\"></div>",
  "</div>"
 ].join("\n")

function makeView(editor, id) {
  var document = editor.display.input.ownerDocument
  var container = document.createElement("section")
  container.innerHTML = TEMPLATE
  var view = container.firstChild
  view.id = "interactivate-out-" + id
  view.label = view.querySelector(".cm-live-output-head")
  view.label.textContent = "Out[" + id + "] = "
  view.body = view.querySelector(".cm-live-output-body")
  return view
}

exports.makeView = makeView
},{}],15:[function(require,module,exports){
"use strict";

var defineProperty = Object.defineProperty || function(object, name, property) {
  object[name] = property.value
  return object
}

// Shortcut for `Object.prototype.toString` for faster access.
var typefy = Object.prototype.toString

// Map to for jumping from typeof(value) to associated type prefix used
// as a hash in the map of builtin implementations.
var types = { "function": "Object", "object": "Object" }

// Array is used to save method implementations for the host objects in order
// to avoid extending them with non-primitive values that could cause leaks.
var host = []
// Hash map is used to save method implementations for builtin types in order
// to avoid extending their prototypes. This also allows to share method
// implementations for types across diff contexts / frames / compartments.
var builtin = {}

function Primitive() {}
function ObjectType() {}
ObjectType.prototype = new Primitive()
function ErrorType() {}
ErrorType.prototype = new ObjectType()

var Default = builtin.Default = Primitive.prototype
var Null = builtin.Null = new Primitive()
var Void = builtin.Void = new Primitive()
builtin.String = new Primitive()
builtin.Number = new Primitive()
builtin.Boolean = new Primitive()

builtin.Object = ObjectType.prototype
builtin.Error = ErrorType.prototype

builtin.EvalError = new ErrorType()
builtin.InternalError = new ErrorType()
builtin.RangeError = new ErrorType()
builtin.ReferenceError = new ErrorType()
builtin.StopIteration = new ErrorType()
builtin.SyntaxError = new ErrorType()
builtin.TypeError = new ErrorType()
builtin.URIError = new ErrorType()


function Method(id) {
  /**
  Private Method is a callable private name that dispatches on the first
  arguments same named Method:

      method(object, ...rest) => object[method](...rest)

  It is supposed to be given **unique** `id` preferably in `"jump@package"`
  like form so it won't collide with `id's` other users create. If no argument
  is passed unique id is generated, but it's proved to be problematic with
  npm where it's easy to end up with a copies of same module where each copy
  will have a different name.

  ## Example

      var foo = Method("foo@awesomeness")

      // Implementation for any types
      foo.define(function(value, arg1, arg2) {
        // ...
      })

      // Implementation for a specific type
      foo.define(BarType, function(bar, arg1, arg2) {
        // ...
      })
  **/

  // Create an internal unique name if one is not provided, also prefix it
  // to avoid collision with regular method names.
  var name = "λ:" + String(id || Math.random().toString(32).substr(2))

  function dispatch(value) {
    // Method dispatches on type of the first argument.
    // If first argument is `null` or `void` associated implementation is
    // looked up in the `builtin` hash where implementations for built-ins
    // are stored.
    var type = null
    var method = value === null ? Null[name] :
                 value === void(0) ? Void[name] :
                 // Otherwise attempt to use method with a generated private
                 // `name` that is supposedly in the prototype chain of the
                 // `target`.
                 value[name] ||
                 // Otherwise assume it's one of the built-in type instances,
                 // in which case implementation is stored in a `builtin` hash.
                 // Attempt to find a implementation for the given built-in
                 // via constructor name and method name.
                 ((type = builtin[(value.constructor || "").name]) &&
                  type[name]) ||
                 // Otherwise assume it's a host object. For host objects
                 // actual method implementations are stored in the `host`
                 // array and only index for the implementation is stored
                 // in the host object's prototype chain. This avoids memory
                 // leaks that otherwise could happen when saving JS objects
                 // on host object.
                 host[value["!" + name]] ||
                 // Otherwise attempt to lookup implementation for builtins by
                 // a type of the value. This basically makes sure that all
                 // non primitive values will delegate to an `Object`.
                 ((type = builtin[types[typeof(value)]]) && type[name])


    // If method implementation for the type is still not found then
    // just fallback for default implementation.
    method = method || Default[name]

    // If implementation is still not found (which also means there is no
    // default) just throw an error with a descriptive message.
    if (!method) throw TypeError("Type does not implements method: " + name)

    // If implementation was found then just delegate.
    return method.apply(method, arguments)
  }

  // Make `toString` of the dispatch return a private name, this enables
  // method definition without sugar:
  //
  //    var method = Method()
  //    object[method] = function() { /***/ }
  dispatch.toString = function toString() { return name }

  // Copy utility methods for convenient API.
  dispatch.implement = implementMethod
  dispatch.define = defineMethod

  return dispatch
}

// Create method shortcuts form functions.
var defineMethod = function defineMethod(Type, lambda) {
  return define(this, Type, lambda)
}
var implementMethod = function implementMethod(object, lambda) {
  return implement(this, object, lambda)
}

// Define `implement` and `define` polymorphic methods to allow definitions
// and implementations through them.
var implement = Method("implement@method")
var define = Method("define@method")


function _implement(method, object, lambda) {
  /**
  Implements `Method` for the given `object` with a provided `implementation`.
  Calling `Method` with `object` as a first argument will dispatch on provided
  implementation.
  **/
  return defineProperty(object, method.toString(), {
    enumerable: false,
    configurable: false,
    writable: false,
    value: lambda
  })
}

function _define(method, Type, lambda) {
  /**
  Defines `Method` for the given `Type` with a provided `implementation`.
  Calling `Method` with a first argument of this `Type` will dispatch on
  provided `implementation`. If `Type` is a `Method` default implementation
  is defined. If `Type` is a `null` or `undefined` `Method` is implemented
  for that value type.
  **/

  // Attempt to guess a type via `Object.prototype.toString.call` hack.
  var type = Type && typefy.call(Type.prototype)

  // If only two arguments are passed then `Type` is actually an implementation
  // for a default type.
  if (!lambda) Default[method] = Type
  // If `Type` is `null` or `void` store implementation accordingly.
  else if (Type === null) Null[method] = lambda
  else if (Type === void(0)) Void[method] = lambda
  // If `type` hack indicates built-in type and type has a name us it to
  // store a implementation into associated hash. If hash for this type does
  // not exists yet create one.
  else if (type !== "[object Object]" && Type.name) {
    var Bulitin = builtin[Type.name] || (builtin[Type.name] = new ObjectType())
    Bulitin[method] = lambda
  }
  // If `type` hack indicates an object, that may be either object or any
  // JS defined "Class". If name of the constructor is `Object`, assume it's
  // built-in `Object` and store implementation accordingly.
  else if (Type.name === "Object")
    builtin.Object[method] = lambda
  // Host objects are pain!!! Every browser does some crazy stuff for them
  // So far all browser seem to not implement `call` method for host object
  // constructors. If that is a case here, assume it's a host object and
  // store implementation in a `host` array and store `index` in the array
  // in a `Type.prototype` itself. This avoids memory leaks that could be
  // caused by storing JS objects on a host objects.
  else if (Type.call === void(0)) {
    var index = host.indexOf(lambda)
    if (index < 0) index = host.push(lambda) - 1
    // Prefix private name with `!` so it can be dispatched from the method
    // without type checks.
    implement("!" + method, Type.prototype, index)
  }
  // If Got that far `Type` is user defined JS `Class`. Define private name
  // as hidden property on it's prototype.
  else
    implement(method, Type.prototype, lambda)
}

// And provided implementations for a polymorphic equivalents.
_define(define, _define)
_define(implement, _implement)

// Define exports on `Method` as it's only thing being exported.
Method.implement = implement
Method.define = define
Method.Method = Method
Method.method = Method
Method.builtin = builtin
Method.host = host

module.exports = Method

},{}],11:[function(require,module,exports){
"use strict";

var method = require("method")

// Method is designed to work with data structures representing application
// state. Calling it with a state should return object representing `delta`
// that has being applied to a previous state to get to a current state.
//
// Example
//
// diff(state) // => { "item-id-1": { title: "some title" } "item-id-2": null }
var diff = method("diff")

// diff between `null` / `undefined` to any hash is a hash itself.
diff.define(null, function(from, to) { return to })
diff.define(undefined, function(from, to) { return to })
diff.define(Object, function(from, to) {
  return calculate(from, to || {}) || {}
})

function calculate(from, to) {
  var diff = {}
  var changes = 0
  Object.keys(from).forEach(function(key) {
    changes = changes + 1
    if (!(key in to) && from[key] != null) diff[key] = null
    else changes = changes - 1
  })
  Object.keys(to).forEach(function(key) {
    changes = changes + 1
    var previous = from[key]
    var current = to[key]
    if (previous === current) return (changes = changes - 1)
    if (typeof(current) !== "object") return diff[key] = current
    if (typeof(previous) !== "object") return diff[key] = current
    var delta = calculate(previous, current)
    if (delta) diff[key] = delta
    else changes = changes - 1
  })
  return changes ? diff : null
}

diff.calculate = calculate

module.exports = diff

},{"method":15}],12:[function(require,module,exports){
"use strict";

var method = require("method")
var rebase = require("./rebase")

// Method is designed to work with data structures representing application
// state. Calling it with a state and delta should return object representing
// new state, with changes in `delta` being applied to previous.
//
// ## Example
//
// patch(state, {
//   "item-id-1": { completed: false }, // update
//   "item-id-2": null                  // delete
// })
var patch = method("patch")
patch.define(Object, function patch(hash, delta) {
  return rebase({}, hash, delta)
})

module.exports = patch

},{"./rebase":16,"method":15}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvd2lzcC9ydW50aW1lLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL3dpc3AvYXN0LmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL3dpc3Avc2VxdWVuY2UuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvd2lzcC9yZWFkZXIuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvd2lzcC9jb21waWxlci5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy93aXNwL3N0cmluZy5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy93aXNwL2FuYWx5emVyLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbWFpbi5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9jb2RlbWlycm9yLWhhc2hhcmUvY29yZS5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9jb2RlbWlycm9yLXBlcnNpc3QvY29yZS5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXJlc29sdmUvYnVpbHRpbi91dGlsLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvaG9zdC5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy93aXNwL2JhY2tlbmQvamF2YXNjcmlwdC93cml0ZXIuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2J1aWx0aW4vZXZlbnRzLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL2ludGVyYWN0aXZhdGUvaW50ZXJhY3RpdmF0ZS5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9pbnRlcmFjdGl2YXRlL291dHB1dC5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9pbnRlcmFjdGl2YXRlL3JlbmRlci5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9kaWZmcGF0Y2hlci9yZWJhc2UuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvaW50ZXJhY3RpdmF0ZS92aWV3LmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL21ldGhvZC9jb3JlLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL2RpZmZwYXRjaGVyL2RpZmYuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvZGlmZnBhdGNoZXIvcGF0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdG1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDek5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25qQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ254QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXt2YXIgX25zXyA9IHtcbiAgXCJpZFwiOiBcIndpc3AucnVudGltZVwiLFxuICBcImRvY1wiOiBcIkNvcmUgcHJpbWl0aXZlcyByZXF1aXJlZCBmb3IgcnVudGltZVwiXG59OztcblxudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICByZXR1cm4geDtcbn07XG5leHBvcnRzLmlkZW50aXR5ID0gaWRlbnRpdHk7XG5cbnZhciBpc09kZCA9IGZ1bmN0aW9uIGlzT2RkKG4pIHtcbiAgcmV0dXJuIG4gJSAyID09PSAxO1xufTtcbmV4cG9ydHMuaXNPZGQgPSBpc09kZDtcblxudmFyIGlzRXZlbiA9IGZ1bmN0aW9uIGlzRXZlbihuKSB7XG4gIHJldHVybiBuICUgMiA9PT0gMDtcbn07XG5leHBvcnRzLmlzRXZlbiA9IGlzRXZlbjtcblxudmFyIGlzRGljdGlvbmFyeSA9IGZ1bmN0aW9uIGlzRGljdGlvbmFyeShmb3JtKSB7XG4gIHJldHVybiAoaXNPYmplY3QoZm9ybSkpICYmIChpc09iamVjdChPYmplY3QuZ2V0UHJvdG90eXBlT2YoZm9ybSkpKSAmJiAoaXNOaWwoT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihmb3JtKSkpKTtcbn07XG5leHBvcnRzLmlzRGljdGlvbmFyeSA9IGlzRGljdGlvbmFyeTtcblxudmFyIGRpY3Rpb25hcnkgPSBmdW5jdGlvbiBkaWN0aW9uYXJ5KCkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3Aoa2V5VmFsdWVzLCByZXN1bHQpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBrZXlWYWx1ZXMubGVuZ3RoID9cbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgKHJlc3VsdCB8fCAwKVsoa2V5VmFsdWVzIHx8IDApWzBdXSA9IChrZXlWYWx1ZXMgfHwgMClbMV07XG4gICAgICAgIHJldHVybiAoa2V5VmFsdWVzID0ga2V5VmFsdWVzLnNsaWNlKDIpLCByZXN1bHQgPSByZXN1bHQsIGxvb3ApO1xuICAgICAgfSkoKSA6XG4gICAgICByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksIHt9KTtcbn07XG5leHBvcnRzLmRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5O1xuXG52YXIga2V5cyA9IGZ1bmN0aW9uIGtleXMoZGljdGlvbmFyeSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGljdGlvbmFyeSk7XG59O1xuZXhwb3J0cy5rZXlzID0ga2V5cztcblxudmFyIHZhbHMgPSBmdW5jdGlvbiB2YWxzKGRpY3Rpb25hcnkpIHtcbiAgcmV0dXJuIGtleXMoZGljdGlvbmFyeSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiAoZGljdGlvbmFyeSB8fCAwKVtrZXldO1xuICB9KTtcbn07XG5leHBvcnRzLnZhbHMgPSB2YWxzO1xuXG52YXIga2V5VmFsdWVzID0gZnVuY3Rpb24ga2V5VmFsdWVzKGRpY3Rpb25hcnkpIHtcbiAgcmV0dXJuIGtleXMoZGljdGlvbmFyeSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBba2V5LCAoZGljdGlvbmFyeSB8fCAwKVtrZXldXTtcbiAgfSk7XG59O1xuZXhwb3J0cy5rZXlWYWx1ZXMgPSBrZXlWYWx1ZXM7XG5cbnZhciBtZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QucHJvdG90eXBlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLnJlZHVjZShmdW5jdGlvbihkZXNjcmlwdG9yLCBkaWN0aW9uYXJ5KSB7XG4gICAgaXNPYmplY3QoZGljdGlvbmFyeSkgP1xuICAgICAgT2JqZWN0LmtleXMoZGljdGlvbmFyeSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIChkZXNjcmlwdG9yIHx8IDApW2tleV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRpY3Rpb25hcnksIGtleSk7XG4gICAgICB9KSA6XG4gICAgICB2b2lkKDApO1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9LCBPYmplY3QuY3JlYXRlKE9iamVjdC5wcm90b3R5cGUpKSk7XG59O1xuZXhwb3J0cy5tZXJnZSA9IG1lcmdlO1xuXG52YXIgaXNDb250YWluc1ZlY3RvciA9IGZ1bmN0aW9uIGlzQ29udGFpbnNWZWN0b3IodmVjdG9yLCBlbGVtZW50KSB7XG4gIHJldHVybiB2ZWN0b3IuaW5kZXhPZihlbGVtZW50KSA+PSAwO1xufTtcbmV4cG9ydHMuaXNDb250YWluc1ZlY3RvciA9IGlzQ29udGFpbnNWZWN0b3I7XG5cbnZhciBtYXBEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gbWFwRGljdGlvbmFyeShzb3VyY2UsIGYpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gICAgKHRhcmdldCB8fCAwKVtrZXldID0gZigoc291cmNlIHx8IDApW2tleV0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sIHt9KTtcbn07XG5leHBvcnRzLm1hcERpY3Rpb25hcnkgPSBtYXBEaWN0aW9uYXJ5O1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuXG52YXIgaXNGbiA9IHR5cGVvZigvLi8pID09PSBcImZ1bmN0aW9uXCIgP1xuICBmdW5jdGlvbiBpc0ZuKHgpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xuICB9IDpcbiAgZnVuY3Rpb24gaXNGbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZih4KSA9PT0gXCJmdW5jdGlvblwiO1xuICB9O1xuZXhwb3J0cy5pc0ZuID0gaXNGbjtcblxudmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICByZXR1cm4gKHR5cGVvZih4KSA9PT0gXCJzdHJpbmdcIikgfHwgKHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBTdHJpbmddXCIpO1xufTtcbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxudmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICByZXR1cm4gKHR5cGVvZih4KSA9PT0gXCJudW1iZXJcIikgfHwgKHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBOdW1iZXJdXCIpO1xufTtcbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxudmFyIGlzVmVjdG9yID0gaXNGbihBcnJheS5pc0FycmF5KSA/XG4gIEFycmF5LmlzQXJyYXkgOlxuICBmdW5jdGlvbiBpc1ZlY3Rvcih4KSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgfTtcbmV4cG9ydHMuaXNWZWN0b3IgPSBpc1ZlY3RvcjtcblxudmFyIGlzRGF0ZSA9IGZ1bmN0aW9uIGlzRGF0ZSh4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgRGF0ZV1cIjtcbn07XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxudmFyIGlzQm9vbGVhbiA9IGZ1bmN0aW9uIGlzQm9vbGVhbih4KSB7XG4gIHJldHVybiAoeCA9PT0gdHJ1ZSkgfHwgKHggPT09IGZhbHNlKSB8fCAodG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEJvb2xlYW5dXCIpO1xufTtcbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG52YXIgaXNSZVBhdHRlcm4gPSBmdW5jdGlvbiBpc1JlUGF0dGVybih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgUmVnRXhwXVwiO1xufTtcbmV4cG9ydHMuaXNSZVBhdHRlcm4gPSBpc1JlUGF0dGVybjtcblxudmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICByZXR1cm4geCAmJiAodHlwZW9mKHgpID09PSBcIm9iamVjdFwiKTtcbn07XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbnZhciBpc05pbCA9IGZ1bmN0aW9uIGlzTmlsKHgpIHtcbiAgcmV0dXJuICh4ID09PSB2b2lkKDApKSB8fCAoeCA9PT0gbnVsbCk7XG59O1xuZXhwb3J0cy5pc05pbCA9IGlzTmlsO1xuXG52YXIgaXNUcnVlID0gZnVuY3Rpb24gaXNUcnVlKHgpIHtcbiAgcmV0dXJuIHggPT09IHRydWU7XG59O1xuZXhwb3J0cy5pc1RydWUgPSBpc1RydWU7XG5cbnZhciBpc0ZhbHNlID0gZnVuY3Rpb24gaXNGYWxzZSh4KSB7XG4gIHJldHVybiB4ID09PSB0cnVlO1xufTtcbmV4cG9ydHMuaXNGYWxzZSA9IGlzRmFsc2U7XG5cbnZhciByZUZpbmQgPSBmdW5jdGlvbiByZUZpbmQocmUsIHMpIHtcbiAgdmFyIG1hdGNoZXMgPSByZS5leGVjKHMpO1xuICByZXR1cm4gIShpc05pbChtYXRjaGVzKSkgP1xuICAgIG1hdGNoZXMubGVuZ3RoID09PSAxID9cbiAgICAgIChtYXRjaGVzIHx8IDApWzBdIDpcbiAgICAgIG1hdGNoZXMgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5yZUZpbmQgPSByZUZpbmQ7XG5cbnZhciByZU1hdGNoZXMgPSBmdW5jdGlvbiByZU1hdGNoZXMocGF0dGVybiwgc291cmNlKSB7XG4gIHZhciBtYXRjaGVzID0gcGF0dGVybi5leGVjKHNvdXJjZSk7XG4gIHJldHVybiAoIShpc05pbChtYXRjaGVzKSkpICYmICgobWF0Y2hlcyB8fCAwKVswXSA9PT0gc291cmNlKSA/XG4gICAgbWF0Y2hlcy5sZW5ndGggPT09IDEgP1xuICAgICAgKG1hdGNoZXMgfHwgMClbMF0gOlxuICAgICAgbWF0Y2hlcyA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnJlTWF0Y2hlcyA9IHJlTWF0Y2hlcztcblxudmFyIHJlUGF0dGVybiA9IGZ1bmN0aW9uIHJlUGF0dGVybihzKSB7XG4gIHZhciBtYXRjaCA9IHJlRmluZCgvXig/OlxcKFxcPyhbaWRtc3V4XSopXFwpKT8oLiopLywgcyk7XG4gIHJldHVybiBuZXcgUmVnRXhwKChtYXRjaCB8fCAwKVsyXSwgKG1hdGNoIHx8IDApWzFdKTtcbn07XG5leHBvcnRzLnJlUGF0dGVybiA9IHJlUGF0dGVybjtcblxudmFyIGluYyA9IGZ1bmN0aW9uIGluYyh4KSB7XG4gIHJldHVybiB4ICsgMTtcbn07XG5leHBvcnRzLmluYyA9IGluYztcblxudmFyIGRlYyA9IGZ1bmN0aW9uIGRlYyh4KSB7XG4gIHJldHVybiB4IC0gMTtcbn07XG5leHBvcnRzLmRlYyA9IGRlYztcblxudmFyIHN0ciA9IGZ1bmN0aW9uIHN0cigpIHtcbiAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFwiXCIsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5zdHIgPSBzdHI7XG5cbnZhciBjaGFyID0gZnVuY3Rpb24gY2hhcihjb2RlKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xufTtcbmV4cG9ydHMuY2hhciA9IGNoYXI7XG5cbnZhciBpbnQgPSBmdW5jdGlvbiBpbnQoeCkge1xuICByZXR1cm4gaXNOdW1iZXIoeCkgP1xuICAgIHggPj0gMCA/XG4gICAgICBNYXRoLmZsb29yKHgpIDpcbiAgICAgIE1hdGguZmxvb3IoeCkgOlxuICAgIHguY2hhckNvZGVBdCgwKTtcbn07XG5leHBvcnRzLmludCA9IGludDtcblxudmFyIHN1YnMgPSBmdW5jdGlvbiBzdWJzKHN0cmluZywgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbn07XG5leHBvcnRzLnN1YnMgPSBzdWJzO1xuXG52YXIgaXNQYXR0ZXJuRXF1YWwgPSBmdW5jdGlvbiBpc1BhdHRlcm5FcXVhbCh4LCB5KSB7XG4gIHJldHVybiAoaXNSZVBhdHRlcm4oeCkpICYmIChpc1JlUGF0dGVybih5KSkgJiYgKHguc291cmNlID09PSB5LnNvdXJjZSkgJiYgKHguZ2xvYmFsID09PSB5Lmdsb2JhbCkgJiYgKHgubXVsdGlsaW5lID09PSB5Lm11bHRpbGluZSkgJiYgKHguaWdub3JlQ2FzZSA9PT0geS5pZ25vcmVDYXNlKTtcbn07XG5cbnZhciBpc0RhdGVFcXVhbCA9IGZ1bmN0aW9uIGlzRGF0ZUVxdWFsKHgsIHkpIHtcbiAgcmV0dXJuIChpc0RhdGUoeCkpICYmIChpc0RhdGUoeSkpICYmIChOdW1iZXIoeCkgPT09IE51bWJlcih5KSk7XG59O1xuXG52YXIgaXNEaWN0aW9uYXJ5RXF1YWwgPSBmdW5jdGlvbiBpc0RpY3Rpb25hcnlFcXVhbCh4LCB5KSB7XG4gIHJldHVybiAoaXNPYmplY3QoeCkpICYmIChpc09iamVjdCh5KSkgJiYgKChmdW5jdGlvbigpIHtcbiAgICB2YXIgeEtleXMgPSBrZXlzKHgpO1xuICAgIHZhciB5S2V5cyA9IGtleXMoeSk7XG4gICAgdmFyIHhDb3VudCA9IHhLZXlzLmxlbmd0aDtcbiAgICB2YXIgeUNvdW50ID0geUtleXMubGVuZ3RoO1xuICAgIHJldHVybiAoeENvdW50ID09PSB5Q291bnQpICYmICgoZnVuY3Rpb24gbG9vcChpbmRleCwgY291bnQsIGtleXMpIHtcbiAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgcmVjdXIgPSBpbmRleCA8IGNvdW50ID9cbiAgICAgICAgaXNFcXVpdmFsZW50KCh4IHx8IDApWyhrZXlzIHx8IDApW2luZGV4XV0sICh5IHx8IDApWyhrZXlzIHx8IDApW2luZGV4XV0pID9cbiAgICAgICAgICAoaW5kZXggPSBpbmMoaW5kZXgpLCBjb3VudCA9IGNvdW50LCBrZXlzID0ga2V5cywgbG9vcCkgOlxuICAgICAgICAgIGZhbHNlIDpcbiAgICAgICAgdHJ1ZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVjdXI7XG4gICAgfSkoMCwgeENvdW50LCB4S2V5cykpO1xuICB9KSgpKTtcbn07XG5cbnZhciBpc1ZlY3RvckVxdWFsID0gZnVuY3Rpb24gaXNWZWN0b3JFcXVhbCh4LCB5KSB7XG4gIHJldHVybiAoaXNWZWN0b3IoeCkpICYmIChpc1ZlY3Rvcih5KSkgJiYgKHgubGVuZ3RoID09PSB5Lmxlbmd0aCkgJiYgKChmdW5jdGlvbiBsb29wKHhzLCB5cywgaW5kZXgsIGNvdW50KSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaW5kZXggPCBjb3VudCA/XG4gICAgICBpc0VxdWl2YWxlbnQoKHhzIHx8IDApW2luZGV4XSwgKHlzIHx8IDApW2luZGV4XSkgP1xuICAgICAgICAoeHMgPSB4cywgeXMgPSB5cywgaW5kZXggPSBpbmMoaW5kZXgpLCBjb3VudCA9IGNvdW50LCBsb29wKSA6XG4gICAgICAgIGZhbHNlIDpcbiAgICAgIHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKHgsIHksIDAsIHgubGVuZ3RoKSk7XG59O1xuXG52YXIgaXNFcXVpdmFsZW50ID0gZnVuY3Rpb24gaXNFcXVpdmFsZW50KHgsIHkpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuICh4ID09PSB5KSB8fCAoaXNOaWwoeCkgP1xuICAgICAgICBpc05pbCh5KSA6XG4gICAgICBpc05pbCh5KSA/XG4gICAgICAgIGlzTmlsKHgpIDpcbiAgICAgIGlzU3RyaW5nKHgpID9cbiAgICAgICAgZmFsc2UgOlxuICAgICAgaXNOdW1iZXIoeCkgP1xuICAgICAgICBmYWxzZSA6XG4gICAgICBpc0ZuKHgpID9cbiAgICAgICAgZmFsc2UgOlxuICAgICAgaXNCb29sZWFuKHgpID9cbiAgICAgICAgZmFsc2UgOlxuICAgICAgaXNEYXRlKHgpID9cbiAgICAgICAgaXNEYXRlRXF1YWwoeCwgeSkgOlxuICAgICAgaXNWZWN0b3IoeCkgP1xuICAgICAgICBpc1ZlY3RvckVxdWFsKHgsIHksIFtdLCBbXSkgOlxuICAgICAgaXNSZVBhdHRlcm4oeCkgP1xuICAgICAgICBpc1BhdHRlcm5FcXVhbCh4LCB5KSA6XG4gICAgICBcImVsc2VcIiA/XG4gICAgICAgIGlzRGljdGlvbmFyeUVxdWFsKHgsIHkpIDpcbiAgICAgICAgdm9pZCgwKSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIG1vcmUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgICAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHByZXZpb3VzLCBjdXJyZW50LCBpbmRleCwgY291bnQpIHtcbiAgICAgICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICAgICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICAgICAgcmVjdXIgPSAoaXNFcXVpdmFsZW50KHByZXZpb3VzLCBjdXJyZW50KSkgJiYgKGluZGV4IDwgY291bnQgP1xuICAgICAgICAgIChwcmV2aW91cyA9IGN1cnJlbnQsIGN1cnJlbnQgPSAobW9yZSB8fCAwKVtpbmRleF0sIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KSh4LCB5LCAwLCBtb3JlLmxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB2b2lkKDApO1xufTtcblxudmFyIGlzRXF1YWwgPSBpc0VxdWl2YWxlbnQ7XG5leHBvcnRzLmlzRXF1YWwgPSBpc0VxdWFsO1xuXG52YXIgaXNTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIGlzU3RyaWN0RXF1YWwoeCwgeSkge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCA9PT0geTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbW9yZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AocHJldmlvdXMsIGN1cnJlbnQsIGluZGV4LCBjb3VudCkge1xuICAgICAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgICByZWN1ciA9IChwcmV2aW91cyA9PT0gY3VycmVudCkgJiYgKGluZGV4IDwgY291bnQgP1xuICAgICAgICAgIChwcmV2aW91cyA9IGN1cnJlbnQsIGN1cnJlbnQgPSAobW9yZSB8fCAwKVtpbmRleF0sIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KSh4LCB5LCAwLCBtb3JlLmxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB2b2lkKDApO1xufTtcbmV4cG9ydHMuaXNTdHJpY3RFcXVhbCA9IGlzU3RyaWN0RXF1YWw7XG5cbnZhciBncmVhdGVyVGhhbiA9IGZ1bmN0aW9uIGdyZWF0ZXJUaGFuKHgsIHkpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggPiB5O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBtb3JlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcChwcmV2aW91cywgY3VycmVudCwgaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICAgIHJlY3VyID0gKHByZXZpb3VzID4gY3VycmVudCkgJiYgKGluZGV4IDwgY291bnQgP1xuICAgICAgICAgIChwcmV2aW91cyA9IGN1cnJlbnQsIGN1cnJlbnQgPSAobW9yZSB8fCAwKVtpbmRleF0sIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KSh4LCB5LCAwLCBtb3JlLmxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB2b2lkKDApO1xufTtcbmV4cG9ydHMuZ3JlYXRlclRoYW4gPSBncmVhdGVyVGhhbjtcblxudmFyIG5vdExlc3NUaGFuID0gZnVuY3Rpb24gbm90TGVzc1RoYW4oeCwgeSkge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCA+PSB5O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBtb3JlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcChwcmV2aW91cywgY3VycmVudCwgaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICAgIHJlY3VyID0gKHByZXZpb3VzID49IGN1cnJlbnQpICYmIChpbmRleCA8IGNvdW50ID9cbiAgICAgICAgICAocHJldmlvdXMgPSBjdXJyZW50LCBjdXJyZW50ID0gKG1vcmUgfHwgMClbaW5kZXhdLCBpbmRleCA9IGluYyhpbmRleCksIGNvdW50ID0gY291bnQsIGxvb3ApIDpcbiAgICAgICAgICB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlY3VyO1xuICAgICAgfSkoeCwgeSwgMCwgbW9yZS5sZW5ndGgpO1xuICB9O1xuICByZXR1cm4gdm9pZCgwKTtcbn07XG5leHBvcnRzLm5vdExlc3NUaGFuID0gbm90TGVzc1RoYW47XG5cbnZhciBsZXNzVGhhbiA9IGZ1bmN0aW9uIGxlc3NUaGFuKHgsIHkpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggPCB5O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBtb3JlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcChwcmV2aW91cywgY3VycmVudCwgaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICAgIHJlY3VyID0gKHByZXZpb3VzIDwgY3VycmVudCkgJiYgKGluZGV4IDwgY291bnQgP1xuICAgICAgICAgIChwcmV2aW91cyA9IGN1cnJlbnQsIGN1cnJlbnQgPSAobW9yZSB8fCAwKVtpbmRleF0sIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KSh4LCB5LCAwLCBtb3JlLmxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB2b2lkKDApO1xufTtcbmV4cG9ydHMubGVzc1RoYW4gPSBsZXNzVGhhbjtcblxudmFyIG5vdEdyZWF0ZXJUaGFuID0gZnVuY3Rpb24gbm90R3JlYXRlclRoYW4oeCwgeSkge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCA8PSB5O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBtb3JlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcChwcmV2aW91cywgY3VycmVudCwgaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICAgIHJlY3VyID0gKHByZXZpb3VzIDw9IGN1cnJlbnQpICYmIChpbmRleCA8IGNvdW50ID9cbiAgICAgICAgICAocHJldmlvdXMgPSBjdXJyZW50LCBjdXJyZW50ID0gKG1vcmUgfHwgMClbaW5kZXhdLCBpbmRleCA9IGluYyhpbmRleCksIGNvdW50ID0gY291bnQsIGxvb3ApIDpcbiAgICAgICAgICB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlY3VyO1xuICAgICAgfSkoeCwgeSwgMCwgbW9yZS5sZW5ndGgpO1xuICB9O1xuICByZXR1cm4gdm9pZCgwKTtcbn07XG5leHBvcnRzLm5vdEdyZWF0ZXJUaGFuID0gbm90R3JlYXRlclRoYW47XG5cbnZhciBzdW0gPSBmdW5jdGlvbiBzdW0oYSwgYiwgYywgZCwgZSwgZikge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gMDtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gYTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGEgKyBiICsgYztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gYSArIGIgKyBjICsgZDtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gYSArIGIgKyBjICsgZCArIGU7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGEgKyBiICsgYyArIGQgKyBlICsgZjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbW9yZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgNik7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AodmFsdWUsIGluZGV4LCBjb3VudCkge1xuICAgICAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgICByZWN1ciA9IGluZGV4IDwgY291bnQgP1xuICAgICAgICAgICh2YWx1ZSA9IHZhbHVlICsgKChtb3JlIHx8IDApW2luZGV4XSksIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KShhICsgYiArIGMgKyBkICsgZSArIGYsIDAsIG1vcmUubGVuZ3RoKTtcbiAgfTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5zdW0gPSBzdW07XG5cbnZhciBzdWJ0cmFjdCA9IGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIChmdW5jdGlvbigpIHsgdGhyb3cgVHlwZUVycm9yKFwiV3JvbmcgbnVtYmVyIG9mIGFyZ3MgcGFzc2VkIHRvOiAtXCIpOyB9KSgpO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAwIC0gYTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGEgLSBiIC0gYztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gYSAtIGIgLSBjIC0gZDtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gYSAtIGIgLSBjIC0gZCAtIGU7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGEgLSBiIC0gYyAtIGQgLSBlIC0gZjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbW9yZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgNik7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AodmFsdWUsIGluZGV4LCBjb3VudCkge1xuICAgICAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgICByZWN1ciA9IGluZGV4IDwgY291bnQgP1xuICAgICAgICAgICh2YWx1ZSA9IHZhbHVlIC0gKChtb3JlIHx8IDApW2luZGV4XSksIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KShhIC0gYiAtIGMgLSBkIC0gZSAtIGYsIDAsIG1vcmUubGVuZ3RoKTtcbiAgfTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5zdWJ0cmFjdCA9IHN1YnRyYWN0O1xuXG52YXIgZGl2aWRlID0gZnVuY3Rpb24gZGl2aWRlKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIChmdW5jdGlvbigpIHsgdGhyb3cgVHlwZUVycm9yKFwiV3JvbmcgbnVtYmVyIG9mIGFyZ3MgcGFzc2VkIHRvOiAvXCIpOyB9KSgpO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAxIC8gYTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYSAvIGI7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGEgLyBiIC8gYztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gYSAvIGIgLyBjIC8gZDtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gYSAvIGIgLyBjIC8gZCAvIGU7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGEgLyBiIC8gYyAvIGQgLyBlIC8gZjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbW9yZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgNik7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AodmFsdWUsIGluZGV4LCBjb3VudCkge1xuICAgICAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgICByZWN1ciA9IGluZGV4IDwgY291bnQgP1xuICAgICAgICAgICh2YWx1ZSA9IHZhbHVlIC8gKChtb3JlIHx8IDApW2luZGV4XSksIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KShhIC8gYiAvIGMgLyBkIC8gZSAvIGYsIDAsIG1vcmUubGVuZ3RoKTtcbiAgfTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5kaXZpZGUgPSBkaXZpZGU7XG5cbnZhciBtdWx0aXBseSA9IGZ1bmN0aW9uIG11bHRpcGx5KGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIDE7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGE7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGEgKiBiO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBhICogYiAqIGM7XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIGEgKiBiICogYyAqIGQ7XG4gICAgY2FzZSA1OlxuICAgICAgcmV0dXJuIGEgKiBiICogYyAqIGQgKiBlO1xuICAgIGNhc2UgNjpcbiAgICAgIHJldHVybiBhICogYiAqIGMgKiBkICogZSAqIGY7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIG1vcmUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDYpO1xuICAgICAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHZhbHVlLCBpbmRleCwgY291bnQpIHtcbiAgICAgICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICAgICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICAgICAgcmVjdXIgPSBpbmRleCA8IGNvdW50ID9cbiAgICAgICAgICAodmFsdWUgPSB2YWx1ZSAqICgobW9yZSB8fCAwKVtpbmRleF0pLCBpbmRleCA9IGluYyhpbmRleCksIGNvdW50ID0gY291bnQsIGxvb3ApIDpcbiAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlY3VyO1xuICAgICAgfSkoYSAqIGIgKiBjICogZCAqIGUgKiBmLCAwLCBtb3JlLmxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB2b2lkKDApO1xufTtcbmV4cG9ydHMubXVsdGlwbHkgPSBtdWx0aXBseTtcblxudmFyIGFuZCA9IGZ1bmN0aW9uIGFuZChhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBhO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBhICYmIGI7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGEgJiYgYiAmJiBjO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBhICYmIGIgJiYgYyAmJiBkO1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBhICYmIGIgJiYgYyAmJiBkICYmIGU7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGEgJiYgYiAmJiBjICYmIGQgJiYgZSAmJiBmO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBtb3JlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCA2KTtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcCh2YWx1ZSwgaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICAgIHJlY3VyID0gaW5kZXggPCBjb3VudCA/XG4gICAgICAgICAgKHZhbHVlID0gdmFsdWUgJiYgKChtb3JlIHx8IDApW2luZGV4XSksIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KShhICYmIGIgJiYgYyAmJiBkICYmIGUgJiYgZiwgMCwgbW9yZS5sZW5ndGgpO1xuICB9O1xuICByZXR1cm4gdm9pZCgwKTtcbn07XG5leHBvcnRzLmFuZCA9IGFuZDtcblxudmFyIG9yID0gZnVuY3Rpb24gb3IoYSwgYiwgYywgZCwgZSwgZikge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gdm9pZCgwKTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gYTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYSB8fCBiO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBhIHx8IGIgfHwgYztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gYSB8fCBiIHx8IGMgfHwgZDtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gYSB8fCBiIHx8IGMgfHwgZCB8fCBlO1xuICAgIGNhc2UgNjpcbiAgICAgIHJldHVybiBhIHx8IGIgfHwgYyB8fCBkIHx8IGUgfHwgZjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbW9yZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgNik7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AodmFsdWUsIGluZGV4LCBjb3VudCkge1xuICAgICAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgICByZWN1ciA9IGluZGV4IDwgY291bnQgP1xuICAgICAgICAgICh2YWx1ZSA9IHZhbHVlIHx8ICgobW9yZSB8fCAwKVtpbmRleF0pLCBpbmRleCA9IGluYyhpbmRleCksIGNvdW50ID0gY291bnQsIGxvb3ApIDpcbiAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlY3VyO1xuICAgICAgfSkoYSB8fCBiIHx8IGMgfHwgZCB8fCBlIHx8IGYsIDAsIG1vcmUubGVuZ3RoKTtcbiAgfTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5vciA9IG9yO1xuXG52YXIgcHJpbnQgPSBmdW5jdGlvbiBwcmludCgpIHtcbiAgdmFyIG1vcmUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZS5sb2csIG1vcmUpO1xufTtcbmV4cG9ydHMucHJpbnQgPSBwcmludFxufSkoKSIsInZhciBfbnNfID0ge1xuICBcImlkXCI6IFwid2lzcC5hc3RcIlxufTtcbnZhciB3aXNwX3NlcXVlbmNlID0gcmVxdWlyZShcIi4vc2VxdWVuY2VcIik7XG52YXIgaXNMaXN0ID0gd2lzcF9zZXF1ZW5jZS5pc0xpc3Q7XG52YXIgaXNTZXF1ZW50aWFsID0gd2lzcF9zZXF1ZW5jZS5pc1NlcXVlbnRpYWw7XG52YXIgZmlyc3QgPSB3aXNwX3NlcXVlbmNlLmZpcnN0O1xudmFyIHNlY29uZCA9IHdpc3Bfc2VxdWVuY2Uuc2Vjb25kO1xudmFyIGNvdW50ID0gd2lzcF9zZXF1ZW5jZS5jb3VudDtcbnZhciBsYXN0ID0gd2lzcF9zZXF1ZW5jZS5sYXN0O1xudmFyIG1hcCA9IHdpc3Bfc2VxdWVuY2UubWFwO1xudmFyIHZlYyA9IHdpc3Bfc2VxdWVuY2UudmVjOztcbnZhciB3aXNwX3N0cmluZyA9IHJlcXVpcmUoXCIuL3N0cmluZ1wiKTtcbnZhciBzcGxpdCA9IHdpc3Bfc3RyaW5nLnNwbGl0O1xudmFyIGpvaW4gPSB3aXNwX3N0cmluZy5qb2luOztcbnZhciB3aXNwX3J1bnRpbWUgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xudmFyIGlzTmlsID0gd2lzcF9ydW50aW1lLmlzTmlsO1xudmFyIGlzVmVjdG9yID0gd2lzcF9ydW50aW1lLmlzVmVjdG9yO1xudmFyIGlzTnVtYmVyID0gd2lzcF9ydW50aW1lLmlzTnVtYmVyO1xudmFyIGlzU3RyaW5nID0gd2lzcF9ydW50aW1lLmlzU3RyaW5nO1xudmFyIGlzQm9vbGVhbiA9IHdpc3BfcnVudGltZS5pc0Jvb2xlYW47XG52YXIgaXNPYmplY3QgPSB3aXNwX3J1bnRpbWUuaXNPYmplY3Q7XG52YXIgaXNEYXRlID0gd2lzcF9ydW50aW1lLmlzRGF0ZTtcbnZhciBpc1JlUGF0dGVybiA9IHdpc3BfcnVudGltZS5pc1JlUGF0dGVybjtcbnZhciBpc0RpY3Rpb25hcnkgPSB3aXNwX3J1bnRpbWUuaXNEaWN0aW9uYXJ5O1xudmFyIHN0ciA9IHdpc3BfcnVudGltZS5zdHI7XG52YXIgaW5jID0gd2lzcF9ydW50aW1lLmluYztcbnZhciBzdWJzID0gd2lzcF9ydW50aW1lLnN1YnM7XG52YXIgaXNFcXVhbCA9IHdpc3BfcnVudGltZS5pc0VxdWFsOzs7XG5cbnZhciB3aXRoTWV0YSA9IGZ1bmN0aW9uIHdpdGhNZXRhKHZhbHVlLCBtZXRhZGF0YSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsdWUsIFwibWV0YWRhdGFcIiwge1xuICAgIFwidmFsdWVcIjogbWV0YWRhdGEsXG4gICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbmV4cG9ydHMud2l0aE1ldGEgPSB3aXRoTWV0YTtcblxudmFyIG1ldGEgPSBmdW5jdGlvbiBtZXRhKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgP1xuICAgIHZhbHVlLm1ldGFkYXRhIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMubWV0YSA9IG1ldGE7XG5cbnZhciBfX25zU2VwYXJhdG9yX18gPSBcIuKBhFwiO1xuZXhwb3J0cy5fX25zU2VwYXJhdG9yX18gPSBfX25zU2VwYXJhdG9yX187XG5cbnZhciBTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2wobmFtZXNwYWNlLCBuYW1lKSB7XG4gIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN5bWJvbC50eXBlID0gXCJ3aXNwLnN5bWJvbFwiO1xuXG5TeW1ib2wucHJvdG90eXBlLnR5cGUgPSBTeW1ib2wudHlwZTtcblxuU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbnMgPSBuYW1lc3BhY2UodGhpcyk7XG4gIHJldHVybiBucyA/XG4gICAgXCJcIiArIG5zICsgXCIvXCIgKyAobmFtZSh0aGlzKSkgOlxuICAgIFwiXCIgKyAobmFtZSh0aGlzKSk7XG59O1xuXG52YXIgc3ltYm9sID0gZnVuY3Rpb24gc3ltYm9sKG5zLCBpZCkge1xuICByZXR1cm4gaXNTeW1ib2wobnMpID9cbiAgICBucyA6XG4gIGlzS2V5d29yZChucykgP1xuICAgIG5ldyBTeW1ib2wobmFtZXNwYWNlKG5zKSwgbmFtZShucykpIDpcbiAgaXNOaWwoaWQpID9cbiAgICBuZXcgU3ltYm9sKHZvaWQoMCksIG5zKSA6XG4gIFwiZWxzZVwiID9cbiAgICBuZXcgU3ltYm9sKG5zLCBpZCkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5zeW1ib2wgPSBzeW1ib2w7XG5cbnZhciBpc1N5bWJvbCA9IGZ1bmN0aW9uIGlzU3ltYm9sKHgpIHtcbiAgcmV0dXJuIHggJiYgKFN5bWJvbC50eXBlID09PSB4LnR5cGUpO1xufTtcbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxudmFyIGlzS2V5d29yZCA9IGZ1bmN0aW9uIGlzS2V5d29yZCh4KSB7XG4gIHJldHVybiAoaXNTdHJpbmcoeCkpICYmIChjb3VudCh4KSA+IDEpICYmIChmaXJzdCh4KSA9PT0gXCLqnolcIik7XG59O1xuZXhwb3J0cy5pc0tleXdvcmQgPSBpc0tleXdvcmQ7XG5cbnZhciBrZXl3b3JkID0gZnVuY3Rpb24ga2V5d29yZChucywgaWQpIHtcbiAgcmV0dXJuIGlzS2V5d29yZChucykgP1xuICAgIG5zIDpcbiAgaXNTeW1ib2wobnMpID9cbiAgICBcIlwiICsgXCLqnolcIiArIChuYW1lKG5zKSkgOlxuICBpc05pbChpZCkgP1xuICAgIFwiXCIgKyBcIuqeiVwiICsgbnMgOlxuICBpc05pbChucykgP1xuICAgIFwiXCIgKyBcIuqeiVwiICsgaWQgOlxuICBcImVsc2VcIiA/XG4gICAgXCJcIiArIFwi6p6JXCIgKyBucyArIF9fbnNTZXBhcmF0b3JfXyArIGlkIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMua2V5d29yZCA9IGtleXdvcmQ7XG5cbnZhciBrZXl3b3JkTmFtZSA9IGZ1bmN0aW9uIGtleXdvcmROYW1lKHZhbHVlKSB7XG4gIHJldHVybiBsYXN0KHNwbGl0KHN1YnModmFsdWUsIDEpLCBfX25zU2VwYXJhdG9yX18pKTtcbn07XG5cbnZhciBuYW1lID0gZnVuY3Rpb24gbmFtZSh2YWx1ZSkge1xuICByZXR1cm4gaXNTeW1ib2wodmFsdWUpID9cbiAgICB2YWx1ZS5uYW1lIDpcbiAgaXNLZXl3b3JkKHZhbHVlKSA/XG4gICAga2V5d29yZE5hbWUodmFsdWUpIDpcbiAgaXNTdHJpbmcodmFsdWUpID9cbiAgICB2YWx1ZSA6XG4gIFwiZWxzZVwiID9cbiAgICAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJcIiArIFwiRG9lc24ndCBzdXBwb3J0IG5hbWU6IFwiICsgdmFsdWUpOyB9KSgpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMubmFtZSA9IG5hbWU7XG5cbnZhciBrZXl3b3JkTmFtZXNwYWNlID0gZnVuY3Rpb24ga2V5d29yZE5hbWVzcGFjZSh4KSB7XG4gIHZhciBwYXJ0cyA9IHNwbGl0KHN1YnMoeCwgMSksIF9fbnNTZXBhcmF0b3JfXyk7XG4gIHJldHVybiBjb3VudChwYXJ0cykgPiAxID9cbiAgICAocGFydHMgfHwgMClbMF0gOlxuICAgIHZvaWQoMCk7XG59O1xuXG52YXIgbmFtZXNwYWNlID0gZnVuY3Rpb24gbmFtZXNwYWNlKHgpIHtcbiAgcmV0dXJuIGlzU3ltYm9sKHgpID9cbiAgICB4Lm5hbWVzcGFjZSA6XG4gIGlzS2V5d29yZCh4KSA/XG4gICAga2V5d29yZE5hbWVzcGFjZSh4KSA6XG4gIFwiZWxzZVwiID9cbiAgICAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJcIiArIFwiRG9lc24ndCBzdXBwb3J0cyBuYW1lc3BhY2U6IFwiICsgeCk7IH0pKCkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cbnZhciBnZW5zeW0gPSBmdW5jdGlvbiBnZW5zeW0ocHJlZml4KSB7XG4gIHJldHVybiBzeW1ib2woXCJcIiArIChpc05pbChwcmVmaXgpID9cbiAgICBcIkdfX1wiIDpcbiAgICBwcmVmaXgpICsgKGdlbnN5bS5iYXNlID0gZ2Vuc3ltLmJhc2UgKyAxKSk7XG59O1xuZXhwb3J0cy5nZW5zeW0gPSBnZW5zeW07XG5cbmdlbnN5bS5iYXNlID0gMDtcblxudmFyIGlzVW5xdW90ZSA9IGZ1bmN0aW9uIGlzVW5xdW90ZShmb3JtKSB7XG4gIHJldHVybiAoaXNMaXN0KGZvcm0pKSAmJiAoaXNFcXVhbChmaXJzdChmb3JtKSwgc3ltYm9sKHZvaWQoMCksIFwidW5xdW90ZVwiKSkpO1xufTtcbmV4cG9ydHMuaXNVbnF1b3RlID0gaXNVbnF1b3RlO1xuXG52YXIgaXNVbnF1b3RlU3BsaWNpbmcgPSBmdW5jdGlvbiBpc1VucXVvdGVTcGxpY2luZyhmb3JtKSB7XG4gIHJldHVybiAoaXNMaXN0KGZvcm0pKSAmJiAoaXNFcXVhbChmaXJzdChmb3JtKSwgc3ltYm9sKHZvaWQoMCksIFwidW5xdW90ZS1zcGxpY2luZ1wiKSkpO1xufTtcbmV4cG9ydHMuaXNVbnF1b3RlU3BsaWNpbmcgPSBpc1VucXVvdGVTcGxpY2luZztcblxudmFyIGlzUXVvdGUgPSBmdW5jdGlvbiBpc1F1b3RlKGZvcm0pIHtcbiAgcmV0dXJuIChpc0xpc3QoZm9ybSkpICYmIChpc0VxdWFsKGZpcnN0KGZvcm0pLCBzeW1ib2wodm9pZCgwKSwgXCJxdW90ZVwiKSkpO1xufTtcbmV4cG9ydHMuaXNRdW90ZSA9IGlzUXVvdGU7XG5cbnZhciBpc1N5bnRheFF1b3RlID0gZnVuY3Rpb24gaXNTeW50YXhRdW90ZShmb3JtKSB7XG4gIHJldHVybiAoaXNMaXN0KGZvcm0pKSAmJiAoaXNFcXVhbChmaXJzdChmb3JtKSwgc3ltYm9sKHZvaWQoMCksIFwic3ludGF4LXF1b3RlXCIpKSk7XG59O1xuZXhwb3J0cy5pc1N5bnRheFF1b3RlID0gaXNTeW50YXhRdW90ZTtcblxudmFyIG5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZShuLCBsZW4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKG5zKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gY291bnQobnMpIDwgbGVuID9cbiAgICAgIChucyA9IFwiXCIgKyBcIjBcIiArIG5zLCBsb29wKSA6XG4gICAgICBucztcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoXCJcIiArIG4pO1xufTtcblxudmFyIHF1b3RlU3RyaW5nID0gZnVuY3Rpb24gcXVvdGVTdHJpbmcocykge1xuICBzID0gam9pbihcIlxcXFxcXFwiXCIsIHNwbGl0KHMsIFwiXFxcIlwiKSk7XG4gIHMgPSBqb2luKFwiXFxcXFxcXFxcIiwgc3BsaXQocywgXCJcXFxcXCIpKTtcbiAgcyA9IGpvaW4oXCJcXFxcYlwiLCBzcGxpdChzLCBcIlxiXCIpKTtcbiAgcyA9IGpvaW4oXCJcXFxcZlwiLCBzcGxpdChzLCBcIlxmXCIpKTtcbiAgcyA9IGpvaW4oXCJcXFxcblwiLCBzcGxpdChzLCBcIlxcblwiKSk7XG4gIHMgPSBqb2luKFwiXFxcXHJcIiwgc3BsaXQocywgXCJcXHJcIikpO1xuICBzID0gam9pbihcIlxcXFx0XCIsIHNwbGl0KHMsIFwiXFx0XCIpKTtcbiAgcmV0dXJuIFwiXCIgKyBcIlxcXCJcIiArIHMgKyBcIlxcXCJcIjtcbn07XG5leHBvcnRzLnF1b3RlU3RyaW5nID0gcXVvdGVTdHJpbmc7XG5cbnZhciBwclN0ciA9IGZ1bmN0aW9uIHByU3RyKHgpIHtcbiAgcmV0dXJuIGlzTmlsKHgpID9cbiAgICBcIm5pbFwiIDpcbiAgaXNLZXl3b3JkKHgpID9cbiAgICBuYW1lc3BhY2UoeCkgP1xuICAgICAgXCJcIiArIFwiOlwiICsgKG5hbWVzcGFjZSh4KSkgKyBcIi9cIiArIChuYW1lKHgpKSA6XG4gICAgICBcIlwiICsgXCI6XCIgKyAobmFtZSh4KSkgOlxuICBpc1N0cmluZyh4KSA/XG4gICAgcXVvdGVTdHJpbmcoeCkgOlxuICBpc0RhdGUoeCkgP1xuICAgIFwiXCIgKyBcIiNpbnN0IFxcXCJcIiArICh4LmdldFVUQ0Z1bGxZZWFyKCkpICsgXCItXCIgKyAobm9ybWFsaXplKGluYyh4LmdldFVUQ01vbnRoKCkpLCAyKSkgKyBcIi1cIiArIChub3JtYWxpemUoeC5nZXRVVENEYXRlKCksIDIpKSArIFwiVFwiICsgKG5vcm1hbGl6ZSh4LmdldFVUQ0hvdXJzKCksIDIpKSArIFwiOlwiICsgKG5vcm1hbGl6ZSh4LmdldFVUQ01pbnV0ZXMoKSwgMikpICsgXCI6XCIgKyAobm9ybWFsaXplKHguZ2V0VVRDU2Vjb25kcygpLCAyKSkgKyBcIi5cIiArIChub3JtYWxpemUoeC5nZXRVVENNaWxsaXNlY29uZHMoKSwgMykpICsgXCItXCIgKyBcIjAwOjAwXFxcIlwiIDpcbiAgaXNWZWN0b3IoeCkgP1xuICAgIFwiXCIgKyBcIltcIiArIChqb2luKFwiIFwiLCBtYXAocHJTdHIsIHZlYyh4KSkpKSArIFwiXVwiIDpcbiAgaXNEaWN0aW9uYXJ5KHgpID9cbiAgICBcIlwiICsgXCJ7XCIgKyAoam9pbihcIiwgXCIsIG1hcChmdW5jdGlvbihwYWlyKSB7XG4gICAgICByZXR1cm4gXCJcIiArIChwclN0cihmaXJzdChwYWlyKSkpICsgXCIgXCIgKyAocHJTdHIoc2Vjb25kKHBhaXIpKSk7XG4gICAgfSwgeCkpKSArIFwifVwiIDpcbiAgaXNTZXF1ZW50aWFsKHgpID9cbiAgICBcIlwiICsgXCIoXCIgKyAoam9pbihcIiBcIiwgbWFwKHByU3RyLCB2ZWMoeCkpKSkgKyBcIilcIiA6XG4gIGlzUmVQYXR0ZXJuKHgpID9cbiAgICBcIlwiICsgXCIjXFxcIlwiICsgKGpvaW4oXCJcXFxcL1wiLCBzcGxpdCh4LnNvdXJjZSwgXCIvXCIpKSkgKyBcIlxcXCJcIiA6XG4gIFwiZWxzZVwiID9cbiAgICBcIlwiICsgeCA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnByU3RyID0gcHJTdHIiLCJ2YXIgX25zXyA9IHtcbiAgXCJpZFwiOiBcIndpc3Auc2VxdWVuY2VcIlxufTtcbnZhciB3aXNwX3J1bnRpbWUgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xudmFyIGlzTmlsID0gd2lzcF9ydW50aW1lLmlzTmlsO1xudmFyIGlzVmVjdG9yID0gd2lzcF9ydW50aW1lLmlzVmVjdG9yO1xudmFyIGlzRm4gPSB3aXNwX3J1bnRpbWUuaXNGbjtcbnZhciBpc051bWJlciA9IHdpc3BfcnVudGltZS5pc051bWJlcjtcbnZhciBpc1N0cmluZyA9IHdpc3BfcnVudGltZS5pc1N0cmluZztcbnZhciBpc0RpY3Rpb25hcnkgPSB3aXNwX3J1bnRpbWUuaXNEaWN0aW9uYXJ5O1xudmFyIGtleVZhbHVlcyA9IHdpc3BfcnVudGltZS5rZXlWYWx1ZXM7XG52YXIgc3RyID0gd2lzcF9ydW50aW1lLnN0cjtcbnZhciBkZWMgPSB3aXNwX3J1bnRpbWUuZGVjO1xudmFyIGluYyA9IHdpc3BfcnVudGltZS5pbmM7XG52YXIgbWVyZ2UgPSB3aXNwX3J1bnRpbWUubWVyZ2U7XG52YXIgZGljdGlvbmFyeSA9IHdpc3BfcnVudGltZS5kaWN0aW9uYXJ5Ozs7XG5cbnZhciBMaXN0ID0gZnVuY3Rpb24gTGlzdChoZWFkLCB0YWlsKSB7XG4gIHRoaXMuaGVhZCA9IGhlYWQ7XG4gIHRoaXMudGFpbCA9IHRhaWwgfHwgKGxpc3QoKSk7XG4gIHRoaXMubGVuZ3RoID0gaW5jKGNvdW50KHRoaXMudGFpbCkpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkxpc3QucHJvdG90eXBlLmxlbmd0aCA9IDA7XG5cbkxpc3QudHlwZSA9IFwid2lzcC5saXN0XCI7XG5cbkxpc3QucHJvdG90eXBlLnR5cGUgPSBMaXN0LnR5cGU7XG5cbkxpc3QucHJvdG90eXBlLnRhaWwgPSBPYmplY3QuY3JlYXRlKExpc3QucHJvdG90eXBlKTtcblxuTGlzdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHJlc3VsdCwgbGlzdCkge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IGlzRW1wdHkobGlzdCkgP1xuICAgICAgXCJcIiArIFwiKFwiICsgKHJlc3VsdC5zdWJzdHIoMSkpICsgXCIpXCIgOlxuICAgICAgKHJlc3VsdCA9IFwiXCIgKyByZXN1bHQgKyBcIiBcIiArIChpc1ZlY3RvcihmaXJzdChsaXN0KSkgP1xuICAgICAgICBcIlwiICsgXCJbXCIgKyAoZmlyc3QobGlzdCkuam9pbihcIiBcIikpICsgXCJdXCIgOlxuICAgICAgaXNOaWwoZmlyc3QobGlzdCkpID9cbiAgICAgICAgXCJuaWxcIiA6XG4gICAgICBpc1N0cmluZyhmaXJzdChsaXN0KSkgP1xuICAgICAgICBKU09OLnN0cmluZ2lmeShmaXJzdChsaXN0KSkgOlxuICAgICAgaXNOdW1iZXIoZmlyc3QobGlzdCkpID9cbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZmlyc3QobGlzdCkpIDpcbiAgICAgICAgZmlyc3QobGlzdCkpLCBsaXN0ID0gcmVzdChsaXN0KSwgbG9vcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKFwiXCIsIHRoaXMpO1xufTtcblxudmFyIGxhenlTZXFWYWx1ZSA9IGZ1bmN0aW9uIGxhenlTZXFWYWx1ZShsYXp5U2VxKSB7XG4gIHJldHVybiAhKGxhenlTZXEucmVhbGl6ZWQpID9cbiAgICAobGF6eVNlcS5yZWFsaXplZCA9IHRydWUpICYmIChsYXp5U2VxLnggPSBsYXp5U2VxLngoKSkgOlxuICAgIGxhenlTZXEueDtcbn07XG5cbnZhciBMYXp5U2VxID0gZnVuY3Rpb24gTGF6eVNlcShyZWFsaXplZCwgeCkge1xuICB0aGlzLnJlYWxpemVkID0gcmVhbGl6ZWQgfHwgZmFsc2U7XG4gIHRoaXMueCA9IHg7XG4gIHJldHVybiB0aGlzO1xufTtcblxuTGF6eVNlcS50eXBlID0gXCJ3aXNwLmxhenkuc2VxXCI7XG5cbkxhenlTZXEucHJvdG90eXBlLnR5cGUgPSBMYXp5U2VxLnR5cGU7XG5cbnZhciBsYXp5U2VxID0gZnVuY3Rpb24gbGF6eVNlcShyZWFsaXplZCwgYm9keSkge1xuICByZXR1cm4gbmV3IExhenlTZXEocmVhbGl6ZWQsIGJvZHkpO1xufTtcbmV4cG9ydHMubGF6eVNlcSA9IGxhenlTZXE7XG5cbnZhciBpc0xhenlTZXEgPSBmdW5jdGlvbiBpc0xhenlTZXEodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIChMYXp5U2VxLnR5cGUgPT09IHZhbHVlLnR5cGUpO1xufTtcbmV4cG9ydHMuaXNMYXp5U2VxID0gaXNMYXp5U2VxO1xuXG51bmRlZmluZWQ7XG5cbnZhciBpc0xpc3QgPSBmdW5jdGlvbiBpc0xpc3QodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIChMaXN0LnR5cGUgPT09IHZhbHVlLnR5cGUpO1xufTtcbmV4cG9ydHMuaXNMaXN0ID0gaXNMaXN0O1xuXG52YXIgbGlzdCA9IGZ1bmN0aW9uIGxpc3QoKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAwID9cbiAgICBPYmplY3QuY3JlYXRlKExpc3QucHJvdG90eXBlKSA6XG4gICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5yZWR1Y2VSaWdodChmdW5jdGlvbih0YWlsLCBoZWFkKSB7XG4gICAgICByZXR1cm4gY29ucyhoZWFkLCB0YWlsKTtcbiAgICB9LCBsaXN0KCkpO1xufTtcbmV4cG9ydHMubGlzdCA9IGxpc3Q7XG5cbnZhciBjb25zID0gZnVuY3Rpb24gY29ucyhoZWFkLCB0YWlsKSB7XG4gIHJldHVybiBuZXcgTGlzdChoZWFkLCB0YWlsKTtcbn07XG5leHBvcnRzLmNvbnMgPSBjb25zO1xuXG52YXIgcmV2ZXJzZUxpc3QgPSBmdW5jdGlvbiByZXZlcnNlTGlzdChzZXF1ZW5jZSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoaXRlbXMsIHNvdXJjZSkge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IGlzRW1wdHkoc291cmNlKSA/XG4gICAgICBsaXN0LmFwcGx5KGxpc3QsIGl0ZW1zKSA6XG4gICAgICAoaXRlbXMgPSBbZmlyc3Qoc291cmNlKV0uY29uY2F0KGl0ZW1zKSwgc291cmNlID0gcmVzdChzb3VyY2UpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoW10sIHNlcXVlbmNlKTtcbn07XG5cbnZhciBpc1NlcXVlbnRpYWwgPSBmdW5jdGlvbiBpc1NlcXVlbnRpYWwoeCkge1xuICByZXR1cm4gKGlzTGlzdCh4KSkgfHwgKGlzVmVjdG9yKHgpKSB8fCAoaXNMYXp5U2VxKHgpKSB8fCAoaXNEaWN0aW9uYXJ5KHgpKSB8fCAoaXNTdHJpbmcoeCkpO1xufTtcbmV4cG9ydHMuaXNTZXF1ZW50aWFsID0gaXNTZXF1ZW50aWFsO1xuXG52YXIgcmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2Uoc2VxdWVuY2UpIHtcbiAgcmV0dXJuIGlzTGlzdChzZXF1ZW5jZSkgP1xuICAgIHJldmVyc2VMaXN0KHNlcXVlbmNlKSA6XG4gIGlzVmVjdG9yKHNlcXVlbmNlKSA/XG4gICAgc2VxdWVuY2UucmV2ZXJzZSgpIDpcbiAgaXNOaWwoc2VxdWVuY2UpID9cbiAgICBsaXN0KCkgOlxuICBcImVsc2VcIiA/XG4gICAgcmV2ZXJzZShzZXEoc2VxdWVuY2UpKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnJldmVyc2UgPSByZXZlcnNlO1xuXG52YXIgbWFwID0gZnVuY3Rpb24gbWFwKGYsIHNlcXVlbmNlKSB7XG4gIHJldHVybiBpc1ZlY3RvcihzZXF1ZW5jZSkgP1xuICAgIHNlcXVlbmNlLm1hcChmKSA6XG4gIGlzTGlzdChzZXF1ZW5jZSkgP1xuICAgIG1hcExpc3QoZiwgc2VxdWVuY2UpIDpcbiAgaXNOaWwoc2VxdWVuY2UpID9cbiAgICBsaXN0KCkgOlxuICBcImVsc2VcIiA/XG4gICAgbWFwKGYsIHNlcShzZXF1ZW5jZSkpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMubWFwID0gbWFwO1xuXG52YXIgbWFwTGlzdCA9IGZ1bmN0aW9uIG1hcExpc3QoZiwgc2VxdWVuY2UpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHJlc3VsdCwgaXRlbXMpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBpc0VtcHR5KGl0ZW1zKSA/XG4gICAgICByZXZlcnNlKHJlc3VsdCkgOlxuICAgICAgKHJlc3VsdCA9IGNvbnMoZihmaXJzdChpdGVtcykpLCByZXN1bHQpLCBpdGVtcyA9IHJlc3QoaXRlbXMpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkobGlzdCgpLCBzZXF1ZW5jZSk7XG59O1xuXG52YXIgZmlsdGVyID0gZnVuY3Rpb24gZmlsdGVyKGlzRiwgc2VxdWVuY2UpIHtcbiAgcmV0dXJuIGlzVmVjdG9yKHNlcXVlbmNlKSA/XG4gICAgc2VxdWVuY2UuZmlsdGVyKGlzRikgOlxuICBpc0xpc3Qoc2VxdWVuY2UpID9cbiAgICBmaWx0ZXJMaXN0KGlzRiwgc2VxdWVuY2UpIDpcbiAgaXNOaWwoc2VxdWVuY2UpID9cbiAgICBsaXN0KCkgOlxuICBcImVsc2VcIiA/XG4gICAgZmlsdGVyKGlzRiwgc2VxKHNlcXVlbmNlKSkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG5cbnZhciBmaWx0ZXJMaXN0ID0gZnVuY3Rpb24gZmlsdGVyTGlzdChpc0YsIHNlcXVlbmNlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChyZXN1bHQsIGl0ZW1zKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShpdGVtcykgP1xuICAgICAgcmV2ZXJzZShyZXN1bHQpIDpcbiAgICAgIChyZXN1bHQgPSBpc0YoZmlyc3QoaXRlbXMpKSA/XG4gICAgICAgIGNvbnMoZmlyc3QoaXRlbXMpLCByZXN1bHQpIDpcbiAgICAgICAgcmVzdWx0LCBpdGVtcyA9IHJlc3QoaXRlbXMpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkobGlzdCgpLCBzZXF1ZW5jZSk7XG59O1xuXG52YXIgcmVkdWNlID0gZnVuY3Rpb24gcmVkdWNlKGYpIHtcbiAgdmFyIHBhcmFtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhhc0luaXRpYWwgPSBjb3VudChwYXJhbXMpID49IDI7XG4gICAgdmFyIGluaXRpYWwgPSBoYXNJbml0aWFsID9cbiAgICAgIGZpcnN0KHBhcmFtcykgOlxuICAgICAgdm9pZCgwKTtcbiAgICB2YXIgc2VxdWVuY2UgPSBoYXNJbml0aWFsID9cbiAgICAgIHNlY29uZChwYXJhbXMpIDpcbiAgICAgIGZpcnN0KHBhcmFtcyk7XG4gICAgcmV0dXJuIGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgICBpbml0aWFsIDpcbiAgICBpc1ZlY3RvcihzZXF1ZW5jZSkgP1xuICAgICAgaGFzSW5pdGlhbCA/XG4gICAgICAgIHNlcXVlbmNlLnJlZHVjZShmLCBpbml0aWFsKSA6XG4gICAgICAgIHNlcXVlbmNlLnJlZHVjZShmKSA6XG4gICAgaXNMaXN0KHNlcXVlbmNlKSA/XG4gICAgICBoYXNJbml0aWFsID9cbiAgICAgICAgcmVkdWNlTGlzdChmLCBpbml0aWFsLCBzZXF1ZW5jZSkgOlxuICAgICAgICByZWR1Y2VMaXN0KGYsIGZpcnN0KHNlcXVlbmNlKSwgcmVzdChzZXF1ZW5jZSkpIDpcbiAgICBcImVsc2VcIiA/XG4gICAgICByZWR1Y2UoZiwgaW5pdGlhbCwgc2VxKHNlcXVlbmNlKSkgOlxuICAgICAgdm9pZCgwKTtcbiAgfSkoKTtcbn07XG5leHBvcnRzLnJlZHVjZSA9IHJlZHVjZTtcblxudmFyIHJlZHVjZUxpc3QgPSBmdW5jdGlvbiByZWR1Y2VMaXN0KGYsIGluaXRpYWwsIHNlcXVlbmNlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChyZXN1bHQsIGl0ZW1zKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShpdGVtcykgP1xuICAgICAgcmVzdWx0IDpcbiAgICAgIChyZXN1bHQgPSBmKHJlc3VsdCwgZmlyc3QoaXRlbXMpKSwgaXRlbXMgPSByZXN0KGl0ZW1zKSwgbG9vcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKGluaXRpYWwsIHNlcXVlbmNlKTtcbn07XG5cbnZhciBjb3VudCA9IGZ1bmN0aW9uIGNvdW50KHNlcXVlbmNlKSB7XG4gIHJldHVybiBpc05pbChzZXF1ZW5jZSkgP1xuICAgIDAgOlxuICAgIChzZXEoc2VxdWVuY2UpKS5sZW5ndGg7XG59O1xuZXhwb3J0cy5jb3VudCA9IGNvdW50O1xuXG52YXIgaXNFbXB0eSA9IGZ1bmN0aW9uIGlzRW1wdHkoc2VxdWVuY2UpIHtcbiAgcmV0dXJuIGNvdW50KHNlcXVlbmNlKSA9PT0gMDtcbn07XG5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuXG52YXIgZmlyc3QgPSBmdW5jdGlvbiBmaXJzdChzZXF1ZW5jZSkge1xuICByZXR1cm4gaXNOaWwoc2VxdWVuY2UpID9cbiAgICB2b2lkKDApIDpcbiAgaXNMaXN0KHNlcXVlbmNlKSA/XG4gICAgc2VxdWVuY2UuaGVhZCA6XG4gIChpc1ZlY3RvcihzZXF1ZW5jZSkpIHx8IChpc1N0cmluZyhzZXF1ZW5jZSkpID9cbiAgICAoc2VxdWVuY2UgfHwgMClbMF0gOlxuICBpc0xhenlTZXEoc2VxdWVuY2UpID9cbiAgICBmaXJzdChsYXp5U2VxVmFsdWUoc2VxdWVuY2UpKSA6XG4gIFwiZWxzZVwiID9cbiAgICBmaXJzdChzZXEoc2VxdWVuY2UpKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmZpcnN0ID0gZmlyc3Q7XG5cbnZhciBzZWNvbmQgPSBmdW5jdGlvbiBzZWNvbmQoc2VxdWVuY2UpIHtcbiAgcmV0dXJuIGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgdm9pZCgwKSA6XG4gIGlzTGlzdChzZXF1ZW5jZSkgP1xuICAgIGZpcnN0KHJlc3Qoc2VxdWVuY2UpKSA6XG4gIChpc1ZlY3RvcihzZXF1ZW5jZSkpIHx8IChpc1N0cmluZyhzZXF1ZW5jZSkpID9cbiAgICAoc2VxdWVuY2UgfHwgMClbMV0gOlxuICBpc0xhenlTZXEoc2VxdWVuY2UpID9cbiAgICBzZWNvbmQobGF6eVNlcVZhbHVlKHNlcXVlbmNlKSkgOlxuICBcImVsc2VcIiA/XG4gICAgZmlyc3QocmVzdChzZXEoc2VxdWVuY2UpKSkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5zZWNvbmQgPSBzZWNvbmQ7XG5cbnZhciB0aGlyZCA9IGZ1bmN0aW9uIHRoaXJkKHNlcXVlbmNlKSB7XG4gIHJldHVybiBpc05pbChzZXF1ZW5jZSkgP1xuICAgIHZvaWQoMCkgOlxuICBpc0xpc3Qoc2VxdWVuY2UpID9cbiAgICBmaXJzdChyZXN0KHJlc3Qoc2VxdWVuY2UpKSkgOlxuICAoaXNWZWN0b3Ioc2VxdWVuY2UpKSB8fCAoaXNTdHJpbmcoc2VxdWVuY2UpKSA/XG4gICAgKHNlcXVlbmNlIHx8IDApWzJdIDpcbiAgaXNMYXp5U2VxKHNlcXVlbmNlKSA/XG4gICAgdGhpcmQobGF6eVNlcVZhbHVlKHNlcXVlbmNlKSkgOlxuICBcImVsc2VcIiA/XG4gICAgc2Vjb25kKHJlc3Qoc2VxKHNlcXVlbmNlKSkpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMudGhpcmQgPSB0aGlyZDtcblxudmFyIHJlc3QgPSBmdW5jdGlvbiByZXN0KHNlcXVlbmNlKSB7XG4gIHJldHVybiBpc05pbChzZXF1ZW5jZSkgP1xuICAgIGxpc3QoKSA6XG4gIGlzTGlzdChzZXF1ZW5jZSkgP1xuICAgIHNlcXVlbmNlLnRhaWwgOlxuICAoaXNWZWN0b3Ioc2VxdWVuY2UpKSB8fCAoaXNTdHJpbmcoc2VxdWVuY2UpKSA/XG4gICAgc2VxdWVuY2Uuc2xpY2UoMSkgOlxuICBpc0xhenlTZXEoc2VxdWVuY2UpID9cbiAgICByZXN0KGxhenlTZXFWYWx1ZShzZXF1ZW5jZSkpIDpcbiAgXCJlbHNlXCIgP1xuICAgIHJlc3Qoc2VxKHNlcXVlbmNlKSkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5yZXN0ID0gcmVzdDtcblxudmFyIGxhc3RPZkxpc3QgPSBmdW5jdGlvbiBsYXN0T2ZMaXN0KGxpc3QpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKGl0ZW0sIGl0ZW1zKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShpdGVtcykgP1xuICAgICAgaXRlbSA6XG4gICAgICAoaXRlbSA9IGZpcnN0KGl0ZW1zKSwgaXRlbXMgPSByZXN0KGl0ZW1zKSwgbG9vcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKGZpcnN0KGxpc3QpLCByZXN0KGxpc3QpKTtcbn07XG5cbnZhciBsYXN0ID0gZnVuY3Rpb24gbGFzdChzZXF1ZW5jZSkge1xuICByZXR1cm4gKGlzVmVjdG9yKHNlcXVlbmNlKSkgfHwgKGlzU3RyaW5nKHNlcXVlbmNlKSkgP1xuICAgIChzZXF1ZW5jZSB8fCAwKVtkZWMoY291bnQoc2VxdWVuY2UpKV0gOlxuICBpc0xpc3Qoc2VxdWVuY2UpID9cbiAgICBsYXN0T2ZMaXN0KHNlcXVlbmNlKSA6XG4gIGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgdm9pZCgwKSA6XG4gIGlzTGF6eVNlcShzZXF1ZW5jZSkgP1xuICAgIGxhc3QobGF6eVNlcVZhbHVlKHNlcXVlbmNlKSkgOlxuICBcImVsc2VcIiA/XG4gICAgbGFzdChzZXEoc2VxdWVuY2UpKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmxhc3QgPSBsYXN0O1xuXG52YXIgYnV0bGFzdCA9IGZ1bmN0aW9uIGJ1dGxhc3Qoc2VxdWVuY2UpIHtcbiAgdmFyIGl0ZW1zID0gaXNOaWwoc2VxdWVuY2UpID9cbiAgICB2b2lkKDApIDpcbiAgaXNTdHJpbmcoc2VxdWVuY2UpID9cbiAgICBzdWJzKHNlcXVlbmNlLCAwLCBkZWMoY291bnQoc2VxdWVuY2UpKSkgOlxuICBpc1ZlY3RvcihzZXF1ZW5jZSkgP1xuICAgIHNlcXVlbmNlLnNsaWNlKDAsIGRlYyhjb3VudChzZXF1ZW5jZSkpKSA6XG4gIGlzTGlzdChzZXF1ZW5jZSkgP1xuICAgIGxpc3QuYXBwbHkobGlzdCwgYnV0bGFzdCh2ZWMoc2VxdWVuY2UpKSkgOlxuICBpc0xhenlTZXEoc2VxdWVuY2UpID9cbiAgICBidXRsYXN0KGxhenlTZXFWYWx1ZShzZXF1ZW5jZSkpIDpcbiAgXCJlbHNlXCIgP1xuICAgIGJ1dGxhc3Qoc2VxKHNlcXVlbmNlKSkgOlxuICAgIHZvaWQoMCk7XG4gIHJldHVybiAhKChpc05pbChpdGVtcykpIHx8IChpc0VtcHR5KGl0ZW1zKSkpID9cbiAgICBpdGVtcyA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmJ1dGxhc3QgPSBidXRsYXN0O1xuXG52YXIgdGFrZSA9IGZ1bmN0aW9uIHRha2Uobiwgc2VxdWVuY2UpIHtcbiAgcmV0dXJuIGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgbGlzdCgpIDpcbiAgaXNWZWN0b3Ioc2VxdWVuY2UpID9cbiAgICB0YWtlRnJvbVZlY3RvcihuLCBzZXF1ZW5jZSkgOlxuICBpc0xpc3Qoc2VxdWVuY2UpID9cbiAgICB0YWtlRnJvbUxpc3Qobiwgc2VxdWVuY2UpIDpcbiAgaXNMYXp5U2VxKHNlcXVlbmNlKSA/XG4gICAgdGFrZShuLCBsYXp5U2VxVmFsdWUoc2VxdWVuY2UpKSA6XG4gIFwiZWxzZVwiID9cbiAgICB0YWtlKG4sIHNlcShzZXF1ZW5jZSkpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMudGFrZSA9IHRha2U7XG5cbnZhciB0YWtlVmVjdG9yV2hpbGUgPSBmdW5jdGlvbiB0YWtlVmVjdG9yV2hpbGUocHJlZGljYXRlLCB2ZWN0b3IpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHJlc3VsdCwgdGFpbCwgaGVhZCkge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9ICghKGlzRW1wdHkodGFpbCkpKSAmJiAocHJlZGljYXRlKGhlYWQpKSA/XG4gICAgICAocmVzdWx0ID0gY29uaihyZXN1bHQsIGhlYWQpLCB0YWlsID0gcmVzdCh0YWlsKSwgaGVhZCA9IGZpcnN0KHRhaWwpLCBsb29wKSA6XG4gICAgICByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKFtdLCB2ZWN0b3IsIGZpcnN0KHZlY3RvcikpO1xufTtcblxudmFyIHRha2VMaXN0V2hpbGUgPSBmdW5jdGlvbiB0YWtlTGlzdFdoaWxlKHByZWRpY2F0ZSwgaXRlbXMpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHJlc3VsdCwgdGFpbCwgaGVhZCkge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9ICghKGlzRW1wdHkodGFpbCkpKSAmJiAoaXNQcmVkaWNhdGUoaGVhZCkpID9cbiAgICAgIChyZXN1bHQgPSBjb25qKHJlc3VsdCwgaGVhZCksIHRhaWwgPSByZXN0KHRhaWwpLCBoZWFkID0gZmlyc3QodGFpbCksIGxvb3ApIDpcbiAgICAgIGxpc3QuYXBwbHkobGlzdCwgcmVzdWx0KTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoW10sIGl0ZW1zLCBmaXJzdChpdGVtcykpO1xufTtcblxudmFyIHRha2VXaGlsZSA9IGZ1bmN0aW9uIHRha2VXaGlsZShwcmVkaWNhdGUsIHNlcXVlbmNlKSB7XG4gIHJldHVybiBpc05pbChzZXF1ZW5jZSkgP1xuICAgIGxpc3QoKSA6XG4gIGlzVmVjdG9yKHNlcXVlbmNlKSA/XG4gICAgdGFrZVZlY3RvcldoaWxlKHByZWRpY2F0ZSwgc2VxdWVuY2UpIDpcbiAgaXNMaXN0KHNlcXVlbmNlKSA/XG4gICAgdGFrZVZlY3RvcldoaWxlKHByZWRpY2F0ZSwgc2VxdWVuY2UpIDpcbiAgXCJlbHNlXCIgP1xuICAgIHRha2VXaGlsZShwcmVkaWNhdGUsIGxhenlTZXFWYWx1ZShzZXF1ZW5jZSkpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMudGFrZVdoaWxlID0gdGFrZVdoaWxlO1xuXG52YXIgdGFrZUZyb21WZWN0b3IgPSBmdW5jdGlvbiB0YWtlRnJvbVZlY3RvcihuLCB2ZWN0b3IpIHtcbiAgcmV0dXJuIHZlY3Rvci5zbGljZSgwLCBuKTtcbn07XG5cbnZhciB0YWtlRnJvbUxpc3QgPSBmdW5jdGlvbiB0YWtlRnJvbUxpc3Qobiwgc2VxdWVuY2UpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHRha2VuLCBpdGVtcywgbikge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IChuID09PSAwKSB8fCAoaXNFbXB0eShpdGVtcykpID9cbiAgICAgIHJldmVyc2UodGFrZW4pIDpcbiAgICAgICh0YWtlbiA9IGNvbnMoZmlyc3QoaXRlbXMpLCB0YWtlbiksIGl0ZW1zID0gcmVzdChpdGVtcyksIG4gPSBkZWMobiksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShsaXN0KCksIHNlcXVlbmNlLCBuKTtcbn07XG5cbnZhciBkcm9wRnJvbUxpc3QgPSBmdW5jdGlvbiBkcm9wRnJvbUxpc3Qobiwgc2VxdWVuY2UpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKGxlZnQsIGl0ZW1zKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gKGxlZnQgPCAxKSB8fCAoaXNFbXB0eShpdGVtcykpID9cbiAgICAgIGl0ZW1zIDpcbiAgICAgIChsZWZ0ID0gZGVjKGxlZnQpLCBpdGVtcyA9IHJlc3QoaXRlbXMpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkobiwgc2VxdWVuY2UpO1xufTtcblxudmFyIGRyb3AgPSBmdW5jdGlvbiBkcm9wKG4sIHNlcXVlbmNlKSB7XG4gIHJldHVybiBuIDw9IDAgP1xuICAgIHNlcXVlbmNlIDpcbiAgaXNTdHJpbmcoc2VxdWVuY2UpID9cbiAgICBzZXF1ZW5jZS5zdWJzdHIobikgOlxuICBpc1ZlY3RvcihzZXF1ZW5jZSkgP1xuICAgIHNlcXVlbmNlLnNsaWNlKG4pIDpcbiAgaXNMaXN0KHNlcXVlbmNlKSA/XG4gICAgZHJvcEZyb21MaXN0KG4sIHNlcXVlbmNlKSA6XG4gIGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgbGlzdCgpIDpcbiAgaXNMYXp5U2VxKHNlcXVlbmNlKSA/XG4gICAgZHJvcChuLCBsYXp5U2VxVmFsdWUoc2VxdWVuY2UpKSA6XG4gIFwiZWxzZVwiID9cbiAgICBkcm9wKG4sIHNlcShzZXF1ZW5jZSkpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMuZHJvcCA9IGRyb3A7XG5cbnZhciBjb25qTGlzdCA9IGZ1bmN0aW9uIGNvbmpMaXN0KHNlcXVlbmNlLCBpdGVtcykge1xuICByZXR1cm4gcmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgaXRlbSkge1xuICAgIHJldHVybiBjb25zKGl0ZW0sIHJlc3VsdCk7XG4gIH0sIHNlcXVlbmNlLCBpdGVtcyk7XG59O1xuXG52YXIgY29uaiA9IGZ1bmN0aW9uIGNvbmooc2VxdWVuY2UpIHtcbiAgdmFyIGl0ZW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgcmV0dXJuIGlzVmVjdG9yKHNlcXVlbmNlKSA/XG4gICAgc2VxdWVuY2UuY29uY2F0KGl0ZW1zKSA6XG4gIGlzU3RyaW5nKHNlcXVlbmNlKSA/XG4gICAgXCJcIiArIHNlcXVlbmNlICsgKHN0ci5hcHBseShzdHIsIGl0ZW1zKSkgOlxuICBpc05pbChzZXF1ZW5jZSkgP1xuICAgIGxpc3QuYXBwbHkobGlzdCwgcmV2ZXJzZShpdGVtcykpIDpcbiAgKGlzTGlzdChzZXF1ZW5jZSkpIHx8IChpc0xhenlTZXEoKSkgP1xuICAgIGNvbmpMaXN0KHNlcXVlbmNlLCBpdGVtcykgOlxuICBpc0RpY3Rpb25hcnkoc2VxdWVuY2UpID9cbiAgICBtZXJnZShzZXF1ZW5jZSwgbWVyZ2UuYXBwbHkobWVyZ2UsIGl0ZW1zKSkgOlxuICBcImVsc2VcIiA/XG4gICAgKGZ1bmN0aW9uKCkgeyB0aHJvdyBUeXBlRXJyb3IoXCJcIiArIFwiVHlwZSBjYW4ndCBiZSBjb25qb2luZWQgXCIgKyBzZXF1ZW5jZSk7IH0pKCkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5jb25qID0gY29uajtcblxudmFyIGFzc29jID0gZnVuY3Rpb24gYXNzb2Moc291cmNlKSB7XG4gIHZhciBrZXlWYWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gY29uaihzb3VyY2UsIGRpY3Rpb25hcnkuYXBwbHkoZGljdGlvbmFyeSwga2V5VmFsdWVzKSk7XG59O1xuZXhwb3J0cy5hc3NvYyA9IGFzc29jO1xuXG52YXIgY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0KCkge1xuICB2YXIgc2VxdWVuY2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIHJldmVyc2UocmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgc2VxdWVuY2UpIHtcbiAgICByZXR1cm4gcmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgaXRlbSkge1xuICAgICAgcmV0dXJuIGNvbnMoaXRlbSwgcmVzdWx0KTtcbiAgICB9LCByZXN1bHQsIHNlcShzZXF1ZW5jZSkpO1xuICB9LCBsaXN0KCksIHNlcXVlbmNlcykpO1xufTtcbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0O1xuXG52YXIgc2VxID0gZnVuY3Rpb24gc2VxKHNlcXVlbmNlKSB7XG4gIHJldHVybiBpc05pbChzZXF1ZW5jZSkgP1xuICAgIHZvaWQoMCkgOlxuICAoaXNWZWN0b3Ioc2VxdWVuY2UpKSB8fCAoaXNMaXN0KHNlcXVlbmNlKSkgfHwgKGlzTGF6eVNlcShzZXF1ZW5jZSkpID9cbiAgICBzZXF1ZW5jZSA6XG4gIGlzU3RyaW5nKHNlcXVlbmNlKSA/XG4gICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2VxdWVuY2UpIDpcbiAgaXNEaWN0aW9uYXJ5KHNlcXVlbmNlKSA/XG4gICAga2V5VmFsdWVzKHNlcXVlbmNlKSA6XG4gIFwiZGVmYXVsdFwiID9cbiAgICAoZnVuY3Rpb24oKSB7IHRocm93IFR5cGVFcnJvcihcIlwiICsgXCJDYW4gbm90IHNlcSBcIiArIHNlcXVlbmNlKTsgfSkoKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnNlcSA9IHNlcTtcblxudmFyIGlzU2VxID0gZnVuY3Rpb24gaXNTZXEoc2VxdWVuY2UpIHtcbiAgcmV0dXJuIChpc0xpc3Qoc2VxdWVuY2UpKSB8fCAoaXNMYXp5U2VxKHNlcXVlbmNlKSk7XG59O1xuZXhwb3J0cy5pc1NlcSA9IGlzU2VxO1xuXG52YXIgbGlzdFRvVmVjdG9yID0gZnVuY3Rpb24gbGlzdFRvVmVjdG9yKHNvdXJjZSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AocmVzdWx0LCBsaXN0KSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShsaXN0KSA/XG4gICAgICByZXN1bHQgOlxuICAgICAgKHJlc3VsdCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goZmlyc3QobGlzdCkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSkoKSwgbGlzdCA9IHJlc3QobGlzdCksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShbXSwgc291cmNlKTtcbn07XG5cbnZhciB2ZWMgPSBmdW5jdGlvbiB2ZWMoc2VxdWVuY2UpIHtcbiAgcmV0dXJuIGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgW10gOlxuICBpc1ZlY3RvcihzZXF1ZW5jZSkgP1xuICAgIHNlcXVlbmNlIDpcbiAgaXNMaXN0KHNlcXVlbmNlKSA/XG4gICAgbGlzdFRvVmVjdG9yKHNlcXVlbmNlKSA6XG4gIFwiZWxzZVwiID9cbiAgICB2ZWMoc2VxKHNlcXVlbmNlKSkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy52ZWMgPSB2ZWM7XG5cbnZhciBzb3J0ID0gZnVuY3Rpb24gc29ydChmLCBpdGVtcykge1xuICB2YXIgaGFzQ29tcGFyYXRvciA9IGlzRm4oZik7XG4gIHZhciBpdGVtcyA9ICghKGhhc0NvbXBhcmF0b3IpKSAmJiAoaXNOaWwoaXRlbXMpKSA/XG4gICAgZiA6XG4gICAgaXRlbXM7XG4gIHZhciBjb21wYXJlID0gaGFzQ29tcGFyYXRvciA/XG4gICAgZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGYoYSwgYikgP1xuICAgICAgICAwIDpcbiAgICAgICAgMTtcbiAgICB9IDpcbiAgICB2b2lkKDApO1xuICByZXR1cm4gaXNOaWwoaXRlbXMpID9cbiAgICBsaXN0KCkgOlxuICBpc1ZlY3RvcihpdGVtcykgP1xuICAgIGl0ZW1zLnNvcnQoY29tcGFyZSkgOlxuICBpc0xpc3QoaXRlbXMpID9cbiAgICBsaXN0LmFwcGx5KGxpc3QsIHZlYyhpdGVtcykuc29ydChjb21wYXJlKSkgOlxuICBpc0RpY3Rpb25hcnkoaXRlbXMpID9cbiAgICBzZXEoaXRlbXMpLnNvcnQoY29tcGFyZSkgOlxuICBcImVsc2VcIiA/XG4gICAgc29ydChmLCBzZXEoaXRlbXMpKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuXG52YXIgcmVwZWF0ID0gZnVuY3Rpb24gcmVwZWF0KG4sIHgpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKG4sIHJlc3VsdCkge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IG4gPD0gMCA/XG4gICAgICByZXN1bHQgOlxuICAgICAgKG4gPSBkZWMobiksIHJlc3VsdCA9IGNvbmoocmVzdWx0LCB4KSwgbG9vcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKG4sIFtdKTtcbn07XG5leHBvcnRzLnJlcGVhdCA9IHJlcGVhdCIsInZhciBfbnNfID0ge1xuICBcImlkXCI6IFwid2lzcC5yZWFkZXJcIixcbiAgXCJkb2NcIjogXCJSZWFkZXIgbW9kdWxlIHByb3ZpZGVzIGZ1bmN0aW9ucyBmb3IgcmVhZGluZyB0ZXh0IGlucHV0XFxuICBhcyB3aXNwIGRhdGEgc3RydWN0dXJlc1wiXG59O1xudmFyIHdpc3Bfc2VxdWVuY2UgPSByZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKTtcbnZhciBsaXN0ID0gd2lzcF9zZXF1ZW5jZS5saXN0O1xudmFyIGlzTGlzdCA9IHdpc3Bfc2VxdWVuY2UuaXNMaXN0O1xudmFyIGNvdW50ID0gd2lzcF9zZXF1ZW5jZS5jb3VudDtcbnZhciBpc0VtcHR5ID0gd2lzcF9zZXF1ZW5jZS5pc0VtcHR5O1xudmFyIGZpcnN0ID0gd2lzcF9zZXF1ZW5jZS5maXJzdDtcbnZhciBzZWNvbmQgPSB3aXNwX3NlcXVlbmNlLnNlY29uZDtcbnZhciB0aGlyZCA9IHdpc3Bfc2VxdWVuY2UudGhpcmQ7XG52YXIgcmVzdCA9IHdpc3Bfc2VxdWVuY2UucmVzdDtcbnZhciBtYXAgPSB3aXNwX3NlcXVlbmNlLm1hcDtcbnZhciB2ZWMgPSB3aXNwX3NlcXVlbmNlLnZlYztcbnZhciBjb25zID0gd2lzcF9zZXF1ZW5jZS5jb25zO1xudmFyIGNvbmogPSB3aXNwX3NlcXVlbmNlLmNvbmo7XG52YXIgY29uY2F0ID0gd2lzcF9zZXF1ZW5jZS5jb25jYXQ7XG52YXIgbGFzdCA9IHdpc3Bfc2VxdWVuY2UubGFzdDtcbnZhciBidXRsYXN0ID0gd2lzcF9zZXF1ZW5jZS5idXRsYXN0O1xudmFyIHNvcnQgPSB3aXNwX3NlcXVlbmNlLnNvcnQ7XG52YXIgbGF6eVNlcSA9IHdpc3Bfc2VxdWVuY2UubGF6eVNlcTs7XG52YXIgd2lzcF9ydW50aW1lID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcbnZhciBpc09kZCA9IHdpc3BfcnVudGltZS5pc09kZDtcbnZhciBkaWN0aW9uYXJ5ID0gd2lzcF9ydW50aW1lLmRpY3Rpb25hcnk7XG52YXIga2V5cyA9IHdpc3BfcnVudGltZS5rZXlzO1xudmFyIGlzTmlsID0gd2lzcF9ydW50aW1lLmlzTmlsO1xudmFyIGluYyA9IHdpc3BfcnVudGltZS5pbmM7XG52YXIgZGVjID0gd2lzcF9ydW50aW1lLmRlYztcbnZhciBpc1ZlY3RvciA9IHdpc3BfcnVudGltZS5pc1ZlY3RvcjtcbnZhciBpc1N0cmluZyA9IHdpc3BfcnVudGltZS5pc1N0cmluZztcbnZhciBpc051bWJlciA9IHdpc3BfcnVudGltZS5pc051bWJlcjtcbnZhciBpc0Jvb2xlYW4gPSB3aXNwX3J1bnRpbWUuaXNCb29sZWFuO1xudmFyIGlzT2JqZWN0ID0gd2lzcF9ydW50aW1lLmlzT2JqZWN0O1xudmFyIGlzRGljdGlvbmFyeSA9IHdpc3BfcnVudGltZS5pc0RpY3Rpb25hcnk7XG52YXIgcmVQYXR0ZXJuID0gd2lzcF9ydW50aW1lLnJlUGF0dGVybjtcbnZhciByZU1hdGNoZXMgPSB3aXNwX3J1bnRpbWUucmVNYXRjaGVzO1xudmFyIHJlRmluZCA9IHdpc3BfcnVudGltZS5yZUZpbmQ7XG52YXIgc3RyID0gd2lzcF9ydW50aW1lLnN0cjtcbnZhciBzdWJzID0gd2lzcF9ydW50aW1lLnN1YnM7XG52YXIgY2hhciA9IHdpc3BfcnVudGltZS5jaGFyO1xudmFyIHZhbHMgPSB3aXNwX3J1bnRpbWUudmFscztcbnZhciBpc0VxdWFsID0gd2lzcF9ydW50aW1lLmlzRXF1YWw7O1xudmFyIHdpc3BfYXN0ID0gcmVxdWlyZShcIi4vYXN0XCIpO1xudmFyIGlzU3ltYm9sID0gd2lzcF9hc3QuaXNTeW1ib2w7XG52YXIgc3ltYm9sID0gd2lzcF9hc3Quc3ltYm9sO1xudmFyIGlzS2V5d29yZCA9IHdpc3BfYXN0LmlzS2V5d29yZDtcbnZhciBrZXl3b3JkID0gd2lzcF9hc3Qua2V5d29yZDtcbnZhciBtZXRhID0gd2lzcF9hc3QubWV0YTtcbnZhciB3aXRoTWV0YSA9IHdpc3BfYXN0LndpdGhNZXRhO1xudmFyIG5hbWUgPSB3aXNwX2FzdC5uYW1lO1xudmFyIGdlbnN5bSA9IHdpc3BfYXN0LmdlbnN5bTs7XG52YXIgd2lzcF9zdHJpbmcgPSByZXF1aXJlKFwiLi9zdHJpbmdcIik7XG52YXIgc3BsaXQgPSB3aXNwX3N0cmluZy5zcGxpdDtcbnZhciBqb2luID0gd2lzcF9zdHJpbmcuam9pbjs7O1xuXG52YXIgcHVzaEJhY2tSZWFkZXIgPSBmdW5jdGlvbiBwdXNoQmFja1JlYWRlcihzb3VyY2UsIHVyaSkge1xuICByZXR1cm4ge1xuICAgIFwibGluZXNcIjogc3BsaXQoc291cmNlLCBcIlxcblwiKSxcbiAgICBcImJ1ZmZlclwiOiBcIlwiLFxuICAgIFwidXJpXCI6IHVyaSxcbiAgICBcImNvbHVtblwiOiAtMSxcbiAgICBcImxpbmVcIjogMFxuICB9O1xufTtcbmV4cG9ydHMucHVzaEJhY2tSZWFkZXIgPSBwdXNoQmFja1JlYWRlcjtcblxudmFyIHBlZWtDaGFyID0gZnVuY3Rpb24gcGVla0NoYXIocmVhZGVyKSB7XG4gIHZhciBsaW5lID0gKChyZWFkZXIgfHwgMClbXCJsaW5lc1wiXSlbKHJlYWRlciB8fCAwKVtcImxpbmVcIl1dO1xuICB2YXIgY29sdW1uID0gaW5jKChyZWFkZXIgfHwgMClbXCJjb2x1bW5cIl0pO1xuICByZXR1cm4gaXNOaWwobGluZSkgP1xuICAgIHZvaWQoMCkgOlxuICAgIChsaW5lW2NvbHVtbl0pIHx8IFwiXFxuXCI7XG59O1xuZXhwb3J0cy5wZWVrQ2hhciA9IHBlZWtDaGFyO1xuXG52YXIgcmVhZENoYXIgPSBmdW5jdGlvbiByZWFkQ2hhcihyZWFkZXIpIHtcbiAgdmFyIGNoID0gcGVla0NoYXIocmVhZGVyKTtcbiAgaXNOZXdsaW5lKHBlZWtDaGFyKHJlYWRlcikpID9cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAocmVhZGVyIHx8IDApW1wibGluZVwiXSA9IGluYygocmVhZGVyIHx8IDApW1wibGluZVwiXSk7XG4gICAgICByZXR1cm4gKHJlYWRlciB8fCAwKVtcImNvbHVtblwiXSA9IC0xO1xuICAgIH0pKCkgOlxuICAgIChyZWFkZXIgfHwgMClbXCJjb2x1bW5cIl0gPSBpbmMoKHJlYWRlciB8fCAwKVtcImNvbHVtblwiXSk7XG4gIHJldHVybiBjaDtcbn07XG5leHBvcnRzLnJlYWRDaGFyID0gcmVhZENoYXI7XG5cbnZhciBpc05ld2xpbmUgPSBmdW5jdGlvbiBpc05ld2xpbmUoY2gpIHtcbiAgcmV0dXJuIFwiXFxuXCIgPT09IGNoO1xufTtcbmV4cG9ydHMuaXNOZXdsaW5lID0gaXNOZXdsaW5lO1xuXG52YXIgaXNCcmVha2luZ1doaXRlc3BhY2UgPSBmdW5jdGlvbiBpc0JyZWFraW5nV2hpdGVzcGFjZShjaCkge1xuICByZXR1cm4gKGNoID09PSBcIiBcIikgfHwgKGNoID09PSBcIlxcdFwiKSB8fCAoY2ggPT09IFwiXFxuXCIpIHx8IChjaCA9PT0gXCJcXHJcIik7XG59O1xuZXhwb3J0cy5pc0JyZWFraW5nV2hpdGVzcGFjZSA9IGlzQnJlYWtpbmdXaGl0ZXNwYWNlO1xuXG52YXIgaXNXaGl0ZXNwYWNlID0gZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKGNoKSB7XG4gIHJldHVybiAoaXNCcmVha2luZ1doaXRlc3BhY2UoY2gpKSB8fCAoXCIsXCIgPT09IGNoKTtcbn07XG5leHBvcnRzLmlzV2hpdGVzcGFjZSA9IGlzV2hpdGVzcGFjZTtcblxudmFyIGlzTnVtZXJpYyA9IGZ1bmN0aW9uIGlzTnVtZXJpYyhjaCkge1xuICByZXR1cm4gKGNoID09PSBcIjBcIikgfHwgKGNoID09PSBcIjFcIikgfHwgKGNoID09PSBcIjJcIikgfHwgKGNoID09PSBcIjNcIikgfHwgKGNoID09PSBcIjRcIikgfHwgKGNoID09PSBcIjVcIikgfHwgKGNoID09PSBcIjZcIikgfHwgKGNoID09PSBcIjdcIikgfHwgKGNoID09PSBcIjhcIikgfHwgKGNoID09PSBcIjlcIik7XG59O1xuZXhwb3J0cy5pc051bWVyaWMgPSBpc051bWVyaWM7XG5cbnZhciBpc0NvbW1lbnRQcmVmaXggPSBmdW5jdGlvbiBpc0NvbW1lbnRQcmVmaXgoY2gpIHtcbiAgcmV0dXJuIFwiO1wiID09PSBjaDtcbn07XG5leHBvcnRzLmlzQ29tbWVudFByZWZpeCA9IGlzQ29tbWVudFByZWZpeDtcblxudmFyIGlzTnVtYmVyTGl0ZXJhbCA9IGZ1bmN0aW9uIGlzTnVtYmVyTGl0ZXJhbChyZWFkZXIsIGluaXRjaCkge1xuICByZXR1cm4gKGlzTnVtZXJpYyhpbml0Y2gpKSB8fCAoKChcIitcIiA9PT0gaW5pdGNoKSB8fCAoXCItXCIgPT09IGluaXRjaCkpICYmIChpc051bWVyaWMocGVla0NoYXIocmVhZGVyKSkpKTtcbn07XG5leHBvcnRzLmlzTnVtYmVyTGl0ZXJhbCA9IGlzTnVtYmVyTGl0ZXJhbDtcblxudmFyIHJlYWRlckVycm9yID0gZnVuY3Rpb24gcmVhZGVyRXJyb3IocmVhZGVyLCBtZXNzYWdlKSB7XG4gIHZhciB0ZXh0ID0gXCJcIiArIG1lc3NhZ2UgKyBcIlxcblwiICsgXCJsaW5lOlwiICsgKChyZWFkZXIgfHwgMClbXCJsaW5lXCJdKSArIFwiXFxuXCIgKyBcImNvbHVtbjpcIiArICgocmVhZGVyIHx8IDApW1wiY29sdW1uXCJdKTtcbiAgdmFyIGVycm9yID0gU3ludGF4RXJyb3IodGV4dCwgKHJlYWRlciB8fCAwKVtcInVyaVwiXSk7XG4gIGVycm9yLmxpbmUgPSAocmVhZGVyIHx8IDApW1wibGluZVwiXTtcbiAgZXJyb3IuY29sdW1uID0gKHJlYWRlciB8fCAwKVtcImNvbHVtblwiXTtcbiAgZXJyb3IudXJpID0gKHJlYWRlciB8fCAwKVtcInVyaVwiXTtcbiAgcmV0dXJuIChmdW5jdGlvbigpIHsgdGhyb3cgZXJyb3I7IH0pKCk7XG59O1xuZXhwb3J0cy5yZWFkZXJFcnJvciA9IHJlYWRlckVycm9yO1xuXG52YXIgaXNNYWNyb1Rlcm1pbmF0aW5nID0gZnVuY3Rpb24gaXNNYWNyb1Rlcm1pbmF0aW5nKGNoKSB7XG4gIHJldHVybiAoIShjaCA9PT0gXCIjXCIpKSAmJiAoIShjaCA9PT0gXCInXCIpKSAmJiAoIShjaCA9PT0gXCI6XCIpKSAmJiAobWFjcm9zKGNoKSk7XG59O1xuZXhwb3J0cy5pc01hY3JvVGVybWluYXRpbmcgPSBpc01hY3JvVGVybWluYXRpbmc7XG5cbnZhciByZWFkVG9rZW4gPSBmdW5jdGlvbiByZWFkVG9rZW4ocmVhZGVyLCBpbml0Y2gpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKGJ1ZmZlciwgY2gpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSAoaXNOaWwoY2gpKSB8fCAoaXNXaGl0ZXNwYWNlKGNoKSkgfHwgKGlzTWFjcm9UZXJtaW5hdGluZyhjaCkpID9cbiAgICAgIGJ1ZmZlciA6XG4gICAgICAoYnVmZmVyID0gXCJcIiArIGJ1ZmZlciArIChyZWFkQ2hhcihyZWFkZXIpKSwgY2ggPSBwZWVrQ2hhcihyZWFkZXIpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoaW5pdGNoLCBwZWVrQ2hhcihyZWFkZXIpKTtcbn07XG5leHBvcnRzLnJlYWRUb2tlbiA9IHJlYWRUb2tlbjtcblxudmFyIHNraXBMaW5lID0gZnVuY3Rpb24gc2tpcExpbmUocmVhZGVyLCBfKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcCgpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2ggPSByZWFkQ2hhcihyZWFkZXIpO1xuICAgICAgcmV0dXJuIChjaCA9PT0gXCJcXG5cIikgfHwgKGNoID09PSBcIlxcclwiKSB8fCAoaXNOaWwoY2gpKSA/XG4gICAgICAgIHJlYWRlciA6XG4gICAgICAgIChsb29wKTtcbiAgICB9KSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KSgpO1xufTtcbmV4cG9ydHMuc2tpcExpbmUgPSBza2lwTGluZTtcblxudmFyIGludFBhdHRlcm4gPSByZVBhdHRlcm4oXCJeKFstK10/KSg/OigwKXwoWzEtOV1bMC05XSopfDBbeFhdKFswLTlBLUZhLWZdKyl8MChbMC03XSspfChbMS05XVswLTldPylbclJdKFswLTlBLVphLXpdKyl8MFswLTldKykoTik/JFwiKTtcbmV4cG9ydHMuaW50UGF0dGVybiA9IGludFBhdHRlcm47XG5cbnZhciByYXRpb1BhdHRlcm4gPSByZVBhdHRlcm4oXCIoWy0rXT9bMC05XSspLyhbMC05XSspXCIpO1xuZXhwb3J0cy5yYXRpb1BhdHRlcm4gPSByYXRpb1BhdHRlcm47XG5cbnZhciBmbG9hdFBhdHRlcm4gPSByZVBhdHRlcm4oXCIoWy0rXT9bMC05XSsoXFxcXC5bMC05XSopPyhbZUVdWy0rXT9bMC05XSspPykoTSk/XCIpO1xuZXhwb3J0cy5mbG9hdFBhdHRlcm4gPSBmbG9hdFBhdHRlcm47XG5cbnZhciBtYXRjaEludCA9IGZ1bmN0aW9uIG1hdGNoSW50KHMpIHtcbiAgdmFyIGdyb3VwcyA9IHJlRmluZChpbnRQYXR0ZXJuLCBzKTtcbiAgdmFyIGdyb3VwMyA9IGdyb3Vwc1syXTtcbiAgcmV0dXJuICEoKGlzTmlsKGdyb3VwMykpIHx8IChjb3VudChncm91cDMpIDwgMSkpID9cbiAgICAwIDpcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbmVnYXRlID0gXCItXCIgPT09IGdyb3Vwc1sxXSA/XG4gICAgICAgIC0xIDpcbiAgICAgICAgMTtcbiAgICAgIHZhciBhID0gZ3JvdXBzWzNdID9cbiAgICAgICAgW2dyb3Vwc1szXSwgMTBdIDpcbiAgICAgIGdyb3Vwc1s0XSA/XG4gICAgICAgIFtncm91cHNbNF0sIDE2XSA6XG4gICAgICBncm91cHNbNV0gP1xuICAgICAgICBbZ3JvdXBzWzVdLCA4XSA6XG4gICAgICBncm91cHNbN10gP1xuICAgICAgICBbZ3JvdXBzWzddLCBwYXJzZUludChncm91cHNbN10pXSA6XG4gICAgICBcImVsc2VcIiA/XG4gICAgICAgIFt2b2lkKDApLCB2b2lkKDApXSA6XG4gICAgICAgIHZvaWQoMCk7XG4gICAgICB2YXIgbiA9IGFbMF07XG4gICAgICB2YXIgcmFkaXggPSBhWzFdO1xuICAgICAgcmV0dXJuIGlzTmlsKG4pID9cbiAgICAgICAgdm9pZCgwKSA6XG4gICAgICAgIG5lZ2F0ZSAqIChwYXJzZUludChuLCByYWRpeCkpO1xuICAgIH0pKCk7XG59O1xuZXhwb3J0cy5tYXRjaEludCA9IG1hdGNoSW50O1xuXG52YXIgbWF0Y2hSYXRpbyA9IGZ1bmN0aW9uIG1hdGNoUmF0aW8ocykge1xuICB2YXIgZ3JvdXBzID0gcmVGaW5kKHJhdGlvUGF0dGVybiwgcyk7XG4gIHZhciBudW1pbmF0b3IgPSBncm91cHNbMV07XG4gIHZhciBkZW5vbWluYXRvciA9IGdyb3Vwc1syXTtcbiAgcmV0dXJuIChwYXJzZUludChudW1pbmF0b3IpKSAvIChwYXJzZUludChkZW5vbWluYXRvcikpO1xufTtcbmV4cG9ydHMubWF0Y2hSYXRpbyA9IG1hdGNoUmF0aW87XG5cbnZhciBtYXRjaEZsb2F0ID0gZnVuY3Rpb24gbWF0Y2hGbG9hdChzKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHMpO1xufTtcbmV4cG9ydHMubWF0Y2hGbG9hdCA9IG1hdGNoRmxvYXQ7XG5cbnZhciBtYXRjaE51bWJlciA9IGZ1bmN0aW9uIG1hdGNoTnVtYmVyKHMpIHtcbiAgcmV0dXJuIHJlTWF0Y2hlcyhpbnRQYXR0ZXJuLCBzKSA/XG4gICAgbWF0Y2hJbnQocykgOlxuICByZU1hdGNoZXMocmF0aW9QYXR0ZXJuLCBzKSA/XG4gICAgbWF0Y2hSYXRpbyhzKSA6XG4gIHJlTWF0Y2hlcyhmbG9hdFBhdHRlcm4sIHMpID9cbiAgICBtYXRjaEZsb2F0KHMpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMubWF0Y2hOdW1iZXIgPSBtYXRjaE51bWJlcjtcblxudmFyIGVzY2FwZUNoYXJNYXAgPSBmdW5jdGlvbiBlc2NhcGVDaGFyTWFwKGMpIHtcbiAgcmV0dXJuIGMgPT09IFwidFwiID9cbiAgICBcIlxcdFwiIDpcbiAgYyA9PT0gXCJyXCIgP1xuICAgIFwiXFxyXCIgOlxuICBjID09PSBcIm5cIiA/XG4gICAgXCJcXG5cIiA6XG4gIGMgPT09IFwiXFxcXFwiID9cbiAgICBcIlxcXFxcIiA6XG4gIGMgPT09IFwiXFxcIlwiID9cbiAgICBcIlxcXCJcIiA6XG4gIGMgPT09IFwiYlwiID9cbiAgICBcIlxiXCIgOlxuICBjID09PSBcImZcIiA/XG4gICAgXCJcZlwiIDpcbiAgXCJlbHNlXCIgP1xuICAgIHZvaWQoMCkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5lc2NhcGVDaGFyTWFwID0gZXNjYXBlQ2hhck1hcDtcblxudmFyIHJlYWQyQ2hhcnMgPSBmdW5jdGlvbiByZWFkMkNoYXJzKHJlYWRlcikge1xuICByZXR1cm4gXCJcIiArIChyZWFkQ2hhcihyZWFkZXIpKSArIChyZWFkQ2hhcihyZWFkZXIpKTtcbn07XG5leHBvcnRzLnJlYWQyQ2hhcnMgPSByZWFkMkNoYXJzO1xuXG52YXIgcmVhZDRDaGFycyA9IGZ1bmN0aW9uIHJlYWQ0Q2hhcnMocmVhZGVyKSB7XG4gIHJldHVybiBcIlwiICsgKHJlYWRDaGFyKHJlYWRlcikpICsgKHJlYWRDaGFyKHJlYWRlcikpICsgKHJlYWRDaGFyKHJlYWRlcikpICsgKHJlYWRDaGFyKHJlYWRlcikpO1xufTtcbmV4cG9ydHMucmVhZDRDaGFycyA9IHJlYWQ0Q2hhcnM7XG5cbnZhciB1bmljb2RlMlBhdHRlcm4gPSByZVBhdHRlcm4oXCJbMC05QS1GYS1mXXsyfVwiKTtcbmV4cG9ydHMudW5pY29kZTJQYXR0ZXJuID0gdW5pY29kZTJQYXR0ZXJuO1xuXG52YXIgdW5pY29kZTRQYXR0ZXJuID0gcmVQYXR0ZXJuKFwiWzAtOUEtRmEtZl17NH1cIik7XG5leHBvcnRzLnVuaWNvZGU0UGF0dGVybiA9IHVuaWNvZGU0UGF0dGVybjtcblxudmFyIHZhbGlkYXRlVW5pY29kZUVzY2FwZSA9IGZ1bmN0aW9uIHZhbGlkYXRlVW5pY29kZUVzY2FwZSh1bmljb2RlUGF0dGVybiwgcmVhZGVyLCBlc2NhcGVDaGFyLCB1bmljb2RlU3RyKSB7XG4gIHJldHVybiByZU1hdGNoZXModW5pY29kZVBhdHRlcm4sIHVuaWNvZGVTdHIpID9cbiAgICB1bmljb2RlU3RyIDpcbiAgICByZWFkZXJFcnJvcihyZWFkZXIsIFwiXCIgKyBcIlVuZXhwZWN0ZWQgdW5pY29kZSBlc2NhcGUgXCIgKyBcIlxcXFxcIiArIGVzY2FwZUNoYXIgKyB1bmljb2RlU3RyKTtcbn07XG5leHBvcnRzLnZhbGlkYXRlVW5pY29kZUVzY2FwZSA9IHZhbGlkYXRlVW5pY29kZUVzY2FwZTtcblxudmFyIG1ha2VVbmljb2RlQ2hhciA9IGZ1bmN0aW9uIG1ha2VVbmljb2RlQ2hhcihjb2RlU3RyLCBiYXNlKSB7XG4gIHZhciBiYXNlID0gYmFzZSB8fCAxNjtcbiAgdmFyIGNvZGUgPSBwYXJzZUludChjb2RlU3RyLCBiYXNlKTtcbiAgcmV0dXJuIGNoYXIoY29kZSk7XG59O1xuZXhwb3J0cy5tYWtlVW5pY29kZUNoYXIgPSBtYWtlVW5pY29kZUNoYXI7XG5cbnZhciBlc2NhcGVDaGFyID0gZnVuY3Rpb24gZXNjYXBlQ2hhcihidWZmZXIsIHJlYWRlcikge1xuICB2YXIgY2ggPSByZWFkQ2hhcihyZWFkZXIpO1xuICB2YXIgbWFwcmVzdWx0ID0gZXNjYXBlQ2hhck1hcChjaCk7XG4gIHJldHVybiBtYXByZXN1bHQgP1xuICAgIG1hcHJlc3VsdCA6XG4gIGNoID09PSBcInhcIiA/XG4gICAgbWFrZVVuaWNvZGVDaGFyKHZhbGlkYXRlVW5pY29kZUVzY2FwZSh1bmljb2RlMlBhdHRlcm4sIHJlYWRlciwgY2gsIHJlYWQyQ2hhcnMocmVhZGVyKSkpIDpcbiAgY2ggPT09IFwidVwiID9cbiAgICBtYWtlVW5pY29kZUNoYXIodmFsaWRhdGVVbmljb2RlRXNjYXBlKHVuaWNvZGU0UGF0dGVybiwgcmVhZGVyLCBjaCwgcmVhZDRDaGFycyhyZWFkZXIpKSkgOlxuICBpc051bWVyaWMoY2gpID9cbiAgICBjaGFyKGNoKSA6XG4gIFwiZWxzZVwiID9cbiAgICByZWFkZXJFcnJvcihyZWFkZXIsIFwiXCIgKyBcIlVuZXhwZWN0ZWQgdW5pY29kZSBlc2NhcGUgXCIgKyBcIlxcXFxcIiArIGNoKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmVzY2FwZUNoYXIgPSBlc2NhcGVDaGFyO1xuXG52YXIgcmVhZFBhc3QgPSBmdW5jdGlvbiByZWFkUGFzdChwcmVkaWNhdGUsIHJlYWRlcikge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoXykge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IHByZWRpY2F0ZShwZWVrQ2hhcihyZWFkZXIpKSA/XG4gICAgICAoXyA9IHJlYWRDaGFyKHJlYWRlciksIGxvb3ApIDpcbiAgICAgIHBlZWtDaGFyKHJlYWRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKHZvaWQoMCkpO1xufTtcbmV4cG9ydHMucmVhZFBhc3QgPSByZWFkUGFzdDtcblxudmFyIHJlYWREZWxpbWl0ZWRMaXN0ID0gZnVuY3Rpb24gcmVhZERlbGltaXRlZExpc3QoZGVsaW0sIHJlYWRlciwgaXNSZWN1cnNpdmUpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKGZvcm0pIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2ggPSByZWFkUGFzdChpc1doaXRlc3BhY2UsIHJlYWRlcik7XG4gICAgICAhKGNoKSA/XG4gICAgICAgIHJlYWRlckVycm9yKHJlYWRlciwgXCJFT0ZcIikgOlxuICAgICAgICB2b2lkKDApO1xuICAgICAgcmV0dXJuIGRlbGltID09PSBjaCA/XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZWFkQ2hhcihyZWFkZXIpO1xuICAgICAgICAgIHJldHVybiBmb3JtO1xuICAgICAgICB9KSgpIDpcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBtYWNybyA9IG1hY3JvcyhjaCk7XG4gICAgICAgICAgcmV0dXJuIG1hY3JvID9cbiAgICAgICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG1hY3JvKHJlYWRlciwgcmVhZENoYXIocmVhZGVyKSk7XG4gICAgICAgICAgICAgIHJldHVybiAoZm9ybSA9IHJlc3VsdCA9PT0gcmVhZGVyID9cbiAgICAgICAgICAgICAgICBmb3JtIDpcbiAgICAgICAgICAgICAgICBjb25qKGZvcm0sIHJlc3VsdCksIGxvb3ApO1xuICAgICAgICAgICAgfSkoKSA6XG4gICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBvID0gcmVhZChyZWFkZXIsIHRydWUsIHZvaWQoMCksIGlzUmVjdXJzaXZlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChmb3JtID0gbyA9PT0gcmVhZGVyID9cbiAgICAgICAgICAgICAgICBmb3JtIDpcbiAgICAgICAgICAgICAgICBjb25qKGZvcm0sIG8pLCBsb29wKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pKCk7XG4gICAgfSkoKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoW10pO1xufTtcbmV4cG9ydHMucmVhZERlbGltaXRlZExpc3QgPSByZWFkRGVsaW1pdGVkTGlzdDtcblxudmFyIG5vdEltcGxlbWVudGVkID0gZnVuY3Rpb24gbm90SW1wbGVtZW50ZWQocmVhZGVyLCBjaCkge1xuICByZXR1cm4gcmVhZGVyRXJyb3IocmVhZGVyLCBcIlwiICsgXCJSZWFkZXIgZm9yIFwiICsgY2ggKyBcIiBub3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xufTtcbmV4cG9ydHMubm90SW1wbGVtZW50ZWQgPSBub3RJbXBsZW1lbnRlZDtcblxudmFyIHJlYWREaXNwYXRjaCA9IGZ1bmN0aW9uIHJlYWREaXNwYXRjaChyZWFkZXIsIF8pIHtcbiAgdmFyIGNoID0gcmVhZENoYXIocmVhZGVyKTtcbiAgdmFyIGRtID0gZGlzcGF0Y2hNYWNyb3MoY2gpO1xuICByZXR1cm4gZG0gP1xuICAgIGRtKHJlYWRlciwgXykgOlxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmplY3QgPSBtYXliZVJlYWRUYWdnZWRUeXBlKHJlYWRlciwgY2gpO1xuICAgICAgcmV0dXJuIG9iamVjdCA/XG4gICAgICAgIG9iamVjdCA6XG4gICAgICAgIHJlYWRlckVycm9yKHJlYWRlciwgXCJObyBkaXNwYXRjaCBtYWNybyBmb3IgXCIsIGNoKTtcbiAgICB9KSgpO1xufTtcbmV4cG9ydHMucmVhZERpc3BhdGNoID0gcmVhZERpc3BhdGNoO1xuXG52YXIgcmVhZFVubWF0Y2hlZERlbGltaXRlciA9IGZ1bmN0aW9uIHJlYWRVbm1hdGNoZWREZWxpbWl0ZXIocmRyLCBjaCkge1xuICByZXR1cm4gcmVhZGVyRXJyb3IocmRyLCBcIlVubWFjaGVkIGRlbGltaXRlciBcIiwgY2gpO1xufTtcbmV4cG9ydHMucmVhZFVubWF0Y2hlZERlbGltaXRlciA9IHJlYWRVbm1hdGNoZWREZWxpbWl0ZXI7XG5cbnZhciByZWFkTGlzdCA9IGZ1bmN0aW9uIHJlYWRMaXN0KHJlYWRlciwgXykge1xuICB2YXIgZm9ybSA9IHJlYWREZWxpbWl0ZWRMaXN0KFwiKVwiLCByZWFkZXIsIHRydWUpO1xuICByZXR1cm4gd2l0aE1ldGEobGlzdC5hcHBseShsaXN0LCBmb3JtKSwgbWV0YShmb3JtKSk7XG59O1xuZXhwb3J0cy5yZWFkTGlzdCA9IHJlYWRMaXN0O1xuXG52YXIgcmVhZENvbW1lbnQgPSBmdW5jdGlvbiByZWFkQ29tbWVudChyZWFkZXIsIF8pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKGJ1ZmZlciwgY2gpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSAoaXNOaWwoY2gpKSB8fCAoXCJcXG5cIiA9PT0gY2gpID9cbiAgICAgIHJlYWRlciB8fCAobGlzdChzeW1ib2wodm9pZCgwKSwgXCJjb21tZW50XCIpLCBidWZmZXIpKSA6XG4gICAgKFwiXFxcXFwiID09PSBjaCkgP1xuICAgICAgKGJ1ZmZlciA9IFwiXCIgKyBidWZmZXIgKyAoZXNjYXBlQ2hhcihidWZmZXIsIHJlYWRlcikpLCBjaCA9IHJlYWRDaGFyKHJlYWRlciksIGxvb3ApIDpcbiAgICBcImVsc2VcIiA/XG4gICAgICAoYnVmZmVyID0gXCJcIiArIGJ1ZmZlciArIGNoLCBjaCA9IHJlYWRDaGFyKHJlYWRlciksIGxvb3ApIDpcbiAgICAgIHZvaWQoMCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKFwiXCIsIHJlYWRDaGFyKHJlYWRlcikpO1xufTtcbmV4cG9ydHMucmVhZENvbW1lbnQgPSByZWFkQ29tbWVudDtcblxudmFyIHJlYWRWZWN0b3IgPSBmdW5jdGlvbiByZWFkVmVjdG9yKHJlYWRlcikge1xuICByZXR1cm4gcmVhZERlbGltaXRlZExpc3QoXCJdXCIsIHJlYWRlciwgdHJ1ZSk7XG59O1xuZXhwb3J0cy5yZWFkVmVjdG9yID0gcmVhZFZlY3RvcjtcblxudmFyIHJlYWRNYXAgPSBmdW5jdGlvbiByZWFkTWFwKHJlYWRlcikge1xuICB2YXIgZm9ybSA9IHJlYWREZWxpbWl0ZWRMaXN0KFwifVwiLCByZWFkZXIsIHRydWUpO1xuICByZXR1cm4gaXNPZGQoY291bnQoZm9ybSkpID9cbiAgICByZWFkZXJFcnJvcihyZWFkZXIsIFwiTWFwIGxpdGVyYWwgbXVzdCBjb250YWluIGFuIGV2ZW4gbnVtYmVyIG9mIGZvcm1zXCIpIDpcbiAgICB3aXRoTWV0YShkaWN0aW9uYXJ5LmFwcGx5KGRpY3Rpb25hcnksIGZvcm0pLCBtZXRhKGZvcm0pKTtcbn07XG5leHBvcnRzLnJlYWRNYXAgPSByZWFkTWFwO1xuXG52YXIgcmVhZFNldCA9IGZ1bmN0aW9uIHJlYWRTZXQocmVhZGVyLCBfKSB7XG4gIHZhciBmb3JtID0gcmVhZERlbGltaXRlZExpc3QoXCJ9XCIsIHJlYWRlciwgdHJ1ZSk7XG4gIHJldHVybiB3aXRoTWV0YShjb25jYXQoW3N5bWJvbCh2b2lkKDApLCBcInNldFwiKV0sIGZvcm0pLCBtZXRhKGZvcm0pKTtcbn07XG5leHBvcnRzLnJlYWRTZXQgPSByZWFkU2V0O1xuXG52YXIgcmVhZE51bWJlciA9IGZ1bmN0aW9uIHJlYWROdW1iZXIocmVhZGVyLCBpbml0Y2gpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKGJ1ZmZlciwgY2gpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSAoaXNOaWwoY2gpKSB8fCAoaXNXaGl0ZXNwYWNlKGNoKSkgfHwgKG1hY3JvcyhjaCkpID9cbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gbWF0Y2hOdW1iZXIoYnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIGlzTmlsKG1hdGNoKSA/XG4gICAgICAgICAgcmVhZGVyRXJyb3IocmVhZGVyLCBcIkludmFsaWQgbnVtYmVyIGZvcm1hdCBbXCIsIGJ1ZmZlciwgXCJdXCIpIDpcbiAgICAgICAgICBtYXRjaDtcbiAgICAgIH0pKCkgOlxuICAgICAgKGJ1ZmZlciA9IFwiXCIgKyBidWZmZXIgKyAocmVhZENoYXIocmVhZGVyKSksIGNoID0gcGVla0NoYXIocmVhZGVyKSwgbG9vcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKGluaXRjaCwgcGVla0NoYXIocmVhZGVyKSk7XG59O1xuZXhwb3J0cy5yZWFkTnVtYmVyID0gcmVhZE51bWJlcjtcblxudmFyIHJlYWRTdHJpbmcgPSBmdW5jdGlvbiByZWFkU3RyaW5nKHJlYWRlcikge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoYnVmZmVyLCBjaCkge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IGlzTmlsKGNoKSA/XG4gICAgICByZWFkZXJFcnJvcihyZWFkZXIsIFwiRU9GIHdoaWxlIHJlYWRpbmcgc3RyaW5nXCIpIDpcbiAgICBcIlxcXFxcIiA9PT0gY2ggP1xuICAgICAgKGJ1ZmZlciA9IFwiXCIgKyBidWZmZXIgKyAoZXNjYXBlQ2hhcihidWZmZXIsIHJlYWRlcikpLCBjaCA9IHJlYWRDaGFyKHJlYWRlciksIGxvb3ApIDpcbiAgICBcIlxcXCJcIiA9PT0gY2ggP1xuICAgICAgYnVmZmVyIDpcbiAgICBcImRlZmF1bHRcIiA/XG4gICAgICAoYnVmZmVyID0gXCJcIiArIGJ1ZmZlciArIGNoLCBjaCA9IHJlYWRDaGFyKHJlYWRlciksIGxvb3ApIDpcbiAgICAgIHZvaWQoMCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKFwiXCIsIHJlYWRDaGFyKHJlYWRlcikpO1xufTtcbmV4cG9ydHMucmVhZFN0cmluZyA9IHJlYWRTdHJpbmc7XG5cbnZhciByZWFkVW5xdW90ZSA9IGZ1bmN0aW9uIHJlYWRVbnF1b3RlKHJlYWRlcikge1xuICB2YXIgY2ggPSBwZWVrQ2hhcihyZWFkZXIpO1xuICByZXR1cm4gIShjaCkgP1xuICAgIHJlYWRlckVycm9yKHJlYWRlciwgXCJFT0Ygd2hpbGUgcmVhZGluZyBjaGFyYWN0ZXJcIikgOlxuICBjaCA9PT0gXCJAXCIgP1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHJlYWRDaGFyKHJlYWRlcik7XG4gICAgICByZXR1cm4gbGlzdChzeW1ib2wodm9pZCgwKSwgXCJ1bnF1b3RlLXNwbGljaW5nXCIpLCByZWFkKHJlYWRlciwgdHJ1ZSwgdm9pZCgwKSwgdHJ1ZSkpO1xuICAgIH0pKCkgOlxuICAgIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwidW5xdW90ZVwiKSwgcmVhZChyZWFkZXIsIHRydWUsIHZvaWQoMCksIHRydWUpKTtcbn07XG5leHBvcnRzLnJlYWRVbnF1b3RlID0gcmVhZFVucXVvdGU7XG5cbnZhciBzcGVjaWFsU3ltYm9scyA9IGZ1bmN0aW9uIHNwZWNpYWxTeW1ib2xzKHRleHQsIG5vdEZvdW5kKSB7XG4gIHJldHVybiB0ZXh0ID09PSBcIm5pbFwiID9cbiAgICB2b2lkKDApIDpcbiAgdGV4dCA9PT0gXCJ0cnVlXCIgP1xuICAgIHRydWUgOlxuICB0ZXh0ID09PSBcImZhbHNlXCIgP1xuICAgIGZhbHNlIDpcbiAgXCJlbHNlXCIgP1xuICAgIG5vdEZvdW5kIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMuc3BlY2lhbFN5bWJvbHMgPSBzcGVjaWFsU3ltYm9scztcblxudmFyIHJlYWRTeW1ib2wgPSBmdW5jdGlvbiByZWFkU3ltYm9sKHJlYWRlciwgaW5pdGNoKSB7XG4gIHZhciB0b2tlbiA9IHJlYWRUb2tlbihyZWFkZXIsIGluaXRjaCk7XG4gIHZhciBwYXJ0cyA9IHNwbGl0KHRva2VuLCBcIi9cIik7XG4gIHZhciBoYXNOcyA9IChjb3VudChwYXJ0cykgPiAxKSAmJiAoY291bnQodG9rZW4pID4gMSk7XG4gIHZhciBucyA9IGZpcnN0KHBhcnRzKTtcbiAgdmFyIG5hbWUgPSBqb2luKFwiL1wiLCByZXN0KHBhcnRzKSk7XG4gIHJldHVybiBoYXNOcyA/XG4gICAgc3ltYm9sKG5zLCBuYW1lKSA6XG4gICAgc3BlY2lhbFN5bWJvbHModG9rZW4sIHN5bWJvbCh0b2tlbikpO1xufTtcbmV4cG9ydHMucmVhZFN5bWJvbCA9IHJlYWRTeW1ib2w7XG5cbnZhciByZWFkS2V5d29yZCA9IGZ1bmN0aW9uIHJlYWRLZXl3b3JkKHJlYWRlciwgaW5pdGNoKSB7XG4gIHZhciB0b2tlbiA9IHJlYWRUb2tlbihyZWFkZXIsIHJlYWRDaGFyKHJlYWRlcikpO1xuICB2YXIgcGFydHMgPSBzcGxpdCh0b2tlbiwgXCIvXCIpO1xuICB2YXIgbmFtZSA9IGxhc3QocGFydHMpO1xuICB2YXIgbnMgPSBjb3VudChwYXJ0cykgPiAxID9cbiAgICBqb2luKFwiL1wiLCBidXRsYXN0KHBhcnRzKSkgOlxuICAgIHZvaWQoMCk7XG4gIHZhciBpc3N1ZSA9IGxhc3QobnMpID09PSBcIjpcIiA/XG4gICAgXCJuYW1lc3BhY2UgY2FuJ3QgZW5kcyB3aXRoIFxcXCI6XFxcIlwiIDpcbiAgbGFzdChuYW1lKSA9PT0gXCI6XCIgP1xuICAgIFwibmFtZSBjYW4ndCBlbmQgd2l0aCBcXFwiOlxcXCJcIiA6XG4gIGxhc3QobmFtZSkgPT09IFwiL1wiID9cbiAgICBcIm5hbWUgY2FuJ3QgZW5kIHdpdGggXFxcIi9cXFwiXCIgOlxuICBjb3VudChzcGxpdCh0b2tlbiwgXCI6OlwiKSkgPiAxID9cbiAgICBcIm5hbWUgY2FuJ3QgY29udGFpbiBcXFwiOjpcXFwiXCIgOlxuICAgIHZvaWQoMCk7XG4gIHJldHVybiBpc3N1ZSA/XG4gICAgcmVhZGVyRXJyb3IocmVhZGVyLCBcIkludmFsaWQgdG9rZW4gKFwiLCBpc3N1ZSwgXCIpOiBcIiwgdG9rZW4pIDpcbiAgKCEobnMpKSAmJiAoZmlyc3QobmFtZSkgPT09IFwiOlwiKSA/XG4gICAga2V5d29yZChyZXN0KG5hbWUpKSA6XG4gICAga2V5d29yZChucywgbmFtZSk7XG59O1xuZXhwb3J0cy5yZWFkS2V5d29yZCA9IHJlYWRLZXl3b3JkO1xuXG52YXIgZGVzdWdhck1ldGEgPSBmdW5jdGlvbiBkZXN1Z2FyTWV0YShmKSB7XG4gIHJldHVybiBpc0tleXdvcmQoZikgP1xuICAgIGRpY3Rpb25hcnkobmFtZShmKSwgdHJ1ZSkgOlxuICBpc1N5bWJvbChmKSA/XG4gICAge1xuICAgICAgXCJ0YWdcIjogZlxuICAgIH0gOlxuICBpc1N0cmluZyhmKSA/XG4gICAge1xuICAgICAgXCJ0YWdcIjogZlxuICAgIH0gOlxuICBcImVsc2VcIiA/XG4gICAgZiA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmRlc3VnYXJNZXRhID0gZGVzdWdhck1ldGE7XG5cbnZhciB3cmFwcGluZ1JlYWRlciA9IGZ1bmN0aW9uIHdyYXBwaW5nUmVhZGVyKHByZWZpeCkge1xuICByZXR1cm4gZnVuY3Rpb24ocmVhZGVyKSB7XG4gICAgcmV0dXJuIGxpc3QocHJlZml4LCByZWFkKHJlYWRlciwgdHJ1ZSwgdm9pZCgwKSwgdHJ1ZSkpO1xuICB9O1xufTtcbmV4cG9ydHMud3JhcHBpbmdSZWFkZXIgPSB3cmFwcGluZ1JlYWRlcjtcblxudmFyIHRocm93aW5nUmVhZGVyID0gZnVuY3Rpb24gdGhyb3dpbmdSZWFkZXIobXNnKSB7XG4gIHJldHVybiBmdW5jdGlvbihyZWFkZXIpIHtcbiAgICByZXR1cm4gcmVhZGVyRXJyb3IocmVhZGVyLCBtc2cpO1xuICB9O1xufTtcbmV4cG9ydHMudGhyb3dpbmdSZWFkZXIgPSB0aHJvd2luZ1JlYWRlcjtcblxudmFyIHJlYWRNZXRhID0gZnVuY3Rpb24gcmVhZE1ldGEocmVhZGVyLCBfKSB7XG4gIHZhciBtZXRhZGF0YSA9IGRlc3VnYXJNZXRhKHJlYWQocmVhZGVyLCB0cnVlLCB2b2lkKDApLCB0cnVlKSk7XG4gICEoaXNEaWN0aW9uYXJ5KG1ldGFkYXRhKSkgP1xuICAgIHJlYWRlckVycm9yKHJlYWRlciwgXCJNZXRhZGF0YSBtdXN0IGJlIFN5bWJvbCwgS2V5d29yZCwgU3RyaW5nIG9yIE1hcFwiKSA6XG4gICAgdm9pZCgwKTtcbiAgcmV0dXJuIChmdW5jdGlvbigpIHtcbiAgICB2YXIgZm9ybSA9IHJlYWQocmVhZGVyLCB0cnVlLCB2b2lkKDApLCB0cnVlKTtcbiAgICByZXR1cm4gaXNPYmplY3QoZm9ybSkgP1xuICAgICAgd2l0aE1ldGEoZm9ybSwgY29uaihtZXRhZGF0YSwgbWV0YShmb3JtKSkpIDpcbiAgICAgIGZvcm07XG4gIH0pKCk7XG59O1xuZXhwb3J0cy5yZWFkTWV0YSA9IHJlYWRNZXRhO1xuXG52YXIgcmVhZFJlZ2V4ID0gZnVuY3Rpb24gcmVhZFJlZ2V4KHJlYWRlcikge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoYnVmZmVyLCBjaCkge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IGlzTmlsKGNoKSA/XG4gICAgICByZWFkZXJFcnJvcihyZWFkZXIsIFwiRU9GIHdoaWxlIHJlYWRpbmcgc3RyaW5nXCIpIDpcbiAgICBcIlxcXFxcIiA9PT0gY2ggP1xuICAgICAgKGJ1ZmZlciA9IFwiXCIgKyBidWZmZXIgKyBjaCArIChyZWFkQ2hhcihyZWFkZXIpKSwgY2ggPSByZWFkQ2hhcihyZWFkZXIpLCBsb29wKSA6XG4gICAgXCJcXFwiXCIgPT09IGNoID9cbiAgICAgIHJlUGF0dGVybihidWZmZXIpIDpcbiAgICBcImRlZmF1bHRcIiA/XG4gICAgICAoYnVmZmVyID0gXCJcIiArIGJ1ZmZlciArIGNoLCBjaCA9IHJlYWRDaGFyKHJlYWRlciksIGxvb3ApIDpcbiAgICAgIHZvaWQoMCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKFwiXCIsIHJlYWRDaGFyKHJlYWRlcikpO1xufTtcbmV4cG9ydHMucmVhZFJlZ2V4ID0gcmVhZFJlZ2V4O1xuXG52YXIgcmVhZFBhcmFtID0gZnVuY3Rpb24gcmVhZFBhcmFtKHJlYWRlciwgaW5pdGNoKSB7XG4gIHZhciBmb3JtID0gcmVhZFN5bWJvbChyZWFkZXIsIGluaXRjaCk7XG4gIHJldHVybiBpc0VxdWFsKGZvcm0sIHN5bWJvbChcIiVcIikpID9cbiAgICBzeW1ib2woXCIlMVwiKSA6XG4gICAgZm9ybTtcbn07XG5leHBvcnRzLnJlYWRQYXJhbSA9IHJlYWRQYXJhbTtcblxudmFyIGlzUGFyYW0gPSBmdW5jdGlvbiBpc1BhcmFtKGZvcm0pIHtcbiAgcmV0dXJuIChpc1N5bWJvbChmb3JtKSkgJiYgKFwiJVwiID09PSBmaXJzdChuYW1lKGZvcm0pKSk7XG59O1xuZXhwb3J0cy5pc1BhcmFtID0gaXNQYXJhbTtcblxudmFyIGxhbWJkYVBhcmFtc0hhc2ggPSBmdW5jdGlvbiBsYW1iZGFQYXJhbXNIYXNoKGZvcm0pIHtcbiAgcmV0dXJuIGlzUGFyYW0oZm9ybSkgP1xuICAgIGRpY3Rpb25hcnkoZm9ybSwgZm9ybSkgOlxuICAoaXNEaWN0aW9uYXJ5KGZvcm0pKSB8fCAoaXNWZWN0b3IoZm9ybSkpIHx8IChpc0xpc3QoZm9ybSkpID9cbiAgICBjb25qLmFwcGx5KGNvbmosIG1hcChsYW1iZGFQYXJhbXNIYXNoLCB2ZWMoZm9ybSkpKSA6XG4gIFwiZWxzZVwiID9cbiAgICB7fSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmxhbWJkYVBhcmFtc0hhc2ggPSBsYW1iZGFQYXJhbXNIYXNoO1xuXG52YXIgbGFtYmRhUGFyYW1zID0gZnVuY3Rpb24gbGFtYmRhUGFyYW1zKGJvZHkpIHtcbiAgdmFyIG5hbWVzID0gc29ydCh2YWxzKGxhbWJkYVBhcmFtc0hhc2goYm9keSkpKTtcbiAgdmFyIHZhcmlhZGljID0gaXNFcXVhbChmaXJzdChuYW1lcyksIHN5bWJvbChcIiUmXCIpKTtcbiAgdmFyIG4gPSB2YXJpYWRpYyAmJiAoY291bnQobmFtZXMpID09PSAxKSA/XG4gICAgMCA6XG4gICAgcGFyc2VJbnQocmVzdChuYW1lKGxhc3QobmFtZXMpKSkpO1xuICB2YXIgcGFyYW1zID0gKGZ1bmN0aW9uIGxvb3AobmFtZXMsIGkpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBpIDw9IG4gP1xuICAgICAgKG5hbWVzID0gY29uaihuYW1lcywgc3ltYm9sKFwiXCIgKyBcIiVcIiArIGkpKSwgaSA9IGluYyhpKSwgbG9vcCkgOlxuICAgICAgbmFtZXM7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKFtdLCAxKTtcbiAgcmV0dXJuIHZhcmlhZGljID9cbiAgICBjb25qKHBhcmFtcywgc3ltYm9sKHZvaWQoMCksIFwiJlwiKSwgc3ltYm9sKHZvaWQoMCksIFwiJSZcIikpIDpcbiAgICBuYW1lcztcbn07XG5leHBvcnRzLmxhbWJkYVBhcmFtcyA9IGxhbWJkYVBhcmFtcztcblxudmFyIHJlYWRMYW1iZGEgPSBmdW5jdGlvbiByZWFkTGFtYmRhKHJlYWRlcikge1xuICB2YXIgYm9keSA9IHJlYWRMaXN0KHJlYWRlcik7XG4gIHJldHVybiBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImZuXCIpLCBsYW1iZGFQYXJhbXMoYm9keSksIGJvZHkpO1xufTtcbmV4cG9ydHMucmVhZExhbWJkYSA9IHJlYWRMYW1iZGE7XG5cbnZhciByZWFkRGlzY2FyZCA9IGZ1bmN0aW9uIHJlYWREaXNjYXJkKHJlYWRlciwgXykge1xuICByZWFkKHJlYWRlciwgdHJ1ZSwgdm9pZCgwKSwgdHJ1ZSk7XG4gIHJldHVybiByZWFkZXI7XG59O1xuZXhwb3J0cy5yZWFkRGlzY2FyZCA9IHJlYWREaXNjYXJkO1xuXG52YXIgbWFjcm9zID0gZnVuY3Rpb24gbWFjcm9zKGMpIHtcbiAgcmV0dXJuIGMgPT09IFwiXFxcIlwiID9cbiAgICByZWFkU3RyaW5nIDpcbiAgYyA9PT0gXCI6XCIgP1xuICAgIHJlYWRLZXl3b3JkIDpcbiAgYyA9PT0gXCI7XCIgP1xuICAgIHJlYWRDb21tZW50IDpcbiAgYyA9PT0gXCInXCIgP1xuICAgIHdyYXBwaW5nUmVhZGVyKHN5bWJvbCh2b2lkKDApLCBcInF1b3RlXCIpKSA6XG4gIGMgPT09IFwiQFwiID9cbiAgICB3cmFwcGluZ1JlYWRlcihzeW1ib2wodm9pZCgwKSwgXCJkZXJlZlwiKSkgOlxuICBjID09PSBcIl5cIiA/XG4gICAgcmVhZE1ldGEgOlxuICBjID09PSBcImBcIiA/XG4gICAgd3JhcHBpbmdSZWFkZXIoc3ltYm9sKHZvaWQoMCksIFwic3ludGF4LXF1b3RlXCIpKSA6XG4gIGMgPT09IFwiflwiID9cbiAgICByZWFkVW5xdW90ZSA6XG4gIGMgPT09IFwiKFwiID9cbiAgICByZWFkTGlzdCA6XG4gIGMgPT09IFwiKVwiID9cbiAgICByZWFkVW5tYXRjaGVkRGVsaW1pdGVyIDpcbiAgYyA9PT0gXCJbXCIgP1xuICAgIHJlYWRWZWN0b3IgOlxuICBjID09PSBcIl1cIiA/XG4gICAgcmVhZFVubWF0Y2hlZERlbGltaXRlciA6XG4gIGMgPT09IFwie1wiID9cbiAgICByZWFkTWFwIDpcbiAgYyA9PT0gXCJ9XCIgP1xuICAgIHJlYWRVbm1hdGNoZWREZWxpbWl0ZXIgOlxuICBjID09PSBcIlxcXFxcIiA/XG4gICAgcmVhZENoYXIgOlxuICBjID09PSBcIiVcIiA/XG4gICAgcmVhZFBhcmFtIDpcbiAgYyA9PT0gXCIjXCIgP1xuICAgIHJlYWREaXNwYXRjaCA6XG4gIFwiZWxzZVwiID9cbiAgICB2b2lkKDApIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMubWFjcm9zID0gbWFjcm9zO1xuXG52YXIgZGlzcGF0Y2hNYWNyb3MgPSBmdW5jdGlvbiBkaXNwYXRjaE1hY3JvcyhzKSB7XG4gIHJldHVybiBzID09PSBcIntcIiA/XG4gICAgcmVhZFNldCA6XG4gIHMgPT09IFwiKFwiID9cbiAgICByZWFkTGFtYmRhIDpcbiAgcyA9PT0gXCI8XCIgP1xuICAgIHRocm93aW5nUmVhZGVyKFwiVW5yZWFkYWJsZSBmb3JtXCIpIDpcbiAgcyA9PT0gXCJcXFwiXCIgP1xuICAgIHJlYWRSZWdleCA6XG4gIHMgPT09IFwiIVwiID9cbiAgICByZWFkQ29tbWVudCA6XG4gIHMgPT09IFwiX1wiID9cbiAgICByZWFkRGlzY2FyZCA6XG4gIFwiZWxzZVwiID9cbiAgICB2b2lkKDApIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMuZGlzcGF0Y2hNYWNyb3MgPSBkaXNwYXRjaE1hY3JvcztcblxudmFyIHJlYWRGb3JtID0gZnVuY3Rpb24gcmVhZEZvcm0ocmVhZGVyLCBjaCkge1xuICB2YXIgc3RhcnQgPSB7XG4gICAgXCJsaW5lXCI6IChyZWFkZXIgfHwgMClbXCJsaW5lXCJdLFxuICAgIFwiY29sdW1uXCI6IChyZWFkZXIgfHwgMClbXCJjb2x1bW5cIl1cbiAgfTtcbiAgdmFyIHJlYWRNYWNybyA9IG1hY3JvcyhjaCk7XG4gIHZhciBmb3JtID0gcmVhZE1hY3JvID9cbiAgICByZWFkTWFjcm8ocmVhZGVyLCBjaCkgOlxuICBpc051bWJlckxpdGVyYWwocmVhZGVyLCBjaCkgP1xuICAgIHJlYWROdW1iZXIocmVhZGVyLCBjaCkgOlxuICBcImVsc2VcIiA/XG4gICAgcmVhZFN5bWJvbChyZWFkZXIsIGNoKSA6XG4gICAgdm9pZCgwKTtcbiAgcmV0dXJuIGZvcm0gPT09IHJlYWRlciA/XG4gICAgZm9ybSA6XG4gICEoKGlzU3RyaW5nKGZvcm0pKSB8fCAoaXNOdW1iZXIoZm9ybSkpIHx8IChpc0Jvb2xlYW4oZm9ybSkpIHx8IChpc05pbChmb3JtKSkgfHwgKGlzS2V5d29yZChmb3JtKSkpID9cbiAgICB3aXRoTWV0YShmb3JtLCBjb25qKHtcbiAgICAgIFwic3RhcnRcIjogc3RhcnQsXG4gICAgICBcImVuZFwiOiB7XG4gICAgICAgIFwibGluZVwiOiAocmVhZGVyIHx8IDApW1wibGluZVwiXSxcbiAgICAgICAgXCJjb2x1bW5cIjogKHJlYWRlciB8fCAwKVtcImNvbHVtblwiXVxuICAgICAgfVxuICAgIH0sIG1ldGEoZm9ybSkpKSA6XG4gIFwiZWxzZVwiID9cbiAgICBmb3JtIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMucmVhZEZvcm0gPSByZWFkRm9ybTtcblxudmFyIHJlYWQgPSBmdW5jdGlvbiByZWFkKHJlYWRlciwgZW9mSXNFcnJvciwgc2VudGluZWwsIGlzUmVjdXJzaXZlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcCgpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2ggPSByZWFkQ2hhcihyZWFkZXIpO1xuICAgICAgdmFyIGZvcm0gPSBpc05pbChjaCkgP1xuICAgICAgICBlb2ZJc0Vycm9yID9cbiAgICAgICAgICByZWFkZXJFcnJvcihyZWFkZXIsIFwiRU9GXCIpIDpcbiAgICAgICAgICBzZW50aW5lbCA6XG4gICAgICBpc1doaXRlc3BhY2UoY2gpID9cbiAgICAgICAgcmVhZGVyIDpcbiAgICAgIGlzQ29tbWVudFByZWZpeChjaCkgP1xuICAgICAgICByZWFkKHJlYWRDb21tZW50KHJlYWRlciwgY2gpLCBlb2ZJc0Vycm9yLCBzZW50aW5lbCwgaXNSZWN1cnNpdmUpIDpcbiAgICAgIFwiZWxzZVwiID9cbiAgICAgICAgcmVhZEZvcm0ocmVhZGVyLCBjaCkgOlxuICAgICAgICB2b2lkKDApO1xuICAgICAgcmV0dXJuIGZvcm0gPT09IHJlYWRlciA/XG4gICAgICAgIChsb29wKSA6XG4gICAgICAgIGZvcm07XG4gICAgfSkoKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoKTtcbn07XG5leHBvcnRzLnJlYWQgPSByZWFkO1xuXG52YXIgcmVhZF8gPSBmdW5jdGlvbiByZWFkXyhzb3VyY2UsIHVyaSkge1xuICB2YXIgcmVhZGVyID0gcHVzaEJhY2tSZWFkZXIoc291cmNlLCB1cmkpO1xuICB2YXIgZW9mID0gZ2Vuc3ltKCk7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChmb3JtcywgZm9ybSkge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IGZvcm0gPT09IGVvZiA/XG4gICAgICBmb3JtcyA6XG4gICAgICAoZm9ybXMgPSBjb25qKGZvcm1zLCBmb3JtKSwgZm9ybSA9IHJlYWQocmVhZGVyLCBmYWxzZSwgZW9mLCBmYWxzZSksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShbXSwgcmVhZChyZWFkZXIsIGZhbHNlLCBlb2YsIGZhbHNlKSk7XG59O1xuZXhwb3J0cy5yZWFkXyA9IHJlYWRfO1xuXG52YXIgcmVhZEZyb21TdHJpbmcgPSBmdW5jdGlvbiByZWFkRnJvbVN0cmluZyhzb3VyY2UsIHVyaSkge1xuICB2YXIgcmVhZGVyID0gcHVzaEJhY2tSZWFkZXIoc291cmNlLCB1cmkpO1xuICByZXR1cm4gcmVhZChyZWFkZXIsIHRydWUsIHZvaWQoMCksIGZhbHNlKTtcbn07XG5leHBvcnRzLnJlYWRGcm9tU3RyaW5nID0gcmVhZEZyb21TdHJpbmc7XG5cbnZhciByZWFkVXVpZCA9IGZ1bmN0aW9uIHJlYWRVdWlkKHV1aWQpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHV1aWQpID9cbiAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcIlVVSUQuXCIpLCB1dWlkKSA6XG4gICAgcmVhZGVyRXJyb3Iodm9pZCgwKSwgXCJVVUlEIGxpdGVyYWwgZXhwZWN0cyBhIHN0cmluZyBhcyBpdHMgcmVwcmVzZW50YXRpb24uXCIpO1xufTtcblxudmFyIHJlYWRRdWV1ZSA9IGZ1bmN0aW9uIHJlYWRRdWV1ZShpdGVtcykge1xuICByZXR1cm4gaXNWZWN0b3IoaXRlbXMpID9cbiAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcIlBlcnNpc3RlbnRRdWV1ZS5cIiksIGl0ZW1zKSA6XG4gICAgcmVhZGVyRXJyb3Iodm9pZCgwKSwgXCJRdWV1ZSBsaXRlcmFsIGV4cGVjdHMgYSB2ZWN0b3IgZm9yIGl0cyBlbGVtZW50cy5cIik7XG59O1xuXG52YXIgX190YWdUYWJsZV9fID0gZGljdGlvbmFyeShcInV1aWRcIiwgcmVhZFV1aWQsIFwicXVldWVcIiwgcmVhZFF1ZXVlKTtcbmV4cG9ydHMuX190YWdUYWJsZV9fID0gX190YWdUYWJsZV9fO1xuXG52YXIgbWF5YmVSZWFkVGFnZ2VkVHlwZSA9IGZ1bmN0aW9uIG1heWJlUmVhZFRhZ2dlZFR5cGUocmVhZGVyLCBpbml0Y2gpIHtcbiAgdmFyIHRhZyA9IHJlYWRTeW1ib2wocmVhZGVyLCBpbml0Y2gpO1xuICB2YXIgcGZuID0gKF9fdGFnVGFibGVfXyB8fCAwKVtuYW1lKHRhZyldO1xuICByZXR1cm4gcGZuID9cbiAgICBwZm4ocmVhZChyZWFkZXIsIHRydWUsIHZvaWQoMCksIGZhbHNlKSkgOlxuICAgIHJlYWRlckVycm9yKHJlYWRlciwgXCJcIiArIFwiQ291bGQgbm90IGZpbmQgdGFnIHBhcnNlciBmb3IgXCIgKyAobmFtZSh0YWcpKSArIFwiIGluIFwiICsgKFwiXCIgKyAoa2V5cyhfX3RhZ1RhYmxlX18pKSkpO1xufTtcbmV4cG9ydHMubWF5YmVSZWFkVGFnZ2VkVHlwZSA9IG1heWJlUmVhZFRhZ2dlZFR5cGUiLCJ2YXIgX25zXyA9IHtcbiAgXCJpZFwiOiBcIndpc3AuY29tcGlsZXJcIixcbiAgXCJkb2NcIjogXCJ3aXNwIGxhbmd1YWdlIGNvbXBpbGVyXCJcbn07XG52YXIgd2lzcF9yZWFkZXIgPSByZXF1aXJlKFwiLi9yZWFkZXJcIik7XG52YXIgcmVhZEZyb21TdHJpbmcgPSB3aXNwX3JlYWRlci5yZWFkRnJvbVN0cmluZzs7XG52YXIgd2lzcF9hc3QgPSByZXF1aXJlKFwiLi9hc3RcIik7XG52YXIgbWV0YSA9IHdpc3BfYXN0Lm1ldGE7XG52YXIgd2l0aE1ldGEgPSB3aXNwX2FzdC53aXRoTWV0YTtcbnZhciBpc1N5bWJvbCA9IHdpc3BfYXN0LmlzU3ltYm9sO1xudmFyIHN5bWJvbCA9IHdpc3BfYXN0LnN5bWJvbDtcbnZhciBpc0tleXdvcmQgPSB3aXNwX2FzdC5pc0tleXdvcmQ7XG52YXIga2V5d29yZCA9IHdpc3BfYXN0LmtleXdvcmQ7XG52YXIgbmFtZXNwYWNlID0gd2lzcF9hc3QubmFtZXNwYWNlO1xudmFyIGlzVW5xdW90ZSA9IHdpc3BfYXN0LmlzVW5xdW90ZTtcbnZhciBpc1VucXVvdGVTcGxpY2luZyA9IHdpc3BfYXN0LmlzVW5xdW90ZVNwbGljaW5nO1xudmFyIGlzUXVvdGUgPSB3aXNwX2FzdC5pc1F1b3RlO1xudmFyIGlzU3ludGF4UXVvdGUgPSB3aXNwX2FzdC5pc1N5bnRheFF1b3RlO1xudmFyIG5hbWUgPSB3aXNwX2FzdC5uYW1lO1xudmFyIGdlbnN5bSA9IHdpc3BfYXN0LmdlbnN5bTtcbnZhciBwclN0ciA9IHdpc3BfYXN0LnByU3RyOztcbnZhciB3aXNwX3NlcXVlbmNlID0gcmVxdWlyZShcIi4vc2VxdWVuY2VcIik7XG52YXIgaXNFbXB0eSA9IHdpc3Bfc2VxdWVuY2UuaXNFbXB0eTtcbnZhciBjb3VudCA9IHdpc3Bfc2VxdWVuY2UuY291bnQ7XG52YXIgaXNMaXN0ID0gd2lzcF9zZXF1ZW5jZS5pc0xpc3Q7XG52YXIgbGlzdCA9IHdpc3Bfc2VxdWVuY2UubGlzdDtcbnZhciBmaXJzdCA9IHdpc3Bfc2VxdWVuY2UuZmlyc3Q7XG52YXIgc2Vjb25kID0gd2lzcF9zZXF1ZW5jZS5zZWNvbmQ7XG52YXIgdGhpcmQgPSB3aXNwX3NlcXVlbmNlLnRoaXJkO1xudmFyIHJlc3QgPSB3aXNwX3NlcXVlbmNlLnJlc3Q7XG52YXIgY29ucyA9IHdpc3Bfc2VxdWVuY2UuY29ucztcbnZhciBjb25qID0gd2lzcF9zZXF1ZW5jZS5jb25qO1xudmFyIHJldmVyc2UgPSB3aXNwX3NlcXVlbmNlLnJldmVyc2U7XG52YXIgcmVkdWNlID0gd2lzcF9zZXF1ZW5jZS5yZWR1Y2U7XG52YXIgdmVjID0gd2lzcF9zZXF1ZW5jZS52ZWM7XG52YXIgbGFzdCA9IHdpc3Bfc2VxdWVuY2UubGFzdDtcbnZhciByZXBlYXQgPSB3aXNwX3NlcXVlbmNlLnJlcGVhdDtcbnZhciBtYXAgPSB3aXNwX3NlcXVlbmNlLm1hcDtcbnZhciBmaWx0ZXIgPSB3aXNwX3NlcXVlbmNlLmZpbHRlcjtcbnZhciB0YWtlID0gd2lzcF9zZXF1ZW5jZS50YWtlO1xudmFyIGNvbmNhdCA9IHdpc3Bfc2VxdWVuY2UuY29uY2F0O1xudmFyIGlzU2VxID0gd2lzcF9zZXF1ZW5jZS5pc1NlcTs7XG52YXIgd2lzcF9ydW50aW1lID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcbnZhciBpc09kZCA9IHdpc3BfcnVudGltZS5pc09kZDtcbnZhciBpc0RpY3Rpb25hcnkgPSB3aXNwX3J1bnRpbWUuaXNEaWN0aW9uYXJ5O1xudmFyIGRpY3Rpb25hcnkgPSB3aXNwX3J1bnRpbWUuZGljdGlvbmFyeTtcbnZhciBtZXJnZSA9IHdpc3BfcnVudGltZS5tZXJnZTtcbnZhciBrZXlzID0gd2lzcF9ydW50aW1lLmtleXM7XG52YXIgdmFscyA9IHdpc3BfcnVudGltZS52YWxzO1xudmFyIGlzQ29udGFpbnNWZWN0b3IgPSB3aXNwX3J1bnRpbWUuaXNDb250YWluc1ZlY3RvcjtcbnZhciBtYXBEaWN0aW9uYXJ5ID0gd2lzcF9ydW50aW1lLm1hcERpY3Rpb25hcnk7XG52YXIgaXNTdHJpbmcgPSB3aXNwX3J1bnRpbWUuaXNTdHJpbmc7XG52YXIgaXNOdW1iZXIgPSB3aXNwX3J1bnRpbWUuaXNOdW1iZXI7XG52YXIgaXNWZWN0b3IgPSB3aXNwX3J1bnRpbWUuaXNWZWN0b3I7XG52YXIgaXNCb29sZWFuID0gd2lzcF9ydW50aW1lLmlzQm9vbGVhbjtcbnZhciBzdWJzID0gd2lzcF9ydW50aW1lLnN1YnM7XG52YXIgcmVGaW5kID0gd2lzcF9ydW50aW1lLnJlRmluZDtcbnZhciBpc1RydWUgPSB3aXNwX3J1bnRpbWUuaXNUcnVlO1xudmFyIGlzRmFsc2UgPSB3aXNwX3J1bnRpbWUuaXNGYWxzZTtcbnZhciBpc05pbCA9IHdpc3BfcnVudGltZS5pc05pbDtcbnZhciBpc1JlUGF0dGVybiA9IHdpc3BfcnVudGltZS5pc1JlUGF0dGVybjtcbnZhciBpbmMgPSB3aXNwX3J1bnRpbWUuaW5jO1xudmFyIGRlYyA9IHdpc3BfcnVudGltZS5kZWM7XG52YXIgc3RyID0gd2lzcF9ydW50aW1lLnN0cjtcbnZhciBjaGFyID0gd2lzcF9ydW50aW1lLmNoYXI7XG52YXIgaW50ID0gd2lzcF9ydW50aW1lLmludDtcbnZhciBpc0VxdWFsID0gd2lzcF9ydW50aW1lLmlzRXF1YWw7XG52YXIgaXNTdHJpY3RFcXVhbCA9IHdpc3BfcnVudGltZS5pc1N0cmljdEVxdWFsOztcbnZhciB3aXNwX3N0cmluZyA9IHJlcXVpcmUoXCIuL3N0cmluZ1wiKTtcbnZhciBzcGxpdCA9IHdpc3Bfc3RyaW5nLnNwbGl0O1xudmFyIGpvaW4gPSB3aXNwX3N0cmluZy5qb2luO1xudmFyIHVwcGVyQ2FzZSA9IHdpc3Bfc3RyaW5nLnVwcGVyQ2FzZTtcbnZhciByZXBsYWNlID0gd2lzcF9zdHJpbmcucmVwbGFjZTs7XG52YXIgd2lzcF9iYWNrZW5kX2phdmFzY3JpcHRfd3JpdGVyID0gcmVxdWlyZShcIi4vYmFja2VuZC9qYXZhc2NyaXB0L3dyaXRlclwiKTtcbnZhciB3cml0ZVJlZmVyZW5jZSA9IHdpc3BfYmFja2VuZF9qYXZhc2NyaXB0X3dyaXRlci53cml0ZVJlZmVyZW5jZTtcbnZhciB3cml0ZUtleXdvcmRSZWZlcmVuY2UgPSB3aXNwX2JhY2tlbmRfamF2YXNjcmlwdF93cml0ZXIud3JpdGVLZXl3b3JkUmVmZXJlbmNlO1xudmFyIHdyaXRlS2V5d29yZCA9IHdpc3BfYmFja2VuZF9qYXZhc2NyaXB0X3dyaXRlci53cml0ZUtleXdvcmQ7XG52YXIgd3JpdGVTeW1ib2wgPSB3aXNwX2JhY2tlbmRfamF2YXNjcmlwdF93cml0ZXIud3JpdGVTeW1ib2w7XG52YXIgd3JpdGVOaWwgPSB3aXNwX2JhY2tlbmRfamF2YXNjcmlwdF93cml0ZXIud3JpdGVOaWw7XG52YXIgd3JpdGVDb21tZW50ID0gd2lzcF9iYWNrZW5kX2phdmFzY3JpcHRfd3JpdGVyLndyaXRlQ29tbWVudDtcbnZhciB3cml0ZU51bWJlciA9IHdpc3BfYmFja2VuZF9qYXZhc2NyaXB0X3dyaXRlci53cml0ZU51bWJlcjtcbnZhciB3cml0ZVN0cmluZyA9IHdpc3BfYmFja2VuZF9qYXZhc2NyaXB0X3dyaXRlci53cml0ZVN0cmluZztcbnZhciB3cml0ZUJvb2xlYW4gPSB3aXNwX2JhY2tlbmRfamF2YXNjcmlwdF93cml0ZXIud3JpdGVCb29sZWFuOzs7XG5cbnZhciBpc1NlbGZFdmFsdWF0aW5nID0gZnVuY3Rpb24gaXNTZWxmRXZhbHVhdGluZyhmb3JtKSB7XG4gIHJldHVybiAoaXNOdW1iZXIoZm9ybSkpIHx8ICgoaXNTdHJpbmcoZm9ybSkpICYmICghKGlzU3ltYm9sKGZvcm0pKSkgJiYgKCEoaXNLZXl3b3JkKGZvcm0pKSkpIHx8IChpc0Jvb2xlYW4oZm9ybSkpIHx8IChpc05pbChmb3JtKSkgfHwgKGlzUmVQYXR0ZXJuKGZvcm0pKTtcbn07XG5leHBvcnRzLmlzU2VsZkV2YWx1YXRpbmcgPSBpc1NlbGZFdmFsdWF0aW5nO1xuXG52YXIgX19tYWNyb3NfXyA9IHt9O1xuZXhwb3J0cy5fX21hY3Jvc19fID0gX19tYWNyb3NfXztcblxudmFyIGV4ZWN1dGVNYWNybyA9IGZ1bmN0aW9uIGV4ZWN1dGVNYWNybyhuYW1lLCBmb3JtKSB7XG4gIHJldHVybiAoX19tYWNyb3NfXyB8fCAwKVtuYW1lXS5hcHBseSgoX19tYWNyb3NfXyB8fCAwKVtuYW1lXSwgdmVjKGZvcm0pKTtcbn07XG5leHBvcnRzLmV4ZWN1dGVNYWNybyA9IGV4ZWN1dGVNYWNybztcblxudmFyIGluc3RhbGxNYWNybyA9IGZ1bmN0aW9uIGluc3RhbGxNYWNybyhuYW1lLCBtYWNyb0ZuKSB7XG4gIHJldHVybiAoX19tYWNyb3NfXyB8fCAwKVtuYW1lXSA9IG1hY3JvRm47XG59O1xuZXhwb3J0cy5pbnN0YWxsTWFjcm8gPSBpbnN0YWxsTWFjcm87XG5cbnZhciBpc01hY3JvID0gZnVuY3Rpb24gaXNNYWNybyhuYW1lKSB7XG4gIHJldHVybiAoaXNTeW1ib2wobmFtZSkpICYmICgoX19tYWNyb3NfXyB8fCAwKVtuYW1lXSkgJiYgdHJ1ZTtcbn07XG5leHBvcnRzLmlzTWFjcm8gPSBpc01hY3JvO1xuXG52YXIgbWFrZU1hY3JvID0gZnVuY3Rpb24gbWFrZU1hY3JvKHBhdHRlcm4sIGJvZHkpIHtcbiAgdmFyIG1hY3JvRm4gPSBjb25jYXQobGlzdChzeW1ib2wodm9pZCgwKSwgXCJmblwiKSwgcGF0dGVybiksIGJvZHkpO1xuICByZXR1cm4gZXZhbChcIlwiICsgXCIoXCIgKyAoY29tcGlsZShtYWNyb2V4cGFuZChtYWNyb0ZuKSkpICsgXCIpXCIpO1xufTtcbmV4cG9ydHMubWFrZU1hY3JvID0gbWFrZU1hY3JvO1xuXG5pbnN0YWxsTWFjcm8oc3ltYm9sKHZvaWQoMCksIFwiZGVmbWFjcm9cIiksIGZ1bmN0aW9uKG5hbWUsIHNpZ25hdHVyZSkge1xuICB2YXIgYm9keSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gIHJldHVybiBpbnN0YWxsTWFjcm8obmFtZSwgbWFrZU1hY3JvKHNpZ25hdHVyZSwgYm9keSkpO1xufSk7XG5cbnZhciBfX3NwZWNpYWxzX18gPSB7fTtcbmV4cG9ydHMuX19zcGVjaWFsc19fID0gX19zcGVjaWFsc19fO1xuXG52YXIgaW5zdGFsbFNwZWNpYWwgPSBmdW5jdGlvbiBpbnN0YWxsU3BlY2lhbChuYW1lLCBmLCB2YWxpZGF0b3IpIHtcbiAgcmV0dXJuIChfX3NwZWNpYWxzX18gfHwgMClbbmFtZV0gPSBmdW5jdGlvbihmb3JtKSB7XG4gICAgdmFsaWRhdG9yID9cbiAgICAgIHZhbGlkYXRvcihmb3JtKSA6XG4gICAgICB2b2lkKDApO1xuICAgIHJldHVybiBmKHdpdGhNZXRhKHJlc3QoZm9ybSksIG1ldGEoZm9ybSkpKTtcbiAgfTtcbn07XG5leHBvcnRzLmluc3RhbGxTcGVjaWFsID0gaW5zdGFsbFNwZWNpYWw7XG5cbnZhciBpc1NwZWNpYWwgPSBmdW5jdGlvbiBpc1NwZWNpYWwobmFtZSkge1xuICByZXR1cm4gKGlzU3ltYm9sKG5hbWUpKSAmJiAoKF9fc3BlY2lhbHNfXyB8fCAwKVtuYW1lXSkgJiYgdHJ1ZTtcbn07XG5leHBvcnRzLmlzU3BlY2lhbCA9IGlzU3BlY2lhbDtcblxudmFyIGV4ZWN1dGVTcGVjaWFsID0gZnVuY3Rpb24gZXhlY3V0ZVNwZWNpYWwobmFtZSwgZm9ybSkge1xuICByZXR1cm4gKChfX3NwZWNpYWxzX18gfHwgMClbbmFtZV0pKGZvcm0pO1xufTtcbmV4cG9ydHMuZXhlY3V0ZVNwZWNpYWwgPSBleGVjdXRlU3BlY2lhbDtcblxudmFyIG9wdCA9IGZ1bmN0aW9uIG9wdChhcmd1bWVudCwgZmFsbGJhY2spIHtcbiAgcmV0dXJuIChpc05pbChhcmd1bWVudCkpIHx8IChpc0VtcHR5KGFyZ3VtZW50KSkgP1xuICAgIGZhbGxiYWNrIDpcbiAgICBmaXJzdChhcmd1bWVudCk7XG59O1xuZXhwb3J0cy5vcHQgPSBvcHQ7XG5cbnZhciBhcHBseUZvcm0gPSBmdW5jdGlvbiBhcHBseUZvcm0oZm5OYW1lLCBmb3JtLCBpc1F1b3RlZCkge1xuICByZXR1cm4gY29ucyhmbk5hbWUsIGlzUXVvdGVkID9cbiAgICBtYXAoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwicXVvdGVcIiksIGUpO1xuICAgIH0sIGZvcm0pIDpcbiAgICBmb3JtLCBmb3JtKTtcbn07XG5leHBvcnRzLmFwcGx5Rm9ybSA9IGFwcGx5Rm9ybTtcblxudmFyIGFwcGx5VW5xdW90ZWRGb3JtID0gZnVuY3Rpb24gYXBwbHlVbnF1b3RlZEZvcm0oZm5OYW1lLCBmb3JtKSB7XG4gIHJldHVybiBjb25zKGZuTmFtZSwgbWFwKGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gaXNVbnF1b3RlKGUpID9cbiAgICAgIHNlY29uZChlKSA6XG4gICAgKGlzTGlzdChlKSkgJiYgKGlzS2V5d29yZChmaXJzdChlKSkpID9cbiAgICAgIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwic3ludGF4LXF1b3RlXCIpLCBzZWNvbmQoZSkpIDpcbiAgICAgIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwic3ludGF4LXF1b3RlXCIpLCBlKTtcbiAgfSwgZm9ybSkpO1xufTtcbmV4cG9ydHMuYXBwbHlVbnF1b3RlZEZvcm0gPSBhcHBseVVucXVvdGVkRm9ybTtcblxudmFyIHNwbGl0U3BsaWNlcyA9IGZ1bmN0aW9uIHNwbGl0U3BsaWNlcyhmb3JtLCBmbk5hbWUpIHtcbiAgdmFyIG1ha2VTcGxpY2UgPSBmdW5jdGlvbiBtYWtlU3BsaWNlKGZvcm0pIHtcbiAgICByZXR1cm4gKGlzU2VsZkV2YWx1YXRpbmcoZm9ybSkpIHx8IChpc1N5bWJvbChmb3JtKSkgP1xuICAgICAgYXBwbHlVbnF1b3RlZEZvcm0oZm5OYW1lLCBsaXN0KGZvcm0pKSA6XG4gICAgICBhcHBseVVucXVvdGVkRm9ybShmbk5hbWUsIGZvcm0pO1xuICB9O1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3Aobm9kZXMsIHNsaWNlcywgYWNjKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShub2RlcykgP1xuICAgICAgcmV2ZXJzZShpc0VtcHR5KGFjYykgP1xuICAgICAgICBzbGljZXMgOlxuICAgICAgICBjb25zKG1ha2VTcGxpY2UocmV2ZXJzZShhY2MpKSwgc2xpY2VzKSkgOlxuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbm9kZSA9IGZpcnN0KG5vZGVzKTtcbiAgICAgICAgcmV0dXJuIGlzVW5xdW90ZVNwbGljaW5nKG5vZGUpID9cbiAgICAgICAgICAobm9kZXMgPSByZXN0KG5vZGVzKSwgc2xpY2VzID0gY29ucyhzZWNvbmQobm9kZSksIGlzRW1wdHkoYWNjKSA/XG4gICAgICAgICAgICBzbGljZXMgOlxuICAgICAgICAgICAgY29ucyhtYWtlU3BsaWNlKHJldmVyc2UoYWNjKSksIHNsaWNlcykpLCBhY2MgPSBsaXN0KCksIGxvb3ApIDpcbiAgICAgICAgICAobm9kZXMgPSByZXN0KG5vZGVzKSwgc2xpY2VzID0gc2xpY2VzLCBhY2MgPSBjb25zKG5vZGUsIGFjYyksIGxvb3ApO1xuICAgICAgfSkoKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoZm9ybSwgbGlzdCgpLCBsaXN0KCkpO1xufTtcbmV4cG9ydHMuc3BsaXRTcGxpY2VzID0gc3BsaXRTcGxpY2VzO1xuXG52YXIgc3ludGF4UXVvdGVTcGxpdCA9IGZ1bmN0aW9uIHN5bnRheFF1b3RlU3BsaXQoYXBwZW5kTmFtZSwgZm5OYW1lLCBmb3JtKSB7XG4gIHZhciBzbGljZXMgPSBzcGxpdFNwbGljZXMoZm9ybSwgZm5OYW1lKTtcbiAgdmFyIG4gPSBjb3VudChzbGljZXMpO1xuICByZXR1cm4gbiA9PT0gMCA/XG4gICAgbGlzdChmbk5hbWUpIDpcbiAgbiA9PT0gMSA/XG4gICAgZmlyc3Qoc2xpY2VzKSA6XG4gIFwiZGVmYXVsdFwiID9cbiAgICBhcHBseUZvcm0oYXBwZW5kTmFtZSwgc2xpY2VzKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnN5bnRheFF1b3RlU3BsaXQgPSBzeW50YXhRdW90ZVNwbGl0O1xuXG52YXIgY29tcGlsZU9iamVjdCA9IGZ1bmN0aW9uIGNvbXBpbGVPYmplY3QoZm9ybSwgaXNRdW90ZWQpIHtcbiAgcmV0dXJuIGlzS2V5d29yZChmb3JtKSA/XG4gICAgd3JpdGVLZXl3b3JkKGZvcm0pIDpcbiAgaXNTeW1ib2woZm9ybSkgP1xuICAgIHdyaXRlU3ltYm9sKGZvcm0pIDpcbiAgaXNOdW1iZXIoZm9ybSkgP1xuICAgIHdyaXRlTnVtYmVyKGZvcm0pIDpcbiAgaXNTdHJpbmcoZm9ybSkgP1xuICAgIHdyaXRlU3RyaW5nKGZvcm0pIDpcbiAgaXNCb29sZWFuKGZvcm0pID9cbiAgICB3cml0ZUJvb2xlYW4oZm9ybSkgOlxuICBpc05pbChmb3JtKSA/XG4gICAgd3JpdGVOaWwoZm9ybSkgOlxuICBpc1JlUGF0dGVybihmb3JtKSA/XG4gICAgY29tcGlsZVJlUGF0dGVybihmb3JtKSA6XG4gIGlzVmVjdG9yKGZvcm0pID9cbiAgICBjb21waWxlKGFwcGx5Rm9ybShzeW1ib2wodm9pZCgwKSwgXCJ2ZWN0b3JcIiksIGxpc3QuYXBwbHkobGlzdCwgZm9ybSksIGlzUXVvdGVkKSkgOlxuICBpc0xpc3QoZm9ybSkgP1xuICAgIGNvbXBpbGUoYXBwbHlGb3JtKHN5bWJvbCh2b2lkKDApLCBcImxpc3RcIiksIGZvcm0sIGlzUXVvdGVkKSkgOlxuICBpc0RpY3Rpb25hcnkoZm9ybSkgP1xuICAgIGNvbXBpbGVEaWN0aW9uYXJ5KGlzUXVvdGVkID9cbiAgICAgIG1hcERpY3Rpb25hcnkoZm9ybSwgZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gbGlzdChzeW1ib2wodm9pZCgwKSwgXCJxdW90ZVwiKSwgeCk7XG4gICAgICB9KSA6XG4gICAgICBmb3JtKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmNvbXBpbGVPYmplY3QgPSBjb21waWxlT2JqZWN0O1xuXG52YXIgY29tcGlsZVN5bnRheFF1b3RlZFZlY3RvciA9IGZ1bmN0aW9uIGNvbXBpbGVTeW50YXhRdW90ZWRWZWN0b3IoZm9ybSkge1xuICB2YXIgY29uY2F0Rm9ybSA9IHN5bnRheFF1b3RlU3BsaXQoc3ltYm9sKHZvaWQoMCksIFwiY29uY2F0XCIpLCBzeW1ib2wodm9pZCgwKSwgXCJ2ZWN0b3JcIiksIGxpc3QuYXBwbHkobGlzdCwgZm9ybSkpO1xuICByZXR1cm4gY29tcGlsZShjb3VudChjb25jYXRGb3JtKSA+IDEgP1xuICAgIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwidmVjXCIpLCBjb25jYXRGb3JtKSA6XG4gICAgY29uY2F0Rm9ybSk7XG59O1xuZXhwb3J0cy5jb21waWxlU3ludGF4UXVvdGVkVmVjdG9yID0gY29tcGlsZVN5bnRheFF1b3RlZFZlY3RvcjtcblxudmFyIGNvbXBpbGVTeW50YXhRdW90ZWQgPSBmdW5jdGlvbiBjb21waWxlU3ludGF4UXVvdGVkKGZvcm0pIHtcbiAgcmV0dXJuIGlzTGlzdChmb3JtKSA/XG4gICAgY29tcGlsZShzeW50YXhRdW90ZVNwbGl0KHN5bWJvbCh2b2lkKDApLCBcImNvbmNhdFwiKSwgc3ltYm9sKHZvaWQoMCksIFwibGlzdFwiKSwgZm9ybSkpIDpcbiAgaXNWZWN0b3IoZm9ybSkgP1xuICAgIGNvbXBpbGVTeW50YXhRdW90ZWRWZWN0b3IoZm9ybSkgOlxuICBcImVsc2VcIiA/XG4gICAgY29tcGlsZU9iamVjdChmb3JtKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmNvbXBpbGVTeW50YXhRdW90ZWQgPSBjb21waWxlU3ludGF4UXVvdGVkO1xuXG52YXIgY29tcGlsZSA9IGZ1bmN0aW9uIGNvbXBpbGUoZm9ybSkge1xuICByZXR1cm4gaXNTZWxmRXZhbHVhdGluZyhmb3JtKSA/XG4gICAgY29tcGlsZU9iamVjdChmb3JtKSA6XG4gIGlzU3ltYm9sKGZvcm0pID9cbiAgICB3cml0ZVJlZmVyZW5jZShmb3JtKSA6XG4gIGlzS2V5d29yZChmb3JtKSA/XG4gICAgd3JpdGVLZXl3b3JkUmVmZXJlbmNlKGZvcm0pIDpcbiAgaXNWZWN0b3IoZm9ybSkgP1xuICAgIGNvbXBpbGVPYmplY3QoZm9ybSkgOlxuICBpc0RpY3Rpb25hcnkoZm9ybSkgP1xuICAgIGNvbXBpbGVPYmplY3QoZm9ybSkgOlxuICBpc0xpc3QoZm9ybSkgP1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoZWFkID0gZmlyc3QoZm9ybSk7XG4gICAgICByZXR1cm4gaXNFbXB0eShmb3JtKSA/XG4gICAgICAgIGNvbXBpbGVPYmplY3QoZm9ybSwgdHJ1ZSkgOlxuICAgICAgaXNRdW90ZShmb3JtKSA/XG4gICAgICAgIGNvbXBpbGVPYmplY3Qoc2Vjb25kKGZvcm0pLCB0cnVlKSA6XG4gICAgICBpc1N5bnRheFF1b3RlKGZvcm0pID9cbiAgICAgICAgY29tcGlsZVN5bnRheFF1b3RlZChzZWNvbmQoZm9ybSkpIDpcbiAgICAgIGlzU3BlY2lhbChoZWFkKSA/XG4gICAgICAgIGV4ZWN1dGVTcGVjaWFsKGhlYWQsIGZvcm0pIDpcbiAgICAgIGlzS2V5d29yZChoZWFkKSA/XG4gICAgICAgIGNvbXBpbGUobGlzdChzeW1ib2wodm9pZCgwKSwgXCJnZXRcIiksIHNlY29uZChmb3JtKSwgaGVhZCkpIDpcbiAgICAgIFwiZWxzZVwiID9cbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAhKChpc1N5bWJvbChoZWFkKSkgfHwgKGlzTGlzdChoZWFkKSkpID9cbiAgICAgICAgICAgIChmdW5jdGlvbigpIHsgdGhyb3cgY29tcGlsZXJFcnJvcihmb3JtLCBcIlwiICsgXCJvcGVyYXRvciBpcyBub3QgYSBwcm9jZWR1cmU6IFwiICsgaGVhZCk7IH0pKCkgOlxuICAgICAgICAgICAgY29tcGlsZUludm9rZShmb3JtKTtcbiAgICAgICAgfSkoKSA6XG4gICAgICAgIHZvaWQoMCk7XG4gICAgfSkoKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuXG52YXIgY29tcGlsZV8gPSBmdW5jdGlvbiBjb21waWxlXyhmb3Jtcykge1xuICByZXR1cm4gcmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgZm9ybSkge1xuICAgIHJldHVybiBcIlwiICsgcmVzdWx0ICsgKGlzRW1wdHkocmVzdWx0KSA/XG4gICAgICBcIlwiIDpcbiAgICAgIFwiO1xcblxcblwiKSArIChjb21waWxlKGlzTGlzdChmb3JtKSA/XG4gICAgICB3aXRoTWV0YShtYWNyb2V4cGFuZChmb3JtKSwgY29uaih7XG4gICAgICAgIFwidG9wXCI6IHRydWVcbiAgICAgIH0sIG1ldGEoZm9ybSkpKSA6XG4gICAgICBmb3JtKSk7XG4gIH0sIFwiXCIsIGZvcm1zKTtcbn07XG5leHBvcnRzLmNvbXBpbGVfID0gY29tcGlsZV87XG5cbnZhciBjb21waWxlUHJvZ3JhbSA9IGZ1bmN0aW9uIGNvbXBpbGVQcm9ncmFtKGZvcm1zKSB7XG4gIHJldHVybiByZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBmb3JtKSB7XG4gICAgcmV0dXJuIFwiXCIgKyByZXN1bHQgKyAoaXNFbXB0eShyZXN1bHQpID9cbiAgICAgIFwiXCIgOlxuICAgICAgXCI7XFxuXFxuXCIpICsgKGNvbXBpbGUoaXNMaXN0KGZvcm0pID9cbiAgICAgIHdpdGhNZXRhKG1hY3JvZXhwYW5kKGZvcm0pLCBjb25qKHtcbiAgICAgICAgXCJ0b3BcIjogdHJ1ZVxuICAgICAgfSwgbWV0YShmb3JtKSkpIDpcbiAgICAgIGZvcm0pKTtcbiAgfSwgXCJcIiwgZm9ybXMpO1xufTtcbmV4cG9ydHMuY29tcGlsZVByb2dyYW0gPSBjb21waWxlUHJvZ3JhbTtcblxudmFyIG1hY3JvZXhwYW5kMSA9IGZ1bmN0aW9uIG1hY3JvZXhwYW5kMShmb3JtKSB7XG4gIHJldHVybiBpc0xpc3QoZm9ybSkgP1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvcCA9IGZpcnN0KGZvcm0pO1xuICAgICAgdmFyIGlkID0gaXNTeW1ib2wob3ApID9cbiAgICAgICAgbmFtZShvcCkgOlxuICAgICAgICB2b2lkKDApO1xuICAgICAgcmV0dXJuIGlzU3BlY2lhbChvcCkgP1xuICAgICAgICBmb3JtIDpcbiAgICAgIGlzTWFjcm8ob3ApID9cbiAgICAgICAgZXhlY3V0ZU1hY3JvKG9wLCByZXN0KGZvcm0pKSA6XG4gICAgICAoaXNTeW1ib2wob3ApKSAmJiAoIShpZCA9PT0gXCIuXCIpKSA/XG4gICAgICAgIGZpcnN0KGlkKSA9PT0gXCIuXCIgP1xuICAgICAgICAgIGNvdW50KGZvcm0pIDwgMiA/XG4gICAgICAgICAgICAoZnVuY3Rpb24oKSB7IHRocm93IEVycm9yKFwiTWFsZm9ybWVkIG1lbWJlciBleHByZXNzaW9uLCBleHBlY3RpbmcgKC5tZW1iZXIgdGFyZ2V0IC4uLilcIik7IH0pKCkgOlxuICAgICAgICAgICAgY29ucyhzeW1ib2wodm9pZCgwKSwgXCIuXCIpLCBjb25zKHNlY29uZChmb3JtKSwgY29ucyhzeW1ib2woc3VicyhpZCwgMSkpLCByZXN0KHJlc3QoZm9ybSkpKSkpIDpcbiAgICAgICAgbGFzdChpZCkgPT09IFwiLlwiID9cbiAgICAgICAgICBjb25zKHN5bWJvbCh2b2lkKDApLCBcIm5ld1wiKSwgY29ucyhzeW1ib2woc3VicyhpZCwgMCwgZGVjKGNvdW50KGlkKSkpKSwgcmVzdChmb3JtKSkpIDpcbiAgICAgICAgICBmb3JtIDpcbiAgICAgIFwiZWxzZVwiID9cbiAgICAgICAgZm9ybSA6XG4gICAgICAgIHZvaWQoMCk7XG4gICAgfSkoKSA6XG4gICAgZm9ybTtcbn07XG5leHBvcnRzLm1hY3JvZXhwYW5kMSA9IG1hY3JvZXhwYW5kMTtcblxudmFyIG1hY3JvZXhwYW5kID0gZnVuY3Rpb24gbWFjcm9leHBhbmQoZm9ybSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3Aob3JpZ2luYWwsIGV4cGFuZGVkKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gb3JpZ2luYWwgPT09IGV4cGFuZGVkID9cbiAgICAgIG9yaWdpbmFsIDpcbiAgICAgIChvcmlnaW5hbCA9IGV4cGFuZGVkLCBleHBhbmRlZCA9IG1hY3JvZXhwYW5kMShleHBhbmRlZCksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShmb3JtLCBtYWNyb2V4cGFuZDEoZm9ybSkpO1xufTtcbmV4cG9ydHMubWFjcm9leHBhbmQgPSBtYWNyb2V4cGFuZDtcblxudmFyIF9saW5lQnJlYWtQYXR0ZXJuXyA9IC9cXG4oPz1bXlxcbl0pL207XG5leHBvcnRzLl9saW5lQnJlYWtQYXR0ZXJuXyA9IF9saW5lQnJlYWtQYXR0ZXJuXztcblxudmFyIGluZGVudCA9IGZ1bmN0aW9uIGluZGVudChjb2RlLCBpbmRlbnRhdGlvbikge1xuICByZXR1cm4gam9pbihpbmRlbnRhdGlvbiwgc3BsaXQoY29kZSwgX2xpbmVCcmVha1BhdHRlcm5fKSk7XG59O1xuZXhwb3J0cy5pbmRlbnQgPSBpbmRlbnQ7XG5cbnZhciBjb21waWxlVGVtcGxhdGUgPSBmdW5jdGlvbiBjb21waWxlVGVtcGxhdGUoZm9ybSkge1xuICB2YXIgaW5kZW50UGF0dGVybiA9IC9cXG4gKiQvO1xuICB2YXIgZ2V0SW5kZW50YXRpb24gPSBmdW5jdGlvbihjb2RlKSB7XG4gICAgcmV0dXJuIChyZUZpbmQoaW5kZW50UGF0dGVybiwgY29kZSkpIHx8IFwiXFxuXCI7XG4gIH07XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChjb2RlLCBwYXJ0cywgdmFsdWVzKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gY291bnQocGFydHMpID4gMSA/XG4gICAgICAoY29kZSA9IFwiXCIgKyBjb2RlICsgKGZpcnN0KHBhcnRzKSkgKyAoaW5kZW50KFwiXCIgKyAoZmlyc3QodmFsdWVzKSksIGdldEluZGVudGF0aW9uKGZpcnN0KHBhcnRzKSkpKSwgcGFydHMgPSByZXN0KHBhcnRzKSwgdmFsdWVzID0gcmVzdCh2YWx1ZXMpLCBsb29wKSA6XG4gICAgICBcIlwiICsgY29kZSArIChmaXJzdChwYXJ0cykpO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShcIlwiLCBzcGxpdChmaXJzdChmb3JtKSwgXCJ+e31cIiksIHJlc3QoZm9ybSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZVRlbXBsYXRlID0gY29tcGlsZVRlbXBsYXRlO1xuXG52YXIgY29tcGlsZURlZiA9IGZ1bmN0aW9uIGNvbXBpbGVEZWYoZm9ybSkge1xuICB2YXIgaWQgPSBmaXJzdChmb3JtKTtcbiAgdmFyIGlzRXhwb3J0ID0gKCgoKG1ldGEoZm9ybSkpIHx8IHt9KSB8fCAwKVtcInRvcFwiXSkgJiYgKCEoKCgobWV0YShpZCkpIHx8IHt9KSB8fCAwKVtcInByaXZhdGVcIl0pKTtcbiAgdmFyIGF0dHJpYnV0ZSA9IHN5bWJvbChuYW1lc3BhY2UoaWQpLCBcIlwiICsgXCItXCIgKyAobmFtZShpZCkpKTtcbiAgcmV0dXJuIGlzRXhwb3J0ID9cbiAgICBjb21waWxlVGVtcGxhdGUobGlzdChcInZhciB+e307XFxufnt9XCIsIGNvbXBpbGUoY29ucyhzeW1ib2wodm9pZCgwKSwgXCJzZXQhXCIpLCBmb3JtKSksIGNvbXBpbGUobGlzdChzeW1ib2wodm9pZCgwKSwgXCJzZXQhXCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcIi5cIiksIHN5bWJvbCh2b2lkKDApLCBcImV4cG9ydHNcIiksIGF0dHJpYnV0ZSksIGlkKSkpKSA6XG4gICAgY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ2YXIgfnt9XCIsIGNvbXBpbGUoY29ucyhzeW1ib2wodm9pZCgwKSwgXCJzZXQhXCIpLCBmb3JtKSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVEZWYgPSBjb21waWxlRGVmO1xuXG52YXIgY29tcGlsZUlmRWxzZSA9IGZ1bmN0aW9uIGNvbXBpbGVJZkVsc2UoZm9ybSkge1xuICB2YXIgY29uZGl0aW9uID0gbWFjcm9leHBhbmQoZmlyc3QoZm9ybSkpO1xuICB2YXIgdGhlbkV4cHJlc3Npb24gPSBtYWNyb2V4cGFuZChzZWNvbmQoZm9ybSkpO1xuICB2YXIgZWxzZUV4cHJlc3Npb24gPSBtYWNyb2V4cGFuZCh0aGlyZChmb3JtKSk7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdCgoaXNMaXN0KGVsc2VFeHByZXNzaW9uKSkgJiYgKGlzRXF1YWwoZmlyc3QoZWxzZUV4cHJlc3Npb24pLCBzeW1ib2wodm9pZCgwKSwgXCJpZlwiKSkpID9cbiAgICBcIn57fSA/XFxuICB+e30gOlxcbn57fVwiIDpcbiAgICBcIn57fSA/XFxuICB+e30gOlxcbiAgfnt9XCIsIGNvbXBpbGUoY29uZGl0aW9uKSwgY29tcGlsZSh0aGVuRXhwcmVzc2lvbiksIGNvbXBpbGUoZWxzZUV4cHJlc3Npb24pKSk7XG59O1xuZXhwb3J0cy5jb21waWxlSWZFbHNlID0gY29tcGlsZUlmRWxzZTtcblxudmFyIGNvbXBpbGVEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gY29tcGlsZURpY3Rpb25hcnkoZm9ybSkge1xuICB2YXIgYm9keSA9IChmdW5jdGlvbiBsb29wKGJvZHksIG5hbWVzKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShuYW1lcykgP1xuICAgICAgYm9keSA6XG4gICAgICAoYm9keSA9IFwiXCIgKyAoaXNOaWwoYm9keSkgP1xuICAgICAgICBcIlwiIDpcbiAgICAgICAgXCJcIiArIGJvZHkgKyBcIixcXG5cIikgKyAoY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ+e306IH57fVwiLCBjb21waWxlKGZpcnN0KG5hbWVzKSksIGNvbXBpbGUobWFjcm9leHBhbmQoKGZvcm0gfHwgMClbZmlyc3QobmFtZXMpXSkpKSkpLCBuYW1lcyA9IHJlc3QobmFtZXMpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkodm9pZCgwKSwga2V5cyhmb3JtKSk7XG4gIHJldHVybiBpc05pbChib2R5KSA/XG4gICAgXCJ7fVwiIDpcbiAgICBjb21waWxlVGVtcGxhdGUobGlzdChcIntcXG4gIH57fVxcbn1cIiwgYm9keSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZURpY3Rpb25hcnkgPSBjb21waWxlRGljdGlvbmFyeTtcblxudmFyIGRlc3VnYXJGbk5hbWUgPSBmdW5jdGlvbiBkZXN1Z2FyRm5OYW1lKGZvcm0pIHtcbiAgcmV0dXJuIChpc1N5bWJvbChmaXJzdChmb3JtKSkpIHx8IChpc05pbChmaXJzdChmb3JtKSkpID9cbiAgICBmb3JtIDpcbiAgICBjb25zKHZvaWQoMCksIGZvcm0pO1xufTtcbmV4cG9ydHMuZGVzdWdhckZuTmFtZSA9IGRlc3VnYXJGbk5hbWU7XG5cbnZhciBkZXN1Z2FyRm5Eb2MgPSBmdW5jdGlvbiBkZXN1Z2FyRm5Eb2MoZm9ybSkge1xuICByZXR1cm4gKGlzU3RyaW5nKHNlY29uZChmb3JtKSkpIHx8IChpc05pbChzZWNvbmQoZm9ybSkpKSA/XG4gICAgZm9ybSA6XG4gICAgY29ucyhmaXJzdChmb3JtKSwgY29ucyh2b2lkKDApLCByZXN0KGZvcm0pKSk7XG59O1xuZXhwb3J0cy5kZXN1Z2FyRm5Eb2MgPSBkZXN1Z2FyRm5Eb2M7XG5cbnZhciBkZXN1Z2FyRm5BdHRycyA9IGZ1bmN0aW9uIGRlc3VnYXJGbkF0dHJzKGZvcm0pIHtcbiAgcmV0dXJuIChpc0RpY3Rpb25hcnkodGhpcmQoZm9ybSkpKSB8fCAoaXNOaWwodGhpcmQoZm9ybSkpKSA/XG4gICAgZm9ybSA6XG4gICAgY29ucyhmaXJzdChmb3JtKSwgY29ucyhzZWNvbmQoZm9ybSksIGNvbnModm9pZCgwKSwgcmVzdChyZXN0KGZvcm0pKSkpKTtcbn07XG5leHBvcnRzLmRlc3VnYXJGbkF0dHJzID0gZGVzdWdhckZuQXR0cnM7XG5cbnZhciBjb21waWxlRGVzdWdhcmVkRm4gPSBmdW5jdGlvbiBjb21waWxlRGVzdWdhcmVkRm4obmFtZSwgZG9jLCBhdHRycywgcGFyYW1zLCBib2R5KSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUoaXNOaWwobmFtZSkgP1xuICAgIGxpc3QoXCJmdW5jdGlvbih+e30pIHtcXG4gIH57fVxcbn1cIiwgam9pbihcIiwgXCIsIG1hcChjb21waWxlLCAocGFyYW1zIHx8IDApW1wibmFtZXNcIl0pKSwgY29tcGlsZUZuQm9keShtYXAobWFjcm9leHBhbmQsIGJvZHkpLCBwYXJhbXMpKSA6XG4gICAgbGlzdChcImZ1bmN0aW9uIH57fSh+e30pIHtcXG4gIH57fVxcbn1cIiwgY29tcGlsZShuYW1lKSwgam9pbihcIiwgXCIsIG1hcChjb21waWxlLCAocGFyYW1zIHx8IDApW1wibmFtZXNcIl0pKSwgY29tcGlsZUZuQm9keShtYXAobWFjcm9leHBhbmQsIGJvZHkpLCBwYXJhbXMpKSk7XG59O1xuZXhwb3J0cy5jb21waWxlRGVzdWdhcmVkRm4gPSBjb21waWxlRGVzdWdhcmVkRm47XG5cbnZhciBjb21waWxlU3RhdGVtZW50cyA9IGZ1bmN0aW9uIGNvbXBpbGVTdGF0ZW1lbnRzKGZvcm0sIHByZWZpeCkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AocmVzdWx0LCBleHByZXNzaW9uLCBleHByZXNzaW9ucykge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IGlzRW1wdHkoZXhwcmVzc2lvbnMpID9cbiAgICAgIFwiXCIgKyByZXN1bHQgKyAoaXNOaWwocHJlZml4KSA/XG4gICAgICAgIFwiXCIgOlxuICAgICAgICBwcmVmaXgpICsgKGNvbXBpbGUobWFjcm9leHBhbmQoZXhwcmVzc2lvbikpKSArIFwiO1wiIDpcbiAgICAgIChyZXN1bHQgPSBcIlwiICsgcmVzdWx0ICsgKGNvbXBpbGUobWFjcm9leHBhbmQoZXhwcmVzc2lvbikpKSArIFwiO1xcblwiLCBleHByZXNzaW9uID0gZmlyc3QoZXhwcmVzc2lvbnMpLCBleHByZXNzaW9ucyA9IHJlc3QoZXhwcmVzc2lvbnMpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoXCJcIiwgZmlyc3QoZm9ybSksIHJlc3QoZm9ybSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZVN0YXRlbWVudHMgPSBjb21waWxlU3RhdGVtZW50cztcblxudmFyIGNvbXBpbGVGbkJvZHkgPSBmdW5jdGlvbiBjb21waWxlRm5Cb2R5KGZvcm0sIHBhcmFtcykge1xuICByZXR1cm4gKGlzRGljdGlvbmFyeShwYXJhbXMpKSAmJiAoKHBhcmFtcyB8fCAwKVtcInJlc3RcIl0pID9cbiAgICBjb21waWxlU3RhdGVtZW50cyhjb25zKGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiZGVmXCIpLCAocGFyYW1zIHx8IDApW1wicmVzdFwiXSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbFwiKSwgc3ltYm9sKHZvaWQoMCksIFwiYXJndW1lbnRzXCIpLCAocGFyYW1zIHx8IDApW1wiYXJpdHlcIl0pKSwgZm9ybSksIFwicmV0dXJuIFwiKSA6XG4gIChjb3VudChmb3JtKSA9PT0gMSkgJiYgKGlzTGlzdChmaXJzdChmb3JtKSkpICYmIChpc0VxdWFsKGZpcnN0KGZpcnN0KGZvcm0pKSwgc3ltYm9sKHZvaWQoMCksIFwiZG9cIikpKSA/XG4gICAgY29tcGlsZUZuQm9keShyZXN0KGZpcnN0KGZvcm0pKSwgcGFyYW1zKSA6XG4gICAgY29tcGlsZVN0YXRlbWVudHMoZm9ybSwgXCJyZXR1cm4gXCIpO1xufTtcbmV4cG9ydHMuY29tcGlsZUZuQm9keSA9IGNvbXBpbGVGbkJvZHk7XG5cbnZhciBkZXN1Z2FyUGFyYW1zID0gZnVuY3Rpb24gZGVzdWdhclBhcmFtcyhwYXJhbXMpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKG5hbWVzLCBwYXJhbXMpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBpc0VtcHR5KHBhcmFtcykgP1xuICAgICAge1xuICAgICAgICBcIm5hbWVzXCI6IG5hbWVzLFxuICAgICAgICBcImFyaXR5XCI6IGNvdW50KG5hbWVzKSxcbiAgICAgICAgXCJyZXN0XCI6IHZvaWQoMClcbiAgICAgIH0gOlxuICAgIGlzRXF1YWwoZmlyc3QocGFyYW1zKSwgc3ltYm9sKHZvaWQoMCksIFwiJlwiKSkgP1xuICAgICAgaXNFcXVhbChjb3VudChwYXJhbXMpLCAxKSA/XG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVzXCI6IG5hbWVzLFxuICAgICAgICAgIFwiYXJpdHlcIjogY291bnQobmFtZXMpLFxuICAgICAgICAgIFwicmVzdFwiOiB2b2lkKDApXG4gICAgICAgIH0gOlxuICAgICAgaXNFcXVhbChjb3VudChwYXJhbXMpLCAyKSA/XG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVzXCI6IG5hbWVzLFxuICAgICAgICAgIFwiYXJpdHlcIjogY291bnQobmFtZXMpLFxuICAgICAgICAgIFwicmVzdFwiOiBzZWNvbmQocGFyYW1zKVxuICAgICAgICB9IDpcbiAgICAgIFwiZWxzZVwiID9cbiAgICAgICAgKGZ1bmN0aW9uKCkgeyB0aHJvdyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIG51bWJlciBvZiBwYXJhbWV0ZXJzIGFmdGVyICZcIik7IH0pKCkgOlxuICAgICAgICB2b2lkKDApIDpcbiAgICBcImVsc2VcIiA/XG4gICAgICAobmFtZXMgPSBjb25qKG5hbWVzLCBmaXJzdChwYXJhbXMpKSwgcGFyYW1zID0gcmVzdChwYXJhbXMpLCBsb29wKSA6XG4gICAgICB2b2lkKDApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShbXSwgcGFyYW1zKTtcbn07XG5leHBvcnRzLmRlc3VnYXJQYXJhbXMgPSBkZXN1Z2FyUGFyYW1zO1xuXG52YXIgYW5hbHl6ZU92ZXJsb2FkZWRGbiA9IGZ1bmN0aW9uIGFuYWx5emVPdmVybG9hZGVkRm4obmFtZSwgZG9jLCBhdHRycywgb3ZlcmxvYWRzKSB7XG4gIHJldHVybiBtYXAoZnVuY3Rpb24ob3ZlcmxvYWQpIHtcbiAgICB2YXIgcGFyYW1zID0gZGVzdWdhclBhcmFtcyhmaXJzdChvdmVybG9hZCkpO1xuICAgIHJldHVybiB7XG4gICAgICBcInJlc3RcIjogKHBhcmFtcyB8fCAwKVtcInJlc3RcIl0sXG4gICAgICBcIm5hbWVzXCI6IChwYXJhbXMgfHwgMClbXCJuYW1lc1wiXSxcbiAgICAgIFwiYXJpdHlcIjogKHBhcmFtcyB8fCAwKVtcImFyaXR5XCJdLFxuICAgICAgXCJib2R5XCI6IHJlc3Qob3ZlcmxvYWQpXG4gICAgfTtcbiAgfSwgb3ZlcmxvYWRzKTtcbn07XG5leHBvcnRzLmFuYWx5emVPdmVybG9hZGVkRm4gPSBhbmFseXplT3ZlcmxvYWRlZEZuO1xuXG52YXIgY29tcGlsZU92ZXJsb2FkZWRGbiA9IGZ1bmN0aW9uIGNvbXBpbGVPdmVybG9hZGVkRm4obmFtZSwgZG9jLCBhdHRycywgb3ZlcmxvYWRzKSB7XG4gIHZhciBtZXRob2RzID0gYW5hbHl6ZU92ZXJsb2FkZWRGbihuYW1lLCBkb2MsIGF0dHJzLCBvdmVybG9hZHMpO1xuICB2YXIgZml4ZWRNZXRob2RzID0gZmlsdGVyKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHJldHVybiAhKChtZXRob2QgfHwgMClbXCJyZXN0XCJdKTtcbiAgfSwgbWV0aG9kcyk7XG4gIHZhciB2YXJpYWRpYyA9IGZpcnN0KGZpbHRlcihmdW5jdGlvbihtZXRob2QpIHtcbiAgICByZXR1cm4gKG1ldGhvZCB8fCAwKVtcInJlc3RcIl07XG4gIH0sIG1ldGhvZHMpKTtcbiAgdmFyIG5hbWVzID0gcmVkdWNlKGZ1bmN0aW9uKG5hbWVzLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gY291bnQobmFtZXMpID4gKHBhcmFtcyB8fCAwKVtcImFyaXR5XCJdID9cbiAgICAgIG5hbWVzIDpcbiAgICAgIChwYXJhbXMgfHwgMClbXCJuYW1lc1wiXTtcbiAgfSwgW10sIG1ldGhvZHMpO1xuICByZXR1cm4gbGlzdChzeW1ib2wodm9pZCgwKSwgXCJmblwiKSwgbmFtZSwgZG9jLCBhdHRycywgbmFtZXMsIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwicmF3KlwiKSwgY29tcGlsZVN3aXRjaChzeW1ib2wodm9pZCgwKSwgXCJhcmd1bWVudHMubGVuZ3RoXCIpLCBtYXAoZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgcmV0dXJuIGNvbnMoKG1ldGhvZCB8fCAwKVtcImFyaXR5XCJdLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInJhdypcIiksIGNvbXBpbGVGbkJvZHkoY29uY2F0KGNvbXBpbGVSZWJpbmQobmFtZXMsIChtZXRob2QgfHwgMClbXCJuYW1lc1wiXSksIChtZXRob2QgfHwgMClbXCJib2R5XCJdKSkpKTtcbiAgfSwgZml4ZWRNZXRob2RzKSwgaXNOaWwodmFyaWFkaWMpID9cbiAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInRocm93XCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcIkVycm9yXCIpLCBcIkludmFsaWQgYXJpdHlcIikpIDpcbiAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInJhdypcIiksIGNvbXBpbGVGbkJvZHkoY29uY2F0KGNvbXBpbGVSZWJpbmQoY29ucyhsaXN0KHN5bWJvbCh2b2lkKDApLCBcIkFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsXCIpLCBzeW1ib2wodm9pZCgwKSwgXCJhcmd1bWVudHNcIiksICh2YXJpYWRpYyB8fCAwKVtcImFyaXR5XCJdKSwgbmFtZXMpLCBjb25zKCh2YXJpYWRpYyB8fCAwKVtcInJlc3RcIl0sICh2YXJpYWRpYyB8fCAwKVtcIm5hbWVzXCJdKSksICh2YXJpYWRpYyB8fCAwKVtcImJvZHlcIl0pKSkpKSwgdm9pZCgwKSk7XG59O1xuZXhwb3J0cy5jb21waWxlT3ZlcmxvYWRlZEZuID0gY29tcGlsZU92ZXJsb2FkZWRGbjtcblxudmFyIGNvbXBpbGVSZWJpbmQgPSBmdW5jdGlvbiBjb21waWxlUmViaW5kKGJpbmRpbmdzLCBuYW1lcykge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoZm9ybSwgYmluZGluZ3MsIG5hbWVzKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShuYW1lcykgP1xuICAgICAgcmV2ZXJzZShmb3JtKSA6XG4gICAgICAoZm9ybSA9IGlzRXF1YWwoZmlyc3QobmFtZXMpLCBmaXJzdChiaW5kaW5ncykpID9cbiAgICAgICAgZm9ybSA6XG4gICAgICAgIGNvbnMobGlzdChzeW1ib2wodm9pZCgwKSwgXCJkZWZcIiksIGZpcnN0KG5hbWVzKSwgZmlyc3QoYmluZGluZ3MpKSwgZm9ybSksIGJpbmRpbmdzID0gcmVzdChiaW5kaW5ncyksIG5hbWVzID0gcmVzdChuYW1lcyksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShsaXN0KCksIGJpbmRpbmdzLCBuYW1lcyk7XG59O1xuZXhwb3J0cy5jb21waWxlUmViaW5kID0gY29tcGlsZVJlYmluZDtcblxudmFyIGNvbXBpbGVTd2l0Y2hDYXNlcyA9IGZ1bmN0aW9uIGNvbXBpbGVTd2l0Y2hDYXNlcyhjYXNlcykge1xuICByZXR1cm4gcmVkdWNlKGZ1bmN0aW9uKGZvcm0sIGNhc2VFeHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBmb3JtICsgKGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiY2FzZSB+e306XFxuICB+e31cXG5cIiwgY29tcGlsZShtYWNyb2V4cGFuZChmaXJzdChjYXNlRXhwcmVzc2lvbikpKSwgY29tcGlsZShtYWNyb2V4cGFuZChyZXN0KGNhc2VFeHByZXNzaW9uKSkpKSkpO1xuICB9LCBcIlwiLCBjYXNlcyk7XG59O1xuZXhwb3J0cy5jb21waWxlU3dpdGNoQ2FzZXMgPSBjb21waWxlU3dpdGNoQ2FzZXM7XG5cbnZhciBjb21waWxlU3dpdGNoID0gZnVuY3Rpb24gY29tcGlsZVN3aXRjaCh2YWx1ZSwgY2FzZXMsIGRlZmF1bHRDYXNlKSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChcInN3aXRjaCAofnt9KSB7XFxuICB+e31cXG4gIGRlZmF1bHQ6XFxuICAgIH57fVxcbn1cIiwgY29tcGlsZShtYWNyb2V4cGFuZCh2YWx1ZSkpLCBjb21waWxlU3dpdGNoQ2FzZXMoY2FzZXMpLCBjb21waWxlKG1hY3JvZXhwYW5kKGRlZmF1bHRDYXNlKSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVTd2l0Y2ggPSBjb21waWxlU3dpdGNoO1xuXG52YXIgY29tcGlsZUZuID0gZnVuY3Rpb24gY29tcGlsZUZuKGZvcm0pIHtcbiAgdmFyIHNpZ25hdHVyZSA9IGRlc3VnYXJGbkF0dHJzKGRlc3VnYXJGbkRvYyhkZXN1Z2FyRm5OYW1lKGZvcm0pKSk7XG4gIHZhciBuYW1lID0gZmlyc3Qoc2lnbmF0dXJlKTtcbiAgdmFyIGRvYyA9IHNlY29uZChzaWduYXR1cmUpO1xuICB2YXIgYXR0cnMgPSB0aGlyZChzaWduYXR1cmUpO1xuICByZXR1cm4gaXNWZWN0b3IodGhpcmQocmVzdChzaWduYXR1cmUpKSkgP1xuICAgIGNvbXBpbGVEZXN1Z2FyZWRGbihuYW1lLCBkb2MsIGF0dHJzLCBkZXN1Z2FyUGFyYW1zKHRoaXJkKHJlc3Qoc2lnbmF0dXJlKSkpLCByZXN0KHJlc3QocmVzdChyZXN0KHNpZ25hdHVyZSkpKSkpIDpcbiAgICBjb21waWxlKGNvbXBpbGVPdmVybG9hZGVkRm4obmFtZSwgZG9jLCBhdHRycywgcmVzdChyZXN0KHJlc3Qoc2lnbmF0dXJlKSkpKSk7XG59O1xuZXhwb3J0cy5jb21waWxlRm4gPSBjb21waWxlRm47XG5cbnZhciBjb21waWxlSW52b2tlID0gZnVuY3Rpb24gY29tcGlsZUludm9rZShmb3JtKSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChpc0xpc3QoZmlyc3QoZm9ybSkpID9cbiAgICBcIih+e30pKH57fSlcIiA6XG4gICAgXCJ+e30ofnt9KVwiLCBjb21waWxlKGZpcnN0KGZvcm0pKSwgY29tcGlsZUdyb3VwKHJlc3QoZm9ybSkpKSk7XG59O1xuZXhwb3J0cy5jb21waWxlSW52b2tlID0gY29tcGlsZUludm9rZTtcblxudmFyIGNvbXBpbGVHcm91cCA9IGZ1bmN0aW9uIGNvbXBpbGVHcm91cChmb3JtLCB3cmFwKSB7XG4gIHJldHVybiB3cmFwID9cbiAgICBcIlwiICsgXCIoXCIgKyAoY29tcGlsZUdyb3VwKGZvcm0pKSArIFwiKVwiIDpcbiAgICBqb2luKFwiLCBcIiwgdmVjKG1hcChjb21waWxlLCBtYXAobWFjcm9leHBhbmQsIGZvcm0pKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZUdyb3VwID0gY29tcGlsZUdyb3VwO1xuXG52YXIgY29tcGlsZURvID0gZnVuY3Rpb24gY29tcGlsZURvKGZvcm0pIHtcbiAgcmV0dXJuIGNvbXBpbGUobGlzdChjb25zKHN5bWJvbCh2b2lkKDApLCBcImZuXCIpLCBjb25zKFtdLCBmb3JtKSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVEbyA9IGNvbXBpbGVEbztcblxudmFyIGRlZmluZUJpbmRpbmdzID0gZnVuY3Rpb24gZGVmaW5lQmluZGluZ3MoZm9ybSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoZGVmcywgYmluZGluZ3MpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBjb3VudChiaW5kaW5ncykgPT09IDAgP1xuICAgICAgcmV2ZXJzZShkZWZzKSA6XG4gICAgICAoZGVmcyA9IGNvbnMobGlzdChzeW1ib2wodm9pZCgwKSwgXCJkZWZcIiksIChiaW5kaW5ncyB8fCAwKVswXSwgKGJpbmRpbmdzIHx8IDApWzFdKSwgZGVmcyksIGJpbmRpbmdzID0gcmVzdChyZXN0KGJpbmRpbmdzKSksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShsaXN0KCksIGZvcm0pO1xufTtcbmV4cG9ydHMuZGVmaW5lQmluZGluZ3MgPSBkZWZpbmVCaW5kaW5ncztcblxudmFyIGNvbXBpbGVUaHJvdyA9IGZ1bmN0aW9uIGNvbXBpbGVUaHJvdyhmb3JtKSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChcIihmdW5jdGlvbigpIHsgdGhyb3cgfnt9OyB9KSgpXCIsIGNvbXBpbGUobWFjcm9leHBhbmQoZmlyc3QoZm9ybSkpKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZVRocm93ID0gY29tcGlsZVRocm93O1xuXG52YXIgY29tcGlsZVNldCA9IGZ1bmN0aW9uIGNvbXBpbGVTZXQoZm9ybSkge1xuICByZXR1cm4gY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ+e30gPSB+e31cIiwgY29tcGlsZShtYWNyb2V4cGFuZChmaXJzdChmb3JtKSkpLCBjb21waWxlKG1hY3JvZXhwYW5kKHNlY29uZChmb3JtKSkpKSk7XG59O1xuZXhwb3J0cy5jb21waWxlU2V0ID0gY29tcGlsZVNldDtcblxudmFyIGNvbXBpbGVWZWN0b3IgPSBmdW5jdGlvbiBjb21waWxlVmVjdG9yKGZvcm0pIHtcbiAgcmV0dXJuIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiW357fV1cIiwgY29tcGlsZUdyb3VwKGZvcm0pKSk7XG59O1xuZXhwb3J0cy5jb21waWxlVmVjdG9yID0gY29tcGlsZVZlY3RvcjtcblxudmFyIGNvbXBpbGVUcnkgPSBmdW5jdGlvbiBjb21waWxlVHJ5KGZvcm0pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHRyeUV4cHJzLCBjYXRjaEV4cHJzLCBmaW5hbGx5RXhwcnMsIGV4cHJzKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShleHBycykgP1xuICAgICAgaXNFbXB0eShjYXRjaEV4cHJzKSA/XG4gICAgICAgIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiKGZ1bmN0aW9uKCkge1xcbnRyeSB7XFxuICB+e31cXG59IGZpbmFsbHkge1xcbiAgfnt9XFxufX0pKClcIiwgY29tcGlsZUZuQm9keSh0cnlFeHBycyksIGNvbXBpbGVGbkJvZHkoZmluYWxseUV4cHJzKSkpIDpcbiAgICAgIGlzRW1wdHkoZmluYWxseUV4cHJzKSA/XG4gICAgICAgIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiKGZ1bmN0aW9uKCkge1xcbnRyeSB7XFxuICB+e31cXG59IGNhdGNoICh+e30pIHtcXG4gIH57fVxcbn19KSgpXCIsIGNvbXBpbGVGbkJvZHkodHJ5RXhwcnMpLCBjb21waWxlKGZpcnN0KGNhdGNoRXhwcnMpKSwgY29tcGlsZUZuQm9keShyZXN0KGNhdGNoRXhwcnMpKSkpIDpcbiAgICAgICAgY29tcGlsZVRlbXBsYXRlKGxpc3QoXCIoZnVuY3Rpb24oKSB7XFxudHJ5IHtcXG4gIH57fVxcbn0gY2F0Y2ggKH57fSkge1xcbiAgfnt9XFxufSBmaW5hbGx5IHtcXG4gIH57fVxcbn19KSgpXCIsIGNvbXBpbGVGbkJvZHkodHJ5RXhwcnMpLCBjb21waWxlKGZpcnN0KGNhdGNoRXhwcnMpKSwgY29tcGlsZUZuQm9keShyZXN0KGNhdGNoRXhwcnMpKSwgY29tcGlsZUZuQm9keShmaW5hbGx5RXhwcnMpKSkgOlxuICAgIGlzRXF1YWwoZmlyc3QoZmlyc3QoZXhwcnMpKSwgc3ltYm9sKHZvaWQoMCksIFwiY2F0Y2hcIikpID9cbiAgICAgICh0cnlFeHBycyA9IHRyeUV4cHJzLCBjYXRjaEV4cHJzID0gcmVzdChmaXJzdChleHBycykpLCBmaW5hbGx5RXhwcnMgPSBmaW5hbGx5RXhwcnMsIGV4cHJzID0gcmVzdChleHBycyksIGxvb3ApIDpcbiAgICBpc0VxdWFsKGZpcnN0KGZpcnN0KGV4cHJzKSksIHN5bWJvbCh2b2lkKDApLCBcImZpbmFsbHlcIikpID9cbiAgICAgICh0cnlFeHBycyA9IHRyeUV4cHJzLCBjYXRjaEV4cHJzID0gY2F0Y2hFeHBycywgZmluYWxseUV4cHJzID0gcmVzdChmaXJzdChleHBycykpLCBleHBycyA9IHJlc3QoZXhwcnMpLCBsb29wKSA6XG4gICAgICAodHJ5RXhwcnMgPSBjb25zKGZpcnN0KGV4cHJzKSwgdHJ5RXhwcnMpLCBjYXRjaEV4cHJzID0gY2F0Y2hFeHBycywgZmluYWxseUV4cHJzID0gZmluYWxseUV4cHJzLCBleHBycyA9IHJlc3QoZXhwcnMpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkobGlzdCgpLCBsaXN0KCksIGxpc3QoKSwgcmV2ZXJzZShmb3JtKSk7XG59O1xuZXhwb3J0cy5jb21waWxlVHJ5ID0gY29tcGlsZVRyeTtcblxudmFyIGNvbXBpbGVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGNvbXBpbGVQcm9wZXJ0eShmb3JtKSB7XG4gIHJldHVybiAobmFtZShzZWNvbmQoZm9ybSkpKVswXSA9PT0gXCItXCIgP1xuICAgIGNvbXBpbGVUZW1wbGF0ZShsaXN0KGlzTGlzdChmaXJzdChmb3JtKSkgP1xuICAgICAgXCIofnt9KS5+e31cIiA6XG4gICAgICBcIn57fS5+e31cIiwgY29tcGlsZShtYWNyb2V4cGFuZChmaXJzdChmb3JtKSkpLCBjb21waWxlKG1hY3JvZXhwYW5kKHN5bWJvbChzdWJzKG5hbWUoc2Vjb25kKGZvcm0pKSwgMSkpKSkpKSA6XG4gICAgY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ+e30ufnt9KH57fSlcIiwgY29tcGlsZShtYWNyb2V4cGFuZChmaXJzdChmb3JtKSkpLCBjb21waWxlKG1hY3JvZXhwYW5kKHNlY29uZChmb3JtKSkpLCBjb21waWxlR3JvdXAocmVzdChyZXN0KGZvcm0pKSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVQcm9wZXJ0eSA9IGNvbXBpbGVQcm9wZXJ0eTtcblxudmFyIGNvbXBpbGVBcHBseSA9IGZ1bmN0aW9uIGNvbXBpbGVBcHBseShmb3JtKSB7XG4gIHJldHVybiBjb21waWxlKGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiLlwiKSwgZmlyc3QoZm9ybSksIHN5bWJvbCh2b2lkKDApLCBcImFwcGx5XCIpLCBmaXJzdChmb3JtKSwgc2Vjb25kKGZvcm0pKSk7XG59O1xuZXhwb3J0cy5jb21waWxlQXBwbHkgPSBjb21waWxlQXBwbHk7XG5cbnZhciBjb21waWxlTmV3ID0gZnVuY3Rpb24gY29tcGlsZU5ldyhmb3JtKSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChcIm5ldyB+e31cIiwgY29tcGlsZShmb3JtKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZU5ldyA9IGNvbXBpbGVOZXc7XG5cbnZhciBjb21waWxlQWdldCA9IGZ1bmN0aW9uIGNvbXBpbGVBZ2V0KGZvcm0pIHtcbiAgdmFyIHRhcmdldCA9IG1hY3JvZXhwYW5kKGZpcnN0KGZvcm0pKTtcbiAgdmFyIGF0dHJpYnV0ZSA9IG1hY3JvZXhwYW5kKHNlY29uZChmb3JtKSk7XG4gIHZhciBub3RGb3VuZCA9IHRoaXJkKGZvcm0pO1xuICB2YXIgdGVtcGxhdGUgPSBpc0xpc3QodGFyZ2V0KSA/XG4gICAgXCIofnt9KVt+e31dXCIgOlxuICAgIFwifnt9W357fV1cIjtcbiAgcmV0dXJuIG5vdEZvdW5kID9cbiAgICBjb21waWxlKGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwib3JcIiksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiZ2V0XCIpLCBmaXJzdChmb3JtKSwgc2Vjb25kKGZvcm0pKSwgbWFjcm9leHBhbmQobm90Rm91bmQpKSkgOlxuICAgIGNvbXBpbGVUZW1wbGF0ZShsaXN0KHRlbXBsYXRlLCBjb21waWxlKHRhcmdldCksIGNvbXBpbGUoYXR0cmlidXRlKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZUFnZXQgPSBjb21waWxlQWdldDtcblxudmFyIGNvbXBpbGVHZXQgPSBmdW5jdGlvbiBjb21waWxlR2V0KGZvcm0pIHtcbiAgcmV0dXJuIGNvbXBpbGVBZ2V0KGNvbnMobGlzdChzeW1ib2wodm9pZCgwKSwgXCJvclwiKSwgZmlyc3QoZm9ybSksIDApLCByZXN0KGZvcm0pKSk7XG59O1xuZXhwb3J0cy5jb21waWxlR2V0ID0gY29tcGlsZUdldDtcblxudmFyIGNvbXBpbGVJbnN0YW5jZSA9IGZ1bmN0aW9uIGNvbXBpbGVJbnN0YW5jZShmb3JtKSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChcIn57fSBpbnN0YW5jZW9mIH57fVwiLCBjb21waWxlKG1hY3JvZXhwYW5kKHNlY29uZChmb3JtKSkpLCBjb21waWxlKG1hY3JvZXhwYW5kKGZpcnN0KGZvcm0pKSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVJbnN0YW5jZSA9IGNvbXBpbGVJbnN0YW5jZTtcblxudmFyIGNvbXBpbGVOb3QgPSBmdW5jdGlvbiBjb21waWxlTm90KGZvcm0pIHtcbiAgcmV0dXJuIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiISh+e30pXCIsIGNvbXBpbGUobWFjcm9leHBhbmQoZmlyc3QoZm9ybSkpKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZU5vdCA9IGNvbXBpbGVOb3Q7XG5cbnZhciBjb21waWxlTG9vcCA9IGZ1bmN0aW9uIGNvbXBpbGVMb29wKGZvcm0pIHtcbiAgdmFyIGJpbmRpbmdzID0gKGZ1bmN0aW9uIGxvb3AobmFtZXMsIHZhbHVlcywgdG9rZW5zKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eSh0b2tlbnMpID9cbiAgICAgIHtcbiAgICAgICAgXCJuYW1lc1wiOiBuYW1lcyxcbiAgICAgICAgXCJ2YWx1ZXNcIjogdmFsdWVzXG4gICAgICB9IDpcbiAgICAgIChuYW1lcyA9IGNvbmoobmFtZXMsIGZpcnN0KHRva2VucykpLCB2YWx1ZXMgPSBjb25qKHZhbHVlcywgc2Vjb25kKHRva2VucykpLCB0b2tlbnMgPSByZXN0KHJlc3QodG9rZW5zKSksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShbXSwgW10sIGZpcnN0KGZvcm0pKTtcbiAgdmFyIG5hbWVzID0gKGJpbmRpbmdzIHx8IDApW1wibmFtZXNcIl07XG4gIHZhciB2YWx1ZXMgPSAoYmluZGluZ3MgfHwgMClbXCJ2YWx1ZXNcIl07XG4gIHZhciBib2R5ID0gcmVzdChmb3JtKTtcbiAgcmV0dXJuIGNvbXBpbGUoY29ucyhjb25zKHN5bWJvbCh2b2lkKDApLCBcImZuXCIpLCBjb25zKHN5bWJvbCh2b2lkKDApLCBcImxvb3BcIiksIGNvbnMobmFtZXMsIGNvbXBpbGVSZWN1cihuYW1lcywgYm9keSkpKSksIGxpc3QuYXBwbHkobGlzdCwgdmFsdWVzKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZUxvb3AgPSBjb21waWxlTG9vcDtcblxudmFyIHJlYmluZEJpbmRpbmdzID0gZnVuY3Rpb24gcmViaW5kQmluZGluZ3MobmFtZXMsIHZhbHVlcykge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AocmVzdWx0LCBuYW1lcywgdmFsdWVzKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShuYW1lcykgP1xuICAgICAgcmV2ZXJzZShyZXN1bHQpIDpcbiAgICAgIChyZXN1bHQgPSBjb25zKGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgZmlyc3QobmFtZXMpLCBmaXJzdCh2YWx1ZXMpKSwgcmVzdWx0KSwgbmFtZXMgPSByZXN0KG5hbWVzKSwgdmFsdWVzID0gcmVzdCh2YWx1ZXMpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkobGlzdCgpLCBuYW1lcywgdmFsdWVzKTtcbn07XG5leHBvcnRzLnJlYmluZEJpbmRpbmdzID0gcmViaW5kQmluZGluZ3M7XG5cbnZhciBleHBhbmRSZWN1ciA9IGZ1bmN0aW9uIGV4cGFuZFJlY3VyKG5hbWVzLCBib2R5KSB7XG4gIHJldHVybiBtYXAoZnVuY3Rpb24oZm9ybSkge1xuICAgIHJldHVybiBpc0xpc3QoZm9ybSkgP1xuICAgICAgaXNFcXVhbChmaXJzdChmb3JtKSwgc3ltYm9sKHZvaWQoMCksIFwicmVjdXJcIikpID9cbiAgICAgICAgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJyYXcqXCIpLCBjb21waWxlR3JvdXAoY29uY2F0KHJlYmluZEJpbmRpbmdzKG5hbWVzLCByZXN0KGZvcm0pKSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJsb29wXCIpKSksIHRydWUpKSA6XG4gICAgICAgIGV4cGFuZFJlY3VyKG5hbWVzLCBmb3JtKSA6XG4gICAgICBmb3JtO1xuICB9LCBib2R5KTtcbn07XG5leHBvcnRzLmV4cGFuZFJlY3VyID0gZXhwYW5kUmVjdXI7XG5cbnZhciBjb21waWxlUmVjdXIgPSBmdW5jdGlvbiBjb21waWxlUmVjdXIobmFtZXMsIGJvZHkpIHtcbiAgcmV0dXJuIGxpc3QobGlzdChzeW1ib2wodm9pZCgwKSwgXCJyYXcqXCIpLCBjb21waWxlVGVtcGxhdGUobGlzdChcInZhciByZWN1ciA9IGxvb3A7XFxud2hpbGUgKHJlY3VyID09PSBsb29wKSB7XFxuICByZWN1ciA9IH57fVxcbn1cIiwgY29tcGlsZVN0YXRlbWVudHMoZXhwYW5kUmVjdXIobmFtZXMsIGJvZHkpKSkpKSwgc3ltYm9sKHZvaWQoMCksIFwicmVjdXJcIikpO1xufTtcbmV4cG9ydHMuY29tcGlsZVJlY3VyID0gY29tcGlsZVJlY3VyO1xuXG52YXIgY29tcGlsZVJhdyA9IGZ1bmN0aW9uIGNvbXBpbGVSYXcoZm9ybSkge1xuICByZXR1cm4gZmlyc3QoZm9ybSk7XG59O1xuZXhwb3J0cy5jb21waWxlUmF3ID0gY29tcGlsZVJhdztcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgY29tcGlsZVNldCk7XG5cbmluc3RhbGxTcGVjaWFsKHN5bWJvbCh2b2lkKDApLCBcImdldFwiKSwgY29tcGlsZUdldCk7XG5cbmluc3RhbGxTcGVjaWFsKHN5bWJvbCh2b2lkKDApLCBcImFnZXRcIiksIGNvbXBpbGVBZ2V0KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiZGVmXCIpLCBjb21waWxlRGVmKTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiaWZcIiksIGNvbXBpbGVJZkVsc2UpO1xuXG5pbnN0YWxsU3BlY2lhbChzeW1ib2wodm9pZCgwKSwgXCJkb1wiKSwgY29tcGlsZURvKTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiZG8qXCIpLCBjb21waWxlU3RhdGVtZW50cyk7XG5cbmluc3RhbGxTcGVjaWFsKHN5bWJvbCh2b2lkKDApLCBcImZuXCIpLCBjb21waWxlRm4pO1xuXG5pbnN0YWxsU3BlY2lhbChzeW1ib2wodm9pZCgwKSwgXCJ0aHJvd1wiKSwgY29tcGlsZVRocm93KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwidmVjdG9yXCIpLCBjb21waWxlVmVjdG9yKTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwidHJ5XCIpLCBjb21waWxlVHJ5KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiLlwiKSwgY29tcGlsZVByb3BlcnR5KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiYXBwbHlcIiksIGNvbXBpbGVBcHBseSk7XG5cbmluc3RhbGxTcGVjaWFsKHN5bWJvbCh2b2lkKDApLCBcIm5ld1wiKSwgY29tcGlsZU5ldyk7XG5cbmluc3RhbGxTcGVjaWFsKHN5bWJvbCh2b2lkKDApLCBcImluc3RhbmNlP1wiKSwgY29tcGlsZUluc3RhbmNlKTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwibm90XCIpLCBjb21waWxlTm90KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwibG9vcFwiKSwgY29tcGlsZUxvb3ApO1xuXG5pbnN0YWxsU3BlY2lhbChzeW1ib2wodm9pZCgwKSwgXCJyYXcqXCIpLCBjb21waWxlUmF3KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiY29tbWVudFwiKSwgd3JpdGVDb21tZW50KTtcblxudmFyIGNvbXBpbGVSZVBhdHRlcm4gPSBmdW5jdGlvbiBjb21waWxlUmVQYXR0ZXJuKGZvcm0pIHtcbiAgcmV0dXJuIFwiXCIgKyBmb3JtO1xufTtcbmV4cG9ydHMuY29tcGlsZVJlUGF0dGVybiA9IGNvbXBpbGVSZVBhdHRlcm47XG5cbnZhciBpbnN0YWxsTmF0aXZlID0gZnVuY3Rpb24gaW5zdGFsbE5hdGl2ZShhbGlhcywgb3BlcmF0b3IsIHZhbGlkYXRvciwgZmFsbGJhY2spIHtcbiAgcmV0dXJuIGluc3RhbGxTcGVjaWFsKGFsaWFzLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgcmV0dXJuIGlzRW1wdHkoZm9ybSkgP1xuICAgICAgZmFsbGJhY2sgOlxuICAgICAgcmVkdWNlKGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChcIn57fSB+e30gfnt9XCIsIGxlZnQsIG5hbWUob3BlcmF0b3IpLCByaWdodCkpO1xuICAgICAgfSwgbWFwKGZ1bmN0aW9uKG9wZXJhbmQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBpbGVUZW1wbGF0ZShsaXN0KGlzTGlzdChvcGVyYW5kKSA/XG4gICAgICAgICAgXCIofnt9KVwiIDpcbiAgICAgICAgICBcIn57fVwiLCBjb21waWxlKG1hY3JvZXhwYW5kKG9wZXJhbmQpKSkpO1xuICAgICAgfSwgZm9ybSkpO1xuICB9LCB2YWxpZGF0b3IpO1xufTtcbmV4cG9ydHMuaW5zdGFsbE5hdGl2ZSA9IGluc3RhbGxOYXRpdmU7XG5cbnZhciBpbnN0YWxsT3BlcmF0b3IgPSBmdW5jdGlvbiBpbnN0YWxsT3BlcmF0b3IoYWxpYXMsIG9wZXJhdG9yKSB7XG4gIHJldHVybiBpbnN0YWxsU3BlY2lhbChhbGlhcywgZnVuY3Rpb24oZm9ybSkge1xuICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcChyZXN1bHQsIGxlZnQsIHJpZ2h0LCBvcGVyYW5kcykge1xuICAgICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICByZWN1ciA9IGlzRW1wdHkob3BlcmFuZHMpID9cbiAgICAgICAgXCJcIiArIHJlc3VsdCArIChjb21waWxlVGVtcGxhdGUobGlzdChcIn57fSB+e30gfnt9XCIsIGNvbXBpbGUobWFjcm9leHBhbmQobGVmdCkpLCBuYW1lKG9wZXJhdG9yKSwgY29tcGlsZShtYWNyb2V4cGFuZChyaWdodCkpKSkpIDpcbiAgICAgICAgKHJlc3VsdCA9IFwiXCIgKyByZXN1bHQgKyAoY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ+e30gfnt9IH57fSAmJiBcIiwgY29tcGlsZShtYWNyb2V4cGFuZChsZWZ0KSksIG5hbWUob3BlcmF0b3IpLCBjb21waWxlKG1hY3JvZXhwYW5kKHJpZ2h0KSkpKSksIGxlZnQgPSByaWdodCwgcmlnaHQgPSBmaXJzdChvcGVyYW5kcyksIG9wZXJhbmRzID0gcmVzdChvcGVyYW5kcyksIGxvb3ApO1xuICAgICAgfTtcbiAgICAgIHJldHVybiByZWN1cjtcbiAgICB9KShcIlwiLCBmaXJzdChmb3JtKSwgc2Vjb25kKGZvcm0pLCByZXN0KHJlc3QoZm9ybSkpKTtcbiAgfSwgdmVyaWZ5VHdvKTtcbn07XG5leHBvcnRzLmluc3RhbGxPcGVyYXRvciA9IGluc3RhbGxPcGVyYXRvcjtcblxudmFyIGNvbXBpbGVyRXJyb3IgPSBmdW5jdGlvbiBjb21waWxlckVycm9yKGZvcm0sIG1lc3NhZ2UpIHtcbiAgdmFyIGVycm9yID0gRXJyb3IoXCJcIiArIG1lc3NhZ2UpO1xuICBlcnJvci5saW5lID0gMTtcbiAgcmV0dXJuIChmdW5jdGlvbigpIHsgdGhyb3cgZXJyb3I7IH0pKCk7XG59O1xuZXhwb3J0cy5jb21waWxlckVycm9yID0gY29tcGlsZXJFcnJvcjtcblxudmFyIHZlcmlmeVR3byA9IGZ1bmN0aW9uIHZlcmlmeVR3byhmb3JtKSB7XG4gIHJldHVybiAoaXNFbXB0eShyZXN0KGZvcm0pKSkgfHwgKGlzRW1wdHkocmVzdChyZXN0KGZvcm0pKSkpID9cbiAgICAoZnVuY3Rpb24oKSB7IHRocm93IGNvbXBpbGVyRXJyb3IoZm9ybSwgXCJcIiArIChmaXJzdChmb3JtKSkgKyBcIiBmb3JtIHJlcXVpcmVzIGF0IGxlYXN0IHR3byBvcGVyYW5kc1wiKTsgfSkoKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnZlcmlmeVR3byA9IHZlcmlmeVR3bztcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCIrXCIpLCBzeW1ib2wodm9pZCgwKSwgXCIrXCIpLCB2b2lkKDApLCAwKTtcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCItXCIpLCBzeW1ib2wodm9pZCgwKSwgXCItXCIpLCB2b2lkKDApLCBcIk5hTlwiKTtcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCIqXCIpLCBzeW1ib2wodm9pZCgwKSwgXCIqXCIpLCB2b2lkKDApLCAxKTtcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCIvXCIpLCBzeW1ib2wodm9pZCgwKSwgXCIvXCIpLCB2ZXJpZnlUd28pO1xuXG5pbnN0YWxsTmF0aXZlKHN5bWJvbCh2b2lkKDApLCBcIm1vZFwiKSwgc3ltYm9sKFwiJVwiKSwgdmVyaWZ5VHdvKTtcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCJhbmRcIiksIHN5bWJvbCh2b2lkKDApLCBcIiYmXCIpKTtcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCJvclwiKSwgc3ltYm9sKHZvaWQoMCksIFwifHxcIikpO1xuXG5pbnN0YWxsT3BlcmF0b3Ioc3ltYm9sKHZvaWQoMCksIFwibm90PVwiKSwgc3ltYm9sKHZvaWQoMCksIFwiIT1cIikpO1xuXG5pbnN0YWxsT3BlcmF0b3Ioc3ltYm9sKHZvaWQoMCksIFwiPT1cIiksIHN5bWJvbCh2b2lkKDApLCBcIj09PVwiKSk7XG5cbmluc3RhbGxPcGVyYXRvcihzeW1ib2wodm9pZCgwKSwgXCJpZGVudGljYWw/XCIpLCBzeW1ib2wodm9pZCgwKSwgXCI9PT1cIikpO1xuXG5pbnN0YWxsT3BlcmF0b3Ioc3ltYm9sKHZvaWQoMCksIFwiPlwiKSwgc3ltYm9sKHZvaWQoMCksIFwiPlwiKSk7XG5cbmluc3RhbGxPcGVyYXRvcihzeW1ib2wodm9pZCgwKSwgXCI+PVwiKSwgc3ltYm9sKHZvaWQoMCksIFwiPj1cIikpO1xuXG5pbnN0YWxsT3BlcmF0b3Ioc3ltYm9sKHZvaWQoMCksIFwiPFwiKSwgc3ltYm9sKHZvaWQoMCksIFwiPFwiKSk7XG5cbmluc3RhbGxPcGVyYXRvcihzeW1ib2wodm9pZCgwKSwgXCI8PVwiKSwgc3ltYm9sKHZvaWQoMCksIFwiPD1cIikpO1xuXG5pbnN0YWxsTmF0aXZlKHN5bWJvbCh2b2lkKDApLCBcImJpdC1hbmRcIiksIHN5bWJvbCh2b2lkKDApLCBcIiZcIiksIHZlcmlmeVR3byk7XG5cbmluc3RhbGxOYXRpdmUoc3ltYm9sKHZvaWQoMCksIFwiYml0LW9yXCIpLCBzeW1ib2wodm9pZCgwKSwgXCJ8XCIpLCB2ZXJpZnlUd28pO1xuXG5pbnN0YWxsTmF0aXZlKHN5bWJvbCh2b2lkKDApLCBcImJpdC14b3JcIiksIHN5bWJvbChcIl5cIikpO1xuXG5pbnN0YWxsTmF0aXZlKHN5bWJvbCh2b2lkKDApLCBcImJpdC1ub3RcIiksIHN5bWJvbChcIn5cIiksIHZlcmlmeVR3byk7XG5cbmluc3RhbGxOYXRpdmUoc3ltYm9sKHZvaWQoMCksIFwiYml0LXNoaWZ0LWxlZnRcIiksIHN5bWJvbCh2b2lkKDApLCBcIjw8XCIpLCB2ZXJpZnlUd28pO1xuXG5pbnN0YWxsTmF0aXZlKHN5bWJvbCh2b2lkKDApLCBcImJpdC1zaGlmdC1yaWdodFwiKSwgc3ltYm9sKHZvaWQoMCksIFwiPj5cIiksIHZlcmlmeVR3byk7XG5cbmluc3RhbGxOYXRpdmUoc3ltYm9sKHZvaWQoMCksIFwiYml0LXNoaWZ0LXJpZ2h0LXplcm8tZmlsXCIpLCBzeW1ib2wodm9pZCgwKSwgXCI+Pj5cIiksIHZlcmlmeVR3byk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJzdHJcIiksIGZ1bmN0aW9uIHN0cigpIHtcbiAgdmFyIGZvcm1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGNvbmNhdChsaXN0KHN5bWJvbCh2b2lkKDApLCBcIitcIiksIFwiXCIpLCBmb3Jtcyk7XG59KTtcblxuaW5zdGFsbE1hY3JvKHN5bWJvbCh2b2lkKDApLCBcImxldFwiKSwgZnVuY3Rpb24gbGV0TWFjcm8oYmluZGluZ3MpIHtcbiAgdmFyIGJvZHkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gY29ucyhzeW1ib2wodm9pZCgwKSwgXCJkb1wiKSwgY29uY2F0KGRlZmluZUJpbmRpbmdzKGJpbmRpbmdzKSwgYm9keSkpO1xufSk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJjb25kXCIpLCBmdW5jdGlvbiBjb25kKCkge1xuICB2YXIgY2xhdXNlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiAhKGlzRW1wdHkoY2xhdXNlcykpID9cbiAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImlmXCIpLCBmaXJzdChjbGF1c2VzKSwgaXNFbXB0eShyZXN0KGNsYXVzZXMpKSA/XG4gICAgICAoZnVuY3Rpb24oKSB7IHRocm93IEVycm9yKFwiY29uZCByZXF1aXJlcyBhbiBldmVuIG51bWJlciBvZiBmb3Jtc1wiKTsgfSkoKSA6XG4gICAgICBzZWNvbmQoY2xhdXNlcyksIGNvbnMoc3ltYm9sKHZvaWQoMCksIFwiY29uZFwiKSwgcmVzdChyZXN0KGNsYXVzZXMpKSkpIDpcbiAgICB2b2lkKDApO1xufSk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJkZWZuXCIpLCBmdW5jdGlvbiBkZWZuKG5hbWUpIHtcbiAgdmFyIGJvZHkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gbGlzdChzeW1ib2wodm9pZCgwKSwgXCJkZWZcIiksIG5hbWUsIGNvbmNhdChsaXN0KHN5bWJvbCh2b2lkKDApLCBcImZuXCIpLCBuYW1lKSwgYm9keSkpO1xufSk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJkZWZuLVwiKSwgZnVuY3Rpb24gZGVmbihuYW1lKSB7XG4gIHZhciBib2R5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgcmV0dXJuIGNvbmNhdChsaXN0KHN5bWJvbCh2b2lkKDApLCBcImRlZm5cIiksIHdpdGhNZXRhKG5hbWUsIGNvbmooe1xuICAgIFwicHJpdmF0ZVwiOiB0cnVlXG4gIH0sIG1ldGEobmFtZSkpKSksIGJvZHkpO1xufSk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJhc3NlcnRcIiksIGZ1bmN0aW9uIGFzc2VydCh4LCBtZXNzYWdlKSB7XG4gIHZhciB0aXRsZSA9IG1lc3NhZ2UgfHwgXCJcIjtcbiAgdmFyIGFzc2VydGlvbiA9IHByU3RyKHgpO1xuICB2YXIgdXJpID0gKHggfHwgMClbXCJ1cmlcIl07XG4gIHZhciBmb3JtID0gaXNMaXN0KHgpID9cbiAgICBzZWNvbmQoeCkgOlxuICAgIHg7XG4gIHJldHVybiBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImRvXCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImlmXCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImFuZFwiKSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJub3RcIiksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiaWRlbnRpY2FsP1wiKSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJ0eXBlb2ZcIiksIHN5bWJvbCh2b2lkKDApLCBcIioqdmVyYm9zZSoqXCIpKSwgXCJ1bmRlZmluZWRcIikpLCBzeW1ib2wodm9pZCgwKSwgXCIqKnZlcmJvc2UqKlwiKSksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiLmxvZ1wiKSwgc3ltYm9sKHZvaWQoMCksIFwiY29uc29sZVwiKSwgXCJBc3NlcnQ6XCIsIGFzc2VydGlvbikpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImlmXCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcIm5vdFwiKSwgeCksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwidGhyb3dcIiksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiRXJyb3IuXCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInN0clwiKSwgXCJBc3NlcnQgZmFpbGVkOiBcIiwgdGl0bGUsIFwiXFxuXFxuQXNzZXJ0aW9uOlxcblxcblwiLCBhc3NlcnRpb24sIFwiXFxuXFxuQWN0dWFsOlxcblxcblwiLCBmb3JtLCBcIlxcbi0tLS0tLS0tLS0tLS0tXFxuXCIpLCB1cmkpKSkpO1xufSk7XG5cbnZhciBwYXJzZVJlZmVyZW5jZXMgPSBmdW5jdGlvbiBwYXJzZVJlZmVyZW5jZXMoZm9ybXMpIHtcbiAgcmV0dXJuIHJlZHVjZShmdW5jdGlvbihyZWZlcmVuY2VzLCBmb3JtKSB7XG4gICAgaXNTZXEoZm9ybSkgP1xuICAgICAgKHJlZmVyZW5jZXMgfHwgMClbbmFtZShmaXJzdChmb3JtKSldID0gdmVjKHJlc3QoZm9ybSkpIDpcbiAgICAgIHZvaWQoMCk7XG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH0sIHt9LCBmb3Jtcyk7XG59O1xuZXhwb3J0cy5wYXJzZVJlZmVyZW5jZXMgPSBwYXJzZVJlZmVyZW5jZXM7XG5cbnZhciBwYXJzZVJlcXVpcmUgPSBmdW5jdGlvbiBwYXJzZVJlcXVpcmUoZm9ybSkge1xuICB2YXIgcmVxdWlyZW1lbnQgPSBpc1N5bWJvbChmb3JtKSA/XG4gICAgW2Zvcm1dIDpcbiAgICB2ZWMoZm9ybSk7XG4gIHZhciBpZCA9IGZpcnN0KHJlcXVpcmVtZW50KTtcbiAgdmFyIHBhcmFtcyA9IGRpY3Rpb25hcnkuYXBwbHkoZGljdGlvbmFyeSwgcmVzdChyZXF1aXJlbWVudCkpO1xuICB2YXIgaW1wb3J0cyA9IHJlZHVjZShmdW5jdGlvbihpbXBvcnRzLCBuYW1lKSB7XG4gICAgKGltcG9ydHMgfHwgMClbbmFtZV0gPSAoKGltcG9ydHMgfHwgMClbbmFtZV0pIHx8IG5hbWU7XG4gICAgcmV0dXJuIGltcG9ydHM7XG4gIH0sIGNvbmooe30sIChwYXJhbXMgfHwgMClbXCLqnolyZW5hbWVcIl0pLCAocGFyYW1zIHx8IDApW1wi6p6JcmVmZXJcIl0pO1xuICByZXR1cm4gY29uaih7XG4gICAgXCJpZFwiOiBpZCxcbiAgICBcImltcG9ydHNcIjogaW1wb3J0c1xuICB9LCBwYXJhbXMpO1xufTtcbmV4cG9ydHMucGFyc2VSZXF1aXJlID0gcGFyc2VSZXF1aXJlO1xuXG52YXIgYW5hbHl6ZU5zID0gZnVuY3Rpb24gYW5hbHl6ZU5zKGZvcm0pIHtcbiAgdmFyIGlkID0gZmlyc3QoZm9ybSk7XG4gIHZhciBwYXJhbXMgPSByZXN0KGZvcm0pO1xuICB2YXIgZG9jID0gaXNTdHJpbmcoZmlyc3QocGFyYW1zKSkgP1xuICAgIGZpcnN0KHBhcmFtcykgOlxuICAgIHZvaWQoMCk7XG4gIHZhciByZWZlcmVuY2VzID0gcGFyc2VSZWZlcmVuY2VzKGRvYyA/XG4gICAgcmVzdChwYXJhbXMpIDpcbiAgICBwYXJhbXMpO1xuICByZXR1cm4gd2l0aE1ldGEoZm9ybSwge1xuICAgIFwiaWRcIjogaWQsXG4gICAgXCJkb2NcIjogZG9jLFxuICAgIFwicmVxdWlyZVwiOiAocmVmZXJlbmNlcyB8fCAwKVtcInJlcXVpcmVcIl0gP1xuICAgICAgbWFwKHBhcnNlUmVxdWlyZSwgKHJlZmVyZW5jZXMgfHwgMClbXCJyZXF1aXJlXCJdKSA6XG4gICAgICB2b2lkKDApXG4gIH0pO1xufTtcbmV4cG9ydHMuYW5hbHl6ZU5zID0gYW5hbHl6ZU5zO1xuXG52YXIgaWRUb05zID0gZnVuY3Rpb24gaWRUb05zKGlkKSB7XG4gIHJldHVybiBzeW1ib2wodm9pZCgwKSwgam9pbihcIipcIiwgc3BsaXQoXCJcIiArIGlkLCBcIi5cIikpKTtcbn07XG5leHBvcnRzLmlkVG9OcyA9IGlkVG9OcztcblxudmFyIG5hbWVUb0ZpZWxkID0gZnVuY3Rpb24gbmFtZVRvRmllbGQobmFtZSkge1xuICByZXR1cm4gc3ltYm9sKHZvaWQoMCksIFwiXCIgKyBcIi1cIiArIG5hbWUpO1xufTtcbmV4cG9ydHMubmFtZVRvRmllbGQgPSBuYW1lVG9GaWVsZDtcblxudmFyIGNvbXBpbGVJbXBvcnQgPSBmdW5jdGlvbiBjb21waWxlSW1wb3J0KG1vZHVsZSkge1xuICByZXR1cm4gZnVuY3Rpb24oZm9ybSkge1xuICAgIHJldHVybiBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImRlZlwiKSwgc2Vjb25kKGZvcm0pLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcIi5cIiksIG1vZHVsZSwgbmFtZVRvRmllbGQoZmlyc3QoZm9ybSkpKSk7XG4gIH07XG59O1xuZXhwb3J0cy5jb21waWxlSW1wb3J0ID0gY29tcGlsZUltcG9ydDtcblxudmFyIGNvbXBpbGVSZXF1aXJlID0gZnVuY3Rpb24gY29tcGlsZVJlcXVpcmUocmVxdWlyZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGZvcm0pIHtcbiAgICB2YXIgaWQgPSAoZm9ybSB8fCAwKVtcImlkXCJdO1xuICAgIHZhciByZXF1aXJlbWVudCA9IGlkVG9OcygoKGZvcm0gfHwgMClbXCLqnolhc1wiXSkgfHwgaWQpO1xuICAgIHZhciBwYXRoID0gcmVzb2x2ZShyZXF1aXJlciwgaWQpO1xuICAgIHZhciBpbXBvcnRzID0gKGZvcm0gfHwgMClbXCJpbXBvcnRzXCJdO1xuICAgIHJldHVybiBjb25jYXQoW3N5bWJvbCh2b2lkKDApLCBcImRvKlwiKSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJkZWZcIiksIHJlcXVpcmVtZW50LCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInJlcXVpcmVcIiksIHBhdGgpKV0sIGltcG9ydHMgP1xuICAgICAgbWFwKGNvbXBpbGVJbXBvcnQocmVxdWlyZW1lbnQpLCBpbXBvcnRzKSA6XG4gICAgICB2b2lkKDApKTtcbiAgfTtcbn07XG5leHBvcnRzLmNvbXBpbGVSZXF1aXJlID0gY29tcGlsZVJlcXVpcmU7XG5cbnZhciByZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZShmcm9tLCB0bykge1xuICB2YXIgcmVxdWlyZXIgPSBzcGxpdChcIlwiICsgZnJvbSwgXCIuXCIpO1xuICB2YXIgcmVxdWlyZW1lbnQgPSBzcGxpdChcIlwiICsgdG8sIFwiLlwiKTtcbiAgdmFyIGlzUmVsYXRpdmUgPSAoIShcIlwiICsgZnJvbSA9PT0gXCJcIiArIHRvKSkgJiYgKGZpcnN0KHJlcXVpcmVyKSA9PT0gZmlyc3QocmVxdWlyZW1lbnQpKTtcbiAgcmV0dXJuIGlzUmVsYXRpdmUgP1xuICAgIChmdW5jdGlvbiBsb29wKGZyb20sIHRvKSB7XG4gICAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICAgIHJlY3VyID0gZmlyc3QoZnJvbSkgPT09IGZpcnN0KHRvKSA/XG4gICAgICAgIChmcm9tID0gcmVzdChmcm9tKSwgdG8gPSByZXN0KHRvKSwgbG9vcCkgOlxuICAgICAgICBqb2luKFwiL1wiLCBjb25jYXQoW1wiLlwiXSwgcmVwZWF0KGRlYyhjb3VudChmcm9tKSksIFwiLi5cIiksIHRvKSk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlY3VyO1xuICAgIH0pKHJlcXVpcmVyLCByZXF1aXJlbWVudCkgOlxuICAgIGpvaW4oXCIvXCIsIHJlcXVpcmVtZW50KTtcbn07XG5leHBvcnRzLnJlc29sdmUgPSByZXNvbHZlO1xuXG52YXIgY29tcGlsZU5zID0gZnVuY3Rpb24gY29tcGlsZU5zKCkge1xuICB2YXIgZm9ybSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIG1ldGFkYXRhID0gbWV0YShhbmFseXplTnMoZm9ybSkpO1xuICAgIHZhciBpZCA9IFwiXCIgKyAoKG1ldGFkYXRhIHx8IDApW1wiaWRcIl0pO1xuICAgIHZhciBkb2MgPSAobWV0YWRhdGEgfHwgMClbXCJkb2NcIl07XG4gICAgdmFyIHJlcXVpcmVtZW50cyA9IChtZXRhZGF0YSB8fCAwKVtcInJlcXVpcmVcIl07XG4gICAgdmFyIG5zID0gZG9jID9cbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBpZCxcbiAgICAgICAgXCJkb2NcIjogZG9jXG4gICAgICB9IDpcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBpZFxuICAgICAgfTtcbiAgICByZXR1cm4gY29uY2F0KFtzeW1ib2wodm9pZCgwKSwgXCJkbypcIiksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiZGVmXCIpLCBzeW1ib2wodm9pZCgwKSwgXCIqbnMqXCIpLCBucyldLCByZXF1aXJlbWVudHMgP1xuICAgICAgbWFwKGNvbXBpbGVSZXF1aXJlKGlkKSwgcmVxdWlyZW1lbnRzKSA6XG4gICAgICB2b2lkKDApKTtcbiAgfSkoKTtcbn07XG5leHBvcnRzLmNvbXBpbGVOcyA9IGNvbXBpbGVOcztcblxuaW5zdGFsbE1hY3JvKHN5bWJvbCh2b2lkKDApLCBcIm5zXCIpLCBjb21waWxlTnMpO1xuXG5pbnN0YWxsTWFjcm8oc3ltYm9sKHZvaWQoMCksIFwicHJpbnRcIiksIGZ1bmN0aW9uKCkge1xuICB2YXIgbW9yZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIFwiUHJpbnRzIHRoZSBvYmplY3QocykgdG8gdGhlIG91dHB1dCBmb3IgaHVtYW4gY29uc3VtcHRpb24uXCI7XG4gIHJldHVybiBjb25jYXQobGlzdChzeW1ib2wodm9pZCgwKSwgXCIubG9nXCIpLCBzeW1ib2wodm9pZCgwKSwgXCJjb25zb2xlXCIpKSwgbW9yZSk7XG59KSIsInZhciBfbnNfID0ge1xuICBcImlkXCI6IFwid2lzcC5zdHJpbmdcIlxufTtcbnZhciB3aXNwX3J1bnRpbWUgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xudmFyIHN0ciA9IHdpc3BfcnVudGltZS5zdHI7XG52YXIgc3VicyA9IHdpc3BfcnVudGltZS5zdWJzO1xudmFyIHJlTWF0Y2hlcyA9IHdpc3BfcnVudGltZS5yZU1hdGNoZXM7XG52YXIgaXNOaWwgPSB3aXNwX3J1bnRpbWUuaXNOaWw7XG52YXIgaXNTdHJpbmcgPSB3aXNwX3J1bnRpbWUuaXNTdHJpbmc7O1xudmFyIHdpc3Bfc2VxdWVuY2UgPSByZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKTtcbnZhciB2ZWMgPSB3aXNwX3NlcXVlbmNlLnZlYztcbnZhciBpc0VtcHR5ID0gd2lzcF9zZXF1ZW5jZS5pc0VtcHR5Ozs7XG5cbnZhciBzcGxpdCA9IGZ1bmN0aW9uIHNwbGl0KHN0cmluZywgcGF0dGVybiwgbGltaXQpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdChwYXR0ZXJuLCBsaW1pdCk7XG59O1xuZXhwb3J0cy5zcGxpdCA9IHNwbGl0O1xuXG52YXIgam9pbiA9IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yLCBjb2xsKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciBjb2xsID0gc2VwYXJhdG9yO1xuICAgICAgcmV0dXJuIHN0ci5hcHBseShzdHIsIHZlYyhjb2xsKSk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHZlYyhjb2xsKS5qb2luKHNlcGFyYXRvcik7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgKGZ1bmN0aW9uKCkgeyB0aHJvdyBFcnJvcihcIkludmFsaWQgYXJpdHlcIik7IH0pKClcbiAgfTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5qb2luID0gam9pbjtcblxudmFyIHVwcGVyQ2FzZSA9IGZ1bmN0aW9uIHVwcGVyQ2FzZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50b1VwcGVyQ2FzZSgpO1xufTtcbmV4cG9ydHMudXBwZXJDYXNlID0gdXBwZXJDYXNlO1xuXG52YXIgdXBwZXJDYXNlID0gZnVuY3Rpb24gdXBwZXJDYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRvVXBwZXJDYXNlKCk7XG59O1xuZXhwb3J0cy51cHBlckNhc2UgPSB1cHBlckNhc2U7XG5cbnZhciBsb3dlckNhc2UgPSBmdW5jdGlvbiBsb3dlckNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbn07XG5leHBvcnRzLmxvd2VyQ2FzZSA9IGxvd2VyQ2FzZTtcblxudmFyIGNhcGl0YWxpemUgPSBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gY291bnQoc3RyaW5nKSA8IDIgP1xuICAgIHVwcGVyQ2FzZShzdHJpbmcpIDpcbiAgICBcIlwiICsgKHVwcGVyQ2FzZShzdWJzKHMsIDAsIDEpKSkgKyAobG93ZXJDYXNlKHN1YnMocywgMSkpKTtcbn07XG5leHBvcnRzLmNhcGl0YWxpemUgPSBjYXBpdGFsaXplO1xuXG52YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2Uoc3RyaW5nLCBtYXRjaCwgcmVwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKG1hdGNoLCByZXBsYWNlbWVudCk7XG59O1xuZXhwb3J0cy5yZXBsYWNlID0gcmVwbGFjZTtcblxudmFyIF9fTEVGVFNQQUNFU19fID0gL15cXHNcXHMqLztcbmV4cG9ydHMuX19MRUZUU1BBQ0VTX18gPSBfX0xFRlRTUEFDRVNfXztcblxudmFyIF9fUklHSFRTUEFDRVNfXyA9IC9cXHNcXHMqJC87XG5leHBvcnRzLl9fUklHSFRTUEFDRVNfXyA9IF9fUklHSFRTUEFDRVNfXztcblxudmFyIF9fU1BBQ0VTX18gPSAvXlxcc1xccyokLztcbmV4cG9ydHMuX19TUEFDRVNfXyA9IF9fU1BBQ0VTX187XG5cbnZhciB0cmltbCA9IGlzTmlsKFwiXCIudHJpbUxlZnQpID9cbiAgZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF9fTEVGVFNQQUNFU19fLCBcIlwiKTtcbiAgfSA6XG4gIGZ1bmN0aW9uIHRyaW1sKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcudHJpbUxlZnQoKTtcbiAgfTtcbmV4cG9ydHMudHJpbWwgPSB0cmltbDtcblxudmFyIHRyaW1yID0gaXNOaWwoXCJcIi50cmltUmlnaHQpID9cbiAgZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF9fUklHSFRTUEFDRVNfXywgXCJcIik7XG4gIH0gOlxuICBmdW5jdGlvbiB0cmltcihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnRyaW1SaWdodCgpO1xuICB9O1xuZXhwb3J0cy50cmltciA9IHRyaW1yO1xuXG52YXIgdHJpbSA9IGlzTmlsKFwiXCIudHJpbSkgP1xuICBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoX19MRUZUU1BBQ0VTX18pLnJlcGxhY2UoX19SSUdIVFNQQUNFU19fKTtcbiAgfSA6XG4gIGZ1bmN0aW9uIHRyaW0oc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy50cmltKCk7XG4gIH07XG5leHBvcnRzLnRyaW0gPSB0cmltO1xuXG52YXIgaXNCbGFuayA9IGZ1bmN0aW9uIGlzQmxhbmsoc3RyaW5nKSB7XG4gIHJldHVybiAoaXNOaWwoc3RyaW5nKSkgfHwgKGlzRW1wdHkoc3RyaW5nKSkgfHwgKHJlTWF0Y2hlcyhfX1NQQUNFU19fLCBzdHJpbmcpKTtcbn07XG5leHBvcnRzLmlzQmxhbmsgPSBpc0JsYW5rIiwidmFyIF9uc18gPSBcIndpc3AuYW5hbHl6ZXJcIjtcbm1vZHVsZS5uYW1lc3BhY2UgPSBfbnNfO1xudmFyIHN5bWJvbCA9IChyZXF1aXJlKFwiLi9hc3RcIikpLnN5bWJvbDtcbnZhciBpc1N5bWJvbCA9IChyZXF1aXJlKFwiLi9hc3RcIikpLmlzU3ltYm9sO1xudmFyIGlzS2V5d29yZCA9IChyZXF1aXJlKFwiLi9hc3RcIikpLmlzS2V5d29yZDtcbnZhciBtZXRhID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkubWV0YTtcbnZhciBuYW1lID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkubmFtZTtcbnZhciBuYW1lc3BhY2UgPSAocmVxdWlyZShcIi4vYXN0XCIpKS5uYW1lc3BhY2U7XG52YXIgaXNTZXEgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmlzU2VxO1xudmFyIHNlcSA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuc2VxO1xudmFyIGNvbmogPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmNvbmo7XG52YXIgbWFwID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5tYXA7XG52YXIgaXNFdmVyeSA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuaXNFdmVyeTtcbnZhciBpbnRlcmxlYXZlID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5pbnRlcmxlYXZlO1xudmFyIGlzRW1wdHkgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmlzRW1wdHk7XG52YXIgbGlzdF8gPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmxpc3RfO1xudmFyIGxpc3QgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmxpc3Q7XG52YXIgZmlyc3QgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmZpcnN0O1xudmFyIGxhc3QgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmxhc3Q7XG52YXIgcmVzdCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkucmVzdDtcbnZhciBjb3VudCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuY291bnQ7XG52YXIgaXNWZWN0b3IgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNWZWN0b3I7XG52YXIgaXNEaWN0aW9uYXJ5ID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzRGljdGlvbmFyeTtcbnZhciBpc1N0cmluZyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc1N0cmluZztcbnZhciBrZXlzID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmtleXM7XG52YXIgdmFscyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS52YWxzO1xudmFyIGlzRXF1YWwgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNFcXVhbDtcbnZhciBpc05pbCA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc05pbDtcbnZhciBtZXJnZSA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5tZXJnZTtcbnZhciBzcGxpdCA9IChyZXF1aXJlKFwiLi9zdHJpbmdcIikpLnNwbGl0OztcblxudmFyIGdldEluID0gZnVuY3Rpb24gZ2V0SW4oZGljdGlvbmFyeSwga2V5cywgbm90Rm91bmQpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHRhcmdldCwgc2VudGluZWwsIGtleXMpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBpc0VtcHR5KGtleXMpID9cbiAgICAgIHRhcmdldCA6XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAoKCh0YXJnZXQgfHwgMCkgfHwgMClbZmlyc3Qoa2V5cyldKSB8fCBzZW50aW5lbDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gc2VudGluZWwgP1xuICAgICAgICAgIG5vdEZvdW5kIDpcbiAgICAgICAgICAodGFyZ2V0ID0gcmVzdWx0LCBzZW50aW5lbCA9IHNlbnRpbmVsLCBrZXlzID0gcmVzdChrZXlzKSwgbG9vcCk7XG4gICAgICB9KSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShkaWN0aW9uYXJ5LCB7fSwga2V5cyk7XG59O1xuZXhwb3J0cy5nZXRJbiA9IGdldEluO1xuXG52YXIgZW1wdHlFbnYgPSBmdW5jdGlvbiBlbXB0eUVudihucykge1xuICBcIlV0aWxpdHkgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGVtcHR5IG5hbWVzcGFjZXNcIjtcbiAgcmV0dXJuIHtcbiAgICBcIm5zXCI6IG5zLFxuICAgIFwibmFtZXNwYWNlc1wiOiB7fSxcbiAgICBcImNvbnRleHRcIjogXCJzdGF0ZW1lbnRcIixcbiAgICBcImxvY2Fsc1wiOiB7fVxuICB9O1xufTtcbmV4cG9ydHMuZW1wdHlFbnYgPSBlbXB0eUVudjtcblxudmFyIGxvY2FsQmluZGluZyA9IGZ1bmN0aW9uIGxvY2FsQmluZGluZyhlbnYsIGZvcm0pIHtcbiAgcmV0dXJuICgoKGVudiB8fCAwKVtcImxvY2Fsc1wiXSkgfHwgMClbZm9ybV07XG59O1xuXG52YXIgaXNDb3JlTmFtZSA9IGZ1bmN0aW9uIGlzQ29yZU5hbWUoZW52LCBzeW0pIHtcbiAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydHMuaXNDb3JlTmFtZSA9IGlzQ29yZU5hbWU7XG5cbnZhciByZXNvbHZlTnNBbGlhcyA9IGZ1bmN0aW9uIHJlc29sdmVOc0FsaWFzKGVudiwgbmFtZSkge1xuICB2YXIgc3ltID0gc3ltYm9sKG5hbWUpO1xuICByZXR1cm4gKCgoKCgoKGVudiB8fCAwKVtcIm5zXCJdKSB8fCAwKVtcInJlcXVpcmVzXCJdKSB8fCAwKSB8fCAwKVtzeW1dKSB8fCBzeW07XG59O1xuZXhwb3J0cy5yZXNvbHZlTnNBbGlhcyA9IHJlc29sdmVOc0FsaWFzO1xuXG52YXIgcmVzb2x2ZUV4aXN0aW5nVmFyID0gZnVuY3Rpb24gcmVzb2x2ZUV4aXN0aW5nVmFyKGVudiwgZm9ybSkge1xuICByZXR1cm4gaXNFcXVhbChuYW1lc3BhY2UoZm9ybSksIFwianNcIikgP1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBmb3JtLFxuICAgICAgXCJuc1wiOiBzeW1ib2wodm9pZCgwKSwgXCJqc1wiKVxuICAgIH0gOlxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuYW1lc3BhY2VzID0gKGVudiB8fCAwKVtcIm5hbWVzcGFjZXNcIl07XG4gICAgICB2YXIgcyA9IFwiXCIgKyBmb3JtO1xuICAgICAgdmFyIGJpbmRpbmcgPSBsb2NhbEJpbmRpbmcoZW52LCBmb3JtKTtcbiAgICAgIHJldHVybiBiaW5kaW5nID9cbiAgICAgICAgYmluZGluZyA6XG4gICAgICBuYW1lc3BhY2UoZm9ybSkgP1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIG5zID0gbmFtZXNwYWNlKGZvcm0pO1xuICAgICAgICAgIHZhciBucyA9IGlzRXF1YWwoXCJjbG9qdXJlLmNvcmVcIiwgbnMpID9cbiAgICAgICAgICAgIFwiY2xqcy5jb3JlXCIgOlxuICAgICAgICAgICAgbnM7XG4gICAgICAgICAgdmFyIGZ1bGxOcyA9IHJlc29sdmVOc0FsaWFzKGVudiwgbnMpO1xuICAgICAgICAgIHZhciBpZCA9IHN5bWJvbChuYW1lKGZvcm0pKTtcbiAgICAgICAgICByZXR1cm4gbWVyZ2UoZ2V0SW4obmFtZXNwYWNlcywgW2Z1bGxOcywgXCJkZWZzXCIsIGlkXSksIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBzeW1ib2woXCJcIiArIGZ1bGxOcywgXCJcIiArIChuYW1lKGZvcm0pKSksXG4gICAgICAgICAgICBcIm5zXCI6IGZ1bGxOc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpIDpcbiAgICAgIFwiZWxzZVwiID9cbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBmdWxsTnMgPSBpc0NvcmVOYW1lKGVudiwgZm9ybSkgP1xuICAgICAgICAgICAgc3ltYm9sKHZvaWQoMCksIFwiY2xqcy5jb3JlXCIpIDpcbiAgICAgICAgICAgICgoKGVudiB8fCAwKVtcIm5zXCJdKSB8fCAwKVtcIm5hbWVcIl07XG4gICAgICAgICAgcmV0dXJuIG1lcmdlKGdldEluKG5hbWVzcGFjZXMsIFtmdWxsTnMsIFwiZGVmc1wiLCBmb3JtXSksIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBzeW1ib2woXCJcIiArIGZ1bGxOcywgXCJcIiArIGZvcm0pLFxuICAgICAgICAgICAgXCJuc1wiOiBmdWxsTnNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKSA6XG4gICAgICAgIHZvaWQoMCk7XG4gICAgfSkoKTtcbn07XG5leHBvcnRzLnJlc29sdmVFeGlzdGluZ1ZhciA9IHJlc29sdmVFeGlzdGluZ1ZhcjtcblxudmFyIGlzU3BlY2lhbCA9IGZ1bmN0aW9uIGlzU3BlY2lhbChvcCkge1xuICByZXR1cm4gKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcImlmXCIpKSkgfHwgKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcImRlZlwiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJmbipcIikpKSB8fCAoaXNFcXVhbChvcCwgc3ltYm9sKHZvaWQoMCksIFwiZG9cIikpKSB8fCAoaXNFcXVhbChvcCwgc3ltYm9sKHZvaWQoMCksIFwibGV0KlwiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJsb29wKlwiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJsZXRmbipcIikpKSB8fCAoaXNFcXVhbChvcCwgc3ltYm9sKHZvaWQoMCksIFwidGhyb3dcIikpKSB8fCAoaXNFcXVhbChvcCwgc3ltYm9sKHZvaWQoMCksIFwidHJ5KlwiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJyZWN1clwiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJuZXdcIikpKSB8fCAoaXNFcXVhbChvcCwgc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJuc1wiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJkZWZ0eXBlKlwiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJkZWZyZWNvcmQqXCIpKSkgfHwgKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcIi5cIikpKSB8fCAoaXNFcXVhbChvcCwgc3ltYm9sKHZvaWQoMCksIFwianMqXCIpKSkgfHwgKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcIiZcIikpKSB8fCAoaXNFcXVhbChvcCwgc3ltYm9sKHZvaWQoMCksIFwicXVvdGVcIikpKTtcbn07XG5leHBvcnRzLmlzU3BlY2lhbCA9IGlzU3BlY2lhbDtcblxudmFyIGFuYWx5emVTZXEgPSBmdW5jdGlvbiBhbmFseXplU2VxKGVudiwgZm9ybSwgbmFtZSkge1xuICB2YXIgZW52ID0gY29uaihlbnYsIHtcbiAgICBcImxpbmVcIjogKCgobWV0YShmb3JtKSkgfHwgMClbXCJsaW5lXCJdKSB8fCAoKGVudiB8fCAwKVtcImxpbmVcIl0pXG4gIH0pO1xuICByZXR1cm4gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcCA9IGZpcnN0KGZvcm0pO1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICghKHR5cGVvZihfX3ZlcmJvc2VfXykgPT09IFwidW5kZWZpbmVkXCIpKSAmJiBfX3ZlcmJvc2VfXyA/XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXJ0OlwiLCBcIihub3QgKG5pbD8gb3ApKVwiKSA6XG4gICAgICAgIHZvaWQoMCk7XG4gICAgICByZXR1cm4gISghKGlzTmlsKG9wKSkpID9cbiAgICAgICAgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJcIiArIFwiQXNzZXJ0IGZhaWxlZDogXCIgKyBcIkNhbid0IGNhbGwgbmlsXCIgKyBcIlxcblxcbkFzc2VydGlvbjpcXG5cXG5cIiArIFwiKG5vdCAobmlsPyBvcCkpXCIgKyBcIlxcblxcbkFjdHVhbDpcXG5cXG5cIiArIChpc05pbChvcCkpICsgXCJcXG4tLS0tLS0tLS0tLS0tLVxcblwiLCB2b2lkKDApKTsgfSkoKSA6XG4gICAgICAgIHZvaWQoMCk7XG4gICAgfSkoKTtcbiAgICByZXR1cm4gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGV4cGFuc2lvbiA9IG1hY3JvZXhwYW5kKGZvcm0pO1xuICAgICAgcmV0dXJuIGlzU3BlY2lhbChvcCkgP1xuICAgICAgICBwYXJzZShvcCwgZW52LCBmb3JtLCBuYW1lKSA6XG4gICAgICAgIHBhcnNlSW52b2tlKGVudiwgZm9ybSk7XG4gICAgfSkoKTtcbiAgfSkoKTtcbn07XG5leHBvcnRzLmFuYWx5emVTZXEgPSBhbmFseXplU2VxO1xuXG52YXIgaXNNZXRob2RDYWxsID0gZnVuY3Rpb24gaXNNZXRob2RDYWxsKGZvcm0pIHtcbiAgcmV0dXJuIGlzRXF1YWwoZmlyc3QoZm9ybSksIFwiLlwiKTtcbn07XG5cbnZhciBpc0luc3RhbnRpYXRpb24gPSBmdW5jdGlvbiBpc0luc3RhbnRpYXRpb24oZm9ybSkge1xuICByZXR1cm4gaXNFcXVhbChsYXN0KGZvcm0pLCBcIi5cIik7XG59O1xuXG52YXIgZ2V0TnNFeGNsdWRlID0gZnVuY3Rpb24gZ2V0TnNFeGNsdWRlKGVudiwgc3ltKSB7XG4gIHJldHVybiAoKCgoKGVudiB8fCAwKVtcIm5zXCJdKSB8fCAwKVtcImV4Y2x1ZGVzXCJdKSB8fCAwKVtzeW1dO1xufTtcblxudmFyIGdldE5zTmFtZSA9IGZ1bmN0aW9uIGdldE5zTmFtZShlbnYpIHtcbiAgcmV0dXJuICgoKGVudiB8fCAwKVtcIm5zXCJdKSB8fCAwKVtcIm5hbWVcIl07XG59O1xuXG52YXIgZ2V0TWFjcm9Vc2VzID0gZnVuY3Rpb24gZ2V0TWFjcm9Vc2VzKGVudiwgc3ltKSB7XG4gIHJldHVybiAoKCgoKGVudiB8fCAwKVtcIm5zXCJdKSB8fCAwKVtcInVzZXMtbWFjcm9zXCJdKSB8fCAwKVtzeW1dO1xufTtcblxudmFyIGlzTWFjcm9TeW0gPSBmdW5jdGlvbiBpc01hY3JvU3ltKGVudiwgc3ltKSB7XG4gIHZhciBuYW1lc3BhY2VzID0gKGVudiB8fCAwKVtcIm5hbWVzcGFjZXNcIl07XG4gIHZhciBsb2NhbCA9IGxvY2FsQmluZGluZyhlbnYsIHN5bSk7XG4gIHZhciBuc0lkID0gZ2V0TnNOYW1lKGVudik7XG4gIHJldHVybiAhKGxvY2FsIHx8ICgoKGdldE5zRXhjbHVkZShlbnYsIHN5bSkpIHx8IChnZXRJbihuYW1lc3BhY2VzLCBbbnNJZCwgXCJleGNsdWRlc1wiLCBzeW1dKSkpICYmICghKChnZXRNYWNyb1VzZXMoZW52LCBzeW0pKSB8fCAoZ2V0SW4obmFtZXNwYWNlcywgW25zSWQsIFwidXNlcy1tYWNyb3NcIiwgc3ltXSkpKSkpKTtcbn07XG5leHBvcnRzLmlzTWFjcm9TeW0gPSBpc01hY3JvU3ltO1xuXG52YXIgZ2V0RXhwYW5kZXIgPSBmdW5jdGlvbiBnZXRFeHBhbmRlcihzeW0sIGVudikge1xuICB2YXIgb3AgPSAoaXNNYWNyb1N5bShlbnYsIHN5bSkpICYmIChyZXNvbHZlRXhpc3RpbmdWYXIoZW1wdHlFbnYoKSwgc3ltKSk7XG4gIHJldHVybiBvcCAmJiAoKG9wIHx8IDApW1wibWFjcm9cIl0pID9cbiAgICBldmFsKFwiXCIgKyAobXVuZ2UoKG9wIHx8IDApW1wibmFtZVwiXSkpKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmdldEV4cGFuZGVyID0gZ2V0RXhwYW5kZXI7XG5cbnZhciBpc1N1Z2FyID0gZnVuY3Rpb24gaXNTdWdhcihvcCkge1xuICB2YXIgaWQgPSBcIlwiICsgb3A7XG4gIHJldHVybiAoZmlyc3QoaWQpID09PSBcIi5cIikgfHwgKGxhc3QoaWQpID09PSBcIi5cIik7XG59O1xuZXhwb3J0cy5pc1N1Z2FyID0gaXNTdWdhcjtcblxudmFyIGlzTWFjcm8gPSBmdW5jdGlvbiBpc01hY3JvKG9wKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnRzLmlzTWFjcm8gPSBpc01hY3JvO1xuXG52YXIgZGVzdWdhcjEgPSBmdW5jdGlvbiBkZXN1Z2FyMShmb3JtKSB7XG4gIHZhciBpZCA9IFwiXCIgKyBmb3JtO1xuICB2YXIgcGFyYW1zID0gcmVzdChmb3JtKTtcbiAgdmFyIG1ldGFkYXRhID0gbWV0YShmb3JtKTtcbiAgcmV0dXJuIGlzTWV0aG9kQ2FsbChpZCkgP1xuICAgIHdpdGhNZXRhKGxpc3RfKHN5bWJvbCh2b2lkKDApLCBcIi5cIiksIGZpcnN0KHBhcmFtKSwgc3ltYm9sKHN1YnMoaWQsIDEpKSwgcmVzdChwYXJhbXMpKSwgbWV0YWRhdGEpIDpcbiAgaXNJbnN0YW50aWF0aW9uKGlkKSA/XG4gICAgd2l0aE1ldGEobGlzdF8oc3ltYm9sKHZvaWQoMCksIFwibmV3XCIpLCBzeW1ib2woc3VicyhvcG5hbWUsIDAsIGRlYyhjb3VudChvcG5hbWUpKSkpLCBwYXJhbXMpLCBtZXRhZGF0YSkgOlxuICBcImVsc2VcIiA/XG4gICAgZm9ybSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmRlc3VnYXIxID0gZGVzdWdhcjE7XG5cbnZhciBtYWNyb2V4cGFuZDEgPSBmdW5jdGlvbiBtYWNyb2V4cGFuZDEoZm9ybSkge1xuICB2YXIgb3AgPSBmaXJzdChmb3JtKTtcbiAgcmV0dXJuIGlzU3BlY2lhbChvcCkgP1xuICAgIGZvcm0gOlxuICBpc1N1Z2FyKG9wKSA/XG4gICAgZGVzdWdhcjEoZm9ybSkgOlxuICBpc01hY3JvKG9wKSA/XG4gICAgZ2V0RXhwYW5kZXIob3ApLmFwcGx5KGdldEV4cGFuZGVyKG9wKSwgZm9ybSkgOlxuICBcImVsc2VcIiA/XG4gICAgZm9ybSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLm1hY3JvZXhwYW5kMSA9IG1hY3JvZXhwYW5kMTtcblxudmFyIG1hY3JvZXhwYW5kID0gZnVuY3Rpb24gbWFjcm9leHBhbmQoZm9ybSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoZm9ybSwgZXhwYW5zaW9uKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gZm9ybSA9PT0gZXhwYW5zaW9uID9cbiAgICAgIGZvcm0gOlxuICAgICAgKGZvcm0gPSBleHBhbnNpb24sIGV4cGFuc2lvbiA9IG1hY3JvZXhwYW5kMShleHBhbnNpb24pLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoZm9ybSwgbWFjcm9leHBhbmQxKGZvcm0pKTtcbn07XG5leHBvcnRzLm1hY3JvZXhwYW5kID0gbWFjcm9leHBhbmQ7XG5cbnZhciBhbmFseXplU3ltYm9sID0gZnVuY3Rpb24gYW5hbHl6ZVN5bWJvbChlbnYsIHN5bWJvbCkge1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIFwiZW52XCI6IGVudixcbiAgICBcImZvcm1cIjogc3ltYm9sXG4gIH07XG4gIHZhciBsb2NhbHMgPSAoZW52IHx8IDApW1wibG9jYWxzXCJdO1xuICB2YXIgbG9jYWwgPSAobG9jYWxzIHx8IDApW3N5bWJvbF07XG4gIHJldHVybiBjb25qKHJlc3VsdCwge1xuICAgIFwib3BcIjogXCJ2YXJcIixcbiAgICBcImluZm9cIjogbG9jYWwgP1xuICAgICAgbG9jYWwgOlxuICAgICAgcmVzb2x2ZUV4aXN0aW5nVmFyKGVudiwgc3ltYm9sKVxuICB9KTtcbn07XG5leHBvcnRzLmFuYWx5emVTeW1ib2wgPSBhbmFseXplU3ltYm9sO1xuXG52YXIgX3JlYWRlck5zTmFtZV8gPSBzeW1ib2woXCJjbG9qdXJlLnJlYWRlclwiLCBcInJlYWRlclwiKTtcblxudmFyIGFuYWx5emVLZXl3b3JkID0gZnVuY3Rpb24gYW5hbHl6ZUtleXdvcmQoZW52LCBmb3JtKSB7XG4gIHJldHVybiB7XG4gICAgXCJvcFwiOiBcImNvbnN0YW50XCIsXG4gICAgXCJlbnZcIjogZW52LFxuICAgIFwiZm9ybVwiOiBpc0VxdWFsKG5hbWVzcGFjZShmb3JtKSwgbmFtZShfcmVhZGVyTnNOYW1lXykpID9cbiAgICAgIGtleXdvcmQobmFtZSgoKChlbnYgfHwgMClbXCJuc1wiXSkgfHwgMClbXCJuYW1lXCJdKSwgbmFtZShmb3JtKSkgOlxuICAgICAgZm9ybVxuICB9O1xufTtcbmV4cG9ydHMuYW5hbHl6ZUtleXdvcmQgPSBhbmFseXplS2V5d29yZDtcblxudmFyIGlzU2ltcGxlS2V5ID0gZnVuY3Rpb24gaXNTaW1wbGVLZXkoeCkge1xuICByZXR1cm4gKGlzU3RyaW5nKHgpKSB8fCAoaXNLZXl3b3JkKHgpKTtcbn07XG5leHBvcnRzLmlzU2ltcGxlS2V5ID0gaXNTaW1wbGVLZXk7XG5cbnZhciBhbmFseXplRGljdGlvbmFyeSA9IGZ1bmN0aW9uIGFuYWx5emVEaWN0aW9uYXJ5KGVudiwgZm9ybSwgbmFtZSkge1xuICB2YXIgZXhwckVudiA9IGNvbmooZW52LCB7XG4gICAgXCJjb250ZXh0XCI6IFwiZXhwclwiXG4gIH0pO1xuICB2YXIgbmFtZXMgPSBrZXlzKGZvcm0pO1xuICB2YXIgaXNTaW1wbGVLZXlzID0gaXNFdmVyeShpc1NpbXBsZUtleSwgbmFtZXMpO1xuICB2YXIga3MgPSBkaXNhbGxvd2luZ1JlY3VyKHZlYyhtYXAoZnVuY3Rpb24oJDEpIHtcbiAgICByZXR1cm4gYW5hbHl6ZShleHByRW52LCAkMSwgbmFtZSk7XG4gIH0sIG5hbWVzKSkpO1xuICB2YXIgdnMgPSBkaXNhbGxvd2luZ1JlY3VyKHZlYyhtYXAoZnVuY3Rpb24oJDEpIHtcbiAgICByZXR1cm4gYW5hbHl6ZShleHByRW52LCAkMSwgbmFtZSk7XG4gIH0sIHZhbHMoZm9ybSkpKSk7XG4gIHJldHVybiBhbmFseXplV3JhcE1ldGEoe1xuICAgIFwib3BcIjogXCJtYXBcIixcbiAgICBcImVudlwiOiBlbnYsXG4gICAgXCJmb3JtXCI6IGZvcm0sXG4gICAgXCJrZXlzXCI6IGtzLFxuICAgIFwidmFsc1wiOiB2cyxcbiAgICBcInNpbXBsZS1rZXlzP1wiOiBpc1NpbXBsZUtleXMsXG4gICAgXCJjaGlsZHJlblwiOiB2ZWMoaW50ZXJsZWF2ZShrcywgdnMpKVxuICB9LCBuYW1lKTtcbn07XG5leHBvcnRzLmFuYWx5emVEaWN0aW9uYXJ5ID0gYW5hbHl6ZURpY3Rpb25hcnk7XG5cbnZhciBhbmFseXplVmVjdG9yID0gZnVuY3Rpb24gYW5hbHl6ZVZlY3RvcihlbnYsIGZvcm0sIG5hbWUpIHtcbiAgdmFyIGV4cHJFbnYgPSBjb25qKGVudiwge1xuICAgIFwiY29udGV4dFwiOiBcImV4cHJcIlxuICB9KTtcbiAgdmFyIGl0ZW1zID0gZGlzYWxsb3dpbmdSZWN1cih2ZWMobWFwKGZ1bmN0aW9uKCQxKSB7XG4gICAgcmV0dXJuIGFuYWx5emUoZXhwckVudiwgJDEsIG5hbWUpO1xuICB9LCBmb3JtKSkpO1xuICByZXR1cm4gYW5hbHl6ZVdyYXBNZXRhKHtcbiAgICBcIm9wXCI6IFwidmVjdG9yXCIsXG4gICAgXCJlbnZcIjogZW52LFxuICAgIFwiZm9ybVwiOiBmb3JtLFxuICAgIFwiaXRlbXNcIjogaXRlbXMsXG4gICAgXCJjaGlsZHJlblwiOiBpdGVtc1xuICB9LCBuYW1lKTtcbn07XG5leHBvcnRzLmFuYWx5emVWZWN0b3IgPSBhbmFseXplVmVjdG9yO1xuXG52YXIgYW5hbHl6ZVdyYXBNZXRhID0gZnVuY3Rpb24gYW5hbHl6ZVdyYXBNZXRhKGV4cHIsIG5hbWUpIHtcbiAgdmFyIGZvcm0gPSAoZXhwciB8fCAwKVtcImZvcm1cIl07XG4gIHZhciBtZXRhZGF0YSA9IG1ldGEoZm9ybSk7XG4gIHZhciBlbnYgPSAoZXhwciB8fCAwKVtcImVudlwiXTtcbiAgdmFyIGV4cHIgPSBtZXRhZGF0YSA/XG4gICAgYXNzb2NJbihleHByLCBbXCJlbnZcIiwgXCJjb250ZXh0XCJdLCBcImV4cHJcIikgOlxuICAgIHZvaWQoMCk7XG4gIHZhciBtZXRhRXhwciA9IG1ldGFkYXRhID9cbiAgICBhbmFseXplTWFwKGVudiwgbWV0YWRhdGEsIG5hbWUpIDpcbiAgICB2b2lkKDApO1xuICByZXR1cm4gbWV0YWRhdGEgP1xuICAgIHtcbiAgICAgIFwib3BcIjogXCJtZXRhXCIsXG4gICAgICBcImVudlwiOiBlbnYsXG4gICAgICBcImZvcm1cIjogZm9ybSxcbiAgICAgIFwibWV0YVwiOiBtZXRhRXhwcixcbiAgICAgIFwiZXhwclwiOiBleHByLFxuICAgICAgXCJjaGlsZHJlblwiOiBbbWV0YUV4cHIsIGV4cHJdXG4gICAgfSA6XG4gICAgZXhwcjtcbn07XG5leHBvcnRzLmFuYWx5emVXcmFwTWV0YSA9IGFuYWx5emVXcmFwTWV0YTtcblxudmFyIGFuYWx5emVNYXAgPSBmdW5jdGlvbiBhbmFseXplTWFwKGVudiwgZm9ybSwgbmFtZSkge1xuICB2YXIgZXhwckVudiA9IGNvbmooZW52LCB7XG4gICAgXCJjb250ZXh0XCI6IFwiZXhwclwiXG4gIH0pO1xuICB2YXIgaXNTaW1wbGVLZXlzID0gaXNFdmVyeShmdW5jdGlvbigkMSkge1xuICAgIHJldHVybiAoaXNTdHJpbmcoJDEpKSB8fCAoaXNLZXl3b3JkKCQxKSk7XG4gIH0sIGtleXMoZm9ybSkpO1xuICB2YXIga3MgPSBkaXNhbGxvd2luZ1JlY3VyKHZlYyhtYXAoZnVuY3Rpb24oJDEpIHtcbiAgICByZXR1cm4gYW5hbHl6ZShleHByRW52LCAkMSwgbmFtZSk7XG4gIH0sIGtleXMoZm9ybSkpKSk7XG4gIHZhciB2cyA9IGRpc2FsbG93aW5nUmVjdXIodmVjKG1hcChmdW5jdGlvbigkMSkge1xuICAgIHJldHVybiBhbmFseXplKGV4cHJFbnYsICQxLCBuYW1lKTtcbiAgfSwgdmFscyhmb3JtKSkpKTtcbiAgcmV0dXJuIGFuYWx5emVXcmFwTWV0YSh7XG4gICAgXCJvcFwiOiBcIm1hcFwiLFxuICAgIFwiZW52XCI6IGVudixcbiAgICBcImZvcm1cIjogZm9ybSxcbiAgICBcImtleXNcIjoga3MsXG4gICAgXCJ2YWxzXCI6IHZzLFxuICAgIFwic2ltcGxlLWtleXM/XCI6IGlzU2ltcGxlS2V5cyxcbiAgICBcImNoaWxkcmVuXCI6IHZlYyhpbnRlcmxlYXZlKGtzLCB2cykpXG4gIH0sIG5hbWUpO1xufTtcbmV4cG9ydHMuYW5hbHl6ZU1hcCA9IGFuYWx5emVNYXA7XG5cbnZhciBhbmFseXplID0gZnVuY3Rpb24gYW5hbHl6ZShlbnYsIGZvcm0sIG5hbWUpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGFuYWx5emUoZW52LCBmb3JtLCB2b2lkKDApKTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gaXNTeW1ib2woZm9ybSkgP1xuICAgICAgICBhbmFseXplU3ltYm9sKGVudiwgZm9ybSkgOlxuICAgICAgaXNLZXl3b3JkKGZvcm0pID9cbiAgICAgICAgYW5hbHl6ZUtleXdvcmQoZW52LCBmb3JtKSA6XG4gICAgICAoaXNTZXEoZm9ybSkpICYmICghKGlzRW1wdHkoZm9ybSkpKSA/XG4gICAgICAgIGFuYWx5emVTZXEoZW52LCBmb3JtLCBuYW1lKSA6XG4gICAgICBpc0RpY3Rpb25hcnkoZm9ybSkgP1xuICAgICAgICBhbmFseXplRGljdGlvbmFyeShlbnYsIGZvcm0sIG5hbWUpIDpcbiAgICAgIGlzVmVjdG9yKGZvcm0pID9cbiAgICAgICAgYW5hbHl6ZVZlY3RvcihlbnYsIGZvcm0sIG5hbWUpIDpcbiAgICAgIFwiZWxzZVwiID9cbiAgICAgICAge1xuICAgICAgICAgIFwib3BcIjogXCJjb25zdGFudFwiLFxuICAgICAgICAgIFwiZW52XCI6IGVudixcbiAgICAgICAgICBcImZvcm1cIjogZm9ybVxuICAgICAgICB9IDpcbiAgICAgICAgdm9pZCgwKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICAoZnVuY3Rpb24oKSB7IHRocm93IEVycm9yKFwiSW52YWxpZCBhcml0eVwiKTsgfSkoKVxuICB9O1xuICByZXR1cm4gdm9pZCgwKTtcbn07XG5leHBvcnRzLmFuYWx5emUgPSBhbmFseXplXG4iLCIoZnVuY3Rpb24oZ2xvYmFsKXt2YXIgX25zXyA9IHtcbiAgXCJpZFwiOiBcImludGVyYWN0aXZhdGUtd2lzcC5tYWluXCJcbn07XG52YXIgaW50ZXJhY3RpdmF0ZSA9IHJlcXVpcmUoXCJpbnRlcmFjdGl2YXRlXCIpOztcbnZhciBoYXNoYXJlID0gcmVxdWlyZShcImNvZGVtaXJyb3ItaGFzaGFyZVwiKTs7XG52YXIgcGVyc2lzdCA9IHJlcXVpcmUoXCJjb2RlbWlycm9yLXBlcnNpc3RcIik7O1xudmFyIGludGVyYWN0aXZhdGVXaXNwX2hvc3QgPSByZXF1aXJlKFwiLi9ob3N0XCIpO1xudmFyIHN0YXJ0SG9zdCA9IGludGVyYWN0aXZhdGVXaXNwX2hvc3Quc3RhcnRIb3N0Ozs7XG5cbmludGVyYWN0aXZhdGUoQ29kZU1pcnJvcik7XG5cbmhhc2hhcmUoQ29kZU1pcnJvcik7XG5cbnBlcnNpc3QoQ29kZU1pcnJvcik7XG5cbnN0YXJ0SG9zdCgpO1xuXG52YXIgZWRpdG9yID0gQ29kZU1pcnJvcihkb2N1bWVudC5ib2R5LCB7XG4gIFwicGVyc2lzdFwiOiB0cnVlLFxuICBcIm1hdGNoQnJhY2tldHNcIjogdHJ1ZSxcbiAgXCJlbGVjdHJpY0NoYXJzXCI6IHRydWUsXG4gIFwic3R5bGVBY3RpdmVMaW5lXCI6IHRydWUsXG4gIFwiYXV0b2ZvY3VzXCI6IHRydWUsXG4gIFwidGhlbWVcIjogXCJzb2xhcml6ZWQgZGFya1wiLFxuICBcIm1vZGVcIjogXCJjbG9qdXJlXCIsXG4gIFwidmFsdWVcIjogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50cm9cIikpLnRleHRDb250ZW50LFxuICBcImludGVyYWN0aXZhdGVcIjogdHJ1ZSxcbiAgXCJpbnRlcmFjdGl2ZVNlcGFyYXRvclwiOiAvXjs7ID0+W15cXG5dKiQvbSxcbiAgXCJleHRyYUtleXNcIjoge1xuICAgIFwiVGFiXCI6IFwiaW5kZW50U2VsZWN0aW9uXCJcbiAgfVxufSk7XG5leHBvcnRzLmVkaXRvciA9IGVkaXRvcjtcblxuZ2xvYmFsLmVkaXRvciA9IGVkaXRvclxufSkod2luZG93KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc2F2ZSA9IFwic2F2ZUBoYXNoYXJlXCJcbnZhciBsb2FkID0gXCJsb2FkQGhhc2hhcmVcIlxuXG5mdW5jdGlvbiBwbHVnaW4oQ29kZU1pcnJvcikge1xuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcImhhc2hhcmVcIiwgZmFsc2UsIGZ1bmN0aW9uKGVkaXRvciwgdmFsdWUpIHtcbiAgICAvKipcbiAgICBUYWtlcyBlZGl0b3IgYW5kIGVuYWJsZXMgcGVyc2lzdHMgY2hhbmdlcyB0byB0aGUgYnVmZmVyIGFjcm9zcyB0aGUgc2Vzc2lvbnMuXG4gICAgKiovXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YXIgc2F2aW5nID0gZmFsc2VcbiAgICAgIGVkaXRvcltzYXZlXSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGxvY2F0aW9uLmhhc2ggPSBlbmNvZGVVUklDb21wb25lbnQoZWRpdG9yLmdldFZhbHVlKCkpXG4gICAgICB9XG4gICAgICBlZGl0b3JbbG9hZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSlcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSBlZGl0b3IuZ2V0VmFsdWUoKSkgZWRpdG9yLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGVkaXRvcltzYXZlXSwgZmFsc2UpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgZWRpdG9yW2xvYWRdLCBmYWxzZSlcblxuICAgICAgZWRpdG9yW2xvYWRdKClcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGVkaXRvcltzYXZlXSwgZmFsc2UpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZWRpdG9yW2xvYWRdLCBmYWxzZSlcbiAgICB9XG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGx1Z2luXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb25DaGFuZ2UoZWRpdG9yKSB7XG4gIGxvY2FsU3RvcmFnZVt3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMF1dID0gZWRpdG9yLmdldFZhbHVlKClcbn1cblxuZnVuY3Rpb24gc2V0dXAoZWRpdG9yLCB2YWx1ZSkge1xuICAvKipcbiAgVGFrZXMgZWRpdG9yIGFuZCBlbmFibGVzIHBlcnNpc3RzIGNoYW5nZXMgdG8gdGhlIGJ1ZmZlciBhY3Jvc3MgdGhlIHNlc3Npb25zLlxuICAqKi9cbiAgaWYgKHZhbHVlKSB7XG4gICAgdmFyIGFkZHJlc3MgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMF1cbiAgICB2YXIgcGVyc2lzdGVkID0gbG9jYWxTdG9yYWdlW2FkZHJlc3NdIHx8IGVkaXRvci5nZXRWYWx1ZSgpXG4gICAgZWRpdG9yLnNldFZhbHVlKHBlcnNpc3RlZClcbiAgICBlZGl0b3Iub24oXCJjaGFuZ2VcIiwgb25DaGFuZ2UpXG4gIH0gZWxzZSB7XG4gICAgZWRpdG9yLm9mZihcImNoYW5nZVwiLCBvbkNoYW5nZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBwbHVnaW4oQ29kZU1pcnJvcikge1xuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcInBlcnNpc3RcIiwgZmFsc2UsIHNldHVwKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBsdWdpblxuIiwidmFyIGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuXG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuZXhwb3J0cy5pc0RhdGUgPSBmdW5jdGlvbihvYmope3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nfTtcbmV4cG9ydHMuaXNSZWdFeHAgPSBmdW5jdGlvbihvYmope3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSd9O1xuXG5cbmV4cG9ydHMucHJpbnQgPSBmdW5jdGlvbiAoKSB7fTtcbmV4cG9ydHMucHV0cyA9IGZ1bmN0aW9uICgpIHt9O1xuZXhwb3J0cy5kZWJ1ZyA9IGZ1bmN0aW9uKCkge307XG5cbmV4cG9ydHMuaW5zcGVjdCA9IGZ1bmN0aW9uKG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycykge1xuICB2YXIgc2VlbiA9IFtdO1xuXG4gIHZhciBzdHlsaXplID0gZnVuY3Rpb24oc3RyLCBzdHlsZVR5cGUpIHtcbiAgICAvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3NcbiAgICB2YXIgc3R5bGVzID1cbiAgICAgICAgeyAnYm9sZCcgOiBbMSwgMjJdLFxuICAgICAgICAgICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgICAgICAgICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICAgICAgICAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgICAgICAgICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICAgICAgICAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICAgICAgICAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAgICAgICAgICdibHVlJyA6IFszNCwgMzldLFxuICAgICAgICAgICdjeWFuJyA6IFszNiwgMzldLFxuICAgICAgICAgICdncmVlbicgOiBbMzIsIDM5XSxcbiAgICAgICAgICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgICAgICAgICAncmVkJyA6IFszMSwgMzldLFxuICAgICAgICAgICd5ZWxsb3cnIDogWzMzLCAzOV0gfTtcblxuICAgIHZhciBzdHlsZSA9XG4gICAgICAgIHsgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICAgICAgICAgJ251bWJlcic6ICdibHVlJyxcbiAgICAgICAgICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAgICAgICAgICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICAgICAgICAgJ251bGwnOiAnYm9sZCcsXG4gICAgICAgICAgJ3N0cmluZyc6ICdncmVlbicsXG4gICAgICAgICAgJ2RhdGUnOiAnbWFnZW50YScsXG4gICAgICAgICAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgICAgICAgICAncmVnZXhwJzogJ3JlZCcgfVtzdHlsZVR5cGVdO1xuXG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICByZXR1cm4gJ1xcMDMzWycgKyBzdHlsZXNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgICAnXFwwMzNbJyArIHN0eWxlc1tzdHlsZV1bMV0gKyAnbSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9O1xuICBpZiAoISBjb2xvcnMpIHtcbiAgICBzdHlsaXplID0gZnVuY3Rpb24oc3RyLCBzdHlsZVR5cGUpIHsgcmV0dXJuIHN0cjsgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gICAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAgIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUuaW5zcGVjdCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgICAgdmFsdWUgIT09IGV4cG9ydHMgJiZcbiAgICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuXG4gICAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcblxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICAgICAgcmV0dXJuIHN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG5cbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHJldHVybiBzdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcblxuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiBzdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gICAgfVxuICAgIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBzdHlsaXplKCdudWxsJywgJ251bGwnKTtcbiAgICB9XG5cbiAgICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gICAgdmFyIHZpc2libGVfa2V5cyA9IE9iamVjdF9rZXlzKHZhbHVlKTtcbiAgICB2YXIga2V5cyA9IHNob3dIaWRkZW4gPyBPYmplY3RfZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSkgOiB2aXNpYmxlX2tleXM7XG5cbiAgICAvLyBGdW5jdGlvbnMgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBzdHlsaXplKCcnICsgdmFsdWUsICdyZWdleHAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICAgIHJldHVybiBzdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEYXRlcyB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkXG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkgJiYga2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBzdHlsaXplKHZhbHVlLnRvVVRDU3RyaW5nKCksICdkYXRlJyk7XG4gICAgfVxuXG4gICAgdmFyIGJhc2UsIHR5cGUsIGJyYWNlcztcbiAgICAvLyBEZXRlcm1pbmUgdGhlIG9iamVjdCB0eXBlXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0eXBlID0gJ0FycmF5JztcbiAgICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSAnT2JqZWN0JztcbiAgICAgIGJyYWNlcyA9IFsneycsICd9J107XG4gICAgfVxuXG4gICAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIGJhc2UgPSAoaXNSZWdFeHAodmFsdWUpKSA/ICcgJyArIHZhbHVlIDogJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICBiYXNlID0gJyAnICsgdmFsdWUudG9VVENTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICAgIH1cblxuICAgIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBzdHlsaXplKCcnICsgdmFsdWUsICdyZWdleHAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2Vlbi5wdXNoKHZhbHVlKTtcblxuICAgIHZhciBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBuYW1lLCBzdHI7XG4gICAgICBpZiAodmFsdWUuX19sb29rdXBHZXR0ZXJfXykge1xuICAgICAgICBpZiAodmFsdWUuX19sb29rdXBHZXR0ZXJfXyhrZXkpKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLl9fbG9va3VwU2V0dGVyX18oa2V5KSkge1xuICAgICAgICAgICAgc3RyID0gc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyID0gc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodmFsdWUuX19sb29rdXBTZXR0ZXJfXyhrZXkpKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmlzaWJsZV9rZXlzLmluZGV4T2Yoa2V5KSA8IDApIHtcbiAgICAgICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgICAgIH1cbiAgICAgIGlmICghc3RyKSB7XG4gICAgICAgIGlmIChzZWVuLmluZGV4T2YodmFsdWVba2V5XSkgPCAwKSB7XG4gICAgICAgICAgaWYgKHJlY3Vyc2VUaW1lcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RyID0gZm9ybWF0KHZhbHVlW2tleV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSBmb3JtYXQodmFsdWVba2V5XSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSBzdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ0FycmF5JyAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgICAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgICAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgICAgICBuYW1lID0gc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICAgICAgbmFtZSA9IHN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbiAgICB9KTtcblxuICAgIHNlZW4ucG9wKCk7XG5cbiAgICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICAgIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgICAgbnVtTGluZXNFc3QrKztcbiAgICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICAgIHJldHVybiBwcmV2ICsgY3VyLmxlbmd0aCArIDE7XG4gICAgfSwgMCk7XG5cbiAgICBpZiAobGVuZ3RoID4gNTApIHtcbiAgICAgIG91dHB1dCA9IGJyYWNlc1swXSArXG4gICAgICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgIGJyYWNlc1sxXTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuICByZXR1cm4gZm9ybWF0KG9iaiwgKHR5cGVvZiBkZXB0aCA9PT0gJ3VuZGVmaW5lZCcgPyAyIDogZGVwdGgpKTtcbn07XG5cblxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gYXIgaW5zdGFuY2VvZiBBcnJheSB8fFxuICAgICAgICAgQXJyYXkuaXNBcnJheShhcikgfHxcbiAgICAgICAgIChhciAmJiBhciAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBpc0FycmF5KGFyLl9fcHJvdG9fXykpO1xufVxuXG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiByZSBpbnN0YW5jZW9mIFJlZ0V4cCB8fFxuICAgICh0eXBlb2YgcmUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nKTtcbn1cblxuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICBpZiAoZCBpbnN0YW5jZW9mIERhdGUpIHJldHVybiB0cnVlO1xuICBpZiAodHlwZW9mIGQgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm9wZXJ0aWVzID0gRGF0ZS5wcm90b3R5cGUgJiYgT2JqZWN0X2dldE93blByb3BlcnR5TmFtZXMoRGF0ZS5wcm90b3R5cGUpO1xuICB2YXIgcHJvdG8gPSBkLl9fcHJvdG9fXyAmJiBPYmplY3RfZ2V0T3duUHJvcGVydHlOYW1lcyhkLl9fcHJvdG9fXyk7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShwcm90bykgPT09IEpTT04uc3RyaW5naWZ5KHByb3BlcnRpZXMpO1xufVxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbiAobXNnKSB7fTtcblxuZXhwb3J0cy5wdW1wID0gbnVsbDtcblxudmFyIE9iamVjdF9rZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSByZXMucHVzaChrZXkpO1xuICAgIHJldHVybiByZXM7XG59O1xuXG52YXIgT2JqZWN0X2dldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgcmVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn07XG5cbnZhciBPYmplY3RfY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAocHJvdG90eXBlLCBwcm9wZXJ0aWVzKSB7XG4gICAgLy8gZnJvbSBlczUtc2hpbVxuICAgIHZhciBvYmplY3Q7XG4gICAgaWYgKHByb3RvdHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBvYmplY3QgPSB7ICdfX3Byb3RvX18nIDogbnVsbCB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm90b3R5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgICd0eXBlb2YgcHJvdG90eXBlWycgKyAodHlwZW9mIHByb3RvdHlwZSkgKyAnXSAhPSBcXCdvYmplY3RcXCcnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBUeXBlID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIFR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICAgICAgICBvYmplY3QgPSBuZXcgVHlwZSgpO1xuICAgICAgICBvYmplY3QuX19wcm90b19fID0gcHJvdG90eXBlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHByb3BlcnRpZXMgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iamVjdCwgcHJvcGVydGllcyk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG59O1xuXG5leHBvcnRzLmluaGVyaXRzID0gZnVuY3Rpb24oY3Rvciwgc3VwZXJDdG9yKSB7XG4gIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yO1xuICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdF9jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogY3RvcixcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKHR5cGVvZiBmICE9PSAnc3RyaW5nJykge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChleHBvcnRzLmluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOiByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvcih2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pe1xuICAgIGlmICh4ID09PSBudWxsIHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0Jykge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBleHBvcnRzLmluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuIiwidmFyIF9uc18gPSB7XG4gIFwiaWRcIjogXCJpbnRlcmFjdGl2YXRlLXdpc3AuaG9zdFwiXG59O1xudmFyIHJlbmRlciA9IHJlcXVpcmUoXCJpbnRlcmFjdGl2YXRlL3JlbmRlclwiKTs7XG52YXIgd2lzcF9yZWFkZXIgPSByZXF1aXJlKFwid2lzcC9yZWFkZXJcIik7XG52YXIgcmVhZF8gPSB3aXNwX3JlYWRlci5yZWFkXzs7XG52YXIgd2lzcF9jb21waWxlciA9IHJlcXVpcmUoXCJ3aXNwL2NvbXBpbGVyXCIpO1xudmFyIGNvbXBpbGVfID0gd2lzcF9jb21waWxlci5jb21waWxlXzs7XG52YXIgd2lzcF9zZXF1ZW5jZSA9IHJlcXVpcmUoXCJ3aXNwL3NlcXVlbmNlXCIpO1xudmFyIGZpcnN0ID0gd2lzcF9zZXF1ZW5jZS5maXJzdDtcbnZhciByZXN0ID0gd2lzcF9zZXF1ZW5jZS5yZXN0O1xudmFyIGxpc3QgPSB3aXNwX3NlcXVlbmNlLmxpc3Q7O1xudmFyIHdpc3BfYXN0ID0gcmVxdWlyZShcIndpc3AvYXN0XCIpO1xudmFyIHN5bWJvbCA9IHdpc3BfYXN0LnN5bWJvbDtcbnZhciBwclN0ciA9IHdpc3BfYXN0LnByU3RyOztcbnZhciB3aXNwX3J1bnRpbWUgPSByZXF1aXJlKFwid2lzcC9ydW50aW1lXCIpO1xudmFyIHN1YnMgPSB3aXNwX3J1bnRpbWUuc3Viczs7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xudmFyIGluc3BlY3QgPSB1dGlsLmluc3BlY3Q7OztcblxudmFyIF9fb3V0X18gPSBmdW5jdGlvbiBfX291dF9fKCkge1xuICByZXR1cm4gdm9pZCgwKTtcbn07XG5leHBvcnRzLl9fb3V0X18gPSBfX291dF9fO1xuXG53aW5kb3cuZXhwb3J0cyA9IHt9O1xuXG53aW5kb3cubW9kdWxlID0ge1xuICBcImV4cG9ydHNcIjogd2luZG93LmV4cG9ydHNcbn07XG5cbndpbmRvdy5saXN0ID0gbGlzdDtcblxud2luZG93LnN5bWJvbCA9IHN5bWJvbDtcblxud2luZG93Lk91dCA9IF9fb3V0X187XG5cbndpbmRvdy5fX3ByaW50Q29tcGlsZWRfXyA9IGZhbHNlO1xuXG53aW5kb3cuX19wcmludFJlYWRfXyA9IGZhbHNlO1xuXG52YXIgRXZhbHVhdGlvblJlc3VsdCA9IGZ1bmN0aW9uIEV2YWx1YXRpb25SZXN1bHQob3V0cHV0KSB7XG4gIHRoaXMudmFsdWUgPSBvdXRwdXQ7XG4gIHJldHVybiB0aGlzO1xufTtcbmV4cG9ydHMuRXZhbHVhdGlvblJlc3VsdCA9IEV2YWx1YXRpb25SZXN1bHQ7XG5cbnJlbmRlci5kZWZpbmUoRXZhbHVhdGlvblJlc3VsdCwgZnVuY3Rpb24ocmVzdWx0KSB7XG4gIHZhciBvdXRwdXQgPSByZXN1bHQudmFsdWU7XG4gIHZhciB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByZVwiKTtcbiAgdmlldy5pbm5lckhUTUwgPSAoKG91dHB1dCB8fCAwKVtcImVycm9yXCJdKSB8fCAoXCJcIiArIChfX3ByaW50UmVhZF9fID9cbiAgICBcIlwiICsgXCI8aDE+UmVhZDwvaDE+XCIgKyBcIjxkaXY+XCIgKyAoaW5zcGVjdCgob3V0cHV0IHx8IDApW1wiZm9ybXNcIl0pKSArIFwiPC9kaXY+XCIgOlxuICAgIFwiXCIpICsgKF9fcHJpbnRDb21waWxlZF9fID9cbiAgICBcIlwiICsgXCI8aDM+Q29tcGlsZWQgSlM8L2gzPlwiICsgXCI8ZGl2PlwiICsgKChvdXRwdXQgfHwgMClbXCJqcy1jb2RlXCJdKSArIFwiPC9kaXY+XCIgOlxuICAgIFwiXCIpICsgXCI8aDM+RXZhbCByZXN1bHQ8L2gzPlwiICsgXCI8ZGl2PlwiICsgKChvdXRwdXQgfHwgMClbXCJwcmludFwiXSkgKyBcIjwvZGl2PlwiKTtcbiAgcmV0dXJuIHZpZXc7XG59KTtcblxudmFyIHNlbmQgPSBmdW5jdGlvbiBzZW5kKHBhY2tldCkge1xuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICBldmVudC5pbml0Q3VzdG9tRXZlbnQoXCJjbGllbnRcIiwgZmFsc2UsIHRydWUsIHBhY2tldCk7XG4gIHJldHVybiB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuZXhwb3J0cy5zZW5kID0gc2VuZDtcblxudmFyIHN0YXJ0SG9zdCA9IGZ1bmN0aW9uIHN0YXJ0SG9zdCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2VydmVyXCIsIGhhbmRsZSwgZmFsc2UpO1xufTtcbmV4cG9ydHMuc3RhcnRIb3N0ID0gc3RhcnRIb3N0O1xuXG52YXIgaGFuZGxlID0gZnVuY3Rpb24gaGFuZGxlKHBhY2tldCkge1xuICB2YXIgYWRkcmVzcyA9ICgoKHBhY2tldCB8fCAwKVtcImRldGFpbFwiXSkgfHwgMClbXCJ0b1wiXTtcbiAgdmFyIGlucHV0ID0gKCgocGFja2V0IHx8IDApW1wiZGV0YWlsXCJdKSB8fCAwKVtcInNvdXJjZVwiXTtcbiAgdmFyIG91dHB1dCA9IGV2YWx1YXRlKGlucHV0KTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBFdmFsdWF0aW9uUmVzdWx0KG91dHB1dCk7XG4gIChfX291dF9fIHx8IDApW2FkZHJlc3NdID0gcmVzdWx0O1xuICByZXR1cm4gc2VuZCh7XG4gICAgXCJmcm9tXCI6IGFkZHJlc3MsXG4gICAgXCJtZXNzYWdlXCI6IHJlc3VsdFxuICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZSA9IGhhbmRsZTtcblxudmFyIGV2YWx1YXRlID0gZnVuY3Rpb24gZXZhbHVhdGUoaW5wdXQpIHtcbiAgcmV0dXJuIChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZvcm1zID0gcmVhZF8oaW5wdXQpO1xuICAgICAgdmFyIGpzQ29kZSA9IGNvbXBpbGVfKGZvcm1zKTtcbiAgICAgIHZhciBwcmVmaXhDb2RlID0gXCJ2YXJcIiA9PT0gc3Vicyhqc0NvZGUsIDAsIDMpID9cbiAgICAgICAgXCJcIiA6XG4gICAgICAgIFwiXyA9IFwiO1xuICAgICAgdmFyIGpzTm9ybWFsaXplZCA9IFwiXCIgKyBcInRyeSB7IFwiICsgcHJlZml4Q29kZSArIGpzQ29kZSArIFwiIH0gY2F0Y2goZSkgeyBlIH1cIjtcbiAgICAgIHZhciByZXN1bHQgPSB3aW5kb3cuZXZhbChqc05vcm1hbGl6ZWQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJpbnB1dFwiOiBpbnB1dCxcbiAgICAgICAgXCJmb3Jtc1wiOiBmb3JtcyxcbiAgICAgICAgXCJqcy1jb2RlXCI6IGpzQ29kZSxcbiAgICAgICAgXCJyZXN1bHRcIjogcmVzdWx0LFxuICAgICAgICBcInByaW50XCI6IHByU3RyKHJlc3VsdClcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJpbnB1dFwiOiBpbnB1dCxcbiAgICAgIFwiZXJyb3JcIjogZXJyb3JcbiAgICB9O1xuICB9fSkoKTtcbn07XG5leHBvcnRzLmV2YWx1YXRlID0gZXZhbHVhdGUiLCJ2YXIgX25zXyA9IHtcbiAgXCJpZFwiOiBcIndpc3AuYmFja2VuZC5qYXZhc2NyaXB0LndyaXRlclwiLFxuICBcImRvY1wiOiBcIkNvbXBpbGVyIGJhY2tlbmQgZm9yIGZvciB3cml0aW5nIEpTIG91dHB1dFwiXG59O1xudmFyIHdpc3BfYXN0ID0gcmVxdWlyZShcIi4vLi4vLi4vYXN0XCIpO1xudmFyIG5hbWUgPSB3aXNwX2FzdC5uYW1lO1xudmFyIG5hbWVzcGFjZSA9IHdpc3BfYXN0Lm5hbWVzcGFjZTtcbnZhciBzeW1ib2wgPSB3aXNwX2FzdC5zeW1ib2w7XG52YXIgaXNTeW1ib2wgPSB3aXNwX2FzdC5pc1N5bWJvbDtcbnZhciBpc0tleXdvcmQgPSB3aXNwX2FzdC5pc0tleXdvcmQ7O1xudmFyIHdpc3Bfc2VxdWVuY2UgPSByZXF1aXJlKFwiLi8uLi8uLi9zZXF1ZW5jZVwiKTtcbnZhciBsaXN0ID0gd2lzcF9zZXF1ZW5jZS5saXN0O1xudmFyIGZpcnN0ID0gd2lzcF9zZXF1ZW5jZS5maXJzdDtcbnZhciByZXN0ID0gd2lzcF9zZXF1ZW5jZS5yZXN0O1xudmFyIGlzTGlzdCA9IHdpc3Bfc2VxdWVuY2UuaXNMaXN0O1xudmFyIHZlYyA9IHdpc3Bfc2VxdWVuY2UudmVjO1xudmFyIG1hcCA9IHdpc3Bfc2VxdWVuY2UubWFwO1xudmFyIGNvdW50ID0gd2lzcF9zZXF1ZW5jZS5jb3VudDtcbnZhciBsYXN0ID0gd2lzcF9zZXF1ZW5jZS5sYXN0O1xudmFyIHJlZHVjZSA9IHdpc3Bfc2VxdWVuY2UucmVkdWNlO1xudmFyIGlzRW1wdHkgPSB3aXNwX3NlcXVlbmNlLmlzRW1wdHk7O1xudmFyIHdpc3BfcnVudGltZSA9IHJlcXVpcmUoXCIuLy4uLy4uL3J1bnRpbWVcIik7XG52YXIgaXNUcnVlID0gd2lzcF9ydW50aW1lLmlzVHJ1ZTtcbnZhciBpc05pbCA9IHdpc3BfcnVudGltZS5pc05pbDtcbnZhciBpc1N0cmluZyA9IHdpc3BfcnVudGltZS5pc1N0cmluZztcbnZhciBpc051bWJlciA9IHdpc3BfcnVudGltZS5pc051bWJlcjtcbnZhciBpc1ZlY3RvciA9IHdpc3BfcnVudGltZS5pc1ZlY3RvcjtcbnZhciBpc0RpY3Rpb25hcnkgPSB3aXNwX3J1bnRpbWUuaXNEaWN0aW9uYXJ5O1xudmFyIGlzQm9vbGVhbiA9IHdpc3BfcnVudGltZS5pc0Jvb2xlYW47XG52YXIgaXNSZVBhdHRlcm4gPSB3aXNwX3J1bnRpbWUuaXNSZVBhdHRlcm47XG52YXIgcmVGaW5kID0gd2lzcF9ydW50aW1lLnJlRmluZDtcbnZhciBkZWMgPSB3aXNwX3J1bnRpbWUuZGVjO1xudmFyIHN1YnMgPSB3aXNwX3J1bnRpbWUuc3Viczs7XG52YXIgd2lzcF9zdHJpbmcgPSByZXF1aXJlKFwiLi8uLi8uLi9zdHJpbmdcIik7XG52YXIgcmVwbGFjZSA9IHdpc3Bfc3RyaW5nLnJlcGxhY2U7XG52YXIgam9pbiA9IHdpc3Bfc3RyaW5nLmpvaW47XG52YXIgc3BsaXQgPSB3aXNwX3N0cmluZy5zcGxpdDtcbnZhciB1cHBlckNhc2UgPSB3aXNwX3N0cmluZy51cHBlckNhc2U7OztcblxudmFyIHdyaXRlUmVmZXJlbmNlID0gZnVuY3Rpb24gd3JpdGVSZWZlcmVuY2UoZm9ybSkge1xuICBcIlRyYW5zbGF0ZXMgcmVmZXJlbmNlcyBmcm9tIGNsb2p1cmUgY29udmVudGlvbiB0byBKUzpcXG5cXG4gICoqbWFjcm9zKiogICAgICBfX21hY3Jvc19fXFxuICBsaXN0LT52ZWN0b3IgICAgbGlzdFRvVmVjdG9yXFxuICBzZXQhICAgICAgICAgICAgc2V0XFxuICBmb29fYmFyICAgICAgICAgZm9vX2JhclxcbiAgbnVtYmVyPyAgICAgICAgIGlzTnVtYmVyXFxuICBjcmVhdGUtc2VydmVyICAgY3JlYXRlU2VydmVyXCI7XG4gIHJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkID0gbmFtZShmb3JtKTtcbiAgICBpZCA9IGlkID09PSBcIipcIiA/XG4gICAgICBcIm11bHRpcGx5XCIgOlxuICAgIGlkID09PSBcIi9cIiA/XG4gICAgICBcImRpdmlkZVwiIDpcbiAgICBpZCA9PT0gXCIrXCIgP1xuICAgICAgXCJzdW1cIiA6XG4gICAgaWQgPT09IFwiLVwiID9cbiAgICAgIFwic3VidHJhY3RcIiA6XG4gICAgaWQgPT09IFwiPVwiID9cbiAgICAgIFwiZXF1YWw/XCIgOlxuICAgIGlkID09PSBcIj09XCIgP1xuICAgICAgXCJzdHJpY3QtZXF1YWw/XCIgOlxuICAgIGlkID09PSBcIjw9XCIgP1xuICAgICAgXCJub3QtZ3JlYXRlci10aGFuXCIgOlxuICAgIGlkID09PSBcIj49XCIgP1xuICAgICAgXCJub3QtbGVzcy10aGFuXCIgOlxuICAgIGlkID09PSBcIj5cIiA/XG4gICAgICBcImdyZWF0ZXItdGhhblwiIDpcbiAgICBpZCA9PT0gXCI8XCIgP1xuICAgICAgXCJsZXNzLXRoYW5cIiA6XG4gICAgXCJlbHNlXCIgP1xuICAgICAgaWQgOlxuICAgICAgdm9pZCgwKTtcbiAgICBpZCA9IGpvaW4oXCJfXCIsIHNwbGl0KGlkLCBcIipcIikpO1xuICAgIGlkID0gam9pbihcIi10by1cIiwgc3BsaXQoaWQsIFwiLT5cIikpO1xuICAgIGlkID0gam9pbihzcGxpdChpZCwgXCIhXCIpKTtcbiAgICBpZCA9IGpvaW4oXCIkXCIsIHNwbGl0KGlkLCBcIiVcIikpO1xuICAgIGlkID0gam9pbihcIi1wbHVzLVwiLCBzcGxpdChpZCwgXCIrXCIpKTtcbiAgICBpZCA9IGpvaW4oXCItYW5kLVwiLCBzcGxpdChpZCwgXCImXCIpKTtcbiAgICBpZCA9IGxhc3QoaWQpID09PSBcIj9cIiA/XG4gICAgICBcIlwiICsgXCJpcy1cIiArIChzdWJzKGlkLCAwLCBkZWMoY291bnQoaWQpKSkpIDpcbiAgICAgIGlkO1xuICAgIGlkID0gcmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwga2V5KSB7XG4gICAgICByZXR1cm4gXCJcIiArIHJlc3VsdCArICgoIShpc0VtcHR5KHJlc3VsdCkpKSAmJiAoIShpc0VtcHR5KGtleSkpKSA/XG4gICAgICAgIFwiXCIgKyAodXBwZXJDYXNlKChrZXkgfHwgMClbMF0pKSArIChzdWJzKGtleSwgMSkpIDpcbiAgICAgICAga2V5KTtcbiAgICB9LCBcIlwiLCBzcGxpdChpZCwgXCItXCIpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH0pKCk7XG59O1xuZXhwb3J0cy53cml0ZVJlZmVyZW5jZSA9IHdyaXRlUmVmZXJlbmNlO1xuXG52YXIgd3JpdGVLZXl3b3JkUmVmZXJlbmNlID0gZnVuY3Rpb24gd3JpdGVLZXl3b3JkUmVmZXJlbmNlKGZvcm0pIHtcbiAgcmV0dXJuIFwiXCIgKyBcIlxcXCJcIiArIChuYW1lKGZvcm0pKSArIFwiXFxcIlwiO1xufTtcbmV4cG9ydHMud3JpdGVLZXl3b3JkUmVmZXJlbmNlID0gd3JpdGVLZXl3b3JkUmVmZXJlbmNlO1xuXG52YXIgd3JpdGVLZXl3b3JkID0gZnVuY3Rpb24gd3JpdGVLZXl3b3JkKGZvcm0pIHtcbiAgcmV0dXJuIFwiXCIgKyBcIlxcXCJcIiArIFwi6p6JXCIgKyAobmFtZShmb3JtKSkgKyBcIlxcXCJcIjtcbn07XG5leHBvcnRzLndyaXRlS2V5d29yZCA9IHdyaXRlS2V5d29yZDtcblxudmFyIHdyaXRlU3ltYm9sID0gZnVuY3Rpb24gd3JpdGVTeW1ib2woZm9ybSkge1xuICByZXR1cm4gd3JpdGUobGlzdChzeW1ib2wodm9pZCgwKSwgXCJzeW1ib2xcIiksIG5hbWVzcGFjZShmb3JtKSwgbmFtZShmb3JtKSkpO1xufTtcbmV4cG9ydHMud3JpdGVTeW1ib2wgPSB3cml0ZVN5bWJvbDtcblxudmFyIHdyaXRlTmlsID0gZnVuY3Rpb24gd3JpdGVOaWwoZm9ybSkge1xuICByZXR1cm4gXCJ2b2lkKDApXCI7XG59O1xuZXhwb3J0cy53cml0ZU5pbCA9IHdyaXRlTmlsO1xuXG52YXIgd3JpdGVOdW1iZXIgPSBmdW5jdGlvbiB3cml0ZU51bWJlcihmb3JtKSB7XG4gIHJldHVybiBmb3JtO1xufTtcbmV4cG9ydHMud3JpdGVOdW1iZXIgPSB3cml0ZU51bWJlcjtcblxudmFyIHdyaXRlQm9vbGVhbiA9IGZ1bmN0aW9uIHdyaXRlQm9vbGVhbihmb3JtKSB7XG4gIHJldHVybiBpc1RydWUoZm9ybSkgP1xuICAgIFwidHJ1ZVwiIDpcbiAgICBcImZhbHNlXCI7XG59O1xuZXhwb3J0cy53cml0ZUJvb2xlYW4gPSB3cml0ZUJvb2xlYW47XG5cbnZhciB3cml0ZVN0cmluZyA9IGZ1bmN0aW9uIHdyaXRlU3RyaW5nKGZvcm0pIHtcbiAgZm9ybSA9IHJlcGxhY2UoZm9ybSwgUmVnRXhwKFwiXFxcXFxcXFxcIiwgXCJnXCIpLCBcIlxcXFxcXFxcXCIpO1xuICBmb3JtID0gcmVwbGFjZShmb3JtLCBSZWdFeHAoXCJcXG5cIiwgXCJnXCIpLCBcIlxcXFxuXCIpO1xuICBmb3JtID0gcmVwbGFjZShmb3JtLCBSZWdFeHAoXCJcXHJcIiwgXCJnXCIpLCBcIlxcXFxyXCIpO1xuICBmb3JtID0gcmVwbGFjZShmb3JtLCBSZWdFeHAoXCJcXHRcIiwgXCJnXCIpLCBcIlxcXFx0XCIpO1xuICBmb3JtID0gcmVwbGFjZShmb3JtLCBSZWdFeHAoXCJcXFwiXCIsIFwiZ1wiKSwgXCJcXFxcXFxcIlwiKTtcbiAgcmV0dXJuIFwiXCIgKyBcIlxcXCJcIiArIGZvcm0gKyBcIlxcXCJcIjtcbn07XG5leHBvcnRzLndyaXRlU3RyaW5nID0gd3JpdGVTdHJpbmc7XG5cbnZhciB3cml0ZVRlbXBsYXRlID0gZnVuY3Rpb24gd3JpdGVUZW1wbGF0ZSgpIHtcbiAgdmFyIGZvcm0gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmRlbnRQYXR0ZXJuID0gL1xcbiAqJC87XG4gICAgdmFyIGxpbmVCcmVha1BhdHRlciA9IFJlZ0V4cChcIlxcblwiLCBcImdcIik7XG4gICAgdmFyIGdldEluZGVudGF0aW9uID0gZnVuY3Rpb24oY29kZSkge1xuICAgICAgcmV0dXJuIChyZUZpbmQoaW5kZW50UGF0dGVybiwgY29kZSkpIHx8IFwiXFxuXCI7XG4gICAgfTtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoY29kZSwgcGFydHMsIHZhbHVlcykge1xuICAgICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICByZWN1ciA9IGNvdW50KHBhcnRzKSA+IDEgP1xuICAgICAgICAoY29kZSA9IFwiXCIgKyBjb2RlICsgKGZpcnN0KHBhcnRzKSkgKyAocmVwbGFjZShcIlwiICsgXCJcIiArIChmaXJzdCh2YWx1ZXMpKSwgbGluZUJyZWFrUGF0dGVyLCBnZXRJbmRlbnRhdGlvbihmaXJzdChwYXJ0cykpKSksIHBhcnRzID0gcmVzdChwYXJ0cyksIHZhbHVlcyA9IHJlc3QodmFsdWVzKSwgbG9vcCkgOlxuICAgICAgICBcIlwiICsgY29kZSArIChmaXJzdChwYXJ0cykpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiByZWN1cjtcbiAgICB9KShcIlwiLCBzcGxpdChmaXJzdChmb3JtKSwgXCJ+e31cIiksIHJlc3QoZm9ybSkpO1xuICB9KSgpO1xufTtcbmV4cG9ydHMud3JpdGVUZW1wbGF0ZSA9IHdyaXRlVGVtcGxhdGU7XG5cbnZhciB3cml0ZUdyb3VwID0gZnVuY3Rpb24gd3JpdGVHcm91cCgpIHtcbiAgdmFyIGZvcm1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGpvaW4oXCIsIFwiLCBmb3Jtcyk7XG59O1xuZXhwb3J0cy53cml0ZUdyb3VwID0gd3JpdGVHcm91cDtcblxudmFyIHdyaXRlSW52b2tlID0gZnVuY3Rpb24gd3JpdGVJbnZva2UoY2FsbGVlKSB7XG4gIHZhciBwYXJhbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gd3JpdGVUZW1wbGF0ZShcIn57fSh+e30pXCIsIGNhbGxlZSwgd3JpdGVHcm91cC5hcHBseSh3cml0ZUdyb3VwLCBwYXJhbXMpKTtcbn07XG5leHBvcnRzLndyaXRlSW52b2tlID0gd3JpdGVJbnZva2U7XG5cbnZhciB3cml0ZUVycm9yID0gZnVuY3Rpb24gd3JpdGVFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uKCkgeyB0aHJvdyBFcnJvcihtZXNzYWdlKTsgfSkoKTtcbiAgfTtcbn07XG5leHBvcnRzLndyaXRlRXJyb3IgPSB3cml0ZUVycm9yO1xuXG52YXIgd3JpdGVWZWN0b3IgPSB3cml0ZUVycm9yKFwiVmVjdG9ycyBhcmUgbm90IHN1cHBvcnRlZFwiKTtcbmV4cG9ydHMud3JpdGVWZWN0b3IgPSB3cml0ZVZlY3RvcjtcblxudmFyIHdyaXRlRGljdGlvbmFyeSA9IHdyaXRlRXJyb3IoXCJEaWN0aW9uYXJpZXMgYXJlIG5vdCBzdXBwb3J0ZWRcIik7XG5leHBvcnRzLndyaXRlRGljdGlvbmFyeSA9IHdyaXRlRGljdGlvbmFyeTtcblxudmFyIHdyaXRlUGF0dGVybiA9IHdyaXRlRXJyb3IoXCJSZWd1bGFyIGV4cHJlc3Npb25zIGFyZSBub3Qgc3VwcG9ydGVkXCIpO1xuZXhwb3J0cy53cml0ZVBhdHRlcm4gPSB3cml0ZVBhdHRlcm47XG5cbnZhciBjb21waWxlQ29tbWVudCA9IGZ1bmN0aW9uIGNvbXBpbGVDb21tZW50KGZvcm0pIHtcbiAgcmV0dXJuIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiLy9+e31cXG5cIiwgZmlyc3QoZm9ybSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVDb21tZW50ID0gY29tcGlsZUNvbW1lbnQ7XG5cbnZhciB3cml0ZURlZiA9IGZ1bmN0aW9uIHdyaXRlRGVmKGZvcm0pIHtcbiAgdmFyIGlkID0gZmlyc3QoZm9ybSk7XG4gIHZhciBpc0V4cG9ydCA9ICgoKChtZXRhKGZvcm0pKSB8fCB7fSkgfHwgMClbXCJ0b3BcIl0pICYmICghKCgoKG1ldGEoaWQpKSB8fCB7fSkgfHwgMClbXCJwcml2YXRlXCJdKSk7XG4gIHZhciBhdHRyaWJ1dGUgPSBzeW1ib2wobmFtZXNwYWNlKGlkKSwgXCJcIiArIFwiLVwiICsgKG5hbWUoaWQpKSk7XG4gIHJldHVybiBpc0V4cG9ydCA/XG4gICAgY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ2YXIgfnt9O1xcbn57fVwiLCBjb21waWxlKGNvbnMoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgZm9ybSkpLCBjb21waWxlKGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCIuXCIpLCBzeW1ib2wodm9pZCgwKSwgXCJleHBvcnRzXCIpLCBhdHRyaWJ1dGUpLCBpZCkpKSkgOlxuICAgIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwidmFyIH57fVwiLCBjb21waWxlKGNvbnMoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgZm9ybSkpKSk7XG59O1xuZXhwb3J0cy53cml0ZURlZiA9IHdyaXRlRGVmO1xuXG52YXIgd3JpdGUgPSBmdW5jdGlvbiB3cml0ZShmb3JtKSB7XG4gIHJldHVybiBpc05pbChmb3JtKSA/XG4gICAgd3JpdGVOaWwoZm9ybSkgOlxuICBpc1N5bWJvbChmb3JtKSA/XG4gICAgd3JpdGVSZWZlcmVuY2UoZm9ybSkgOlxuICBpc0tleXdvcmQoZm9ybSkgP1xuICAgIHdyaXRlS2V5d29yZFJlZmVyZW5jZShmb3JtKSA6XG4gIGlzU3RyaW5nKGZvcm0pID9cbiAgICB3cml0ZVN0cmluZyhmb3JtKSA6XG4gIGlzTnVtYmVyKGZvcm0pID9cbiAgICB3cml0ZU51bWJlcihmb3JtKSA6XG4gIGlzQm9vbGVhbihmb3JtKSA/XG4gICAgd3JpdGVCb29sZWFuKGZvcm0pIDpcbiAgaXNSZVBhdHRlcm4oZm9ybSkgP1xuICAgIHdyaXRlUGF0dGVybihmb3JtKSA6XG4gIGlzVmVjdG9yKGZvcm0pID9cbiAgICB3cml0ZVZlY3Rvcihmb3JtKSA6XG4gIGlzRGljdGlvbmFyeShmb3JtKSA/XG4gICAgd3JpdGVEaWN0aW9uYXJ5KCkgOlxuICBpc0xpc3QoZm9ybSkgP1xuICAgIHdyaXRlSW52b2tlLmFwcGx5KHdyaXRlSW52b2tlLCBtYXAod3JpdGUsIHZlYyhmb3JtKSkpIDpcbiAgXCJlbHNlXCIgP1xuICAgIHdyaXRlRXJyb3IoXCJVbnN1cHBvcnRlZCBmb3JtXCIpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMud3JpdGUgPSB3cml0ZSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoZXYuc291cmNlID09PSB3aW5kb3cgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIiwiKGZ1bmN0aW9uKHByb2Nlc3Mpe2lmICghcHJvY2Vzcy5FdmVudEVtaXR0ZXIpIHByb2Nlc3MuRXZlbnRFbWl0dGVyID0gZnVuY3Rpb24gKCkge307XG5cbnZhciBFdmVudEVtaXR0ZXIgPSBleHBvcnRzLkV2ZW50RW1pdHRlciA9IHByb2Nlc3MuRXZlbnRFbWl0dGVyO1xudmFyIGlzQXJyYXkgPSB0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gQXJyYXkuaXNBcnJheVxuICAgIDogZnVuY3Rpb24gKHhzKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgfVxuO1xuZnVuY3Rpb24gaW5kZXhPZiAoeHMsIHgpIHtcbiAgICBpZiAoeHMuaW5kZXhPZikgcmV0dXJuIHhzLmluZGV4T2YoeCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoeCA9PT0geHNbaV0pIHJldHVybiBpO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW5cbi8vIDEwIGxpc3RlbmVycyBhcmUgYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaFxuLy8gaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG4vL1xuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCF0aGlzLl9ldmVudHMpIHRoaXMuX2V2ZW50cyA9IHt9O1xuICB0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzID0gbjtcbn07XG5cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNBcnJheSh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSlcbiAgICB7XG4gICAgICBpZiAoYXJndW1lbnRzWzFdIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgYXJndW1lbnRzWzFdOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5jYXVnaHQsIHVuc3BlY2lmaWVkICdlcnJvcicgZXZlbnQuXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdGhpcy5fZXZlbnRzKSByZXR1cm4gZmFsc2U7XG4gIHZhciBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBpZiAoIWhhbmRsZXIpIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoaXNBcnJheShoYW5kbGVyKSkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG4vLyBFdmVudEVtaXR0ZXIgaXMgZGVmaW5lZCBpbiBzcmMvbm9kZV9ldmVudHMuY2Ncbi8vIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCgpIGlzIGFsc28gZGVmaW5lZCB0aGVyZS5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGxpc3RlbmVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdhZGRMaXN0ZW5lciBvbmx5IHRha2VzIGluc3RhbmNlcyBvZiBGdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT0gXCJuZXdMaXN0ZW5lcnNcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJzXCIuXG4gIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuX2V2ZW50c1t0eXBlXSkpIHtcblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgICB2YXIgbTtcbiAgICAgIGlmICh0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbSA9IHRoaXMuX2V2ZW50cy5tYXhMaXN0ZW5lcnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtID0gZGVmYXVsdE1heExpc3RlbmVycztcbiAgICAgIH1cblxuICAgICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYub24odHlwZSwgZnVuY3Rpb24gZygpIHtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICgnZnVuY3Rpb24nICE9PSB0eXBlb2YgbGlzdGVuZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlbW92ZUxpc3RlbmVyIG9ubHkgdGFrZXMgaW5zdGFuY2VzIG9mIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBkb2VzIG5vdCB1c2UgbGlzdGVuZXJzKCksIHNvIG5vIHNpZGUgZWZmZWN0IG9mIGNyZWF0aW5nIF9ldmVudHNbdHlwZV1cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSkgcmV0dXJuIHRoaXM7XG5cbiAgdmFyIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzQXJyYXkobGlzdCkpIHtcbiAgICB2YXIgaSA9IGluZGV4T2YobGlzdCwgbGlzdGVuZXIpO1xuICAgIGlmIChpIDwgMCkgcmV0dXJuIHRoaXM7XG4gICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgaWYgKGxpc3QubGVuZ3RoID09IDApXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICB9IGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSA9PT0gbGlzdGVuZXIpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGRvZXMgbm90IHVzZSBsaXN0ZW5lcnMoKSwgc28gbm8gc2lkZSBlZmZlY3Qgb2YgY3JlYXRpbmcgX2V2ZW50c1t0eXBlXVxuICBpZiAodHlwZSAmJiB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzW3R5cGVdKSB0aGlzLl9ldmVudHNbdHlwZV0gPSBudWxsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAoIXRoaXMuX2V2ZW50cykgdGhpcy5fZXZlbnRzID0ge307XG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKSB0aGlzLl9ldmVudHNbdHlwZV0gPSBbXTtcbiAgaWYgKCFpc0FycmF5KHRoaXMuX2V2ZW50c1t0eXBlXSkpIHtcbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgfVxuICByZXR1cm4gdGhpcy5fZXZlbnRzW3R5cGVdO1xufTtcblxufSkocmVxdWlyZShcIl9fYnJvd3NlcmlmeV9wcm9jZXNzXCIpKSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGlmZiA9IHJlcXVpcmUoXCJkaWZmcGF0Y2hlci9kaWZmXCIpXG52YXIgcGF0Y2ggPSByZXF1aXJlKFwiZGlmZnBhdGNoZXIvcGF0Y2hcIilcbnZhciBvdXRwdXQgPSByZXF1aXJlKFwiLi9vdXRwdXRcIilcbnZhciBtYWtlT3V0cHV0ID0gb3V0cHV0Lm1ha2VPdXRwdXRcbnZhciB3cml0ZU91dHB1dCA9IG91dHB1dC53cml0ZVxuXG5cbnZhciBPdXQgPSBcIm91dEBpbnRlcmFjdGl2YXRlXCJcbnZhciBJbiA9IFwiaW5AaW50ZXJhY3RpdmF0ZVwiXG52YXIgUmVjaWV2ZXIgPSBcInJlY2VpdmVyQGludGVyYWN0aXZhdGVcIlxuXG5mdW5jdGlvbiBtYWtlT3B0aW9uR2V0dGVyKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE9wdGlvbihlZGl0b3IpIHtcbiAgICByZXR1cm4gZWRpdG9yLmdldE9wdGlvbihuYW1lKVxuICB9XG59XG5cbnZhciBnZXRSZW5kZXJSYXRlID0gbWFrZU9wdGlvbkdldHRlcihcImludGVyYWN0aXZlU3BlZWRcIilcbnZhciBnZXRTZWN0aW9uU2VwYXJhdG9yID0gbWFrZU9wdGlvbkdldHRlcihcImludGVyYWN0aXZlU2VwYXJhdG9yXCIpXG5cblxudmFyIHNsaWNlciA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuZnVuY3Rpb24gdGhyb3R0bGUoZiwgZGVsYXkpIHtcbiAgLyoqXG4gIENyZWF0ZXMgZnVuY3Rpb24gdGhhdCBjYWxscyB0aHJvdHRsZXMgY2FsbHMgdG8gZ2l2ZW4gYGZgIHN1Y2ggdGhhdCxcbiAgaXQncyBvbmx5IGNhbGxlZCBpZiBubyBmdXJ0aGVyIGNhbGxzIGFyZSBtYWRlIHdpdGggaW4gdGhlIHRpbWVcbiAgZnJhbWUgKGluIG1pbGlzZWNvbmRzKSByZXR1cm5lZCBieSBnaXZlbiBgZGVsYXkuYXBwbHkodGhpcywgYXJndW1lbnRzKWBcbiAgZnVuY3Rpb24uXG4gICoqL1xuICB2YXIgaWQgPSAwXG4gIHJldHVybiBmdW5jdGlvbiB0aHJvdHRsZWQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkLCB0aHJvdHRsZWQpXG4gICAgdmFyIG1zID0gZGVsYXkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgaWQgPSBzZXRUaW1lb3V0LmFwcGx5KHRoaXMsIFtmLCBtc10uY29uY2F0KHNsaWNlci5jYWxsKGFyZ3VtZW50cykpKVxuICB9XG59XG5cblxuXG5mdW5jdGlvbiBjYWxjdWxhdGUoZWRpdG9yKSB7XG4gIHZhciBzdGF0ZSA9IGVkaXRvcltJbl1cbiAgdmFyIGlucHV0ID0gZWRpdG9yLmdldFZhbHVlKClcbiAgdmFyIHNlcGFyYXRvciA9IGdldFNlY3Rpb25TZXBhcmF0b3IoZWRpdG9yKVxuICB2YXIgc2VjdGlvbnMgPSBpbnB1dC5zcGxpdChzZXBhcmF0b3IpXG4gIHZhciBhY3RpdmVMaW5lID0gZWRpdG9yLmdldEN1cnNvcigpLmxpbmVcblxuICBzZWN0aW9ucy5wb3AoKSAvLyBsYXN0IHNlY3Rpb24gZG9lcyBub3QgaGFzIGV4ZWN1dGlvbiBtYXJrZXIgc28gc2tpcCBpdC5cblxuICB2YXIgY2hhbmdlID0gT2JqZWN0LmtleXMoc2VjdGlvbnMpLnJlZHVjZShmdW5jdGlvbihyZXN1bHQsIGluZGV4KSB7XG4gICAgdmFyIGlucHV0ID0gc2VjdGlvbnNbaW5kZXhdXG4gICAgdmFyIGxpbmUgPSByZXN1bHQubGluZSArIGlucHV0LnNwbGl0KFwiXFxuXCIpLmxlbmd0aCAtIDFcbiAgICByZXN1bHQubGluZSA9IGxpbmVcbiAgICB2YXIgZGVsdGEgPSB7aW5wdXQ6IGlucHV0LnRyaW0oKSwgbGluZTogbGluZSwgdmlzaWJsZTogYWN0aXZlTGluZSAhPT0gbGluZX1cbiAgICByZXN1bHQuc3RhdGVbaW5kZXhdID0gc3RhdGVbaW5kZXhdID8gcGF0Y2goc3RhdGVbaW5kZXhdLCBkZWx0YSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7IGxpbmU6IDAsIHN0YXRlOiB7fSB9KVxuXG4gIHJldHVybiBkaWZmKGVkaXRvcltJbl0sIGNoYW5nZS5zdGF0ZSlcbn1cblxuXG5mdW5jdGlvbiBzZW5kKHBhY2tldCkge1xuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpXG4gIGV2ZW50LmluaXRDdXN0b21FdmVudChcInNlcnZlclwiLCBmYWxzZSwgdHJ1ZSwgcGFja2V0KVxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudClcbn1cblxuXG5mdW5jdGlvbiByZWNpZXZlKGVkaXRvciwgZXZlbnQpIHtcbiAgdmFyIHBhY2tldCA9IGV2ZW50LmRldGFpbFxuICB2YXIgZGVsdGEgPSB7fVxuICBkZWx0YVtwYWNrZXQuZnJvbV0gPSB7cGVuZGluZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcGFja2V0Lm1lc3NhZ2V9XG4gIHdyaXRlKGVkaXRvciwgZGVsdGEpXG59XG5cbmZ1bmN0aW9uIHByaW50KGVkaXRvcikge1xuICBpZiAoIWVkaXRvci5nZXRPcHRpb24oXCJpbnRlcmFjdGl2YXRlXCIpKSB0aHJvdyBlZGl0b3IuY29uc3RydWN0b3IuUGFzc1xuICBlZGl0b3Iub3BlcmF0aW9uKGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKClcbiAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihcIlxcbi8vID0+XFxuXCIpXG4gICAgZWRpdG9yLnNldEN1cnNvcih7IGxpbmU6IGN1cnNvci5saW5lICsgMiwgY2g6IDAgfSlcbiAgfSlcbn1cblxuXG5mdW5jdGlvbiBnZXRNYXJrZXJGb3IoZWRpdG9yLCB2aWV3KSB7XG4gIHZhciBtYXJrZXJzID0gZWRpdG9yLmdldEFsbE1hcmtzKClcbiAgdmFyIGNvdW50ID0gbWFya2Vycy5sZW5ndGhcbiAgd2hpbGUgKGNvdW50KSB7XG4gICAgY291bnQgPSBjb3VudCAtIDFcbiAgICB2YXIgbWFya2VyID0gbWFya2Vyc1tjb3VudF1cbiAgICBpZiAobWFya2VyLnJlcGxhY2VkV2l0aCA9PT0gdmlldykgcmV0dXJuIG1hcmtlclxuICB9XG4gIHJldHVybiBudWxsXG59XG5cblxuZnVuY3Rpb24gd3JpdGUoZWRpdG9yLCBjaGFuZ2VzKSB7XG4gIHZhciBkb2MgPSBlZGl0b3IuZ2V0RG9jKClcbiAgT2JqZWN0LmtleXMoY2hhbmdlcykuc29ydCgpLnJlZHVjZShmdW5jdGlvbihfLCBpZCkge1xuICAgIGlmICghZWRpdG9yW091dF1baWRdKSBlZGl0b3JbT3V0XVtpZF0gPSBtYWtlT3V0cHV0KGlkKVxuXG4gICAgdmFyIG91dHB1dCA9IGVkaXRvcltPdXRdW2lkXVxuICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2lkXVxuICAgIGlmIChjaGFuZ2UgPT09IG51bGwpIGVkaXRvcltPdXRdW2lkXSA9IG51bGxcblxuICAgIHdyaXRlT3V0cHV0KG91dHB1dCwgZWRpdG9yLCBjaGFuZ2UpXG4gIH0sIG51bGwpXG4gIGVkaXRvcltJbl0gPSBwYXRjaChlZGl0b3JbSW5dLCBjaGFuZ2VzKVxufVxuXG5mdW5jdGlvbiBwb3N0KGNoYW5nZXMpIHtcbiAgT2JqZWN0LmtleXMoY2hhbmdlcykucmVkdWNlKGZ1bmN0aW9uKF8sIGlkKSB7XG4gICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbaWRdXG4gICAgaWYgKGNoYW5nZSAmJiBjaGFuZ2UuaW5wdXQpIHtcbiAgICAgIHNlbmQoeyB0bzogaWQsIHNvdXJjZTogY2hhbmdlLmlucHV0IH0pXG4gICAgfVxuICB9LCBudWxsKVxufVxuXG4vLyBGdW5jdGlvbiBmaW5kcyBtb2RpZmllZCBzZWN0aW9ucyBhbmQgcXVldWVzIHVwIG1lc3NlZ2FzZSB0byBhblxuLy8gZXZhbCBob3N0LiBJbiBhZGl0aW9uIGl0IGFsc28gcmVuZGVycyBvdXRwdXQgdmlld3MgKGlmIHRoZXlcbi8vIGRvIG5vdCBleGlzdCB5ZXQpIHdoZXJlIGV2YWwgcmVzdWx0cyBhcmUgd3JpdHRlbi5cbnZhciByZW5kZXJPdXRwdXQgPSB0aHJvdHRsZShmdW5jdGlvbiByZW5kZXIoZWRpdG9yKSB7XG4gIHZhciBkZWx0YSA9IGNhbGN1bGF0ZShlZGl0b3IpXG4gIHZhciBjaGFuZ2VzID0gT2JqZWN0LmtleXMoZGVsdGEpLnJlZHVjZShmdW5jdGlvbihjaGFuZ2VzLCBpZCkge1xuICAgIHZhciBjaGFuZ2UgPSBkZWx0YVtpZF1cbiAgICAvLyBPbmx5IG1hcmsgY2hhbmdlIHBlbmRpbmcgaWYgdGhlcmUgaXMgc29tZSBpbnB1dCB0byBiZSBldmFsZWQuXG4gICAgaWYgKGNoYW5nZSAmJiBjaGFuZ2UuaW5wdXQpIGNoYW5nZS5wZW5kaW5nID0gdHJ1ZVxuICAgIHJldHVybiBjaGFuZ2VzXG4gIH0sIGRlbHRhKVxuXG4gIHdyaXRlKGVkaXRvciwgY2hhbmdlcylcbiAgcG9zdChjaGFuZ2VzKVxufSwgZ2V0UmVuZGVyUmF0ZSlcblxudmFyIGhpZGVPdXRwdXQgPSB0aHJvdHRsZShmdW5jdGlvbiByZW5kZXIoZWRpdG9yKSB7XG4gIHZhciBsaW5lID0gZWRpdG9yLmdldEN1cnNvcigpLmxpbmVcbiAgdmFyIHN0YXRlID0gZWRpdG9yW0luXVxuICB2YXIgY2hhbmdlcyA9IE9iamVjdC5rZXlzKHN0YXRlKS5yZWR1Y2UoZnVuY3Rpb24oZGVsdGEsIGlkKSB7XG4gICAgdmFyIHZhbHVlID0gc3RhdGVbaWRdXG4gICAgaWYgKHZhbHVlLmxpbmUgPT09IGxpbmUpIGRlbHRhW2lkXSA9IHt2aXNpYmxlOiBmYWxzZX1cbiAgICBlbHNlIGlmICghdmFsdWUudmlzaWJsZSkgZGVsdGFbaWRdID0ge3Zpc2libGU6IHRydWUsIGxpbmU6IHZhbHVlLmxpbmV9XG5cbiAgICByZXR1cm4gZGVsdGFcbiAgfSwgW10pXG5cbiAgaWYgKGNoYW5nZXMubGVuZ3RoKSB3cml0ZShlZGl0b3IsIGNoYW5nZXMpXG59LCBmdW5jdGlvbigpIHsgcmV0dXJuIDIwMCB9KVxuXG5cbmZ1bmN0aW9uIHRvb2dsZVBsdWdpbihlZGl0b3IsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGVkaXRvcltSZWNpZXZlcl0gPSByZWNpZXZlLmJpbmQocmVjaWV2ZSwgZWRpdG9yKVxuICAgIGVkaXRvcltJbl0gPSB7fVxuICAgIGVkaXRvcltPdXRdID0ge31cbiAgICBlZGl0b3Iub24oXCJjaGFuZ2VcIiwgcmVuZGVyT3V0cHV0KVxuICAgIGVkaXRvci5vbihcImN1cnNvckFjdGl2aXR5XCIsIGhpZGVPdXRwdXQpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGllbnRcIiwgZWRpdG9yW1JlY2lldmVyXSwgZmFsc2UpXG4gIH0gZWxzZSB7XG4gICAgZWRpdG9yLm9mZihcImNoYW5nZVwiLCByZW5kZXJPdXRwdXQpXG4gICAgZWRpdG9yLm9mZihcImN1cnNvckFjdGl2aXR5XCIsIGhpZGVPdXRwdXQpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGllbnRcIiwgZWRpdG9yW1JlY2lldmVyXSwgZmFsc2UpXG4gICAgZWRpdG9yW1JlY2lldmVyXSA9IG51bGxcbiAgICBlZGl0b3JbSW5dID0gbnVsbFxuICAgIGVkaXRvcltPdXRdID0gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGwoQ29kZU1pcnJvcikge1xuICAvLyBGaXggY29uc3RydWN0b3IgcHJvcGVydHkgc28gdGhhdCBpdCBjb3VsZCBiZSBhY2Nlc3NlZCBmcm9tIHRoZVxuICAvLyBpbnN0YW5jZS5cbiAgQ29kZU1pcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb2RlTWlycm9yO1xuICBDb2RlTWlycm9yLmRlZmF1bHRzLmludGVyYWN0aXZlU3BlZWQgPSAzMDBcbiAgQ29kZU1pcnJvci5kZWZhdWx0cy5pbnRlcmFjdGl2ZVNlcGFyYXRvciA9IC9eXFwvXFwvIFxcPVxcPlteXFxuXSokL21cbiAgQ29kZU1pcnJvci5rZXlNYXAubWFjRGVmYXVsdFtcIkNtZC1FbnRlclwiXSA9IHByaW50XG4gIENvZGVNaXJyb3Iua2V5TWFwLnBjRGVmYXVsdFtcIkN0cmwtRW50ZXJcIl0gPSBwcmludFxuXG4gIENvZGVNaXJyb3IuZGVmaW5lT3B0aW9uKFwiaW50ZXJhY3RpdmF0ZVwiLCBmYWxzZSwgdG9vZ2xlUGx1Z2luKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc3RhbGxcbiIsInZhciBtYWtlVmlldyA9IHJlcXVpcmUoXCIuL3ZpZXdcIikubWFrZVZpZXdcbnZhciByZW5kZXIgPSByZXF1aXJlKFwiLi9yZW5kZXJcIilcblxuZnVuY3Rpb24gT3V0cHV0KGlkKSB7XG4gIHRoaXMuaWQgPSBpZFxufVxuXG5mdW5jdGlvbiBtYWtlT3V0cHV0KGlkKSB7XG4gIHJldHVybiBuZXcgT3V0cHV0KGlkKVxufVxuXG5cbmZ1bmN0aW9uIGNsZWFyKG91dHB1dCkge1xuICBvdXRwdXQubWFya2VyLmNsZWFyKClcbiAgb3V0cHV0LndpZGdldC5jbGVhcigpXG59XG5cbmZ1bmN0aW9uIG1hcmsob3V0cHV0LCBlZGl0b3IsIGxpbmUpIHtcbiAgb3V0cHV0Lm1hcmtlciA9IGVkaXRvci5tYXJrVGV4dCh7bGluZTogbGluZSwgY2g6IDB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5lOiBsaW5lfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmVMZWZ0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgb3V0cHV0LndpZGdldCA9IGVkaXRvci5hZGRMaW5lV2lkZ2V0KGxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93SWZIaWRkZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9IU2Nyb2xsOnRydWV9KVxufVxuXG5mdW5jdGlvbiBtb3ZlKG91dHB1dCwgZWRpdG9yLCBsaW5lKSB7XG4gIHZhciBwb3NpdGlvbiA9IG91dHB1dC5tYXJrZXIuZmluZCgpXG4gIGlmICghcG9zaXRpb24gfHwgcG9zaXRpb24ubGluZSAhPT0gbGluZSkge1xuICAgIGNsZWFyKG91dHB1dClcbiAgICBtYXJrKG91dHB1dCwgZWRpdG9yLCBsaW5lKVxuICB9XG59XG5cbmZ1bmN0aW9uIHdyaXRlKG91dHB1dCwgZWRpdG9yLCBzdGF0ZSkge1xuICB2YXIgdmlldyA9IG91dHB1dC52aWV3IHx8IChvdXRwdXQudmlldyA9IG1ha2VWaWV3KGVkaXRvciwgb3V0cHV0LmlkKSlcbiAgaWYgKHN0YXRlID09PSBudWxsKSByZXR1cm4gY2xlYXIob3V0cHV0KVxuXG4gIGlmIChzdGF0ZS5wZW5kaW5nKSBvdXRwdXQudmlldy5zdHlsZS5vcGFjaXR5ID0gXCIwLjJcIlxuICBlbHNlIGlmIChzdGF0ZS5wZW5kaW5nID09PSBudWxsKSBvdXRwdXQudmlldy5zdHlsZS5vcGFjaXR5ID0gXCJcIlxuXG4gIGlmIChzdGF0ZS5yZXN1bHQpIHtcbiAgICB2YXIgY29udGVudCA9IHJlbmRlcihzdGF0ZS5yZXN1bHQpXG4gICAgdmlldy5ib2R5LmlubmVySFRNTCA9IFwiXCJcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEVsZW1lbnQpIHZpZXcuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgIGVsc2Ugdmlldy5ib2R5LnRleHRDb250ZW50ID0gY29udGVudFxuICB9XG5cbiAgaWYgKHN0YXRlLnZpc2libGUgPT09IHRydWUpIG1hcmsob3V0cHV0LCBlZGl0b3IsIHN0YXRlLmxpbmUpXG4gIGlmIChzdGF0ZS52aXNpYmxlID09PSBmYWxzZSkgY2xlYXIob3V0cHV0KVxuICBpZiAoc3RhdGUubGluZSkgbW92ZShvdXRwdXQsIGVkaXRvciwgc3RhdGUubGluZSlcbn1cblxuZXhwb3J0cy5tYWtlT3V0cHV0ID0gbWFrZU91dHB1dFxuZXhwb3J0cy53cml0ZSA9IHdyaXRlIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZXRob2QgPSByZXF1aXJlKFwibWV0aG9kXCIpXG52YXIgdXRpbCA9IHJlcXVpcmUoXCJ1dGlsXCIpXG5cblxuLy8gUmVuZGVyIGZ1bmN0aW9uIHRha2VzIGFyYml0cmFyeSBkYXRhIHN0cnVjdHVyZSBhbmQgcmV0dXJucyBzb21ldGhpbmdcbi8vIHRoYXQgY2FuIHZpc3VhbGx5IHJlcHJlc2VudCBpdC5cbnZhciByZW5kZXIgPSBtZXRob2QoXCJyZW5kZXJAaW50ZXJhY3RpdmF0ZVwiKVxuXG5yZW5kZXIuZGVmaW5lKGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodmFsdWUpXG59KVxuXG5yZW5kZXIuZGVmaW5lKEVycm9yLCBmdW5jdGlvbihlcnJvcikge1xuICByZXR1cm4gU3RyaW5nKGVycm9yKVxufSlcblxucmVuZGVyLmRlZmluZShFbGVtZW50LCBmdW5jdGlvbihlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbmRlclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIHJlYmFzZShyZXN1bHQsIHBhcmVudCwgZGVsdGEpIHtcbiAgT2JqZWN0LmtleXMocGFyZW50KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIC8vIElmIGBwYXJlbnRba2V5XWAgaXMgYG51bGxgIGl0IG1lYW5zIGF0dHJpYnV0ZSB3YXMgZGVsZXRlZCBpbiBwcmV2aW91c1xuICAgIC8vIHVwZGF0ZS4gV2Ugc2tpcCBzdWNoIHByb3BlcnRpZXMgYXMgdGhlcmUgaXMgbm8gdXNlIGluIGtlZXBpbmcgdGhlbVxuICAgIC8vIGFyb3VuZC4gSWYgYGRlbHRhW2tleV1gIGlzIGBudWxsYCB3ZSBza2lwIHRoZXNlIHByb3BlcnRpZXMgdG9vIGFzXG4gICAgLy8gdGhlIGhhdmUgYmVpbmcgZGVsZXRlZC5cbiAgICBpZiAoIShwYXJlbnRba2V5XSA9PSBudWxsIHx8IChrZXkgaW4gZGVsdGEgJiYgZGVsdGFba2V5XSA9PSBudWxsKSkpXG4gICAgICByZXN1bHRba2V5XSA9IHBhcmVudFtrZXldXG4gIH0sIHJlc3VsdClcbiAgT2JqZWN0LmtleXMoZGVsdGEpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGtleSBpbiBwYXJlbnQpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gZGVsdGFba2V5XVxuICAgICAgdmFyIHByZXZpb3VzID0gcGFyZW50W2tleV1cbiAgICAgIGlmIChjdXJyZW50ID09PSBwcmV2aW91cykgY3VycmVudCA9IGN1cnJlbnRcbiAgICAgIC8vIElmIGBkZWx0YVtrZXldYCBpcyBgbnVsbGAgaXQncyBkZWxldGUgc28gd2UganVzdCBza2lwIHByb3BlcnR5LlxuICAgICAgZWxzZSBpZiAoY3VycmVudCA9PSBudWxsKSBjdXJyZW50ID0gY3VycmVudFxuICAgICAgLy8gSWYgdmFsdWUgaXMgb2YgcHJpbWl0aXZlIHR5cGUgKGZ1bmN0aW9uIG9yIHJlZ2V4cHMgc2hvdWxkIG5vdFxuICAgICAgLy8gZXZlbiBiZSBoZXJlKSB3ZSBqdXN0IHVwZGF0ZSBpbiBwbGFjZS5cbiAgICAgIGVsc2UgaWYgKHR5cGVvZihjdXJyZW50KSAhPT0gXCJvYmplY3RcIikgcmVzdWx0W2tleV0gPSBjdXJyZW50XG4gICAgICAvLyBJZiBwcmV2aW91cyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBrZXkgd2FzIHByaW1pdGl2ZVxuICAgICAgLy8gYW5kIGl0J3MgbWFwcGVkIHRvIG5vbiBwcmltaXRpdmVcbiAgICAgIGVsc2UgaWYgKHR5cGVvZihwcmV2aW91cykgIT09IFwib2JqZWN0XCIpIHJlc3VsdFtrZXldID0gY3VycmVudFxuICAgICAgZWxzZSByZXN1bHRba2V5XSA9IHJlYmFzZSh7fSwgcHJldmlvdXMsIGN1cnJlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVsdGFba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYmFzZVxuIiwidmFyIFRFQVJfSU1BR0UgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBTUNBWUFBQUJCVjh3dUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBR3BKUkVGVWVOcGkvUC8vUHdNMndNU0FBN0NBQ0VZZ2dMS1pnZmd2RVA4QkNZQXdLeEFMQWpFUEVIOEI0ZzlNVUk1SVdscWF5ZXZYcjllQ2FDQmZHR1NTVm5KeXN1L1hyMStmQXgzeS85dTNieTlCZkliMjl2WkNtQ0FNZ0NRWi8rTndMMDduVWxFQ0lNQUFNcjQxc3h2djZvRUFBQUFBU1VWT1JLNUNZSUk9XCJcblxudmFyIE9VVFBVVF9TVFlMRSA9IFtcbiAgXCJtYXJnaW4tbGVmdDogLTEwcHhcIixcbiAgXCJwYWRkaW5nOiAwXCIsXG4gIFwid2hpdGVzcGFjZTogbm9ybWFsXCIsXG4gIFwidGV4dC1zaGFkb3c6IG5vbmVcIlxuXS5qb2luKFwiO1wiKVxuXG52YXIgVE9QX1NUWUxFID0gW1xuICBcInBvc2l0aW9uOiByZWxhdGl2ZVwiLFxuICBcInotaW5kZXg6IDJcIixcbiAgXCJoZWlnaHQ6IDEycHhcIixcbiAgXCJiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94XCIsXG4gIFwiYmFja2dyb3VuZDogdXJsKCdcIiArIFRFQVJfSU1BR0UgKyBcIicpIHRvcCByaWdodCByZXBlYXQteFwiXG5dLmpvaW4oXCI7XCIpXG5cbnZhciBCT1RUT01fU1RZTEUgPSBbXG4gIFwicG9zaXRpb246IHJlbGF0aXZlXCIsXG4gIFwiei1pbmRleDogMlwiLFxuICBcImhlaWdodDogMTJweFwiLFxuICBcImJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3hcIixcbiAgXCJiYWNrZ3JvdW5kOiB1cmwoJ1wiICsgVEVBUl9JTUFHRSArIFwiJykgdG9wIGxlZnQgcmVwZWF0LXhcIixcbiAgXCItd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcIixcbiAgXCItby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXCIsXG4gIFwidHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVwiXG5dLmpvaW4oXCI7XCIpXG5cbnZhciBCT1hfU1RZTEUgPSBbXG4gIFwiLW1vei1ib3gtc2hhZG93OiAwIDAgMzBweCAtMnB4ICMwMDBcIixcbiAgXCItd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzMHB4IC0ycHggIzAwMFwiLFxuICBcImJveC1zaGFkb3c6IDAgMCAzMHB4IC0ycHggIzAwMFwiLFxuICBcImNvbG9yOiBibGFja1wiLFxuICBcImJhY2tncm91bmQ6IHdoaXRlXCIsXG4gIFwicG9zaXRpb246IHJlbGF0aXZlXCIsXG4gIFwibWFyZ2luOiAwcHhcIixcbiAgXCJ3aWR0aDogMTAwJVwiXG5dLmpvaW4oXCI7XCIpXG5cbnZhciBIRUFEX1NUWUxFID0gW1xuICBcImRpc3BsYXk6IHRhYmxlLWNlbGxcIixcbiAgXCJwYWRkaW5nOiAxMHB4XCIsXG4gIFwicGFkZGluZy1sZWZ0OiAyMHB4XCIsXG4gIFwid2hpdGUtc3BhY2U6IHByZVwiLFxuICBcImNvbG9yOiB3aGl0ZVwiLFxuICBcInRleHQtc2hhZG93OiAwcHggMXB4IDVweCAjMDAwXCIsXG4gIFwidmVydGljYWwtYWxpZ246IHRvcFwiXG5dLmpvaW4oXCI7XCIpXG5cbnZhciBCT0RZX1NUWUxFID0gW1xuICBcImRpc3BsYXk6IHRhYmxlLWNlbGxcIixcbiAgXCJwYWRkaW5nOiAxMHB4XCIsXG4gIFwid2lkdGg6IDEwMCVcIlxuXS5qb2luKFwiO1wiKVxuXG52YXIgVEVNUExBVEUgPSBbXG4gIFwiPGRpdiBzdHlsZT1cXFwiXCIgKyBPVVRQVVRfU1RZTEUgKyBcIlxcXCI+XCIsXG4gIFwiICA8ZGl2IGNsYXNzPSdjbS1saXZlLW91dHB1dC1ib3JkZXItdG9wJyBzdHlsZT1cXFwiXCIgKyBUT1BfU1RZTEUgKyBcIlxcXCI+IDwvZGl2PlwiLFxuICBcIiAgPGRpdiBjbGFzcz0nY20tbGl2ZS1vdXRwdXQtYm94JyBzdHlsZT1cXFwiXCIgKyBCT1hfU1RZTEUgKyBcIlxcXCI+XCIsXG4gIFwiICAgIDxoMSBjbGFzcz0nY20tbGl2ZS1vdXRwdXQtaGVhZCcgc3R5bGU9XFxcIlwiICsgSEVBRF9TVFlMRSArIFwiXFxcIj5PdXRbMF08L2gxPlwiLFxuICBcIiAgICA8cHJlIGNsYXNzPSdjbS1saXZlLW91dHB1dC1ib2R5JyBzdHlsZT1cXFwiXCIgKyBCT0RZX1NUWUxFICsgXCJcXFwiPjwvcHJlPlwiLFxuICBcIiAgPC9kaXY+XCIsXG4gIFwiICA8ZGl2IGNsYXNzPSdjbS1saXZlLW91dHB1dC1ib3JkZXItYm90dG9tJyBzdHlsZT1cXFwiXCIgKyBCT1RUT01fU1RZTEUgKyBcIlxcXCI+PC9kaXY+XCIsXG4gIFwiPC9kaXY+XCJcbiBdLmpvaW4oXCJcXG5cIilcblxuZnVuY3Rpb24gbWFrZVZpZXcoZWRpdG9yLCBpZCkge1xuICB2YXIgZG9jdW1lbnQgPSBlZGl0b3IuZGlzcGxheS5pbnB1dC5vd25lckRvY3VtZW50XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICBjb250YWluZXIuaW5uZXJIVE1MID0gVEVNUExBVEVcbiAgdmFyIHZpZXcgPSBjb250YWluZXIuZmlyc3RDaGlsZFxuICB2aWV3LmlkID0gXCJpbnRlcmFjdGl2YXRlLW91dC1cIiArIGlkXG4gIHZpZXcubGFiZWwgPSB2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIuY20tbGl2ZS1vdXRwdXQtaGVhZFwiKVxuICB2aWV3LmxhYmVsLnRleHRDb250ZW50ID0gXCJPdXRbXCIgKyBpZCArIFwiXSA9IFwiXG4gIHZpZXcuYm9keSA9IHZpZXcucXVlcnlTZWxlY3RvcihcIi5jbS1saXZlLW91dHB1dC1ib2R5XCIpXG4gIHJldHVybiB2aWV3XG59XG5cbmV4cG9ydHMubWFrZVZpZXcgPSBtYWtlVmlldyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24ob2JqZWN0LCBuYW1lLCBwcm9wZXJ0eSkge1xuICBvYmplY3RbbmFtZV0gPSBwcm9wZXJ0eS52YWx1ZVxuICByZXR1cm4gb2JqZWN0XG59XG5cbi8vIFNob3J0Y3V0IGZvciBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgZm9yIGZhc3RlciBhY2Nlc3MuXG52YXIgdHlwZWZ5ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG4vLyBNYXAgdG8gZm9yIGp1bXBpbmcgZnJvbSB0eXBlb2YodmFsdWUpIHRvIGFzc29jaWF0ZWQgdHlwZSBwcmVmaXggdXNlZFxuLy8gYXMgYSBoYXNoIGluIHRoZSBtYXAgb2YgYnVpbHRpbiBpbXBsZW1lbnRhdGlvbnMuXG52YXIgdHlwZXMgPSB7IFwiZnVuY3Rpb25cIjogXCJPYmplY3RcIiwgXCJvYmplY3RcIjogXCJPYmplY3RcIiB9XG5cbi8vIEFycmF5IGlzIHVzZWQgdG8gc2F2ZSBtZXRob2QgaW1wbGVtZW50YXRpb25zIGZvciB0aGUgaG9zdCBvYmplY3RzIGluIG9yZGVyXG4vLyB0byBhdm9pZCBleHRlbmRpbmcgdGhlbSB3aXRoIG5vbi1wcmltaXRpdmUgdmFsdWVzIHRoYXQgY291bGQgY2F1c2UgbGVha3MuXG52YXIgaG9zdCA9IFtdXG4vLyBIYXNoIG1hcCBpcyB1c2VkIHRvIHNhdmUgbWV0aG9kIGltcGxlbWVudGF0aW9ucyBmb3IgYnVpbHRpbiB0eXBlcyBpbiBvcmRlclxuLy8gdG8gYXZvaWQgZXh0ZW5kaW5nIHRoZWlyIHByb3RvdHlwZXMuIFRoaXMgYWxzbyBhbGxvd3MgdG8gc2hhcmUgbWV0aG9kXG4vLyBpbXBsZW1lbnRhdGlvbnMgZm9yIHR5cGVzIGFjcm9zcyBkaWZmIGNvbnRleHRzIC8gZnJhbWVzIC8gY29tcGFydG1lbnRzLlxudmFyIGJ1aWx0aW4gPSB7fVxuXG5mdW5jdGlvbiBQcmltaXRpdmUoKSB7fVxuZnVuY3Rpb24gT2JqZWN0VHlwZSgpIHt9XG5PYmplY3RUeXBlLnByb3RvdHlwZSA9IG5ldyBQcmltaXRpdmUoKVxuZnVuY3Rpb24gRXJyb3JUeXBlKCkge31cbkVycm9yVHlwZS5wcm90b3R5cGUgPSBuZXcgT2JqZWN0VHlwZSgpXG5cbnZhciBEZWZhdWx0ID0gYnVpbHRpbi5EZWZhdWx0ID0gUHJpbWl0aXZlLnByb3RvdHlwZVxudmFyIE51bGwgPSBidWlsdGluLk51bGwgPSBuZXcgUHJpbWl0aXZlKClcbnZhciBWb2lkID0gYnVpbHRpbi5Wb2lkID0gbmV3IFByaW1pdGl2ZSgpXG5idWlsdGluLlN0cmluZyA9IG5ldyBQcmltaXRpdmUoKVxuYnVpbHRpbi5OdW1iZXIgPSBuZXcgUHJpbWl0aXZlKClcbmJ1aWx0aW4uQm9vbGVhbiA9IG5ldyBQcmltaXRpdmUoKVxuXG5idWlsdGluLk9iamVjdCA9IE9iamVjdFR5cGUucHJvdG90eXBlXG5idWlsdGluLkVycm9yID0gRXJyb3JUeXBlLnByb3RvdHlwZVxuXG5idWlsdGluLkV2YWxFcnJvciA9IG5ldyBFcnJvclR5cGUoKVxuYnVpbHRpbi5JbnRlcm5hbEVycm9yID0gbmV3IEVycm9yVHlwZSgpXG5idWlsdGluLlJhbmdlRXJyb3IgPSBuZXcgRXJyb3JUeXBlKClcbmJ1aWx0aW4uUmVmZXJlbmNlRXJyb3IgPSBuZXcgRXJyb3JUeXBlKClcbmJ1aWx0aW4uU3RvcEl0ZXJhdGlvbiA9IG5ldyBFcnJvclR5cGUoKVxuYnVpbHRpbi5TeW50YXhFcnJvciA9IG5ldyBFcnJvclR5cGUoKVxuYnVpbHRpbi5UeXBlRXJyb3IgPSBuZXcgRXJyb3JUeXBlKClcbmJ1aWx0aW4uVVJJRXJyb3IgPSBuZXcgRXJyb3JUeXBlKClcblxuXG5mdW5jdGlvbiBNZXRob2QoaWQpIHtcbiAgLyoqXG4gIFByaXZhdGUgTWV0aG9kIGlzIGEgY2FsbGFibGUgcHJpdmF0ZSBuYW1lIHRoYXQgZGlzcGF0Y2hlcyBvbiB0aGUgZmlyc3RcbiAgYXJndW1lbnRzIHNhbWUgbmFtZWQgTWV0aG9kOlxuXG4gICAgICBtZXRob2Qob2JqZWN0LCAuLi5yZXN0KSA9PiBvYmplY3RbbWV0aG9kXSguLi5yZXN0KVxuXG4gIEl0IGlzIHN1cHBvc2VkIHRvIGJlIGdpdmVuICoqdW5pcXVlKiogYGlkYCBwcmVmZXJhYmx5IGluIGBcImp1bXBAcGFja2FnZVwiYFxuICBsaWtlIGZvcm0gc28gaXQgd29uJ3QgY29sbGlkZSB3aXRoIGBpZCdzYCBvdGhlciB1c2VycyBjcmVhdGUuIElmIG5vIGFyZ3VtZW50XG4gIGlzIHBhc3NlZCB1bmlxdWUgaWQgaXMgZ2VuZXJhdGVkLCBidXQgaXQncyBwcm92ZWQgdG8gYmUgcHJvYmxlbWF0aWMgd2l0aFxuICBucG0gd2hlcmUgaXQncyBlYXN5IHRvIGVuZCB1cCB3aXRoIGEgY29waWVzIG9mIHNhbWUgbW9kdWxlIHdoZXJlIGVhY2ggY29weVxuICB3aWxsIGhhdmUgYSBkaWZmZXJlbnQgbmFtZS5cblxuICAjIyBFeGFtcGxlXG5cbiAgICAgIHZhciBmb28gPSBNZXRob2QoXCJmb29AYXdlc29tZW5lc3NcIilcblxuICAgICAgLy8gSW1wbGVtZW50YXRpb24gZm9yIGFueSB0eXBlc1xuICAgICAgZm9vLmRlZmluZShmdW5jdGlvbih2YWx1ZSwgYXJnMSwgYXJnMikge1xuICAgICAgICAvLyAuLi5cbiAgICAgIH0pXG5cbiAgICAgIC8vIEltcGxlbWVudGF0aW9uIGZvciBhIHNwZWNpZmljIHR5cGVcbiAgICAgIGZvby5kZWZpbmUoQmFyVHlwZSwgZnVuY3Rpb24oYmFyLCBhcmcxLCBhcmcyKSB7XG4gICAgICAgIC8vIC4uLlxuICAgICAgfSlcbiAgKiovXG5cbiAgLy8gQ3JlYXRlIGFuIGludGVybmFsIHVuaXF1ZSBuYW1lIGlmIG9uZSBpcyBub3QgcHJvdmlkZWQsIGFsc28gcHJlZml4IGl0XG4gIC8vIHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoIHJlZ3VsYXIgbWV0aG9kIG5hbWVzLlxuICB2YXIgbmFtZSA9IFwizrs6XCIgKyBTdHJpbmcoaWQgfHwgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc3Vic3RyKDIpKVxuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKHZhbHVlKSB7XG4gICAgLy8gTWV0aG9kIGRpc3BhdGNoZXMgb24gdHlwZSBvZiB0aGUgZmlyc3QgYXJndW1lbnQuXG4gICAgLy8gSWYgZmlyc3QgYXJndW1lbnQgaXMgYG51bGxgIG9yIGB2b2lkYCBhc3NvY2lhdGVkIGltcGxlbWVudGF0aW9uIGlzXG4gICAgLy8gbG9va2VkIHVwIGluIHRoZSBgYnVpbHRpbmAgaGFzaCB3aGVyZSBpbXBsZW1lbnRhdGlvbnMgZm9yIGJ1aWx0LWluc1xuICAgIC8vIGFyZSBzdG9yZWQuXG4gICAgdmFyIHR5cGUgPSBudWxsXG4gICAgdmFyIG1ldGhvZCA9IHZhbHVlID09PSBudWxsID8gTnVsbFtuYW1lXSA6XG4gICAgICAgICAgICAgICAgIHZhbHVlID09PSB2b2lkKDApID8gVm9pZFtuYW1lXSA6XG4gICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhdHRlbXB0IHRvIHVzZSBtZXRob2Qgd2l0aCBhIGdlbmVyYXRlZCBwcml2YXRlXG4gICAgICAgICAgICAgICAgIC8vIGBuYW1lYCB0aGF0IGlzIHN1cHBvc2VkbHkgaW4gdGhlIHByb3RvdHlwZSBjaGFpbiBvZiB0aGVcbiAgICAgICAgICAgICAgICAgLy8gYHRhcmdldGAuXG4gICAgICAgICAgICAgICAgIHZhbHVlW25hbWVdIHx8XG4gICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhc3N1bWUgaXQncyBvbmUgb2YgdGhlIGJ1aWx0LWluIHR5cGUgaW5zdGFuY2VzLFxuICAgICAgICAgICAgICAgICAvLyBpbiB3aGljaCBjYXNlIGltcGxlbWVudGF0aW9uIGlzIHN0b3JlZCBpbiBhIGBidWlsdGluYCBoYXNoLlxuICAgICAgICAgICAgICAgICAvLyBBdHRlbXB0IHRvIGZpbmQgYSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIGdpdmVuIGJ1aWx0LWluXG4gICAgICAgICAgICAgICAgIC8vIHZpYSBjb25zdHJ1Y3RvciBuYW1lIGFuZCBtZXRob2QgbmFtZS5cbiAgICAgICAgICAgICAgICAgKCh0eXBlID0gYnVpbHRpblsodmFsdWUuY29uc3RydWN0b3IgfHwgXCJcIikubmFtZV0pICYmXG4gICAgICAgICAgICAgICAgICB0eXBlW25hbWVdKSB8fFxuICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgYXNzdW1lIGl0J3MgYSBob3N0IG9iamVjdC4gRm9yIGhvc3Qgb2JqZWN0c1xuICAgICAgICAgICAgICAgICAvLyBhY3R1YWwgbWV0aG9kIGltcGxlbWVudGF0aW9ucyBhcmUgc3RvcmVkIGluIHRoZSBgaG9zdGBcbiAgICAgICAgICAgICAgICAgLy8gYXJyYXkgYW5kIG9ubHkgaW5kZXggZm9yIHRoZSBpbXBsZW1lbnRhdGlvbiBpcyBzdG9yZWRcbiAgICAgICAgICAgICAgICAgLy8gaW4gdGhlIGhvc3Qgb2JqZWN0J3MgcHJvdG90eXBlIGNoYWluLiBUaGlzIGF2b2lkcyBtZW1vcnlcbiAgICAgICAgICAgICAgICAgLy8gbGVha3MgdGhhdCBvdGhlcndpc2UgY291bGQgaGFwcGVuIHdoZW4gc2F2aW5nIEpTIG9iamVjdHNcbiAgICAgICAgICAgICAgICAgLy8gb24gaG9zdCBvYmplY3QuXG4gICAgICAgICAgICAgICAgIGhvc3RbdmFsdWVbXCIhXCIgKyBuYW1lXV0gfHxcbiAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGF0dGVtcHQgdG8gbG9va3VwIGltcGxlbWVudGF0aW9uIGZvciBidWlsdGlucyBieVxuICAgICAgICAgICAgICAgICAvLyBhIHR5cGUgb2YgdGhlIHZhbHVlLiBUaGlzIGJhc2ljYWxseSBtYWtlcyBzdXJlIHRoYXQgYWxsXG4gICAgICAgICAgICAgICAgIC8vIG5vbiBwcmltaXRpdmUgdmFsdWVzIHdpbGwgZGVsZWdhdGUgdG8gYW4gYE9iamVjdGAuXG4gICAgICAgICAgICAgICAgICgodHlwZSA9IGJ1aWx0aW5bdHlwZXNbdHlwZW9mKHZhbHVlKV1dKSAmJiB0eXBlW25hbWVdKVxuXG5cbiAgICAvLyBJZiBtZXRob2QgaW1wbGVtZW50YXRpb24gZm9yIHRoZSB0eXBlIGlzIHN0aWxsIG5vdCBmb3VuZCB0aGVuXG4gICAgLy8ganVzdCBmYWxsYmFjayBmb3IgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbi5cbiAgICBtZXRob2QgPSBtZXRob2QgfHwgRGVmYXVsdFtuYW1lXVxuXG4gICAgLy8gSWYgaW1wbGVtZW50YXRpb24gaXMgc3RpbGwgbm90IGZvdW5kICh3aGljaCBhbHNvIG1lYW5zIHRoZXJlIGlzIG5vXG4gICAgLy8gZGVmYXVsdCkganVzdCB0aHJvdyBhbiBlcnJvciB3aXRoIGEgZGVzY3JpcHRpdmUgbWVzc2FnZS5cbiAgICBpZiAoIW1ldGhvZCkgdGhyb3cgVHlwZUVycm9yKFwiVHlwZSBkb2VzIG5vdCBpbXBsZW1lbnRzIG1ldGhvZDogXCIgKyBuYW1lKVxuXG4gICAgLy8gSWYgaW1wbGVtZW50YXRpb24gd2FzIGZvdW5kIHRoZW4ganVzdCBkZWxlZ2F0ZS5cbiAgICByZXR1cm4gbWV0aG9kLmFwcGx5KG1ldGhvZCwgYXJndW1lbnRzKVxuICB9XG5cbiAgLy8gTWFrZSBgdG9TdHJpbmdgIG9mIHRoZSBkaXNwYXRjaCByZXR1cm4gYSBwcml2YXRlIG5hbWUsIHRoaXMgZW5hYmxlc1xuICAvLyBtZXRob2QgZGVmaW5pdGlvbiB3aXRob3V0IHN1Z2FyOlxuICAvL1xuICAvLyAgICB2YXIgbWV0aG9kID0gTWV0aG9kKClcbiAgLy8gICAgb2JqZWN0W21ldGhvZF0gPSBmdW5jdGlvbigpIHsgLyoqKi8gfVxuICBkaXNwYXRjaC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkgeyByZXR1cm4gbmFtZSB9XG5cbiAgLy8gQ29weSB1dGlsaXR5IG1ldGhvZHMgZm9yIGNvbnZlbmllbnQgQVBJLlxuICBkaXNwYXRjaC5pbXBsZW1lbnQgPSBpbXBsZW1lbnRNZXRob2RcbiAgZGlzcGF0Y2guZGVmaW5lID0gZGVmaW5lTWV0aG9kXG5cbiAgcmV0dXJuIGRpc3BhdGNoXG59XG5cbi8vIENyZWF0ZSBtZXRob2Qgc2hvcnRjdXRzIGZvcm0gZnVuY3Rpb25zLlxudmFyIGRlZmluZU1ldGhvZCA9IGZ1bmN0aW9uIGRlZmluZU1ldGhvZChUeXBlLCBsYW1iZGEpIHtcbiAgcmV0dXJuIGRlZmluZSh0aGlzLCBUeXBlLCBsYW1iZGEpXG59XG52YXIgaW1wbGVtZW50TWV0aG9kID0gZnVuY3Rpb24gaW1wbGVtZW50TWV0aG9kKG9iamVjdCwgbGFtYmRhKSB7XG4gIHJldHVybiBpbXBsZW1lbnQodGhpcywgb2JqZWN0LCBsYW1iZGEpXG59XG5cbi8vIERlZmluZSBgaW1wbGVtZW50YCBhbmQgYGRlZmluZWAgcG9seW1vcnBoaWMgbWV0aG9kcyB0byBhbGxvdyBkZWZpbml0aW9uc1xuLy8gYW5kIGltcGxlbWVudGF0aW9ucyB0aHJvdWdoIHRoZW0uXG52YXIgaW1wbGVtZW50ID0gTWV0aG9kKFwiaW1wbGVtZW50QG1ldGhvZFwiKVxudmFyIGRlZmluZSA9IE1ldGhvZChcImRlZmluZUBtZXRob2RcIilcblxuXG5mdW5jdGlvbiBfaW1wbGVtZW50KG1ldGhvZCwgb2JqZWN0LCBsYW1iZGEpIHtcbiAgLyoqXG4gIEltcGxlbWVudHMgYE1ldGhvZGAgZm9yIHRoZSBnaXZlbiBgb2JqZWN0YCB3aXRoIGEgcHJvdmlkZWQgYGltcGxlbWVudGF0aW9uYC5cbiAgQ2FsbGluZyBgTWV0aG9kYCB3aXRoIGBvYmplY3RgIGFzIGEgZmlyc3QgYXJndW1lbnQgd2lsbCBkaXNwYXRjaCBvbiBwcm92aWRlZFxuICBpbXBsZW1lbnRhdGlvbi5cbiAgKiovXG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG1ldGhvZC50b1N0cmluZygpLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGxhbWJkYVxuICB9KVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lKG1ldGhvZCwgVHlwZSwgbGFtYmRhKSB7XG4gIC8qKlxuICBEZWZpbmVzIGBNZXRob2RgIGZvciB0aGUgZ2l2ZW4gYFR5cGVgIHdpdGggYSBwcm92aWRlZCBgaW1wbGVtZW50YXRpb25gLlxuICBDYWxsaW5nIGBNZXRob2RgIHdpdGggYSBmaXJzdCBhcmd1bWVudCBvZiB0aGlzIGBUeXBlYCB3aWxsIGRpc3BhdGNoIG9uXG4gIHByb3ZpZGVkIGBpbXBsZW1lbnRhdGlvbmAuIElmIGBUeXBlYCBpcyBhIGBNZXRob2RgIGRlZmF1bHQgaW1wbGVtZW50YXRpb25cbiAgaXMgZGVmaW5lZC4gSWYgYFR5cGVgIGlzIGEgYG51bGxgIG9yIGB1bmRlZmluZWRgIGBNZXRob2RgIGlzIGltcGxlbWVudGVkXG4gIGZvciB0aGF0IHZhbHVlIHR5cGUuXG4gICoqL1xuXG4gIC8vIEF0dGVtcHQgdG8gZ3Vlc3MgYSB0eXBlIHZpYSBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsYCBoYWNrLlxuICB2YXIgdHlwZSA9IFR5cGUgJiYgdHlwZWZ5LmNhbGwoVHlwZS5wcm90b3R5cGUpXG5cbiAgLy8gSWYgb25seSB0d28gYXJndW1lbnRzIGFyZSBwYXNzZWQgdGhlbiBgVHlwZWAgaXMgYWN0dWFsbHkgYW4gaW1wbGVtZW50YXRpb25cbiAgLy8gZm9yIGEgZGVmYXVsdCB0eXBlLlxuICBpZiAoIWxhbWJkYSkgRGVmYXVsdFttZXRob2RdID0gVHlwZVxuICAvLyBJZiBgVHlwZWAgaXMgYG51bGxgIG9yIGB2b2lkYCBzdG9yZSBpbXBsZW1lbnRhdGlvbiBhY2NvcmRpbmdseS5cbiAgZWxzZSBpZiAoVHlwZSA9PT0gbnVsbCkgTnVsbFttZXRob2RdID0gbGFtYmRhXG4gIGVsc2UgaWYgKFR5cGUgPT09IHZvaWQoMCkpIFZvaWRbbWV0aG9kXSA9IGxhbWJkYVxuICAvLyBJZiBgdHlwZWAgaGFjayBpbmRpY2F0ZXMgYnVpbHQtaW4gdHlwZSBhbmQgdHlwZSBoYXMgYSBuYW1lIHVzIGl0IHRvXG4gIC8vIHN0b3JlIGEgaW1wbGVtZW50YXRpb24gaW50byBhc3NvY2lhdGVkIGhhc2guIElmIGhhc2ggZm9yIHRoaXMgdHlwZSBkb2VzXG4gIC8vIG5vdCBleGlzdHMgeWV0IGNyZWF0ZSBvbmUuXG4gIGVsc2UgaWYgKHR5cGUgIT09IFwiW29iamVjdCBPYmplY3RdXCIgJiYgVHlwZS5uYW1lKSB7XG4gICAgdmFyIEJ1bGl0aW4gPSBidWlsdGluW1R5cGUubmFtZV0gfHwgKGJ1aWx0aW5bVHlwZS5uYW1lXSA9IG5ldyBPYmplY3RUeXBlKCkpXG4gICAgQnVsaXRpblttZXRob2RdID0gbGFtYmRhXG4gIH1cbiAgLy8gSWYgYHR5cGVgIGhhY2sgaW5kaWNhdGVzIGFuIG9iamVjdCwgdGhhdCBtYXkgYmUgZWl0aGVyIG9iamVjdCBvciBhbnlcbiAgLy8gSlMgZGVmaW5lZCBcIkNsYXNzXCIuIElmIG5hbWUgb2YgdGhlIGNvbnN0cnVjdG9yIGlzIGBPYmplY3RgLCBhc3N1bWUgaXQnc1xuICAvLyBidWlsdC1pbiBgT2JqZWN0YCBhbmQgc3RvcmUgaW1wbGVtZW50YXRpb24gYWNjb3JkaW5nbHkuXG4gIGVsc2UgaWYgKFR5cGUubmFtZSA9PT0gXCJPYmplY3RcIilcbiAgICBidWlsdGluLk9iamVjdFttZXRob2RdID0gbGFtYmRhXG4gIC8vIEhvc3Qgb2JqZWN0cyBhcmUgcGFpbiEhISBFdmVyeSBicm93c2VyIGRvZXMgc29tZSBjcmF6eSBzdHVmZiBmb3IgdGhlbVxuICAvLyBTbyBmYXIgYWxsIGJyb3dzZXIgc2VlbSB0byBub3QgaW1wbGVtZW50IGBjYWxsYCBtZXRob2QgZm9yIGhvc3Qgb2JqZWN0XG4gIC8vIGNvbnN0cnVjdG9ycy4gSWYgdGhhdCBpcyBhIGNhc2UgaGVyZSwgYXNzdW1lIGl0J3MgYSBob3N0IG9iamVjdCBhbmRcbiAgLy8gc3RvcmUgaW1wbGVtZW50YXRpb24gaW4gYSBgaG9zdGAgYXJyYXkgYW5kIHN0b3JlIGBpbmRleGAgaW4gdGhlIGFycmF5XG4gIC8vIGluIGEgYFR5cGUucHJvdG90eXBlYCBpdHNlbGYuIFRoaXMgYXZvaWRzIG1lbW9yeSBsZWFrcyB0aGF0IGNvdWxkIGJlXG4gIC8vIGNhdXNlZCBieSBzdG9yaW5nIEpTIG9iamVjdHMgb24gYSBob3N0IG9iamVjdHMuXG4gIGVsc2UgaWYgKFR5cGUuY2FsbCA9PT0gdm9pZCgwKSkge1xuICAgIHZhciBpbmRleCA9IGhvc3QuaW5kZXhPZihsYW1iZGEpXG4gICAgaWYgKGluZGV4IDwgMCkgaW5kZXggPSBob3N0LnB1c2gobGFtYmRhKSAtIDFcbiAgICAvLyBQcmVmaXggcHJpdmF0ZSBuYW1lIHdpdGggYCFgIHNvIGl0IGNhbiBiZSBkaXNwYXRjaGVkIGZyb20gdGhlIG1ldGhvZFxuICAgIC8vIHdpdGhvdXQgdHlwZSBjaGVja3MuXG4gICAgaW1wbGVtZW50KFwiIVwiICsgbWV0aG9kLCBUeXBlLnByb3RvdHlwZSwgaW5kZXgpXG4gIH1cbiAgLy8gSWYgR290IHRoYXQgZmFyIGBUeXBlYCBpcyB1c2VyIGRlZmluZWQgSlMgYENsYXNzYC4gRGVmaW5lIHByaXZhdGUgbmFtZVxuICAvLyBhcyBoaWRkZW4gcHJvcGVydHkgb24gaXQncyBwcm90b3R5cGUuXG4gIGVsc2VcbiAgICBpbXBsZW1lbnQobWV0aG9kLCBUeXBlLnByb3RvdHlwZSwgbGFtYmRhKVxufVxuXG4vLyBBbmQgcHJvdmlkZWQgaW1wbGVtZW50YXRpb25zIGZvciBhIHBvbHltb3JwaGljIGVxdWl2YWxlbnRzLlxuX2RlZmluZShkZWZpbmUsIF9kZWZpbmUpXG5fZGVmaW5lKGltcGxlbWVudCwgX2ltcGxlbWVudClcblxuLy8gRGVmaW5lIGV4cG9ydHMgb24gYE1ldGhvZGAgYXMgaXQncyBvbmx5IHRoaW5nIGJlaW5nIGV4cG9ydGVkLlxuTWV0aG9kLmltcGxlbWVudCA9IGltcGxlbWVudFxuTWV0aG9kLmRlZmluZSA9IGRlZmluZVxuTWV0aG9kLk1ldGhvZCA9IE1ldGhvZFxuTWV0aG9kLm1ldGhvZCA9IE1ldGhvZFxuTWV0aG9kLmJ1aWx0aW4gPSBidWlsdGluXG5NZXRob2QuaG9zdCA9IGhvc3RcblxubW9kdWxlLmV4cG9ydHMgPSBNZXRob2RcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWV0aG9kID0gcmVxdWlyZShcIm1ldGhvZFwiKVxuXG4vLyBNZXRob2QgaXMgZGVzaWduZWQgdG8gd29yayB3aXRoIGRhdGEgc3RydWN0dXJlcyByZXByZXNlbnRpbmcgYXBwbGljYXRpb25cbi8vIHN0YXRlLiBDYWxsaW5nIGl0IHdpdGggYSBzdGF0ZSBzaG91bGQgcmV0dXJuIG9iamVjdCByZXByZXNlbnRpbmcgYGRlbHRhYFxuLy8gdGhhdCBoYXMgYmVpbmcgYXBwbGllZCB0byBhIHByZXZpb3VzIHN0YXRlIHRvIGdldCB0byBhIGN1cnJlbnQgc3RhdGUuXG4vL1xuLy8gRXhhbXBsZVxuLy9cbi8vIGRpZmYoc3RhdGUpIC8vID0+IHsgXCJpdGVtLWlkLTFcIjogeyB0aXRsZTogXCJzb21lIHRpdGxlXCIgfSBcIml0ZW0taWQtMlwiOiBudWxsIH1cbnZhciBkaWZmID0gbWV0aG9kKFwiZGlmZlwiKVxuXG4vLyBkaWZmIGJldHdlZW4gYG51bGxgIC8gYHVuZGVmaW5lZGAgdG8gYW55IGhhc2ggaXMgYSBoYXNoIGl0c2VsZi5cbmRpZmYuZGVmaW5lKG51bGwsIGZ1bmN0aW9uKGZyb20sIHRvKSB7IHJldHVybiB0byB9KVxuZGlmZi5kZWZpbmUodW5kZWZpbmVkLCBmdW5jdGlvbihmcm9tLCB0bykgeyByZXR1cm4gdG8gfSlcbmRpZmYuZGVmaW5lKE9iamVjdCwgZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgcmV0dXJuIGNhbGN1bGF0ZShmcm9tLCB0byB8fCB7fSkgfHwge31cbn0pXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZShmcm9tLCB0bykge1xuICB2YXIgZGlmZiA9IHt9XG4gIHZhciBjaGFuZ2VzID0gMFxuICBPYmplY3Qua2V5cyhmcm9tKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGNoYW5nZXMgPSBjaGFuZ2VzICsgMVxuICAgIGlmICghKGtleSBpbiB0bykgJiYgZnJvbVtrZXldICE9IG51bGwpIGRpZmZba2V5XSA9IG51bGxcbiAgICBlbHNlIGNoYW5nZXMgPSBjaGFuZ2VzIC0gMVxuICB9KVxuICBPYmplY3Qua2V5cyh0bykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBjaGFuZ2VzID0gY2hhbmdlcyArIDFcbiAgICB2YXIgcHJldmlvdXMgPSBmcm9tW2tleV1cbiAgICB2YXIgY3VycmVudCA9IHRvW2tleV1cbiAgICBpZiAocHJldmlvdXMgPT09IGN1cnJlbnQpIHJldHVybiAoY2hhbmdlcyA9IGNoYW5nZXMgLSAxKVxuICAgIGlmICh0eXBlb2YoY3VycmVudCkgIT09IFwib2JqZWN0XCIpIHJldHVybiBkaWZmW2tleV0gPSBjdXJyZW50XG4gICAgaWYgKHR5cGVvZihwcmV2aW91cykgIT09IFwib2JqZWN0XCIpIHJldHVybiBkaWZmW2tleV0gPSBjdXJyZW50XG4gICAgdmFyIGRlbHRhID0gY2FsY3VsYXRlKHByZXZpb3VzLCBjdXJyZW50KVxuICAgIGlmIChkZWx0YSkgZGlmZltrZXldID0gZGVsdGFcbiAgICBlbHNlIGNoYW5nZXMgPSBjaGFuZ2VzIC0gMVxuICB9KVxuICByZXR1cm4gY2hhbmdlcyA/IGRpZmYgOiBudWxsXG59XG5cbmRpZmYuY2FsY3VsYXRlID0gY2FsY3VsYXRlXG5cbm1vZHVsZS5leHBvcnRzID0gZGlmZlxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZXRob2QgPSByZXF1aXJlKFwibWV0aG9kXCIpXG52YXIgcmViYXNlID0gcmVxdWlyZShcIi4vcmViYXNlXCIpXG5cbi8vIE1ldGhvZCBpcyBkZXNpZ25lZCB0byB3b3JrIHdpdGggZGF0YSBzdHJ1Y3R1cmVzIHJlcHJlc2VudGluZyBhcHBsaWNhdGlvblxuLy8gc3RhdGUuIENhbGxpbmcgaXQgd2l0aCBhIHN0YXRlIGFuZCBkZWx0YSBzaG91bGQgcmV0dXJuIG9iamVjdCByZXByZXNlbnRpbmdcbi8vIG5ldyBzdGF0ZSwgd2l0aCBjaGFuZ2VzIGluIGBkZWx0YWAgYmVpbmcgYXBwbGllZCB0byBwcmV2aW91cy5cbi8vXG4vLyAjIyBFeGFtcGxlXG4vL1xuLy8gcGF0Y2goc3RhdGUsIHtcbi8vICAgXCJpdGVtLWlkLTFcIjogeyBjb21wbGV0ZWQ6IGZhbHNlIH0sIC8vIHVwZGF0ZVxuLy8gICBcIml0ZW0taWQtMlwiOiBudWxsICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlXG4vLyB9KVxudmFyIHBhdGNoID0gbWV0aG9kKFwicGF0Y2hcIilcbnBhdGNoLmRlZmluZShPYmplY3QsIGZ1bmN0aW9uIHBhdGNoKGhhc2gsIGRlbHRhKSB7XG4gIHJldHVybiByZWJhc2Uoe30sIGhhc2gsIGRlbHRhKVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaFxuIl19
;