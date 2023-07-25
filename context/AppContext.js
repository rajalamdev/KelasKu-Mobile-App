import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const useAppContext = () => useContext(AppContext)

const AppProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})
    const [currentSubject, setCurrentSubject] = useState({})
    const [tmp, setTmp] = useState({})

    const subjects = [
        {
            name: "Matematika",
            progress: 0,
            image: require("../assets/Subjects/math.jpg"),
            headline: "limit, turunan, integral",
            desc: "matematika merupakan suatu bahan kajian yang memiliki objek abstrak dan dibangun melalui proses penalaran deduktif, yaitu kebenaran suatu konsep diperoleh sebagai akibat logis dari kebenaran sebelumnya sudah diterima sehingga keterkaitan antara konsep dalam matematika bersifat sangat kuat dan jelas.",
            result: 0,
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: `# Apa itu Matematika

----------

Matematika adalah suatu yang berkaitan dengan ide-ide/konsep-konsep abstrak yang tersusun secara hirarkis melalui penalaran yang bersifat deduktif, sedangkan jika matematika di PAUD itu merupakan kegiatan belajar tentang konsep matematika melalui aktifitas bermain dalam kehidupan sehari-hari dan bersifat ilmiah. Tujuan pengenalan matematika pada anak usia dini adalah agar anak mengetahui dasar-dasar pembelajaran berhitung/matematika, sehingga pada saat nanti anak akan lebih siap mengikuti pembelajaran matematika pada jenjang pendidikan selanjutnya yang lebih komplek. Pengetahuan tentang matematika sebenarnya sudah diperkenalkan sejak mulai usia lahir sampai 6 tahunan (sejak usia dini). Konsep pembelajaran anak yang berusia dibawah 3 tahun itu bisa ditemukan didalam kegiatan sehari-harinya, semisal anak menuangkan air dari wadah satu ke wadah yang lainnya, diajarkan menghitung manik-manik kecil maupun manik-manik yang berukuran besar.

lalu diantara kalian pasti ada yang bertanya-tanya, **"Emang gunanya MTK di kehidupan sehari-hari apa sih MinKu? kan kita gak mungkin saat beli Siomay ngitungin kembaliannya pake Integral :D"**.

nah Matematika itu banyak manfaat nya lho, bukan cuma digunakan hanya untuk menghitung saat jual/beli Siomay ya hehe. **MinKu** bakal spill beberapa manfaat belajar Matematika di kehidupan sehari-hari:

1. Meningkatkan kemampuan logika.
2. Mendorong kemampuan problem solving.
3. Membantu belajar mengelola keuangan.
4. Bagus untuk perkembangan otak.

itu hanya sebagian kecil manfaat dari belajar Matematika ya ges ya masih banyak lagi manfaat nya di kehidupan sehari-hari, mungkin materi pengenalan Matematika dari **MinKu** sampai situ saja, kalau banyak-banyak kalian pasti males bacanya hehe, semangat belajar! jangan lupa dilanjutin materinya ya :D.`
                },
                {
                    name: "Limit",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: `# Apa itu Limit Matematika?
                    
----------

Limit suatu fungsi f(x) untuk x mendekati suatu bilangan a adalah nilai pendekatan fungsi f(x) bilamana x mendekati a

Misalnya  
[![lim┬(x→a)⁡〖f(x)=M〗](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/contoh-limit.jpg?resize=152%2C48&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/contoh-limit.jpg?ssl=1)

ini berarti bahwa nilai dari fungsi f(x) mendekati M jika nilai x mendekati a biar lebih paham kita simak contoh berikut

Contoh 1  
Tentukan limit dari  
[![soal 2](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/soal-2.jpg?resize=140%2C50&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/soal-2.jpg?ssl=1)  
Jawab :  
Untuk nilai x mendekati 1 maka (4x2+1) akan mendekati 4.12  + 1 = 5 sehingga nilai dari  
[![jawaban contoh soal 1](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/jawaban-contoh-soal-1.jpg?resize=180%2C45&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/jawaban-contoh-soal-1.jpg?ssl=1)  
Contoh 2  
Tentukan nilai dari limit

[![lim┬(x→1)⁡〖(x^2+2x-3)/(x-1)〗](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/contoh-soal-2.jpg?resize=146%2C61&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/contoh-soal-2.jpg?ssl=1)

Jawab  
Misal sobat langsung memasukkan nili x = 1 ke dalam persamaan hasilnya tidak akan terdefinisi karena bilangan pembagi ketemu 0 (x-1). Akan tetapi bentuk di atas masih bisa disederhakan guna menghilangkan komponen pembagi yang bernilai nol yaitu

[![ lim┬(x→1)⁡〖(x^2+2x-3)/(x-1)=lim┬(x→1)⁡〖((x-1)(x+3))/((x-1))〗 〗=lim┬(x→1)⁡〖x+3=4〗](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/jawaban-contoh-soal-no-2.jpg?resize=354%2C40&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/jawaban-contoh-soal-no-2.jpg?ssl=1)

### Cara Mengerjakan Limit Fungsi yang Tidak Terdefinisi

----------

Adakalanya penggantian niali x oleh a dalam lim f(x) x→a membuat f(x) punya nilai yang tidak terdefinisi, atau f(a) menghasilkan bentuk 0/0, ∞/∞ atau 0.∞. Jika terjadi hal tersebut solusinya adalah bentuk f(x) coba sobat sederhanakan agar nilai limitnya dapat ditenntukan.

#### Limit Bentuk 0/0

----------

Bentuk 0/0 kemungkinan timbul dalam

[![bentuk o](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/bentuk-o.jpg?resize=87%2C60&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/bentuk-o.jpg?ssl=1)

ketika sobat menemukan bentuk seperti itu coba untuk utak-utik fungsi tersebut hingga ada yang bisa dicoret. Jika itu bentuk  [persaman kuadrat](https://rumushitung.com/2013/01/27/mencari-akar-akar-persamaan-kuadrat/ "Mencari Akar-Akar Persamaan Kuadrat")  sobat bisa coba memfaktorkan atau dengan cara asosiasi dan jangan lupakan ada aturan a2-b2  = (a+b) (a-b). Berikut contohnya

[![lim┬(x→1)⁡〖(x^2-1)/(x-1)=lim┬(x→1)⁡〖((x-1)(x+1))/(x-1)=lim┬(x→1)⁡〖(x+1)=2〗 〗 〗](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/soal-0-nomor-1.jpg?resize=362%2C50&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/soal-0-nomor-1.jpg?ssl=1)

[![bentuk 0 contoh soal 2](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/bentuk-0-contoh-soal-2.jpg?resize=422%2C50&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/bentuk-0-contoh-soal-2.jpg?ssl=1)

#### Bentuk ∞/∞

----------

Bentuk limit ∞/∞ terjadi pada fungsi suku banyak (polinom) seperti

[![limit tak hingga](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/limit-tak-hingga.jpg?resize=205%2C50&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/limit-tak-hingga.jpg?ssl=1)

**Contoh Soal**  
Coba sobat tentukan

[![cotoh soal limit tak hingga](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/cotoh-soal-limit-tak-hingga.jpg?resize=170%2C59&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/cotoh-soal-limit-tak-hingga.jpg?ssl=1)

**Jawab**

[![ lim┬(x→∞)⁡〖(〖4x〗^3+2x+1)/(〖5x〗^3+〖8x〗^2+6)〗 	=lim┬(x→∞)⁡〖(〖4x〗^3/x^3 +2x/x^3 +1/x^3 )/(〖5x〗^3/x^3 -〖8x〗^2/x^3 +6/x^3 )〗  =lim┬(x→∞)⁡〖(4+2/x^2 +1/x^3 )/(5-8/x+6/x^3 )〗  〖=lim┬(x→∞)〗⁡〖(4+2/∞^2 +1/∞^3 )/(5-8/∞+6/∞^3 )〗  〖=lim┬(x→∞)〗⁡〖(4+0+0)/(5-0+0)=4/5〗](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/gambar-lanjutan.jpg?resize=384%2C372&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/gambar-lanjutan.jpg?ssl=1)

Berikut rangkuman rumus cepat limit matematika bentuk ∞/∞  
[![rumus limit perubahan](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/rumus-limit-perubahan.png?resize=320%2C82&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/rumus-limit-perubahan.png?ssl=1)

-   **Jika m<n maka L = 0  
    **
-   **Jika m=n maka L = a/p**
-   **Jika m>n maka L = ∞  
    **

#### Bentuk Limit (∞-∞)

----------

Bentuk (∞-∞) sering sekali muncul dalam  [ujian nasional](https://rumushitung.com/2013/12/25/jadwal-ujian-nasional-smp-sma-2014/ "Jadwal Ujian Nasional SMP SMA 2014"). Bentuk soalnya akan sangat beragam. Namun demikian, penyelesaiannya tidak jauh-jauh dari penyederhanaan. Be creative, out of the box. Berikut contoh soal yang kami ambil dari ujian nasional 2013.

Tentukan Limit

[![2014-03-01_210110](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/2014-03-01_210110.jpg?resize=152%2C53&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/2014-03-01_210110.jpg?ssl=1)

Jika sobat masukkan x -> 1 maka bentuknya akan mmenjadi (∞-∞). Untuk menghilangkan bentuk ∞-∞ kita sederhanakan bentuk tersebut menjadi

[![jawaban soal](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/jawaban-soal.jpg?resize=323%2C261&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/jawaban-soal.jpg?ssl=1)

Sekian dulu sobat belajar kita tentang limit matematika. Untuk limit trigonometri akan kita sajikan pada postingan tersendiri. Selamat belajar.`
                },
                {
                    name: "Turunan",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: `# Fungsi Aljabar dan Fungsi Trigonometri

----------

Hai guys, bagaimana kabarnya? Tetap semangat belajar yaa… Nah, pada kesempatan ini,  **MinKu**  ingin mengajak kalian untuk belajar membahas tentang rumus turunan fungsi aljabar dan fungsi trigonometri. Disini kita aka membahas rumus kedua fungsi tersebut serta menganalisis cara penyelesaiannya melalui contoh soal. Yuk, kita bahas bersama-sama.

![Rumus Turunan Fungsi Aljabar dan Fungsi Trigonometri dan Contoh Soal](https://i0.wp.com/rumushitung.com/wp-content/uploads/2021/07/Rumus-Turunan-Fungsi-Aljabar-dan-Fungsi-Trigonometri-1.png?resize=1157%2C651&ssl=1)

Rumus Turunan Fungsi Aljabar dan Fungsi Trigonometri dan Contoh Soal

## Pengertian Turunan

----------

Apa yang dimaksud dengan turunan? Turunan adalah suatu pengukuran dari hasil fungsi yang mengalami perubahan sesuai dengan nilai atau variabel yang dimasukkan.Turunan juga disebut diferensial, dan dalam proses menentukan turunan fungsi disebut diferensiasi. Kebalikan dari turunan dinamakan dengan integral, sebab turunan dan integral memiliki hubungan terbalik. Kedua fungsi ini merupakan fungsi yang penting yang ada di dalam kalkulus, bisa kalian lihat list di bawah ini untuk simbol dalam menggunakan turunan ataupun integral.

-   y’ (turunan pertama)
-   y” (turunan kedua)
-   Dan seterusnya.

## Turunan Fungsi Aljabar

----------

Setelah kalian memahami pengertian dari turunan, untuk penjelasan mengenai turunan fungsi aljabar tidak jauh beda. Untuk lebih memahami lagi, alangkah baiknya kalian pahami beberapa rumus dasar dari turunan, sebab rumus dasar ini dapat dijadikan penyelesaian soal-soal turunan fungsi aljabar, begitupun juga untuk turunan fungsi trigonometri.

## Rumus Turunan Fungsi Aljabar

----------

Kalian harus paham dulu rumus dasar turunan agar kalian dapat menyelesaikan permasalahan soal turunan fungsi aljabar. Di bawah ini adalah beberapa rumus dasar turunan atau aturan turunan dalam fungsi aljabar sebagai berikut :

**Aturan konstanta**

Jika f(x) = k, maka f'(x) = 0 dengan k adalah konstanta. Sebagai contoh, f(x) = 6, maka turunan f(x) adalah f'(x) = 0. Setiap angka tanpa variabel (konstanta), turunannya akan menghasilkan 0 (nol).

**Aturan variabel**

Jika f(x) = x, maka f'(x) = 1 dan jika f(x) = kx, maka f'(x) = k dengan k adalah konstanta. Contoh, f(x) = 7x, menghasilkan f'(x) = 7. Setiap variabel yang berpangkat 1, akan menghasilkan turunan 1.

**Aturan pangkat**

Jika f(x) = xn, maka f'(x) = n.xn-1. Untuk konstanta tetap, sebab masih ada pasangan variabel. Contohnya,  
f(x) = 5x4, menghasilkan f'(x) = 5.4.x4-1  = 20x3

**Aturan penjumlahan**

Jika f(x) = U + V, maka f'(x) = U’ + V’. Sebagai contoh : f(x) = 4x2  + 2x, turunannya adalah f'(x) = 8x + 2

**Aturan pengurangan**

Jika f(x) = U – V, maka f'(x) = U’ – V’. Untuk contoh, f(x) = 24x2  – 5x2, turunannya f'(x) = 48x – 10x = 38x

**Aturan turunan perkalian**

Jika f(x) = U × V, maka f'(x) = U’ V + V’ U. Sebagai contoh, f(x) = 3x4  × 2x, untuk U = 3x4  dan V = 2x, maka U’ = 12x3  dan V’ = 2. Jadi, turunannya adalah :  
f'(x) = 12x3  (2x) + 2 (3x4) = 24x4  + 6x4  = 30x4

**Aturan pembagian**

Jika f(x) = U/V, maka f'(x) = (U’ V – V’ U)/V2. Contoh : f(x) = 2x2  / x, dengan U = 2x2  dan V = x, maka U’ = 4x dan V’ = 1. Jadi, turunannya adalah :  
f'(x) = [ 4x (x) – 1 (2x2) ] / x2  = (4x2  – 2x2) / x2  
= 2x2  / x2  = 2

**Aturan turunan dari fungsi**

Jika f(x) = Un, maka f'(x) = n.Un-1  . U’. Contoh : f(x) = (3x3  + 8x)2, dengan U = 3x3  + 8x, maka U’ = 9x2  + 8. Jadi, untuk turunannya :  
f'(x) = 2.(3x3  + 8x)2-1  . (9x2  + 8)  
= 2(3x3  + 8x)(9x2  + 8)  
= (6x3  + 16x)(9x2  + 8)

Versi rangkuman agar lebih jelas :

![Rumus dasar turunan fungsi aljabar](https://i0.wp.com/rumushitung.com/wp-content/uploads/2021/07/Rumus-dasar-turunan-fungsi-aljabar-1.png?resize=941%2C466&ssl=1)

Rumus dasar turunan fungsi aljabar

## Turunan Fungsi Trigonometri

----------

Untuk memahami turunan fungsi trigonometri, pelajari dulu rumus dasar turunan khusus dalam fungsi trigonometri. Ingat, ini sangat penting kalian pahami sebab dapat dijadikan sebagai penyelesaian masalah soal dalam turunan trigonometri.

## Rumus Turunan Fungsi Trigonometri

----------

Berikut adalah rumus dasar turunan dari fungsi trigonometri, antara lain :

-   f(x) = sin x → f'(x) = cos x
-   f(x) = cos x → f'(x) = – sin x
-   f(x) = tan x → f'(x) = sec2  x
-   f(x) = cot x → f'(x) = – csc2  x
-   f(x) = sec x → f'(x) = sec x tan x
-   f(x) = csc x → f'(x) = – csc x cot x
-   f(x) = sin kx → f'(x) = k cos kx
-   f(x) = cos kx → f'(x) = – k sin kx
-   f(x) = sinn  x → f'(x) = n.sinn-1  x . cos x
-   f(x) = cosn  x → f'(x) = – n.cosn-1  x . sin x
-   f(x) = sin U → f'(x) = U’ cos U
-   f(x) = cos U → f'(x) = – U’ sin U

## Contoh Soal dan Pembahasan

----------

Setelah kalian mempelajari rumus turunan aljabar dan trigonometri, jangan lupa kita harus latihan soal agar lebih menambah pemahaman. Berikut soal-soalnya :

**Soal 1 :**  
Tentukan turunan fungsi-fungsi berikut!  
a.) f(x) = x5  + 3x2  – 4  
b.) g(y) = 3y × 12y2  
c.) f(x) = 6x3  ÷ 6x

Jawaban :

a.) f(x) = x5  + 3x2  – 4

→ f'(x) = 5x5-1  + 3.2.x2-1  
→ f'(x) = 5x4  + 6x

b.) g(y) = 3y × 12y2

→ U = 3y dan V = 12y2  
→ U’ = 3 dan V’ = 24y  
→ f'(x) = U’ V + V’ U  
→ f'(x) = 3 (12y2) + 24y (3y)  
→ f'(x) = 36y2  + 72y2  = 108y2

c.) f(x) = 6x3  ÷ 6x

→ U = 6x3  dan V = 6x  
→ U’ = 18x2  dan V’ = 6  
→ f'(x) = ( U’ V – V’ U ) / V2  
→ f'(x) = [ 18x2  (6x) – 6(6x3) ] / (6x)2  
→ f'(x) = ( 108x3  – 36x3  ) / 36x2  
→ f'(x) = 72x3  / 36x2  
→ f'(x) = 2x

**Soal 2 :**  
Turunan kedua dari fungsi y = (x + 1)2  (2x – 3) adalah …..

Jawaban :

→ y = (x + 1)2  (2x – 3)  
→ U = (x + 1)2  dan V = (2x – 3)  
→ U’ = 2(x + 1) dan V’ = 2  
→ y’ = 2(x + 1) (2x – 3) + 2 (x + 1)2  
→ y’ = 2(2x2  – x – 3) + 2(x2  + 2x + 2)  
→ y’ = 4x2  – 2x – 6 + 2x2  + 4x + 4  
→ y’ = 6x2  + 2x – 2 (turunan pertama)

→ y” = 6.2.x2-1  + 2  
→  **y” = 12x + 2**  (turunan kedua)

**Soal 3 :**  
Turunan dari y = 3sin 2x + 5cos 3x – sin 2x adalah …..

Jawaban :

→ y = 3sin 2x – 5cos 3x – sin 2x  
→ y’ = 3.2.cos 2x – (-5.3.sin 3x) – 2cos 2x  
→ y’ = 6cos 2x + 15 sin 3x – 2cos 2x  
→ y’ = 15 sin 3x + 4cos 2x
`
                },
                {
                    name: "Integral",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: `
                    # Integral Matematika

----------
                    
[rumus hitung](https://rumushitung.com/author/rumushitung/)  ·  Apr 15, 2015  ·  [Leave a Comment](https://rumushitung.com/2015/04/15/rumus-integral-matematika/#respond)

Rumus Integral Matematika- Dalam matematika ada namanya turunan ada juga namanya integral. Lalu, apa itu integral? Ia adalah lawan dari turunan atau diferensiasi. Sobat di Kelas XII pasti akan mendapatkan materi matematika ini. Integral juga dikenal sebagai  antidiferensial  dan dilambangkan dengan bentuk :

[∫ (integral)](https://rumushitung.com/wp-content/uploads/2015/04/lambang-operasi-integral.png)

Sebuah fungsi F(X) disebut sebagai integral dari f(x) selagi apabila turunan pertama F'(x) = f(x). Jadi sebuah persamaan jika diturunkan kemudian diintegralkan akan mengahasilkan persamaan seperti bentuk awal.

Contoh Sobat punya persamaan f(x) =  x2  + 2x, ketika persamaan itu di turunakan maka akan menghasilkan f'(x) = 2x  + 2. Dengan menggunakan integral akan dapat mengembalikan bentuk 2x + 2 ke bentuk x2  + 2x. Jika turunan menurunkan 1 tingkat eksponen dari x2  ke x maka integral akan mengembalikan tingkat eksponen satu tingkat lebih tinggi, misal x menjadi x2, x2  menjadi x3, dan seterusnya. Ada dua macam integral yaitu integral tak tentu dan integral tentu.

### Integral Tak Tentu

----------

Yang dinamakan integral tak tentu adalah integral yang tidak memiliki batas atas dan bawah. Biasanya hanya berupa integral dari sebuah aljabar matematika. Bentuk integral ini tidak memiliki daerah asal dan tidak memiliki daerah hasil

∫ f(x) dx = F(x) + c

### Integral Tentu

----------

Pondasi dasar tentang integral tentu pertama kali diperkenalkan oleh Newton dan Leibinz yang kemudian dieperkenalkan secara modern oleh Riemann. Integral ini memiliki batas atas dan batas bawah. Dalam aplikasinya, integral tentu banyak digunakan untuk menghitung luas di bawah kurva dengan batas tertentu atau menghitung volume benda jika diputar.

[![rumus integral tentu](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/rumus-integral-tentu.png?resize=261%2C53&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/rumus-integral-tentu.png?ssl=1)

### Mengenal Sifat dan Rumus Integral

----------

berikut ini sifat-sifat dari operasi integral  

[![sifat sifat integral](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/sifat-sifat-integral.png?resize=467%2C277&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/sifat-sifat-integral.png?ssl=1)

#### Rumus Dasar Integral

----------

[![7 rumus umum](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/7-rumus-umum.png?resize=259%2C311&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/7-rumus-umum.png?ssl=1)  
selain rumus dasar di atas, sobat bisa menggunakan rumus cepat lagi praktis

[![rumus praktis integral](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/rumus-praktis-integral.png?resize=460%2C257&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/rumus-praktis-integral.png?ssl=1)

#### Integral Fungsi Aljabar

----------

Jika ada fungsi aljabar yang diintegralkan maka sobat bisa menggunakan rumus berikut:

[![integral aljabar](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/integral-aljabar.jpg?resize=253%2C124&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/integral-aljabar.jpg?ssl=1)

contoh, jika sobat punya aljabar 2x + 5 ketika diitegralkan akan mendapatkan hasil sebagai berikut:

[![∫▒〖2x+5= 2/(1+1) x^(1+1) 〗+ 5x+c ∫▒〖2x+5= x^2 〗+ 5x+c](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/contoh-soal1.png?resize=220%2C90&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/contoh-soal1.png?ssl=1)

#### Integral Fungsi Eksponen

----------

[![integral bentuk eksponensial](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/integral-bentuk-eksponensial.jpg?resize=245%2C83&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/integral-bentuk-eksponensial.jpg?ssl=1)

contoh:

∫ 3e4x  dx Kita misalkan 4x = u sehingga persamaan di atas menjadi  
∫ 3e4x  dx =  ∫ 3eu  du/4  
= 3/4  ∫ 3eu  du  
= 3/4 eu  + c  
= 3/4 e4x  + C

#### Intgeral Fungsi Trigonometri

----------

berikut rumus integral dari trigonometri yang sering dipakai dalam soal-soal matematika.

a. Integral dengan variabel sudut x atau sudut ax

    
∫ sin x dx = – cos x + c  
∫ cos x dx = sin x + c  
∫ sin ax dx = – (1/a) cos ax + c  
∫ cos ax dx = (1/a) sin ax + c  
∫ secs2  x dx = tan x + c

b. Integral dengan Bentuk Pangkat

    
∫sinn  x. cos x dx = (1/(n+1)) sinn+1 x + c  
∫ cosn  x.sin x dx = (-1/(n+1)) cosn+1 + c  
∫ sinn  x dx = ∫ sinn-1 x. sin x dx (jika n ganjil)  
∫ cosn  x dx = ∫ cosn-1x . cos x dx (jika n ganjil)  
∫ sinn  x dx = ∫ (sin2 x)n/2  dx (jika n genap)  
∫ cosn  x dx = ∫ (cos2 x)n/2  dx (jika n genap)

baca juga  [rumus-rumus trigonometri](https://rumushitung.com/2014/04/29/rumus-rumus-trigonometri-plus-trik/ "Rumus-Rumus Trigonometri (plus trik)")

### Metode-Metode Integral

----------

Ada dua metode integral yang sering digunakan dalam menyelesaikan soal. Mereka adalah metode substitusei (penggantian) dan metode parsial. Berikut penjelasannya

#### a. Metode Substitusi


Untuk mengintegralkan sebuah alajabar sobat bisa menggunakan metode penggantian atau substitusi. Misalkan u = g(x) dengan g(x) merupkan fungsi yang mempunyai turunan maka

∫ f(g(x)).g'(x) = ∫ f(u).du = F(u) + c

biar lebih paham rumusnya yuk simak contoh soal berikut:

[![contoh soal integral trigonometri](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/contoh-soal-integral-trigonometri.png?resize=275%2C277&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/contoh-soal-integral-trigonometri.png?ssl=1)

Kunci dari pemecahan soal di atas adalah permisalan 1/x kita misalkan dengan u. Jadi untuk memecahkan soal-soal integral dengan cara ini sobat harus pandai-pandai membuat permisalan. Berikut contoh lainnya:

[![soal integral permisalan](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/soal-integral-permisalan.png?resize=140%2C54&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/soal-integral-permisalan.png?ssl=1)

kita misalkan 3x2  + 9x -1 sebagai u  
sehingga du = 6x + 9  
2x + 3 = 1/3 (6x + 9) = 1/3 du

[![jawaban](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/jawaban.png?resize=292%2C108&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/jawaban.png?ssl=1)

sekranga kita ganti kembali u dengan 3x2  + 9x -1 sehingga didapatkan jawaban:

[![jawab2](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/jawab2.png?resize=182%2C43&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/jawab2.png?ssl=1)

#### b. Metode Parsial

Teknik atau metode lain yang bisa digunakan untuk melakukan integral adalah dengan metode parsial. Teknik ini biasanya digunakan untuk mencari suatu fungsi yang tidak dapat dicari integralnya jika menggunakan cara substitusi seperti pada huruf a di atas.

Jika u = f(x) dan v = g(x) maka berlaku rumus integral parsial:

∫ u.dv = u.v – ∫ v. du

Contoh Soal:

Berapa hasil dari ∫ x sin x ?  
kita misalkan u = x maka du = dx  
dv = sin x maka v = -cos x  
(lihat rumus integral trigonometri sebelumnya)  
kita masukkan ke rumus

∫ u.dv = u.v – ∫ v. du  
∫ x sin x = x (-cos x) – ∫ (-cos x) dx = -x . cos x + sin x + c

### Penggunaan Trigonometri Untuk Mencari Luas Daerah di Bawah Kurva dan Volume Benda Putar

Salah satu penggunaan integral adalah untuk mencari luas daerahh di bawah 1 atau lebih kurva. Berikut kami rangkumkan ilustrasi gambar berikut rumusnya:

#### Luas daerah yang dibatasi kurva dan sumbu x

untuk mencari luas di bawah sebuah kurva sobat cukup mengintegralkan persamaan garis tersebut kemudian memasukkan nilai x.

[![ilustrasi 1](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/ilustrasi-1.png?resize=226%2C204&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/ilustrasi-1.png?ssl=1)[![luas daerah di bawah kurva](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/luas-daerah-di-bawah-kurva.png?resize=128%2C56&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/luas-daerah-di-bawah-kurva.png?ssl=1)

#### Luas Daerah yang Dibatasi Dua Kurva dan Sumbu X

[![ilustrasi 2](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/ilustrasi-2.png?resize=296%2C211&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/ilustrasi-2.png?ssl=1)[![rumus integral dua grafik](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/rumus-integral-dua-grafik.png?resize=345%2C62&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2015/04/rumus-integral-dua-grafik.png?ssl=1)                    
`
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: [
                        {
                            question: `[![2014-03-01_210110](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/2014-03-01_210110.jpg?resize=152%2C53&ssl=1)](https://i0.wp.com/rumushitung.com/wp-content/uploads/2014/03/2014-03-01_210110.jpg?ssl=1)`,
                            option: [
                                {
                                    answer: "1/2",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "2/3",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "1/3",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "1/4",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `#Tentukan turunan fungsi berikut:f(x) = x5 + 3x2 – 4`,
                            option: [
                                {
                                    answer: "f'(x) = 42x4 + 4x",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "f'(x) = 5x8 + 8x",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "f'(x) = 5x4 + 6x",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "f'(x) = 5x5 + 5x",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `# Hasil Dari ∫2−1(6x2+8x)  dx`,
                            option: [
                                {
                                    answer: "12",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "30",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "11",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "2",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        }
                    ]
                }
            ]
        },
        {
            name: "Bahasa Indonesia",
            progress: 0,
            image: require("../assets/Subjects/bahasa.jpg"),
            headline: "Observasi, Puisi, Anekdot, dll",
            desc: "Bahasa Indonesia adalah bahasa nasional dan resmi di seluruh wilayah Indonesia. Ini merupakan bahasa komunikasi resmi, diajarkan di sekolah-sekolah, dan digunakan untuk penyiaran di media elektronik dan digital.",
            result: 0,
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: `# Bahasa Indonesia: Pengertian, Tujuan, dan Fungsi

Bahasa Indonesia adalah bahasa kebanggaan warga negara tanah ibu Pertiwi yang menjadi bahasa resmi dan bahasa persatuan Republik Indonesia. Bahasa Indonesia sangat menarik jika diulas lebih mendalam karena ternyata memiliki berbagai fakta-fakta menarik yang belum tentu Anda ketahui. Berikut adalah beberapa informasi menarik tentang BAHASA INDONESIA.

![Bahasa Indonesia](https://bahasa.foresteract.com/wp-content/uploads/2019/04/Bahasa-Indonesia.webp)

## 1. Pengertian Bahasa

Ada beberapa pengertian bahasa secara umum dan menurut para ahli bahasa.

Pengertian bahasa secara umum adalah sistem lambang bunyi ujaran yang digunakan untuk berkomunikasi oleh masyarakat pemakainya.

Bahasa (berasal dari bahasa Sanskerta भाषा, Bhāṣā) adalah kapasitas khusus yang ada pada manusia untuk dapat memperoleh serta menggunakan sistem komunikasi yang kompleks, serta sebuah bahasa adalah contoh spesifik dari sistem tersebut.

Dan berikut ini adalah definisi bahasa menurut para ahli:

1.  Menurut Gorys Keraf (1997), bahasa adalah alat komunikasi antara anggota masyarakat berupa simbol bunyi yang dihasilkan oleh alat ucap manusia.
2.  Menurut Felicia (2001), bahasa adalah alat yang digunakan untuk berkomunikasi sehari-hari, baik bahasa lisan atau pun bahasa tulis.
3.  Menurut Sunaryo (2000), bahasa di dalam struktur budaya ternyata memiliki kedudukan, fungsi serta peran ganda, bahasa sendiri adalah sebagai akar serta produk budaya yang sekaligus berfungsi sebagai sarana berfikir dan sarana pendukung pertumbuhan serta perkembangan ilmu pengetahuan dan teknologi.
4.  Menurut Owen, bahasa dapat didefinisikan sebagai kode yang diterima secara sosial atau pun sistem konvensional untuk menyampaikan konsep melalui kegunaan simbol-simbol yang dikehendaki serta kombinasi simbol-simbol yang telah diatur oleh ketentuan.
5.  Tarigan (1989) memberikan 2 definisi bahasa. Pertama, bahasa adalah suatu sistem yang sistematis, barang kali juga sistem generatif. Kedua, bahasa adalah seperangkat lambang-lambang mana suka atau pun simbol-simbol arbitrer.
6.  Menurut Santoso (1990), bahasa adalah rangkaian bunyi yang dihasilkan oleh alat ucap manusia secara sadar.
7.  Menurut Mackey (1986), bahasa salah suatu bentuk serta bukan suatu keadaan (_L__a__nguage m__ay b__e Form a__nd Not Matter_) atau pun sesuatu sistem lambang bunyi yang arbitrer, atau suatu sistem dari sekian banyak sistem-sistem, suatu sistem dari suatu tatanan atau pun suatu tatanan dalam sistem-sistem.
8.  Menurut Wibowo (2001), bahasa adalah sistem simbol bunyi yang bermakna serta berartikulasi (dihasilkan oleh alat ucap) yang mempunyai sifat arbitrer serta konvensional, dipakai sebagai alat berkomunikasi oleh sekelompok manusia untuk melahirkan perasaan serta pikiran.
9.  Menurut Walija (1996), bahasa adalah komunikasi yang paling lengkap dan efektif untuk menyampaikan ide, pesan, maksud, perasaan serta suatu pendapat kepada orang lain.
10.  Syamsuddin (1986) juga memberikan 2 definisi bahasa. Pertama, bahasa merupakan alat yang dipakai untuk membentuk pikiran, perasaan, keinginan dan perbuatan-perbuatan, serta alat yang dipakai untuk mempengaruhi dan kedua, bahasa adalah tanda yang jelas dari suatu kepribadian entah itu yang baik maupun yang buruk, sebuah tanda yang jelas dari keluarga serta bangsa dan tanda yang jelas dari budi kemanusiaan.
11.  Menurut Pengabean (1981), bahasa adalah suatu sistem yang mengutarakan serta melaporkan apa yang terjadi pada sistem saraf.
12.  Menurut Soejono (1983), bahasa adalah suatu sarana perhubungan rohani yang teramat penting dalam hidup bersama.

[read more]

## 2. Tujuan Bahasa

Tujuan bahasa jika dilihat dari tujuan penggunaannya antara lain:

1.  **Tujuan praktis**, bahasa digunakan untuk komunikasi sehari-hari
2.  **Tujuan artistik**, bahasa yang dirangkai dengan sedemikian rupa sehingga menjadi bahasa yang indah dan dapat digunakan untuk pemuas rasa estetis.
3.  **Tujuan pembelajaran**, bahasa sebagai media untuk mempelajari berbagai ilmu pengetahuan baik dalam lingkup bahasa itu sendiri atau di luar bahasa.
4.  **Tujuan filologis**, bahasa digunakan untuk mempelajari naskah-naskah tua guna menyelidiki latar belakang sejarah manusia, kebudayaan, dan adat istiadat serta perkembangan bahasa.

## 3. Fungsi Bahasa

Fungsi utama bahasa adalah sebagai alat komunikasi. Terdapat tiga fungsi utama bahasa dalam kehidupan berbangsa dan bernegara. Berikut adalah fungsi bahasa tersebut:

### 3.1 Sebagai Alat Komunikasi

Bahasa merupakan kata-kata yang memiliki makna. Setiap kata memiliki makna dan hubungan abstrak dengan suatu konsep atau objek yang diwakilinya. Melalui bahasa, setiap individu dapat melakukan komunikasi dua arah yang dapat dimengerti oleh masing-masing individu.

### 3.2 Sebagai Alat Pemersatu Bangsa

Bahasa berfungsi sebagai alat pemersatu bangsa karena penggunaannya sebagai alat untuk berkomunikasi. Setiap warga suatu bangsa dapat menyampaikan pemikirannya dengan menggunakan bahasa yang bisa dimengerti. Komunikasi masyarakat dengan menggunakan bahasa yang sama dan dapat dimengerti satu sama lain akan mempersatukan bangsa menjadi lebih kuat.

### 3.3 Sebagai Identitas Suatu Suku atau Bangsa

Setiap bangsa atau suku pasti memiliki bahasa yang berbeda-beda, hal ini bisa menjadikan bahasa sebagai identitas dan keunikan tersendiri bagi suatu bangsa atau suku.

Selain tiga fungsi utama bahasa di atas, bahasa juga memiliki beberapa fungsi lain, yaitu:

-   Sebagai alat untuk berpikir
-   Sebagai alat untuk kontrol sosial
-   Sebagai sarana menunjukkan ekspresi
-   Sebagai sarana untuk memahami diri sendiri dan orang lain
-   Sebagai alat untuk mempelajari berbagai ilmu pengetahuan dan sejarah
-   Sebagai sarana untuk membangun kecerdasan dan karakter

Menurut Effendi (2007), bahasa memiliki 4 fungsi yaitu:

1.  Basa-basi (seremonial)
2.  Mengajak atau membujuk (direktif)
3.  Menjelaskan (informatif)
4.  Mengungkapkan perasaan dan menjelmakan citra (ekspresif)

Finoza (2010) memberikan 5 fungsi bahasa yang 4 di antaranya dikutip dari Keraf (1988) dan 1 fungsi lainnya menurut pendapat pribadi, sebanyak 4 fungsi tersebut yaitu:

1.  Sebagai alat komunikasi
2.  Sebagai alat mengekspresikan diri
3.  Sebagai alat berintegrasi dan beradaptasi sosial
4.  Sebagai alat kontrol sosial

Sedangkan 1 fungsi menurut pendapat pribadi Finoza adalah sebagai alat untuk berpikir.

Widjono (2005) memberikan 13 fungsi bahasa antara lain:

1.  Sarana komunikasi
2.  Sarana integrasi dan adaptasi
3.  Sarana kontrol sosial
4.  Sarana memahami diri
5.  Sarana ekspresi diri
6.  Sarana memahami orang lain
7.  Sarana mengamati lingkungan sekitar
8.  Sarana berpikir logis
9.  Membangun kecerdasan
10.  Mengembangkan kecerdasan ganda
11.  Membangun karakter
12.  Mengembangkan profesi
13.  Menciptakan kreativitas baru

Berikut fungsi bahasa Indonesia sebagai bahasa negara:

1.  Sebagai bahasa resmi kenegaraan.
2.  Sebagai bahasa pengantar dalam dunia pendidikan.
3.  Sebagai alat penghubung di tingkat nasional untuk kepentingan perencanaan dan pelaksanaan pembangunan nasional serta kepentingan pemerintah.
4.  Sebagai alat pengembang kebudayaan, ilmu pengetahuan, dan teknologi.

## 4. Manfaat Bahasa

Terdapat banyak manfaat bahasa yang dapat didapatkan oleh manusia. Berikut beberapa manfaat bahasa yaitu:

### 4.1 Bahasa Resmi Suatu Negara

Suatu negara biasanya memiliki bahasa daerah yang bermacam-macam. Agar negara tersebut memiliki identitas budaya, perlu adanya suatu bahasa yang mewakili berbagai budaya yang ada di negara tersebut. Bahasa ini biasanya disebut sebagai bahasa resmi.

### 4.2 Pengantar dalam Dunia Pendidikan

Dalam penyampaian materi di dunia pendidikan harus menggunakan bahasa resmi agar dimengerti oleh warga negara yang bersangkutan. Hal ini juga penting agar tidak terjadi miskonsepsi dalam dunia pendidikan.

### 4.3 Alat Pengembang Kebudayaan dan Ilmu Pengetahuan

Pengembangan kebudayaan sastra tentunya sangat dipengaruhi oleh bahasa yang digunakan. Berbagai kebudayaan muncul dari bahasa yang digunakan, misalnya puisi, sajak, karangan, pantun, dan sebagainya.

Selain itu, dunia Ilmu Pengetahuan dan Teknologi (IPTEK) pun memerlukan bahasa. Bahasa digunakan untuk menulis jurnal hasil penelitian, untuk menamai berbagai objek baru hasil inovasi penelitian, untuk sarana bertukar pikiran antar peneliti, dan sebagainya.`
                },
                {
                    name: "Ringkasan Materi",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: `## **BAB 1 TEKS LAPORAN  
HASIL OBSERVASI**

### **Pengertian Teks Laporan Hasil Observasi**

Teks  
laporan hasil observasi adalah teks yang berisi laporan hasil pengamatan  
terhadap suatu objek yang diamati secara mendalam. Karena itu, isi dari teks  
laporan hasil observasi biasanya fokus pada suatu objek yang dapat terindera.

Hal-hal  
yang  _ghaib_ dan tidak terindera tidak  
mungkin dibahas dalam teks laporan hasil observasi. Hal ini karena hal yang  _ghaib_ tidak mungkin dapat diamati oleh  
manusia.

### **Struktur Teks Laporan Hasil Observasi**

Struktur  
teks laporan hasil observasi terdiri dari tiga bagian.

-   Pernyataan umum atau klasifikasi

Pernyataan  
umum berisi pembuka atau pengantar dari keseluruhan  
isi dari Teks Laporan Hasil Observasi. Isinya adalah hal yang umum dan  
ditunjukan untuk memberikan gambaran umum bagi pembaca.

-   Deskripsi bagian

Deskripsi bagian  
adalah uraian detail mengenai objek atau bagian-bagiannya. Biasanya, objek yang  
dibahas dalam Teks Laporan Hasil Observasi adalah objek yang bisa dirinci. Misalnya  
ketika teksnya tentang motor, maka dibahas bagian bagian yang ada pada motor.

-   Deskrspsi manfaat

Deskripsi  
manfaat adalah penggambaran tentang fungsi-fungsi atau manfaat yang dimiliki  
objek yang dibahas tersebut dalam kehidupan.

### **Kaidah Kebahasaan Teks Laporan Hasil  
Observasi**

Ada  
beberapa kaidah kebahasaan yang biasanya diperhatikan dalam penyusunan Teks  
Laporan Hasil Observasi. Antara lain:

-   Penggunaan kata atau frasa yang berkategori nomina (kata  
    benda)
-   Pembentukan nomina dan verba turunan dengan afiksasi
-   Penggunaan kalimat definisi dan juga kalimat deskripsi
-   Penggunaan kalimat simpleks dan kompleks

## **BAB 2 TEKS EKSPOSISI**

### **Pengertian Teks Eksposisi**

Teks  
Eksposisi adalah teks yang berisi gagasan atau pendapat yang bertujuan supaya  
orang lain memahami gagasan atau pendapat tersebut. Karena teks ekspoisi  
bersifat gagasan, maka isinya tentu berdasarkan sudut pandang tertentu yang  
sifatnya subjektif. (mungkin terjadi perbedaan pendapat)

### **Struktur Teks Eksposisi**

Struktur  
teks eksposisi terdiri dari tiga bagian:

-   Pernyataan pendapat atau tesis

Tesis  
adalah bagian pembuka dalam teks eksposisi. Isinya adalah pendapat atau gagasan  
umum yang disampaikan penulis teks.

-   Argumentasi

Argumentasi adalah unsur yang  
menjelaskan tesis. Biasanya disampaikan dalam bentuk bukti-bukti yang sifatnya  
fakta untuk menguatkan tesis

-   Penegasan ulang

Penegasan ulang  
isinya adalah penegasan dari pendapat awal atau pendapat dalam tesis.

### **Kaidah Kebahasaan Teks Eksposisi**

-   Teks eksposisi  
    dibentuk dari kalimat fakta dan kalimat opini
-   Teks eksposisi  
    biasanya banyak menggunakan kata sifat
-   Teks eksposisi  
    biasanya memuat istilah-istilah kelimuan tertentu.

## **BAB 3 TEKS ANEKDOT**

### **Pengertian Teks Anekdot**

Teks anekdot adalah  
cerita yang singkat dan juga lucu, yang biasanya digunakan untuk menyampaikan  
kritik melalui sindiri lucu terhadap kejadian yang menarik perhatian orang. Bisanya,  
sindiran terhadap orang banyak atau tokoh publik yang berpengaruh.

### **Struktur Teks Anekdot**

Teks anekdot isinya  
mirip dengan teks cerita pada umumnya. Maka biasanya terdiri dari lima bagian:

-   Abstraksi
-   Orientasi
-   Krisis
-   Reaksi
-   Koda

### **Ciri Kebahasaan Teks Anekdot**

Teks anekdot memiliki  
beberapa cirri kebahasaan.

-   Menggunakan kalimat  
    yang bersifat retoris
-   Menggunakan konjungsi  
    atau kata hubung yang menyatakan hubungan waktu atau terkadang sebab akibat
-   Menggunakan kata  
    kerja aksi
-   Menggunakan kalimat  
    yang menunjukan peristiwa di masa lalu

## **BAB 4 HIKAYAT**

### **Pengertian Hikayat**

Hikayat adalah  
salah satu diantara sekian jenis cerita rakyat. Perbedaan hikayat dengan teks  
cerita rakyat lainnya adalah penggunaan bahasanya yang menggunakan bahasa Melayu  
Klasik

### **Karakteristik Hikayat**

-   Kisahnya berupa  
    istana sentris (seputar kerajaan)
-   Kisahnya adalah  
    kisah yang isinya kemustahilan (ada yang tidak masuk akal)
-   Kisahnya bercerita  
    tentang tokoh-tokoh yang punya kesaktian
-   Pengarangnya anonym  
    (tidak diketahui)

### **Kaidah Kebahasaan Teks Hikayat**

-   Hikayat  
    menggunakan bahasa melayu klasik
-   Tanda melayu  
    klasik dan kekhasaannya adalah banyaknya kata penghubung dan kata arkais
-   Selebihnya, gaya  
    bahasa dalam hikayat memiliki kemiripan dengan cerpen. Hal ini karena cerpen  
    dan hikat sama-sama teks yang berisi cerita.

## **BAB 5 TEKS NEGOSIASI**

### **Pengertian Teks Negosiasi**

Teks Negosiasi adalah teks yang berisi suatu proses tawar menawar antara dua pihak atau lebih yang tujuannya adalah mencapai suatu kesepakatan terbaik yang diterima oleh pihak-pihak yang terlibat dalam negosiasi.

Negosiasi sebetulnya hal yang akrab dengan kamu yang suka menawar barang yang ingin kamu beli di pasar, di _marketplace,_atau miliki temanmu.

### **Unsur Pembangun Teks Negosiasi**

-   Partisipan (orang yang berpartisipasi dalam kegiatan negosiasi ; minimal dua pihak)
-   Perbedaan kepentingan dan tujuan diantara kedua pihak yang menjadi partisipan
-   Pengajuan dan penawaran
-   Persetujuan dan kesepakatan

### **Proses Negosiasi**

Negosiasi yang diceritakan dalam teks negosiasi, dilakukan dengan cara yang sopan dan santun. Dalam prosesnya, tidak proses yang merugikan salah satu pihak tertentu dengan cara penekanan, pemaksaan dan sebagainya. Untuk itu, setiap pengajuan ataupun penawaran hendaknya disertai dengan alasan.

### **Struktur Teks Negosiasi**

Struktur Teks Negosiasi terdiri dari:

-   Orientasi
-   Pengajuan
-   Penawaran
-   Persetujuan

## **BAB 6 DEBAT**

### **Pengertian Debat**

Debat adalah suatu proses kegiatan yang berisi tukar menukar pendapat dalam membahas suatu isu atau masalah. Namun, tukar menukar pendapat dalam debat harus disertai dengan alasan-alasan.

Alasan yang digunakan dalam debat sebisa mungkin adalah alasan yang kuat. Alasan itu dapat bersumber dari informasi, bukti, atau data. Hal itu agar pihak yang berpendapat bisa saling mempertahankan alasannya masing-masing.

### **Unsur-Unsur Debat**

Unsur dalam debat ada setidaknya enam unsur:

-   Mosi
-   Tim afirmasi (yang menyetujui mosi)
-   Tim oposisi (yang tidak menyetujui mosi)
-   Tim netral, termasuk didalamnya bisa merupakan penonton atau juri
-   Moderator
-   Penulis

### **Ragam Bahasa Debat**

-   Sesuai kaidah tata bahasa Indonesia. Menggunakan kaidah baku dalam berbagai aspek bahasa. Mulai dari tata ejaan maupun tata bahasa yang digunakan.
-   Ide yang disampaikan benar, bukan _hoax,_ dapat diterima hakikatnya oleh akal, maknanya padat, dan disajikan dengan tuturan kalimat yang efektif.
-   Kata yang digunakan dalam debat umumnya adalah kata kata denotatif (memiliki maknsa sebenarnya)

## **BAB 7 BIOGRAFI**

### **Pengertian Biografi**

Biografi ringkasnya adalah riwayat hidup yang ditulis oleh orang lain. Biografi tidak ditulis sendiri oleh tokoh yang dituliskan riwayatnya. Biasanya, biografi berisi riwayat hidup orang terkenal yang memiliki keistimewaan atau keteladanan.

Biografi adalah teks yang berjenis narasi. Bentuk penguraiannya adalah berkisah.

### **Struktur Teks Biografi**

-   Orientasi

Isinya biasanya berupa informasi mengenai latar belakang kisah atau peristiwa yang akan diceritakan selanjutnya biasanya menjawab ihwal siapa, kapan, dimana, dan mengapa.

-   Kejadian penting

Isinya adalah peristiwa yang dilalui tokoh yang memiliki nilai penting. Diceritakan dalam kerangka kronologis, misalnya mulai dari masa kecil, remaja, dewasa, hingga tua.

-   Reorientasi

Isinya berupa komentar atau kesimpulan yang bersifat penilaian. Dapat berupa komentar penulis atau komentar orang lain terhadap sosok yang dituliskan oleh penulis dalam biografi.

### **Cara Penggambaran Karakter Tokoh**

-   Dengan cara langsung, yakni penulis menceritakan langsung dengan menyebut karakter tokohnya
-   Dengan cara tidak langsung, yakni dengan mengutip dialog tokoh dengan tokoh lain, atau apa yang dilakukan tokoh lain yang secara tidak langsung menggambarkan tokoh yang diceritakan.

## **BAB 8 PUISI**

### **Pengertian Puisi**

Puisi adalah salah satu jenis karya sastra yang dibentuk dari susunan baris dan bait. Puisi umumnya berisi ekspresi perasaan yang digambarkan dengan gaya bahasa yang indah.

### **Istilah –Istilah Penting Dalam Puisi**

-   Suasana puisi adalah keadaan jiwa pembaca setelah membaca puisi.
-   Tema puisi adalah inti dari pesan yang hendak disampaikan penyair dalam puisinya.
-   Makna puisi adalah pesan yang ingin disampaikan penyair dalam puisinya.
-   imaji adalah kata atau susunan yang dapat mengungkapkan pengalaman sensoris. Pengalaman sensosris adalah pengalaman manusia yang didasarkan pada sensor penglihatan, pendengaran, atau perasaan.
-   Kata konkret adalah kata yang berpotensi memunculkan imaji.
-   Rima adalah bunyi yang ditimbulkan oleh huruf atau kata-kata dalam larik dan bait.`
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: [
                        {
                            question: `#Kedua belah pihak yang bersangkutan didalam negosiasi memeiliki ..... untuk menentukan kesepakatan atau hasil akhir.`,
                            option: [
                                {
                                    answer: "Kewajiban",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Wewenang",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Tanggung Jawab",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Hak yang sama",
                                    theAnswerIsTrue: true
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `Bagian teks negosiasi yang berisikan pernyataan mengenai barang atau masalah yang sedang dihadapi adalah`,
                            option: [
                                {
                                    answer: "Uraian",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Permintaan",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Penawaran",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Kesepakatan",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `#Salah satu hal yang tidak dibenarkan dalam kegiatan debat adalah....`,
                            option: [
                                {
                                    answer: "Menilai baik lawan debat",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Mengejeknya",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Berdiskusi dengannya",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Tiak menghina",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `#Salah satu yang harus ada dalam teks negosiasi adalah bagian...`,
                            option: [
                                {
                                    answer: "Pembuka",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Alamat",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Tanggal Lahir",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Lampiran",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        }
                    ]
                }
            ]
        },
        {
            name: "Bahasa Inggris",
            progress: 0,
            image: require("../assets/Subjects/english.jpg"),
            headline: "Tenses",
            desc: "Bahasa Inggris (English) merupakan bahasa resmi dari banyak negara- negara persemakmuran dan dipahami serta dipergunakan secara meluas. Bahasa Inggris dipergunakan di lebih banyak negara di dunia dibanding bahasa yang lain serta dibanding bahasa yang lain.",
            result: 0,
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: `# Apa Itu Bahasa Inggris???

Bahasa Inggris adalah bahasa yang berasal dari Inggris raya. Bahasa inggris merupakan kombinasi dari beberapa bahasa lokal yang sering dipakai oleh masyarakat Norwegia, Denmark, dan Anglo-Saxon pada abad ke-6 sampai abad ke-10 dulu. Hingga ditaklukkan Inggris oleh  **William the Conqueror**  pada tahun 1066, bahasa Inggris pun mulai sangat intensif mempengaruhi bahasa Latin juga bahasa Perancis. Dari seluruhan kosakata bahasa inggris modern, diperkirakan ±50% berasal dari bahasa Perancis dan Latin.

Saat ini, bahasa Inggris telah menjadi media komunikasi utama bagi masyarakat di berbagai negara di dunia, seperti Inggris, Amerika Serikat, Kanada, Australia, New Zealand, Afrika Selatan, serta masih banyak lagi negara yang mejadikan bahasa inggris sebagai media komunikasi utama negara mereka.

Sebagai bahasa yang paling banyak dipakai di berbagai negara di dunia, bahasa inggris sudah dianggap sebagai bahasa resmi untuk dipakai di dunia internasonal. Bahasa yang juga hampir sama populernya seperti bahasa inggris adalah bahasa mandarin.

Bahasa Inggris termasuk rumpun bahasa-bahasa Anglo-Frisia pada cabang barat bahasa-bahasa Jerman, dan merupakan sebuah bahasa subfamili dari bahasa-bahsa Indo-Eropa.

Bahasa Inggris hampir mendekati bahasa Frisia, sedikit lebih luas dari bahasa Netherlandic (Belanda –Flemish) dan dialek Jerman tingkat rendah (Plattdeutsch), serta jauh dari bahasa Jerman Modern tingkat tinggi.  
**  
Sejarah dan Perkembangan**  
Perkembangan bahasa Inggris dibagi menjadi tiga masa, yaitu:

– Bahasa Inggris Kuno atau bahasa Anglo-Saxon, 700 – 1066  
– Bahasa Inggris Tengahan, antara 1066 – 1500  
– Bahasa Inggris Baru, mulai dari abad ke 16

Tiga periode utama secara umum dikenali dalam sejarah perkembangan bahasa Inggris. Bahasa Inggris Tua (Old English), diketahui terbentuk sebagai Anglo-Saxon, tertanggali mulai Th 449 M hingga Th 1066 atau Th 1100 M. Bahasa Inggris Pertengahan (Middle English) ditenggarai mulai Th 1066 atau Th 1100 hingga Th 1450 atau Th 1500.  
Bahasa Inggris Modern (Modern English) ditanggali dari sekitar Th 1450 atau Th 1500 dan disub-bagikan ke dalam Bahasa Inggris Modern Awal (Early Modern English), dari sekitar Th 1500 hingga Th 1660, dan bahasa Inggris Akhir (Late Modern English), dari sekitar Th 1660 hingga saat sekarang ini.

**Bahasa Masa Depan**  
Saat ini, penggunaan bahasa inggris bukan digunakan sebagai penghubung bahasa komunikasi antar negara saja, tapi juga sudah mulai merambah ke berbagai bidang lain, contohnya media massa. Pada jaman yang telah modern ini, telah banyak media massa yang menggunakan bahasa inggris dalam mempublikasikan berita serta hal-hal unik lainnya. Untuk itulah sebagai bangsa yang ingin maju, kita juga harus sanggup berbicara dalam bahasa inggris agar jika suatu hari diperlukan, kita akan dengan mudah menngerti apa yang ingin disampaikan dunia.`
                },
                {
                    name: "Materi",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: `## **1.** [**Simple Present Tense**](https://www.english-academy.id/blog/simple-present-tense-pengertian-kegunaan-rumus-dan-contoh-kalimat?_ga=2.186451436.45625257.1644565446-1975160197.1644565446)

_Simple present tense_  adalah bentuk  _tense_  yang paling umum digunakan dalam kehidupan sehari-hari. Biasanya,  _simple present tense_  digunakan untuk mengungkapkan fakta, menceritakan suatu kejadian, atau kebiasaan yang terjadi di masa sekarang.

**Rumus yang digunakan untuk membentuk** **_simple present tense_****:**

**Subject + Verb 1 (Present Form)**

-   **Contoh Kalimat Positif (Positive):**  “_They speak Korean very well_.”
-   **Contoh Kalimat Negatif (Negative):** “_They don_’_t speak_  _Korean_.”
-   **Contoh Kalimat Tanya (Question):** “_Do they speak Korean?”_
    

## **2.** [**Present Continuous Tense**](https://www.english-academy.id/blog/present-continuous-tense-pengertian-rumus-fungsi-contoh-kalimat?_ga=2.186451436.45625257.1644565446-1975160197.1644565446)

Berbeda dengan  _simple present tense_,  _present continuous tense_  digunakan untuk menceritakan kejadian yang sedang berlangsung waktu kamu berbicara. Selain itu,  _tense_  yang satu ini juga bisa digunakan untuk menceritakan rencana di masa depan. Untuk  _tenses_ ini, terdapat perubahan bentuk  _verb_  dengan penambahan –_ing_  pada bagian akhir. Salah satu kata keterangan waktu yang banyak digunakan dalam  _tense_ ini adalah  _now_.

**Rumus:** Subject + am/is/are + Verb -ing (Continuous Form)

Contoh kalimatnya adalah sebagai berikut:

-   **Contoh Kalimat (Positive):**  “_She is working on her homework now_.”
-   **Contoh Kalimat (Negative):**  “_She is not working on her homework now_.”
-   **Contoh Kalimat (Question):**  “_Is she working on her homework now_?”
-   **Contoh Kalimat (To tell future plans):**  “Mark  _is moving to a new school next month_.”

## **3. [Present Perfect Tense](https://www.english-academy.id/blog/present-perfect-tense-pengertian-dan-rumusnya)**

Umumnya,  _present perfect tense_  adalah  _tense_  untuk menceritakan suatu tindakan atau aksi yang sedang berjalan atau baru saja selesai. Oh, ya! Ingatlah bahwa  _present perfect tense_  cenderung menaruh penekanan pada dampak dari suatu aksi yang sudah selesai dilakukan. Tentunya, dampak tersebut harus masih bisa dirasakan sampai saat ini.

**Rumus:**  Subject + has/have + Verb 3 (Past Participle Form)

Berikut adalah contoh kalimatnya:

-   **Contoh Kalimat (Positive):**  “_They have seen the movie_  Spider-Man: No way home.”
-   **Contoh Kalimat (Negative):**  “_They have not seen the movie_  Spider-Man: No way home.”
-   **Contoh Kalimat (Question):**  “_Have they seen the movie_  Spider-Man: No way home?”

## **4.  [Present Perfect Continuous Tense](https://www.english-academy.id/blog/present-perfect-continuous-tense)**

_Present perfect continuous tense_  digunakan untuk menunjukkan suatu aksi yang sudah selesai dilakukan pada suatu titik di masa lampau dan masih berlanjut sampai saat ini. Gimana? Kamu pasti dapat memahaminya dengan mudah, bukan?

**Rumus:**  Subject + has/have + been + Verb -ing (Continuous Form)

-   **Contoh Kalimat (Positive):**  “_I have been thinking about it_.”
-   **Contoh Kalimat (Negative):**  “_I have not been thinking about it_.”
-   **Contoh Kalimat (Question):**  “_Have I been thinking about it_?”

## **5.** [**Simple Past Tense**](https://www.english-academy.id/blog/simple-past-tense-pengertian-rumus-fungsi-dan-contoh-kalimat?_ga=2.186451436.45625257.1644565446-1975160197.1644565446)

_You_’_re right_,  _simple past tense_ ini adalah kebalikan dari  _simple present tense_. Dalam hal ini,  _simple past tense_  digunakan untuk menceritakan suatu kejadian, kebiasaan, menyatakan fakta, atau situasi yang terjadi di masa lampau.  _Tense_  ini menggunakan kata kerja bentuk kedua atau lampau. Kata keterangan waktu yang biasa digunakan dalam  _tense_ ini adalah  _yesterday, two days ago,_ dan masih banyak lagi.

**Rumus:** Subject + Verb II (Past Form)

-   **Contoh Kalimat (Positive):**  “_They called their friends yesterday_.”
-   **Contoh Kalimat (Negative):**  “_They did not call their friends yesterday_.”
-   **Contoh Kalimat (Question):**  “_Did they call their friends yesterday_?”

Melalui  tenses  ini, kamu dapat membuat cerita masa lalu untuk melatih pemahaman terhadap perubahan bentuk kata kerja.  Oh ya, guna memudahkan mempelajari  tenses  bentuk  past, kamu juga sangat disarankan untuk menguasai  [bentuk-bentuk kata kerja dalam bahasa Inggris](https://www.english-academy.id/blog/kata-kerja-bahasa-inggris). Kalau dalam  past tense, yang paling sering digunakan adalah bentuk regular verb  dan  irregular verb.

## 6.  [Past Continuous Tense](https://www.english-academy.id/blog/past-continuous-tense-pengertian-rumus-fungsi-dan-contoh-kalimat)

Sedikit lebih kompleks, menurut fungsinya,  _past continuous tense_  merupakan bentuk  _tense_ untuk menceritakan kejadian yang sedang terjadi di masa lampau. Tetapi, nggak cuma satu,  _past continuous tense_ juga dapat digunakan untuk menceritakan dua kejadian yang sedang terjadi di masa lampau. Jadi, ada satu aktivitas dibarengi dengan aktivitas yang lain.

**Rumus yang umum dipakai:** Subject + was/were + Verb -ing (Continuous Form)

-   **Contoh Kalimat (Positive):**  “_I was washing my clothes when the phone rang_.”
-   **Contoh Kalimat (Negative):**  “_I was not washing my clothes when the phone rang_.”
-   **Contoh Kalimat (Question):**  “_Was I washing my clothes when the phone rang_?”

## **7.  [Past Perfect Tense](https://www.english-academy.id/blog/past-perfect-tense)**

_Past perfect tense_  digunakan untuk menyatakan suatu kejadian yang terjadi sebelum waktu tertentu di masa lampau. Seringkali,  _past perfect tense_  lebih menaruh penekanan pada fakta bahwa sesuatu sudah terjadi dan bukan pada durasi.

**Rumus:** Subject + had + Verb 3 (Past Participle Form)

-   **Contoh Kalimat (Positive):**  “_The girl had cried before her mother came_.”
-   **Contoh Kalimat (Negative):**  “_The girl had not cried before her mother came_.”
-   **Contoh Kalimat (Question):** _“Had the girl cried before her mother came?”_  
      

## **8.  [Past Perfect Continuous Tense](https://www.english-academy.id/blog/past-perfect-continuous-tense)**

_Tense_  yang satu ini digunakan untuk menceritakan sesuatu yang terjadi di masa lalu dan sudah selesai pada titik waktu tertentu di masa lalu. Berbeda dengan  _past perfect tense_,  _past perfect continuous tense_  lebih menaruh penekanan pada durasi terjadinya sesuatu.

**Rumus:** Subject + had + been + Verb -ing (Continuous Form)

-   **Contoh Kalimat (Positive):**  “_She had been studying math all day_.”
-   **Contoh Kalimat (Negative):**  “_She had not been studying math all day_.”
-   **Contoh Kalimat (Question):**  “_Had she been studying math all day_?”

## **9.** [**Simple Future Tense**](https://www.english-academy.id/blog/simple-future-tense-pengertian-rumus-fungsi-contoh-kalimat?_ga=2.74966615.45625257.1644565446-1975160197.1644565446)

Pada dasarnya,  _simple future tense_  digunakan untuk menceritakan suatu kejadian yang akan terjadi di masa yang akan datang. Namun, selain itu,  _tense_  yang satu ini juga bisa digunakan untuk menceritakan keputusan di masa depan yang spontan atau mengekspresikan prediksi yang berhubungan dengan waktu yang akan datang.

Susunan rumus**:** Subject + will/be going to + Verb 1 (Present Form)

-   **Contoh Kalimat (Positive):**  “_She will come to the cinema tomorrow_.”
-   **Contoh Kalimat (Negative):**  “_She will not come to the cinema tomorrow_.”
-   **Contoh Kalimat (Question):**  “_Will she come to the cinema tomorrow_?”

## **10.  [Future Continuous Tense](https://www.english-academy.id/blog/future-continuous-tense)**

_Future continuous tense_  digunakan untuk menceritakan suatu kejadian yang pasti akan terjadi dalam waktu dekat. Berbeda dengan  _simple future tense_,  _future continuous tense_ biasanya digunakan untuk menceritakan sesuatu yang akan (pasti) terjadi di masa depan.

**Rumus:** Subject + will + be + Verb -ing (Continuous Form)

-   **Contoh Kalimat (Positive):**  “_He will be playing basketball in the playground tomorrow morning_.”
-   **Contoh Kalimat (Negative):**  “_He will not be playing basketball in the playground tomorrow morning_.”
-   **Contoh Kalimat (Question):**  “_Will he be playing basketball in the playground tomorrow morning_?”

Baca juga: [7 Proverbs Paling Umum dalam Bahasa Inggris dan Artinya](https://www.english-academy.id/blog/proverbs-paling-umum-dalam-bahasa-inggris-dan-artinya)

## **11.  [Future Perfect Tense](https://www.english-academy.id/blog/future-perfect-tense)**

_Future perfect tense_  digunakan untuk mengungkapkan bahwa ada suatu aksi yang akan dilakukan dan diselesaikan pada waktu tertentu di masa depan. Secara sederhana, penggunaan future  _perfect tense_ ini adalah bentuk kata untuk menunjukkan kehendak seseorang yang berhubungan dengan masa depan.

**Rumus:** Subject + will have + Verbs 3 (Past Participle Form)

-   **Contoh Kalimat (Positive):**  “_I will have finished my homework by tomorrow_.”
-   **Contoh Kalimat (Negative):**  “_I will not have finished my homework by tomorrow_.”
-   **Contoh Kalimat (Question):**  “_Will she have finished her homework by tomorrow_?”

## **12.  [Future Perfect Continuous Tense](https://www.english-academy.id/blog/future-perfect-continuous-tense)**

_Future perfect continuous tense_  digunakan untuk mengungkapkan suatu gambaran aksi yang akan berlanjut sampai titik waktu tertentu di masa depan. Dalam hal ini, aksi tersebut bisa saja dimulai pada masa lalu, sekarang, atau di masa depan dan diperkirakan akan berlanjut.

**Rumus:** Subject + will + have + been + Verb -ing

-   **Contoh Kalimat (Positive):**  “_In_  December,  _I will have been working at my company for one year_.”
-   **Contoh Kalimat (Negative):**  “_I will not have been working at my company for one year in_ December.”
-   **Contoh Kalimat (Question):**  “_In_ December,  _will you have been working at your company for one year_?”

## **13.  [Simple Past Future Tense](https://www.english-academy.id/blog/simple-past-future-tense)**

_Past future tense_  digunakan untuk membentuk kalimat tentang masa depan dari sudut pandang masa lalu. Secara spesifik,  _past future tense_  digunakan untuk menyatakan tindakan yang akan dilakukan, membuat prediksi, hingga membuat janji di masa depan pada saat berada di masa lalu. Umumnya,  _tense_ yang satu ini ditemukan dalam kalimat yang tidak langsung atau  _reported speech_.

**Rumus:** Subject + would + Bare Infinitive atau Subject + was/were + going to + Bare Infinitive

Lihat contoh sebagai berikut:

-   **Contoh Kalimat (Positive):**  “_She would forgive you_” atau “Giselle  _was going to give one beautiful bag to her best friend_.”
-   **Contoh Kalimat (Negative):**  “_She would not forgive you_” atau “Giselle  _wasn_’_t going to give one beautiful bag to her best friend_.”
-   **Contoh Kalimat (Question):**  “_Would she forgive you_?” atau “_Was_  Giselle  _going to give one beautiful bag to her best friend_?”

## **14.  [Past Future Continuous Tense](https://www.english-academy.id/blog/past-future-continuous-tense)**

Umumnya,  _past future continuous tense_, fungsi  _tense_ ini adalah untuk menunjukkan suatu peristiwa yang akan terjadi di masa lalu. Namun, peristiwa yang ada di cerita tersebut tidak dapat menjadi nyata karena satu dan lain hal yang terjadi di masa lalu.

**Rumus:** Subject + would + be + Verb -ing

Contoh dari  _past future continuous tense_:

-   **Contoh Kalimat (Positive):**  “_I would be studying at_  _your house_  _yesterday_,  _but I_  _didn_’_t because I got sick_.”
-   **Contoh Kalimat (Negative):**  “Anna  _would not be dying if she came to the hospital earlier_.”
-   **Contoh Kalimat (Question):** _“Would you be letting me see your painting?”_

## 1**5.  [Past Future Perfect Tense](https://www.english-academy.id/blog/past-future-perfect-tense)**

_Past future perfect tense_  digunakan untuk menunjukkan sebuah kegiatan yang seharusnya sudah selesai di masa lalu. Namun, sama seperti  _past future continuous tense_, aktivitas tersebut tidak terselesaikan karena satu dan lain hal yang terjadi di masa lalu.  _Oh, ya_! Bersanding dengan  _past perfect tense_,  _tense_  yang satu ini juga bisa digunakan untuk membuat kalimat  _conditional type_  3,  _lo_.

**Rumus:** Subject + would + have + Verb 3

-   **Contoh Kalimat (Positive):**  “Mina  _would have finished her homework if she hadn_’_t gone shopping_.”
-   **Contoh Kalimat (Negative):**  “_People would not have known about_  BTS  _if there were no fans behind them_.”
-   **Contoh Kalimat (Question):**  “_Would you have finished your homework before tomorrow afternoon_?”

## **16.  [Past Future Perfect Continuous Tense](https://www.english-academy.id/blog/past-future-perfect-continuous-tense)**

_Past future perfect continuous tense_  digunakan untuk menjelaskan tentang hal atau kegiatan yang akan, sedang, dan telah dilakukan di masa lalu. Biasanya, terdapat lebih dari satu keterangan waktu dalam  _tense_  yang satu ini. Catatannya,  _past future perfect continuous tense_ berbentuk asumsi atau pengandaian belaka.

**Rumus:** Subject + would + have been + Verb -ing

Contoh penggunaan  _past future perfect continuous tense_  dalam sebuah kalimat:

-   **Contoh Kalimat (Positive):**  “_I would have been working in leading companies for six years_.”
-   **Contoh Kalimat (Negative):**  “_I would not have been working in leading companies for six years_.”
-   **Contoh Kalimat (Question):** “_Would you have been working in leading companies for six years_?”`
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: [
                        {
                            question: `# I always … cars on the road every day`,
                            option: [
                                {
                                    answer: "See",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Will see ",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Saw",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Seeing",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `#They … Mira’s new friends.`,
                            option: [
                                {
                                    answer: "Were",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Is",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Are",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Have been",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `#Hendrik … football every Saturday with his friends.`,
                            option: [
                                {
                                    answer: "Playing",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Plays",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Played",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Paying Victim",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        }
                    ]
                }
            ]
        },
        {
            name: "Biologi",
            progress: 0,
            image: require("../assets/Subjects/biologi.jpg"),
            headline: "kehidupan, dan organisme hidup, termasuk struktur, fungsi, pertumbuhan, evolusi, persebaran, dan taksonominya.",
            desc: "Biologi berasal dari dua kata yaitu bios yang artinya makhluk hidup dan logos artinya ilmu, sehingga biologi dapat diartikan sebagai ilmu yang mempelajari tentang makhluk hidup. Aspek kajian dalam biologi sangatlah luas, mencakup semua makhluk hidup baik yang berada di darat, air maupun udara.",
            result: 0,
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: `# PENGERTIAN BIOLOGI
Biologi atau ilmu hayat adalah kajian tentang kehidupan, dan organisme hidup, termasuk struktur, fungsi, pertumbuhan, evolusi, persebaran, dan taksonominya. Ilmu biologi modern sangat luas, dan eklektik, serta terdiri dari berbagai macam cabang, dan subdisiplin. Namun, meskipun lingkupnya luas, terdapat beberapa konsep umum yang mengatur semua penelitian, sehingga menyatukannya dalam satu bidang.

Biologi umumnya mengakui sel sebagai satuan dasar kehidupan, gen sebagai satuan dasar pewarisan, dan evolusi sebagai mekanisme yang mendorong terciptanya spesies baru. Selain itu, organisme diyakini bertahan dengan mengonsumsi, dan mengubah energi serta dengan meregulasi keadaan dalamnya agar tetap stabil, dan vital.

Agar lebih mengenal mengenai ilmu biologi ini, Grameds dapat membaca Kamus Pintar Biologi SMP-SMA, Dilengkapi Nama-nama Penemu Bidang Biologi yang secara singkat menjelaskan keseluruhan ilmu yang wajib kamu ketahui.`
                },
                {
                    name: "Materi Singkat",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: `Berikut ini ringkasan materi ekologi Biologi kelas 10 yang dimulai dari pengertian, komponen, interaksi, piramida, dan daur biogeokimia:

## Pengertian

Ekologi merupakan ilmu yang secara khusus mempelajari hubungan yang bersifat saling ketergantungan atau timbal balik antara lingkungan dan makhluk hidup pada satu ekosistem.

Sementara ekosistem merupakan sebuah sistem yang melibatkan interaksi ketergantungan antara komponen biotik dan abiotik.

## Komponen Ekosistem

Komponen ekosistem terbagi dua yaitu komponen biotik dan abiotik. Komponen biotik meliputi semua makhluk hidup yang ada di ekosistem.

Sementara komponen abiotik meliputi semua benda mati dalam ekosistem. Penjelasan mendetail mengenai keduanya bisa kamu baca di bawah ini:

## 1. Komponen Biotik

Komponen biotik merupakan salah satu komponen dalam sebuah ekosistem. Contoh dari komponen ini adalah mikroorganisme, manusia, tumbuhan, dan hewan.

Berdasarkan peran atau fungsi yang dimilikinya, maka komponen biotik terbagi menjadi kelompok berikut ini:

## a. Produsen

Produsen merupakan komponen yang memiliki kemampuan merubah zat anorganik menjadi zat organik yang penting dan diperlukan untuk kehidupan.

Produsen misalnya adalah tumbuhan hijau dan makhluk hidup autotrof lainnya.

## b. Konsumen

Pasangan dari organisme autotrof adalah heterotrof yaitu kelompok organisme yang tidak memiliki kemampuan untuk mengolah makanannya sendiri.

Maka dari itu, heterotrof memanfaatkan makanan dari produsen atau dari autotrof.

Konsumen terbagi menjadi 3 jenis yaitu herbivor (makhluk hidup pemakan tumbuhan), karnivor (makhluk hidup pemakan daging), dan omnivor (makhluk hidup pemakan tumbuhan dan daging).

## c. Pengurai

Pengurai dikenal pula dengan istilah dekomposer. Pengurai merupakan konsumen yang dibekali kemampuan untuk menguraikan zat organik dan juga zat anorganik. Salah satu contohnya adalah jamur.

## d. Detritivor

Detritivor merupakan komponen biotik yang termasuk konsumen dan memakan bangkai organisme. Contohnya adalah ulat, semut, rayat, dan cacing tanah.

## 2. Komponen Abiotik

Komponen abiotik merupakan komponen ekosistem yang tersusun dari benda-benda mati atau tidak hidup.

Meski bukanlah makhluk hidup, namun komponen ini berperan banyak untuk kehidupan para makhluk hidup. Berikut ini komponen abiotik yang amat penting dan mendukung kehidupan dalam sebuah ekosistem:

## a. Tanah

Tanah mengandung banyak zat yang amat berguna bagi tumbuhan.

Selain itu permukaan tanah menjadi lahan penting bagi manusia untuk melakukan berbagai kegiatan produktif seperti untuk lahan perkebunan, pertanian, pemukiman, kegiatan ekonomi, dan juga pemukiman.

## b. Air

Air juga merupakan komponen abiotik yang berperan banyak dalam kehidupan pada sebuah ekosistem.

Berbagai unsur dan senyawa kimia seperti nitrat, nitris, fosfat, kalsium, dan natrium tergantung dalam air. Kualitas air ternyata tergantung dari kualitas tanah dan udara sekitarnya.

## c. Udara

Komponen abiotik pada ekosistem selanjutnya adalah udara. Udara amat penting bagi makhluk hidup yaitu untuk bernapas.

Oksigen amat diperlukan oleh pernapasan hewan dan manusia, sementara karbondioksida penting untuk pernapasan dan pengolahan makanan pada tumbuhan.

## d. Cahaya

Cahaya, dalam hal ini sinar matahari, memegang peranan penting bagi kehidupan makhluk hidup. Sinar matahari membantu proses fotosintesis pada tumbuhan.

Selain itu, juga menjadi sumber energi yang bisa dipakai untuk mengeringkan baju, sebagai tenaga listrik, untuk pengolahan makanan, dll.

## e. Topografi

Topografi merupakan kondisi atau keadaan permukaan bumi pada wilayah tertentu yang menjadi penentu distribusi makhluk hidup. Wilayahnya termasuk daratan dan lautan.

Kondisi pada wilayah tertentu menentukan jenis organisme yang hidup di dalamnya dan hal inilah yang menimbulkan terciptakan organisme endemik seperti komodo di Pulau Komodo.

Itulah Pengertian dan Komponen Ekosistem yang merupakan bagian penting dari materi ekologi Biologi kelas 10.

Baca Juga :

[](https://mamikos.com/info/pengertian-piramida-ekologi-pljr/)

﻿Pengertian Piramida Ekologi, Ciri-Ciri, Fungsi, dan Contohnya

## Interaksi dalam Ekosistem

Interaksi yang terjadi dalam ekosistem merupakan salah satu materi Ekologi Biologi kelas 10 yang amat penting. Interaksi antara makhluk apa saja yang terjadi di dalam sebuah ekosistem? Simak poin-poin berikut ini:

## 1. Simbiosis

Simbiosis merupakan hubungan timbal balik antar spesies berbeda yang hidup pada satu area tertentu. Simbiosis dibedakan menjadi tiga jenis, yaitu:

## a. Mutualisme

Simbiosis mutualisme merupakan hubungan atau interaksi timbal balik antara dua spesies yang menguntungkan kedua belah pihak. Contohnya adalah kupu-kupu dan bunga.

## b. Komensalisme

Simbiosis komensalisme merupakan simbiosis yang terjadi di antara dua spesies dimana satu pihak diuntungkan sementara yang lainnya tidak diuntungkan dan juga tidak dirugikan.

Contohnya adalah pohon mangga dan anggrek.

## c. Parasitisme

Simbiosis parasitisme merupakan simbiosis antara dua spesies berbeda dengan satu pihak diuntungkan sementara yang lainnya dirugikan.

Salah satu contohnya adalah parasit yang masuk ke dalam tubuh belalang sembah.

## 2. Amensalisme

Amensalisme disebut juga dengan istilah antibiosis. Amensalisme merupakan interaksi yang terjadi antarspesies dimana ada satu pihak yang menjadi penghambat kehidupan spesies lain.

Misalnya adalah jamur penicillium sebagai penghambat tumbuhnya bakteri.

## 3. Kompetisi

[Kompetisi](https://mamikos.com/info/contoh-simbiosis-kompetisi-pada-hewan-dan-keterangannya-pljr/)  merupakan interaksi yang menimbulkan persaingan di antara makhluk hidup. Hal ini biasanya terjadi karena persamaan makanan, tempat hidup, dan juga pasangan hidup.

Contohnya adalah persaingan singa dan harimau pada satu padang rumput karena makanannya sama yaitu dading.

## 4. Predasi

Predasi merupakan interaksi antara spesies pemangsa dan yang dimangsa. Biasanya ditandai dengan tubuh pemangsa yang lebih besar dibanding yang dimangsa. Salah satu contohnya adalah Elang yang memangsa kelinci.

## 5. Netralisme

Netralisme merupakan salah satu interaksi antara makhluk hidup dalam sebuah ekosistem tanpa adanya pihak yang diuntungkan maupun dirugikan. Contohnya adalah Sapi dan semut di sebuah padang rumput.

Demikianlah macam-macam interaksi dalam ekosistem yang juga menjadi bagian penting materi Ekologi Biologi kelas 10. Yuk, lanjut baca!

Baca Juga :

[](https://mamikos.com/info/macam-macam-simbiosis-dan-penjelasannya-pljr/)

﻿3 Macam-Macam Simbiosis dan Penjelasannya Lengkap dengan Contoh

## Piramida Ekologi

[Piramida ekologi](https://mamikos.com/info/macam-piramida-ekologi-pljr/)  merupakan struktur trofik energi yang memetakan interaksi pada rantai makanan dalam ekosistem.

Para piramida ini dikenal yang namanya trofik pertama yaitu tumbuhan, trofik kedua yaitu herbivora, dan trofik ketiga yaitu karnivora. Piramida ekologi terbagi menjadi 3 jenis, yaitu:

## 1. Piramida Energi

Piramida energi merupakan piramida yang memetakan bagaimana proses penurunan energi terjadi pada tiap tingkatan trofik.

Piramida ini disusun dengan berdasarkan produktivitas makhluk hidup di tiap tingkatan trofiknya. Semakin besar tingkatan trofik maka semakin besar pengurangan energi yang terjadi.

## 2. Piramida Jumlah

Piramida jumlah merupakan piramida yang memetakan jumlah organisme pada setiap tingkatan trofiknya.

Piramida ini akan meletakan trofik pertama pada makhluk hidup yang jumlahnya banyak. Maka, tidak heran bila produsen atau tumbuhan jumlahnya adalah yang paling banyak.

## 3. Piramida Biomassa

Piramida Biomassa merupakan piramida yang memetakan ukuran berat dari makhluk hidup pada satu ekosistem dalam satu waktu.

Biasanya dinyatakan dalam satuan gram/m2. Pengukuran berat dari makhluk hidup biasanya dilakukan dengan metode sampel.

Itulah Piramida Ekologi, salah satu materi ekologi Biologi kelas 10 yang juga penting untuk kamu hafal dan pahami.

Baca Juga :

[](https://mamikos.com/info/contoh-simbiosis-mutualisme-kacang-kedelai-pljr/)

Contoh Simbiosis Mutualisme Adalah Kacang Kedelai dengan?

## Daur Biogeokimia

Daur biogeokimia merupakan pendauran unsur dan atau senyawa kimia yang terus terjadi pada komponen biotik abiotik dan kembali lagi ke dalam lingkungan. Berikut ini daur biogeokimia yang terjadi di sebuah ekosistem:

## 1. Daur Air

Berikut ini tahapan pendauran air:

1.  Air menguap karena sinar matahari yang mengenainya dan makhluk hidup juga mengalami transpirasi atau kehilangan air karena proses yang sama.
2.  Uap air kemudian menyatu ke lapisan atmosfer dan menjadi awan. Awan bergerak karena perbedaan suhu udara atau digerakkan oleh angin.
3.  Bila terkena paparan udara dingin maka air akan menetes dan jatuh ke bumi dalam bentuk hujan.
4.  Air pun meresap ke dalam tanah. Ada yang terserap oleh tumbuhan dan ada yang terus masuk ke tanah sehingga mengalir ke sungai.
5.  Air yang ke sungai akan mengalami pendauran yang sama secara terus menerus.

## 2. Daur Karbon

Berikut ini tahapan daur ulang karbon:

1.  Karbondioksida organik dan anorganik terproduksi dan diserap oleh tumbuhan untuk keperluan fotosintesis.
2.  Pada proses ini, karbon masuk ke dalam lingkungan biotik.
3.  Pelepasannya atau kembalinya ke lingkungan abiotik bisa terjadi pada saat tumbuhan mengurai karena mati.
4.  Pembakaran bahan bakar fosil juga bisa melepaskan karbondioksida ke lingkungan abiotik yaitu udara.

## 3. Daur Nitrogen

Nitrogen memiliki fungsi yang penting bagi makhluk hidup yaitu sebagai komponen yang mampu membentuk protein. Berikut ini tahapan daur nitrogen:

1.  Fiksasi, pelepasan nitrogen ke udara dari air atau tanah yang dibantu oleh bakteri seperti Rhizobium pada tanaman kacang-kacangan.
2.  Nitrifikasi, perubahan amonia menjadi nitrat yang dibantu oleh bakteri Nitrosomonas.
3.  Asimilasi, nitrogen diserap oleh tumbuhan dan diasimilasikan menjadi asam amino dan protein.
4.  Amonifikasi, ikatan nitrogen pada tanaman yang mati akan merubahnya kembali menjadi amonia.
5.  Denitrifikasi, nitrogen dalam bentuk nitrak mengalami reduksi dan menjadi nitrogen lagi.

## 4. Daur Fosfor

Berikut ini tahapan daur forfor:

1.  Fosfor merupakan hasil pelapukan batuan fosfat dan hasil penguraian bahan organik yang dilakukan oleh dekomposer.
2.  Fosfor diserap tumbuhan untuk menyimpan dan memindahkan energi, membantu respirasi dan asimilasi, dan membentuk asam nukleat.
3.  Dalam rantai makanan, fosfor dari dalam tubuh tumbuhan akan masuk ke dalam tubuh hewan konsumen.
4.  Tumbuhan dan atau hewan yang mati akan melepaskan fosfor ke luar yang dibantu oleh dekomposer.

## 5. Daur Belerang

Berikut ini tahapan daur belerang:

1.  Sulfur atau belerang berasal dari asap kendaraan, bahan bakar fosil, asap pabrik, dan vulkanik. Bisa juga dari pembusukan yang dilakukan oleh bakteri dan jamur.
2.  Organisme pengurai pun menguraikan sulfur atau belerang kembali ke udara.

Baca Juga :

[](https://mamikos.com/info/contoh-interaksi-antar-makhluk-hidup-berupa-simbiosis-komensalisme-yaitu-pljr/)

Contoh Interaksi antar Makhluk Hidup berupa Simbiosis Komensalisme Yaitu?

## Itulah Ringkasan Materi Ekologi Biologi Kelas 10 dan Penjelasannya

Ekologi merupakan ilmu yang mempelajari tentang ekosistem dan semua interaksi yang terjadi di dalamnya. Interaksi tersebut bisa terjadi di antara komponen abiotik dan juga biotik.

Semua proses yang terjadi dalam ekosistem akan menguntungkan kedua belah pihak.

Maka dari itu, keseimbangan dalam ekosistem sudah sepatutnya untuk dijaga agar kehidupan bisa terus berlangsung dengan baik.

Semoga ringkasan materi ekologi Biologi kelas 10 dan penjelasannya dia tas semakin membuatmu paham, ya!`
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: [
                        {
                            question: `#Pencemaran lingkungan bisa diakibatkan oleh sejumlah bahan pencemar berbahaya. Salah satunya adalah kotoran yang bertumpukan dari kandang peternakan. Cara menanggulangi pencemaran seperti ini dan diubah menjadi hal yang berguna bagi manusia adalah…..`,
                            option: [
                                {
                                    answer: "Melakukan pemrosesan sebagan bahan campuran bagi industri kayu lapis",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Memanfaatkan limbah tersebut untuk keperluan industri kertas",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Melakukan pengolahan jadi pakan ternak",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Melakukan penampungan limbah hewan dan melakukan pemrosesan jadi biogas",
                                    theAnswerIsTrue: true
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `#Mikroorganisme yang dipakai pada proses bioteknologi mesti mempunyai karakteristik-karakteristik tertentu. Salah satunya….`,
                            option: [
                                {
                                    answer: "Membutuhkan persyaratan nutrisi yang tak rumit",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Mempunyai produktifitas yang tinggi dan karakteristik yang gampang dilakukan pengendalian",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Tak memproduksi toksin sampingan berbahaya",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Memproduks produk yang berkarakter alergen",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `#Kenan menderita suatu penyakit batuk terus menerus. Setelah  dilakukan pemeriksaan oleh dokter dan dirontgen dapat diketahui adanya bintik-bintik di bagian alveolusnya.  Semua itu diakibatkan oleh suatu bakteri tertentu. Yang jadi pertanyaannya adalah setelah dilakukan diagnosis dokter, Kenan mengalami penyakit apa?`,
                            option: [
                                {
                                    answer: "Emfisema",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Sinusitis",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "TBC",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Afiksi",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        }
                    ]
                }
            ]
        },
        {
            name: "Fisika",
            progress: 0,
            image: require("../assets/Subjects/fisika.jpg"),
            headline: "Atom, Gravitasi, Elastisitas, dll",
            desc: "Fisika yaitu sebuah ilmu pengetahuan dimana didalamnya mempelajari tentang sifat dan fenomena alam atau gejala alam dan seluruh interaksi yang terjadi didalamnya.",
            result: 0,
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: `# Pengertian Fisika: Sejarah, Sifat, dan Manfaatnya

![](https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/11/07022828/fisika.jpg)



**Pengertian Fisika –** Ketika mempelajari hakikat ilmu fisika, mungkin  _Grameds_ akan menyukainya, karena memang tertarik pada ilmu pengetahuan tersebut. Meski demikian, ada pula yang dijamin justru akan merasa sebaliknya, karena memang tak tertarik dengan fisika. Fisika sendiri hampir sama dengan matematika, yang banyak dikatakan sebagai ilmu yang sulit untuk dipahami.

Apabila matematika murni berisi angka dengan hitungan, maka fisika berisi kombinasi antara teori dengan hitungan. Fisika adalah pelajaran yang telah dikenal sejak duduk di bangku SMP kelas VII. Apabila  _Grameds_  di jenjang SMA memasuki jurusan IPA, maka pelajaran fisika juga akan menjadi teman karena mata pelajaran ini akan lebih kerap muncul pada jadwal pelajaran tiap harinya.

Pada jurusan atau program studi tertentu, mahasiswa di perguruan tinggi juga akan mendapatkan mata kuliah fisika. Jadi, cek kembali jenis mata kuliah yang akan didapat. Jika selama ini menghindari fisika, maka hindari juga program studi yang menyediakan mata kuliah tersebut.

Meskipun, sedikit orang yang menyukai ilmu fisika, tetapi pelajaran satu ini sebenarnya menarik untuk dipelajari. Setelah memahami rumus dan cara perhitungan pada setiap materinya, maka dijamin proses menghitung akan menjadi lebih mudah dan begitu juga untuk proses memahami soal cerita.

Maka dari itu, tak ada salahnya untuk belajar mengenai hakikat ilmu fisika yang merupakan salah satu pelajaran paling berguna dalam kehidupan sehari-hari. Artinya, ilmu fisika merupakan ilmu yang penting untuk dipahami karena dari ilmu inilah ada berbagai hal bermanfaat yang dapat ditemukan.`
                },
                {
                    name: "Materi Singkat",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: `# FISIKA DASAR 1

  
A. Besaran dan Satuan

Besaran adalah segala sesuatu yang dapat diukur dan dapat dinyatakan ke dalam angka-angka.

Berdasarkan Jenisnya, besaran terbagi 2, yaitu:

1. Besaran Pokok

Yaitu besaran yang dapat berdiri sendiri tanpa menurunkannya dari besaran-besaran lainnya.

  

Besaran Pokok

Satuan (SI)

Dimensi

Panjang

Meter (m)

L

Massa

Kilogram (kg)

M

Waktu

Sekon (s)

T

Suhu

Kelvin (K)

θ

Kuat Arus Listrik

Ampere (A)

I

Intensitas Cahaya

Candela (cd)

J

Jumlah Zat

Mol (n)

N

_Tabel Besaran Pokok_

2. Besaran Turunan

Yaitu besaran yang diturunkan dari satu atau lebih besaran-besaran pokok.

  

  

Besaran Turunan

Satuan (SI)

Dimensi

Luas

m2

L2

Volume

m3

L-3

Massa Jenis

kg/m3

ML-3

Kecepatan

m/s

LT-1

Percepatan

m/s2

LT-2

Gaya

Newton (N)

MLT-2

Tekanan

Pascal (N/m2)

ML-1T-2

Usaha

Joule (J)

ML2T-2

Daya

Watt

ML2T-3

_Tabel Besaran Turunan_

_A. Vektor_

_Besaran Skalar_

_Yaitu besaran yang memiliki nilai (besar) tetapi tidak memiliki arah._

_Contoh: Jarak, massa, waktu, suhu, kelajuan, volume, luas, energi, dan daya._

_Besaran Vektor_

_Yaitu besaran yang memiliki nilai (besar) dan arah._

_Contoh: Perpindahan, kecepatan, percepatan, gaya, usaha, momentum dan medan listrik._

_1. Resultan Vektor_

_Yaitu hasil penjumlahan/pengurangan vektor._

_Cara Perhitungannya adalah:_

_· Vektor segaris dan searah, resultannya dijumlahkan_

_· Vektor segaris dan berlawanan, resultannya dikurangi_

_· Vektor membentuk sudut resultan_

[![](http://3.bp.blogspot.com/-t_-5a1cGC-A/ViKH2SZRaCI/AAAAAAAAACU/bEL9T0Tu_Bo/s320/Untitled%2B4.jpg)](http://3.bp.blogspot.com/-t_-5a1cGC-A/ViKH2SZRaCI/AAAAAAAAACU/bEL9T0Tu_Bo/s1600/Untitled%2B4.jpg)

  

_α= sudut yang dibentuk vektor F1 dan F2_

  

  

_3._ _Komponen Vektor_

_Yaitu hasil uraian sebuah vektor F yang terletak pada bidang x dan y._

_Besar komponen vektor F masing-masing Fx = F.cos αdan Fy = F.sin α_

_Besar vektor F :_

_Arah vektor F : α= arc tan_

  

B. Pengertian Gerak

Gerak adalah perubahan posisi suatu benda terhadap titik acuan. Titik acuan sendiri didefinisikan sebagai titik awal atau titik tempat pengamat. Gerak bersifat relatif artinya gerak suatu benda sangat bergantung pada titik acuannya. Benda yang bergerak dapat dikatakan tidak bergerak, sebgai contoh meja yang ada dibumi pasti dikatakan tidak bergerak oleh manusia yang ada dibumi. Tetapi bila matahari yang melihat maka meja tersebut bergerak bersama bumi mengelilingi matahari.

Contoh lain gerak relatif adalah B menggedong A dan C diam melihat B berjalan menjauhi C. Menurut C maka A dan B bergerak karena ada perubahan posisi keduanya terhadap C. Sedangkan menurut B adalah A tidak bergerak karena tidak ada perubahan posisi A terhadap B. Disinilah letak kerelatifan gerak. Benda A yang dikatakan bergerak oleh C ternyata dikatakan tidak bergerak oleh B. Lain lagi menurut A dan B maka C telah melakukan gerak semu.

Gerak semu adalah benda yang diam tetapi seolah-olah bergerak karena gerakan pengamat. Contoh yang sering kita jumpai dalam kehidupan sehari-hari adalah ketika kita naik mobil yang berjalan maka pohon yang ada dipinggir jalan kelihatan bergerak. Ini berarti pohon telah melakukan gerak semu. Gerakan semu pohon ini disebabkan karena kita yang melihat sambil bergerak.

Pembagian Gerak

Bedasarkan lintasannya gerak dibagi menjadi 3

Gerak lurus yaitu gerak yang lintasannya berbentuk lurus

Gerak parabola yaitu gerak yang lintasannya berbentuk parabola

Gerak melingkar yaitu gerak yang lintasannya berbentuk lingkaran

Sedangkan berdasarkan percepatannya gerak dibagi menjadi 2

Gerak beraturan adalah gerak yang percepatannya sama dengan nol (a = 0) atau gerak yang kecepatannya konstan.

Gerak berubah beraturan adalah gerak yang percepatannya konstan (a = konstan) atau gerak yang kecepatannya berubah secara teratur

Pada kesempatan ini hanya akan kita bahas tentang gerak lurus saja. Gerak lurus sendiri dibagi menjadi 2 :

  

1. Gerak Lurus Beraturan (GLB)

Adalah gerak gerak benda yang lintasannya lurus dan kecepatannya konstan (tetap). Contoh gerak GLB adalah mobil yang bergerak pada jalan lurus dan berkecepatan tetap.

Persamaan yang digunakan pada GLB adalah sebagai berikut :

s = v.t

Keterangan :

s adalah jarak atau perpindahan (m)

v adalah kelajuan atau kecepatan (m/s)

t adalah waktu yang dibutuhkan (s)

Sebelum lebih lanjut membahas tentang gerak terlebih dahulu kita bahas tentang perbedaan perpindahan dan jarak tempuh.

Perpindahan adalah besarnya jarak yang diukur dari titik awal menuju titik akhir sedangkan Jarak tempuh adalah Panjang lintasan yang ditempuh benda selama bergerak.

Perhatikan gambar dibawah ini

Perpindahan

Sebuah benda bergerak dari A menuju B kemudian dia kembali ke C. Pada peristiwa di atas Pepindahannya adalah AB – BC = 200 m – 90 m = 110 m. Sedangkan jarak yang ditempuh adalah AB + BC = 200 m + 90 m = 290 m.

Apabila perpindahan dan jarak itu berbeda maka antara kecepatan dan kelajuan juga berbeda.

Kecepatan didefinisikan sebagai besarnya perpindahan tiap satuan waktu dan Kelajuan didefinisikan sebagai besarnya jarak yang ditempuh tiap satuan waktu. Perumusan yang digunakan pada kecepatan dan kelajuan adalah sama.

  

Karena dalam hal ini yang kita bahas adalah gerak lurus maka besarnya perpindahan dan jarak yang ditempuh adalah sama. Berdasarkan pada alasan ini maka untuk sementara supaya mudah dalam membahas, kecepatan dan kelajuan dianggap sama.

Pada pembahasan GLB ada juga yang disebut dengan kecepatan rata-rata. Kecepatan rata-rata didefinisikan besarnya perpindahan yang ditempuh dibagi dengan jumlah waktu yang diperlukan selama benda bergerak.

v rata-rata = Jumlah jarak atau perpindahan / jumlah waktu

Karena dalam kehidupan sehari-hari tidak memungkinkan adanya gerak lurus beraturan maka diambillah kecepatan rata-rata untuk menentukan kecepatan pada gerak lurus beraturan.

2. Gerak Lurus Berubah Beraturan (GLBB)

Adalah gerak lintasannya lurus dengan percepatan tetap dan kecepatan yang berubah secara teratur. Contoh GLBB adalah gerak buah jatuh dari pohonnya, gerak benda dilempar ke atas.

GLBB dibagi menjadi 2 macam :

  

a. GLBB dipercepat

Adalah GLBB yang kecepatannya makin lama makin cepat, contoh GLBB dipercepat adalah gerak buah jatuh dari pohonnya.

Grafik hubungan antara v terhadap t pada GLBB dipercepat adalah

  

[![](http://4.bp.blogspot.com/-UkvcwMDJqEc/ViKImFSpitI/AAAAAAAAACk/b8lxpwaz5nY/s1600/v-t.png)](http://4.bp.blogspot.com/-UkvcwMDJqEc/ViKImFSpitI/AAAAAAAAACk/b8lxpwaz5nY/s1600/v-t.png)

  

  

b. GLBB diperlambat

Adalah GLBB yang kecepatannya makin lama makin kecil (lambat). Contoh GLBB diperlambat adalah gerak benda dilempar keatas.

Grafik hubungan antara v terhadap t pada GLBB diperlambat

[![](http://2.bp.blogspot.com/-O213HJMFCjY/ViKI5i8QmUI/AAAAAAAAACs/c2f_2_vST_s/s1600/v-t-diperlambat.png)](http://2.bp.blogspot.com/-O213HJMFCjY/ViKI5i8QmUI/AAAAAAAAACs/c2f_2_vST_s/s1600/v-t-diperlambat.png)

C. Gerak Parabola

Gerak parabola merupakan gerak dua dimensi suatu benda yang bergerak membentuk sudut tertentu (sudut elevasi) dengan sumbu x atau y. Bukan gerak yang lurus vertikal atau lurus horizontal. Sebagai ilustrasi kita melempar buah apel kepada teman yang berada di depan kita. Jika dicermati, lintasan yang dilalui oleh apel adalah parabola.  
  
[](https://www.blogger.com/null)

[![](http://4.bp.blogspot.com/-DGw8WUn9NoI/ViKPH1a-yUI/AAAAAAAAAEI/2GKQShKMxJ4/s320/gerak%2Bparabola.jpg)](http://4.bp.blogspot.com/-DGw8WUn9NoI/ViKPH1a-yUI/AAAAAAAAAEI/2GKQShKMxJ4/s1600/gerak%2Bparabola.jpg)

  

  

Gerak parabola merupakan gabungan antara gerak lurus beraturan (GLB) dan gerak lurus berubah beraturan.  
  
  

Komponen sumbu x

Pada gerak parabola, komponen sumbu x merupakan komponen dari GLB, di mana kecepatan pada arah horizontal di posisi manapun adalah tetap (konstan). CATATAN PENTING : Komponen kecepatan awal (_Vo_) di sumbu x adalah _Vox = Vo cos θ_. Persamaan pada sumbu x diperoleh dari persamaan umum GLB. Tabel berikut menunjukkan persamaan gerak parabola pada sumbu x yang diambil dari persamaan umum GLB.  

[![](http://1.bp.blogspot.com/-yeRf8FhSp7g/ViKPSoRQqsI/AAAAAAAAAEQ/xH7I1NRrYew/s320/persamaan-gerak-parabola.png)](http://1.bp.blogspot.com/-yeRf8FhSp7g/ViKPSoRQqsI/AAAAAAAAAEQ/xH7I1NRrYew/s1600/persamaan-gerak-parabola.png)

  

  

Komponen sumbu y

Pada komponen sumbu y, gerak parabola merupakan GLBB diperlambat karena berlawanan dengan gravitasi. Masih ingat 3 persamaan GLBB ? perlu diketahui perubahan simbol pada gerak parabola dari GLBB : posisi atau perpindahan benda disimbolkan dengan y ( pada GLBB disimbolkan s), percepatan menggunakan percepatan gravitasi -g karena ke arah atas (pada GLBB percepatan benda a). CATATAN PENTING : Komponen kecepatan awal (_Vo_) di sumbu y adalah _Voy = Vo sin θ_. Tabel berikut menunjukkan persamaan gerak parabola pada sumbu y yang diambil dari persamaan umum GLBB.

  

[![](http://4.bp.blogspot.com/-p7nDzIhNqqQ/ViKPnXtYHhI/AAAAAAAAAEY/agrFUhM2QZo/s320/persamaan-gerak-parabola-vertikal.png)](http://4.bp.blogspot.com/-p7nDzIhNqqQ/ViKPnXtYHhI/AAAAAAAAAEY/agrFUhM2QZo/s1600/persamaan-gerak-parabola-vertikal.png)

  

  

Menentukan Waktu untuk Ketinggian Maksimum (puncak)

Ketinggian maksimum dicapai pada sumbu y, maka kita harus menggunakan tinjauan komponen sumbu y di atas. Pada ketinggian maksimum, kecepatan benda pada sumbu y adalah nol (_Vy =0_). sehingga diperoleh persamaan :  

[![](http://3.bp.blogspot.com/-RJF4gqqot6s/ViKP9nC11tI/AAAAAAAAAEo/WpCWsmN90HE/s1600/waktu-gerak-parabola.png)](http://3.bp.blogspot.com/-RJF4gqqot6s/ViKP9nC11tI/AAAAAAAAAEo/WpCWsmN90HE/s1600/waktu-gerak-parabola.png)

  
  
  
  

Menentukan Waktu untuk kembali ke posisi/ketinggian semula

waktu yang ditempuh benda selama bergerak di udara dari posisi awak ke posisi akhir pada ketinggian yang sama adalah sama dengan 2 kali waktu yang diperlukan untuk mencapai ketinggian maksimum. Sehingga diperoleh persamaan :  

![](http://2.bp.blogspot.com/-FHyGvUqfiZc/ViKQOhatq7I/AAAAAAAAAE0/CBAGKKDtRFo/s1600/waktu-total-gerak-parabola.png)

  
  
  
  

Menentukan Ketinggian Maksimum

sama seperti tinjauan menentukan waktu untuk ketinggian maksimum di atas, namun kita gunakan persamaan kecepatan yang ke dua. Yaitu :

  

[![](http://1.bp.blogspot.com/-vvlm9owF3T0/ViKQbRdhJtI/AAAAAAAAAE8/__ujGKOlPtQ/s320/ketinggian-maksimum-gerak-parabola.png)](http://1.bp.blogspot.com/-vvlm9owF3T0/ViKQbRdhJtI/AAAAAAAAAE8/__ujGKOlPtQ/s1600/ketinggian-maksimum-gerak-parabola.png)

  
  

Menentukan Jangkauan Maksimum

Jangkauan maksimum merupakan jarak maksimum yang ditempuh dalam sumbu x (arah horizontal). Untuk memperoleh persamaannya digunakan tinjauan pada sumbu x. Ingat untuk menentukan jarak pada arah horizontal digunakan persamaan _x = Vo sin θ x tx_ dimana besarnya _tx = 2 tp_.

[![](http://2.bp.blogspot.com/-Um6VeaW12pU/ViKQlmsPgEI/AAAAAAAAAFE/X5wlz8EovDs/s320/jangkauan-maksimum-gerak-parabola.png)](http://2.bp.blogspot.com/-Um6VeaW12pU/ViKQlmsPgEI/AAAAAAAAAFE/X5wlz8EovDs/s1600/jangkauan-maksimum-gerak-parabola.png)

  
  
  
  

Gerak setengah Parabola

  

[![](http://1.bp.blogspot.com/-7TrrNxk9v5E/ViKQtr7i6xI/AAAAAAAAAFM/XdL_8-4_8JU/s1600/gerak-setengah-parabola.png)](http://1.bp.blogspot.com/-7TrrNxk9v5E/ViKQtr7i6xI/AAAAAAAAAFM/XdL_8-4_8JU/s1600/gerak-setengah-parabola.png)

  

  

Gerak setengah parabola merupakan gerak suatu benda yang pada awalnya bergerak horizontal pada ketinggian tertentu, sehingga ketika jatuh ke bawah akan membentuk lintasan setengah parabola. Hal yang perlu diperhatikan pada gerak ini adalah :  
  

1. Pada arah vertikal ke bawah berlaku persamaan gerak jatuh bebas _h = ½ gt2_

2. Pada arah horizontal berlaku persamaan GLB _X = V x t_`
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: [
                        {
                            question: `#Pencemaran lingkungan bisa diakibatkan oleh sejumlah bahan pencemar berbahaya. Salah satunya adalah kotoran yang bertumpukan dari kandang peternakan. Cara menanggulangi pencemaran seperti ini dan diubah menjadi hal yang berguna bagi manusia adalah…..`,
                            option: [
                                {
                                    answer: "Melakukan pemrosesan sebagan bahan campuran bagi industri kayu lapis",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Memanfaatkan limbah tersebut untuk keperluan industri kertas",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Melakukan pengolahan jadi pakan ternak",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Melakukan penampungan limbah hewan dan melakukan pemrosesan jadi biogas",
                                    theAnswerIsTrue: true
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `#Mikroorganisme yang dipakai pada proses bioteknologi mesti mempunyai karakteristik-karakteristik tertentu. Salah satunya….`,
                            option: [
                                {
                                    answer: "Membutuhkan persyaratan nutrisi yang tak rumit",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Mempunyai produktifitas yang tinggi dan karakteristik yang gampang dilakukan pengendalian",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Tak memproduksi toksin sampingan berbahaya",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Memproduks produk yang berkarakter alergen",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `#Kenan menderita suatu penyakit batuk terus menerus. Setelah  dilakukan pemeriksaan oleh dokter dan dirontgen dapat diketahui adanya bintik-bintik di bagian alveolusnya.  Semua itu diakibatkan oleh suatu bakteri tertentu. Yang jadi pertanyaannya adalah setelah dilakukan diagnosis dokter, Kenan mengalami penyakit apa?`,
                            option: [
                                {
                                    answer: "Emfisema",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Sinusitis",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "TBC",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Afiksi",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        }
                    ]
                }
            ]
        },
        {
            name: "Komputer",
            progress: 0,
            image: require("../assets/Subjects/tech.jpg"),
            headline: "Jaringan, Pemrograman, Hardware",
            desc: "lmu Komputer merupakan bidang studi yang identik dengan computer programming. Quipperian akan dibekali keterampilan menyusun algoritma dan programming untuk mengembangkan sebuah aplikasi maupun sistem perangkat lunak. Jadi, pada dasarnya kamu akan belajar bagaimana cara agar komputer mampu melakukan berbagai hal yang diinginkan penggunanya. Di jurusan ini, ide-ide kreatifmu bisa diwujudkan apalagi di dunia informasi digital yang semakin tak terbatas ini!",
            result: 0,
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: `#### A. Pengertian Komputer

Secara umum komputer didefinisikan sebagai rangkaian elektronik yang menerima input data kemudian mengolah data tersebut dan akhirnya akan memberikan hasil dalam bentuk informasi dengan menggunakan suatu program yang tersimpan di memori computer. Selain itu juga dapat menyimpan program dan hasil pengolahan yang bekerja secara otomatis, sehingga akan mempermudah pekerjaan manusia. Komputer merupakan alat informasi, komunikasi dan hiburan.

#### B. Elemen-Elemen Komputer

Dalam penggunaannya, terdapat 3 (tiga) elemen komputer yang berperan sangat penting, yaitu:

-   Hardware (Perangkat keras)
-   Software (Perangkat Lunak)
-   Brainware (Manusia/Pengguna)

Dalam menggunakan suatu komputer perangkat keras (Hardware) berperan sangat penting. Melalui hardware yang baik, proses dari sebuah komputer akan sangat mendukung kerja orang yang menggunakannya.  
Tetapi bukan hanya hardware yang berperan penting, tetapi juga diperlukan adanya suatu perangkat lunak (Software) dan orang yang menjalankannya (Brainware). Pada Brainware ini diperlukan SDM (Sumber Daya Manusia) yang cakap dan mampu menjalankan sistem komputer yang digunakan. Untuk itu selain kecakapan di bidang hardware, juga diperlukan kecakapan di bidang software.

#### C. Hardware

Hardware komputer merupakan sekumpulan perangkat keras yang ada dalam komputer. Hardware merupakan salah satu elemen dari sistem komputer, merupakan sebuah alat yang bisa dihat dan diraba oleh manusia secara langsung yang mendukung proses komputerisasi. Hardware komputer terdiri dari beberapa komponen ulama, yaitu :

1.  Central Processing Unit (CPU)  
    CPU merupakan tempat pemrosesan instruksi-instruksi program (disebut microprocessor), CPU terdiri dari bagian bagian penting yaitu:
    -   Control Unit (CU)  
        Control Unit merupakan bagian yang berfungsi sebagai pengatur dan pengendali semua peralatan yang ada pada sistem komputer. Control Unit juga mengatur kapan alat input menerima data, mengolah dan menampilkan. Sehingga semua perintah dapat dilakukan secara berurutan tanpa adanya tumpang tindih antara satu perintah dengan perintah yang lain.
    -   Algorithmic Logical Unit (ALU)  
        Algorithmic Logical Unit merupakan bagian yang melakukan semua perhitungan aritmatika untuk menjalankan suatu perintah.
    -   Memory Unit (Mu)  
        Memory Unit berfungsi untuk menampung data/program yang diterima dari unit masukan sebelum diolah oleh CPU dan juga menerima data setelah diolah oleh CPU yang selanjutnya diteruskan ke unit keluaran. Pada suatu sistem komputer terdapat dua macam memori, yang penamaannya tergantung pada apakah alat tersebut hanya dapat membaca atau dapat membaca dan menulis padanya. Bagian memori yang hanya dapat membaca tanpa bisa menulis padanya disebut ROM (Read Only Memory), sedangkan bagian memori yang dapat melaksanakan membaca dan menulis disebut RAM (Random Access Memory).

2.  Input Device  
    Input Device merupakan perangkat yang berfungsi untuk masukan dan sering disebut juga dengan istilah input unit, perangkat yang digunakan untuk menerima input dari luar sistem, dan dapat berupa signal input atau maintenance input. Dengan demikian, alat input selain digunakan untuk memasukkan data juga untuk memasukkan program. Beberapa perangkat input mempunyai fungsi ganda, yaitu disamping sebagai alat input juga berfungsi sebagai alat output sekaligus. Alat yang demikian disebut sebagai terminal. Peralatan yang hanya bertungsi sebagai alat input dapat digolongkan menjadi alat input langsung (direct Input) dan tidak langsung (indirect input).
    -   Contoh perangkat input langsung (direct input) adalah papan ketik (keyboard), pointing device (misalnya: mouse, touch screen), Scanner (misalnya: optical data reader atau optical character recognition reader), sensor (misalnya: digitizing camera), voice recognizer (misalnya: microphone).
    -   Contoh perangkat input tidak langsung (indirect input) adalah key-to-tape yang merekam data ke media berbentuk pita (tape) sebelum diproses oleh alat pemroses, dan key-to-disk yang merekam data ke media magnetic disk (misalnya disket atau harddisk) sebelum diproses lebih lanjut.

3.  Output Device  
    Output Device merupakan perangkat yang berfungsi mengolah hasil keluaran dari suatu proses baik berupa data maupun berbentuk informasi yang telah diolah. Merupakan aktifitas menerima data dari hasil pengolahan pada bagian pemroses. Jika terdapat data pada aktifitas output ini, berarti pemroses menyerahkan tugas selanjutnya kepada bagian ini. Pada komputer contoh output device ini adalah printer (pencetak). Ketika data output dari pemroses diterimanya maka printer akan melaksanakan tugas yang diterima dari pemroses tadi.

#### D. Software

Seperangkat hardware yang membentuk sebuah PC (komputer) lengkap tidak dapat bekerja tanpa software didalamnya. Soltware ini yang mengontrol seluruh jalannya hardware yang ada, dan merupakan kumpulan beberapa perintah yang dieksekusi oleh mesin komputer dalam menjalankan pekerjaannya. Selain itu juga merupakan catatan bagi mesin komputer untuk menyimpan perintah, dokumen arsip lainnya dan merupakan data elektronik yang disimpan sedemikian rupa oleh komputer itu sendiri. Data yang disimpan ini dapat berupa program atau instruksi yang akan dijalankan oleh perintah, maupun catatan-catatan yang diperlukan oleh komputer untuk menjalankan perintah yang dijalankannya. Ada beberapa jenis program komputer yang digolongkan dalam software, yaitu operating system, program aplikasi, dan driver hardware.

1.  Software Sistem Operasi  
    Sistem Operasi atau biasa disebut  **_Operating System_**  (OS) komputer adalah sekumpulan program komputer yang saling terintegrasi, yang mengelola penggunaan perangkat keras yang terdapat pada sebuah komputer. Fungsi sistem operasi antara lain sebagai manajemen disk dan file, manajemen prosesor, manajemen memory, kontrol tampilan dan suara dan sebagainya. Pendek kata, sistem operasi ini mengontrol seluruh hal yang terjadi dalam operasional sebuah komputer. Banyak macam sistem operasi yang dipakai untuk berbagai keperluan. Masing-masing sistem operasi memiliki keunggulan dan kelemahan tersendiri.  
    Berikut ini macam macam sistem operasi:
    -   Microsoft DOS (Disk Operating System).
    -   Microsoft Windows (Windows 3.1 Windows 95, Windows 98, Windows ME,  
        Windows NT 4.0, Windows 2000, Windows XP, Windows Vista, Windows NT  
        Server, Windows 2000 Server, Windows 2003 Server, Windows 7, Windows 8, Windows 10)
    -   Linux (SuSE, Red Hat Caldera, Mandrake, Debian, Slakewave, dsb).
    -   Mac OS
    -   IBM O/S 2 Warp
    -   UNIX (Sun Solaris. AIX, SCO, dan lain lain).

2.  Software Program Aplikasi  
    Program aplikasi atau biasa disebut aplikasi, merupakan program yang berjalan pada sistem operasi dan dibuat untuk membantu user mengerjakan sesuatu dalam meningkatkan produktivitasnya. Ada banyak sekali jenis aplikasi, diantaranya:
    -   Aplikasi bisnis dan perkantoran.  
        Aplikasi bisnis dan perkantoran didominasi oleh Microsoft Office. Microsoft Office ini memiliki kumpulan aplikasi yang sangat familiar dengan pengguna, yaitu Ms Word, MS Excel, Ms Power Point, Ms Access, MS Outlook dan Ms Publisher. Sedangkan aplikasi bisnis yang berjalan pada Linux antara lain, Star Office dan K-Office.
    -   Aplikasi untuk hiburan dan entertainment.  
        Untuk aplikasi hiburan dan entertainment kita mengenal dengan Windows Media Player WinAm, Jet Audio, XingMPEG, dan sebagainya.
    -   Aplikasi untuk komunikasi.  
        Aplikasi untuk komunikasi, kita kenal dengan MIRC, Ms Netmeeting, Ms Outlook Express, ICO, dan sebagainya.
    -   Aplikasi grafis dan multimedia.  
        Aplikasi grafis dan multimedia, kita mengenal Adobe Photoshop, CorelDraw, Macromedia Freehand, ACDSee, dan sebagainya.
    -   Aplikasi teknik (CAD/CAM). Aplikasi teknik, kita kenal Ms Visio, AutoCAD, dan sebagainya.
    -   Aplikasi untuk utility dan anti virus.  
        Aplikasi untuk utility dan anti virus, kita mengenal Norton Utility, Norton Antivirus, McAfee Virus Scan, dan sebagainya.
    -   Aplikasi untuk pemrograman komputer.  
        Aplikasi untuk pemrograman komputer, kita kenal Visual Basic, Delphi, C++, dan sebagainya.
    -   Aplikasi server.  
        Aplikasi server, kita kenal Ms Personal Web Server, IIS untuk Win NT dan Win 2000, Ms Exchange untuk mail server Apache Web Server, dan sebagainya.

#### E. Brainware

Brainware merupakan bagian penting dari sebuah sistem komputasi. Hardware tidak dapat bekerja tanpa software, sedangkan hardware dan software tidak dapat bekerja tanpa brainware. Brainware dapat diartikan sebagai perangkat intelektual (dalam hal ini otak manusia) yang mengoperasikan dan mengeksplorasi kemampuan dari hardware dan software yang ada. Ada beberapa jabatan yang disandangkan pada brainware sesuai dengan fungsinya masing-masing. Diantaranya adalah Programmer, System Analyst, System Administrator, Database Administrator, Database Engineer, System Integrator, Network Designer, Network Engineer, Software Engineer, Hardware Engineer, System Auditor, dan User.

1.  Programmer  
    Merupakan orang yang membuat sebuah aplikasi dengan bantuan tool programming yang tersedia.
2.  System Analyst  
    Merupakan orang yang mempelajari sebuah proses bisnis, dan menuangkannya dalam sebuah rancangan sistem, sehingga setiap proses bisnis yang terjadi dapat diwujudkan dalam sistem komputerisasi yang terintegrasi.
3.  System Administrator  
    Merupakan orang yang bertugas untuk mengelola sebuah sistem komputer yang dirancang oleh System Analyst dan dibuat oleh Programmer.
4.  Database Administrator  
    Merupakan orang yang mengelola sebuah sistem database.
5.  Database Engineer  
    Merupakan orang yang merancang sebuah sistem database, sehingga sistem ini dapat mengakomodir kebutuhan pengelolaan data, baik saat ini maupun yang akan datang.
6.  System Integrator  
    Merupakan orang yang membangun sistem komputer yang telah dirancang oleh System Analyst dan mengintegrasikan sistem yang ada dengan sistem yang mungkin akan dibangun kemudian hari.
7.  Network Designer  
    Merupakan orang yang merancang sebuah sistem jaringan komputer untuk menghasilkan sebuah jaringan komputer yang efektif dan efisien dalam hal performa pertukaran data dan beban pengeluaran untuk membangunnya.
8.  Network Engineer  
    Merupakan orang yang merancang teknik-teknik baru dalam bidang networking. Dia bertanggungjawab untuk mengembangkan metode-metode baru untuk menghasilkan sesuatu yang berguna untuk bidang networking.
9.  Software Engineer  
    Merupakan orang yang bertanggungjawab untuk mengembangkan metode dan teknik-teknik baru dalam pembuatan sebuah software (aplikasi driver maupun sistem operasi).
10.  Hardware Engineer  
    Merupakan orang yang bertanggungjawab untuk mengembangkan metode dan teknik-teknik baru dalam pembuatan sebuah hardware sehingga muncul sebuah produk baru dengan teknologi yang lebih baik dari sebelumnya.
11.  System Auditor  
    Merupakan orang yang bertugas mengaudit sebuah sistem komputerisasi dan menemukan kelemahan-kelemahan sebuah sistem komputerisasi sehingga hasil audit itu dapat digunakan untuk mengembangkan sistem yang ada menjadi lebih sempurna lagi.
12.  User  
    Merupakan orang yang menggunakan sistem komputer yang ada.

Itulah sekilas pembahasan tentang pengenalan komputer, semoga dapat memberikan wawasan dan pengetahuan baru bagi para pembaca sekalian, sampai jumpai di pembahasan dan informasi berikutnya dari kami. Terimakasih sudah mampir, jangan sungkan bertanya dan memberikan masukan dikolom komentar ya.`
                },
                {
                    name: "Materi",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: `
                    
### Perangkat keras vs perangkat lunak

Sebelum kami membahas tentang macam-macam tipe komputer, mari membahas tentang 2 hal yang sama yang terdapat pada semua tipe komputer yaitu perangkat keras dan perangkat lunak.

-   Perangkat keras adalah komponen komputer yang memiliki struktur fisik, seperti keyboard atau mouse. Selain itu, perangkat keras juga mencakup semua komponen internal komputer, yang dapat Anda lihat pada gambar di bawah ini.
    
    ![gambar papan induk](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/interior_motherboard.jpg)
    
-   Perangkat lunak adalah sekelompok instruksi atau perintah yang menugaskan atau memberi perintah kepada perangkat keras tentang apa yang harus dilakukan dan bagaimana melakukannya. Contoh perangkat lunak seperti web browser, permainan, dan pengolah kata. Gambar di bawah ini merupakan gambar dari perangkat lunak Microsoft PowerPoint, yang digunakan untuk membuat presentasi.
    
    ![gambar screenshot PowerPoint 2013](https://media.gcflearnfree.org/assets/content/computerbasics/1/know_open_blank.png)
    

Segala sesuatu yang Anda kerjakan di komputer bergantung pada perangkat keras dan perangkat lunak. Sebagai contoh, saat ini Anda dapat melihat pelajaran ini di web browser (perangkat lunak) dan menggunakan mouse (perangkat keras) untuk berpindah dari halaman satu ke halaman lainnya. Saat Anda mempelajari tentang berbagai macam tipe komputer, tanyakan pada diri Anda tentang perbedaan-perbedaan dari segi perangkat kerasnya. Saat Anda mempelajari panduan ini, maka Anda akan memahami berbagai macam komputer serta berbagai macam perangkat lunak yang digunakannya.

### Apa saja macam-macam komputer ?

Bagi mayoritas orang saat mendengar istilah komputer, maka mereka berpikir tentang komputer pribadi seperti desktop atau laptop. Padahal komputer berwujud dalam banyak bentuk dan ukuran, serta melakukan banyak tugas yang berbeda-beda di kehidupan kita sehari-hari. Saat Anda mengambil uang tunai dari mesin ATM, memindai barcode barang belanjaan di toko, atau menggunakan kalkulator, maka Anda juga menggunakan komputer untuk aktivitas-aktivitas tersebut.

![daftar gambar orang-orang yang menggunakan komputer](https://media.gcflearnfree.org/assets/content/computerbasics/1/computer_grid_new_900.jpg)

#### komputer desktop

![sebuah komputer desktop](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/desktop_full_view.jpg)

Banyak orang menggunakan komputer desktop di kantor, rumah, dan sekolah. Komputer desktop dirancang untuk ditempatkan di atas meja. Biasanya komputer desktop terdiri dari beberapa komponen, antara lain kotak komputer, monitor, keyboard, dan mouse.  

#### komputer laptop

![sebuah komputer laptop](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/laptop_full_view.jpg)

Tipe komputer yang kedua mungkin sudah familiar bagi Anda yaitu komputer laptop yang umumnya disebut dengan laptop. Laptop adalah komputer dengan sumber daya listrik berupa baterai dimana laptop lebih portabel dari desktop yang memudahkan Anda untuk menggunakannya di mana saja.

#### komputer tablet

![sebuah komputer tablet](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/2016_what_tablet_sam.jpg)

komputer tablet (atau lebih dikenal dengan tablet) adalah komputer genggam yang bahkan lebih portabel dari laptop. Tablet menggunakan layar sentuh sebagai pengganti keyboard dan mouse untuk mengetik dan navigasi. iPad adalah contoh dari komputer tablet.

#### Komputer server

![ruangan komputer server](https://media.gcflearnfree.org/assets/content/computerbasics/1/intro_server_room.jpg)

Server adalah sebuah komputer yang mengolah permintaan-permintaan informasi dari komputer lainnya yang terhubungan dengannya pada suatu jaringan komputer. Sebagai contoh, kapanpun Anda menggunakan Internet maka Anda sedang melihat informasi yang tersimpan di server. Banyak organisasi juga menggunakan komputer server lokal untuk menyimpan dan berbagi berkas secara internal.

#### Tipe komputer lainnya

Saat ini, banyak alat elektronik berbasis komputer dengan fungsi-fungsi yang spesifik, tetapi kita tidak selalu memahami cara kerja mereka demikian. Berikut ini merupakan beberapa contohnya.

-   Ponsel cerdas: Banyak ponsel cerdas dapat melakukan banyak hal yang dapat dilakukan oleh komputer, seperti menjelajah internet dan bermain game. Biasanya ponsel cerdas ini sering disebut dengan smartphone.
-   Wearables: Teknologi Wearable adalah istilah umum untuk sekelompok alat, termasuk pelacak/pencatat kebugaran/olahraga dan jam tangan cerdas, yang dirancang untuk dipakai sehari-hari. Perangkat tipe ini sering disingkat dengan istilah wearables.
-   alat permainan (game): Sebuah alat/konsol permainan adalah komputer tipe khusus yang dapat digunakan untuk bermain video game di TV Anda.
-   Televisi (TV): Saat ini, banyak televisi dilengkapi dengan aplikasi (atau apps), yang dapat Anda gunakan untuk mengakses berbagai macam konten online. Sebagai contoh, Anda dapat menonton streaming video langsung dari internet ke televisi Anda.

### PC dan Macintosh

Komputer pribadi dibuat dalam 2 bentuk utama yaitu : PC dan Mac (Macintosh). Keduanya sama-sama berfungsi sebagaimana mestinya, namun mereka memiliki bentuk dan cara pemakaian yang berbeda. Setiap orang memiliki preferensi masing-masing dalam komputer pribadi tersebut.

#### Personal Computer (PC)

![sebuah PC dengan sistem operasi Windows](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/desktop_full_view_alt.jpg)

Tipe komputer ini dimulai dengan komputer IBM PC yang diperkenalkan pada tahun 1981. Perusahaan-perusahaan lainnya mulai menciptakan komputer yang serupa, yang disebut dengan IBM PC Compatible (biasanya disingkat dengan PC). Saat ini, komputer tipe ini merupakan tipe yang paling umum dari kategori komputer pribadi. Biasanya komputer tipe ini sudah dilengkapi dengan sistem operasi Microsoft Windows.

#### Macintosh

![sebuah komputer Macintosh (Mac)](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/desktop_mac_full_view_alt.jpg)

Komputer Macintosh diperkenalkan pada tahun 1984, dan merupakan komputer pribadi pertama yang terjual di masyarakat umum dimana komputer tersebut memiliki tatap muka grafis atau disebut dengan GUI. Seluruh komputer Macs diproduksi oleh satu perusahaan yaitu Apple dan mereka seluruhnya hampir selalu menggunakan sistem operasi Mac OS X.`
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: [
                        {
                            question: `#Papan sirkuit yang berfungsi sebagai tempat komponen - komponen komputer adalah ...`,
                            option: [
                                {
                                    answer: "Mouse",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Keyboard",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Hardisk",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Motherboard",
                                    theAnswerIsTrue: true
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `#Perangkat keras yang berfungsi menyimpan data maupun induksi yang dilakukan oleh Processor adalah ...`,
                            option: [
                                {
                                    answer: "VGA",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "RAM",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Tank",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Soundcard",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        },
                        {
                            question: `#Dalam hardwere terdapat sebuah ic yang mengobrol seluruh jalannya sistem komputer adalah ...`,
                            option: [
                                {
                                    answer: "Mouse",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Keyboard",
                                    theAnswerIsTrue: false
                                },
                                {
                                    answer: "Processor",
                                    theAnswerIsTrue: true
                                },
                                {
                                    answer: "Hardisk",
                                    theAnswerIsTrue: false
                                }
                            ],
                            finish: false
                        }
                    ]
                }
            ]
        },
    ]
    
    const [data, setData] = useState([
        {   
            username: "R",
            password: "R",
            name: "Raj Alam",
            email: "rajalamdev@gmail.com",
            subjects: [
                {
                    name: "Bahasa Indonesia",
                    progress: 0,
                    image: require("../assets/Subjects/bahasa.jpg"),
                    headline: "Bahasa indonesia",
                    desc: "lorem dolor amet",
                    result: 0,
                    material: [
                        {
                            name: "Pengenalan",
                            image: require("../assets/Subjects/intro.png"),
                            progress: 0,
                            content: `# Bahasa Indonesia: Pengertian, Tujuan, dan Fungsi
        
Bahasa Indonesia adalah bahasa kebanggaan warga negara tanah ibu Pertiwi yang menjadi bahasa resmi dan bahasa persatuan Republik Indonesia. Bahasa Indonesia sangat menarik jika diulas lebih mendalam karena ternyata memiliki berbagai fakta-fakta menarik yang belum tentu Anda ketahui. Berikut adalah beberapa informasi menarik tentang BAHASA INDONESIA.

![Bahasa Indonesia](https://bahasa.foresteract.com/wp-content/uploads/2019/04/Bahasa-Indonesia.webp)

## 1. Pengertian Bahasa

Ada beberapa pengertian bahasa secara umum dan menurut para ahli bahasa.

Pengertian bahasa secara umum adalah sistem lambang bunyi ujaran yang digunakan untuk berkomunikasi oleh masyarakat pemakainya.

Bahasa (berasal dari bahasa Sanskerta भाषा, Bhāṣā) adalah kapasitas khusus yang ada pada manusia untuk dapat memperoleh serta menggunakan sistem komunikasi yang kompleks, serta sebuah bahasa adalah contoh spesifik dari sistem tersebut.

Dan berikut ini adalah definisi bahasa menurut para ahli:

1.  Menurut Gorys Keraf (1997), bahasa adalah alat komunikasi antara anggota masyarakat berupa simbol bunyi yang dihasilkan oleh alat ucap manusia.
2.  Menurut Felicia (2001), bahasa adalah alat yang digunakan untuk berkomunikasi sehari-hari, baik bahasa lisan atau pun bahasa tulis.
3.  Menurut Sunaryo (2000), bahasa di dalam struktur budaya ternyata memiliki kedudukan, fungsi serta peran ganda, bahasa sendiri adalah sebagai akar serta produk budaya yang sekaligus berfungsi sebagai sarana berfikir dan sarana pendukung pertumbuhan serta perkembangan ilmu pengetahuan dan teknologi.
4.  Menurut Owen, bahasa dapat didefinisikan sebagai kode yang diterima secara sosial atau pun sistem konvensional untuk menyampaikan konsep melalui kegunaan simbol-simbol yang dikehendaki serta kombinasi simbol-simbol yang telah diatur oleh ketentuan.
5.  Tarigan (1989) memberikan 2 definisi bahasa. Pertama, bahasa adalah suatu sistem yang sistematis, barang kali juga sistem generatif. Kedua, bahasa adalah seperangkat lambang-lambang mana suka atau pun simbol-simbol arbitrer.
6.  Menurut Santoso (1990), bahasa adalah rangkaian bunyi yang dihasilkan oleh alat ucap manusia secara sadar.
7.  Menurut Mackey (1986), bahasa salah suatu bentuk serta bukan suatu keadaan (_L__a__nguage m__ay b__e Form a__nd Not Matter_) atau pun sesuatu sistem lambang bunyi yang arbitrer, atau suatu sistem dari sekian banyak sistem-sistem, suatu sistem dari suatu tatanan atau pun suatu tatanan dalam sistem-sistem.
8.  Menurut Wibowo (2001), bahasa adalah sistem simbol bunyi yang bermakna serta berartikulasi (dihasilkan oleh alat ucap) yang mempunyai sifat arbitrer serta konvensional, dipakai sebagai alat berkomunikasi oleh sekelompok manusia untuk melahirkan perasaan serta pikiran.
9.  Menurut Walija (1996), bahasa adalah komunikasi yang paling lengkap dan efektif untuk menyampaikan ide, pesan, maksud, perasaan serta suatu pendapat kepada orang lain.
10.  Syamsuddin (1986) juga memberikan 2 definisi bahasa. Pertama, bahasa merupakan alat yang dipakai untuk membentuk pikiran, perasaan, keinginan dan perbuatan-perbuatan, serta alat yang dipakai untuk mempengaruhi dan kedua, bahasa adalah tanda yang jelas dari suatu kepribadian entah itu yang baik maupun yang buruk, sebuah tanda yang jelas dari keluarga serta bangsa dan tanda yang jelas dari budi kemanusiaan.
11.  Menurut Pengabean (1981), bahasa adalah suatu sistem yang mengutarakan serta melaporkan apa yang terjadi pada sistem saraf.
12.  Menurut Soejono (1983), bahasa adalah suatu sarana perhubungan rohani yang teramat penting dalam hidup bersama.

[read more]

## 2. Tujuan Bahasa

Tujuan bahasa jika dilihat dari tujuan penggunaannya antara lain:

1.  **Tujuan praktis**, bahasa digunakan untuk komunikasi sehari-hari
2.  **Tujuan artistik**, bahasa yang dirangkai dengan sedemikian rupa sehingga menjadi bahasa yang indah dan dapat digunakan untuk pemuas rasa estetis.
3.  **Tujuan pembelajaran**, bahasa sebagai media untuk mempelajari berbagai ilmu pengetahuan baik dalam lingkup bahasa itu sendiri atau di luar bahasa.
4.  **Tujuan filologis**, bahasa digunakan untuk mempelajari naskah-naskah tua guna menyelidiki latar belakang sejarah manusia, kebudayaan, dan adat istiadat serta perkembangan bahasa.

## 3. Fungsi Bahasa

Fungsi utama bahasa adalah sebagai alat komunikasi. Terdapat tiga fungsi utama bahasa dalam kehidupan berbangsa dan bernegara. Berikut adalah fungsi bahasa tersebut:

### 3.1 Sebagai Alat Komunikasi

Bahasa merupakan kata-kata yang memiliki makna. Setiap kata memiliki makna dan hubungan abstrak dengan suatu konsep atau objek yang diwakilinya. Melalui bahasa, setiap individu dapat melakukan komunikasi dua arah yang dapat dimengerti oleh masing-masing individu.

### 3.2 Sebagai Alat Pemersatu Bangsa

Bahasa berfungsi sebagai alat pemersatu bangsa karena penggunaannya sebagai alat untuk berkomunikasi. Setiap warga suatu bangsa dapat menyampaikan pemikirannya dengan menggunakan bahasa yang bisa dimengerti. Komunikasi masyarakat dengan menggunakan bahasa yang sama dan dapat dimengerti satu sama lain akan mempersatukan bangsa menjadi lebih kuat.

### 3.3 Sebagai Identitas Suatu Suku atau Bangsa

Setiap bangsa atau suku pasti memiliki bahasa yang berbeda-beda, hal ini bisa menjadikan bahasa sebagai identitas dan keunikan tersendiri bagi suatu bangsa atau suku.

Selain tiga fungsi utama bahasa di atas, bahasa juga memiliki beberapa fungsi lain, yaitu:

-   Sebagai alat untuk berpikir
-   Sebagai alat untuk kontrol sosial
-   Sebagai sarana menunjukkan ekspresi
-   Sebagai sarana untuk memahami diri sendiri dan orang lain
-   Sebagai alat untuk mempelajari berbagai ilmu pengetahuan dan sejarah
-   Sebagai sarana untuk membangun kecerdasan dan karakter

Menurut Effendi (2007), bahasa memiliki 4 fungsi yaitu:

1.  Basa-basi (seremonial)
2.  Mengajak atau membujuk (direktif)
3.  Menjelaskan (informatif)
4.  Mengungkapkan perasaan dan menjelmakan citra (ekspresif)

Finoza (2010) memberikan 5 fungsi bahasa yang 4 di antaranya dikutip dari Keraf (1988) dan 1 fungsi lainnya menurut pendapat pribadi, sebanyak 4 fungsi tersebut yaitu:

1.  Sebagai alat komunikasi
2.  Sebagai alat mengekspresikan diri
3.  Sebagai alat berintegrasi dan beradaptasi sosial
4.  Sebagai alat kontrol sosial

Sedangkan 1 fungsi menurut pendapat pribadi Finoza adalah sebagai alat untuk berpikir.

Widjono (2005) memberikan 13 fungsi bahasa antara lain:

1.  Sarana komunikasi
2.  Sarana integrasi dan adaptasi
3.  Sarana kontrol sosial
4.  Sarana memahami diri
5.  Sarana ekspresi diri
6.  Sarana memahami orang lain
7.  Sarana mengamati lingkungan sekitar
8.  Sarana berpikir logis
9.  Membangun kecerdasan
10.  Mengembangkan kecerdasan ganda
11.  Membangun karakter
12.  Mengembangkan profesi
13.  Menciptakan kreativitas baru

Berikut fungsi bahasa Indonesia sebagai bahasa negara:

1.  Sebagai bahasa resmi kenegaraan.
2.  Sebagai bahasa pengantar dalam dunia pendidikan.
3.  Sebagai alat penghubung di tingkat nasional untuk kepentingan perencanaan dan pelaksanaan pembangunan nasional serta kepentingan pemerintah.
4.  Sebagai alat pengembang kebudayaan, ilmu pengetahuan, dan teknologi.

## 4. Manfaat Bahasa

Terdapat banyak manfaat bahasa yang dapat didapatkan oleh manusia. Berikut beberapa manfaat bahasa yaitu:

### 4.1 Bahasa Resmi Suatu Negara

Suatu negara biasanya memiliki bahasa daerah yang bermacam-macam. Agar negara tersebut memiliki identitas budaya, perlu adanya suatu bahasa yang mewakili berbagai budaya yang ada di negara tersebut. Bahasa ini biasanya disebut sebagai bahasa resmi.

### 4.2 Pengantar dalam Dunia Pendidikan

Dalam penyampaian materi di dunia pendidikan harus menggunakan bahasa resmi agar dimengerti oleh warga negara yang bersangkutan. Hal ini juga penting agar tidak terjadi miskonsepsi dalam dunia pendidikan.

### 4.3 Alat Pengembang Kebudayaan dan Ilmu Pengetahuan

Pengembangan kebudayaan sastra tentunya sangat dipengaruhi oleh bahasa yang digunakan. Berbagai kebudayaan muncul dari bahasa yang digunakan, misalnya puisi, sajak, karangan, pantun, dan sebagainya.

Selain itu, dunia Ilmu Pengetahuan dan Teknologi (IPTEK) pun memerlukan bahasa. Bahasa digunakan untuk menulis jurnal hasil penelitian, untuk menamai berbagai objek baru hasil inovasi penelitian, untuk sarana bertukar pikiran antar peneliti, dan sebagainya.`
                        },
                        {
                            name: "Ringkasan Materi",
                            image: require("../assets/Subjects/material.png"),
                            progress: 0,
                            content: `# BAB 1 TEKS LAPORAN HASIL OBSERVASI

### **Pengertian Teks Laporan Hasil Observasi**

Teks  
laporan hasil observasi adalah teks yang berisi laporan hasil pengamatan  
terhadap suatu objek yang diamati secara mendalam. Karena itu, isi dari teks  
laporan hasil observasi biasanya fokus pada suatu objek yang dapat terindera.

Hal-hal  
yang  _ghaib_ dan tidak terindera tidak  
mungkin dibahas dalam teks laporan hasil observasi. Hal ini karena hal yang  _ghaib_ tidak mungkin dapat diamati oleh  
manusia.

### **Struktur Teks Laporan Hasil Observasi**

Struktur  
teks laporan hasil observasi terdiri dari tiga bagian.

-   Pernyataan umum atau klasifikasi

Pernyataan  
umum berisi pembuka atau pengantar dari keseluruhan  
isi dari Teks Laporan Hasil Observasi. Isinya adalah hal yang umum dan  
ditunjukan untuk memberikan gambaran umum bagi pembaca.

-   Deskripsi bagian

Deskripsi bagian  
adalah uraian detail mengenai objek atau bagian-bagiannya. Biasanya, objek yang  
dibahas dalam Teks Laporan Hasil Observasi adalah objek yang bisa dirinci. Misalnya  
ketika teksnya tentang motor, maka dibahas bagian bagian yang ada pada motor.

-   Deskrspsi manfaat

Deskripsi  
manfaat adalah penggambaran tentang fungsi-fungsi atau manfaat yang dimiliki  
objek yang dibahas tersebut dalam kehidupan.

### **Kaidah Kebahasaan Teks Laporan Hasil  
Observasi**

Ada  
beberapa kaidah kebahasaan yang biasanya diperhatikan dalam penyusunan Teks  
Laporan Hasil Observasi. Antara lain:

-   Penggunaan kata atau frasa yang berkategori nomina (kata  
    benda)
-   Pembentukan nomina dan verba turunan dengan afiksasi
-   Penggunaan kalimat definisi dan juga kalimat deskripsi
-   Penggunaan kalimat simpleks dan kompleks

## **BAB 2 TEKS EKSPOSISI**

### **Pengertian Teks Eksposisi**

Teks  
Eksposisi adalah teks yang berisi gagasan atau pendapat yang bertujuan supaya  
orang lain memahami gagasan atau pendapat tersebut. Karena teks ekspoisi  
bersifat gagasan, maka isinya tentu berdasarkan sudut pandang tertentu yang  
sifatnya subjektif. (mungkin terjadi perbedaan pendapat)

### **Struktur Teks Eksposisi**

Struktur  
teks eksposisi terdiri dari tiga bagian:

-   Pernyataan pendapat atau tesis

Tesis  
adalah bagian pembuka dalam teks eksposisi. Isinya adalah pendapat atau gagasan  
umum yang disampaikan penulis teks.

-   Argumentasi

Argumentasi adalah unsur yang  
menjelaskan tesis. Biasanya disampaikan dalam bentuk bukti-bukti yang sifatnya  
fakta untuk menguatkan tesis

-   Penegasan ulang

Penegasan ulang  
isinya adalah penegasan dari pendapat awal atau pendapat dalam tesis.

### **Kaidah Kebahasaan Teks Eksposisi**

-   Teks eksposisi  
    dibentuk dari kalimat fakta dan kalimat opini
-   Teks eksposisi  
    biasanya banyak menggunakan kata sifat
-   Teks eksposisi  
    biasanya memuat istilah-istilah kelimuan tertentu.

## **BAB 3 TEKS ANEKDOT**

### **Pengertian Teks Anekdot**

Teks anekdot adalah  
cerita yang singkat dan juga lucu, yang biasanya digunakan untuk menyampaikan  
kritik melalui sindiri lucu terhadap kejadian yang menarik perhatian orang. Bisanya,  
sindiran terhadap orang banyak atau tokoh publik yang berpengaruh.

### **Struktur Teks Anekdot**

Teks anekdot isinya  
mirip dengan teks cerita pada umumnya. Maka biasanya terdiri dari lima bagian:

-   Abstraksi
-   Orientasi
-   Krisis
-   Reaksi
-   Koda

### **Ciri Kebahasaan Teks Anekdot**

Teks anekdot memiliki  
beberapa cirri kebahasaan.

-   Menggunakan kalimat  
    yang bersifat retoris
-   Menggunakan konjungsi  
    atau kata hubung yang menyatakan hubungan waktu atau terkadang sebab akibat
-   Menggunakan kata  
    kerja aksi
-   Menggunakan kalimat  
    yang menunjukan peristiwa di masa lalu

## **BAB 4 HIKAYAT**

### **Pengertian Hikayat**

Hikayat adalah  
salah satu diantara sekian jenis cerita rakyat. Perbedaan hikayat dengan teks  
cerita rakyat lainnya adalah penggunaan bahasanya yang menggunakan bahasa Melayu  
Klasik

### **Karakteristik Hikayat**

-   Kisahnya berupa  
    istana sentris (seputar kerajaan)
-   Kisahnya adalah  
    kisah yang isinya kemustahilan (ada yang tidak masuk akal)
-   Kisahnya bercerita  
    tentang tokoh-tokoh yang punya kesaktian
-   Pengarangnya anonym  
    (tidak diketahui)

### **Kaidah Kebahasaan Teks Hikayat**

-   Hikayat  
    menggunakan bahasa melayu klasik
-   Tanda melayu  
    klasik dan kekhasaannya adalah banyaknya kata penghubung dan kata arkais
-   Selebihnya, gaya  
    bahasa dalam hikayat memiliki kemiripan dengan cerpen. Hal ini karena cerpen  
    dan hikat sama-sama teks yang berisi cerita.

## **BAB 5 TEKS NEGOSIASI**

### **Pengertian Teks Negosiasi**

Teks Negosiasi adalah teks yang berisi suatu proses tawar menawar antara dua pihak atau lebih yang tujuannya adalah mencapai suatu kesepakatan terbaik yang diterima oleh pihak-pihak yang terlibat dalam negosiasi.

Negosiasi sebetulnya hal yang akrab dengan kamu yang suka menawar barang yang ingin kamu beli di pasar, di _marketplace,_atau miliki temanmu.

### **Unsur Pembangun Teks Negosiasi**

-   Partisipan (orang yang berpartisipasi dalam kegiatan negosiasi ; minimal dua pihak)
-   Perbedaan kepentingan dan tujuan diantara kedua pihak yang menjadi partisipan
-   Pengajuan dan penawaran
-   Persetujuan dan kesepakatan

### **Proses Negosiasi**

Negosiasi yang diceritakan dalam teks negosiasi, dilakukan dengan cara yang sopan dan santun. Dalam prosesnya, tidak proses yang merugikan salah satu pihak tertentu dengan cara penekanan, pemaksaan dan sebagainya. Untuk itu, setiap pengajuan ataupun penawaran hendaknya disertai dengan alasan.

### **Struktur Teks Negosiasi**

Struktur Teks Negosiasi terdiri dari:

-   Orientasi
-   Pengajuan
-   Penawaran
-   Persetujuan

## **BAB 6 DEBAT**

### **Pengertian Debat**

Debat adalah suatu proses kegiatan yang berisi tukar menukar pendapat dalam membahas suatu isu atau masalah. Namun, tukar menukar pendapat dalam debat harus disertai dengan alasan-alasan.

Alasan yang digunakan dalam debat sebisa mungkin adalah alasan yang kuat. Alasan itu dapat bersumber dari informasi, bukti, atau data. Hal itu agar pihak yang berpendapat bisa saling mempertahankan alasannya masing-masing.

### **Unsur-Unsur Debat**

Unsur dalam debat ada setidaknya enam unsur:

-   Mosi
-   Tim afirmasi (yang menyetujui mosi)
-   Tim oposisi (yang tidak menyetujui mosi)
-   Tim netral, termasuk didalamnya bisa merupakan penonton atau juri
-   Moderator
-   Penulis

### **Ragam Bahasa Debat**

-   Sesuai kaidah tata bahasa Indonesia. Menggunakan kaidah baku dalam berbagai aspek bahasa. Mulai dari tata ejaan maupun tata bahasa yang digunakan.
-   Ide yang disampaikan benar, bukan _hoax,_ dapat diterima hakikatnya oleh akal, maknanya padat, dan disajikan dengan tuturan kalimat yang efektif.
-   Kata yang digunakan dalam debat umumnya adalah kata kata denotatif (memiliki maknsa sebenarnya)

## **BAB 7 BIOGRAFI**

### **Pengertian Biografi**

Biografi ringkasnya adalah riwayat hidup yang ditulis oleh orang lain. Biografi tidak ditulis sendiri oleh tokoh yang dituliskan riwayatnya. Biasanya, biografi berisi riwayat hidup orang terkenal yang memiliki keistimewaan atau keteladanan.

Biografi adalah teks yang berjenis narasi. Bentuk penguraiannya adalah berkisah.

### **Struktur Teks Biografi**

-   Orientasi

Isinya biasanya berupa informasi mengenai latar belakang kisah atau peristiwa yang akan diceritakan selanjutnya biasanya menjawab ihwal siapa, kapan, dimana, dan mengapa.

-   Kejadian penting

Isinya adalah peristiwa yang dilalui tokoh yang memiliki nilai penting. Diceritakan dalam kerangka kronologis, misalnya mulai dari masa kecil, remaja, dewasa, hingga tua.

-   Reorientasi

Isinya berupa komentar atau kesimpulan yang bersifat penilaian. Dapat berupa komentar penulis atau komentar orang lain terhadap sosok yang dituliskan oleh penulis dalam biografi.

### **Cara Penggambaran Karakter Tokoh**

-   Dengan cara langsung, yakni penulis menceritakan langsung dengan menyebut karakter tokohnya
-   Dengan cara tidak langsung, yakni dengan mengutip dialog tokoh dengan tokoh lain, atau apa yang dilakukan tokoh lain yang secara tidak langsung menggambarkan tokoh yang diceritakan.

## **BAB 8 PUISI**

### **Pengertian Puisi**

Puisi adalah salah satu jenis karya sastra yang dibentuk dari susunan baris dan bait. Puisi umumnya berisi ekspresi perasaan yang digambarkan dengan gaya bahasa yang indah.

### **Istilah –Istilah Penting Dalam Puisi**

-   Suasana puisi adalah keadaan jiwa pembaca setelah membaca puisi.
-   Tema puisi adalah inti dari pesan yang hendak disampaikan penyair dalam puisinya.
-   Makna puisi adalah pesan yang ingin disampaikan penyair dalam puisinya.
-   imaji adalah kata atau susunan yang dapat mengungkapkan pengalaman sensoris. Pengalaman sensosris adalah pengalaman manusia yang didasarkan pada sensor penglihatan, pendengaran, atau perasaan.
-   Kata konkret adalah kata yang berpotensi memunculkan imaji.
-   Rima adalah bunyi yang ditimbulkan oleh huruf atau kata-kata dalam larik dan bait.`
                        },
                        {
                            name: "Kuis",
                            image: require("../assets/Subjects/quiz.png"),
                            progress: 0,
                            content: [
                                {
                                    question: `#Kedua belah pihak yang bersangkutan didalam negosiasi memeiliki ..... untuk menentukan kesepakatan atau hasil akhir.`,
                                    option: [
                                        {
                                            answer: "Kewajiban",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Wewenang",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Tanggung Jawab",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Hak yang sama",
                                            theAnswerIsTrue: true
                                        }
                                    ],
                                    finish: false
                                },
                                {
                                    question: `Bagian teks negosiasi yang berisikan pernyataan mengenai barang atau masalah yang sedang dihadapi adalah`,
                                    option: [
                                        {
                                            answer: "Uraian",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Permintaan",
                                            theAnswerIsTrue: true
                                        },
                                        {
                                            answer: "Penawaran",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Kesepakatan",
                                            theAnswerIsTrue: false
                                        }
                                    ],
                                    finish: false
                                },
                                {
                                    question: `#Salah satu hal yang tidak dibenarkan dalam kegiatan debat adalah....`,
                                    option: [
                                        {
                                            answer: "Menilai baik lawan debat",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Mengejeknya",
                                            theAnswerIsTrue: true
                                        },
                                        {
                                            answer: "Berdiskusi dengannya",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Tiak menghina",
                                            theAnswerIsTrue: false
                                        }
                                    ],
                                    finish: false
                                },
                                {
                                    question: `#Salah satu yang harus ada dalam teks negosiasi adalah bagian...`,
                                    option: [
                                        {
                                            answer: "Pembuka",
                                            theAnswerIsTrue: true
                                        },
                                        {
                                            answer: "Alamat",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Tanggal Lahir",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Lampiran",
                                            theAnswerIsTrue: false
                                        }
                                    ],
                                    finish: false
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Komputer",
                    progress: 0,
                    image: require("../assets/Subjects/tech.jpg"),
                    headline: "Jaringan, Pemrograman, Hardware",
                    desc: "lmu Komputer merupakan bidang studi yang identik dengan computer programming. Quipperian akan dibekali keterampilan menyusun algoritma dan programming untuk mengembangkan sebuah aplikasi maupun sistem perangkat lunak. Jadi, pada dasarnya kamu akan belajar bagaimana cara agar komputer mampu melakukan berbagai hal yang diinginkan penggunanya. Di jurusan ini, ide-ide kreatifmu bisa diwujudkan apalagi di dunia informasi digital yang semakin tak terbatas ini!",
                    result: 0,
                    material: [
                        {
                            name: "Pengenalan",
                            image: require("../assets/Subjects/intro.png"),
                            progress: 0,
                            content: `#### A. Pengertian Komputer

Secara umum komputer didefinisikan sebagai rangkaian elektronik yang menerima input data kemudian mengolah data tersebut dan akhirnya akan memberikan hasil dalam bentuk informasi dengan menggunakan suatu program yang tersimpan di memori computer. Selain itu juga dapat menyimpan program dan hasil pengolahan yang bekerja secara otomatis, sehingga akan mempermudah pekerjaan manusia. Komputer merupakan alat informasi, komunikasi dan hiburan.

#### B. Elemen-Elemen Komputer

Dalam penggunaannya, terdapat 3 (tiga) elemen komputer yang berperan sangat penting, yaitu:

-   Hardware (Perangkat keras)
-   Software (Perangkat Lunak)
-   Brainware (Manusia/Pengguna)

Dalam menggunakan suatu komputer perangkat keras (Hardware) berperan sangat penting. Melalui hardware yang baik, proses dari sebuah komputer akan sangat mendukung kerja orang yang menggunakannya.  
Tetapi bukan hanya hardware yang berperan penting, tetapi juga diperlukan adanya suatu perangkat lunak (Software) dan orang yang menjalankannya (Brainware). Pada Brainware ini diperlukan SDM (Sumber Daya Manusia) yang cakap dan mampu menjalankan sistem komputer yang digunakan. Untuk itu selain kecakapan di bidang hardware, juga diperlukan kecakapan di bidang software.

#### C. Hardware

Hardware komputer merupakan sekumpulan perangkat keras yang ada dalam komputer. Hardware merupakan salah satu elemen dari sistem komputer, merupakan sebuah alat yang bisa dihat dan diraba oleh manusia secara langsung yang mendukung proses komputerisasi. Hardware komputer terdiri dari beberapa komponen ulama, yaitu :

1.  Central Processing Unit (CPU)  
    CPU merupakan tempat pemrosesan instruksi-instruksi program (disebut microprocessor), CPU terdiri dari bagian bagian penting yaitu:
    -   Control Unit (CU)  
        Control Unit merupakan bagian yang berfungsi sebagai pengatur dan pengendali semua peralatan yang ada pada sistem komputer. Control Unit juga mengatur kapan alat input menerima data, mengolah dan menampilkan. Sehingga semua perintah dapat dilakukan secara berurutan tanpa adanya tumpang tindih antara satu perintah dengan perintah yang lain.
    -   Algorithmic Logical Unit (ALU)  
        Algorithmic Logical Unit merupakan bagian yang melakukan semua perhitungan aritmatika untuk menjalankan suatu perintah.
    -   Memory Unit (Mu)  
        Memory Unit berfungsi untuk menampung data/program yang diterima dari unit masukan sebelum diolah oleh CPU dan juga menerima data setelah diolah oleh CPU yang selanjutnya diteruskan ke unit keluaran. Pada suatu sistem komputer terdapat dua macam memori, yang penamaannya tergantung pada apakah alat tersebut hanya dapat membaca atau dapat membaca dan menulis padanya. Bagian memori yang hanya dapat membaca tanpa bisa menulis padanya disebut ROM (Read Only Memory), sedangkan bagian memori yang dapat melaksanakan membaca dan menulis disebut RAM (Random Access Memory).

2.  Input Device  
    Input Device merupakan perangkat yang berfungsi untuk masukan dan sering disebut juga dengan istilah input unit, perangkat yang digunakan untuk menerima input dari luar sistem, dan dapat berupa signal input atau maintenance input. Dengan demikian, alat input selain digunakan untuk memasukkan data juga untuk memasukkan program. Beberapa perangkat input mempunyai fungsi ganda, yaitu disamping sebagai alat input juga berfungsi sebagai alat output sekaligus. Alat yang demikian disebut sebagai terminal. Peralatan yang hanya bertungsi sebagai alat input dapat digolongkan menjadi alat input langsung (direct Input) dan tidak langsung (indirect input).
    -   Contoh perangkat input langsung (direct input) adalah papan ketik (keyboard), pointing device (misalnya: mouse, touch screen), Scanner (misalnya: optical data reader atau optical character recognition reader), sensor (misalnya: digitizing camera), voice recognizer (misalnya: microphone).
    -   Contoh perangkat input tidak langsung (indirect input) adalah key-to-tape yang merekam data ke media berbentuk pita (tape) sebelum diproses oleh alat pemroses, dan key-to-disk yang merekam data ke media magnetic disk (misalnya disket atau harddisk) sebelum diproses lebih lanjut.

3.  Output Device  
    Output Device merupakan perangkat yang berfungsi mengolah hasil keluaran dari suatu proses baik berupa data maupun berbentuk informasi yang telah diolah. Merupakan aktifitas menerima data dari hasil pengolahan pada bagian pemroses. Jika terdapat data pada aktifitas output ini, berarti pemroses menyerahkan tugas selanjutnya kepada bagian ini. Pada komputer contoh output device ini adalah printer (pencetak). Ketika data output dari pemroses diterimanya maka printer akan melaksanakan tugas yang diterima dari pemroses tadi.

#### D. Software

Seperangkat hardware yang membentuk sebuah PC (komputer) lengkap tidak dapat bekerja tanpa software didalamnya. Soltware ini yang mengontrol seluruh jalannya hardware yang ada, dan merupakan kumpulan beberapa perintah yang dieksekusi oleh mesin komputer dalam menjalankan pekerjaannya. Selain itu juga merupakan catatan bagi mesin komputer untuk menyimpan perintah, dokumen arsip lainnya dan merupakan data elektronik yang disimpan sedemikian rupa oleh komputer itu sendiri. Data yang disimpan ini dapat berupa program atau instruksi yang akan dijalankan oleh perintah, maupun catatan-catatan yang diperlukan oleh komputer untuk menjalankan perintah yang dijalankannya. Ada beberapa jenis program komputer yang digolongkan dalam software, yaitu operating system, program aplikasi, dan driver hardware.

1.  Software Sistem Operasi  
    Sistem Operasi atau biasa disebut  **_Operating System_**  (OS) komputer adalah sekumpulan program komputer yang saling terintegrasi, yang mengelola penggunaan perangkat keras yang terdapat pada sebuah komputer. Fungsi sistem operasi antara lain sebagai manajemen disk dan file, manajemen prosesor, manajemen memory, kontrol tampilan dan suara dan sebagainya. Pendek kata, sistem operasi ini mengontrol seluruh hal yang terjadi dalam operasional sebuah komputer. Banyak macam sistem operasi yang dipakai untuk berbagai keperluan. Masing-masing sistem operasi memiliki keunggulan dan kelemahan tersendiri.  
    Berikut ini macam macam sistem operasi:
    -   Microsoft DOS (Disk Operating System).
    -   Microsoft Windows (Windows 3.1 Windows 95, Windows 98, Windows ME,  
        Windows NT 4.0, Windows 2000, Windows XP, Windows Vista, Windows NT  
        Server, Windows 2000 Server, Windows 2003 Server, Windows 7, Windows 8, Windows 10)
    -   Linux (SuSE, Red Hat Caldera, Mandrake, Debian, Slakewave, dsb).
    -   Mac OS
    -   IBM O/S 2 Warp
    -   UNIX (Sun Solaris. AIX, SCO, dan lain lain).

2.  Software Program Aplikasi  
    Program aplikasi atau biasa disebut aplikasi, merupakan program yang berjalan pada sistem operasi dan dibuat untuk membantu user mengerjakan sesuatu dalam meningkatkan produktivitasnya. Ada banyak sekali jenis aplikasi, diantaranya:
    -   Aplikasi bisnis dan perkantoran.  
        Aplikasi bisnis dan perkantoran didominasi oleh Microsoft Office. Microsoft Office ini memiliki kumpulan aplikasi yang sangat familiar dengan pengguna, yaitu Ms Word, MS Excel, Ms Power Point, Ms Access, MS Outlook dan Ms Publisher. Sedangkan aplikasi bisnis yang berjalan pada Linux antara lain, Star Office dan K-Office.
    -   Aplikasi untuk hiburan dan entertainment.  
        Untuk aplikasi hiburan dan entertainment kita mengenal dengan Windows Media Player WinAm, Jet Audio, XingMPEG, dan sebagainya.
    -   Aplikasi untuk komunikasi.  
        Aplikasi untuk komunikasi, kita kenal dengan MIRC, Ms Netmeeting, Ms Outlook Express, ICO, dan sebagainya.
    -   Aplikasi grafis dan multimedia.  
        Aplikasi grafis dan multimedia, kita mengenal Adobe Photoshop, CorelDraw, Macromedia Freehand, ACDSee, dan sebagainya.
    -   Aplikasi teknik (CAD/CAM). Aplikasi teknik, kita kenal Ms Visio, AutoCAD, dan sebagainya.
    -   Aplikasi untuk utility dan anti virus.  
        Aplikasi untuk utility dan anti virus, kita mengenal Norton Utility, Norton Antivirus, McAfee Virus Scan, dan sebagainya.
    -   Aplikasi untuk pemrograman komputer.  
        Aplikasi untuk pemrograman komputer, kita kenal Visual Basic, Delphi, C++, dan sebagainya.
    -   Aplikasi server.  
        Aplikasi server, kita kenal Ms Personal Web Server, IIS untuk Win NT dan Win 2000, Ms Exchange untuk mail server Apache Web Server, dan sebagainya.

#### E. Brainware

Brainware merupakan bagian penting dari sebuah sistem komputasi. Hardware tidak dapat bekerja tanpa software, sedangkan hardware dan software tidak dapat bekerja tanpa brainware. Brainware dapat diartikan sebagai perangkat intelektual (dalam hal ini otak manusia) yang mengoperasikan dan mengeksplorasi kemampuan dari hardware dan software yang ada. Ada beberapa jabatan yang disandangkan pada brainware sesuai dengan fungsinya masing-masing. Diantaranya adalah Programmer, System Analyst, System Administrator, Database Administrator, Database Engineer, System Integrator, Network Designer, Network Engineer, Software Engineer, Hardware Engineer, System Auditor, dan User.

1.  Programmer  
    Merupakan orang yang membuat sebuah aplikasi dengan bantuan tool programming yang tersedia.
2.  System Analyst  
    Merupakan orang yang mempelajari sebuah proses bisnis, dan menuangkannya dalam sebuah rancangan sistem, sehingga setiap proses bisnis yang terjadi dapat diwujudkan dalam sistem komputerisasi yang terintegrasi.
3.  System Administrator  
    Merupakan orang yang bertugas untuk mengelola sebuah sistem komputer yang dirancang oleh System Analyst dan dibuat oleh Programmer.
4.  Database Administrator  
    Merupakan orang yang mengelola sebuah sistem database.
5.  Database Engineer  
    Merupakan orang yang merancang sebuah sistem database, sehingga sistem ini dapat mengakomodir kebutuhan pengelolaan data, baik saat ini maupun yang akan datang.
6.  System Integrator  
    Merupakan orang yang membangun sistem komputer yang telah dirancang oleh System Analyst dan mengintegrasikan sistem yang ada dengan sistem yang mungkin akan dibangun kemudian hari.
7.  Network Designer  
    Merupakan orang yang merancang sebuah sistem jaringan komputer untuk menghasilkan sebuah jaringan komputer yang efektif dan efisien dalam hal performa pertukaran data dan beban pengeluaran untuk membangunnya.
8.  Network Engineer  
    Merupakan orang yang merancang teknik-teknik baru dalam bidang networking. Dia bertanggungjawab untuk mengembangkan metode-metode baru untuk menghasilkan sesuatu yang berguna untuk bidang networking.
9.  Software Engineer  
    Merupakan orang yang bertanggungjawab untuk mengembangkan metode dan teknik-teknik baru dalam pembuatan sebuah software (aplikasi driver maupun sistem operasi).
10.  Hardware Engineer  
    Merupakan orang yang bertanggungjawab untuk mengembangkan metode dan teknik-teknik baru dalam pembuatan sebuah hardware sehingga muncul sebuah produk baru dengan teknologi yang lebih baik dari sebelumnya.
11.  System Auditor  
    Merupakan orang yang bertugas mengaudit sebuah sistem komputerisasi dan menemukan kelemahan-kelemahan sebuah sistem komputerisasi sehingga hasil audit itu dapat digunakan untuk mengembangkan sistem yang ada menjadi lebih sempurna lagi.
12.  User  
    Merupakan orang yang menggunakan sistem komputer yang ada.

Itulah sekilas pembahasan tentang pengenalan komputer, semoga dapat memberikan wawasan dan pengetahuan baru bagi para pembaca sekalian, sampai jumpai di pembahasan dan informasi berikutnya dari kami. Terimakasih sudah mampir, jangan sungkan bertanya dan memberikan masukan dikolom komentar ya.`
                        },
                        {
                            name: "Materi",
                            image: require("../assets/Subjects/material.png"),
                            progress: 0,
                            content: `### Perangkat keras vs perangkat lunak

Sebelum kami membahas tentang macam-macam tipe komputer, mari membahas tentang 2 hal yang sama yang terdapat pada semua tipe komputer yaitu perangkat keras dan perangkat lunak.

-   Perangkat keras adalah komponen komputer yang memiliki struktur fisik, seperti keyboard atau mouse. Selain itu, perangkat keras juga mencakup semua komponen internal komputer, yang dapat Anda lihat pada gambar di bawah ini.
    
    ![gambar papan induk](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/interior_motherboard.jpg)
    
-   Perangkat lunak adalah sekelompok instruksi atau perintah yang menugaskan atau memberi perintah kepada perangkat keras tentang apa yang harus dilakukan dan bagaimana melakukannya. Contoh perangkat lunak seperti web browser, permainan, dan pengolah kata. Gambar di bawah ini merupakan gambar dari perangkat lunak Microsoft PowerPoint, yang digunakan untuk membuat presentasi.
    
    ![gambar screenshot PowerPoint 2013](https://media.gcflearnfree.org/assets/content/computerbasics/1/know_open_blank.png)
    

Segala sesuatu yang Anda kerjakan di komputer bergantung pada perangkat keras dan perangkat lunak. Sebagai contoh, saat ini Anda dapat melihat pelajaran ini di web browser (perangkat lunak) dan menggunakan mouse (perangkat keras) untuk berpindah dari halaman satu ke halaman lainnya. Saat Anda mempelajari tentang berbagai macam tipe komputer, tanyakan pada diri Anda tentang perbedaan-perbedaan dari segi perangkat kerasnya. Saat Anda mempelajari panduan ini, maka Anda akan memahami berbagai macam komputer serta berbagai macam perangkat lunak yang digunakannya.

### Apa saja macam-macam komputer ?

Bagi mayoritas orang saat mendengar istilah komputer, maka mereka berpikir tentang komputer pribadi seperti desktop atau laptop. Padahal komputer berwujud dalam banyak bentuk dan ukuran, serta melakukan banyak tugas yang berbeda-beda di kehidupan kita sehari-hari. Saat Anda mengambil uang tunai dari mesin ATM, memindai barcode barang belanjaan di toko, atau menggunakan kalkulator, maka Anda juga menggunakan komputer untuk aktivitas-aktivitas tersebut.

![daftar gambar orang-orang yang menggunakan komputer](https://media.gcflearnfree.org/assets/content/computerbasics/1/computer_grid_new_900.jpg)

#### komputer desktop

![sebuah komputer desktop](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/desktop_full_view.jpg)

Banyak orang menggunakan komputer desktop di kantor, rumah, dan sekolah. Komputer desktop dirancang untuk ditempatkan di atas meja. Biasanya komputer desktop terdiri dari beberapa komponen, antara lain kotak komputer, monitor, keyboard, dan mouse.  

#### komputer laptop

![sebuah komputer laptop](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/laptop_full_view.jpg)

Tipe komputer yang kedua mungkin sudah familiar bagi Anda yaitu komputer laptop yang umumnya disebut dengan laptop. Laptop adalah komputer dengan sumber daya listrik berupa baterai dimana laptop lebih portabel dari desktop yang memudahkan Anda untuk menggunakannya di mana saja.

#### komputer tablet

![sebuah komputer tablet](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/2016_what_tablet_sam.jpg)

komputer tablet (atau lebih dikenal dengan tablet) adalah komputer genggam yang bahkan lebih portabel dari laptop. Tablet menggunakan layar sentuh sebagai pengganti keyboard dan mouse untuk mengetik dan navigasi. iPad adalah contoh dari komputer tablet.

#### Komputer server

![ruangan komputer server](https://media.gcflearnfree.org/assets/content/computerbasics/1/intro_server_room.jpg)

Server adalah sebuah komputer yang mengolah permintaan-permintaan informasi dari komputer lainnya yang terhubungan dengannya pada suatu jaringan komputer. Sebagai contoh, kapanpun Anda menggunakan Internet maka Anda sedang melihat informasi yang tersimpan di server. Banyak organisasi juga menggunakan komputer server lokal untuk menyimpan dan berbagi berkas secara internal.

#### Tipe komputer lainnya

Saat ini, banyak alat elektronik berbasis komputer dengan fungsi-fungsi yang spesifik, tetapi kita tidak selalu memahami cara kerja mereka demikian. Berikut ini merupakan beberapa contohnya.

-   Ponsel cerdas: Banyak ponsel cerdas dapat melakukan banyak hal yang dapat dilakukan oleh komputer, seperti menjelajah internet dan bermain game. Biasanya ponsel cerdas ini sering disebut dengan smartphone.
-   Wearables: Teknologi Wearable adalah istilah umum untuk sekelompok alat, termasuk pelacak/pencatat kebugaran/olahraga dan jam tangan cerdas, yang dirancang untuk dipakai sehari-hari. Perangkat tipe ini sering disingkat dengan istilah wearables.
-   alat permainan (game): Sebuah alat/konsol permainan adalah komputer tipe khusus yang dapat digunakan untuk bermain video game di TV Anda.
-   Televisi (TV): Saat ini, banyak televisi dilengkapi dengan aplikasi (atau apps), yang dapat Anda gunakan untuk mengakses berbagai macam konten online. Sebagai contoh, Anda dapat menonton streaming video langsung dari internet ke televisi Anda.

### PC dan Macintosh

Komputer pribadi dibuat dalam 2 bentuk utama yaitu : PC dan Mac (Macintosh). Keduanya sama-sama berfungsi sebagaimana mestinya, namun mereka memiliki bentuk dan cara pemakaian yang berbeda. Setiap orang memiliki preferensi masing-masing dalam komputer pribadi tersebut.

#### Personal Computer (PC)

![sebuah PC dengan sistem operasi Windows](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/desktop_full_view_alt.jpg)

Tipe komputer ini dimulai dengan komputer IBM PC yang diperkenalkan pada tahun 1981. Perusahaan-perusahaan lainnya mulai menciptakan komputer yang serupa, yang disebut dengan IBM PC Compatible (biasanya disingkat dengan PC). Saat ini, komputer tipe ini merupakan tipe yang paling umum dari kategori komputer pribadi. Biasanya komputer tipe ini sudah dilengkapi dengan sistem operasi Microsoft Windows.

#### Macintosh

![sebuah komputer Macintosh (Mac)](https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/desktop_mac_full_view_alt.jpg)

Komputer Macintosh diperkenalkan pada tahun 1984, dan merupakan komputer pribadi pertama yang terjual di masyarakat umum dimana komputer tersebut memiliki tatap muka grafis atau disebut dengan GUI. Seluruh komputer Macs diproduksi oleh satu perusahaan yaitu Apple dan mereka seluruhnya hampir selalu menggunakan sistem operasi Mac OS X.`
                        },
                        {
                            name: "Kuis",
                            image: require("../assets/Subjects/quiz.png"),
                            progress: 0,
                            content: [
                                {
                                    question: `#Papan sirkuit yang berfungsi sebagai tempat komponen - komponen komputer adalah ...`,
                                    option: [
                                        {
                                            answer: "Mouse",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Keyboard",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Hardisk",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Motherboard",
                                            theAnswerIsTrue: true
                                        }
                                    ],
                                    finish: false
                                },
                                {
                                    question: `#Perangkat keras yang berfungsi menyimpan data maupun induksi yang dilakukan oleh Processor adalah ...`,
                                    option: [
                                        {
                                            answer: "VGA",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "RAM",
                                            theAnswerIsTrue: true
                                        },
                                        {
                                            answer: "Tank",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Soundcard",
                                            theAnswerIsTrue: false
                                        }
                                    ],
                                    finish: false
                                },
                                {
                                    question: `#Dalam hardwere terdapat sebuah ic yang mengobrol seluruh jalannya sistem komputer adalah ...`,
                                    option: [
                                        {
                                            answer: "Mouse",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Keyboard",
                                            theAnswerIsTrue: false
                                        },
                                        {
                                            answer: "Processor",
                                            theAnswerIsTrue: true
                                        },
                                        {
                                            answer: "Hardisk",
                                            theAnswerIsTrue: false
                                        }
                                    ],
                                    finish: false
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {   
            username: "A",
            password: "A",
            name: "azura",
            email: "azura@gmail.com",
            subjects: [
            ]
        }
    ])

    const contextValue = {
        data,
        setData,
        currentUser,
        setCurrentUser,
        subjects,
        tmp,
        setTmp,
        currentSubject,
        setCurrentSubject
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export { useAppContext, AppProvider }