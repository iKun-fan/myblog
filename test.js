function fx() {
    let i = 0
    for (i = 0; i < 6; i++) {
        (function (j) {
            setTimeout(function () {
                console.log(j)
            }, 0)
        })(i)
    }
}

//下面是抄来的
// function test(){
//     for (var i = 0; i < 10; i++) {
//     	(function(j){//闭包
//     		setTimeout(function(){
//     			console.log(j);//分别输出i的值
//     		},4000)
//     	})(i);//闭包
//     };
// };
// test();