const {Book} = require("./models")

Book.create({
    isbn: '979-3062-79-7', 
    judul: 'Laskar Pelangi',
    sinopsis: 'Novel ini mengisahkan tentang sepuluh anak Belitung',
    penulis: 'Andrea Hirata',
    genre: 'drama'
})
.then(book=>{
    console.log(book)
})