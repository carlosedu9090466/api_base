const express = require('express')
const router = express.Router()
const turmas = require('../controllers/turma/turma')
const alunos = require('../controllers/aluno/index')

router.get("/turmas", turmas.buscaTurma)
router.get("/alunos", alunos.alunoBuscar)
module.exports = router;