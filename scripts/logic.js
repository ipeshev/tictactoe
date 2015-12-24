/**
 * Created by ivan on 11/30/15.
 */
/*global define:true*/
define([], function () {
    'use strict';
    function Logic() {
        var self = this,
            dimm = 3;
        self.dimm = dimm;
        self.O = 'O';
        self.X = 'X';

        /**
         * @function checkHorizontals
         * @description checks for win on horizontale
         * @param cells
         * @returns {boolean}
         */
        self.checkHorizontals = function checkHorizontals(cells) {
            var i;
            for (i = 0; i < dimm * dimm; i = i + dimm) {
                if (cells[i].value && (cells[i].value === cells[i + 1].value) && (cells[i].value === cells[i + 2].value)) {
                    return true;
                }
            }
            return false;
        };

        /**
         * @function checkVerticals
         * @description checks for win on verticals
         * @param cells
         * @returns {boolean}
         */
        self.checkVerticals = function checkVerticals(cells) {
            var i;
            for (i = 0; i < dimm; i = i + 1) {
                if (cells[i].value && (cells[i].value === cells[i + dimm].value) && (cells[i].value === cells[i + dimm * 2].value)) {
                    return true;
                }
            }
            return false;
        };

        /**
         * @function checkMainDiagonal
         * @description checks for win on main diagonal
         * @param cells
         * @returns {boolean}
         */
        self.checkMainDiagonal = function checkMainDiagonal(cells) {
            var i = 0;
            if (cells[i].value && (cells[i].value === cells[i + dimm + 1].value) && (cells[i].value === cells[i + dimm * 2 + 2].value)) {
                return true;
            }
            return false;
        };

        /**
         * @function checkReversedDiagonal
         * @description checks for win on reversed diagonal
         * @param cells
         * @returns {boolean}
         */
        self.checkReversedDiagonal = function checkReversedDiagonal(cells) {
            var i = 0;
            if (cells[i + 2].value && (cells[i + 2].value === cells[i + dimm + 1].value) && (cells[i + 2].value === cells[i + dimm * 2].value)) {
                return true;
            }
            return false;
        };

        /**
         * @function checkForEmpty
         * @description checks for empty fields ( possible turn )
         * @param cells
         * @returns {boolean}
         */
        self.checkForEmpty = function checkForEmpty(cells) {
            var empty = false;
            cells.forEach(function (cell) {
                if (!cell.value) {
                    empty = true;
                    return false;
                }
            });
            return empty;
        };
        /**
         * @function checkForWin
         * @description checks for win on the board
         * @param cells
         * @returns {boolean|undefined}
         */
        self.checkForWin = function checkForWin(cells) {
            var win;
            win = self.checkReversedDiagonal(cells) ||
                self.checkMainDiagonal(cells) ||
                self.checkVerticals(cells) ||
                self.checkHorizontals(cells);
            if (!win && !self.checkForEmpty(cells)) {
                return undefined;
            }
            return win;
        };
    }
    return new Logic();
});