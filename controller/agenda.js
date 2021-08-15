const Agenda = require('../models/agenda');
 
const postagenda  = async (req, res) => {
    const {task, dateValue, time} = req.body;
    if (!task) {
        return res.status(400).send("Please insert a task")
    }
    if (!dateValue) {
        return res.status(400).send("Please insert a date")
    }
    if (!time) {
        return res.status(400).send("Please insert a time")
    }
    const agenda = new Agenda(req.body)
    try {
        await agenda.save()
        console.log("Agenda was created", agenda)
        return res.json({
            ok: true
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).send("cant create agenda")
    }
}

const getagenda = async (req, res) => {
    let all = await Agenda.find({})
    res.json(all)
}

const removeagenda = async (req, res) => {
    let remove = await Agenda.findByIdAndDelete(req.params.agendaId).exec()
    res.json({
        ok: true
    })
}

const read = async (req, res) => {
    let agenda = await Agenda.findById(req.params.agendaId).exec()
    res.json(agenda)
    console.log(agenda)
}


const editagenda = async (req, res) => {
    const data = {...req.body}
    console.log(data)
    try {
        let updated = await Agenda.findByIdAndUpdate(req.params.agendaId, data, {
            new: true
        })
        res.json(updated)
        console.log(updated)
    }
    catch (err) {
        console.log(err)
        res.status(401).send("Agenda update failed, Try again")
    }
}

module.exports = {
    postagenda,
    getagenda,
    removeagenda,
    editagenda,
    read
}