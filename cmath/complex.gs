# Operations to do with the Complex struct (non-mathematical) and the struct itself
struct Complex {
    real,
    imag
}

func complex(real, imag) Complex {
    # This reduces the amount of 'boilerplate' code for making complex structs.

    return Complex{
        real: $real,
        imag: $imag
    };
}

func c_tostr(Complex z) {
    if $z.imag > 0 {
        return $z.real & " + " & $z.imag & "i";
    } else {
        return $z.real & " - " & -$z.imag & "i";
    }
}