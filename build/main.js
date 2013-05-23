require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"wisp/runtime":[function(require,module,exports){
module.exports=require('YbrU3i');
},{}],"YbrU3i":[function(require,module,exports){
(function(){var _ns_ = "wisp.runtime";
module.namespace = _ns_;
module.description = "Core primitives required for runtime";;

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
},{}],"wisp/sequence":[function(require,module,exports){
module.exports=require('gdziIz');
},{}],"gdziIz":[function(require,module,exports){
var _ns_ = "wisp.sequence";
module.namespace = _ns_;
var isNil = (require("./runtime")).isNil;
var isVector = (require("./runtime")).isVector;
var isFn = (require("./runtime")).isFn;
var isNumber = (require("./runtime")).isNumber;
var isString = (require("./runtime")).isString;
var isDictionary = (require("./runtime")).isDictionary;
var keyValues = (require("./runtime")).keyValues;
var str = (require("./runtime")).str;
var dec = (require("./runtime")).dec;
var inc = (require("./runtime")).inc;
var merge = (require("./runtime")).merge;;

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

},{"./runtime":"YbrU3i"}],"wisp/string":[function(require,module,exports){
module.exports=require('BI22ma');
},{}],"BI22ma":[function(require,module,exports){
var _ns_ = "wisp.string";
module.namespace = _ns_;
var str = (require("./runtime")).str;
var subs = (require("./runtime")).subs;
var reMatches = (require("./runtime")).reMatches;
var isNil = (require("./runtime")).isNil;
var isString = (require("./runtime")).isString;
var vec = (require("./sequence")).vec;
var isEmpty = (require("./sequence")).isEmpty;;

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

},{"./runtime":"YbrU3i","./sequence":"gdziIz"}],"wisp/reader":[function(require,module,exports){
module.exports=require('yCUXAg');
},{}],"yCUXAg":[function(require,module,exports){
var _ns_ = "wisp.reader";
module.namespace = _ns_;
module.description = "Reader module provides functions for reading text input\n  as wisp data structures";
var list = (require("./sequence")).list;
var isList = (require("./sequence")).isList;
var count = (require("./sequence")).count;
var isEmpty = (require("./sequence")).isEmpty;
var first = (require("./sequence")).first;
var second = (require("./sequence")).second;
var third = (require("./sequence")).third;
var rest = (require("./sequence")).rest;
var map = (require("./sequence")).map;
var vec = (require("./sequence")).vec;
var cons = (require("./sequence")).cons;
var conj = (require("./sequence")).conj;
var rest = (require("./sequence")).rest;
var concat = (require("./sequence")).concat;
var last = (require("./sequence")).last;
var butlast = (require("./sequence")).butlast;
var sort = (require("./sequence")).sort;
var lazySeq = (require("./sequence")).lazySeq;
var isOdd = (require("./runtime")).isOdd;
var dictionary = (require("./runtime")).dictionary;
var keys = (require("./runtime")).keys;
var isNil = (require("./runtime")).isNil;
var inc = (require("./runtime")).inc;
var dec = (require("./runtime")).dec;
var isVector = (require("./runtime")).isVector;
var isString = (require("./runtime")).isString;
var isNumber = (require("./runtime")).isNumber;
var isBoolean = (require("./runtime")).isBoolean;
var isObject = (require("./runtime")).isObject;
var isDictionary = (require("./runtime")).isDictionary;
var rePattern = (require("./runtime")).rePattern;
var reMatches = (require("./runtime")).reMatches;
var reFind = (require("./runtime")).reFind;
var str = (require("./runtime")).str;
var subs = (require("./runtime")).subs;
var char = (require("./runtime")).char;
var vals = (require("./runtime")).vals;
var isEqual = (require("./runtime")).isEqual;
var isSymbol = (require("./ast")).isSymbol;
var symbol = (require("./ast")).symbol;
var isKeyword = (require("./ast")).isKeyword;
var keyword = (require("./ast")).keyword;
var meta = (require("./ast")).meta;
var withMeta = (require("./ast")).withMeta;
var name = (require("./ast")).name;
var gensym = (require("./ast")).gensym;
var split = (require("./string")).split;
var join = (require("./string")).join;;

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

},{"./sequence":"gdziIz","./runtime":"YbrU3i","./ast":"nw8hg9","./string":"BI22ma"}],"wisp/ast":[function(require,module,exports){
module.exports=require('nw8hg9');
},{}],"nw8hg9":[function(require,module,exports){
var _ns_ = "wisp.ast";
module.namespace = _ns_;
var isList = (require("./sequence")).isList;
var isSequential = (require("./sequence")).isSequential;
var first = (require("./sequence")).first;
var second = (require("./sequence")).second;
var count = (require("./sequence")).count;
var last = (require("./sequence")).last;
var map = (require("./sequence")).map;
var vec = (require("./sequence")).vec;
var split = (require("./string")).split;
var join = (require("./string")).join;
var isNil = (require("./runtime")).isNil;
var isVector = (require("./runtime")).isVector;
var isNumber = (require("./runtime")).isNumber;
var isString = (require("./runtime")).isString;
var isBoolean = (require("./runtime")).isBoolean;
var isObject = (require("./runtime")).isObject;
var isDate = (require("./runtime")).isDate;
var isRePattern = (require("./runtime")).isRePattern;
var isDictionary = (require("./runtime")).isDictionary;
var str = (require("./runtime")).str;
var inc = (require("./runtime")).inc;
var subs = (require("./runtime")).subs;
var isEqual = (require("./runtime")).isEqual;;

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

},{"./sequence":"gdziIz","./string":"BI22ma","./runtime":"YbrU3i"}],"wisp/compiler":[function(require,module,exports){
module.exports=require('baogts');
},{}],"baogts":[function(require,module,exports){
var _ns_ = "wisp.compiler";
module.namespace = _ns_;
module.description = "wisp language compiler";
var readFromString = (require("./reader")).readFromString;
var meta = (require("./ast")).meta;
var withMeta = (require("./ast")).withMeta;
var isSymbol = (require("./ast")).isSymbol;
var symbol = (require("./ast")).symbol;
var isKeyword = (require("./ast")).isKeyword;
var keyword = (require("./ast")).keyword;
var namespace = (require("./ast")).namespace;
var isUnquote = (require("./ast")).isUnquote;
var isUnquoteSplicing = (require("./ast")).isUnquoteSplicing;
var isQuote = (require("./ast")).isQuote;
var isSyntaxQuote = (require("./ast")).isSyntaxQuote;
var name = (require("./ast")).name;
var gensym = (require("./ast")).gensym;
var prStr = (require("./ast")).prStr;
var isEmpty = (require("./sequence")).isEmpty;
var count = (require("./sequence")).count;
var isList = (require("./sequence")).isList;
var list = (require("./sequence")).list;
var first = (require("./sequence")).first;
var second = (require("./sequence")).second;
var third = (require("./sequence")).third;
var rest = (require("./sequence")).rest;
var cons = (require("./sequence")).cons;
var conj = (require("./sequence")).conj;
var reverse = (require("./sequence")).reverse;
var reduce = (require("./sequence")).reduce;
var vec = (require("./sequence")).vec;
var last = (require("./sequence")).last;
var repeat = (require("./sequence")).repeat;
var map = (require("./sequence")).map;
var filter = (require("./sequence")).filter;
var take = (require("./sequence")).take;
var concat = (require("./sequence")).concat;
var isOdd = (require("./runtime")).isOdd;
var isDictionary = (require("./runtime")).isDictionary;
var dictionary = (require("./runtime")).dictionary;
var merge = (require("./runtime")).merge;
var keys = (require("./runtime")).keys;
var vals = (require("./runtime")).vals;
var isContainsVector = (require("./runtime")).isContainsVector;
var mapDictionary = (require("./runtime")).mapDictionary;
var isString = (require("./runtime")).isString;
var isNumber = (require("./runtime")).isNumber;
var isVector = (require("./runtime")).isVector;
var isBoolean = (require("./runtime")).isBoolean;
var subs = (require("./runtime")).subs;
var reFind = (require("./runtime")).reFind;
var isTrue = (require("./runtime")).isTrue;
var isFalse = (require("./runtime")).isFalse;
var isNil = (require("./runtime")).isNil;
var isRePattern = (require("./runtime")).isRePattern;
var inc = (require("./runtime")).inc;
var dec = (require("./runtime")).dec;
var str = (require("./runtime")).str;
var char = (require("./runtime")).char;
var int = (require("./runtime")).int;
var isEqual = (require("./runtime")).isEqual;
var isStrictEqual = (require("./runtime")).isStrictEqual;
var split = (require("./string")).split;
var join = (require("./string")).join;
var upperCase = (require("./string")).upperCase;
var replace = (require("./string")).replace;
var writeReference = (require("./backend/javascript/writer")).writeReference;
var writeKeywordReference = (require("./backend/javascript/writer")).writeKeywordReference;
var writeKeyword = (require("./backend/javascript/writer")).writeKeyword;
var writeSymbol = (require("./backend/javascript/writer")).writeSymbol;
var writeNil = (require("./backend/javascript/writer")).writeNil;
var writeComment = (require("./backend/javascript/writer")).writeComment;
var writeNumber = (require("./backend/javascript/writer")).writeNumber;
var writeString = (require("./backend/javascript/writer")).writeString;
var writeNumber = (require("./backend/javascript/writer")).writeNumber;
var writeBoolean = (require("./backend/javascript/writer")).writeBoolean;;

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

installMacro(symbol(void(0), "import"), function(imports, path) {
  return isNil(path) ?
    list(symbol(void(0), "require"), imports) :
  isSymbol(imports) ?
    list(symbol(void(0), "def"), withMeta(imports, {
      "private": true
    }), list(symbol(void(0), "require"), path)) :
    (function loop(form, names) {
      var recur = loop;
      while (recur === loop) {
        recur = isEmpty(names) ?
        concat(list(symbol(void(0), "do*")), form) :
        (function() {
          var alias = first(names);
          var id = symbol("" + ".-" + (name(alias)));
          return (form = cons(list(symbol(void(0), "def"), withMeta(alias, {
            "private": true
          }), list(id, list(symbol(void(0), "require"), path))), form), names = rest(names), loop);
        })();
      };
      return recur;
    })(list(), imports);
});

var expandNs = function expandNs(id) {
  var params = Array.prototype.slice.call(arguments, 1);
  return (function() {
    var ns = "" + id;
    var requirer = split(ns, ".");
    var doc = isString(first(params)) ?
      first(params) :
      void(0);
    var args = doc ?
      rest(params) :
      params;
    var parseReferences = function(forms) {
      return reduce(function(references, form) {
        (references || 0)[name(first(form))] = vec(rest(form));
        return references;
      }, {}, forms);
    };
    var references = parseReferences(args);
    var idToPath = function idToPath(id) {
      var requirement = split("" + id, ".");
      var isRelative = first(requirer) === first(requirement);
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
    var makeRequire = function(from, as, name) {
      var path = idToPath(from);
      var requirement = name ?
        list(symbol(void(0), "."), list(symbol(void(0), "require"), path), symbol(void(0), "" + "-" + name)) :
        list(symbol(void(0), "require"), path);
      return as ?
        list(symbol(void(0), "def"), as, requirement) :
        requirement;
    };
    var expandRequirement = function(form) {
      var from = first(form);
      var as = ("꞉as" === second(form)) && (third(form));
      return makeRequire(from, as);
    };
    var expandUse = function(form) {
      var from = first(form);
      var directives = dictionary.apply(dictionary, vec(rest(form)));
      var names = (directives || 0)["꞉only"];
      var renames = (directives || 0)["꞉rename"];
      var namedImports = names && (map(function(name) {
        return makeRequire(from, name, name);
      }, names));
      var renamedImports = renames && (map(function(pair) {
        return makeRequire(from, second(pair), first(pair));
      }, renames));
      (function() {
        (!(typeof(__verbose__) === "undefined")) && __verbose__ ?
          console.log("Assert:", "(or names renames)") :
          void(0);
        return !(names || renames) ?
          (function() { throw new Error("" + "Assert failed: " + ("" + "Only [my.lib :only [foo bar]] form & " + "[clojure.string :rename {replace str-replace} are supported") + "\n\nAssertion:\n\n" + "(or names renames)" + "\n\nActual:\n\n" + names + "\n--------------\n", void(0)); })() :
          void(0);
      })();
      return concat([], namedImports, renamedImports);
    };
    var requireForms = (references || 0)["require"];
    var useForms = (references || 0)["use"];
    var requirements = requireForms ?
      map(expandRequirement, requireForms) :
      void(0);
    var uses = useForms ?
      concat.apply(concat, map(expandUse, useForms)) :
      void(0);
    return concat(list(symbol(void(0), "do*"), list(symbol(void(0), "def"), symbol(void(0), "*ns*"), ns), list(symbol(void(0), "set!"), list(symbol(void(0), ".-namespace"), symbol(void(0), "module")), symbol(void(0), "*ns*"))), doc ?
      [list(symbol(void(0), "set!"), list(symbol(void(0), ".-description"), symbol(void(0), "module")), doc)] :
      void(0), requirements, uses);
  })();
};
exports.expandNs = expandNs;

installMacro(symbol(void(0), "ns"), expandNs);

installMacro(symbol(void(0), "print"), function() {
  var more = Array.prototype.slice.call(arguments, 0);
  "Prints the object(s) to the output for human consumption.";
  return concat(list(symbol(void(0), ".log"), symbol(void(0), "console")), more);
})

},{"./reader":"yCUXAg","./ast":"nw8hg9","./sequence":"gdziIz","./runtime":"YbrU3i","./string":"BI22ma","./backend/javascript/writer":1}],"wisp/analyzer":[function(require,module,exports){
module.exports=require('KkLEpA');
},{}],"KkLEpA":[function(require,module,exports){
var namespace = (require("./ast")).namespace;
var name = (require("./ast")).name;
var meta = (require("./ast")).meta;
var isKeyword = (require("./ast")).isKeyword;
var isSymbol = (require("./ast")).isSymbol;
var symbol = (require("./ast")).symbol;;

var count = (require("./sequence")).count;
var rest = (require("./sequence")).rest;
var last = (require("./sequence")).last;
var first = (require("./sequence")).first;
var list = (require("./sequence")).list;
var list_ = (require("./sequence")).list_;
var isEmpty = (require("./sequence")).isEmpty;
var interleave = (require("./sequence")).interleave;
var isEvery = (require("./sequence")).isEvery;
var map = (require("./sequence")).map;
var conj = (require("./sequence")).conj;
var seq = (require("./sequence")).seq;
var isSeq = (require("./sequence")).isSeq;;

var merge = (require("./runtime")).merge;
var isNil = (require("./runtime")).isNil;
var isEqual = (require("./runtime")).isEqual;
var vals = (require("./runtime")).vals;
var keys = (require("./runtime")).keys;
var isString = (require("./runtime")).isString;
var isDictionary = (require("./runtime")).isDictionary;
var isVector = (require("./runtime")).isVector;;

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
(function(global){var _ns_ = "interactivate-wisp.main";
module.namespace = _ns_;
var interactivate = require("interactivate");
var hashare = require("codemirror-hashare");
var persist = require("codemirror-persist");
var startHost = (require("./host")).startHost;;

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
},{"./host":3,"interactivate":4,"codemirror-hashare":5,"codemirror-persist":6}],7:[function(require,module,exports){
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

},{"events":8}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
var _ns_ = "interactivate-wisp.host";
module.namespace = _ns_;
var render = require("interactivate/render");
var read_ = (require("wisp/reader")).read_;
var compile_ = (require("wisp/compiler")).compile_;
var first = (require("wisp/sequence")).first;
var rest = (require("wisp/sequence")).rest;
var list = (require("wisp/sequence")).list;
var symbol = (require("wisp/ast")).symbol;
var prStr = (require("wisp/ast")).prStr;
var subs = (require("wisp/runtime")).subs;
var inspect = (require("util")).inspect;;

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
},{"wisp/reader":"yCUXAg","wisp/compiler":"baogts","wisp/sequence":"gdziIz","wisp/ast":"nw8hg9","wisp/runtime":"YbrU3i","util":7,"interactivate/render":9}],10:[function(require,module,exports){
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
},{"__browserify_process":10}],1:[function(require,module,exports){
var _ns_ = "wisp.backend.javascript.writer";
module.namespace = _ns_;
module.description = "Compiler backend for for writing JS output";
var name = (require("./../../ast")).name;
var namespace = (require("./../../ast")).namespace;
var symbol = (require("./../../ast")).symbol;
var isSymbol = (require("./../../ast")).isSymbol;
var isKeyword = (require("./../../ast")).isKeyword;
var list = (require("./../../sequence")).list;
var first = (require("./../../sequence")).first;
var rest = (require("./../../sequence")).rest;
var isList = (require("./../../sequence")).isList;
var vec = (require("./../../sequence")).vec;
var map = (require("./../../sequence")).map;
var count = (require("./../../sequence")).count;
var last = (require("./../../sequence")).last;
var reduce = (require("./../../sequence")).reduce;
var isEmpty = (require("./../../sequence")).isEmpty;
var isTrue = (require("./../../runtime")).isTrue;
var isNil = (require("./../../runtime")).isNil;
var isString = (require("./../../runtime")).isString;
var isNumber = (require("./../../runtime")).isNumber;
var isVector = (require("./../../runtime")).isVector;
var isDictionary = (require("./../../runtime")).isDictionary;
var isBoolean = (require("./../../runtime")).isBoolean;
var isRePattern = (require("./../../runtime")).isRePattern;
var reFind = (require("./../../runtime")).reFind;
var dec = (require("./../../runtime")).dec;
var subs = (require("./../../runtime")).subs;
var replace = (require("./../../string")).replace;
var join = (require("./../../string")).join;
var split = (require("./../../string")).split;
var upperCase = (require("./../../string")).upperCase;;

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

},{"./../../ast":"nw8hg9","./../../sequence":"gdziIz","./../../runtime":"YbrU3i","./../../string":"BI22ma"}],4:[function(require,module,exports){
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvd2lzcC9ydW50aW1lLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL3dpc3Avc2VxdWVuY2UuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvd2lzcC9zdHJpbmcuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvd2lzcC9yZWFkZXIuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvd2lzcC9hc3QuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvd2lzcC9jb21waWxlci5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy93aXNwL2FuYWx5emVyLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbWFpbi5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXJlc29sdmUvYnVpbHRpbi91dGlsLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL2NvZGVtaXJyb3ItaGFzaGFyZS9jb3JlLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL2NvZGVtaXJyb3ItcGVyc2lzdC9jb3JlLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvaG9zdC5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXJlc29sdmUvYnVpbHRpbi9ldmVudHMuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvd2lzcC9iYWNrZW5kL2phdmFzY3JpcHQvd3JpdGVyLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL2ludGVyYWN0aXZhdGUvaW50ZXJhY3RpdmF0ZS5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9pbnRlcmFjdGl2YXRlL291dHB1dC5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9pbnRlcmFjdGl2YXRlL3JlbmRlci5qcyIsIi9Vc2Vycy9nb3phbGEvUHJvamVjdHMvd2lzcC9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9pbnRlcmFjdGl2YXRlL25vZGVfbW9kdWxlcy9kaWZmcGF0Y2hlci9yZWJhc2UuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvaW50ZXJhY3RpdmF0ZS92aWV3LmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL21ldGhvZC9jb3JlLmpzIiwiL1VzZXJzL2dvemFsYS9Qcm9qZWN0cy93aXNwL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL2ludGVyYWN0aXZhdGUvbm9kZV9tb2R1bGVzL2RpZmZwYXRjaGVyL2RpZmYuanMiLCIvVXNlcnMvZ296YWxhL1Byb2plY3RzL3dpc3AvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvaW50ZXJhY3RpdmF0ZS9ub2RlX21vZHVsZXMvZGlmZnBhdGNoZXIvcGF0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdG1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaHhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbGdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7dmFyIF9uc18gPSBcIndpc3AucnVudGltZVwiO1xubW9kdWxlLm5hbWVzcGFjZSA9IF9uc187XG5tb2R1bGUuZGVzY3JpcHRpb24gPSBcIkNvcmUgcHJpbWl0aXZlcyByZXF1aXJlZCBmb3IgcnVudGltZVwiOztcblxudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICByZXR1cm4geDtcbn07XG5leHBvcnRzLmlkZW50aXR5ID0gaWRlbnRpdHk7XG5cbnZhciBpc09kZCA9IGZ1bmN0aW9uIGlzT2RkKG4pIHtcbiAgcmV0dXJuIG4gJSAyID09PSAxO1xufTtcbmV4cG9ydHMuaXNPZGQgPSBpc09kZDtcblxudmFyIGlzRXZlbiA9IGZ1bmN0aW9uIGlzRXZlbihuKSB7XG4gIHJldHVybiBuICUgMiA9PT0gMDtcbn07XG5leHBvcnRzLmlzRXZlbiA9IGlzRXZlbjtcblxudmFyIGlzRGljdGlvbmFyeSA9IGZ1bmN0aW9uIGlzRGljdGlvbmFyeShmb3JtKSB7XG4gIHJldHVybiAoaXNPYmplY3QoZm9ybSkpICYmIChpc09iamVjdChPYmplY3QuZ2V0UHJvdG90eXBlT2YoZm9ybSkpKSAmJiAoaXNOaWwoT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihmb3JtKSkpKTtcbn07XG5leHBvcnRzLmlzRGljdGlvbmFyeSA9IGlzRGljdGlvbmFyeTtcblxudmFyIGRpY3Rpb25hcnkgPSBmdW5jdGlvbiBkaWN0aW9uYXJ5KCkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3Aoa2V5VmFsdWVzLCByZXN1bHQpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBrZXlWYWx1ZXMubGVuZ3RoID9cbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgKHJlc3VsdCB8fCAwKVsoa2V5VmFsdWVzIHx8IDApWzBdXSA9IChrZXlWYWx1ZXMgfHwgMClbMV07XG4gICAgICAgIHJldHVybiAoa2V5VmFsdWVzID0ga2V5VmFsdWVzLnNsaWNlKDIpLCByZXN1bHQgPSByZXN1bHQsIGxvb3ApO1xuICAgICAgfSkoKSA6XG4gICAgICByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksIHt9KTtcbn07XG5leHBvcnRzLmRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5O1xuXG52YXIga2V5cyA9IGZ1bmN0aW9uIGtleXMoZGljdGlvbmFyeSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGljdGlvbmFyeSk7XG59O1xuZXhwb3J0cy5rZXlzID0ga2V5cztcblxudmFyIHZhbHMgPSBmdW5jdGlvbiB2YWxzKGRpY3Rpb25hcnkpIHtcbiAgcmV0dXJuIGtleXMoZGljdGlvbmFyeSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiAoZGljdGlvbmFyeSB8fCAwKVtrZXldO1xuICB9KTtcbn07XG5leHBvcnRzLnZhbHMgPSB2YWxzO1xuXG52YXIga2V5VmFsdWVzID0gZnVuY3Rpb24ga2V5VmFsdWVzKGRpY3Rpb25hcnkpIHtcbiAgcmV0dXJuIGtleXMoZGljdGlvbmFyeSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBba2V5LCAoZGljdGlvbmFyeSB8fCAwKVtrZXldXTtcbiAgfSk7XG59O1xuZXhwb3J0cy5rZXlWYWx1ZXMgPSBrZXlWYWx1ZXM7XG5cbnZhciBtZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QucHJvdG90eXBlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLnJlZHVjZShmdW5jdGlvbihkZXNjcmlwdG9yLCBkaWN0aW9uYXJ5KSB7XG4gICAgaXNPYmplY3QoZGljdGlvbmFyeSkgP1xuICAgICAgT2JqZWN0LmtleXMoZGljdGlvbmFyeSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIChkZXNjcmlwdG9yIHx8IDApW2tleV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRpY3Rpb25hcnksIGtleSk7XG4gICAgICB9KSA6XG4gICAgICB2b2lkKDApO1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9LCBPYmplY3QuY3JlYXRlKE9iamVjdC5wcm90b3R5cGUpKSk7XG59O1xuZXhwb3J0cy5tZXJnZSA9IG1lcmdlO1xuXG52YXIgaXNDb250YWluc1ZlY3RvciA9IGZ1bmN0aW9uIGlzQ29udGFpbnNWZWN0b3IodmVjdG9yLCBlbGVtZW50KSB7XG4gIHJldHVybiB2ZWN0b3IuaW5kZXhPZihlbGVtZW50KSA+PSAwO1xufTtcbmV4cG9ydHMuaXNDb250YWluc1ZlY3RvciA9IGlzQ29udGFpbnNWZWN0b3I7XG5cbnZhciBtYXBEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gbWFwRGljdGlvbmFyeShzb3VyY2UsIGYpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gICAgKHRhcmdldCB8fCAwKVtrZXldID0gZigoc291cmNlIHx8IDApW2tleV0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sIHt9KTtcbn07XG5leHBvcnRzLm1hcERpY3Rpb25hcnkgPSBtYXBEaWN0aW9uYXJ5O1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuXG52YXIgaXNGbiA9IHR5cGVvZigvLi8pID09PSBcImZ1bmN0aW9uXCIgP1xuICBmdW5jdGlvbiBpc0ZuKHgpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xuICB9IDpcbiAgZnVuY3Rpb24gaXNGbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZih4KSA9PT0gXCJmdW5jdGlvblwiO1xuICB9O1xuZXhwb3J0cy5pc0ZuID0gaXNGbjtcblxudmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICByZXR1cm4gKHR5cGVvZih4KSA9PT0gXCJzdHJpbmdcIikgfHwgKHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBTdHJpbmddXCIpO1xufTtcbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxudmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICByZXR1cm4gKHR5cGVvZih4KSA9PT0gXCJudW1iZXJcIikgfHwgKHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBOdW1iZXJdXCIpO1xufTtcbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxudmFyIGlzVmVjdG9yID0gaXNGbihBcnJheS5pc0FycmF5KSA/XG4gIEFycmF5LmlzQXJyYXkgOlxuICBmdW5jdGlvbiBpc1ZlY3Rvcih4KSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgfTtcbmV4cG9ydHMuaXNWZWN0b3IgPSBpc1ZlY3RvcjtcblxudmFyIGlzRGF0ZSA9IGZ1bmN0aW9uIGlzRGF0ZSh4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgRGF0ZV1cIjtcbn07XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxudmFyIGlzQm9vbGVhbiA9IGZ1bmN0aW9uIGlzQm9vbGVhbih4KSB7XG4gIHJldHVybiAoeCA9PT0gdHJ1ZSkgfHwgKHggPT09IGZhbHNlKSB8fCAodG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IEJvb2xlYW5dXCIpO1xufTtcbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG52YXIgaXNSZVBhdHRlcm4gPSBmdW5jdGlvbiBpc1JlUGF0dGVybih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgUmVnRXhwXVwiO1xufTtcbmV4cG9ydHMuaXNSZVBhdHRlcm4gPSBpc1JlUGF0dGVybjtcblxudmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICByZXR1cm4geCAmJiAodHlwZW9mKHgpID09PSBcIm9iamVjdFwiKTtcbn07XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbnZhciBpc05pbCA9IGZ1bmN0aW9uIGlzTmlsKHgpIHtcbiAgcmV0dXJuICh4ID09PSB2b2lkKDApKSB8fCAoeCA9PT0gbnVsbCk7XG59O1xuZXhwb3J0cy5pc05pbCA9IGlzTmlsO1xuXG52YXIgaXNUcnVlID0gZnVuY3Rpb24gaXNUcnVlKHgpIHtcbiAgcmV0dXJuIHggPT09IHRydWU7XG59O1xuZXhwb3J0cy5pc1RydWUgPSBpc1RydWU7XG5cbnZhciBpc0ZhbHNlID0gZnVuY3Rpb24gaXNGYWxzZSh4KSB7XG4gIHJldHVybiB4ID09PSB0cnVlO1xufTtcbmV4cG9ydHMuaXNGYWxzZSA9IGlzRmFsc2U7XG5cbnZhciByZUZpbmQgPSBmdW5jdGlvbiByZUZpbmQocmUsIHMpIHtcbiAgdmFyIG1hdGNoZXMgPSByZS5leGVjKHMpO1xuICByZXR1cm4gIShpc05pbChtYXRjaGVzKSkgP1xuICAgIG1hdGNoZXMubGVuZ3RoID09PSAxID9cbiAgICAgIChtYXRjaGVzIHx8IDApWzBdIDpcbiAgICAgIG1hdGNoZXMgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5yZUZpbmQgPSByZUZpbmQ7XG5cbnZhciByZU1hdGNoZXMgPSBmdW5jdGlvbiByZU1hdGNoZXMocGF0dGVybiwgc291cmNlKSB7XG4gIHZhciBtYXRjaGVzID0gcGF0dGVybi5leGVjKHNvdXJjZSk7XG4gIHJldHVybiAoIShpc05pbChtYXRjaGVzKSkpICYmICgobWF0Y2hlcyB8fCAwKVswXSA9PT0gc291cmNlKSA/XG4gICAgbWF0Y2hlcy5sZW5ndGggPT09IDEgP1xuICAgICAgKG1hdGNoZXMgfHwgMClbMF0gOlxuICAgICAgbWF0Y2hlcyA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnJlTWF0Y2hlcyA9IHJlTWF0Y2hlcztcblxudmFyIHJlUGF0dGVybiA9IGZ1bmN0aW9uIHJlUGF0dGVybihzKSB7XG4gIHZhciBtYXRjaCA9IHJlRmluZCgvXig/OlxcKFxcPyhbaWRtc3V4XSopXFwpKT8oLiopLywgcyk7XG4gIHJldHVybiBuZXcgUmVnRXhwKChtYXRjaCB8fCAwKVsyXSwgKG1hdGNoIHx8IDApWzFdKTtcbn07XG5leHBvcnRzLnJlUGF0dGVybiA9IHJlUGF0dGVybjtcblxudmFyIGluYyA9IGZ1bmN0aW9uIGluYyh4KSB7XG4gIHJldHVybiB4ICsgMTtcbn07XG5leHBvcnRzLmluYyA9IGluYztcblxudmFyIGRlYyA9IGZ1bmN0aW9uIGRlYyh4KSB7XG4gIHJldHVybiB4IC0gMTtcbn07XG5leHBvcnRzLmRlYyA9IGRlYztcblxudmFyIHN0ciA9IGZ1bmN0aW9uIHN0cigpIHtcbiAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFwiXCIsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5zdHIgPSBzdHI7XG5cbnZhciBjaGFyID0gZnVuY3Rpb24gY2hhcihjb2RlKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xufTtcbmV4cG9ydHMuY2hhciA9IGNoYXI7XG5cbnZhciBpbnQgPSBmdW5jdGlvbiBpbnQoeCkge1xuICByZXR1cm4gaXNOdW1iZXIoeCkgP1xuICAgIHggPj0gMCA/XG4gICAgICBNYXRoLmZsb29yKHgpIDpcbiAgICAgIE1hdGguZmxvb3IoeCkgOlxuICAgIHguY2hhckNvZGVBdCgwKTtcbn07XG5leHBvcnRzLmludCA9IGludDtcblxudmFyIHN1YnMgPSBmdW5jdGlvbiBzdWJzKHN0cmluZywgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbn07XG5leHBvcnRzLnN1YnMgPSBzdWJzO1xuXG52YXIgaXNQYXR0ZXJuRXF1YWwgPSBmdW5jdGlvbiBpc1BhdHRlcm5FcXVhbCh4LCB5KSB7XG4gIHJldHVybiAoaXNSZVBhdHRlcm4oeCkpICYmIChpc1JlUGF0dGVybih5KSkgJiYgKHguc291cmNlID09PSB5LnNvdXJjZSkgJiYgKHguZ2xvYmFsID09PSB5Lmdsb2JhbCkgJiYgKHgubXVsdGlsaW5lID09PSB5Lm11bHRpbGluZSkgJiYgKHguaWdub3JlQ2FzZSA9PT0geS5pZ25vcmVDYXNlKTtcbn07XG5cbnZhciBpc0RhdGVFcXVhbCA9IGZ1bmN0aW9uIGlzRGF0ZUVxdWFsKHgsIHkpIHtcbiAgcmV0dXJuIChpc0RhdGUoeCkpICYmIChpc0RhdGUoeSkpICYmIChOdW1iZXIoeCkgPT09IE51bWJlcih5KSk7XG59O1xuXG52YXIgaXNEaWN0aW9uYXJ5RXF1YWwgPSBmdW5jdGlvbiBpc0RpY3Rpb25hcnlFcXVhbCh4LCB5KSB7XG4gIHJldHVybiAoaXNPYmplY3QoeCkpICYmIChpc09iamVjdCh5KSkgJiYgKChmdW5jdGlvbigpIHtcbiAgICB2YXIgeEtleXMgPSBrZXlzKHgpO1xuICAgIHZhciB5S2V5cyA9IGtleXMoeSk7XG4gICAgdmFyIHhDb3VudCA9IHhLZXlzLmxlbmd0aDtcbiAgICB2YXIgeUNvdW50ID0geUtleXMubGVuZ3RoO1xuICAgIHJldHVybiAoeENvdW50ID09PSB5Q291bnQpICYmICgoZnVuY3Rpb24gbG9vcChpbmRleCwgY291bnQsIGtleXMpIHtcbiAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgcmVjdXIgPSBpbmRleCA8IGNvdW50ID9cbiAgICAgICAgaXNFcXVpdmFsZW50KCh4IHx8IDApWyhrZXlzIHx8IDApW2luZGV4XV0sICh5IHx8IDApWyhrZXlzIHx8IDApW2luZGV4XV0pID9cbiAgICAgICAgICAoaW5kZXggPSBpbmMoaW5kZXgpLCBjb3VudCA9IGNvdW50LCBrZXlzID0ga2V5cywgbG9vcCkgOlxuICAgICAgICAgIGZhbHNlIDpcbiAgICAgICAgdHJ1ZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVjdXI7XG4gICAgfSkoMCwgeENvdW50LCB4S2V5cykpO1xuICB9KSgpKTtcbn07XG5cbnZhciBpc1ZlY3RvckVxdWFsID0gZnVuY3Rpb24gaXNWZWN0b3JFcXVhbCh4LCB5KSB7XG4gIHJldHVybiAoaXNWZWN0b3IoeCkpICYmIChpc1ZlY3Rvcih5KSkgJiYgKHgubGVuZ3RoID09PSB5Lmxlbmd0aCkgJiYgKChmdW5jdGlvbiBsb29wKHhzLCB5cywgaW5kZXgsIGNvdW50KSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaW5kZXggPCBjb3VudCA/XG4gICAgICBpc0VxdWl2YWxlbnQoKHhzIHx8IDApW2luZGV4XSwgKHlzIHx8IDApW2luZGV4XSkgP1xuICAgICAgICAoeHMgPSB4cywgeXMgPSB5cywgaW5kZXggPSBpbmMoaW5kZXgpLCBjb3VudCA9IGNvdW50LCBsb29wKSA6XG4gICAgICAgIGZhbHNlIDpcbiAgICAgIHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKHgsIHksIDAsIHgubGVuZ3RoKSk7XG59O1xuXG52YXIgaXNFcXVpdmFsZW50ID0gZnVuY3Rpb24gaXNFcXVpdmFsZW50KHgsIHkpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuICh4ID09PSB5KSB8fCAoaXNOaWwoeCkgP1xuICAgICAgICBpc05pbCh5KSA6XG4gICAgICBpc05pbCh5KSA/XG4gICAgICAgIGlzTmlsKHgpIDpcbiAgICAgIGlzU3RyaW5nKHgpID9cbiAgICAgICAgZmFsc2UgOlxuICAgICAgaXNOdW1iZXIoeCkgP1xuICAgICAgICBmYWxzZSA6XG4gICAgICBpc0ZuKHgpID9cbiAgICAgICAgZmFsc2UgOlxuICAgICAgaXNCb29sZWFuKHgpID9cbiAgICAgICAgZmFsc2UgOlxuICAgICAgaXNEYXRlKHgpID9cbiAgICAgICAgaXNEYXRlRXF1YWwoeCwgeSkgOlxuICAgICAgaXNWZWN0b3IoeCkgP1xuICAgICAgICBpc1ZlY3RvckVxdWFsKHgsIHksIFtdLCBbXSkgOlxuICAgICAgaXNSZVBhdHRlcm4oeCkgP1xuICAgICAgICBpc1BhdHRlcm5FcXVhbCh4LCB5KSA6XG4gICAgICBcImVsc2VcIiA/XG4gICAgICAgIGlzRGljdGlvbmFyeUVxdWFsKHgsIHkpIDpcbiAgICAgICAgdm9pZCgwKSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIG1vcmUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgICAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHByZXZpb3VzLCBjdXJyZW50LCBpbmRleCwgY291bnQpIHtcbiAgICAgICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICAgICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICAgICAgcmVjdXIgPSAoaXNFcXVpdmFsZW50KHByZXZpb3VzLCBjdXJyZW50KSkgJiYgKGluZGV4IDwgY291bnQgP1xuICAgICAgICAgIChwcmV2aW91cyA9IGN1cnJlbnQsIGN1cnJlbnQgPSAobW9yZSB8fCAwKVtpbmRleF0sIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KSh4LCB5LCAwLCBtb3JlLmxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB2b2lkKDApO1xufTtcblxudmFyIGlzRXF1YWwgPSBpc0VxdWl2YWxlbnQ7XG5leHBvcnRzLmlzRXF1YWwgPSBpc0VxdWFsO1xuXG52YXIgaXNTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIGlzU3RyaWN0RXF1YWwoeCwgeSkge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCA9PT0geTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbW9yZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AocHJldmlvdXMsIGN1cnJlbnQsIGluZGV4LCBjb3VudCkge1xuICAgICAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgICByZWN1ciA9IChwcmV2aW91cyA9PT0gY3VycmVudCkgJiYgKGluZGV4IDwgY291bnQgP1xuICAgICAgICAgIChwcmV2aW91cyA9IGN1cnJlbnQsIGN1cnJlbnQgPSAobW9yZSB8fCAwKVtpbmRleF0sIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KSh4LCB5LCAwLCBtb3JlLmxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB2b2lkKDApO1xufTtcbmV4cG9ydHMuaXNTdHJpY3RFcXVhbCA9IGlzU3RyaWN0RXF1YWw7XG5cbnZhciBncmVhdGVyVGhhbiA9IGZ1bmN0aW9uIGdyZWF0ZXJUaGFuKHgsIHkpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggPiB5O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBtb3JlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcChwcmV2aW91cywgY3VycmVudCwgaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICAgIHJlY3VyID0gKHByZXZpb3VzID4gY3VycmVudCkgJiYgKGluZGV4IDwgY291bnQgP1xuICAgICAgICAgIChwcmV2aW91cyA9IGN1cnJlbnQsIGN1cnJlbnQgPSAobW9yZSB8fCAwKVtpbmRleF0sIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KSh4LCB5LCAwLCBtb3JlLmxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB2b2lkKDApO1xufTtcbmV4cG9ydHMuZ3JlYXRlclRoYW4gPSBncmVhdGVyVGhhbjtcblxudmFyIG5vdExlc3NUaGFuID0gZnVuY3Rpb24gbm90TGVzc1RoYW4oeCwgeSkge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCA+PSB5O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBtb3JlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcChwcmV2aW91cywgY3VycmVudCwgaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICAgIHJlY3VyID0gKHByZXZpb3VzID49IGN1cnJlbnQpICYmIChpbmRleCA8IGNvdW50ID9cbiAgICAgICAgICAocHJldmlvdXMgPSBjdXJyZW50LCBjdXJyZW50ID0gKG1vcmUgfHwgMClbaW5kZXhdLCBpbmRleCA9IGluYyhpbmRleCksIGNvdW50ID0gY291bnQsIGxvb3ApIDpcbiAgICAgICAgICB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlY3VyO1xuICAgICAgfSkoeCwgeSwgMCwgbW9yZS5sZW5ndGgpO1xuICB9O1xuICByZXR1cm4gdm9pZCgwKTtcbn07XG5leHBvcnRzLm5vdExlc3NUaGFuID0gbm90TGVzc1RoYW47XG5cbnZhciBsZXNzVGhhbiA9IGZ1bmN0aW9uIGxlc3NUaGFuKHgsIHkpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggPCB5O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBtb3JlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcChwcmV2aW91cywgY3VycmVudCwgaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICAgIHJlY3VyID0gKHByZXZpb3VzIDwgY3VycmVudCkgJiYgKGluZGV4IDwgY291bnQgP1xuICAgICAgICAgIChwcmV2aW91cyA9IGN1cnJlbnQsIGN1cnJlbnQgPSAobW9yZSB8fCAwKVtpbmRleF0sIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KSh4LCB5LCAwLCBtb3JlLmxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB2b2lkKDApO1xufTtcbmV4cG9ydHMubGVzc1RoYW4gPSBsZXNzVGhhbjtcblxudmFyIG5vdEdyZWF0ZXJUaGFuID0gZnVuY3Rpb24gbm90R3JlYXRlclRoYW4oeCwgeSkge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCA8PSB5O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBtb3JlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcChwcmV2aW91cywgY3VycmVudCwgaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICAgIHJlY3VyID0gKHByZXZpb3VzIDw9IGN1cnJlbnQpICYmIChpbmRleCA8IGNvdW50ID9cbiAgICAgICAgICAocHJldmlvdXMgPSBjdXJyZW50LCBjdXJyZW50ID0gKG1vcmUgfHwgMClbaW5kZXhdLCBpbmRleCA9IGluYyhpbmRleCksIGNvdW50ID0gY291bnQsIGxvb3ApIDpcbiAgICAgICAgICB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlY3VyO1xuICAgICAgfSkoeCwgeSwgMCwgbW9yZS5sZW5ndGgpO1xuICB9O1xuICByZXR1cm4gdm9pZCgwKTtcbn07XG5leHBvcnRzLm5vdEdyZWF0ZXJUaGFuID0gbm90R3JlYXRlclRoYW47XG5cbnZhciBzdW0gPSBmdW5jdGlvbiBzdW0oYSwgYiwgYywgZCwgZSwgZikge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gMDtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gYTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGEgKyBiICsgYztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gYSArIGIgKyBjICsgZDtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gYSArIGIgKyBjICsgZCArIGU7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGEgKyBiICsgYyArIGQgKyBlICsgZjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbW9yZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgNik7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AodmFsdWUsIGluZGV4LCBjb3VudCkge1xuICAgICAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgICByZWN1ciA9IGluZGV4IDwgY291bnQgP1xuICAgICAgICAgICh2YWx1ZSA9IHZhbHVlICsgKChtb3JlIHx8IDApW2luZGV4XSksIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KShhICsgYiArIGMgKyBkICsgZSArIGYsIDAsIG1vcmUubGVuZ3RoKTtcbiAgfTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5zdW0gPSBzdW07XG5cbnZhciBzdWJ0cmFjdCA9IGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIChmdW5jdGlvbigpIHsgdGhyb3cgVHlwZUVycm9yKFwiV3JvbmcgbnVtYmVyIG9mIGFyZ3MgcGFzc2VkIHRvOiAtXCIpOyB9KSgpO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAwIC0gYTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGEgLSBiIC0gYztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gYSAtIGIgLSBjIC0gZDtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gYSAtIGIgLSBjIC0gZCAtIGU7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGEgLSBiIC0gYyAtIGQgLSBlIC0gZjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbW9yZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgNik7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AodmFsdWUsIGluZGV4LCBjb3VudCkge1xuICAgICAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgICByZWN1ciA9IGluZGV4IDwgY291bnQgP1xuICAgICAgICAgICh2YWx1ZSA9IHZhbHVlIC0gKChtb3JlIHx8IDApW2luZGV4XSksIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KShhIC0gYiAtIGMgLSBkIC0gZSAtIGYsIDAsIG1vcmUubGVuZ3RoKTtcbiAgfTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5zdWJ0cmFjdCA9IHN1YnRyYWN0O1xuXG52YXIgZGl2aWRlID0gZnVuY3Rpb24gZGl2aWRlKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIChmdW5jdGlvbigpIHsgdGhyb3cgVHlwZUVycm9yKFwiV3JvbmcgbnVtYmVyIG9mIGFyZ3MgcGFzc2VkIHRvOiAvXCIpOyB9KSgpO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAxIC8gYTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYSAvIGI7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGEgLyBiIC8gYztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gYSAvIGIgLyBjIC8gZDtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gYSAvIGIgLyBjIC8gZCAvIGU7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGEgLyBiIC8gYyAvIGQgLyBlIC8gZjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbW9yZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgNik7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AodmFsdWUsIGluZGV4LCBjb3VudCkge1xuICAgICAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgICByZWN1ciA9IGluZGV4IDwgY291bnQgP1xuICAgICAgICAgICh2YWx1ZSA9IHZhbHVlIC8gKChtb3JlIHx8IDApW2luZGV4XSksIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KShhIC8gYiAvIGMgLyBkIC8gZSAvIGYsIDAsIG1vcmUubGVuZ3RoKTtcbiAgfTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5kaXZpZGUgPSBkaXZpZGU7XG5cbnZhciBtdWx0aXBseSA9IGZ1bmN0aW9uIG11bHRpcGx5KGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIDE7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGE7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGEgKiBiO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBhICogYiAqIGM7XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIGEgKiBiICogYyAqIGQ7XG4gICAgY2FzZSA1OlxuICAgICAgcmV0dXJuIGEgKiBiICogYyAqIGQgKiBlO1xuICAgIGNhc2UgNjpcbiAgICAgIHJldHVybiBhICogYiAqIGMgKiBkICogZSAqIGY7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIG1vcmUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDYpO1xuICAgICAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHZhbHVlLCBpbmRleCwgY291bnQpIHtcbiAgICAgICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICAgICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICAgICAgcmVjdXIgPSBpbmRleCA8IGNvdW50ID9cbiAgICAgICAgICAodmFsdWUgPSB2YWx1ZSAqICgobW9yZSB8fCAwKVtpbmRleF0pLCBpbmRleCA9IGluYyhpbmRleCksIGNvdW50ID0gY291bnQsIGxvb3ApIDpcbiAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlY3VyO1xuICAgICAgfSkoYSAqIGIgKiBjICogZCAqIGUgKiBmLCAwLCBtb3JlLmxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB2b2lkKDApO1xufTtcbmV4cG9ydHMubXVsdGlwbHkgPSBtdWx0aXBseTtcblxudmFyIGFuZCA9IGZ1bmN0aW9uIGFuZChhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBhO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBhICYmIGI7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGEgJiYgYiAmJiBjO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBhICYmIGIgJiYgYyAmJiBkO1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBhICYmIGIgJiYgYyAmJiBkICYmIGU7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGEgJiYgYiAmJiBjICYmIGQgJiYgZSAmJiBmO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBtb3JlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCA2KTtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcCh2YWx1ZSwgaW5kZXgsIGNvdW50KSB7XG4gICAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICAgIHJlY3VyID0gaW5kZXggPCBjb3VudCA/XG4gICAgICAgICAgKHZhbHVlID0gdmFsdWUgJiYgKChtb3JlIHx8IDApW2luZGV4XSksIGluZGV4ID0gaW5jKGluZGV4KSwgY291bnQgPSBjb3VudCwgbG9vcCkgOlxuICAgICAgICAgIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICB9KShhICYmIGIgJiYgYyAmJiBkICYmIGUgJiYgZiwgMCwgbW9yZS5sZW5ndGgpO1xuICB9O1xuICByZXR1cm4gdm9pZCgwKTtcbn07XG5leHBvcnRzLmFuZCA9IGFuZDtcblxudmFyIG9yID0gZnVuY3Rpb24gb3IoYSwgYiwgYywgZCwgZSwgZikge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gdm9pZCgwKTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gYTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYSB8fCBiO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBhIHx8IGIgfHwgYztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gYSB8fCBiIHx8IGMgfHwgZDtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gYSB8fCBiIHx8IGMgfHwgZCB8fCBlO1xuICAgIGNhc2UgNjpcbiAgICAgIHJldHVybiBhIHx8IGIgfHwgYyB8fCBkIHx8IGUgfHwgZjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbW9yZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgNik7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AodmFsdWUsIGluZGV4LCBjb3VudCkge1xuICAgICAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgICByZWN1ciA9IGluZGV4IDwgY291bnQgP1xuICAgICAgICAgICh2YWx1ZSA9IHZhbHVlIHx8ICgobW9yZSB8fCAwKVtpbmRleF0pLCBpbmRleCA9IGluYyhpbmRleCksIGNvdW50ID0gY291bnQsIGxvb3ApIDpcbiAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlY3VyO1xuICAgICAgfSkoYSB8fCBiIHx8IGMgfHwgZCB8fCBlIHx8IGYsIDAsIG1vcmUubGVuZ3RoKTtcbiAgfTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5vciA9IG9yO1xuXG52YXIgcHJpbnQgPSBmdW5jdGlvbiBwcmludCgpIHtcbiAgdmFyIG1vcmUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZS5sb2csIG1vcmUpO1xufTtcbmV4cG9ydHMucHJpbnQgPSBwcmludFxuXG59KSgpIiwidmFyIF9uc18gPSBcIndpc3Auc2VxdWVuY2VcIjtcbm1vZHVsZS5uYW1lc3BhY2UgPSBfbnNfO1xudmFyIGlzTmlsID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzTmlsO1xudmFyIGlzVmVjdG9yID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzVmVjdG9yO1xudmFyIGlzRm4gPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNGbjtcbnZhciBpc051bWJlciA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc051bWJlcjtcbnZhciBpc1N0cmluZyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc1N0cmluZztcbnZhciBpc0RpY3Rpb25hcnkgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNEaWN0aW9uYXJ5O1xudmFyIGtleVZhbHVlcyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5rZXlWYWx1ZXM7XG52YXIgc3RyID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLnN0cjtcbnZhciBkZWMgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuZGVjO1xudmFyIGluYyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pbmM7XG52YXIgbWVyZ2UgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkubWVyZ2U7O1xuXG52YXIgTGlzdCA9IGZ1bmN0aW9uIExpc3QoaGVhZCwgdGFpbCkge1xuICB0aGlzLmhlYWQgPSBoZWFkO1xuICB0aGlzLnRhaWwgPSB0YWlsIHx8IChsaXN0KCkpO1xuICB0aGlzLmxlbmd0aCA9IGluYyhjb3VudCh0aGlzLnRhaWwpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5MaXN0LnByb3RvdHlwZS5sZW5ndGggPSAwO1xuXG5MaXN0LnR5cGUgPSBcIndpc3AubGlzdFwiO1xuXG5MaXN0LnByb3RvdHlwZS50eXBlID0gTGlzdC50eXBlO1xuXG5MaXN0LnByb3RvdHlwZS50YWlsID0gT2JqZWN0LmNyZWF0ZShMaXN0LnByb3RvdHlwZSk7XG5cbkxpc3QucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChyZXN1bHQsIGxpc3QpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBpc0VtcHR5KGxpc3QpID9cbiAgICAgIFwiXCIgKyBcIihcIiArIChyZXN1bHQuc3Vic3RyKDEpKSArIFwiKVwiIDpcbiAgICAgIChyZXN1bHQgPSBcIlwiICsgcmVzdWx0ICsgXCIgXCIgKyAoaXNWZWN0b3IoZmlyc3QobGlzdCkpID9cbiAgICAgICAgXCJcIiArIFwiW1wiICsgKGZpcnN0KGxpc3QpLmpvaW4oXCIgXCIpKSArIFwiXVwiIDpcbiAgICAgIGlzTmlsKGZpcnN0KGxpc3QpKSA/XG4gICAgICAgIFwibmlsXCIgOlxuICAgICAgaXNTdHJpbmcoZmlyc3QobGlzdCkpID9cbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZmlyc3QobGlzdCkpIDpcbiAgICAgIGlzTnVtYmVyKGZpcnN0KGxpc3QpKSA/XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGZpcnN0KGxpc3QpKSA6XG4gICAgICAgIGZpcnN0KGxpc3QpKSwgbGlzdCA9IHJlc3QobGlzdCksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShcIlwiLCB0aGlzKTtcbn07XG5cbnZhciBsYXp5U2VxVmFsdWUgPSBmdW5jdGlvbiBsYXp5U2VxVmFsdWUobGF6eVNlcSkge1xuICByZXR1cm4gIShsYXp5U2VxLnJlYWxpemVkKSA/XG4gICAgKGxhenlTZXEucmVhbGl6ZWQgPSB0cnVlKSAmJiAobGF6eVNlcS54ID0gbGF6eVNlcS54KCkpIDpcbiAgICBsYXp5U2VxLng7XG59O1xuXG52YXIgTGF6eVNlcSA9IGZ1bmN0aW9uIExhenlTZXEocmVhbGl6ZWQsIHgpIHtcbiAgdGhpcy5yZWFsaXplZCA9IHJlYWxpemVkIHx8IGZhbHNlO1xuICB0aGlzLnggPSB4O1xuICByZXR1cm4gdGhpcztcbn07XG5cbkxhenlTZXEudHlwZSA9IFwid2lzcC5sYXp5LnNlcVwiO1xuXG5MYXp5U2VxLnByb3RvdHlwZS50eXBlID0gTGF6eVNlcS50eXBlO1xuXG52YXIgbGF6eVNlcSA9IGZ1bmN0aW9uIGxhenlTZXEocmVhbGl6ZWQsIGJvZHkpIHtcbiAgcmV0dXJuIG5ldyBMYXp5U2VxKHJlYWxpemVkLCBib2R5KTtcbn07XG5leHBvcnRzLmxhenlTZXEgPSBsYXp5U2VxO1xuXG52YXIgaXNMYXp5U2VxID0gZnVuY3Rpb24gaXNMYXp5U2VxKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiAoTGF6eVNlcS50eXBlID09PSB2YWx1ZS50eXBlKTtcbn07XG5leHBvcnRzLmlzTGF6eVNlcSA9IGlzTGF6eVNlcTtcblxudW5kZWZpbmVkO1xuXG52YXIgaXNMaXN0ID0gZnVuY3Rpb24gaXNMaXN0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiAoTGlzdC50eXBlID09PSB2YWx1ZS50eXBlKTtcbn07XG5leHBvcnRzLmlzTGlzdCA9IGlzTGlzdDtcblxudmFyIGxpc3QgPSBmdW5jdGlvbiBsaXN0KCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMCA/XG4gICAgT2JqZWN0LmNyZWF0ZShMaXN0LnByb3RvdHlwZSkgOlxuICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykucmVkdWNlUmlnaHQoZnVuY3Rpb24odGFpbCwgaGVhZCkge1xuICAgICAgcmV0dXJuIGNvbnMoaGVhZCwgdGFpbCk7XG4gICAgfSwgbGlzdCgpKTtcbn07XG5leHBvcnRzLmxpc3QgPSBsaXN0O1xuXG52YXIgY29ucyA9IGZ1bmN0aW9uIGNvbnMoaGVhZCwgdGFpbCkge1xuICByZXR1cm4gbmV3IExpc3QoaGVhZCwgdGFpbCk7XG59O1xuZXhwb3J0cy5jb25zID0gY29ucztcblxudmFyIHJldmVyc2VMaXN0ID0gZnVuY3Rpb24gcmV2ZXJzZUxpc3Qoc2VxdWVuY2UpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKGl0ZW1zLCBzb3VyY2UpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBpc0VtcHR5KHNvdXJjZSkgP1xuICAgICAgbGlzdC5hcHBseShsaXN0LCBpdGVtcykgOlxuICAgICAgKGl0ZW1zID0gW2ZpcnN0KHNvdXJjZSldLmNvbmNhdChpdGVtcyksIHNvdXJjZSA9IHJlc3Qoc291cmNlKSwgbG9vcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKFtdLCBzZXF1ZW5jZSk7XG59O1xuXG52YXIgaXNTZXF1ZW50aWFsID0gZnVuY3Rpb24gaXNTZXF1ZW50aWFsKHgpIHtcbiAgcmV0dXJuIChpc0xpc3QoeCkpIHx8IChpc1ZlY3Rvcih4KSkgfHwgKGlzTGF6eVNlcSh4KSkgfHwgKGlzRGljdGlvbmFyeSh4KSkgfHwgKGlzU3RyaW5nKHgpKTtcbn07XG5leHBvcnRzLmlzU2VxdWVudGlhbCA9IGlzU2VxdWVudGlhbDtcblxudmFyIHJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKHNlcXVlbmNlKSB7XG4gIHJldHVybiBpc0xpc3Qoc2VxdWVuY2UpID9cbiAgICByZXZlcnNlTGlzdChzZXF1ZW5jZSkgOlxuICBpc1ZlY3RvcihzZXF1ZW5jZSkgP1xuICAgIHNlcXVlbmNlLnJldmVyc2UoKSA6XG4gIGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgbGlzdCgpIDpcbiAgXCJlbHNlXCIgP1xuICAgIHJldmVyc2Uoc2VxKHNlcXVlbmNlKSkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5yZXZlcnNlID0gcmV2ZXJzZTtcblxudmFyIG1hcCA9IGZ1bmN0aW9uIG1hcChmLCBzZXF1ZW5jZSkge1xuICByZXR1cm4gaXNWZWN0b3Ioc2VxdWVuY2UpID9cbiAgICBzZXF1ZW5jZS5tYXAoZikgOlxuICBpc0xpc3Qoc2VxdWVuY2UpID9cbiAgICBtYXBMaXN0KGYsIHNlcXVlbmNlKSA6XG4gIGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgbGlzdCgpIDpcbiAgXCJlbHNlXCIgP1xuICAgIG1hcChmLCBzZXEoc2VxdWVuY2UpKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLm1hcCA9IG1hcDtcblxudmFyIG1hcExpc3QgPSBmdW5jdGlvbiBtYXBMaXN0KGYsIHNlcXVlbmNlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChyZXN1bHQsIGl0ZW1zKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShpdGVtcykgP1xuICAgICAgcmV2ZXJzZShyZXN1bHQpIDpcbiAgICAgIChyZXN1bHQgPSBjb25zKGYoZmlyc3QoaXRlbXMpKSwgcmVzdWx0KSwgaXRlbXMgPSByZXN0KGl0ZW1zKSwgbG9vcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKGxpc3QoKSwgc2VxdWVuY2UpO1xufTtcblxudmFyIGZpbHRlciA9IGZ1bmN0aW9uIGZpbHRlcihpc0YsIHNlcXVlbmNlKSB7XG4gIHJldHVybiBpc1ZlY3RvcihzZXF1ZW5jZSkgP1xuICAgIHNlcXVlbmNlLmZpbHRlcihpc0YpIDpcbiAgaXNMaXN0KHNlcXVlbmNlKSA/XG4gICAgZmlsdGVyTGlzdChpc0YsIHNlcXVlbmNlKSA6XG4gIGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgbGlzdCgpIDpcbiAgXCJlbHNlXCIgP1xuICAgIGZpbHRlcihpc0YsIHNlcShzZXF1ZW5jZSkpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMuZmlsdGVyID0gZmlsdGVyO1xuXG52YXIgZmlsdGVyTGlzdCA9IGZ1bmN0aW9uIGZpbHRlckxpc3QoaXNGLCBzZXF1ZW5jZSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AocmVzdWx0LCBpdGVtcykge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IGlzRW1wdHkoaXRlbXMpID9cbiAgICAgIHJldmVyc2UocmVzdWx0KSA6XG4gICAgICAocmVzdWx0ID0gaXNGKGZpcnN0KGl0ZW1zKSkgP1xuICAgICAgICBjb25zKGZpcnN0KGl0ZW1zKSwgcmVzdWx0KSA6XG4gICAgICAgIHJlc3VsdCwgaXRlbXMgPSByZXN0KGl0ZW1zKSwgbG9vcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKGxpc3QoKSwgc2VxdWVuY2UpO1xufTtcblxudmFyIHJlZHVjZSA9IGZ1bmN0aW9uIHJlZHVjZShmKSB7XG4gIHZhciBwYXJhbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBoYXNJbml0aWFsID0gY291bnQocGFyYW1zKSA+PSAyO1xuICAgIHZhciBpbml0aWFsID0gaGFzSW5pdGlhbCA/XG4gICAgICBmaXJzdChwYXJhbXMpIDpcbiAgICAgIHZvaWQoMCk7XG4gICAgdmFyIHNlcXVlbmNlID0gaGFzSW5pdGlhbCA/XG4gICAgICBzZWNvbmQocGFyYW1zKSA6XG4gICAgICBmaXJzdChwYXJhbXMpO1xuICAgIHJldHVybiBpc05pbChzZXF1ZW5jZSkgP1xuICAgICAgaW5pdGlhbCA6XG4gICAgaXNWZWN0b3Ioc2VxdWVuY2UpID9cbiAgICAgIGhhc0luaXRpYWwgP1xuICAgICAgICBzZXF1ZW5jZS5yZWR1Y2UoZiwgaW5pdGlhbCkgOlxuICAgICAgICBzZXF1ZW5jZS5yZWR1Y2UoZikgOlxuICAgIGlzTGlzdChzZXF1ZW5jZSkgP1xuICAgICAgaGFzSW5pdGlhbCA/XG4gICAgICAgIHJlZHVjZUxpc3QoZiwgaW5pdGlhbCwgc2VxdWVuY2UpIDpcbiAgICAgICAgcmVkdWNlTGlzdChmLCBmaXJzdChzZXF1ZW5jZSksIHJlc3Qoc2VxdWVuY2UpKSA6XG4gICAgXCJlbHNlXCIgP1xuICAgICAgcmVkdWNlKGYsIGluaXRpYWwsIHNlcShzZXF1ZW5jZSkpIDpcbiAgICAgIHZvaWQoMCk7XG4gIH0pKCk7XG59O1xuZXhwb3J0cy5yZWR1Y2UgPSByZWR1Y2U7XG5cbnZhciByZWR1Y2VMaXN0ID0gZnVuY3Rpb24gcmVkdWNlTGlzdChmLCBpbml0aWFsLCBzZXF1ZW5jZSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AocmVzdWx0LCBpdGVtcykge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IGlzRW1wdHkoaXRlbXMpID9cbiAgICAgIHJlc3VsdCA6XG4gICAgICAocmVzdWx0ID0gZihyZXN1bHQsIGZpcnN0KGl0ZW1zKSksIGl0ZW1zID0gcmVzdChpdGVtcyksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShpbml0aWFsLCBzZXF1ZW5jZSk7XG59O1xuXG52YXIgY291bnQgPSBmdW5jdGlvbiBjb3VudChzZXF1ZW5jZSkge1xuICByZXR1cm4gaXNOaWwoc2VxdWVuY2UpID9cbiAgICAwIDpcbiAgICAoc2VxKHNlcXVlbmNlKSkubGVuZ3RoO1xufTtcbmV4cG9ydHMuY291bnQgPSBjb3VudDtcblxudmFyIGlzRW1wdHkgPSBmdW5jdGlvbiBpc0VtcHR5KHNlcXVlbmNlKSB7XG4gIHJldHVybiBjb3VudChzZXF1ZW5jZSkgPT09IDA7XG59O1xuZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcblxudmFyIGZpcnN0ID0gZnVuY3Rpb24gZmlyc3Qoc2VxdWVuY2UpIHtcbiAgcmV0dXJuIGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgdm9pZCgwKSA6XG4gIGlzTGlzdChzZXF1ZW5jZSkgP1xuICAgIHNlcXVlbmNlLmhlYWQgOlxuICAoaXNWZWN0b3Ioc2VxdWVuY2UpKSB8fCAoaXNTdHJpbmcoc2VxdWVuY2UpKSA/XG4gICAgKHNlcXVlbmNlIHx8IDApWzBdIDpcbiAgaXNMYXp5U2VxKHNlcXVlbmNlKSA/XG4gICAgZmlyc3QobGF6eVNlcVZhbHVlKHNlcXVlbmNlKSkgOlxuICBcImVsc2VcIiA/XG4gICAgZmlyc3Qoc2VxKHNlcXVlbmNlKSkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5maXJzdCA9IGZpcnN0O1xuXG52YXIgc2Vjb25kID0gZnVuY3Rpb24gc2Vjb25kKHNlcXVlbmNlKSB7XG4gIHJldHVybiBpc05pbChzZXF1ZW5jZSkgP1xuICAgIHZvaWQoMCkgOlxuICBpc0xpc3Qoc2VxdWVuY2UpID9cbiAgICBmaXJzdChyZXN0KHNlcXVlbmNlKSkgOlxuICAoaXNWZWN0b3Ioc2VxdWVuY2UpKSB8fCAoaXNTdHJpbmcoc2VxdWVuY2UpKSA/XG4gICAgKHNlcXVlbmNlIHx8IDApWzFdIDpcbiAgaXNMYXp5U2VxKHNlcXVlbmNlKSA/XG4gICAgc2Vjb25kKGxhenlTZXFWYWx1ZShzZXF1ZW5jZSkpIDpcbiAgXCJlbHNlXCIgP1xuICAgIGZpcnN0KHJlc3Qoc2VxKHNlcXVlbmNlKSkpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMuc2Vjb25kID0gc2Vjb25kO1xuXG52YXIgdGhpcmQgPSBmdW5jdGlvbiB0aGlyZChzZXF1ZW5jZSkge1xuICByZXR1cm4gaXNOaWwoc2VxdWVuY2UpID9cbiAgICB2b2lkKDApIDpcbiAgaXNMaXN0KHNlcXVlbmNlKSA/XG4gICAgZmlyc3QocmVzdChyZXN0KHNlcXVlbmNlKSkpIDpcbiAgKGlzVmVjdG9yKHNlcXVlbmNlKSkgfHwgKGlzU3RyaW5nKHNlcXVlbmNlKSkgP1xuICAgIChzZXF1ZW5jZSB8fCAwKVsyXSA6XG4gIGlzTGF6eVNlcShzZXF1ZW5jZSkgP1xuICAgIHRoaXJkKGxhenlTZXFWYWx1ZShzZXF1ZW5jZSkpIDpcbiAgXCJlbHNlXCIgP1xuICAgIHNlY29uZChyZXN0KHNlcShzZXF1ZW5jZSkpKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnRoaXJkID0gdGhpcmQ7XG5cbnZhciByZXN0ID0gZnVuY3Rpb24gcmVzdChzZXF1ZW5jZSkge1xuICByZXR1cm4gaXNOaWwoc2VxdWVuY2UpID9cbiAgICBsaXN0KCkgOlxuICBpc0xpc3Qoc2VxdWVuY2UpID9cbiAgICBzZXF1ZW5jZS50YWlsIDpcbiAgKGlzVmVjdG9yKHNlcXVlbmNlKSkgfHwgKGlzU3RyaW5nKHNlcXVlbmNlKSkgP1xuICAgIHNlcXVlbmNlLnNsaWNlKDEpIDpcbiAgaXNMYXp5U2VxKHNlcXVlbmNlKSA/XG4gICAgcmVzdChsYXp5U2VxVmFsdWUoc2VxdWVuY2UpKSA6XG4gIFwiZWxzZVwiID9cbiAgICByZXN0KHNlcShzZXF1ZW5jZSkpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMucmVzdCA9IHJlc3Q7XG5cbnZhciBsYXN0T2ZMaXN0ID0gZnVuY3Rpb24gbGFzdE9mTGlzdChsaXN0KSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChpdGVtLCBpdGVtcykge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IGlzRW1wdHkoaXRlbXMpID9cbiAgICAgIGl0ZW0gOlxuICAgICAgKGl0ZW0gPSBmaXJzdChpdGVtcyksIGl0ZW1zID0gcmVzdChpdGVtcyksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShmaXJzdChsaXN0KSwgcmVzdChsaXN0KSk7XG59O1xuXG52YXIgbGFzdCA9IGZ1bmN0aW9uIGxhc3Qoc2VxdWVuY2UpIHtcbiAgcmV0dXJuIChpc1ZlY3RvcihzZXF1ZW5jZSkpIHx8IChpc1N0cmluZyhzZXF1ZW5jZSkpID9cbiAgICAoc2VxdWVuY2UgfHwgMClbZGVjKGNvdW50KHNlcXVlbmNlKSldIDpcbiAgaXNMaXN0KHNlcXVlbmNlKSA/XG4gICAgbGFzdE9mTGlzdChzZXF1ZW5jZSkgOlxuICBpc05pbChzZXF1ZW5jZSkgP1xuICAgIHZvaWQoMCkgOlxuICBpc0xhenlTZXEoc2VxdWVuY2UpID9cbiAgICBsYXN0KGxhenlTZXFWYWx1ZShzZXF1ZW5jZSkpIDpcbiAgXCJlbHNlXCIgP1xuICAgIGxhc3Qoc2VxKHNlcXVlbmNlKSkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5sYXN0ID0gbGFzdDtcblxudmFyIGJ1dGxhc3QgPSBmdW5jdGlvbiBidXRsYXN0KHNlcXVlbmNlKSB7XG4gIHZhciBpdGVtcyA9IGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgdm9pZCgwKSA6XG4gIGlzU3RyaW5nKHNlcXVlbmNlKSA/XG4gICAgc3VicyhzZXF1ZW5jZSwgMCwgZGVjKGNvdW50KHNlcXVlbmNlKSkpIDpcbiAgaXNWZWN0b3Ioc2VxdWVuY2UpID9cbiAgICBzZXF1ZW5jZS5zbGljZSgwLCBkZWMoY291bnQoc2VxdWVuY2UpKSkgOlxuICBpc0xpc3Qoc2VxdWVuY2UpID9cbiAgICBsaXN0LmFwcGx5KGxpc3QsIGJ1dGxhc3QodmVjKHNlcXVlbmNlKSkpIDpcbiAgaXNMYXp5U2VxKHNlcXVlbmNlKSA/XG4gICAgYnV0bGFzdChsYXp5U2VxVmFsdWUoc2VxdWVuY2UpKSA6XG4gIFwiZWxzZVwiID9cbiAgICBidXRsYXN0KHNlcShzZXF1ZW5jZSkpIDpcbiAgICB2b2lkKDApO1xuICByZXR1cm4gISgoaXNOaWwoaXRlbXMpKSB8fCAoaXNFbXB0eShpdGVtcykpKSA/XG4gICAgaXRlbXMgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5idXRsYXN0ID0gYnV0bGFzdDtcblxudmFyIHRha2UgPSBmdW5jdGlvbiB0YWtlKG4sIHNlcXVlbmNlKSB7XG4gIHJldHVybiBpc05pbChzZXF1ZW5jZSkgP1xuICAgIGxpc3QoKSA6XG4gIGlzVmVjdG9yKHNlcXVlbmNlKSA/XG4gICAgdGFrZUZyb21WZWN0b3Iobiwgc2VxdWVuY2UpIDpcbiAgaXNMaXN0KHNlcXVlbmNlKSA/XG4gICAgdGFrZUZyb21MaXN0KG4sIHNlcXVlbmNlKSA6XG4gIGlzTGF6eVNlcShzZXF1ZW5jZSkgP1xuICAgIHRha2UobiwgbGF6eVNlcVZhbHVlKHNlcXVlbmNlKSkgOlxuICBcImVsc2VcIiA/XG4gICAgdGFrZShuLCBzZXEoc2VxdWVuY2UpKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnRha2UgPSB0YWtlO1xuXG52YXIgdGFrZVZlY3RvcldoaWxlID0gZnVuY3Rpb24gdGFrZVZlY3RvcldoaWxlKHByZWRpY2F0ZSwgdmVjdG9yKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChyZXN1bHQsIHRhaWwsIGhlYWQpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSAoIShpc0VtcHR5KHRhaWwpKSkgJiYgKHByZWRpY2F0ZShoZWFkKSkgP1xuICAgICAgKHJlc3VsdCA9IGNvbmoocmVzdWx0LCBoZWFkKSwgdGFpbCA9IHJlc3QodGFpbCksIGhlYWQgPSBmaXJzdCh0YWlsKSwgbG9vcCkgOlxuICAgICAgcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShbXSwgdmVjdG9yLCBmaXJzdCh2ZWN0b3IpKTtcbn07XG5cbnZhciB0YWtlTGlzdFdoaWxlID0gZnVuY3Rpb24gdGFrZUxpc3RXaGlsZShwcmVkaWNhdGUsIGl0ZW1zKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChyZXN1bHQsIHRhaWwsIGhlYWQpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSAoIShpc0VtcHR5KHRhaWwpKSkgJiYgKGlzUHJlZGljYXRlKGhlYWQpKSA/XG4gICAgICAocmVzdWx0ID0gY29uaihyZXN1bHQsIGhlYWQpLCB0YWlsID0gcmVzdCh0YWlsKSwgaGVhZCA9IGZpcnN0KHRhaWwpLCBsb29wKSA6XG4gICAgICBsaXN0LmFwcGx5KGxpc3QsIHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKFtdLCBpdGVtcywgZmlyc3QoaXRlbXMpKTtcbn07XG5cbnZhciB0YWtlV2hpbGUgPSBmdW5jdGlvbiB0YWtlV2hpbGUocHJlZGljYXRlLCBzZXF1ZW5jZSkge1xuICByZXR1cm4gaXNOaWwoc2VxdWVuY2UpID9cbiAgICBsaXN0KCkgOlxuICBpc1ZlY3RvcihzZXF1ZW5jZSkgP1xuICAgIHRha2VWZWN0b3JXaGlsZShwcmVkaWNhdGUsIHNlcXVlbmNlKSA6XG4gIGlzTGlzdChzZXF1ZW5jZSkgP1xuICAgIHRha2VWZWN0b3JXaGlsZShwcmVkaWNhdGUsIHNlcXVlbmNlKSA6XG4gIFwiZWxzZVwiID9cbiAgICB0YWtlV2hpbGUocHJlZGljYXRlLCBsYXp5U2VxVmFsdWUoc2VxdWVuY2UpKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnRha2VXaGlsZSA9IHRha2VXaGlsZTtcblxudmFyIHRha2VGcm9tVmVjdG9yID0gZnVuY3Rpb24gdGFrZUZyb21WZWN0b3IobiwgdmVjdG9yKSB7XG4gIHJldHVybiB2ZWN0b3Iuc2xpY2UoMCwgbik7XG59O1xuXG52YXIgdGFrZUZyb21MaXN0ID0gZnVuY3Rpb24gdGFrZUZyb21MaXN0KG4sIHNlcXVlbmNlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcCh0YWtlbiwgaXRlbXMsIG4pIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSAobiA9PT0gMCkgfHwgKGlzRW1wdHkoaXRlbXMpKSA/XG4gICAgICByZXZlcnNlKHRha2VuKSA6XG4gICAgICAodGFrZW4gPSBjb25zKGZpcnN0KGl0ZW1zKSwgdGFrZW4pLCBpdGVtcyA9IHJlc3QoaXRlbXMpLCBuID0gZGVjKG4pLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkobGlzdCgpLCBzZXF1ZW5jZSwgbik7XG59O1xuXG52YXIgZHJvcEZyb21MaXN0ID0gZnVuY3Rpb24gZHJvcEZyb21MaXN0KG4sIHNlcXVlbmNlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChsZWZ0LCBpdGVtcykge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IChsZWZ0IDwgMSkgfHwgKGlzRW1wdHkoaXRlbXMpKSA/XG4gICAgICBpdGVtcyA6XG4gICAgICAobGVmdCA9IGRlYyhsZWZ0KSwgaXRlbXMgPSByZXN0KGl0ZW1zKSwgbG9vcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKG4sIHNlcXVlbmNlKTtcbn07XG5cbnZhciBkcm9wID0gZnVuY3Rpb24gZHJvcChuLCBzZXF1ZW5jZSkge1xuICByZXR1cm4gbiA8PSAwID9cbiAgICBzZXF1ZW5jZSA6XG4gIGlzU3RyaW5nKHNlcXVlbmNlKSA/XG4gICAgc2VxdWVuY2Uuc3Vic3RyKG4pIDpcbiAgaXNWZWN0b3Ioc2VxdWVuY2UpID9cbiAgICBzZXF1ZW5jZS5zbGljZShuKSA6XG4gIGlzTGlzdChzZXF1ZW5jZSkgP1xuICAgIGRyb3BGcm9tTGlzdChuLCBzZXF1ZW5jZSkgOlxuICBpc05pbChzZXF1ZW5jZSkgP1xuICAgIGxpc3QoKSA6XG4gIGlzTGF6eVNlcShzZXF1ZW5jZSkgP1xuICAgIGRyb3AobiwgbGF6eVNlcVZhbHVlKHNlcXVlbmNlKSkgOlxuICBcImVsc2VcIiA/XG4gICAgZHJvcChuLCBzZXEoc2VxdWVuY2UpKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmRyb3AgPSBkcm9wO1xuXG52YXIgY29uakxpc3QgPSBmdW5jdGlvbiBjb25qTGlzdChzZXF1ZW5jZSwgaXRlbXMpIHtcbiAgcmV0dXJuIHJlZHVjZShmdW5jdGlvbihyZXN1bHQsIGl0ZW0pIHtcbiAgICByZXR1cm4gY29ucyhpdGVtLCByZXN1bHQpO1xuICB9LCBzZXF1ZW5jZSwgaXRlbXMpO1xufTtcblxudmFyIGNvbmogPSBmdW5jdGlvbiBjb25qKHNlcXVlbmNlKSB7XG4gIHZhciBpdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHJldHVybiBpc1ZlY3RvcihzZXF1ZW5jZSkgP1xuICAgIHNlcXVlbmNlLmNvbmNhdChpdGVtcykgOlxuICBpc1N0cmluZyhzZXF1ZW5jZSkgP1xuICAgIFwiXCIgKyBzZXF1ZW5jZSArIChzdHIuYXBwbHkoc3RyLCBpdGVtcykpIDpcbiAgaXNOaWwoc2VxdWVuY2UpID9cbiAgICBsaXN0LmFwcGx5KGxpc3QsIHJldmVyc2UoaXRlbXMpKSA6XG4gIChpc0xpc3Qoc2VxdWVuY2UpKSB8fCAoaXNMYXp5U2VxKCkpID9cbiAgICBjb25qTGlzdChzZXF1ZW5jZSwgaXRlbXMpIDpcbiAgaXNEaWN0aW9uYXJ5KHNlcXVlbmNlKSA/XG4gICAgbWVyZ2Uoc2VxdWVuY2UsIG1lcmdlLmFwcGx5KG1lcmdlLCBpdGVtcykpIDpcbiAgXCJlbHNlXCIgP1xuICAgIChmdW5jdGlvbigpIHsgdGhyb3cgVHlwZUVycm9yKFwiXCIgKyBcIlR5cGUgY2FuJ3QgYmUgY29uam9pbmVkIFwiICsgc2VxdWVuY2UpOyB9KSgpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMuY29uaiA9IGNvbmo7XG5cbnZhciBjb25jYXQgPSBmdW5jdGlvbiBjb25jYXQoKSB7XG4gIHZhciBzZXF1ZW5jZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gcmV2ZXJzZShyZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBzZXF1ZW5jZSkge1xuICAgIHJldHVybiByZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBpdGVtKSB7XG4gICAgICByZXR1cm4gY29ucyhpdGVtLCByZXN1bHQpO1xuICAgIH0sIHJlc3VsdCwgc2VxKHNlcXVlbmNlKSk7XG4gIH0sIGxpc3QoKSwgc2VxdWVuY2VzKSk7XG59O1xuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG5cbnZhciBzZXEgPSBmdW5jdGlvbiBzZXEoc2VxdWVuY2UpIHtcbiAgcmV0dXJuIGlzTmlsKHNlcXVlbmNlKSA/XG4gICAgdm9pZCgwKSA6XG4gIChpc1ZlY3RvcihzZXF1ZW5jZSkpIHx8IChpc0xpc3Qoc2VxdWVuY2UpKSB8fCAoaXNMYXp5U2VxKHNlcXVlbmNlKSkgP1xuICAgIHNlcXVlbmNlIDpcbiAgaXNTdHJpbmcoc2VxdWVuY2UpID9cbiAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzZXF1ZW5jZSkgOlxuICBpc0RpY3Rpb25hcnkoc2VxdWVuY2UpID9cbiAgICBrZXlWYWx1ZXMoc2VxdWVuY2UpIDpcbiAgXCJkZWZhdWx0XCIgP1xuICAgIChmdW5jdGlvbigpIHsgdGhyb3cgVHlwZUVycm9yKFwiXCIgKyBcIkNhbiBub3Qgc2VxIFwiICsgc2VxdWVuY2UpOyB9KSgpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMuc2VxID0gc2VxO1xuXG52YXIgaXNTZXEgPSBmdW5jdGlvbiBpc1NlcShzZXF1ZW5jZSkge1xuICByZXR1cm4gKGlzTGlzdChzZXF1ZW5jZSkpIHx8IChpc0xhenlTZXEoc2VxdWVuY2UpKTtcbn07XG5leHBvcnRzLmlzU2VxID0gaXNTZXE7XG5cbnZhciBsaXN0VG9WZWN0b3IgPSBmdW5jdGlvbiBsaXN0VG9WZWN0b3Ioc291cmNlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChyZXN1bHQsIGxpc3QpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBpc0VtcHR5KGxpc3QpID9cbiAgICAgIHJlc3VsdCA6XG4gICAgICAocmVzdWx0ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXN1bHQucHVzaChmaXJzdChsaXN0KSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KSgpLCBsaXN0ID0gcmVzdChsaXN0KSwgbG9vcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKFtdLCBzb3VyY2UpO1xufTtcblxudmFyIHZlYyA9IGZ1bmN0aW9uIHZlYyhzZXF1ZW5jZSkge1xuICByZXR1cm4gaXNOaWwoc2VxdWVuY2UpID9cbiAgICBbXSA6XG4gIGlzVmVjdG9yKHNlcXVlbmNlKSA/XG4gICAgc2VxdWVuY2UgOlxuICBpc0xpc3Qoc2VxdWVuY2UpID9cbiAgICBsaXN0VG9WZWN0b3Ioc2VxdWVuY2UpIDpcbiAgXCJlbHNlXCIgP1xuICAgIHZlYyhzZXEoc2VxdWVuY2UpKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnZlYyA9IHZlYztcblxudmFyIHNvcnQgPSBmdW5jdGlvbiBzb3J0KGYsIGl0ZW1zKSB7XG4gIHZhciBoYXNDb21wYXJhdG9yID0gaXNGbihmKTtcbiAgdmFyIGl0ZW1zID0gKCEoaGFzQ29tcGFyYXRvcikpICYmIChpc05pbChpdGVtcykpID9cbiAgICBmIDpcbiAgICBpdGVtcztcbiAgdmFyIGNvbXBhcmUgPSBoYXNDb21wYXJhdG9yID9cbiAgICBmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gZihhLCBiKSA/XG4gICAgICAgIDAgOlxuICAgICAgICAxO1xuICAgIH0gOlxuICAgIHZvaWQoMCk7XG4gIHJldHVybiBpc05pbChpdGVtcykgP1xuICAgIGxpc3QoKSA6XG4gIGlzVmVjdG9yKGl0ZW1zKSA/XG4gICAgaXRlbXMuc29ydChjb21wYXJlKSA6XG4gIGlzTGlzdChpdGVtcykgP1xuICAgIGxpc3QuYXBwbHkobGlzdCwgdmVjKGl0ZW1zKS5zb3J0KGNvbXBhcmUpKSA6XG4gIGlzRGljdGlvbmFyeShpdGVtcykgP1xuICAgIHNlcShpdGVtcykuc29ydChjb21wYXJlKSA6XG4gIFwiZWxzZVwiID9cbiAgICBzb3J0KGYsIHNlcShpdGVtcykpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMuc29ydCA9IHNvcnQ7XG5cbnZhciByZXBlYXQgPSBmdW5jdGlvbiByZXBlYXQobiwgeCkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AobiwgcmVzdWx0KSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gbiA8PSAwID9cbiAgICAgIHJlc3VsdCA6XG4gICAgICAobiA9IGRlYyhuKSwgcmVzdWx0ID0gY29uaihyZXN1bHQsIHgpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkobiwgW10pO1xufTtcbmV4cG9ydHMucmVwZWF0ID0gcmVwZWF0XG4iLCJ2YXIgX25zXyA9IFwid2lzcC5zdHJpbmdcIjtcbm1vZHVsZS5uYW1lc3BhY2UgPSBfbnNfO1xudmFyIHN0ciA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5zdHI7XG52YXIgc3VicyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5zdWJzO1xudmFyIHJlTWF0Y2hlcyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5yZU1hdGNoZXM7XG52YXIgaXNOaWwgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNOaWw7XG52YXIgaXNTdHJpbmcgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNTdHJpbmc7XG52YXIgdmVjID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS52ZWM7XG52YXIgaXNFbXB0eSA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuaXNFbXB0eTs7XG5cbnZhciBzcGxpdCA9IGZ1bmN0aW9uIHNwbGl0KHN0cmluZywgcGF0dGVybiwgbGltaXQpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdChwYXR0ZXJuLCBsaW1pdCk7XG59O1xuZXhwb3J0cy5zcGxpdCA9IHNwbGl0O1xuXG52YXIgam9pbiA9IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yLCBjb2xsKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciBjb2xsID0gc2VwYXJhdG9yO1xuICAgICAgcmV0dXJuIHN0ci5hcHBseShzdHIsIHZlYyhjb2xsKSk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHZlYyhjb2xsKS5qb2luKHNlcGFyYXRvcik7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgKGZ1bmN0aW9uKCkgeyB0aHJvdyBFcnJvcihcIkludmFsaWQgYXJpdHlcIik7IH0pKClcbiAgfTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5qb2luID0gam9pbjtcblxudmFyIHVwcGVyQ2FzZSA9IGZ1bmN0aW9uIHVwcGVyQ2FzZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50b1VwcGVyQ2FzZSgpO1xufTtcbmV4cG9ydHMudXBwZXJDYXNlID0gdXBwZXJDYXNlO1xuXG52YXIgdXBwZXJDYXNlID0gZnVuY3Rpb24gdXBwZXJDYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRvVXBwZXJDYXNlKCk7XG59O1xuZXhwb3J0cy51cHBlckNhc2UgPSB1cHBlckNhc2U7XG5cbnZhciBsb3dlckNhc2UgPSBmdW5jdGlvbiBsb3dlckNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbn07XG5leHBvcnRzLmxvd2VyQ2FzZSA9IGxvd2VyQ2FzZTtcblxudmFyIGNhcGl0YWxpemUgPSBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gY291bnQoc3RyaW5nKSA8IDIgP1xuICAgIHVwcGVyQ2FzZShzdHJpbmcpIDpcbiAgICBcIlwiICsgKHVwcGVyQ2FzZShzdWJzKHMsIDAsIDEpKSkgKyAobG93ZXJDYXNlKHN1YnMocywgMSkpKTtcbn07XG5leHBvcnRzLmNhcGl0YWxpemUgPSBjYXBpdGFsaXplO1xuXG52YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2Uoc3RyaW5nLCBtYXRjaCwgcmVwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKG1hdGNoLCByZXBsYWNlbWVudCk7XG59O1xuZXhwb3J0cy5yZXBsYWNlID0gcmVwbGFjZTtcblxudmFyIF9fTEVGVFNQQUNFU19fID0gL15cXHNcXHMqLztcbmV4cG9ydHMuX19MRUZUU1BBQ0VTX18gPSBfX0xFRlRTUEFDRVNfXztcblxudmFyIF9fUklHSFRTUEFDRVNfXyA9IC9cXHNcXHMqJC87XG5leHBvcnRzLl9fUklHSFRTUEFDRVNfXyA9IF9fUklHSFRTUEFDRVNfXztcblxudmFyIF9fU1BBQ0VTX18gPSAvXlxcc1xccyokLztcbmV4cG9ydHMuX19TUEFDRVNfXyA9IF9fU1BBQ0VTX187XG5cbnZhciB0cmltbCA9IGlzTmlsKFwiXCIudHJpbUxlZnQpID9cbiAgZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF9fTEVGVFNQQUNFU19fLCBcIlwiKTtcbiAgfSA6XG4gIGZ1bmN0aW9uIHRyaW1sKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcudHJpbUxlZnQoKTtcbiAgfTtcbmV4cG9ydHMudHJpbWwgPSB0cmltbDtcblxudmFyIHRyaW1yID0gaXNOaWwoXCJcIi50cmltUmlnaHQpID9cbiAgZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF9fUklHSFRTUEFDRVNfXywgXCJcIik7XG4gIH0gOlxuICBmdW5jdGlvbiB0cmltcihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnRyaW1SaWdodCgpO1xuICB9O1xuZXhwb3J0cy50cmltciA9IHRyaW1yO1xuXG52YXIgdHJpbSA9IGlzTmlsKFwiXCIudHJpbSkgP1xuICBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoX19MRUZUU1BBQ0VTX18pLnJlcGxhY2UoX19SSUdIVFNQQUNFU19fKTtcbiAgfSA6XG4gIGZ1bmN0aW9uIHRyaW0oc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy50cmltKCk7XG4gIH07XG5leHBvcnRzLnRyaW0gPSB0cmltO1xuXG52YXIgaXNCbGFuayA9IGZ1bmN0aW9uIGlzQmxhbmsoc3RyaW5nKSB7XG4gIHJldHVybiAoaXNOaWwoc3RyaW5nKSkgfHwgKGlzRW1wdHkoc3RyaW5nKSkgfHwgKHJlTWF0Y2hlcyhfX1NQQUNFU19fLCBzdHJpbmcpKTtcbn07XG5leHBvcnRzLmlzQmxhbmsgPSBpc0JsYW5rXG4iLCJ2YXIgX25zXyA9IFwid2lzcC5yZWFkZXJcIjtcbm1vZHVsZS5uYW1lc3BhY2UgPSBfbnNfO1xubW9kdWxlLmRlc2NyaXB0aW9uID0gXCJSZWFkZXIgbW9kdWxlIHByb3ZpZGVzIGZ1bmN0aW9ucyBmb3IgcmVhZGluZyB0ZXh0IGlucHV0XFxuICBhcyB3aXNwIGRhdGEgc3RydWN0dXJlc1wiO1xudmFyIGxpc3QgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmxpc3Q7XG52YXIgaXNMaXN0ID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5pc0xpc3Q7XG52YXIgY291bnQgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmNvdW50O1xudmFyIGlzRW1wdHkgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmlzRW1wdHk7XG52YXIgZmlyc3QgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmZpcnN0O1xudmFyIHNlY29uZCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuc2Vjb25kO1xudmFyIHRoaXJkID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS50aGlyZDtcbnZhciByZXN0ID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5yZXN0O1xudmFyIG1hcCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkubWFwO1xudmFyIHZlYyA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkudmVjO1xudmFyIGNvbnMgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmNvbnM7XG52YXIgY29uaiA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuY29uajtcbnZhciByZXN0ID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5yZXN0O1xudmFyIGNvbmNhdCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuY29uY2F0O1xudmFyIGxhc3QgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmxhc3Q7XG52YXIgYnV0bGFzdCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuYnV0bGFzdDtcbnZhciBzb3J0ID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5zb3J0O1xudmFyIGxhenlTZXEgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmxhenlTZXE7XG52YXIgaXNPZGQgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNPZGQ7XG52YXIgZGljdGlvbmFyeSA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5kaWN0aW9uYXJ5O1xudmFyIGtleXMgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkua2V5cztcbnZhciBpc05pbCA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc05pbDtcbnZhciBpbmMgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaW5jO1xudmFyIGRlYyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5kZWM7XG52YXIgaXNWZWN0b3IgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNWZWN0b3I7XG52YXIgaXNTdHJpbmcgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNTdHJpbmc7XG52YXIgaXNOdW1iZXIgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNOdW1iZXI7XG52YXIgaXNCb29sZWFuID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzQm9vbGVhbjtcbnZhciBpc09iamVjdCA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc09iamVjdDtcbnZhciBpc0RpY3Rpb25hcnkgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNEaWN0aW9uYXJ5O1xudmFyIHJlUGF0dGVybiA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5yZVBhdHRlcm47XG52YXIgcmVNYXRjaGVzID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLnJlTWF0Y2hlcztcbnZhciByZUZpbmQgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkucmVGaW5kO1xudmFyIHN0ciA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5zdHI7XG52YXIgc3VicyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5zdWJzO1xudmFyIGNoYXIgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuY2hhcjtcbnZhciB2YWxzID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLnZhbHM7XG52YXIgaXNFcXVhbCA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc0VxdWFsO1xudmFyIGlzU3ltYm9sID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkuaXNTeW1ib2w7XG52YXIgc3ltYm9sID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkuc3ltYm9sO1xudmFyIGlzS2V5d29yZCA9IChyZXF1aXJlKFwiLi9hc3RcIikpLmlzS2V5d29yZDtcbnZhciBrZXl3b3JkID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkua2V5d29yZDtcbnZhciBtZXRhID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkubWV0YTtcbnZhciB3aXRoTWV0YSA9IChyZXF1aXJlKFwiLi9hc3RcIikpLndpdGhNZXRhO1xudmFyIG5hbWUgPSAocmVxdWlyZShcIi4vYXN0XCIpKS5uYW1lO1xudmFyIGdlbnN5bSA9IChyZXF1aXJlKFwiLi9hc3RcIikpLmdlbnN5bTtcbnZhciBzcGxpdCA9IChyZXF1aXJlKFwiLi9zdHJpbmdcIikpLnNwbGl0O1xudmFyIGpvaW4gPSAocmVxdWlyZShcIi4vc3RyaW5nXCIpKS5qb2luOztcblxudmFyIHB1c2hCYWNrUmVhZGVyID0gZnVuY3Rpb24gcHVzaEJhY2tSZWFkZXIoc291cmNlLCB1cmkpIHtcbiAgcmV0dXJuIHtcbiAgICBcImxpbmVzXCI6IHNwbGl0KHNvdXJjZSwgXCJcXG5cIiksXG4gICAgXCJidWZmZXJcIjogXCJcIixcbiAgICBcInVyaVwiOiB1cmksXG4gICAgXCJjb2x1bW5cIjogLTEsXG4gICAgXCJsaW5lXCI6IDBcbiAgfTtcbn07XG5leHBvcnRzLnB1c2hCYWNrUmVhZGVyID0gcHVzaEJhY2tSZWFkZXI7XG5cbnZhciBwZWVrQ2hhciA9IGZ1bmN0aW9uIHBlZWtDaGFyKHJlYWRlcikge1xuICB2YXIgbGluZSA9ICgocmVhZGVyIHx8IDApW1wibGluZXNcIl0pWyhyZWFkZXIgfHwgMClbXCJsaW5lXCJdXTtcbiAgdmFyIGNvbHVtbiA9IGluYygocmVhZGVyIHx8IDApW1wiY29sdW1uXCJdKTtcbiAgcmV0dXJuIGlzTmlsKGxpbmUpID9cbiAgICB2b2lkKDApIDpcbiAgICAobGluZVtjb2x1bW5dKSB8fCBcIlxcblwiO1xufTtcbmV4cG9ydHMucGVla0NoYXIgPSBwZWVrQ2hhcjtcblxudmFyIHJlYWRDaGFyID0gZnVuY3Rpb24gcmVhZENoYXIocmVhZGVyKSB7XG4gIHZhciBjaCA9IHBlZWtDaGFyKHJlYWRlcik7XG4gIGlzTmV3bGluZShwZWVrQ2hhcihyZWFkZXIpKSA/XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgKHJlYWRlciB8fCAwKVtcImxpbmVcIl0gPSBpbmMoKHJlYWRlciB8fCAwKVtcImxpbmVcIl0pO1xuICAgICAgcmV0dXJuIChyZWFkZXIgfHwgMClbXCJjb2x1bW5cIl0gPSAtMTtcbiAgICB9KSgpIDpcbiAgICAocmVhZGVyIHx8IDApW1wiY29sdW1uXCJdID0gaW5jKChyZWFkZXIgfHwgMClbXCJjb2x1bW5cIl0pO1xuICByZXR1cm4gY2g7XG59O1xuZXhwb3J0cy5yZWFkQ2hhciA9IHJlYWRDaGFyO1xuXG52YXIgaXNOZXdsaW5lID0gZnVuY3Rpb24gaXNOZXdsaW5lKGNoKSB7XG4gIHJldHVybiBcIlxcblwiID09PSBjaDtcbn07XG5leHBvcnRzLmlzTmV3bGluZSA9IGlzTmV3bGluZTtcblxudmFyIGlzQnJlYWtpbmdXaGl0ZXNwYWNlID0gZnVuY3Rpb24gaXNCcmVha2luZ1doaXRlc3BhY2UoY2gpIHtcbiAgcmV0dXJuIChjaCA9PT0gXCIgXCIpIHx8IChjaCA9PT0gXCJcXHRcIikgfHwgKGNoID09PSBcIlxcblwiKSB8fCAoY2ggPT09IFwiXFxyXCIpO1xufTtcbmV4cG9ydHMuaXNCcmVha2luZ1doaXRlc3BhY2UgPSBpc0JyZWFraW5nV2hpdGVzcGFjZTtcblxudmFyIGlzV2hpdGVzcGFjZSA9IGZ1bmN0aW9uIGlzV2hpdGVzcGFjZShjaCkge1xuICByZXR1cm4gKGlzQnJlYWtpbmdXaGl0ZXNwYWNlKGNoKSkgfHwgKFwiLFwiID09PSBjaCk7XG59O1xuZXhwb3J0cy5pc1doaXRlc3BhY2UgPSBpc1doaXRlc3BhY2U7XG5cbnZhciBpc051bWVyaWMgPSBmdW5jdGlvbiBpc051bWVyaWMoY2gpIHtcbiAgcmV0dXJuIChjaCA9PT0gXCIwXCIpIHx8IChjaCA9PT0gXCIxXCIpIHx8IChjaCA9PT0gXCIyXCIpIHx8IChjaCA9PT0gXCIzXCIpIHx8IChjaCA9PT0gXCI0XCIpIHx8IChjaCA9PT0gXCI1XCIpIHx8IChjaCA9PT0gXCI2XCIpIHx8IChjaCA9PT0gXCI3XCIpIHx8IChjaCA9PT0gXCI4XCIpIHx8IChjaCA9PT0gXCI5XCIpO1xufTtcbmV4cG9ydHMuaXNOdW1lcmljID0gaXNOdW1lcmljO1xuXG52YXIgaXNDb21tZW50UHJlZml4ID0gZnVuY3Rpb24gaXNDb21tZW50UHJlZml4KGNoKSB7XG4gIHJldHVybiBcIjtcIiA9PT0gY2g7XG59O1xuZXhwb3J0cy5pc0NvbW1lbnRQcmVmaXggPSBpc0NvbW1lbnRQcmVmaXg7XG5cbnZhciBpc051bWJlckxpdGVyYWwgPSBmdW5jdGlvbiBpc051bWJlckxpdGVyYWwocmVhZGVyLCBpbml0Y2gpIHtcbiAgcmV0dXJuIChpc051bWVyaWMoaW5pdGNoKSkgfHwgKCgoXCIrXCIgPT09IGluaXRjaCkgfHwgKFwiLVwiID09PSBpbml0Y2gpKSAmJiAoaXNOdW1lcmljKHBlZWtDaGFyKHJlYWRlcikpKSk7XG59O1xuZXhwb3J0cy5pc051bWJlckxpdGVyYWwgPSBpc051bWJlckxpdGVyYWw7XG5cbnZhciByZWFkZXJFcnJvciA9IGZ1bmN0aW9uIHJlYWRlckVycm9yKHJlYWRlciwgbWVzc2FnZSkge1xuICB2YXIgdGV4dCA9IFwiXCIgKyBtZXNzYWdlICsgXCJcXG5cIiArIFwibGluZTpcIiArICgocmVhZGVyIHx8IDApW1wibGluZVwiXSkgKyBcIlxcblwiICsgXCJjb2x1bW46XCIgKyAoKHJlYWRlciB8fCAwKVtcImNvbHVtblwiXSk7XG4gIHZhciBlcnJvciA9IFN5bnRheEVycm9yKHRleHQsIChyZWFkZXIgfHwgMClbXCJ1cmlcIl0pO1xuICBlcnJvci5saW5lID0gKHJlYWRlciB8fCAwKVtcImxpbmVcIl07XG4gIGVycm9yLmNvbHVtbiA9IChyZWFkZXIgfHwgMClbXCJjb2x1bW5cIl07XG4gIGVycm9yLnVyaSA9IChyZWFkZXIgfHwgMClbXCJ1cmlcIl07XG4gIHJldHVybiAoZnVuY3Rpb24oKSB7IHRocm93IGVycm9yOyB9KSgpO1xufTtcbmV4cG9ydHMucmVhZGVyRXJyb3IgPSByZWFkZXJFcnJvcjtcblxudmFyIGlzTWFjcm9UZXJtaW5hdGluZyA9IGZ1bmN0aW9uIGlzTWFjcm9UZXJtaW5hdGluZyhjaCkge1xuICByZXR1cm4gKCEoY2ggPT09IFwiI1wiKSkgJiYgKCEoY2ggPT09IFwiJ1wiKSkgJiYgKCEoY2ggPT09IFwiOlwiKSkgJiYgKG1hY3JvcyhjaCkpO1xufTtcbmV4cG9ydHMuaXNNYWNyb1Rlcm1pbmF0aW5nID0gaXNNYWNyb1Rlcm1pbmF0aW5nO1xuXG52YXIgcmVhZFRva2VuID0gZnVuY3Rpb24gcmVhZFRva2VuKHJlYWRlciwgaW5pdGNoKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChidWZmZXIsIGNoKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gKGlzTmlsKGNoKSkgfHwgKGlzV2hpdGVzcGFjZShjaCkpIHx8IChpc01hY3JvVGVybWluYXRpbmcoY2gpKSA/XG4gICAgICBidWZmZXIgOlxuICAgICAgKGJ1ZmZlciA9IFwiXCIgKyBidWZmZXIgKyAocmVhZENoYXIocmVhZGVyKSksIGNoID0gcGVla0NoYXIocmVhZGVyKSwgbG9vcCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKGluaXRjaCwgcGVla0NoYXIocmVhZGVyKSk7XG59O1xuZXhwb3J0cy5yZWFkVG9rZW4gPSByZWFkVG9rZW47XG5cbnZhciBza2lwTGluZSA9IGZ1bmN0aW9uIHNraXBMaW5lKHJlYWRlciwgXykge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNoID0gcmVhZENoYXIocmVhZGVyKTtcbiAgICAgIHJldHVybiAoY2ggPT09IFwiXFxuXCIpIHx8IChjaCA9PT0gXCJcXHJcIikgfHwgKGlzTmlsKGNoKSkgP1xuICAgICAgICByZWFkZXIgOlxuICAgICAgICAobG9vcCk7XG4gICAgfSkoKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoKTtcbn07XG5leHBvcnRzLnNraXBMaW5lID0gc2tpcExpbmU7XG5cbnZhciBpbnRQYXR0ZXJuID0gcmVQYXR0ZXJuKFwiXihbLStdPykoPzooMCl8KFsxLTldWzAtOV0qKXwwW3hYXShbMC05QS1GYS1mXSspfDAoWzAtN10rKXwoWzEtOV1bMC05XT8pW3JSXShbMC05QS1aYS16XSspfDBbMC05XSspKE4pPyRcIik7XG5leHBvcnRzLmludFBhdHRlcm4gPSBpbnRQYXR0ZXJuO1xuXG52YXIgcmF0aW9QYXR0ZXJuID0gcmVQYXR0ZXJuKFwiKFstK10/WzAtOV0rKS8oWzAtOV0rKVwiKTtcbmV4cG9ydHMucmF0aW9QYXR0ZXJuID0gcmF0aW9QYXR0ZXJuO1xuXG52YXIgZmxvYXRQYXR0ZXJuID0gcmVQYXR0ZXJuKFwiKFstK10/WzAtOV0rKFxcXFwuWzAtOV0qKT8oW2VFXVstK10/WzAtOV0rKT8pKE0pP1wiKTtcbmV4cG9ydHMuZmxvYXRQYXR0ZXJuID0gZmxvYXRQYXR0ZXJuO1xuXG52YXIgbWF0Y2hJbnQgPSBmdW5jdGlvbiBtYXRjaEludChzKSB7XG4gIHZhciBncm91cHMgPSByZUZpbmQoaW50UGF0dGVybiwgcyk7XG4gIHZhciBncm91cDMgPSBncm91cHNbMl07XG4gIHJldHVybiAhKChpc05pbChncm91cDMpKSB8fCAoY291bnQoZ3JvdXAzKSA8IDEpKSA/XG4gICAgMCA6XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5lZ2F0ZSA9IFwiLVwiID09PSBncm91cHNbMV0gP1xuICAgICAgICAtMSA6XG4gICAgICAgIDE7XG4gICAgICB2YXIgYSA9IGdyb3Vwc1szXSA/XG4gICAgICAgIFtncm91cHNbM10sIDEwXSA6XG4gICAgICBncm91cHNbNF0gP1xuICAgICAgICBbZ3JvdXBzWzRdLCAxNl0gOlxuICAgICAgZ3JvdXBzWzVdID9cbiAgICAgICAgW2dyb3Vwc1s1XSwgOF0gOlxuICAgICAgZ3JvdXBzWzddID9cbiAgICAgICAgW2dyb3Vwc1s3XSwgcGFyc2VJbnQoZ3JvdXBzWzddKV0gOlxuICAgICAgXCJlbHNlXCIgP1xuICAgICAgICBbdm9pZCgwKSwgdm9pZCgwKV0gOlxuICAgICAgICB2b2lkKDApO1xuICAgICAgdmFyIG4gPSBhWzBdO1xuICAgICAgdmFyIHJhZGl4ID0gYVsxXTtcbiAgICAgIHJldHVybiBpc05pbChuKSA/XG4gICAgICAgIHZvaWQoMCkgOlxuICAgICAgICBuZWdhdGUgKiAocGFyc2VJbnQobiwgcmFkaXgpKTtcbiAgICB9KSgpO1xufTtcbmV4cG9ydHMubWF0Y2hJbnQgPSBtYXRjaEludDtcblxudmFyIG1hdGNoUmF0aW8gPSBmdW5jdGlvbiBtYXRjaFJhdGlvKHMpIHtcbiAgdmFyIGdyb3VwcyA9IHJlRmluZChyYXRpb1BhdHRlcm4sIHMpO1xuICB2YXIgbnVtaW5hdG9yID0gZ3JvdXBzWzFdO1xuICB2YXIgZGVub21pbmF0b3IgPSBncm91cHNbMl07XG4gIHJldHVybiAocGFyc2VJbnQobnVtaW5hdG9yKSkgLyAocGFyc2VJbnQoZGVub21pbmF0b3IpKTtcbn07XG5leHBvcnRzLm1hdGNoUmF0aW8gPSBtYXRjaFJhdGlvO1xuXG52YXIgbWF0Y2hGbG9hdCA9IGZ1bmN0aW9uIG1hdGNoRmxvYXQocykge1xuICByZXR1cm4gcGFyc2VGbG9hdChzKTtcbn07XG5leHBvcnRzLm1hdGNoRmxvYXQgPSBtYXRjaEZsb2F0O1xuXG52YXIgbWF0Y2hOdW1iZXIgPSBmdW5jdGlvbiBtYXRjaE51bWJlcihzKSB7XG4gIHJldHVybiByZU1hdGNoZXMoaW50UGF0dGVybiwgcykgP1xuICAgIG1hdGNoSW50KHMpIDpcbiAgcmVNYXRjaGVzKHJhdGlvUGF0dGVybiwgcykgP1xuICAgIG1hdGNoUmF0aW8ocykgOlxuICByZU1hdGNoZXMoZmxvYXRQYXR0ZXJuLCBzKSA/XG4gICAgbWF0Y2hGbG9hdChzKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLm1hdGNoTnVtYmVyID0gbWF0Y2hOdW1iZXI7XG5cbnZhciBlc2NhcGVDaGFyTWFwID0gZnVuY3Rpb24gZXNjYXBlQ2hhck1hcChjKSB7XG4gIHJldHVybiBjID09PSBcInRcIiA/XG4gICAgXCJcXHRcIiA6XG4gIGMgPT09IFwiclwiID9cbiAgICBcIlxcclwiIDpcbiAgYyA9PT0gXCJuXCIgP1xuICAgIFwiXFxuXCIgOlxuICBjID09PSBcIlxcXFxcIiA/XG4gICAgXCJcXFxcXCIgOlxuICBjID09PSBcIlxcXCJcIiA/XG4gICAgXCJcXFwiXCIgOlxuICBjID09PSBcImJcIiA/XG4gICAgXCJcYlwiIDpcbiAgYyA9PT0gXCJmXCIgP1xuICAgIFwiXGZcIiA6XG4gIFwiZWxzZVwiID9cbiAgICB2b2lkKDApIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMuZXNjYXBlQ2hhck1hcCA9IGVzY2FwZUNoYXJNYXA7XG5cbnZhciByZWFkMkNoYXJzID0gZnVuY3Rpb24gcmVhZDJDaGFycyhyZWFkZXIpIHtcbiAgcmV0dXJuIFwiXCIgKyAocmVhZENoYXIocmVhZGVyKSkgKyAocmVhZENoYXIocmVhZGVyKSk7XG59O1xuZXhwb3J0cy5yZWFkMkNoYXJzID0gcmVhZDJDaGFycztcblxudmFyIHJlYWQ0Q2hhcnMgPSBmdW5jdGlvbiByZWFkNENoYXJzKHJlYWRlcikge1xuICByZXR1cm4gXCJcIiArIChyZWFkQ2hhcihyZWFkZXIpKSArIChyZWFkQ2hhcihyZWFkZXIpKSArIChyZWFkQ2hhcihyZWFkZXIpKSArIChyZWFkQ2hhcihyZWFkZXIpKTtcbn07XG5leHBvcnRzLnJlYWQ0Q2hhcnMgPSByZWFkNENoYXJzO1xuXG52YXIgdW5pY29kZTJQYXR0ZXJuID0gcmVQYXR0ZXJuKFwiWzAtOUEtRmEtZl17Mn1cIik7XG5leHBvcnRzLnVuaWNvZGUyUGF0dGVybiA9IHVuaWNvZGUyUGF0dGVybjtcblxudmFyIHVuaWNvZGU0UGF0dGVybiA9IHJlUGF0dGVybihcIlswLTlBLUZhLWZdezR9XCIpO1xuZXhwb3J0cy51bmljb2RlNFBhdHRlcm4gPSB1bmljb2RlNFBhdHRlcm47XG5cbnZhciB2YWxpZGF0ZVVuaWNvZGVFc2NhcGUgPSBmdW5jdGlvbiB2YWxpZGF0ZVVuaWNvZGVFc2NhcGUodW5pY29kZVBhdHRlcm4sIHJlYWRlciwgZXNjYXBlQ2hhciwgdW5pY29kZVN0cikge1xuICByZXR1cm4gcmVNYXRjaGVzKHVuaWNvZGVQYXR0ZXJuLCB1bmljb2RlU3RyKSA/XG4gICAgdW5pY29kZVN0ciA6XG4gICAgcmVhZGVyRXJyb3IocmVhZGVyLCBcIlwiICsgXCJVbmV4cGVjdGVkIHVuaWNvZGUgZXNjYXBlIFwiICsgXCJcXFxcXCIgKyBlc2NhcGVDaGFyICsgdW5pY29kZVN0cik7XG59O1xuZXhwb3J0cy52YWxpZGF0ZVVuaWNvZGVFc2NhcGUgPSB2YWxpZGF0ZVVuaWNvZGVFc2NhcGU7XG5cbnZhciBtYWtlVW5pY29kZUNoYXIgPSBmdW5jdGlvbiBtYWtlVW5pY29kZUNoYXIoY29kZVN0ciwgYmFzZSkge1xuICB2YXIgYmFzZSA9IGJhc2UgfHwgMTY7XG4gIHZhciBjb2RlID0gcGFyc2VJbnQoY29kZVN0ciwgYmFzZSk7XG4gIHJldHVybiBjaGFyKGNvZGUpO1xufTtcbmV4cG9ydHMubWFrZVVuaWNvZGVDaGFyID0gbWFrZVVuaWNvZGVDaGFyO1xuXG52YXIgZXNjYXBlQ2hhciA9IGZ1bmN0aW9uIGVzY2FwZUNoYXIoYnVmZmVyLCByZWFkZXIpIHtcbiAgdmFyIGNoID0gcmVhZENoYXIocmVhZGVyKTtcbiAgdmFyIG1hcHJlc3VsdCA9IGVzY2FwZUNoYXJNYXAoY2gpO1xuICByZXR1cm4gbWFwcmVzdWx0ID9cbiAgICBtYXByZXN1bHQgOlxuICBjaCA9PT0gXCJ4XCIgP1xuICAgIG1ha2VVbmljb2RlQ2hhcih2YWxpZGF0ZVVuaWNvZGVFc2NhcGUodW5pY29kZTJQYXR0ZXJuLCByZWFkZXIsIGNoLCByZWFkMkNoYXJzKHJlYWRlcikpKSA6XG4gIGNoID09PSBcInVcIiA/XG4gICAgbWFrZVVuaWNvZGVDaGFyKHZhbGlkYXRlVW5pY29kZUVzY2FwZSh1bmljb2RlNFBhdHRlcm4sIHJlYWRlciwgY2gsIHJlYWQ0Q2hhcnMocmVhZGVyKSkpIDpcbiAgaXNOdW1lcmljKGNoKSA/XG4gICAgY2hhcihjaCkgOlxuICBcImVsc2VcIiA/XG4gICAgcmVhZGVyRXJyb3IocmVhZGVyLCBcIlwiICsgXCJVbmV4cGVjdGVkIHVuaWNvZGUgZXNjYXBlIFwiICsgXCJcXFxcXCIgKyBjaCkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5lc2NhcGVDaGFyID0gZXNjYXBlQ2hhcjtcblxudmFyIHJlYWRQYXN0ID0gZnVuY3Rpb24gcmVhZFBhc3QocHJlZGljYXRlLCByZWFkZXIpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKF8pIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBwcmVkaWNhdGUocGVla0NoYXIocmVhZGVyKSkgP1xuICAgICAgKF8gPSByZWFkQ2hhcihyZWFkZXIpLCBsb29wKSA6XG4gICAgICBwZWVrQ2hhcihyZWFkZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KSh2b2lkKDApKTtcbn07XG5leHBvcnRzLnJlYWRQYXN0ID0gcmVhZFBhc3Q7XG5cbnZhciByZWFkRGVsaW1pdGVkTGlzdCA9IGZ1bmN0aW9uIHJlYWREZWxpbWl0ZWRMaXN0KGRlbGltLCByZWFkZXIsIGlzUmVjdXJzaXZlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChmb3JtKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNoID0gcmVhZFBhc3QoaXNXaGl0ZXNwYWNlLCByZWFkZXIpO1xuICAgICAgIShjaCkgP1xuICAgICAgICByZWFkZXJFcnJvcihyZWFkZXIsIFwiRU9GXCIpIDpcbiAgICAgICAgdm9pZCgwKTtcbiAgICAgIHJldHVybiBkZWxpbSA9PT0gY2ggP1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmVhZENoYXIocmVhZGVyKTtcbiAgICAgICAgICByZXR1cm4gZm9ybTtcbiAgICAgICAgfSkoKSA6XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgbWFjcm8gPSBtYWNyb3MoY2gpO1xuICAgICAgICAgIHJldHVybiBtYWNybyA/XG4gICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciByZXN1bHQgPSBtYWNybyhyZWFkZXIsIHJlYWRDaGFyKHJlYWRlcikpO1xuICAgICAgICAgICAgICByZXR1cm4gKGZvcm0gPSByZXN1bHQgPT09IHJlYWRlciA/XG4gICAgICAgICAgICAgICAgZm9ybSA6XG4gICAgICAgICAgICAgICAgY29uaihmb3JtLCByZXN1bHQpLCBsb29wKTtcbiAgICAgICAgICAgIH0pKCkgOlxuICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgbyA9IHJlYWQocmVhZGVyLCB0cnVlLCB2b2lkKDApLCBpc1JlY3Vyc2l2ZSk7XG4gICAgICAgICAgICAgIHJldHVybiAoZm9ybSA9IG8gPT09IHJlYWRlciA/XG4gICAgICAgICAgICAgICAgZm9ybSA6XG4gICAgICAgICAgICAgICAgY29uaihmb3JtLCBvKSwgbG9vcCk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KSgpO1xuICAgIH0pKCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKFtdKTtcbn07XG5leHBvcnRzLnJlYWREZWxpbWl0ZWRMaXN0ID0gcmVhZERlbGltaXRlZExpc3Q7XG5cbnZhciBub3RJbXBsZW1lbnRlZCA9IGZ1bmN0aW9uIG5vdEltcGxlbWVudGVkKHJlYWRlciwgY2gpIHtcbiAgcmV0dXJuIHJlYWRlckVycm9yKHJlYWRlciwgXCJcIiArIFwiUmVhZGVyIGZvciBcIiArIGNoICsgXCIgbm90IGltcGxlbWVudGVkIHlldFwiKTtcbn07XG5leHBvcnRzLm5vdEltcGxlbWVudGVkID0gbm90SW1wbGVtZW50ZWQ7XG5cbnZhciByZWFkRGlzcGF0Y2ggPSBmdW5jdGlvbiByZWFkRGlzcGF0Y2gocmVhZGVyLCBfKSB7XG4gIHZhciBjaCA9IHJlYWRDaGFyKHJlYWRlcik7XG4gIHZhciBkbSA9IGRpc3BhdGNoTWFjcm9zKGNoKTtcbiAgcmV0dXJuIGRtID9cbiAgICBkbShyZWFkZXIsIF8pIDpcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gbWF5YmVSZWFkVGFnZ2VkVHlwZShyZWFkZXIsIGNoKTtcbiAgICAgIHJldHVybiBvYmplY3QgP1xuICAgICAgICBvYmplY3QgOlxuICAgICAgICByZWFkZXJFcnJvcihyZWFkZXIsIFwiTm8gZGlzcGF0Y2ggbWFjcm8gZm9yIFwiLCBjaCk7XG4gICAgfSkoKTtcbn07XG5leHBvcnRzLnJlYWREaXNwYXRjaCA9IHJlYWREaXNwYXRjaDtcblxudmFyIHJlYWRVbm1hdGNoZWREZWxpbWl0ZXIgPSBmdW5jdGlvbiByZWFkVW5tYXRjaGVkRGVsaW1pdGVyKHJkciwgY2gpIHtcbiAgcmV0dXJuIHJlYWRlckVycm9yKHJkciwgXCJVbm1hY2hlZCBkZWxpbWl0ZXIgXCIsIGNoKTtcbn07XG5leHBvcnRzLnJlYWRVbm1hdGNoZWREZWxpbWl0ZXIgPSByZWFkVW5tYXRjaGVkRGVsaW1pdGVyO1xuXG52YXIgcmVhZExpc3QgPSBmdW5jdGlvbiByZWFkTGlzdChyZWFkZXIsIF8pIHtcbiAgdmFyIGZvcm0gPSByZWFkRGVsaW1pdGVkTGlzdChcIilcIiwgcmVhZGVyLCB0cnVlKTtcbiAgcmV0dXJuIHdpdGhNZXRhKGxpc3QuYXBwbHkobGlzdCwgZm9ybSksIG1ldGEoZm9ybSkpO1xufTtcbmV4cG9ydHMucmVhZExpc3QgPSByZWFkTGlzdDtcblxudmFyIHJlYWRDb21tZW50ID0gZnVuY3Rpb24gcmVhZENvbW1lbnQocmVhZGVyLCBfKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChidWZmZXIsIGNoKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gKGlzTmlsKGNoKSkgfHwgKFwiXFxuXCIgPT09IGNoKSA/XG4gICAgICByZWFkZXIgfHwgKGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiY29tbWVudFwiKSwgYnVmZmVyKSkgOlxuICAgIChcIlxcXFxcIiA9PT0gY2gpID9cbiAgICAgIChidWZmZXIgPSBcIlwiICsgYnVmZmVyICsgKGVzY2FwZUNoYXIoYnVmZmVyLCByZWFkZXIpKSwgY2ggPSByZWFkQ2hhcihyZWFkZXIpLCBsb29wKSA6XG4gICAgXCJlbHNlXCIgP1xuICAgICAgKGJ1ZmZlciA9IFwiXCIgKyBidWZmZXIgKyBjaCwgY2ggPSByZWFkQ2hhcihyZWFkZXIpLCBsb29wKSA6XG4gICAgICB2b2lkKDApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShcIlwiLCByZWFkQ2hhcihyZWFkZXIpKTtcbn07XG5leHBvcnRzLnJlYWRDb21tZW50ID0gcmVhZENvbW1lbnQ7XG5cbnZhciByZWFkVmVjdG9yID0gZnVuY3Rpb24gcmVhZFZlY3RvcihyZWFkZXIpIHtcbiAgcmV0dXJuIHJlYWREZWxpbWl0ZWRMaXN0KFwiXVwiLCByZWFkZXIsIHRydWUpO1xufTtcbmV4cG9ydHMucmVhZFZlY3RvciA9IHJlYWRWZWN0b3I7XG5cbnZhciByZWFkTWFwID0gZnVuY3Rpb24gcmVhZE1hcChyZWFkZXIpIHtcbiAgdmFyIGZvcm0gPSByZWFkRGVsaW1pdGVkTGlzdChcIn1cIiwgcmVhZGVyLCB0cnVlKTtcbiAgcmV0dXJuIGlzT2RkKGNvdW50KGZvcm0pKSA/XG4gICAgcmVhZGVyRXJyb3IocmVhZGVyLCBcIk1hcCBsaXRlcmFsIG11c3QgY29udGFpbiBhbiBldmVuIG51bWJlciBvZiBmb3Jtc1wiKSA6XG4gICAgd2l0aE1ldGEoZGljdGlvbmFyeS5hcHBseShkaWN0aW9uYXJ5LCBmb3JtKSwgbWV0YShmb3JtKSk7XG59O1xuZXhwb3J0cy5yZWFkTWFwID0gcmVhZE1hcDtcblxudmFyIHJlYWRTZXQgPSBmdW5jdGlvbiByZWFkU2V0KHJlYWRlciwgXykge1xuICB2YXIgZm9ybSA9IHJlYWREZWxpbWl0ZWRMaXN0KFwifVwiLCByZWFkZXIsIHRydWUpO1xuICByZXR1cm4gd2l0aE1ldGEoY29uY2F0KFtzeW1ib2wodm9pZCgwKSwgXCJzZXRcIildLCBmb3JtKSwgbWV0YShmb3JtKSk7XG59O1xuZXhwb3J0cy5yZWFkU2V0ID0gcmVhZFNldDtcblxudmFyIHJlYWROdW1iZXIgPSBmdW5jdGlvbiByZWFkTnVtYmVyKHJlYWRlciwgaW5pdGNoKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChidWZmZXIsIGNoKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gKGlzTmlsKGNoKSkgfHwgKGlzV2hpdGVzcGFjZShjaCkpIHx8IChtYWNyb3MoY2gpKSA/XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IG1hdGNoTnVtYmVyKGJ1ZmZlcik7XG4gICAgICAgIHJldHVybiBpc05pbChtYXRjaCkgP1xuICAgICAgICAgIHJlYWRlckVycm9yKHJlYWRlciwgXCJJbnZhbGlkIG51bWJlciBmb3JtYXQgW1wiLCBidWZmZXIsIFwiXVwiKSA6XG4gICAgICAgICAgbWF0Y2g7XG4gICAgICB9KSgpIDpcbiAgICAgIChidWZmZXIgPSBcIlwiICsgYnVmZmVyICsgKHJlYWRDaGFyKHJlYWRlcikpLCBjaCA9IHBlZWtDaGFyKHJlYWRlciksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShpbml0Y2gsIHBlZWtDaGFyKHJlYWRlcikpO1xufTtcbmV4cG9ydHMucmVhZE51bWJlciA9IHJlYWROdW1iZXI7XG5cbnZhciByZWFkU3RyaW5nID0gZnVuY3Rpb24gcmVhZFN0cmluZyhyZWFkZXIpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKGJ1ZmZlciwgY2gpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBpc05pbChjaCkgP1xuICAgICAgcmVhZGVyRXJyb3IocmVhZGVyLCBcIkVPRiB3aGlsZSByZWFkaW5nIHN0cmluZ1wiKSA6XG4gICAgXCJcXFxcXCIgPT09IGNoID9cbiAgICAgIChidWZmZXIgPSBcIlwiICsgYnVmZmVyICsgKGVzY2FwZUNoYXIoYnVmZmVyLCByZWFkZXIpKSwgY2ggPSByZWFkQ2hhcihyZWFkZXIpLCBsb29wKSA6XG4gICAgXCJcXFwiXCIgPT09IGNoID9cbiAgICAgIGJ1ZmZlciA6XG4gICAgXCJkZWZhdWx0XCIgP1xuICAgICAgKGJ1ZmZlciA9IFwiXCIgKyBidWZmZXIgKyBjaCwgY2ggPSByZWFkQ2hhcihyZWFkZXIpLCBsb29wKSA6XG4gICAgICB2b2lkKDApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShcIlwiLCByZWFkQ2hhcihyZWFkZXIpKTtcbn07XG5leHBvcnRzLnJlYWRTdHJpbmcgPSByZWFkU3RyaW5nO1xuXG52YXIgcmVhZFVucXVvdGUgPSBmdW5jdGlvbiByZWFkVW5xdW90ZShyZWFkZXIpIHtcbiAgdmFyIGNoID0gcGVla0NoYXIocmVhZGVyKTtcbiAgcmV0dXJuICEoY2gpID9cbiAgICByZWFkZXJFcnJvcihyZWFkZXIsIFwiRU9GIHdoaWxlIHJlYWRpbmcgY2hhcmFjdGVyXCIpIDpcbiAgY2ggPT09IFwiQFwiID9cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICByZWFkQ2hhcihyZWFkZXIpO1xuICAgICAgcmV0dXJuIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwidW5xdW90ZS1zcGxpY2luZ1wiKSwgcmVhZChyZWFkZXIsIHRydWUsIHZvaWQoMCksIHRydWUpKTtcbiAgICB9KSgpIDpcbiAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInVucXVvdGVcIiksIHJlYWQocmVhZGVyLCB0cnVlLCB2b2lkKDApLCB0cnVlKSk7XG59O1xuZXhwb3J0cy5yZWFkVW5xdW90ZSA9IHJlYWRVbnF1b3RlO1xuXG52YXIgc3BlY2lhbFN5bWJvbHMgPSBmdW5jdGlvbiBzcGVjaWFsU3ltYm9scyh0ZXh0LCBub3RGb3VuZCkge1xuICByZXR1cm4gdGV4dCA9PT0gXCJuaWxcIiA/XG4gICAgdm9pZCgwKSA6XG4gIHRleHQgPT09IFwidHJ1ZVwiID9cbiAgICB0cnVlIDpcbiAgdGV4dCA9PT0gXCJmYWxzZVwiID9cbiAgICBmYWxzZSA6XG4gIFwiZWxzZVwiID9cbiAgICBub3RGb3VuZCA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnNwZWNpYWxTeW1ib2xzID0gc3BlY2lhbFN5bWJvbHM7XG5cbnZhciByZWFkU3ltYm9sID0gZnVuY3Rpb24gcmVhZFN5bWJvbChyZWFkZXIsIGluaXRjaCkge1xuICB2YXIgdG9rZW4gPSByZWFkVG9rZW4ocmVhZGVyLCBpbml0Y2gpO1xuICB2YXIgcGFydHMgPSBzcGxpdCh0b2tlbiwgXCIvXCIpO1xuICB2YXIgaGFzTnMgPSAoY291bnQocGFydHMpID4gMSkgJiYgKGNvdW50KHRva2VuKSA+IDEpO1xuICB2YXIgbnMgPSBmaXJzdChwYXJ0cyk7XG4gIHZhciBuYW1lID0gam9pbihcIi9cIiwgcmVzdChwYXJ0cykpO1xuICByZXR1cm4gaGFzTnMgP1xuICAgIHN5bWJvbChucywgbmFtZSkgOlxuICAgIHNwZWNpYWxTeW1ib2xzKHRva2VuLCBzeW1ib2wodG9rZW4pKTtcbn07XG5leHBvcnRzLnJlYWRTeW1ib2wgPSByZWFkU3ltYm9sO1xuXG52YXIgcmVhZEtleXdvcmQgPSBmdW5jdGlvbiByZWFkS2V5d29yZChyZWFkZXIsIGluaXRjaCkge1xuICB2YXIgdG9rZW4gPSByZWFkVG9rZW4ocmVhZGVyLCByZWFkQ2hhcihyZWFkZXIpKTtcbiAgdmFyIHBhcnRzID0gc3BsaXQodG9rZW4sIFwiL1wiKTtcbiAgdmFyIG5hbWUgPSBsYXN0KHBhcnRzKTtcbiAgdmFyIG5zID0gY291bnQocGFydHMpID4gMSA/XG4gICAgam9pbihcIi9cIiwgYnV0bGFzdChwYXJ0cykpIDpcbiAgICB2b2lkKDApO1xuICB2YXIgaXNzdWUgPSBsYXN0KG5zKSA9PT0gXCI6XCIgP1xuICAgIFwibmFtZXNwYWNlIGNhbid0IGVuZHMgd2l0aCBcXFwiOlxcXCJcIiA6XG4gIGxhc3QobmFtZSkgPT09IFwiOlwiID9cbiAgICBcIm5hbWUgY2FuJ3QgZW5kIHdpdGggXFxcIjpcXFwiXCIgOlxuICBsYXN0KG5hbWUpID09PSBcIi9cIiA/XG4gICAgXCJuYW1lIGNhbid0IGVuZCB3aXRoIFxcXCIvXFxcIlwiIDpcbiAgY291bnQoc3BsaXQodG9rZW4sIFwiOjpcIikpID4gMSA/XG4gICAgXCJuYW1lIGNhbid0IGNvbnRhaW4gXFxcIjo6XFxcIlwiIDpcbiAgICB2b2lkKDApO1xuICByZXR1cm4gaXNzdWUgP1xuICAgIHJlYWRlckVycm9yKHJlYWRlciwgXCJJbnZhbGlkIHRva2VuIChcIiwgaXNzdWUsIFwiKTogXCIsIHRva2VuKSA6XG4gICghKG5zKSkgJiYgKGZpcnN0KG5hbWUpID09PSBcIjpcIikgP1xuICAgIGtleXdvcmQocmVzdChuYW1lKSkgOlxuICAgIGtleXdvcmQobnMsIG5hbWUpO1xufTtcbmV4cG9ydHMucmVhZEtleXdvcmQgPSByZWFkS2V5d29yZDtcblxudmFyIGRlc3VnYXJNZXRhID0gZnVuY3Rpb24gZGVzdWdhck1ldGEoZikge1xuICByZXR1cm4gaXNLZXl3b3JkKGYpID9cbiAgICBkaWN0aW9uYXJ5KG5hbWUoZiksIHRydWUpIDpcbiAgaXNTeW1ib2woZikgP1xuICAgIHtcbiAgICAgIFwidGFnXCI6IGZcbiAgICB9IDpcbiAgaXNTdHJpbmcoZikgP1xuICAgIHtcbiAgICAgIFwidGFnXCI6IGZcbiAgICB9IDpcbiAgXCJlbHNlXCIgP1xuICAgIGYgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5kZXN1Z2FyTWV0YSA9IGRlc3VnYXJNZXRhO1xuXG52YXIgd3JhcHBpbmdSZWFkZXIgPSBmdW5jdGlvbiB3cmFwcGluZ1JlYWRlcihwcmVmaXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJlYWRlcikge1xuICAgIHJldHVybiBsaXN0KHByZWZpeCwgcmVhZChyZWFkZXIsIHRydWUsIHZvaWQoMCksIHRydWUpKTtcbiAgfTtcbn07XG5leHBvcnRzLndyYXBwaW5nUmVhZGVyID0gd3JhcHBpbmdSZWFkZXI7XG5cbnZhciB0aHJvd2luZ1JlYWRlciA9IGZ1bmN0aW9uIHRocm93aW5nUmVhZGVyKG1zZykge1xuICByZXR1cm4gZnVuY3Rpb24ocmVhZGVyKSB7XG4gICAgcmV0dXJuIHJlYWRlckVycm9yKHJlYWRlciwgbXNnKTtcbiAgfTtcbn07XG5leHBvcnRzLnRocm93aW5nUmVhZGVyID0gdGhyb3dpbmdSZWFkZXI7XG5cbnZhciByZWFkTWV0YSA9IGZ1bmN0aW9uIHJlYWRNZXRhKHJlYWRlciwgXykge1xuICB2YXIgbWV0YWRhdGEgPSBkZXN1Z2FyTWV0YShyZWFkKHJlYWRlciwgdHJ1ZSwgdm9pZCgwKSwgdHJ1ZSkpO1xuICAhKGlzRGljdGlvbmFyeShtZXRhZGF0YSkpID9cbiAgICByZWFkZXJFcnJvcihyZWFkZXIsIFwiTWV0YWRhdGEgbXVzdCBiZSBTeW1ib2wsIEtleXdvcmQsIFN0cmluZyBvciBNYXBcIikgOlxuICAgIHZvaWQoMCk7XG4gIHJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvcm0gPSByZWFkKHJlYWRlciwgdHJ1ZSwgdm9pZCgwKSwgdHJ1ZSk7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGZvcm0pID9cbiAgICAgIHdpdGhNZXRhKGZvcm0sIGNvbmoobWV0YWRhdGEsIG1ldGEoZm9ybSkpKSA6XG4gICAgICBmb3JtO1xuICB9KSgpO1xufTtcbmV4cG9ydHMucmVhZE1ldGEgPSByZWFkTWV0YTtcblxudmFyIHJlYWRSZWdleCA9IGZ1bmN0aW9uIHJlYWRSZWdleChyZWFkZXIpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKGJ1ZmZlciwgY2gpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBpc05pbChjaCkgP1xuICAgICAgcmVhZGVyRXJyb3IocmVhZGVyLCBcIkVPRiB3aGlsZSByZWFkaW5nIHN0cmluZ1wiKSA6XG4gICAgXCJcXFxcXCIgPT09IGNoID9cbiAgICAgIChidWZmZXIgPSBcIlwiICsgYnVmZmVyICsgY2ggKyAocmVhZENoYXIocmVhZGVyKSksIGNoID0gcmVhZENoYXIocmVhZGVyKSwgbG9vcCkgOlxuICAgIFwiXFxcIlwiID09PSBjaCA/XG4gICAgICByZVBhdHRlcm4oYnVmZmVyKSA6XG4gICAgXCJkZWZhdWx0XCIgP1xuICAgICAgKGJ1ZmZlciA9IFwiXCIgKyBidWZmZXIgKyBjaCwgY2ggPSByZWFkQ2hhcihyZWFkZXIpLCBsb29wKSA6XG4gICAgICB2b2lkKDApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShcIlwiLCByZWFkQ2hhcihyZWFkZXIpKTtcbn07XG5leHBvcnRzLnJlYWRSZWdleCA9IHJlYWRSZWdleDtcblxudmFyIHJlYWRQYXJhbSA9IGZ1bmN0aW9uIHJlYWRQYXJhbShyZWFkZXIsIGluaXRjaCkge1xuICB2YXIgZm9ybSA9IHJlYWRTeW1ib2wocmVhZGVyLCBpbml0Y2gpO1xuICByZXR1cm4gaXNFcXVhbChmb3JtLCBzeW1ib2woXCIlXCIpKSA/XG4gICAgc3ltYm9sKFwiJTFcIikgOlxuICAgIGZvcm07XG59O1xuZXhwb3J0cy5yZWFkUGFyYW0gPSByZWFkUGFyYW07XG5cbnZhciBpc1BhcmFtID0gZnVuY3Rpb24gaXNQYXJhbShmb3JtKSB7XG4gIHJldHVybiAoaXNTeW1ib2woZm9ybSkpICYmIChcIiVcIiA9PT0gZmlyc3QobmFtZShmb3JtKSkpO1xufTtcbmV4cG9ydHMuaXNQYXJhbSA9IGlzUGFyYW07XG5cbnZhciBsYW1iZGFQYXJhbXNIYXNoID0gZnVuY3Rpb24gbGFtYmRhUGFyYW1zSGFzaChmb3JtKSB7XG4gIHJldHVybiBpc1BhcmFtKGZvcm0pID9cbiAgICBkaWN0aW9uYXJ5KGZvcm0sIGZvcm0pIDpcbiAgKGlzRGljdGlvbmFyeShmb3JtKSkgfHwgKGlzVmVjdG9yKGZvcm0pKSB8fCAoaXNMaXN0KGZvcm0pKSA/XG4gICAgY29uai5hcHBseShjb25qLCBtYXAobGFtYmRhUGFyYW1zSGFzaCwgdmVjKGZvcm0pKSkgOlxuICBcImVsc2VcIiA/XG4gICAge30gOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5sYW1iZGFQYXJhbXNIYXNoID0gbGFtYmRhUGFyYW1zSGFzaDtcblxudmFyIGxhbWJkYVBhcmFtcyA9IGZ1bmN0aW9uIGxhbWJkYVBhcmFtcyhib2R5KSB7XG4gIHZhciBuYW1lcyA9IHNvcnQodmFscyhsYW1iZGFQYXJhbXNIYXNoKGJvZHkpKSk7XG4gIHZhciB2YXJpYWRpYyA9IGlzRXF1YWwoZmlyc3QobmFtZXMpLCBzeW1ib2woXCIlJlwiKSk7XG4gIHZhciBuID0gdmFyaWFkaWMgJiYgKGNvdW50KG5hbWVzKSA9PT0gMSkgP1xuICAgIDAgOlxuICAgIHBhcnNlSW50KHJlc3QobmFtZShsYXN0KG5hbWVzKSkpKTtcbiAgdmFyIHBhcmFtcyA9IChmdW5jdGlvbiBsb29wKG5hbWVzLCBpKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaSA8PSBuID9cbiAgICAgIChuYW1lcyA9IGNvbmoobmFtZXMsIHN5bWJvbChcIlwiICsgXCIlXCIgKyBpKSksIGkgPSBpbmMoaSksIGxvb3ApIDpcbiAgICAgIG5hbWVzO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShbXSwgMSk7XG4gIHJldHVybiB2YXJpYWRpYyA/XG4gICAgY29uaihwYXJhbXMsIHN5bWJvbCh2b2lkKDApLCBcIiZcIiksIHN5bWJvbCh2b2lkKDApLCBcIiUmXCIpKSA6XG4gICAgbmFtZXM7XG59O1xuZXhwb3J0cy5sYW1iZGFQYXJhbXMgPSBsYW1iZGFQYXJhbXM7XG5cbnZhciByZWFkTGFtYmRhID0gZnVuY3Rpb24gcmVhZExhbWJkYShyZWFkZXIpIHtcbiAgdmFyIGJvZHkgPSByZWFkTGlzdChyZWFkZXIpO1xuICByZXR1cm4gbGlzdChzeW1ib2wodm9pZCgwKSwgXCJmblwiKSwgbGFtYmRhUGFyYW1zKGJvZHkpLCBib2R5KTtcbn07XG5leHBvcnRzLnJlYWRMYW1iZGEgPSByZWFkTGFtYmRhO1xuXG52YXIgcmVhZERpc2NhcmQgPSBmdW5jdGlvbiByZWFkRGlzY2FyZChyZWFkZXIsIF8pIHtcbiAgcmVhZChyZWFkZXIsIHRydWUsIHZvaWQoMCksIHRydWUpO1xuICByZXR1cm4gcmVhZGVyO1xufTtcbmV4cG9ydHMucmVhZERpc2NhcmQgPSByZWFkRGlzY2FyZDtcblxudmFyIG1hY3JvcyA9IGZ1bmN0aW9uIG1hY3JvcyhjKSB7XG4gIHJldHVybiBjID09PSBcIlxcXCJcIiA/XG4gICAgcmVhZFN0cmluZyA6XG4gIGMgPT09IFwiOlwiID9cbiAgICByZWFkS2V5d29yZCA6XG4gIGMgPT09IFwiO1wiID9cbiAgICByZWFkQ29tbWVudCA6XG4gIGMgPT09IFwiJ1wiID9cbiAgICB3cmFwcGluZ1JlYWRlcihzeW1ib2wodm9pZCgwKSwgXCJxdW90ZVwiKSkgOlxuICBjID09PSBcIkBcIiA/XG4gICAgd3JhcHBpbmdSZWFkZXIoc3ltYm9sKHZvaWQoMCksIFwiZGVyZWZcIikpIDpcbiAgYyA9PT0gXCJeXCIgP1xuICAgIHJlYWRNZXRhIDpcbiAgYyA9PT0gXCJgXCIgP1xuICAgIHdyYXBwaW5nUmVhZGVyKHN5bWJvbCh2b2lkKDApLCBcInN5bnRheC1xdW90ZVwiKSkgOlxuICBjID09PSBcIn5cIiA/XG4gICAgcmVhZFVucXVvdGUgOlxuICBjID09PSBcIihcIiA/XG4gICAgcmVhZExpc3QgOlxuICBjID09PSBcIilcIiA/XG4gICAgcmVhZFVubWF0Y2hlZERlbGltaXRlciA6XG4gIGMgPT09IFwiW1wiID9cbiAgICByZWFkVmVjdG9yIDpcbiAgYyA9PT0gXCJdXCIgP1xuICAgIHJlYWRVbm1hdGNoZWREZWxpbWl0ZXIgOlxuICBjID09PSBcIntcIiA/XG4gICAgcmVhZE1hcCA6XG4gIGMgPT09IFwifVwiID9cbiAgICByZWFkVW5tYXRjaGVkRGVsaW1pdGVyIDpcbiAgYyA9PT0gXCJcXFxcXCIgP1xuICAgIHJlYWRDaGFyIDpcbiAgYyA9PT0gXCIlXCIgP1xuICAgIHJlYWRQYXJhbSA6XG4gIGMgPT09IFwiI1wiID9cbiAgICByZWFkRGlzcGF0Y2ggOlxuICBcImVsc2VcIiA/XG4gICAgdm9pZCgwKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLm1hY3JvcyA9IG1hY3JvcztcblxudmFyIGRpc3BhdGNoTWFjcm9zID0gZnVuY3Rpb24gZGlzcGF0Y2hNYWNyb3Mocykge1xuICByZXR1cm4gcyA9PT0gXCJ7XCIgP1xuICAgIHJlYWRTZXQgOlxuICBzID09PSBcIihcIiA/XG4gICAgcmVhZExhbWJkYSA6XG4gIHMgPT09IFwiPFwiID9cbiAgICB0aHJvd2luZ1JlYWRlcihcIlVucmVhZGFibGUgZm9ybVwiKSA6XG4gIHMgPT09IFwiXFxcIlwiID9cbiAgICByZWFkUmVnZXggOlxuICBzID09PSBcIiFcIiA/XG4gICAgcmVhZENvbW1lbnQgOlxuICBzID09PSBcIl9cIiA/XG4gICAgcmVhZERpc2NhcmQgOlxuICBcImVsc2VcIiA/XG4gICAgdm9pZCgwKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmRpc3BhdGNoTWFjcm9zID0gZGlzcGF0Y2hNYWNyb3M7XG5cbnZhciByZWFkRm9ybSA9IGZ1bmN0aW9uIHJlYWRGb3JtKHJlYWRlciwgY2gpIHtcbiAgdmFyIHN0YXJ0ID0ge1xuICAgIFwibGluZVwiOiAocmVhZGVyIHx8IDApW1wibGluZVwiXSxcbiAgICBcImNvbHVtblwiOiAocmVhZGVyIHx8IDApW1wiY29sdW1uXCJdXG4gIH07XG4gIHZhciByZWFkTWFjcm8gPSBtYWNyb3MoY2gpO1xuICB2YXIgZm9ybSA9IHJlYWRNYWNybyA/XG4gICAgcmVhZE1hY3JvKHJlYWRlciwgY2gpIDpcbiAgaXNOdW1iZXJMaXRlcmFsKHJlYWRlciwgY2gpID9cbiAgICByZWFkTnVtYmVyKHJlYWRlciwgY2gpIDpcbiAgXCJlbHNlXCIgP1xuICAgIHJlYWRTeW1ib2wocmVhZGVyLCBjaCkgOlxuICAgIHZvaWQoMCk7XG4gIHJldHVybiBmb3JtID09PSByZWFkZXIgP1xuICAgIGZvcm0gOlxuICAhKChpc1N0cmluZyhmb3JtKSkgfHwgKGlzTnVtYmVyKGZvcm0pKSB8fCAoaXNCb29sZWFuKGZvcm0pKSB8fCAoaXNOaWwoZm9ybSkpIHx8IChpc0tleXdvcmQoZm9ybSkpKSA/XG4gICAgd2l0aE1ldGEoZm9ybSwgY29uaih7XG4gICAgICBcInN0YXJ0XCI6IHN0YXJ0LFxuICAgICAgXCJlbmRcIjoge1xuICAgICAgICBcImxpbmVcIjogKHJlYWRlciB8fCAwKVtcImxpbmVcIl0sXG4gICAgICAgIFwiY29sdW1uXCI6IChyZWFkZXIgfHwgMClbXCJjb2x1bW5cIl1cbiAgICAgIH1cbiAgICB9LCBtZXRhKGZvcm0pKSkgOlxuICBcImVsc2VcIiA/XG4gICAgZm9ybSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnJlYWRGb3JtID0gcmVhZEZvcm07XG5cbnZhciByZWFkID0gZnVuY3Rpb24gcmVhZChyZWFkZXIsIGVvZklzRXJyb3IsIHNlbnRpbmVsLCBpc1JlY3Vyc2l2ZSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNoID0gcmVhZENoYXIocmVhZGVyKTtcbiAgICAgIHZhciBmb3JtID0gaXNOaWwoY2gpID9cbiAgICAgICAgZW9mSXNFcnJvciA/XG4gICAgICAgICAgcmVhZGVyRXJyb3IocmVhZGVyLCBcIkVPRlwiKSA6XG4gICAgICAgICAgc2VudGluZWwgOlxuICAgICAgaXNXaGl0ZXNwYWNlKGNoKSA/XG4gICAgICAgIHJlYWRlciA6XG4gICAgICBpc0NvbW1lbnRQcmVmaXgoY2gpID9cbiAgICAgICAgcmVhZChyZWFkQ29tbWVudChyZWFkZXIsIGNoKSwgZW9mSXNFcnJvciwgc2VudGluZWwsIGlzUmVjdXJzaXZlKSA6XG4gICAgICBcImVsc2VcIiA/XG4gICAgICAgIHJlYWRGb3JtKHJlYWRlciwgY2gpIDpcbiAgICAgICAgdm9pZCgwKTtcbiAgICAgIHJldHVybiBmb3JtID09PSByZWFkZXIgP1xuICAgICAgICAobG9vcCkgOlxuICAgICAgICBmb3JtO1xuICAgIH0pKCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKCk7XG59O1xuZXhwb3J0cy5yZWFkID0gcmVhZDtcblxudmFyIHJlYWRfID0gZnVuY3Rpb24gcmVhZF8oc291cmNlLCB1cmkpIHtcbiAgdmFyIHJlYWRlciA9IHB1c2hCYWNrUmVhZGVyKHNvdXJjZSwgdXJpKTtcbiAgdmFyIGVvZiA9IGdlbnN5bSgpO1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoZm9ybXMsIGZvcm0pIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBmb3JtID09PSBlb2YgP1xuICAgICAgZm9ybXMgOlxuICAgICAgKGZvcm1zID0gY29uaihmb3JtcywgZm9ybSksIGZvcm0gPSByZWFkKHJlYWRlciwgZmFsc2UsIGVvZiwgZmFsc2UpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoW10sIHJlYWQocmVhZGVyLCBmYWxzZSwgZW9mLCBmYWxzZSkpO1xufTtcbmV4cG9ydHMucmVhZF8gPSByZWFkXztcblxudmFyIHJlYWRGcm9tU3RyaW5nID0gZnVuY3Rpb24gcmVhZEZyb21TdHJpbmcoc291cmNlLCB1cmkpIHtcbiAgdmFyIHJlYWRlciA9IHB1c2hCYWNrUmVhZGVyKHNvdXJjZSwgdXJpKTtcbiAgcmV0dXJuIHJlYWQocmVhZGVyLCB0cnVlLCB2b2lkKDApLCBmYWxzZSk7XG59O1xuZXhwb3J0cy5yZWFkRnJvbVN0cmluZyA9IHJlYWRGcm9tU3RyaW5nO1xuXG52YXIgcmVhZFV1aWQgPSBmdW5jdGlvbiByZWFkVXVpZCh1dWlkKSB7XG4gIHJldHVybiBpc1N0cmluZyh1dWlkKSA/XG4gICAgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJVVUlELlwiKSwgdXVpZCkgOlxuICAgIHJlYWRlckVycm9yKHZvaWQoMCksIFwiVVVJRCBsaXRlcmFsIGV4cGVjdHMgYSBzdHJpbmcgYXMgaXRzIHJlcHJlc2VudGF0aW9uLlwiKTtcbn07XG5cbnZhciByZWFkUXVldWUgPSBmdW5jdGlvbiByZWFkUXVldWUoaXRlbXMpIHtcbiAgcmV0dXJuIGlzVmVjdG9yKGl0ZW1zKSA/XG4gICAgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJQZXJzaXN0ZW50UXVldWUuXCIpLCBpdGVtcykgOlxuICAgIHJlYWRlckVycm9yKHZvaWQoMCksIFwiUXVldWUgbGl0ZXJhbCBleHBlY3RzIGEgdmVjdG9yIGZvciBpdHMgZWxlbWVudHMuXCIpO1xufTtcblxudmFyIF9fdGFnVGFibGVfXyA9IGRpY3Rpb25hcnkoXCJ1dWlkXCIsIHJlYWRVdWlkLCBcInF1ZXVlXCIsIHJlYWRRdWV1ZSk7XG5leHBvcnRzLl9fdGFnVGFibGVfXyA9IF9fdGFnVGFibGVfXztcblxudmFyIG1heWJlUmVhZFRhZ2dlZFR5cGUgPSBmdW5jdGlvbiBtYXliZVJlYWRUYWdnZWRUeXBlKHJlYWRlciwgaW5pdGNoKSB7XG4gIHZhciB0YWcgPSByZWFkU3ltYm9sKHJlYWRlciwgaW5pdGNoKTtcbiAgdmFyIHBmbiA9IChfX3RhZ1RhYmxlX18gfHwgMClbbmFtZSh0YWcpXTtcbiAgcmV0dXJuIHBmbiA/XG4gICAgcGZuKHJlYWQocmVhZGVyLCB0cnVlLCB2b2lkKDApLCBmYWxzZSkpIDpcbiAgICByZWFkZXJFcnJvcihyZWFkZXIsIFwiXCIgKyBcIkNvdWxkIG5vdCBmaW5kIHRhZyBwYXJzZXIgZm9yIFwiICsgKG5hbWUodGFnKSkgKyBcIiBpbiBcIiArIChcIlwiICsgKGtleXMoX190YWdUYWJsZV9fKSkpKTtcbn07XG5leHBvcnRzLm1heWJlUmVhZFRhZ2dlZFR5cGUgPSBtYXliZVJlYWRUYWdnZWRUeXBlXG4iLCJ2YXIgX25zXyA9IFwid2lzcC5hc3RcIjtcbm1vZHVsZS5uYW1lc3BhY2UgPSBfbnNfO1xudmFyIGlzTGlzdCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuaXNMaXN0O1xudmFyIGlzU2VxdWVudGlhbCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuaXNTZXF1ZW50aWFsO1xudmFyIGZpcnN0ID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5maXJzdDtcbnZhciBzZWNvbmQgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLnNlY29uZDtcbnZhciBjb3VudCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuY291bnQ7XG52YXIgbGFzdCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkubGFzdDtcbnZhciBtYXAgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLm1hcDtcbnZhciB2ZWMgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLnZlYztcbnZhciBzcGxpdCA9IChyZXF1aXJlKFwiLi9zdHJpbmdcIikpLnNwbGl0O1xudmFyIGpvaW4gPSAocmVxdWlyZShcIi4vc3RyaW5nXCIpKS5qb2luO1xudmFyIGlzTmlsID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzTmlsO1xudmFyIGlzVmVjdG9yID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzVmVjdG9yO1xudmFyIGlzTnVtYmVyID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzTnVtYmVyO1xudmFyIGlzU3RyaW5nID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzU3RyaW5nO1xudmFyIGlzQm9vbGVhbiA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc0Jvb2xlYW47XG52YXIgaXNPYmplY3QgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNPYmplY3Q7XG52YXIgaXNEYXRlID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzRGF0ZTtcbnZhciBpc1JlUGF0dGVybiA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc1JlUGF0dGVybjtcbnZhciBpc0RpY3Rpb25hcnkgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNEaWN0aW9uYXJ5O1xudmFyIHN0ciA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5zdHI7XG52YXIgaW5jID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmluYztcbnZhciBzdWJzID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLnN1YnM7XG52YXIgaXNFcXVhbCA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc0VxdWFsOztcblxudmFyIHdpdGhNZXRhID0gZnVuY3Rpb24gd2l0aE1ldGEodmFsdWUsIG1ldGFkYXRhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgXCJtZXRhZGF0YVwiLCB7XG4gICAgXCJ2YWx1ZVwiOiBtZXRhZGF0YSxcbiAgICBcImNvbmZpZ3VyYWJsZVwiOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gdmFsdWU7XG59O1xuZXhwb3J0cy53aXRoTWV0YSA9IHdpdGhNZXRhO1xuXG52YXIgbWV0YSA9IGZ1bmN0aW9uIG1ldGEodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSA/XG4gICAgdmFsdWUubWV0YWRhdGEgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5tZXRhID0gbWV0YTtcblxudmFyIF9fbnNTZXBhcmF0b3JfXyA9IFwi4oGEXCI7XG5leHBvcnRzLl9fbnNTZXBhcmF0b3JfXyA9IF9fbnNTZXBhcmF0b3JfXztcblxudmFyIFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbChuYW1lc3BhY2UsIG5hbWUpIHtcbiAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3ltYm9sLnR5cGUgPSBcIndpc3Auc3ltYm9sXCI7XG5cblN5bWJvbC5wcm90b3R5cGUudHlwZSA9IFN5bWJvbC50eXBlO1xuXG5TeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHZhciBucyA9IG5hbWVzcGFjZSh0aGlzKTtcbiAgcmV0dXJuIG5zID9cbiAgICBcIlwiICsgbnMgKyBcIi9cIiArIChuYW1lKHRoaXMpKSA6XG4gICAgXCJcIiArIChuYW1lKHRoaXMpKTtcbn07XG5cbnZhciBzeW1ib2wgPSBmdW5jdGlvbiBzeW1ib2wobnMsIGlkKSB7XG4gIHJldHVybiBpc1N5bWJvbChucykgP1xuICAgIG5zIDpcbiAgaXNLZXl3b3JkKG5zKSA/XG4gICAgbmV3IFN5bWJvbChuYW1lc3BhY2UobnMpLCBuYW1lKG5zKSkgOlxuICBpc05pbChpZCkgP1xuICAgIG5ldyBTeW1ib2wodm9pZCgwKSwgbnMpIDpcbiAgXCJlbHNlXCIgP1xuICAgIG5ldyBTeW1ib2wobnMsIGlkKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnN5bWJvbCA9IHN5bWJvbDtcblxudmFyIGlzU3ltYm9sID0gZnVuY3Rpb24gaXNTeW1ib2woeCkge1xuICByZXR1cm4geCAmJiAoU3ltYm9sLnR5cGUgPT09IHgudHlwZSk7XG59O1xuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG52YXIgaXNLZXl3b3JkID0gZnVuY3Rpb24gaXNLZXl3b3JkKHgpIHtcbiAgcmV0dXJuIChpc1N0cmluZyh4KSkgJiYgKGNvdW50KHgpID4gMSkgJiYgKGZpcnN0KHgpID09PSBcIuqeiVwiKTtcbn07XG5leHBvcnRzLmlzS2V5d29yZCA9IGlzS2V5d29yZDtcblxudmFyIGtleXdvcmQgPSBmdW5jdGlvbiBrZXl3b3JkKG5zLCBpZCkge1xuICByZXR1cm4gaXNLZXl3b3JkKG5zKSA/XG4gICAgbnMgOlxuICBpc1N5bWJvbChucykgP1xuICAgIFwiXCIgKyBcIuqeiVwiICsgKG5hbWUobnMpKSA6XG4gIGlzTmlsKGlkKSA/XG4gICAgXCJcIiArIFwi6p6JXCIgKyBucyA6XG4gIGlzTmlsKG5zKSA/XG4gICAgXCJcIiArIFwi6p6JXCIgKyBpZCA6XG4gIFwiZWxzZVwiID9cbiAgICBcIlwiICsgXCLqnolcIiArIG5zICsgX19uc1NlcGFyYXRvcl9fICsgaWQgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5rZXl3b3JkID0ga2V5d29yZDtcblxudmFyIGtleXdvcmROYW1lID0gZnVuY3Rpb24ga2V5d29yZE5hbWUodmFsdWUpIHtcbiAgcmV0dXJuIGxhc3Qoc3BsaXQoc3Vicyh2YWx1ZSwgMSksIF9fbnNTZXBhcmF0b3JfXykpO1xufTtcblxudmFyIG5hbWUgPSBmdW5jdGlvbiBuYW1lKHZhbHVlKSB7XG4gIHJldHVybiBpc1N5bWJvbCh2YWx1ZSkgP1xuICAgIHZhbHVlLm5hbWUgOlxuICBpc0tleXdvcmQodmFsdWUpID9cbiAgICBrZXl3b3JkTmFtZSh2YWx1ZSkgOlxuICBpc1N0cmluZyh2YWx1ZSkgP1xuICAgIHZhbHVlIDpcbiAgXCJlbHNlXCIgP1xuICAgIChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlwiICsgXCJEb2Vzbid0IHN1cHBvcnQgbmFtZTogXCIgKyB2YWx1ZSk7IH0pKCkgOlxuICAgIHZvaWQoMCk7XG59O1xuZXhwb3J0cy5uYW1lID0gbmFtZTtcblxudmFyIGtleXdvcmROYW1lc3BhY2UgPSBmdW5jdGlvbiBrZXl3b3JkTmFtZXNwYWNlKHgpIHtcbiAgdmFyIHBhcnRzID0gc3BsaXQoc3Vicyh4LCAxKSwgX19uc1NlcGFyYXRvcl9fKTtcbiAgcmV0dXJuIGNvdW50KHBhcnRzKSA+IDEgP1xuICAgIChwYXJ0cyB8fCAwKVswXSA6XG4gICAgdm9pZCgwKTtcbn07XG5cbnZhciBuYW1lc3BhY2UgPSBmdW5jdGlvbiBuYW1lc3BhY2UoeCkge1xuICByZXR1cm4gaXNTeW1ib2woeCkgP1xuICAgIHgubmFtZXNwYWNlIDpcbiAgaXNLZXl3b3JkKHgpID9cbiAgICBrZXl3b3JkTmFtZXNwYWNlKHgpIDpcbiAgXCJlbHNlXCIgP1xuICAgIChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlwiICsgXCJEb2Vzbid0IHN1cHBvcnRzIG5hbWVzcGFjZTogXCIgKyB4KTsgfSkoKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblxudmFyIGdlbnN5bSA9IGZ1bmN0aW9uIGdlbnN5bShwcmVmaXgpIHtcbiAgcmV0dXJuIHN5bWJvbChcIlwiICsgKGlzTmlsKHByZWZpeCkgP1xuICAgIFwiR19fXCIgOlxuICAgIHByZWZpeCkgKyAoZ2Vuc3ltLmJhc2UgPSBnZW5zeW0uYmFzZSArIDEpKTtcbn07XG5leHBvcnRzLmdlbnN5bSA9IGdlbnN5bTtcblxuZ2Vuc3ltLmJhc2UgPSAwO1xuXG52YXIgaXNVbnF1b3RlID0gZnVuY3Rpb24gaXNVbnF1b3RlKGZvcm0pIHtcbiAgcmV0dXJuIChpc0xpc3QoZm9ybSkpICYmIChpc0VxdWFsKGZpcnN0KGZvcm0pLCBzeW1ib2wodm9pZCgwKSwgXCJ1bnF1b3RlXCIpKSk7XG59O1xuZXhwb3J0cy5pc1VucXVvdGUgPSBpc1VucXVvdGU7XG5cbnZhciBpc1VucXVvdGVTcGxpY2luZyA9IGZ1bmN0aW9uIGlzVW5xdW90ZVNwbGljaW5nKGZvcm0pIHtcbiAgcmV0dXJuIChpc0xpc3QoZm9ybSkpICYmIChpc0VxdWFsKGZpcnN0KGZvcm0pLCBzeW1ib2wodm9pZCgwKSwgXCJ1bnF1b3RlLXNwbGljaW5nXCIpKSk7XG59O1xuZXhwb3J0cy5pc1VucXVvdGVTcGxpY2luZyA9IGlzVW5xdW90ZVNwbGljaW5nO1xuXG52YXIgaXNRdW90ZSA9IGZ1bmN0aW9uIGlzUXVvdGUoZm9ybSkge1xuICByZXR1cm4gKGlzTGlzdChmb3JtKSkgJiYgKGlzRXF1YWwoZmlyc3QoZm9ybSksIHN5bWJvbCh2b2lkKDApLCBcInF1b3RlXCIpKSk7XG59O1xuZXhwb3J0cy5pc1F1b3RlID0gaXNRdW90ZTtcblxudmFyIGlzU3ludGF4UXVvdGUgPSBmdW5jdGlvbiBpc1N5bnRheFF1b3RlKGZvcm0pIHtcbiAgcmV0dXJuIChpc0xpc3QoZm9ybSkpICYmIChpc0VxdWFsKGZpcnN0KGZvcm0pLCBzeW1ib2wodm9pZCgwKSwgXCJzeW50YXgtcXVvdGVcIikpKTtcbn07XG5leHBvcnRzLmlzU3ludGF4UXVvdGUgPSBpc1N5bnRheFF1b3RlO1xuXG52YXIgbm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKG4sIGxlbikge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AobnMpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBjb3VudChucykgPCBsZW4gP1xuICAgICAgKG5zID0gXCJcIiArIFwiMFwiICsgbnMsIGxvb3ApIDpcbiAgICAgIG5zO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShcIlwiICsgbik7XG59O1xuXG52YXIgcXVvdGVTdHJpbmcgPSBmdW5jdGlvbiBxdW90ZVN0cmluZyhzKSB7XG4gIHMgPSBqb2luKFwiXFxcXFxcXCJcIiwgc3BsaXQocywgXCJcXFwiXCIpKTtcbiAgcyA9IGpvaW4oXCJcXFxcXFxcXFwiLCBzcGxpdChzLCBcIlxcXFxcIikpO1xuICBzID0gam9pbihcIlxcXFxiXCIsIHNwbGl0KHMsIFwiXGJcIikpO1xuICBzID0gam9pbihcIlxcXFxmXCIsIHNwbGl0KHMsIFwiXGZcIikpO1xuICBzID0gam9pbihcIlxcXFxuXCIsIHNwbGl0KHMsIFwiXFxuXCIpKTtcbiAgcyA9IGpvaW4oXCJcXFxcclwiLCBzcGxpdChzLCBcIlxcclwiKSk7XG4gIHMgPSBqb2luKFwiXFxcXHRcIiwgc3BsaXQocywgXCJcXHRcIikpO1xuICByZXR1cm4gXCJcIiArIFwiXFxcIlwiICsgcyArIFwiXFxcIlwiO1xufTtcbmV4cG9ydHMucXVvdGVTdHJpbmcgPSBxdW90ZVN0cmluZztcblxudmFyIHByU3RyID0gZnVuY3Rpb24gcHJTdHIoeCkge1xuICByZXR1cm4gaXNOaWwoeCkgP1xuICAgIFwibmlsXCIgOlxuICBpc0tleXdvcmQoeCkgP1xuICAgIG5hbWVzcGFjZSh4KSA/XG4gICAgICBcIlwiICsgXCI6XCIgKyAobmFtZXNwYWNlKHgpKSArIFwiL1wiICsgKG5hbWUoeCkpIDpcbiAgICAgIFwiXCIgKyBcIjpcIiArIChuYW1lKHgpKSA6XG4gIGlzU3RyaW5nKHgpID9cbiAgICBxdW90ZVN0cmluZyh4KSA6XG4gIGlzRGF0ZSh4KSA/XG4gICAgXCJcIiArIFwiI2luc3QgXFxcIlwiICsgKHguZ2V0VVRDRnVsbFllYXIoKSkgKyBcIi1cIiArIChub3JtYWxpemUoaW5jKHguZ2V0VVRDTW9udGgoKSksIDIpKSArIFwiLVwiICsgKG5vcm1hbGl6ZSh4LmdldFVUQ0RhdGUoKSwgMikpICsgXCJUXCIgKyAobm9ybWFsaXplKHguZ2V0VVRDSG91cnMoKSwgMikpICsgXCI6XCIgKyAobm9ybWFsaXplKHguZ2V0VVRDTWludXRlcygpLCAyKSkgKyBcIjpcIiArIChub3JtYWxpemUoeC5nZXRVVENTZWNvbmRzKCksIDIpKSArIFwiLlwiICsgKG5vcm1hbGl6ZSh4LmdldFVUQ01pbGxpc2Vjb25kcygpLCAzKSkgKyBcIi1cIiArIFwiMDA6MDBcXFwiXCIgOlxuICBpc1ZlY3Rvcih4KSA/XG4gICAgXCJcIiArIFwiW1wiICsgKGpvaW4oXCIgXCIsIG1hcChwclN0ciwgdmVjKHgpKSkpICsgXCJdXCIgOlxuICBpc0RpY3Rpb25hcnkoeCkgP1xuICAgIFwiXCIgKyBcIntcIiArIChqb2luKFwiLCBcIiwgbWFwKGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgIHJldHVybiBcIlwiICsgKHByU3RyKGZpcnN0KHBhaXIpKSkgKyBcIiBcIiArIChwclN0cihzZWNvbmQocGFpcikpKTtcbiAgICB9LCB4KSkpICsgXCJ9XCIgOlxuICBpc1NlcXVlbnRpYWwoeCkgP1xuICAgIFwiXCIgKyBcIihcIiArIChqb2luKFwiIFwiLCBtYXAocHJTdHIsIHZlYyh4KSkpKSArIFwiKVwiIDpcbiAgaXNSZVBhdHRlcm4oeCkgP1xuICAgIFwiXCIgKyBcIiNcXFwiXCIgKyAoam9pbihcIlxcXFwvXCIsIHNwbGl0KHguc291cmNlLCBcIi9cIikpKSArIFwiXFxcIlwiIDpcbiAgXCJlbHNlXCIgP1xuICAgIFwiXCIgKyB4IDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMucHJTdHIgPSBwclN0clxuIiwidmFyIF9uc18gPSBcIndpc3AuY29tcGlsZXJcIjtcbm1vZHVsZS5uYW1lc3BhY2UgPSBfbnNfO1xubW9kdWxlLmRlc2NyaXB0aW9uID0gXCJ3aXNwIGxhbmd1YWdlIGNvbXBpbGVyXCI7XG52YXIgcmVhZEZyb21TdHJpbmcgPSAocmVxdWlyZShcIi4vcmVhZGVyXCIpKS5yZWFkRnJvbVN0cmluZztcbnZhciBtZXRhID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkubWV0YTtcbnZhciB3aXRoTWV0YSA9IChyZXF1aXJlKFwiLi9hc3RcIikpLndpdGhNZXRhO1xudmFyIGlzU3ltYm9sID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkuaXNTeW1ib2w7XG52YXIgc3ltYm9sID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkuc3ltYm9sO1xudmFyIGlzS2V5d29yZCA9IChyZXF1aXJlKFwiLi9hc3RcIikpLmlzS2V5d29yZDtcbnZhciBrZXl3b3JkID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkua2V5d29yZDtcbnZhciBuYW1lc3BhY2UgPSAocmVxdWlyZShcIi4vYXN0XCIpKS5uYW1lc3BhY2U7XG52YXIgaXNVbnF1b3RlID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkuaXNVbnF1b3RlO1xudmFyIGlzVW5xdW90ZVNwbGljaW5nID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkuaXNVbnF1b3RlU3BsaWNpbmc7XG52YXIgaXNRdW90ZSA9IChyZXF1aXJlKFwiLi9hc3RcIikpLmlzUXVvdGU7XG52YXIgaXNTeW50YXhRdW90ZSA9IChyZXF1aXJlKFwiLi9hc3RcIikpLmlzU3ludGF4UXVvdGU7XG52YXIgbmFtZSA9IChyZXF1aXJlKFwiLi9hc3RcIikpLm5hbWU7XG52YXIgZ2Vuc3ltID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkuZ2Vuc3ltO1xudmFyIHByU3RyID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkucHJTdHI7XG52YXIgaXNFbXB0eSA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuaXNFbXB0eTtcbnZhciBjb3VudCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuY291bnQ7XG52YXIgaXNMaXN0ID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5pc0xpc3Q7XG52YXIgbGlzdCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkubGlzdDtcbnZhciBmaXJzdCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuZmlyc3Q7XG52YXIgc2Vjb25kID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5zZWNvbmQ7XG52YXIgdGhpcmQgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLnRoaXJkO1xudmFyIHJlc3QgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLnJlc3Q7XG52YXIgY29ucyA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuY29ucztcbnZhciBjb25qID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5jb25qO1xudmFyIHJldmVyc2UgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLnJldmVyc2U7XG52YXIgcmVkdWNlID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5yZWR1Y2U7XG52YXIgdmVjID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS52ZWM7XG52YXIgbGFzdCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkubGFzdDtcbnZhciByZXBlYXQgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLnJlcGVhdDtcbnZhciBtYXAgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLm1hcDtcbnZhciBmaWx0ZXIgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmZpbHRlcjtcbnZhciB0YWtlID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS50YWtlO1xudmFyIGNvbmNhdCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuY29uY2F0O1xudmFyIGlzT2RkID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzT2RkO1xudmFyIGlzRGljdGlvbmFyeSA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc0RpY3Rpb25hcnk7XG52YXIgZGljdGlvbmFyeSA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5kaWN0aW9uYXJ5O1xudmFyIG1lcmdlID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLm1lcmdlO1xudmFyIGtleXMgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkua2V5cztcbnZhciB2YWxzID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLnZhbHM7XG52YXIgaXNDb250YWluc1ZlY3RvciA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc0NvbnRhaW5zVmVjdG9yO1xudmFyIG1hcERpY3Rpb25hcnkgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkubWFwRGljdGlvbmFyeTtcbnZhciBpc1N0cmluZyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc1N0cmluZztcbnZhciBpc051bWJlciA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc051bWJlcjtcbnZhciBpc1ZlY3RvciA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc1ZlY3RvcjtcbnZhciBpc0Jvb2xlYW4gPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNCb29sZWFuO1xudmFyIHN1YnMgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuc3VicztcbnZhciByZUZpbmQgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkucmVGaW5kO1xudmFyIGlzVHJ1ZSA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc1RydWU7XG52YXIgaXNGYWxzZSA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc0ZhbHNlO1xudmFyIGlzTmlsID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzTmlsO1xudmFyIGlzUmVQYXR0ZXJuID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzUmVQYXR0ZXJuO1xudmFyIGluYyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pbmM7XG52YXIgZGVjID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmRlYztcbnZhciBzdHIgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuc3RyO1xudmFyIGNoYXIgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuY2hhcjtcbnZhciBpbnQgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaW50O1xudmFyIGlzRXF1YWwgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNFcXVhbDtcbnZhciBpc1N0cmljdEVxdWFsID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzU3RyaWN0RXF1YWw7XG52YXIgc3BsaXQgPSAocmVxdWlyZShcIi4vc3RyaW5nXCIpKS5zcGxpdDtcbnZhciBqb2luID0gKHJlcXVpcmUoXCIuL3N0cmluZ1wiKSkuam9pbjtcbnZhciB1cHBlckNhc2UgPSAocmVxdWlyZShcIi4vc3RyaW5nXCIpKS51cHBlckNhc2U7XG52YXIgcmVwbGFjZSA9IChyZXF1aXJlKFwiLi9zdHJpbmdcIikpLnJlcGxhY2U7XG52YXIgd3JpdGVSZWZlcmVuY2UgPSAocmVxdWlyZShcIi4vYmFja2VuZC9qYXZhc2NyaXB0L3dyaXRlclwiKSkud3JpdGVSZWZlcmVuY2U7XG52YXIgd3JpdGVLZXl3b3JkUmVmZXJlbmNlID0gKHJlcXVpcmUoXCIuL2JhY2tlbmQvamF2YXNjcmlwdC93cml0ZXJcIikpLndyaXRlS2V5d29yZFJlZmVyZW5jZTtcbnZhciB3cml0ZUtleXdvcmQgPSAocmVxdWlyZShcIi4vYmFja2VuZC9qYXZhc2NyaXB0L3dyaXRlclwiKSkud3JpdGVLZXl3b3JkO1xudmFyIHdyaXRlU3ltYm9sID0gKHJlcXVpcmUoXCIuL2JhY2tlbmQvamF2YXNjcmlwdC93cml0ZXJcIikpLndyaXRlU3ltYm9sO1xudmFyIHdyaXRlTmlsID0gKHJlcXVpcmUoXCIuL2JhY2tlbmQvamF2YXNjcmlwdC93cml0ZXJcIikpLndyaXRlTmlsO1xudmFyIHdyaXRlQ29tbWVudCA9IChyZXF1aXJlKFwiLi9iYWNrZW5kL2phdmFzY3JpcHQvd3JpdGVyXCIpKS53cml0ZUNvbW1lbnQ7XG52YXIgd3JpdGVOdW1iZXIgPSAocmVxdWlyZShcIi4vYmFja2VuZC9qYXZhc2NyaXB0L3dyaXRlclwiKSkud3JpdGVOdW1iZXI7XG52YXIgd3JpdGVTdHJpbmcgPSAocmVxdWlyZShcIi4vYmFja2VuZC9qYXZhc2NyaXB0L3dyaXRlclwiKSkud3JpdGVTdHJpbmc7XG52YXIgd3JpdGVOdW1iZXIgPSAocmVxdWlyZShcIi4vYmFja2VuZC9qYXZhc2NyaXB0L3dyaXRlclwiKSkud3JpdGVOdW1iZXI7XG52YXIgd3JpdGVCb29sZWFuID0gKHJlcXVpcmUoXCIuL2JhY2tlbmQvamF2YXNjcmlwdC93cml0ZXJcIikpLndyaXRlQm9vbGVhbjs7XG5cbnZhciBpc1NlbGZFdmFsdWF0aW5nID0gZnVuY3Rpb24gaXNTZWxmRXZhbHVhdGluZyhmb3JtKSB7XG4gIHJldHVybiAoaXNOdW1iZXIoZm9ybSkpIHx8ICgoaXNTdHJpbmcoZm9ybSkpICYmICghKGlzU3ltYm9sKGZvcm0pKSkgJiYgKCEoaXNLZXl3b3JkKGZvcm0pKSkpIHx8IChpc0Jvb2xlYW4oZm9ybSkpIHx8IChpc05pbChmb3JtKSkgfHwgKGlzUmVQYXR0ZXJuKGZvcm0pKTtcbn07XG5leHBvcnRzLmlzU2VsZkV2YWx1YXRpbmcgPSBpc1NlbGZFdmFsdWF0aW5nO1xuXG52YXIgX19tYWNyb3NfXyA9IHt9O1xuZXhwb3J0cy5fX21hY3Jvc19fID0gX19tYWNyb3NfXztcblxudmFyIGV4ZWN1dGVNYWNybyA9IGZ1bmN0aW9uIGV4ZWN1dGVNYWNybyhuYW1lLCBmb3JtKSB7XG4gIHJldHVybiAoX19tYWNyb3NfXyB8fCAwKVtuYW1lXS5hcHBseSgoX19tYWNyb3NfXyB8fCAwKVtuYW1lXSwgdmVjKGZvcm0pKTtcbn07XG5leHBvcnRzLmV4ZWN1dGVNYWNybyA9IGV4ZWN1dGVNYWNybztcblxudmFyIGluc3RhbGxNYWNybyA9IGZ1bmN0aW9uIGluc3RhbGxNYWNybyhuYW1lLCBtYWNyb0ZuKSB7XG4gIHJldHVybiAoX19tYWNyb3NfXyB8fCAwKVtuYW1lXSA9IG1hY3JvRm47XG59O1xuZXhwb3J0cy5pbnN0YWxsTWFjcm8gPSBpbnN0YWxsTWFjcm87XG5cbnZhciBpc01hY3JvID0gZnVuY3Rpb24gaXNNYWNybyhuYW1lKSB7XG4gIHJldHVybiAoaXNTeW1ib2wobmFtZSkpICYmICgoX19tYWNyb3NfXyB8fCAwKVtuYW1lXSkgJiYgdHJ1ZTtcbn07XG5leHBvcnRzLmlzTWFjcm8gPSBpc01hY3JvO1xuXG52YXIgbWFrZU1hY3JvID0gZnVuY3Rpb24gbWFrZU1hY3JvKHBhdHRlcm4sIGJvZHkpIHtcbiAgdmFyIG1hY3JvRm4gPSBjb25jYXQobGlzdChzeW1ib2wodm9pZCgwKSwgXCJmblwiKSwgcGF0dGVybiksIGJvZHkpO1xuICByZXR1cm4gZXZhbChcIlwiICsgXCIoXCIgKyAoY29tcGlsZShtYWNyb2V4cGFuZChtYWNyb0ZuKSkpICsgXCIpXCIpO1xufTtcbmV4cG9ydHMubWFrZU1hY3JvID0gbWFrZU1hY3JvO1xuXG5pbnN0YWxsTWFjcm8oc3ltYm9sKHZvaWQoMCksIFwiZGVmbWFjcm9cIiksIGZ1bmN0aW9uKG5hbWUsIHNpZ25hdHVyZSkge1xuICB2YXIgYm9keSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gIHJldHVybiBpbnN0YWxsTWFjcm8obmFtZSwgbWFrZU1hY3JvKHNpZ25hdHVyZSwgYm9keSkpO1xufSk7XG5cbnZhciBfX3NwZWNpYWxzX18gPSB7fTtcbmV4cG9ydHMuX19zcGVjaWFsc19fID0gX19zcGVjaWFsc19fO1xuXG52YXIgaW5zdGFsbFNwZWNpYWwgPSBmdW5jdGlvbiBpbnN0YWxsU3BlY2lhbChuYW1lLCBmLCB2YWxpZGF0b3IpIHtcbiAgcmV0dXJuIChfX3NwZWNpYWxzX18gfHwgMClbbmFtZV0gPSBmdW5jdGlvbihmb3JtKSB7XG4gICAgdmFsaWRhdG9yID9cbiAgICAgIHZhbGlkYXRvcihmb3JtKSA6XG4gICAgICB2b2lkKDApO1xuICAgIHJldHVybiBmKHdpdGhNZXRhKHJlc3QoZm9ybSksIG1ldGEoZm9ybSkpKTtcbiAgfTtcbn07XG5leHBvcnRzLmluc3RhbGxTcGVjaWFsID0gaW5zdGFsbFNwZWNpYWw7XG5cbnZhciBpc1NwZWNpYWwgPSBmdW5jdGlvbiBpc1NwZWNpYWwobmFtZSkge1xuICByZXR1cm4gKGlzU3ltYm9sKG5hbWUpKSAmJiAoKF9fc3BlY2lhbHNfXyB8fCAwKVtuYW1lXSkgJiYgdHJ1ZTtcbn07XG5leHBvcnRzLmlzU3BlY2lhbCA9IGlzU3BlY2lhbDtcblxudmFyIGV4ZWN1dGVTcGVjaWFsID0gZnVuY3Rpb24gZXhlY3V0ZVNwZWNpYWwobmFtZSwgZm9ybSkge1xuICByZXR1cm4gKChfX3NwZWNpYWxzX18gfHwgMClbbmFtZV0pKGZvcm0pO1xufTtcbmV4cG9ydHMuZXhlY3V0ZVNwZWNpYWwgPSBleGVjdXRlU3BlY2lhbDtcblxudmFyIG9wdCA9IGZ1bmN0aW9uIG9wdChhcmd1bWVudCwgZmFsbGJhY2spIHtcbiAgcmV0dXJuIChpc05pbChhcmd1bWVudCkpIHx8IChpc0VtcHR5KGFyZ3VtZW50KSkgP1xuICAgIGZhbGxiYWNrIDpcbiAgICBmaXJzdChhcmd1bWVudCk7XG59O1xuZXhwb3J0cy5vcHQgPSBvcHQ7XG5cbnZhciBhcHBseUZvcm0gPSBmdW5jdGlvbiBhcHBseUZvcm0oZm5OYW1lLCBmb3JtLCBpc1F1b3RlZCkge1xuICByZXR1cm4gY29ucyhmbk5hbWUsIGlzUXVvdGVkID9cbiAgICBtYXAoZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwicXVvdGVcIiksIGUpO1xuICAgIH0sIGZvcm0pIDpcbiAgICBmb3JtLCBmb3JtKTtcbn07XG5leHBvcnRzLmFwcGx5Rm9ybSA9IGFwcGx5Rm9ybTtcblxudmFyIGFwcGx5VW5xdW90ZWRGb3JtID0gZnVuY3Rpb24gYXBwbHlVbnF1b3RlZEZvcm0oZm5OYW1lLCBmb3JtKSB7XG4gIHJldHVybiBjb25zKGZuTmFtZSwgbWFwKGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gaXNVbnF1b3RlKGUpID9cbiAgICAgIHNlY29uZChlKSA6XG4gICAgKGlzTGlzdChlKSkgJiYgKGlzS2V5d29yZChmaXJzdChlKSkpID9cbiAgICAgIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwic3ludGF4LXF1b3RlXCIpLCBzZWNvbmQoZSkpIDpcbiAgICAgIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwic3ludGF4LXF1b3RlXCIpLCBlKTtcbiAgfSwgZm9ybSkpO1xufTtcbmV4cG9ydHMuYXBwbHlVbnF1b3RlZEZvcm0gPSBhcHBseVVucXVvdGVkRm9ybTtcblxudmFyIHNwbGl0U3BsaWNlcyA9IGZ1bmN0aW9uIHNwbGl0U3BsaWNlcyhmb3JtLCBmbk5hbWUpIHtcbiAgdmFyIG1ha2VTcGxpY2UgPSBmdW5jdGlvbiBtYWtlU3BsaWNlKGZvcm0pIHtcbiAgICByZXR1cm4gKGlzU2VsZkV2YWx1YXRpbmcoZm9ybSkpIHx8IChpc1N5bWJvbChmb3JtKSkgP1xuICAgICAgYXBwbHlVbnF1b3RlZEZvcm0oZm5OYW1lLCBsaXN0KGZvcm0pKSA6XG4gICAgICBhcHBseVVucXVvdGVkRm9ybShmbk5hbWUsIGZvcm0pO1xuICB9O1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3Aobm9kZXMsIHNsaWNlcywgYWNjKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShub2RlcykgP1xuICAgICAgcmV2ZXJzZShpc0VtcHR5KGFjYykgP1xuICAgICAgICBzbGljZXMgOlxuICAgICAgICBjb25zKG1ha2VTcGxpY2UocmV2ZXJzZShhY2MpKSwgc2xpY2VzKSkgOlxuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbm9kZSA9IGZpcnN0KG5vZGVzKTtcbiAgICAgICAgcmV0dXJuIGlzVW5xdW90ZVNwbGljaW5nKG5vZGUpID9cbiAgICAgICAgICAobm9kZXMgPSByZXN0KG5vZGVzKSwgc2xpY2VzID0gY29ucyhzZWNvbmQobm9kZSksIGlzRW1wdHkoYWNjKSA/XG4gICAgICAgICAgICBzbGljZXMgOlxuICAgICAgICAgICAgY29ucyhtYWtlU3BsaWNlKHJldmVyc2UoYWNjKSksIHNsaWNlcykpLCBhY2MgPSBsaXN0KCksIGxvb3ApIDpcbiAgICAgICAgICAobm9kZXMgPSByZXN0KG5vZGVzKSwgc2xpY2VzID0gc2xpY2VzLCBhY2MgPSBjb25zKG5vZGUsIGFjYyksIGxvb3ApO1xuICAgICAgfSkoKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoZm9ybSwgbGlzdCgpLCBsaXN0KCkpO1xufTtcbmV4cG9ydHMuc3BsaXRTcGxpY2VzID0gc3BsaXRTcGxpY2VzO1xuXG52YXIgc3ludGF4UXVvdGVTcGxpdCA9IGZ1bmN0aW9uIHN5bnRheFF1b3RlU3BsaXQoYXBwZW5kTmFtZSwgZm5OYW1lLCBmb3JtKSB7XG4gIHZhciBzbGljZXMgPSBzcGxpdFNwbGljZXMoZm9ybSwgZm5OYW1lKTtcbiAgdmFyIG4gPSBjb3VudChzbGljZXMpO1xuICByZXR1cm4gbiA9PT0gMCA/XG4gICAgbGlzdChmbk5hbWUpIDpcbiAgbiA9PT0gMSA/XG4gICAgZmlyc3Qoc2xpY2VzKSA6XG4gIFwiZGVmYXVsdFwiID9cbiAgICBhcHBseUZvcm0oYXBwZW5kTmFtZSwgc2xpY2VzKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnN5bnRheFF1b3RlU3BsaXQgPSBzeW50YXhRdW90ZVNwbGl0O1xuXG52YXIgY29tcGlsZU9iamVjdCA9IGZ1bmN0aW9uIGNvbXBpbGVPYmplY3QoZm9ybSwgaXNRdW90ZWQpIHtcbiAgcmV0dXJuIGlzS2V5d29yZChmb3JtKSA/XG4gICAgd3JpdGVLZXl3b3JkKGZvcm0pIDpcbiAgaXNTeW1ib2woZm9ybSkgP1xuICAgIHdyaXRlU3ltYm9sKGZvcm0pIDpcbiAgaXNOdW1iZXIoZm9ybSkgP1xuICAgIHdyaXRlTnVtYmVyKGZvcm0pIDpcbiAgaXNTdHJpbmcoZm9ybSkgP1xuICAgIHdyaXRlU3RyaW5nKGZvcm0pIDpcbiAgaXNCb29sZWFuKGZvcm0pID9cbiAgICB3cml0ZUJvb2xlYW4oZm9ybSkgOlxuICBpc05pbChmb3JtKSA/XG4gICAgd3JpdGVOaWwoZm9ybSkgOlxuICBpc1JlUGF0dGVybihmb3JtKSA/XG4gICAgY29tcGlsZVJlUGF0dGVybihmb3JtKSA6XG4gIGlzVmVjdG9yKGZvcm0pID9cbiAgICBjb21waWxlKGFwcGx5Rm9ybShzeW1ib2wodm9pZCgwKSwgXCJ2ZWN0b3JcIiksIGxpc3QuYXBwbHkobGlzdCwgZm9ybSksIGlzUXVvdGVkKSkgOlxuICBpc0xpc3QoZm9ybSkgP1xuICAgIGNvbXBpbGUoYXBwbHlGb3JtKHN5bWJvbCh2b2lkKDApLCBcImxpc3RcIiksIGZvcm0sIGlzUXVvdGVkKSkgOlxuICBpc0RpY3Rpb25hcnkoZm9ybSkgP1xuICAgIGNvbXBpbGVEaWN0aW9uYXJ5KGlzUXVvdGVkID9cbiAgICAgIG1hcERpY3Rpb25hcnkoZm9ybSwgZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gbGlzdChzeW1ib2wodm9pZCgwKSwgXCJxdW90ZVwiKSwgeCk7XG4gICAgICB9KSA6XG4gICAgICBmb3JtKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmNvbXBpbGVPYmplY3QgPSBjb21waWxlT2JqZWN0O1xuXG52YXIgY29tcGlsZVN5bnRheFF1b3RlZFZlY3RvciA9IGZ1bmN0aW9uIGNvbXBpbGVTeW50YXhRdW90ZWRWZWN0b3IoZm9ybSkge1xuICB2YXIgY29uY2F0Rm9ybSA9IHN5bnRheFF1b3RlU3BsaXQoc3ltYm9sKHZvaWQoMCksIFwiY29uY2F0XCIpLCBzeW1ib2wodm9pZCgwKSwgXCJ2ZWN0b3JcIiksIGxpc3QuYXBwbHkobGlzdCwgZm9ybSkpO1xuICByZXR1cm4gY29tcGlsZShjb3VudChjb25jYXRGb3JtKSA+IDEgP1xuICAgIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwidmVjXCIpLCBjb25jYXRGb3JtKSA6XG4gICAgY29uY2F0Rm9ybSk7XG59O1xuZXhwb3J0cy5jb21waWxlU3ludGF4UXVvdGVkVmVjdG9yID0gY29tcGlsZVN5bnRheFF1b3RlZFZlY3RvcjtcblxudmFyIGNvbXBpbGVTeW50YXhRdW90ZWQgPSBmdW5jdGlvbiBjb21waWxlU3ludGF4UXVvdGVkKGZvcm0pIHtcbiAgcmV0dXJuIGlzTGlzdChmb3JtKSA/XG4gICAgY29tcGlsZShzeW50YXhRdW90ZVNwbGl0KHN5bWJvbCh2b2lkKDApLCBcImNvbmNhdFwiKSwgc3ltYm9sKHZvaWQoMCksIFwibGlzdFwiKSwgZm9ybSkpIDpcbiAgaXNWZWN0b3IoZm9ybSkgP1xuICAgIGNvbXBpbGVTeW50YXhRdW90ZWRWZWN0b3IoZm9ybSkgOlxuICBcImVsc2VcIiA/XG4gICAgY29tcGlsZU9iamVjdChmb3JtKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmNvbXBpbGVTeW50YXhRdW90ZWQgPSBjb21waWxlU3ludGF4UXVvdGVkO1xuXG52YXIgY29tcGlsZSA9IGZ1bmN0aW9uIGNvbXBpbGUoZm9ybSkge1xuICByZXR1cm4gaXNTZWxmRXZhbHVhdGluZyhmb3JtKSA/XG4gICAgY29tcGlsZU9iamVjdChmb3JtKSA6XG4gIGlzU3ltYm9sKGZvcm0pID9cbiAgICB3cml0ZVJlZmVyZW5jZShmb3JtKSA6XG4gIGlzS2V5d29yZChmb3JtKSA/XG4gICAgd3JpdGVLZXl3b3JkUmVmZXJlbmNlKGZvcm0pIDpcbiAgaXNWZWN0b3IoZm9ybSkgP1xuICAgIGNvbXBpbGVPYmplY3QoZm9ybSkgOlxuICBpc0RpY3Rpb25hcnkoZm9ybSkgP1xuICAgIGNvbXBpbGVPYmplY3QoZm9ybSkgOlxuICBpc0xpc3QoZm9ybSkgP1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoZWFkID0gZmlyc3QoZm9ybSk7XG4gICAgICByZXR1cm4gaXNFbXB0eShmb3JtKSA/XG4gICAgICAgIGNvbXBpbGVPYmplY3QoZm9ybSwgdHJ1ZSkgOlxuICAgICAgaXNRdW90ZShmb3JtKSA/XG4gICAgICAgIGNvbXBpbGVPYmplY3Qoc2Vjb25kKGZvcm0pLCB0cnVlKSA6XG4gICAgICBpc1N5bnRheFF1b3RlKGZvcm0pID9cbiAgICAgICAgY29tcGlsZVN5bnRheFF1b3RlZChzZWNvbmQoZm9ybSkpIDpcbiAgICAgIGlzU3BlY2lhbChoZWFkKSA/XG4gICAgICAgIGV4ZWN1dGVTcGVjaWFsKGhlYWQsIGZvcm0pIDpcbiAgICAgIGlzS2V5d29yZChoZWFkKSA/XG4gICAgICAgIGNvbXBpbGUobGlzdChzeW1ib2wodm9pZCgwKSwgXCJnZXRcIiksIHNlY29uZChmb3JtKSwgaGVhZCkpIDpcbiAgICAgIFwiZWxzZVwiID9cbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAhKChpc1N5bWJvbChoZWFkKSkgfHwgKGlzTGlzdChoZWFkKSkpID9cbiAgICAgICAgICAgIChmdW5jdGlvbigpIHsgdGhyb3cgY29tcGlsZXJFcnJvcihmb3JtLCBcIlwiICsgXCJvcGVyYXRvciBpcyBub3QgYSBwcm9jZWR1cmU6IFwiICsgaGVhZCk7IH0pKCkgOlxuICAgICAgICAgICAgY29tcGlsZUludm9rZShmb3JtKTtcbiAgICAgICAgfSkoKSA6XG4gICAgICAgIHZvaWQoMCk7XG4gICAgfSkoKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuXG52YXIgY29tcGlsZV8gPSBmdW5jdGlvbiBjb21waWxlXyhmb3Jtcykge1xuICByZXR1cm4gcmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgZm9ybSkge1xuICAgIHJldHVybiBcIlwiICsgcmVzdWx0ICsgKGlzRW1wdHkocmVzdWx0KSA/XG4gICAgICBcIlwiIDpcbiAgICAgIFwiO1xcblxcblwiKSArIChjb21waWxlKGlzTGlzdChmb3JtKSA/XG4gICAgICB3aXRoTWV0YShtYWNyb2V4cGFuZChmb3JtKSwgY29uaih7XG4gICAgICAgIFwidG9wXCI6IHRydWVcbiAgICAgIH0sIG1ldGEoZm9ybSkpKSA6XG4gICAgICBmb3JtKSk7XG4gIH0sIFwiXCIsIGZvcm1zKTtcbn07XG5leHBvcnRzLmNvbXBpbGVfID0gY29tcGlsZV87XG5cbnZhciBjb21waWxlUHJvZ3JhbSA9IGZ1bmN0aW9uIGNvbXBpbGVQcm9ncmFtKGZvcm1zKSB7XG4gIHJldHVybiByZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBmb3JtKSB7XG4gICAgcmV0dXJuIFwiXCIgKyByZXN1bHQgKyAoaXNFbXB0eShyZXN1bHQpID9cbiAgICAgIFwiXCIgOlxuICAgICAgXCI7XFxuXFxuXCIpICsgKGNvbXBpbGUoaXNMaXN0KGZvcm0pID9cbiAgICAgIHdpdGhNZXRhKG1hY3JvZXhwYW5kKGZvcm0pLCBjb25qKHtcbiAgICAgICAgXCJ0b3BcIjogdHJ1ZVxuICAgICAgfSwgbWV0YShmb3JtKSkpIDpcbiAgICAgIGZvcm0pKTtcbiAgfSwgXCJcIiwgZm9ybXMpO1xufTtcbmV4cG9ydHMuY29tcGlsZVByb2dyYW0gPSBjb21waWxlUHJvZ3JhbTtcblxudmFyIG1hY3JvZXhwYW5kMSA9IGZ1bmN0aW9uIG1hY3JvZXhwYW5kMShmb3JtKSB7XG4gIHJldHVybiBpc0xpc3QoZm9ybSkgP1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvcCA9IGZpcnN0KGZvcm0pO1xuICAgICAgdmFyIGlkID0gaXNTeW1ib2wob3ApID9cbiAgICAgICAgbmFtZShvcCkgOlxuICAgICAgICB2b2lkKDApO1xuICAgICAgcmV0dXJuIGlzU3BlY2lhbChvcCkgP1xuICAgICAgICBmb3JtIDpcbiAgICAgIGlzTWFjcm8ob3ApID9cbiAgICAgICAgZXhlY3V0ZU1hY3JvKG9wLCByZXN0KGZvcm0pKSA6XG4gICAgICAoaXNTeW1ib2wob3ApKSAmJiAoIShpZCA9PT0gXCIuXCIpKSA/XG4gICAgICAgIGZpcnN0KGlkKSA9PT0gXCIuXCIgP1xuICAgICAgICAgIGNvdW50KGZvcm0pIDwgMiA/XG4gICAgICAgICAgICAoZnVuY3Rpb24oKSB7IHRocm93IEVycm9yKFwiTWFsZm9ybWVkIG1lbWJlciBleHByZXNzaW9uLCBleHBlY3RpbmcgKC5tZW1iZXIgdGFyZ2V0IC4uLilcIik7IH0pKCkgOlxuICAgICAgICAgICAgY29ucyhzeW1ib2wodm9pZCgwKSwgXCIuXCIpLCBjb25zKHNlY29uZChmb3JtKSwgY29ucyhzeW1ib2woc3VicyhpZCwgMSkpLCByZXN0KHJlc3QoZm9ybSkpKSkpIDpcbiAgICAgICAgbGFzdChpZCkgPT09IFwiLlwiID9cbiAgICAgICAgICBjb25zKHN5bWJvbCh2b2lkKDApLCBcIm5ld1wiKSwgY29ucyhzeW1ib2woc3VicyhpZCwgMCwgZGVjKGNvdW50KGlkKSkpKSwgcmVzdChmb3JtKSkpIDpcbiAgICAgICAgICBmb3JtIDpcbiAgICAgIFwiZWxzZVwiID9cbiAgICAgICAgZm9ybSA6XG4gICAgICAgIHZvaWQoMCk7XG4gICAgfSkoKSA6XG4gICAgZm9ybTtcbn07XG5leHBvcnRzLm1hY3JvZXhwYW5kMSA9IG1hY3JvZXhwYW5kMTtcblxudmFyIG1hY3JvZXhwYW5kID0gZnVuY3Rpb24gbWFjcm9leHBhbmQoZm9ybSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3Aob3JpZ2luYWwsIGV4cGFuZGVkKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gb3JpZ2luYWwgPT09IGV4cGFuZGVkID9cbiAgICAgIG9yaWdpbmFsIDpcbiAgICAgIChvcmlnaW5hbCA9IGV4cGFuZGVkLCBleHBhbmRlZCA9IG1hY3JvZXhwYW5kMShleHBhbmRlZCksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShmb3JtLCBtYWNyb2V4cGFuZDEoZm9ybSkpO1xufTtcbmV4cG9ydHMubWFjcm9leHBhbmQgPSBtYWNyb2V4cGFuZDtcblxudmFyIF9saW5lQnJlYWtQYXR0ZXJuXyA9IC9cXG4oPz1bXlxcbl0pL207XG5leHBvcnRzLl9saW5lQnJlYWtQYXR0ZXJuXyA9IF9saW5lQnJlYWtQYXR0ZXJuXztcblxudmFyIGluZGVudCA9IGZ1bmN0aW9uIGluZGVudChjb2RlLCBpbmRlbnRhdGlvbikge1xuICByZXR1cm4gam9pbihpbmRlbnRhdGlvbiwgc3BsaXQoY29kZSwgX2xpbmVCcmVha1BhdHRlcm5fKSk7XG59O1xuZXhwb3J0cy5pbmRlbnQgPSBpbmRlbnQ7XG5cbnZhciBjb21waWxlVGVtcGxhdGUgPSBmdW5jdGlvbiBjb21waWxlVGVtcGxhdGUoZm9ybSkge1xuICB2YXIgaW5kZW50UGF0dGVybiA9IC9cXG4gKiQvO1xuICB2YXIgZ2V0SW5kZW50YXRpb24gPSBmdW5jdGlvbihjb2RlKSB7XG4gICAgcmV0dXJuIChyZUZpbmQoaW5kZW50UGF0dGVybiwgY29kZSkpIHx8IFwiXFxuXCI7XG4gIH07XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChjb2RlLCBwYXJ0cywgdmFsdWVzKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gY291bnQocGFydHMpID4gMSA/XG4gICAgICAoY29kZSA9IFwiXCIgKyBjb2RlICsgKGZpcnN0KHBhcnRzKSkgKyAoaW5kZW50KFwiXCIgKyAoZmlyc3QodmFsdWVzKSksIGdldEluZGVudGF0aW9uKGZpcnN0KHBhcnRzKSkpKSwgcGFydHMgPSByZXN0KHBhcnRzKSwgdmFsdWVzID0gcmVzdCh2YWx1ZXMpLCBsb29wKSA6XG4gICAgICBcIlwiICsgY29kZSArIChmaXJzdChwYXJ0cykpO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShcIlwiLCBzcGxpdChmaXJzdChmb3JtKSwgXCJ+e31cIiksIHJlc3QoZm9ybSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZVRlbXBsYXRlID0gY29tcGlsZVRlbXBsYXRlO1xuXG52YXIgY29tcGlsZURlZiA9IGZ1bmN0aW9uIGNvbXBpbGVEZWYoZm9ybSkge1xuICB2YXIgaWQgPSBmaXJzdChmb3JtKTtcbiAgdmFyIGlzRXhwb3J0ID0gKCgoKG1ldGEoZm9ybSkpIHx8IHt9KSB8fCAwKVtcInRvcFwiXSkgJiYgKCEoKCgobWV0YShpZCkpIHx8IHt9KSB8fCAwKVtcInByaXZhdGVcIl0pKTtcbiAgdmFyIGF0dHJpYnV0ZSA9IHN5bWJvbChuYW1lc3BhY2UoaWQpLCBcIlwiICsgXCItXCIgKyAobmFtZShpZCkpKTtcbiAgcmV0dXJuIGlzRXhwb3J0ID9cbiAgICBjb21waWxlVGVtcGxhdGUobGlzdChcInZhciB+e307XFxufnt9XCIsIGNvbXBpbGUoY29ucyhzeW1ib2wodm9pZCgwKSwgXCJzZXQhXCIpLCBmb3JtKSksIGNvbXBpbGUobGlzdChzeW1ib2wodm9pZCgwKSwgXCJzZXQhXCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcIi5cIiksIHN5bWJvbCh2b2lkKDApLCBcImV4cG9ydHNcIiksIGF0dHJpYnV0ZSksIGlkKSkpKSA6XG4gICAgY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ2YXIgfnt9XCIsIGNvbXBpbGUoY29ucyhzeW1ib2wodm9pZCgwKSwgXCJzZXQhXCIpLCBmb3JtKSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVEZWYgPSBjb21waWxlRGVmO1xuXG52YXIgY29tcGlsZUlmRWxzZSA9IGZ1bmN0aW9uIGNvbXBpbGVJZkVsc2UoZm9ybSkge1xuICB2YXIgY29uZGl0aW9uID0gbWFjcm9leHBhbmQoZmlyc3QoZm9ybSkpO1xuICB2YXIgdGhlbkV4cHJlc3Npb24gPSBtYWNyb2V4cGFuZChzZWNvbmQoZm9ybSkpO1xuICB2YXIgZWxzZUV4cHJlc3Npb24gPSBtYWNyb2V4cGFuZCh0aGlyZChmb3JtKSk7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdCgoaXNMaXN0KGVsc2VFeHByZXNzaW9uKSkgJiYgKGlzRXF1YWwoZmlyc3QoZWxzZUV4cHJlc3Npb24pLCBzeW1ib2wodm9pZCgwKSwgXCJpZlwiKSkpID9cbiAgICBcIn57fSA/XFxuICB+e30gOlxcbn57fVwiIDpcbiAgICBcIn57fSA/XFxuICB+e30gOlxcbiAgfnt9XCIsIGNvbXBpbGUoY29uZGl0aW9uKSwgY29tcGlsZSh0aGVuRXhwcmVzc2lvbiksIGNvbXBpbGUoZWxzZUV4cHJlc3Npb24pKSk7XG59O1xuZXhwb3J0cy5jb21waWxlSWZFbHNlID0gY29tcGlsZUlmRWxzZTtcblxudmFyIGNvbXBpbGVEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gY29tcGlsZURpY3Rpb25hcnkoZm9ybSkge1xuICB2YXIgYm9keSA9IChmdW5jdGlvbiBsb29wKGJvZHksIG5hbWVzKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShuYW1lcykgP1xuICAgICAgYm9keSA6XG4gICAgICAoYm9keSA9IFwiXCIgKyAoaXNOaWwoYm9keSkgP1xuICAgICAgICBcIlwiIDpcbiAgICAgICAgXCJcIiArIGJvZHkgKyBcIixcXG5cIikgKyAoY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ+e306IH57fVwiLCBjb21waWxlKGZpcnN0KG5hbWVzKSksIGNvbXBpbGUobWFjcm9leHBhbmQoKGZvcm0gfHwgMClbZmlyc3QobmFtZXMpXSkpKSkpLCBuYW1lcyA9IHJlc3QobmFtZXMpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkodm9pZCgwKSwga2V5cyhmb3JtKSk7XG4gIHJldHVybiBpc05pbChib2R5KSA/XG4gICAgXCJ7fVwiIDpcbiAgICBjb21waWxlVGVtcGxhdGUobGlzdChcIntcXG4gIH57fVxcbn1cIiwgYm9keSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZURpY3Rpb25hcnkgPSBjb21waWxlRGljdGlvbmFyeTtcblxudmFyIGRlc3VnYXJGbk5hbWUgPSBmdW5jdGlvbiBkZXN1Z2FyRm5OYW1lKGZvcm0pIHtcbiAgcmV0dXJuIChpc1N5bWJvbChmaXJzdChmb3JtKSkpIHx8IChpc05pbChmaXJzdChmb3JtKSkpID9cbiAgICBmb3JtIDpcbiAgICBjb25zKHZvaWQoMCksIGZvcm0pO1xufTtcbmV4cG9ydHMuZGVzdWdhckZuTmFtZSA9IGRlc3VnYXJGbk5hbWU7XG5cbnZhciBkZXN1Z2FyRm5Eb2MgPSBmdW5jdGlvbiBkZXN1Z2FyRm5Eb2MoZm9ybSkge1xuICByZXR1cm4gKGlzU3RyaW5nKHNlY29uZChmb3JtKSkpIHx8IChpc05pbChzZWNvbmQoZm9ybSkpKSA/XG4gICAgZm9ybSA6XG4gICAgY29ucyhmaXJzdChmb3JtKSwgY29ucyh2b2lkKDApLCByZXN0KGZvcm0pKSk7XG59O1xuZXhwb3J0cy5kZXN1Z2FyRm5Eb2MgPSBkZXN1Z2FyRm5Eb2M7XG5cbnZhciBkZXN1Z2FyRm5BdHRycyA9IGZ1bmN0aW9uIGRlc3VnYXJGbkF0dHJzKGZvcm0pIHtcbiAgcmV0dXJuIChpc0RpY3Rpb25hcnkodGhpcmQoZm9ybSkpKSB8fCAoaXNOaWwodGhpcmQoZm9ybSkpKSA/XG4gICAgZm9ybSA6XG4gICAgY29ucyhmaXJzdChmb3JtKSwgY29ucyhzZWNvbmQoZm9ybSksIGNvbnModm9pZCgwKSwgcmVzdChyZXN0KGZvcm0pKSkpKTtcbn07XG5leHBvcnRzLmRlc3VnYXJGbkF0dHJzID0gZGVzdWdhckZuQXR0cnM7XG5cbnZhciBjb21waWxlRGVzdWdhcmVkRm4gPSBmdW5jdGlvbiBjb21waWxlRGVzdWdhcmVkRm4obmFtZSwgZG9jLCBhdHRycywgcGFyYW1zLCBib2R5KSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUoaXNOaWwobmFtZSkgP1xuICAgIGxpc3QoXCJmdW5jdGlvbih+e30pIHtcXG4gIH57fVxcbn1cIiwgam9pbihcIiwgXCIsIG1hcChjb21waWxlLCAocGFyYW1zIHx8IDApW1wibmFtZXNcIl0pKSwgY29tcGlsZUZuQm9keShtYXAobWFjcm9leHBhbmQsIGJvZHkpLCBwYXJhbXMpKSA6XG4gICAgbGlzdChcImZ1bmN0aW9uIH57fSh+e30pIHtcXG4gIH57fVxcbn1cIiwgY29tcGlsZShuYW1lKSwgam9pbihcIiwgXCIsIG1hcChjb21waWxlLCAocGFyYW1zIHx8IDApW1wibmFtZXNcIl0pKSwgY29tcGlsZUZuQm9keShtYXAobWFjcm9leHBhbmQsIGJvZHkpLCBwYXJhbXMpKSk7XG59O1xuZXhwb3J0cy5jb21waWxlRGVzdWdhcmVkRm4gPSBjb21waWxlRGVzdWdhcmVkRm47XG5cbnZhciBjb21waWxlU3RhdGVtZW50cyA9IGZ1bmN0aW9uIGNvbXBpbGVTdGF0ZW1lbnRzKGZvcm0sIHByZWZpeCkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AocmVzdWx0LCBleHByZXNzaW9uLCBleHByZXNzaW9ucykge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IGlzRW1wdHkoZXhwcmVzc2lvbnMpID9cbiAgICAgIFwiXCIgKyByZXN1bHQgKyAoaXNOaWwocHJlZml4KSA/XG4gICAgICAgIFwiXCIgOlxuICAgICAgICBwcmVmaXgpICsgKGNvbXBpbGUobWFjcm9leHBhbmQoZXhwcmVzc2lvbikpKSArIFwiO1wiIDpcbiAgICAgIChyZXN1bHQgPSBcIlwiICsgcmVzdWx0ICsgKGNvbXBpbGUobWFjcm9leHBhbmQoZXhwcmVzc2lvbikpKSArIFwiO1xcblwiLCBleHByZXNzaW9uID0gZmlyc3QoZXhwcmVzc2lvbnMpLCBleHByZXNzaW9ucyA9IHJlc3QoZXhwcmVzc2lvbnMpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkoXCJcIiwgZmlyc3QoZm9ybSksIHJlc3QoZm9ybSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZVN0YXRlbWVudHMgPSBjb21waWxlU3RhdGVtZW50cztcblxudmFyIGNvbXBpbGVGbkJvZHkgPSBmdW5jdGlvbiBjb21waWxlRm5Cb2R5KGZvcm0sIHBhcmFtcykge1xuICByZXR1cm4gKGlzRGljdGlvbmFyeShwYXJhbXMpKSAmJiAoKHBhcmFtcyB8fCAwKVtcInJlc3RcIl0pID9cbiAgICBjb21waWxlU3RhdGVtZW50cyhjb25zKGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiZGVmXCIpLCAocGFyYW1zIHx8IDApW1wicmVzdFwiXSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbFwiKSwgc3ltYm9sKHZvaWQoMCksIFwiYXJndW1lbnRzXCIpLCAocGFyYW1zIHx8IDApW1wiYXJpdHlcIl0pKSwgZm9ybSksIFwicmV0dXJuIFwiKSA6XG4gIChjb3VudChmb3JtKSA9PT0gMSkgJiYgKGlzTGlzdChmaXJzdChmb3JtKSkpICYmIChpc0VxdWFsKGZpcnN0KGZpcnN0KGZvcm0pKSwgc3ltYm9sKHZvaWQoMCksIFwiZG9cIikpKSA/XG4gICAgY29tcGlsZUZuQm9keShyZXN0KGZpcnN0KGZvcm0pKSwgcGFyYW1zKSA6XG4gICAgY29tcGlsZVN0YXRlbWVudHMoZm9ybSwgXCJyZXR1cm4gXCIpO1xufTtcbmV4cG9ydHMuY29tcGlsZUZuQm9keSA9IGNvbXBpbGVGbkJvZHk7XG5cbnZhciBkZXN1Z2FyUGFyYW1zID0gZnVuY3Rpb24gZGVzdWdhclBhcmFtcyhwYXJhbXMpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKG5hbWVzLCBwYXJhbXMpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBpc0VtcHR5KHBhcmFtcykgP1xuICAgICAge1xuICAgICAgICBcIm5hbWVzXCI6IG5hbWVzLFxuICAgICAgICBcImFyaXR5XCI6IGNvdW50KG5hbWVzKSxcbiAgICAgICAgXCJyZXN0XCI6IHZvaWQoMClcbiAgICAgIH0gOlxuICAgIGlzRXF1YWwoZmlyc3QocGFyYW1zKSwgc3ltYm9sKHZvaWQoMCksIFwiJlwiKSkgP1xuICAgICAgaXNFcXVhbChjb3VudChwYXJhbXMpLCAxKSA/XG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVzXCI6IG5hbWVzLFxuICAgICAgICAgIFwiYXJpdHlcIjogY291bnQobmFtZXMpLFxuICAgICAgICAgIFwicmVzdFwiOiB2b2lkKDApXG4gICAgICAgIH0gOlxuICAgICAgaXNFcXVhbChjb3VudChwYXJhbXMpLCAyKSA/XG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVzXCI6IG5hbWVzLFxuICAgICAgICAgIFwiYXJpdHlcIjogY291bnQobmFtZXMpLFxuICAgICAgICAgIFwicmVzdFwiOiBzZWNvbmQocGFyYW1zKVxuICAgICAgICB9IDpcbiAgICAgIFwiZWxzZVwiID9cbiAgICAgICAgKGZ1bmN0aW9uKCkgeyB0aHJvdyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIG51bWJlciBvZiBwYXJhbWV0ZXJzIGFmdGVyICZcIik7IH0pKCkgOlxuICAgICAgICB2b2lkKDApIDpcbiAgICBcImVsc2VcIiA/XG4gICAgICAobmFtZXMgPSBjb25qKG5hbWVzLCBmaXJzdChwYXJhbXMpKSwgcGFyYW1zID0gcmVzdChwYXJhbXMpLCBsb29wKSA6XG4gICAgICB2b2lkKDApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShbXSwgcGFyYW1zKTtcbn07XG5leHBvcnRzLmRlc3VnYXJQYXJhbXMgPSBkZXN1Z2FyUGFyYW1zO1xuXG52YXIgYW5hbHl6ZU92ZXJsb2FkZWRGbiA9IGZ1bmN0aW9uIGFuYWx5emVPdmVybG9hZGVkRm4obmFtZSwgZG9jLCBhdHRycywgb3ZlcmxvYWRzKSB7XG4gIHJldHVybiBtYXAoZnVuY3Rpb24ob3ZlcmxvYWQpIHtcbiAgICB2YXIgcGFyYW1zID0gZGVzdWdhclBhcmFtcyhmaXJzdChvdmVybG9hZCkpO1xuICAgIHJldHVybiB7XG4gICAgICBcInJlc3RcIjogKHBhcmFtcyB8fCAwKVtcInJlc3RcIl0sXG4gICAgICBcIm5hbWVzXCI6IChwYXJhbXMgfHwgMClbXCJuYW1lc1wiXSxcbiAgICAgIFwiYXJpdHlcIjogKHBhcmFtcyB8fCAwKVtcImFyaXR5XCJdLFxuICAgICAgXCJib2R5XCI6IHJlc3Qob3ZlcmxvYWQpXG4gICAgfTtcbiAgfSwgb3ZlcmxvYWRzKTtcbn07XG5leHBvcnRzLmFuYWx5emVPdmVybG9hZGVkRm4gPSBhbmFseXplT3ZlcmxvYWRlZEZuO1xuXG52YXIgY29tcGlsZU92ZXJsb2FkZWRGbiA9IGZ1bmN0aW9uIGNvbXBpbGVPdmVybG9hZGVkRm4obmFtZSwgZG9jLCBhdHRycywgb3ZlcmxvYWRzKSB7XG4gIHZhciBtZXRob2RzID0gYW5hbHl6ZU92ZXJsb2FkZWRGbihuYW1lLCBkb2MsIGF0dHJzLCBvdmVybG9hZHMpO1xuICB2YXIgZml4ZWRNZXRob2RzID0gZmlsdGVyKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHJldHVybiAhKChtZXRob2QgfHwgMClbXCJyZXN0XCJdKTtcbiAgfSwgbWV0aG9kcyk7XG4gIHZhciB2YXJpYWRpYyA9IGZpcnN0KGZpbHRlcihmdW5jdGlvbihtZXRob2QpIHtcbiAgICByZXR1cm4gKG1ldGhvZCB8fCAwKVtcInJlc3RcIl07XG4gIH0sIG1ldGhvZHMpKTtcbiAgdmFyIG5hbWVzID0gcmVkdWNlKGZ1bmN0aW9uKG5hbWVzLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gY291bnQobmFtZXMpID4gKHBhcmFtcyB8fCAwKVtcImFyaXR5XCJdID9cbiAgICAgIG5hbWVzIDpcbiAgICAgIChwYXJhbXMgfHwgMClbXCJuYW1lc1wiXTtcbiAgfSwgW10sIG1ldGhvZHMpO1xuICByZXR1cm4gbGlzdChzeW1ib2wodm9pZCgwKSwgXCJmblwiKSwgbmFtZSwgZG9jLCBhdHRycywgbmFtZXMsIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwicmF3KlwiKSwgY29tcGlsZVN3aXRjaChzeW1ib2wodm9pZCgwKSwgXCJhcmd1bWVudHMubGVuZ3RoXCIpLCBtYXAoZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgcmV0dXJuIGNvbnMoKG1ldGhvZCB8fCAwKVtcImFyaXR5XCJdLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInJhdypcIiksIGNvbXBpbGVGbkJvZHkoY29uY2F0KGNvbXBpbGVSZWJpbmQobmFtZXMsIChtZXRob2QgfHwgMClbXCJuYW1lc1wiXSksIChtZXRob2QgfHwgMClbXCJib2R5XCJdKSkpKTtcbiAgfSwgZml4ZWRNZXRob2RzKSwgaXNOaWwodmFyaWFkaWMpID9cbiAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInRocm93XCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcIkVycm9yXCIpLCBcIkludmFsaWQgYXJpdHlcIikpIDpcbiAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInJhdypcIiksIGNvbXBpbGVGbkJvZHkoY29uY2F0KGNvbXBpbGVSZWJpbmQoY29ucyhsaXN0KHN5bWJvbCh2b2lkKDApLCBcIkFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsXCIpLCBzeW1ib2wodm9pZCgwKSwgXCJhcmd1bWVudHNcIiksICh2YXJpYWRpYyB8fCAwKVtcImFyaXR5XCJdKSwgbmFtZXMpLCBjb25zKCh2YXJpYWRpYyB8fCAwKVtcInJlc3RcIl0sICh2YXJpYWRpYyB8fCAwKVtcIm5hbWVzXCJdKSksICh2YXJpYWRpYyB8fCAwKVtcImJvZHlcIl0pKSkpKSwgdm9pZCgwKSk7XG59O1xuZXhwb3J0cy5jb21waWxlT3ZlcmxvYWRlZEZuID0gY29tcGlsZU92ZXJsb2FkZWRGbjtcblxudmFyIGNvbXBpbGVSZWJpbmQgPSBmdW5jdGlvbiBjb21waWxlUmViaW5kKGJpbmRpbmdzLCBuYW1lcykge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoZm9ybSwgYmluZGluZ3MsIG5hbWVzKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShuYW1lcykgP1xuICAgICAgcmV2ZXJzZShmb3JtKSA6XG4gICAgICAoZm9ybSA9IGlzRXF1YWwoZmlyc3QobmFtZXMpLCBmaXJzdChiaW5kaW5ncykpID9cbiAgICAgICAgZm9ybSA6XG4gICAgICAgIGNvbnMobGlzdChzeW1ib2wodm9pZCgwKSwgXCJkZWZcIiksIGZpcnN0KG5hbWVzKSwgZmlyc3QoYmluZGluZ3MpKSwgZm9ybSksIGJpbmRpbmdzID0gcmVzdChiaW5kaW5ncyksIG5hbWVzID0gcmVzdChuYW1lcyksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShsaXN0KCksIGJpbmRpbmdzLCBuYW1lcyk7XG59O1xuZXhwb3J0cy5jb21waWxlUmViaW5kID0gY29tcGlsZVJlYmluZDtcblxudmFyIGNvbXBpbGVTd2l0Y2hDYXNlcyA9IGZ1bmN0aW9uIGNvbXBpbGVTd2l0Y2hDYXNlcyhjYXNlcykge1xuICByZXR1cm4gcmVkdWNlKGZ1bmN0aW9uKGZvcm0sIGNhc2VFeHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBmb3JtICsgKGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiY2FzZSB+e306XFxuICB+e31cXG5cIiwgY29tcGlsZShtYWNyb2V4cGFuZChmaXJzdChjYXNlRXhwcmVzc2lvbikpKSwgY29tcGlsZShtYWNyb2V4cGFuZChyZXN0KGNhc2VFeHByZXNzaW9uKSkpKSkpO1xuICB9LCBcIlwiLCBjYXNlcyk7XG59O1xuZXhwb3J0cy5jb21waWxlU3dpdGNoQ2FzZXMgPSBjb21waWxlU3dpdGNoQ2FzZXM7XG5cbnZhciBjb21waWxlU3dpdGNoID0gZnVuY3Rpb24gY29tcGlsZVN3aXRjaCh2YWx1ZSwgY2FzZXMsIGRlZmF1bHRDYXNlKSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChcInN3aXRjaCAofnt9KSB7XFxuICB+e31cXG4gIGRlZmF1bHQ6XFxuICAgIH57fVxcbn1cIiwgY29tcGlsZShtYWNyb2V4cGFuZCh2YWx1ZSkpLCBjb21waWxlU3dpdGNoQ2FzZXMoY2FzZXMpLCBjb21waWxlKG1hY3JvZXhwYW5kKGRlZmF1bHRDYXNlKSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVTd2l0Y2ggPSBjb21waWxlU3dpdGNoO1xuXG52YXIgY29tcGlsZUZuID0gZnVuY3Rpb24gY29tcGlsZUZuKGZvcm0pIHtcbiAgdmFyIHNpZ25hdHVyZSA9IGRlc3VnYXJGbkF0dHJzKGRlc3VnYXJGbkRvYyhkZXN1Z2FyRm5OYW1lKGZvcm0pKSk7XG4gIHZhciBuYW1lID0gZmlyc3Qoc2lnbmF0dXJlKTtcbiAgdmFyIGRvYyA9IHNlY29uZChzaWduYXR1cmUpO1xuICB2YXIgYXR0cnMgPSB0aGlyZChzaWduYXR1cmUpO1xuICByZXR1cm4gaXNWZWN0b3IodGhpcmQocmVzdChzaWduYXR1cmUpKSkgP1xuICAgIGNvbXBpbGVEZXN1Z2FyZWRGbihuYW1lLCBkb2MsIGF0dHJzLCBkZXN1Z2FyUGFyYW1zKHRoaXJkKHJlc3Qoc2lnbmF0dXJlKSkpLCByZXN0KHJlc3QocmVzdChyZXN0KHNpZ25hdHVyZSkpKSkpIDpcbiAgICBjb21waWxlKGNvbXBpbGVPdmVybG9hZGVkRm4obmFtZSwgZG9jLCBhdHRycywgcmVzdChyZXN0KHJlc3Qoc2lnbmF0dXJlKSkpKSk7XG59O1xuZXhwb3J0cy5jb21waWxlRm4gPSBjb21waWxlRm47XG5cbnZhciBjb21waWxlSW52b2tlID0gZnVuY3Rpb24gY29tcGlsZUludm9rZShmb3JtKSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChpc0xpc3QoZmlyc3QoZm9ybSkpID9cbiAgICBcIih+e30pKH57fSlcIiA6XG4gICAgXCJ+e30ofnt9KVwiLCBjb21waWxlKGZpcnN0KGZvcm0pKSwgY29tcGlsZUdyb3VwKHJlc3QoZm9ybSkpKSk7XG59O1xuZXhwb3J0cy5jb21waWxlSW52b2tlID0gY29tcGlsZUludm9rZTtcblxudmFyIGNvbXBpbGVHcm91cCA9IGZ1bmN0aW9uIGNvbXBpbGVHcm91cChmb3JtLCB3cmFwKSB7XG4gIHJldHVybiB3cmFwID9cbiAgICBcIlwiICsgXCIoXCIgKyAoY29tcGlsZUdyb3VwKGZvcm0pKSArIFwiKVwiIDpcbiAgICBqb2luKFwiLCBcIiwgdmVjKG1hcChjb21waWxlLCBtYXAobWFjcm9leHBhbmQsIGZvcm0pKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZUdyb3VwID0gY29tcGlsZUdyb3VwO1xuXG52YXIgY29tcGlsZURvID0gZnVuY3Rpb24gY29tcGlsZURvKGZvcm0pIHtcbiAgcmV0dXJuIGNvbXBpbGUobGlzdChjb25zKHN5bWJvbCh2b2lkKDApLCBcImZuXCIpLCBjb25zKFtdLCBmb3JtKSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVEbyA9IGNvbXBpbGVEbztcblxudmFyIGRlZmluZUJpbmRpbmdzID0gZnVuY3Rpb24gZGVmaW5lQmluZGluZ3MoZm9ybSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoZGVmcywgYmluZGluZ3MpIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBjb3VudChiaW5kaW5ncykgPT09IDAgP1xuICAgICAgcmV2ZXJzZShkZWZzKSA6XG4gICAgICAoZGVmcyA9IGNvbnMobGlzdChzeW1ib2wodm9pZCgwKSwgXCJkZWZcIiksIChiaW5kaW5ncyB8fCAwKVswXSwgKGJpbmRpbmdzIHx8IDApWzFdKSwgZGVmcyksIGJpbmRpbmdzID0gcmVzdChyZXN0KGJpbmRpbmdzKSksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShsaXN0KCksIGZvcm0pO1xufTtcbmV4cG9ydHMuZGVmaW5lQmluZGluZ3MgPSBkZWZpbmVCaW5kaW5ncztcblxudmFyIGNvbXBpbGVUaHJvdyA9IGZ1bmN0aW9uIGNvbXBpbGVUaHJvdyhmb3JtKSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChcIihmdW5jdGlvbigpIHsgdGhyb3cgfnt9OyB9KSgpXCIsIGNvbXBpbGUobWFjcm9leHBhbmQoZmlyc3QoZm9ybSkpKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZVRocm93ID0gY29tcGlsZVRocm93O1xuXG52YXIgY29tcGlsZVNldCA9IGZ1bmN0aW9uIGNvbXBpbGVTZXQoZm9ybSkge1xuICByZXR1cm4gY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ+e30gPSB+e31cIiwgY29tcGlsZShtYWNyb2V4cGFuZChmaXJzdChmb3JtKSkpLCBjb21waWxlKG1hY3JvZXhwYW5kKHNlY29uZChmb3JtKSkpKSk7XG59O1xuZXhwb3J0cy5jb21waWxlU2V0ID0gY29tcGlsZVNldDtcblxudmFyIGNvbXBpbGVWZWN0b3IgPSBmdW5jdGlvbiBjb21waWxlVmVjdG9yKGZvcm0pIHtcbiAgcmV0dXJuIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiW357fV1cIiwgY29tcGlsZUdyb3VwKGZvcm0pKSk7XG59O1xuZXhwb3J0cy5jb21waWxlVmVjdG9yID0gY29tcGlsZVZlY3RvcjtcblxudmFyIGNvbXBpbGVUcnkgPSBmdW5jdGlvbiBjb21waWxlVHJ5KGZvcm0pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBsb29wKHRyeUV4cHJzLCBjYXRjaEV4cHJzLCBmaW5hbGx5RXhwcnMsIGV4cHJzKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShleHBycykgP1xuICAgICAgaXNFbXB0eShjYXRjaEV4cHJzKSA/XG4gICAgICAgIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiKGZ1bmN0aW9uKCkge1xcbnRyeSB7XFxuICB+e31cXG59IGZpbmFsbHkge1xcbiAgfnt9XFxufX0pKClcIiwgY29tcGlsZUZuQm9keSh0cnlFeHBycyksIGNvbXBpbGVGbkJvZHkoZmluYWxseUV4cHJzKSkpIDpcbiAgICAgIGlzRW1wdHkoZmluYWxseUV4cHJzKSA/XG4gICAgICAgIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiKGZ1bmN0aW9uKCkge1xcbnRyeSB7XFxuICB+e31cXG59IGNhdGNoICh+e30pIHtcXG4gIH57fVxcbn19KSgpXCIsIGNvbXBpbGVGbkJvZHkodHJ5RXhwcnMpLCBjb21waWxlKGZpcnN0KGNhdGNoRXhwcnMpKSwgY29tcGlsZUZuQm9keShyZXN0KGNhdGNoRXhwcnMpKSkpIDpcbiAgICAgICAgY29tcGlsZVRlbXBsYXRlKGxpc3QoXCIoZnVuY3Rpb24oKSB7XFxudHJ5IHtcXG4gIH57fVxcbn0gY2F0Y2ggKH57fSkge1xcbiAgfnt9XFxufSBmaW5hbGx5IHtcXG4gIH57fVxcbn19KSgpXCIsIGNvbXBpbGVGbkJvZHkodHJ5RXhwcnMpLCBjb21waWxlKGZpcnN0KGNhdGNoRXhwcnMpKSwgY29tcGlsZUZuQm9keShyZXN0KGNhdGNoRXhwcnMpKSwgY29tcGlsZUZuQm9keShmaW5hbGx5RXhwcnMpKSkgOlxuICAgIGlzRXF1YWwoZmlyc3QoZmlyc3QoZXhwcnMpKSwgc3ltYm9sKHZvaWQoMCksIFwiY2F0Y2hcIikpID9cbiAgICAgICh0cnlFeHBycyA9IHRyeUV4cHJzLCBjYXRjaEV4cHJzID0gcmVzdChmaXJzdChleHBycykpLCBmaW5hbGx5RXhwcnMgPSBmaW5hbGx5RXhwcnMsIGV4cHJzID0gcmVzdChleHBycyksIGxvb3ApIDpcbiAgICBpc0VxdWFsKGZpcnN0KGZpcnN0KGV4cHJzKSksIHN5bWJvbCh2b2lkKDApLCBcImZpbmFsbHlcIikpID9cbiAgICAgICh0cnlFeHBycyA9IHRyeUV4cHJzLCBjYXRjaEV4cHJzID0gY2F0Y2hFeHBycywgZmluYWxseUV4cHJzID0gcmVzdChmaXJzdChleHBycykpLCBleHBycyA9IHJlc3QoZXhwcnMpLCBsb29wKSA6XG4gICAgICAodHJ5RXhwcnMgPSBjb25zKGZpcnN0KGV4cHJzKSwgdHJ5RXhwcnMpLCBjYXRjaEV4cHJzID0gY2F0Y2hFeHBycywgZmluYWxseUV4cHJzID0gZmluYWxseUV4cHJzLCBleHBycyA9IHJlc3QoZXhwcnMpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkobGlzdCgpLCBsaXN0KCksIGxpc3QoKSwgcmV2ZXJzZShmb3JtKSk7XG59O1xuZXhwb3J0cy5jb21waWxlVHJ5ID0gY29tcGlsZVRyeTtcblxudmFyIGNvbXBpbGVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGNvbXBpbGVQcm9wZXJ0eShmb3JtKSB7XG4gIHJldHVybiAobmFtZShzZWNvbmQoZm9ybSkpKVswXSA9PT0gXCItXCIgP1xuICAgIGNvbXBpbGVUZW1wbGF0ZShsaXN0KGlzTGlzdChmaXJzdChmb3JtKSkgP1xuICAgICAgXCIofnt9KS5+e31cIiA6XG4gICAgICBcIn57fS5+e31cIiwgY29tcGlsZShtYWNyb2V4cGFuZChmaXJzdChmb3JtKSkpLCBjb21waWxlKG1hY3JvZXhwYW5kKHN5bWJvbChzdWJzKG5hbWUoc2Vjb25kKGZvcm0pKSwgMSkpKSkpKSA6XG4gICAgY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ+e30ufnt9KH57fSlcIiwgY29tcGlsZShtYWNyb2V4cGFuZChmaXJzdChmb3JtKSkpLCBjb21waWxlKG1hY3JvZXhwYW5kKHNlY29uZChmb3JtKSkpLCBjb21waWxlR3JvdXAocmVzdChyZXN0KGZvcm0pKSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVQcm9wZXJ0eSA9IGNvbXBpbGVQcm9wZXJ0eTtcblxudmFyIGNvbXBpbGVBcHBseSA9IGZ1bmN0aW9uIGNvbXBpbGVBcHBseShmb3JtKSB7XG4gIHJldHVybiBjb21waWxlKGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiLlwiKSwgZmlyc3QoZm9ybSksIHN5bWJvbCh2b2lkKDApLCBcImFwcGx5XCIpLCBmaXJzdChmb3JtKSwgc2Vjb25kKGZvcm0pKSk7XG59O1xuZXhwb3J0cy5jb21waWxlQXBwbHkgPSBjb21waWxlQXBwbHk7XG5cbnZhciBjb21waWxlTmV3ID0gZnVuY3Rpb24gY29tcGlsZU5ldyhmb3JtKSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChcIm5ldyB+e31cIiwgY29tcGlsZShmb3JtKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZU5ldyA9IGNvbXBpbGVOZXc7XG5cbnZhciBjb21waWxlQWdldCA9IGZ1bmN0aW9uIGNvbXBpbGVBZ2V0KGZvcm0pIHtcbiAgdmFyIHRhcmdldCA9IG1hY3JvZXhwYW5kKGZpcnN0KGZvcm0pKTtcbiAgdmFyIGF0dHJpYnV0ZSA9IG1hY3JvZXhwYW5kKHNlY29uZChmb3JtKSk7XG4gIHZhciBub3RGb3VuZCA9IHRoaXJkKGZvcm0pO1xuICB2YXIgdGVtcGxhdGUgPSBpc0xpc3QodGFyZ2V0KSA/XG4gICAgXCIofnt9KVt+e31dXCIgOlxuICAgIFwifnt9W357fV1cIjtcbiAgcmV0dXJuIG5vdEZvdW5kID9cbiAgICBjb21waWxlKGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwib3JcIiksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiZ2V0XCIpLCBmaXJzdChmb3JtKSwgc2Vjb25kKGZvcm0pKSwgbWFjcm9leHBhbmQobm90Rm91bmQpKSkgOlxuICAgIGNvbXBpbGVUZW1wbGF0ZShsaXN0KHRlbXBsYXRlLCBjb21waWxlKHRhcmdldCksIGNvbXBpbGUoYXR0cmlidXRlKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZUFnZXQgPSBjb21waWxlQWdldDtcblxudmFyIGNvbXBpbGVHZXQgPSBmdW5jdGlvbiBjb21waWxlR2V0KGZvcm0pIHtcbiAgcmV0dXJuIGNvbXBpbGVBZ2V0KGNvbnMobGlzdChzeW1ib2wodm9pZCgwKSwgXCJvclwiKSwgZmlyc3QoZm9ybSksIDApLCByZXN0KGZvcm0pKSk7XG59O1xuZXhwb3J0cy5jb21waWxlR2V0ID0gY29tcGlsZUdldDtcblxudmFyIGNvbXBpbGVJbnN0YW5jZSA9IGZ1bmN0aW9uIGNvbXBpbGVJbnN0YW5jZShmb3JtKSB7XG4gIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChcIn57fSBpbnN0YW5jZW9mIH57fVwiLCBjb21waWxlKG1hY3JvZXhwYW5kKHNlY29uZChmb3JtKSkpLCBjb21waWxlKG1hY3JvZXhwYW5kKGZpcnN0KGZvcm0pKSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVJbnN0YW5jZSA9IGNvbXBpbGVJbnN0YW5jZTtcblxudmFyIGNvbXBpbGVOb3QgPSBmdW5jdGlvbiBjb21waWxlTm90KGZvcm0pIHtcbiAgcmV0dXJuIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiISh+e30pXCIsIGNvbXBpbGUobWFjcm9leHBhbmQoZmlyc3QoZm9ybSkpKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZU5vdCA9IGNvbXBpbGVOb3Q7XG5cbnZhciBjb21waWxlTG9vcCA9IGZ1bmN0aW9uIGNvbXBpbGVMb29wKGZvcm0pIHtcbiAgdmFyIGJpbmRpbmdzID0gKGZ1bmN0aW9uIGxvb3AobmFtZXMsIHZhbHVlcywgdG9rZW5zKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eSh0b2tlbnMpID9cbiAgICAgIHtcbiAgICAgICAgXCJuYW1lc1wiOiBuYW1lcyxcbiAgICAgICAgXCJ2YWx1ZXNcIjogdmFsdWVzXG4gICAgICB9IDpcbiAgICAgIChuYW1lcyA9IGNvbmoobmFtZXMsIGZpcnN0KHRva2VucykpLCB2YWx1ZXMgPSBjb25qKHZhbHVlcywgc2Vjb25kKHRva2VucykpLCB0b2tlbnMgPSByZXN0KHJlc3QodG9rZW5zKSksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShbXSwgW10sIGZpcnN0KGZvcm0pKTtcbiAgdmFyIG5hbWVzID0gKGJpbmRpbmdzIHx8IDApW1wibmFtZXNcIl07XG4gIHZhciB2YWx1ZXMgPSAoYmluZGluZ3MgfHwgMClbXCJ2YWx1ZXNcIl07XG4gIHZhciBib2R5ID0gcmVzdChmb3JtKTtcbiAgcmV0dXJuIGNvbXBpbGUoY29ucyhjb25zKHN5bWJvbCh2b2lkKDApLCBcImZuXCIpLCBjb25zKHN5bWJvbCh2b2lkKDApLCBcImxvb3BcIiksIGNvbnMobmFtZXMsIGNvbXBpbGVSZWN1cihuYW1lcywgYm9keSkpKSksIGxpc3QuYXBwbHkobGlzdCwgdmFsdWVzKSkpO1xufTtcbmV4cG9ydHMuY29tcGlsZUxvb3AgPSBjb21waWxlTG9vcDtcblxudmFyIHJlYmluZEJpbmRpbmdzID0gZnVuY3Rpb24gcmViaW5kQmluZGluZ3MobmFtZXMsIHZhbHVlcykge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AocmVzdWx0LCBuYW1lcywgdmFsdWVzKSB7XG4gICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgIHJlY3VyID0gaXNFbXB0eShuYW1lcykgP1xuICAgICAgcmV2ZXJzZShyZXN1bHQpIDpcbiAgICAgIChyZXN1bHQgPSBjb25zKGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgZmlyc3QobmFtZXMpLCBmaXJzdCh2YWx1ZXMpKSwgcmVzdWx0KSwgbmFtZXMgPSByZXN0KG5hbWVzKSwgdmFsdWVzID0gcmVzdCh2YWx1ZXMpLCBsb29wKTtcbiAgICB9O1xuICAgIHJldHVybiByZWN1cjtcbiAgfSkobGlzdCgpLCBuYW1lcywgdmFsdWVzKTtcbn07XG5leHBvcnRzLnJlYmluZEJpbmRpbmdzID0gcmViaW5kQmluZGluZ3M7XG5cbnZhciBleHBhbmRSZWN1ciA9IGZ1bmN0aW9uIGV4cGFuZFJlY3VyKG5hbWVzLCBib2R5KSB7XG4gIHJldHVybiBtYXAoZnVuY3Rpb24oZm9ybSkge1xuICAgIHJldHVybiBpc0xpc3QoZm9ybSkgP1xuICAgICAgaXNFcXVhbChmaXJzdChmb3JtKSwgc3ltYm9sKHZvaWQoMCksIFwicmVjdXJcIikpID9cbiAgICAgICAgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJyYXcqXCIpLCBjb21waWxlR3JvdXAoY29uY2F0KHJlYmluZEJpbmRpbmdzKG5hbWVzLCByZXN0KGZvcm0pKSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJsb29wXCIpKSksIHRydWUpKSA6XG4gICAgICAgIGV4cGFuZFJlY3VyKG5hbWVzLCBmb3JtKSA6XG4gICAgICBmb3JtO1xuICB9LCBib2R5KTtcbn07XG5leHBvcnRzLmV4cGFuZFJlY3VyID0gZXhwYW5kUmVjdXI7XG5cbnZhciBjb21waWxlUmVjdXIgPSBmdW5jdGlvbiBjb21waWxlUmVjdXIobmFtZXMsIGJvZHkpIHtcbiAgcmV0dXJuIGxpc3QobGlzdChzeW1ib2wodm9pZCgwKSwgXCJyYXcqXCIpLCBjb21waWxlVGVtcGxhdGUobGlzdChcInZhciByZWN1ciA9IGxvb3A7XFxud2hpbGUgKHJlY3VyID09PSBsb29wKSB7XFxuICByZWN1ciA9IH57fVxcbn1cIiwgY29tcGlsZVN0YXRlbWVudHMoZXhwYW5kUmVjdXIobmFtZXMsIGJvZHkpKSkpKSwgc3ltYm9sKHZvaWQoMCksIFwicmVjdXJcIikpO1xufTtcbmV4cG9ydHMuY29tcGlsZVJlY3VyID0gY29tcGlsZVJlY3VyO1xuXG52YXIgY29tcGlsZVJhdyA9IGZ1bmN0aW9uIGNvbXBpbGVSYXcoZm9ybSkge1xuICByZXR1cm4gZmlyc3QoZm9ybSk7XG59O1xuZXhwb3J0cy5jb21waWxlUmF3ID0gY29tcGlsZVJhdztcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgY29tcGlsZVNldCk7XG5cbmluc3RhbGxTcGVjaWFsKHN5bWJvbCh2b2lkKDApLCBcImdldFwiKSwgY29tcGlsZUdldCk7XG5cbmluc3RhbGxTcGVjaWFsKHN5bWJvbCh2b2lkKDApLCBcImFnZXRcIiksIGNvbXBpbGVBZ2V0KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiZGVmXCIpLCBjb21waWxlRGVmKTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiaWZcIiksIGNvbXBpbGVJZkVsc2UpO1xuXG5pbnN0YWxsU3BlY2lhbChzeW1ib2wodm9pZCgwKSwgXCJkb1wiKSwgY29tcGlsZURvKTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiZG8qXCIpLCBjb21waWxlU3RhdGVtZW50cyk7XG5cbmluc3RhbGxTcGVjaWFsKHN5bWJvbCh2b2lkKDApLCBcImZuXCIpLCBjb21waWxlRm4pO1xuXG5pbnN0YWxsU3BlY2lhbChzeW1ib2wodm9pZCgwKSwgXCJ0aHJvd1wiKSwgY29tcGlsZVRocm93KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwidmVjdG9yXCIpLCBjb21waWxlVmVjdG9yKTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwidHJ5XCIpLCBjb21waWxlVHJ5KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiLlwiKSwgY29tcGlsZVByb3BlcnR5KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiYXBwbHlcIiksIGNvbXBpbGVBcHBseSk7XG5cbmluc3RhbGxTcGVjaWFsKHN5bWJvbCh2b2lkKDApLCBcIm5ld1wiKSwgY29tcGlsZU5ldyk7XG5cbmluc3RhbGxTcGVjaWFsKHN5bWJvbCh2b2lkKDApLCBcImluc3RhbmNlP1wiKSwgY29tcGlsZUluc3RhbmNlKTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwibm90XCIpLCBjb21waWxlTm90KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwibG9vcFwiKSwgY29tcGlsZUxvb3ApO1xuXG5pbnN0YWxsU3BlY2lhbChzeW1ib2wodm9pZCgwKSwgXCJyYXcqXCIpLCBjb21waWxlUmF3KTtcblxuaW5zdGFsbFNwZWNpYWwoc3ltYm9sKHZvaWQoMCksIFwiY29tbWVudFwiKSwgd3JpdGVDb21tZW50KTtcblxudmFyIGNvbXBpbGVSZVBhdHRlcm4gPSBmdW5jdGlvbiBjb21waWxlUmVQYXR0ZXJuKGZvcm0pIHtcbiAgcmV0dXJuIFwiXCIgKyBmb3JtO1xufTtcbmV4cG9ydHMuY29tcGlsZVJlUGF0dGVybiA9IGNvbXBpbGVSZVBhdHRlcm47XG5cbnZhciBpbnN0YWxsTmF0aXZlID0gZnVuY3Rpb24gaW5zdGFsbE5hdGl2ZShhbGlhcywgb3BlcmF0b3IsIHZhbGlkYXRvciwgZmFsbGJhY2spIHtcbiAgcmV0dXJuIGluc3RhbGxTcGVjaWFsKGFsaWFzLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgcmV0dXJuIGlzRW1wdHkoZm9ybSkgP1xuICAgICAgZmFsbGJhY2sgOlxuICAgICAgcmVkdWNlKGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHJldHVybiBjb21waWxlVGVtcGxhdGUobGlzdChcIn57fSB+e30gfnt9XCIsIGxlZnQsIG5hbWUob3BlcmF0b3IpLCByaWdodCkpO1xuICAgICAgfSwgbWFwKGZ1bmN0aW9uKG9wZXJhbmQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBpbGVUZW1wbGF0ZShsaXN0KGlzTGlzdChvcGVyYW5kKSA/XG4gICAgICAgICAgXCIofnt9KVwiIDpcbiAgICAgICAgICBcIn57fVwiLCBjb21waWxlKG1hY3JvZXhwYW5kKG9wZXJhbmQpKSkpO1xuICAgICAgfSwgZm9ybSkpO1xuICB9LCB2YWxpZGF0b3IpO1xufTtcbmV4cG9ydHMuaW5zdGFsbE5hdGl2ZSA9IGluc3RhbGxOYXRpdmU7XG5cbnZhciBpbnN0YWxsT3BlcmF0b3IgPSBmdW5jdGlvbiBpbnN0YWxsT3BlcmF0b3IoYWxpYXMsIG9wZXJhdG9yKSB7XG4gIHJldHVybiBpbnN0YWxsU3BlY2lhbChhbGlhcywgZnVuY3Rpb24oZm9ybSkge1xuICAgIHJldHVybiAoZnVuY3Rpb24gbG9vcChyZXN1bHQsIGxlZnQsIHJpZ2h0LCBvcGVyYW5kcykge1xuICAgICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICByZWN1ciA9IGlzRW1wdHkob3BlcmFuZHMpID9cbiAgICAgICAgXCJcIiArIHJlc3VsdCArIChjb21waWxlVGVtcGxhdGUobGlzdChcIn57fSB+e30gfnt9XCIsIGNvbXBpbGUobWFjcm9leHBhbmQobGVmdCkpLCBuYW1lKG9wZXJhdG9yKSwgY29tcGlsZShtYWNyb2V4cGFuZChyaWdodCkpKSkpIDpcbiAgICAgICAgKHJlc3VsdCA9IFwiXCIgKyByZXN1bHQgKyAoY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ+e30gfnt9IH57fSAmJiBcIiwgY29tcGlsZShtYWNyb2V4cGFuZChsZWZ0KSksIG5hbWUob3BlcmF0b3IpLCBjb21waWxlKG1hY3JvZXhwYW5kKHJpZ2h0KSkpKSksIGxlZnQgPSByaWdodCwgcmlnaHQgPSBmaXJzdChvcGVyYW5kcyksIG9wZXJhbmRzID0gcmVzdChvcGVyYW5kcyksIGxvb3ApO1xuICAgICAgfTtcbiAgICAgIHJldHVybiByZWN1cjtcbiAgICB9KShcIlwiLCBmaXJzdChmb3JtKSwgc2Vjb25kKGZvcm0pLCByZXN0KHJlc3QoZm9ybSkpKTtcbiAgfSwgdmVyaWZ5VHdvKTtcbn07XG5leHBvcnRzLmluc3RhbGxPcGVyYXRvciA9IGluc3RhbGxPcGVyYXRvcjtcblxudmFyIGNvbXBpbGVyRXJyb3IgPSBmdW5jdGlvbiBjb21waWxlckVycm9yKGZvcm0sIG1lc3NhZ2UpIHtcbiAgdmFyIGVycm9yID0gRXJyb3IoXCJcIiArIG1lc3NhZ2UpO1xuICBlcnJvci5saW5lID0gMTtcbiAgcmV0dXJuIChmdW5jdGlvbigpIHsgdGhyb3cgZXJyb3I7IH0pKCk7XG59O1xuZXhwb3J0cy5jb21waWxlckVycm9yID0gY29tcGlsZXJFcnJvcjtcblxudmFyIHZlcmlmeVR3byA9IGZ1bmN0aW9uIHZlcmlmeVR3byhmb3JtKSB7XG4gIHJldHVybiAoaXNFbXB0eShyZXN0KGZvcm0pKSkgfHwgKGlzRW1wdHkocmVzdChyZXN0KGZvcm0pKSkpID9cbiAgICAoZnVuY3Rpb24oKSB7IHRocm93IGNvbXBpbGVyRXJyb3IoZm9ybSwgXCJcIiArIChmaXJzdChmb3JtKSkgKyBcIiBmb3JtIHJlcXVpcmVzIGF0IGxlYXN0IHR3byBvcGVyYW5kc1wiKTsgfSkoKSA6XG4gICAgdm9pZCgwKTtcbn07XG5leHBvcnRzLnZlcmlmeVR3byA9IHZlcmlmeVR3bztcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCIrXCIpLCBzeW1ib2wodm9pZCgwKSwgXCIrXCIpLCB2b2lkKDApLCAwKTtcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCItXCIpLCBzeW1ib2wodm9pZCgwKSwgXCItXCIpLCB2b2lkKDApLCBcIk5hTlwiKTtcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCIqXCIpLCBzeW1ib2wodm9pZCgwKSwgXCIqXCIpLCB2b2lkKDApLCAxKTtcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCIvXCIpLCBzeW1ib2wodm9pZCgwKSwgXCIvXCIpLCB2ZXJpZnlUd28pO1xuXG5pbnN0YWxsTmF0aXZlKHN5bWJvbCh2b2lkKDApLCBcIm1vZFwiKSwgc3ltYm9sKFwiJVwiKSwgdmVyaWZ5VHdvKTtcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCJhbmRcIiksIHN5bWJvbCh2b2lkKDApLCBcIiYmXCIpKTtcblxuaW5zdGFsbE5hdGl2ZShzeW1ib2wodm9pZCgwKSwgXCJvclwiKSwgc3ltYm9sKHZvaWQoMCksIFwifHxcIikpO1xuXG5pbnN0YWxsT3BlcmF0b3Ioc3ltYm9sKHZvaWQoMCksIFwibm90PVwiKSwgc3ltYm9sKHZvaWQoMCksIFwiIT1cIikpO1xuXG5pbnN0YWxsT3BlcmF0b3Ioc3ltYm9sKHZvaWQoMCksIFwiPT1cIiksIHN5bWJvbCh2b2lkKDApLCBcIj09PVwiKSk7XG5cbmluc3RhbGxPcGVyYXRvcihzeW1ib2wodm9pZCgwKSwgXCJpZGVudGljYWw/XCIpLCBzeW1ib2wodm9pZCgwKSwgXCI9PT1cIikpO1xuXG5pbnN0YWxsT3BlcmF0b3Ioc3ltYm9sKHZvaWQoMCksIFwiPlwiKSwgc3ltYm9sKHZvaWQoMCksIFwiPlwiKSk7XG5cbmluc3RhbGxPcGVyYXRvcihzeW1ib2wodm9pZCgwKSwgXCI+PVwiKSwgc3ltYm9sKHZvaWQoMCksIFwiPj1cIikpO1xuXG5pbnN0YWxsT3BlcmF0b3Ioc3ltYm9sKHZvaWQoMCksIFwiPFwiKSwgc3ltYm9sKHZvaWQoMCksIFwiPFwiKSk7XG5cbmluc3RhbGxPcGVyYXRvcihzeW1ib2wodm9pZCgwKSwgXCI8PVwiKSwgc3ltYm9sKHZvaWQoMCksIFwiPD1cIikpO1xuXG5pbnN0YWxsTmF0aXZlKHN5bWJvbCh2b2lkKDApLCBcImJpdC1hbmRcIiksIHN5bWJvbCh2b2lkKDApLCBcIiZcIiksIHZlcmlmeVR3byk7XG5cbmluc3RhbGxOYXRpdmUoc3ltYm9sKHZvaWQoMCksIFwiYml0LW9yXCIpLCBzeW1ib2wodm9pZCgwKSwgXCJ8XCIpLCB2ZXJpZnlUd28pO1xuXG5pbnN0YWxsTmF0aXZlKHN5bWJvbCh2b2lkKDApLCBcImJpdC14b3JcIiksIHN5bWJvbChcIl5cIikpO1xuXG5pbnN0YWxsTmF0aXZlKHN5bWJvbCh2b2lkKDApLCBcImJpdC1ub3RcIiksIHN5bWJvbChcIn5cIiksIHZlcmlmeVR3byk7XG5cbmluc3RhbGxOYXRpdmUoc3ltYm9sKHZvaWQoMCksIFwiYml0LXNoaWZ0LWxlZnRcIiksIHN5bWJvbCh2b2lkKDApLCBcIjw8XCIpLCB2ZXJpZnlUd28pO1xuXG5pbnN0YWxsTmF0aXZlKHN5bWJvbCh2b2lkKDApLCBcImJpdC1zaGlmdC1yaWdodFwiKSwgc3ltYm9sKHZvaWQoMCksIFwiPj5cIiksIHZlcmlmeVR3byk7XG5cbmluc3RhbGxOYXRpdmUoc3ltYm9sKHZvaWQoMCksIFwiYml0LXNoaWZ0LXJpZ2h0LXplcm8tZmlsXCIpLCBzeW1ib2wodm9pZCgwKSwgXCI+Pj5cIiksIHZlcmlmeVR3byk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJzdHJcIiksIGZ1bmN0aW9uIHN0cigpIHtcbiAgdmFyIGZvcm1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGNvbmNhdChsaXN0KHN5bWJvbCh2b2lkKDApLCBcIitcIiksIFwiXCIpLCBmb3Jtcyk7XG59KTtcblxuaW5zdGFsbE1hY3JvKHN5bWJvbCh2b2lkKDApLCBcImxldFwiKSwgZnVuY3Rpb24gbGV0TWFjcm8oYmluZGluZ3MpIHtcbiAgdmFyIGJvZHkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gY29ucyhzeW1ib2wodm9pZCgwKSwgXCJkb1wiKSwgY29uY2F0KGRlZmluZUJpbmRpbmdzKGJpbmRpbmdzKSwgYm9keSkpO1xufSk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJjb25kXCIpLCBmdW5jdGlvbiBjb25kKCkge1xuICB2YXIgY2xhdXNlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiAhKGlzRW1wdHkoY2xhdXNlcykpID9cbiAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImlmXCIpLCBmaXJzdChjbGF1c2VzKSwgaXNFbXB0eShyZXN0KGNsYXVzZXMpKSA/XG4gICAgICAoZnVuY3Rpb24oKSB7IHRocm93IEVycm9yKFwiY29uZCByZXF1aXJlcyBhbiBldmVuIG51bWJlciBvZiBmb3Jtc1wiKTsgfSkoKSA6XG4gICAgICBzZWNvbmQoY2xhdXNlcyksIGNvbnMoc3ltYm9sKHZvaWQoMCksIFwiY29uZFwiKSwgcmVzdChyZXN0KGNsYXVzZXMpKSkpIDpcbiAgICB2b2lkKDApO1xufSk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJkZWZuXCIpLCBmdW5jdGlvbiBkZWZuKG5hbWUpIHtcbiAgdmFyIGJvZHkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gbGlzdChzeW1ib2wodm9pZCgwKSwgXCJkZWZcIiksIG5hbWUsIGNvbmNhdChsaXN0KHN5bWJvbCh2b2lkKDApLCBcImZuXCIpLCBuYW1lKSwgYm9keSkpO1xufSk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJkZWZuLVwiKSwgZnVuY3Rpb24gZGVmbihuYW1lKSB7XG4gIHZhciBib2R5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgcmV0dXJuIGNvbmNhdChsaXN0KHN5bWJvbCh2b2lkKDApLCBcImRlZm5cIiksIHdpdGhNZXRhKG5hbWUsIGNvbmooe1xuICAgIFwicHJpdmF0ZVwiOiB0cnVlXG4gIH0sIG1ldGEobmFtZSkpKSksIGJvZHkpO1xufSk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJhc3NlcnRcIiksIGZ1bmN0aW9uIGFzc2VydCh4LCBtZXNzYWdlKSB7XG4gIHZhciB0aXRsZSA9IG1lc3NhZ2UgfHwgXCJcIjtcbiAgdmFyIGFzc2VydGlvbiA9IHByU3RyKHgpO1xuICB2YXIgdXJpID0gKHggfHwgMClbXCJ1cmlcIl07XG4gIHZhciBmb3JtID0gaXNMaXN0KHgpID9cbiAgICBzZWNvbmQoeCkgOlxuICAgIHg7XG4gIHJldHVybiBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImRvXCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImlmXCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImFuZFwiKSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJub3RcIiksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiaWRlbnRpY2FsP1wiKSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJ0eXBlb2ZcIiksIHN5bWJvbCh2b2lkKDApLCBcIioqdmVyYm9zZSoqXCIpKSwgXCJ1bmRlZmluZWRcIikpLCBzeW1ib2wodm9pZCgwKSwgXCIqKnZlcmJvc2UqKlwiKSksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiLmxvZ1wiKSwgc3ltYm9sKHZvaWQoMCksIFwiY29uc29sZVwiKSwgXCJBc3NlcnQ6XCIsIGFzc2VydGlvbikpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcImlmXCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcIm5vdFwiKSwgeCksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwidGhyb3dcIiksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiRXJyb3IuXCIpLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInN0clwiKSwgXCJBc3NlcnQgZmFpbGVkOiBcIiwgdGl0bGUsIFwiXFxuXFxuQXNzZXJ0aW9uOlxcblxcblwiLCBhc3NlcnRpb24sIFwiXFxuXFxuQWN0dWFsOlxcblxcblwiLCBmb3JtLCBcIlxcbi0tLS0tLS0tLS0tLS0tXFxuXCIpLCB1cmkpKSkpO1xufSk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJpbXBvcnRcIiksIGZ1bmN0aW9uKGltcG9ydHMsIHBhdGgpIHtcbiAgcmV0dXJuIGlzTmlsKHBhdGgpID9cbiAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInJlcXVpcmVcIiksIGltcG9ydHMpIDpcbiAgaXNTeW1ib2woaW1wb3J0cykgP1xuICAgIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiZGVmXCIpLCB3aXRoTWV0YShpbXBvcnRzLCB7XG4gICAgICBcInByaXZhdGVcIjogdHJ1ZVxuICAgIH0pLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInJlcXVpcmVcIiksIHBhdGgpKSA6XG4gICAgKGZ1bmN0aW9uIGxvb3AoZm9ybSwgbmFtZXMpIHtcbiAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICB3aGlsZSAocmVjdXIgPT09IGxvb3ApIHtcbiAgICAgICAgcmVjdXIgPSBpc0VtcHR5KG5hbWVzKSA/XG4gICAgICAgIGNvbmNhdChsaXN0KHN5bWJvbCh2b2lkKDApLCBcImRvKlwiKSksIGZvcm0pIDpcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBhbGlhcyA9IGZpcnN0KG5hbWVzKTtcbiAgICAgICAgICB2YXIgaWQgPSBzeW1ib2woXCJcIiArIFwiLi1cIiArIChuYW1lKGFsaWFzKSkpO1xuICAgICAgICAgIHJldHVybiAoZm9ybSA9IGNvbnMobGlzdChzeW1ib2wodm9pZCgwKSwgXCJkZWZcIiksIHdpdGhNZXRhKGFsaWFzLCB7XG4gICAgICAgICAgICBcInByaXZhdGVcIjogdHJ1ZVxuICAgICAgICAgIH0pLCBsaXN0KGlkLCBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInJlcXVpcmVcIiksIHBhdGgpKSksIGZvcm0pLCBuYW1lcyA9IHJlc3QobmFtZXMpLCBsb29wKTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVjdXI7XG4gICAgfSkobGlzdCgpLCBpbXBvcnRzKTtcbn0pO1xuXG52YXIgZXhwYW5kTnMgPSBmdW5jdGlvbiBleHBhbmROcyhpZCkge1xuICB2YXIgcGFyYW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgcmV0dXJuIChmdW5jdGlvbigpIHtcbiAgICB2YXIgbnMgPSBcIlwiICsgaWQ7XG4gICAgdmFyIHJlcXVpcmVyID0gc3BsaXQobnMsIFwiLlwiKTtcbiAgICB2YXIgZG9jID0gaXNTdHJpbmcoZmlyc3QocGFyYW1zKSkgP1xuICAgICAgZmlyc3QocGFyYW1zKSA6XG4gICAgICB2b2lkKDApO1xuICAgIHZhciBhcmdzID0gZG9jID9cbiAgICAgIHJlc3QocGFyYW1zKSA6XG4gICAgICBwYXJhbXM7XG4gICAgdmFyIHBhcnNlUmVmZXJlbmNlcyA9IGZ1bmN0aW9uKGZvcm1zKSB7XG4gICAgICByZXR1cm4gcmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZXMsIGZvcm0pIHtcbiAgICAgICAgKHJlZmVyZW5jZXMgfHwgMClbbmFtZShmaXJzdChmb3JtKSldID0gdmVjKHJlc3QoZm9ybSkpO1xuICAgICAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgICAgIH0sIHt9LCBmb3Jtcyk7XG4gICAgfTtcbiAgICB2YXIgcmVmZXJlbmNlcyA9IHBhcnNlUmVmZXJlbmNlcyhhcmdzKTtcbiAgICB2YXIgaWRUb1BhdGggPSBmdW5jdGlvbiBpZFRvUGF0aChpZCkge1xuICAgICAgdmFyIHJlcXVpcmVtZW50ID0gc3BsaXQoXCJcIiArIGlkLCBcIi5cIik7XG4gICAgICB2YXIgaXNSZWxhdGl2ZSA9IGZpcnN0KHJlcXVpcmVyKSA9PT0gZmlyc3QocmVxdWlyZW1lbnQpO1xuICAgICAgcmV0dXJuIGlzUmVsYXRpdmUgP1xuICAgICAgICAoZnVuY3Rpb24gbG9vcChmcm9tLCB0bykge1xuICAgICAgICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgICAgICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICAgICAgICByZWN1ciA9IGZpcnN0KGZyb20pID09PSBmaXJzdCh0bykgP1xuICAgICAgICAgICAgKGZyb20gPSByZXN0KGZyb20pLCB0byA9IHJlc3QodG8pLCBsb29wKSA6XG4gICAgICAgICAgICBqb2luKFwiL1wiLCBjb25jYXQoW1wiLlwiXSwgcmVwZWF0KGRlYyhjb3VudChmcm9tKSksIFwiLi5cIiksIHRvKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gcmVjdXI7XG4gICAgICAgIH0pKHJlcXVpcmVyLCByZXF1aXJlbWVudCkgOlxuICAgICAgICBqb2luKFwiL1wiLCByZXF1aXJlbWVudCk7XG4gICAgfTtcbiAgICB2YXIgbWFrZVJlcXVpcmUgPSBmdW5jdGlvbihmcm9tLCBhcywgbmFtZSkge1xuICAgICAgdmFyIHBhdGggPSBpZFRvUGF0aChmcm9tKTtcbiAgICAgIHZhciByZXF1aXJlbWVudCA9IG5hbWUgP1xuICAgICAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcIi5cIiksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwicmVxdWlyZVwiKSwgcGF0aCksIHN5bWJvbCh2b2lkKDApLCBcIlwiICsgXCItXCIgKyBuYW1lKSkgOlxuICAgICAgICBsaXN0KHN5bWJvbCh2b2lkKDApLCBcInJlcXVpcmVcIiksIHBhdGgpO1xuICAgICAgcmV0dXJuIGFzID9cbiAgICAgICAgbGlzdChzeW1ib2wodm9pZCgwKSwgXCJkZWZcIiksIGFzLCByZXF1aXJlbWVudCkgOlxuICAgICAgICByZXF1aXJlbWVudDtcbiAgICB9O1xuICAgIHZhciBleHBhbmRSZXF1aXJlbWVudCA9IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgIHZhciBmcm9tID0gZmlyc3QoZm9ybSk7XG4gICAgICB2YXIgYXMgPSAoXCLqnolhc1wiID09PSBzZWNvbmQoZm9ybSkpICYmICh0aGlyZChmb3JtKSk7XG4gICAgICByZXR1cm4gbWFrZVJlcXVpcmUoZnJvbSwgYXMpO1xuICAgIH07XG4gICAgdmFyIGV4cGFuZFVzZSA9IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgIHZhciBmcm9tID0gZmlyc3QoZm9ybSk7XG4gICAgICB2YXIgZGlyZWN0aXZlcyA9IGRpY3Rpb25hcnkuYXBwbHkoZGljdGlvbmFyeSwgdmVjKHJlc3QoZm9ybSkpKTtcbiAgICAgIHZhciBuYW1lcyA9IChkaXJlY3RpdmVzIHx8IDApW1wi6p6Jb25seVwiXTtcbiAgICAgIHZhciByZW5hbWVzID0gKGRpcmVjdGl2ZXMgfHwgMClbXCLqnolyZW5hbWVcIl07XG4gICAgICB2YXIgbmFtZWRJbXBvcnRzID0gbmFtZXMgJiYgKG1hcChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBtYWtlUmVxdWlyZShmcm9tLCBuYW1lLCBuYW1lKTtcbiAgICAgIH0sIG5hbWVzKSk7XG4gICAgICB2YXIgcmVuYW1lZEltcG9ydHMgPSByZW5hbWVzICYmIChtYXAoZnVuY3Rpb24ocGFpcikge1xuICAgICAgICByZXR1cm4gbWFrZVJlcXVpcmUoZnJvbSwgc2Vjb25kKHBhaXIpLCBmaXJzdChwYWlyKSk7XG4gICAgICB9LCByZW5hbWVzKSk7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICghKHR5cGVvZihfX3ZlcmJvc2VfXykgPT09IFwidW5kZWZpbmVkXCIpKSAmJiBfX3ZlcmJvc2VfXyA/XG4gICAgICAgICAgY29uc29sZS5sb2coXCJBc3NlcnQ6XCIsIFwiKG9yIG5hbWVzIHJlbmFtZXMpXCIpIDpcbiAgICAgICAgICB2b2lkKDApO1xuICAgICAgICByZXR1cm4gIShuYW1lcyB8fCByZW5hbWVzKSA/XG4gICAgICAgICAgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJcIiArIFwiQXNzZXJ0IGZhaWxlZDogXCIgKyAoXCJcIiArIFwiT25seSBbbXkubGliIDpvbmx5IFtmb28gYmFyXV0gZm9ybSAmIFwiICsgXCJbY2xvanVyZS5zdHJpbmcgOnJlbmFtZSB7cmVwbGFjZSBzdHItcmVwbGFjZX0gYXJlIHN1cHBvcnRlZFwiKSArIFwiXFxuXFxuQXNzZXJ0aW9uOlxcblxcblwiICsgXCIob3IgbmFtZXMgcmVuYW1lcylcIiArIFwiXFxuXFxuQWN0dWFsOlxcblxcblwiICsgbmFtZXMgKyBcIlxcbi0tLS0tLS0tLS0tLS0tXFxuXCIsIHZvaWQoMCkpOyB9KSgpIDpcbiAgICAgICAgICB2b2lkKDApO1xuICAgICAgfSkoKTtcbiAgICAgIHJldHVybiBjb25jYXQoW10sIG5hbWVkSW1wb3J0cywgcmVuYW1lZEltcG9ydHMpO1xuICAgIH07XG4gICAgdmFyIHJlcXVpcmVGb3JtcyA9IChyZWZlcmVuY2VzIHx8IDApW1wicmVxdWlyZVwiXTtcbiAgICB2YXIgdXNlRm9ybXMgPSAocmVmZXJlbmNlcyB8fCAwKVtcInVzZVwiXTtcbiAgICB2YXIgcmVxdWlyZW1lbnRzID0gcmVxdWlyZUZvcm1zID9cbiAgICAgIG1hcChleHBhbmRSZXF1aXJlbWVudCwgcmVxdWlyZUZvcm1zKSA6XG4gICAgICB2b2lkKDApO1xuICAgIHZhciB1c2VzID0gdXNlRm9ybXMgP1xuICAgICAgY29uY2F0LmFwcGx5KGNvbmNhdCwgbWFwKGV4cGFuZFVzZSwgdXNlRm9ybXMpKSA6XG4gICAgICB2b2lkKDApO1xuICAgIHJldHVybiBjb25jYXQobGlzdChzeW1ib2wodm9pZCgwKSwgXCJkbypcIiksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwiZGVmXCIpLCBzeW1ib2wodm9pZCgwKSwgXCIqbnMqXCIpLCBucyksIGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCIuLW5hbWVzcGFjZVwiKSwgc3ltYm9sKHZvaWQoMCksIFwibW9kdWxlXCIpKSwgc3ltYm9sKHZvaWQoMCksIFwiKm5zKlwiKSkpLCBkb2MgP1xuICAgICAgW2xpc3Qoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCIuLWRlc2NyaXB0aW9uXCIpLCBzeW1ib2wodm9pZCgwKSwgXCJtb2R1bGVcIikpLCBkb2MpXSA6XG4gICAgICB2b2lkKDApLCByZXF1aXJlbWVudHMsIHVzZXMpO1xuICB9KSgpO1xufTtcbmV4cG9ydHMuZXhwYW5kTnMgPSBleHBhbmROcztcblxuaW5zdGFsbE1hY3JvKHN5bWJvbCh2b2lkKDApLCBcIm5zXCIpLCBleHBhbmROcyk7XG5cbmluc3RhbGxNYWNybyhzeW1ib2wodm9pZCgwKSwgXCJwcmludFwiKSwgZnVuY3Rpb24oKSB7XG4gIHZhciBtb3JlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgXCJQcmludHMgdGhlIG9iamVjdChzKSB0byB0aGUgb3V0cHV0IGZvciBodW1hbiBjb25zdW1wdGlvbi5cIjtcbiAgcmV0dXJuIGNvbmNhdChsaXN0KHN5bWJvbCh2b2lkKDApLCBcIi5sb2dcIiksIHN5bWJvbCh2b2lkKDApLCBcImNvbnNvbGVcIikpLCBtb3JlKTtcbn0pXG4iLCJ2YXIgbmFtZXNwYWNlID0gKHJlcXVpcmUoXCIuL2FzdFwiKSkubmFtZXNwYWNlO1xudmFyIG5hbWUgPSAocmVxdWlyZShcIi4vYXN0XCIpKS5uYW1lO1xudmFyIG1ldGEgPSAocmVxdWlyZShcIi4vYXN0XCIpKS5tZXRhO1xudmFyIGlzS2V5d29yZCA9IChyZXF1aXJlKFwiLi9hc3RcIikpLmlzS2V5d29yZDtcbnZhciBpc1N5bWJvbCA9IChyZXF1aXJlKFwiLi9hc3RcIikpLmlzU3ltYm9sO1xudmFyIHN5bWJvbCA9IChyZXF1aXJlKFwiLi9hc3RcIikpLnN5bWJvbDs7XG5cbnZhciBjb3VudCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuY291bnQ7XG52YXIgcmVzdCA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkucmVzdDtcbnZhciBsYXN0ID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5sYXN0O1xudmFyIGZpcnN0ID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5maXJzdDtcbnZhciBsaXN0ID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5saXN0O1xudmFyIGxpc3RfID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5saXN0XztcbnZhciBpc0VtcHR5ID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5pc0VtcHR5O1xudmFyIGludGVybGVhdmUgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLmludGVybGVhdmU7XG52YXIgaXNFdmVyeSA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuaXNFdmVyeTtcbnZhciBtYXAgPSAocmVxdWlyZShcIi4vc2VxdWVuY2VcIikpLm1hcDtcbnZhciBjb25qID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5jb25qO1xudmFyIHNlcSA9IChyZXF1aXJlKFwiLi9zZXF1ZW5jZVwiKSkuc2VxO1xudmFyIGlzU2VxID0gKHJlcXVpcmUoXCIuL3NlcXVlbmNlXCIpKS5pc1NlcTs7XG5cbnZhciBtZXJnZSA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5tZXJnZTtcbnZhciBpc05pbCA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc05pbDtcbnZhciBpc0VxdWFsID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzRXF1YWw7XG52YXIgdmFscyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS52YWxzO1xudmFyIGtleXMgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkua2V5cztcbnZhciBpc1N0cmluZyA9IChyZXF1aXJlKFwiLi9ydW50aW1lXCIpKS5pc1N0cmluZztcbnZhciBpc0RpY3Rpb25hcnkgPSAocmVxdWlyZShcIi4vcnVudGltZVwiKSkuaXNEaWN0aW9uYXJ5O1xudmFyIGlzVmVjdG9yID0gKHJlcXVpcmUoXCIuL3J1bnRpbWVcIikpLmlzVmVjdG9yOztcblxudmFyIHNwbGl0ID0gKHJlcXVpcmUoXCIuL3N0cmluZ1wiKSkuc3BsaXQ7O1xuXG52YXIgZ2V0SW4gPSBmdW5jdGlvbiBnZXRJbihkaWN0aW9uYXJ5LCBrZXlzLCBub3RGb3VuZCkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AodGFyZ2V0LCBzZW50aW5lbCwga2V5cykge1xuICAgIHZhciByZWN1ciA9IGxvb3A7XG4gICAgd2hpbGUgKHJlY3VyID09PSBsb29wKSB7XG4gICAgICByZWN1ciA9IGlzRW1wdHkoa2V5cykgP1xuICAgICAgdGFyZ2V0IDpcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICgoKHRhcmdldCB8fCAwKSB8fCAwKVtmaXJzdChrZXlzKV0pIHx8IHNlbnRpbmVsO1xuICAgICAgICByZXR1cm4gcmVzdWx0ID09PSBzZW50aW5lbCA/XG4gICAgICAgICAgbm90Rm91bmQgOlxuICAgICAgICAgICh0YXJnZXQgPSByZXN1bHQsIHNlbnRpbmVsID0gc2VudGluZWwsIGtleXMgPSByZXN0KGtleXMpLCBsb29wKTtcbiAgICAgIH0pKCk7XG4gICAgfTtcbiAgICByZXR1cm4gcmVjdXI7XG4gIH0pKGRpY3Rpb25hcnksIHt9LCBrZXlzKTtcbn07XG5leHBvcnRzLmdldEluID0gZ2V0SW47XG5cbnZhciBlbXB0eUVudiA9IGZ1bmN0aW9uIGVtcHR5RW52KG5zKSB7XG4gIFwiVXRpbGl0eSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgZW1wdHkgbmFtZXNwYWNlc1wiO1xuICByZXR1cm4ge1xuICAgIFwibnNcIjogbnMsXG4gICAgXCJuYW1lc3BhY2VzXCI6IHt9LFxuICAgIFwiY29udGV4dFwiOiBcInN0YXRlbWVudFwiLFxuICAgIFwibG9jYWxzXCI6IHt9XG4gIH07XG59O1xuZXhwb3J0cy5lbXB0eUVudiA9IGVtcHR5RW52O1xuXG52YXIgbG9jYWxCaW5kaW5nID0gZnVuY3Rpb24gbG9jYWxCaW5kaW5nKGVudiwgZm9ybSkge1xuICByZXR1cm4gKCgoZW52IHx8IDApW1wibG9jYWxzXCJdKSB8fCAwKVtmb3JtXTtcbn07XG5cbnZhciBpc0NvcmVOYW1lID0gZnVuY3Rpb24gaXNDb3JlTmFtZShlbnYsIHN5bSkge1xuICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0cy5pc0NvcmVOYW1lID0gaXNDb3JlTmFtZTtcblxudmFyIHJlc29sdmVOc0FsaWFzID0gZnVuY3Rpb24gcmVzb2x2ZU5zQWxpYXMoZW52LCBuYW1lKSB7XG4gIHZhciBzeW0gPSBzeW1ib2wobmFtZSk7XG4gIHJldHVybiAoKCgoKCgoZW52IHx8IDApW1wibnNcIl0pIHx8IDApW1wicmVxdWlyZXNcIl0pIHx8IDApIHx8IDApW3N5bV0pIHx8IHN5bTtcbn07XG5leHBvcnRzLnJlc29sdmVOc0FsaWFzID0gcmVzb2x2ZU5zQWxpYXM7XG5cbnZhciByZXNvbHZlRXhpc3RpbmdWYXIgPSBmdW5jdGlvbiByZXNvbHZlRXhpc3RpbmdWYXIoZW52LCBmb3JtKSB7XG4gIHJldHVybiBpc0VxdWFsKG5hbWVzcGFjZShmb3JtKSwgXCJqc1wiKSA/XG4gICAge1xuICAgICAgXCJuYW1lXCI6IGZvcm0sXG4gICAgICBcIm5zXCI6IHN5bWJvbCh2b2lkKDApLCBcImpzXCIpXG4gICAgfSA6XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5hbWVzcGFjZXMgPSAoZW52IHx8IDApW1wibmFtZXNwYWNlc1wiXTtcbiAgICAgIHZhciBzID0gXCJcIiArIGZvcm07XG4gICAgICB2YXIgYmluZGluZyA9IGxvY2FsQmluZGluZyhlbnYsIGZvcm0pO1xuICAgICAgcmV0dXJuIGJpbmRpbmcgP1xuICAgICAgICBiaW5kaW5nIDpcbiAgICAgIG5hbWVzcGFjZShmb3JtKSA/XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgbnMgPSBuYW1lc3BhY2UoZm9ybSk7XG4gICAgICAgICAgdmFyIG5zID0gaXNFcXVhbChcImNsb2p1cmUuY29yZVwiLCBucykgP1xuICAgICAgICAgICAgXCJjbGpzLmNvcmVcIiA6XG4gICAgICAgICAgICBucztcbiAgICAgICAgICB2YXIgZnVsbE5zID0gcmVzb2x2ZU5zQWxpYXMoZW52LCBucyk7XG4gICAgICAgICAgdmFyIGlkID0gc3ltYm9sKG5hbWUoZm9ybSkpO1xuICAgICAgICAgIHJldHVybiBtZXJnZShnZXRJbihuYW1lc3BhY2VzLCBbZnVsbE5zLCBcImRlZnNcIiwgaWRdKSwge1xuICAgICAgICAgICAgXCJuYW1lXCI6IHN5bWJvbChcIlwiICsgZnVsbE5zLCBcIlwiICsgKG5hbWUoZm9ybSkpKSxcbiAgICAgICAgICAgIFwibnNcIjogZnVsbE5zXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pKCkgOlxuICAgICAgXCJlbHNlXCIgP1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGZ1bGxOcyA9IGlzQ29yZU5hbWUoZW52LCBmb3JtKSA/XG4gICAgICAgICAgICBzeW1ib2wodm9pZCgwKSwgXCJjbGpzLmNvcmVcIikgOlxuICAgICAgICAgICAgKCgoZW52IHx8IDApW1wibnNcIl0pIHx8IDApW1wibmFtZVwiXTtcbiAgICAgICAgICByZXR1cm4gbWVyZ2UoZ2V0SW4obmFtZXNwYWNlcywgW2Z1bGxOcywgXCJkZWZzXCIsIGZvcm1dKSwge1xuICAgICAgICAgICAgXCJuYW1lXCI6IHN5bWJvbChcIlwiICsgZnVsbE5zLCBcIlwiICsgZm9ybSksXG4gICAgICAgICAgICBcIm5zXCI6IGZ1bGxOc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpIDpcbiAgICAgICAgdm9pZCgwKTtcbiAgICB9KSgpO1xufTtcbmV4cG9ydHMucmVzb2x2ZUV4aXN0aW5nVmFyID0gcmVzb2x2ZUV4aXN0aW5nVmFyO1xuXG52YXIgaXNTcGVjaWFsID0gZnVuY3Rpb24gaXNTcGVjaWFsKG9wKSB7XG4gIHJldHVybiAoaXNFcXVhbChvcCwgc3ltYm9sKHZvaWQoMCksIFwiaWZcIikpKSB8fCAoaXNFcXVhbChvcCwgc3ltYm9sKHZvaWQoMCksIFwiZGVmXCIpKSkgfHwgKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcImZuKlwiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJkb1wiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJsZXQqXCIpKSkgfHwgKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcImxvb3AqXCIpKSkgfHwgKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcImxldGZuKlwiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJ0aHJvd1wiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJ0cnkqXCIpKSkgfHwgKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcInJlY3VyXCIpKSkgfHwgKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcIm5ld1wiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJzZXQhXCIpKSkgfHwgKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcIm5zXCIpKSkgfHwgKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcImRlZnR5cGUqXCIpKSkgfHwgKGlzRXF1YWwob3AsIHN5bWJvbCh2b2lkKDApLCBcImRlZnJlY29yZCpcIikpKSB8fCAoaXNFcXVhbChvcCwgc3ltYm9sKHZvaWQoMCksIFwiLlwiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJqcypcIikpKSB8fCAoaXNFcXVhbChvcCwgc3ltYm9sKHZvaWQoMCksIFwiJlwiKSkpIHx8IChpc0VxdWFsKG9wLCBzeW1ib2wodm9pZCgwKSwgXCJxdW90ZVwiKSkpO1xufTtcbmV4cG9ydHMuaXNTcGVjaWFsID0gaXNTcGVjaWFsO1xuXG52YXIgYW5hbHl6ZVNlcSA9IGZ1bmN0aW9uIGFuYWx5emVTZXEoZW52LCBmb3JtLCBuYW1lKSB7XG4gIHZhciBlbnYgPSBjb25qKGVudiwge1xuICAgIFwibGluZVwiOiAoKChtZXRhKGZvcm0pKSB8fCAwKVtcImxpbmVcIl0pIHx8ICgoZW52IHx8IDApW1wibGluZVwiXSlcbiAgfSk7XG4gIHJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9wID0gZmlyc3QoZm9ybSk7XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgKCEodHlwZW9mKF9fdmVyYm9zZV9fKSA9PT0gXCJ1bmRlZmluZWRcIikpICYmIF9fdmVyYm9zZV9fID9cbiAgICAgICAgY29uc29sZS5sb2coXCJBc3NlcnQ6XCIsIFwiKG5vdCAobmlsPyBvcCkpXCIpIDpcbiAgICAgICAgdm9pZCgwKTtcbiAgICAgIHJldHVybiAhKCEoaXNOaWwob3ApKSkgP1xuICAgICAgICAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIlwiICsgXCJBc3NlcnQgZmFpbGVkOiBcIiArIFwiQ2FuJ3QgY2FsbCBuaWxcIiArIFwiXFxuXFxuQXNzZXJ0aW9uOlxcblxcblwiICsgXCIobm90IChuaWw/IG9wKSlcIiArIFwiXFxuXFxuQWN0dWFsOlxcblxcblwiICsgKGlzTmlsKG9wKSkgKyBcIlxcbi0tLS0tLS0tLS0tLS0tXFxuXCIsIHZvaWQoMCkpOyB9KSgpIDpcbiAgICAgICAgdm9pZCgwKTtcbiAgICB9KSgpO1xuICAgIHJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZXhwYW5zaW9uID0gbWFjcm9leHBhbmQoZm9ybSk7XG4gICAgICByZXR1cm4gaXNTcGVjaWFsKG9wKSA/XG4gICAgICAgIHBhcnNlKG9wLCBlbnYsIGZvcm0sIG5hbWUpIDpcbiAgICAgICAgcGFyc2VJbnZva2UoZW52LCBmb3JtKTtcbiAgICB9KSgpO1xuICB9KSgpO1xufTtcbmV4cG9ydHMuYW5hbHl6ZVNlcSA9IGFuYWx5emVTZXE7XG5cbnZhciBpc01ldGhvZENhbGwgPSBmdW5jdGlvbiBpc01ldGhvZENhbGwoZm9ybSkge1xuICByZXR1cm4gaXNFcXVhbChmaXJzdChmb3JtKSwgXCIuXCIpO1xufTtcblxudmFyIGlzSW5zdGFudGlhdGlvbiA9IGZ1bmN0aW9uIGlzSW5zdGFudGlhdGlvbihmb3JtKSB7XG4gIHJldHVybiBpc0VxdWFsKGxhc3QoZm9ybSksIFwiLlwiKTtcbn07XG5cbnZhciBnZXROc0V4Y2x1ZGUgPSBmdW5jdGlvbiBnZXROc0V4Y2x1ZGUoZW52LCBzeW0pIHtcbiAgcmV0dXJuICgoKCgoZW52IHx8IDApW1wibnNcIl0pIHx8IDApW1wiZXhjbHVkZXNcIl0pIHx8IDApW3N5bV07XG59O1xuXG52YXIgZ2V0TnNOYW1lID0gZnVuY3Rpb24gZ2V0TnNOYW1lKGVudikge1xuICByZXR1cm4gKCgoZW52IHx8IDApW1wibnNcIl0pIHx8IDApW1wibmFtZVwiXTtcbn07XG5cbnZhciBnZXRNYWNyb1VzZXMgPSBmdW5jdGlvbiBnZXRNYWNyb1VzZXMoZW52LCBzeW0pIHtcbiAgcmV0dXJuICgoKCgoZW52IHx8IDApW1wibnNcIl0pIHx8IDApW1widXNlcy1tYWNyb3NcIl0pIHx8IDApW3N5bV07XG59O1xuXG52YXIgaXNNYWNyb1N5bSA9IGZ1bmN0aW9uIGlzTWFjcm9TeW0oZW52LCBzeW0pIHtcbiAgdmFyIG5hbWVzcGFjZXMgPSAoZW52IHx8IDApW1wibmFtZXNwYWNlc1wiXTtcbiAgdmFyIGxvY2FsID0gbG9jYWxCaW5kaW5nKGVudiwgc3ltKTtcbiAgdmFyIG5zSWQgPSBnZXROc05hbWUoZW52KTtcbiAgcmV0dXJuICEobG9jYWwgfHwgKCgoZ2V0TnNFeGNsdWRlKGVudiwgc3ltKSkgfHwgKGdldEluKG5hbWVzcGFjZXMsIFtuc0lkLCBcImV4Y2x1ZGVzXCIsIHN5bV0pKSkgJiYgKCEoKGdldE1hY3JvVXNlcyhlbnYsIHN5bSkpIHx8IChnZXRJbihuYW1lc3BhY2VzLCBbbnNJZCwgXCJ1c2VzLW1hY3Jvc1wiLCBzeW1dKSkpKSkpO1xufTtcbmV4cG9ydHMuaXNNYWNyb1N5bSA9IGlzTWFjcm9TeW07XG5cbnZhciBnZXRFeHBhbmRlciA9IGZ1bmN0aW9uIGdldEV4cGFuZGVyKHN5bSwgZW52KSB7XG4gIHZhciBvcCA9IChpc01hY3JvU3ltKGVudiwgc3ltKSkgJiYgKHJlc29sdmVFeGlzdGluZ1ZhcihlbXB0eUVudigpLCBzeW0pKTtcbiAgcmV0dXJuIG9wICYmICgob3AgfHwgMClbXCJtYWNyb1wiXSkgP1xuICAgIGV2YWwoXCJcIiArIChtdW5nZSgob3AgfHwgMClbXCJuYW1lXCJdKSkpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMuZ2V0RXhwYW5kZXIgPSBnZXRFeHBhbmRlcjtcblxudmFyIGlzU3VnYXIgPSBmdW5jdGlvbiBpc1N1Z2FyKG9wKSB7XG4gIHZhciBpZCA9IFwiXCIgKyBvcDtcbiAgcmV0dXJuIChmaXJzdChpZCkgPT09IFwiLlwiKSB8fCAobGFzdChpZCkgPT09IFwiLlwiKTtcbn07XG5leHBvcnRzLmlzU3VnYXIgPSBpc1N1Z2FyO1xuXG52YXIgaXNNYWNybyA9IGZ1bmN0aW9uIGlzTWFjcm8ob3ApIHtcbiAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydHMuaXNNYWNybyA9IGlzTWFjcm87XG5cbnZhciBkZXN1Z2FyMSA9IGZ1bmN0aW9uIGRlc3VnYXIxKGZvcm0pIHtcbiAgdmFyIGlkID0gXCJcIiArIGZvcm07XG4gIHZhciBwYXJhbXMgPSByZXN0KGZvcm0pO1xuICB2YXIgbWV0YWRhdGEgPSBtZXRhKGZvcm0pO1xuICByZXR1cm4gaXNNZXRob2RDYWxsKGlkKSA/XG4gICAgd2l0aE1ldGEobGlzdF8oc3ltYm9sKHZvaWQoMCksIFwiLlwiKSwgZmlyc3QocGFyYW0pLCBzeW1ib2woc3VicyhpZCwgMSkpLCByZXN0KHBhcmFtcykpLCBtZXRhZGF0YSkgOlxuICBpc0luc3RhbnRpYXRpb24oaWQpID9cbiAgICB3aXRoTWV0YShsaXN0XyhzeW1ib2wodm9pZCgwKSwgXCJuZXdcIiksIHN5bWJvbChzdWJzKG9wbmFtZSwgMCwgZGVjKGNvdW50KG9wbmFtZSkpKSksIHBhcmFtcyksIG1ldGFkYXRhKSA6XG4gIFwiZWxzZVwiID9cbiAgICBmb3JtIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMuZGVzdWdhcjEgPSBkZXN1Z2FyMTtcblxudmFyIG1hY3JvZXhwYW5kMSA9IGZ1bmN0aW9uIG1hY3JvZXhwYW5kMShmb3JtKSB7XG4gIHZhciBvcCA9IGZpcnN0KGZvcm0pO1xuICByZXR1cm4gaXNTcGVjaWFsKG9wKSA/XG4gICAgZm9ybSA6XG4gIGlzU3VnYXIob3ApID9cbiAgICBkZXN1Z2FyMShmb3JtKSA6XG4gIGlzTWFjcm8ob3ApID9cbiAgICBnZXRFeHBhbmRlcihvcCkuYXBwbHkoZ2V0RXhwYW5kZXIob3ApLCBmb3JtKSA6XG4gIFwiZWxzZVwiID9cbiAgICBmb3JtIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMubWFjcm9leHBhbmQxID0gbWFjcm9leHBhbmQxO1xuXG52YXIgbWFjcm9leHBhbmQgPSBmdW5jdGlvbiBtYWNyb2V4cGFuZChmb3JtKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gbG9vcChmb3JtLCBleHBhbnNpb24pIHtcbiAgICB2YXIgcmVjdXIgPSBsb29wO1xuICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgcmVjdXIgPSBmb3JtID09PSBleHBhbnNpb24gP1xuICAgICAgZm9ybSA6XG4gICAgICAoZm9ybSA9IGV4cGFuc2lvbiwgZXhwYW5zaW9uID0gbWFjcm9leHBhbmQxKGV4cGFuc2lvbiksIGxvb3ApO1xuICAgIH07XG4gICAgcmV0dXJuIHJlY3VyO1xuICB9KShmb3JtLCBtYWNyb2V4cGFuZDEoZm9ybSkpO1xufTtcbmV4cG9ydHMubWFjcm9leHBhbmQgPSBtYWNyb2V4cGFuZDtcblxudmFyIGFuYWx5emVTeW1ib2wgPSBmdW5jdGlvbiBhbmFseXplU3ltYm9sKGVudiwgc3ltYm9sKSB7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgXCJlbnZcIjogZW52LFxuICAgIFwiZm9ybVwiOiBzeW1ib2xcbiAgfTtcbiAgdmFyIGxvY2FscyA9IChlbnYgfHwgMClbXCJsb2NhbHNcIl07XG4gIHZhciBsb2NhbCA9IChsb2NhbHMgfHwgMClbc3ltYm9sXTtcbiAgcmV0dXJuIGNvbmoocmVzdWx0LCB7XG4gICAgXCJvcFwiOiBcInZhclwiLFxuICAgIFwiaW5mb1wiOiBsb2NhbCA/XG4gICAgICBsb2NhbCA6XG4gICAgICByZXNvbHZlRXhpc3RpbmdWYXIoZW52LCBzeW1ib2wpXG4gIH0pO1xufTtcbmV4cG9ydHMuYW5hbHl6ZVN5bWJvbCA9IGFuYWx5emVTeW1ib2w7XG5cbnZhciBfcmVhZGVyTnNOYW1lXyA9IHN5bWJvbChcImNsb2p1cmUucmVhZGVyXCIsIFwicmVhZGVyXCIpO1xuXG52YXIgYW5hbHl6ZUtleXdvcmQgPSBmdW5jdGlvbiBhbmFseXplS2V5d29yZChlbnYsIGZvcm0pIHtcbiAgcmV0dXJuIHtcbiAgICBcIm9wXCI6IFwiY29uc3RhbnRcIixcbiAgICBcImVudlwiOiBlbnYsXG4gICAgXCJmb3JtXCI6IGlzRXF1YWwobmFtZXNwYWNlKGZvcm0pLCBuYW1lKF9yZWFkZXJOc05hbWVfKSkgP1xuICAgICAga2V5d29yZChuYW1lKCgoKGVudiB8fCAwKVtcIm5zXCJdKSB8fCAwKVtcIm5hbWVcIl0pLCBuYW1lKGZvcm0pKSA6XG4gICAgICBmb3JtXG4gIH07XG59O1xuZXhwb3J0cy5hbmFseXplS2V5d29yZCA9IGFuYWx5emVLZXl3b3JkO1xuXG52YXIgaXNTaW1wbGVLZXkgPSBmdW5jdGlvbiBpc1NpbXBsZUtleSh4KSB7XG4gIHJldHVybiAoaXNTdHJpbmcoeCkpIHx8IChpc0tleXdvcmQoeCkpO1xufTtcbmV4cG9ydHMuaXNTaW1wbGVLZXkgPSBpc1NpbXBsZUtleTtcblxudmFyIGFuYWx5emVEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gYW5hbHl6ZURpY3Rpb25hcnkoZW52LCBmb3JtLCBuYW1lKSB7XG4gIHZhciBleHByRW52ID0gY29uaihlbnYsIHtcbiAgICBcImNvbnRleHRcIjogXCJleHByXCJcbiAgfSk7XG4gIHZhciBuYW1lcyA9IGtleXMoZm9ybSk7XG4gIHZhciBpc1NpbXBsZUtleXMgPSBpc0V2ZXJ5KGlzU2ltcGxlS2V5LCBuYW1lcyk7XG4gIHZhciBrcyA9IGRpc2FsbG93aW5nUmVjdXIodmVjKG1hcChmdW5jdGlvbigkMSkge1xuICAgIHJldHVybiBhbmFseXplKGV4cHJFbnYsICQxLCBuYW1lKTtcbiAgfSwgbmFtZXMpKSk7XG4gIHZhciB2cyA9IGRpc2FsbG93aW5nUmVjdXIodmVjKG1hcChmdW5jdGlvbigkMSkge1xuICAgIHJldHVybiBhbmFseXplKGV4cHJFbnYsICQxLCBuYW1lKTtcbiAgfSwgdmFscyhmb3JtKSkpKTtcbiAgcmV0dXJuIGFuYWx5emVXcmFwTWV0YSh7XG4gICAgXCJvcFwiOiBcIm1hcFwiLFxuICAgIFwiZW52XCI6IGVudixcbiAgICBcImZvcm1cIjogZm9ybSxcbiAgICBcImtleXNcIjoga3MsXG4gICAgXCJ2YWxzXCI6IHZzLFxuICAgIFwic2ltcGxlLWtleXM/XCI6IGlzU2ltcGxlS2V5cyxcbiAgICBcImNoaWxkcmVuXCI6IHZlYyhpbnRlcmxlYXZlKGtzLCB2cykpXG4gIH0sIG5hbWUpO1xufTtcbmV4cG9ydHMuYW5hbHl6ZURpY3Rpb25hcnkgPSBhbmFseXplRGljdGlvbmFyeTtcblxudmFyIGFuYWx5emVWZWN0b3IgPSBmdW5jdGlvbiBhbmFseXplVmVjdG9yKGVudiwgZm9ybSwgbmFtZSkge1xuICB2YXIgZXhwckVudiA9IGNvbmooZW52LCB7XG4gICAgXCJjb250ZXh0XCI6IFwiZXhwclwiXG4gIH0pO1xuICB2YXIgaXRlbXMgPSBkaXNhbGxvd2luZ1JlY3VyKHZlYyhtYXAoZnVuY3Rpb24oJDEpIHtcbiAgICByZXR1cm4gYW5hbHl6ZShleHByRW52LCAkMSwgbmFtZSk7XG4gIH0sIGZvcm0pKSk7XG4gIHJldHVybiBhbmFseXplV3JhcE1ldGEoe1xuICAgIFwib3BcIjogXCJ2ZWN0b3JcIixcbiAgICBcImVudlwiOiBlbnYsXG4gICAgXCJmb3JtXCI6IGZvcm0sXG4gICAgXCJpdGVtc1wiOiBpdGVtcyxcbiAgICBcImNoaWxkcmVuXCI6IGl0ZW1zXG4gIH0sIG5hbWUpO1xufTtcbmV4cG9ydHMuYW5hbHl6ZVZlY3RvciA9IGFuYWx5emVWZWN0b3I7XG5cbnZhciBhbmFseXplV3JhcE1ldGEgPSBmdW5jdGlvbiBhbmFseXplV3JhcE1ldGEoZXhwciwgbmFtZSkge1xuICB2YXIgZm9ybSA9IChleHByIHx8IDApW1wiZm9ybVwiXTtcbiAgdmFyIG1ldGFkYXRhID0gbWV0YShmb3JtKTtcbiAgdmFyIGVudiA9IChleHByIHx8IDApW1wiZW52XCJdO1xuICB2YXIgZXhwciA9IG1ldGFkYXRhID9cbiAgICBhc3NvY0luKGV4cHIsIFtcImVudlwiLCBcImNvbnRleHRcIl0sIFwiZXhwclwiKSA6XG4gICAgdm9pZCgwKTtcbiAgdmFyIG1ldGFFeHByID0gbWV0YWRhdGEgP1xuICAgIGFuYWx5emVNYXAoZW52LCBtZXRhZGF0YSwgbmFtZSkgOlxuICAgIHZvaWQoMCk7XG4gIHJldHVybiBtZXRhZGF0YSA/XG4gICAge1xuICAgICAgXCJvcFwiOiBcIm1ldGFcIixcbiAgICAgIFwiZW52XCI6IGVudixcbiAgICAgIFwiZm9ybVwiOiBmb3JtLFxuICAgICAgXCJtZXRhXCI6IG1ldGFFeHByLFxuICAgICAgXCJleHByXCI6IGV4cHIsXG4gICAgICBcImNoaWxkcmVuXCI6IFttZXRhRXhwciwgZXhwcl1cbiAgICB9IDpcbiAgICBleHByO1xufTtcbmV4cG9ydHMuYW5hbHl6ZVdyYXBNZXRhID0gYW5hbHl6ZVdyYXBNZXRhO1xuXG52YXIgYW5hbHl6ZU1hcCA9IGZ1bmN0aW9uIGFuYWx5emVNYXAoZW52LCBmb3JtLCBuYW1lKSB7XG4gIHZhciBleHByRW52ID0gY29uaihlbnYsIHtcbiAgICBcImNvbnRleHRcIjogXCJleHByXCJcbiAgfSk7XG4gIHZhciBpc1NpbXBsZUtleXMgPSBpc0V2ZXJ5KGZ1bmN0aW9uKCQxKSB7XG4gICAgcmV0dXJuIChpc1N0cmluZygkMSkpIHx8IChpc0tleXdvcmQoJDEpKTtcbiAgfSwga2V5cyhmb3JtKSk7XG4gIHZhciBrcyA9IGRpc2FsbG93aW5nUmVjdXIodmVjKG1hcChmdW5jdGlvbigkMSkge1xuICAgIHJldHVybiBhbmFseXplKGV4cHJFbnYsICQxLCBuYW1lKTtcbiAgfSwga2V5cyhmb3JtKSkpKTtcbiAgdmFyIHZzID0gZGlzYWxsb3dpbmdSZWN1cih2ZWMobWFwKGZ1bmN0aW9uKCQxKSB7XG4gICAgcmV0dXJuIGFuYWx5emUoZXhwckVudiwgJDEsIG5hbWUpO1xuICB9LCB2YWxzKGZvcm0pKSkpO1xuICByZXR1cm4gYW5hbHl6ZVdyYXBNZXRhKHtcbiAgICBcIm9wXCI6IFwibWFwXCIsXG4gICAgXCJlbnZcIjogZW52LFxuICAgIFwiZm9ybVwiOiBmb3JtLFxuICAgIFwia2V5c1wiOiBrcyxcbiAgICBcInZhbHNcIjogdnMsXG4gICAgXCJzaW1wbGUta2V5cz9cIjogaXNTaW1wbGVLZXlzLFxuICAgIFwiY2hpbGRyZW5cIjogdmVjKGludGVybGVhdmUoa3MsIHZzKSlcbiAgfSwgbmFtZSk7XG59O1xuZXhwb3J0cy5hbmFseXplTWFwID0gYW5hbHl6ZU1hcDtcblxudmFyIGFuYWx5emUgPSBmdW5jdGlvbiBhbmFseXplKGVudiwgZm9ybSwgbmFtZSkge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYW5hbHl6ZShlbnYsIGZvcm0sIHZvaWQoMCkpO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBpc1N5bWJvbChmb3JtKSA/XG4gICAgICAgIGFuYWx5emVTeW1ib2woZW52LCBmb3JtKSA6XG4gICAgICBpc0tleXdvcmQoZm9ybSkgP1xuICAgICAgICBhbmFseXplS2V5d29yZChlbnYsIGZvcm0pIDpcbiAgICAgIChpc1NlcShmb3JtKSkgJiYgKCEoaXNFbXB0eShmb3JtKSkpID9cbiAgICAgICAgYW5hbHl6ZVNlcShlbnYsIGZvcm0sIG5hbWUpIDpcbiAgICAgIGlzRGljdGlvbmFyeShmb3JtKSA/XG4gICAgICAgIGFuYWx5emVEaWN0aW9uYXJ5KGVudiwgZm9ybSwgbmFtZSkgOlxuICAgICAgaXNWZWN0b3IoZm9ybSkgP1xuICAgICAgICBhbmFseXplVmVjdG9yKGVudiwgZm9ybSwgbmFtZSkgOlxuICAgICAgXCJlbHNlXCIgP1xuICAgICAgICB7XG4gICAgICAgICAgXCJvcFwiOiBcImNvbnN0YW50XCIsXG4gICAgICAgICAgXCJlbnZcIjogZW52LFxuICAgICAgICAgIFwiZm9ybVwiOiBmb3JtXG4gICAgICAgIH0gOlxuICAgICAgICB2b2lkKDApO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIChmdW5jdGlvbigpIHsgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGFyaXR5XCIpOyB9KSgpXG4gIH07XG4gIHJldHVybiB2b2lkKDApO1xufTtcbmV4cG9ydHMuYW5hbHl6ZSA9IGFuYWx5emVcbiIsIihmdW5jdGlvbihnbG9iYWwpe3ZhciBfbnNfID0gXCJpbnRlcmFjdGl2YXRlLXdpc3AubWFpblwiO1xubW9kdWxlLm5hbWVzcGFjZSA9IF9uc187XG52YXIgaW50ZXJhY3RpdmF0ZSA9IHJlcXVpcmUoXCJpbnRlcmFjdGl2YXRlXCIpO1xudmFyIGhhc2hhcmUgPSByZXF1aXJlKFwiY29kZW1pcnJvci1oYXNoYXJlXCIpO1xudmFyIHBlcnNpc3QgPSByZXF1aXJlKFwiY29kZW1pcnJvci1wZXJzaXN0XCIpO1xudmFyIHN0YXJ0SG9zdCA9IChyZXF1aXJlKFwiLi9ob3N0XCIpKS5zdGFydEhvc3Q7O1xuXG5pbnRlcmFjdGl2YXRlKENvZGVNaXJyb3IpO1xuXG5oYXNoYXJlKENvZGVNaXJyb3IpO1xuXG5wZXJzaXN0KENvZGVNaXJyb3IpO1xuXG5zdGFydEhvc3QoKTtcblxudmFyIGVkaXRvciA9IENvZGVNaXJyb3IoZG9jdW1lbnQuYm9keSwge1xuICBcInBlcnNpc3RcIjogdHJ1ZSxcbiAgXCJtYXRjaEJyYWNrZXRzXCI6IHRydWUsXG4gIFwiZWxlY3RyaWNDaGFyc1wiOiB0cnVlLFxuICBcInN0eWxlQWN0aXZlTGluZVwiOiB0cnVlLFxuICBcImF1dG9mb2N1c1wiOiB0cnVlLFxuICBcInRoZW1lXCI6IFwic29sYXJpemVkIGRhcmtcIixcbiAgXCJtb2RlXCI6IFwiY2xvanVyZVwiLFxuICBcInZhbHVlXCI6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludHJvXCIpKS50ZXh0Q29udGVudCxcbiAgXCJpbnRlcmFjdGl2YXRlXCI6IHRydWUsXG4gIFwiaW50ZXJhY3RpdmVTZXBhcmF0b3JcIjogL147OyA9PlteXFxuXSokL20sXG4gIFwiZXh0cmFLZXlzXCI6IHtcbiAgICBcIlRhYlwiOiBcImluZGVudFNlbGVjdGlvblwiXG4gIH1cbn0pO1xuZXhwb3J0cy5lZGl0b3IgPSBlZGl0b3I7XG5cbmdsb2JhbC5lZGl0b3IgPSBlZGl0b3Jcbn0pKHdpbmRvdykiLCJ2YXIgZXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5leHBvcnRzLmlzRGF0ZSA9IGZ1bmN0aW9uKG9iail7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBEYXRlXSd9O1xuZXhwb3J0cy5pc1JlZ0V4cCA9IGZ1bmN0aW9uKG9iail7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJ307XG5cblxuZXhwb3J0cy5wcmludCA9IGZ1bmN0aW9uICgpIHt9O1xuZXhwb3J0cy5wdXRzID0gZnVuY3Rpb24gKCkge307XG5leHBvcnRzLmRlYnVnID0gZnVuY3Rpb24oKSB7fTtcblxuZXhwb3J0cy5pbnNwZWN0ID0gZnVuY3Rpb24ob2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKSB7XG4gIHZhciBzZWVuID0gW107XG5cbiAgdmFyIHN0eWxpemUgPSBmdW5jdGlvbihzdHIsIHN0eWxlVHlwZSkge1xuICAgIC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuICAgIHZhciBzdHlsZXMgPVxuICAgICAgICB7ICdib2xkJyA6IFsxLCAyMl0sXG4gICAgICAgICAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAgICAgICAgICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgICAgICAgICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAgICAgICAgICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgICAgICAgICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgICAgICAgICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICAgICAgICAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICAgICAgICAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICAgICAgICAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAgICAgICAgICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAgICAgICAgICdyZWQnIDogWzMxLCAzOV0sXG4gICAgICAgICAgJ3llbGxvdycgOiBbMzMsIDM5XSB9O1xuXG4gICAgdmFyIHN0eWxlID1cbiAgICAgICAgeyAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgICAgICAgICAnbnVtYmVyJzogJ2JsdWUnLFxuICAgICAgICAgICdib29sZWFuJzogJ3llbGxvdycsXG4gICAgICAgICAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgICAgICAgICAnbnVsbCc6ICdib2xkJyxcbiAgICAgICAgICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgICAgICAgICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgICAgICAgICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAgICAgICAgICdyZWdleHAnOiAncmVkJyB9W3N0eWxlVHlwZV07XG5cbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgIHJldHVybiAnXFwwMzNbJyArIHN0eWxlc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAgICdcXDAzM1snICsgc3R5bGVzW3N0eWxlXVsxXSArICdtJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gIH07XG4gIGlmICghIGNvbG9ycykge1xuICAgIHN0eWxpemUgPSBmdW5jdGlvbihzdHIsIHN0eWxlVHlwZSkgeyByZXR1cm4gc3RyOyB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gICAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5pbnNwZWN0ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgICB2YWx1ZSAhPT0gZXhwb3J0cyAmJlxuICAgICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzKTtcbiAgICB9XG5cbiAgICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuXG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgICAgICByZXR1cm4gc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcblxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgcmV0dXJuIHN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuXG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuIHN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgICB9XG4gICAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xuICAgIH1cblxuICAgIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgICB2YXIgdmlzaWJsZV9rZXlzID0gT2JqZWN0X2tleXModmFsdWUpO1xuICAgIHZhciBrZXlzID0gc2hvd0hpZGRlbiA/IE9iamVjdF9nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKSA6IHZpc2libGVfa2V5cztcblxuICAgIC8vIEZ1bmN0aW9ucyB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYga2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxpemUoJycgKyB2YWx1ZSwgJ3JlZ2V4cCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgICAgcmV0dXJuIHN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERhdGVzIHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWRcbiAgICBpZiAoaXNEYXRlKHZhbHVlKSAmJiBrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHN0eWxpemUodmFsdWUudG9VVENTdHJpbmcoKSwgJ2RhdGUnKTtcbiAgICB9XG5cbiAgICB2YXIgYmFzZSwgdHlwZSwgYnJhY2VzO1xuICAgIC8vIERldGVybWluZSB0aGUgb2JqZWN0IHR5cGVcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHR5cGUgPSAnQXJyYXknO1xuICAgICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9ICdPYmplY3QnO1xuICAgICAgYnJhY2VzID0gWyd7JywgJ30nXTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgYmFzZSA9IChpc1JlZ0V4cCh2YWx1ZSkpID8gJyAnICsgdmFsdWUgOiAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gJyc7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIGJhc2UgPSAnICcgKyB2YWx1ZS50b1VUQ1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gICAgfVxuXG4gICAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxpemUoJycgKyB2YWx1ZSwgJ3JlZ2V4cCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWVuLnB1c2godmFsdWUpO1xuXG4gICAgdmFyIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIG5hbWUsIHN0cjtcbiAgICAgIGlmICh2YWx1ZS5fX2xvb2t1cEdldHRlcl9fKSB7XG4gICAgICAgIGlmICh2YWx1ZS5fX2xvb2t1cEdldHRlcl9fKGtleSkpIHtcbiAgICAgICAgICBpZiAodmFsdWUuX19sb29rdXBTZXR0ZXJfXyhrZXkpKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSBzdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh2YWx1ZS5fX2xvb2t1cFNldHRlcl9fKGtleSkpIHtcbiAgICAgICAgICAgIHN0ciA9IHN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2aXNpYmxlX2tleXMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgICAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICAgICAgfVxuICAgICAgaWYgKCFzdHIpIHtcbiAgICAgICAgaWYgKHNlZW4uaW5kZXhPZih2YWx1ZVtrZXldKSA8IDApIHtcbiAgICAgICAgICBpZiAocmVjdXJzZVRpbWVzID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdHIgPSBmb3JtYXQodmFsdWVba2V5XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0ciA9IGZvcm1hdCh2YWx1ZVtrZXldLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9IHN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnQXJyYXknICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgICAgIG5hbWUgPSBzdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgICAgICBuYW1lID0gc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xuICAgIH0pO1xuXG4gICAgc2Vlbi5wb3AoKTtcblxuICAgIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgICBudW1MaW5lc0VzdCsrO1xuICAgICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgICAgcmV0dXJuIHByZXYgKyBjdXIubGVuZ3RoICsgMTtcbiAgICB9LCAwKTtcblxuICAgIGlmIChsZW5ndGggPiA1MCkge1xuICAgICAgb3V0cHV0ID0gYnJhY2VzWzBdICtcbiAgICAgICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgYnJhY2VzWzFdO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dCA9IGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG4gIHJldHVybiBmb3JtYXQob2JqLCAodHlwZW9mIGRlcHRoID09PSAndW5kZWZpbmVkJyA/IDIgOiBkZXB0aCkpO1xufTtcblxuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBhciBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgICAgICBBcnJheS5pc0FycmF5KGFyKSB8fFxuICAgICAgICAgKGFyICYmIGFyICE9PSBPYmplY3QucHJvdG90eXBlICYmIGlzQXJyYXkoYXIuX19wcm90b19fKSk7XG59XG5cblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIHJlIGluc3RhbmNlb2YgUmVnRXhwIHx8XG4gICAgKHR5cGVvZiByZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXScpO1xufVxuXG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIGlmIChkIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHRydWU7XG4gIGlmICh0eXBlb2YgZCAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3BlcnRpZXMgPSBEYXRlLnByb3RvdHlwZSAmJiBPYmplY3RfZ2V0T3duUHJvcGVydHlOYW1lcyhEYXRlLnByb3RvdHlwZSk7XG4gIHZhciBwcm90byA9IGQuX19wcm90b19fICYmIE9iamVjdF9nZXRPd25Qcm9wZXJ0eU5hbWVzKGQuX19wcm90b19fKTtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHByb3RvKSA9PT0gSlNPTi5zdHJpbmdpZnkocHJvcGVydGllcyk7XG59XG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uIChtc2cpIHt9O1xuXG5leHBvcnRzLnB1bXAgPSBudWxsO1xuXG52YXIgT2JqZWN0X2tleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHJlcy5wdXNoKGtleSk7XG4gICAgcmV0dXJuIHJlcztcbn07XG5cbnZhciBPYmplY3RfZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSByZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufTtcblxudmFyIE9iamVjdF9jcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIChwcm90b3R5cGUsIHByb3BlcnRpZXMpIHtcbiAgICAvLyBmcm9tIGVzNS1zaGltXG4gICAgdmFyIG9iamVjdDtcbiAgICBpZiAocHJvdG90eXBlID09PSBudWxsKSB7XG4gICAgICAgIG9iamVjdCA9IHsgJ19fcHJvdG9fXycgOiBudWxsIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHByb3RvdHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ3R5cGVvZiBwcm90b3R5cGVbJyArICh0eXBlb2YgcHJvdG90eXBlKSArICddICE9IFxcJ29iamVjdFxcJydcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFR5cGUgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgICAgIG9iamVjdCA9IG5ldyBUeXBlKCk7XG4gICAgICAgIG9iamVjdC5fX3Byb3RvX18gPSBwcm90b3R5cGU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcHJvcGVydGllcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMob2JqZWN0LCBwcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbn07XG5cbmV4cG9ydHMuaW5oZXJpdHMgPSBmdW5jdGlvbihjdG9yLCBzdXBlckN0b3IpIHtcbiAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3I7XG4gIGN0b3IucHJvdG90eXBlID0gT2JqZWN0X2NyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAodHlwZW9mIGYgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGV4cG9ydHMuaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6IHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSl7XG4gICAgaWYgKHggPT09IG51bGwgfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGV4cG9ydHMuaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHNhdmUgPSBcInNhdmVAaGFzaGFyZVwiXG52YXIgbG9hZCA9IFwibG9hZEBoYXNoYXJlXCJcblxuZnVuY3Rpb24gcGx1Z2luKENvZGVNaXJyb3IpIHtcbiAgQ29kZU1pcnJvci5kZWZpbmVPcHRpb24oXCJoYXNoYXJlXCIsIGZhbHNlLCBmdW5jdGlvbihlZGl0b3IsIHZhbHVlKSB7XG4gICAgLyoqXG4gICAgVGFrZXMgZWRpdG9yIGFuZCBlbmFibGVzIHBlcnNpc3RzIGNoYW5nZXMgdG8gdGhlIGJ1ZmZlciBhY3Jvc3MgdGhlIHNlc3Npb25zLlxuICAgICoqL1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFyIHNhdmluZyA9IGZhbHNlXG4gICAgICBlZGl0b3Jbc2F2ZV0gPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBsb2NhdGlvbi5oYXNoID0gZW5jb2RlVVJJQ29tcG9uZW50KGVkaXRvci5nZXRWYWx1ZSgpKVxuICAgICAgfVxuICAgICAgZWRpdG9yW2xvYWRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gZWRpdG9yLmdldFZhbHVlKCkpIGVkaXRvci5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBlZGl0b3Jbc2F2ZV0sIGZhbHNlKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGVkaXRvcltsb2FkXSwgZmFsc2UpXG5cbiAgICAgIGVkaXRvcltsb2FkXSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCBlZGl0b3Jbc2F2ZV0sIGZhbHNlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGVkaXRvcltsb2FkXSwgZmFsc2UpXG4gICAgfVxuICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBsdWdpblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIG9uQ2hhbmdlKGVkaXRvcikge1xuICBsb2NhbFN0b3JhZ2Vbd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdXSA9IGVkaXRvci5nZXRWYWx1ZSgpXG59XG5cbmZ1bmN0aW9uIHNldHVwKGVkaXRvciwgdmFsdWUpIHtcbiAgLyoqXG4gIFRha2VzIGVkaXRvciBhbmQgZW5hYmxlcyBwZXJzaXN0cyBjaGFuZ2VzIHRvIHRoZSBidWZmZXIgYWNyb3NzIHRoZSBzZXNzaW9ucy5cbiAgKiovXG4gIGlmICh2YWx1ZSkge1xuICAgIHZhciBhZGRyZXNzID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdXG4gICAgdmFyIHBlcnNpc3RlZCA9IGxvY2FsU3RvcmFnZVthZGRyZXNzXSB8fCBlZGl0b3IuZ2V0VmFsdWUoKVxuICAgIGVkaXRvci5zZXRWYWx1ZShwZXJzaXN0ZWQpXG4gICAgZWRpdG9yLm9uKFwiY2hhbmdlXCIsIG9uQ2hhbmdlKVxuICB9IGVsc2Uge1xuICAgIGVkaXRvci5vZmYoXCJjaGFuZ2VcIiwgb25DaGFuZ2UpXG4gIH1cbn1cblxuZnVuY3Rpb24gcGx1Z2luKENvZGVNaXJyb3IpIHtcbiAgQ29kZU1pcnJvci5kZWZpbmVPcHRpb24oXCJwZXJzaXN0XCIsIGZhbHNlLCBzZXR1cClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwbHVnaW5cbiIsInZhciBfbnNfID0gXCJpbnRlcmFjdGl2YXRlLXdpc3AuaG9zdFwiO1xubW9kdWxlLm5hbWVzcGFjZSA9IF9uc187XG52YXIgcmVuZGVyID0gcmVxdWlyZShcImludGVyYWN0aXZhdGUvcmVuZGVyXCIpO1xudmFyIHJlYWRfID0gKHJlcXVpcmUoXCJ3aXNwL3JlYWRlclwiKSkucmVhZF87XG52YXIgY29tcGlsZV8gPSAocmVxdWlyZShcIndpc3AvY29tcGlsZXJcIikpLmNvbXBpbGVfO1xudmFyIGZpcnN0ID0gKHJlcXVpcmUoXCJ3aXNwL3NlcXVlbmNlXCIpKS5maXJzdDtcbnZhciByZXN0ID0gKHJlcXVpcmUoXCJ3aXNwL3NlcXVlbmNlXCIpKS5yZXN0O1xudmFyIGxpc3QgPSAocmVxdWlyZShcIndpc3Avc2VxdWVuY2VcIikpLmxpc3Q7XG52YXIgc3ltYm9sID0gKHJlcXVpcmUoXCJ3aXNwL2FzdFwiKSkuc3ltYm9sO1xudmFyIHByU3RyID0gKHJlcXVpcmUoXCJ3aXNwL2FzdFwiKSkucHJTdHI7XG52YXIgc3VicyA9IChyZXF1aXJlKFwid2lzcC9ydW50aW1lXCIpKS5zdWJzO1xudmFyIGluc3BlY3QgPSAocmVxdWlyZShcInV0aWxcIikpLmluc3BlY3Q7O1xuXG52YXIgX19vdXRfXyA9IGZ1bmN0aW9uIF9fb3V0X18oKSB7XG4gIHJldHVybiB2b2lkKDApO1xufTtcbmV4cG9ydHMuX19vdXRfXyA9IF9fb3V0X187XG5cbndpbmRvdy5leHBvcnRzID0ge307XG5cbndpbmRvdy5tb2R1bGUgPSB7XG4gIFwiZXhwb3J0c1wiOiB3aW5kb3cuZXhwb3J0c1xufTtcblxud2luZG93Lmxpc3QgPSBsaXN0O1xuXG53aW5kb3cuc3ltYm9sID0gc3ltYm9sO1xuXG53aW5kb3cuT3V0ID0gX19vdXRfXztcblxud2luZG93Ll9fcHJpbnRDb21waWxlZF9fID0gZmFsc2U7XG5cbndpbmRvdy5fX3ByaW50UmVhZF9fID0gZmFsc2U7XG5cbnZhciBFdmFsdWF0aW9uUmVzdWx0ID0gZnVuY3Rpb24gRXZhbHVhdGlvblJlc3VsdChvdXRwdXQpIHtcbiAgdGhpcy52YWx1ZSA9IG91dHB1dDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZXhwb3J0cy5FdmFsdWF0aW9uUmVzdWx0ID0gRXZhbHVhdGlvblJlc3VsdDtcblxucmVuZGVyLmRlZmluZShFdmFsdWF0aW9uUmVzdWx0LCBmdW5jdGlvbihyZXN1bHQpIHtcbiAgdmFyIG91dHB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgdmFyIHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpO1xuICB2aWV3LmlubmVySFRNTCA9ICgob3V0cHV0IHx8IDApW1wiZXJyb3JcIl0pIHx8IChcIlwiICsgKF9fcHJpbnRSZWFkX18gP1xuICAgIFwiXCIgKyBcIjxoMT5SZWFkPC9oMT5cIiArIFwiPGRpdj5cIiArIChpbnNwZWN0KChvdXRwdXQgfHwgMClbXCJmb3Jtc1wiXSkpICsgXCI8L2Rpdj5cIiA6XG4gICAgXCJcIikgKyAoX19wcmludENvbXBpbGVkX18gP1xuICAgIFwiXCIgKyBcIjxoMz5Db21waWxlZCBKUzwvaDM+XCIgKyBcIjxkaXY+XCIgKyAoKG91dHB1dCB8fCAwKVtcImpzLWNvZGVcIl0pICsgXCI8L2Rpdj5cIiA6XG4gICAgXCJcIikgKyBcIjxoMz5FdmFsIHJlc3VsdDwvaDM+XCIgKyBcIjxkaXY+XCIgKyAoKG91dHB1dCB8fCAwKVtcInByaW50XCJdKSArIFwiPC9kaXY+XCIpO1xuICByZXR1cm4gdmlldztcbn0pO1xuXG52YXIgc2VuZCA9IGZ1bmN0aW9uIHNlbmQocGFja2V0KSB7XG4gIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gIGV2ZW50LmluaXRDdXN0b21FdmVudChcImNsaWVudFwiLCBmYWxzZSwgdHJ1ZSwgcGFja2V0KTtcbiAgcmV0dXJuIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5leHBvcnRzLnNlbmQgPSBzZW5kO1xuXG52YXIgc3RhcnRIb3N0ID0gZnVuY3Rpb24gc3RhcnRIb3N0KCkge1xuICByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzZXJ2ZXJcIiwgaGFuZGxlLCBmYWxzZSk7XG59O1xuZXhwb3J0cy5zdGFydEhvc3QgPSBzdGFydEhvc3Q7XG5cbnZhciBoYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUocGFja2V0KSB7XG4gIHZhciBhZGRyZXNzID0gKCgocGFja2V0IHx8IDApW1wiZGV0YWlsXCJdKSB8fCAwKVtcInRvXCJdO1xuICB2YXIgaW5wdXQgPSAoKChwYWNrZXQgfHwgMClbXCJkZXRhaWxcIl0pIHx8IDApW1wic291cmNlXCJdO1xuICB2YXIgb3V0cHV0ID0gZXZhbHVhdGUoaW5wdXQpO1xuICB2YXIgcmVzdWx0ID0gbmV3IEV2YWx1YXRpb25SZXN1bHQob3V0cHV0KTtcbiAgKF9fb3V0X18gfHwgMClbYWRkcmVzc10gPSByZXN1bHQ7XG4gIHJldHVybiBzZW5kKHtcbiAgICBcImZyb21cIjogYWRkcmVzcyxcbiAgICBcIm1lc3NhZ2VcIjogcmVzdWx0XG4gIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlID0gaGFuZGxlO1xuXG52YXIgZXZhbHVhdGUgPSBmdW5jdGlvbiBldmFsdWF0ZShpbnB1dCkge1xuICByZXR1cm4gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZm9ybXMgPSByZWFkXyhpbnB1dCk7XG4gICAgICB2YXIganNDb2RlID0gY29tcGlsZV8oZm9ybXMpO1xuICAgICAgdmFyIHByZWZpeENvZGUgPSBcInZhclwiID09PSBzdWJzKGpzQ29kZSwgMCwgMykgP1xuICAgICAgICBcIlwiIDpcbiAgICAgICAgXCJfID0gXCI7XG4gICAgICB2YXIganNOb3JtYWxpemVkID0gXCJcIiArIFwidHJ5IHsgXCIgKyBwcmVmaXhDb2RlICsganNDb2RlICsgXCIgfSBjYXRjaChlKSB7IGUgfVwiO1xuICAgICAgdmFyIHJlc3VsdCA9IHdpbmRvdy5ldmFsKGpzTm9ybWFsaXplZCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBcImlucHV0XCI6IGlucHV0LFxuICAgICAgICBcImZvcm1zXCI6IGZvcm1zLFxuICAgICAgICBcImpzLWNvZGVcIjoganNDb2RlLFxuICAgICAgICBcInJlc3VsdFwiOiByZXN1bHQsXG4gICAgICAgIFwicHJpbnRcIjogcHJTdHIocmVzdWx0KVxuICAgICAgfTtcbiAgICB9KSgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBcImlucHV0XCI6IGlucHV0LFxuICAgICAgXCJlcnJvclwiOiBlcnJvclxuICAgIH07XG4gIH19KSgpO1xufTtcbmV4cG9ydHMuZXZhbHVhdGUgPSBldmFsdWF0ZSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoZXYuc291cmNlID09PSB3aW5kb3cgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIiwiKGZ1bmN0aW9uKHByb2Nlc3Mpe2lmICghcHJvY2Vzcy5FdmVudEVtaXR0ZXIpIHByb2Nlc3MuRXZlbnRFbWl0dGVyID0gZnVuY3Rpb24gKCkge307XG5cbnZhciBFdmVudEVtaXR0ZXIgPSBleHBvcnRzLkV2ZW50RW1pdHRlciA9IHByb2Nlc3MuRXZlbnRFbWl0dGVyO1xudmFyIGlzQXJyYXkgPSB0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gQXJyYXkuaXNBcnJheVxuICAgIDogZnVuY3Rpb24gKHhzKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgfVxuO1xuZnVuY3Rpb24gaW5kZXhPZiAoeHMsIHgpIHtcbiAgICBpZiAoeHMuaW5kZXhPZikgcmV0dXJuIHhzLmluZGV4T2YoeCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoeCA9PT0geHNbaV0pIHJldHVybiBpO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW5cbi8vIDEwIGxpc3RlbmVycyBhcmUgYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaFxuLy8gaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG4vL1xuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCF0aGlzLl9ldmVudHMpIHRoaXMuX2V2ZW50cyA9IHt9O1xuICB0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzID0gbjtcbn07XG5cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNBcnJheSh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSlcbiAgICB7XG4gICAgICBpZiAoYXJndW1lbnRzWzFdIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgYXJndW1lbnRzWzFdOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5jYXVnaHQsIHVuc3BlY2lmaWVkICdlcnJvcicgZXZlbnQuXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdGhpcy5fZXZlbnRzKSByZXR1cm4gZmFsc2U7XG4gIHZhciBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBpZiAoIWhhbmRsZXIpIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoaXNBcnJheShoYW5kbGVyKSkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG4vLyBFdmVudEVtaXR0ZXIgaXMgZGVmaW5lZCBpbiBzcmMvbm9kZV9ldmVudHMuY2Ncbi8vIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCgpIGlzIGFsc28gZGVmaW5lZCB0aGVyZS5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGxpc3RlbmVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdhZGRMaXN0ZW5lciBvbmx5IHRha2VzIGluc3RhbmNlcyBvZiBGdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT0gXCJuZXdMaXN0ZW5lcnNcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJzXCIuXG4gIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuX2V2ZW50c1t0eXBlXSkpIHtcblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgICB2YXIgbTtcbiAgICAgIGlmICh0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbSA9IHRoaXMuX2V2ZW50cy5tYXhMaXN0ZW5lcnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtID0gZGVmYXVsdE1heExpc3RlbmVycztcbiAgICAgIH1cblxuICAgICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYub24odHlwZSwgZnVuY3Rpb24gZygpIHtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICgnZnVuY3Rpb24nICE9PSB0eXBlb2YgbGlzdGVuZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlbW92ZUxpc3RlbmVyIG9ubHkgdGFrZXMgaW5zdGFuY2VzIG9mIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBkb2VzIG5vdCB1c2UgbGlzdGVuZXJzKCksIHNvIG5vIHNpZGUgZWZmZWN0IG9mIGNyZWF0aW5nIF9ldmVudHNbdHlwZV1cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSkgcmV0dXJuIHRoaXM7XG5cbiAgdmFyIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzQXJyYXkobGlzdCkpIHtcbiAgICB2YXIgaSA9IGluZGV4T2YobGlzdCwgbGlzdGVuZXIpO1xuICAgIGlmIChpIDwgMCkgcmV0dXJuIHRoaXM7XG4gICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgaWYgKGxpc3QubGVuZ3RoID09IDApXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICB9IGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSA9PT0gbGlzdGVuZXIpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGRvZXMgbm90IHVzZSBsaXN0ZW5lcnMoKSwgc28gbm8gc2lkZSBlZmZlY3Qgb2YgY3JlYXRpbmcgX2V2ZW50c1t0eXBlXVxuICBpZiAodHlwZSAmJiB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzW3R5cGVdKSB0aGlzLl9ldmVudHNbdHlwZV0gPSBudWxsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAoIXRoaXMuX2V2ZW50cykgdGhpcy5fZXZlbnRzID0ge307XG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKSB0aGlzLl9ldmVudHNbdHlwZV0gPSBbXTtcbiAgaWYgKCFpc0FycmF5KHRoaXMuX2V2ZW50c1t0eXBlXSkpIHtcbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgfVxuICByZXR1cm4gdGhpcy5fZXZlbnRzW3R5cGVdO1xufTtcblxufSkocmVxdWlyZShcIl9fYnJvd3NlcmlmeV9wcm9jZXNzXCIpKSIsInZhciBfbnNfID0gXCJ3aXNwLmJhY2tlbmQuamF2YXNjcmlwdC53cml0ZXJcIjtcbm1vZHVsZS5uYW1lc3BhY2UgPSBfbnNfO1xubW9kdWxlLmRlc2NyaXB0aW9uID0gXCJDb21waWxlciBiYWNrZW5kIGZvciBmb3Igd3JpdGluZyBKUyBvdXRwdXRcIjtcbnZhciBuYW1lID0gKHJlcXVpcmUoXCIuLy4uLy4uL2FzdFwiKSkubmFtZTtcbnZhciBuYW1lc3BhY2UgPSAocmVxdWlyZShcIi4vLi4vLi4vYXN0XCIpKS5uYW1lc3BhY2U7XG52YXIgc3ltYm9sID0gKHJlcXVpcmUoXCIuLy4uLy4uL2FzdFwiKSkuc3ltYm9sO1xudmFyIGlzU3ltYm9sID0gKHJlcXVpcmUoXCIuLy4uLy4uL2FzdFwiKSkuaXNTeW1ib2w7XG52YXIgaXNLZXl3b3JkID0gKHJlcXVpcmUoXCIuLy4uLy4uL2FzdFwiKSkuaXNLZXl3b3JkO1xudmFyIGxpc3QgPSAocmVxdWlyZShcIi4vLi4vLi4vc2VxdWVuY2VcIikpLmxpc3Q7XG52YXIgZmlyc3QgPSAocmVxdWlyZShcIi4vLi4vLi4vc2VxdWVuY2VcIikpLmZpcnN0O1xudmFyIHJlc3QgPSAocmVxdWlyZShcIi4vLi4vLi4vc2VxdWVuY2VcIikpLnJlc3Q7XG52YXIgaXNMaXN0ID0gKHJlcXVpcmUoXCIuLy4uLy4uL3NlcXVlbmNlXCIpKS5pc0xpc3Q7XG52YXIgdmVjID0gKHJlcXVpcmUoXCIuLy4uLy4uL3NlcXVlbmNlXCIpKS52ZWM7XG52YXIgbWFwID0gKHJlcXVpcmUoXCIuLy4uLy4uL3NlcXVlbmNlXCIpKS5tYXA7XG52YXIgY291bnQgPSAocmVxdWlyZShcIi4vLi4vLi4vc2VxdWVuY2VcIikpLmNvdW50O1xudmFyIGxhc3QgPSAocmVxdWlyZShcIi4vLi4vLi4vc2VxdWVuY2VcIikpLmxhc3Q7XG52YXIgcmVkdWNlID0gKHJlcXVpcmUoXCIuLy4uLy4uL3NlcXVlbmNlXCIpKS5yZWR1Y2U7XG52YXIgaXNFbXB0eSA9IChyZXF1aXJlKFwiLi8uLi8uLi9zZXF1ZW5jZVwiKSkuaXNFbXB0eTtcbnZhciBpc1RydWUgPSAocmVxdWlyZShcIi4vLi4vLi4vcnVudGltZVwiKSkuaXNUcnVlO1xudmFyIGlzTmlsID0gKHJlcXVpcmUoXCIuLy4uLy4uL3J1bnRpbWVcIikpLmlzTmlsO1xudmFyIGlzU3RyaW5nID0gKHJlcXVpcmUoXCIuLy4uLy4uL3J1bnRpbWVcIikpLmlzU3RyaW5nO1xudmFyIGlzTnVtYmVyID0gKHJlcXVpcmUoXCIuLy4uLy4uL3J1bnRpbWVcIikpLmlzTnVtYmVyO1xudmFyIGlzVmVjdG9yID0gKHJlcXVpcmUoXCIuLy4uLy4uL3J1bnRpbWVcIikpLmlzVmVjdG9yO1xudmFyIGlzRGljdGlvbmFyeSA9IChyZXF1aXJlKFwiLi8uLi8uLi9ydW50aW1lXCIpKS5pc0RpY3Rpb25hcnk7XG52YXIgaXNCb29sZWFuID0gKHJlcXVpcmUoXCIuLy4uLy4uL3J1bnRpbWVcIikpLmlzQm9vbGVhbjtcbnZhciBpc1JlUGF0dGVybiA9IChyZXF1aXJlKFwiLi8uLi8uLi9ydW50aW1lXCIpKS5pc1JlUGF0dGVybjtcbnZhciByZUZpbmQgPSAocmVxdWlyZShcIi4vLi4vLi4vcnVudGltZVwiKSkucmVGaW5kO1xudmFyIGRlYyA9IChyZXF1aXJlKFwiLi8uLi8uLi9ydW50aW1lXCIpKS5kZWM7XG52YXIgc3VicyA9IChyZXF1aXJlKFwiLi8uLi8uLi9ydW50aW1lXCIpKS5zdWJzO1xudmFyIHJlcGxhY2UgPSAocmVxdWlyZShcIi4vLi4vLi4vc3RyaW5nXCIpKS5yZXBsYWNlO1xudmFyIGpvaW4gPSAocmVxdWlyZShcIi4vLi4vLi4vc3RyaW5nXCIpKS5qb2luO1xudmFyIHNwbGl0ID0gKHJlcXVpcmUoXCIuLy4uLy4uL3N0cmluZ1wiKSkuc3BsaXQ7XG52YXIgdXBwZXJDYXNlID0gKHJlcXVpcmUoXCIuLy4uLy4uL3N0cmluZ1wiKSkudXBwZXJDYXNlOztcblxudmFyIHdyaXRlUmVmZXJlbmNlID0gZnVuY3Rpb24gd3JpdGVSZWZlcmVuY2UoZm9ybSkge1xuICBcIlRyYW5zbGF0ZXMgcmVmZXJlbmNlcyBmcm9tIGNsb2p1cmUgY29udmVudGlvbiB0byBKUzpcXG5cXG4gICoqbWFjcm9zKiogICAgICBfX21hY3Jvc19fXFxuICBsaXN0LT52ZWN0b3IgICAgbGlzdFRvVmVjdG9yXFxuICBzZXQhICAgICAgICAgICAgc2V0XFxuICBmb29fYmFyICAgICAgICAgZm9vX2JhclxcbiAgbnVtYmVyPyAgICAgICAgIGlzTnVtYmVyXFxuICBjcmVhdGUtc2VydmVyICAgY3JlYXRlU2VydmVyXCI7XG4gIHJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkID0gbmFtZShmb3JtKTtcbiAgICBpZCA9IGlkID09PSBcIipcIiA/XG4gICAgICBcIm11bHRpcGx5XCIgOlxuICAgIGlkID09PSBcIi9cIiA/XG4gICAgICBcImRpdmlkZVwiIDpcbiAgICBpZCA9PT0gXCIrXCIgP1xuICAgICAgXCJzdW1cIiA6XG4gICAgaWQgPT09IFwiLVwiID9cbiAgICAgIFwic3VidHJhY3RcIiA6XG4gICAgaWQgPT09IFwiPVwiID9cbiAgICAgIFwiZXF1YWw/XCIgOlxuICAgIGlkID09PSBcIj09XCIgP1xuICAgICAgXCJzdHJpY3QtZXF1YWw/XCIgOlxuICAgIGlkID09PSBcIjw9XCIgP1xuICAgICAgXCJub3QtZ3JlYXRlci10aGFuXCIgOlxuICAgIGlkID09PSBcIj49XCIgP1xuICAgICAgXCJub3QtbGVzcy10aGFuXCIgOlxuICAgIGlkID09PSBcIj5cIiA/XG4gICAgICBcImdyZWF0ZXItdGhhblwiIDpcbiAgICBpZCA9PT0gXCI8XCIgP1xuICAgICAgXCJsZXNzLXRoYW5cIiA6XG4gICAgXCJlbHNlXCIgP1xuICAgICAgaWQgOlxuICAgICAgdm9pZCgwKTtcbiAgICBpZCA9IGpvaW4oXCJfXCIsIHNwbGl0KGlkLCBcIipcIikpO1xuICAgIGlkID0gam9pbihcIi10by1cIiwgc3BsaXQoaWQsIFwiLT5cIikpO1xuICAgIGlkID0gam9pbihzcGxpdChpZCwgXCIhXCIpKTtcbiAgICBpZCA9IGpvaW4oXCIkXCIsIHNwbGl0KGlkLCBcIiVcIikpO1xuICAgIGlkID0gam9pbihcIi1wbHVzLVwiLCBzcGxpdChpZCwgXCIrXCIpKTtcbiAgICBpZCA9IGpvaW4oXCItYW5kLVwiLCBzcGxpdChpZCwgXCImXCIpKTtcbiAgICBpZCA9IGxhc3QoaWQpID09PSBcIj9cIiA/XG4gICAgICBcIlwiICsgXCJpcy1cIiArIChzdWJzKGlkLCAwLCBkZWMoY291bnQoaWQpKSkpIDpcbiAgICAgIGlkO1xuICAgIGlkID0gcmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwga2V5KSB7XG4gICAgICByZXR1cm4gXCJcIiArIHJlc3VsdCArICgoIShpc0VtcHR5KHJlc3VsdCkpKSAmJiAoIShpc0VtcHR5KGtleSkpKSA/XG4gICAgICAgIFwiXCIgKyAodXBwZXJDYXNlKChrZXkgfHwgMClbMF0pKSArIChzdWJzKGtleSwgMSkpIDpcbiAgICAgICAga2V5KTtcbiAgICB9LCBcIlwiLCBzcGxpdChpZCwgXCItXCIpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH0pKCk7XG59O1xuZXhwb3J0cy53cml0ZVJlZmVyZW5jZSA9IHdyaXRlUmVmZXJlbmNlO1xuXG52YXIgd3JpdGVLZXl3b3JkUmVmZXJlbmNlID0gZnVuY3Rpb24gd3JpdGVLZXl3b3JkUmVmZXJlbmNlKGZvcm0pIHtcbiAgcmV0dXJuIFwiXCIgKyBcIlxcXCJcIiArIChuYW1lKGZvcm0pKSArIFwiXFxcIlwiO1xufTtcbmV4cG9ydHMud3JpdGVLZXl3b3JkUmVmZXJlbmNlID0gd3JpdGVLZXl3b3JkUmVmZXJlbmNlO1xuXG52YXIgd3JpdGVLZXl3b3JkID0gZnVuY3Rpb24gd3JpdGVLZXl3b3JkKGZvcm0pIHtcbiAgcmV0dXJuIFwiXCIgKyBcIlxcXCJcIiArIFwi6p6JXCIgKyAobmFtZShmb3JtKSkgKyBcIlxcXCJcIjtcbn07XG5leHBvcnRzLndyaXRlS2V5d29yZCA9IHdyaXRlS2V5d29yZDtcblxudmFyIHdyaXRlU3ltYm9sID0gZnVuY3Rpb24gd3JpdGVTeW1ib2woZm9ybSkge1xuICByZXR1cm4gd3JpdGUobGlzdChzeW1ib2wodm9pZCgwKSwgXCJzeW1ib2xcIiksIG5hbWVzcGFjZShmb3JtKSwgbmFtZShmb3JtKSkpO1xufTtcbmV4cG9ydHMud3JpdGVTeW1ib2wgPSB3cml0ZVN5bWJvbDtcblxudmFyIHdyaXRlTmlsID0gZnVuY3Rpb24gd3JpdGVOaWwoZm9ybSkge1xuICByZXR1cm4gXCJ2b2lkKDApXCI7XG59O1xuZXhwb3J0cy53cml0ZU5pbCA9IHdyaXRlTmlsO1xuXG52YXIgd3JpdGVOdW1iZXIgPSBmdW5jdGlvbiB3cml0ZU51bWJlcihmb3JtKSB7XG4gIHJldHVybiBmb3JtO1xufTtcbmV4cG9ydHMud3JpdGVOdW1iZXIgPSB3cml0ZU51bWJlcjtcblxudmFyIHdyaXRlQm9vbGVhbiA9IGZ1bmN0aW9uIHdyaXRlQm9vbGVhbihmb3JtKSB7XG4gIHJldHVybiBpc1RydWUoZm9ybSkgP1xuICAgIFwidHJ1ZVwiIDpcbiAgICBcImZhbHNlXCI7XG59O1xuZXhwb3J0cy53cml0ZUJvb2xlYW4gPSB3cml0ZUJvb2xlYW47XG5cbnZhciB3cml0ZVN0cmluZyA9IGZ1bmN0aW9uIHdyaXRlU3RyaW5nKGZvcm0pIHtcbiAgZm9ybSA9IHJlcGxhY2UoZm9ybSwgUmVnRXhwKFwiXFxcXFxcXFxcIiwgXCJnXCIpLCBcIlxcXFxcXFxcXCIpO1xuICBmb3JtID0gcmVwbGFjZShmb3JtLCBSZWdFeHAoXCJcXG5cIiwgXCJnXCIpLCBcIlxcXFxuXCIpO1xuICBmb3JtID0gcmVwbGFjZShmb3JtLCBSZWdFeHAoXCJcXHJcIiwgXCJnXCIpLCBcIlxcXFxyXCIpO1xuICBmb3JtID0gcmVwbGFjZShmb3JtLCBSZWdFeHAoXCJcXHRcIiwgXCJnXCIpLCBcIlxcXFx0XCIpO1xuICBmb3JtID0gcmVwbGFjZShmb3JtLCBSZWdFeHAoXCJcXFwiXCIsIFwiZ1wiKSwgXCJcXFxcXFxcIlwiKTtcbiAgcmV0dXJuIFwiXCIgKyBcIlxcXCJcIiArIGZvcm0gKyBcIlxcXCJcIjtcbn07XG5leHBvcnRzLndyaXRlU3RyaW5nID0gd3JpdGVTdHJpbmc7XG5cbnZhciB3cml0ZVRlbXBsYXRlID0gZnVuY3Rpb24gd3JpdGVUZW1wbGF0ZSgpIHtcbiAgdmFyIGZvcm0gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmRlbnRQYXR0ZXJuID0gL1xcbiAqJC87XG4gICAgdmFyIGxpbmVCcmVha1BhdHRlciA9IFJlZ0V4cChcIlxcblwiLCBcImdcIik7XG4gICAgdmFyIGdldEluZGVudGF0aW9uID0gZnVuY3Rpb24oY29kZSkge1xuICAgICAgcmV0dXJuIChyZUZpbmQoaW5kZW50UGF0dGVybiwgY29kZSkpIHx8IFwiXFxuXCI7XG4gICAgfTtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIGxvb3AoY29kZSwgcGFydHMsIHZhbHVlcykge1xuICAgICAgdmFyIHJlY3VyID0gbG9vcDtcbiAgICAgIHdoaWxlIChyZWN1ciA9PT0gbG9vcCkge1xuICAgICAgICByZWN1ciA9IGNvdW50KHBhcnRzKSA+IDEgP1xuICAgICAgICAoY29kZSA9IFwiXCIgKyBjb2RlICsgKGZpcnN0KHBhcnRzKSkgKyAocmVwbGFjZShcIlwiICsgXCJcIiArIChmaXJzdCh2YWx1ZXMpKSwgbGluZUJyZWFrUGF0dGVyLCBnZXRJbmRlbnRhdGlvbihmaXJzdChwYXJ0cykpKSksIHBhcnRzID0gcmVzdChwYXJ0cyksIHZhbHVlcyA9IHJlc3QodmFsdWVzKSwgbG9vcCkgOlxuICAgICAgICBcIlwiICsgY29kZSArIChmaXJzdChwYXJ0cykpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiByZWN1cjtcbiAgICB9KShcIlwiLCBzcGxpdChmaXJzdChmb3JtKSwgXCJ+e31cIiksIHJlc3QoZm9ybSkpO1xuICB9KSgpO1xufTtcbmV4cG9ydHMud3JpdGVUZW1wbGF0ZSA9IHdyaXRlVGVtcGxhdGU7XG5cbnZhciB3cml0ZUdyb3VwID0gZnVuY3Rpb24gd3JpdGVHcm91cCgpIHtcbiAgdmFyIGZvcm1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGpvaW4oXCIsIFwiLCBmb3Jtcyk7XG59O1xuZXhwb3J0cy53cml0ZUdyb3VwID0gd3JpdGVHcm91cDtcblxudmFyIHdyaXRlSW52b2tlID0gZnVuY3Rpb24gd3JpdGVJbnZva2UoY2FsbGVlKSB7XG4gIHZhciBwYXJhbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gd3JpdGVUZW1wbGF0ZShcIn57fSh+e30pXCIsIGNhbGxlZSwgd3JpdGVHcm91cC5hcHBseSh3cml0ZUdyb3VwLCBwYXJhbXMpKTtcbn07XG5leHBvcnRzLndyaXRlSW52b2tlID0gd3JpdGVJbnZva2U7XG5cbnZhciB3cml0ZUVycm9yID0gZnVuY3Rpb24gd3JpdGVFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uKCkgeyB0aHJvdyBFcnJvcihtZXNzYWdlKTsgfSkoKTtcbiAgfTtcbn07XG5leHBvcnRzLndyaXRlRXJyb3IgPSB3cml0ZUVycm9yO1xuXG52YXIgd3JpdGVWZWN0b3IgPSB3cml0ZUVycm9yKFwiVmVjdG9ycyBhcmUgbm90IHN1cHBvcnRlZFwiKTtcbmV4cG9ydHMud3JpdGVWZWN0b3IgPSB3cml0ZVZlY3RvcjtcblxudmFyIHdyaXRlRGljdGlvbmFyeSA9IHdyaXRlRXJyb3IoXCJEaWN0aW9uYXJpZXMgYXJlIG5vdCBzdXBwb3J0ZWRcIik7XG5leHBvcnRzLndyaXRlRGljdGlvbmFyeSA9IHdyaXRlRGljdGlvbmFyeTtcblxudmFyIHdyaXRlUGF0dGVybiA9IHdyaXRlRXJyb3IoXCJSZWd1bGFyIGV4cHJlc3Npb25zIGFyZSBub3Qgc3VwcG9ydGVkXCIpO1xuZXhwb3J0cy53cml0ZVBhdHRlcm4gPSB3cml0ZVBhdHRlcm47XG5cbnZhciBjb21waWxlQ29tbWVudCA9IGZ1bmN0aW9uIGNvbXBpbGVDb21tZW50KGZvcm0pIHtcbiAgcmV0dXJuIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwiLy9+e31cXG5cIiwgZmlyc3QoZm9ybSkpKTtcbn07XG5leHBvcnRzLmNvbXBpbGVDb21tZW50ID0gY29tcGlsZUNvbW1lbnQ7XG5cbnZhciB3cml0ZURlZiA9IGZ1bmN0aW9uIHdyaXRlRGVmKGZvcm0pIHtcbiAgdmFyIGlkID0gZmlyc3QoZm9ybSk7XG4gIHZhciBpc0V4cG9ydCA9ICgoKChtZXRhKGZvcm0pKSB8fCB7fSkgfHwgMClbXCJ0b3BcIl0pICYmICghKCgoKG1ldGEoaWQpKSB8fCB7fSkgfHwgMClbXCJwcml2YXRlXCJdKSk7XG4gIHZhciBhdHRyaWJ1dGUgPSBzeW1ib2wobmFtZXNwYWNlKGlkKSwgXCJcIiArIFwiLVwiICsgKG5hbWUoaWQpKSk7XG4gIHJldHVybiBpc0V4cG9ydCA/XG4gICAgY29tcGlsZVRlbXBsYXRlKGxpc3QoXCJ2YXIgfnt9O1xcbn57fVwiLCBjb21waWxlKGNvbnMoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgZm9ybSkpLCBjb21waWxlKGxpc3Qoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgbGlzdChzeW1ib2wodm9pZCgwKSwgXCIuXCIpLCBzeW1ib2wodm9pZCgwKSwgXCJleHBvcnRzXCIpLCBhdHRyaWJ1dGUpLCBpZCkpKSkgOlxuICAgIGNvbXBpbGVUZW1wbGF0ZShsaXN0KFwidmFyIH57fVwiLCBjb21waWxlKGNvbnMoc3ltYm9sKHZvaWQoMCksIFwic2V0IVwiKSwgZm9ybSkpKSk7XG59O1xuZXhwb3J0cy53cml0ZURlZiA9IHdyaXRlRGVmO1xuXG52YXIgd3JpdGUgPSBmdW5jdGlvbiB3cml0ZShmb3JtKSB7XG4gIHJldHVybiBpc05pbChmb3JtKSA/XG4gICAgd3JpdGVOaWwoZm9ybSkgOlxuICBpc1N5bWJvbChmb3JtKSA/XG4gICAgd3JpdGVSZWZlcmVuY2UoZm9ybSkgOlxuICBpc0tleXdvcmQoZm9ybSkgP1xuICAgIHdyaXRlS2V5d29yZFJlZmVyZW5jZShmb3JtKSA6XG4gIGlzU3RyaW5nKGZvcm0pID9cbiAgICB3cml0ZVN0cmluZyhmb3JtKSA6XG4gIGlzTnVtYmVyKGZvcm0pID9cbiAgICB3cml0ZU51bWJlcihmb3JtKSA6XG4gIGlzQm9vbGVhbihmb3JtKSA/XG4gICAgd3JpdGVCb29sZWFuKGZvcm0pIDpcbiAgaXNSZVBhdHRlcm4oZm9ybSkgP1xuICAgIHdyaXRlUGF0dGVybihmb3JtKSA6XG4gIGlzVmVjdG9yKGZvcm0pID9cbiAgICB3cml0ZVZlY3Rvcihmb3JtKSA6XG4gIGlzRGljdGlvbmFyeShmb3JtKSA/XG4gICAgd3JpdGVEaWN0aW9uYXJ5KCkgOlxuICBpc0xpc3QoZm9ybSkgP1xuICAgIHdyaXRlSW52b2tlLmFwcGx5KHdyaXRlSW52b2tlLCBtYXAod3JpdGUsIHZlYyhmb3JtKSkpIDpcbiAgXCJlbHNlXCIgP1xuICAgIHdyaXRlRXJyb3IoXCJVbnN1cHBvcnRlZCBmb3JtXCIpIDpcbiAgICB2b2lkKDApO1xufTtcbmV4cG9ydHMud3JpdGUgPSB3cml0ZVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkaWZmID0gcmVxdWlyZShcImRpZmZwYXRjaGVyL2RpZmZcIilcbnZhciBwYXRjaCA9IHJlcXVpcmUoXCJkaWZmcGF0Y2hlci9wYXRjaFwiKVxudmFyIG91dHB1dCA9IHJlcXVpcmUoXCIuL291dHB1dFwiKVxudmFyIG1ha2VPdXRwdXQgPSBvdXRwdXQubWFrZU91dHB1dFxudmFyIHdyaXRlT3V0cHV0ID0gb3V0cHV0LndyaXRlXG5cblxudmFyIE91dCA9IFwib3V0QGludGVyYWN0aXZhdGVcIlxudmFyIEluID0gXCJpbkBpbnRlcmFjdGl2YXRlXCJcbnZhciBSZWNpZXZlciA9IFwicmVjZWl2ZXJAaW50ZXJhY3RpdmF0ZVwiXG5cbmZ1bmN0aW9uIG1ha2VPcHRpb25HZXR0ZXIobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3B0aW9uKGVkaXRvcikge1xuICAgIHJldHVybiBlZGl0b3IuZ2V0T3B0aW9uKG5hbWUpXG4gIH1cbn1cblxudmFyIGdldFJlbmRlclJhdGUgPSBtYWtlT3B0aW9uR2V0dGVyKFwiaW50ZXJhY3RpdmVTcGVlZFwiKVxudmFyIGdldFNlY3Rpb25TZXBhcmF0b3IgPSBtYWtlT3B0aW9uR2V0dGVyKFwiaW50ZXJhY3RpdmVTZXBhcmF0b3JcIilcblxuXG52YXIgc2xpY2VyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5mdW5jdGlvbiB0aHJvdHRsZShmLCBkZWxheSkge1xuICAvKipcbiAgQ3JlYXRlcyBmdW5jdGlvbiB0aGF0IGNhbGxzIHRocm90dGxlcyBjYWxscyB0byBnaXZlbiBgZmAgc3VjaCB0aGF0LFxuICBpdCdzIG9ubHkgY2FsbGVkIGlmIG5vIGZ1cnRoZXIgY2FsbHMgYXJlIG1hZGUgd2l0aCBpbiB0aGUgdGltZVxuICBmcmFtZSAoaW4gbWlsaXNlY29uZHMpIHJldHVybmVkIGJ5IGdpdmVuIGBkZWxheS5hcHBseSh0aGlzLCBhcmd1bWVudHMpYFxuICBmdW5jdGlvbi5cbiAgKiovXG4gIHZhciBpZCA9IDBcbiAgcmV0dXJuIGZ1bmN0aW9uIHRocm90dGxlZCgpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQsIHRocm90dGxlZClcbiAgICB2YXIgbXMgPSBkZWxheS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICBpZCA9IHNldFRpbWVvdXQuYXBwbHkodGhpcywgW2YsIG1zXS5jb25jYXQoc2xpY2VyLmNhbGwoYXJndW1lbnRzKSkpXG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZShlZGl0b3IpIHtcbiAgdmFyIHN0YXRlID0gZWRpdG9yW0luXVxuICB2YXIgaW5wdXQgPSBlZGl0b3IuZ2V0VmFsdWUoKVxuICB2YXIgc2VwYXJhdG9yID0gZ2V0U2VjdGlvblNlcGFyYXRvcihlZGl0b3IpXG4gIHZhciBzZWN0aW9ucyA9IGlucHV0LnNwbGl0KHNlcGFyYXRvcilcbiAgdmFyIGFjdGl2ZUxpbmUgPSBlZGl0b3IuZ2V0Q3Vyc29yKCkubGluZVxuXG4gIHNlY3Rpb25zLnBvcCgpIC8vIGxhc3Qgc2VjdGlvbiBkb2VzIG5vdCBoYXMgZXhlY3V0aW9uIG1hcmtlciBzbyBza2lwIGl0LlxuXG4gIHZhciBjaGFuZ2UgPSBPYmplY3Qua2V5cyhzZWN0aW9ucykucmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgaW5kZXgpIHtcbiAgICB2YXIgaW5wdXQgPSBzZWN0aW9uc1tpbmRleF1cbiAgICB2YXIgbGluZSA9IHJlc3VsdC5saW5lICsgaW5wdXQuc3BsaXQoXCJcXG5cIikubGVuZ3RoIC0gMVxuICAgIHJlc3VsdC5saW5lID0gbGluZVxuICAgIHZhciBkZWx0YSA9IHtpbnB1dDogaW5wdXQudHJpbSgpLCBsaW5lOiBsaW5lLCB2aXNpYmxlOiBhY3RpdmVMaW5lICE9PSBsaW5lfVxuICAgIHJlc3VsdC5zdGF0ZVtpbmRleF0gPSBzdGF0ZVtpbmRleF0gPyBwYXRjaChzdGF0ZVtpbmRleF0sIGRlbHRhKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHsgbGluZTogMCwgc3RhdGU6IHt9IH0pXG5cbiAgcmV0dXJuIGRpZmYoZWRpdG9yW0luXSwgY2hhbmdlLnN0YXRlKVxufVxuXG5cbmZ1bmN0aW9uIHNlbmQocGFja2V0KSB7XG4gIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIilcbiAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KFwic2VydmVyXCIsIGZhbHNlLCB0cnVlLCBwYWNrZXQpXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxufVxuXG5cbmZ1bmN0aW9uIHJlY2lldmUoZWRpdG9yLCBldmVudCkge1xuICB2YXIgcGFja2V0ID0gZXZlbnQuZGV0YWlsXG4gIHZhciBkZWx0YSA9IHt9XG4gIGRlbHRhW3BhY2tldC5mcm9tXSA9IHtwZW5kaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBwYWNrZXQubWVzc2FnZX1cbiAgd3JpdGUoZWRpdG9yLCBkZWx0YSlcbn1cblxuZnVuY3Rpb24gcHJpbnQoZWRpdG9yKSB7XG4gIGlmICghZWRpdG9yLmdldE9wdGlvbihcImludGVyYWN0aXZhdGVcIikpIHRocm93IGVkaXRvci5jb25zdHJ1Y3Rvci5QYXNzXG4gIGVkaXRvci5vcGVyYXRpb24oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnNvciA9IGVkaXRvci5nZXRDdXJzb3IoKVxuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKFwiXFxuLy8gPT5cXG5cIilcbiAgICBlZGl0b3Iuc2V0Q3Vyc29yKHsgbGluZTogY3Vyc29yLmxpbmUgKyAyLCBjaDogMCB9KVxuICB9KVxufVxuXG5cbmZ1bmN0aW9uIGdldE1hcmtlckZvcihlZGl0b3IsIHZpZXcpIHtcbiAgdmFyIG1hcmtlcnMgPSBlZGl0b3IuZ2V0QWxsTWFya3MoKVxuICB2YXIgY291bnQgPSBtYXJrZXJzLmxlbmd0aFxuICB3aGlsZSAoY291bnQpIHtcbiAgICBjb3VudCA9IGNvdW50IC0gMVxuICAgIHZhciBtYXJrZXIgPSBtYXJrZXJzW2NvdW50XVxuICAgIGlmIChtYXJrZXIucmVwbGFjZWRXaXRoID09PSB2aWV3KSByZXR1cm4gbWFya2VyXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuXG5mdW5jdGlvbiB3cml0ZShlZGl0b3IsIGNoYW5nZXMpIHtcbiAgdmFyIGRvYyA9IGVkaXRvci5nZXREb2MoKVxuICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uKF8sIGlkKSB7XG4gICAgaWYgKCFlZGl0b3JbT3V0XVtpZF0pIGVkaXRvcltPdXRdW2lkXSA9IG1ha2VPdXRwdXQoaWQpXG5cbiAgICB2YXIgb3V0cHV0ID0gZWRpdG9yW091dF1baWRdXG4gICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbaWRdXG4gICAgaWYgKGNoYW5nZSA9PT0gbnVsbCkgZWRpdG9yW091dF1baWRdID0gbnVsbFxuXG4gICAgd3JpdGVPdXRwdXQob3V0cHV0LCBlZGl0b3IsIGNoYW5nZSlcbiAgfSwgbnVsbClcbiAgZWRpdG9yW0luXSA9IHBhdGNoKGVkaXRvcltJbl0sIGNoYW5nZXMpXG59XG5cbmZ1bmN0aW9uIHBvc3QoY2hhbmdlcykge1xuICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5yZWR1Y2UoZnVuY3Rpb24oXywgaWQpIHtcbiAgICB2YXIgY2hhbmdlID0gY2hhbmdlc1tpZF1cbiAgICBpZiAoY2hhbmdlICYmIGNoYW5nZS5pbnB1dCkge1xuICAgICAgc2VuZCh7IHRvOiBpZCwgc291cmNlOiBjaGFuZ2UuaW5wdXQgfSlcbiAgICB9XG4gIH0sIG51bGwpXG59XG5cbi8vIEZ1bmN0aW9uIGZpbmRzIG1vZGlmaWVkIHNlY3Rpb25zIGFuZCBxdWV1ZXMgdXAgbWVzc2VnYXNlIHRvIGFuXG4vLyBldmFsIGhvc3QuIEluIGFkaXRpb24gaXQgYWxzbyByZW5kZXJzIG91dHB1dCB2aWV3cyAoaWYgdGhleVxuLy8gZG8gbm90IGV4aXN0IHlldCkgd2hlcmUgZXZhbCByZXN1bHRzIGFyZSB3cml0dGVuLlxudmFyIHJlbmRlck91dHB1dCA9IHRocm90dGxlKGZ1bmN0aW9uIHJlbmRlcihlZGl0b3IpIHtcbiAgdmFyIGRlbHRhID0gY2FsY3VsYXRlKGVkaXRvcilcbiAgdmFyIGNoYW5nZXMgPSBPYmplY3Qua2V5cyhkZWx0YSkucmVkdWNlKGZ1bmN0aW9uKGNoYW5nZXMsIGlkKSB7XG4gICAgdmFyIGNoYW5nZSA9IGRlbHRhW2lkXVxuICAgIC8vIE9ubHkgbWFyayBjaGFuZ2UgcGVuZGluZyBpZiB0aGVyZSBpcyBzb21lIGlucHV0IHRvIGJlIGV2YWxlZC5cbiAgICBpZiAoY2hhbmdlICYmIGNoYW5nZS5pbnB1dCkgY2hhbmdlLnBlbmRpbmcgPSB0cnVlXG4gICAgcmV0dXJuIGNoYW5nZXNcbiAgfSwgZGVsdGEpXG5cbiAgd3JpdGUoZWRpdG9yLCBjaGFuZ2VzKVxuICBwb3N0KGNoYW5nZXMpXG59LCBnZXRSZW5kZXJSYXRlKVxuXG52YXIgaGlkZU91dHB1dCA9IHRocm90dGxlKGZ1bmN0aW9uIHJlbmRlcihlZGl0b3IpIHtcbiAgdmFyIGxpbmUgPSBlZGl0b3IuZ2V0Q3Vyc29yKCkubGluZVxuICB2YXIgc3RhdGUgPSBlZGl0b3JbSW5dXG4gIHZhciBjaGFuZ2VzID0gT2JqZWN0LmtleXMoc3RhdGUpLnJlZHVjZShmdW5jdGlvbihkZWx0YSwgaWQpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZVtpZF1cbiAgICBpZiAodmFsdWUubGluZSA9PT0gbGluZSkgZGVsdGFbaWRdID0ge3Zpc2libGU6IGZhbHNlfVxuICAgIGVsc2UgaWYgKCF2YWx1ZS52aXNpYmxlKSBkZWx0YVtpZF0gPSB7dmlzaWJsZTogdHJ1ZSwgbGluZTogdmFsdWUubGluZX1cblxuICAgIHJldHVybiBkZWx0YVxuICB9LCBbXSlcblxuICBpZiAoY2hhbmdlcy5sZW5ndGgpIHdyaXRlKGVkaXRvciwgY2hhbmdlcylcbn0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gMjAwIH0pXG5cblxuZnVuY3Rpb24gdG9vZ2xlUGx1Z2luKGVkaXRvciwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgZWRpdG9yW1JlY2lldmVyXSA9IHJlY2lldmUuYmluZChyZWNpZXZlLCBlZGl0b3IpXG4gICAgZWRpdG9yW0luXSA9IHt9XG4gICAgZWRpdG9yW091dF0gPSB7fVxuICAgIGVkaXRvci5vbihcImNoYW5nZVwiLCByZW5kZXJPdXRwdXQpXG4gICAgZWRpdG9yLm9uKFwiY3Vyc29yQWN0aXZpdHlcIiwgaGlkZU91dHB1dClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWVudFwiLCBlZGl0b3JbUmVjaWV2ZXJdLCBmYWxzZSlcbiAgfSBlbHNlIHtcbiAgICBlZGl0b3Iub2ZmKFwiY2hhbmdlXCIsIHJlbmRlck91dHB1dClcbiAgICBlZGl0b3Iub2ZmKFwiY3Vyc29yQWN0aXZpdHlcIiwgaGlkZU91dHB1dClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWVudFwiLCBlZGl0b3JbUmVjaWV2ZXJdLCBmYWxzZSlcbiAgICBlZGl0b3JbUmVjaWV2ZXJdID0gbnVsbFxuICAgIGVkaXRvcltJbl0gPSBudWxsXG4gICAgZWRpdG9yW091dF0gPSBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbChDb2RlTWlycm9yKSB7XG4gIC8vIEZpeCBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBzbyB0aGF0IGl0IGNvdWxkIGJlIGFjY2Vzc2VkIGZyb20gdGhlXG4gIC8vIGluc3RhbmNlLlxuICBDb2RlTWlycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvZGVNaXJyb3I7XG4gIENvZGVNaXJyb3IuZGVmYXVsdHMuaW50ZXJhY3RpdmVTcGVlZCA9IDMwMFxuICBDb2RlTWlycm9yLmRlZmF1bHRzLmludGVyYWN0aXZlU2VwYXJhdG9yID0gL15cXC9cXC8gXFw9XFw+W15cXG5dKiQvbVxuICBDb2RlTWlycm9yLmtleU1hcC5tYWNEZWZhdWx0W1wiQ21kLUVudGVyXCJdID0gcHJpbnRcbiAgQ29kZU1pcnJvci5rZXlNYXAucGNEZWZhdWx0W1wiQ3RybC1FbnRlclwiXSA9IHByaW50XG5cbiAgQ29kZU1pcnJvci5kZWZpbmVPcHRpb24oXCJpbnRlcmFjdGl2YXRlXCIsIGZhbHNlLCB0b29nbGVQbHVnaW4pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zdGFsbFxuIiwidmFyIG1ha2VWaWV3ID0gcmVxdWlyZShcIi4vdmlld1wiKS5tYWtlVmlld1xudmFyIHJlbmRlciA9IHJlcXVpcmUoXCIuL3JlbmRlclwiKVxuXG5mdW5jdGlvbiBPdXRwdXQoaWQpIHtcbiAgdGhpcy5pZCA9IGlkXG59XG5cbmZ1bmN0aW9uIG1ha2VPdXRwdXQoaWQpIHtcbiAgcmV0dXJuIG5ldyBPdXRwdXQoaWQpXG59XG5cblxuZnVuY3Rpb24gY2xlYXIob3V0cHV0KSB7XG4gIG91dHB1dC5tYXJrZXIuY2xlYXIoKVxuICBvdXRwdXQud2lkZ2V0LmNsZWFyKClcbn1cblxuZnVuY3Rpb24gbWFyayhvdXRwdXQsIGVkaXRvciwgbGluZSkge1xuICBvdXRwdXQubWFya2VyID0gZWRpdG9yLm1hcmtUZXh0KHtsaW5lOiBsaW5lLCBjaDogMH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmU6IGxpbmV9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZUxlZnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmVSaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICBvdXRwdXQud2lkZ2V0ID0gZWRpdG9yLmFkZExpbmVXaWRnZXQobGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC52aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dJZkhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0hTY3JvbGw6dHJ1ZX0pXG59XG5cbmZ1bmN0aW9uIG1vdmUob3V0cHV0LCBlZGl0b3IsIGxpbmUpIHtcbiAgdmFyIHBvc2l0aW9uID0gb3V0cHV0Lm1hcmtlci5maW5kKClcbiAgaWYgKCFwb3NpdGlvbiB8fCBwb3NpdGlvbi5saW5lICE9PSBsaW5lKSB7XG4gICAgY2xlYXIob3V0cHV0KVxuICAgIG1hcmsob3V0cHV0LCBlZGl0b3IsIGxpbmUpXG4gIH1cbn1cblxuZnVuY3Rpb24gd3JpdGUob3V0cHV0LCBlZGl0b3IsIHN0YXRlKSB7XG4gIHZhciB2aWV3ID0gb3V0cHV0LnZpZXcgfHwgKG91dHB1dC52aWV3ID0gbWFrZVZpZXcoZWRpdG9yLCBvdXRwdXQuaWQpKVxuICBpZiAoc3RhdGUgPT09IG51bGwpIHJldHVybiBjbGVhcihvdXRwdXQpXG5cbiAgaWYgKHN0YXRlLnBlbmRpbmcpIG91dHB1dC52aWV3LnN0eWxlLm9wYWNpdHkgPSBcIjAuMlwiXG4gIGVsc2UgaWYgKHN0YXRlLnBlbmRpbmcgPT09IG51bGwpIG91dHB1dC52aWV3LnN0eWxlLm9wYWNpdHkgPSBcIlwiXG5cbiAgaWYgKHN0YXRlLnJlc3VsdCkge1xuICAgIHZhciBjb250ZW50ID0gcmVuZGVyKHN0YXRlLnJlc3VsdClcbiAgICB2aWV3LmJvZHkuaW5uZXJIVE1MID0gXCJcIlxuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgRWxlbWVudCkgdmlldy5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgZWxzZSB2aWV3LmJvZHkudGV4dENvbnRlbnQgPSBjb250ZW50XG4gIH1cblxuICBpZiAoc3RhdGUudmlzaWJsZSA9PT0gdHJ1ZSkgbWFyayhvdXRwdXQsIGVkaXRvciwgc3RhdGUubGluZSlcbiAgaWYgKHN0YXRlLnZpc2libGUgPT09IGZhbHNlKSBjbGVhcihvdXRwdXQpXG4gIGlmIChzdGF0ZS5saW5lKSBtb3ZlKG91dHB1dCwgZWRpdG9yLCBzdGF0ZS5saW5lKVxufVxuXG5leHBvcnRzLm1ha2VPdXRwdXQgPSBtYWtlT3V0cHV0XG5leHBvcnRzLndyaXRlID0gd3JpdGUiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1ldGhvZCA9IHJlcXVpcmUoXCJtZXRob2RcIilcbnZhciB1dGlsID0gcmVxdWlyZShcInV0aWxcIilcblxuXG4vLyBSZW5kZXIgZnVuY3Rpb24gdGFrZXMgYXJiaXRyYXJ5IGRhdGEgc3RydWN0dXJlIGFuZCByZXR1cm5zIHNvbWV0aGluZ1xuLy8gdGhhdCBjYW4gdmlzdWFsbHkgcmVwcmVzZW50IGl0LlxudmFyIHJlbmRlciA9IG1ldGhvZChcInJlbmRlckBpbnRlcmFjdGl2YXRlXCIpXG5cbnJlbmRlci5kZWZpbmUoZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHV0aWwuaW5zcGVjdCh2YWx1ZSlcbn0pXG5cbnJlbmRlci5kZWZpbmUoRXJyb3IsIGZ1bmN0aW9uKGVycm9yKSB7XG4gIHJldHVybiBTdHJpbmcoZXJyb3IpXG59KVxuXG5yZW5kZXIuZGVmaW5lKEVsZW1lbnQsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnRcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gcmVuZGVyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gcmViYXNlKHJlc3VsdCwgcGFyZW50LCBkZWx0YSkge1xuICBPYmplY3Qua2V5cyhwYXJlbnQpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgLy8gSWYgYHBhcmVudFtrZXldYCBpcyBgbnVsbGAgaXQgbWVhbnMgYXR0cmlidXRlIHdhcyBkZWxldGVkIGluIHByZXZpb3VzXG4gICAgLy8gdXBkYXRlLiBXZSBza2lwIHN1Y2ggcHJvcGVydGllcyBhcyB0aGVyZSBpcyBubyB1c2UgaW4ga2VlcGluZyB0aGVtXG4gICAgLy8gYXJvdW5kLiBJZiBgZGVsdGFba2V5XWAgaXMgYG51bGxgIHdlIHNraXAgdGhlc2UgcHJvcGVydGllcyB0b28gYXNcbiAgICAvLyB0aGUgaGF2ZSBiZWluZyBkZWxldGVkLlxuICAgIGlmICghKHBhcmVudFtrZXldID09IG51bGwgfHwgKGtleSBpbiBkZWx0YSAmJiBkZWx0YVtrZXldID09IG51bGwpKSlcbiAgICAgIHJlc3VsdFtrZXldID0gcGFyZW50W2tleV1cbiAgfSwgcmVzdWx0KVxuICBPYmplY3Qua2V5cyhkZWx0YSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoa2V5IGluIHBhcmVudCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBkZWx0YVtrZXldXG4gICAgICB2YXIgcHJldmlvdXMgPSBwYXJlbnRba2V5XVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHByZXZpb3VzKSBjdXJyZW50ID0gY3VycmVudFxuICAgICAgLy8gSWYgYGRlbHRhW2tleV1gIGlzIGBudWxsYCBpdCdzIGRlbGV0ZSBzbyB3ZSBqdXN0IHNraXAgcHJvcGVydHkuXG4gICAgICBlbHNlIGlmIChjdXJyZW50ID09IG51bGwpIGN1cnJlbnQgPSBjdXJyZW50XG4gICAgICAvLyBJZiB2YWx1ZSBpcyBvZiBwcmltaXRpdmUgdHlwZSAoZnVuY3Rpb24gb3IgcmVnZXhwcyBzaG91bGQgbm90XG4gICAgICAvLyBldmVuIGJlIGhlcmUpIHdlIGp1c3QgdXBkYXRlIGluIHBsYWNlLlxuICAgICAgZWxzZSBpZiAodHlwZW9mKGN1cnJlbnQpICE9PSBcIm9iamVjdFwiKSByZXN1bHRba2V5XSA9IGN1cnJlbnRcbiAgICAgIC8vIElmIHByZXZpb3VzIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGtleSB3YXMgcHJpbWl0aXZlXG4gICAgICAvLyBhbmQgaXQncyBtYXBwZWQgdG8gbm9uIHByaW1pdGl2ZVxuICAgICAgZWxzZSBpZiAodHlwZW9mKHByZXZpb3VzKSAhPT0gXCJvYmplY3RcIikgcmVzdWx0W2tleV0gPSBjdXJyZW50XG4gICAgICBlbHNlIHJlc3VsdFtrZXldID0gcmViYXNlKHt9LCBwcmV2aW91cywgY3VycmVudClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWx0YVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmViYXNlXG4iLCJ2YXIgVEVBUl9JTUFHRSA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFNQ0FZQUFBQkJWOHd1QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFHcEpSRUZVZU5waS9QLy9Qd00yd01TQUE3Q0FDRVlnZ0xLWmdmZ3ZFUDhCQ1lBd0t4QUxBakVQRUg4QjRnOU1VSTVJV2xxYXlldlhyOWVDYUNCZkdHU1NWbkp5c3UvWHIxK2ZBeDN5Lzl1M2J5OUJmSWIyOXZaQ21DQU1nQ1FaLytOd0wwN25VbEVDSU1BQU1yNDFzeHZ2Nm9FQUFBQUFTVVZPUks1Q1lJST1cIlxuXG52YXIgT1VUUFVUX1NUWUxFID0gW1xuICBcIm1hcmdpbi1sZWZ0OiAtMTBweFwiLFxuICBcInBhZGRpbmc6IDBcIixcbiAgXCJ3aGl0ZXNwYWNlOiBub3JtYWxcIixcbiAgXCJ0ZXh0LXNoYWRvdzogbm9uZVwiXG5dLmpvaW4oXCI7XCIpXG5cbnZhciBUT1BfU1RZTEUgPSBbXG4gIFwicG9zaXRpb246IHJlbGF0aXZlXCIsXG4gIFwiei1pbmRleDogMlwiLFxuICBcImhlaWdodDogMTJweFwiLFxuICBcImJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3hcIixcbiAgXCJiYWNrZ3JvdW5kOiB1cmwoJ1wiICsgVEVBUl9JTUFHRSArIFwiJykgdG9wIHJpZ2h0IHJlcGVhdC14XCJcbl0uam9pbihcIjtcIilcblxudmFyIEJPVFRPTV9TVFlMRSA9IFtcbiAgXCJwb3NpdGlvbjogcmVsYXRpdmVcIixcbiAgXCJ6LWluZGV4OiAyXCIsXG4gIFwiaGVpZ2h0OiAxMnB4XCIsXG4gIFwiYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveFwiLFxuICBcImJhY2tncm91bmQ6IHVybCgnXCIgKyBURUFSX0lNQUdFICsgXCInKSB0b3AgbGVmdCByZXBlYXQteFwiLFxuICBcIi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVwiLFxuICBcIi1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcIixcbiAgXCJ0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXCJcbl0uam9pbihcIjtcIilcblxudmFyIEJPWF9TVFlMRSA9IFtcbiAgXCItbW96LWJveC1zaGFkb3c6IDAgMCAzMHB4IC0ycHggIzAwMFwiLFxuICBcIi13ZWJraXQtYm94LXNoYWRvdzogMCAwIDMwcHggLTJweCAjMDAwXCIsXG4gIFwiYm94LXNoYWRvdzogMCAwIDMwcHggLTJweCAjMDAwXCIsXG4gIFwiY29sb3I6IGJsYWNrXCIsXG4gIFwiYmFja2dyb3VuZDogd2hpdGVcIixcbiAgXCJwb3NpdGlvbjogcmVsYXRpdmVcIixcbiAgXCJtYXJnaW46IDBweFwiLFxuICBcIndpZHRoOiAxMDAlXCJcbl0uam9pbihcIjtcIilcblxudmFyIEhFQURfU1RZTEUgPSBbXG4gIFwiZGlzcGxheTogdGFibGUtY2VsbFwiLFxuICBcInBhZGRpbmc6IDEwcHhcIixcbiAgXCJwYWRkaW5nLWxlZnQ6IDIwcHhcIixcbiAgXCJ3aGl0ZS1zcGFjZTogcHJlXCIsXG4gIFwiY29sb3I6IHdoaXRlXCIsXG4gIFwidGV4dC1zaGFkb3c6IDBweCAxcHggNXB4ICMwMDBcIixcbiAgXCJ2ZXJ0aWNhbC1hbGlnbjogdG9wXCJcbl0uam9pbihcIjtcIilcblxudmFyIEJPRFlfU1RZTEUgPSBbXG4gIFwiZGlzcGxheTogdGFibGUtY2VsbFwiLFxuICBcInBhZGRpbmc6IDEwcHhcIixcbiAgXCJ3aWR0aDogMTAwJVwiXG5dLmpvaW4oXCI7XCIpXG5cbnZhciBURU1QTEFURSA9IFtcbiAgXCI8ZGl2IHN0eWxlPVxcXCJcIiArIE9VVFBVVF9TVFlMRSArIFwiXFxcIj5cIixcbiAgXCIgIDxkaXYgY2xhc3M9J2NtLWxpdmUtb3V0cHV0LWJvcmRlci10b3AnIHN0eWxlPVxcXCJcIiArIFRPUF9TVFlMRSArIFwiXFxcIj4gPC9kaXY+XCIsXG4gIFwiICA8ZGl2IGNsYXNzPSdjbS1saXZlLW91dHB1dC1ib3gnIHN0eWxlPVxcXCJcIiArIEJPWF9TVFlMRSArIFwiXFxcIj5cIixcbiAgXCIgICAgPGgxIGNsYXNzPSdjbS1saXZlLW91dHB1dC1oZWFkJyBzdHlsZT1cXFwiXCIgKyBIRUFEX1NUWUxFICsgXCJcXFwiPk91dFswXTwvaDE+XCIsXG4gIFwiICAgIDxwcmUgY2xhc3M9J2NtLWxpdmUtb3V0cHV0LWJvZHknIHN0eWxlPVxcXCJcIiArIEJPRFlfU1RZTEUgKyBcIlxcXCI+PC9wcmU+XCIsXG4gIFwiICA8L2Rpdj5cIixcbiAgXCIgIDxkaXYgY2xhc3M9J2NtLWxpdmUtb3V0cHV0LWJvcmRlci1ib3R0b20nIHN0eWxlPVxcXCJcIiArIEJPVFRPTV9TVFlMRSArIFwiXFxcIj48L2Rpdj5cIixcbiAgXCI8L2Rpdj5cIlxuIF0uam9pbihcIlxcblwiKVxuXG5mdW5jdGlvbiBtYWtlVmlldyhlZGl0b3IsIGlkKSB7XG4gIHZhciBkb2N1bWVudCA9IGVkaXRvci5kaXNwbGF5LmlucHV0Lm93bmVyRG9jdW1lbnRcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBURU1QTEFURVxuICB2YXIgdmlldyA9IGNvbnRhaW5lci5maXJzdENoaWxkXG4gIHZpZXcuaWQgPSBcImludGVyYWN0aXZhdGUtb3V0LVwiICsgaWRcbiAgdmlldy5sYWJlbCA9IHZpZXcucXVlcnlTZWxlY3RvcihcIi5jbS1saXZlLW91dHB1dC1oZWFkXCIpXG4gIHZpZXcubGFiZWwudGV4dENvbnRlbnQgPSBcIk91dFtcIiArIGlkICsgXCJdID0gXCJcbiAgdmlldy5ib2R5ID0gdmlldy5xdWVyeVNlbGVjdG9yKFwiLmNtLWxpdmUtb3V0cHV0LWJvZHlcIilcbiAgcmV0dXJuIHZpZXdcbn1cblxuZXhwb3J0cy5tYWtlVmlldyA9IG1ha2VWaWV3IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbihvYmplY3QsIG5hbWUsIHByb3BlcnR5KSB7XG4gIG9iamVjdFtuYW1lXSA9IHByb3BlcnR5LnZhbHVlXG4gIHJldHVybiBvYmplY3Rcbn1cblxuLy8gU2hvcnRjdXQgZm9yIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBmb3IgZmFzdGVyIGFjY2Vzcy5cbnZhciB0eXBlZnkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbi8vIE1hcCB0byBmb3IganVtcGluZyBmcm9tIHR5cGVvZih2YWx1ZSkgdG8gYXNzb2NpYXRlZCB0eXBlIHByZWZpeCB1c2VkXG4vLyBhcyBhIGhhc2ggaW4gdGhlIG1hcCBvZiBidWlsdGluIGltcGxlbWVudGF0aW9ucy5cbnZhciB0eXBlcyA9IHsgXCJmdW5jdGlvblwiOiBcIk9iamVjdFwiLCBcIm9iamVjdFwiOiBcIk9iamVjdFwiIH1cblxuLy8gQXJyYXkgaXMgdXNlZCB0byBzYXZlIG1ldGhvZCBpbXBsZW1lbnRhdGlvbnMgZm9yIHRoZSBob3N0IG9iamVjdHMgaW4gb3JkZXJcbi8vIHRvIGF2b2lkIGV4dGVuZGluZyB0aGVtIHdpdGggbm9uLXByaW1pdGl2ZSB2YWx1ZXMgdGhhdCBjb3VsZCBjYXVzZSBsZWFrcy5cbnZhciBob3N0ID0gW11cbi8vIEhhc2ggbWFwIGlzIHVzZWQgdG8gc2F2ZSBtZXRob2QgaW1wbGVtZW50YXRpb25zIGZvciBidWlsdGluIHR5cGVzIGluIG9yZGVyXG4vLyB0byBhdm9pZCBleHRlbmRpbmcgdGhlaXIgcHJvdG90eXBlcy4gVGhpcyBhbHNvIGFsbG93cyB0byBzaGFyZSBtZXRob2Rcbi8vIGltcGxlbWVudGF0aW9ucyBmb3IgdHlwZXMgYWNyb3NzIGRpZmYgY29udGV4dHMgLyBmcmFtZXMgLyBjb21wYXJ0bWVudHMuXG52YXIgYnVpbHRpbiA9IHt9XG5cbmZ1bmN0aW9uIFByaW1pdGl2ZSgpIHt9XG5mdW5jdGlvbiBPYmplY3RUeXBlKCkge31cbk9iamVjdFR5cGUucHJvdG90eXBlID0gbmV3IFByaW1pdGl2ZSgpXG5mdW5jdGlvbiBFcnJvclR5cGUoKSB7fVxuRXJyb3JUeXBlLnByb3RvdHlwZSA9IG5ldyBPYmplY3RUeXBlKClcblxudmFyIERlZmF1bHQgPSBidWlsdGluLkRlZmF1bHQgPSBQcmltaXRpdmUucHJvdG90eXBlXG52YXIgTnVsbCA9IGJ1aWx0aW4uTnVsbCA9IG5ldyBQcmltaXRpdmUoKVxudmFyIFZvaWQgPSBidWlsdGluLlZvaWQgPSBuZXcgUHJpbWl0aXZlKClcbmJ1aWx0aW4uU3RyaW5nID0gbmV3IFByaW1pdGl2ZSgpXG5idWlsdGluLk51bWJlciA9IG5ldyBQcmltaXRpdmUoKVxuYnVpbHRpbi5Cb29sZWFuID0gbmV3IFByaW1pdGl2ZSgpXG5cbmJ1aWx0aW4uT2JqZWN0ID0gT2JqZWN0VHlwZS5wcm90b3R5cGVcbmJ1aWx0aW4uRXJyb3IgPSBFcnJvclR5cGUucHJvdG90eXBlXG5cbmJ1aWx0aW4uRXZhbEVycm9yID0gbmV3IEVycm9yVHlwZSgpXG5idWlsdGluLkludGVybmFsRXJyb3IgPSBuZXcgRXJyb3JUeXBlKClcbmJ1aWx0aW4uUmFuZ2VFcnJvciA9IG5ldyBFcnJvclR5cGUoKVxuYnVpbHRpbi5SZWZlcmVuY2VFcnJvciA9IG5ldyBFcnJvclR5cGUoKVxuYnVpbHRpbi5TdG9wSXRlcmF0aW9uID0gbmV3IEVycm9yVHlwZSgpXG5idWlsdGluLlN5bnRheEVycm9yID0gbmV3IEVycm9yVHlwZSgpXG5idWlsdGluLlR5cGVFcnJvciA9IG5ldyBFcnJvclR5cGUoKVxuYnVpbHRpbi5VUklFcnJvciA9IG5ldyBFcnJvclR5cGUoKVxuXG5cbmZ1bmN0aW9uIE1ldGhvZChpZCkge1xuICAvKipcbiAgUHJpdmF0ZSBNZXRob2QgaXMgYSBjYWxsYWJsZSBwcml2YXRlIG5hbWUgdGhhdCBkaXNwYXRjaGVzIG9uIHRoZSBmaXJzdFxuICBhcmd1bWVudHMgc2FtZSBuYW1lZCBNZXRob2Q6XG5cbiAgICAgIG1ldGhvZChvYmplY3QsIC4uLnJlc3QpID0+IG9iamVjdFttZXRob2RdKC4uLnJlc3QpXG5cbiAgSXQgaXMgc3VwcG9zZWQgdG8gYmUgZ2l2ZW4gKip1bmlxdWUqKiBgaWRgIHByZWZlcmFibHkgaW4gYFwianVtcEBwYWNrYWdlXCJgXG4gIGxpa2UgZm9ybSBzbyBpdCB3b24ndCBjb2xsaWRlIHdpdGggYGlkJ3NgIG90aGVyIHVzZXJzIGNyZWF0ZS4gSWYgbm8gYXJndW1lbnRcbiAgaXMgcGFzc2VkIHVuaXF1ZSBpZCBpcyBnZW5lcmF0ZWQsIGJ1dCBpdCdzIHByb3ZlZCB0byBiZSBwcm9ibGVtYXRpYyB3aXRoXG4gIG5wbSB3aGVyZSBpdCdzIGVhc3kgdG8gZW5kIHVwIHdpdGggYSBjb3BpZXMgb2Ygc2FtZSBtb2R1bGUgd2hlcmUgZWFjaCBjb3B5XG4gIHdpbGwgaGF2ZSBhIGRpZmZlcmVudCBuYW1lLlxuXG4gICMjIEV4YW1wbGVcblxuICAgICAgdmFyIGZvbyA9IE1ldGhvZChcImZvb0Bhd2Vzb21lbmVzc1wiKVxuXG4gICAgICAvLyBJbXBsZW1lbnRhdGlvbiBmb3IgYW55IHR5cGVzXG4gICAgICBmb28uZGVmaW5lKGZ1bmN0aW9uKHZhbHVlLCBhcmcxLCBhcmcyKSB7XG4gICAgICAgIC8vIC4uLlxuICAgICAgfSlcblxuICAgICAgLy8gSW1wbGVtZW50YXRpb24gZm9yIGEgc3BlY2lmaWMgdHlwZVxuICAgICAgZm9vLmRlZmluZShCYXJUeXBlLCBmdW5jdGlvbihiYXIsIGFyZzEsIGFyZzIpIHtcbiAgICAgICAgLy8gLi4uXG4gICAgICB9KVxuICAqKi9cblxuICAvLyBDcmVhdGUgYW4gaW50ZXJuYWwgdW5pcXVlIG5hbWUgaWYgb25lIGlzIG5vdCBwcm92aWRlZCwgYWxzbyBwcmVmaXggaXRcbiAgLy8gdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggcmVndWxhciBtZXRob2QgbmFtZXMuXG4gIHZhciBuYW1lID0gXCLOuzpcIiArIFN0cmluZyhpZCB8fCBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zdWJzdHIoMikpXG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2godmFsdWUpIHtcbiAgICAvLyBNZXRob2QgZGlzcGF0Y2hlcyBvbiB0eXBlIG9mIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAgICAvLyBJZiBmaXJzdCBhcmd1bWVudCBpcyBgbnVsbGAgb3IgYHZvaWRgIGFzc29jaWF0ZWQgaW1wbGVtZW50YXRpb24gaXNcbiAgICAvLyBsb29rZWQgdXAgaW4gdGhlIGBidWlsdGluYCBoYXNoIHdoZXJlIGltcGxlbWVudGF0aW9ucyBmb3IgYnVpbHQtaW5zXG4gICAgLy8gYXJlIHN0b3JlZC5cbiAgICB2YXIgdHlwZSA9IG51bGxcbiAgICB2YXIgbWV0aG9kID0gdmFsdWUgPT09IG51bGwgPyBOdWxsW25hbWVdIDpcbiAgICAgICAgICAgICAgICAgdmFsdWUgPT09IHZvaWQoMCkgPyBWb2lkW25hbWVdIDpcbiAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGF0dGVtcHQgdG8gdXNlIG1ldGhvZCB3aXRoIGEgZ2VuZXJhdGVkIHByaXZhdGVcbiAgICAgICAgICAgICAgICAgLy8gYG5hbWVgIHRoYXQgaXMgc3VwcG9zZWRseSBpbiB0aGUgcHJvdG90eXBlIGNoYWluIG9mIHRoZVxuICAgICAgICAgICAgICAgICAvLyBgdGFyZ2V0YC5cbiAgICAgICAgICAgICAgICAgdmFsdWVbbmFtZV0gfHxcbiAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFzc3VtZSBpdCdzIG9uZSBvZiB0aGUgYnVpbHQtaW4gdHlwZSBpbnN0YW5jZXMsXG4gICAgICAgICAgICAgICAgIC8vIGluIHdoaWNoIGNhc2UgaW1wbGVtZW50YXRpb24gaXMgc3RvcmVkIGluIGEgYGJ1aWx0aW5gIGhhc2guXG4gICAgICAgICAgICAgICAgIC8vIEF0dGVtcHQgdG8gZmluZCBhIGltcGxlbWVudGF0aW9uIGZvciB0aGUgZ2l2ZW4gYnVpbHQtaW5cbiAgICAgICAgICAgICAgICAgLy8gdmlhIGNvbnN0cnVjdG9yIG5hbWUgYW5kIG1ldGhvZCBuYW1lLlxuICAgICAgICAgICAgICAgICAoKHR5cGUgPSBidWlsdGluWyh2YWx1ZS5jb25zdHJ1Y3RvciB8fCBcIlwiKS5uYW1lXSkgJiZcbiAgICAgICAgICAgICAgICAgIHR5cGVbbmFtZV0pIHx8XG4gICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhc3N1bWUgaXQncyBhIGhvc3Qgb2JqZWN0LiBGb3IgaG9zdCBvYmplY3RzXG4gICAgICAgICAgICAgICAgIC8vIGFjdHVhbCBtZXRob2QgaW1wbGVtZW50YXRpb25zIGFyZSBzdG9yZWQgaW4gdGhlIGBob3N0YFxuICAgICAgICAgICAgICAgICAvLyBhcnJheSBhbmQgb25seSBpbmRleCBmb3IgdGhlIGltcGxlbWVudGF0aW9uIGlzIHN0b3JlZFxuICAgICAgICAgICAgICAgICAvLyBpbiB0aGUgaG9zdCBvYmplY3QncyBwcm90b3R5cGUgY2hhaW4uIFRoaXMgYXZvaWRzIG1lbW9yeVxuICAgICAgICAgICAgICAgICAvLyBsZWFrcyB0aGF0IG90aGVyd2lzZSBjb3VsZCBoYXBwZW4gd2hlbiBzYXZpbmcgSlMgb2JqZWN0c1xuICAgICAgICAgICAgICAgICAvLyBvbiBob3N0IG9iamVjdC5cbiAgICAgICAgICAgICAgICAgaG9zdFt2YWx1ZVtcIiFcIiArIG5hbWVdXSB8fFxuICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgYXR0ZW1wdCB0byBsb29rdXAgaW1wbGVtZW50YXRpb24gZm9yIGJ1aWx0aW5zIGJ5XG4gICAgICAgICAgICAgICAgIC8vIGEgdHlwZSBvZiB0aGUgdmFsdWUuIFRoaXMgYmFzaWNhbGx5IG1ha2VzIHN1cmUgdGhhdCBhbGxcbiAgICAgICAgICAgICAgICAgLy8gbm9uIHByaW1pdGl2ZSB2YWx1ZXMgd2lsbCBkZWxlZ2F0ZSB0byBhbiBgT2JqZWN0YC5cbiAgICAgICAgICAgICAgICAgKCh0eXBlID0gYnVpbHRpblt0eXBlc1t0eXBlb2YodmFsdWUpXV0pICYmIHR5cGVbbmFtZV0pXG5cblxuICAgIC8vIElmIG1ldGhvZCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHR5cGUgaXMgc3RpbGwgbm90IGZvdW5kIHRoZW5cbiAgICAvLyBqdXN0IGZhbGxiYWNrIGZvciBkZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIG1ldGhvZCA9IG1ldGhvZCB8fCBEZWZhdWx0W25hbWVdXG5cbiAgICAvLyBJZiBpbXBsZW1lbnRhdGlvbiBpcyBzdGlsbCBub3QgZm91bmQgKHdoaWNoIGFsc28gbWVhbnMgdGhlcmUgaXMgbm9cbiAgICAvLyBkZWZhdWx0KSBqdXN0IHRocm93IGFuIGVycm9yIHdpdGggYSBkZXNjcmlwdGl2ZSBtZXNzYWdlLlxuICAgIGlmICghbWV0aG9kKSB0aHJvdyBUeXBlRXJyb3IoXCJUeXBlIGRvZXMgbm90IGltcGxlbWVudHMgbWV0aG9kOiBcIiArIG5hbWUpXG5cbiAgICAvLyBJZiBpbXBsZW1lbnRhdGlvbiB3YXMgZm91bmQgdGhlbiBqdXN0IGRlbGVnYXRlLlxuICAgIHJldHVybiBtZXRob2QuYXBwbHkobWV0aG9kLCBhcmd1bWVudHMpXG4gIH1cblxuICAvLyBNYWtlIGB0b1N0cmluZ2Agb2YgdGhlIGRpc3BhdGNoIHJldHVybiBhIHByaXZhdGUgbmFtZSwgdGhpcyBlbmFibGVzXG4gIC8vIG1ldGhvZCBkZWZpbml0aW9uIHdpdGhvdXQgc3VnYXI6XG4gIC8vXG4gIC8vICAgIHZhciBtZXRob2QgPSBNZXRob2QoKVxuICAvLyAgICBvYmplY3RbbWV0aG9kXSA9IGZ1bmN0aW9uKCkgeyAvKioqLyB9XG4gIGRpc3BhdGNoLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7IHJldHVybiBuYW1lIH1cblxuICAvLyBDb3B5IHV0aWxpdHkgbWV0aG9kcyBmb3IgY29udmVuaWVudCBBUEkuXG4gIGRpc3BhdGNoLmltcGxlbWVudCA9IGltcGxlbWVudE1ldGhvZFxuICBkaXNwYXRjaC5kZWZpbmUgPSBkZWZpbmVNZXRob2RcblxuICByZXR1cm4gZGlzcGF0Y2hcbn1cblxuLy8gQ3JlYXRlIG1ldGhvZCBzaG9ydGN1dHMgZm9ybSBmdW5jdGlvbnMuXG52YXIgZGVmaW5lTWV0aG9kID0gZnVuY3Rpb24gZGVmaW5lTWV0aG9kKFR5cGUsIGxhbWJkYSkge1xuICByZXR1cm4gZGVmaW5lKHRoaXMsIFR5cGUsIGxhbWJkYSlcbn1cbnZhciBpbXBsZW1lbnRNZXRob2QgPSBmdW5jdGlvbiBpbXBsZW1lbnRNZXRob2Qob2JqZWN0LCBsYW1iZGEpIHtcbiAgcmV0dXJuIGltcGxlbWVudCh0aGlzLCBvYmplY3QsIGxhbWJkYSlcbn1cblxuLy8gRGVmaW5lIGBpbXBsZW1lbnRgIGFuZCBgZGVmaW5lYCBwb2x5bW9ycGhpYyBtZXRob2RzIHRvIGFsbG93IGRlZmluaXRpb25zXG4vLyBhbmQgaW1wbGVtZW50YXRpb25zIHRocm91Z2ggdGhlbS5cbnZhciBpbXBsZW1lbnQgPSBNZXRob2QoXCJpbXBsZW1lbnRAbWV0aG9kXCIpXG52YXIgZGVmaW5lID0gTWV0aG9kKFwiZGVmaW5lQG1ldGhvZFwiKVxuXG5cbmZ1bmN0aW9uIF9pbXBsZW1lbnQobWV0aG9kLCBvYmplY3QsIGxhbWJkYSkge1xuICAvKipcbiAgSW1wbGVtZW50cyBgTWV0aG9kYCBmb3IgdGhlIGdpdmVuIGBvYmplY3RgIHdpdGggYSBwcm92aWRlZCBgaW1wbGVtZW50YXRpb25gLlxuICBDYWxsaW5nIGBNZXRob2RgIHdpdGggYG9iamVjdGAgYXMgYSBmaXJzdCBhcmd1bWVudCB3aWxsIGRpc3BhdGNoIG9uIHByb3ZpZGVkXG4gIGltcGxlbWVudGF0aW9uLlxuICAqKi9cbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KG9iamVjdCwgbWV0aG9kLnRvU3RyaW5nKCksIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogbGFtYmRhXG4gIH0pXG59XG5cbmZ1bmN0aW9uIF9kZWZpbmUobWV0aG9kLCBUeXBlLCBsYW1iZGEpIHtcbiAgLyoqXG4gIERlZmluZXMgYE1ldGhvZGAgZm9yIHRoZSBnaXZlbiBgVHlwZWAgd2l0aCBhIHByb3ZpZGVkIGBpbXBsZW1lbnRhdGlvbmAuXG4gIENhbGxpbmcgYE1ldGhvZGAgd2l0aCBhIGZpcnN0IGFyZ3VtZW50IG9mIHRoaXMgYFR5cGVgIHdpbGwgZGlzcGF0Y2ggb25cbiAgcHJvdmlkZWQgYGltcGxlbWVudGF0aW9uYC4gSWYgYFR5cGVgIGlzIGEgYE1ldGhvZGAgZGVmYXVsdCBpbXBsZW1lbnRhdGlvblxuICBpcyBkZWZpbmVkLiBJZiBgVHlwZWAgaXMgYSBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgYE1ldGhvZGAgaXMgaW1wbGVtZW50ZWRcbiAgZm9yIHRoYXQgdmFsdWUgdHlwZS5cbiAgKiovXG5cbiAgLy8gQXR0ZW1wdCB0byBndWVzcyBhIHR5cGUgdmlhIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGxgIGhhY2suXG4gIHZhciB0eXBlID0gVHlwZSAmJiB0eXBlZnkuY2FsbChUeXBlLnByb3RvdHlwZSlcblxuICAvLyBJZiBvbmx5IHR3byBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aGVuIGBUeXBlYCBpcyBhY3R1YWxseSBhbiBpbXBsZW1lbnRhdGlvblxuICAvLyBmb3IgYSBkZWZhdWx0IHR5cGUuXG4gIGlmICghbGFtYmRhKSBEZWZhdWx0W21ldGhvZF0gPSBUeXBlXG4gIC8vIElmIGBUeXBlYCBpcyBgbnVsbGAgb3IgYHZvaWRgIHN0b3JlIGltcGxlbWVudGF0aW9uIGFjY29yZGluZ2x5LlxuICBlbHNlIGlmIChUeXBlID09PSBudWxsKSBOdWxsW21ldGhvZF0gPSBsYW1iZGFcbiAgZWxzZSBpZiAoVHlwZSA9PT0gdm9pZCgwKSkgVm9pZFttZXRob2RdID0gbGFtYmRhXG4gIC8vIElmIGB0eXBlYCBoYWNrIGluZGljYXRlcyBidWlsdC1pbiB0eXBlIGFuZCB0eXBlIGhhcyBhIG5hbWUgdXMgaXQgdG9cbiAgLy8gc3RvcmUgYSBpbXBsZW1lbnRhdGlvbiBpbnRvIGFzc29jaWF0ZWQgaGFzaC4gSWYgaGFzaCBmb3IgdGhpcyB0eXBlIGRvZXNcbiAgLy8gbm90IGV4aXN0cyB5ZXQgY3JlYXRlIG9uZS5cbiAgZWxzZSBpZiAodHlwZSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIiAmJiBUeXBlLm5hbWUpIHtcbiAgICB2YXIgQnVsaXRpbiA9IGJ1aWx0aW5bVHlwZS5uYW1lXSB8fCAoYnVpbHRpbltUeXBlLm5hbWVdID0gbmV3IE9iamVjdFR5cGUoKSlcbiAgICBCdWxpdGluW21ldGhvZF0gPSBsYW1iZGFcbiAgfVxuICAvLyBJZiBgdHlwZWAgaGFjayBpbmRpY2F0ZXMgYW4gb2JqZWN0LCB0aGF0IG1heSBiZSBlaXRoZXIgb2JqZWN0IG9yIGFueVxuICAvLyBKUyBkZWZpbmVkIFwiQ2xhc3NcIi4gSWYgbmFtZSBvZiB0aGUgY29uc3RydWN0b3IgaXMgYE9iamVjdGAsIGFzc3VtZSBpdCdzXG4gIC8vIGJ1aWx0LWluIGBPYmplY3RgIGFuZCBzdG9yZSBpbXBsZW1lbnRhdGlvbiBhY2NvcmRpbmdseS5cbiAgZWxzZSBpZiAoVHlwZS5uYW1lID09PSBcIk9iamVjdFwiKVxuICAgIGJ1aWx0aW4uT2JqZWN0W21ldGhvZF0gPSBsYW1iZGFcbiAgLy8gSG9zdCBvYmplY3RzIGFyZSBwYWluISEhIEV2ZXJ5IGJyb3dzZXIgZG9lcyBzb21lIGNyYXp5IHN0dWZmIGZvciB0aGVtXG4gIC8vIFNvIGZhciBhbGwgYnJvd3NlciBzZWVtIHRvIG5vdCBpbXBsZW1lbnQgYGNhbGxgIG1ldGhvZCBmb3IgaG9zdCBvYmplY3RcbiAgLy8gY29uc3RydWN0b3JzLiBJZiB0aGF0IGlzIGEgY2FzZSBoZXJlLCBhc3N1bWUgaXQncyBhIGhvc3Qgb2JqZWN0IGFuZFxuICAvLyBzdG9yZSBpbXBsZW1lbnRhdGlvbiBpbiBhIGBob3N0YCBhcnJheSBhbmQgc3RvcmUgYGluZGV4YCBpbiB0aGUgYXJyYXlcbiAgLy8gaW4gYSBgVHlwZS5wcm90b3R5cGVgIGl0c2VsZi4gVGhpcyBhdm9pZHMgbWVtb3J5IGxlYWtzIHRoYXQgY291bGQgYmVcbiAgLy8gY2F1c2VkIGJ5IHN0b3JpbmcgSlMgb2JqZWN0cyBvbiBhIGhvc3Qgb2JqZWN0cy5cbiAgZWxzZSBpZiAoVHlwZS5jYWxsID09PSB2b2lkKDApKSB7XG4gICAgdmFyIGluZGV4ID0gaG9zdC5pbmRleE9mKGxhbWJkYSlcbiAgICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IGhvc3QucHVzaChsYW1iZGEpIC0gMVxuICAgIC8vIFByZWZpeCBwcml2YXRlIG5hbWUgd2l0aCBgIWAgc28gaXQgY2FuIGJlIGRpc3BhdGNoZWQgZnJvbSB0aGUgbWV0aG9kXG4gICAgLy8gd2l0aG91dCB0eXBlIGNoZWNrcy5cbiAgICBpbXBsZW1lbnQoXCIhXCIgKyBtZXRob2QsIFR5cGUucHJvdG90eXBlLCBpbmRleClcbiAgfVxuICAvLyBJZiBHb3QgdGhhdCBmYXIgYFR5cGVgIGlzIHVzZXIgZGVmaW5lZCBKUyBgQ2xhc3NgLiBEZWZpbmUgcHJpdmF0ZSBuYW1lXG4gIC8vIGFzIGhpZGRlbiBwcm9wZXJ0eSBvbiBpdCdzIHByb3RvdHlwZS5cbiAgZWxzZVxuICAgIGltcGxlbWVudChtZXRob2QsIFR5cGUucHJvdG90eXBlLCBsYW1iZGEpXG59XG5cbi8vIEFuZCBwcm92aWRlZCBpbXBsZW1lbnRhdGlvbnMgZm9yIGEgcG9seW1vcnBoaWMgZXF1aXZhbGVudHMuXG5fZGVmaW5lKGRlZmluZSwgX2RlZmluZSlcbl9kZWZpbmUoaW1wbGVtZW50LCBfaW1wbGVtZW50KVxuXG4vLyBEZWZpbmUgZXhwb3J0cyBvbiBgTWV0aG9kYCBhcyBpdCdzIG9ubHkgdGhpbmcgYmVpbmcgZXhwb3J0ZWQuXG5NZXRob2QuaW1wbGVtZW50ID0gaW1wbGVtZW50XG5NZXRob2QuZGVmaW5lID0gZGVmaW5lXG5NZXRob2QuTWV0aG9kID0gTWV0aG9kXG5NZXRob2QubWV0aG9kID0gTWV0aG9kXG5NZXRob2QuYnVpbHRpbiA9IGJ1aWx0aW5cbk1ldGhvZC5ob3N0ID0gaG9zdFxuXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGhvZFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZXRob2QgPSByZXF1aXJlKFwibWV0aG9kXCIpXG5cbi8vIE1ldGhvZCBpcyBkZXNpZ25lZCB0byB3b3JrIHdpdGggZGF0YSBzdHJ1Y3R1cmVzIHJlcHJlc2VudGluZyBhcHBsaWNhdGlvblxuLy8gc3RhdGUuIENhbGxpbmcgaXQgd2l0aCBhIHN0YXRlIHNob3VsZCByZXR1cm4gb2JqZWN0IHJlcHJlc2VudGluZyBgZGVsdGFgXG4vLyB0aGF0IGhhcyBiZWluZyBhcHBsaWVkIHRvIGEgcHJldmlvdXMgc3RhdGUgdG8gZ2V0IHRvIGEgY3VycmVudCBzdGF0ZS5cbi8vXG4vLyBFeGFtcGxlXG4vL1xuLy8gZGlmZihzdGF0ZSkgLy8gPT4geyBcIml0ZW0taWQtMVwiOiB7IHRpdGxlOiBcInNvbWUgdGl0bGVcIiB9IFwiaXRlbS1pZC0yXCI6IG51bGwgfVxudmFyIGRpZmYgPSBtZXRob2QoXCJkaWZmXCIpXG5cbi8vIGRpZmYgYmV0d2VlbiBgbnVsbGAgLyBgdW5kZWZpbmVkYCB0byBhbnkgaGFzaCBpcyBhIGhhc2ggaXRzZWxmLlxuZGlmZi5kZWZpbmUobnVsbCwgZnVuY3Rpb24oZnJvbSwgdG8pIHsgcmV0dXJuIHRvIH0pXG5kaWZmLmRlZmluZSh1bmRlZmluZWQsIGZ1bmN0aW9uKGZyb20sIHRvKSB7IHJldHVybiB0byB9KVxuZGlmZi5kZWZpbmUoT2JqZWN0LCBmdW5jdGlvbihmcm9tLCB0bykge1xuICByZXR1cm4gY2FsY3VsYXRlKGZyb20sIHRvIHx8IHt9KSB8fCB7fVxufSlcblxuZnVuY3Rpb24gY2FsY3VsYXRlKGZyb20sIHRvKSB7XG4gIHZhciBkaWZmID0ge31cbiAgdmFyIGNoYW5nZXMgPSAwXG4gIE9iamVjdC5rZXlzKGZyb20pLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgY2hhbmdlcyA9IGNoYW5nZXMgKyAxXG4gICAgaWYgKCEoa2V5IGluIHRvKSAmJiBmcm9tW2tleV0gIT0gbnVsbCkgZGlmZltrZXldID0gbnVsbFxuICAgIGVsc2UgY2hhbmdlcyA9IGNoYW5nZXMgLSAxXG4gIH0pXG4gIE9iamVjdC5rZXlzKHRvKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGNoYW5nZXMgPSBjaGFuZ2VzICsgMVxuICAgIHZhciBwcmV2aW91cyA9IGZyb21ba2V5XVxuICAgIHZhciBjdXJyZW50ID0gdG9ba2V5XVxuICAgIGlmIChwcmV2aW91cyA9PT0gY3VycmVudCkgcmV0dXJuIChjaGFuZ2VzID0gY2hhbmdlcyAtIDEpXG4gICAgaWYgKHR5cGVvZihjdXJyZW50KSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGRpZmZba2V5XSA9IGN1cnJlbnRcbiAgICBpZiAodHlwZW9mKHByZXZpb3VzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGRpZmZba2V5XSA9IGN1cnJlbnRcbiAgICB2YXIgZGVsdGEgPSBjYWxjdWxhdGUocHJldmlvdXMsIGN1cnJlbnQpXG4gICAgaWYgKGRlbHRhKSBkaWZmW2tleV0gPSBkZWx0YVxuICAgIGVsc2UgY2hhbmdlcyA9IGNoYW5nZXMgLSAxXG4gIH0pXG4gIHJldHVybiBjaGFuZ2VzID8gZGlmZiA6IG51bGxcbn1cblxuZGlmZi5jYWxjdWxhdGUgPSBjYWxjdWxhdGVcblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmXG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1ldGhvZCA9IHJlcXVpcmUoXCJtZXRob2RcIilcbnZhciByZWJhc2UgPSByZXF1aXJlKFwiLi9yZWJhc2VcIilcblxuLy8gTWV0aG9kIGlzIGRlc2lnbmVkIHRvIHdvcmsgd2l0aCBkYXRhIHN0cnVjdHVyZXMgcmVwcmVzZW50aW5nIGFwcGxpY2F0aW9uXG4vLyBzdGF0ZS4gQ2FsbGluZyBpdCB3aXRoIGEgc3RhdGUgYW5kIGRlbHRhIHNob3VsZCByZXR1cm4gb2JqZWN0IHJlcHJlc2VudGluZ1xuLy8gbmV3IHN0YXRlLCB3aXRoIGNoYW5nZXMgaW4gYGRlbHRhYCBiZWluZyBhcHBsaWVkIHRvIHByZXZpb3VzLlxuLy9cbi8vICMjIEV4YW1wbGVcbi8vXG4vLyBwYXRjaChzdGF0ZSwge1xuLy8gICBcIml0ZW0taWQtMVwiOiB7IGNvbXBsZXRlZDogZmFsc2UgfSwgLy8gdXBkYXRlXG4vLyAgIFwiaXRlbS1pZC0yXCI6IG51bGwgICAgICAgICAgICAgICAgICAvLyBkZWxldGVcbi8vIH0pXG52YXIgcGF0Y2ggPSBtZXRob2QoXCJwYXRjaFwiKVxucGF0Y2guZGVmaW5lKE9iamVjdCwgZnVuY3Rpb24gcGF0Y2goaGFzaCwgZGVsdGEpIHtcbiAgcmV0dXJuIHJlYmFzZSh7fSwgaGFzaCwgZGVsdGEpXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoXG4iXX0=
;