// externs from react.d.ts:
/**
 * @externs
 * @suppress {duplicate}
 */
/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/** @const */
var React = {};

/** @typedef {React.ComponentClass} */
var ComponentClass;

/** @typedef {React.StatelessComponent} */
var StatelessComponent;

/** @typedef {React.ComponentElement} */
var ComponentElement;

/** @typedef {React.ComponentFactory} */
var ComponentFactory;

/** @typedef {React.ComponentSpec} */
var ComponentSpec;

/** @typedef {React.Requireable} */
var Requireable;

/** @typedef {React.ValidationMap} */
var ValidationMap;
/** @typedef {React.Validator} */
var Validator;


/** @typedef {React.HTMLFactory} */
var HTMLFactory;

/** @typedef {React.SVGFactory} */
var SVGFactory;


/** @typedef {React.EventHandler} */
var EventHandler;
/** @typedef {React.ChangeTargetHTMLFactory} */
var ChangeTargetHTMLFactory;


/** @typedef {React.Mixin} */
var Mixin;


/** @typedef {React.AbstractView} */
var AbstractView;

/** @typedef {React.ReactChildren} */
var ReactChildren;

/** @typedef {React.DOMFactory} */
var DOMFactory;

/** @typedef {React.SFCFactory} */
var SFCFactory;

/** @typedef {(string|!ComponentClass<?>|!StatelessComponent<?>)} */
React.ReactType;

/** @typedef {(string|number)} */
React.Key;

/** @typedef {(string|function(?): ?)} */
React.Ref;

/** @typedef {(void|?)} */
React.ComponentState;

// End of modifications

// Modifications below:
//  - Added @extends ReactElement clauses to various Element types.

/** @record @struct */
React.Attributes = function() {};
 /** @type {(string|number)} */
React.Attributes.prototype.key;

/** @record @struct */
React.ClassAttributes = function() {};
 /** @type {(string|function(?): ?)} */
React.ClassAttributes.prototype.ref;

/** @interface */
React.ReactElement = function() {};
 /** @type {(string|!ComponentClass<?>|!StatelessComponent<?>)} */
React.ReactElement.prototype.type;
 /** @type {?} */
React.ReactElement.prototype.props;
 /** @type {(string|number)} */
React.ReactElement.prototype.key;

/**
 * @record @struct
 * @extends React.ReactElement
 */
React.SFCElement = function() {};
 /** @type {!StatelessComponent<?>} */
React.SFCElement.prototype.type;

/** @typedef {!ComponentElement<?, ?>} */
React.CElement;

/**
 * @record @struct
 * @extends React.ReactElement
 */
React.ComponentElement = function() {};
 /** @type {!ComponentClass<?>} */
React.ComponentElement.prototype.type;
 /** @type {(string|function(?): ?)} */
React.ComponentElement.prototype.ref;

/** @typedef {!ComponentElement<?, !ClassicComponent<?, (void|?)>>} */
React.ClassicElement;

/**
 * @record @struct
 * @extends React.ReactElement
 */
React.DOMElement = function() {};
 /** @type {string} */
React.DOMElement.prototype.type;
 /** @type {(string|function(?): ?)} */
React.DOMElement.prototype.ref;

/** @record @struct */
React.ReactHTMLElement = function() {};

/** @record @struct */
React.ReactSVGElement = function() {};

/** @record @struct */
React.Factory = function() {};

/* TODO: CallSignature: React */

/**
 * @record @struct
 * @extends React.ReactElement
 */
React.SFCFactory = function() {};

/* TODO: CallSignature: React */

/** @record @struct */
React.ComponentFactory = function() {};

/* TODO: CallSignature: React */

/** @typedef {!ComponentFactory<?, ?>} */
React.CFactory;

/** @typedef {!ComponentFactory<?, !ClassicComponent<?, (void|?)>>} */
React.ClassicFactory;

/** @record @struct */
React.DOMFactory = function() {};

/* TODO: CallSignature: React */

/** @record @struct */
React.HTMLFactory = function() {};

/** @record @struct */
React.ChangeTargetHTMLFactory = function() {};

/** @record @struct */
React.SVGFactory = function() {};

/** @typedef {(string|number)} */
React.ReactText;

/** @typedef {(string|number|!ReactElement<?>)} */
React.ReactChild;

/** @typedef {(?|!Array<(string|number|boolean|!Array<?>|!ReactElement<?>)>)} */
React.ReactFragment;

/** @typedef {(string|number|boolean|?|!ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!ReactElement<?>)>)} */
React.ReactNode;

/**
 * @param {!ComponentSpec<?, ?>} spec
 * @return {!React.ClassicComponentClass<?>}
 */
React.createClass = function(spec) {};

/**
 * @param {string|!StatelessComponent<?>|?|!ComponentClass<?>} type
 * @return {!DOMFactory<?, ?>|!SFCFactory<?>|!ComponentFactory<?, !ClassicComponent<?, (void|?)>>|!ComponentFactory<?, ?>|!React.Factory<?>}
 */
React.createFactory = function(type) {};

/**
 * @param {string|!StatelessComponent<?>|?|!ComponentClass<?>} type
 * @param {?=} props
 * @param {...(string|number|boolean|?|!ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!ReactElement<?>)>)} children
 * @return {!DOMElement<?, ?>|!ReactElement<?>}
 */
React.createElement = function(type, props, children) {};

/**
 * @param {!DOMElement<?, ?>|!SFCElement<?>|!ComponentElement<?, ?>|!ReactElement<?>} element
 * @param {?=} props
 * @param {...(string|number|boolean|?|!ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!ReactElement<?>)>)} children
 * @return {!DOMElement<?, ?>|!SFCElement<?>|!ComponentElement<?, ?>|!ReactElement<?>}
 */
React.cloneElement = function(element, props, children) {};

/**
 * @param {?} object
 * @return {boolean}
 */
React.isValidElement = function(object) {};
 /** @type {!React.ReactPropTypes} */
React.PropTypes;
 /** @type {!ReactChildren} */
React.Children;
 /** @type {string} */
React.version;

/** @typedef {(!Component<?, ?>|!Element)} */
React.ReactInstance;

/**
 * @constructor
 * @struct
 * @template P
 * @template C
 * @template S
 * @param {P} props
 * @param {C} context
 */
React.Component = function(props, context) {};
 /** @type {P} */
React.Component.prototype.props;
 /** @type {S} */
React.Component.prototype.state;
 /** @type {C} */
React.Component.prototype.context;
 /** @type {!Object<string,(!Component<?, ?>|!Element)>} */
React.Component.prototype.refs;

/**
 * @param {function(?, ?): ?|?} f_or_state
 * @param {function(): ?=} callback
 * @return {void}
 */
React.Component.prototype.setState = function(f_or_state, callback) {};

/**
 * @param {function(): ?=} callBack
 * @return {void}
 */
React.Component.prototype.forceUpdate = function(callBack) {};

/**
 * @return {!ReactElement<?>}
 */
React.Component.prototype.render = function() {};

/** @constructor @struct */
React.PureComponent = function() {};

/** @record @struct */
React.ClassicComponent = function() {};

/**
 * @param {?} nextState
 * @param {function(): ?=} callback
 * @return {void}
 */
React.ClassicComponent.prototype.replaceState = function(nextState, callback) {};

/**
 * @return {boolean}
 */
React.ClassicComponent.prototype.isMounted = function() {};

/**
 * @return {?}
 */
React.ClassicComponent.prototype.getInitialState = function() {};

/** @record @struct */
React.ChildContextProvider = function() {};

/**
 * @return {?}
 */
React.ChildContextProvider.prototype.getChildContext = function() {};

/** @typedef {!StatelessComponent<?>} */
React.SFC;

/** @record @struct */
React.StatelessComponent = function() {};

/* TODO: CallSignature: React */
 /** @type {!ValidationMap<?>} */
React.StatelessComponent.prototype.propTypes;
 /** @type {!ValidationMap<?>} */
React.StatelessComponent.prototype.contextTypes;
 /** @type {?} */
React.StatelessComponent.prototype.defaultProps;
 /** @type {string} */
React.StatelessComponent.prototype.displayName;

/** @record @struct */
React.ComponentClass = function() {};

/* TODO: ConstructSignature: React */
 /** @type {!ValidationMap<?>} */
React.ComponentClass.prototype.propTypes;
 /** @type {!ValidationMap<?>} */
React.ComponentClass.prototype.contextTypes;
 /** @type {!ValidationMap<?>} */
React.ComponentClass.prototype.childContextTypes;
 /** @type {?} */
React.ComponentClass.prototype.defaultProps;
 /** @type {string} */
React.ComponentClass.prototype.displayName;

/** @record @struct */
React.ClassicComponentClass = function() {};

/* TODO: ConstructSignature: React */

/**
 * @return {?}
 */
React.ClassicComponentClass.prototype.getDefaultProps = function() {};

/** @typedef {?} */
React.ClassType;

/** @record @struct */
React.ComponentLifecycle = function() {};

/**
 * @return {void}
 */
React.ComponentLifecycle.prototype.componentWillMount = function() {};

/**
 * @return {void}
 */
React.ComponentLifecycle.prototype.componentDidMount = function() {};

/**
 * @param {?} nextProps
 * @param {?} nextContext
 * @return {void}
 */
React.ComponentLifecycle.prototype.componentWillReceiveProps = function(nextProps, nextContext) {};

/**
 * @param {?} nextProps
 * @param {?} nextState
 * @param {?} nextContext
 * @return {boolean}
 */
React.ComponentLifecycle.prototype.shouldComponentUpdate = function(nextProps, nextState, nextContext) {};

/**
 * @param {?} nextProps
 * @param {?} nextState
 * @param {?} nextContext
 * @return {void}
 */
React.ComponentLifecycle.prototype.componentWillUpdate = function(nextProps, nextState, nextContext) {};

/**
 * @param {?} prevProps
 * @param {?} prevState
 * @param {?} prevContext
 * @return {void}
 */
React.ComponentLifecycle.prototype.componentDidUpdate = function(prevProps, prevState, prevContext) {};

/**
 * @return {void}
 */
React.ComponentLifecycle.prototype.componentWillUnmount = function() {};

/** @record @struct */
React.Mixin = function() {};
 /** @type {!Mixin} */
React.Mixin.prototype.mixins;
 /** @type {!Object<string,?>} */
React.Mixin.prototype.statics;
 /** @type {string} */
React.Mixin.prototype.displayName;
 /** @type {!ValidationMap<?>} */
React.Mixin.prototype.propTypes;
 /** @type {!ValidationMap<?>} */
React.Mixin.prototype.contextTypes;
 /** @type {!ValidationMap<?>} */
React.Mixin.prototype.childContextTypes;

/**
 * @return {?}
 */
React.Mixin.prototype.getDefaultProps = function() {};

/**
 * @return {?}
 */
React.Mixin.prototype.getInitialState = function() {};

/** @record @struct */
React.ComponentSpec = function() {};

/* TODO: IndexSignature: React */

/**
 * @return {!ReactElement<?>}
 */
React.ComponentSpec.prototype.render = function() {};

/** @record @struct */
React.SyntheticEvent = function() {};
 /** @type {boolean} */
React.SyntheticEvent.prototype.bubbles;
 /** @type {?} */
React.SyntheticEvent.prototype.currentTarget;
 /** @type {boolean} */
React.SyntheticEvent.prototype.cancelable;
 /** @type {boolean} */
React.SyntheticEvent.prototype.defaultPrevented;
 /** @type {number} */
React.SyntheticEvent.prototype.eventPhase;
 /** @type {boolean} */
React.SyntheticEvent.prototype.isTrusted;
 /** @type {!Event} */
React.SyntheticEvent.prototype.nativeEvent;
 /** @type {!EventTarget} */
React.SyntheticEvent.prototype.target;
 /** @type {!Date} */
React.SyntheticEvent.prototype.timeStamp;
 /** @type {string} */
React.SyntheticEvent.prototype.type;

/**
 * @return {void}
 */
React.SyntheticEvent.prototype.preventDefault = function() {};

/**
 * @return {boolean}
 */
React.SyntheticEvent.prototype.isDefaultPrevented = function() {};

/**
 * @return {void}
 */
React.SyntheticEvent.prototype.stopPropagation = function() {};

/**
 * @return {boolean}
 */
React.SyntheticEvent.prototype.isPropagationStopped = function() {};

/**
 * @return {void}
 */
React.SyntheticEvent.prototype.persist = function() {};

/** @record @struct */
React.ClipboardEvent = function() {};
 /** @type {!DataTransfer} */
React.ClipboardEvent.prototype.clipboardData;

/** @record @struct */
React.CompositionEvent = function() {};
 /** @type {string} */
React.CompositionEvent.prototype.data;

/** @record @struct */
React.DragEvent = function() {};
 /** @type {!DataTransfer} */
React.DragEvent.prototype.dataTransfer;

/** @record @struct */
React.FocusEvent = function() {};
 /** @type {!EventTarget} */
React.FocusEvent.prototype.relatedTarget;

/** @record @struct */
React.FormEvent = function() {};

/** @record @struct */
React.ChangeEvent = function() {};
 /** @type {?} */
React.ChangeEvent.prototype.target;

/** @record @struct */
React.KeyboardEvent = function() {};
 /** @type {boolean} */
React.KeyboardEvent.prototype.altKey;
 /** @type {number} */
React.KeyboardEvent.prototype.charCode;
 /** @type {boolean} */
React.KeyboardEvent.prototype.ctrlKey;
 /** @type {string} */
React.KeyboardEvent.prototype.key;
 /** @type {number} */
React.KeyboardEvent.prototype.keyCode;
 /** @type {string} */
React.KeyboardEvent.prototype.locale;
 /** @type {number} */
React.KeyboardEvent.prototype.location;
 /** @type {boolean} */
React.KeyboardEvent.prototype.metaKey;
 /** @type {boolean} */
React.KeyboardEvent.prototype.repeat;
 /** @type {boolean} */
React.KeyboardEvent.prototype.shiftKey;
 /** @type {number} */
React.KeyboardEvent.prototype.which;

/**
 * @param {string} key
 * @return {boolean}
 */
React.KeyboardEvent.prototype.getModifierState = function(key) {};

/** @record @struct */
React.MouseEvent = function() {};
 /** @type {boolean} */
React.MouseEvent.prototype.altKey;
 /** @type {number} */
React.MouseEvent.prototype.button;
 /** @type {number} */
React.MouseEvent.prototype.buttons;
 /** @type {number} */
React.MouseEvent.prototype.clientX;
 /** @type {number} */
React.MouseEvent.prototype.clientY;
 /** @type {boolean} */
React.MouseEvent.prototype.ctrlKey;
 /** @type {boolean} */
React.MouseEvent.prototype.metaKey;
 /** @type {number} */
React.MouseEvent.prototype.pageX;
 /** @type {number} */
React.MouseEvent.prototype.pageY;
 /** @type {!EventTarget} */
React.MouseEvent.prototype.relatedTarget;
 /** @type {number} */
React.MouseEvent.prototype.screenX;
 /** @type {number} */
React.MouseEvent.prototype.screenY;
 /** @type {boolean} */
React.MouseEvent.prototype.shiftKey;

/**
 * @param {string} key
 * @return {boolean}
 */
React.MouseEvent.prototype.getModifierState = function(key) {};

/** @record @struct */
React.TouchEvent = function() {};
 /** @type {boolean} */
React.TouchEvent.prototype.altKey;
 /** @type {!TouchList} */
React.TouchEvent.prototype.changedTouches;
 /** @type {boolean} */
React.TouchEvent.prototype.ctrlKey;
 /** @type {boolean} */
React.TouchEvent.prototype.metaKey;
 /** @type {boolean} */
React.TouchEvent.prototype.shiftKey;
 /** @type {!TouchList} */
React.TouchEvent.prototype.targetTouches;
 /** @type {!TouchList} */
React.TouchEvent.prototype.touches;

/**
 * @param {string} key
 * @return {boolean}
 */
React.TouchEvent.prototype.getModifierState = function(key) {};

/** @record @struct */
React.UIEvent = function() {};
 /** @type {number} */
React.UIEvent.prototype.detail;
 /** @type {!AbstractView} */
React.UIEvent.prototype.view;

/** @record @struct */
React.WheelEvent = function() {};
 /** @type {number} */
React.WheelEvent.prototype.deltaMode;
 /** @type {number} */
React.WheelEvent.prototype.deltaX;
 /** @type {number} */
React.WheelEvent.prototype.deltaY;
 /** @type {number} */
React.WheelEvent.prototype.deltaZ;

/** @record @struct */
React.AnimationEvent = function() {};
 /** @type {string} */
React.AnimationEvent.prototype.animationName;
 /** @type {string} */
React.AnimationEvent.prototype.pseudoElement;
 /** @type {number} */
React.AnimationEvent.prototype.elapsedTime;

/** @record @struct */
React.TransitionEvent = function() {};
 /** @type {string} */
React.TransitionEvent.prototype.propertyName;
 /** @type {string} */
React.TransitionEvent.prototype.pseudoElement;
 /** @type {number} */
React.TransitionEvent.prototype.elapsedTime;

/** @record @struct */
React.EventHandler = function() {};

/* TODO: CallSignature: React */

/** @typedef {!EventHandler<!SyntheticEvent<?>>} */
React.ReactEventHandler;

/** @typedef {!EventHandler<!ClipboardEvent<?>>} */
React.ClipboardEventHandler;

/** @typedef {!EventHandler<!CompositionEvent<?>>} */
React.CompositionEventHandler;

/** @typedef {!EventHandler<!DragEvent<?>>} */
React.DragEventHandler;

/** @typedef {!EventHandler<!FocusEvent<?>>} */
React.FocusEventHandler;

/** @typedef {!EventHandler<!FormEvent<?>>} */
React.FormEventHandler;

/** @typedef {!EventHandler<!ChangeEvent<?>>} */
React.ChangeEventHandler;

/** @typedef {!EventHandler<!KeyboardEvent<?>>} */
React.KeyboardEventHandler;

/** @typedef {!EventHandler<!MouseEvent<?>>} */
React.MouseEventHandler;

/** @typedef {!EventHandler<!TouchEvent<?>>} */
React.TouchEventHandler;

/** @typedef {!EventHandler<!UIEvent<?>>} */
React.UIEventHandler;

/** @typedef {!EventHandler<!WheelEvent<?>>} */
React.WheelEventHandler;

/** @typedef {!EventHandler<!AnimationEvent>} */
React.AnimationEventHandler;

/** @typedef {!EventHandler<!TransitionEvent>} */
React.TransitionEventHandler;

/** @record @struct */
React.Props = function() {};
 /** @type {(string|number|boolean|?|!ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!ReactElement<?>)>)} */
React.Props.prototype.children;
 /** @type {(string|number)} */
React.Props.prototype.key;
 /** @type {(string|function(?): ?)} */
React.Props.prototype.ref;

/** @record @struct */
React.HTMLProps = function() {};

/** @record @struct */
React.ChangeTargetHTMLProps = function() {};

/** @record @struct */
React.SVGProps = function() {};

/** @record @struct */
React.DOMAttributes = function() {};
 /** @type {(string|number|boolean|?|!ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!ReactElement<?>)>)} */
React.DOMAttributes.prototype.children;
 /** @type {{___html: string}} */
React.DOMAttributes.prototype.dangerouslySetInnerHTML;
 /** @type {!EventHandler<!ClipboardEvent<?>>} */
React.DOMAttributes.prototype.onCopy;
 /** @type {!EventHandler<!ClipboardEvent<?>>} */
React.DOMAttributes.prototype.onCopyCapture;
 /** @type {!EventHandler<!ClipboardEvent<?>>} */
React.DOMAttributes.prototype.onCut;
 /** @type {!EventHandler<!ClipboardEvent<?>>} */
React.DOMAttributes.prototype.onCutCapture;
 /** @type {!EventHandler<!ClipboardEvent<?>>} */
React.DOMAttributes.prototype.onPaste;
 /** @type {!EventHandler<!ClipboardEvent<?>>} */
React.DOMAttributes.prototype.onPasteCapture;
 /** @type {!EventHandler<!CompositionEvent<?>>} */
React.DOMAttributes.prototype.onCompositionEnd;
 /** @type {!EventHandler<!CompositionEvent<?>>} */
React.DOMAttributes.prototype.onCompositionEndCapture;
 /** @type {!EventHandler<!CompositionEvent<?>>} */
React.DOMAttributes.prototype.onCompositionStart;
 /** @type {!EventHandler<!CompositionEvent<?>>} */
React.DOMAttributes.prototype.onCompositionStartCapture;
 /** @type {!EventHandler<!CompositionEvent<?>>} */
React.DOMAttributes.prototype.onCompositionUpdate;
 /** @type {!EventHandler<!CompositionEvent<?>>} */
React.DOMAttributes.prototype.onCompositionUpdateCapture;
 /** @type {!EventHandler<!FocusEvent<?>>} */
React.DOMAttributes.prototype.onFocus;
 /** @type {!EventHandler<!FocusEvent<?>>} */
React.DOMAttributes.prototype.onFocusCapture;
 /** @type {!EventHandler<!FocusEvent<?>>} */
React.DOMAttributes.prototype.onBlur;
 /** @type {!EventHandler<!FocusEvent<?>>} */
React.DOMAttributes.prototype.onBlurCapture;
 /** @type {!EventHandler<!FormEvent<?>>} */
React.DOMAttributes.prototype.onChange;
 /** @type {!EventHandler<!FormEvent<?>>} */
React.DOMAttributes.prototype.onChangeCapture;
 /** @type {!EventHandler<!FormEvent<?>>} */
React.DOMAttributes.prototype.onInput;
 /** @type {!EventHandler<!FormEvent<?>>} */
React.DOMAttributes.prototype.onInputCapture;
 /** @type {!EventHandler<!FormEvent<?>>} */
React.DOMAttributes.prototype.onReset;
 /** @type {!EventHandler<!FormEvent<?>>} */
React.DOMAttributes.prototype.onResetCapture;
 /** @type {!EventHandler<!FormEvent<?>>} */
React.DOMAttributes.prototype.onSubmit;
 /** @type {!EventHandler<!FormEvent<?>>} */
React.DOMAttributes.prototype.onSubmitCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onLoad;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onLoadCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onError;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onErrorCapture;
 /** @type {!EventHandler<!KeyboardEvent<?>>} */
React.DOMAttributes.prototype.onKeyDown;
 /** @type {!EventHandler<!KeyboardEvent<?>>} */
React.DOMAttributes.prototype.onKeyDownCapture;
 /** @type {!EventHandler<!KeyboardEvent<?>>} */
React.DOMAttributes.prototype.onKeyPress;
 /** @type {!EventHandler<!KeyboardEvent<?>>} */
React.DOMAttributes.prototype.onKeyPressCapture;
 /** @type {!EventHandler<!KeyboardEvent<?>>} */
React.DOMAttributes.prototype.onKeyUp;
 /** @type {!EventHandler<!KeyboardEvent<?>>} */
React.DOMAttributes.prototype.onKeyUpCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onAbort;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onAbortCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onCanPlay;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onCanPlayCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onCanPlayThrough;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onCanPlayThroughCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onDurationChange;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onDurationChangeCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onEmptied;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onEmptiedCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onEncrypted;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onEncryptedCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onEnded;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onEndedCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onLoadedData;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onLoadedDataCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onLoadedMetadata;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onLoadedMetadataCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onLoadStart;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onLoadStartCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onPause;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onPauseCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onPlay;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onPlayCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onPlaying;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onPlayingCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onProgress;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onProgressCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onRateChange;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onRateChangeCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onSeeked;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onSeekedCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onSeeking;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onSeekingCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onStalled;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onStalledCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onSuspend;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onSuspendCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onTimeUpdate;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onTimeUpdateCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onVolumeChange;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onVolumeChangeCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onWaiting;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onWaitingCapture;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onClick;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onClickCapture;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onContextMenu;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onContextMenuCapture;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onDoubleClick;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onDoubleClickCapture;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDrag;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragCapture;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragEnd;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragEndCapture;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragEnter;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragEnterCapture;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragExit;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragExitCapture;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragLeave;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragLeaveCapture;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragOver;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragOverCapture;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragStart;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDragStartCapture;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDrop;
 /** @type {!EventHandler<!DragEvent<?>>} */
React.DOMAttributes.prototype.onDropCapture;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseDown;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseDownCapture;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseEnter;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseLeave;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseMove;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseMoveCapture;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseOut;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseOutCapture;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseOver;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseOverCapture;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseUp;
 /** @type {!EventHandler<!MouseEvent<?>>} */
React.DOMAttributes.prototype.onMouseUpCapture;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onSelect;
 /** @type {!EventHandler<!SyntheticEvent<?>>} */
React.DOMAttributes.prototype.onSelectCapture;
 /** @type {!EventHandler<!TouchEvent<?>>} */
React.DOMAttributes.prototype.onTouchCancel;
 /** @type {!EventHandler<!TouchEvent<?>>} */
React.DOMAttributes.prototype.onTouchCancelCapture;
 /** @type {!EventHandler<!TouchEvent<?>>} */
React.DOMAttributes.prototype.onTouchEnd;
 /** @type {!EventHandler<!TouchEvent<?>>} */
React.DOMAttributes.prototype.onTouchEndCapture;
 /** @type {!EventHandler<!TouchEvent<?>>} */
React.DOMAttributes.prototype.onTouchMove;
 /** @type {!EventHandler<!TouchEvent<?>>} */
React.DOMAttributes.prototype.onTouchMoveCapture;
 /** @type {!EventHandler<!TouchEvent<?>>} */
React.DOMAttributes.prototype.onTouchStart;
 /** @type {!EventHandler<!TouchEvent<?>>} */
React.DOMAttributes.prototype.onTouchStartCapture;
 /** @type {!EventHandler<!UIEvent<?>>} */
React.DOMAttributes.prototype.onScroll;
 /** @type {!EventHandler<!UIEvent<?>>} */
React.DOMAttributes.prototype.onScrollCapture;
 /** @type {!EventHandler<!WheelEvent<?>>} */
React.DOMAttributes.prototype.onWheel;
 /** @type {!EventHandler<!WheelEvent<?>>} */
React.DOMAttributes.prototype.onWheelCapture;
 /** @type {!EventHandler<!AnimationEvent>} */
React.DOMAttributes.prototype.onAnimationStart;
 /** @type {!EventHandler<!AnimationEvent>} */
React.DOMAttributes.prototype.onAnimationStartCapture;
 /** @type {!EventHandler<!AnimationEvent>} */
React.DOMAttributes.prototype.onAnimationEnd;
 /** @type {!EventHandler<!AnimationEvent>} */
React.DOMAttributes.prototype.onAnimationEndCapture;
 /** @type {!EventHandler<!AnimationEvent>} */
React.DOMAttributes.prototype.onAnimationIteration;
 /** @type {!EventHandler<!AnimationEvent>} */
React.DOMAttributes.prototype.onAnimationIterationCapture;
 /** @type {!EventHandler<!TransitionEvent>} */
React.DOMAttributes.prototype.onTransitionEnd;
 /** @type {!EventHandler<!TransitionEvent>} */
React.DOMAttributes.prototype.onTransitionEndCapture;

/** @typedef {string} */
React.CSSWideKeyword;

/** @typedef {string} */
React.CSSPercentage;

/** @typedef {(string|number)} */
React.CSSLength;

/** @record @struct */
React.CSSProperties = function() {};
 /** @type {?} */
React.CSSProperties.prototype.alignContent;
 /** @type {?} */
React.CSSProperties.prototype.alignItems;
 /** @type {?} */
React.CSSProperties.prototype.alignSelf;
 /** @type {?} */
React.CSSProperties.prototype.alignmentAdjust;
 /** @type {?} */
React.CSSProperties.prototype.alignmentBaseline;
 /** @type {?} */
React.CSSProperties.prototype.animationDelay;
 /** @type {?} */
React.CSSProperties.prototype.animationDirection;
 /** @type {?} */
React.CSSProperties.prototype.animationIterationCount;
 /** @type {?} */
React.CSSProperties.prototype.animationName;
 /** @type {?} */
React.CSSProperties.prototype.animationPlayState;
 /** @type {?} */
React.CSSProperties.prototype.appearance;
 /** @type {?} */
React.CSSProperties.prototype.backfaceVisibility;
 /** @type {?} */
React.CSSProperties.prototype.background;
 /** @type {string} */
React.CSSProperties.prototype.backgroundAttachment;
 /** @type {?} */
React.CSSProperties.prototype.backgroundBlendMode;
 /** @type {?} */
React.CSSProperties.prototype.backgroundColor;
 /** @type {?} */
React.CSSProperties.prototype.backgroundComposite;
 /** @type {?} */
React.CSSProperties.prototype.backgroundImage;
 /** @type {?} */
React.CSSProperties.prototype.backgroundOrigin;
 /** @type {?} */
React.CSSProperties.prototype.backgroundPosition;
 /** @type {?} */
React.CSSProperties.prototype.backgroundRepeat;
 /** @type {?} */
React.CSSProperties.prototype.baselineShift;
 /** @type {?} */
React.CSSProperties.prototype.behavior;
 /** @type {?} */
React.CSSProperties.prototype.border;
 /** @type {?} */
React.CSSProperties.prototype.borderBottom;
 /** @type {?} */
React.CSSProperties.prototype.borderBottomColor;
 /** @type {?} */
React.CSSProperties.prototype.borderBottomLeftRadius;
 /** @type {?} */
React.CSSProperties.prototype.borderBottomRightRadius;
 /** @type {?} */
React.CSSProperties.prototype.borderBottomStyle;
 /** @type {?} */
React.CSSProperties.prototype.borderBottomWidth;
 /** @type {?} */
React.CSSProperties.prototype.borderCollapse;
 /** @type {?} */
React.CSSProperties.prototype.borderColor;
 /** @type {?} */
React.CSSProperties.prototype.borderCornerShape;
 /** @type {?} */
React.CSSProperties.prototype.borderImageSource;
 /** @type {?} */
React.CSSProperties.prototype.borderImageWidth;
 /** @type {?} */
React.CSSProperties.prototype.borderLeft;
 /** @type {?} */
React.CSSProperties.prototype.borderLeftColor;
 /** @type {?} */
React.CSSProperties.prototype.borderLeftStyle;
 /** @type {?} */
React.CSSProperties.prototype.borderLeftWidth;
 /** @type {?} */
React.CSSProperties.prototype.borderRight;
 /** @type {?} */
React.CSSProperties.prototype.borderRightColor;
 /** @type {?} */
React.CSSProperties.prototype.borderRightStyle;
 /** @type {?} */
React.CSSProperties.prototype.borderRightWidth;
 /** @type {?} */
React.CSSProperties.prototype.borderSpacing;
 /** @type {?} */
React.CSSProperties.prototype.borderStyle;
 /** @type {?} */
React.CSSProperties.prototype.borderTop;
 /** @type {?} */
React.CSSProperties.prototype.borderTopColor;
 /** @type {?} */
React.CSSProperties.prototype.borderTopLeftRadius;
 /** @type {?} */
React.CSSProperties.prototype.borderTopRightRadius;
 /** @type {?} */
React.CSSProperties.prototype.borderTopStyle;
 /** @type {?} */
React.CSSProperties.prototype.borderTopWidth;
 /** @type {?} */
React.CSSProperties.prototype.borderWidth;
 /** @type {?} */
React.CSSProperties.prototype.bottom;
 /** @type {?} */
React.CSSProperties.prototype.boxAlign;
 /** @type {?} */
React.CSSProperties.prototype.boxDecorationBreak;
 /** @type {?} */
React.CSSProperties.prototype.boxDirection;
 /** @type {?} */
React.CSSProperties.prototype.boxLineProgression;
 /** @type {?} */
React.CSSProperties.prototype.boxLines;
 /** @type {?} */
React.CSSProperties.prototype.boxOrdinalGroup;
 /** @type {(number|string)} */
React.CSSProperties.prototype.boxFlex;
 /** @type {(number|string)} */
React.CSSProperties.prototype.boxFlexGroup;
 /** @type {?} */
React.CSSProperties.prototype.breakAfter;
 /** @type {?} */
React.CSSProperties.prototype.breakBefore;
 /** @type {?} */
React.CSSProperties.prototype.breakInside;
 /** @type {?} */
React.CSSProperties.prototype.clear;
 /** @type {?} */
React.CSSProperties.prototype.clip;
 /** @type {?} */
React.CSSProperties.prototype.clipRule;
 /** @type {?} */
React.CSSProperties.prototype.color;
 /** @type {(number|string)} */
React.CSSProperties.prototype.columnCount;
 /** @type {?} */
React.CSSProperties.prototype.columnFill;
 /** @type {?} */
React.CSSProperties.prototype.columnGap;
 /** @type {?} */
React.CSSProperties.prototype.columnRule;
 /** @type {?} */
React.CSSProperties.prototype.columnRuleColor;
 /** @type {?} */
React.CSSProperties.prototype.columnRuleWidth;
 /** @type {?} */
React.CSSProperties.prototype.columnSpan;
 /** @type {?} */
React.CSSProperties.prototype.columnWidth;
 /** @type {?} */
React.CSSProperties.prototype.columns;
 /** @type {?} */
React.CSSProperties.prototype.counterIncrement;
 /** @type {?} */
React.CSSProperties.prototype.counterReset;
 /** @type {?} */
React.CSSProperties.prototype.cue;
 /** @type {?} */
React.CSSProperties.prototype.cueAfter;
 /** @type {?} */
React.CSSProperties.prototype.cursor;
 /** @type {?} */
React.CSSProperties.prototype.direction;
 /** @type {?} */
React.CSSProperties.prototype.display;
 /** @type {?} */
React.CSSProperties.prototype.fill;
 /** @type {(number|string)} */
React.CSSProperties.prototype.fillOpacity;
 /** @type {?} */
React.CSSProperties.prototype.fillRule;
 /** @type {?} */
React.CSSProperties.prototype.filter;
 /** @type {(string|number)} */
React.CSSProperties.prototype.flex;
 /** @type {?} */
React.CSSProperties.prototype.flexAlign;
 /** @type {?} */
React.CSSProperties.prototype.flexBasis;
 /** @type {?} */
React.CSSProperties.prototype.flexDirection;
 /** @type {?} */
React.CSSProperties.prototype.flexFlow;
 /** @type {(number|string)} */
React.CSSProperties.prototype.flexGrow;
 /** @type {?} */
React.CSSProperties.prototype.flexItemAlign;
 /** @type {?} */
React.CSSProperties.prototype.flexLinePack;
 /** @type {?} */
React.CSSProperties.prototype.flexOrder;
 /** @type {(number|string)} */
React.CSSProperties.prototype.flexShrink;
 /** @type {?} */
React.CSSProperties.prototype.float;
 /** @type {?} */
React.CSSProperties.prototype.flowFrom;
 /** @type {?} */
React.CSSProperties.prototype.font;
 /** @type {?} */
React.CSSProperties.prototype.fontFamily;
 /** @type {?} */
React.CSSProperties.prototype.fontKerning;
 /** @type {(string|number)} */
React.CSSProperties.prototype.fontSize;
 /** @type {(number|string)} */
React.CSSProperties.prototype.fontSizeAdjust;
 /** @type {string} */
React.CSSProperties.prototype.fontStretch;
 /** @type {string} */
React.CSSProperties.prototype.fontStyle;
 /** @type {?} */
React.CSSProperties.prototype.fontSynthesis;
 /** @type {?} */
React.CSSProperties.prototype.fontVariant;
 /** @type {?} */
React.CSSProperties.prototype.fontVariantAlternates;
 /** @type {(string|number)} */
React.CSSProperties.prototype.fontWeight;
 /** @type {?} */
React.CSSProperties.prototype.gridArea;
 /** @type {?} */
React.CSSProperties.prototype.gridColumn;
 /** @type {?} */
React.CSSProperties.prototype.gridColumnEnd;
 /** @type {?} */
React.CSSProperties.prototype.gridColumnStart;
 /** @type {?} */
React.CSSProperties.prototype.gridRow;
 /** @type {?} */
React.CSSProperties.prototype.gridRowEnd;
 /** @type {?} */
React.CSSProperties.prototype.gridRowPosition;
 /** @type {?} */
React.CSSProperties.prototype.gridRowSpan;
 /** @type {?} */
React.CSSProperties.prototype.gridTemplateAreas;
 /** @type {?} */
React.CSSProperties.prototype.gridTemplateColumns;
 /** @type {?} */
React.CSSProperties.prototype.gridTemplateRows;
 /** @type {?} */
React.CSSProperties.prototype.height;
 /** @type {?} */
React.CSSProperties.prototype.hyphenateLimitChars;
 /** @type {?} */
React.CSSProperties.prototype.hyphenateLimitLines;
 /** @type {?} */
React.CSSProperties.prototype.hyphenateLimitZone;
 /** @type {?} */
React.CSSProperties.prototype.hyphens;
 /** @type {?} */
React.CSSProperties.prototype.imeMode;
 /** @type {string} */
React.CSSProperties.prototype.justifyContent;
 /** @type {?} */
React.CSSProperties.prototype.layoutGrid;
 /** @type {?} */
React.CSSProperties.prototype.layoutGridChar;
 /** @type {?} */
React.CSSProperties.prototype.layoutGridLine;
 /** @type {?} */
React.CSSProperties.prototype.layoutGridMode;
 /** @type {?} */
React.CSSProperties.prototype.layoutGridType;
 /** @type {?} */
React.CSSProperties.prototype.left;
 /** @type {?} */
React.CSSProperties.prototype.letterSpacing;
 /** @type {?} */
React.CSSProperties.prototype.lineBreak;
 /** @type {(number|string)} */
React.CSSProperties.prototype.lineClamp;
 /** @type {(string|number)} */
React.CSSProperties.prototype.lineHeight;
 /** @type {?} */
React.CSSProperties.prototype.listStyle;
 /** @type {?} */
React.CSSProperties.prototype.listStyleImage;
 /** @type {?} */
React.CSSProperties.prototype.listStylePosition;
 /** @type {?} */
React.CSSProperties.prototype.listStyleType;
 /** @type {?} */
React.CSSProperties.prototype.margin;
 /** @type {?} */
React.CSSProperties.prototype.marginBottom;
 /** @type {?} */
React.CSSProperties.prototype.marginLeft;
 /** @type {?} */
React.CSSProperties.prototype.marginRight;
 /** @type {?} */
React.CSSProperties.prototype.marginTop;
 /** @type {?} */
React.CSSProperties.prototype.marqueeDirection;
 /** @type {?} */
React.CSSProperties.prototype.marqueeStyle;
 /** @type {?} */
React.CSSProperties.prototype.mask;
 /** @type {?} */
React.CSSProperties.prototype.maskBorder;
 /** @type {?} */
React.CSSProperties.prototype.maskBorderRepeat;
 /** @type {?} */
React.CSSProperties.prototype.maskBorderSlice;
 /** @type {?} */
React.CSSProperties.prototype.maskBorderSource;
 /** @type {?} */
React.CSSProperties.prototype.maskBorderWidth;
 /** @type {?} */
React.CSSProperties.prototype.maskClip;
 /** @type {?} */
React.CSSProperties.prototype.maskOrigin;
 /** @type {?} */
React.CSSProperties.prototype.maxFontSize;
 /** @type {?} */
React.CSSProperties.prototype.maxHeight;
 /** @type {?} */
React.CSSProperties.prototype.maxWidth;
 /** @type {?} */
React.CSSProperties.prototype.minHeight;
 /** @type {?} */
React.CSSProperties.prototype.minWidth;
 /** @type {(number|string)} */
React.CSSProperties.prototype.opacity;
 /** @type {(number|string)} */
React.CSSProperties.prototype.order;
 /** @type {(number|string)} */
React.CSSProperties.prototype.orphans;
 /** @type {?} */
React.CSSProperties.prototype.outline;
 /** @type {?} */
React.CSSProperties.prototype.outlineColor;
 /** @type {?} */
React.CSSProperties.prototype.outlineOffset;
 /** @type {?} */
React.CSSProperties.prototype.overflow;
 /** @type {?} */
React.CSSProperties.prototype.overflowStyle;
 /** @type {?} */
React.CSSProperties.prototype.overflowX;
 /** @type {?} */
React.CSSProperties.prototype.overflowY;
 /** @type {?} */
React.CSSProperties.prototype.padding;
 /** @type {?} */
React.CSSProperties.prototype.paddingBottom;
 /** @type {?} */
React.CSSProperties.prototype.paddingLeft;
 /** @type {?} */
React.CSSProperties.prototype.paddingRight;
 /** @type {?} */
React.CSSProperties.prototype.paddingTop;
 /** @type {?} */
React.CSSProperties.prototype.pageBreakAfter;
 /** @type {?} */
React.CSSProperties.prototype.pageBreakBefore;
 /** @type {?} */
React.CSSProperties.prototype.pageBreakInside;
 /** @type {?} */
React.CSSProperties.prototype.pause;
 /** @type {?} */
React.CSSProperties.prototype.pauseAfter;
 /** @type {?} */
React.CSSProperties.prototype.pauseBefore;
 /** @type {?} */
React.CSSProperties.prototype.perspective;
 /** @type {?} */
React.CSSProperties.prototype.perspectiveOrigin;
 /** @type {?} */
React.CSSProperties.prototype.pointerEvents;
 /** @type {?} */
React.CSSProperties.prototype.position;
 /** @type {?} */
React.CSSProperties.prototype.punctuationTrim;
 /** @type {?} */
React.CSSProperties.prototype.quotes;
 /** @type {?} */
React.CSSProperties.prototype.regionFragment;
 /** @type {?} */
React.CSSProperties.prototype.restAfter;
 /** @type {?} */
React.CSSProperties.prototype.restBefore;
 /** @type {?} */
React.CSSProperties.prototype.right;
 /** @type {?} */
React.CSSProperties.prototype.rubyAlign;
 /** @type {?} */
React.CSSProperties.prototype.rubyPosition;
 /** @type {?} */
React.CSSProperties.prototype.shapeImageThreshold;
 /** @type {?} */
React.CSSProperties.prototype.shapeInside;
 /** @type {?} */
React.CSSProperties.prototype.shapeMargin;
 /** @type {?} */
React.CSSProperties.prototype.shapeOutside;
 /** @type {?} */
React.CSSProperties.prototype.speak;
 /** @type {?} */
React.CSSProperties.prototype.speakAs;
 /** @type {(number|string)} */
React.CSSProperties.prototype.strokeOpacity;
 /** @type {(string|number)} */
React.CSSProperties.prototype.strokeWidth;
 /** @type {?} */
React.CSSProperties.prototype.tabSize;
 /** @type {?} */
React.CSSProperties.prototype.tableLayout;
 /** @type {?} */
React.CSSProperties.prototype.textAlign;
 /** @type {?} */
React.CSSProperties.prototype.textAlignLast;
 /** @type {?} */
React.CSSProperties.prototype.textDecoration;
 /** @type {?} */
React.CSSProperties.prototype.textDecorationColor;
 /** @type {?} */
React.CSSProperties.prototype.textDecorationLine;
 /** @type {?} */
React.CSSProperties.prototype.textDecorationLineThrough;
 /** @type {?} */
React.CSSProperties.prototype.textDecorationNone;
 /** @type {?} */
React.CSSProperties.prototype.textDecorationOverline;
 /** @type {?} */
React.CSSProperties.prototype.textDecorationSkip;
 /** @type {?} */
React.CSSProperties.prototype.textDecorationStyle;
 /** @type {?} */
React.CSSProperties.prototype.textDecorationUnderline;
 /** @type {?} */
React.CSSProperties.prototype.textEmphasis;
 /** @type {?} */
React.CSSProperties.prototype.textEmphasisColor;
 /** @type {?} */
React.CSSProperties.prototype.textEmphasisStyle;
 /** @type {?} */
React.CSSProperties.prototype.textHeight;
 /** @type {?} */
React.CSSProperties.prototype.textIndent;
 /** @type {?} */
React.CSSProperties.prototype.textJustifyTrim;
 /** @type {?} */
React.CSSProperties.prototype.textKashidaSpace;
 /** @type {?} */
React.CSSProperties.prototype.textLineThrough;
 /** @type {?} */
React.CSSProperties.prototype.textLineThroughColor;
 /** @type {?} */
React.CSSProperties.prototype.textLineThroughMode;
 /** @type {?} */
React.CSSProperties.prototype.textLineThroughStyle;
 /** @type {?} */
React.CSSProperties.prototype.textLineThroughWidth;
 /** @type {?} */
React.CSSProperties.prototype.textOverflow;
 /** @type {?} */
React.CSSProperties.prototype.textOverline;
 /** @type {?} */
React.CSSProperties.prototype.textOverlineColor;
 /** @type {?} */
React.CSSProperties.prototype.textOverlineMode;
 /** @type {?} */
React.CSSProperties.prototype.textOverlineStyle;
 /** @type {?} */
React.CSSProperties.prototype.textOverlineWidth;
 /** @type {?} */
React.CSSProperties.prototype.textRendering;
 /** @type {?} */
React.CSSProperties.prototype.textScript;
 /** @type {?} */
React.CSSProperties.prototype.textShadow;
 /** @type {?} */
React.CSSProperties.prototype.textTransform;
 /** @type {?} */
React.CSSProperties.prototype.textUnderlinePosition;
 /** @type {?} */
React.CSSProperties.prototype.textUnderlineStyle;
 /** @type {?} */
React.CSSProperties.prototype.top;
 /** @type {?} */
React.CSSProperties.prototype.touchAction;
 /** @type {?} */
React.CSSProperties.prototype.transform;
 /** @type {?} */
React.CSSProperties.prototype.transformOrigin;
 /** @type {?} */
React.CSSProperties.prototype.transformOriginZ;
 /** @type {?} */
React.CSSProperties.prototype.transformStyle;
 /** @type {?} */
React.CSSProperties.prototype.transition;
 /** @type {?} */
React.CSSProperties.prototype.transitionDelay;
 /** @type {?} */
React.CSSProperties.prototype.transitionDuration;
 /** @type {?} */
React.CSSProperties.prototype.transitionProperty;
 /** @type {?} */
React.CSSProperties.prototype.transitionTimingFunction;
 /** @type {?} */
React.CSSProperties.prototype.unicodeBidi;
 /** @type {?} */
React.CSSProperties.prototype.unicodeRange;
 /** @type {?} */
React.CSSProperties.prototype.userFocus;
 /** @type {?} */
React.CSSProperties.prototype.userInput;
 /** @type {?} */
React.CSSProperties.prototype.verticalAlign;
 /** @type {?} */
React.CSSProperties.prototype.visibility;
 /** @type {?} */
React.CSSProperties.prototype.voiceBalance;
 /** @type {?} */
React.CSSProperties.prototype.voiceDuration;
 /** @type {?} */
React.CSSProperties.prototype.voiceFamily;
 /** @type {?} */
React.CSSProperties.prototype.voicePitch;
 /** @type {?} */
React.CSSProperties.prototype.voiceRange;
 /** @type {?} */
React.CSSProperties.prototype.voiceRate;
 /** @type {?} */
React.CSSProperties.prototype.voiceStress;
 /** @type {?} */
React.CSSProperties.prototype.voiceVolume;
 /** @type {?} */
React.CSSProperties.prototype.whiteSpace;
 /** @type {?} */
React.CSSProperties.prototype.whiteSpaceTreatment;
 /** @type {(number|string)} */
React.CSSProperties.prototype.widows;
 /** @type {?} */
React.CSSProperties.prototype.width;
 /** @type {?} */
React.CSSProperties.prototype.wordBreak;
 /** @type {?} */
React.CSSProperties.prototype.wordSpacing;
 /** @type {?} */
React.CSSProperties.prototype.wordWrap;
 /** @type {?} */
React.CSSProperties.prototype.wrapFlow;
 /** @type {?} */
React.CSSProperties.prototype.wrapMargin;
 /** @type {?} */
React.CSSProperties.prototype.wrapOption;
 /** @type {?} */
React.CSSProperties.prototype.writingMode;
 /** @type {(number|string)} */
React.CSSProperties.prototype.zIndex;
 /** @type {(string|number)} */
React.CSSProperties.prototype.zoom;

/* TODO: IndexSignature: React */

/** @record @struct */
React.HTMLAttributes = function() {};
 /** @type {boolean} */
React.HTMLAttributes.prototype.defaultChecked;
 /** @type {(string|!Array<string>)} */
React.HTMLAttributes.prototype.defaultValue;
 /** @type {string} */
React.HTMLAttributes.prototype.accept;
 /** @type {string} */
React.HTMLAttributes.prototype.acceptCharset;
 /** @type {string} */
React.HTMLAttributes.prototype.accessKey;
 /** @type {string} */
React.HTMLAttributes.prototype.action;
 /** @type {boolean} */
React.HTMLAttributes.prototype.allowFullScreen;
 /** @type {boolean} */
React.HTMLAttributes.prototype.allowTransparency;
 /** @type {string} */
React.HTMLAttributes.prototype.alt;
 /** @type {boolean} */
React.HTMLAttributes.prototype.async;
 /** @type {string} */
React.HTMLAttributes.prototype.autoComplete;
 /** @type {boolean} */
React.HTMLAttributes.prototype.autoFocus;
 /** @type {boolean} */
React.HTMLAttributes.prototype.autoPlay;
 /** @type {boolean} */
React.HTMLAttributes.prototype.capture;
 /** @type {(string|number)} */
React.HTMLAttributes.prototype.cellPadding;
 /** @type {(string|number)} */
React.HTMLAttributes.prototype.cellSpacing;
 /** @type {string} */
React.HTMLAttributes.prototype.charSet;
 /** @type {string} */
React.HTMLAttributes.prototype.challenge;
 /** @type {boolean} */
React.HTMLAttributes.prototype.checked;
 /** @type {string} */
React.HTMLAttributes.prototype.classID;
 /** @type {string} */
React.HTMLAttributes.prototype.className;
 /** @type {number} */
React.HTMLAttributes.prototype.cols;
 /** @type {number} */
React.HTMLAttributes.prototype.colSpan;
 /** @type {string} */
React.HTMLAttributes.prototype.content;
 /** @type {boolean} */
React.HTMLAttributes.prototype.contentEditable;
 /** @type {string} */
React.HTMLAttributes.prototype.contextMenu;
 /** @type {boolean} */
React.HTMLAttributes.prototype.controls;
 /** @type {string} */
React.HTMLAttributes.prototype.coords;
 /** @type {string} */
React.HTMLAttributes.prototype.crossOrigin;
 /** @type {string} */
React.HTMLAttributes.prototype.data;
 /** @type {string} */
React.HTMLAttributes.prototype.dateTime;
 /** @type {boolean} */
React.HTMLAttributes.prototype.default;
 /** @type {boolean} */
React.HTMLAttributes.prototype.defer;
 /** @type {string} */
React.HTMLAttributes.prototype.dir;
 /** @type {boolean} */
React.HTMLAttributes.prototype.disabled;
 /** @type {?} */
React.HTMLAttributes.prototype.download;
 /** @type {boolean} */
React.HTMLAttributes.prototype.draggable;
 /** @type {string} */
React.HTMLAttributes.prototype.encType;
 /** @type {string} */
React.HTMLAttributes.prototype.form;
 /** @type {string} */
React.HTMLAttributes.prototype.formAction;
 /** @type {string} */
React.HTMLAttributes.prototype.formEncType;
 /** @type {string} */
React.HTMLAttributes.prototype.formMethod;
 /** @type {boolean} */
React.HTMLAttributes.prototype.formNoValidate;
 /** @type {string} */
React.HTMLAttributes.prototype.formTarget;
 /** @type {(string|number)} */
React.HTMLAttributes.prototype.frameBorder;
 /** @type {string} */
React.HTMLAttributes.prototype.headers;
 /** @type {(string|number)} */
React.HTMLAttributes.prototype.height;
 /** @type {boolean} */
React.HTMLAttributes.prototype.hidden;
 /** @type {number} */
React.HTMLAttributes.prototype.high;
 /** @type {string} */
React.HTMLAttributes.prototype.href;
 /** @type {string} */
React.HTMLAttributes.prototype.hrefLang;
 /** @type {string} */
React.HTMLAttributes.prototype.htmlFor;
 /** @type {string} */
React.HTMLAttributes.prototype.httpEquiv;
 /** @type {string} */
React.HTMLAttributes.prototype.id;
 /** @type {string} */
React.HTMLAttributes.prototype.inputMode;
 /** @type {string} */
React.HTMLAttributes.prototype.integrity;
 /** @type {string} */
React.HTMLAttributes.prototype.is;
 /** @type {string} */
React.HTMLAttributes.prototype.keyParams;
 /** @type {string} */
React.HTMLAttributes.prototype.keyType;
 /** @type {string} */
React.HTMLAttributes.prototype.kind;
 /** @type {string} */
React.HTMLAttributes.prototype.label;
 /** @type {string} */
React.HTMLAttributes.prototype.lang;
 /** @type {string} */
React.HTMLAttributes.prototype.list;
 /** @type {boolean} */
React.HTMLAttributes.prototype.loop;
 /** @type {number} */
React.HTMLAttributes.prototype.low;
 /** @type {string} */
React.HTMLAttributes.prototype.manifest;
 /** @type {number} */
React.HTMLAttributes.prototype.marginHeight;
 /** @type {number} */
React.HTMLAttributes.prototype.marginWidth;
 /** @type {(string|number)} */
React.HTMLAttributes.prototype.max;
 /** @type {number} */
React.HTMLAttributes.prototype.maxLength;
 /** @type {string} */
React.HTMLAttributes.prototype.media;
 /** @type {string} */
React.HTMLAttributes.prototype.mediaGroup;
 /** @type {string} */
React.HTMLAttributes.prototype.method;
 /** @type {(string|number)} */
React.HTMLAttributes.prototype.min;
 /** @type {number} */
React.HTMLAttributes.prototype.minLength;
 /** @type {boolean} */
React.HTMLAttributes.prototype.multiple;
 /** @type {boolean} */
React.HTMLAttributes.prototype.muted;
 /** @type {string} */
React.HTMLAttributes.prototype.name;
 /** @type {string} */
React.HTMLAttributes.prototype.nonce;
 /** @type {boolean} */
React.HTMLAttributes.prototype.noValidate;
 /** @type {boolean} */
React.HTMLAttributes.prototype.open;
 /** @type {number} */
React.HTMLAttributes.prototype.optimum;
 /** @type {string} */
React.HTMLAttributes.prototype.pattern;
 /** @type {string} */
React.HTMLAttributes.prototype.placeholder;
 /** @type {boolean} */
React.HTMLAttributes.prototype.playsInline;
 /** @type {string} */
React.HTMLAttributes.prototype.poster;
 /** @type {string} */
React.HTMLAttributes.prototype.preload;
 /** @type {string} */
React.HTMLAttributes.prototype.radioGroup;
 /** @type {boolean} */
React.HTMLAttributes.prototype.readOnly;
 /** @type {string} */
React.HTMLAttributes.prototype.rel;
 /** @type {boolean} */
React.HTMLAttributes.prototype.required;
 /** @type {boolean} */
React.HTMLAttributes.prototype.reversed;
 /** @type {string} */
React.HTMLAttributes.prototype.role;
 /** @type {number} */
React.HTMLAttributes.prototype.rows;
 /** @type {number} */
React.HTMLAttributes.prototype.rowSpan;
 /** @type {string} */
React.HTMLAttributes.prototype.sandbox;
 /** @type {string} */
React.HTMLAttributes.prototype.scope;
 /** @type {boolean} */
React.HTMLAttributes.prototype.scoped;
 /** @type {string} */
React.HTMLAttributes.prototype.scrolling;
 /** @type {boolean} */
React.HTMLAttributes.prototype.seamless;
 /** @type {boolean} */
React.HTMLAttributes.prototype.selected;
 /** @type {string} */
React.HTMLAttributes.prototype.shape;
 /** @type {number} */
React.HTMLAttributes.prototype.size;
 /** @type {string} */
React.HTMLAttributes.prototype.sizes;
 /** @type {number} */
React.HTMLAttributes.prototype.span;
 /** @type {boolean} */
React.HTMLAttributes.prototype.spellCheck;
 /** @type {string} */
React.HTMLAttributes.prototype.src;
 /** @type {string} */
React.HTMLAttributes.prototype.srcDoc;
 /** @type {string} */
React.HTMLAttributes.prototype.srcLang;
 /** @type {string} */
React.HTMLAttributes.prototype.srcSet;
 /** @type {number} */
React.HTMLAttributes.prototype.start;
 /** @type {(string|number)} */
React.HTMLAttributes.prototype.step;
 /** @type {!CSSProperties} */
React.HTMLAttributes.prototype.style;
 /** @type {string} */
React.HTMLAttributes.prototype.summary;
 /** @type {number} */
React.HTMLAttributes.prototype.tabIndex;
 /** @type {string} */
React.HTMLAttributes.prototype.target;
 /** @type {string} */
React.HTMLAttributes.prototype.title;
 /** @type {string} */
React.HTMLAttributes.prototype.type;
 /** @type {string} */
React.HTMLAttributes.prototype.useMap;
 /** @type {(string|number|!Array<string>)} */
React.HTMLAttributes.prototype.value;
 /** @type {(string|number)} */
React.HTMLAttributes.prototype.width;
 /** @type {string} */
React.HTMLAttributes.prototype.wmode;
 /** @type {string} */
React.HTMLAttributes.prototype.wrap;
 /** @type {string} */
React.HTMLAttributes.prototype.about;
 /** @type {string} */
React.HTMLAttributes.prototype.datatype;
 /** @type {?} */
React.HTMLAttributes.prototype.inlist;
 /** @type {string} */
React.HTMLAttributes.prototype.prefix;
 /** @type {string} */
React.HTMLAttributes.prototype.property;
 /** @type {string} */
React.HTMLAttributes.prototype.resource;
 /** @type {string} */
React.HTMLAttributes.prototype.typeof;
 /** @type {string} */
React.HTMLAttributes.prototype.vocab;
 /** @type {string} */
React.HTMLAttributes.prototype.autoCapitalize;
 /** @type {string} */
React.HTMLAttributes.prototype.autoCorrect;
 /** @type {string} */
React.HTMLAttributes.prototype.autoSave;
 /** @type {string} */
React.HTMLAttributes.prototype.color;
 /** @type {string} */
React.HTMLAttributes.prototype.itemProp;
 /** @type {boolean} */
React.HTMLAttributes.prototype.itemScope;
 /** @type {string} */
React.HTMLAttributes.prototype.itemType;
 /** @type {string} */
React.HTMLAttributes.prototype.itemID;
 /** @type {string} */
React.HTMLAttributes.prototype.itemRef;
 /** @type {number} */
React.HTMLAttributes.prototype.results;
 /** @type {string} */
React.HTMLAttributes.prototype.security;
 /** @type {boolean} */
React.HTMLAttributes.prototype.unselectable;

/** @record @struct */
React.ChangeTargetHTMLAttributes = function() {};
 /** @type {!EventHandler<!ChangeEvent<?>>} */
React.ChangeTargetHTMLAttributes.prototype.onChange;

/** @record @struct */
React.SVGAttributes = function() {};
 /** @type {(string|number)} */
React.SVGAttributes.prototype.accentHeight;
 /** @type {string} */
React.SVGAttributes.prototype.accumulate;
 /** @type {string} */
React.SVGAttributes.prototype.additive;
 /** @type {string} */
React.SVGAttributes.prototype.alignmentBaseline;
 /** @type {string} */
React.SVGAttributes.prototype.allowReorder;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.alphabetic;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.amplitude;
 /** @type {string} */
React.SVGAttributes.prototype.arabicForm;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.ascent;
 /** @type {string} */
React.SVGAttributes.prototype.attributeName;
 /** @type {string} */
React.SVGAttributes.prototype.attributeType;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.autoReverse;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.azimuth;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.baseFrequency;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.baselineShift;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.baseProfile;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.bbox;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.begin;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.bias;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.by;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.calcMode;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.capHeight;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.clip;
 /** @type {string} */
React.SVGAttributes.prototype.clipPath;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.clipPathUnits;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.clipRule;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.colorInterpolation;
 /** @type {string} */
React.SVGAttributes.prototype.colorInterpolationFilters;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.colorProfile;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.colorRendering;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.contentScriptType;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.contentStyleType;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.cursor;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.cx;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.cy;
 /** @type {string} */
React.SVGAttributes.prototype.d;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.decelerate;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.descent;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.diffuseConstant;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.direction;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.display;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.divisor;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.dominantBaseline;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.dur;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.dx;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.dy;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.edgeMode;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.elevation;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.enableBackground;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.end;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.exponent;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.externalResourcesRequired;
 /** @type {string} */
React.SVGAttributes.prototype.fill;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.fillOpacity;
 /** @type {string} */
React.SVGAttributes.prototype.fillRule;
 /** @type {string} */
React.SVGAttributes.prototype.filter;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.filterRes;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.filterUnits;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.floodColor;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.floodOpacity;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.focusable;
 /** @type {string} */
React.SVGAttributes.prototype.fontFamily;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.fontSize;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.fontSizeAdjust;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.fontStretch;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.fontStyle;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.fontVariant;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.fontWeight;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.format;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.from;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.fx;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.fy;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.g1;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.g2;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.glyphName;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.glyphOrientationHorizontal;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.glyphOrientationVertical;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.glyphRef;
 /** @type {string} */
React.SVGAttributes.prototype.gradientTransform;
 /** @type {string} */
React.SVGAttributes.prototype.gradientUnits;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.hanging;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.horizAdvX;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.horizOriginX;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.ideographic;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.imageRendering;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.in2;
 /** @type {string} */
React.SVGAttributes.prototype.in;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.intercept;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.k1;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.k2;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.k3;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.k4;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.k;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.kernelMatrix;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.kernelUnitLength;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.kerning;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.keyPoints;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.keySplines;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.keyTimes;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.lengthAdjust;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.letterSpacing;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.lightingColor;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.limitingConeAngle;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.local;
 /** @type {string} */
React.SVGAttributes.prototype.markerEnd;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.markerHeight;
 /** @type {string} */
React.SVGAttributes.prototype.markerMid;
 /** @type {string} */
React.SVGAttributes.prototype.markerStart;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.markerUnits;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.markerWidth;
 /** @type {string} */
React.SVGAttributes.prototype.mask;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.maskContentUnits;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.maskUnits;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.mathematical;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.mode;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.numOctaves;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.offset;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.opacity;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.operator;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.order;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.orient;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.orientation;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.origin;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.overflow;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.overlinePosition;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.overlineThickness;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.paintOrder;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.panose1;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.pathLength;
 /** @type {string} */
React.SVGAttributes.prototype.patternContentUnits;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.patternTransform;
 /** @type {string} */
React.SVGAttributes.prototype.patternUnits;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.pointerEvents;
 /** @type {string} */
React.SVGAttributes.prototype.points;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.pointsAtX;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.pointsAtY;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.pointsAtZ;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.preserveAlpha;
 /** @type {string} */
React.SVGAttributes.prototype.preserveAspectRatio;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.primitiveUnits;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.r;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.radius;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.refX;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.refY;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.renderingIntent;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.repeatCount;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.repeatDur;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.requiredExtensions;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.requiredFeatures;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.restart;
 /** @type {string} */
React.SVGAttributes.prototype.result;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.rotate;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.rx;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.ry;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.scale;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.seed;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.shapeRendering;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.slope;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.spacing;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.specularConstant;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.specularExponent;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.speed;
 /** @type {string} */
React.SVGAttributes.prototype.spreadMethod;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.startOffset;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.stdDeviation;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.stemh;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.stemv;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.stitchTiles;
 /** @type {string} */
React.SVGAttributes.prototype.stopColor;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.stopOpacity;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.strikethroughPosition;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.strikethroughThickness;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.string;
 /** @type {string} */
React.SVGAttributes.prototype.stroke;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.strokeDasharray;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.strokeDashoffset;
 /** @type {string} */
React.SVGAttributes.prototype.strokeLinecap;
 /** @type {string} */
React.SVGAttributes.prototype.strokeLinejoin;
 /** @type {string} */
React.SVGAttributes.prototype.strokeMiterlimit;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.strokeOpacity;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.strokeWidth;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.surfaceScale;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.systemLanguage;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.tableValues;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.targetX;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.targetY;
 /** @type {string} */
React.SVGAttributes.prototype.textAnchor;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.textDecoration;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.textLength;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.textRendering;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.to;
 /** @type {string} */
React.SVGAttributes.prototype.transform;
 /** @type {string} */
React.SVGAttributes.prototype.type;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.u1;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.u2;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.underlinePosition;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.underlineThickness;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.unicode;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.unicodeBidi;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.unicodeRange;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.unitsPerEm;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.vAlphabetic;
 /** @type {string} */
React.SVGAttributes.prototype.values;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.vectorEffect;
 /** @type {string} */
React.SVGAttributes.prototype.version;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.vertAdvY;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.vertOriginX;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.vertOriginY;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.vHanging;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.vIdeographic;
 /** @type {string} */
React.SVGAttributes.prototype.viewBox;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.viewTarget;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.visibility;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.vMathematical;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.widths;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.wordSpacing;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.writingMode;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.x1;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.x2;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.x;
 /** @type {string} */
React.SVGAttributes.prototype.xChannelSelector;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.xHeight;
 /** @type {string} */
React.SVGAttributes.prototype.xlinkActuate;
 /** @type {string} */
React.SVGAttributes.prototype.xlinkArcrole;
 /** @type {string} */
React.SVGAttributes.prototype.xlinkHref;
 /** @type {string} */
React.SVGAttributes.prototype.xlinkRole;
 /** @type {string} */
React.SVGAttributes.prototype.xlinkShow;
 /** @type {string} */
React.SVGAttributes.prototype.xlinkTitle;
 /** @type {string} */
React.SVGAttributes.prototype.xlinkType;
 /** @type {string} */
React.SVGAttributes.prototype.xmlBase;
 /** @type {string} */
React.SVGAttributes.prototype.xmlLang;
 /** @type {string} */
React.SVGAttributes.prototype.xmlns;
 /** @type {string} */
React.SVGAttributes.prototype.xmlnsXlink;
 /** @type {string} */
React.SVGAttributes.prototype.xmlSpace;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.y1;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.y2;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.y;
 /** @type {string} */
React.SVGAttributes.prototype.yChannelSelector;
 /** @type {(string|number)} */
React.SVGAttributes.prototype.z;
 /** @type {string} */
React.SVGAttributes.prototype.zoomAndPan;

/** @record @struct */
React.ReactDOM = function() {};
 /** @type {!HTMLFactory<!HTMLAnchorElement>} */
React.ReactDOM.prototype.a;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.abbr;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.address;
 /** @type {!HTMLFactory<!HTMLAreaElement>} */
React.ReactDOM.prototype.area;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.article;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.aside;
 /** @type {!HTMLFactory<!HTMLAudioElement>} */
React.ReactDOM.prototype.audio;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.b;
 /** @type {!HTMLFactory<!HTMLBaseElement>} */
React.ReactDOM.prototype.base;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.bdi;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.bdo;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.big;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.blockquote;
 /** @type {!HTMLFactory<!HTMLBodyElement>} */
React.ReactDOM.prototype.body;
 /** @type {!HTMLFactory<!HTMLBRElement>} */
React.ReactDOM.prototype.br;
 /** @type {!HTMLFactory<!HTMLButtonElement>} */
React.ReactDOM.prototype.button;
 /** @type {!HTMLFactory<!HTMLCanvasElement>} */
React.ReactDOM.prototype.canvas;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.caption;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.cite;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.code;
 /** @type {!HTMLFactory<!HTMLTableColElement>} */
React.ReactDOM.prototype.col;
 /** @type {!HTMLFactory<!HTMLTableColElement>} */
React.ReactDOM.prototype.colgroup;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.data;
 /** @type {!HTMLFactory<!HTMLDataListElement>} */
React.ReactDOM.prototype.datalist;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.dd;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.del;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.details;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.dfn;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.dialog;
 /** @type {!HTMLFactory<!HTMLDivElement>} */
React.ReactDOM.prototype.div;
 /** @type {!HTMLFactory<!HTMLDListElement>} */
React.ReactDOM.prototype.dl;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.dt;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.em;
 /** @type {!HTMLFactory<!HTMLEmbedElement>} */
React.ReactDOM.prototype.embed;
 /** @type {!HTMLFactory<!HTMLFieldSetElement>} */
React.ReactDOM.prototype.fieldset;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.figcaption;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.figure;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.footer;
 /** @type {!HTMLFactory<!HTMLFormElement>} */
React.ReactDOM.prototype.form;
 /** @type {!HTMLFactory<!HTMLHeadingElement>} */
React.ReactDOM.prototype.h1;
 /** @type {!HTMLFactory<!HTMLHeadingElement>} */
React.ReactDOM.prototype.h2;
 /** @type {!HTMLFactory<!HTMLHeadingElement>} */
React.ReactDOM.prototype.h3;
 /** @type {!HTMLFactory<!HTMLHeadingElement>} */
React.ReactDOM.prototype.h4;
 /** @type {!HTMLFactory<!HTMLHeadingElement>} */
React.ReactDOM.prototype.h5;
 /** @type {!HTMLFactory<!HTMLHeadingElement>} */
React.ReactDOM.prototype.h6;
 /** @type {!HTMLFactory<!HTMLHeadElement>} */
React.ReactDOM.prototype.head;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.header;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.hgroup;
 /** @type {!HTMLFactory<!HTMLHRElement>} */
React.ReactDOM.prototype.hr;
 /** @type {!HTMLFactory<!HTMLHtmlElement>} */
React.ReactDOM.prototype.html;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.i;
 /** @type {!HTMLFactory<!HTMLIFrameElement>} */
React.ReactDOM.prototype.iframe;
 /** @type {!HTMLFactory<!HTMLImageElement>} */
React.ReactDOM.prototype.img;
 /** @type {!ChangeTargetHTMLFactory<!HTMLInputElement>} */
React.ReactDOM.prototype.input;
 /** @type {!HTMLFactory<!HTMLModElement>} */
React.ReactDOM.prototype.ins;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.kbd;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.keygen;
 /** @type {!HTMLFactory<!HTMLLabelElement>} */
React.ReactDOM.prototype.label;
 /** @type {!HTMLFactory<!HTMLLegendElement>} */
React.ReactDOM.prototype.legend;
 /** @type {!HTMLFactory<!HTMLLIElement>} */
React.ReactDOM.prototype.li;
 /** @type {!HTMLFactory<!HTMLLinkElement>} */
React.ReactDOM.prototype.link;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.main;
 /** @type {!HTMLFactory<!HTMLMapElement>} */
React.ReactDOM.prototype.map;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.mark;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.menu;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.menuitem;
 /** @type {!HTMLFactory<!HTMLMetaElement>} */
React.ReactDOM.prototype.meta;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.meter;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.nav;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.noscript;
 /** @type {!HTMLFactory<!HTMLObjectElement>} */
React.ReactDOM.prototype.object;
 /** @type {!HTMLFactory<!HTMLOListElement>} */
React.ReactDOM.prototype.ol;
 /** @type {!HTMLFactory<!HTMLOptGroupElement>} */
React.ReactDOM.prototype.optgroup;
 /** @type {!HTMLFactory<!HTMLOptionElement>} */
React.ReactDOM.prototype.option;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.output;
 /** @type {!HTMLFactory<!HTMLParagraphElement>} */
React.ReactDOM.prototype.p;
 /** @type {!HTMLFactory<!HTMLParamElement>} */
React.ReactDOM.prototype.param;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.picture;
 /** @type {!HTMLFactory<!HTMLPreElement>} */
React.ReactDOM.prototype.pre;
 /** @type {!HTMLFactory<!HTMLProgressElement>} */
React.ReactDOM.prototype.progress;
 /** @type {!HTMLFactory<!HTMLQuoteElement>} */
React.ReactDOM.prototype.q;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.rp;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.rt;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.ruby;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.s;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.samp;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.script;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.section;
 /** @type {!ChangeTargetHTMLFactory<!HTMLSelectElement>} */
React.ReactDOM.prototype.select;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.small;
 /** @type {!HTMLFactory<!HTMLSourceElement>} */
React.ReactDOM.prototype.source;
 /** @type {!HTMLFactory<!HTMLSpanElement>} */
React.ReactDOM.prototype.span;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.strong;
 /** @type {!HTMLFactory<!HTMLStyleElement>} */
React.ReactDOM.prototype.style;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.sub;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.summary;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.sup;
 /** @type {!HTMLFactory<!HTMLTableElement>} */
React.ReactDOM.prototype.table;
 /** @type {!HTMLFactory<!HTMLTableSectionElement>} */
React.ReactDOM.prototype.tbody;
 /** @type {!HTMLFactory<!HTMLTableDataCellElement>} */
React.ReactDOM.prototype.td;
 /** @type {!ChangeTargetHTMLFactory<!HTMLTextAreaElement>} */
React.ReactDOM.prototype.textarea;
 /** @type {!HTMLFactory<!HTMLTableSectionElement>} */
React.ReactDOM.prototype.tfoot;
 /** @type {!HTMLFactory<!HTMLTableHeaderCellElement>} */
React.ReactDOM.prototype.th;
 /** @type {!HTMLFactory<!HTMLTableSectionElement>} */
React.ReactDOM.prototype.thead;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.time;
 /** @type {!HTMLFactory<!HTMLTitleElement>} */
React.ReactDOM.prototype.title;
 /** @type {!HTMLFactory<!HTMLTableRowElement>} */
React.ReactDOM.prototype.tr;
 /** @type {!HTMLFactory<!HTMLTrackElement>} */
React.ReactDOM.prototype.track;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.u;
 /** @type {!HTMLFactory<!HTMLUListElement>} */
React.ReactDOM.prototype.ul;

/* TODO: PropertySignature: React."var" */
 /** @type {!HTMLFactory<!HTMLVideoElement>} */
React.ReactDOM.prototype.video;
 /** @type {!HTMLFactory<!HTMLElement>} */
React.ReactDOM.prototype.wbr;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.svg;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.circle;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.defs;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.ellipse;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.g;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.image;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.line;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.linearGradient;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.mask;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.path;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.pattern;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.polygon;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.polyline;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.radialGradient;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.rect;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.stop;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.symbol;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.text;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.tspan;
 /** @type {!SVGFactory} */
React.ReactDOM.prototype.use;

/** @record @struct */
React.Validator = function() {};

/* TODO: CallSignature: React */

/** @record @struct */
React.Requireable = function() {};
 /** @type {!Validator<?>} */
React.Requireable.prototype.isRequired;

/** @record @struct */
React.ValidationMap = function() {};

/* TODO: IndexSignature: React */

/** @record @struct */
React.ReactPropTypes = function() {};
 /** @type {!Requireable<?>} */
React.ReactPropTypes.prototype.any;
 /** @type {!Requireable<?>} */
React.ReactPropTypes.prototype.array;
 /** @type {!Requireable<?>} */
React.ReactPropTypes.prototype.bool;
 /** @type {!Requireable<?>} */
React.ReactPropTypes.prototype.func;
 /** @type {!Requireable<?>} */
React.ReactPropTypes.prototype.number;
 /** @type {!Requireable<?>} */
React.ReactPropTypes.prototype.object;
 /** @type {!Requireable<?>} */
React.ReactPropTypes.prototype.string;
 /** @type {!Requireable<?>} */
React.ReactPropTypes.prototype.node;
 /** @type {!Requireable<?>} */
React.ReactPropTypes.prototype.element;

/**
 * @param {?} expectedClass
 * @return {!Requireable<?>}
 */
React.ReactPropTypes.prototype.instanceOf = function(expectedClass) {};

/**
 * @param {!Array<?>} types
 * @return {!Requireable<?>}
 */
React.ReactPropTypes.prototype.oneOf = function(types) {};

/**
 * @param {!Array<!Validator<?>>} types
 * @return {!Requireable<?>}
 */
React.ReactPropTypes.prototype.oneOfType = function(types) {};

/**
 * @param {!Validator<?>} type
 * @return {!Requireable<?>}
 */
React.ReactPropTypes.prototype.arrayOf = function(type) {};

/**
 * @param {!Validator<?>} type
 * @return {!Requireable<?>}
 */
React.ReactPropTypes.prototype.objectOf = function(type) {};

/**
 * @param {!ValidationMap<?>} type
 * @return {!Requireable<?>}
 */
React.ReactPropTypes.prototype.shape = function(type) {};

/** @record @struct */
React.ReactChildren = function() {};

/**
 * @param {(string|number|boolean|?|!ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!ReactElement<?>)>)} children
 * @param {function((string|number|!ReactElement<?>), number): ?} fn
 * @return {!Array<?>}
 */
React.ReactChildren.prototype.map = function(children, fn) {};

/**
 * @param {(string|number|boolean|?|!ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!ReactElement<?>)>)} children
 * @param {function((string|number|!ReactElement<?>), number): ?} fn
 * @return {void}
 */
React.ReactChildren.prototype.forEach = function(children, fn) {};

/**
 * @param {(string|number|boolean|?|!ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!ReactElement<?>)>)} children
 * @return {number}
 */
React.ReactChildren.prototype.count = function(children) {};

/**
 * @param {(string|number|boolean|?|!ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!ReactElement<?>)>)} children
 * @return {!ReactElement<?>}
 */
React.ReactChildren.prototype.only = function(children) {};

/**
 * @param {(string|number|boolean|?|!ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!ReactElement<?>)>)} children
 * @return {!Array<(string|number|!ReactElement<?>)>}
 */
React.ReactChildren.prototype.toArray = function(children) {};

/** @record @struct */
React.AbstractView = function() {};
 /** @type {!StyleMedia} */
// React.AbstractView.prototype.styleMedia;
 /** @type {!Document} */
React.AbstractView.prototype.document;

/** @record @struct */
React.Touch = function() {};
 /** @type {number} */
React.Touch.prototype.identifier;
 /** @type {!EventTarget} */
React.Touch.prototype.target;
 /** @type {number} */
React.Touch.prototype.screenX;
 /** @type {number} */
React.Touch.prototype.screenY;
 /** @type {number} */
React.Touch.prototype.clientX;
 /** @type {number} */
React.Touch.prototype.clientY;
 /** @type {number} */
React.Touch.prototype.pageX;
 /** @type {number} */
React.Touch.prototype.pageY;

/** @record @struct */
React.TouchList = function() {};

/* TODO: IndexSignature: React */
 /** @type {number} */
React.TouchList.prototype.length;

/**
 * @param {number} index
 * @return {!Touch}
 */
React.TouchList.prototype.item = function(index) {};

/**
 * @param {number} identifier
 * @return {!Touch}
 */
React.TouchList.prototype.identifiedTouch = function(identifier) {};
/** @const */
var global = {};
/** @const */
global.JSX = {};

/** @record @struct */
global.JSX.Element = function() {};

/** @record @struct */
global.JSX.ElementClass = function() {};

/**
 * @return {!Element}
 */
global.JSX.ElementClass.prototype.render = function() {};

/** @record @struct */
global.JSX.ElementAttributesProperty = function() {};
 /** @type {?} */
global.JSX.ElementAttributesProperty.prototype.props;

/** @record @struct */
global.JSX.IntrinsicAttributes = function() {};

/** @record @struct */
global.JSX.IntrinsicClassAttributes = function() {};

/** @record @struct */
global.JSX.IntrinsicElements = function() {};
 /** @type {!React.HTMLProps<!HTMLAnchorElement>} */
global.JSX.IntrinsicElements.prototype.a;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.abbr;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.address;
 /** @type {!React.HTMLProps<!HTMLAreaElement>} */
global.JSX.IntrinsicElements.prototype.area;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.article;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.aside;
 /** @type {!React.HTMLProps<!HTMLAudioElement>} */
global.JSX.IntrinsicElements.prototype.audio;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.b;
 /** @type {!React.HTMLProps<!HTMLBaseElement>} */
global.JSX.IntrinsicElements.prototype.base;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.bdi;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.bdo;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.big;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.blockquote;
 /** @type {!React.HTMLProps<!HTMLBodyElement>} */
global.JSX.IntrinsicElements.prototype.body;
 /** @type {!React.HTMLProps<!HTMLBRElement>} */
global.JSX.IntrinsicElements.prototype.br;
 /** @type {!React.HTMLProps<!HTMLButtonElement>} */
global.JSX.IntrinsicElements.prototype.button;
 /** @type {!React.HTMLProps<!HTMLCanvasElement>} */
global.JSX.IntrinsicElements.prototype.canvas;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.caption;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.cite;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.code;
 /** @type {!React.HTMLProps<!HTMLTableColElement>} */
global.JSX.IntrinsicElements.prototype.col;
 /** @type {!React.HTMLProps<!HTMLTableColElement>} */
global.JSX.IntrinsicElements.prototype.colgroup;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.data;
 /** @type {!React.HTMLProps<!HTMLDataListElement>} */
global.JSX.IntrinsicElements.prototype.datalist;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.dd;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.del;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.details;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.dfn;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.dialog;
 /** @type {!React.HTMLProps<!HTMLDivElement>} */
global.JSX.IntrinsicElements.prototype.div;
 /** @type {!React.HTMLProps<!HTMLDListElement>} */
global.JSX.IntrinsicElements.prototype.dl;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.dt;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.em;
 /** @type {!React.HTMLProps<!HTMLEmbedElement>} */
global.JSX.IntrinsicElements.prototype.embed;
 /** @type {!React.HTMLProps<!HTMLFieldSetElement>} */
global.JSX.IntrinsicElements.prototype.fieldset;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.figcaption;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.figure;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.footer;
 /** @type {!React.HTMLProps<!HTMLFormElement>} */
global.JSX.IntrinsicElements.prototype.form;
 /** @type {!React.HTMLProps<!HTMLHeadingElement>} */
global.JSX.IntrinsicElements.prototype.h1;
 /** @type {!React.HTMLProps<!HTMLHeadingElement>} */
global.JSX.IntrinsicElements.prototype.h2;
 /** @type {!React.HTMLProps<!HTMLHeadingElement>} */
global.JSX.IntrinsicElements.prototype.h3;
 /** @type {!React.HTMLProps<!HTMLHeadingElement>} */
global.JSX.IntrinsicElements.prototype.h4;
 /** @type {!React.HTMLProps<!HTMLHeadingElement>} */
global.JSX.IntrinsicElements.prototype.h5;
 /** @type {!React.HTMLProps<!HTMLHeadingElement>} */
global.JSX.IntrinsicElements.prototype.h6;
 /** @type {!React.HTMLProps<!HTMLHeadElement>} */
global.JSX.IntrinsicElements.prototype.head;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.header;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.hgroup;
 /** @type {!React.HTMLProps<!HTMLHRElement>} */
global.JSX.IntrinsicElements.prototype.hr;
 /** @type {!React.HTMLProps<!HTMLHtmlElement>} */
global.JSX.IntrinsicElements.prototype.html;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.i;
 /** @type {!React.HTMLProps<!HTMLIFrameElement>} */
global.JSX.IntrinsicElements.prototype.iframe;
 /** @type {!React.HTMLProps<!HTMLImageElement>} */
global.JSX.IntrinsicElements.prototype.img;
 /** @type {!React.ChangeTargetHTMLProps<!HTMLInputElement>} */
global.JSX.IntrinsicElements.prototype.input;
 /** @type {!React.HTMLProps<!HTMLModElement>} */
global.JSX.IntrinsicElements.prototype.ins;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.kbd;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.keygen;
 /** @type {!React.HTMLProps<!HTMLLabelElement>} */
global.JSX.IntrinsicElements.prototype.label;
 /** @type {!React.HTMLProps<!HTMLLegendElement>} */
global.JSX.IntrinsicElements.prototype.legend;
 /** @type {!React.HTMLProps<!HTMLLIElement>} */
global.JSX.IntrinsicElements.prototype.li;
 /** @type {!React.HTMLProps<!HTMLLinkElement>} */
global.JSX.IntrinsicElements.prototype.link;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.main;
 /** @type {!React.HTMLProps<!HTMLMapElement>} */
global.JSX.IntrinsicElements.prototype.map;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.mark;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.menu;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.menuitem;
 /** @type {!React.HTMLProps<!HTMLMetaElement>} */
global.JSX.IntrinsicElements.prototype.meta;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.meter;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.nav;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.noindex;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.noscript;
 /** @type {!React.HTMLProps<!HTMLObjectElement>} */
global.JSX.IntrinsicElements.prototype.object;
 /** @type {!React.HTMLProps<!HTMLOListElement>} */
global.JSX.IntrinsicElements.prototype.ol;
 /** @type {!React.HTMLProps<!HTMLOptGroupElement>} */
global.JSX.IntrinsicElements.prototype.optgroup;
 /** @type {!React.HTMLProps<!HTMLOptionElement>} */
global.JSX.IntrinsicElements.prototype.option;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.output;
 /** @type {!React.HTMLProps<!HTMLParagraphElement>} */
global.JSX.IntrinsicElements.prototype.p;
 /** @type {!React.HTMLProps<!HTMLParamElement>} */
global.JSX.IntrinsicElements.prototype.param;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.picture;
 /** @type {!React.HTMLProps<!HTMLPreElement>} */
global.JSX.IntrinsicElements.prototype.pre;
 /** @type {!React.HTMLProps<!HTMLProgressElement>} */
global.JSX.IntrinsicElements.prototype.progress;
 /** @type {!React.HTMLProps<!HTMLQuoteElement>} */
global.JSX.IntrinsicElements.prototype.q;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.rp;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.rt;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.ruby;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.s;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.samp;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.script;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.section;
 /** @type {!React.ChangeTargetHTMLProps<!HTMLSelectElement>} */
global.JSX.IntrinsicElements.prototype.select;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.small;
 /** @type {!React.HTMLProps<!HTMLSourceElement>} */
global.JSX.IntrinsicElements.prototype.source;
 /** @type {!React.HTMLProps<!HTMLSpanElement>} */
global.JSX.IntrinsicElements.prototype.span;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.strong;
 /** @type {!React.HTMLProps<!HTMLStyleElement>} */
global.JSX.IntrinsicElements.prototype.style;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.sub;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.summary;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.sup;
 /** @type {!React.HTMLProps<!HTMLTableElement>} */
global.JSX.IntrinsicElements.prototype.table;
 /** @type {!React.HTMLProps<!HTMLTableSectionElement>} */
global.JSX.IntrinsicElements.prototype.tbody;
 /** @type {!React.HTMLProps<!HTMLTableDataCellElement>} */
global.JSX.IntrinsicElements.prototype.td;
 /** @type {!React.ChangeTargetHTMLProps<!HTMLTextAreaElement>} */
global.JSX.IntrinsicElements.prototype.textarea;
 /** @type {!React.HTMLProps<!HTMLTableSectionElement>} */
global.JSX.IntrinsicElements.prototype.tfoot;
 /** @type {!React.HTMLProps<!HTMLTableHeaderCellElement>} */
global.JSX.IntrinsicElements.prototype.th;
 /** @type {!React.HTMLProps<!HTMLTableSectionElement>} */
global.JSX.IntrinsicElements.prototype.thead;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.time;
 /** @type {!React.HTMLProps<!HTMLTitleElement>} */
global.JSX.IntrinsicElements.prototype.title;
 /** @type {!React.HTMLProps<!HTMLTableRowElement>} */
global.JSX.IntrinsicElements.prototype.tr;
 /** @type {!React.HTMLProps<!HTMLTrackElement>} */
global.JSX.IntrinsicElements.prototype.track;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.u;
 /** @type {!React.HTMLProps<!HTMLUListElement>} */
global.JSX.IntrinsicElements.prototype.ul;

/* TODO: PropertySignature: global.JSX."var" */
 /** @type {!React.HTMLProps<!HTMLVideoElement>} */
global.JSX.IntrinsicElements.prototype.video;
 /** @type {!React.HTMLProps<!HTMLElement>} */
global.JSX.IntrinsicElements.prototype.wbr;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.svg;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.circle;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.clipPath;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.defs;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.desc;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.ellipse;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feBlend;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feColorMatrix;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feComponentTransfer;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feComposite;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feConvolveMatrix;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feDiffuseLighting;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feDisplacementMap;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feDistantLight;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feFlood;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feFuncA;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feFuncB;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feFuncG;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feFuncR;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feGaussianBlur;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feImage;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feMerge;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feMergeNode;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feMorphology;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feOffset;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.fePointLight;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feSpecularLighting;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feSpotLight;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feTile;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.feTurbulence;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.filter;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.foreignObject;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.g;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.image;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.line;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.linearGradient;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.marker;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.mask;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.metadata;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.path;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.pattern;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.polygon;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.polyline;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.radialGradient;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.rect;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.stop;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.switch;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.symbol;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.text;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.textPath;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.tspan;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.use;
 /** @type {!React.SVGProps} */
global.JSX.IntrinsicElements.prototype.view;