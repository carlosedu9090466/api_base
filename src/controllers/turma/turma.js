const banco = require('../../database/index')
class turma {
    async buscaTurma(req, res) {
        const db = banco.db;
        await db.connect(banco.connection);

        try {
            const alunos = await db.query(banco.connection, 'SELECT * FROM alunos')
            console.log(alunos)
            res.json(alunos)
        } catch (e) {
            res.json(e);
        } finally {
            //await db.close(banco)
        }

    }
}

module.exports = new turma();