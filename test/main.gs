# goboscript build && twcli run test.sb3
costumes "blank.svg";

%include inflator/assert
%include inflator/cmath

onflag {main;}
proc main {
    Complex i = Complex(0, 1);

    assert_eq c_str(c_sqrt(Complex(-2.0, 0.0))), "Complex(0, -1.4142135623730951)";
    assert_eq c_str(c_pow(i, i)), "Complex(0.20787957635086268, 0)";

    Complex z1 = Complex(1.5, 3);
    Complex z2 = Complex(1.5, 1.5);

    assert_eq c_str(c_add(z1, z2)), "Complex(3, 4.5)";
    assert_eq c_str(c_sub(z1, z2)), "Complex(0, 1.5)";
    assert_eq c_str(c_mul(z1, z2)), "Complex(-2.25, 6.75)";
    assert_eq c_str(c_div(z1, z2)), "Complex(1.5, 0.5)";
    assert_eq c_str(c_mul(z1, Complex(-1, 0))), "Complex(-1.5, -3)";
    assert_eq c_str(c_conj(z1)), "Complex(1.5, -3)";
    assert_eq c_abs(z1), 3.3541019662496847;
    assert_eq c_str(c_pow(z1, z2)), "Complex(-1.1024829553708577, -0.38306415118517323)";
    assert_eq z1.r, 1.5;
    assert_eq z1.i, 3;
}

