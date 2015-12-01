/**
 * Created by ivan on 11/30/15.
 */
define(['scripts/logic'],function( Logic){
    describe("Logic specs", function(){

        var X = Logic.X,
            O = Logic.O,
            mockedCells,
            mockedCells1,
            mockedCells2,
            mockedCells3,
            mockedCells4;
        mockedCells = [
            {value:O},{value:X},{value:X},
            {value:O},{value:O},{value:O},
            {value:X},{value:O},{value:X}
        ];
        mockedCells1 = [
            {value:X},{value:X},{value:O},
            {value:O},{value:X},{value:X},
            {value:O},{value:X},{value:O}
        ];
        mockedCells2 = [
            {value:O},{value:X},{value:O},
            {value:O},{value:O},{value:X},
            {value:X},{value:O},{value:O}
        ];
        mockedCells3 = [
            {value:X},{value:X},{value:O},
            {value:O},{value:O},{value:O},
            {value:O},{value:O},{value:X}
        ];
        mockedCells4 = [
            {value:X},{value:X},{value:O},
            {value:O},{value:O},{value:X},
            {value:X},{value:O},{value:X}
        ];


        it("should detect horizontals win", function(){
            expect(Logic.checkHorizontals(mockedCells)).toBeTruthy();
            expect(Logic.checkHorizontals(mockedCells4)).toBeFalsy();
            expect(Logic.checkForWin(mockedCells)).toBeTruthy();
        });
        it("should detect vertical win", function(){
            expect(Logic.checkVerticals(mockedCells1)).toBeTruthy();
            expect(Logic.checkVerticals(mockedCells4)).toBeFalsy();
            expect(Logic.checkForWin(mockedCells1)).toBeTruthy();
        });
        it("should detect main diagonal win", function(){
            expect(Logic.checkMainDiagonal(mockedCells2)).toBeTruthy();
            expect(Logic.checkMainDiagonal(mockedCells4)).toBeFalsy();
            expect(Logic.checkForWin(mockedCells2)).toBeTruthy();
        });
        it("should detect reversed diagonal win", function(){
            expect(Logic.checkReversedDiagonal(mockedCells3)).toBeTruthy();
            expect(Logic.checkReversedDiagonal(mockedCells4)).toBeFalsy();
            expect(Logic.checkForWin(mockedCells3)).toBeTruthy();
        });
        it("should detect draw", function(){
            expect(Logic.checkForEmpty(mockedCells4)).toBeFalsy();
            expect(Logic.checkForWin(mockedCells4)).toBe(undefined);
        });
    });
});