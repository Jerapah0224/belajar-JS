/*  PENTING

    1. Dalam Array di javascript, angka dimulai dari 0. jadi 0=1 dan 1=2.
    2. Jika ingin panggil class maka pakai tanda . (titik)
    3. Jika ingin panggil id    maka pakai tanda # (pagar)
*/

/*Belajar Seleksi element dari html*/
    /* untuk Id */
    const getId = document.getElementById('app');
    console.log(getId);
    /* untuk Class*/
    const getClass = document.getElementsByClassName('text');
    console.log(getClass[0]);
    /* untuk Name*/
    const getName = document.getElementsByName('isi');
    console.log(getName[0]);
    /* untuk Tag Name*/
    const getTag = document.getElementsByTagName('p');
    console.log(getTag[2]); 
    /* untuk Query*/
    const getQuery = document.querySelector('#app');
    console.log(getQuery);
    /* untuk Query All*/
    const getQueryAll = document.querySelectorAll('.text');
    console.log(getQueryAll[0]);


/*Belajar Menjalankan Method Text, Html, Value */
    const tag = document.querySelector('#app');
    /*Method innerText */
    console.log(tag.innerText);

    tag.innerText ='ini menjadi innetText';

    /*Method innerHTML */
    console.log(tag.innerHTML);

    tag.innerHTML = `<div>
                    <p>Ini menjadi paragraf 1</p>
                    <p>Ini menjadi paragraf 2</p>
                    </div>`;

    /*Method textContent */
    console.log(tag.textContent);

    tag.textContent ='ini menjadi textContent';


    /* */
    