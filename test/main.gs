costumes "blank.svg";

%include inflator/assert
%include inflator/math
%include inflator/cmath

onflag {main;}
proc main {
    Complex i = Complex(0, 1);
    Complex i_tetrated = c_pow(i, i);

    log C_STR(i_tetrated);
    assert_eq i_tetrated.i, 0;
}
