// externs Originally from react-dom.d.ts:
/**
 * @externs
 * @suppress {duplicate}
 */

/** @const */
var ReactDOM;

/** @typedef {React.DOMElement} */
var DOMElement;

/** @typedef {React.Component} */
var Component;

/** @typedef {React.SFCElement} */
var SFCElement;

/** @typedef {React.ReactElement} */
var ReactElement;

// End of modifications

/**
 * @param {(!Component<?, ?>|!Element)} instance
 * @return {?|!Element}
 */
ReactDOM.findDOMNode = function(instance) {};

/**
 * @param {!React.ReactElement} element_or_parentComponent
 * @param {!Element} container_or_element
 * @param {function(): ?=} callback
 * @return {void}
 */
ReactDOM.render = function(element_or_parentComponent, container_or_element, callback) {};

/**
 * @param {!Element} container
 * @return {boolean}
 */
ReactDOM.unmountComponentAtNode = function(container) {};
 /** @type {string} */
ReactDOM.version;

/**
 * @param {function(?, ?): ?|function(?): ?|function(): ?} callback
 * @param {?=} a
 * @param {?=} b
 * @return {void}
 */
ReactDOM.unstable_batchedUpdates = function(callback, a, b) {};

/**
 * @param {!Component<?, ?>} parentComponent
 * @param {!DOMElement<?, ?>|!React.ComponentElement<?, ?>|!ReactElement<?>} element
 * @param {!Element} container
 * @param {function(?): ?|function((!Element|!Component<?, (void|?)>)): ?=} callback
 * @return {?|(void|!Element|!Component<?, (void|?)>)}
 */
ReactDOM.unstable_renderSubtreeIntoContainer = function(parentComponent, element, container, callback) {};