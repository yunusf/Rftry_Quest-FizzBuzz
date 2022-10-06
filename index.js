function prosesFizzBuzz() {
    const id_angka = document.getElementById("n_angka").value;
    let id_t_angka = document.getElementById("t_angka");
    let id_t_hasil = document.getElementById("t_hasil");
    let arrHasil = [];

    function fizzBuzz(n) { 
        // let a = 1;

        for(i = 1; i <= n; i++) {
            // a *= i;

            if (i % 3 == 0 && i % 5 == 0) {
                // return "fizzbuzz";
                arrHasil.push("fizzbuzz")
            } else if (i % 5 == 0) {
                // return "buzz";
                arrHasil.push("buzz")
            } else if (i % 3 == 0) {
                // return "fizz";
                arrHasil.push("fizz")
            } else {
                // return i;
                arrHasil.push(i)
                // console.log(i);
            }
        }
        // return a;   
    }

    console.log(arrHasil);
    let hasil_fakto = fizzBuzz(id_angka);
    id_t_angka.innerText = id_angka;
    id_t_hasil.innerText = arrHasil;
}