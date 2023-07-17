Membuat project strapi:
1. Terminal
2. Dbeaver
3. Postman

Tahap 1: Preparasi membuat Database
- Buka DB beaver dan buka server yang sudah ada.
- Buka pada bagian localhost dan click kanan pada Databases dan akan ada pilihan "Create database"
- Setelah muncul pop up isikan ecommerce-fic
- Kemudian pindah ke folder `D:\new_daily_april_2022\full_stack_flutter_practice` di direktori terminal dengan perintah cd
- Setelah itu jalankan `yarn create strapi-app ecommerce-fic`
- setelah menjalankan comment tersebut akan ada beberapa pilihan. 
- Coba isikan sesuai pilihan berikut:
```shell
? Choose your installation type Custom (manual settings)
? Choose your preferred language
? Choose your preferred language JavaScript
? Choose your default database client
? Choose your default database client mysql
? Database name: (ecommerce-fic)
? Database name: ecommerce-fic
? Host: (127.0.0.1)
? Host: 127.0.0.1
? Port: (3306)
? Port: 3306
? Username: root
? Username: root
? Password:
? Password:
? Enable SSL connection: (y/N) n
? Enable SSL connection: No
```

- Setelah comment selesai, jalankan `yarn develop`
- Nanti setelah selesai dijalankan buka `http://localhost:1337/admin`(biasanya otomatis terbuka)
- Lakukan registrasi sampai masuk ke dalam dashboard strapi

Tahap 2: Membuat Request 
- Buka postman, lalu click button "+" untuk membuat collection baru dengan nama "Ecommerce Strapi"
- Pada button "more action"(dalam bentuk 3 titik) akan ada pilihan Add request.
- Setelah di pilih akan ada tampilan untuk menambahakan request.
- Dokumen ini: https://docs.strapi.io/dev-docs/plugins/users-permissions
Akan membahas bagian tentang request authentikasi seperti login, dan register.
- Dari docnya untuk request melakukan login & register endpointnya sebagai berikut:
=> register : {{baseUrl}}/api/auth/local/register
=> login : {{baseUrl}}/api/auth/local
Untuk percobaan isikan request yang sudah dibuat seperti ini:
Untuk register
Body => row => JSON
```json
{
    "name": "Ollie",
    "password": "Ollie187",
    "email": "Ollie@gmail.com",
    "username": "ollie"
}
```
Untuk login:
Body => row => JSON
```json
{
    "identifier":"ollie",
    "password":"Ollie187"
}
```

Tahap 2: Preparasi membuat table
- Pindah ke dashboard strapi
- Click Content-Type Builder, lalu click Create "new collection type"
- Lalu akan ada pop-up untuk menuliskan nama, dan menuliskan field

https://docs.strapi.io/dev-docs/plugins/upload