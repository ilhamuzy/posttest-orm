const express = require('express')
const app = express()
const {Book} = require('./models')

//Mendapatkan semua data buku
app.use('/books', (req, res) =>{
    Book.findAll()
    .then(books=>{
        res.status(200).json(books)
    })
})

//Mendapatkan buku berdasarkan ID
app.get('/books/:id', (req,res)=>{
    Books.findOne({
        where: {id: req.params.id}
    })
    .then(book=>{
        res.status(200).json(book)
    })
})

//POST data buku
app.post('/books',(req,res)=>{
    Book.create({
        isbn: req.body.isbn,
        judul: req.body.judul,
        sinopsis: req.body.sinopsis,
        penulis: req.body.penulis,
        genre: req.body.genre
    })
    .then(book =>{
        res.status(201).json(book)
    }).catch(err =>{
        res.status(422).json("Data buku tidak berhasil dibuat!")
    })
})

//Update data buku
app.put('./books/:id',(req,res)=>{
    Book.update({
        isbn: req.body.isbn,
        judul: req.body.judul,
        sinopsis: req.body.sinopsis,
        penulis: req.body.penulis,
        genre: req.body.genre
    },{
        where: {id:req.params.id}
    })
    .then(book=>{
        res.status(201),json(book)
    }).catch(err=>{
        res.status(422).json("Data tidak berhasil diupdate")
    })
})

//Delete databuku
app.delete('/books/:id',(req,res)=>{
    Book.destroy({
        where: {id:req.params.id}
    })
    .then(()=>{
        res.status(200).json('Data buku berhasil dihapus')
    })
    .catch(err=>{
        res.status(422).json("Data buku gagal dihapus")
    })
})

app.listen(3001, ()=>{
    console.log('Server dengan ${port} ready')
})