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
    assert_eq c_str(c_neg(z1)), "Complex(-1.5, -3)";
    assert_eq c_str(c_conj(z1)), "Complex(1.5, -3)";
    assert_eq c_abs(z1), 3.3541019662496847;
    assert_eq c_str(c_pow(z1, z2)), "Complex(-1.1024829553708577, -0.38306415118517323)";
    assert_eq z1.r, 1.5;
    assert_eq z1.i, 3;

    assert_eq c_arg(z1), 1.107148717793749;
    assert_eq c_str(c_ln(z1)), "Complex(1.2101840643252146, 1.107148717793749)";
    assert_eq c_str(c_exp(z1)), "Complex(-4.436838551728913, 0.6324559979077892)";
    assert_eq c_str(c_pow(z1, z2)), "Complex(-1.1024829553708577, -0.38306415118517323)";
    assert_eq c_str(c_sqrt(z1)), "Complex(1.5578995421395176, 0.9628348680107943)";

    assert_eq c_str(c_sin(z1)), "Complex(10.042442367571672, 0.7086364393455672)";
    assert_eq c_str(c_cos(z1)), "Complex(0.7121582372427564, -9.992780016477218)";
    assert_eq c_str(c_tan(z1)), "Complex(0.000703049224351416, 1.0049197189087808)";
    assert_eq c_str(c_asin(z1)), "Complex(0.4465670493227935, 1.9168395291469713)";
    assert_eq c_str(c_acos(z1)), "Complex(-1.1242292777316112, 1.9168395294690703)";
    assert_eq c_str(c_atan(z1)), "Complex(1.4284311075330998, 0.26789590407004754)";

    assert_eq c_str(c_sinh(z1)), "Complex(-2.107970683708406, 0.33197206395764495)";
    assert_eq c_str(c_cosh(z1)), "Complex(-2.3288678680205077, -0.3004839339501442)";
    assert_eq c_str(c_asinh(z1)), "Complex(1.8902413595876415, 1.0886482420793646)";
    assert_eq c_str(c_acosh(z1)), "Complex(1.9168395294690703, 1.1242292777316112)";
}
