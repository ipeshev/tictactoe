/**
 * Created by ivan on 11/30/15.
 */
define([],function(){
    function Logic () {
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
        self.checkHorizontals = function checkHorizontals(cells){
            var last,
                consequetive = 0,
                i,
                j,
                cell;
            for(i=0; i<dimm; i++){
                last = cells[i*dimm].value;
                consequetive=0;
                for(j=0; j<dimm; j++){
                    cell = cells[ i * dimm + j];
                    if(cell.value && cell.value === last)  {
                        consequetive++;
                    } else {
                        consequetive=0;
                    }
                    last = cell.value;
                }
                if(consequetive === dimm){
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
        self.checkVerticals = function checkVerticals(cells){
            var last,
                consequetive = 0,
                i,
                j,
                cell;
            for(i=0; i<dimm; i++){
                last = cells[i].value;
                consequetive=0;
                for(j=0; j<dimm; j++){
                    cell = cells[i+j*dimm];
                    if(cell.value && cell.value === last)  {
                        consequetive++;
                    } else {
                        consequetive=0;
                    }
                    last = cell.value;
                }
                if(consequetive === dimm){
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
        self.checkMainDiagonal = function checkMainDiagonal(cells){
            var win = false,
                last,
                consequetive = 0,
                i,
                j,
                cell;
            last = cells[0].value;
            for(i=0;i<dimm;i++){
                cell = cells[i+dimm*i];
                if(cell.value && cell.value === last ) {
                    consequetive++;
                } else {
                    consequetive = 0;
                }
                last = cell.value;

            }
            if(consequetive === dimm){
                win = true;
            }
            return win;
        };

        /**
         * @function checkReversedDiagonal
         * @description checks for win on reversed diagonal
         * @param cells
         * @returns {boolean}
         */
        self.checkReversedDiagonal = function checkReversedDiagonal(cells){
            var win = false,
                last,
                consequetive = 0,
                i,
                cell;
            last = cells[dimm-1].value;
            for(i=0;i<dimm;i++){
                cell = cells[dimm-i-1+dimm*i];
                if(cell.value && cell.value === last ) {
                    consequetive++;
                } else {
                    consequetive = 0;
                }
                last = cell.value;

            }
            if(consequetive === dimm){
                win = true;
            }
            return win;
        };

        /**
         * @function checkForEmpty
         * @description checks for empty fields ( possible turn )
         * @param cells
         * @returns {boolean}
         */
        self.checkForEmpty = function checkForEmpty(cells){
            var empty = false;
            cells.forEach(function(cell){
                if(!cell.value){
                    empty = true;
                    return false;
                }
            })
            return empty;
        };

        /**
         * @function checkForWin
         * @description checks for win on the board
         * @param cells
         * @returns {boolean|undefined}
         */
        self.checkForWin = function checkForWin(cells){
            var win;
            win =   self.checkReversedDiagonal(cells)||
                    self.checkMainDiagonal(cells)||
                    self.checkVerticals(cells)||
                    self.checkHorizontals(cells);
            if(!win && !self.checkForEmpty(cells)){
                return undefined;
            }
            return win;
        }
    };
    return new Logic();
});