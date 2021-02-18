const {Book} = require('./models')

const query = {
    where: {id:1}
}

Book.update({
    genre: "roman"
},query)
.then(()=>{
    console.log("Data buku berhasil diperbarui!")
    process.exit()
})
.cacth(err =>{
    console.log("Pembaruan data gagal!")
})