const express = require('express');
const {postagenda, getagenda, removeagenda, editagenda, read} = require('../controller/agenda');

const router = express.Router();

router.post('/agenda', postagenda)
router.get('/get-agenda', getagenda)
router.delete('/delete-agenda/:agendaId', removeagenda)
router.get('/get-agenda/:agendaId', read)
router.put('/edit-agenda/:agendaId', editagenda)

module.exports = router