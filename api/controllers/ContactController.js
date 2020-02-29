var redis = require("async-redis"),
client = redis.createClient();

var ContactController = {
    index: async (req, res) => {
        try {
            var value = await client.get('contacts')

            if (value == null) {
                console.log('DB');
                var docs = await Contacts.find({})
                client.set('contacts', JSON.stringify(docs));
                client.expire('contacts', 10);

            } else {
                console.log('CACHE');
                var docs = JSON.parse(value)
            }

            res.view('pages/index', {
                title: "Home",
                data: docs
            });
        } catch (err) {
            console.log(err.name)
            console.log(err.code)
            console.log(err.details)
        }
    },

    edit: async (req, res) => {
        try {
            var doc = await Contacts.findOne({ id: req.params.id })

            res.view('pages/edit', {
                title: "Edit",
                data: doc
            });
        } catch (err) {
            console.log(err.name)
            console.log(err.code)
            console.log(err.details)
        }
    },

    create: async (req, res) => {
        try {
            await Contacts.create({
                nome: req.body.nome,
                idade: req.body.idade,
            })

            res.redirect('/contact')
        } catch (err) {
            console.log(err.name)
            console.log(err.code)
            console.log(err.details)
        }
    },

    update: async (req, res) => {
        try {
            await Contacts.update({ id: req.params.id }).set({
                nome: req.body.nome,
                idade: req.body.idade
            })

            res.redirect('/contact')
        } catch (err) {
            console.log(err.name)
            console.log(err.code)
            console.log(err.details)
        }
    },

    delete: async (req, res) => {
        try {
            await Contacts.destroyOne({ id: req.params.id })

            res.redirect('/contact')
        } catch (err) {
            console.log(err.name)
            console.log(err.code)
            console.log(err.details)
        }
    },
}

module.exports = ContactController
