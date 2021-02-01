const tmpObj1 = {};
// console.log(tmpObj1);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const tmpObj2 = {
    sTxt : 'Text',
    nNum : 1000,
    dDouble : 10.5,
    cChar : 'C',
    func1 : function(tmp) {
        console.log(tmp);
    },
    func2 : function() {
        console.log(this.sTxt);
        console.log(this.nNum);
        console.log(this.dDouble);
        console.log(this.cChar);
    },
    func3 : function(tmp) {
        return tmp;
    },
    aArr : ['test', 10, 10.5]
}

// console.log(tmpObj2.func1(10) + '\n');
// console.log(tmpObj2.func2() + '\n');
// console.log(tmpObj2.func3(10) + '\n');
// console.log(tmpObj2.aArr + '\n');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function TmpObj3(sTxt, nNum, aArr, oObj) {
    this.sTxt = sTxt;
    this.nNum = nNum;
    this.aArr = aArr;
    this.oObj = oObj;

    this.show = function() {
        console.log(this.sTxt);
        console.log(this.nNum);
        console.log(this.aArr);
        console.log(this.oObj);
    }
}

let tmpObj3 = new TmpObj3('Txt', 100, [100, 'Tmp'], {sTest : 'Txt1', nNum : 100});
// console.log(tmpObj3);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tmpObj4 = new Object();
tmpObj4.sTxt = 'Txt_Value';
tmpObj4.nNum = 1000;
tmpObj4.showData = function () {
    console.log(this.sTxt + ' ' + this.nNum);
}
// console.log(tmpObj4);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tmpObj5 = Object.create(tmpObj4);
console.log(tmpObj5);
console.log(Object.getPrototypeOf(tmpObj5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////