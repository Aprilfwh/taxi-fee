var Charge = require('../main/main.js');

describe('taxi fee', function () {
    // write your tests here...
    it('should generate charge journey is : 两公里以内', function() {
        let inputs = [1.5, 0];
        let summary = Charge(inputs).trim();
        let expected = `
============= 价格明细 =============
总计：6元
===================================`.trim()
        expect(summary).toEqual(expected)
    });
    it('should generate charge journey is : 八公里以内', function() {
        let inputs = [6.5,0];
        let summary = Charge(inputs).trim();
        let expected = `
============= 价格明细 =============
总计：10元
===================================`.trim()
        expect(summary).toEqual(expected)
    });
    it('should generate charge journey is : 八公里以上', function() {
        let inputs = [10, 0];
        let summary = Charge(inputs).trim();
        let expected = `
============= 价格明细 =============
总计：13元
===================================`.trim()
        expect(summary).toEqual(expected)
    });
    it('should generate charge journey is : 含等待时间', function() {
        let inputs = [10, 5];
        let summary = Charge(inputs).trim();
        let expected = `
============= 价格明细 =============
总计：14元
===================================`.trim()
        expect(summary).toEqual(expected)
    });
});
