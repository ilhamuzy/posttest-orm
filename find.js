const {Book} = require('./models')
//Menampilkan semua data
Book.findAll().then(book=>{
    console.log(book)
})

//Menampilkan sesuai ID
Book.findOne({
    where: {id:1}
})
.then(book =>{
    console.log(book)
})