function clickMessageDisp() {
    let str = document.getElementById("input").value;
    let str2 = str.split('\n');
    let output = decode(str2).join('<br>');
    document.getElementById("output").innerHTML = output;
}

function decode(str2){
    let prelen = str2.length;
    let ary = [];
    for(let i = 0; i < prelen; i++){
        ary.push(Array.from(str2[i]));
    }

    let ary2 = [];
    for(let i = 0; i < prelen; i++){
        ary2.push(sort(ary[i]));
    }
    return ary2;
}

function sort(a) {
    let outary = [];
    let len = a.length;
    for(let i = 0; i < Math.floor(len/2); i++){
        outary.push(a[i]);
        outary.push(a[len-1-i]);
    }
    let output = outary.join('');
    return output;
}

function clickMessageDisp1() {
    let str = document.getElementById("input2").value;
    let str2 = str.split('\n');
    let output = encrypt(str2).join('<br>');
    document.getElementById("output2").innerHTML = output;
}

function encrypt(str2){
    let prelen = str2.length;
    let ary = [];
    for(let i = 0; i < prelen; i++){
        ary.push(Array.from(str2[i]));
    }

    let ary2 = [];
    for(let i = 0; i < prelen; i++){
        ary2.push(sort2(ary[i]));
    }
    return ary2;
}

function sort2(a) {
    let outary = [];
    let len = a.length;
    let ary1 = [];
    let ary2 = [];
    for(let i = 0; i < len; i++){
        if(i%2==0){
            ary1.push(a[i]);
        }else{
            ary2.push(a[i]);
        }
    }
    for(let i = 0; i < ary1.length; i++){
        outary.push(ary1[i]);
    }
    outary.push("｜");
    for(let i = ary1.length-1; i >= 0; i--){
        outary.push(ary2[i]);
    }
    let output = outary.join('');
    return output;
}

function copy1(){
    let str = document.getElementById("input").value;
    let str2 = str.split('\n');
    let output = decode(str2).join('\n');
    navigator.clipboard.writeText(output);
}

function copy2(){
    let str = document.getElementById("input2").value;
    let str2 = str.split('\n');
    let output = encrypt(str2).join('\n');
    navigator.clipboard.writeText(output);
}
