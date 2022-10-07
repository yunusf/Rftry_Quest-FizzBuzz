function prosesFizzBuzz() {
    const id_angka = document.getElementById("n_angka").value;
    let id_t_angka = document.getElementById("t_angka");
    let id_t_hasil = document.getElementById("t_hasil");
    let arrHasil = [];

    for(i = 1; i <= id_angka; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arrHasil.push(` fizzbuzz(${i})`);
        } else if (i % 5 == 0) {
            arrHasil.push(` buzz(${i})`);
        } else if (i % 3 == 0) {
            arrHasil.push(` fizz(${i})`);
        } else {
            arrHasil.push(` ${i}`);
        }
    }
    
    id_t_angka.innerText = id_angka;
    id_t_hasil.innerText = arrHasil;
}