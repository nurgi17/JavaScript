describe("timer", function () {
    it("Return Object?", function () {
        assert.typeOf(getTimeRemaining(), 'object');
    });

    it("Setting timer", function () {
        assert.typeOf(setClock('timer', deadline), 'string');
    });

    describe('Total sum', function () {
        it("Equal to zero", function () {
            assert.equal(total, 0);
        });
    });

});