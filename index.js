var arrHasil = [];

function prosesMinMax() {
    let id_angka = document.getElementById("n_angka").value;
    let id_t_angka = document.getElementById("t_angka");
    let id_t_hasilbesar = document.getElementById("t_hasil_besar");
    let id_t_hasilkecil = document.getElementById("t_hasil_kecil");
        
    arrHasil.push(id_angka);
    id_t_angka.innerText = arrHasil;

    nilai_max = Math.max(...arrHasil);    
    nilai_min = Math.min(...arrHasil);
    
    id_t_hasilbesar.innerText = nilai_max;
    id_t_hasilkecil.innerText = nilai_min;
}