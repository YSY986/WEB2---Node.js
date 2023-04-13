// array, object

var f = function () {
    console.log(1+1);
    console.log(1+2);
}
a = [f];
a[0]();

var o = {
    func:f

}
o.func();
