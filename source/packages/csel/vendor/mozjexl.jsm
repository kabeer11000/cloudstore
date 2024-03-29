/* eslint-disable */this["mozjexl"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
 * Jexl
 * Copyright (c) 2015 TechnologyAdvice
 */

/**
 * Handles a subexpression that's used to define a transform argument's value.
 * @param {{type: <string>}} ast The subexpression tree
 */
exports.argVal = function(ast) {
  this._cursor.args.push(ast);
};

/**
 * Handles new array literals by adding them as a new node in the AST,
 * initialized with an empty array.
 */
exports.arrayStart = function() {
  this._placeAtCursor({
    type: "ArrayLiteral",
    value: []
  });
};

/**
 * Handles a subexpression representing an element of an array literal.
 * @param {{type: <string>}} ast The subexpression tree
 */
exports.arrayVal = function(ast) {
  if (ast) this._cursor.value.push(ast);
};

/**
 * Handles tokens of type 'binaryOp', indicating an operation that has two
 * inputs: a left side and a right side.
 * @param {{type: <string>}} token A token object
 */
exports.binaryOp = function(token) {
  var precedence = this._grammar[token.value].precedence || 0,
    parent = this._cursor._parent;
  while (
    parent &&
    parent.operator &&
    this._grammar[parent.operator].precedence >= precedence
  ) {
    this._cursor = parent;
    parent = parent._parent;
  }
  var node = {
    type: "BinaryExpression",
    operator: token.value,
    left: this._cursor
  };
  this._setParent(this._cursor, node);
  this._cursor = parent;
  this._placeAtCursor(node);
};

/**
 * Handles successive nodes in an identifier chain.  More specifically, it
 * sets values that determine how the following identifier gets placed in the
 * AST.
 */
exports.dot = function() {
  this._nextIdentEncapsulate =
    this._cursor &&
    (this._cursor.type != "BinaryExpression" ||
      (this._cursor.type == "BinaryExpression" && this._cursor.right)) &&
    this._cursor.type != "UnaryExpression";
  this._nextIdentRelative =
    !this._cursor || (this._cursor && !this._nextIdentEncapsulate);
  if (this._nextIdentRelative) this._relative = true;
};

/**
 * Handles a subexpression used for filtering an array returned by an
 * identifier chain.
 * @param {{type: <string>}} ast The subexpression tree
 */
exports.filter = function(ast) {
  this._placeBeforeCursor({
    type: "FilterExpression",
    expr: ast,
    relative: this._subParser.isRelative(),
    subject: this._cursor
  });
};

/**
 * Handles identifier tokens by adding them as a new node in the AST.
 * @param {{type: <string>}} token A token object
 */
exports.identifier = function(token) {
  var node = {
    type: "Identifier",
    value: token.value
  };
  if (this._nextIdentEncapsulate) {
    node.from = this._cursor;
    this._placeBeforeCursor(node);
    this._nextIdentEncapsulate = false;
  } else {
    if (this._nextIdentRelative) node.relative = true;
    this._placeAtCursor(node);
  }
};

/**
 * Handles literal values, such as strings, booleans, and numerics, by adding
 * them as a new node in the AST.
 * @param {{type: <string>}} token A token object
 */
exports.literal = function(token) {
  this._placeAtCursor({
    type: "Literal",
    value: token.value
  });
};

/**
 * Queues a new object literal key to be written once a value is collected.
 * @param {{type: <string>}} token A token object
 */
exports.objKey = function(token) {
  this._curObjKey = token.value;
};

/**
 * Handles new object literals by adding them as a new node in the AST,
 * initialized with an empty object.
 */
exports.objStart = function() {
  this._placeAtCursor({
    type: "ObjectLiteral",
    value: {}
  });
};

/**
 * Handles an object value by adding its AST to the queued key on the object
 * literal node currently at the cursor.
 * @param {{type: <string>}} ast The subexpression tree
 */
exports.objVal = function(ast) {
  this._cursor.value[this._curObjKey] = ast;
};

/**
 * Handles traditional subexpressions, delineated with the groupStart and
 * groupEnd elements.
 * @param {{type: <string>}} ast The subexpression tree
 */
exports.subExpression = function(ast) {
  this._placeAtCursor(ast);
};

/**
 * Handles a completed alternate subexpression of a ternary operator.
 * @param {{type: <string>}} ast The subexpression tree
 */
exports.ternaryEnd = function(ast) {
  this._cursor.alternate = ast;
};

/**
 * Handles a completed consequent subexpression of a ternary operator.
 * @param {{type: <string>}} ast The subexpression tree
 */
exports.ternaryMid = function(ast) {
  this._cursor.consequent = ast;
};

/**
 * Handles the start of a new ternary expression by encapsulating the entire
 * AST in a ConditionalExpression node, and using the existing tree as the
 * test element.
 */
exports.ternaryStart = function() {
  this._tree = {
    type: "ConditionalExpression",
    test: this._tree
  };
  this._cursor = this._tree;
};

/**
 * Handles identifier tokens when used to indicate the name of a transform to
 * be applied.
 * @param {{type: <string>}} token A token object
 */
exports.transform = function(token) {
  this._placeBeforeCursor({
    type: "Transform",
    name: token.value,
    args: [],
    subject: this._cursor
  });
};

/**
 * Handles token of type 'unaryOp', indicating that the operation has only
 * one input: a right side.
 * @param {{type: <string>}} token A token object
 */
exports.unaryOp = function(token) {
  this._placeAtCursor({
    type: "UnaryExpression",
    operator: token.value
  });
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Jexl
 * Copyright (c) 2015 TechnologyAdvice
 */

var Evaluator = __webpack_require__(2),
  Lexer = __webpack_require__(4),
  Parser = __webpack_require__(5),
  defaultGrammar = __webpack_require__(7).elements;

/**
 * Jexl is the Javascript Expression Language, capable of parsing and
 * evaluating basic to complex expression strings, combined with advanced
 * xpath-like drilldown into native Javascript objects.
 * @constructor
 */
function Jexl() {
  this._customGrammar = null;
  this._lexer = null;
  this._transforms = {};
}

/**
 * Adds a binary operator to Jexl at the specified precedence. The higher the
 * precedence, the earlier the operator is applied in the order of operations.
 * For example, * has a higher precedence than +, because multiplication comes
 * before division.
 *
 * Please see grammar.js for a listing of all default operators and their
 * precedence values in order to choose the appropriate precedence for the
 * new operator.
 * @param {string} operator The operator string to be added
 * @param {number} precedence The operator's precedence
 * @param {function} fn A function to run to calculate the result. The function
 *      will be called with two arguments: left and right, denoting the values
 *      on either side of the operator. It should return either the resulting
 *      value, or a Promise that resolves with the resulting value.
 */
Jexl.prototype.addBinaryOp = function(operator, precedence, fn) {
  this._addGrammarElement(operator, {
    type: "binaryOp",
    precedence: precedence,
    eval: fn
  });
};

/**
 * Adds a unary operator to Jexl. Unary operators are currently only supported
 * on the left side of the value on which it will operate.
 * @param {string} operator The operator string to be added
 * @param {function} fn A function to run to calculate the result. The function
 *      will be called with one argument: the literal value to the right of the
 *      operator. It should return either the resulting value, or a Promise
 *      that resolves with the resulting value.
 */
Jexl.prototype.addUnaryOp = function(operator, fn) {
  this._addGrammarElement(operator, {
    type: "unaryOp",
    weight: Infinity,
    eval: fn
  });
};

/**
 * Adds or replaces a transform function in this Jexl instance.
 * @param {string} name The name of the transform function, as it will be used
 *      within Jexl expressions
 * @param {function} fn The function to be executed when this transform is
 *      invoked.  It will be provided with two arguments:
 *          - {*} value: The value to be transformed
 *          - {{}} args: The arguments for this transform
 *          - {function} cb: A callback function to be called with an error
 *            if the transform fails, or a null first argument and the
 *            transformed value as the second argument on success.
 */
Jexl.prototype.addTransform = function(name, fn) {
  this._transforms[name] = fn;
};

/**
 * Syntactic sugar for calling {@link #addTransform} repeatedly.  This function
 * accepts a map of one or more transform names to their transform function.
 * @param {{}} map A map of transform names to transform functions
 */
Jexl.prototype.addTransforms = function(map) {
  for (var key in map) {
    if (Object.prototype.hasOwnProperty.call(map, key))
      this._transforms[key] = map[key];
  }
};

/**
 * Retrieves a previously set transform function.
 * @param {string} name The name of the transform function
 * @returns {function} The transform function
 */
Jexl.prototype.getTransform = function(name) {
  return this._transforms[name];
};

/**
 * Evaluates a Jexl string within an optional context.
 * @param {string} expression The Jexl expression to be evaluated
 * @param {Object} [context] A mapping of variables to values, which will be
 *      made accessible to the Jexl expression when evaluating it
 * @param {function} [cb] An optional callback function to be executed when
 *      evaluation is complete.  It will be supplied with two arguments:
 *          - {Error|null} err: Present if an error occurred
 *          - {*} result: The result of the evaluation
 * @returns {Promise<*>} resolves with the result of the evaluation.  Note that
 *      if a callback is supplied, the returned promise will already have
 *      a '.catch' attached to it in order to pass the error to the callback.
 */
Jexl.prototype.eval = function(expression, context, cb) {
  if (typeof context === "function") {
    cb = context;
    context = {};
  } else if (!context) context = {};
  var valPromise = this._eval(expression, context);
  if (cb) {
    // setTimeout is used for the callback to break out of the Promise's
    // try/catch in case the callback throws.
    var called = false;
    return valPromise
      .then(function(val) {
        called = true;
        setTimeout(cb.bind(null, null, val), 0);
      })
      .catch(function(err) {
        if (!called) setTimeout(cb.bind(null, err), 0);
      });
  }
  return valPromise;
};

/**
 * Removes a binary or unary operator from the Jexl grammar.
 * @param {string} operator The operator string to be removed
 */
Jexl.prototype.removeOp = function(operator) {
  var grammar = this._getCustomGrammar();
  if (
    grammar[operator] &&
    (grammar[operator].type == "binaryOp" ||
      grammar[operator].type == "unaryOp")
  ) {
    delete grammar[operator];
    this._lexer = null;
  }
};

/**
 * Adds an element to the grammar map used by this Jexl instance, cloning
 * the default grammar first if necessary.
 * @param {string} str The key string to be added
 * @param {{type: <string>}} obj A map of configuration options for this
 *      grammar element
 * @private
 */
Jexl.prototype._addGrammarElement = function(str, obj) {
  var grammar = this._getCustomGrammar();
  grammar[str] = obj;
  this._lexer = null;
};

/**
 * Evaluates a Jexl string in the given context.
 * @param {string} exp The Jexl expression to be evaluated
 * @param {Object} [context] A mapping of variables to values, which will be
 *      made accessible to the Jexl expression when evaluating it
 * @returns {Promise<*>} resolves with the result of the evaluation.
 * @private
 */
Jexl.prototype._eval = function(exp, context) {
  var self = this,
    grammar = this._getGrammar(),
    parser = new Parser(grammar),
    evaluator = new Evaluator(grammar, this._transforms, context);
  return Promise.resolve().then(function() {
    parser.addTokens(self._getLexer().tokenize(exp));
    return evaluator.eval(parser.complete());
  });
};

/**
 * Gets the custom grammar object, creating it first if necessary. New custom
 * grammars are created by executing a shallow clone of the default grammar
 * map. The returned map is available to be changed.
 * @returns {{}} a customizable grammar map.
 * @private
 */
Jexl.prototype._getCustomGrammar = function() {
  if (!this._customGrammar) {
    this._customGrammar = {};
    for (var key in defaultGrammar) {
      if (Object.prototype.hasOwnProperty.call(defaultGrammar, key))
        this._customGrammar[key] = defaultGrammar[key];
    }
  }
  return this._customGrammar;
};

/**
 * Gets the grammar map currently being used by Jexl; either the default map,
 * or a locally customized version. The returned map should never be changed
 * in any way.
 * @returns {{}} the grammar map currently in use.
 * @private
 */
Jexl.prototype._getGrammar = function() {
  return this._customGrammar || defaultGrammar;
};

/**
 * Gets a Lexer instance as a singleton in reference to this Jexl instance.
 * @returns {Lexer} an instance of Lexer, initialized with a grammar
 *      appropriate to this Jexl instance.
 * @private
 */
Jexl.prototype._getLexer = function() {
  if (!this._lexer) this._lexer = new Lexer(this._getGrammar());
  return this._lexer;
};

module.exports = new Jexl();
module.exports.Jexl = Jexl;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Jexl
 * Copyright (c) 2015 TechnologyAdvice
 */

var handlers = __webpack_require__(3);

/**
 * The Evaluator takes a Jexl expression tree as generated by the
 * {@link Parser} and calculates its value within a given context. The
 * collection of transforms, context, and a relative context to be used as the
 * root for relative identifiers, are all specific to an Evaluator instance.
 * When any of these things change, a new instance is required.  However, a
 * single instance can be used to simultaneously evaluate many different
 * expressions, and does not have to be reinstantiated for each.
 * @param {{}} grammar A grammar map against which to evaluate the expression
 *      tree
 * @param {{}} [transforms] A map of transform names to transform functions. A
 *      transform function takes two arguments:
 *          - {*} val: A value to be transformed
 *          - {{}} args: A map of argument keys to their evaluated values, as
 *              specified in the expression string
 *      The transform function should return either the transformed value, or
 *      a Promises/A+ Promise object that resolves with the value and rejects
 *      or throws only when an unrecoverable error occurs. Transforms should
 *      generally return undefined when they don't make sense to be used on the
 *      given value type, rather than throw/reject. An error is only
 *      appropriate when the transform would normally return a value, but
 *      cannot due to some other failure.
 * @param {{}} [context] A map of variable keys to their values. This will be
 *      accessed to resolve the value of each non-relative identifier. Any
 *      Promise values will be passed to the expression as their resolved
 *      value.
 * @param {{}|Array<{}|Array>} [relativeContext] A map or array to be accessed
 *      to resolve the value of a relative identifier.
 * @constructor
 */
var Evaluator = function(grammar, transforms, context, relativeContext) {
  this._grammar = grammar;
  this._transforms = transforms || {};
  this._context = context || {};
  this._relContext = relativeContext || this._context;
};

/**
 * Evaluates an expression tree within the configured context.
 * @param {{}} ast An expression tree object
 * @returns {Promise<*>} resolves with the resulting value of the expression.
 */
Evaluator.prototype.eval = function(ast) {
  var self = this;
  return Promise.resolve().then(function() {
    return handlers[ast.type].call(self, ast);
  });
};

/**
 * Simultaneously evaluates each expression within an array, and delivers the
 * response as an array with the resulting values at the same indexes as their
 * originating expressions.
 * @param {Array<string>} arr An array of expression strings to be evaluated
 * @returns {Promise<Array<{}>>} resolves with the result array
 */
Evaluator.prototype.evalArray = function(arr) {
  return Promise.all(
    arr.map(function(elem) {
      return this.eval(elem);
    }, this)
  );
};

/**
 * Simultaneously evaluates each expression within a map, and delivers the
 * response as a map with the same keys, but with the evaluated result for each
 * as their value.
 * @param {{}} map A map of expression names to expression trees to be
 *      evaluated
 * @returns {Promise<{}>} resolves with the result map.
 */
Evaluator.prototype.evalMap = function(map) {
  var keys = Object.keys(map),
    result = {};
  var asts = keys.map(function(key) {
    return this.eval(map[key]);
  }, this);
  return Promise.all(asts).then(function(vals) {
    vals.forEach(function(val, idx) {
      result[keys[idx]] = val;
    });
    return result;
  });
};

/**
 * Applies a filter expression with relative identifier elements to a subject.
 * The intent is for the subject to be an array of subjects that will be
 * individually used as the relative context against the provided expression
 * tree. Only the elements whose expressions result in a truthy value will be
 * included in the resulting array.
 *
 * If the subject is not an array of values, it will be converted to a single-
 * element array before running the filter.
 * @param {*} subject The value to be filtered; usually an array. If this value is
 *      not an array, it will be converted to an array with this value as the
 *      only element.
 * @param {{}} expr The expression tree to run against each subject. If the
 *      tree evaluates to a truthy result, then the value will be included in
 *      the returned array; otherwise, it will be eliminated.
 * @returns {Promise<Array>} resolves with an array of values that passed the
 *      expression filter.
 * @private
 */
Evaluator.prototype._filterRelative = function(subject, expr) {
  if (subject === undefined) return undefined;
  var promises = [];
  if (!Array.isArray(subject)) subject = [subject];
  subject.forEach(function(elem) {
    var evalInst = new Evaluator(
      this._grammar,
      this._transforms,
      this._context,
      elem
    );
    promises.push(evalInst.eval(expr));
  }, this);
  return Promise.all(promises).then(function(values) {
    var results = [];
    values.forEach(function(value, idx) {
      if (value) results.push(subject[idx]);
    });
    return results;
  });
};

/**
 * Applies a static filter expression to a subject value.  If the filter
 * expression evaluates to boolean true, the subject is returned; if false,
 * undefined.
 *
 * For any other resulting value of the expression, this function will attempt
 * to respond with the property at that name or index of the subject.
 * @param {*} subject The value to be filtered.  Usually an Array (for which
 *      the expression would generally resolve to a numeric index) or an
 *      Object (for which the expression would generally resolve to a string
 *      indicating a property name)
 * @param {{}} expr The expression tree to run against the subject
 * @returns {Promise<*>} resolves with the value of the drill-down.
 * @private
 */
Evaluator.prototype._filterStatic = function(subject, expr) {
  return this.eval(expr).then(function(res) {
    if (typeof res === "boolean") return res ? subject : undefined;
    if (subject === undefined) return undefined;
    return subject[res];
  });
};

module.exports = Evaluator;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
 * Jexl
 * Copyright (c) 2015 TechnologyAdvice
 */

/**
 * Evaluates an ArrayLiteral by returning its value, with each element
 * independently run through the evaluator.
 * @param {{type: 'ObjectLiteral', value: <{}>}} ast An expression tree with an
 *      ObjectLiteral as the top node
 * @returns {Promise.<[]>} resolves to a map contained evaluated values.
 * @private
 */
exports.ArrayLiteral = function(ast) {
  return this.evalArray(ast.value);
};

/**
 * Evaluates a BinaryExpression node by running the Grammar's evaluator for
 * the given operator.
 * @param {{type: 'BinaryExpression', operator: <string>, left: {},
 *      right: {}}} ast An expression tree with a BinaryExpression as the top
 *      node
 * @returns {Promise<*>} resolves with the value of the BinaryExpression.
 * @private
 */
exports.BinaryExpression = function(ast) {
  var self = this;
  return Promise.all([this.eval(ast.left), this.eval(ast.right)]).then(function(
    arr
  ) {
    return self._grammar[ast.operator].eval(arr[0], arr[1]);
  });
};

/**
 * Evaluates a ConditionalExpression node by first evaluating its test branch,
 * and resolving with the consequent branch if the test is truthy, or the
 * alternate branch if it is not. If there is no consequent branch, the test
 * result will be used instead.
 * @param {{type: 'ConditionalExpression', test: {}, consequent: {},
 *      alternate: {}}} ast An expression tree with a ConditionalExpression as
 *      the top node
 * @private
 */
exports.ConditionalExpression = function(ast) {
  var self = this;
  return this.eval(ast.test).then(function(res) {
    if (res) {
      if (ast.consequent) return self.eval(ast.consequent);
      return res;
    }
    return self.eval(ast.alternate);
  });
};

/**
 * Evaluates a FilterExpression by applying it to the subject value.
 * @param {{type: 'FilterExpression', relative: <boolean>, expr: {},
 *      subject: {}}} ast An expression tree with a FilterExpression as the top
 *      node
 * @returns {Promise<*>} resolves with the value of the FilterExpression.
 * @private
 */
exports.FilterExpression = function(ast) {
  var self = this;
  return this.eval(ast.subject).then(function(subject) {
    if (ast.relative) return self._filterRelative(subject, ast.expr);
    return self._filterStatic(subject, ast.expr);
  });
};

/**
 * Evaluates an Identifier by either stemming from the evaluated 'from'
 * expression tree or accessing the context provided when this Evaluator was
 * constructed.
 * @param {{type: 'Identifier', value: <string>, [from]: {}}} ast An expression
 *      tree with an Identifier as the top node
 * @returns {Promise<*>|*} either the identifier's value, or a Promise that
 *      will resolve with the identifier's value.
 * @private
 */
exports.Identifier = function(ast) {
  if (ast.from) {
    return this.eval(ast.from).then(function(context) {
      if (Array.isArray(context)) context = context[0];
      if (context === undefined) return undefined;
      return context[ast.value];
    });
  } else {
    return ast.relative
      ? this._relContext[ast.value]
      : this._context[ast.value];
  }
};

/**
 * Evaluates a Literal by returning its value property.
 * @param {{type: 'Literal', value: <string|number|boolean>}} ast An expression
 *      tree with a Literal as its only node
 * @returns {string|number|boolean} The value of the Literal node
 * @private
 */
exports.Literal = function(ast) {
  return ast.value;
};

/**
 * Evaluates an ObjectLiteral by returning its value, with each key
 * independently run through the evaluator.
 * @param {{type: 'ObjectLiteral', value: <{}>}} ast An expression tree with an
 *      ObjectLiteral as the top node
 * @returns {Promise<{}>} resolves to a map contained evaluated values.
 * @private
 */
exports.ObjectLiteral = function(ast) {
  return this.evalMap(ast.value);
};

/**
 * Evaluates a Transform node by applying a function from the transforms map
 * to the subject value.
 * @param {{type: 'Transform', name: <string>, subject: {}}} ast An
 *      expression tree with a Transform as the top node
 * @returns {Promise<*>|*} the value of the transformation, or a Promise that
 *      will resolve with the transformed value.
 * @private
 */
exports.Transform = function(ast) {
  var transform = this._transforms[ast.name];
  if (!transform)
    throw new Error("Transform '" + ast.name + "' is not defined.");
  return Promise.all([
    this.eval(ast.subject),
    this.evalArray(ast.args || [])
  ]).then(function(arr) {
    return transform.apply(null, [arr[0]].concat(arr[1]));
  });
};

/**
 * Evaluates a Unary expression by passing the right side through the
 * operator's eval function.
 * @param {{type: 'UnaryExpression', operator: <string>, right: {}}} ast An
 *      expression tree with a UnaryExpression as the top node
 * @returns {Promise<*>} resolves with the value of the UnaryExpression.
 * @constructor
 */
exports.UnaryExpression = function(ast) {
  var self = this;
  return this.eval(ast.right).then(function(right) {
    return self._grammar[ast.operator].eval(right);
  });
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
 * Jexl
 * Copyright (c) 2015 TechnologyAdvice
 */

var numericRegex = /^-?(?:(?:[0-9]*\.[0-9]+)|[0-9]+)$/,
  identRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/,
  escEscRegex = /\\\\/,
  preOpRegexElems = [
    // Strings
    "'(?:(?:\\\\')|[^'])*'",
    '"(?:(?:\\\\")|[^"])*"',
    // Whitespace
    "\\s+",
    // Booleans
    "\\btrue\\b",
    "\\bfalse\\b",
    // Octothorpe comments
    "#.*[\\n\\4]?"
  ],
  postOpRegexElems = [
    // Identifiers
    "\\b[a-zA-Z_\\$][a-zA-Z0-9_\\$]*\\b",
    // Numerics (without negative symbol)
    "(?:(?:[0-9]*\\.[0-9]+)|[0-9]+)"
  ],
  minusNegatesAfter = [
    "binaryOp",
    "unaryOp",
    "openParen",
    "openBracket",
    "question",
    "colon"
  ];

/**
 * Lexer is a collection of stateless, statically-accessed functions for the
 * lexical parsing of a Jexl string.  Its responsibility is to identify the
 * "parts of speech" of a Jexl expression, and tokenize and label each, but
 * to do only the most minimal syntax checking; the only errors the Lexer
 * should be concerned with are if it's unable to identify the utility of
 * any of its tokens.  Errors stemming from these tokens not being in a
 * sensible configuration should be left for the Parser to handle.
 * @type {{}}
 */
function Lexer(grammar) {
  this._grammar = grammar;
}

/**
 * Splits a Jexl expression string into an array of expression elements.
 * @param {string} str A Jexl expression string
 * @returns {Array<string>} An array of substrings defining the functional
 *      elements of the expression.
 */
Lexer.prototype.getElements = function(str) {
  var regex = this._getSplitRegex();
  return str.split(regex).filter(function(elem) {
    // Remove empty strings
    return elem;
  });
};

/**
 * Converts an array of expression elements into an array of tokens.  Note that
 * the resulting array may not equal the element array in length, as any
 * elements that consist only of whitespace get appended to the previous
 * token's "raw" property.  For the structure of a token object, please see
 * {@link Lexer#tokenize}.
 * @param {Array<string>} elements An array of Jexl expression elements to be
 *      converted to tokens
 * @returns {Array<{type, value, raw}>} an array of token objects.
 */
Lexer.prototype.getTokens = function(elements) {
  var tokens = [],
    negate = false;
  for (var i = 0; i < elements.length; i++) {
    if (this._isWhitespace(elements[i])) {
      if (tokens.length) tokens[tokens.length - 1].raw += elements[i];
    } else if (this._isComment(elements[i])) continue;
    else if (elements[i] === "-" && this._isNegative(tokens)) negate = true;
    else {
      if (negate) {
        elements[i] = "-" + elements[i];
        negate = false;
      }
      tokens.push(this._createToken(elements[i]));
    }
  }
  // Catch a - at the end of the string. Let the parser handle that issue.
  if (negate) tokens.push(this._createToken("-"));
  return tokens;
};

/**
 * Converts a Jexl string into an array of tokens.  Each token is an object
 * in the following format:
 *
 *     {
 *         type: <string>,
 *         [name]: <string>,
 *         value: <boolean|number|string>,
 *         raw: <string>
 *     }
 *
 * Type is one of the following:
 *
 *      literal, identifier, binaryOp, unaryOp
 *
 * OR, if the token is a control character its type is the name of the element
 * defined in the Grammar.
 *
 * Name appears only if the token is a control string found in
 * {@link grammar#elements}, and is set to the name of the element.
 *
 * Value is the value of the token in the correct type (boolean or numeric as
 * appropriate). Raw is the string representation of this value taken directly
 * from the expression string, including any trailing spaces.
 * @param {string} str The Jexl string to be tokenized
 * @returns {Array<{type, value, raw}>} an array of token objects.
 * @throws {Error} if the provided string contains an invalid token.
 */
Lexer.prototype.tokenize = function(str) {
  var elements = this.getElements(str);
  return this.getTokens(elements);
};

/**
 * Creates a new token object from an element of a Jexl string. See
 * {@link Lexer#tokenize} for a description of the token object.
 * @param {string} element The element from which a token should be made
 * @returns {{value: number|boolean|string, [name]: string, type: string,
 *      raw: string}} a token object describing the provided element.
 * @throws {Error} if the provided string is not a valid expression element.
 * @private
 */
Lexer.prototype._createToken = function(element) {
  var token = {
    type: "literal",
    value: element,
    raw: element
  };
  if (element[0] == '"' || element[0] == "'")
    token.value = this._unquote(element);
  else if (element.match(numericRegex)) token.value = parseFloat(element);
  else if (element === "true" || element === "false")
    token.value = element === "true";
  else if (this._grammar[element]) token.type = this._grammar[element].type;
  else if (element.match(identRegex)) token.type = "identifier";
  else throw new Error("Invalid expression token: " + element);
  return token;
};

/**
 * Escapes a string so that it can be treated as a string literal within a
 * regular expression.
 * @param {string} str The string to be escaped
 * @returns {string} the RegExp-escaped string.
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
 * @private
 */
Lexer.prototype._escapeRegExp = function(str) {
  str = str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (str.match(identRegex)) str = "\\b" + str + "\\b";
  return str;
};

/**
 * Gets a RegEx object appropriate for splitting a Jexl string into its core
 * elements.
 * @returns {RegExp} An element-splitting RegExp object
 * @private
 */
Lexer.prototype._getSplitRegex = function() {
  if (!this._splitRegex) {
    var elemArray = Object.keys(this._grammar);
    // Sort by most characters to least, then regex escape each
    elemArray = elemArray
      .sort(function(a, b) {
        return b.length - a.length;
      })
      .map(function(elem) {
        return this._escapeRegExp(elem);
      }, this);
    this._splitRegex = new RegExp(
      "(" +
        [
          preOpRegexElems.join("|"),
          elemArray.join("|"),
          postOpRegexElems.join("|")
        ].join("|") +
        ")"
    );
  }
  return this._splitRegex;
};

/**
 * Determines whether the addition of a '-' token should be interpreted as a
 * negative symbol for an upcoming number, given an array of tokens already
 * processed.
 * @param {Array<Object>} tokens An array of tokens already processed
 * @returns {boolean} true if adding a '-' should be considered a negative
 *      symbol; false otherwise
 * @private
 */
Lexer.prototype._isNegative = function(tokens) {
  if (!tokens.length) return true;
  return minusNegatesAfter.some(function(type) {
    return type === tokens[tokens.length - 1].type;
  });
};

/**
 * A utility function to determine if a string consists of only space
 * characters.
 * @param {string} str A string to be tested
 * @returns {boolean} true if the string is empty or consists of only whitespace;
 *      false otherwise.
 * @private
 */
var _whitespaceRegex = /^\s*$/;
Lexer.prototype._isWhitespace = function(str) {
  return _whitespaceRegex.test(str);
};

/**
 * A utility function to determine if a string is an octothorpe comment
 * @param {string} str A string to be tested
 * @returns {boolean} true if the string is a comment, false otherwise.
 * @private
 */
Lexer.prototype._isComment = function(str) {
  return str.startsWith("#");
};

/**
 * Removes the beginning and trailing quotes from a string, unescapes any
 * escaped quotes on its interior, and unescapes any escaped escape characters.
 * Note that this function is not defensive; it assumes that the provided
 * string is not empty, and that its first and last characters are actually
 * quotes.
 * @param {string} str A string whose first and last characters are quotes
 * @returns {string} a string with the surrounding quotes stripped and escapes
 *      properly processed.
 * @private
 */
Lexer.prototype._unquote = function(str) {
  var quote = str[0],
    escQuoteRegex = new RegExp("\\\\" + quote, "g");
  return str
    .substr(1, str.length - 2)
    .replace(escQuoteRegex, quote)
    .replace(escEscRegex, "\\");
};

module.exports = Lexer;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Jexl
 * Copyright (c) 2015 TechnologyAdvice
 */

var handlers = __webpack_require__(0),
  states = __webpack_require__(6).states;

/**
 * The Parser is a state machine that converts tokens from the {@link Lexer}
 * into an Abstract Syntax Tree (AST), capable of being evaluated in any
 * context by the {@link Evaluator}.  The Parser expects that all tokens
 * provided to it are legal and typed properly according to the grammar, but
 * accepts that the tokens may still be in an invalid order or in some other
 * unparsable configuration that requires it to throw an Error.
 * @param {{}} grammar The grammar map to use to parse Jexl strings
 * @param {string} [prefix] A string prefix to prepend to the expression string
 *      for error messaging purposes.  This is useful for when a new Parser is
 *      instantiated to parse an subexpression, as the parent Parser's
 *      expression string thus far can be passed for a more user-friendly
 *      error message.
 * @param {{}} [stopMap] A mapping of token types to any truthy value. When the
 *      token type is encountered, the parser will return the mapped value
 *      instead of boolean false.
 * @constructor
 */
function Parser(grammar, prefix, stopMap) {
  this._grammar = grammar;
  this._state = "expectOperand";
  this._tree = null;
  this._exprStr = prefix || "";
  this._relative = false;
  this._stopMap = stopMap || {};
}

/**
 * Processes a new token into the AST and manages the transitions of the state
 * machine.
 * @param {{type: <string>}} token A token object, as provided by the
 *      {@link Lexer#tokenize} function.
 * @throws {Error} if a token is added when the Parser has been marked as
 *      complete by {@link #complete}, or if an unexpected token type is added.
 * @returns {boolean|*} the stopState value if this parser encountered a token
 *      in the stopState mapb; false if tokens can continue.
 */
Parser.prototype.addToken = function(token) {
  if (this._state == "complete")
    throw new Error("Cannot add a new token to a completed Parser");
  var state = states[this._state],
    startExpr = this._exprStr;
  this._exprStr += token.raw;
  if (state.subHandler) {
    if (!this._subParser) this._startSubExpression(startExpr);
    var stopState = this._subParser.addToken(token);
    if (stopState) {
      this._endSubExpression();
      if (this._parentStop) return stopState;
      this._state = stopState;
    }
  } else if (state.tokenTypes[token.type]) {
    var typeOpts = state.tokenTypes[token.type],
      handleFunc = handlers[token.type];
    if (typeOpts.handler) handleFunc = typeOpts.handler;
    if (handleFunc) handleFunc.call(this, token);
    if (typeOpts.toState) this._state = typeOpts.toState;
  } else if (this._stopMap[token.type]) return this._stopMap[token.type];
  else {
    throw new Error(
      "Token " +
        token.raw +
        " (" +
        token.type +
        ") unexpected in expression: " +
        this._exprStr
    );
  }
  return false;
};

/**
 * Processes an array of tokens iteratively through the {@link #addToken}
 * function.
 * @param {Array<{type: <string>}>} tokens An array of tokens, as provided by
 *      the {@link Lexer#tokenize} function.
 */
Parser.prototype.addTokens = function(tokens) {
  tokens.forEach(this.addToken, this);
};

/**
 * Marks this Parser instance as completed and retrieves the full AST.
 * @returns {{}|null} a full expression tree, ready for evaluation by the
 *      {@link Evaluator#eval} function, or null if no tokens were passed to
 *      the parser before complete was called
 * @throws {Error} if the parser is not in a state where it's legal to end
 *      the expression, indicating that the expression is incomplete
 */
Parser.prototype.complete = function() {
  if (this._cursor && !states[this._state].completable)
    throw new Error("Unexpected end of expression: " + this._exprStr);
  if (this._subParser) this._endSubExpression();
  this._state = "complete";
  return this._cursor ? this._tree : null;
};

/**
 * Indicates whether the expression tree contains a relative path identifier.
 * @returns {boolean} true if a relative identifier exists; false otherwise.
 */
Parser.prototype.isRelative = function() {
  return this._relative;
};

/**
 * Ends a subexpression by completing the subParser and passing its result
 * to the subHandler configured in the current state.
 * @private
 */
Parser.prototype._endSubExpression = function() {
  states[this._state].subHandler.call(this, this._subParser.complete());
  this._subParser = null;
};

/**
 * Places a new tree node at the current position of the cursor (to the 'right'
 * property) and then advances the cursor to the new node. This function also
 * handles setting the parent of the new node.
 * @param {{type: <string>}} node A node to be added to the AST
 * @private
 */
Parser.prototype._placeAtCursor = function(node) {
  if (!this._cursor) this._tree = node;
  else {
    this._cursor.right = node;
    this._setParent(node, this._cursor);
  }
  this._cursor = node;
};

/**
 * Places a tree node before the current position of the cursor, replacing
 * the node that the cursor currently points to. This should only be called in
 * cases where the cursor is known to exist, and the provided node already
 * contains a pointer to what's at the cursor currently.
 * @param {{type: <string>}} node A node to be added to the AST
 * @private
 */
Parser.prototype._placeBeforeCursor = function(node) {
  this._cursor = this._cursor._parent;
  this._placeAtCursor(node);
};

/**
 * Sets the parent of a node by creating a non-enumerable _parent property
 * that points to the supplied parent argument.
 * @param {{type: <string>}} node A node of the AST on which to set a new
 *      parent
 * @param {{type: <string>}} parent An existing node of the AST to serve as the
 *      parent of the new node
 * @private
 */
Parser.prototype._setParent = function(node, parent) {
  Object.defineProperty(node, "_parent", {
    value: parent,
    writable: true
  });
};

/**
 * Prepares the Parser to accept a subexpression by (re)instantiating the
 * subParser.
 * @param {string} [exprStr] The expression string to prefix to the new Parser
 * @private
 */
Parser.prototype._startSubExpression = function(exprStr) {
  var endStates = states[this._state].endStates;
  if (!endStates) {
    this._parentStop = true;
    endStates = this._stopMap;
  }
  this._subParser = new Parser(this._grammar, exprStr, endStates);
};

module.exports = Parser;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Jexl
 * Copyright (c) 2015 TechnologyAdvice
 */

var h = __webpack_require__(0);

/**
 * A mapping of all states in the finite state machine to a set of instructions
 * for handling or transitioning into other states. Each state can be handled
 * in one of two schemes: a tokenType map, or a subHandler.
 *
 * Standard expression elements are handled through the tokenType object. This
 * is an object map of all legal token types to encounter in this state (and
 * any unexpected token types will generate a thrown error) to an options
 * object that defines how they're handled.  The available options are:
 *
 *      {string} toState: The name of the state to which to transition
 *          immediately after handling this token
 *      {string} handler: The handler function to call when this token type is
 *          encountered in this state.  If omitted, the default handler
 *          matching the token's "type" property will be called. If the handler
 *          function does not exist, no call will be made and no error will be
 *          generated.  This is useful for tokens whose sole purpose is to
 *          transition to other states.
 *
 * States that consume a subexpression should define a subHandler, the
 * function to be called with an expression tree argument when the
 * subexpression is complete. Completeness is determined through the
 * endStates object, which maps tokens on which an expression should end to the
 * state to which to transition once the subHandler function has been called.
 *
 * Additionally, any state in which it is legal to mark the AST as completed
 * should have a 'completable' property set to boolean true.  Attempting to
 * call {@link Parser#complete} in any state without this property will result
 * in a thrown Error.
 *
 * @type {{}}
 */
exports.states = {
  expectOperand: {
    tokenTypes: {
      literal: { toState: "expectBinOp" },
      identifier: { toState: "identifier" },
      unaryOp: {},
      openParen: { toState: "subExpression" },
      openCurl: { toState: "expectObjKey", handler: h.objStart },
      dot: { toState: "traverse" },
      openBracket: { toState: "arrayVal", handler: h.arrayStart }
    }
  },
  expectBinOp: {
    tokenTypes: {
      binaryOp: { toState: "expectOperand" },
      pipe: { toState: "expectTransform" },
      dot: { toState: "traverse" },
      question: { toState: "ternaryMid", handler: h.ternaryStart }
    },
    completable: true
  },
  expectTransform: {
    tokenTypes: {
      identifier: { toState: "postTransform", handler: h.transform }
    }
  },
  expectObjKey: {
    tokenTypes: {
      identifier: { toState: "expectKeyValSep", handler: h.objKey },
      closeCurl: { toState: "expectBinOp" }
    }
  },
  expectKeyValSep: {
    tokenTypes: {
      colon: { toState: "objVal" }
    }
  },
  postTransform: {
    tokenTypes: {
      openParen: { toState: "argVal" },
      binaryOp: { toState: "expectOperand" },
      dot: { toState: "traverse" },
      openBracket: { toState: "filter" },
      pipe: { toState: "expectTransform" }
    },
    completable: true
  },
  postTransformArgs: {
    tokenTypes: {
      binaryOp: { toState: "expectOperand" },
      dot: { toState: "traverse" },
      openBracket: { toState: "filter" },
      pipe: { toState: "expectTransform" }
    },
    completable: true
  },
  identifier: {
    tokenTypes: {
      binaryOp: { toState: "expectOperand" },
      dot: { toState: "traverse" },
      openBracket: { toState: "filter" },
      pipe: { toState: "expectTransform" },
      question: { toState: "ternaryMid", handler: h.ternaryStart }
    },
    completable: true
  },
  traverse: {
    tokenTypes: {
      identifier: { toState: "identifier" }
    }
  },
  filter: {
    subHandler: h.filter,
    endStates: {
      closeBracket: "identifier"
    }
  },
  subExpression: {
    subHandler: h.subExpression,
    endStates: {
      closeParen: "expectBinOp"
    }
  },
  argVal: {
    subHandler: h.argVal,
    endStates: {
      comma: "argVal",
      closeParen: "postTransformArgs"
    }
  },
  objVal: {
    subHandler: h.objVal,
    endStates: {
      comma: "expectObjKey",
      closeCurl: "expectBinOp"
    }
  },
  arrayVal: {
    subHandler: h.arrayVal,
    endStates: {
      comma: "arrayVal",
      closeBracket: "expectBinOp"
    }
  },
  ternaryMid: {
    subHandler: h.ternaryMid,
    endStates: {
      colon: "ternaryEnd"
    }
  },
  ternaryEnd: {
    subHandler: h.ternaryEnd,
    completable: true
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
 * Jexl
 * Copyright (c) 2015 TechnologyAdvice
 */

/**
 * A map of all expression elements to their properties. Note that changes
 * here may require changes in the Lexer or Parser.
 * @type {{}}
 */
exports.elements = {
  ".": { type: "dot" },
  "[": { type: "openBracket" },
  "]": { type: "closeBracket" },
  "|": { type: "pipe" },
  "{": { type: "openCurl" },
  "}": { type: "closeCurl" },
  ":": { type: "colon" },
  ",": { type: "comma" },
  "(": { type: "openParen" },
  ")": { type: "closeParen" },
  "?": { type: "question" },
  "+": {
    type: "binaryOp",
    precedence: 30,
    eval: function(left, right) {
      return left + right;
    }
  },
  "-": {
    type: "binaryOp",
    precedence: 30,
    eval: function(left, right) {
      return left - right;
    }
  },
  "*": {
    type: "binaryOp",
    precedence: 40,
    eval: function(left, right) {
      return left * right;
    }
  },
  "/": {
    type: "binaryOp",
    precedence: 40,
    eval: function(left, right) {
      return left / right;
    }
  },
  "//": {
    type: "binaryOp",
    precedence: 40,
    eval: function(left, right) {
      return Math.floor(left / right);
    }
  },
  "%": {
    type: "binaryOp",
    precedence: 50,
    eval: function(left, right) {
      return left % right;
    }
  },
  "^": {
    type: "binaryOp",
    precedence: 50,
    eval: function(left, right) {
      return Math.pow(left, right);
    }
  },
  "==": {
    type: "binaryOp",
    precedence: 20,
    eval: function(left, right) {
      return left == right;
    }
  },
  "!=": {
    type: "binaryOp",
    precedence: 20,
    eval: function(left, right) {
      return left != right;
    }
  },
  ">": {
    type: "binaryOp",
    precedence: 20,
    eval: function(left, right) {
      return left > right;
    }
  },
  ">=": {
    type: "binaryOp",
    precedence: 20,
    eval: function(left, right) {
      return left >= right;
    }
  },
  "<": {
    type: "binaryOp",
    precedence: 20,
    eval: function(left, right) {
      return left < right;
    }
  },
  "<=": {
    type: "binaryOp",
    precedence: 20,
    eval: function(left, right) {
      return left <= right;
    }
  },
  "&&": {
    type: "binaryOp",
    precedence: 10,
    eval: function(left, right) {
      return left && right;
    }
  },
  "||": {
    type: "binaryOp",
    precedence: 10,
    eval: function(left, right) {
      return left || right;
    }
  },
  in: {
    type: "binaryOp",
    precedence: 20,
    eval: function(left, right) {
      if (typeof right === "string") return right.indexOf(left) !== -1;
      if (Array.isArray(right)) {
        return right.some(function(elem) {
          return elem == left;
        });
      }
      return false;
    }
  },
  "!": {
    type: "unaryOp",
    precedence: Infinity,
    eval: function(right) {
      return !right;
    }
  }
};


/***/ })
/******/ ]);this.EXPORTED_SYMBOLS = ["mozjexl"];