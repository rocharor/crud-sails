var ContactController = {
    index: async (req, res) => {
        try {
            var docs = await Contacts.find({})

            res.send(docs);
        } catch (err) {
            res.badRequest({
                name: err.name,
                code: err.code,
                context: err.details,
            });
        }
    },

    create: async (req, res) => {
        try {
            var data = await Contacts.create({
                nome: req.body.nome,
                idade: req.body.idade,
            }).fetch()

            res.send(data, 201)
        } catch (err) {
            res.badRequest({
                name: err.name,
                code: err.code,
                context: err.details,
            });
        }
    },

    update: async (req, res) => {
        try {
            await Contacts.update({ id: req.params.id }).set({
                nome: req.body.nome,
                idade: req.body.idade
            })

            res.send('', 204)
        } catch (err) {
            res.badRequest({
                name: err.name,
                code: err.code,
                context: err.details,
            });
        }
    },

    delete: async (req, res) => {
        try {
            await Contacts.destroyOne({ id: req.params.id })

            res.send('', 204)
        } catch (err) {
            res.badRequest({
                name: err.name,
                code: err.code,
                context: err.details,
            });
        }
    },
}

module.exports = ContactController
