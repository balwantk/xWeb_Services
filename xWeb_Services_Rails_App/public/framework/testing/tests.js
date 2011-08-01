
// documentation on writing tests here: http://docs.jquery.com/QUnit
// example tests: https://github.com/jquery/qunit/blob/master/test/same.js

// below are some general tests but feel free to delete them.
module("Basic Asserts");
test('validateCode(right code)', function() { 
    var x = new XPassCode;
    x.set({code:"BK12347"});
    x.validateCode(); 
    equals(x.assigned,false,"Assigned should be false");

}) 
