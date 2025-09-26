# goboscript build && twcli run test.sb3
costumes "blank.svg";

%include inflator/assert
%include inflator/cmath

onflag {main;}
proc main {
    Complex i = Complex(0, 1);

    assert_eq c_str(c_sqrt(Complex(-2.0, 0.0))), "Complex(0, -1.4142135623730951i)";
    assert_eq c_str(c_pow(i, i)), "Complex(0.20787957635086268, 0i)";
}
