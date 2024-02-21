/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  width: 100vw;\n  height: 100vh;\n  border: 5px solid black;\n}\n\n.menu {\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n}\n\n/* .content {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  padding: 20vh 5vw;\n} */\n\n.add {\n  display: flex;\n  align-items: center;\n}\n\n.add > img {\n  width: 3%;\n  height: 3%;\n}\n\n.menu,\n.content {\n  width: 100%;\n  height: 100%;\n  border: 2px solid black;\n}\n\n.filters {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 1;\n  & button{\n    height: 100%;\n  }\n}\n\n.heading {\n  display: flex;\n  justify-content: center;\n  gap: 2vw;\n}\n\n.project {\n  display: flex;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject)\n/* harmony export */ });\n/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteProject */ \"./src/deleteProject.js\");\n/* harmony import */ var _editProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editProject */ \"./src/editProject.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n/* harmony import */ var _projectTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectTasks */ \"./src/projectTasks.js\");\n\n\n\n\n\n\nfunction addProject(projectName){\n  const projects = document.querySelector('.projectList');\n  const project = document.createElement('div');\n  const name = document.createElement('input');\n  const edit = document.createElement('button');\n  const deleteButton = document.createElement('button');\n\n  name.classList.add('projectName');\n  name.textContent = projectName;\n\n  edit.classList.add('projectEdit');\n  edit.textContent = 'Edit';\n  edit.addEventListener('click',_editProject__WEBPACK_IMPORTED_MODULE_1__.editProject)\n\n  deleteButton.classList.add('projectDelete');\n  deleteButton.textContent = 'Delete'\n  deleteButton.addEventListener('click', _deleteProject__WEBPACK_IMPORTED_MODULE_0__.deleteProject)\n\n  project.append(name, edit, deleteButton);\n\n  projects.appendChild(project);\n  project.classList.add('project')\n  project.setAttribute('data-position', projects.childNodes.length - 1)\n  deleteButton.setAttribute('data-position', projects.childNodes.length - 1)\n  edit.setAttribute('data-position', projects.childNodes.length - 1)\n\n  if (name.textContent === \"General\"){\n    name.value = 'General';\n    changeElement();\n  }\n\n  name.focus();\n  name.addEventListener('focusout', changeElement)\n\n  name.addEventListener('keypress', (e) =>{\n    name.removeEventListener('focusout', changeElement);\n    if (e.key === 'Enter'){\n      changeElement();\n    } else {\n      name.addEventListener('focusout', changeElement)\n    }\n  })\n\n  function changeElement(){\n    const projects = document.querySelector('.projectList');\n    const finalName = document.createElement('p');\n    finalName.classList.add('projectName');\n    if (!name.value){\n      name.textContent = `Project ${projects.childNodes.length}`\n      finalName.textContent = name.textContent;\n    } else {\n      finalName.textContent = name.value;\n    }\n    name.replaceWith(finalName);\n    (0,_projectList__WEBPACK_IMPORTED_MODULE_2__.allProjects)(finalName);\n    (0,_projectList__WEBPACK_IMPORTED_MODULE_2__.allEditProjects)(finalName);\n    finalName.addEventListener('click', function () {(0,_projectTasks__WEBPACK_IMPORTED_MODULE_3__.showProjectData)(finalName.textContent)})\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/addProject.js?");

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   copyTaskDetails: () => (/* binding */ copyTaskDetails),\n/* harmony export */   createTemplate: () => (/* binding */ createTemplate)\n/* harmony export */ });\n/* harmony import */ var _Add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.svg */ \"./src/Add.svg\");\n/* harmony import */ var _taskClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskClass */ \"./src/taskClass.js\");\n\n\n\nfunction createTemplate(){\n  const content = document.querySelector('.content');\n  const header = document.createElement('header')\n  const addTask = document.createElement('div');\n  addTask.classList.add('add');\n  const addIcon = new Image();\n  addIcon.src = _Add_svg__WEBPACK_IMPORTED_MODULE_0__;\n  const addName = document.createElement('p');\n  addName.textContent = 'Add task';\n  addName.classList.add('addTask');\n  addTask.append(addIcon, addName);\n  addTask.addEventListener('click', () =>{\n    const createTaskDialog = document.querySelector('.createTask');\n    createTaskDialog.showModal();\n  })\n  header.appendChild(addTask)\n  content.appendChild(header);\n}\n\nfunction copyTaskDetails(){\n  const taskProject = document.querySelector('#taskProject').value;\n  const taskTitle = document.querySelector('#taskTitle').value;\n  const taskDescription = document.querySelector('#taskDescription').value;\n  const taskPriority = document.querySelector('#taskPriority').value;\n  const taskDueDate = document.querySelector('#taskDueDate').value;\n  const task = new _taskClass__WEBPACK_IMPORTED_MODULE_1__.Task(taskProject, taskTitle, taskDescription, taskPriority, taskDueDate);\n  return task;\n}\n\n//# sourceURL=webpack://todo-list/./src/addTask.js?");

/***/ }),

/***/ "./src/clearDialog.js":
/*!****************************!*\
  !*** ./src/clearDialog.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAddTaskDialog: () => (/* binding */ clearAddTaskDialog)\n/* harmony export */ });\nfunction clearAddTaskDialog(){\n  const inputs = document.querySelectorAll('.createTask > input');\n  inputs.forEach((input) =>{\n    input.value = '';\n  })\n  const priority = document.querySelector('#taskPriority')\n  priority.value = 'Medium';\n}\n\n//# sourceURL=webpack://todo-list/./src/clearDialog.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\n/* harmony import */ var _clearDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearDialog */ \"./src/clearDialog.js\");\n/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteTask */ \"./src/deleteTask.js\");\n/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTask */ \"./src/editTask.js\");\n\n\n\n\n\nfunction createTask(){\n  const task = (0,_addTask__WEBPACK_IMPORTED_MODULE_0__.copyTaskDetails)();\n  const tasks = document.querySelectorAll('.task');\n  const content = document.querySelector('.content')\n  const taskDiv = document.createElement('div');\n  taskDiv.classList.add('task');\n  taskDiv.setAttribute('data-position', tasks.length);\n\n  const status = document.createElement('div');\n  status.classList.add('status');\n  const color = document.createElement('p');\n  color.classList.add('color');\n  const statusName = document.createElement('p');\n  statusName.classList.add('statusName');\n  statusName.textContent = task.status;\n  status.append(color, statusName);\n  status.setAttribute('data-position', tasks.length);\n\n  const title = document.createElement('p');\n  title.classList.add('taskTitle');\n  title.textContent = task.title;\n  title.setAttribute('data-position', tasks.length);\n\n  const description = document.createElement('p')\n  description.classList.add('description');\n  description.textContent = task.description;\n  description.setAttribute('data-position', tasks.length);\n\n  const priority = document.createElement('p');\n  priority.classList.add('priority');\n  priority.textContent = task.priority;\n  priority.setAttribute('data-position', tasks.length);\n\n  const dueDate = document.createElement('p');\n  dueDate.classList.add('dueDate');\n  dueDate.textContent = task.dueDate;\n  dueDate.setAttribute('data-position', tasks.length);\n\n  const editBtn  = document.createElement('button');\n  editBtn.classList.add('editBtn');\n  editBtn.textContent = 'Edit';\n  editBtn.setAttribute('data-position', tasks.length);\n  editBtn.addEventListener('click', _editTask__WEBPACK_IMPORTED_MODULE_3__.editTask);\n\n  const deleteBtn = document.createElement('button');\n  deleteBtn.classList.add('deleteBtn');\n  deleteBtn.textContent = 'Delete';\n  deleteBtn.setAttribute('data-position', tasks.length);\n  deleteBtn.addEventListener('click', _deleteTask__WEBPACK_IMPORTED_MODULE_2__.deleteTask);\n\n  taskDiv.append(status, title, description, priority, dueDate, editBtn, deleteBtn);\n  content.appendChild(taskDiv);\n  const dialog = document.querySelector('.createTask');\n  dialog.close();\n  (0,_clearDialog__WEBPACK_IMPORTED_MODULE_1__.clearAddTaskDialog)();\n  window.localStorage.setItem(`${task.title}-${task.description}` ,JSON.stringify(task));\n}\n\n//# sourceURL=webpack://todo-list/./src/createTask.js?");

/***/ }),

/***/ "./src/deleteProject.js":
/*!******************************!*\
  !*** ./src/deleteProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject)\n/* harmony export */ });\nfunction deleteProject(){\n  const projects = document.querySelectorAll('.project');\n  const options = document.querySelectorAll('#taskProject > option')\n  const editOptions = document.querySelectorAll('#editTaskProject > option')\n  projects[this.dataset.position].remove();\n  options[this.dataset.position].remove();\n  editOptions[this.dataset.position].remove();\n  recalculatePosition();\n}\n\nfunction recalculatePosition(){\n  const projects = document.querySelectorAll('.project');\n  const buttons = document.querySelectorAll('.projectDelete');\n  const edit = document.querySelectorAll('.projectEdit')\n  const options = document.querySelectorAll('#taskProject > option')\n  for (let i = 0; i < projects.length; i++){\n    projects[i].setAttribute('data-position', i);\n    buttons[i].setAttribute('data-position', i);\n    edit[i].setAttribute('data-position', i);\n    options[i].setAttribute('data-position', i);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/deleteProject.js?");

/***/ }),

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask)\n/* harmony export */ });\nfunction deleteTask(){\n  const titles = document.querySelectorAll('.taskTitle');\n  const descriptions = document.querySelectorAll('.description');\n  const combine = `${titles[this.dataset.position].textContent}-${descriptions[this.dataset.position].textContent}`;\n  localStorage.removeItem(combine);\n\n  const tasks = document.querySelectorAll('.task');\n  tasks[this.dataset.position].remove();\n  recalculatePosition();\n}\n\nfunction recalculatePosition(){\n  const task = document.querySelectorAll('.task');\n  const status = document.querySelectorAll('.status');\n  const title = document.querySelectorAll('.taskTitle');\n  const description = document.querySelectorAll('.description');\n  const priority = document.querySelectorAll('.priority');\n  const dueDate = document.querySelectorAll('.dueDate');\n  const editBtn = document.querySelectorAll('.editBtn');\n  const deleteBtn = document.querySelectorAll('.deleteBtn');\n  for (let i = 0; i < deleteBtn.length; i++){\n    task[i].setAttribute('data-position', i);\n    status[i].setAttribute('data-position', i);\n    title[i].setAttribute('data-position', i);\n    description[i].setAttribute('data-position', i);\n    priority[i].setAttribute('data-position', i);\n    dueDate[i].setAttribute('data-position', i);\n    editBtn[i].setAttribute('data-position', i);\n    deleteBtn[i].setAttribute('data-position', i);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/deleteTask.js?");

/***/ }),

/***/ "./src/editProject.js":
/*!****************************!*\
  !*** ./src/editProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editProject: () => (/* binding */ editProject)\n/* harmony export */ });\nfunction editProject(){\n  const projectName = document.querySelectorAll('.projectName')\n  const input = document.createElement('input');\n  input.value = projectName[this.dataset.position].textContent;\n  projectName[this.dataset.position].replaceWith(input);\n  input.focus();\n\n  input.addEventListener('focusout', changeElement)\n\n  input.addEventListener('keypress', (e) =>{\n    input.removeEventListener('focusout', changeElement);\n    if (e.key === 'Enter'){\n      changeElement();\n    } else {\n      input.addEventListener('focusout', changeElement)\n    }\n  })\n\n  function changeElement(){\n    const projects = document.querySelector('.projectList');\n    const finalName = document.createElement('p');\n    finalName.classList.add('projectName');\n    if (!input.value){\n      input.textContent = `Project ${projects.childNodes.length}`\n      finalName.textContent = input.textContent;\n    } else {\n      finalName.textContent = input.value;\n    }\n    input.replaceWith(finalName);\n  }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/editProject.js?");

/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editTask: () => (/* binding */ editTask)\n/* harmony export */ });\nfunction editTask(){\n  const dialog = document.querySelector('.editTask');\n  const taskTitle = document.getElementById('editTaskTitle');\n  const taskDescription = document.getElementById('editTaskDescription');\n  const taskDueDate = document.getElementById('editTaskDueDate');\n  const taskPriority = document.getElementById('editTaskPriority');\n  const editBtn = document.querySelector('.editSubmit');\n\n  const position = this.dataset.position;\n\n  taskTitle.value = document.querySelectorAll('.taskTitle')[position].textContent;\n  taskDescription.value = document.querySelectorAll('.description')[position].textContent;\n  taskDueDate.value = document.querySelectorAll('.dueDate')[position].textContent;\n  taskPriority.value = document.querySelectorAll('.priority')[position].textContent;\n\n  editBtn.setAttribute('data-position', position);\n  \n  dialog.showModal();\n}\n\n//# sourceURL=webpack://todo-list/./src/editTask.js?");

/***/ }),

/***/ "./src/fetchLocalData.js":
/*!*******************************!*\
  !*** ./src/fetchLocalData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTask */ \"./src/editTask.js\");\n/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTask */ \"./src/deleteTask.js\");\n\n\n\nfunction fetchData(object){\n  const task = object;\n  const tasks = document.querySelectorAll('.task');\n  const content = document.querySelector('.content')\n  const taskDiv = document.createElement('div');\n  taskDiv.classList.add('task');\n  taskDiv.setAttribute('data-position', tasks.length);\n\n  const status = document.createElement('div');\n  status.classList.add('status');\n  const color = document.createElement('p');\n  color.classList.add('color');\n  const statusName = document.createElement('p');\n  statusName.classList.add('statusName');\n  statusName.textContent = task.status;\n  status.append(color, statusName);\n  status.setAttribute('data-position', tasks.length);\n\n  const title = document.createElement('p');\n  title.classList.add('taskTitle');\n  title.textContent = task.title;\n  title.setAttribute('data-position', tasks.length);\n\n  const description = document.createElement('p')\n  description.classList.add('description');\n  description.textContent = task.description;\n  description.setAttribute('data-position', tasks.length);\n\n  const priority = document.createElement('p');\n  priority.classList.add('priority');\n  priority.textContent = task.priority;\n  priority.setAttribute('data-position', tasks.length);\n\n  const dueDate = document.createElement('p');\n  dueDate.classList.add('dueDate');\n  dueDate.textContent = task.dueDate;\n  dueDate.setAttribute('data-position', tasks.length);\n\n  const editBtn  = document.createElement('button');\n  editBtn.classList.add('editBtn');\n  editBtn.textContent = 'Edit';\n  editBtn.setAttribute('data-position', tasks.length);\n  editBtn.addEventListener('click', _editTask__WEBPACK_IMPORTED_MODULE_0__.editTask);\n\n  const deleteBtn = document.createElement('button');\n  deleteBtn.classList.add('deleteBtn');\n  deleteBtn.textContent = 'Delete';\n  deleteBtn.setAttribute('data-position', tasks.length);\n  deleteBtn.addEventListener('click', _deleteTask__WEBPACK_IMPORTED_MODULE_1__.deleteTask);\n\n  taskDiv.append(status, title, description, priority, dueDate, editBtn, deleteBtn);\n  content.appendChild(taskDiv);\n}\n\n//# sourceURL=webpack://todo-list/./src/fetchLocalData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProject.js */ \"./src/addProject.js\");\n/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask.js */ \"./src/createTask.js\");\n/* harmony import */ var _submitEditTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitEditTask.js */ \"./src/submitEditTask.js\");\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addTask.js */ \"./src/addTask.js\");\n\n\n\n\n\n\nfunction createFilters() {\n  const filter = document.querySelector('.filters');\n  let names = ['Today', 'This week', 'All tasks'];\n  for (let i = 0; i < 3; i++){\n    const btn = document.createElement('button');\n    btn.classList.add('filter');\n    btn.textContent = names[i];\n    filter.appendChild(btn);\n  }\n}\n\ncreateFilters();\n(0,_addTask_js__WEBPACK_IMPORTED_MODULE_4__.createTemplate)();\n\nconst add = document.querySelector('.heading > button');\nconst submit = document.querySelector('.createTask > .submit');\nconst submitEdit= document.querySelector('.editSubmit');\nadd.addEventListener('click', _addProject_js__WEBPACK_IMPORTED_MODULE_1__.addProject);\nsubmit.addEventListener('click', _createTask_js__WEBPACK_IMPORTED_MODULE_2__.createTask);\nsubmitEdit.addEventListener('click', _submitEditTask_js__WEBPACK_IMPORTED_MODULE_3__.submitEditTask);\n\n(0,_addProject_js__WEBPACK_IMPORTED_MODULE_1__.addProject)(\"General\");\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/parseLocalData.js":
/*!*******************************!*\
  !*** ./src/parseLocalData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\nconst tasks = [];\n\nfor (const task in localStorage){\n  if (!localStorage.hasOwnProperty(task)) continue;\n\n  if (localStorage[task] === 'honey:core-sdk:*') continue;\n\n  tasks.push(localStorage[task]);\n}\n\ntasks.forEach((task) => {\n  const parsed = JSON.parse(task);\n  const index = tasks.indexOf(task);\n  tasks.splice(index, 1, parsed)\n})\n\n\n//# sourceURL=webpack://todo-list/./src/parseLocalData.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allEditProjects: () => (/* binding */ allEditProjects),\n/* harmony export */   allProjects: () => (/* binding */ allProjects)\n/* harmony export */ });\nfunction allProjects(name){\n  const list = document.querySelector('#taskProject')\n  const projects = document.querySelector('.projectList');\n  const option = document.createElement('option');\n  option.value = name.textContent;\n  option.textContent = name.textContent;\n  option.setAttribute('data-position', projects.childNodes.length - 1)\n  list.appendChild(option);\n}\n\nfunction allEditProjects(name){\n  const list = document.querySelector('#editTaskProject')\n  const projects = document.querySelector('.projectList');\n  const option = document.createElement('option');\n  option.value = name.textContent;\n  option.textContent = name.textContent;\n  option.setAttribute('data-position', projects.childNodes.length - 1)\n  list.appendChild(option);\n}\n\n//# sourceURL=webpack://todo-list/./src/projectList.js?");

/***/ }),

/***/ "./src/projectTasks.js":
/*!*****************************!*\
  !*** ./src/projectTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showProjectData: () => (/* binding */ showProjectData)\n/* harmony export */ });\n/* harmony import */ var _parseLocalData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseLocalData.js */ \"./src/parseLocalData.js\");\n/* harmony import */ var _fetchLocalData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchLocalData.js */ \"./src/fetchLocalData.js\");\n\n\n\nfunction showProjectData(project){\n  for (let i = 0; i < _parseLocalData_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++){\n    if (_parseLocalData_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].project === project){\n      (0,_fetchLocalData_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)(_parseLocalData_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i]);\n    }\n  }\n  console.log(_parseLocalData_js__WEBPACK_IMPORTED_MODULE_0__.tasks);\n}\n\n//# sourceURL=webpack://todo-list/./src/projectTasks.js?");

/***/ }),

/***/ "./src/submitEditTask.js":
/*!*******************************!*\
  !*** ./src/submitEditTask.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   submitEditTask: () => (/* binding */ submitEditTask)\n/* harmony export */ });\nfunction submitEditTask(){\n  const dialog = document.querySelector('.editTask');\n  const title = document.getElementById('editTaskTitle');\n  const description = document.getElementById('editTaskDescription');\n  const dueDate = document.getElementById('editTaskDueDate');\n  const priority = document.getElementById('editTaskPriority');\n\n  const position = this.dataset.position;\n\n  document.querySelectorAll('.taskTitle')[position].textContent = title.value;\n  document.querySelectorAll('.description')[position].textContent = description.value;\n  document.querySelectorAll('.dueDate')[position].textContent = dueDate.value;\n  document.querySelectorAll('.priority')[position].textContent = priority.value;\n\n  dialog.close();\n}\n\n//# sourceURL=webpack://todo-list/./src/submitEditTask.js?");

/***/ }),

/***/ "./src/taskClass.js":
/*!**************************!*\
  !*** ./src/taskClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor (project, title, description, priority, dueDate, status ='Active'){\n    this.project = project;\n    this.title = title;\n    this.status = status;\n    this.description = description;\n    this.priority = priority;\n    this.dueDate = dueDate;\n  }\n\n  changeStatus(state){\n    this.status = state;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/taskClass.js?");

/***/ }),

/***/ "./src/Add.svg":
/*!*********************!*\
  !*** ./src/Add.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b254db15a65e85097053.svg\";\n\n//# sourceURL=webpack://todo-list/./src/Add.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;