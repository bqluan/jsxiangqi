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
 * @fileoverview Renderer for {@link bq.Chessboard}s.
 */
 
goog.provide('bq.ChessboardRenderer');
 
goog.require('goog.ui.ControlRenderer');

/**
 * @constructor
 * @extends {goog.ui.ControlRenderer}
 */
bq.ChessboardRenderer = function() {
  goog.ui.ControlRenderer.call(this);
};
goog.inherits(bq.ChessboardRenderer, goog.ui.ControlRenderer);
goog.addSingletonGetter(bq.ChessboardRenderer);

bq.ChessboardRenderer.X = 31;
bq.ChessboardRenderer.Y = 31;
bq.ChessboardRenderer.Step = 51;
bq.ChessboardRenderer.Width = 468;

/**
 * CSS class name the renderer applies to chessboard.
 * @type {string}
 */
bq.ChessboardRenderer.CSS_CLASS = goog.getCssName('bq-chessboard');

/** @inheritDoc */
bq.ChessboardRenderer.prototype.getCssClass = function() {
  return bq.ChessboardRenderer.CSS_CLASS;
};