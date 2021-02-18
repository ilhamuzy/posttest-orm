const {Book} = require('./models')

Book.destroy({
    where: {
        id: 1
    }
})
.then(()=> console.log("Data buku telah berhasil dihapus!"))