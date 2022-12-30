
const { makeDb } = require('mysql-async-simple');
const mysql = require("mysql");
class aluno {
    async alunoBuscar() {



        const connection = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DB
        });
        const db = makeDb();
        console.log(db)
        await db.connect(connection);

        try {
            const alunos = await db.query(connection, 'SELECT * FROM alunos');
            //console.log(alunos)
        } catch (e) {
            // handle exception
        } finally {
            await db.close(connection);
        }
    }
}

module.exports = new aluno();