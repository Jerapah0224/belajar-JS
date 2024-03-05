
/* VARIABEL var. var tidak memiliki block scope sehingga tidak baik untuk digunakan sekarang,*/
// var namaKu = 'muhammad';
// namaKu = 'yassir';
// console.log(namaKu);

// var namaKu = 'muhammad';
// if (true){
//     var namaKu = 'yassir';
//     console.log(namaKu);
// };
// console.log(namaKu);

/* VARIABEL let. let memiliki block scope sehingga lebih baik dibandingkan dengan var.*/
// let namaKu = 'muhammad';
// namaKu = 'yassir';
// console.log(namaKu);

// let namaKu = 'muhammad';
// if (true){
//     let namaKu = 'yassir';
//     console.log(namaKu);
// };
// // console.log(namaKu);

/* VARIABEL const. const memiliki block scope dan const tidak bisa memiliki nama variabel yang sama.*/
// const namaKu = 'muhammad';
// namaKu = 'yassir';
// console.log(namaKu);

// const namaKu = 'muhammad';
// if (true){
//     const namaKu = 'yassir';
//     console.log(namaKu);
// };
// console.log(namaKu);



/*TIPE DATA number */
// let tempat = 20;
// console.log(tempat);

/*TIPE DATA string. harus menggunakan tanda koma atas '' atau "" */
// let tempat = 'nama saya';
// tempat = "yassir";
// console.log(tempat);

/*TIPE DATA undefined. memang value nya tidak ada atau di bilang ya kosong kek cinta nya ke kamu :( */
// let tempat;
// console.log(tempat);

/*TIPE DATA boolean. value nya hanya true atau false saja. */
// let tempat = true;
// tempat = false;
// console.log(tempat);

/*TIPE DATA QUIZ */
// let nilaiSatu = "30";
// let nialiDua = 20;
// let total = nilaiSatu + nialiDua;
// console.log(total);

// let nilaiSatu = 30;
// let nialiDua = 20;
// let total = nilaiSatu + nialiDua;
// console.log(total);

/*TIPE DATA ARRAY. didalam javaScript angka dimulai dari 0, dan harus menggunakan tanda [ ]. valuenya bisa apa saja, jika string maka pakai tanda '' atau "". */
// let buah = ['mangga', 'apel', 'nenas', 'semangka'];
// buah.length;         // 4
// buah.reverse();      //[ 'semangka', 'nenas', 'apel', 'mangga' ]
// buah.sort();         //[ 'apel', 'mangga', 'nenas', 'semangka' ]
// buah.join(', ');     //apel, mangga, nenas, semangka
// console.log(buah.join(', '));
// //lebih lengkap bisa lihat video atau dari dokumentasinya di internet

/*TIPE DATA OBJECT. menggunakan tanda { },di dalam kurung terdapat {key: 'value', key: 'value', key: 'value' } */
// const bio = {
//     namaDepan : 'Muhammad',
//     namaBelakang : 'Yassir',
//     tahunLahir : 2003,
//     citaCita : 'Ingin berjumpa dengan jodohnya :)'

// };
// bio.namaDepan;// Muhammad
// bio['namaBelakang']; //Yassir
// 'citaCita' in bio; // true
// 'cinta' in bio; // false kosong mbak iki lo mbakkk 

// bio.pacar = 'Haram Haram Harammmmm';
// delete bio.tahunLahir;

// Object.keys(bio); //[ 'namaDepan', 'namaBelakang', 'citaCita', 'pacar' ]
// Object.values(bio); // ['Muhammad','Yassir','Ingin berjumpa dengan jodohnya :)','Haram Haram Harammmmm']
// console.log(Object.values(bio));
// //lebih lengkap bisa lihat video atau dari dokumentasinya di internet

/*MANIPULASI STRING. tak kalah penting kawan!!! */
// const title = "Belajar JavaScript";
// const brand = 'SSR Company';
// const pesan = title + ' di ' + brand;
// pesan.toLowerCase();//belajar javascript di ssr company
// pesan.toUpperCase();//BELAJAR JAVASCRIPT DI SSR COMPANY
// pesan.length; // 33 huruf
// brand.charAt(1); //S
// title.concat(brand); //Belajar JavaScriptSSR Company
// `${title} di ${brand}`; //Belajar JavaScript di SSR Company. cara ini digunakan untuk pembuatan yang lebih kompleks
// console.log(`${title} di ${brand}`);

// const bil1 = "10";
// const bil2 = 20;
// bil1 + bil2; //1020
// Number(bil1) + bil2; //30
// parseInt(bil1) + bil2; //30
// bil2.toString(); //cara untuk mengubah number ke string
// console.log(bil2.toString());



/*OPERATOR ARITMATIKA */
// let angka1 = 24;
// let angka2 = 2;
// let angka3 = 4;

// console.log(angka1 + angka2); // 26 OP jumlah
// console.log(angka1 - angka2); // 22 OP kurang
// console.log(angka1 * angka2); // 48 OP kali
// console.log(angka1 / angka2); // 12 OP bagi
// console.log(angka1 % angka2); // 0  OP modulus (mengembalikan sisa pembagian)

// for (let i = 0; i <= angka3; i++) {
//     console.log(i);; 
// } OP increment yaitu ++

// for (let i = 6; i > angka3; i--) {
//     console.log(i);
// } OP decrement yaitu --

/*OPERATOR PENUGASAN */
// let a = 10;

// console.log(a += 5); // 15                    OP +=
// console.log(a -= 3); // 7                     OP -=
// console.log(a *= 5); // 50                    OP *=
// console.log(a %= 2); // 0                     OP %=
// console.log(a /= 3); // 3.333 3333333333335   OP /=

/*OPERATOR PERBANDINGAN */
// let a = 4;
// let b = '4';
// let c = 8;
// let d = 4;

// console.log(a == b);    // true
// console.log(a == c);    // false
// console.log(a === b);   // false 
// console.log(a === c);   // false
// console.log(a != b);    // false
// console.log(a != c);    // true
// console.log(a !== b);   // true
// console.log(a !== c);   // true
// console.log(a > c);     // false 
// console.log(a < c);     // true
// console.log(a > c);     // false 
// console.log(a < c);     // true
// console.log(a <= d);    // true
// console.log(a >= d);    // true

/*OPERATOR LOGIKA */
// let username = 'yassir';
// let password = 'yassirganteng123';
// let verpass = 'gantengbet';

// if (username != verpass) {
//     console.log('verifikasi salah');
// } // verifikasi salah. OP LOGIKA     NOT  !=



// if (username == '' || password == '' || verpass == '') {
//     console.log('Data harus diisi');
// } else {
//     console.log('Login success');
// } // Login success. OP LOGIKA      OR     ||



// if (username == 'yassir' && password == 'yassirganteng123') {
//     console.log('Login Awak Berhasil :)');
// } else {
//     console.log('Login tidak berhasil :(');
// } //Login Awak Berhasil :). OP LOGIKA  AND    &&



/*IF, ELSE IF, ELSE */
let nilai1 = 85;
let nilai2 = 75;

// if (nilai1 >= 85) {
//     console.log('lulus');
// } //lulus        if 

// if (nilai1 >= 85 ) {
//     console.log('naik');
// } else {
//     console.log('tetap');
// } // naik        if dan else 

// if (nilai1 >= 85) {
//     console.log('Dapat A');
// } else if (nilai2 >= 75) {
//     console.log('Dapat B');
// } else {
//     console.log('Kurang Baik');
// } // Dapat A     if, else if, dan else


/*SWITCH CASE */
// let buah ='apel';

// switch (true) {
//     case 'semangka':
//         console.log('tidak suka');
//         break;
//     case 'salak':
//         console.log('tidak suka');
//         break;
//     default:
//         console.log('suka');
//         break;
// } // suka


// let mtk = 80;

// switch (false) {
//     case mtk >= 75 && mtk <= 100:
//         console.log('tidak');
//         break;
//     default:
//         console.log('lulus');
//         break;
// } // lulus

/*FUNCTION*/




/*  
    NAMA    :      MUHAMMAD YASSIR 
    NPM     :      2309100114
*/