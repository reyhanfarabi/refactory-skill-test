# refactory-skill-test

## Tentang Saya
- Nama lengkap: **Muhammad Reyhan Farabi**
- Usia: **20 tahun**
- Stack yg dipilih: **Front End**
- Bahasa pemrograman yg dikuasai: **HTML, CSS, SCSS, JavaScript, Java, C, Python, Dart(Flutter), Swift(SwiftUI), Matlab**
- Domisili: **Yogyakarta**
- Ijazah terakhir: **SMA**
- Sumber informasi mengetahui program intensive probation: **Instagram**

Ini adalah repository yang saya buat untuk menyelesaikan Skill Test Refactory.
Adapun soal-soal yang perlu saya kerjakan yaitu :

- ### Logic Test
  - **Palindrome** -> Kata yang jika dibaca akan tetap sama jika dibalik  
  - **Leap Year** -> Mencari tahun kabisat berdasarkan dua input
  - **Reverse Words** -> Membalikkan kata dalam suatu kalimat dengan memperhatikan huruf kapital
  - **Nearest Fibonacci** -> Mencari angka fibonacci terdekat dengan angka input
  - **Fizzbuzz** -> Output bilangan berdasarkan input n dengan catatan mengganti angka kelipatan 3 dengan kata 'Fizz', angka kelipatan 5 dengan kata 'Buzz', 
  atau angka kelipatan 3 dan 5 secara bersamaan diganti dengan kata 'FizzBuzz'
  
- ### JSON Manipulation
  Membuat Fungsi berdasarkan dari data.json yang telah disediakan. Fungsi yang perlu dibuat yaitu:
  - Mencari barang di ruang meeting
  - Mencari semua barang electronik
  - Mencari semua furnitur
  - Mencari semua barang yang dibeli pada tanggal 2020
  - Mencari semua barang dengan warna coklat
 
- ### Fullstack JS (Front End)
  Pada bagian ini, tugas yang diberikan adalah membuat sebuah tampilan Front End Login dan Landing Page dengan tambahan utama yaitu fitur login. Adapun fitur lengkap dari tugas ini adalah:
  - Single Page Web App
  - Sign In Page
  - Sign Up Page
  - Reset Password
  - Login with Google
  - Login with Facebook
  - Landing Page -> menampilkan profile picture (jika ada), email, dan user id dari user yang sedang login
  - Sign Out  
 
  Dalam menyelesaikan tugas ini, teknologi yang saya gunakan adalah:
  - HTML
  - (S)CSS
  - Vanilla Javascript
  - Firebase (sebagai authentication)

  Untuk menjalankan aplikasi web ini, dibawah ini saya sudah menyediakan link untuk mengakses aplikasi web yang telah saya buat  
  <https://refactory-test-c6b8a.web.app/>  
  atau jika ingin mengakses manual bisa dengan git clone dengan catatan firebase-tools harus sudah terinstall diperangkat yang akan digunakan untuk menjalankan local server.
  
  Selain itu, dibawah ini merupakan penjelasan alur website dan juga [diagram website](https://lucid.app/documents/view/fbd263c3-7a34-4edf-8dcf-89e24edc302d) yang telah saya buat.  
  
  ### Alur Website
  - Akses website melalui link <https://refactory-test-c6b8a.web.app/> dengan device yang mendukun browser
  - Firebase yang terintegrasi di website akan memproses session terlebih dahulu apakah sebelumnya sudah Sign In dan sudah Sign Out atau belum Sign Out
  - Jika belum Sign Out, user akan langsung diarahkan ke halaman ***Landing Page***
  - Jika sudah Sign Out, user akan diarahkan ke halaman ***Sign In***
  - Pada Halaman ***Sign In***, user bisa login menggunakan email dan password atau menggunakan akun Google//Facebook
  - Pada Halaman ***Sign In***, user juga bisa me-reset password dengan menekan tombol **Forgot Password** dan mengetikkan email yang nantinya akan dikirimkan email password reset
  - Jika user ingin membuat akun baru, user bisa klik tombol **Sign Up** dibawah tombol **Login with Google/Facebook**
  - User akan diarahkan ke halaman ***Sign Up*** untuk membuat akun
  - Jika sudah membuat akun user bisa kembali ke halaman ***Sign In*** dibawah tombol **Login with Google/Facebook** dan Sign In pada halaman tersebut
  - Jika user sudah Sign In, user akan diarahkan ke halaman ***Landing Page*** dimana user bisa melihat Profile Picture(jika ada), Email, dan User ID
  - Jika user ingin Sign Out, user bisa menekan tombol **Sign Out** dibawah User ID
  - Setelah Sign Out, user akan diarahkan kembali ke halaman **Sign In**
  - ***Catatan***:
      - User bisa keluar dari website atau browser pada tahap apapun, yang mana nantinya jika ingin mengakses website ini lagi akan di cek session-nya oleh Firebase
      - Jika terdapat masalah saat login menggunakan Google/Facebook, silahkan tutup ***Popup*** dan Klik lagi tombol login menggunakan Google/Facebook
  
  ![refactory-skill-test-diagram!](/refactory-skill-test-diagram.png)
