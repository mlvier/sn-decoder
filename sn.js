function clickMessageDisp() {
    let str = document.getElementById("input").value;

    let str2 = str.split('\n');
    let prelen = str2.length;
    let ary = [];
    for(let i = 0; i < prelen; i++){
        ary.push(Array.from(str2[i]));
    }

    let ary2 = [];
    for(let i = 0; i < prelen; i++){
        ary2.push(sort(ary[i]));
    }

    let output = ary2.join('<br>');
    document.getElementById("output").innerHTML = output;
}

function sort(a) {
    let outary = [];
    for(let i = 0; i < Math.floor(a.length/2); i++){
        outary.push(a[i]);
        outary.push(a[a.length-1-i]);
    }
    let output = outary.join('');
    return output;
}
