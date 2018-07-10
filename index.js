var func = null;
var num_elem = "n1";

document.onkeypress = function(e) {
    e = e || window.event;
    var value_key = e.keyCode;

    if (document.activeElement.id != "n1" && document.activeElement.id != "n2") {
        if (value_key >= 48 && value_key <= 57) {
            document.getElementById(num_elem).className = "p-3 mb-2 bg-secondary text-white";
            document.getElementById(num_elem).value = document.getElementById(num_elem).value + String.fromCharCode(value_key);
        } else if (value_key == 42) { // multiplication
            num_elem == "n1" ? num_elem = "n2" : num_elem = "n1";
            do_m();
        } else if (value_key == 43) { // Addition
            num_elem == "n1" ? num_elem = "n2" : num_elem = "n1";
            do_a();
        } else if (value_key == 45) { // Substraction
            num_elem == "n1" ? num_elem = "n2" : num_elem = "n1";
            do_s();
        } else if (value_key == 47) { // Division
            num_elem == "n1" ? num_elem = "n2" : num_elem = "n1";
            do_d();
        } else if (value_key == 13) { // enter 
            func != null ? func() : null;
            num_elem == "n1" ? num_elem = "n2" : num_elem = "n1";
            clear_();
        } else if (value_key == 32) {
            document.getElementById("_controls").hidden = !document.getElementById("_controls").hidden;
        }
    }
    else{
        var str_el = document.getElementById(document.activeElement.id);
        str_el.value = str_el.value +  String.fromCharCode(value_key);
        e.preventDefault();
        if(str_el.value.length >= 0 )
            str_el.className =  "p-3 mb-2 bg-secondary text-white";
    }

    func != null ? func() : null;
}

document.onkeydown = function(e) {
    e = e || window.event;
    var value_key = e.keyCode;
    
    if (value_key == 8) {
        e.preventDefault();
        var str = document.getElementById(num_elem).value;
        str = document.getElementById(num_elem).value.substring(0, str.length - 1);
        document.getElementById(num_elem).value = str;
        if (str.length <= 0)
            document.getElementById(num_elem).className = "p-3 mb-2 bg-light text-dark";
    } else if (value_key == 27) {
        e.preventDefault();
        clear_all();
    } else if (value_key == 9) {
        if (num_elem == "n1") {
            num_elem = "n2";
        } else {
            num_elem = "n1";
        }
        if(document.activeElement.id != "n1" && document.activeElement.id != "n2")
            e.preventDefault();
    }
    func != null ? func() : null;
}

function clear_() {
    num_elem = "n1";
}

function clear_all() {
    func = null;
    num_elem = "n1";
    document.getElementById("op").innerHTML = "";
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("r").value = "";
    document.getElementById("op_eq").hidden = true;
    document.getElementById("r").className = "p-3 mb-2 bg-light text-dark";
    document.getElementById("n1").className = "p-3 mb-2 bg-light text-dark";
    document.getElementById("n2").className = "p-3 mb-2 bg-light text-dark";
}

function do_a() {
    func = do_a;
    document.getElementById("op").innerHTML = "+";
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("r").className = "p-3 mb-2 bg-danger text-white";
        document.getElementById("r").value = "Error";
        document.getElementById("op_eq").hidden = true;
    } else {
        document.getElementById("r").value = a + b;
        document.getElementById("r").className = "p-3 mb-2 bg-dark text-white";
        document.getElementById("op_eq").hidden = false;
    }
}

function do_s() {
    func = do_s;
    document.getElementById("op").innerHTML = "-";
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("r").className = "p-3 mb-2 bg-danger text-white";
        document.getElementById("r").value = "Error";
        document.getElementById("op_eq").hidden = true;
    } else {
        document.getElementById("r").value = a - b;
        //func = null;
        document.getElementById("r").className = "p-3 mb-2 bg-dark text-white";
        document.getElementById("op_eq").hidden = false;
    }
}
// Multiplication Operation
function do_m() {
    func = do_m;
    document.getElementById("op").innerHTML = "*";

    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("r").className = "p-3 mb-2 bg-danger text-white";
        document.getElementById("r").value = "Error";
        document.getElementById("op_eq").hidden = true;
    } else {
        document.getElementById("r").value = a * b;

        document.getElementById("r").className = "p-3 mb-2 bg-dark text-white";
        document.getElementById("op_eq").hidden = false;
    }
}
// division operation
function do_d() {
    func = do_d;
    document.getElementById("op").innerHTML = "/";
    //num_elem = "n2";
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);

    // if (a == null || b == NaN)
    //     document.getElementById("r").innerHTML = "Error";
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("r").className = "p-3 mb-2 bg-danger text-white";
        document.getElementById("r").value = "Error";
        document.getElementById("op_eq").hidden = true;
    } else {
        document.getElementById("r").value = a / b;
        document.getElementById("op_eq").hidden = false;
        document.getElementById("r").className = "p-3 mb-2 bg-dark text-white";
        //func = null;
    }
}

function do_op(id) {
    func();
}