/**
 * Copyright 2010 BQ Luan. All Rights Reserved.
 *
 * This file is part of JsXiangqi.
 *
 * JsXiangqi is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * JsXiangqi is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with JsXiangqi.  If not, see http://www.gnu.org/license.
 */

/**
 * @fileoverview Renderer for {@link bq.Chesspiece}s.
 */
 
goog.provide('bq.ChesspieceRenderer');

goog.require('goog.style');
goog.require('goog.dom.classes');
goog.require('goog.ui.ControlRenderer');

/**
 * @constructor
 * @extends {goog.ui.ControlRenderer}
 */
bq.ChesspieceRenderer = function() {
  goog.ui.ControlRenderer.call(this);
};
goog.inherits(bq.ChesspieceRenderer, goog.ui.ControlRenderer);
goog.addSingletonGetter(bq.ChesspieceRenderer);

/**
 * CSS class name the renderer applies to chessboard.
 * @type {string}
 */
bq.ChesspieceRenderer.CSS_CLASS = goog.getCssName('bq-chesspiece');

bq.ChesspieceRenderer.Width = 45;

/** @inheritDoc */
bq.ChesspieceRenderer.prototype.getCssClass = function() {
  return bq.ChesspieceRenderer.CSS_CLASS;
};

/**
 * Initializes the control's DOM by configuring properties that can only be set
 * after the DOM has entered the document.  This implementation sets up BiDi
 * and keyboard focus.  Called from {@link goog.ui.Control#enterDocument}.
 * @param {bq.Chesspiece} control Control whose DOM is to be initialized
 *     as it enters the document.
 */
bq.ChesspieceRenderer.prototype.initializeDom = function(control) {
  bq.ChesspieceRenderer.superClass_.initializeDom.call(this, control);
  var elem = control.getElement();
  goog.style.setStyle(elem, 'background', 'url("images/pieces.gif") -' +
      control.getFace() * 50 + 'px -' + control.getColor() * 50 + 'px');
  goog.dom.classes.add(elem, 'goog-inline-block');
};

/**
 * @param {number} color
 */
bq.ChesspieceRenderer.prototype.setColor = function(element, color) {
};

/**
 * @param {number} face
 */
bq.ChesspieceRenderer.prototype.setFace = function(element, face) {
};

/**
 * @param {number} left
 * @param {number} top
 */
bq.ChesspieceRenderer.prototype.setPosition = function(element, left, top) {
  goog.style.setStyle(element, 'left', left + 'px');
  goog.style.setStyle(element, 'top', top + 'px');
};