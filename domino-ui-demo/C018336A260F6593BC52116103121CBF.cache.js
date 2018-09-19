var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.app;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = 'C018336A260F6593BC52116103121CBF';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {10:1, 12:1, 11:1, 344:1}, $intern_2 = {10:1, 12:1, 11:1}, $intern_3 = {10:1, 57:1, 49:1, 50:1}, $intern_4 = {10:1}, $intern_5 = {10:1, 11:1}, $intern_6 = {275:1, 301:1}, $intern_7 = {182:1}, $intern_8 = {171:1, 10:1, 57:1, 50:1}, $intern_9 = {10:1, 12:1, 15:1, 13:1, 11:1, 14:1}, $intern_10 = 4194303, $intern_11 = 1048575, $intern_12 = 524288, $intern_13 = 4194304, $intern_14 = 17592186044416, $intern_15 = 1000000000, $intern_16 = -17592186044416, $intern_17 = {212:1}, $intern_18 = 1000, $intern_19 = {183:1}, $intern_20 = {10:1, 193:1, 50:1}, $intern_21 = {300:1}, $intern_22 = {10:1, 73:1, 53:1}, $intern_23 = {10:1, 73:1, 100:1, 239:1}, $intern_24 = {10:1, 12:1, 13:1, 11:1}, $intern_25 = {10:1, 73:1, 211:1, 239:1}, $intern_26 = 65535, $intern_27 = {114:1}, $intern_28 = {158:1}, $intern_29 = 2690, $intern_30 = {114:1, 143:1}, $intern_31 = 2686, $intern_32 = {114:1, 52:1}, $intern_33 = {10:1, 114:1, 52:1, 385:1}, $intern_34 = {10:1, 158:1}, $intern_35 = {10:1, 73:1, 70:1}, $intern_36 = {10:1, 114:1, 163:1, 143:1}, $intern_37 = {10:1, 114:1, 52:1}, $intern_38 = 2684, $intern_39 = -2147483648, $intern_40 = {10:1, 11:1, 2654:1}, $intern_41 = {40:1}, $intern_42 = {41:1}, $intern_43 = {2658:1}, $intern_44 = {274:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function create_com_google_gwt_useragent_client_UserAgent(){
  switch (permutationId) {
    case 1:
      return new UserAgentImplIe10;
    case 4:
      return new UserAgentImplSafari;
    case 0:
      return new UserAgentImplGecko1_8;
    case 2:
      return new UserAgentImplIe8;
  }
  return new UserAgentImplIe9;
}

function create_com_google_gwt_user_client_impl_WindowImpl(){
  switch (permutationId) {
    case 4:
      return new WindowImpl;
    case 0:
      return new WindowImplMozilla;
  }
  return new WindowImplIE;
}

function create_com_google_gwt_user_client_impl_DOMImpl(){
  switch (permutationId) {
    case 2:
      return new DOMImplIE8_0;
    case 0:
      return new DOMImplMozilla_0;
    case 4:
      return new DOMImplWebkit_0;
  }
  return new DOMImplIE9_0;
}

function create_com_google_gwt_http_client_Request_RequestImpl(){
  switch (permutationId) {
    case 2:
    case 3:
      return new Request$RequestImplIE8And9;
  }
  return new Request$RequestImpl;
}

function create_com_google_gwt_dom_client_DOMImpl(){
  switch (permutationId) {
    case 2:
      return new DOMImplIE8;
    case 4:
      return new DOMImplWebkit;
    case 0:
      return new DOMImplMozilla;
  }
  return new DOMImplIE9;
}

function create_com_google_gwt_core_client_impl_StackTraceCreator_Collector(){
  if (permutationId == 4) {
    return new StackTraceCreator$CollectorModern;
  }
  return new StackTraceCreator$CollectorModernNoSourceMap;
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_12(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_0(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:$equals(this$static, other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_1(this$static):instanceOfDouble(this$static)?$hashCode_0(this$static):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_1():isJavaArray(this$static)?getHashCode_0(this$static):$hashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.hashCode_1 = function hashCode_0(){
  return getHashCode_0(this);
}
;
_.toString_0 = function toString_0(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_1();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToJsObject(src_0){
  checkCriticalType(src_0 == null || isJsObject(src_0));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToNative(src_0, jsType){
  checkCriticalType(src_0 == null || jsinstanceOf(src_0, jsType));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfNative(src_0, jsType){
  return jsinstanceOf(src_0, jsType);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObject(src_0){
  return typeof src_0 === 'object' || typeof src_0 == 'function';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function jsinstanceOf(obj, jsType){
  return obj && jsType && obj instanceof jsType;
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

function throwClassCastExceptionUnlessNull(o){
  checkCriticalType(o == null);
  return o;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getCanonicalName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.canonicalName;
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc, enumValueOfFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumValueOfFunc = enumValueOfFunc;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(394, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  return $getCanonicalName(this);
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  return $ensureNamesAreInitialized(this) , this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_17(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 394);
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 162, 0, 0, 1);
}

function $constructJavaStackTrace(this$static){
  var stackTrace;
  return $clinit_StackTraceCreator() , stackTrace = collector_1.getStackTrace(this$static) , dropInternalFrames(stackTrace);
}

function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState_0(!this$static.cause);
  checkCriticalArgument_0(true, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTraceImpl(this$static, out, prefix, ident){
  var t, t$array, t$index, t$max, theCause;
  out.println(ident + prefix + this$static);
  $printStackTraceItems(this$static, out, ident);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_2, 50, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, 'Suppressed: ', '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, 'Caused by: ', ident);
}

function $printStackTraceItems(this$static, out, ident){
  var element, element$array, element$index, element$max;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = $constructJavaStackTrace(this$static)) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    element = element$array[element$index];
    out.println(ident + '\tat ' + element);
  }
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function Throwable(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function Throwable_0(message, cause){
  $$init(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

function of(e){
  var throwable;
  if (e != null) {
    throwable = e['__java$exception'];
    if (throwable) {
      return throwable;
    }
  }
  return instanceOfNative(e, TypeError)?new NullPointerException_0(e):new JsException(e);
}

defineClass(50, 1, {10:1, 50:1});
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_1(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 50);
function Exception(message){
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function Exception_0(message, cause){
  Throwable_0.call(this, message, cause);
}

defineClass(57, 50, {10:1, 57:1, 50:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 57);
function RuntimeException(){
  Throwable.call(this);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Exception_0.call(this, message, cause);
}

defineClass(49, 57, $intern_3);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 49);
function CodeDownloadException(message){
  RuntimeException_0.call(this, message);
}

defineClass(2698, 49, $intern_3, CodeDownloadException);
var Lcom_google_gwt_core_client_CodeDownloadException_2_classLit = createForClass('com.google.gwt.core.client', 'CodeDownloadException', 2698);
function Duration(){
  this.start_0 = now_1();
}

defineClass(821, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 821);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
  maybeInitializeWindowOnError();
}

var uncaughtExceptionHandler = null;
function JsException(backingJsObject){
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_12(backingJsObject);
}

defineClass(273, 49, $intern_3, JsException);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 273);
defineClass(558, 273, $intern_3);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 558);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  JsException.call(this, e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(178, 558, {178:1, 10:1, 57:1, 49:1, 50:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 178);
function $equals(this$static, other){
  return !!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function $hashCode(this$static){
  return !!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode_0(this$static);
}

var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeValue(toEscape){
  var escapeTable = (!escapeTable_0 && (escapeTable_0 = initEscapeTable()) , escapeTable_0);
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

var escapeTable_0;
var Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit = createForInterface('com.google.gwt.core.client', 'RunAsyncCallback');
defineClass(2670, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 2670);
function $clinit_ScriptInjector(){
  $clinit_ScriptInjector = emptyMethod;
}

function attachListeners(scriptElement, callback, removeTag){
  $clinit_ScriptInjector();
  function clearCallbacks(){
    scriptElement.onerror = scriptElement.onreadystatechange = scriptElement.onload = null;
    removeTag && nativeRemove(scriptElement);
  }

  scriptElement.onload = $entry(function(){
    clearCallbacks();
    callback && callback.onSuccess(null);
  }
  );
  scriptElement.onerror = $entry(function(){
    clearCallbacks();
    if (callback) {
      var ex = new CodeDownloadException('onerror() called.');
      callback.onFailure(ex);
    }
  }
  );
  scriptElement.onreadystatechange = $entry(function(){
    /loaded|complete/.test(scriptElement.readyState) && scriptElement.onload();
  }
  );
}

function nativeRemove(scriptElement){
  scriptElement.parentNode.removeChild(scriptElement);
}

function nativeSetSrc(element, url_0){
  $clinit_ScriptInjector();
  element.src = url_0;
}

function $inject(this$static){
  var doc, scriptElement, wnd;
  wnd = ($clinit_ScriptInjector() , window);
  doc = wnd.document;
  scriptElement = doc.createElement('script');
  (!!this$static.callback || this$static.removeTag) && attachListeners(scriptElement, this$static.callback, this$static.removeTag);
  nativeSetSrc(scriptElement, this$static.scriptUrl);
  (doc.head || doc.getElementsByTagName('head')[0]).appendChild(scriptElement);
  return scriptElement;
}

function $setCallback(this$static, callback){
  this$static.callback = callback;
  return this$static;
}

function $setRemoveTag(this$static){
  this$static.removeTag = true;
  return this$static;
}

function ScriptInjector$FromUrl(scriptUrl){
  this.scriptUrl = scriptUrl;
}

defineClass(417, 1, {}, ScriptInjector$FromUrl);
_.removeTag = false;
var Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromUrl', 417);
function $clinit_AsyncFragmentLoader(){
  $clinit_AsyncFragmentLoader = emptyMethod;
  BROWSER_LOADER = new AsyncFragmentLoader(5, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_4, 95, 15, []), new ScriptTagLoadingStrategy);
}

function $clearRequestsAlreadyLoaded(this$static){
  var offset;
  while ($size(this$static.requestedExclusives) > 0 && this$static.isLoaded[$peek(this$static.requestedExclusives)]) {
    offset = $remove(this$static.requestedExclusives);
    offset < this$static.pendingDownloadErrorHandlers.length && (this$static.pendingDownloadErrorHandlers[offset] = null);
  }
}

function $initializeRemainingInitialFragments(this$static){
  var sp, sp$array, sp$index, sp$max;
  if (!this$static.remainingInitialFragments) {
    this$static.remainingInitialFragments = new AsyncFragmentLoader$BoundedIntQueue(this$static.initialLoadSequence.length + 1);
    for (sp$array = this$static.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
      sp = sp$array[sp$index];
      $add(this$static.remainingInitialFragments, sp);
    }
    $add(this$static.remainingInitialFragments, this$static.numEntries);
  }
}

function $inject_0(this$static, splitPoint, loadErrorHandler){
  this$static.pendingDownloadErrorHandlers[splitPoint] = loadErrorHandler;
  $isInitial(this$static, splitPoint) || $add(this$static.requestedExclusives, splitPoint);
  $startLoadingNextFragment(this$static);
}

function $isEmpty(array){
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i]) {
      return false;
    }
  }
  return true;
}

function $isInitial(this$static, splitPoint){
  var sp, sp$array, sp$index, sp$max;
  if (splitPoint == this$static.numEntries) {
    return true;
  }
  for (sp$array = this$static.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
    sp = sp$array[sp$index];
    if (sp == splitPoint) {
      return true;
    }
  }
  return false;
}

function $logEventProgress(eventGroup, fragment){
  !!$stats && stats($createStatsEvent(eventGroup, 'begin', fragment, -1));
}

function $onLoadImpl(this$static, fragment){
  var callback, callback$array, callback$index, callback$max, callbacks, t, logGroup;
  logGroup = fragment == this$static.numEntries?'leftoversDownload':'download' + fragment;
  !!$stats && stats($createStatsEvent(logGroup, 'end', fragment, -1));
  fragment < this$static.pendingDownloadErrorHandlers.length && (this$static.pendingDownloadErrorHandlers[fragment] = null);
  $isInitial(this$static, fragment) && !!this$static.remainingInitialFragments && $remove(this$static.remainingInitialFragments);
  this$static.fragmentLoading = -1;
  this$static.isLoaded[fragment] = true;
  $startLoadingNextFragment(this$static);
  callbacks = this$static.allCallbacks[fragment];
  if (callbacks != null) {
    !!$stats && stats($createStatsEvent('runCallbacks' + fragment, 'begin', -1, -1));
    this$static.allCallbacks[fragment] = null;
    for (callback$array = callbacks , callback$index = 0 , callback$max = callbacks.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      try {
        castTo(callback, 274).onSuccess_0();
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 50)) {
          t = $e0;
          $clinit_Impl();
          reportUncaughtException(t, true);
        }
         else 
          throw toJs($e0);
      }
    }
    !!$stats && stats($createStatsEvent('runCallbacks' + fragment, 'end', -1, -1));
  }
}

function $runAsyncImpl(this$static, fragment, callback){
  var callbacks;
  if (this$static.isLoaded[fragment]) {
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new OnSuccessExecutor$1(callback));
    return;
  }
  callbacks = this$static.allCallbacks[fragment];
  callbacks == null && (callbacks = this$static.allCallbacks[fragment] = initUnidimensionalArray(Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit, $intern_5, 274, 0, 0, 1));
  setCheck(callbacks, callbacks.length, callback);
  !!this$static.pendingDownloadErrorHandlers[fragment] || $inject_0(this$static, fragment, new AsyncFragmentLoader$1(this$static, fragment));
}

function $startLoadingFragment(this$static, fragment){
  this$static.fragmentLoading = fragment;
  $logEventProgress(fragment == this$static.numEntries?'leftoversDownload':'download' + fragment, fragment);
  $startLoadingFragment_0(this$static.loadingStrategy, fragment, new AsyncFragmentLoader$ResetAfterDownloadFailure(this$static, fragment));
}

function $startLoadingNextFragment(this$static){
  if (this$static.fragmentLoading >= 0) {
    return;
  }
  $initializeRemainingInitialFragments(this$static);
  $clearRequestsAlreadyLoaded(this$static);
  if ($isEmpty(this$static.pendingDownloadErrorHandlers)) {
    return;
  }
  if ($size(this$static.remainingInitialFragments) > 0) {
    $startLoadingFragment(this$static, $peek(this$static.remainingInitialFragments));
    return;
  }
  if ($size(this$static.requestedExclusives) > 0) {
    $startLoadingFragment(this$static, $remove(this$static.requestedExclusives));
    return;
  }
}

function AsyncFragmentLoader(numEntries, initialLoadSequence, loadingStrategy){
  var numEntriesPlusOne;
  this.numEntries = numEntries;
  this.initialLoadSequence = initialLoadSequence;
  this.loadingStrategy = loadingStrategy;
  numEntriesPlusOne = numEntries + 1;
  this.allCallbacks = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 11, numEntriesPlusOne, 3, 2);
  this.requestedExclusives = new AsyncFragmentLoader$BoundedIntQueue(numEntriesPlusOne);
  this.isLoaded = initUnidimensionalArray(Z_classLit, $intern_4, 95, numEntriesPlusOne, 16, 1);
  this.pendingDownloadErrorHandlers = initUnidimensionalArray(Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, $intern_5, 393, numEntriesPlusOne, 0, 1);
}

function onLoad(fragment){
  $clinit_AsyncFragmentLoader();
  $onLoadImpl(BROWSER_LOADER, fragment);
}

function runAsync(fragment, callback){
  $clinit_AsyncFragmentLoader();
  $runAsyncImpl(BROWSER_LOADER, fragment, callback);
}

defineClass(546, 1, {}, AsyncFragmentLoader);
_.fragmentLoading = -1;
_.numEntries = 0;
_.remainingInitialFragments = null;
var BROWSER_LOADER;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader', 546);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadTerminatedHandler');
function AsyncFragmentLoader$1(this$0, val$fragment){
  this.this$01 = this$0;
  this.val$fragment2 = val$fragment;
}

defineClass(548, 1, {393:1}, AsyncFragmentLoader$1);
_.loadTerminated = function loadTerminated(reason){
  var callback, callback$index, callback$max, callbacks;
  callbacks = this.this$01.allCallbacks[this.val$fragment2];
  if (callbacks != null) {
    this.this$01.allCallbacks[this.val$fragment2] = null;
    for (callback$index = 0 , callback$max = callbacks.length; callback$index < callback$max; ++callback$index) {
      callback = callbacks[callback$index];
      castTo(callback, 274).onFailure_0(reason);
    }
  }
}
;
_.val$fragment2 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/1', 548);
function $add(this$static, x_0){
  this$static.array[this$static.write_0++] = x_0;
}

function $clear(this$static){
  this$static.read = 0;
  this$static.write_0 = 0;
}

function $peek(this$static){
  return this$static.array[this$static.read];
}

function $remove(this$static){
  return this$static.array[this$static.read++];
}

function $size(this$static){
  return this$static.write_0 - this$static.read;
}

function AsyncFragmentLoader$BoundedIntQueue(maxPuts){
  this.array = initUnidimensionalArray(I_classLit, $intern_4, 95, maxPuts, 15, 1);
}

defineClass(392, 1, {}, AsyncFragmentLoader$BoundedIntQueue);
_.read = 0;
_.write_0 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$BoundedIntQueue_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/BoundedIntQueue', 392);
function AsyncFragmentLoader$HttpDownloadFailure(url_0){
  RuntimeException_0.call(this, 'Download of ' + url_0 + ' failed with status ' + 404 + '(' + 'Script Tag Failure - no status available' + ')');
}

defineClass(550, 49, $intern_3, AsyncFragmentLoader$HttpDownloadFailure);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpDownloadFailure', 550);
function AsyncFragmentLoader$HttpInstallFailure(url_0, text_0, rootCause){
  RuntimeException_1.call(this, 'Install of ' + url_0 + ' failed with text ' + text_0, rootCause);
}

defineClass(551, 49, $intern_3, AsyncFragmentLoader$HttpInstallFailure);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpInstallFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpInstallFailure', 551);
function $loadTerminated(this$static, reason){
  var e, handler, handler$array, handler$index, handler$max, handlersToRun, lastException;
  if (this$static.this$01.fragmentLoading != this$static.fragment_0) {
    return;
  }
  handlersToRun = this$static.this$01.pendingDownloadErrorHandlers;
  this$static.this$01.pendingDownloadErrorHandlers = initUnidimensionalArray(Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, $intern_5, 393, this$static.this$01.numEntries + 1, 0, 1);
  $clear(this$static.this$01.requestedExclusives);
  this$static.this$01.fragmentLoading = -1;
  lastException = null;
  for (handler$array = handlersToRun , handler$index = 0 , handler$max = handlersToRun.length; handler$index < handler$max; ++handler$index) {
    handler = handler$array[handler$index];
    if (handler) {
      try {
        handler.loadTerminated(reason);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 49)) {
          e = $e0;
          lastException = e;
        }
         else 
          throw toJs($e0);
      }
    }
  }
  if (lastException) {
    throw toJs(lastException);
  }
}

function AsyncFragmentLoader$ResetAfterDownloadFailure(this$0, myFragment){
  this.this$01 = this$0;
  this.fragment_0 = myFragment;
}

defineClass(549, 1, {393:1}, AsyncFragmentLoader$ResetAfterDownloadFailure);
_.loadTerminated = function loadTerminated_0(reason){
  $loadTerminated(this, reason);
}
;
_.fragment_0 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$ResetAfterDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/ResetAfterDownloadFailure', 549);
function $createStatsEvent(eventGroup, type_0, fragment, size_0){
  var evt = {moduleName:($clinit_Impl() , $moduleName), sessionId:$sessionId, subSystem:'runAsync', evtGroup:eventGroup, millis:(new Date).getTime(), type:type_0};
  fragment >= 0 && (evt.fragment = fragment);
  size_0 >= 0 && (evt.size = size_0);
  return evt;
}

function stats(data_0){
  return $stats(data_0);
}

function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector_1);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0_0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0_0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 50)) {
          t = $e0;
          reportUncaughtException(t, true);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHostPageBaseURL(){
  $clinit_Impl();
  var s = $doc.location.href;
  var i = s.indexOf('#');
  i != -1 && (s = s.substring(0, i));
  i = s.indexOf('?');
  i != -1 && (s = s.substring(0, i));
  i = s.lastIndexOf('/');
  i != -1 && (s = s.substring(0, i));
  return s.length > 0?s + '/':'';
}

function getModuleBaseURL(){
  $clinit_Impl();
  var key = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key] || $moduleBase;
}

function maybeInitializeWindowOnError(){
  $clinit_Impl();
  if (onErrorInitialized) {
    return;
  }
  onErrorInitialized = true;
  registerWindowOnError(false);
}

function registerWindowOnError(reportAlways){
  $clinit_Impl();
  function errorHandler(msg, url_0, line, column, error){
    if (!error) {
      error = msg + ' (' + url_0 + ':' + line;
      column && (error += ':' + column);
      error += ')';
    }
    var throwable = of(error);
    reportUncaughtException(throwable, false);
  }

  ;
  function addOnErrorHandler(windowRef){
    var origHandler = windowRef.onerror;
    if (origHandler && !reportAlways) {
      return;
    }
    windowRef.onerror = function(){
      errorHandler.apply(this, arguments);
      origHandler && origHandler.apply(this, arguments);
      return false;
    }
    ;
  }

  addOnErrorHandler($wnd);
  addOnErrorHandler(window);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e, reportSwallowedExceptionToBrowser){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    handler.onUncaughtException(e);
    return;
  }
  if (reportSwallowedExceptionToBrowser) {
    reportToBrowser(instanceOf(e, 178)?castTo(e, 178).getThrown():e);
  }
   else {
    $clinit_System();
    $printStackTraceImpl(e, err, '', '');
  }
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, onErrorInitialized = false, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $startLoadingFragment_0(this$static, fragment, loadErrorHandler){
  var connector, manualRetry, request, url_0, ser;
  url_0 = gwtStartLoadingFragment(fragment, loadErrorHandler);
  if (url_0 == null) {
    return;
  }
  manualRetry = (ser = $get(this$static.manualRetryNumbers, fragment) , this$static.manualRetryNumbers[fragment] = ser + 1 , ser);
  if (manualRetry > 0) {
    connector = url_0.indexOf('?') != -1?38:63;
    url_0 += String.fromCharCode(connector) + 'manualRetry=' + manualRetry;
  }
  request = new LoadingStrategyBase$RequestData(url_0, loadErrorHandler, fragment, MAX_AUTO_RETRY_COUNT);
  setAsyncCallback(request.fragment_0, request);
  $inject($setCallback($setRemoveTag(($clinit_ScriptInjector() , new ScriptInjector$FromUrl(request.url_0))), new ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(request)));
}

function gwtStartLoadingFragment(fragment, loadErrorHandler){
  function loadFailed(e){
    loadErrorHandler.loadTerminated(e);
  }

  return __gwtStartLoadingFragment(fragment, $entry(loadFailed));
}

defineClass(561, 1, {});
var MAX_AUTO_RETRY_COUNT = 3;
var Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase', 561);
function $get(this$static, x_0){
  return this$static[x_0]?this$static[x_0]:0;
}

function $onLoadError(this$static, e, mayRetry){
  var connector;
  if (mayRetry) {
    ++this$static.retryCount;
    if (this$static.retryCount <= this$static.maxRetryCount) {
      connector = this$static.originalUrl.indexOf('?') != -1?38:63;
      this$static.url_0 = this$static.originalUrl + String.fromCharCode(connector) + 'autoRetry=' + this$static.retryCount;
      setAsyncCallback(this$static.fragment_0, this$static);
      $inject($setCallback($setRemoveTag(($clinit_ScriptInjector() , new ScriptInjector$FromUrl(this$static.url_0))), new ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(this$static)));
      return;
    }
  }
  $loadTerminated(this$static.errorHandler, e);
}

function $tryInstall(this$static, code_0){
  var e, textIntro;
  try {
    __gwtInstallCode(code_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 49)) {
      e = $e0;
      textIntro = code_0;
      code_0 != null && code_0.length > 200 && (textIntro = code_0.substr(0, 200) + '...');
      $onLoadError(this$static, new AsyncFragmentLoader$HttpInstallFailure(this$static.url_0, textIntro, e), false);
    }
     else 
      throw toJs($e0);
  }
}

function LoadingStrategyBase$RequestData(url_0, errorHandler, fragment, maxRetryCount){
  this.url_0 = url_0;
  this.originalUrl = url_0;
  this.errorHandler = errorHandler;
  this.maxRetryCount = maxRetryCount;
  this.retryCount = 0;
  this.fragment_0 = fragment;
}

defineClass(562, 1, {}, LoadingStrategyBase$RequestData);
_.errorHandler = null;
_.fragment_0 = 0;
_.maxRetryCount = 0;
_.retryCount = 0;
var Lcom_google_gwt_core_client_impl_LoadingStrategyBase$RequestData_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase/RequestData', 562);
function OnSuccessExecutor$1(val$callback){
  this.val$callback3 = val$callback;
}

defineClass(547, 1, {}, OnSuccessExecutor$1);
_.execute_0 = function execute(){
  this.val$callback3.onSuccess_0();
}
;
var Lcom_google_gwt_core_client_impl_OnSuccessExecutor$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor/1', 547);
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function SchedulerImpl(){
}

function execute_0(cmd){
  return cmd.execute();
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute() && (rescheduled = push_0(rescheduled, t)):t[0].execute_0();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 50)) {
        e = $e0;
        $clinit_Impl();
        reportUncaughtException(e, true);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(809, 2670, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 809);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(810, 1, {}, SchedulerImpl$Flusher);
_.execute = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 810);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(811, 1, {}, SchedulerImpl$Rescuer);
_.execute = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 811);
function ScriptTagLoadingStrategy(){
  this.manualRetryNumbers = [];
}

function asyncCallback(request, code_0){
  var firstTimeCalled;
  firstTimeCalled = clearAsyncCallback(request.fragment_0);
  firstTimeCalled && $tryInstall(request, code_0);
}

function cleanup(request){
  var neverCalled;
  neverCalled = clearAsyncCallback(request.fragment_0);
  neverCalled && $onLoadError(request, new AsyncFragmentLoader$HttpDownloadFailure(request.url_0), true);
}

function clearAsyncCallback(fragment){
  if (!__gwtModuleFunction['runAsyncCallback' + fragment]) {
    return false;
  }
  delete __gwtModuleFunction['runAsyncCallback' + fragment];
  return true;
}

function setAsyncCallback(fragment, request){
  __gwtModuleFunction['runAsyncCallback' + fragment] = $entry(function(code_0, instance){
    asyncCallback(request, code_0);
  }
  );
}

defineClass(545, 561, {}, ScriptTagLoadingStrategy);
var Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy', 545);
function ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(val$request){
  this.val$request2 = val$request;
}

defineClass(396, 1, {}, ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1);
_.onFailure = function onFailure(reason){
  var lastArg;
  cleanup((lastArg = this , castTo(reason, 57) , lastArg).val$request2);
}
;
_.onSuccess = function onSuccess(result){
  var lastArg;
  cleanup((lastArg = this , throwClassCastExceptionUnlessNull(result) , lastArg).val$request2);
}
;
var Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy/ScriptTagDownloadStrategy/1', 396);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = castTo(create_com_google_gwt_core_client_impl_StackTraceCreator_Collector(), 275);
  collector_1 = instanceOf(c, 301) && enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector_1.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = $wnd.Math.min(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals_0(stackTrace[i].methodName, dropFrameUntilFnName) || $equals_0(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector_1;
defineClass(275, 1, {275:1});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 275);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(559, 275, {275:1}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 162, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 559);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_0(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals_0(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

function StackTraceCreator$CollectorModern(){
}

defineClass(301, 275, $intern_6, StackTraceCreator$CollectorModern);
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 162, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_0(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 301);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(560, 301, $intern_6, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 560);
function $clinit_DOMImpl(){
  $clinit_DOMImpl = emptyMethod;
  impl_0 = castTo(create_com_google_gwt_dom_client_DOMImpl(), 182);
}

defineClass(182, 1, $intern_7);
_.eventGetCurrentTarget = function eventGetCurrentTarget(event_0){
  return event_0.currentTarget;
}
;
var impl_0;
var Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImpl', 182);
defineClass(2714, 182, $intern_7);
_.eventGetCurrentTarget = function eventGetCurrentTarget_0(event_0){
  return currentEventTarget;
}
;
_.eventPreventDefault = function eventPreventDefault(evt){
  evt.returnValue = false;
}
;
var currentEventTarget;
var Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplTrident', 2714);
function DOMImplIE8(){
  $clinit_DOMImpl();
}

defineClass(2010, 2714, $intern_7, DOMImplIE8);
var Lcom_google_gwt_dom_client_DOMImplIE8_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE8', 2010);
defineClass(2715, 182, $intern_7);
_.eventPreventDefault = function eventPreventDefault_0(evt){
  evt.preventDefault();
}
;
var Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandard', 2715);
defineClass(2716, 2715, $intern_7);
_.eventGetCurrentTarget = function eventGetCurrentTarget_1(event_0){
  return event_0.currentTarget || $wnd;
}
;
var Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandardBase', 2716);
function DOMImplIE9(){
  $clinit_DOMImpl();
}

defineClass(2013, 2716, $intern_7, DOMImplIE9);
var Lcom_google_gwt_dom_client_DOMImplIE9_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE9', 2013);
function DOMImplMozilla(){
  $clinit_DOMImpl();
}

defineClass(2012, 2715, $intern_7, DOMImplMozilla);
var Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplMozilla', 2012);
function DOMImplWebkit(){
  $clinit_DOMImpl();
}

defineClass(2011, 2716, $intern_7, DOMImplWebkit);
var Lcom_google_gwt_dom_client_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplWebkit', 2011);
defineClass(2689, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 2689);
defineClass(2692, 2689, {});
var Lcom_google_gwt_event_shared_EventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'EventBus', 2692);
defineClass(820, 1, {});
_.hashCode_1 = function hashCode_1(){
  return this.index_0;
}
;
_.toString_0 = function toString_2(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 820);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(352, 820, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 352);
function $addHandler(this$static, type_0, handler){
  return $doAdd(this$static.real, type_0, handler);
}

function SimpleEventBus(){
  this.real = new SimpleEventBus_0;
}

defineClass(828, 2692, {}, SimpleEventBus);
var Lcom_google_gwt_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'SimpleEventBus', 828);
function $cancel(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = ($clinit_Request$ImplHolder() , $clinit_Request$ImplHolder() , impl_1).createResponse(xhr);
  callback.onResponseReceived(this$static, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static);
  this$static.callback.onError(this$static, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw toJs(new NullPointerException);
  }
  if (!callback) {
    throw toJs(new NullPointerException);
  }
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(1050, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 1050);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_1(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(425, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 425);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(1053, 425, {}, Request$1);
_.run = function run(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 1053);
function $clinit_Request$ImplHolder(){
  $clinit_Request$ImplHolder = emptyMethod;
  impl_1 = castTo(create_com_google_gwt_http_client_Request_RequestImpl(), 312);
}

var impl_1;
function Request$RequestImpl(){
}

defineClass(312, 1, {312:1}, Request$RequestImpl);
_.createResponse = function createResponse(xmlHttpRequest){
  return new ResponseImpl(xmlHttpRequest);
}
;
var Lcom_google_gwt_http_client_Request$RequestImpl_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImpl', 312);
function Request$RequestImplIE8And9(){
}

defineClass(1051, 312, {312:1}, Request$RequestImplIE8And9);
_.createResponse = function createResponse_0(xmlHttpRequest){
  return new Request$RequestImplIE8And9$1(xmlHttpRequest);
}
;
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9', 1051);
defineClass(2700, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 2700);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(424, 2700, {}, ResponseImpl);
_.getStatusCode = function getStatusCode(){
  return this.xmlHttpRequest.status;
}
;
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 424);
function Request$RequestImplIE8And9$1($anonymous0){
  ResponseImpl.call(this, $anonymous0);
}

defineClass(1052, 424, {}, Request$RequestImplIE8And9$1);
_.getStatusCode = function getStatusCode_0(){
  var statusCode;
  statusCode = this.xmlHttpRequest.status;
  return statusCode == 1223?204:statusCode;
}
;
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9/1', 1052);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  GET = new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 178)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw toJs(requestPermissionException);
    }
     else 
      throw toJs($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 178)) {
      e = $e1;
      throw toJs(new RequestException(e.getMessage()));
    }
     else 
      throw toJs($e1);
  }
  return request;
}

function $getHeader(this$static){
  if (!this$static.headers_0) {
    return null;
  }
  return castToString($getStringValue(this$static.headers_0, 'Content-Type'));
}

function $setCallback_0(this$static, callback){
  throwIfNull('callback', callback);
  this$static.callback = callback;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers_0 && (this$static.headers_0 = new HashMap);
  $putStringValue(this$static.headers_0, header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers_0 && $size_0(this$static.headers_0) > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.headers_0)).this$01); header$iterator.hasNext;) {
      header = $next(header$iterator);
      try {
        $setRequestHeader(xmlHttpRequest, castToString(header.getKey()), castToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 178)) {
          e = $e0;
          throw toJs(new RequestException(e.getMessage()));
        }
         else 
          throw toJs($e0);
      }
    }
  }
   else {
    xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  }
}

function $setRequestData(this$static, requestData){
  this$static.requestData = requestData;
}

function $setTimeoutMillis(this$static, timeoutMillis){
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException_0('Timeouts cannot be negative'));
  }
  this$static.timeoutMillis = timeoutMillis;
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(360, 1, {});
_.includeCredentials = false;
_.timeoutMillis = 0;
var GET;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 360);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(1048, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 1048);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(281, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_3(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 281);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(171, 57, $intern_8, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 171);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(1056, 171, $intern_8, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 1056);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(1069, 171, $intern_8, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 1069);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw toJs(new IllegalArgumentException_0(name_0 + ' cannot be empty'));
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_1(name_0 + ' cannot be null'));
  }
}

function $forEach(this$static, action){
  var t, t$iterator;
  checkCriticalNotNull(action);
  for (t$iterator = this$static.iterator(); t$iterator.hasNext_0();) {
    t = t$iterator.next_1();
    action.accept_2(t);
  }
}

defineClass(2699, 1, {});
var Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client', 'JSONValue', 2699);
function $get_0(this$static, index_0){
  var v = this$static.jsArray[index_0];
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function $set(this$static, index_0, value_0){
  var previous;
  previous = $get_0(this$static, index_0);
  $set0(this$static, index_0, value_0);
  return previous;
}

function $set0(this$static, index_0, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    value_0 = func(value_0);
  }
   else {
    value_0 = undefined;
  }
  this$static.jsArray[index_0] = value_0;
}

function JSONArray(){
  this.jsArray = [];
}

function JSONArray_0(arr){
  this.jsArray = arr;
}

function unwrap(value_0){
  return value_0.jsArray;
}

defineClass(313, 2699, {313:1}, JSONArray, JSONArray_0);
_.equals_0 = function equals_0(other){
  if (!instanceOf(other, 313)) {
    return false;
  }
  return $equals(this.jsArray, castTo(other, 313).jsArray);
}
;
_.getUnwrapper = function getUnwrapper(){
  return unwrap;
}
;
_.hashCode_1 = function hashCode_2(){
  return $hashCode(this.jsArray);
}
;
_.toString_0 = function toString_4(){
  var c, i, sb;
  sb = new StringBuilder_1('[');
  for (i = 0 , c = this.jsArray.length; i < c; i++) {
    i > 0 && (sb.string += ',' , sb);
    $append_1(sb, $get_0(this, i));
  }
  sb.string += ']';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client', 'JSONArray', 313);
function $clinit_JSONBoolean(){
  $clinit_JSONBoolean = emptyMethod;
  FALSE = new JSONBoolean(false);
  TRUE = new JSONBoolean(true);
}

function JSONBoolean(value_0){
  this.value_0 = value_0;
}

function unwrap_0(value_0){
  return value_0.value_0;
}

defineClass(426, 2699, {}, JSONBoolean);
_.getUnwrapper = function getUnwrapper_0(){
  return unwrap_0;
}
;
_.toString_0 = function toString_5(){
  return $clinit_Boolean() , '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client', 'JSONBoolean', 426);
function JSONException(message){
  RuntimeException_0.call(this, message);
}

defineClass(1065, 49, $intern_3, JSONException);
var Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client', 'JSONException', 1065);
function $clinit_JSONNull(){
  $clinit_JSONNull = emptyMethod;
  instance_2 = new JSONNull;
}

function JSONNull(){
}

function unwrap_1(){
  return null;
}

defineClass(1049, 2699, {}, JSONNull);
_.getUnwrapper = function getUnwrapper_1(){
  return unwrap_1;
}
;
_.toString_0 = function toString_6(){
  return 'null';
}
;
var instance_2;
var Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNull', 1049);
function JSONNumber(value_0){
  this.value_0 = value_0;
}

function unwrap_2(value_0){
  return value_0.value_0;
}

defineClass(246, 2699, {246:1}, JSONNumber);
_.equals_0 = function equals_1(other){
  if (!instanceOf(other, 246)) {
    return false;
  }
  return this.value_0 == castTo(other, 246).value_0;
}
;
_.getUnwrapper = function getUnwrapper_2(){
  return unwrap_2;
}
;
_.hashCode_1 = function hashCode_3(){
  return $hashCode_0(this.value_0);
}
;
_.toString_0 = function toString_7(){
  return this.value_0 + '';
}
;
_.value_0 = 0;
var Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNumber', 246);
function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $get_1(this$static, key){
  if (key == null) {
    throw toJs(new NullPointerException);
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function $put0(this$static, key, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    this$static.jsObject[key] = func(value_0);
  }
   else {
    delete this$static.jsObject[key];
  }
}

function $toString_0(this$static){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new StringBuilder_1('{');
  first = true;
  keys_0 = $computeKeys0(this$static, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_9, 2, 0, 6, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.string += ', ' , sb);
    $append_2(sb, escapeValue(key));
    sb.string += ':';
    $append_1(sb, $get_1(this$static, key));
  }
  sb.string += '}';
  return sb.string;
}

function JSONObject(){
  JSONObject_0.call(this, {});
}

function JSONObject_0(jsValue){
  this.jsObject = jsValue;
}

function unwrap_3(value_0){
  return value_0.jsObject;
}

defineClass(216, 2699, {216:1}, JSONObject, JSONObject_0);
_.equals_0 = function equals_2(other){
  if (!instanceOf(other, 216)) {
    return false;
  }
  return $equals(this.jsObject, castTo(other, 216).jsObject);
}
;
_.getUnwrapper = function getUnwrapper_3(){
  return unwrap_3;
}
;
_.hashCode_1 = function hashCode_4(){
  return $hashCode(this.jsObject);
}
;
_.toString_0 = function toString_8(){
  return $toString_0(this);
}
;
var Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject', 216);
function $clinit_JSONParser(){
  $clinit_JSONParser = emptyMethod;
  typeMap = {'boolean':createBoolean, 'number':createNumber, 'string':createString, 'object':createObject, 'function':createObject, 'undefined':createUndefined};
}

function createBoolean(v){
  return $clinit_JSONBoolean() , v?TRUE:FALSE;
}

function createNumber(v){
  return new JSONNumber(v);
}

function createObject(o){
  if (!o) {
    return $clinit_JSONNull() , instance_2;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new JSONArray_0(o);
  }
   else {
    return new JSONObject_0(o);
  }
}

function createString(v){
  return new JSONString(v);
}

function createUndefined(){
  return null;
}

function throwUnknownTypeException(typeString){
  $clinit_JSONParser();
  throw toJs(new JSONException("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team"));
}

var typeMap;
function JSONString(value_0){
  if (value_0 == null) {
    throw toJs(new NullPointerException);
  }
  this.value_0 = value_0;
}

function unwrap_4(value_0){
  return value_0.value_0;
}

defineClass(282, 2699, {282:1}, JSONString);
_.equals_0 = function equals_3(other){
  if (!instanceOf(other, 282)) {
    return false;
  }
  return $equals_0(this.value_0, castTo(other, 282).value_0);
}
;
_.getUnwrapper = function getUnwrapper_4(){
  return unwrap_4;
}
;
_.hashCode_1 = function hashCode_5(){
  return getHashCode_1(this.value_0);
}
;
_.toString_0 = function toString_9(){
  return escapeValue(this.value_0);
}
;
var Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client', 'JSONString', 282);
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && isJsObject(value_0);
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_10;
  a1 = value_0 >> 22 & $intern_10;
  a2 = value_0 < 0?$intern_11:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder_0 = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_12 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_12 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder_0 = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare_0(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder_0 = neg(a)):(remainder_0 = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_12 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder_0 = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder_0 = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder_0 = neg(a)):(remainder_0 = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder_0 = neg(a);
      aIsMinValue && (remainder_0 = sub_0(remainder_0, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder_0 = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_10;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_10;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_11;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_13 + a.h * $intern_14;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_10;
  a.m = sum1 & $intern_10;
  a.h = sum2 & $intern_11;
  return true;
}

var remainder_0;
function compare_0(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_14) {
    a2 = round_int(value_0 / $intern_14);
    value_0 -= a2 * $intern_14;
  }
  a1 = 0;
  if (value_0 >= $intern_13) {
    a1 = round_int(value_0 / $intern_13);
    value_0 -= a1 * $intern_13;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_10;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_10;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_11;
  return create0(neg0, neg1, neg2);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_10, res1 & $intern_10, res2 & $intern_11);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_12) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_11:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_11:0;
    res1 = negative?$intern_10:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_10, res1 & $intern_10, res2 & $intern_11);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_11;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_10, res1 & $intern_10, res2 & $intern_11);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_10, sum1 & $intern_10, sum2 & $intern_11);
}

function toDouble(a){
  if (compare_0(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_13 + a.h * $intern_14;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_10(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_12 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_10(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create($intern_15);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder_0);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_10, $intern_10, 524287);
  MIN_VALUE = create0(0, 0, $intern_12);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function toJava(e){
  var javaException;
  if (instanceOf(e, 50)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function compare_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_13;
  }
  if (a2 == $intern_11) {
    return big_0.l + big_0.m * $intern_13 - $intern_14;
  }
  return big_0;
}

function eq(a, b){
  return compare_1(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_16 < value_0 && value_0 < $intern_14) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function gt(a, b){
  return compare_1(a, b) > 0;
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function lt(a, b){
  return compare_1(a, b) < 0;
}

function shru_0(a, n){
  return createLongEmul(shru(isSmallLong0(a)?toBigLong(a):a, n));
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_14;
    a3 = $intern_11;
  }
  a1 = round_int(value_0 / $intern_13);
  a0 = round_int(value_0 - a1 * $intern_13);
  return create0(a0, a1, a3);
}

function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

function toInt_0(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

function toString_11(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_10(a);
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  var clientRouter, serverRouter, requestEventProcessor, eventBus;
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $clinit_LogConfiguration();
  $onModuleLoad();
  $clinit_Core();
  $clinit_CoreModule();
  setUncaughtExceptionHandler(new CoreModule$lambda$0$Type);
  clientRouter = new ClientRouter;
  serverRouter = (new GwtRequestAsyncSender , new ServerRouter);
  requestEventProcessor = new RequestEventProcessor;
  eventBus = new SimpleEventsBus(requestEventProcessor);
  $initClientApp($dominoOptions($mainExtensionPoint($asyncRunner($history($requestSendersRepository($eventsListenersRepository($viewsRepository($presentersRepository($requestRepository($eventsBus($serverRouter(new ClientApp$ClientAppBuilder(clientRouter), serverRouter), eventBus), new InMemoryCommandsRepository), new InMemoryPresentersRepository), new InMemoryViewRepository), new InMemoryDominoEventsListenerRepository), new InMemoryRequestRestSendersRepository), new StateHistory), new GwtAsyncRunner), new CoreMainExtensionPoint), new RestyGwtOptions));
  $clinit_ClientApp();
  $info_0(LOGGER_30, 'Initialize domino module...');
  $clinit_LayoutClientModule();
  $info_0(LOGGER_39, 'Initializing Layout frontend module ...');
  $configureModule_0(new LayoutModuleConfiguration);
  $clinit_LayoutUIClientModule();
  $info_0(LOGGER_40, 'Initializing Layout frontend UI module ...');
  $configureModule_0(new LayoutUIModuleConfiguration);
  $clinit_ThemesClientModule();
  $info_0(LOGGER_57, 'Initializing Themes frontend module ...');
  $configureModule_0(new ThemesModuleConfiguration);
  $clinit_ProfileClientModule();
  $info_0(LOGGER_51, 'Initializing Profile frontend module ...');
  $configureModule_0(new ProfileModuleConfiguration);
  $clinit_MenuClientModule();
  $info_0(LOGGER_45, 'Initializing Menu frontend module ...');
  $configureModule_0(new MenuModuleConfiguration);
  $clinit_ComponentCaseClientModule();
  $info_0(LOGGER_18, 'Initializing ComponentCase frontend module ...');
  $configureModule_0(new ComponentCaseModuleConfiguration);
  $clinit_ComponentCaseUIClientModule();
  $info_0(LOGGER_19, 'Initializing ComponentCase frontend UI module ...');
  $configureModule_0(new ComponentCaseUIModuleConfiguration);
  $clinit_HomeClientModule();
  $info_0(LOGGER_34, 'Initializing Home frontend module ...');
  $configureModule_0(new HomeModuleConfiguration);
  $clinit_LayoutsClientModule();
  $info_0(LOGGER_41, 'Initializing Layouts frontend module ...');
  $configureModule_0(new LayoutsModuleConfiguration);
  $clinit_AppLayoutClientModule();
  $info_0(LOGGER_4, 'Initializing LayoutSample frontend module ...');
  $configureModule_0(new AppLayoutModuleConfiguration);
  $clinit_GridLayoutClientModule();
  $info_0(LOGGER_28, 'Initializing GridLayout frontend module ...');
  $configureModule_0(new GridLayoutModuleConfiguration);
  $clinit_GridsClientModule();
  $info_0(LOGGER_29, 'Initializing Grids frontend module ...');
  $configureModule_0(new GridsModuleConfiguration);
  $clinit_ComponentsClientModule();
  $info_0(LOGGER_20, 'Initializing Components frontend module ...');
  $configureModule_0(new ComponentsModuleConfiguration);
  $clinit_FormsClientModule();
  $info_0(LOGGER_24, 'Initializing Forms frontend module ...');
  $configureModule_0(new FormsModuleConfiguration);
  $clinit_FormsUIClientModule();
  $info_0(LOGGER_25, 'Initializing Forms frontend UI module ...');
  $configureModule_0(new FormsUIModuleConfiguration);
  $clinit_DatatableClientModule();
  $info_0(LOGGER_21, 'Initializing Datatable frontend module ...');
  $configureModule_0(new DatatableModuleConfiguration);
  $clinit_BasicFormsClientModule();
  $info_0(LOGGER_6, 'Initializing BasicForms frontend module ...');
  $configureModule_0(new BasicFormsModuleConfiguration);
  $clinit_AdvancedFormsClientModule();
  $info_0(LOGGER, 'Initializing AdvancedForms frontend module ...');
  $configureModule_0(new AdvancedFormsModuleConfiguration);
  $clinit_FormsValidationsClientModule();
  $info_0(LOGGER_27, 'Initializing FormsValidations frontend module ...');
  $configureModule_0(new FormsValidationsModuleConfiguration);
  $clinit_DatePickerClientModule();
  $info_0(LOGGER_22, 'Initializing DatePicker frontend module ...');
  $configureModule_0(new DatePickerModuleConfiguration);
  $clinit_TimePickerClientModule();
  $info_0(LOGGER_59, 'Initializing TimePicker frontend module ...');
  $configureModule_0(new TimePickerModuleConfiguration);
  $clinit_TypographyClientModule();
  $info_0(LOGGER_61, 'Initializing Typography frontend module ...');
  $configureModule_0(new TypographyModuleConfiguration);
  $clinit_HelpersClientModule();
  $info_0(LOGGER_33, 'Initializing Helpers frontend module ...');
  $configureModule_0(new HelpersModuleConfiguration);
  $clinit_ColorsClientModule();
  $info_0(LOGGER_17, 'Initializing Colors frontend module ...');
  $configureModule_0(new ColorsModuleConfiguration);
  $clinit_AnimationClientModule();
  $info_0(LOGGER_2, 'Initializing Animation frontend module ...');
  $configureModule_0(new AnimationModuleConfiguration);
  $clinit_CardsClientModule();
  $info_0(LOGGER_10, 'Initializing Cards frontend module ...');
  $configureModule_0(new CardsModuleConfiguration);
  $clinit_InfoBoxClientModule();
  $info_0(LOGGER_37, 'Initializing InfoBox frontend module ...');
  $configureModule_0(new InfoBoxModuleConfiguration);
  $clinit_ButtonsClientModule();
  $info_0(LOGGER_8, 'Initializing Buttons frontend module ...');
  $configureModule_0(new ButtonsModuleConfiguration);
  $clinit_AlertsClientModule();
  $info_0(LOGGER_1, 'Initializing Alerts frontend module ...');
  $configureModule_0(new AlertsModuleConfiguration);
  $clinit_BadgesClientModule();
  $info_0(LOGGER_5, 'Initializing Badges frontend module ...');
  $configureModule_0(new BadgesModuleConfiguration);
  $clinit_LabelsClientModule();
  $info_0(LOGGER_38, 'Initializing Labels frontend module ...');
  $configureModule_0(new LabelsModuleConfiguration);
  $clinit_ModalsClientModule();
  $info_0(LOGGER_46, 'Initializing Modals frontend module ...');
  $configureModule_0(new ModalsModuleConfiguration);
  $clinit_ListsClientModule();
  $info_0(LOGGER_42, 'Initializing Lists frontend module ... ');
  $configureModule_0(new ListsModuleConfiguration);
  $clinit_LoadersClientModule();
  $info_0(LOGGER_43, 'Initializing Loaders frontend module ...');
  $configureModule_0(new LoadersModuleConfiguration);
  $clinit_IconsClientModule();
  $info_0(LOGGER_35, 'Initializing Icons frontend module ...');
  $configureModule_0(new IconsModuleConfiguration);
  $clinit_BreadcrumbClientModule();
  $info_0(LOGGER_7, 'Initializing Breadcrumb frontend module ...');
  $configureModule_0(new BreadcrumbModuleConfiguration);
  $clinit_CollapseClientModule();
  $info_0(LOGGER_16, 'Initializing Collapse frontend module ... ');
  $configureModule_0(new CollapseModuleConfiguration);
  $clinit_NotificationsClientModule();
  $info_0(LOGGER_47, 'Initializing Notifications frontend module ...');
  $configureModule_0(new NotificationsModuleConfiguration);
  $clinit_MediaClientModule();
  $info_0(LOGGER_44, 'Initializing Media frontend module ...');
  $configureModule_0(new MediaModuleConfiguration);
  $clinit_PaginationClientModule();
  $info_0(LOGGER_48, 'Initializing Pagination frontend module ...');
  $configureModule_0(new PaginationModuleConfiguration);
  $clinit_PreloadersClientModule();
  $info_0(LOGGER_50, 'Initializing Preloaders frontend module ...');
  $configureModule_0(new PreloadersModuleConfiguration);
  $clinit_ProgressClientModule();
  $info_0(LOGGER_52, 'Initializing Progress frontend module ...');
  $configureModule_0(new ProgressModuleConfiguration);
  $clinit_TabsClientModule();
  $info_0(LOGGER_56, 'Initializing Tabs frontend module ...');
  $configureModule_0(new TabsModuleConfiguration);
  $clinit_ThumbnailsClientModule();
  $info_0(LOGGER_58, 'Initializing Thumbnails frontend module ...');
  $configureModule_0(new ThumbnailsModuleConfiguration);
  $clinit_DialogsClientModule();
  $info_0(LOGGER_23, 'Initializing Dialogs frontend module ...');
  $configureModule_0(new DialogsModuleConfiguration);
  $clinit_PopoverClientModule();
  $info_0(LOGGER_49, 'Initializing Popover frontend module ...');
  $configureModule_0(new PopoverModuleConfiguration);
  $clinit_WavesClientModule();
  $info_0(LOGGER_63, 'Initializing Waves frontend module ...');
  $configureModule_0(new WavesModuleConfiguration);
  $clinit_SteppersClientModule();
  $info_0(LOGGER_55, 'Initializing Steppers frontend module ...');
  $configureModule_0(new SteppersModuleConfiguration);
  $clinit_FormSamplesClientModule();
  $info_0(LOGGER_26, 'Initializing FormSamples frontend module ...');
  $configureModule_0(new FormSamplesModuleConfiguration);
  $clinit_SlidersClientModule();
  $info_0(LOGGER_53, 'Initializing Sliders frontend module ...');
  $configureModule_0(new SlidersModuleConfiguration);
  $clinit_CarouselClientModule();
  $info_0(LOGGER_11, 'Initializing Carousel frontend module ...');
  $configureModule_0(new CarouselModuleConfiguration);
  $clinit_TreeClientModule();
  $info_0(LOGGER_60, 'Initializing MenuSample frontend module ...');
  $configureModule_0(new TreeModuleConfiguration);
  $clinit_ChipsClientModule();
  $info_0(LOGGER_13, 'Initializing Chips frontend module ...');
  $configureModule_0(new ChipsModuleConfiguration);
  $clinit_SplitPanelClientModule();
  $info_0(LOGGER_54, 'Initializing SplitPanel frontend module ...');
  $configureModule_0(new SplitPanelModuleConfiguration);
  $clinit_AppClientModule();
  castTo(DOMINO_OPTIONS_HOLDER.attribute, 341);
  setServiceRoot(castTo(castTo(DOMINO_OPTIONS_HOLDER.attribute, 341), 240).defaultServiceRoot);
  $clinit_Defaults();
  castTo(INITIAL_TASKS_HOLDER.attribute, 52).forEach_0(new ClientApp$0methodref$execute$Type);
  $fireEvent_1(Lorg_dominokit_domino_api_shared_extension_MainDominoEvent_2_classLit, castTo(MAIN_EXTENSION_POINT_HOLDER.attribute, 269));
  $info(LOGGER_62);
}

function $getLevel(this$static){
  if (this$static.level) {
    return this$static.level;
  }
  return $clinit_Level() , ALL;
}

function $setFormatter(this$static, newFormatter){
  this$static.formatter = newFormatter;
}

function $setLevel(this$static, newLevel){
  this$static.level = newLevel;
}

defineClass(212, 1, $intern_17);
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 212);
function ConsoleLogHandler(){
  $setFormatter(this, new TextLogFormatter(true));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(542, 212, $intern_17, ConsoleLogHandler);
_.publish = function publish(record){
  var msg, val;
  if (!window.console || $getLevel(this).intValue() > record.level.intValue()) {
    return;
  }
  msg = $format_2(this.formatter, record);
  val = record.level.intValue();
  val >= ($clinit_Level() , $intern_18)?(window.console.error(msg) , undefined):val >= 900?(window.console.warn(msg) , undefined):val >= 800?(window.console.info(msg) , undefined):(window.console.log(msg) , undefined);
}
;
var Lcom_google_gwt_logging_client_ConsoleLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'ConsoleLogHandler', 542);
function DevelopmentModeLogHandler(){
  $setFormatter(this, new TextLogFormatter(false));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(543, 212, $intern_17, DevelopmentModeLogHandler);
_.publish = function publish_0(record){
  return;
}
;
var Lcom_google_gwt_logging_client_DevelopmentModeLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'DevelopmentModeLogHandler', 543);
function $clinit_LogConfiguration(){
  $clinit_LogConfiguration = emptyMethod;
  impl_2 = new LogConfiguration$LogConfigurationImplRegular;
}

function $onModuleLoad(){
  var log_0;
  $configureClientSideLogging(impl_2);
  if (!uncaughtExceptionHandler) {
    log_0 = getLogger(($ensureNamesAreInitialized(Lcom_google_gwt_logging_client_LogConfiguration_2_classLit) , Lcom_google_gwt_logging_client_LogConfiguration_2_classLit.typeName));
    setUncaughtExceptionHandler(new LogConfiguration$1(log_0));
  }
}

function loggingIsEnabled(){
  $clinit_LogConfiguration();
  if (!impl_2) {
    return true;
  }
  return true;
}

var impl_2;
var Lcom_google_gwt_logging_client_LogConfiguration_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration', null);
function LogConfiguration$1(val$log){
  this.val$log2 = val$log;
}

defineClass(541, 1, {}, LogConfiguration$1);
_.onUncaughtException = function onUncaughtException(e){
  $log_0(this.val$log2, ($clinit_Level() , SEVERE), e.getMessage(), e);
}
;
var Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 541);
function $configureClientSideLogging(this$static){
  this$static.root_0 = getLogger('');
  $setUseParentHandlers(this$static.root_0);
  $setLevels(this$static.root_0);
  $setDefaultHandlers(this$static.root_0);
}

function $setDefaultHandlers(l){
  var console_0, dev, remote;
  console_0 = new ConsoleLogHandler;
  $addHandler_0(l, console_0);
  dev = new DevelopmentModeLogHandler;
  $addHandler_0(l, dev);
  remote = new RestfulRemoteLogHandler;
  $addHandler_0(l, remote);
}

function $setLevels(l){
  var level, levelParam, paramsForName;
  levelParam = (ensureListParameterMap() , paramsForName = castTo(listParamMap.get_0('logLevel'), 52) , !paramsForName?null:castToString(paramsForName.get_1(paramsForName.size_1() - 1)));
  level = levelParam == null?null:parse_0(levelParam);
  level?$setLevel_0(l, level):$setLevel_0(l, ($clinit_Level() , INFO));
}

function LogConfiguration$LogConfigurationImplRegular(){
}

defineClass(540, 1, {}, LogConfiguration$LogConfigurationImplRegular);
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 540);
function $clinit_RemoteLogHandlerBase(){
  $clinit_RemoteLogHandlerBase = emptyMethod;
  getLogger('WireActivityLogger');
}

defineClass(824, 212, $intern_17);
var Lcom_google_gwt_logging_client_RemoteLogHandlerBase_2_classLit = createForClass('com.google.gwt.logging.client', 'RemoteLogHandlerBase', 824);
defineClass(2693, 1, {});
var Ljava_util_logging_Formatter_2_classLit = createForClass('java.util.logging', 'Formatter', 2693);
defineClass(2694, 2693, {});
var Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit = createForClass('com.google.gwt.logging.impl', 'FormatterImpl', 2694);
function $format_2(this$static, event_0){
  var message, date, s;
  message = new StringBuilder;
  $append_2(message, (date = new Date_2(event_0.millis_0) , s = new StringBuilder , $append_2(s, $toString_3(date)) , s.string += ' ' , $append_2(s, event_0.loggerName) , s.string += '\n' , $append_2(s, event_0.level.getName()) , s.string += ': ' , s.string));
  $append_2(message, event_0.msg);
  if (this$static.showStackTraces && !!event_0.thrown) {
    message.string += '\n';
    $printStackTraceImpl(event_0.thrown, new StackTracePrintStream(message), '', '');
  }
  return message.string;
}

function TextLogFormatter(showStackTraces){
  this.showStackTraces = showStackTraces;
}

defineClass(407, 2694, {}, TextLogFormatter);
_.showStackTraces = false;
var Lcom_google_gwt_logging_client_TextLogFormatter_2_classLit = createForClass('com.google.gwt.logging.client', 'TextLogFormatter', 407);
defineClass(2681, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 2681);
function FilterOutputStream(out){
}

defineClass(397, 2681, {}, FilterOutputStream);
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 397);
function PrintStream(out){
  FilterOutputStream.call(this, out);
}

defineClass(348, 397, {}, PrintStream);
_.println = function println(s){
}
;
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 348);
function StackTracePrintStream(builder){
  PrintStream.call(this, new FilterOutputStream(null));
  this.builder = builder;
}

defineClass(1005, 348, {}, StackTracePrintStream);
_.println = function println_0(str){
  $append_2(this.builder, str);
  $append_2(this.builder, '\n');
}
;
var Lcom_google_gwt_logging_impl_StackTracePrintStream_2_classLit = createForClass('com.google.gwt.logging.impl', 'StackTracePrintStream', 1005);
function ensureCookies(){
  var newCachedCookies;
  if (!cachedCookies || needsRefresh()) {
    newCachedCookies = new HashMap;
    loadCookies(newCachedCookies);
    cachedCookies = newCachedCookies;
  }
  return cachedCookies;
}

function loadCookies(m){
  var docCookie = $doc.cookie;
  if (docCookie && docCookie != '') {
    var crumbs = docCookie.split('; ');
    for (var i = crumbs.length - 1; i >= 0; --i) {
      var name_0, value_0;
      var eqIdx = crumbs[i].indexOf('=');
      if (eqIdx == -1) {
        name_0 = crumbs[i];
        value_0 = '';
      }
       else {
        name_0 = crumbs[i].substring(0, eqIdx);
        value_0 = crumbs[i].substring(eqIdx + 1);
      }
      if (uriEncoding) {
        try {
          name_0 = decodeURIComponent(name_0);
        }
         catch (e) {
        }
        try {
          value_0 = decodeURIComponent(value_0);
        }
         catch (e) {
        }
      }
      m.put(name_0, value_0);
    }
  }
}

function needsRefresh(){
  var docCookie = $doc.cookie;
  if (docCookie != rawCookies) {
    rawCookies = docCookie;
    return true;
  }
   else {
    return false;
  }
}

var cachedCookies = null, rawCookies, uriEncoding = true;
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  castTo(create_com_google_gwt_user_client_impl_DOMImpl(), 183);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_9, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $clinit_Window(){
  $clinit_Window = emptyMethod;
  impl_3 = castTo(create_com_google_gwt_user_client_impl_WindowImpl(), 280);
}

var impl_3;
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = queryString.substr(1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (key.length == 0) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull('encodedURLComponent', val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (!instanceOf($e0, 178))
          throw toJs($e0);
      }
      values = castTo(out.get_0(key), 52);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 80);
    entry.setValue(unmodifiableList(castTo(entry.getValue(), 52)));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = ($clinit_Window() , impl_3).getQueryString();
  if (!listParamMap || !$equals_0(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

var cachedQueryString = '', listParamMap;
defineClass(183, 1, $intern_19);
var Lcom_google_gwt_user_client_impl_DOMImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImpl', 183);
defineClass(2717, 183, $intern_19);
var Lcom_google_gwt_user_client_impl_DOMImplTrident_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplTrident', 2717);
function DOMImplIE8_0(){
}

defineClass(2014, 2717, $intern_19, DOMImplIE8_0);
var Lcom_google_gwt_user_client_impl_DOMImplIE8_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplIE8', 2014);
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOMImplStandard();
  $clinit_DOM();
  return;
}

defineClass(2718, 183, $intern_19);
var captureEventDispatchers;
var Lcom_google_gwt_user_client_impl_DOMImplStandard_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplStandard', 2718);
defineClass(2719, 2718, $intern_19);
var Lcom_google_gwt_user_client_impl_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplStandardBase', 2719);
function DOMImplIE9_0(){
  $clinit_DOMImplStandard();
}

defineClass(2015, 2719, $intern_19, DOMImplIE9_0);
var Lcom_google_gwt_user_client_impl_DOMImplIE9_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplIE9', 2015);
function $clinit_DOMImplMozilla(){
  $clinit_DOMImplMozilla = emptyMethod;
  $clinit_DOMImplStandard();
  captureEventDispatchers['DOMMouseScroll'] = dispatchCapturedMouseEvent;
}

function DOMImplMozilla_0(){
  $clinit_DOMImplMozilla();
}

defineClass(2016, 2718, $intern_19, DOMImplMozilla_0);
var Lcom_google_gwt_user_client_impl_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplMozilla', 2016);
function DOMImplWebkit_0(){
  $clinit_DOMImplStandard();
}

defineClass(2017, 2719, $intern_19, DOMImplWebkit_0);
var Lcom_google_gwt_user_client_impl_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplWebkit', 2017);
function WindowImpl(){
}

defineClass(280, 1, {280:1}, WindowImpl);
_.getQueryString = function getQueryString(){
  return $wnd.location.search;
}
;
var Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImpl', 280);
function WindowImplIE(){
}

defineClass(1043, 280, {280:1}, WindowImplIE);
_.getQueryString = function getQueryString_0(){
  var href_0 = $wnd.location.href;
  var hashLoc = href_0.indexOf('#');
  hashLoc >= 0 && (href_0 = href_0.substring(0, hashLoc));
  var questionLoc = href_0.indexOf('?');
  return questionLoc > 0?href_0.substring(questionLoc):'';
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE', 1043);
function WindowImplMozilla(){
}

defineClass(1044, 280, {280:1}, WindowImplMozilla);
var Lcom_google_gwt_user_client_impl_WindowImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplMozilla', 1044);
function assertCompileTimeUserAgent(){
  var compileTimeValue, impl, runtimeValue;
  impl = castTo(create_com_google_gwt_useragent_client_UserAgent(), 300);
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  if (!$equals_0(compileTimeValue, runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable_0.call(this, message, cause);
}

defineClass(193, 50, $intern_20);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 193);
defineClass(125, 193, $intern_20);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 125);
function UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_12('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 50)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 50):null);
}

defineClass(537, 125, $intern_20, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 537);
function UserAgentImplGecko1_8(){
}

defineClass(815, 1, $intern_21, UserAgentImplGecko1_8);
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'gecko1_8';
}
;
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplGecko1_8', 815);
function UserAgentImplIe10(){
}

defineClass(813, 1, $intern_21, UserAgentImplIe10);
_.getCompileTimeValue = function getCompileTimeValue_0(){
  return 'ie10';
}
;
_.getRuntimeValue = function getRuntimeValue_0(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe10_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe10', 813);
function UserAgentImplIe8(){
}

defineClass(816, 1, $intern_21, UserAgentImplIe8);
_.getCompileTimeValue = function getCompileTimeValue_1(){
  return 'ie8';
}
;
_.getRuntimeValue = function getRuntimeValue_1(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe8_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe8', 816);
function UserAgentImplIe9(){
}

defineClass(812, 1, $intern_21, UserAgentImplIe9);
_.getCompileTimeValue = function getCompileTimeValue_2(){
  return 'ie9';
}
;
_.getRuntimeValue = function getRuntimeValue_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe9_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe9', 812);
function UserAgentImplSafari(){
}

defineClass(814, 1, $intern_21, UserAgentImplSafari);
_.getCompileTimeValue = function getCompileTimeValue_3(){
  return 'safari';
}
;
_.getRuntimeValue = function getRuntimeValue_3(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplSafari', 814);
function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_1(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_1('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1;
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_2(this$static.map_0, type_0), 158);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(sourceMap.get_0(source), 52);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function SimpleEventBus_0(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(402, 2689, {}, SimpleEventBus_0);
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 402);
function SimpleEventBus$1(){
}

defineClass(822, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 822);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(823, 1, {2751:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 823);
function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.window.document;
  location_1 = $wnd.window.location;
  self_0 = $wnd.window.self;
}

var document_0, location_1, self_0;
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(347, 1, {346:1});
_.toString_0 = function toString_16(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 347);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(770, 49, $intern_3, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 770);
function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(179, 49, $intern_3, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 179);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

defineClass(427, 179, $intern_3, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 427);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(399, 49, $intern_3, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 399);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

booleanCastMap = {10:1, 552:1, 73:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 552);
function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(554, 49, $intern_3, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 554);
defineClass(239, 1, {10:1, 239:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 239);
function $hashCode_0(this$static){
  return round_int((checkCriticalNotNull(this$static) , this$static));
}

doubleCastMap = {10:1, 73:1, 553:1, 239:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 553);
function Enum(name_0, ordinal){
  this.name_1 = name_0;
  this.ordinal = ordinal;
}

function createValueOfMap(enumConstants){
  var result, value_0, value$index, value$max;
  result = {};
  for (value$index = 0 , value$max = enumConstants.length; value$index < value$max; ++value$index) {
    value_0 = enumConstants[value$index];
    result[':' + (value_0.name_1 != null?value_0.name_1:'' + value_0.ordinal)] = value_0;
  }
  return result;
}

function valueOf(map_0, name_0){
  var result;
  checkCriticalNotNull(name_0);
  result = map_0[':' + name_0];
  checkCriticalArgument_1(!!result, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_5, 1, 5, [name_0]));
  return result;
}

defineClass(53, 1, $intern_22);
_.equals_0 = function equals_5(other){
  return this === other;
}
;
_.hashCode_1 = function hashCode_7(){
  return getHashCode_0(this);
}
;
_.toString_0 = function toString_18(){
  return this.name_1 != null?this.name_1:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 53);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(88, 49, {10:1, 57:1, 88:1, 49:1, 50:1}, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 88);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(127, 49, $intern_3, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 127);
function Integer(value_0){
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf_1(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(100, 239, $intern_23, Integer);
_.equals_0 = function equals_6(o){
  return instanceOf(o, 100) && castTo(o, 100).value_0 == this.value_0;
}
;
_.hashCode_1 = function hashCode_8(){
  return this.value_0;
}
;
_.toString_0 = function toString_19(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 100);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_24, 100, 256, 0, 1);
}

var boxedValues;
function Long(value_0){
  this.value_0 = value_0;
}

function valueOf_2(i){
  var rebase, result;
  if (compare_1(i, -129) > 0 && compare_1(i, 128) < 0) {
    rebase = toInt_0(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

defineClass(211, 239, $intern_25, Long);
_.equals_0 = function equals_7(o){
  return instanceOf(o, 211) && eq(castTo(o, 211).value_0, this.value_0);
}
;
_.hashCode_1 = function hashCode_9(){
  return toInt_0(this.value_0);
}
;
_.toString_0 = function toString_20(){
  return '' + toString_11(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 211);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_0 = initUnidimensionalArray(Ljava_lang_Long_2_classLit, $intern_24, 211, 256, 0, 1);
}

var boxedValues_0;
defineClass(2875, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(typeError){
  JsException.call(this, typeError);
}

function NullPointerException_1(message){
  RuntimeException_0.call(this, message);
}

defineClass(129, 273, $intern_3, NullPointerException, NullPointerException_0, NullPointerException_1);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 129);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(162, 1, {10:1, 162:1}, StackTraceElement);
_.equals_0 = function equals_9(other){
  var st;
  if (instanceOf(other, 162)) {
    st = castTo(other, 162);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className_0 == st.className_0 && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_1 = function hashCode_11(){
  return hashCode_18(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_5, 1, 5, [valueOf_1(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_22(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 162);
function $charAt_0(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $equals_0(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_9, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = trail.substr(0, matchIndex);
      trail = $substring_0(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty);
  }
  return out;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $toUpperCase(this$static, locale){
  return locale == ($clinit_Locale() , $clinit_Locale() , defaultLocale)?this$static.toLocaleUpperCase():this$static.toUpperCase();
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && (checkCriticalStringElementIndex(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (checkCriticalStringElementIndex(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & $intern_26;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & $intern_26;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_26);
  }
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    checkCriticalStringElementIndex(pos + 1, replaceStr.length);
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

function valueOf_4(x_0){
  return x_0 == null?'null':toString_12(x_0);
}

stringCastMap = {10:1, 346:1, 73:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(112, 347, {346:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 112);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(395, 179, $intern_3, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 395);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream(null);
  new PrintStream(null);
}

defineClass(2879, 1, {});
var err;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(130, 49, $intern_3, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 130);
function $addAll(this$static, c){
  var changed, e, e$iterator;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    changed = changed | this$static.add_0(e);
  }
  return changed;
}

function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_1();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

defineClass(2685, 1, $intern_27);
_.forEach_0 = function forEach_0(action){
  $forEach(this, action);
}
;
_.spliterator_0 = function spliterator_0(){
  return new Spliterators$IteratorSpliterator(this, 0);
}
;
_.stream = function stream(){
  return new StreamImpl(null, this.spliterator_0());
}
;
_.add_0 = function add_6(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.addAll = function addAll(c){
  return $addAll(this, c);
}
;
_.contains_0 = function contains_0(o){
  return $advanceToFind(this, o, false);
}
;
_.toArray = function toArray(){
  return this.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_5, 1, this.size_1(), 5, 1));
}
;
_.toArray_0 = function toArray_0(a){
  var i, it, size_0;
  size_0 = this.size_1();
  a.length < size_0 && (a = stampJavaTypeInfo_1(new Array(size_0), a));
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, it.next_1());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}
;
_.toString_0 = function toString_24(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner_0(', ', '[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_4(joiner, e === this?'(this Collection)':e == null?'null':toString_12(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 2685);
function $forEach_2(this$static, consumer){
  var entry, entry$iterator;
  checkCriticalNotNull(consumer);
  for (entry$iterator = this$static.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 80);
    consumer.accept_1(entry.getKey(), entry.getValue());
  }
}

function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext_0();) {
    entry = castTo(iter.next_1(), 80);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $putAll(this$static, map_0){
  var e, e$iterator;
  checkCriticalNotNull(map_0);
  for (e$iterator = map_0.entrySet_0().iterator(); e$iterator.hasNext_0();) {
    e = castTo(e$iterator.next_1(), 80);
    $put(this$static, e.getKey(), e.getValue());
  }
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_12(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(2691, 1, $intern_28);
_.containsEntry = function containsEntry(entry){
  return $containsEntry(this, entry);
}
;
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals_0 = function equals_11(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 158)) {
    return false;
  }
  otherMap = castTo(obj, 158);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 80);
    if (!this.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_0(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode_1 = function hashCode_13(){
  return hashCode_19(this.entrySet_0());
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.size_1 = function size_1(){
  return this.entrySet_0().size_1();
}
;
_.toString_0 = function toString_25(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner_0(', ', '{', '}');
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 80);
    $add_4(joiner, $toString_2(this, entry.getKey()) + '=' + $toString_2(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 2691);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get_2(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_7(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_1(this$static.stringMap, key);
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

function $reset(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  structureChanged(this$static);
}

function $size_0(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(826, 2691, $intern_28);
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_1(key){
  return $get_2(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.size_1 = function size_2(){
  return $size_0(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 826);
defineClass($intern_29, 2685, $intern_30);
_.spliterator_0 = function spliterator_1(){
  return new Spliterators$IteratorSpliterator(this, 1);
}
;
_.equals_0 = function equals_12(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 143)) {
    return false;
  }
  other = castTo(o, 143);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_1 = function hashCode_14(){
  return hashCode_19(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', $intern_29);
function $contains(this$static, o){
  if (instanceOf(o, 80)) {
    return $containsEntry(this$static.this$01, castTo(o, 80));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(241, $intern_29, $intern_30, AbstractHashMap$EntrySet);
_.contains_0 = function contains_1(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_1(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 241);
function $forEachRemaining(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.hasNext_0()) {
    consumer.accept_2(this$static.next_1());
  }
}

function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = castTo(this$static.current.next_1(), 80);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(403, 1, {}, AbstractHashMap$EntrySetIterator);
_.forEachRemaining = function forEachRemaining(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.hasNext;
}
;
_.remove_1 = function remove_1(){
  checkCriticalState(!!this.last);
  checkStructuralChange(this.this$01, this);
  this.last.remove_1();
  this.last = null;
  this.hasNext = $computeHasNext(this);
  recordLastKnownStructure(this.this$01, this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 403);
defineClass($intern_31, 2685, $intern_32);
_.spliterator_0 = function spliterator_2(){
  return new Spliterators$IteratorSpliterator(this, 16);
}
;
_.add_1 = function add_7(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_8(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_13(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 52)) {
    return false;
  }
  other = castTo(o, 52);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_1 = function hashCode_15(){
  return hashCode_20(this);
}
;
_.iterator = function iterator_2(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_2 = function remove_2(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', $intern_31);
function $hasNext(this$static){
  return this$static.i < this$static.this$01_0.size_1();
}

function $next_0(this$static){
  checkCriticalElement(this$static.i < this$static.this$01_0.size_1());
  return this$static.this$01_0.get_1(this$static.last = this$static.i++);
}

function $remove_1(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01_0.remove_2(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(305, 1, {}, AbstractList$IteratorImpl);
_.forEachRemaining = function forEachRemaining_0(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_0(){
  return $hasNext(this);
}
;
_.next_1 = function next_1(){
  return $next_0(this);
}
;
_.remove_1 = function remove_3(){
  $remove_1(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 305);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(401, 305, {}, AbstractList$ListIteratorImpl);
_.remove_1 = function remove_4(){
  $remove_1(this);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 401);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(243, $intern_29, $intern_30, AbstractMap$1);
_.contains_0 = function contains_2(key){
  return this.this$01.containsKey(key);
}
;
_.iterator = function iterator_3(){
  var outerIter;
  return outerIter = this.this$01.entrySet_0().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_5(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 243);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(213, 1, {}, AbstractMap$1$1);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_1 = function next_2(){
  var entry;
  return entry = castTo(this.val$outerIter2.next_1(), 80) , entry.getKey();
}
;
_.remove_1 = function remove_6(){
  this.val$outerIter2.remove_1();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 213);
function $setValue(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(278, 1, {278:1, 80:1});
_.equals_0 = function equals_14(other){
  var entry;
  if (!instanceOf(other, 80)) {
    return false;
  }
  entry = castTo(other, 80);
  return equals_25(this.key_0, entry.getKey()) && equals_25(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_1 = function hashCode_16(){
  return hashCode_26(this.key_0) ^ hashCode_26(this.value_0);
}
;
_.setValue = function setValue(value_0){
  return $setValue(this, value_0);
}
;
_.toString_0 = function toString_26(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 278);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(242, 278, {278:1, 242:1, 80:1}, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 242);
defineClass(2695, 1, {80:1});
_.equals_0 = function equals_15(other){
  var entry;
  if (!instanceOf(other, 80)) {
    return false;
  }
  entry = castTo(other, 80);
  return equals_25(this.val$entry2.value[0], entry.getKey()) && equals_25($getValue(this), entry.getValue());
}
;
_.hashCode_1 = function hashCode_17(){
  return hashCode_26(this.val$entry2.value[0]) ^ hashCode_26($getValue(this));
}
;
_.toString_0 = function toString_27(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 2695);
function $add_0(this$static, index_0, element){
  var iter;
  iter = $listIterator(this$static, index_0);
  $addNode(iter.this$01, element, iter.currentNode_0.prev, iter.currentNode_0);
  ++iter.currentIndex;
  iter.lastNode = null;
}

function $get_4(this$static, index_0){
  var iter;
  iter = $listIterator(this$static, index_0);
  try {
    return $next_3(iter);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 215)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't get element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}

defineClass(2696, $intern_31, $intern_32);
_.add_1 = function add_10(index_0, element){
  $add_0(this, index_0, element);
}
;
_.get_1 = function get_4(index_0){
  return $get_4(this, index_0);
}
;
_.iterator = function iterator_5(){
  return $listIterator(this, 0);
}
;
_.remove_2 = function remove_7(index_0){
  var iter, old;
  iter = this.listIterator_0(index_0);
  try {
    old = iter.next_1();
    iter.remove_1();
    return old;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 215)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't remove element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 2696);
function $$init_0(this$static){
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_5, 1, 0, 5, 1);
}

function $add_1(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $forEach_0(this$static, consumer){
  var e, e$array, e$index, e$max;
  checkCriticalNotNull(consumer);
  for (e$array = this$static.array , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    consumer.accept_2(e);
  }
}

function $get_5(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_2(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_25(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_2(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function $toArray(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  $$init_0(this);
}

defineClass(43, $intern_31, $intern_33, ArrayList);
_.add_1 = function add_11(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_0 = function add_12(o){
  return $add_1(this, o);
}
;
_.addAll = function addAll_0(c){
  return $addAll_0(this, c);
}
;
_.contains_0 = function contains_4(o){
  return $indexOf_2(this, o, 0) != -1;
}
;
_.forEach_0 = function forEach_2(consumer){
  $forEach_0(this, consumer);
}
;
_.get_1 = function get_5(index_0){
  return $get_5(this, index_0);
}
;
_.iterator = function iterator_6(){
  return new ArrayList$1(this);
}
;
_.remove_2 = function remove_8(index_0){
  return $remove_2(this, index_0);
}
;
_.size_1 = function size_7(){
  return this.array.length;
}
;
_.toArray = function toArray_1(){
  return clone(this.array, this.array.length);
}
;
_.toArray_0 = function toArray_2(out){
  return $toArray(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 43);
function $next_1(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function $remove_4(this$static){
  checkCriticalState(this$static.last != -1);
  $remove_2(this$static.this$01, this$static.i = this$static.last);
  this$static.last = -1;
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(115, 1, {}, ArrayList$1);
_.forEachRemaining = function forEachRemaining_2(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_2(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_3(){
  return $next_1(this);
}
;
_.remove_1 = function remove_9(){
  $remove_4(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 115);
function hashCode_18(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function spliterator_3(array, endExclusive){
  return checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive);
}

function stream_0(array){
  return new StreamImpl(null, spliterator_3(array, array.length));
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
  EMPTY_MAP = new Collections$EmptyMap;
  EMPTY_SET = new Collections$EmptySet;
}

function hashCode_19(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_20(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 385)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST, EMPTY_MAP, EMPTY_SET;
function Collections$EmptyList(){
}

defineClass(1006, $intern_31, $intern_33, Collections$EmptyList);
_.contains_0 = function contains_6(object){
  return false;
}
;
_.get_1 = function get_7(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_7(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_9(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 1006);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(1007, 1, {}, Collections$EmptyListIterator);
_.forEachRemaining = function forEachRemaining_3(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_3(){
  return false;
}
;
_.next_1 = function next_4(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_1 = function remove_10(){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 1007);
function Collections$EmptyMap(){
}

defineClass(1009, 2691, $intern_34, Collections$EmptyMap);
_.containsKey = function containsKey_2(key){
  return false;
}
;
_.entrySet_0 = function entrySet_1(){
  return $clinit_Collections() , EMPTY_SET;
}
;
_.get_0 = function get_8(key){
  return null;
}
;
_.size_1 = function size_10(){
  return 0;
}
;
var Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util', 'Collections/EmptyMap', 1009);
function Collections$EmptySet(){
}

defineClass(1008, $intern_29, {10:1, 114:1, 143:1}, Collections$EmptySet);
_.contains_0 = function contains_7(object){
  return false;
}
;
_.iterator = function iterator_8(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_11(){
  return 0;
}
;
var Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 1008);
defineClass(408, 1, $intern_27);
_.forEach_0 = function forEach_4(action){
  $forEach(this, action);
}
;
_.spliterator_0 = function spliterator_4(){
  return new Spliterators$IteratorSpliterator(this, 0);
}
;
_.stream = function stream_1(){
  return new StreamImpl(null, this.spliterator_0());
}
;
_.add_0 = function add_13(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.addAll = function addAll_1(c){
  throw toJs(new UnsupportedOperationException);
}
;
_.iterator = function iterator_9(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_13(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_5(){
  return this.coll.toArray();
}
;
_.toArray_0 = function toArray_6(a){
  return this.coll.toArray_0(a);
}
;
_.toString_0 = function toString_28(){
  return toString_12(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 408);
function $remove_5(){
  throw toJs(new UnsupportedOperationException);
}

function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(356, 1, {}, Collections$UnmodifiableCollectionIterator);
_.forEachRemaining = function forEachRemaining_4(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_4(){
  return this.it.hasNext_0();
}
;
_.next_1 = function next_5(){
  return this.it.next_1();
}
;
_.remove_1 = function remove_11(){
  $remove_5();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 356);
function Collections$UnmodifiableList(list){
  this.coll = list;
  this.list = list;
}

defineClass(355, 408, $intern_32, Collections$UnmodifiableList);
_.spliterator_0 = function spliterator_5(){
  return new Spliterators$IteratorSpliterator(this, 16);
}
;
_.equals_0 = function equals_16(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.list, o);
}
;
_.get_1 = function get_10(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode_1 = function hashCode_21(){
  return hashCode__I__devirtual$(this.list);
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 355);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(1010, 1, $intern_28, Collections$UnmodifiableMap);
_.containsKey = function containsKey_3(key){
  return this.map_0.containsKey(key);
}
;
_.entrySet_0 = function entrySet_2(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals_0 = function equals_17(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.map_0, o);
}
;
_.get_0 = function get_11(key){
  return this.map_0.get_0(key);
}
;
_.hashCode_1 = function hashCode_22(){
  return hashCode__I__devirtual$(this.map_0);
}
;
_.put = function put_1(key, value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_14(){
  return this.map_0.size_1();
}
;
_.toString_0 = function toString_29(){
  return toString_12(this.map_0);
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 1010);
defineClass(1011, 408, $intern_30);
_.spliterator_0 = function spliterator_6(){
  return new Spliterators$IteratorSpliterator(this, 1);
}
;
_.equals_0 = function equals_18(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.coll, o);
}
;
_.hashCode_1 = function hashCode_23(){
  return hashCode__I__devirtual$(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 1011);
function $wrap(array, size_0){
  var i;
  for (i = 0; i < size_0; ++i) {
    setCheck(array, i, new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(castTo(array[i], 80)));
  }
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  this.coll = s;
}

defineClass(1012, 1011, $intern_30, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_10(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
_.toArray = function toArray_7(){
  var array;
  array = this.coll.toArray();
  $wrap(array, array.length);
  return array;
}
;
_.toArray_0 = function toArray_8(a){
  var result;
  result = this.coll.toArray_0(a);
  $wrap(result, this.coll.size_1());
  return result;
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 1012);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(1013, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.forEachRemaining = function forEachRemaining_5(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_6(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(castTo(this.val$it2.next_1(), 80));
}
;
_.hasNext_0 = function hasNext_5(){
  return this.val$it2.hasNext_0();
}
;
_.remove_1 = function remove_13(){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 1013);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(409, 1, {80:1}, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals_0 = function equals_19(o){
  return this.entry.equals_0(o);
}
;
_.getKey = function getKey_0(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_0(){
  return this.entry.getValue();
}
;
_.hashCode_1 = function hashCode_24(){
  return this.entry.hashCode_1();
}
;
_.setValue = function setValue_0(value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.toString_0 = function toString_30(){
  return toString_12(this.entry);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 409);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(410, 355, {114:1, 52:1, 385:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 410);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function recordLastKnownStructure(host, iterator){
  iterator.$modCount = host.$modCount;
}

function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(1054, 49, $intern_3, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 1054);
function $toString_3(this$static){
  var hourOffset, minuteOffset, offset;
  offset = -this$static.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = padTwo($wnd.Math.abs(offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[this$static.jsdate.getDay()] + ' ' + MONTHS[this$static.jsdate.getMonth()] + ' ' + padTwo(this$static.jsdate.getDate()) + ' ' + padTwo(this$static.jsdate.getHours()) + ':' + padTwo(this$static.jsdate.getMinutes()) + ':' + padTwo(this$static.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this$static.jsdate.getFullYear();
}

function Date_2(date){
  this.jsdate = new $wnd.Date(toDouble_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(70, 1, $intern_35, Date_2);
_.equals_0 = function equals_23(obj){
  return instanceOf(obj, 70) && eq(fromDouble_0(this.jsdate.getTime()), fromDouble_0(castTo(obj, 70).jsdate.getTime()));
}
;
_.hashCode_1 = function hashCode_25(){
  var time;
  time = fromDouble_0(this.jsdate.getTime());
  return toInt_0(xor_0(time, shru_0(time, 32)));
}
;
_.toString_0 = function toString_31(){
  return $toString_3(this);
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 70);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_9, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_9, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  $reset(this);
}

defineClass(87, 826, $intern_34, HashMap);
_.equals_1 = function equals_24(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 87);
function $add_2(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return this$static.map_0.containsKey(o);
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(163, $intern_29, $intern_36, HashSet);
_.add_0 = function add_14(o){
  return $add_2(this, o);
}
;
_.contains_0 = function contains_9(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_11(){
  var outerIter;
  return outerIter = (new AbstractMap$1(this.map_0)).this$01.entrySet_0().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_15(){
  return this.map_0.size_1();
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 163);
function $findEntryInChain(this$static, key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host_0.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function $getEntry(this$static, key){
  return $findEntryInChain(this$static, key, $getChainOrEmpty(this$static, key == null?0:this$static.host_0.getHashCode(key)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode;
  hashCode = key == null?0:this$static.host_0.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  }
   else {
    entry = $findEntryInChain(this$static, key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host_0);
  return null;
}

function $remove_7(this$static, key){
  var chain, chain0, entry, hashCode, i;
  hashCode = key == null?0:this$static.host_0.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (this$static.host_0.equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete_0(this$static.backingMap, hashCode);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host_0);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

defineClass(1028, 1, {}, InternalHashCodeMap);
_.forEach_0 = function forEach_6(action){
  $forEach(this, action);
}
;
_.iterator = function iterator_12(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 1028);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(416, 1, {}, InternalHashCodeMap$1);
_.forEachRemaining = function forEachRemaining_6(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_7(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_6(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_1 = function remove_14(){
  $remove_7(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 416);
function $delete_0(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $delete_1(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_1(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_7(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host_0);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_8(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    $delete_1(this$static.backingMap, key);
    --this$static.size_0;
    structureChanged(this$static.host_0);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

defineClass(1016, 1, {}, InternalStringMap);
_.forEach_0 = function forEach_7(action){
  $forEach(this, action);
}
;
_.iterator = function iterator_13(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 1016);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(414, 1, {}, InternalStringMap$1);
_.forEachRemaining = function forEachRemaining_7(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_8(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_7(){
  return !this.current.done;
}
;
_.remove_1 = function remove_15(){
  $remove_8(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 414);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_7(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(1017, 2695, {80:1}, InternalStringMap$2);
_.getKey = function getKey_1(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_1(){
  return $getValue(this);
}
;
_.setValue = function setValue_1(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 1017);
function $add_3(this$static, o){
  $addNode(this$static, o, this$static.tail.prev, this$static.tail);
  return true;
}

function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next_0 = next;
  next.prev = prev.next_0 = node;
  ++this$static.size_0;
}

function $listIterator(this$static, index_0){
  var i, node;
  checkCriticalPositionIndex(index_0, this$static.size_0);
  if (index_0 >= this$static.size_0 >> 1) {
    node = this$static.tail;
    for (i = this$static.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this$static.header.next_0;
    for (i = 0; i < index_0; ++i) {
      node = node.next_0;
    }
  }
  return new LinkedList$ListIteratorImpl(this$static, index_0, node);
}

function $removeNode(this$static, node){
  var oldValue;
  oldValue = node.value_0;
  node.next_0.prev = node.prev;
  node.prev.next_0 = node.next_0;
  node.next_0 = node.prev = null;
  node.value_0 = null;
  --this$static.size_0;
  return oldValue;
}

function $reset_0(this$static){
  this$static.header.next_0 = this$static.tail;
  this$static.tail.prev = this$static.header;
  this$static.header.prev = this$static.tail.next_0 = null;
  this$static.size_0 = 0;
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  $reset_0(this);
}

defineClass(131, 2696, $intern_37, LinkedList);
_.add_0 = function add_15(o){
  return $add_3(this, o);
}
;
_.listIterator_0 = function listIterator_4(index_0){
  return $listIterator(this, index_0);
}
;
_.size_1 = function size_18(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 131);
function $next_3(this$static){
  checkCriticalElement(this$static.currentNode_0 != this$static.this$01.tail);
  this$static.lastNode = this$static.currentNode_0;
  this$static.currentNode_0 = this$static.currentNode_0.next_0;
  ++this$static.currentIndex;
  return this$static.lastNode.value_0;
}

function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode_0 = startNode;
  this.currentIndex = index_0;
}

defineClass(1029, 1, {}, LinkedList$ListIteratorImpl);
_.forEachRemaining = function forEachRemaining_9(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_9(){
  return this.currentNode_0 != this.this$01.tail;
}
;
_.next_1 = function next_10(){
  return $next_3(this);
}
;
_.remove_1 = function remove_18(){
  var nextNode;
  checkCriticalState(!!this.lastNode);
  nextNode = this.lastNode.next_0;
  $removeNode(this.this$01, this.lastNode);
  this.currentNode_0 == this.lastNode?(this.currentNode_0 = nextNode):--this.currentIndex;
  this.lastNode = null;
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 1029);
function LinkedList$Node(){
}

defineClass(357, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 357);
function $clinit_Locale(){
  $clinit_Locale = emptyMethod;
  ROOT = new Locale$1;
  defaultLocale = new Locale$4;
}

defineClass(2680, 1, {});
var ROOT, defaultLocale;
var Ljava_util_Locale_2_classLit = createForClass('java.util', 'Locale', 2680);
function Locale$1(){
}

defineClass(556, 2680, {}, Locale$1);
_.toString_0 = function toString_33(){
  return '';
}
;
var Ljava_util_Locale$1_2_classLit = createForClass('java.util', 'Locale/1', 556);
function Locale$4(){
}

defineClass(557, 2680, {}, Locale$4);
_.toString_0 = function toString_34(){
  return 'unknown';
}
;
var Ljava_util_Locale$4_2_classLit = createForClass('java.util', 'Locale/4', 557);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(215, 49, {10:1, 57:1, 49:1, 50:1, 215:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 215);
function equals_25(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_26(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $clinit_Optional(){
  $clinit_Optional = emptyMethod;
  EMPTY = new Optional(null);
}

function $orElse(this$static, other){
  return this$static.ref != null?this$static.ref:other;
}

function $orElseGet(this$static){
  return this$static.ref != null?this$static.ref:($clinit_RemoteLogHandlerBase() , initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 162, 0, 0, 1));
}

function Optional(ref){
  $clinit_Optional();
  this.ref = ref;
}

function ofNullable(value_0){
  $clinit_Optional();
  return value_0 == null?EMPTY:new Optional(checkCriticalNotNull(value_0));
}

defineClass(196, 1, {196:1}, Optional);
_.equals_0 = function equals_26(obj){
  var other;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 196)) {
    return false;
  }
  other = castTo(obj, 196);
  return equals_25(this.ref, other.ref);
}
;
_.hashCode_1 = function hashCode_27(){
  return hashCode_26(this.ref);
}
;
_.toString_0 = function toString_35(){
  return this.ref != null?'Optional.of(' + valueOf_4(this.ref) + ')':'Optional.empty()';
}
;
var EMPTY;
var Ljava_util_Optional_2_classLit = createForClass('java.util', 'Optional', 196);
function $forEachRemaining_0(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function Spliterators$BaseSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(418, 1, {});
_.forEachRemaining = function forEachRemaining_10(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_0(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize(){
  return this.sizeEstimate;
}
;
_.characteristics = 0;
_.sizeEstimate = 0;
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 418);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  Spliterators$BaseSpliterator.call(this, size_0, characteristics);
}

defineClass(419, 418, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 419);
function $forEachRemaining_2(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
  }
}

function $tryAdvance(this$static, consumer){
  checkCriticalNotNull(consumer);
  if (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
    return true;
  }
  return false;
}

defineClass(1014, 1, {});
_.forEachRemaining = function forEachRemaining_13(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_1(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_0(){
  return this.limit - this.index_0;
}
;
_.characteristics = 0;
_.index_0 = 0;
_.limit = 0;
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 1014);
function $consume(this$static, consumer, index_0){
  consumer.accept_2(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(1015, 1014, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_14(consumer){
  $forEachRemaining_2(this, consumer);
}
;
_.tryAdvance = function tryAdvance_0(consumer){
  return $tryAdvance(this, consumer);
}
;
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 1015);
function $initIterator(this$static){
  if (!this$static.it) {
    this$static.it = this$static.collection.iterator();
    this$static.estimateSize = this$static.collection.size_1();
  }
}

function Spliterators$IteratorSpliterator(collection, characteristics){
  this.collection = (checkCriticalNotNull(collection) , collection);
  this.characteristics = (characteristics & 4096) == 0?characteristics | 64 | 16384:characteristics;
}

defineClass(67, 1, {}, Spliterators$IteratorSpliterator);
_.characteristics_0 = function characteristics_2(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_1(){
  $initIterator(this);
  return this.estimateSize;
}
;
_.forEachRemaining = function forEachRemaining_15(consumer){
  $initIterator(this);
  this.it.forEachRemaining(consumer);
}
;
_.tryAdvance = function tryAdvance_1(consumer){
  checkCriticalNotNull(consumer);
  $initIterator(this);
  if (this.it.hasNext_0()) {
    consumer.accept_2(this.it.next_1());
    return true;
  }
  return false;
}
;
_.characteristics = 0;
_.estimateSize = 0;
var Ljava_util_Spliterators$IteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IteratorSpliterator', 67);
function $add_4(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_2(this$static.builder, this$static.delimiter);
  $append_0(this$static.builder, newElement);
  return this$static;
}

function $toString_4(this$static){
  return !this$static.builder?this$static.emptyValue:this$static.suffix.length == 0?this$static.builder.string:this$static.builder.string + ('' + this$static.suffix);
}

function StringJoiner_0(delimiter, prefix, suffix){
  this.delimiter = (checkCriticalNotNull(delimiter) , delimiter);
  this.prefix = (checkCriticalNotNull(prefix) , prefix);
  this.suffix = (checkCriticalNotNull(suffix) , suffix);
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(194, 1, {194:1}, StringJoiner_0);
_.toString_0 = function toString_36(){
  return $toString_4(this);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 194);
function Function$lambda$0$Type(){
}

defineClass(789, 1, {}, Function$lambda$0$Type);
_.apply_0 = function apply_1(t){
  return t;
}
;
var Ljava_util_function_Function$lambda$0$Type_2_classLit = createForClass('java.util.function', 'Function/lambda$0$Type', 789);
function $clinit_Level(){
  $clinit_Level = emptyMethod;
  ALL = new Level$LevelAll;
  CONFIG = new Level$LevelConfig;
  FINE = new Level$LevelFine;
  FINER = new Level$LevelFiner;
  FINEST = new Level$LevelFinest;
  INFO = new Level$LevelInfo;
  OFF = new Level$LevelOff;
  SEVERE = new Level$LevelSevere;
  WARNING = new Level$LevelWarning;
}

function parse_0(name_0){
  $clinit_Level();
  var value_0;
  value_0 = $toUpperCase(name_0, ($clinit_Locale() , ROOT));
  switch (value_0) {
    case 'ALL':
      return ALL;
    case 'CONFIG':
      return CONFIG;
    case 'FINE':
      return FINE;
    case 'FINER':
      return FINER;
    case 'FINEST':
      return FINEST;
    case 'INFO':
      return INFO;
    case 'OFF':
      return OFF;
    case 'SEVERE':
      return SEVERE;
    case 'WARNING':
      return WARNING;
    default:throw toJs(new IllegalArgumentException_0('Invalid level "' + name_0 + '"'));
  }
}

defineClass($intern_38, 1, $intern_4);
_.getName = function getName_0(){
  return 'DUMMY';
}
;
_.intValue = function intValue(){
  return -1;
}
;
_.toString_0 = function toString_38(){
  return this.getName();
}
;
var ALL, CONFIG, FINE, FINER, FINEST, INFO, OFF, SEVERE, WARNING;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', $intern_38);
function Level$LevelAll(){
}

defineClass(800, $intern_38, $intern_4, Level$LevelAll);
_.getName = function getName_1(){
  return 'ALL';
}
;
_.intValue = function intValue_0(){
  return $intern_39;
}
;
var Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 800);
function Level$LevelConfig(){
}

defineClass(801, $intern_38, $intern_4, Level$LevelConfig);
_.getName = function getName_2(){
  return 'CONFIG';
}
;
_.intValue = function intValue_1(){
  return 700;
}
;
var Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 801);
function Level$LevelFine(){
}

defineClass(802, $intern_38, $intern_4, Level$LevelFine);
_.getName = function getName_3(){
  return 'FINE';
}
;
_.intValue = function intValue_2(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 802);
function Level$LevelFiner(){
}

defineClass(803, $intern_38, $intern_4, Level$LevelFiner);
_.getName = function getName_4(){
  return 'FINER';
}
;
_.intValue = function intValue_3(){
  return 400;
}
;
var Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 803);
function Level$LevelFinest(){
}

defineClass(804, $intern_38, $intern_4, Level$LevelFinest);
_.getName = function getName_5(){
  return 'FINEST';
}
;
_.intValue = function intValue_4(){
  return 300;
}
;
var Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 804);
function Level$LevelInfo(){
}

defineClass(805, $intern_38, $intern_4, Level$LevelInfo);
_.getName = function getName_6(){
  return 'INFO';
}
;
_.intValue = function intValue_5(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 805);
function Level$LevelOff(){
}

defineClass(806, $intern_38, $intern_4, Level$LevelOff);
_.getName = function getName_7(){
  return 'OFF';
}
;
_.intValue = function intValue_6(){
  return $intern_0;
}
;
var Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 806);
function Level$LevelSevere(){
}

defineClass(807, $intern_38, $intern_4, Level$LevelSevere);
_.getName = function getName_8(){
  return 'SEVERE';
}
;
_.intValue = function intValue_7(){
  return $intern_18;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 807);
function Level$LevelWarning(){
}

defineClass(808, $intern_38, $intern_4, Level$LevelWarning);
_.getName = function getName_9(){
  return 'WARNING';
}
;
_.intValue = function intValue_8(){
  return 900;
}
;
var Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 808);
function $addLoggerImpl(this$static, logger){
  $putStringValue(this$static.loggerMap, ($clinit_Logger() , LOGGING_OFF)?null:logger.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = castTo($getStringValue(this$static.loggerMap, name_0), 276);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = ($clinit_Logger() , LOGGING_OFF)?null:newLogger.name_0;
    parentName = $substring_0(name_1, 0, $wnd.Math.max(0, $lastIndexOf(name_1, fromCodePoint(46))));
    $setParent(newLogger, $ensureLogger(this$static, parentName));
    $putStringValue(this$static.loggerMap, LOGGING_OFF?null:newLogger.name_0, newLogger);
    return newLogger;
  }
  return logger;
}

function LogManager(){
  this.loggerMap = new HashMap;
}

function getLogManager(){
  var rootLogger;
  if (!singleton) {
    singleton = new LogManager;
    rootLogger = new Logger('');
    $setLevel_0(rootLogger, ($clinit_Level() , INFO));
    $addLoggerImpl(singleton, rootLogger);
  }
  return singleton;
}

defineClass(771, 1, {}, LogManager);
var singleton;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 771);
function $setLoggerName(this$static, newName){
  this$static.loggerName = newName;
}

function LogRecord(level, msg){
  this.level = level;
  this.msg = msg;
  this.millis_0 = ($clinit_System() , fromDouble_0(Date.now()));
}

defineClass(1024, 1, $intern_4, LogRecord);
_.loggerName = '';
_.millis_0 = 0;
_.thrown = null;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 1024);
function $clinit_Logger(){
  $clinit_Logger = emptyMethod;
  LOGGING_OFF = false;
  ALL_ENABLED = true;
  INFO_ENABLED = true;
  WARNING_ENABLED = true;
  SEVERE_ENABLED = true;
}

function $actuallyLog(this$static, level, msg, thrown){
  var record;
  record = new LogRecord(level, msg);
  record.thrown = thrown;
  $setLoggerName(record, LOGGING_OFF?null:this$static.name_0);
  $actuallyLog_0(this$static, record);
}

function $actuallyLog_0(this$static, record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  for (handler$array0 = $getHandlers(this$static) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
    handler = handler$array0[handler$index0];
    handler.publish(record);
  }
  logger = !LOGGING_OFF && this$static.useParentHandlers?LOGGING_OFF?null:this$static.parent_0:null;
  while (logger) {
    for (handler$array = $getHandlers(logger) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
      handler = handler$array[handler$index];
      handler.publish(record);
    }
    logger = !LOGGING_OFF && logger.useParentHandlers?LOGGING_OFF?null:logger.parent_0:null;
  }
}

function $addHandler_0(this$static, handler){
  if (LOGGING_OFF) {
    return;
  }
  $add_1(this$static.handlers, handler);
}

function $fine(this$static, msg){
  if (!ALL_ENABLED) {
    return;
  }
  $log_0(this$static, ($clinit_Level() , FINE), msg, null);
}

function $finest(this$static, msg){
  if (!ALL_ENABLED) {
    return;
  }
  $log_0(this$static, ($clinit_Level() , FINEST), msg, null);
}

function $getEffectiveLevel(this$static){
  var effectiveLevel, logger;
  if (this$static.level) {
    return this$static.level;
  }
  logger = LOGGING_OFF?null:this$static.parent_0;
  while (logger) {
    effectiveLevel = LOGGING_OFF?null:logger.level;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = LOGGING_OFF?null:logger.parent_0;
  }
  return $clinit_Level() , INFO;
}

function $getHandlers(this$static){
  if (LOGGING_OFF) {
    return initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_40, 212, 0, 0, 1);
  }
  return castTo($toArray(this$static.handlers, initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_40, 212, this$static.handlers.array.length, 0, 1)), 2654);
}

function $info(this$static){
  if (!INFO_ENABLED) {
    return;
  }
  $log_0(this$static, ($clinit_Level() , INFO), 'ui-demo Application frontend have been initialized.', null);
}

function $isLoggable(this$static, messageLevel){
  return ALL_ENABLED?messageLevel.intValue() >= $getEffectiveLevel(this$static).intValue():INFO_ENABLED?messageLevel.intValue() >= ($clinit_Level() , 800):WARNING_ENABLED?messageLevel.intValue() >= ($clinit_Level() , 900):SEVERE_ENABLED && messageLevel.intValue() >= ($clinit_Level() , $intern_18);
}

function $log_0(this$static, level, msg, thrown){
  (ALL_ENABLED?level.intValue() >= $getEffectiveLevel(this$static).intValue():INFO_ENABLED?level.intValue() >= ($clinit_Level() , 800):WARNING_ENABLED?level.intValue() >= ($clinit_Level() , 900):SEVERE_ENABLED && level.intValue() >= ($clinit_Level() , $intern_18)) && $actuallyLog(this$static, level, msg, thrown);
}

function $setLevel_0(this$static, newLevel){
  if (LOGGING_OFF) {
    return;
  }
  this$static.level = newLevel;
}

function $setParent(this$static, newParent){
  if (LOGGING_OFF) {
    return;
  }
  !!newParent && (this$static.parent_0 = newParent);
}

function $setUseParentHandlers(this$static){
  if (LOGGING_OFF) {
    return;
  }
  this$static.useParentHandlers = false;
}

function Logger(name_0){
  $clinit_Logger();
  if (LOGGING_OFF) {
    return;
  }
  this.name_0 = name_0;
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

function getLogger(name_0){
  $clinit_Logger();
  if (LOGGING_OFF) {
    return new Logger(null);
  }
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(276, 1, {276:1}, Logger);
_.useParentHandlers = false;
var ALL_ENABLED = false, INFO_ENABLED = false, LOGGING_OFF = false, SEVERE_ENABLED = false, WARNING_ENABLED = false;
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 276);
function of_0(supplier, accumulator, combiner, finisher, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(finisher);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl(supplier, accumulator, finisher);
}

function of_1(supplier, accumulator, combiner, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl(supplier, accumulator, new Function$lambda$0$Type);
}

function $clinit_Collector$Characteristics(){
  $clinit_Collector$Characteristics = emptyMethod;
  CONCURRENT = new Collector$Characteristics('CONCURRENT', 0);
  IDENTITY_FINISH = new Collector$Characteristics('IDENTITY_FINISH', 1);
  UNORDERED = new Collector$Characteristics('UNORDERED', 2);
}

function Collector$Characteristics(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function valueOf_9(name_0){
  $clinit_Collector$Characteristics();
  return valueOf(($clinit_Collector$Characteristics$Map() , $MAP_0), name_0);
}

function values_1(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_24, 68, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(68, 53, {10:1, 73:1, 53:1, 68:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 68, values_1, valueOf_9);
function $clinit_Collector$Characteristics$Map(){
  $clinit_Collector$Characteristics$Map = emptyMethod;
  $MAP_0 = createValueOfMap(($clinit_Collector$Characteristics() , stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_24, 68, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED])));
}

var $MAP_0;
function CollectorImpl(supplier, accumulator, finisher){
  this.supplier = supplier;
  this.accumulator = accumulator;
  $clinit_Collections();
  this.finisher = finisher;
}

defineClass(423, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 423);
function lambda$22(){
  throw toJs(new IllegalStateException_0("Can't assign multiple values to the same key"));
}

function lambda$23(keyMapper_0, valueMapper_1, map_3, item_4){
  var key, newValue;
  key = keyMapper_0.apply_0(item_4);
  newValue = valueMapper_1.apply_0(item_4);
  map_3.containsKey(key)?map_3.put(key, (map_3.get_0(key) , lambda$22())):map_3.put(key, newValue);
}

function toMap(keyMapper, valueMapper, mapSupplier){
  return of_1(mapSupplier, new Collectors$lambda$23$Type(keyMapper, valueMapper), new Collectors$lambda$24$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_24, 68, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]));
}

function Collectors$20methodref$add$Type(){
}

defineClass(90, 1, {}, Collectors$20methodref$add$Type);
_.accept_1 = function accept_2(arg0, arg1){
  castTo(arg0, 114).add_0(arg1);
}
;
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 90);
function Collectors$21methodref$ctor$Type(){
}

defineClass(93, 1, {}, Collectors$21methodref$ctor$Type);
_.get_2 = function get_13(){
  return new ArrayList;
}
;
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 93);
function Collectors$22methodref$ctor$Type(){
}

defineClass(415, 1, {}, Collectors$22methodref$ctor$Type);
_.get_2 = function get_14(){
  return new HashMap;
}
;
var Ljava_util_stream_Collectors$22methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/22methodref$ctor$Type', 415);
function Collectors$23methodref$ctor$Type(){
}

defineClass(1020, 1, {}, Collectors$23methodref$ctor$Type);
_.get_2 = function get_15(){
  return new HashSet;
}
;
var Ljava_util_stream_Collectors$23methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/23methodref$ctor$Type', 1020);
function Collectors$24methodref$add$Type(){
}

defineClass(1021, 1, {}, Collectors$24methodref$add$Type);
_.accept_1 = function accept_3(arg0, arg1){
  $add_2(castTo(arg0, 163), arg1);
}
;
var Ljava_util_stream_Collectors$24methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/24methodref$add$Type', 1021);
function Collectors$lambda$21$Type(){
}

defineClass(91, 1, {}, Collectors$lambda$21$Type);
var Ljava_util_stream_Collectors$lambda$21$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$21$Type', 91);
function Collectors$lambda$23$Type(keyMapper_0, valueMapper_1){
  this.keyMapper_0 = keyMapper_0;
  this.valueMapper_1 = valueMapper_1;
}

defineClass(1018, 1, {}, Collectors$lambda$23$Type);
_.accept_1 = function accept_5(arg0, arg1){
  lambda$23(this.keyMapper_0, this.valueMapper_1, arg0, arg1);
}
;
var Ljava_util_stream_Collectors$lambda$23$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$23$Type', 1018);
function Collectors$lambda$24$Type(){
}

defineClass(1019, 1, {}, Collectors$lambda$24$Type);
var Ljava_util_stream_Collectors$lambda$24$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$24$Type', 1019);
function Collectors$lambda$25$Type(){
}

defineClass(1022, 1, {}, Collectors$lambda$25$Type);
var Ljava_util_stream_Collectors$lambda$25$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$25$Type', 1022);
function Collectors$lambda$26$Type(){
}

defineClass(1023, 1, {}, Collectors$lambda$26$Type);
_.apply_0 = function apply_3(arg0){
  return castTo(arg0, 163);
}
;
var Ljava_util_stream_Collectors$lambda$26$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$26$Type', 1023);
function $terminate(this$static){
  if (!this$static.root_0) {
    $throwIfTerminated(this$static);
    this$static.terminated = true;
  }
   else {
    $terminate(this$static.root_0);
  }
}

function $throwIfTerminated(this$static){
  if (this$static.root_0) {
    $throwIfTerminated(this$static.root_0);
  }
   else if (this$static.terminated) {
    throw toJs(new IllegalStateException_0("Stream already terminated, can't be modified or used"));
  }
}

function TerminatableStream(previous){
  if (!previous) {
    this.root_0 = null;
    new ArrayList;
  }
   else {
    this.root_0 = previous;
  }
}

defineClass(358, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 358);
function $clinit_StreamImpl(){
  $clinit_StreamImpl = emptyMethod;
  NULL_CONSUMER = new StreamImpl$lambda$0$Type;
}

function $anyMatch(this$static, predicate){
  return ($throwIfTerminated(this$static) , $spliterator(new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator)))).tryAdvance(NULL_CONSUMER);
}

function $collect_0(this$static, collector){
  var lastArg;
  return collector.finisher.apply_0($reduce(this$static, collector.supplier.get_2(), (lastArg = new StreamImpl$lambda$4$Type(collector) , lastArg)));
}

function $filter(this$static, predicate){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator));
}

function $findFirst(this$static){
  var holder;
  $terminate(this$static);
  holder = new StreamImpl$ValueConsumer;
  if (this$static.spliterator.tryAdvance(holder)) {
    return $clinit_Optional() , new Optional(checkCriticalNotNull(holder.value_0));
  }
  return $clinit_Optional() , $clinit_Optional() , EMPTY;
}

function $forEach_3(this$static, action){
  $terminate(this$static);
  this$static.spliterator.forEachRemaining(action);
}

function $map(this$static, mapper){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$MapToObjSpliterator(mapper, this$static.spliterator));
}

function $reduce(this$static, identity, accumulator){
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer, accumulator));
  return consumer.value_0;
}

function $spliterator(this$static){
  $terminate(this$static);
  return this$static.spliterator;
}

function StreamImpl(prev, spliterator){
  $clinit_StreamImpl();
  TerminatableStream.call(this, prev);
  this.spliterator = spliterator;
}

function lambda$4(collector_0, a_1, t_2){
  $clinit_StreamImpl();
  collector_0.accumulator.accept_1(a_1, t_2);
  return a_1;
}

function lambda$5(consumer_0, accumulator_1, item_2){
  $clinit_StreamImpl();
  $accept_0(consumer_0, $apply(accumulator_1, consumer_0.value_0, item_2));
}

defineClass(69, 358, {}, StreamImpl);
var NULL_CONSUMER;
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 69);
function $lambda$0(this$static, action_1, item_1){
  if (this$static.filter_0.test_0(item_1)) {
    this$static.found = true;
    action_1.accept_2(item_1);
  }
}

function StreamImpl$FilterSpliterator(filter, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -16449);
  checkCriticalNotNull(filter);
  this.filter_0 = filter;
  this.original = original;
}

defineClass(421, 419, {}, StreamImpl$FilterSpliterator);
_.tryAdvance = function tryAdvance_3(action){
  this.found = false;
  while (!this.found && this.original.tryAdvance(new StreamImpl$FilterSpliterator$lambda$0$Type(this, action)))
  ;
  return this.found;
}
;
_.found = false;
var Ljava_util_stream_StreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator', 421);
function StreamImpl$FilterSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(1034, 1, {}, StreamImpl$FilterSpliterator$lambda$0$Type);
_.accept_2 = function accept_7(arg0){
  $lambda$0(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator/lambda$0$Type', 1034);
function $lambda$0_0(this$static, action_1, u_1){
  action_1.accept_2(this$static.map_0.apply_0(u_1));
}

function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.map_0 = map_0;
  this.original = original;
}

defineClass(1030, 419, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_5(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(this, action));
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 1030);
function StreamImpl$MapToObjSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(1032, 1, {}, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept_2 = function accept_9(arg0){
  $lambda$0_0(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 1032);
function $accept_0(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(422, 1, {}, StreamImpl$ValueConsumer);
_.accept_2 = function accept_10(value_0){
  $accept_0(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 422);
function StreamImpl$lambda$0$Type(){
}

defineClass(1035, 1, {}, StreamImpl$lambda$0$Type);
_.accept_2 = function accept_11(arg0){
  $clinit_StreamImpl();
}
;
var Ljava_util_stream_StreamImpl$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$0$Type', 1035);
function $apply(this$static, arg0, arg1){
  return lambda$4(this$static.collector_0, arg0, arg1);
}

function StreamImpl$lambda$4$Type(collector_0){
  this.collector_0 = collector_0;
}

defineClass(1037, 1, {}, StreamImpl$lambda$4$Type);
var Ljava_util_stream_StreamImpl$lambda$4$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$4$Type', 1037);
function StreamImpl$lambda$5$Type(consumer_0, accumulator_1){
  this.consumer_0 = consumer_0;
  this.accumulator_1 = accumulator_1;
}

defineClass(1038, 1, {}, StreamImpl$lambda$5$Type);
_.accept_2 = function accept_13(arg0){
  lambda$5(this.consumer_0, this.accumulator_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 1038);
function clone(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy_0(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = dest;
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = src_0.slice(batchStart, batchEnd);
    spliceArgs.splice(0, 0, destOfs, overwrite?len:0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy_0(values, 0, array, index_0, values.length, false);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

defineClass(2877, 1, {});
function stampJavaTypeInfo_1(array, referenceType){
  return stampJavaTypeInfo_0(array, referenceType);
}

defineClass(2697, 1, {});
var Ljavaemul_internal_ConsoleLogger_2_classLit = createForClass('javaemul.internal', 'ConsoleLogger', 2697);
function checkCriticalArgument_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArgument_1(expression, errorMessageArgs){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(format('Enum constant undefined: %s', errorMessageArgs)));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalState_0(expression){
  if (!expression) {
    throw toJs(new IllegalStateException_0("Can't overwrite cause"));
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function format(template, args){
  var builder, i, placeholderStart, templateStart;
  template = template;
  builder = new StringBuilder_0;
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_2(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_1(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_2(builder, template.substr(templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_1(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_1(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

defineClass(2874, 1, {});
function getHashCode_0(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt_0(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_1(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment_0();
  front[key] = hashCode;
  return hashCode;
}

function increment_0(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
defineClass(3297, 1, {});
function $clinit_AdvancedFormsClientModule(){
  $clinit_AdvancedFormsClientModule = emptyMethod;
  LOGGER = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_AdvancedFormsClientModule_2_classLit) , Lorg_dominokit_domino_advancedforms_client_AdvancedFormsClientModule_2_classLit.typeName));
}

var LOGGER;
var Lorg_dominokit_domino_advancedforms_client_AdvancedFormsClientModule_2_classLit = createForClass('org.dominokit.domino.advancedforms.client', 'AdvancedFormsClientModule', null);
function AdvancedFormsModuleConfiguration(){
}

defineClass(500, 1, {}, AdvancedFormsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders(registry){
}
;
_.registerListeners = function registerListeners(registry){
  $addListener(Lorg_dominokit_domino_forms_shared_extension_FormsEvent_2_classLit, new AdvancedFormsPresenterListenerForFormsEvent);
}
;
_.registerPresenters = function registerPresenters(registry){
  $registerPresenter(new AdvancedFormsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit) , Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit) , Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenterCommand_2_classLit) , Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit) , Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews(registry){
  $registerView(new AdvancedFormsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit) , Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_advancedforms_client_AdvancedFormsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.advancedforms.client', 'AdvancedFormsModuleConfiguration', 500);
function LazyPresenterLoader(name_0, concreteName){
  this.name_0 = name_0;
  this.concreteName = concreteName;
}

defineClass(40, 1, $intern_41);
_.equals_0 = function equals_27(other){
  if (this === other)
    return true;
  if (other == null || this.___clazz != getClass__Ljava_lang_Class___devirtual$(other))
    return false;
  return $equals_0(this.name_0, castTo(other, 40).name_0) && $equals_0(this.concreteName, castTo(other, 40).concreteName);
}
;
_.hashCode_1 = function hashCode_28(){
  return getHashCode_1(this.name_0);
}
;
var Lorg_dominokit_domino_api_client_mvp_presenter_LazyPresenterLoader_2_classLit = createForClass('org.dominokit.domino.api.client.mvp.presenter', 'LazyPresenterLoader', 40);
function AdvancedFormsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(619, 40, $intern_41, AdvancedFormsModuleConfiguration$1);
var Lorg_dominokit_domino_advancedforms_client_AdvancedFormsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.advancedforms.client', 'AdvancedFormsModuleConfiguration/1', 619);
function LazyViewLoader(presenterName){
  this.presenterName = presenterName;
}

defineClass(41, 1, $intern_42);
var Lorg_dominokit_domino_api_client_mvp_view_LazyViewLoader_2_classLit = createForClass('org.dominokit.domino.api.client.mvp.view', 'LazyViewLoader', 41);
function AdvancedFormsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(620, 41, $intern_42, AdvancedFormsModuleConfiguration$2);
var Lorg_dominokit_domino_advancedforms_client_AdvancedFormsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.advancedforms.client', 'AdvancedFormsModuleConfiguration/2', 620);
function AdvancedFormsPresenterListenerForFormsEvent(){
}

defineClass(931, 1, {}, AdvancedFormsPresenterListenerForFormsEvent);
var Lorg_dominokit_domino_advancedforms_client_listeners_AdvancedFormsPresenterListenerForFormsEvent_2_classLit = createForClass('org.dominokit.domino.advancedforms.client.listeners', 'AdvancedFormsPresenterListenerForFormsEvent', 931);
var Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit = createForClass('org.dominokit.domino.advancedforms.client.presenters', 'AdvancedFormsPresenter', 617);
var Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.advancedforms.client.presenters', 'AdvancedFormsPresenterCommand', 618);
function $clinit_AlertsClientModule(){
  $clinit_AlertsClientModule = emptyMethod;
  LOGGER_1 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_AlertsClientModule_2_classLit) , Lorg_dominokit_domino_alerts_client_AlertsClientModule_2_classLit.typeName));
}

var LOGGER_1;
var Lorg_dominokit_domino_alerts_client_AlertsClientModule_2_classLit = createForClass('org.dominokit.domino.alerts.client', 'AlertsClientModule', null);
function AlertsModuleConfiguration(){
}

defineClass(511, 1, {}, AlertsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_0(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_0(registry){
}
;
_.registerListeners = function registerListeners_0(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new AlertsPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_0(registry){
  $registerPresenter(new AlertsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit) , Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit) , Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_0(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenterCommand_2_classLit) , Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit) , Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_0(registry){
  $registerView(new AlertsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit) , Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_alerts_client_AlertsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.alerts.client', 'AlertsModuleConfiguration', 511);
function AlertsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(663, 40, $intern_41, AlertsModuleConfiguration$1);
var Lorg_dominokit_domino_alerts_client_AlertsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.alerts.client', 'AlertsModuleConfiguration/1', 663);
function AlertsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(664, 41, $intern_42, AlertsModuleConfiguration$2);
var Lorg_dominokit_domino_alerts_client_AlertsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.alerts.client', 'AlertsModuleConfiguration/2', 664);
function AlertsPresenterListenerForComponentsEvent(){
}

defineClass(953, 1, {}, AlertsPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_alerts_client_listeners_AlertsPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.alerts.client.listeners', 'AlertsPresenterListenerForComponentsEvent', 953);
var Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit = createForClass('org.dominokit.domino.alerts.client.presenters', 'AlertsPresenter', 661);
var Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.alerts.client.presenters', 'AlertsPresenterCommand', 662);
function $clinit_AnimationClientModule(){
  $clinit_AnimationClientModule = emptyMethod;
  LOGGER_2 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_AnimationClientModule_2_classLit) , Lorg_dominokit_domino_animation_client_AnimationClientModule_2_classLit.typeName));
}

var LOGGER_2;
var Lorg_dominokit_domino_animation_client_AnimationClientModule_2_classLit = createForClass('org.dominokit.domino.animation.client', 'AnimationClientModule', null);
function AnimationModuleConfiguration(){
}

defineClass(507, 1, {}, AnimationModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_1(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_1(registry){
}
;
_.registerListeners = function registerListeners_1(registry){
  $addListener(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseEvent_2_classLit, new AnimationPresenterListenerForComponentCaseEvent);
}
;
_.registerPresenters = function registerPresenters_1(registry){
  $registerPresenter(new AnimationModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit) , Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit) , Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_1(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_presenters_AnimationPresenterCommand_2_classLit) , Lorg_dominokit_domino_animation_client_presenters_AnimationPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit) , Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_1(registry){
  $registerView(new AnimationModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit) , Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_animation_client_AnimationModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.animation.client', 'AnimationModuleConfiguration', 507);
function AnimationModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(647, 40, $intern_41, AnimationModuleConfiguration$1);
var Lorg_dominokit_domino_animation_client_AnimationModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.animation.client', 'AnimationModuleConfiguration/1', 647);
function AnimationModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(648, 41, $intern_42, AnimationModuleConfiguration$2);
var Lorg_dominokit_domino_animation_client_AnimationModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.animation.client', 'AnimationModuleConfiguration/2', 648);
function AnimationPresenterListenerForComponentCaseEvent(){
}

defineClass(945, 1, {}, AnimationPresenterListenerForComponentCaseEvent);
var Lorg_dominokit_domino_animation_client_listeners_AnimationPresenterListenerForComponentCaseEvent_2_classLit = createForClass('org.dominokit.domino.animation.client.listeners', 'AnimationPresenterListenerForComponentCaseEvent', 945);
var Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit = createForClass('org.dominokit.domino.animation.client.presenters', 'AnimationPresenter', 645);
var Lorg_dominokit_domino_animation_client_presenters_AnimationPresenterCommand_2_classLit = createForClass('org.dominokit.domino.animation.client.presenters', 'AnimationPresenterCommand', 646);
function $clinit_ClientApp(){
  $clinit_ClientApp = emptyMethod;
  CLIENT_ROUTER_HOLDER = new ClientApp$AttributeHolder;
  SERVER_ROUTER_HOLDER = new ClientApp$AttributeHolder;
  EVENTS_BUS_HOLDER = new ClientApp$AttributeHolder;
  COMMANDS_REPOSITORY_HOLDER = new ClientApp$AttributeHolder;
  PRESENTERS_REPOSITORY_HOLDER = new ClientApp$AttributeHolder;
  VIEWS_REPOSITORY_HOLDER = new ClientApp$AttributeHolder;
  LISTENERS_REPOSITORY_HOLDER = new ClientApp$AttributeHolder;
  REQUEST_REST_SENDERS_REPOSITORY_HOLDER = new ClientApp$AttributeHolder;
  MAIN_EXTENSION_POINT_HOLDER = new ClientApp$AttributeHolder;
  HISTORY_HOLDER = new ClientApp$AttributeHolder;
  INITIAL_TASKS_HOLDER = new ClientApp$AttributeHolder;
  ASYNC_RUNNER_HOLDER = new ClientApp$AttributeHolder;
  DOMINO_OPTIONS_HOLDER = new ClientApp$AttributeHolder;
  instance_3 = new ClientApp;
}

function $addListener(event_0, dominoEventListener){
  $addListener_0(castTo(LISTENERS_REPOSITORY_HOLDER.attribute, 2657), event_0, dominoEventListener);
}

function $configureModule(this$static, configuration){
  configuration.registerPresenters(this$static);
  configuration.registerRequests(this$static);
  configuration.registerViews(this$static);
  configuration.registerListeners(this$static);
  configuration.registerInitialTasks(this$static);
  configuration.registerRequestRestSenders(this$static);
}

function $fireEvent_1(extensionPointInterface, dominoEvent){
  $getEventListeners(castTo(LISTENERS_REPOSITORY_HOLDER.attribute, 2657), extensionPointInterface).forEach_0(new ClientApp$lambda$1$Type(dominoEvent));
}

function $lambda$1_0(dominoEvent_1, c_1){
  runAsync(1, new GwtAsyncRunner$1((castTo(ASYNC_RUNNER_HOLDER.attribute, 384) , new ClientApp$lambda$2$Type(c_1, dominoEvent_1))));
}

function $registerCommand(commandName, presenterName){
  $registerCommand_0(castTo(COMMANDS_REPOSITORY_HOLDER.attribute, 2655), new RequestHolder(commandName, presenterName));
}

function $registerPresenter(lazyPresenterLoader){
  $registerPresenter_0(castTo(PRESENTERS_REPOSITORY_HOLDER.attribute, 477), lazyPresenterLoader);
}

function $registerView(lazyViewLoader){
  $registerView_0(castTo(VIEWS_REPOSITORY_HOLDER.attribute, 2656), lazyViewLoader);
}

function ClientApp(){
}

defineClass(765, 1, {}, ClientApp);
var ASYNC_RUNNER_HOLDER, CLIENT_ROUTER_HOLDER, COMMANDS_REPOSITORY_HOLDER, DOMINO_OPTIONS_HOLDER, EVENTS_BUS_HOLDER, HISTORY_HOLDER, INITIAL_TASKS_HOLDER, LISTENERS_REPOSITORY_HOLDER, MAIN_EXTENSION_POINT_HOLDER, PRESENTERS_REPOSITORY_HOLDER, REQUEST_REST_SENDERS_REPOSITORY_HOLDER, SERVER_ROUTER_HOLDER, VIEWS_REPOSITORY_HOLDER, instance_3;
var Lorg_dominokit_domino_api_client_ClientApp_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp', 765);
function ClientApp$0methodref$execute$Type(){
}

defineClass(767, 1, {}, ClientApp$0methodref$execute$Type);
_.accept_2 = function accept_14(arg0){
  throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lorg_dominokit_domino_api_client_ClientApp$0methodref$execute$Type_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp/0methodref$execute$Type', 767);
function $hold(this$static, attribute){
  this$static.attribute = attribute;
}

function ClientApp$AttributeHolder(){
}

defineClass(145, 1, {}, ClientApp$AttributeHolder);
var Lorg_dominokit_domino_api_client_ClientApp$AttributeHolder_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp/AttributeHolder', 145);
function $asyncRunner(this$static, asyncRunner){
  this$static.asyncRunner = asyncRunner;
  return this$static;
}

function $dominoOptions(this$static, dominoOptions){
  this$static.dominoOptions = dominoOptions;
  return this$static;
}

function $eventsBus(this$static, eventsBus){
  this$static.eventsBus = eventsBus;
  return this$static;
}

function $eventsListenersRepository(this$static, dominoEventsListenersRepository){
  this$static.dominoEventsListenersRepository = dominoEventsListenersRepository;
  return this$static;
}

function $history(this$static, history_0){
  this$static.history_0 = history_0;
  return this$static;
}

function $initClientApp(this$static){
  $hold(($clinit_ClientApp() , CLIENT_ROUTER_HOLDER), this$static.clientRouter);
  $hold(SERVER_ROUTER_HOLDER, this$static.serverRouter);
  $hold(EVENTS_BUS_HOLDER, this$static.eventsBus);
  $hold(COMMANDS_REPOSITORY_HOLDER, this$static.requestRepository);
  $hold(PRESENTERS_REPOSITORY_HOLDER, this$static.presentersRepository);
  $hold(VIEWS_REPOSITORY_HOLDER, this$static.viewsRepository);
  $hold(LISTENERS_REPOSITORY_HOLDER, this$static.dominoEventsListenersRepository);
  $hold(REQUEST_REST_SENDERS_REPOSITORY_HOLDER, this$static.requestRestSendersRepository);
  $hold(MAIN_EXTENSION_POINT_HOLDER, this$static.mainDominoEvent);
  $hold(HISTORY_HOLDER, this$static.history_0);
  $hold(INITIAL_TASKS_HOLDER, new LinkedList);
  $hold(ASYNC_RUNNER_HOLDER, this$static.asyncRunner);
  $hold(DOMINO_OPTIONS_HOLDER, this$static.dominoOptions);
}

function $mainExtensionPoint(this$static, mainDominoEvent){
  this$static.mainDominoEvent = mainDominoEvent;
  return this$static;
}

function $presentersRepository(this$static, presentersRepository){
  this$static.presentersRepository = presentersRepository;
  return this$static;
}

function $requestRepository(this$static, requestRepository){
  this$static.requestRepository = requestRepository;
  return this$static;
}

function $requestSendersRepository(this$static, requestRestSendersRepository){
  this$static.requestRestSendersRepository = requestRestSendersRepository;
  return this$static;
}

function $serverRouter(this$static, serverRouter){
  this$static.serverRouter = serverRouter;
  return this$static;
}

function $viewsRepository(this$static, viewsRepository){
  this$static.viewsRepository = viewsRepository;
  return this$static;
}

function ClientApp$ClientAppBuilder(clientRouter){
  this.clientRouter = clientRouter;
}

defineClass(766, 1, {}, ClientApp$ClientAppBuilder);
var Lorg_dominokit_domino_api_client_ClientApp$ClientAppBuilder_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp/ClientAppBuilder', 766);
function ClientApp$lambda$1$Type(dominoEvent_1){
  this.dominoEvent_1 = dominoEvent_1;
}

defineClass(769, 1, {}, ClientApp$lambda$1$Type);
_.accept_2 = function accept_15(arg0){
  $lambda$1_0(this.dominoEvent_1, arg0);
}
;
var Lorg_dominokit_domino_api_client_ClientApp$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp/lambda$1$Type', 769);
function ClientApp$lambda$2$Type(c_0, dominoEvent_1){
  this.c_0 = c_0;
  this.dominoEvent_1 = dominoEvent_1;
}

defineClass(768, 1, {}, ClientApp$lambda$2$Type);
_.onFailed = function onFailed(error){
  $error_0(($clinit_AsyncRunner() , LOGGER_3), 'Failed to run async task : ', error);
}
;
var Lorg_dominokit_domino_api_client_ClientApp$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp/lambda$2$Type', 768);
function DynamicServiceRoot(){
}

defineClass(359, 1, {359:1}, DynamicServiceRoot);
var Lorg_dominokit_domino_api_client_DynamicServiceRoot_2_classLit = createForClass('org.dominokit.domino.api.client', 'DynamicServiceRoot', 359);
function $configureModule_0(moduleConfiguration){
  $configureModule(($clinit_ClientApp() , $clinit_ClientApp() , instance_3), moduleConfiguration);
}

function $clinit_ServiceRootMatcher(){
  $clinit_ServiceRootMatcher = emptyMethod;
  defaultRoot = new DynamicServiceRoot;
}

var defaultRoot;
function ServiceRootMatcher$lambda$2$Type(){
}

defineClass(1040, 1, {}, ServiceRootMatcher$lambda$2$Type);
_.test_0 = function test_1(arg0){
  return $clinit_ServiceRootMatcher() , $clinit_ServiceRootMatcher() , true;
}
;
var Lorg_dominokit_domino_api_client_ServiceRootMatcher$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.api.client', 'ServiceRootMatcher/lambda$2$Type', 1040);
function ServiceRootMatcher$lambda$3$Type(){
}

defineClass(1041, 1, {}, ServiceRootMatcher$lambda$3$Type);
_.test_0 = function test_2(arg0){
  return $clinit_ServiceRootMatcher() , $clinit_ServiceRootMatcher() , true;
}
;
var Lorg_dominokit_domino_api_client_ServiceRootMatcher$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.api.client', 'ServiceRootMatcher/lambda$3$Type', 1041);
function $clinit_AsyncRunner(){
  $clinit_AsyncRunner = emptyMethod;
  LOGGER_3 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_api_client_async_AsyncRunner_2_classLit) , Lorg_dominokit_domino_api_client_async_AsyncRunner_2_classLit.typeName));
}

var LOGGER_3;
var Lorg_dominokit_domino_api_client_async_AsyncRunner_2_classLit = createForInterface('org.dominokit.domino.api.client.async', 'AsyncRunner');
function PresentersRepository$PresenterCannotBeRegisteredMoreThanOnce(message){
  RuntimeException_0.call(this, message);
}

defineClass(783, 49, $intern_3, PresentersRepository$PresenterCannotBeRegisteredMoreThanOnce);
var Lorg_dominokit_domino_api_client_mvp_presenter_PresentersRepository$PresenterCannotBeRegisteredMoreThanOnce_2_classLit = createForClass('org.dominokit.domino.api.client.mvp.presenter', 'PresentersRepository/PresenterCannotBeRegisteredMoreThanOnce', 783);
function ViewsRepository$ViewCannotBeRegisteredMoreThanOnce(message){
  RuntimeException_0.call(this, message);
}

defineClass(785, 49, $intern_3, ViewsRepository$ViewCannotBeRegisteredMoreThanOnce);
var Lorg_dominokit_domino_api_client_mvp_view_ViewsRepository$ViewCannotBeRegisteredMoreThanOnce_2_classLit = createForClass('org.dominokit.domino.api.client.mvp.view', 'ViewsRepository/ViewCannotBeRegisteredMoreThanOnce', 785);
function CommandsRepository$CommandCannotBeRegisteredMoreThanOnce(message){
  RuntimeException_0.call(this, message);
}

defineClass(780, 49, $intern_3, CommandsRepository$CommandCannotBeRegisteredMoreThanOnce);
var Lorg_dominokit_domino_api_client_request_CommandsRepository$CommandCannotBeRegisteredMoreThanOnce_2_classLit = createForClass('org.dominokit.domino.api.client.request', 'CommandsRepository/CommandCannotBeRegisteredMoreThanOnce', 780);
function RequestHolder(requestName, presenterName){
  this.requestName = requestName;
  this.presenterName = presenterName;
}

defineClass(279, 1, {279:1}, RequestHolder);
_.equals_0 = function equals_28(other){
  if (this === other)
    return true;
  if (other == null || Lorg_dominokit_domino_api_client_request_RequestHolder_2_classLit != getClass__Ljava_lang_Class___devirtual$(other))
    return false;
  if (!$equals_0(this.requestName, castTo(other, 279).requestName))
    return false;
  return $equals_0(this.presenterName, castTo(other, 279).presenterName);
}
;
_.hashCode_1 = function hashCode_29(){
  var result;
  result = getHashCode_1(this.requestName);
  result = 31 * result + getHashCode_1(this.presenterName);
  return result;
}
;
var Lorg_dominokit_domino_api_client_request_RequestHolder_2_classLit = createForClass('org.dominokit.domino.api.client.request', 'RequestHolder', 279);
var Lorg_dominokit_domino_api_shared_extension_MainDominoEvent_2_classLit = createForInterface('org.dominokit.domino.api.shared.extension', 'MainDominoEvent');
function HistoryToken$TokenCannotBeNullException(){
  RuntimeException.call(this);
}

defineClass(1057, 49, $intern_3, HistoryToken$TokenCannotBeNullException);
var Lorg_dominokit_domino_api_shared_history_HistoryToken$TokenCannotBeNullException_2_classLit = createForClass('org.dominokit.domino.api.shared.history', 'HistoryToken/TokenCannotBeNullException', 1057);
function SerializableLogRecord(){
}

defineClass(1042, 1, $intern_4, SerializableLogRecord);
_.millis_0 = 0;
var Lorg_dominokit_domino_api_shared_logging_SerializableLogRecord_2_classLit = createForClass('org.dominokit.domino.api.shared.logging', 'SerializableLogRecord', 1042);
function isNotNullValuePut(object, value_0, jsonName){
  var previous;
  !!object && (previous = $get_1(value_0, jsonName) , $put0(value_0, jsonName, object) , previous);
}

function toJSON(value_0){
  var i, rc, t, t$index, t$max;
  if (value_0 == null) {
    return $clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_2;
  }
  rc = new JSONArray;
  i = 0;
  for (t$index = 0 , t$max = value_0.length; t$index < t$max; ++t$index) {
    t = value_0[t$index];
    $set(rc, i++, $encode(t));
  }
  return rc;
}

function SerializableStackTraceElement(){
}

defineClass(353, 1, {10:1, 353:1}, SerializableStackTraceElement);
_.lineNumber = 0;
var Lorg_dominokit_domino_api_shared_logging_SerializableStackTraceElement_2_classLit = createForClass('org.dominokit.domino.api.shared.logging', 'SerializableStackTraceElement', 353);
function $encode(value_0){
  var rc;
  if (!value_0) {
    return $clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_2;
  }
  rc = new JSONObject;
  isNotNullValuePut($encode_3(value_0.className_0), rc, 'className');
  isNotNullValuePut($encode_3(value_0.fileName), rc, 'fileName');
  isNotNullValuePut($encode_3(value_0.methodName), rc, 'methodName');
  isNotNullValuePut($encode_1(valueOf_1(value_0.lineNumber)), rc, 'lineNumber');
  return rc;
}

function SerializableThrowable(){
}

defineClass(1045, 1, $intern_4, SerializableThrowable);
var Lorg_dominokit_domino_api_shared_logging_SerializableThrowable_2_classLit = createForClass('org.dominokit.domino.api.shared.logging', 'SerializableThrowable', 1045);
function $encode_0(value_0){
  var lastArg, rc;
  if (!value_0) {
    return $clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_2;
  }
  rc = new JSONObject;
  isNotNullValuePut($encode_3(value_0.type_0), rc, 'type');
  isNotNullValuePut($encode_3(value_0.message_0), rc, 'message');
  isNotNullValuePut($encode_0(value_0.cause), rc, 'cause');
  isNotNullValuePut(toJSON((lastArg = value_0.stackTrace , lastArg)), rc, 'stackTrace');
  return rc;
}

function $clinit_AppLayoutClientModule(){
  $clinit_AppLayoutClientModule = emptyMethod;
  LOGGER_4 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_applayout_client_AppLayoutClientModule_2_classLit) , Lorg_dominokit_domino_applayout_client_AppLayoutClientModule_2_classLit.typeName));
}

var LOGGER_4;
var Lorg_dominokit_domino_applayout_client_AppLayoutClientModule_2_classLit = createForClass('org.dominokit.domino.applayout.client', 'AppLayoutClientModule', null);
function AppLayoutModuleConfiguration(){
}

defineClass(492, 1, {}, AppLayoutModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_2(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_2(registry){
}
;
_.registerListeners = function registerListeners_2(registry){
  $addListener(Lorg_dominokit_domino_layouts_shared_extension_LayoutsEvent_2_classLit, new AppLayoutPresenterListenerForLayoutsEvent);
}
;
_.registerPresenters = function registerPresenters_2(registry){
  $registerPresenter(new AppLayoutModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenter_2_classLit) , Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenter_2_classLit) , Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_2(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenterCommand_2_classLit) , Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenter_2_classLit) , Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_2(registry){
  $registerView(new AppLayoutModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenter_2_classLit) , Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_applayout_client_AppLayoutModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.applayout.client', 'AppLayoutModuleConfiguration', 492);
function AppLayoutModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(592, 40, $intern_41, AppLayoutModuleConfiguration$1);
var Lorg_dominokit_domino_applayout_client_AppLayoutModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.applayout.client', 'AppLayoutModuleConfiguration/1', 592);
function AppLayoutModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(593, 41, $intern_42, AppLayoutModuleConfiguration$2);
var Lorg_dominokit_domino_applayout_client_AppLayoutModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.applayout.client', 'AppLayoutModuleConfiguration/2', 593);
function AppLayoutPresenterListenerForLayoutsEvent(){
}

defineClass(917, 1, {}, AppLayoutPresenterListenerForLayoutsEvent);
var Lorg_dominokit_domino_applayout_client_listeners_AppLayoutPresenterListenerForLayoutsEvent_2_classLit = createForClass('org.dominokit.domino.applayout.client.listeners', 'AppLayoutPresenterListenerForLayoutsEvent', 917);
var Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenter_2_classLit = createForClass('org.dominokit.domino.applayout.client.presenters', 'AppLayoutPresenter', 590);
var Lorg_dominokit_domino_applayout_client_presenters_AppLayoutPresenterCommand_2_classLit = createForClass('org.dominokit.domino.applayout.client.presenters', 'AppLayoutPresenterCommand', 591);
function $clinit_BadgesClientModule(){
  $clinit_BadgesClientModule = emptyMethod;
  LOGGER_5 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_BadgesClientModule_2_classLit) , Lorg_dominokit_domino_badges_client_BadgesClientModule_2_classLit.typeName));
}

var LOGGER_5;
var Lorg_dominokit_domino_badges_client_BadgesClientModule_2_classLit = createForClass('org.dominokit.domino.badges.client', 'BadgesClientModule', null);
function BadgesModuleConfiguration(){
}

defineClass(512, 1, {}, BadgesModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_3(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_3(registry){
}
;
_.registerListeners = function registerListeners_3(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new BadgesPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_3(registry){
  $registerPresenter(new BadgesModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit) , Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit) , Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_3(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_presenters_BadgesPresenterCommand_2_classLit) , Lorg_dominokit_domino_badges_client_presenters_BadgesPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit) , Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_3(registry){
  $registerView(new BadgesModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit) , Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_badges_client_BadgesModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.badges.client', 'BadgesModuleConfiguration', 512);
function BadgesModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(667, 40, $intern_41, BadgesModuleConfiguration$1);
var Lorg_dominokit_domino_badges_client_BadgesModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.badges.client', 'BadgesModuleConfiguration/1', 667);
function BadgesModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(668, 41, $intern_42, BadgesModuleConfiguration$2);
var Lorg_dominokit_domino_badges_client_BadgesModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.badges.client', 'BadgesModuleConfiguration/2', 668);
function BadgesPresenterListenerForComponentsEvent(){
}

defineClass(955, 1, {}, BadgesPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_badges_client_listeners_BadgesPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.badges.client.listeners', 'BadgesPresenterListenerForComponentsEvent', 955);
var Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit = createForClass('org.dominokit.domino.badges.client.presenters', 'BadgesPresenter', 665);
var Lorg_dominokit_domino_badges_client_presenters_BadgesPresenterCommand_2_classLit = createForClass('org.dominokit.domino.badges.client.presenters', 'BadgesPresenterCommand', 666);
function $clinit_BasicFormsClientModule(){
  $clinit_BasicFormsClientModule = emptyMethod;
  LOGGER_6 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_BasicFormsClientModule_2_classLit) , Lorg_dominokit_domino_basicforms_client_BasicFormsClientModule_2_classLit.typeName));
}

var LOGGER_6;
var Lorg_dominokit_domino_basicforms_client_BasicFormsClientModule_2_classLit = createForClass('org.dominokit.domino.basicforms.client', 'BasicFormsClientModule', null);
function BasicFormsModuleConfiguration(){
}

defineClass(499, 1, {}, BasicFormsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_4(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_4(registry){
}
;
_.registerListeners = function registerListeners_4(registry){
  $addListener(Lorg_dominokit_domino_forms_shared_extension_FormsEvent_2_classLit, new BasicFormsPresenterListenerForFormsEvent);
}
;
_.registerPresenters = function registerPresenters_4(registry){
  $registerPresenter(new BasicFormsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit) , Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit) , Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_4(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenterCommand_2_classLit) , Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit) , Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_4(registry){
  $registerView(new BasicFormsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit) , Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_basicforms_client_BasicFormsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.basicforms.client', 'BasicFormsModuleConfiguration', 499);
function BasicFormsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(615, 40, $intern_41, BasicFormsModuleConfiguration$1);
var Lorg_dominokit_domino_basicforms_client_BasicFormsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.basicforms.client', 'BasicFormsModuleConfiguration/1', 615);
function BasicFormsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(616, 41, $intern_42, BasicFormsModuleConfiguration$2);
var Lorg_dominokit_domino_basicforms_client_BasicFormsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.basicforms.client', 'BasicFormsModuleConfiguration/2', 616);
function BasicFormsPresenterListenerForFormsEvent(){
}

defineClass(929, 1, {}, BasicFormsPresenterListenerForFormsEvent);
var Lorg_dominokit_domino_basicforms_client_listeners_BasicFormsPresenterListenerForFormsEvent_2_classLit = createForClass('org.dominokit.domino.basicforms.client.listeners', 'BasicFormsPresenterListenerForFormsEvent', 929);
var Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit = createForClass('org.dominokit.domino.basicforms.client.presenters', 'BasicFormsPresenter', 613);
var Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.basicforms.client.presenters', 'BasicFormsPresenterCommand', 614);
function $clinit_BreadcrumbClientModule(){
  $clinit_BreadcrumbClientModule = emptyMethod;
  LOGGER_7 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_BreadcrumbClientModule_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_BreadcrumbClientModule_2_classLit.typeName));
}

var LOGGER_7;
var Lorg_dominokit_domino_breadcrumb_client_BreadcrumbClientModule_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client', 'BreadcrumbClientModule', null);
function BreadcrumbModuleConfiguration(){
}

defineClass(518, 1, {}, BreadcrumbModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_5(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_5(registry){
}
;
_.registerListeners = function registerListeners_5(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new BreadcrumbPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_5(registry){
  $registerPresenter(new BreadcrumbModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_5(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenterCommand_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_5(registry){
  $registerView(new BreadcrumbModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_breadcrumb_client_BreadcrumbModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client', 'BreadcrumbModuleConfiguration', 518);
function BreadcrumbModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(691, 40, $intern_41, BreadcrumbModuleConfiguration$1);
var Lorg_dominokit_domino_breadcrumb_client_BreadcrumbModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client', 'BreadcrumbModuleConfiguration/1', 691);
function BreadcrumbModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(692, 41, $intern_42, BreadcrumbModuleConfiguration$2);
var Lorg_dominokit_domino_breadcrumb_client_BreadcrumbModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client', 'BreadcrumbModuleConfiguration/2', 692);
function BreadcrumbPresenterListenerForComponentsEvent(){
}

defineClass(967, 1, {}, BreadcrumbPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_breadcrumb_client_listeners_BreadcrumbPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client.listeners', 'BreadcrumbPresenterListenerForComponentsEvent', 967);
var Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client.presenters', 'BreadcrumbPresenter', 689);
var Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenterCommand_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client.presenters', 'BreadcrumbPresenterCommand', 690);
function $clinit_ButtonsClientModule(){
  $clinit_ButtonsClientModule = emptyMethod;
  LOGGER_8 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_ButtonsClientModule_2_classLit) , Lorg_dominokit_domino_buttons_client_ButtonsClientModule_2_classLit.typeName));
}

var LOGGER_8;
var Lorg_dominokit_domino_buttons_client_ButtonsClientModule_2_classLit = createForClass('org.dominokit.domino.buttons.client', 'ButtonsClientModule', null);
function ButtonsModuleConfiguration(){
}

defineClass(510, 1, {}, ButtonsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_6(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_6(registry){
}
;
_.registerListeners = function registerListeners_6(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new ButtonsPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_6(registry){
  $registerPresenter(new ButtonsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit) , Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit) , Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_6(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenterCommand_2_classLit) , Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit) , Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_6(registry){
  $registerView(new ButtonsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit) , Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_buttons_client_ButtonsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.buttons.client', 'ButtonsModuleConfiguration', 510);
function ButtonsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(659, 40, $intern_41, ButtonsModuleConfiguration$1);
var Lorg_dominokit_domino_buttons_client_ButtonsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.buttons.client', 'ButtonsModuleConfiguration/1', 659);
function ButtonsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(660, 41, $intern_42, ButtonsModuleConfiguration$2);
var Lorg_dominokit_domino_buttons_client_ButtonsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.buttons.client', 'ButtonsModuleConfiguration/2', 660);
function ButtonsPresenterListenerForComponentsEvent(){
}

defineClass(951, 1, {}, ButtonsPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_buttons_client_listeners_ButtonsPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.buttons.client.listeners', 'ButtonsPresenterListenerForComponentsEvent', 951);
var Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit = createForClass('org.dominokit.domino.buttons.client.presenters', 'ButtonsPresenter', 657);
var Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.buttons.client.presenters', 'ButtonsPresenterCommand', 658);
function $clinit_CardsClientModule(){
  $clinit_CardsClientModule = emptyMethod;
  LOGGER_10 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_CardsClientModule_2_classLit) , Lorg_dominokit_domino_cards_client_CardsClientModule_2_classLit.typeName));
}

var LOGGER_10;
var Lorg_dominokit_domino_cards_client_CardsClientModule_2_classLit = createForClass('org.dominokit.domino.cards.client', 'CardsClientModule', null);
function CardsModuleConfiguration(){
}

defineClass(508, 1, {}, CardsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_7(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_7(registry){
}
;
_.registerListeners = function registerListeners_7(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new CardsPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_7(registry){
  $registerPresenter(new CardsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit) , Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit) , Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_7(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_presenters_CardsPresenterCommand_2_classLit) , Lorg_dominokit_domino_cards_client_presenters_CardsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit) , Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_7(registry){
  $registerView(new CardsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit) , Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_cards_client_CardsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.cards.client', 'CardsModuleConfiguration', 508);
function CardsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(651, 40, $intern_41, CardsModuleConfiguration$1);
var Lorg_dominokit_domino_cards_client_CardsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.cards.client', 'CardsModuleConfiguration/1', 651);
function CardsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(652, 41, $intern_42, CardsModuleConfiguration$2);
var Lorg_dominokit_domino_cards_client_CardsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.cards.client', 'CardsModuleConfiguration/2', 652);
function CardsPresenterListenerForComponentsEvent(){
}

defineClass(947, 1, {}, CardsPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_cards_client_listeners_CardsPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.cards.client.listeners', 'CardsPresenterListenerForComponentsEvent', 947);
var Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit = createForClass('org.dominokit.domino.cards.client.presenters', 'CardsPresenter', 649);
var Lorg_dominokit_domino_cards_client_presenters_CardsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.cards.client.presenters', 'CardsPresenterCommand', 650);
function $clinit_CarouselClientModule(){
  $clinit_CarouselClientModule = emptyMethod;
  LOGGER_11 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_carousel_client_CarouselClientModule_2_classLit) , Lorg_dominokit_domino_carousel_client_CarouselClientModule_2_classLit.typeName));
}

var LOGGER_11;
var Lorg_dominokit_domino_carousel_client_CarouselClientModule_2_classLit = createForClass('org.dominokit.domino.carousel.client', 'CarouselClientModule', null);
function CarouselModuleConfiguration(){
}

defineClass(533, 1, {}, CarouselModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_8(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_8(registry){
}
;
_.registerListeners = function registerListeners_8(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new CarouselPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_8(registry){
  $registerPresenter(new CarouselModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenter_2_classLit) , Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenter_2_classLit) , Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_8(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenterCommand_2_classLit) , Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenter_2_classLit) , Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_8(registry){
  $registerView(new CarouselModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenter_2_classLit) , Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_carousel_client_CarouselModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.carousel.client', 'CarouselModuleConfiguration', 533);
function CarouselModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(751, 40, $intern_41, CarouselModuleConfiguration$1);
var Lorg_dominokit_domino_carousel_client_CarouselModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.carousel.client', 'CarouselModuleConfiguration/1', 751);
function CarouselModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(752, 41, $intern_42, CarouselModuleConfiguration$2);
var Lorg_dominokit_domino_carousel_client_CarouselModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.carousel.client', 'CarouselModuleConfiguration/2', 752);
function CarouselPresenterListenerForComponentsEvent(){
}

defineClass(997, 1, {}, CarouselPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_carousel_client_listeners_CarouselPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.carousel.client.listeners', 'CarouselPresenterListenerForComponentsEvent', 997);
var Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenter_2_classLit = createForClass('org.dominokit.domino.carousel.client.presenters', 'CarouselPresenter', 749);
var Lorg_dominokit_domino_carousel_client_presenters_CarouselPresenterCommand_2_classLit = createForClass('org.dominokit.domino.carousel.client.presenters', 'CarouselPresenterCommand', 750);
function $clinit_ChipsClientModule(){
  $clinit_ChipsClientModule = emptyMethod;
  LOGGER_13 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_chips_client_ChipsClientModule_2_classLit) , Lorg_dominokit_domino_chips_client_ChipsClientModule_2_classLit.typeName));
}

var LOGGER_13;
var Lorg_dominokit_domino_chips_client_ChipsClientModule_2_classLit = createForClass('org.dominokit.domino.chips.client', 'ChipsClientModule', null);
function ChipsModuleConfiguration(){
}

defineClass(535, 1, {}, ChipsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_9(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_9(registry){
}
;
_.registerListeners = function registerListeners_9(registry){
  $addListener(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseEvent_2_classLit, new ChipsPresenterListenerForComponentCaseEvent);
}
;
_.registerPresenters = function registerPresenters_9(registry){
  $registerPresenter(new ChipsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_chips_client_presenters_ChipsPresenter_2_classLit) , Lorg_dominokit_domino_chips_client_presenters_ChipsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_chips_client_presenters_ChipsPresenter_2_classLit) , Lorg_dominokit_domino_chips_client_presenters_ChipsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_9(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_chips_client_presenters_ChipsPresenterCommand_2_classLit) , Lorg_dominokit_domino_chips_client_presenters_ChipsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_chips_client_presenters_ChipsPresenter_2_classLit) , Lorg_dominokit_domino_chips_client_presenters_ChipsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_9(registry){
  $registerView(new ChipsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_chips_client_presenters_ChipsPresenter_2_classLit) , Lorg_dominokit_domino_chips_client_presenters_ChipsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_chips_client_ChipsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.chips.client', 'ChipsModuleConfiguration', 535);
function ChipsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(759, 40, $intern_41, ChipsModuleConfiguration$1);
var Lorg_dominokit_domino_chips_client_ChipsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.chips.client', 'ChipsModuleConfiguration/1', 759);
function ChipsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(760, 41, $intern_42, ChipsModuleConfiguration$2);
var Lorg_dominokit_domino_chips_client_ChipsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.chips.client', 'ChipsModuleConfiguration/2', 760);
function ChipsPresenterListenerForComponentCaseEvent(){
}

defineClass(1001, 1, {}, ChipsPresenterListenerForComponentCaseEvent);
var Lorg_dominokit_domino_chips_client_listeners_ChipsPresenterListenerForComponentCaseEvent_2_classLit = createForClass('org.dominokit.domino.chips.client.listeners', 'ChipsPresenterListenerForComponentCaseEvent', 1001);
var Lorg_dominokit_domino_chips_client_presenters_ChipsPresenter_2_classLit = createForClass('org.dominokit.domino.chips.client.presenters', 'ChipsPresenter', 757);
var Lorg_dominokit_domino_chips_client_presenters_ChipsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.chips.client.presenters', 'ChipsPresenterCommand', 758);
function CoreMainExtensionPoint(){
}

defineClass(799, 1, {269:1, 2750:1}, CoreMainExtensionPoint);
var Lorg_dominokit_domino_client_commons_extensions_CoreMainExtensionPoint_2_classLit = createForClass('org.dominokit.domino.client.commons.extensions', 'CoreMainExtensionPoint', 799);
function $addListener_0(this$static, dominoEvent, dominoEventListener){
  $getStringValue(this$static.listeners, ($ensureNamesAreInitialized(dominoEvent) , dominoEvent.canonicalName)) == null && $putStringValue(this$static.listeners, ($ensureNamesAreInitialized(dominoEvent) , dominoEvent.canonicalName), new HashSet);
  castTo($getStringValue(this$static.listeners, ($ensureNamesAreInitialized(dominoEvent) , dominoEvent.canonicalName)), 143).add_0(new InMemoryDominoEventsListenerRepository$ListenerWrapper(dominoEventListener));
}

function $getEventListeners(this$static, dominoEvent){
  $getStringValue(this$static.listeners, ($ensureNamesAreInitialized(dominoEvent) , dominoEvent.canonicalName)) == null && $putStringValue(this$static.listeners, ($ensureNamesAreInitialized(dominoEvent) , dominoEvent.canonicalName), new HashSet);
  return castTo($collect_0($map(castTo($getStringValue(this$static.listeners, ($ensureNamesAreInitialized(dominoEvent) , dominoEvent.canonicalName)), 143).stream(), new InMemoryDominoEventsListenerRepository$lambda$0$Type), of_0(new Collectors$23methodref$ctor$Type, new Collectors$24methodref$add$Type, new Collectors$lambda$25$Type, new Collectors$lambda$26$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_24, 68, 0, [($clinit_Collector$Characteristics() , UNORDERED), IDENTITY_FINISH]))), 143);
}

function InMemoryDominoEventsListenerRepository(){
  this.listeners = new HashMap;
}

defineClass(787, 1, {2657:1}, InMemoryDominoEventsListenerRepository);
var Lorg_dominokit_domino_client_commons_extensions_InMemoryDominoEventsListenerRepository_2_classLit = createForClass('org.dominokit.domino.client.commons.extensions', 'InMemoryDominoEventsListenerRepository', 787);
function InMemoryDominoEventsListenerRepository$ListenerWrapper(dominoEventListener){
  this.dominoEventListener = dominoEventListener;
}

defineClass(302, 1, {302:1}, InMemoryDominoEventsListenerRepository$ListenerWrapper);
_.equals_0 = function equals_29(other){
  if (other == null)
    return false;
  return $equals_0($getCanonicalName(getClass__Ljava_lang_Class___devirtual$(this.dominoEventListener)), $getCanonicalName(getClass__Ljava_lang_Class___devirtual$(castTo(other, 302).dominoEventListener)));
}
;
_.hashCode_1 = function hashCode_30(){
  return getHashCode_1($getCanonicalName(getClass__Ljava_lang_Class___devirtual$(this.dominoEventListener)));
}
;
var Lorg_dominokit_domino_client_commons_extensions_InMemoryDominoEventsListenerRepository$ListenerWrapper_2_classLit = createForClass('org.dominokit.domino.client.commons.extensions', 'InMemoryDominoEventsListenerRepository/ListenerWrapper', 302);
function InMemoryDominoEventsListenerRepository$lambda$0$Type(){
}

defineClass(788, 1, {}, InMemoryDominoEventsListenerRepository$lambda$0$Type);
_.apply_0 = function apply_4(arg0){
  return castTo(arg0, 302).dominoEventListener;
}
;
var Lorg_dominokit_domino_client_commons_extensions_InMemoryDominoEventsListenerRepository$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.client.commons.extensions', 'InMemoryDominoEventsListenerRepository/lambda$0$Type', 788);
function $asPathsList(this$static, pathValue){
  if (pathValue == null)
    return $asPathsList(this$static, 'null');
  return castTo($collect_0($filter(stream_0($split($split($split($replace(pathValue, '!', ''), '\\?', 0)[0], '\\#', 0)[0], '/', 0)), new StateHistoryToken$lambda$5$Type), of_1(new StateHistoryToken$0methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$21$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_24, 68, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 52);
}

function $asQueryParameters(token){
  if (token.indexOf('?') == -1)
    return new HashMap;
  return castTo($collect_0($map(stream_0($split($split($split(token, '\\?', 0)[1], '\\#', 0)[0], '&', 0)), new StateHistoryToken$lambda$6$Type), toMap(new StateHistoryToken$lambda$7$Type, new StateHistoryToken$lambda$8$Type, new Collectors$22methodref$ctor$Type)), 158);
}

function $parseFragments(this$static, token){
  if (token.indexOf('#') != -1)
    return $asPathsList(this$static, $split(token, '\\#', 0)[1]);
  return new LinkedList;
}

function StateHistoryToken(token){
  this.paths = new LinkedList;
  this.queryParameters = new HashMap;
  this.fragments = new LinkedList;
  if (token == null)
    throw toJs(new HistoryToken$TokenCannotBeNullException);
  $addAll(this.paths, $asPathsList(this, token));
  $putAll(this.queryParameters, $asQueryParameters(token));
  this.fragments.addAll($parseFragments(this, token));
}

defineClass(172, 1, {}, StateHistoryToken);
var Lorg_dominokit_domino_client_commons_history_StateHistoryToken_2_classLit = createForClass('org.dominokit.domino.client.commons.history', 'StateHistoryToken', 172);
function StateHistoryToken$0methodref$ctor$Type(){
}

defineClass(1059, 1, {}, StateHistoryToken$0methodref$ctor$Type);
_.get_2 = function get_17(){
  return new LinkedList;
}
;
var Lorg_dominokit_domino_client_commons_history_StateHistoryToken$0methodref$ctor$Type_2_classLit = createForClass('org.dominokit.domino.client.commons.history', 'StateHistoryToken/0methodref$ctor$Type', 1059);
function StateHistoryToken$lambda$5$Type(){
}

defineClass(1058, 1, {}, StateHistoryToken$lambda$5$Type);
_.test_0 = function test_3(arg0){
  return castToString(arg0).length != 0;
}
;
var Lorg_dominokit_domino_client_commons_history_StateHistoryToken$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.client.commons.history', 'StateHistoryToken/lambda$5$Type', 1058);
function StateHistoryToken$lambda$6$Type(){
}

defineClass(1060, 1, {}, StateHistoryToken$lambda$6$Type);
_.apply_0 = function apply_6(arg0){
  return $split(castToString(arg0), '=', 0);
}
;
var Lorg_dominokit_domino_client_commons_history_StateHistoryToken$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.client.commons.history', 'StateHistoryToken/lambda$6$Type', 1060);
function StateHistoryToken$lambda$7$Type(){
}

defineClass(1061, 1, {}, StateHistoryToken$lambda$7$Type);
_.apply_0 = function apply_7(arg0){
  return castTo(arg0, 14)[0];
}
;
var Lorg_dominokit_domino_client_commons_history_StateHistoryToken$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.client.commons.history', 'StateHistoryToken/lambda$7$Type', 1061);
function StateHistoryToken$lambda$8$Type(){
}

defineClass(1062, 1, {}, StateHistoryToken$lambda$8$Type);
_.apply_0 = function apply_8(arg0){
  return castTo(arg0, 14)[1];
}
;
var Lorg_dominokit_domino_client_commons_history_StateHistoryToken$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.client.commons.history', 'StateHistoryToken/lambda$8$Type', 1062);
function $isRegisteredPresenter(this$static, presenterName){
  return $hasStringValue(this$static.presenters, presenterName);
}

function $registerPresenter_0(this$static, lazyPresenterLoader){
  if ($isRegisteredPresenter(this$static, lazyPresenterLoader.name_0))
    throw toJs(new PresentersRepository$PresenterCannotBeRegisteredMoreThanOnce(lazyPresenterLoader.name_0));
  $putStringValue(this$static.presenters, lazyPresenterLoader.name_0, lazyPresenterLoader);
  $putStringValue(this$static.names, lazyPresenterLoader.concreteName, lazyPresenterLoader.name_0);
}

function InMemoryPresentersRepository(){
  this.presenters = new HashMap;
  this.names = new HashMap;
}

defineClass(782, 1, {477:1}, InMemoryPresentersRepository);
var Lorg_dominokit_domino_client_commons_mvp_presenter_InMemoryPresentersRepository_2_classLit = createForClass('org.dominokit.domino.client.commons.mvp.presenter', 'InMemoryPresentersRepository', 782);
function $isRegisteredPresenterView(this$static, presenterName){
  return $hasStringValue(this$static.views, presenterName);
}

function $registerView_0(this$static, lazyViewLoader){
  if ($isRegisteredPresenterView(this$static, lazyViewLoader.presenterName))
    throw toJs(new ViewsRepository$ViewCannotBeRegisteredMoreThanOnce(lazyViewLoader.presenterName));
  $putStringValue(this$static.views, lazyViewLoader.presenterName, lazyViewLoader);
}

function InMemoryViewRepository(){
  this.views = new HashMap;
}

defineClass(784, 1, {2656:1}, InMemoryViewRepository);
var Lorg_dominokit_domino_client_commons_mvp_view_InMemoryViewRepository_2_classLit = createForClass('org.dominokit.domino.client.commons.mvp.view', 'InMemoryViewRepository', 784);
var Lorg_dominokit_domino_client_commons_request_RequestAsyncSender_2_classLit = createForInterface('org.dominokit.domino.client.commons.request', 'RequestAsyncSender');
function $clinit_AbstractRequestAsyncSender(){
  $clinit_AbstractRequestAsyncSender = emptyMethod;
  LOGGER_14 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_client_commons_request_RequestAsyncSender_2_classLit) , Lorg_dominokit_domino_client_commons_request_RequestAsyncSender_2_classLit.typeName));
}

defineClass(2683, 1, {});
var LOGGER_14;
var Lorg_dominokit_domino_client_commons_request_AbstractRequestAsyncSender_2_classLit = createForClass('org.dominokit.domino.client.commons.request', 'AbstractRequestAsyncSender', 2683);
function $clinit_ClientRouter(){
  $clinit_ClientRouter = emptyMethod;
  LOGGER_15 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_client_commons_request_ClientRouter_2_classLit) , Lorg_dominokit_domino_client_commons_request_ClientRouter_2_classLit.typeName));
}

function ClientRouter(){
  $clinit_ClientRouter();
}

defineClass(772, 1, $intern_43, ClientRouter);
var LOGGER_15;
var Lorg_dominokit_domino_client_commons_request_ClientRouter_2_classLit = createForClass('org.dominokit.domino.client.commons.request', 'ClientRouter', 772);
function $isRegisteredRequest(this$static, requestName){
  return $hasStringValue(this$static.requestPresenterWrappers, requestName);
}

function $registerCommand_0(this$static, requestHolder){
  if ($isRegisteredRequest(this$static, requestHolder.requestName))
    throw toJs(new CommandsRepository$CommandCannotBeRegisteredMoreThanOnce('Request key [' + requestHolder.requestName + ']'));
  $putStringValue(this$static.requestPresenterWrappers, requestHolder.requestName, requestHolder);
}

function InMemoryCommandsRepository(){
  this.requestPresenterWrappers = new HashMap;
}

defineClass(779, 1, {2655:1}, InMemoryCommandsRepository);
var Lorg_dominokit_domino_client_commons_request_InMemoryCommandsRepository_2_classLit = createForClass('org.dominokit.domino.client.commons.request', 'InMemoryCommandsRepository', 779);
function InMemoryRequestRestSendersRepository(){
  this.senders = new HashMap;
}

defineClass(790, 1, {2748:1}, InMemoryRequestRestSendersRepository);
var Lorg_dominokit_domino_client_commons_request_InMemoryRequestRestSendersRepository_2_classLit = createForClass('org.dominokit.domino.client.commons.request', 'InMemoryRequestRestSendersRepository', 790);
function ServerRouter(){
}

defineClass(774, 1, $intern_43, ServerRouter);
var Lorg_dominokit_domino_client_commons_request_ServerRouter_2_classLit = createForClass('org.dominokit.domino.client.commons.request', 'ServerRouter', 774);
function $clinit_CollapseClientModule(){
  $clinit_CollapseClientModule = emptyMethod;
  LOGGER_16 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_CollapseClientModule_2_classLit) , Lorg_dominokit_domino_collapse_client_CollapseClientModule_2_classLit.typeName));
}

var LOGGER_16;
var Lorg_dominokit_domino_collapse_client_CollapseClientModule_2_classLit = createForClass('org.dominokit.domino.collapse.client', 'CollapseClientModule', null);
function CollapseModuleConfiguration(){
}

defineClass(519, 1, {}, CollapseModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_10(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_10(registry){
}
;
_.registerListeners = function registerListeners_10(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new CollapsePresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_10(registry){
  $registerPresenter(new CollapseModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit) , Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit) , Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_10(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenterCommand_2_classLit) , Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit) , Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_10(registry){
  $registerView(new CollapseModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit) , Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_collapse_client_CollapseModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.collapse.client', 'CollapseModuleConfiguration', 519);
function CollapseModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(695, 40, $intern_41, CollapseModuleConfiguration$1);
var Lorg_dominokit_domino_collapse_client_CollapseModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.collapse.client', 'CollapseModuleConfiguration/1', 695);
function CollapseModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(696, 41, $intern_42, CollapseModuleConfiguration$2);
var Lorg_dominokit_domino_collapse_client_CollapseModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.collapse.client', 'CollapseModuleConfiguration/2', 696);
function CollapsePresenterListenerForComponentsEvent(){
}

defineClass(969, 1, {}, CollapsePresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_collapse_client_listeners_CollapsePresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.collapse.client.listeners', 'CollapsePresenterListenerForComponentsEvent', 969);
var Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit = createForClass('org.dominokit.domino.collapse.client.presenters', 'CollapsePresenter', 693);
var Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenterCommand_2_classLit = createForClass('org.dominokit.domino.collapse.client.presenters', 'CollapsePresenterCommand', 694);
function $clinit_ColorsClientModule(){
  $clinit_ColorsClientModule = emptyMethod;
  LOGGER_17 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_ColorsClientModule_2_classLit) , Lorg_dominokit_domino_colors_client_ColorsClientModule_2_classLit.typeName));
}

var LOGGER_17;
var Lorg_dominokit_domino_colors_client_ColorsClientModule_2_classLit = createForClass('org.dominokit.domino.colors.client', 'ColorsClientModule', null);
function ColorsModuleConfiguration(){
}

defineClass(506, 1, {}, ColorsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_11(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_11(registry){
}
;
_.registerListeners = function registerListeners_11(registry){
  $addListener(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseEvent_2_classLit, new ColorsPresenterListenerForComponentCaseEvent);
}
;
_.registerPresenters = function registerPresenters_11(registry){
  $registerPresenter(new ColorsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit) , Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit) , Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_11(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_presenters_ColorsPresenterCommand_2_classLit) , Lorg_dominokit_domino_colors_client_presenters_ColorsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit) , Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_11(registry){
  $registerView(new ColorsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit) , Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_colors_client_ColorsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.colors.client', 'ColorsModuleConfiguration', 506);
function ColorsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(643, 40, $intern_41, ColorsModuleConfiguration$1);
var Lorg_dominokit_domino_colors_client_ColorsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.colors.client', 'ColorsModuleConfiguration/1', 643);
function ColorsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(644, 41, $intern_42, ColorsModuleConfiguration$2);
var Lorg_dominokit_domino_colors_client_ColorsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.colors.client', 'ColorsModuleConfiguration/2', 644);
function ColorsPresenterListenerForComponentCaseEvent(){
}

defineClass(943, 1, {}, ColorsPresenterListenerForComponentCaseEvent);
var Lorg_dominokit_domino_colors_client_listeners_ColorsPresenterListenerForComponentCaseEvent_2_classLit = createForClass('org.dominokit.domino.colors.client.listeners', 'ColorsPresenterListenerForComponentCaseEvent', 943);
var Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit = createForClass('org.dominokit.domino.colors.client.presenters', 'ColorsPresenter', 641);
var Lorg_dominokit_domino_colors_client_presenters_ColorsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.colors.client.presenters', 'ColorsPresenterCommand', 642);
function $clinit_ComponentCaseClientModule(){
  $clinit_ComponentCaseClientModule = emptyMethod;
  LOGGER_18 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_ComponentCaseClientModule_2_classLit) , Lorg_dominokit_domino_componentcase_client_ComponentCaseClientModule_2_classLit.typeName));
}

var LOGGER_18;
var Lorg_dominokit_domino_componentcase_client_ComponentCaseClientModule_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseClientModule', null);
function ComponentCaseModuleConfiguration(){
}

defineClass(488, 1, {}, ComponentCaseModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_12(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_12(registry){
}
;
_.registerViews = function registerViews_12(registry){
}
;
_.registerListeners = function registerListeners_12(registry){
  $addListener(Lorg_dominokit_domino_layout_shared_extension_LayoutEvent_2_classLit, new ComponentCasePresenterListenerForLayoutEvent);
  $addListener(Lorg_dominokit_domino_menu_shared_extension_MenuEvent_2_classLit, new ComponentCasePresenterListenerForMenuEvent);
}
;
_.registerPresenters = function registerPresenters_12(registry){
  $registerPresenter(new ComponentCaseModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit) , Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit) , Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_12(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenterCommand_2_classLit) , Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit) , Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit.canonicalName));
}
;
var Lorg_dominokit_domino_componentcase_client_ComponentCaseModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseModuleConfiguration', 488);
function ComponentCaseModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(581, 40, $intern_41, ComponentCaseModuleConfiguration$1);
var Lorg_dominokit_domino_componentcase_client_ComponentCaseModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseModuleConfiguration/1', 581);
function $clinit_ComponentCaseUIClientModule(){
  $clinit_ComponentCaseUIClientModule = emptyMethod;
  LOGGER_19 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_ComponentCaseUIClientModule_2_classLit) , Lorg_dominokit_domino_componentcase_client_ComponentCaseUIClientModule_2_classLit.typeName));
}

var LOGGER_19;
var Lorg_dominokit_domino_componentcase_client_ComponentCaseUIClientModule_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseUIClientModule', null);
function ComponentCaseUIModuleConfiguration(){
}

defineClass(489, 1, {}, ComponentCaseUIModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_13(registry){
}
;
_.registerListeners = function registerListeners_13(registry){
}
;
_.registerPresenters = function registerPresenters_13(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_13(registry){
}
;
_.registerRequests = function registerRequests_13(registry){
}
;
_.registerViews = function registerViews_13(registry){
  $registerView(new ComponentCaseUIModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit) , Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_componentcase_client_ComponentCaseUIModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseUIModuleConfiguration', 489);
function ComponentCaseUIModuleConfiguration$1($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(582, 41, $intern_42, ComponentCaseUIModuleConfiguration$1);
var Lorg_dominokit_domino_componentcase_client_ComponentCaseUIModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseUIModuleConfiguration/1', 582);
function ComponentCasePresenterListenerForLayoutEvent(){
}

defineClass(909, 1, {}, ComponentCasePresenterListenerForLayoutEvent);
var Lorg_dominokit_domino_componentcase_client_listeners_ComponentCasePresenterListenerForLayoutEvent_2_classLit = createForClass('org.dominokit.domino.componentcase.client.listeners', 'ComponentCasePresenterListenerForLayoutEvent', 909);
function ComponentCasePresenterListenerForMenuEvent(){
}

defineClass(911, 1, {}, ComponentCasePresenterListenerForMenuEvent);
var Lorg_dominokit_domino_componentcase_client_listeners_ComponentCasePresenterListenerForMenuEvent_2_classLit = createForClass('org.dominokit.domino.componentcase.client.listeners', 'ComponentCasePresenterListenerForMenuEvent', 911);
var Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit = createForClass('org.dominokit.domino.componentcase.client.presenters', 'ComponentCasePresenter', 580);
var Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseEvent_2_classLit = createForInterface('org.dominokit.domino.componentcase.shared.extension', 'ComponentCaseEvent');
var Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenterCommand_2_classLit = createForClass('org.dominokit.domino.componentcase.client.presenters', 'ComponentCasePresenterCommand', 398);
function $clinit_ComponentsClientModule(){
  $clinit_ComponentsClientModule = emptyMethod;
  LOGGER_20 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_ComponentsClientModule_2_classLit) , Lorg_dominokit_domino_components_client_ComponentsClientModule_2_classLit.typeName));
}

var LOGGER_20;
var Lorg_dominokit_domino_components_client_ComponentsClientModule_2_classLit = createForClass('org.dominokit.domino.components.client', 'ComponentsClientModule', null);
function ComponentsModuleConfiguration(){
}

defineClass(495, 1, {}, ComponentsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_14(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_14(registry){
}
;
_.registerViews = function registerViews_14(registry){
}
;
_.registerListeners = function registerListeners_14(registry){
  $addListener(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseEvent_2_classLit, new ComponentsPresenterListenerForComponentCaseEvent);
}
;
_.registerPresenters = function registerPresenters_14(registry){
  $registerPresenter(new ComponentsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit) , Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit) , Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_14(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_presenters_ComponentsPresenterCommand_2_classLit) , Lorg_dominokit_domino_components_client_presenters_ComponentsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit) , Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit.canonicalName));
}
;
var Lorg_dominokit_domino_components_client_ComponentsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.components.client', 'ComponentsModuleConfiguration', 495);
function ComponentsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(604, 40, $intern_41, ComponentsModuleConfiguration$1);
var Lorg_dominokit_domino_components_client_ComponentsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.components.client', 'ComponentsModuleConfiguration/1', 604);
function ComponentsPresenterListenerForComponentCaseEvent(){
}

defineClass(923, 1, {}, ComponentsPresenterListenerForComponentCaseEvent);
var Lorg_dominokit_domino_components_client_listeners_ComponentsPresenterListenerForComponentCaseEvent_2_classLit = createForClass('org.dominokit.domino.components.client.listeners', 'ComponentsPresenterListenerForComponentCaseEvent', 923);
var Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit = createForClass('org.dominokit.domino.components.client.presenters', 'ComponentsPresenter', 602);
var Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit = createForInterface('org.dominokit.domino.components.shared.extension', 'ComponentsEvent');
var Lorg_dominokit_domino_components_client_presenters_ComponentsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.components.client.presenters', 'ComponentsPresenterCommand', 603);
function $clinit_DatatableClientModule(){
  $clinit_DatatableClientModule = emptyMethod;
  LOGGER_21 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_datatable_client_DatatableClientModule_2_classLit) , Lorg_dominokit_domino_datatable_client_DatatableClientModule_2_classLit.typeName));
}

var LOGGER_21;
var Lorg_dominokit_domino_datatable_client_DatatableClientModule_2_classLit = createForClass('org.dominokit.domino.datatable.client', 'DatatableClientModule', null);
function DatatableModuleConfiguration(){
}

defineClass(498, 1, {}, DatatableModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_15(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_15(registry){
}
;
_.registerListeners = function registerListeners_15(registry){
  $addListener(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseEvent_2_classLit, new DatatablePresenterListenerForComponentCaseEvent);
}
;
_.registerPresenters = function registerPresenters_15(registry){
  $registerPresenter(new DatatableModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenter_2_classLit) , Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenter_2_classLit) , Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_15(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenterCommand_2_classLit) , Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenter_2_classLit) , Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_15(registry){
  $registerView(new DatatableModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenter_2_classLit) , Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_datatable_client_DatatableModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.datatable.client', 'DatatableModuleConfiguration', 498);
function DatatableModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(611, 40, $intern_41, DatatableModuleConfiguration$1);
var Lorg_dominokit_domino_datatable_client_DatatableModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.datatable.client', 'DatatableModuleConfiguration/1', 611);
function DatatableModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(612, 41, $intern_42, DatatableModuleConfiguration$2);
var Lorg_dominokit_domino_datatable_client_DatatableModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.datatable.client', 'DatatableModuleConfiguration/2', 612);
function DatatablePresenterListenerForComponentCaseEvent(){
}

defineClass(927, 1, {}, DatatablePresenterListenerForComponentCaseEvent);
var Lorg_dominokit_domino_datatable_client_listeners_DatatablePresenterListenerForComponentCaseEvent_2_classLit = createForClass('org.dominokit.domino.datatable.client.listeners', 'DatatablePresenterListenerForComponentCaseEvent', 927);
var Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenter_2_classLit = createForClass('org.dominokit.domino.datatable.client.presenters', 'DatatablePresenter', 609);
var Lorg_dominokit_domino_datatable_client_presenters_DatatablePresenterCommand_2_classLit = createForClass('org.dominokit.domino.datatable.client.presenters', 'DatatablePresenterCommand', 610);
function $clinit_DatePickerClientModule(){
  $clinit_DatePickerClientModule = emptyMethod;
  LOGGER_22 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_DatePickerClientModule_2_classLit) , Lorg_dominokit_domino_datepicker_client_DatePickerClientModule_2_classLit.typeName));
}

var LOGGER_22;
var Lorg_dominokit_domino_datepicker_client_DatePickerClientModule_2_classLit = createForClass('org.dominokit.domino.datepicker.client', 'DatePickerClientModule', null);
function DatePickerModuleConfiguration(){
}

defineClass(502, 1, {}, DatePickerModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_16(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_16(registry){
}
;
_.registerListeners = function registerListeners_16(registry){
  $addListener(Lorg_dominokit_domino_forms_shared_extension_FormsEvent_2_classLit, new DatePickerPresenterListenerForFormsEvent);
}
;
_.registerPresenters = function registerPresenters_16(registry){
  $registerPresenter(new DatePickerModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit) , Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit) , Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_16(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenterCommand_2_classLit) , Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit) , Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_16(registry){
  $registerView(new DatePickerModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit) , Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_datepicker_client_DatePickerModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.datepicker.client', 'DatePickerModuleConfiguration', 502);
function DatePickerModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(627, 40, $intern_41, DatePickerModuleConfiguration$1);
var Lorg_dominokit_domino_datepicker_client_DatePickerModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.datepicker.client', 'DatePickerModuleConfiguration/1', 627);
function DatePickerModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(628, 41, $intern_42, DatePickerModuleConfiguration$2);
var Lorg_dominokit_domino_datepicker_client_DatePickerModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.datepicker.client', 'DatePickerModuleConfiguration/2', 628);
function DatePickerPresenterListenerForFormsEvent(){
}

defineClass(935, 1, {}, DatePickerPresenterListenerForFormsEvent);
var Lorg_dominokit_domino_datepicker_client_listeners_DatePickerPresenterListenerForFormsEvent_2_classLit = createForClass('org.dominokit.domino.datepicker.client.listeners', 'DatePickerPresenterListenerForFormsEvent', 935);
var Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit = createForClass('org.dominokit.domino.datepicker.client.presenters', 'DatePickerPresenter', 625);
var Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenterCommand_2_classLit = createForClass('org.dominokit.domino.datepicker.client.presenters', 'DatePickerPresenterCommand', 626);
function $clinit_DialogsClientModule(){
  $clinit_DialogsClientModule = emptyMethod;
  LOGGER_23 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_DialogsClientModule_2_classLit) , Lorg_dominokit_domino_dialogs_client_DialogsClientModule_2_classLit.typeName));
}

var LOGGER_23;
var Lorg_dominokit_domino_dialogs_client_DialogsClientModule_2_classLit = createForClass('org.dominokit.domino.dialogs.client', 'DialogsClientModule', null);
function DialogsModuleConfiguration(){
}

defineClass(527, 1, {}, DialogsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_17(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_17(registry){
}
;
_.registerListeners = function registerListeners_17(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new DialogsPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_17(registry){
  $registerPresenter(new DialogsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit) , Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit) , Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_17(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenterCommand_2_classLit) , Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit) , Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_17(registry){
  $registerView(new DialogsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit) , Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_dialogs_client_DialogsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.dialogs.client', 'DialogsModuleConfiguration', 527);
function DialogsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(727, 40, $intern_41, DialogsModuleConfiguration$1);
var Lorg_dominokit_domino_dialogs_client_DialogsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.dialogs.client', 'DialogsModuleConfiguration/1', 727);
function DialogsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(728, 41, $intern_42, DialogsModuleConfiguration$2);
var Lorg_dominokit_domino_dialogs_client_DialogsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.dialogs.client', 'DialogsModuleConfiguration/2', 728);
function DialogsPresenterListenerForComponentsEvent(){
}

defineClass(985, 1, {}, DialogsPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_dialogs_client_listeners_DialogsPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.dialogs.client.listeners', 'DialogsPresenterListenerForComponentsEvent', 985);
var Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit = createForClass('org.dominokit.domino.dialogs.client.presenters', 'DialogsPresenter', 725);
var Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.dialogs.client.presenters', 'DialogsPresenterCommand', 726);
function $clinit_FormsClientModule(){
  $clinit_FormsClientModule = emptyMethod;
  LOGGER_24 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_FormsClientModule_2_classLit) , Lorg_dominokit_domino_forms_client_FormsClientModule_2_classLit.typeName));
}

var LOGGER_24;
var Lorg_dominokit_domino_forms_client_FormsClientModule_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsClientModule', null);
function FormsModuleConfiguration(){
}

defineClass(496, 1, {}, FormsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_18(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_18(registry){
}
;
_.registerViews = function registerViews_18(registry){
}
;
_.registerListeners = function registerListeners_18(registry){
  $addListener(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseEvent_2_classLit, new FormsPresenterListenerForComponentCaseEvent);
}
;
_.registerPresenters = function registerPresenters_18(registry){
  $registerPresenter(new FormsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit) , Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit) , Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_18(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_presenters_FormsPresenterCommand_2_classLit) , Lorg_dominokit_domino_forms_client_presenters_FormsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit) , Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit.canonicalName));
}
;
var Lorg_dominokit_domino_forms_client_FormsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsModuleConfiguration', 496);
function FormsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(607, 40, $intern_41, FormsModuleConfiguration$1);
var Lorg_dominokit_domino_forms_client_FormsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsModuleConfiguration/1', 607);
function $clinit_FormsUIClientModule(){
  $clinit_FormsUIClientModule = emptyMethod;
  LOGGER_25 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_FormsUIClientModule_2_classLit) , Lorg_dominokit_domino_forms_client_FormsUIClientModule_2_classLit.typeName));
}

var LOGGER_25;
var Lorg_dominokit_domino_forms_client_FormsUIClientModule_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsUIClientModule', null);
function FormsUIModuleConfiguration(){
}

defineClass(497, 1, {}, FormsUIModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_19(registry){
}
;
_.registerListeners = function registerListeners_19(registry){
}
;
_.registerPresenters = function registerPresenters_19(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_19(registry){
}
;
_.registerRequests = function registerRequests_19(registry){
}
;
_.registerViews = function registerViews_19(registry){
  $registerView(new FormsUIModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit) , Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_forms_client_FormsUIModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsUIModuleConfiguration', 497);
function FormsUIModuleConfiguration$1($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(608, 41, $intern_42, FormsUIModuleConfiguration$1);
var Lorg_dominokit_domino_forms_client_FormsUIModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsUIModuleConfiguration/1', 608);
function FormsPresenterListenerForComponentCaseEvent(){
}

defineClass(925, 1, {}, FormsPresenterListenerForComponentCaseEvent);
var Lorg_dominokit_domino_forms_client_listeners_FormsPresenterListenerForComponentCaseEvent_2_classLit = createForClass('org.dominokit.domino.forms.client.listeners', 'FormsPresenterListenerForComponentCaseEvent', 925);
var Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit = createForClass('org.dominokit.domino.forms.client.presenters', 'FormsPresenter', 605);
var Lorg_dominokit_domino_forms_shared_extension_FormsEvent_2_classLit = createForInterface('org.dominokit.domino.forms.shared.extension', 'FormsEvent');
var Lorg_dominokit_domino_forms_client_presenters_FormsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.forms.client.presenters', 'FormsPresenterCommand', 606);
function $clinit_FormSamplesClientModule(){
  $clinit_FormSamplesClientModule = emptyMethod;
  LOGGER_26 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_formsamples_client_FormSamplesClientModule_2_classLit) , Lorg_dominokit_domino_formsamples_client_FormSamplesClientModule_2_classLit.typeName));
}

var LOGGER_26;
var Lorg_dominokit_domino_formsamples_client_FormSamplesClientModule_2_classLit = createForClass('org.dominokit.domino.formsamples.client', 'FormSamplesClientModule', null);
function FormSamplesModuleConfiguration(){
}

defineClass(531, 1, {}, FormSamplesModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_20(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_20(registry){
}
;
_.registerListeners = function registerListeners_20(registry){
  $addListener(Lorg_dominokit_domino_forms_shared_extension_FormsEvent_2_classLit, new FormSamplesPresenterListenerForFormsEvent);
}
;
_.registerPresenters = function registerPresenters_20(registry){
  $registerPresenter(new FormSamplesModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenter_2_classLit) , Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenter_2_classLit) , Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_20(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenterCommand_2_classLit) , Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenter_2_classLit) , Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_20(registry){
  $registerView(new FormSamplesModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenter_2_classLit) , Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_formsamples_client_FormSamplesModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.formsamples.client', 'FormSamplesModuleConfiguration', 531);
function FormSamplesModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(743, 40, $intern_41, FormSamplesModuleConfiguration$1);
var Lorg_dominokit_domino_formsamples_client_FormSamplesModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.formsamples.client', 'FormSamplesModuleConfiguration/1', 743);
function FormSamplesModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(744, 41, $intern_42, FormSamplesModuleConfiguration$2);
var Lorg_dominokit_domino_formsamples_client_FormSamplesModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.formsamples.client', 'FormSamplesModuleConfiguration/2', 744);
function FormSamplesPresenterListenerForFormsEvent(){
}

defineClass(993, 1, {}, FormSamplesPresenterListenerForFormsEvent);
var Lorg_dominokit_domino_formsamples_client_listeners_FormSamplesPresenterListenerForFormsEvent_2_classLit = createForClass('org.dominokit.domino.formsamples.client.listeners', 'FormSamplesPresenterListenerForFormsEvent', 993);
var Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenter_2_classLit = createForClass('org.dominokit.domino.formsamples.client.presenters', 'FormSamplesPresenter', 741);
var Lorg_dominokit_domino_formsamples_client_presenters_FormSamplesPresenterCommand_2_classLit = createForClass('org.dominokit.domino.formsamples.client.presenters', 'FormSamplesPresenterCommand', 742);
function $clinit_FormsValidationsClientModule(){
  $clinit_FormsValidationsClientModule = emptyMethod;
  LOGGER_27 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_formsvalidations_client_FormsValidationsClientModule_2_classLit) , Lorg_dominokit_domino_formsvalidations_client_FormsValidationsClientModule_2_classLit.typeName));
}

var LOGGER_27;
var Lorg_dominokit_domino_formsvalidations_client_FormsValidationsClientModule_2_classLit = createForClass('org.dominokit.domino.formsvalidations.client', 'FormsValidationsClientModule', null);
function FormsValidationsModuleConfiguration(){
}

defineClass(501, 1, {}, FormsValidationsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_21(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_21(registry){
}
;
_.registerListeners = function registerListeners_21(registry){
  $addListener(Lorg_dominokit_domino_forms_shared_extension_FormsEvent_2_classLit, new FormsValidationsPresenterListenerForFormsEvent);
}
;
_.registerPresenters = function registerPresenters_21(registry){
  $registerPresenter(new FormsValidationsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenter_2_classLit) , Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenter_2_classLit) , Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_21(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenterCommand_2_classLit) , Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenter_2_classLit) , Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_21(registry){
  $registerView(new FormsValidationsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenter_2_classLit) , Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_formsvalidations_client_FormsValidationsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.formsvalidations.client', 'FormsValidationsModuleConfiguration', 501);
function FormsValidationsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(623, 40, $intern_41, FormsValidationsModuleConfiguration$1);
var Lorg_dominokit_domino_formsvalidations_client_FormsValidationsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.formsvalidations.client', 'FormsValidationsModuleConfiguration/1', 623);
function FormsValidationsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(624, 41, $intern_42, FormsValidationsModuleConfiguration$2);
var Lorg_dominokit_domino_formsvalidations_client_FormsValidationsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.formsvalidations.client', 'FormsValidationsModuleConfiguration/2', 624);
function FormsValidationsPresenterListenerForFormsEvent(){
}

defineClass(933, 1, {}, FormsValidationsPresenterListenerForFormsEvent);
var Lorg_dominokit_domino_formsvalidations_client_listeners_FormsValidationsPresenterListenerForFormsEvent_2_classLit = createForClass('org.dominokit.domino.formsvalidations.client.listeners', 'FormsValidationsPresenterListenerForFormsEvent', 933);
var Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenter_2_classLit = createForClass('org.dominokit.domino.formsvalidations.client.presenters', 'FormsValidationsPresenter', 621);
var Lorg_dominokit_domino_formsvalidations_client_presenters_FormsValidationsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.formsvalidations.client.presenters', 'FormsValidationsPresenterCommand', 622);
function $clinit_GridLayoutClientModule(){
  $clinit_GridLayoutClientModule = emptyMethod;
  LOGGER_28 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_gridLayout_client_GridLayoutClientModule_2_classLit) , Lorg_dominokit_domino_gridLayout_client_GridLayoutClientModule_2_classLit.typeName));
}

var LOGGER_28;
var Lorg_dominokit_domino_gridLayout_client_GridLayoutClientModule_2_classLit = createForClass('org.dominokit.domino.gridLayout.client', 'GridLayoutClientModule', null);
function GridLayoutModuleConfiguration(){
}

defineClass(493, 1, {}, GridLayoutModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_22(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_22(registry){
}
;
_.registerListeners = function registerListeners_22(registry){
  $addListener(Lorg_dominokit_domino_layouts_shared_extension_LayoutsEvent_2_classLit, new GridLayoutPresenterListenerForLayoutsEvent);
}
;
_.registerPresenters = function registerPresenters_22(registry){
  $registerPresenter(new GridLayoutModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenter_2_classLit) , Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenter_2_classLit) , Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_22(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenterCommand_2_classLit) , Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenter_2_classLit) , Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_22(registry){
  $registerView(new GridLayoutModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenter_2_classLit) , Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_gridLayout_client_GridLayoutModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.gridLayout.client', 'GridLayoutModuleConfiguration', 493);
function GridLayoutModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(596, 40, $intern_41, GridLayoutModuleConfiguration$1);
var Lorg_dominokit_domino_gridLayout_client_GridLayoutModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.gridLayout.client', 'GridLayoutModuleConfiguration/1', 596);
function GridLayoutModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(597, 41, $intern_42, GridLayoutModuleConfiguration$2);
var Lorg_dominokit_domino_gridLayout_client_GridLayoutModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.gridLayout.client', 'GridLayoutModuleConfiguration/2', 597);
function GridLayoutPresenterListenerForLayoutsEvent(){
}

defineClass(919, 1, {}, GridLayoutPresenterListenerForLayoutsEvent);
var Lorg_dominokit_domino_gridLayout_client_listeners_GridLayoutPresenterListenerForLayoutsEvent_2_classLit = createForClass('org.dominokit.domino.gridLayout.client.listeners', 'GridLayoutPresenterListenerForLayoutsEvent', 919);
var Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenter_2_classLit = createForClass('org.dominokit.domino.gridLayout.client.presenters', 'GridLayoutPresenter', 594);
var Lorg_dominokit_domino_gridLayout_client_presenters_GridLayoutPresenterCommand_2_classLit = createForClass('org.dominokit.domino.gridLayout.client.presenters', 'GridLayoutPresenterCommand', 595);
function $clinit_GridsClientModule(){
  $clinit_GridsClientModule = emptyMethod;
  LOGGER_29 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_grids_client_GridsClientModule_2_classLit) , Lorg_dominokit_domino_grids_client_GridsClientModule_2_classLit.typeName));
}

var LOGGER_29;
var Lorg_dominokit_domino_grids_client_GridsClientModule_2_classLit = createForClass('org.dominokit.domino.grids.client', 'GridsClientModule', null);
function GridsModuleConfiguration(){
}

defineClass(494, 1, {}, GridsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_23(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_23(registry){
}
;
_.registerListeners = function registerListeners_23(registry){
  $addListener(Lorg_dominokit_domino_layouts_shared_extension_LayoutsEvent_2_classLit, new GridsPresenterListenerForLayoutsEvent);
}
;
_.registerPresenters = function registerPresenters_23(registry){
  $registerPresenter(new GridsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_grids_client_presenters_GridsPresenter_2_classLit) , Lorg_dominokit_domino_grids_client_presenters_GridsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_grids_client_presenters_GridsPresenter_2_classLit) , Lorg_dominokit_domino_grids_client_presenters_GridsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_23(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_grids_client_presenters_GridsPresenterCommand_2_classLit) , Lorg_dominokit_domino_grids_client_presenters_GridsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_grids_client_presenters_GridsPresenter_2_classLit) , Lorg_dominokit_domino_grids_client_presenters_GridsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_23(registry){
  $registerView(new GridsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_grids_client_presenters_GridsPresenter_2_classLit) , Lorg_dominokit_domino_grids_client_presenters_GridsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_grids_client_GridsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.grids.client', 'GridsModuleConfiguration', 494);
function GridsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(600, 40, $intern_41, GridsModuleConfiguration$1);
var Lorg_dominokit_domino_grids_client_GridsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.grids.client', 'GridsModuleConfiguration/1', 600);
function GridsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(601, 41, $intern_42, GridsModuleConfiguration$2);
var Lorg_dominokit_domino_grids_client_GridsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.grids.client', 'GridsModuleConfiguration/2', 601);
function GridsPresenterListenerForLayoutsEvent(){
}

defineClass(921, 1, {}, GridsPresenterListenerForLayoutsEvent);
var Lorg_dominokit_domino_grids_client_listeners_GridsPresenterListenerForLayoutsEvent_2_classLit = createForClass('org.dominokit.domino.grids.client.listeners', 'GridsPresenterListenerForLayoutsEvent', 921);
var Lorg_dominokit_domino_grids_client_presenters_GridsPresenter_2_classLit = createForClass('org.dominokit.domino.grids.client.presenters', 'GridsPresenter', 598);
var Lorg_dominokit_domino_grids_client_presenters_GridsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.grids.client.presenters', 'GridsPresenterCommand', 599);
function $clinit_Core(){
  $clinit_Core = emptyMethod;
  LOGGER_30 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_gwt_client_Core_2_classLit) , Lorg_dominokit_domino_gwt_client_Core_2_classLit.typeName));
}

var LOGGER_30;
var Lorg_dominokit_domino_gwt_client_Core_2_classLit = createForClass('org.dominokit.domino.gwt.client', 'Core', null);
function $clinit_CoreModule(){
  $clinit_CoreModule = emptyMethod;
  LOGGER_31 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_gwt_client_app_CoreModule_2_classLit) , Lorg_dominokit_domino_gwt_client_app_CoreModule_2_classLit.typeName));
}

var LOGGER_31;
var Lorg_dominokit_domino_gwt_client_app_CoreModule_2_classLit = createForClass('org.dominokit.domino.gwt.client.app', 'CoreModule', null);
function CoreModule$lambda$0$Type(){
}

defineClass(563, 1, {}, CoreModule$lambda$0$Type);
_.onUncaughtException = function onUncaughtException_0(arg0){
  $clinit_CoreModule();
  $error_0(LOGGER_31, 'Uncaught Exception', arg0);
}
;
var Lorg_dominokit_domino_gwt_client_app_CoreModule$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.app', 'CoreModule/lambda$0$Type', 563);
function GwtAsyncRunner(){
}

defineClass(798, 1, {384:1}, GwtAsyncRunner);
var Lorg_dominokit_domino_gwt_client_async_GwtAsyncRunner_2_classLit = createForClass('org.dominokit.domino.gwt.client.async', 'GwtAsyncRunner', 798);
function GwtAsyncRunner$1(val$asyncTask){
  this.val$asyncTask2 = val$asyncTask;
}

defineClass(304, 1, $intern_44, GwtAsyncRunner$1);
_.onFailure_0 = function onFailure_2(reason){
  this.val$asyncTask2.onFailed(reason);
}
;
var Lorg_dominokit_domino_gwt_client_async_GwtAsyncRunner$1_2_classLit = createForClass('org.dominokit.domino.gwt.client.async', 'GwtAsyncRunner/1', 304);
function $clinit_ClientRequestGwtEvent(){
  $clinit_ClientRequestGwtEvent = emptyMethod;
  CLIENT_REQUEST_EVENT_TYPE = new GwtEvent$Type;
}

var CLIENT_REQUEST_EVENT_TYPE;
function RequestEventProcessor(){
}

defineClass(775, 1, {2746:1}, RequestEventProcessor);
var Lorg_dominokit_domino_gwt_client_events_RequestEventProcessor_2_classLit = createForClass('org.dominokit.domino.gwt.client.events', 'RequestEventProcessor', 775);
function $clinit_ServerFailedRequestGwtEvent(){
  $clinit_ServerFailedRequestGwtEvent = emptyMethod;
  SERVER_FAILED_REQUEST_EVENT_TYPE = new GwtEvent$Type;
}

var SERVER_FAILED_REQUEST_EVENT_TYPE;
function $clinit_ServerSuccessRequestGwtEvent(){
  $clinit_ServerSuccessRequestGwtEvent = emptyMethod;
  SERVER_SUCCESS_REQUEST_EVENT_TYPE = new GwtEvent$Type;
}

var SERVER_SUCCESS_REQUEST_EVENT_TYPE;
function $clinit_SimpleEventsBus(){
  $clinit_SimpleEventsBus = emptyMethod;
  LOGGER_32 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_gwt_client_events_SimpleEventsBus_2_classLit) , Lorg_dominokit_domino_gwt_client_events_SimpleEventsBus_2_classLit.typeName));
  simpleGwtEventsBus = new SimpleEventBus;
}

function SimpleEventsBus(eventProcessor){
  $clinit_SimpleEventsBus();
  $addHandler(simpleGwtEventsBus, ($clinit_ClientRequestGwtEvent() , CLIENT_REQUEST_EVENT_TYPE), eventProcessor);
  $addHandler(simpleGwtEventsBus, ($clinit_ServerSuccessRequestGwtEvent() , SERVER_SUCCESS_REQUEST_EVENT_TYPE), eventProcessor);
  $addHandler(simpleGwtEventsBus, ($clinit_ServerFailedRequestGwtEvent() , SERVER_FAILED_REQUEST_EVENT_TYPE), eventProcessor);
}

defineClass(776, 1, {2747:1}, SimpleEventsBus);
var LOGGER_32, simpleGwtEventsBus;
var Lorg_dominokit_domino_gwt_client_events_SimpleEventsBus_2_classLit = createForClass('org.dominokit.domino.gwt.client.events', 'SimpleEventsBus', 776);
function $inform(this$static, token, stateJson){
  $forEach_3($filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.listeners, 1)), new StateHistory$lambda$1$Type(token, stateJson)), new StateHistory$lambda$2$Type(token, stateJson));
}

function $lambda$0_26(this$static, event_0){
  var popStateEvent, state;
  popStateEvent = castToNative(event_0, $wnd.PopStateEvent);
  state = castToJsObject(popStateEvent.state);
  state != null && $inform(this$static, state.historyToken, state.data);
}

function $lambda$1_17(token_1, stateJson_3, l_3){
  return l_3.tokenFilter.filter_1((new StateHistory$DominoHistoryState(token_1, stateJson_3)).token);
}

function $lambda$2_12(token_1, stateJson_3, l_3){
  $clinit_ClientApp();
  runAsync(1, new GwtAsyncRunner$1((castTo(ASYNC_RUNNER_HOLDER.attribute, 384) , new StateHistory$lambda$3$Type(l_3, token_1, stateJson_3))));
}

function StateHistory(){
  this.listeners = new HashSet;
  this.history_0 = castToNative(($clinit_DomGlobal() , self_0).history, $wnd.History);
  self_0.addEventListener('popstate', new StateHistory$lambda$0$Type(this));
}

defineClass(350, 1, {150:1, 350:1}, StateHistory);
var Lorg_dominokit_domino_gwt_client_history_StateHistory_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory', 350);
function StateHistory$DominoHistoryState(token, data_0){
  this.token = new StateHistoryToken(token);
  this.data_0 = data_0;
}

defineClass(303, 1, {}, StateHistory$DominoHistoryState);
var Lorg_dominokit_domino_gwt_client_history_StateHistory$DominoHistoryState_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory/DominoHistoryState', 303);
function StateHistory$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(793, 1, {}, StateHistory$lambda$0$Type);
_.handleEvent = function handleEvent_148(arg0){
  $lambda$0_26(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_gwt_client_history_StateHistory$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory/lambda$0$Type', 793);
function StateHistory$lambda$1$Type(token_1, stateJson_3){
  this.token_1 = token_1;
  this.stateJson_3 = stateJson_3;
}

defineClass(794, 1, {}, StateHistory$lambda$1$Type);
_.test_0 = function test_8(arg0){
  return $lambda$1_17(this.token_1, this.stateJson_3, arg0);
}
;
var Lorg_dominokit_domino_gwt_client_history_StateHistory$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory/lambda$1$Type', 794);
function StateHistory$lambda$2$Type(token_1, stateJson_3){
  this.token_1 = token_1;
  this.stateJson_3 = stateJson_3;
}

defineClass(796, 1, {}, StateHistory$lambda$2$Type);
_.accept_2 = function accept_28(arg0){
  $lambda$2_12(this.token_1, this.stateJson_3, arg0);
}
;
var Lorg_dominokit_domino_gwt_client_history_StateHistory$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory/lambda$2$Type', 796);
function StateHistory$lambda$3$Type(l_1, token_2, stateJson_4){
  this.l_1 = l_1;
  this.token_2 = token_2;
  this.stateJson_4 = stateJson_4;
}

defineClass(795, 1, {}, StateHistory$lambda$3$Type);
_.onFailed = function onFailed_2(error){
  $error_0(($clinit_AsyncRunner() , LOGGER_3), 'Failed to run async task : ', error);
}
;
var Lorg_dominokit_domino_gwt_client_history_StateHistory$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory/lambda$3$Type', 795);
function $asSerializableStackTrace(stackTraceElements){
  var collected;
  return collected = castTo($collect_0($map(new StreamImpl(null, spliterator_3(stackTraceElements, stackTraceElements.length)), new RestfulRemoteLogHandler$0methodref$asSerializableStackTraceElement$Type), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$21$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_24, 68, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 52) , castTo(collected.toArray_0($apply_0(collected.size_1())), 2752);
}

function $asSerializableStackTraceElement(stackTraceElement){
  var serializableStackTraceElement;
  serializableStackTraceElement = new SerializableStackTraceElement;
  serializableStackTraceElement.className_0 = stackTraceElement.className_0;
  serializableStackTraceElement.fileName = stackTraceElement.fileName;
  serializableStackTraceElement.methodName = stackTraceElement.methodName;
  serializableStackTraceElement.lineNumber = stackTraceElement.lineNumber;
  return serializableStackTraceElement;
}

function $serializableThrowable(this$static, throwable){
  var serializableThrowable;
  if (!throwable)
    return null;
  serializableThrowable = new SerializableThrowable;
  serializableThrowable.type_0 = $getName(throwable.___clazz);
  serializableThrowable.message_0 = throwable.getMessage();
  serializableThrowable.cause = $serializableThrowable(this$static, throwable.cause);
  serializableThrowable.stackTrace = $asSerializableStackTrace(castTo($orElseGet(ofNullable((throwable.stackTrace == null && (throwable.stackTrace = $constructJavaStackTrace(throwable)) , throwable.stackTrace))), 344));
  return serializableThrowable;
}

function RestfulRemoteLogHandler(){
  $clinit_RemoteLogHandlerBase();
  this.excludedLoggerNames = new ArrayList;
  $add_1(this.excludedLoggerNames, 'WireActivityLogger');
  this.service = new RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_;
  $setLevel(this, ($clinit_Level() , SEVERE));
}

function unwrap_5(e){
  var entry, outerIter, ue;
  if (instanceOf(e, 311)) {
    ue = castTo(e, 311);
    if (ue.getCauses().map_0.size_1() == 1)
      return unwrap_5((outerIter = (new AbstractMap$1(ue.getCauses().map_0)).this$01.entrySet_0().iterator() , entry = castTo((new AbstractMap$1$1(outerIter)).val$outerIter2.next_1(), 80) , castTo(entry.getKey(), 50)));
  }
  return e;
}

defineClass(544, 824, $intern_17, RestfulRemoteLogHandler);
_.publish = function publish_1(record){
  var serviceRoots, serviceRoots0, serializableLogRecord;
  if ($getLevel(this).intValue() <= record.level.intValue() && $indexOf_2(this.excludedLoggerNames, record.loggerName, 0) == -1) {
    $clinit_ServiceRootMatcher();
    serviceRoots0 = ($clinit_ClientApp() , castTo(castTo(DOMINO_OPTIONS_HOLDER.attribute, 341), 240).dynamicServiceRoots);
    $anyMatch(new StreamImpl(null, new Spliterators$IteratorSpliterator(serviceRoots0, 16)), new ServiceRootMatcher$lambda$3$Type)?$setResource(this.service, new Resource((serviceRoots = castTo(castTo(DOMINO_OPTIONS_HOLDER.attribute, 341), 240).dynamicServiceRoots , castTo($orElse($findFirst($filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(serviceRoots, 16)), new ServiceRootMatcher$lambda$2$Type)), defaultRoot), 359) , castTo(castTo(DOMINO_OPTIONS_HOLDER.attribute, 341), 240).defaultServiceRoot))):$setResource(this.service, new Resource(getHostPageBaseURL()));
    $send(this.service, (serializableLogRecord = new SerializableLogRecord , serializableLogRecord.level = record.level.getName() , serializableLogRecord.millis_0 = record.millis_0 , serializableLogRecord.message_0 = record.msg , serializableLogRecord.loggerName = record.loggerName , serializableLogRecord.permutationStrongName = ($clinit_Impl() , $strongName) , serializableLogRecord.thrown = $serializableThrowable(this, unwrap_5(record.thrown)) , serializableLogRecord));
  }
}
;
var Lorg_dominokit_domino_gwt_client_logging_RestfulRemoteLogHandler_2_classLit = createForClass('org.dominokit.domino.gwt.client.logging', 'RestfulRemoteLogHandler', 544);
function RestfulRemoteLogHandler$0methodref$asSerializableStackTraceElement$Type(){
}

defineClass(825, 1, {}, RestfulRemoteLogHandler$0methodref$asSerializableStackTraceElement$Type);
_.apply_0 = function apply_11(arg0){
  return $asSerializableStackTraceElement(castTo(arg0, 162));
}
;
var Lorg_dominokit_domino_gwt_client_logging_RestfulRemoteLogHandler$0methodref$asSerializableStackTraceElement$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.logging', 'RestfulRemoteLogHandler/0methodref$asSerializableStackTraceElement$Type', 825);
function $apply_0(arg0){
  return $clinit_RemoteLogHandlerBase() , initUnidimensionalArray(Lorg_dominokit_domino_api_shared_logging_SerializableStackTraceElement_2_classLit, {10:1, 12:1, 11:1, 2752:1}, 353, arg0, 0, 1);
}

function $getResource(this$static){
  var serviceRoot;
  if (!this$static.resource) {
    serviceRoot = ($clinit_Defaults() , $clinit_Defaults() , serviceRoot_0);
    this$static.resource = new Resource(serviceRoot);
  }
  return this$static.resource;
}

function $send(this$static, record){
  var __method, rc;
  __method = $post($resolve($getResource(this$static), '/service/remoteLogging'));
  $setHeader(__method.builder, 'Accept', 'application/json');
  $setHeader(__method.builder, 'Content-Type', 'application/json');
  $json(__method, (rc = new JSONObject , isNotNullValuePut($encode_3(record.level), rc, 'level') , isNotNullValuePut($encode_3(record.message_0), rc, 'message') , isNotNullValuePut($encode_2(valueOf_2(record.millis_0)), rc, 'millis') , isNotNullValuePut($encode_0(record.thrown), rc, 'thrown') , isNotNullValuePut($encode_3(record.loggerName), rc, 'loggerName') , isNotNullValuePut($encode_3(record.permutationStrongName), rc, 'permutationStrongName') , rc));
  try {
    $send_0(__method, new RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_$1(__method));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 171))
      throw toJs($e0);
  }
}

function $setResource(this$static, resource){
  this$static.resource = resource;
}

function RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_(){
}

defineClass(1025, 1, {}, RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_);
_.resource = null;
var Lorg_dominokit_domino_gwt_client_logging_RestfulRemoteLogHandler_1RemoteExceptionLoggingService_1Generated_1RestServiceProxy_1_2_classLit = createForClass('org.dominokit.domino.gwt.client.logging', 'RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_', 1025);
defineClass(1026, 1, {});
_.onError = function onError_1(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_0(request, response){
  var content_0, e;
  if ($isExpected(this.method_0, response.getStatusCode())) {
    try {
      loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName)));
      !!this.logger && $fine((loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName))) , this.logger), 'Received http response for request: ' + this.method_0.builder.httpMethod + ' ' + this.method_0.builder.url_0);
      content_0 = response.xmlHttpRequest.responseText;
      if (content_0 != null && content_0.length > 0) {
        loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName)));
        !!this.logger && $finest((loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName))) , this.logger), content_0);
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 50)) {
        e = $e0;
        loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName)));
        !!this.logger && $log_0((loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName))) , this.logger), ($clinit_Level() , FINE), 'Could not parse response: ' + e, e);
        return;
      }
       else 
        throw toJs($e0);
    }
  }
   else {
    new FailedResponseException(($clinit_Defaults() , response));
  }
}
;
var Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit = createForClass('org.fusesource.restygwt.client', 'AbstractRequestCallback', 1026);
function RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_$1($anonymous0){
  this.method_0 = $anonymous0;
}

defineClass(1027, 1026, {}, RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_$1);
var Lorg_dominokit_domino_gwt_client_logging_RestfulRemoteLogHandler_1RemoteExceptionLoggingService_1Generated_1RestServiceProxy_1$1_2_classLit = createForClass('org.dominokit.domino.gwt.client.logging', 'RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_/1', 1027);
function RestyGwtOptions(){
  this.defaultServiceRoot = $replace(getModuleBaseURL(), 'static', 'service');
  this.dynamicServiceRoots = new ArrayList;
}

defineClass(240, 1, {341:1, 240:1}, RestyGwtOptions);
var Lorg_dominokit_domino_gwt_client_options_RestyGwtOptions_2_classLit = createForClass('org.dominokit.domino.gwt.client.options', 'RestyGwtOptions', 240);
function DominoRequestDispatcher(){
  this.headers_0 = new HashMap;
}

defineClass(818, 1, {}, DominoRequestDispatcher);
_.send_0 = function send(method, builder){
  var cookiesMap;
  $setHeader(builder, 'X-XSRF-TOKEN', (cookiesMap = ensureCookies() , castToString(cookiesMap.stringMap.backingMap.get('XSRF-TOKEN'))));
  $forEach_2(this.headers_0, new DominoRequestDispatcher$0methodref$setHeader$Type(builder));
  return throwIfNull('callback', builder.callback) , $doSend(builder, builder.requestData, builder.callback);
}
;
var Lorg_dominokit_domino_gwt_client_request_DominoRequestDispatcher_2_classLit = createForClass('org.dominokit.domino.gwt.client.request', 'DominoRequestDispatcher', 818);
function DominoRequestDispatcher$0methodref$setHeader$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(819, 1, {}, DominoRequestDispatcher$0methodref$setHeader$Type);
_.accept_1 = function accept_29(arg0, arg1){
  $setHeader(this.$$outer_0, castToString(arg0), castToString(arg1));
}
;
var Lorg_dominokit_domino_gwt_client_request_DominoRequestDispatcher$0methodref$setHeader$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.request', 'DominoRequestDispatcher/0methodref$setHeader$Type', 819);
function GwtRequestAsyncSender(){
  $clinit_AbstractRequestAsyncSender();
  setDispatcher(new DominoRequestDispatcher);
}

defineClass(777, 2683, {}, GwtRequestAsyncSender);
var Lorg_dominokit_domino_gwt_client_request_GwtRequestAsyncSender_2_classLit = createForClass('org.dominokit.domino.gwt.client.request', 'GwtRequestAsyncSender', 777);
function $clinit_HelpersClientModule(){
  $clinit_HelpersClientModule = emptyMethod;
  LOGGER_33 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_HelpersClientModule_2_classLit) , Lorg_dominokit_domino_helpers_client_HelpersClientModule_2_classLit.typeName));
}

var LOGGER_33;
var Lorg_dominokit_domino_helpers_client_HelpersClientModule_2_classLit = createForClass('org.dominokit.domino.helpers.client', 'HelpersClientModule', null);
function HelpersModuleConfiguration(){
}

defineClass(505, 1, {}, HelpersModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_24(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_24(registry){
}
;
_.registerListeners = function registerListeners_24(registry){
  $addListener(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseEvent_2_classLit, new HelpersPresenterListenerForComponentCaseEvent);
}
;
_.registerPresenters = function registerPresenters_24(registry){
  $registerPresenter(new HelpersModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit) , Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit) , Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_24(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenterCommand_2_classLit) , Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit) , Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_24(registry){
  $registerView(new HelpersModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit) , Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_helpers_client_HelpersModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.helpers.client', 'HelpersModuleConfiguration', 505);
function HelpersModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(639, 40, $intern_41, HelpersModuleConfiguration$1);
var Lorg_dominokit_domino_helpers_client_HelpersModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.helpers.client', 'HelpersModuleConfiguration/1', 639);
function HelpersModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(640, 41, $intern_42, HelpersModuleConfiguration$2);
var Lorg_dominokit_domino_helpers_client_HelpersModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.helpers.client', 'HelpersModuleConfiguration/2', 640);
function HelpersPresenterListenerForComponentCaseEvent(){
}

defineClass(941, 1, {}, HelpersPresenterListenerForComponentCaseEvent);
var Lorg_dominokit_domino_helpers_client_listeners_HelpersPresenterListenerForComponentCaseEvent_2_classLit = createForClass('org.dominokit.domino.helpers.client.listeners', 'HelpersPresenterListenerForComponentCaseEvent', 941);
var Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit = createForClass('org.dominokit.domino.helpers.client.presenters', 'HelpersPresenter', 637);
var Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenterCommand_2_classLit = createForClass('org.dominokit.domino.helpers.client.presenters', 'HelpersPresenterCommand', 638);
function $clinit_HomeClientModule(){
  $clinit_HomeClientModule = emptyMethod;
  LOGGER_34 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_HomeClientModule_2_classLit) , Lorg_dominokit_domino_home_client_HomeClientModule_2_classLit.typeName));
}

var LOGGER_34;
var Lorg_dominokit_domino_home_client_HomeClientModule_2_classLit = createForClass('org.dominokit.domino.home.client', 'HomeClientModule', null);
function HomeModuleConfiguration(){
}

defineClass(490, 1, {}, HomeModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_25(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_25(registry){
}
;
_.registerListeners = function registerListeners_25(registry){
  $addListener(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseEvent_2_classLit, new HomePresenterListenerForComponentCaseEvent);
}
;
_.registerPresenters = function registerPresenters_25(registry){
  $registerPresenter(new HomeModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit) , Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit) , Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_25(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_presenters_HomePresenterCommand_2_classLit) , Lorg_dominokit_domino_home_client_presenters_HomePresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit) , Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_25(registry){
  $registerView(new HomeModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit) , Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_home_client_HomeModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.home.client', 'HomeModuleConfiguration', 490);
function HomeModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(585, 40, $intern_41, HomeModuleConfiguration$1);
var Lorg_dominokit_domino_home_client_HomeModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.home.client', 'HomeModuleConfiguration/1', 585);
function HomeModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(586, 41, $intern_42, HomeModuleConfiguration$2);
var Lorg_dominokit_domino_home_client_HomeModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.home.client', 'HomeModuleConfiguration/2', 586);
function HomePresenterListenerForComponentCaseEvent(){
}

defineClass(913, 1, {}, HomePresenterListenerForComponentCaseEvent);
var Lorg_dominokit_domino_home_client_listeners_HomePresenterListenerForComponentCaseEvent_2_classLit = createForClass('org.dominokit.domino.home.client.listeners', 'HomePresenterListenerForComponentCaseEvent', 913);
var Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit = createForClass('org.dominokit.domino.home.client.presenters', 'HomePresenter', 583);
var Lorg_dominokit_domino_home_client_presenters_HomePresenterCommand_2_classLit = createForClass('org.dominokit.domino.home.client.presenters', 'HomePresenterCommand', 584);
function $clinit_IconsClientModule(){
  $clinit_IconsClientModule = emptyMethod;
  LOGGER_35 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_IconsClientModule_2_classLit) , Lorg_dominokit_domino_icons_client_IconsClientModule_2_classLit.typeName));
}

var LOGGER_35;
var Lorg_dominokit_domino_icons_client_IconsClientModule_2_classLit = createForClass('org.dominokit.domino.icons.client', 'IconsClientModule', null);
function IconsModuleConfiguration(){
}

defineClass(517, 1, {}, IconsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_26(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_26(registry){
}
;
_.registerListeners = function registerListeners_26(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new IconsPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_26(registry){
  $registerPresenter(new IconsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit) , Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit) , Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_26(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_presenters_IconsPresenterCommand_2_classLit) , Lorg_dominokit_domino_icons_client_presenters_IconsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit) , Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_26(registry){
  $registerView(new IconsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit) , Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_icons_client_IconsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.icons.client', 'IconsModuleConfiguration', 517);
function IconsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(687, 40, $intern_41, IconsModuleConfiguration$1);
var Lorg_dominokit_domino_icons_client_IconsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.icons.client', 'IconsModuleConfiguration/1', 687);
function IconsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(688, 41, $intern_42, IconsModuleConfiguration$2);
var Lorg_dominokit_domino_icons_client_IconsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.icons.client', 'IconsModuleConfiguration/2', 688);
function IconsPresenterListenerForComponentsEvent(){
}

defineClass(965, 1, {}, IconsPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_icons_client_listeners_IconsPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.icons.client.listeners', 'IconsPresenterListenerForComponentsEvent', 965);
var Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit = createForClass('org.dominokit.domino.icons.client.presenters', 'IconsPresenter', 685);
var Lorg_dominokit_domino_icons_client_presenters_IconsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.icons.client.presenters', 'IconsPresenterCommand', 686);
function $clinit_InfoBoxClientModule(){
  $clinit_InfoBoxClientModule = emptyMethod;
  LOGGER_37 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_InfoBoxClientModule_2_classLit) , Lorg_dominokit_domino_infobox_client_InfoBoxClientModule_2_classLit.typeName));
}

var LOGGER_37;
var Lorg_dominokit_domino_infobox_client_InfoBoxClientModule_2_classLit = createForClass('org.dominokit.domino.infobox.client', 'InfoBoxClientModule', null);
function InfoBoxModuleConfiguration(){
}

defineClass(509, 1, {}, InfoBoxModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_27(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_27(registry){
}
;
_.registerListeners = function registerListeners_27(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new InfoBoxPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_27(registry){
  $registerPresenter(new InfoBoxModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit) , Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit) , Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_27(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenterCommand_2_classLit) , Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit) , Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_27(registry){
  $registerView(new InfoBoxModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit) , Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_infobox_client_InfoBoxModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.infobox.client', 'InfoBoxModuleConfiguration', 509);
function InfoBoxModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(655, 40, $intern_41, InfoBoxModuleConfiguration$1);
var Lorg_dominokit_domino_infobox_client_InfoBoxModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.infobox.client', 'InfoBoxModuleConfiguration/1', 655);
function InfoBoxModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(656, 41, $intern_42, InfoBoxModuleConfiguration$2);
var Lorg_dominokit_domino_infobox_client_InfoBoxModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.infobox.client', 'InfoBoxModuleConfiguration/2', 656);
function InfoBoxPresenterListenerForComponentsEvent(){
}

defineClass(949, 1, {}, InfoBoxPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_infobox_client_listeners_InfoBoxPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.infobox.client.listeners', 'InfoBoxPresenterListenerForComponentsEvent', 949);
var Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit = createForClass('org.dominokit.domino.infobox.client.presenters', 'InfoBoxPresenter', 653);
var Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenterCommand_2_classLit = createForClass('org.dominokit.domino.infobox.client.presenters', 'InfoBoxPresenterCommand', 654);
function $clinit_LabelsClientModule(){
  $clinit_LabelsClientModule = emptyMethod;
  LOGGER_38 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_LabelsClientModule_2_classLit) , Lorg_dominokit_domino_labels_client_LabelsClientModule_2_classLit.typeName));
}

var LOGGER_38;
var Lorg_dominokit_domino_labels_client_LabelsClientModule_2_classLit = createForClass('org.dominokit.domino.labels.client', 'LabelsClientModule', null);
function LabelsModuleConfiguration(){
}

defineClass(513, 1, {}, LabelsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_28(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_28(registry){
}
;
_.registerListeners = function registerListeners_28(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new LabelsPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_28(registry){
  $registerPresenter(new LabelsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit) , Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit) , Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_28(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_presenters_LabelsPresenterCommand_2_classLit) , Lorg_dominokit_domino_labels_client_presenters_LabelsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit) , Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_28(registry){
  $registerView(new LabelsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit) , Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_labels_client_LabelsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.labels.client', 'LabelsModuleConfiguration', 513);
function LabelsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(671, 40, $intern_41, LabelsModuleConfiguration$1);
var Lorg_dominokit_domino_labels_client_LabelsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.labels.client', 'LabelsModuleConfiguration/1', 671);
function LabelsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(672, 41, $intern_42, LabelsModuleConfiguration$2);
var Lorg_dominokit_domino_labels_client_LabelsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.labels.client', 'LabelsModuleConfiguration/2', 672);
function LabelsPresenterListenerForComponentsEvent(){
}

defineClass(957, 1, {}, LabelsPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_labels_client_listeners_LabelsPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.labels.client.listeners', 'LabelsPresenterListenerForComponentsEvent', 957);
var Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit = createForClass('org.dominokit.domino.labels.client.presenters', 'LabelsPresenter', 669);
var Lorg_dominokit_domino_labels_client_presenters_LabelsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.labels.client.presenters', 'LabelsPresenterCommand', 670);
function $clinit_LayoutClientModule(){
  $clinit_LayoutClientModule = emptyMethod;
  LOGGER_39 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_LayoutClientModule_2_classLit) , Lorg_dominokit_domino_layout_client_LayoutClientModule_2_classLit.typeName));
}

var LOGGER_39;
var Lorg_dominokit_domino_layout_client_LayoutClientModule_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutClientModule', null);
function LayoutModuleConfiguration(){
}

defineClass(483, 1, {}, LayoutModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_29(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_29(registry){
}
;
_.registerViews = function registerViews_29(registry){
}
;
_.registerListeners = function registerListeners_29(registry){
  $addListener(Lorg_dominokit_domino_api_shared_extension_MainDominoEvent_2_classLit, new LayoutPresenterListenerForMainDominoEvent);
}
;
_.registerPresenters = function registerPresenters_29(registry){
  $registerPresenter(new LayoutModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit) , Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit) , Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_29(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_presenters_LayoutPresenterCommand_2_classLit) , Lorg_dominokit_domino_layout_client_presenters_LayoutPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit) , Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit.canonicalName));
}
;
var Lorg_dominokit_domino_layout_client_LayoutModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutModuleConfiguration', 483);
function LayoutModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(566, 40, $intern_41, LayoutModuleConfiguration$1);
var Lorg_dominokit_domino_layout_client_LayoutModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutModuleConfiguration/1', 566);
function $clinit_LayoutUIClientModule(){
  $clinit_LayoutUIClientModule = emptyMethod;
  LOGGER_40 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_LayoutUIClientModule_2_classLit) , Lorg_dominokit_domino_layout_client_LayoutUIClientModule_2_classLit.typeName));
}

var LOGGER_40;
var Lorg_dominokit_domino_layout_client_LayoutUIClientModule_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutUIClientModule', null);
function LayoutUIModuleConfiguration(){
}

defineClass(484, 1, {}, LayoutUIModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_30(registry){
}
;
_.registerListeners = function registerListeners_30(registry){
}
;
_.registerPresenters = function registerPresenters_30(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_30(registry){
}
;
_.registerRequests = function registerRequests_30(registry){
}
;
_.registerViews = function registerViews_30(registry){
  $registerView(new LayoutUIModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit) , Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_layout_client_LayoutUIModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutUIModuleConfiguration', 484);
function LayoutUIModuleConfiguration$1($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(567, 41, $intern_42, LayoutUIModuleConfiguration$1);
var Lorg_dominokit_domino_layout_client_LayoutUIModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutUIModuleConfiguration/1', 567);
function LayoutPresenterListenerForMainDominoEvent(){
}

defineClass(901, 1, {}, LayoutPresenterListenerForMainDominoEvent);
var Lorg_dominokit_domino_layout_client_listeners_LayoutPresenterListenerForMainDominoEvent_2_classLit = createForClass('org.dominokit.domino.layout.client.listeners', 'LayoutPresenterListenerForMainDominoEvent', 901);
var Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit = createForClass('org.dominokit.domino.layout.client.presenters', 'LayoutPresenter', 277);
var Lorg_dominokit_domino_layout_shared_extension_LayoutEvent_2_classLit = createForInterface('org.dominokit.domino.layout.shared.extension', 'LayoutEvent');
var Lorg_dominokit_domino_layout_client_presenters_LayoutPresenterCommand_2_classLit = createForClass('org.dominokit.domino.layout.client.presenters', 'LayoutPresenterCommand', 565);
function $clinit_LayoutsClientModule(){
  $clinit_LayoutsClientModule = emptyMethod;
  LOGGER_41 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_layouts_client_LayoutsClientModule_2_classLit) , Lorg_dominokit_domino_layouts_client_LayoutsClientModule_2_classLit.typeName));
}

var LOGGER_41;
var Lorg_dominokit_domino_layouts_client_LayoutsClientModule_2_classLit = createForClass('org.dominokit.domino.layouts.client', 'LayoutsClientModule', null);
function LayoutsModuleConfiguration(){
}

defineClass(491, 1, {}, LayoutsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_31(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_31(registry){
}
;
_.registerViews = function registerViews_31(registry){
}
;
_.registerListeners = function registerListeners_31(registry){
  $addListener(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseEvent_2_classLit, new LayoutsPresenterListenerForComponentCaseEvent);
}
;
_.registerPresenters = function registerPresenters_31(registry){
  $registerPresenter(new LayoutsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_layouts_client_presenters_LayoutsPresenter_2_classLit) , Lorg_dominokit_domino_layouts_client_presenters_LayoutsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_layouts_client_presenters_LayoutsPresenter_2_classLit) , Lorg_dominokit_domino_layouts_client_presenters_LayoutsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_31(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_layouts_client_presenters_LayoutsPresenterCommand_2_classLit) , Lorg_dominokit_domino_layouts_client_presenters_LayoutsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_layouts_client_presenters_LayoutsPresenter_2_classLit) , Lorg_dominokit_domino_layouts_client_presenters_LayoutsPresenter_2_classLit.canonicalName));
}
;
var Lorg_dominokit_domino_layouts_client_LayoutsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.layouts.client', 'LayoutsModuleConfiguration', 491);
function LayoutsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(589, 40, $intern_41, LayoutsModuleConfiguration$1);
var Lorg_dominokit_domino_layouts_client_LayoutsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.layouts.client', 'LayoutsModuleConfiguration/1', 589);
function LayoutsPresenterListenerForComponentCaseEvent(){
}

defineClass(915, 1, {}, LayoutsPresenterListenerForComponentCaseEvent);
var Lorg_dominokit_domino_layouts_client_listeners_LayoutsPresenterListenerForComponentCaseEvent_2_classLit = createForClass('org.dominokit.domino.layouts.client.listeners', 'LayoutsPresenterListenerForComponentCaseEvent', 915);
var Lorg_dominokit_domino_layouts_client_presenters_LayoutsPresenter_2_classLit = createForClass('org.dominokit.domino.layouts.client.presenters', 'LayoutsPresenter', 587);
var Lorg_dominokit_domino_layouts_shared_extension_LayoutsEvent_2_classLit = createForInterface('org.dominokit.domino.layouts.shared.extension', 'LayoutsEvent');
var Lorg_dominokit_domino_layouts_client_presenters_LayoutsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.layouts.client.presenters', 'LayoutsPresenterCommand', 588);
function $clinit_ListsClientModule(){
  $clinit_ListsClientModule = emptyMethod;
  LOGGER_42 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_ListsClientModule_2_classLit) , Lorg_dominokit_domino_lists_client_ListsClientModule_2_classLit.typeName));
}

var LOGGER_42;
var Lorg_dominokit_domino_lists_client_ListsClientModule_2_classLit = createForClass('org.dominokit.domino.lists.client', 'ListsClientModule', null);
function ListsModuleConfiguration(){
}

defineClass(515, 1, {}, ListsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_32(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_32(registry){
}
;
_.registerListeners = function registerListeners_32(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new ListsPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_32(registry){
  $registerPresenter(new ListsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit) , Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit) , Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_32(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_presenters_ListsPresenterCommand_2_classLit) , Lorg_dominokit_domino_lists_client_presenters_ListsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit) , Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_32(registry){
  $registerView(new ListsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit) , Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_lists_client_ListsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.lists.client', 'ListsModuleConfiguration', 515);
function ListsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(679, 40, $intern_41, ListsModuleConfiguration$1);
var Lorg_dominokit_domino_lists_client_ListsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.lists.client', 'ListsModuleConfiguration/1', 679);
function ListsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(680, 41, $intern_42, ListsModuleConfiguration$2);
var Lorg_dominokit_domino_lists_client_ListsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.lists.client', 'ListsModuleConfiguration/2', 680);
function ListsPresenterListenerForComponentsEvent(){
}

defineClass(961, 1, {}, ListsPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_lists_client_listeners_ListsPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.lists.client.listeners', 'ListsPresenterListenerForComponentsEvent', 961);
var Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit = createForClass('org.dominokit.domino.lists.client.presenters', 'ListsPresenter', 677);
var Lorg_dominokit_domino_lists_client_presenters_ListsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.lists.client.presenters', 'ListsPresenterCommand', 678);
function $clinit_LoadersClientModule(){
  $clinit_LoadersClientModule = emptyMethod;
  LOGGER_43 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_LoadersClientModule_2_classLit) , Lorg_dominokit_domino_loaders_client_LoadersClientModule_2_classLit.typeName));
}

var LOGGER_43;
var Lorg_dominokit_domino_loaders_client_LoadersClientModule_2_classLit = createForClass('org.dominokit.domino.loaders.client', 'LoadersClientModule', null);
function LoadersModuleConfiguration(){
}

defineClass(516, 1, {}, LoadersModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_33(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_33(registry){
}
;
_.registerListeners = function registerListeners_33(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new LoadersPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_33(registry){
  $registerPresenter(new LoadersModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit) , Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit) , Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_33(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenterCommand_2_classLit) , Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit) , Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_33(registry){
  $registerView(new LoadersModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit) , Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_loaders_client_LoadersModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.loaders.client', 'LoadersModuleConfiguration', 516);
function LoadersModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(683, 40, $intern_41, LoadersModuleConfiguration$1);
var Lorg_dominokit_domino_loaders_client_LoadersModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.loaders.client', 'LoadersModuleConfiguration/1', 683);
function LoadersModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(684, 41, $intern_42, LoadersModuleConfiguration$2);
var Lorg_dominokit_domino_loaders_client_LoadersModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.loaders.client', 'LoadersModuleConfiguration/2', 684);
function LoadersPresenterListenerForComponentsEvent(){
}

defineClass(963, 1, {}, LoadersPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_loaders_client_listeners_LoadersPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.loaders.client.listeners', 'LoadersPresenterListenerForComponentsEvent', 963);
var Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit = createForClass('org.dominokit.domino.loaders.client.presenters', 'LoadersPresenter', 681);
var Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenterCommand_2_classLit = createForClass('org.dominokit.domino.loaders.client.presenters', 'LoadersPresenterCommand', 682);
defineClass(2687, 1, {});
var Lorg_slf4j_helpers_NamedLoggerBase_2_classLit = createForClass('org.slf4j.helpers', 'NamedLoggerBase', 2687);
defineClass(2688, 2687, {});
_.toString_0 = function toString_65(){
  return $ensureNamesAreInitialized(Lorg_dominokit_domino_logger_GWTLoggerAdapter_2_classLit) , Lorg_dominokit_domino_logger_GWTLoggerAdapter_2_classLit.typeName + '(' + this.name_0 + ')';
}
;
var Lorg_slf4j_helpers_MarkerIgnoringBase_2_classLit = createForClass('org.slf4j.helpers', 'MarkerIgnoringBase', 2688);
function $error_0(this$static, msg, t){
  $log_1(this$static, ($clinit_Level() , SEVERE), msg, t);
}

function $info_0(this$static, msg){
  $log_1(this$static, ($clinit_Level() , INFO), msg, null);
}

function $log_1(this$static, level, msg, t){
  $isLoggable(this$static.logger, level) && $log_0(this$static.logger, level, msg, t);
}

function GWTLoggerAdapter(name_0){
  this.name_0 = name_0;
  this.logger = getLogger(name_0);
}

defineClass(32, 2688, {}, GWTLoggerAdapter);
var Lorg_dominokit_domino_logger_GWTLoggerAdapter_2_classLit = createForClass('org.dominokit.domino.logger', 'GWTLoggerAdapter', 32);
function $clinit_MediaClientModule(){
  $clinit_MediaClientModule = emptyMethod;
  LOGGER_44 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_MediaClientModule_2_classLit) , Lorg_dominokit_domino_media_client_MediaClientModule_2_classLit.typeName));
}

var LOGGER_44;
var Lorg_dominokit_domino_media_client_MediaClientModule_2_classLit = createForClass('org.dominokit.domino.media.client', 'MediaClientModule', null);
function MediaModuleConfiguration(){
}

defineClass(521, 1, {}, MediaModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_34(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_34(registry){
}
;
_.registerListeners = function registerListeners_34(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new MediaPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_34(registry){
  $registerPresenter(new MediaModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit) , Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit) , Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_34(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_presenters_MediaPresenterCommand_2_classLit) , Lorg_dominokit_domino_media_client_presenters_MediaPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit) , Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_34(registry){
  $registerView(new MediaModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit) , Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_media_client_MediaModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.media.client', 'MediaModuleConfiguration', 521);
function MediaModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(703, 40, $intern_41, MediaModuleConfiguration$1);
var Lorg_dominokit_domino_media_client_MediaModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.media.client', 'MediaModuleConfiguration/1', 703);
function MediaModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(704, 41, $intern_42, MediaModuleConfiguration$2);
var Lorg_dominokit_domino_media_client_MediaModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.media.client', 'MediaModuleConfiguration/2', 704);
function MediaPresenterListenerForComponentsEvent(){
}

defineClass(973, 1, {}, MediaPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_media_client_listeners_MediaPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.media.client.listeners', 'MediaPresenterListenerForComponentsEvent', 973);
var Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit = createForClass('org.dominokit.domino.media.client.presenters', 'MediaPresenter', 701);
var Lorg_dominokit_domino_media_client_presenters_MediaPresenterCommand_2_classLit = createForClass('org.dominokit.domino.media.client.presenters', 'MediaPresenterCommand', 702);
function $clinit_MenuClientModule(){
  $clinit_MenuClientModule = emptyMethod;
  LOGGER_45 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_MenuClientModule_2_classLit) , Lorg_dominokit_domino_menu_client_MenuClientModule_2_classLit.typeName));
}

var LOGGER_45;
var Lorg_dominokit_domino_menu_client_MenuClientModule_2_classLit = createForClass('org.dominokit.domino.menu.client', 'MenuClientModule', null);
function MenuModuleConfiguration(){
}

defineClass(487, 1, {}, MenuModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_35(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_35(registry){
}
;
_.registerListeners = function registerListeners_35(registry){
  $addListener(Lorg_dominokit_domino_layout_shared_extension_LayoutEvent_2_classLit, new MenuPresenterListenerForLayoutEvent);
}
;
_.registerPresenters = function registerPresenters_35(registry){
  $registerPresenter(new MenuModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit) , Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit) , Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_35(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_presenters_MenuPresenterCommand_2_classLit) , Lorg_dominokit_domino_menu_client_presenters_MenuPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit) , Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_35(registry){
  $registerView(new MenuModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit) , Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_menu_client_MenuModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.menu.client', 'MenuModuleConfiguration', 487);
function MenuModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(578, 40, $intern_41, MenuModuleConfiguration$1);
var Lorg_dominokit_domino_menu_client_MenuModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.menu.client', 'MenuModuleConfiguration/1', 578);
function MenuModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(579, 41, $intern_42, MenuModuleConfiguration$2);
var Lorg_dominokit_domino_menu_client_MenuModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.menu.client', 'MenuModuleConfiguration/2', 579);
function MenuPresenterListenerForLayoutEvent(){
}

defineClass(907, 1, {}, MenuPresenterListenerForLayoutEvent);
var Lorg_dominokit_domino_menu_client_listeners_MenuPresenterListenerForLayoutEvent_2_classLit = createForClass('org.dominokit.domino.menu.client.listeners', 'MenuPresenterListenerForLayoutEvent', 907);
var Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit = createForClass('org.dominokit.domino.menu.client.presenters', 'MenuPresenter', 576);
var Lorg_dominokit_domino_menu_shared_extension_MenuEvent_2_classLit = createForInterface('org.dominokit.domino.menu.shared.extension', 'MenuEvent');
var Lorg_dominokit_domino_menu_client_presenters_MenuPresenterCommand_2_classLit = createForClass('org.dominokit.domino.menu.client.presenters', 'MenuPresenterCommand', 577);
function $clinit_ModalsClientModule(){
  $clinit_ModalsClientModule = emptyMethod;
  LOGGER_46 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_ModalsClientModule_2_classLit) , Lorg_dominokit_domino_modals_client_ModalsClientModule_2_classLit.typeName));
}

var LOGGER_46;
var Lorg_dominokit_domino_modals_client_ModalsClientModule_2_classLit = createForClass('org.dominokit.domino.modals.client', 'ModalsClientModule', null);
function ModalsModuleConfiguration(){
}

defineClass(514, 1, {}, ModalsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_36(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_36(registry){
}
;
_.registerListeners = function registerListeners_36(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new ModalsPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_36(registry){
  $registerPresenter(new ModalsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit) , Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit) , Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_36(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_presenters_ModalsPresenterCommand_2_classLit) , Lorg_dominokit_domino_modals_client_presenters_ModalsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit) , Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_36(registry){
  $registerView(new ModalsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit) , Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_modals_client_ModalsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.modals.client', 'ModalsModuleConfiguration', 514);
function ModalsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(675, 40, $intern_41, ModalsModuleConfiguration$1);
var Lorg_dominokit_domino_modals_client_ModalsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.modals.client', 'ModalsModuleConfiguration/1', 675);
function ModalsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(676, 41, $intern_42, ModalsModuleConfiguration$2);
var Lorg_dominokit_domino_modals_client_ModalsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.modals.client', 'ModalsModuleConfiguration/2', 676);
function ModalsPresenterListenerForComponentsEvent(){
}

defineClass(959, 1, {}, ModalsPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_modals_client_listeners_ModalsPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.modals.client.listeners', 'ModalsPresenterListenerForComponentsEvent', 959);
var Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit = createForClass('org.dominokit.domino.modals.client.presenters', 'ModalsPresenter', 673);
var Lorg_dominokit_domino_modals_client_presenters_ModalsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.modals.client.presenters', 'ModalsPresenterCommand', 674);
function $clinit_NotificationsClientModule(){
  $clinit_NotificationsClientModule = emptyMethod;
  LOGGER_47 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_NotificationsClientModule_2_classLit) , Lorg_dominokit_domino_notifications_client_NotificationsClientModule_2_classLit.typeName));
}

var LOGGER_47;
var Lorg_dominokit_domino_notifications_client_NotificationsClientModule_2_classLit = createForClass('org.dominokit.domino.notifications.client', 'NotificationsClientModule', null);
function NotificationsModuleConfiguration(){
}

defineClass(520, 1, {}, NotificationsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_37(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_37(registry){
}
;
_.registerListeners = function registerListeners_37(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new NotificationsPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_37(registry){
  $registerPresenter(new NotificationsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit) , Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit) , Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_37(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenterCommand_2_classLit) , Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit) , Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_37(registry){
  $registerView(new NotificationsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit) , Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_notifications_client_NotificationsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.notifications.client', 'NotificationsModuleConfiguration', 520);
function NotificationsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(699, 40, $intern_41, NotificationsModuleConfiguration$1);
var Lorg_dominokit_domino_notifications_client_NotificationsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.notifications.client', 'NotificationsModuleConfiguration/1', 699);
function NotificationsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(700, 41, $intern_42, NotificationsModuleConfiguration$2);
var Lorg_dominokit_domino_notifications_client_NotificationsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.notifications.client', 'NotificationsModuleConfiguration/2', 700);
function NotificationsPresenterListenerForComponentsEvent(){
}

defineClass(971, 1, {}, NotificationsPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_notifications_client_listeners_NotificationsPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.notifications.client.listeners', 'NotificationsPresenterListenerForComponentsEvent', 971);
var Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit = createForClass('org.dominokit.domino.notifications.client.presenters', 'NotificationsPresenter', 697);
var Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.notifications.client.presenters', 'NotificationsPresenterCommand', 698);
function $clinit_PaginationClientModule(){
  $clinit_PaginationClientModule = emptyMethod;
  LOGGER_48 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_PaginationClientModule_2_classLit) , Lorg_dominokit_domino_pagination_client_PaginationClientModule_2_classLit.typeName));
}

var LOGGER_48;
var Lorg_dominokit_domino_pagination_client_PaginationClientModule_2_classLit = createForClass('org.dominokit.domino.pagination.client', 'PaginationClientModule', null);
function PaginationModuleConfiguration(){
}

defineClass(522, 1, {}, PaginationModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_38(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_38(registry){
}
;
_.registerListeners = function registerListeners_38(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new PaginationPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_38(registry){
  $registerPresenter(new PaginationModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit) , Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit) , Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_38(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenterCommand_2_classLit) , Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit) , Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_38(registry){
  $registerView(new PaginationModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit) , Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_pagination_client_PaginationModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.pagination.client', 'PaginationModuleConfiguration', 522);
function PaginationModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(707, 40, $intern_41, PaginationModuleConfiguration$1);
var Lorg_dominokit_domino_pagination_client_PaginationModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.pagination.client', 'PaginationModuleConfiguration/1', 707);
function PaginationModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(708, 41, $intern_42, PaginationModuleConfiguration$2);
var Lorg_dominokit_domino_pagination_client_PaginationModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.pagination.client', 'PaginationModuleConfiguration/2', 708);
function PaginationPresenterListenerForComponentsEvent(){
}

defineClass(975, 1, {}, PaginationPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_pagination_client_listeners_PaginationPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.pagination.client.listeners', 'PaginationPresenterListenerForComponentsEvent', 975);
var Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit = createForClass('org.dominokit.domino.pagination.client.presenters', 'PaginationPresenter', 705);
var Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenterCommand_2_classLit = createForClass('org.dominokit.domino.pagination.client.presenters', 'PaginationPresenterCommand', 706);
function $clinit_PopoverClientModule(){
  $clinit_PopoverClientModule = emptyMethod;
  LOGGER_49 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_PopoverClientModule_2_classLit) , Lorg_dominokit_domino_popover_client_PopoverClientModule_2_classLit.typeName));
}

var LOGGER_49;
var Lorg_dominokit_domino_popover_client_PopoverClientModule_2_classLit = createForClass('org.dominokit.domino.popover.client', 'PopoverClientModule', null);
function PopoverModuleConfiguration(){
}

defineClass(528, 1, {}, PopoverModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_39(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_39(registry){
}
;
_.registerListeners = function registerListeners_39(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new PopoverPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_39(registry){
  $registerPresenter(new PopoverModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit) , Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit) , Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_39(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_presenters_PopoverPresenterCommand_2_classLit) , Lorg_dominokit_domino_popover_client_presenters_PopoverPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit) , Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_39(registry){
  $registerView(new PopoverModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit) , Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_popover_client_PopoverModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.popover.client', 'PopoverModuleConfiguration', 528);
function PopoverModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(731, 40, $intern_41, PopoverModuleConfiguration$1);
var Lorg_dominokit_domino_popover_client_PopoverModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.popover.client', 'PopoverModuleConfiguration/1', 731);
function PopoverModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(732, 41, $intern_42, PopoverModuleConfiguration$2);
var Lorg_dominokit_domino_popover_client_PopoverModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.popover.client', 'PopoverModuleConfiguration/2', 732);
function PopoverPresenterListenerForComponentsEvent(){
}

defineClass(987, 1, {}, PopoverPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_popover_client_listeners_PopoverPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.popover.client.listeners', 'PopoverPresenterListenerForComponentsEvent', 987);
var Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit = createForClass('org.dominokit.domino.popover.client.presenters', 'PopoverPresenter', 729);
var Lorg_dominokit_domino_popover_client_presenters_PopoverPresenterCommand_2_classLit = createForClass('org.dominokit.domino.popover.client.presenters', 'PopoverPresenterCommand', 730);
function $clinit_PreloadersClientModule(){
  $clinit_PreloadersClientModule = emptyMethod;
  LOGGER_50 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_PreloadersClientModule_2_classLit) , Lorg_dominokit_domino_preloaders_client_PreloadersClientModule_2_classLit.typeName));
}

var LOGGER_50;
var Lorg_dominokit_domino_preloaders_client_PreloadersClientModule_2_classLit = createForClass('org.dominokit.domino.preloaders.client', 'PreloadersClientModule', null);
function PreloadersModuleConfiguration(){
}

defineClass(523, 1, {}, PreloadersModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_40(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_40(registry){
}
;
_.registerListeners = function registerListeners_40(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new PreloadersPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_40(registry){
  $registerPresenter(new PreloadersModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit) , Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit) , Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_40(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenterCommand_2_classLit) , Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit) , Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_40(registry){
  $registerView(new PreloadersModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit) , Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_preloaders_client_PreloadersModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.preloaders.client', 'PreloadersModuleConfiguration', 523);
function PreloadersModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(711, 40, $intern_41, PreloadersModuleConfiguration$1);
var Lorg_dominokit_domino_preloaders_client_PreloadersModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.preloaders.client', 'PreloadersModuleConfiguration/1', 711);
function PreloadersModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(712, 41, $intern_42, PreloadersModuleConfiguration$2);
var Lorg_dominokit_domino_preloaders_client_PreloadersModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.preloaders.client', 'PreloadersModuleConfiguration/2', 712);
function PreloadersPresenterListenerForComponentsEvent(){
}

defineClass(977, 1, {}, PreloadersPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_preloaders_client_listeners_PreloadersPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.preloaders.client.listeners', 'PreloadersPresenterListenerForComponentsEvent', 977);
var Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit = createForClass('org.dominokit.domino.preloaders.client.presenters', 'PreloadersPresenter', 709);
var Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenterCommand_2_classLit = createForClass('org.dominokit.domino.preloaders.client.presenters', 'PreloadersPresenterCommand', 710);
function $clinit_ProfileClientModule(){
  $clinit_ProfileClientModule = emptyMethod;
  LOGGER_51 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_ProfileClientModule_2_classLit) , Lorg_dominokit_domino_profile_client_ProfileClientModule_2_classLit.typeName));
}

var LOGGER_51;
var Lorg_dominokit_domino_profile_client_ProfileClientModule_2_classLit = createForClass('org.dominokit.domino.profile.client', 'ProfileClientModule', null);
function ProfileModuleConfiguration(){
}

defineClass(486, 1, {}, ProfileModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_41(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_41(registry){
}
;
_.registerListeners = function registerListeners_41(registry){
  $addListener(Lorg_dominokit_domino_layout_shared_extension_LayoutEvent_2_classLit, new ProfilePresenterListenerForLayoutEvent);
}
;
_.registerPresenters = function registerPresenters_41(registry){
  $registerPresenter(new ProfileModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit) , Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit) , Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_41(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_presenters_ProfilePresenterCommand_2_classLit) , Lorg_dominokit_domino_profile_client_presenters_ProfilePresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit) , Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_41(registry){
  $registerView(new ProfileModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit) , Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_profile_client_ProfileModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.profile.client', 'ProfileModuleConfiguration', 486);
function ProfileModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(574, 40, $intern_41, ProfileModuleConfiguration$1);
var Lorg_dominokit_domino_profile_client_ProfileModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.profile.client', 'ProfileModuleConfiguration/1', 574);
function ProfileModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(575, 41, $intern_42, ProfileModuleConfiguration$2);
var Lorg_dominokit_domino_profile_client_ProfileModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.profile.client', 'ProfileModuleConfiguration/2', 575);
function ProfilePresenterListenerForLayoutEvent(){
}

defineClass(905, 1, {}, ProfilePresenterListenerForLayoutEvent);
var Lorg_dominokit_domino_profile_client_listeners_ProfilePresenterListenerForLayoutEvent_2_classLit = createForClass('org.dominokit.domino.profile.client.listeners', 'ProfilePresenterListenerForLayoutEvent', 905);
var Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit = createForClass('org.dominokit.domino.profile.client.presenters', 'ProfilePresenter', 572);
var Lorg_dominokit_domino_profile_client_presenters_ProfilePresenterCommand_2_classLit = createForClass('org.dominokit.domino.profile.client.presenters', 'ProfilePresenterCommand', 573);
function $clinit_ProgressClientModule(){
  $clinit_ProgressClientModule = emptyMethod;
  LOGGER_52 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_ProgressClientModule_2_classLit) , Lorg_dominokit_domino_progress_client_ProgressClientModule_2_classLit.typeName));
}

var LOGGER_52;
var Lorg_dominokit_domino_progress_client_ProgressClientModule_2_classLit = createForClass('org.dominokit.domino.progress.client', 'ProgressClientModule', null);
function ProgressModuleConfiguration(){
}

defineClass(524, 1, {}, ProgressModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_42(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_42(registry){
}
;
_.registerListeners = function registerListeners_42(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new ProgressPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_42(registry){
  $registerPresenter(new ProgressModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit) , Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit) , Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_42(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_presenters_ProgressPresenterCommand_2_classLit) , Lorg_dominokit_domino_progress_client_presenters_ProgressPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit) , Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_42(registry){
  $registerView(new ProgressModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit) , Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_progress_client_ProgressModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.progress.client', 'ProgressModuleConfiguration', 524);
function ProgressModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(715, 40, $intern_41, ProgressModuleConfiguration$1);
var Lorg_dominokit_domino_progress_client_ProgressModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.progress.client', 'ProgressModuleConfiguration/1', 715);
function ProgressModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(716, 41, $intern_42, ProgressModuleConfiguration$2);
var Lorg_dominokit_domino_progress_client_ProgressModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.progress.client', 'ProgressModuleConfiguration/2', 716);
function ProgressPresenterListenerForComponentsEvent(){
}

defineClass(979, 1, {}, ProgressPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_progress_client_listeners_ProgressPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.progress.client.listeners', 'ProgressPresenterListenerForComponentsEvent', 979);
var Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit = createForClass('org.dominokit.domino.progress.client.presenters', 'ProgressPresenter', 713);
var Lorg_dominokit_domino_progress_client_presenters_ProgressPresenterCommand_2_classLit = createForClass('org.dominokit.domino.progress.client.presenters', 'ProgressPresenterCommand', 714);
function $clinit_SlidersClientModule(){
  $clinit_SlidersClientModule = emptyMethod;
  LOGGER_53 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_sliders_client_SlidersClientModule_2_classLit) , Lorg_dominokit_domino_sliders_client_SlidersClientModule_2_classLit.typeName));
}

var LOGGER_53;
var Lorg_dominokit_domino_sliders_client_SlidersClientModule_2_classLit = createForClass('org.dominokit.domino.sliders.client', 'SlidersClientModule', null);
function SlidersModuleConfiguration(){
}

defineClass(532, 1, {}, SlidersModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_43(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_43(registry){
}
;
_.registerListeners = function registerListeners_43(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new SlidersPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_43(registry){
  $registerPresenter(new SlidersModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenter_2_classLit) , Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenter_2_classLit) , Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_43(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenterCommand_2_classLit) , Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenter_2_classLit) , Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_43(registry){
  $registerView(new SlidersModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenter_2_classLit) , Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_sliders_client_SlidersModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.sliders.client', 'SlidersModuleConfiguration', 532);
function SlidersModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(747, 40, $intern_41, SlidersModuleConfiguration$1);
var Lorg_dominokit_domino_sliders_client_SlidersModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.sliders.client', 'SlidersModuleConfiguration/1', 747);
function SlidersModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(748, 41, $intern_42, SlidersModuleConfiguration$2);
var Lorg_dominokit_domino_sliders_client_SlidersModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.sliders.client', 'SlidersModuleConfiguration/2', 748);
function SlidersPresenterListenerForComponentsEvent(){
}

defineClass(995, 1, {}, SlidersPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_sliders_client_listeners_SlidersPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.sliders.client.listeners', 'SlidersPresenterListenerForComponentsEvent', 995);
var Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenter_2_classLit = createForClass('org.dominokit.domino.sliders.client.presenters', 'SlidersPresenter', 745);
var Lorg_dominokit_domino_sliders_client_presenters_SlidersPresenterCommand_2_classLit = createForClass('org.dominokit.domino.sliders.client.presenters', 'SlidersPresenterCommand', 746);
function $clinit_SplitPanelClientModule(){
  $clinit_SplitPanelClientModule = emptyMethod;
  LOGGER_54 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_splitPanel_client_SplitPanelClientModule_2_classLit) , Lorg_dominokit_domino_splitPanel_client_SplitPanelClientModule_2_classLit.typeName));
}

var LOGGER_54;
var Lorg_dominokit_domino_splitPanel_client_SplitPanelClientModule_2_classLit = createForClass('org.dominokit.domino.splitPanel.client', 'SplitPanelClientModule', null);
function SplitPanelModuleConfiguration(){
}

defineClass(536, 1, {}, SplitPanelModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_44(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_44(registry){
}
;
_.registerListeners = function registerListeners_44(registry){
  $addListener(Lorg_dominokit_domino_layouts_shared_extension_LayoutsEvent_2_classLit, new SplitPanelPresenterListenerForLayoutsEvent);
}
;
_.registerPresenters = function registerPresenters_44(registry){
  $registerPresenter(new SplitPanelModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenter_2_classLit) , Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenter_2_classLit) , Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_44(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenterCommand_2_classLit) , Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenter_2_classLit) , Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_44(registry){
  $registerView(new SplitPanelModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenter_2_classLit) , Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_splitPanel_client_SplitPanelModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.splitPanel.client', 'SplitPanelModuleConfiguration', 536);
function SplitPanelModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(763, 40, $intern_41, SplitPanelModuleConfiguration$1);
var Lorg_dominokit_domino_splitPanel_client_SplitPanelModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.splitPanel.client', 'SplitPanelModuleConfiguration/1', 763);
function SplitPanelModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(764, 41, $intern_42, SplitPanelModuleConfiguration$2);
var Lorg_dominokit_domino_splitPanel_client_SplitPanelModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.splitPanel.client', 'SplitPanelModuleConfiguration/2', 764);
function SplitPanelPresenterListenerForLayoutsEvent(){
}

defineClass(1003, 1, {}, SplitPanelPresenterListenerForLayoutsEvent);
var Lorg_dominokit_domino_splitPanel_client_listeners_SplitPanelPresenterListenerForLayoutsEvent_2_classLit = createForClass('org.dominokit.domino.splitPanel.client.listeners', 'SplitPanelPresenterListenerForLayoutsEvent', 1003);
var Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenter_2_classLit = createForClass('org.dominokit.domino.splitPanel.client.presenters', 'SplitPanelPresenter', 761);
var Lorg_dominokit_domino_splitPanel_client_presenters_SplitPanelPresenterCommand_2_classLit = createForClass('org.dominokit.domino.splitPanel.client.presenters', 'SplitPanelPresenterCommand', 762);
function $clinit_SteppersClientModule(){
  $clinit_SteppersClientModule = emptyMethod;
  LOGGER_55 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_steppers_client_SteppersClientModule_2_classLit) , Lorg_dominokit_domino_steppers_client_SteppersClientModule_2_classLit.typeName));
}

var LOGGER_55;
var Lorg_dominokit_domino_steppers_client_SteppersClientModule_2_classLit = createForClass('org.dominokit.domino.steppers.client', 'SteppersClientModule', null);
function SteppersModuleConfiguration(){
}

defineClass(530, 1, {}, SteppersModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_45(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_45(registry){
}
;
_.registerListeners = function registerListeners_45(registry){
  $addListener(Lorg_dominokit_domino_forms_shared_extension_FormsEvent_2_classLit, new SteppersPresenterListenerForFormsEvent);
}
;
_.registerPresenters = function registerPresenters_45(registry){
  $registerPresenter(new SteppersModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenter_2_classLit) , Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenter_2_classLit) , Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_45(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenterCommand_2_classLit) , Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenter_2_classLit) , Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_45(registry){
  $registerView(new SteppersModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenter_2_classLit) , Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_steppers_client_SteppersModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.steppers.client', 'SteppersModuleConfiguration', 530);
function SteppersModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(739, 40, $intern_41, SteppersModuleConfiguration$1);
var Lorg_dominokit_domino_steppers_client_SteppersModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.steppers.client', 'SteppersModuleConfiguration/1', 739);
function SteppersModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(740, 41, $intern_42, SteppersModuleConfiguration$2);
var Lorg_dominokit_domino_steppers_client_SteppersModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.steppers.client', 'SteppersModuleConfiguration/2', 740);
function SteppersPresenterListenerForFormsEvent(){
}

defineClass(991, 1, {}, SteppersPresenterListenerForFormsEvent);
var Lorg_dominokit_domino_steppers_client_listeners_SteppersPresenterListenerForFormsEvent_2_classLit = createForClass('org.dominokit.domino.steppers.client.listeners', 'SteppersPresenterListenerForFormsEvent', 991);
var Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenter_2_classLit = createForClass('org.dominokit.domino.steppers.client.presenters', 'SteppersPresenter', 737);
var Lorg_dominokit_domino_steppers_client_presenters_SteppersPresenterCommand_2_classLit = createForClass('org.dominokit.domino.steppers.client.presenters', 'SteppersPresenterCommand', 738);
function $clinit_TabsClientModule(){
  $clinit_TabsClientModule = emptyMethod;
  LOGGER_56 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_TabsClientModule_2_classLit) , Lorg_dominokit_domino_tabs_client_TabsClientModule_2_classLit.typeName));
}

var LOGGER_56;
var Lorg_dominokit_domino_tabs_client_TabsClientModule_2_classLit = createForClass('org.dominokit.domino.tabs.client', 'TabsClientModule', null);
function TabsModuleConfiguration(){
}

defineClass(525, 1, {}, TabsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_46(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_46(registry){
}
;
_.registerListeners = function registerListeners_46(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new TabsPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_46(registry){
  $registerPresenter(new TabsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit) , Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit) , Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_46(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_presenters_TabsPresenterCommand_2_classLit) , Lorg_dominokit_domino_tabs_client_presenters_TabsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit) , Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_46(registry){
  $registerView(new TabsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit) , Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_tabs_client_TabsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.tabs.client', 'TabsModuleConfiguration', 525);
function TabsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(719, 40, $intern_41, TabsModuleConfiguration$1);
var Lorg_dominokit_domino_tabs_client_TabsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.tabs.client', 'TabsModuleConfiguration/1', 719);
function TabsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(720, 41, $intern_42, TabsModuleConfiguration$2);
var Lorg_dominokit_domino_tabs_client_TabsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.tabs.client', 'TabsModuleConfiguration/2', 720);
function TabsPresenterListenerForComponentsEvent(){
}

defineClass(981, 1, {}, TabsPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_tabs_client_listeners_TabsPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.tabs.client.listeners', 'TabsPresenterListenerForComponentsEvent', 981);
var Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit = createForClass('org.dominokit.domino.tabs.client.presenters', 'TabsPresenter', 717);
var Lorg_dominokit_domino_tabs_client_presenters_TabsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.tabs.client.presenters', 'TabsPresenterCommand', 718);
function $clinit_ThemesClientModule(){
  $clinit_ThemesClientModule = emptyMethod;
  LOGGER_57 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_ThemesClientModule_2_classLit) , Lorg_dominokit_domino_themes_client_ThemesClientModule_2_classLit.typeName));
}

var LOGGER_57;
var Lorg_dominokit_domino_themes_client_ThemesClientModule_2_classLit = createForClass('org.dominokit.domino.themes.client', 'ThemesClientModule', null);
function ThemesModuleConfiguration(){
}

defineClass(485, 1, {}, ThemesModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_47(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_47(registry){
}
;
_.registerListeners = function registerListeners_47(registry){
  $addListener(Lorg_dominokit_domino_layout_shared_extension_LayoutEvent_2_classLit, new ThemesPresenterListenerForLayoutEvent);
}
;
_.registerPresenters = function registerPresenters_47(registry){
  $registerPresenter(new ThemesModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit) , Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit) , Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_47(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_presenters_ThemesPresenterCommand_2_classLit) , Lorg_dominokit_domino_themes_client_presenters_ThemesPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit) , Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_47(registry){
  $registerView(new ThemesModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit) , Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_themes_client_ThemesModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.themes.client', 'ThemesModuleConfiguration', 485);
function ThemesModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(570, 40, $intern_41, ThemesModuleConfiguration$1);
var Lorg_dominokit_domino_themes_client_ThemesModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.themes.client', 'ThemesModuleConfiguration/1', 570);
function ThemesModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(571, 41, $intern_42, ThemesModuleConfiguration$2);
var Lorg_dominokit_domino_themes_client_ThemesModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.themes.client', 'ThemesModuleConfiguration/2', 571);
function ThemesPresenterListenerForLayoutEvent(){
}

defineClass(903, 1, {}, ThemesPresenterListenerForLayoutEvent);
var Lorg_dominokit_domino_themes_client_listeners_ThemesPresenterListenerForLayoutEvent_2_classLit = createForClass('org.dominokit.domino.themes.client.listeners', 'ThemesPresenterListenerForLayoutEvent', 903);
var Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit = createForClass('org.dominokit.domino.themes.client.presenters', 'ThemesPresenter', 568);
var Lorg_dominokit_domino_themes_client_presenters_ThemesPresenterCommand_2_classLit = createForClass('org.dominokit.domino.themes.client.presenters', 'ThemesPresenterCommand', 569);
function $clinit_ThumbnailsClientModule(){
  $clinit_ThumbnailsClientModule = emptyMethod;
  LOGGER_58 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_ThumbnailsClientModule_2_classLit) , Lorg_dominokit_domino_thumbnails_client_ThumbnailsClientModule_2_classLit.typeName));
}

var LOGGER_58;
var Lorg_dominokit_domino_thumbnails_client_ThumbnailsClientModule_2_classLit = createForClass('org.dominokit.domino.thumbnails.client', 'ThumbnailsClientModule', null);
function ThumbnailsModuleConfiguration(){
}

defineClass(526, 1, {}, ThumbnailsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_48(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_48(registry){
}
;
_.registerListeners = function registerListeners_48(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new ThumbnailsPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_48(registry){
  $registerPresenter(new ThumbnailsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit) , Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit) , Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_48(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenterCommand_2_classLit) , Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit) , Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_48(registry){
  $registerView(new ThumbnailsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit) , Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_thumbnails_client_ThumbnailsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.thumbnails.client', 'ThumbnailsModuleConfiguration', 526);
function ThumbnailsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(723, 40, $intern_41, ThumbnailsModuleConfiguration$1);
var Lorg_dominokit_domino_thumbnails_client_ThumbnailsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.thumbnails.client', 'ThumbnailsModuleConfiguration/1', 723);
function ThumbnailsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(724, 41, $intern_42, ThumbnailsModuleConfiguration$2);
var Lorg_dominokit_domino_thumbnails_client_ThumbnailsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.thumbnails.client', 'ThumbnailsModuleConfiguration/2', 724);
function ThumbnailsPresenterListenerForComponentsEvent(){
}

defineClass(983, 1, {}, ThumbnailsPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_thumbnails_client_listeners_ThumbnailsPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.thumbnails.client.listeners', 'ThumbnailsPresenterListenerForComponentsEvent', 983);
var Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit = createForClass('org.dominokit.domino.thumbnails.client.presenters', 'ThumbnailsPresenter', 721);
var Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.thumbnails.client.presenters', 'ThumbnailsPresenterCommand', 722);
function $clinit_TimePickerClientModule(){
  $clinit_TimePickerClientModule = emptyMethod;
  LOGGER_59 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_TimePickerClientModule_2_classLit) , Lorg_dominokit_domino_timepicker_client_TimePickerClientModule_2_classLit.typeName));
}

var LOGGER_59;
var Lorg_dominokit_domino_timepicker_client_TimePickerClientModule_2_classLit = createForClass('org.dominokit.domino.timepicker.client', 'TimePickerClientModule', null);
function TimePickerModuleConfiguration(){
}

defineClass(503, 1, {}, TimePickerModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_49(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_49(registry){
}
;
_.registerListeners = function registerListeners_49(registry){
  $addListener(Lorg_dominokit_domino_forms_shared_extension_FormsEvent_2_classLit, new TimePickerPresenterListenerForFormsEvent);
}
;
_.registerPresenters = function registerPresenters_49(registry){
  $registerPresenter(new TimePickerModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit) , Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit) , Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_49(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenterCommand_2_classLit) , Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit) , Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_49(registry){
  $registerView(new TimePickerModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit) , Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_timepicker_client_TimePickerModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.timepicker.client', 'TimePickerModuleConfiguration', 503);
function TimePickerModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(631, 40, $intern_41, TimePickerModuleConfiguration$1);
var Lorg_dominokit_domino_timepicker_client_TimePickerModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.timepicker.client', 'TimePickerModuleConfiguration/1', 631);
function TimePickerModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(632, 41, $intern_42, TimePickerModuleConfiguration$2);
var Lorg_dominokit_domino_timepicker_client_TimePickerModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.timepicker.client', 'TimePickerModuleConfiguration/2', 632);
function TimePickerPresenterListenerForFormsEvent(){
}

defineClass(937, 1, {}, TimePickerPresenterListenerForFormsEvent);
var Lorg_dominokit_domino_timepicker_client_listeners_TimePickerPresenterListenerForFormsEvent_2_classLit = createForClass('org.dominokit.domino.timepicker.client.listeners', 'TimePickerPresenterListenerForFormsEvent', 937);
var Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit = createForClass('org.dominokit.domino.timepicker.client.presenters', 'TimePickerPresenter', 629);
var Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenterCommand_2_classLit = createForClass('org.dominokit.domino.timepicker.client.presenters', 'TimePickerPresenterCommand', 630);
function $clinit_TreeClientModule(){
  $clinit_TreeClientModule = emptyMethod;
  LOGGER_60 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_tree_client_TreeClientModule_2_classLit) , Lorg_dominokit_domino_tree_client_TreeClientModule_2_classLit.typeName));
}

var LOGGER_60;
var Lorg_dominokit_domino_tree_client_TreeClientModule_2_classLit = createForClass('org.dominokit.domino.tree.client', 'TreeClientModule', null);
function TreeModuleConfiguration(){
}

defineClass(534, 1, {}, TreeModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_50(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_50(registry){
}
;
_.registerListeners = function registerListeners_50(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new TreePresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_50(registry){
  $registerPresenter(new TreeModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_tree_client_presenters_TreePresenter_2_classLit) , Lorg_dominokit_domino_tree_client_presenters_TreePresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_tree_client_presenters_TreePresenter_2_classLit) , Lorg_dominokit_domino_tree_client_presenters_TreePresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_50(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_tree_client_presenters_TreePresenterCommand_2_classLit) , Lorg_dominokit_domino_tree_client_presenters_TreePresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_tree_client_presenters_TreePresenter_2_classLit) , Lorg_dominokit_domino_tree_client_presenters_TreePresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_50(registry){
  $registerView(new TreeModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_tree_client_presenters_TreePresenter_2_classLit) , Lorg_dominokit_domino_tree_client_presenters_TreePresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_tree_client_TreeModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.tree.client', 'TreeModuleConfiguration', 534);
function TreeModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(755, 40, $intern_41, TreeModuleConfiguration$1);
var Lorg_dominokit_domino_tree_client_TreeModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.tree.client', 'TreeModuleConfiguration/1', 755);
function TreeModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(756, 41, $intern_42, TreeModuleConfiguration$2);
var Lorg_dominokit_domino_tree_client_TreeModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.tree.client', 'TreeModuleConfiguration/2', 756);
function TreePresenterListenerForComponentsEvent(){
}

defineClass(999, 1, {}, TreePresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_tree_client_listeners_TreePresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.tree.client.listeners', 'TreePresenterListenerForComponentsEvent', 999);
var Lorg_dominokit_domino_tree_client_presenters_TreePresenter_2_classLit = createForClass('org.dominokit.domino.tree.client.presenters', 'TreePresenter', 753);
var Lorg_dominokit_domino_tree_client_presenters_TreePresenterCommand_2_classLit = createForClass('org.dominokit.domino.tree.client.presenters', 'TreePresenterCommand', 754);
function $clinit_TypographyClientModule(){
  $clinit_TypographyClientModule = emptyMethod;
  LOGGER_61 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_TypographyClientModule_2_classLit) , Lorg_dominokit_domino_typography_client_TypographyClientModule_2_classLit.typeName));
}

var LOGGER_61;
var Lorg_dominokit_domino_typography_client_TypographyClientModule_2_classLit = createForClass('org.dominokit.domino.typography.client', 'TypographyClientModule', null);
function TypographyModuleConfiguration(){
}

defineClass(504, 1, {}, TypographyModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_51(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_51(registry){
}
;
_.registerListeners = function registerListeners_51(registry){
  $addListener(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseEvent_2_classLit, new TypographyPresenterListenerForComponentCaseEvent);
}
;
_.registerPresenters = function registerPresenters_51(registry){
  $registerPresenter(new TypographyModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit) , Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit) , Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_51(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_presenters_TypographyPresenterCommand_2_classLit) , Lorg_dominokit_domino_typography_client_presenters_TypographyPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit) , Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_51(registry){
  $registerView(new TypographyModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit) , Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_typography_client_TypographyModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.typography.client', 'TypographyModuleConfiguration', 504);
function TypographyModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(635, 40, $intern_41, TypographyModuleConfiguration$1);
var Lorg_dominokit_domino_typography_client_TypographyModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.typography.client', 'TypographyModuleConfiguration/1', 635);
function TypographyModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(636, 41, $intern_42, TypographyModuleConfiguration$2);
var Lorg_dominokit_domino_typography_client_TypographyModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.typography.client', 'TypographyModuleConfiguration/2', 636);
function TypographyPresenterListenerForComponentCaseEvent(){
}

defineClass(939, 1, {}, TypographyPresenterListenerForComponentCaseEvent);
var Lorg_dominokit_domino_typography_client_listeners_TypographyPresenterListenerForComponentCaseEvent_2_classLit = createForClass('org.dominokit.domino.typography.client.listeners', 'TypographyPresenterListenerForComponentCaseEvent', 939);
var Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit = createForClass('org.dominokit.domino.typography.client.presenters', 'TypographyPresenter', 633);
var Lorg_dominokit_domino_typography_client_presenters_TypographyPresenterCommand_2_classLit = createForClass('org.dominokit.domino.typography.client.presenters', 'TypographyPresenterCommand', 634);
function $clinit_AppClientModule(){
  $clinit_AppClientModule = emptyMethod;
  LOGGER_62 = getLogger(($ensureNamesAreInitialized(Lorg_dominokit_domino_ui_demo_AppClientModule_2_classLit) , Lorg_dominokit_domino_ui_demo_AppClientModule_2_classLit.typeName));
}

var LOGGER_62;
var Lorg_dominokit_domino_ui_demo_AppClientModule_2_classLit = createForClass('org.dominokit.domino.ui.demo', 'AppClientModule', null);
function $clinit_WavesClientModule(){
  $clinit_WavesClientModule = emptyMethod;
  LOGGER_63 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_WavesClientModule_2_classLit) , Lorg_dominokit_domino_waves_client_WavesClientModule_2_classLit.typeName));
}

var LOGGER_63;
var Lorg_dominokit_domino_waves_client_WavesClientModule_2_classLit = createForClass('org.dominokit.domino.waves.client', 'WavesClientModule', null);
function WavesModuleConfiguration(){
}

defineClass(529, 1, {}, WavesModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_52(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_52(registry){
}
;
_.registerListeners = function registerListeners_52(registry){
  $addListener(Lorg_dominokit_domino_components_shared_extension_ComponentsEvent_2_classLit, new WavesPresenterListenerForComponentsEvent);
}
;
_.registerPresenters = function registerPresenters_52(registry){
  $registerPresenter(new WavesModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit) , Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit) , Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_52(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_presenters_WavesPresenterCommand_2_classLit) , Lorg_dominokit_domino_waves_client_presenters_WavesPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit) , Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_52(registry){
  $registerView(new WavesModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit) , Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_waves_client_WavesModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.waves.client', 'WavesModuleConfiguration', 529);
function WavesModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(735, 40, $intern_41, WavesModuleConfiguration$1);
var Lorg_dominokit_domino_waves_client_WavesModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.waves.client', 'WavesModuleConfiguration/1', 735);
function WavesModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(736, 41, $intern_42, WavesModuleConfiguration$2);
var Lorg_dominokit_domino_waves_client_WavesModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.waves.client', 'WavesModuleConfiguration/2', 736);
function WavesPresenterListenerForComponentsEvent(){
}

defineClass(989, 1, {}, WavesPresenterListenerForComponentsEvent);
var Lorg_dominokit_domino_waves_client_listeners_WavesPresenterListenerForComponentsEvent_2_classLit = createForClass('org.dominokit.domino.waves.client.listeners', 'WavesPresenterListenerForComponentsEvent', 989);
var Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit = createForClass('org.dominokit.domino.waves.client.presenters', 'WavesPresenter', 733);
var Lorg_dominokit_domino_waves_client_presenters_WavesPresenterCommand_2_classLit = createForClass('org.dominokit.domino.waves.client.presenters', 'WavesPresenterCommand', 734);
function $encode_1(value_0){
  return !value_0?($clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_2):new JSONNumber(value_0.value_0);
}

function $encode_2(value_0){
  return !value_0?($clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_2):new JSONNumber(toDouble_0(value_0.value_0));
}

function $encode_3(value_0){
  return value_0 == null?($clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_2):new JSONString(value_0);
}

function $clinit_Defaults(){
  $clinit_Defaults = emptyMethod;
  dispatcher = ($clinit_DefaultDispatcher() , INSTANCE_6);
  serviceRoot_0 = getModuleBaseURL();
}

function setDispatcher(value_0){
  $clinit_Defaults();
  dispatcher = value_0;
}

function setServiceRoot(serviceRoot){
  $clinit_Defaults();
  var suffixlength;
  suffixlength = '/'.length;
  $equals_0(serviceRoot.substr(serviceRoot.length - suffixlength, suffixlength), '/') || (serviceRoot += '/');
  serviceRoot_0 = serviceRoot;
}

var addXHttpMethodOverrideHeader = true, dispatcher, serviceRoot_0;
function FailedStatusCodeException(message){
  RuntimeException_0.call(this, message);
}

defineClass(1070, 49, $intern_3);
var Lorg_fusesource_restygwt_client_FailedStatusCodeException_2_classLit = createForClass('org.fusesource.restygwt.client', 'FailedStatusCodeException', 1070);
function FailedResponseException(response){
  var lastArg;
  FailedStatusCodeException.call(this, (lastArg = response.xmlHttpRequest.statusText , response.getStatusCode() , lastArg));
}

defineClass(1071, 1070, $intern_3, FailedResponseException);
var Lorg_fusesource_restygwt_client_FailedResponseException_2_classLit = createForClass('org.fusesource.restygwt.client', 'FailedResponseException', 1071);
function isRequestGoingToFileSystem(baseUrl, requestUrl){
  if ($equals_0(requestUrl.substr(0, 4), 'file')) {
    return true;
  }
  if ($equals_0(baseUrl.substr(0, 4), 'file') && $equals_0(requestUrl.substr(0, 1), '/')) {
    return true;
  }
  if ($equals_0(baseUrl.substr(0, 4), 'file') && $equals_0(requestUrl.substr(0, 1), '.')) {
    return true;
  }
  return false;
}

function $headers(this$static, headers){
  var entry, entry$iterator;
  if (headers) {
    for (entry$iterator = headers.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
      entry = castTo(entry$iterator.next_1(), 80);
      $setHeader(this$static.builder, castToString(entry.getKey()), castToString(entry.getValue()));
    }
  }
  return this$static;
}

function $isExpected(this$static, status_0){
  var baseUrl, requestUrl;
  baseUrl = getHostPageBaseURL();
  requestUrl = this$static.builder.url_0;
  return isRequestGoingToFileSystem(baseUrl, requestUrl) || this$static.anyStatus || $contains_0(this$static.expectedStatuses, valueOf_1(status_0));
}

function $json(this$static, data_0){
  $getHeader(this$static.builder) == null && ($setHeader(this$static.builder, 'Content-Type', 'application/json') , this$static);
  $setRequestData(this$static.builder, $toString_0(data_0));
  return this$static;
}

function $send_0(this$static, callback){
  var localDispatcher;
  this$static.builder.timeoutMillis == 0 && ($clinit_Defaults() , false) && $setTimeoutMillis(this$static.builder, ($clinit_Defaults() , -1));
  $setCallback_0(this$static.builder, callback);
  localDispatcher = ($clinit_Defaults() , $clinit_Defaults() , dispatcher);
  return localDispatcher.send_0(this$static, this$static.builder);
}

function Method(resource){
  this.expectedStatuses = new HashSet;
  $add_2(this.expectedStatuses, valueOf_1(200));
  $add_2(this.expectedStatuses, valueOf_1(201));
  $add_2(this.expectedStatuses, valueOf_1(204));
  $add_2(this.expectedStatuses, valueOf_1(1223));
  new HashMap;
  this.builder = new Method$MethodRequestBuilder($getUri(resource));
}

defineClass(1046, 1, {}, Method);
_.anyStatus = false;
var Lorg_fusesource_restygwt_client_Method_2_classLit = createForClass('org.fusesource.restygwt.client', 'Method', 1046);
function Method$MethodRequestBuilder(url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, 'POST', url_0);
  this.requestData = null;
  $clinit_Defaults();
  addXHttpMethodOverrideHeader && $setHeader(this, 'X-HTTP-Method-Override', 'POST');
}

defineClass(1047, 360, {}, Method$MethodRequestBuilder);
var Lorg_fusesource_restygwt_client_Method$MethodRequestBuilder_2_classLit = createForClass('org.fusesource.restygwt.client', 'Method/MethodRequestBuilder', 1047);
function $getUri(this$static){
  if (this$static.query != null) {
    return this$static.path + '?' + this$static.query;
  }
  return this$static.path;
}

function $post(this$static){
  return $headers(new Method(this$static), this$static.headers_0);
}

function $resolve(this$static, path){
  if ($equals_0(path.substr(0, 5), 'http:') || $equals_0(path.substr(0, 6), 'https:') || $equals_0(path.substr(0, 5), 'file:')) {
    return new Resource_0(path, this$static.query, this$static.headers_0);
  }
  $equals_0(path.substr(0, 1), '/') && (path = path.substr(1));
  return new Resource_0(this$static.path + '/' + path, this$static.query, this$static.headers_0);
}

function Resource(uri_0){
  Resource_1.call(this, uri_0);
}

function Resource_0(uri_0, query, headers){
  var suffixlength;
  this.path = (suffixlength = '/'.length , $equals_0(uri_0.substr(uri_0.length - suffixlength, suffixlength), '/')?$substring_0(uri_0, 0, uri_0.length - 1):uri_0);
  this.query = query;
  this.headers_0 = headers?headers:null;
}

function Resource_1(uri_0){
  var pos, suffixlength;
  pos = $indexOf(uri_0, fromCodePoint(63));
  if (pos >= 0) {
    this.path = uri_0.substr(0, pos);
    this.query = uri_0.substr(pos + 1);
  }
   else {
    this.path = (suffixlength = '/'.length , $equals_0(uri_0.substr(uri_0.length - suffixlength, suffixlength), '/')?$substring_0(uri_0, 0, uri_0.length - 1):uri_0);
    this.query = null;
  }
  this.headers_0 = null;
}

defineClass(245, 1, {}, Resource, Resource_0);
var Lorg_fusesource_restygwt_client_Resource_2_classLit = createForClass('org.fusesource.restygwt.client', 'Resource', 245);
function $clinit_DefaultDispatcher(){
  $clinit_DefaultDispatcher = emptyMethod;
  INSTANCE_6 = new DefaultDispatcher;
}

function DefaultDispatcher(){
}

defineClass(827, 1, {}, DefaultDispatcher);
_.send_0 = function send_0(method, builder){
  var content_0, logger;
  if (loggingIsEnabled()) {
    logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2_classLit) , Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2_classLit.typeName));
    $fine(logger, 'Sending http request: ' + builder.httpMethod + ' ' + builder.url_0 + ' ,timeout:' + builder.timeoutMillis);
    content_0 = builder.requestData;
    content_0 != null && content_0.length > 0 && $fine(logger, content_0);
  }
  return throwIfNull('callback', builder.callback) , $doSend(builder, builder.requestData, builder.callback);
}
;
var INSTANCE_6;
var Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2_classLit = createForClass('org.fusesource.restygwt.client.dispatcher', 'DefaultDispatcher', 827);
var I_classLit = createForPrimitive('int', 'I');
var Z_classLit = createForPrimitive('boolean', 'Z');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']], [['locale', 'default'], ['user.agent', 'ie10']], [['locale', 'default'], ['user.agent', 'ie8']], [['locale', 'default'], ['user.agent', 'ie9']], [['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceMappingURL=static/gwt/extra/app/symbolMaps/C018336A260F6593BC52116103121CBF_sourceMap0.json 
//# sourceURL=app-0.js

