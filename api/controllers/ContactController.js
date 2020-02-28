var ContactController = {
     index: async (req, res) => {
        var db = sails.getDatastore().manager

        var docs = await db.collection('contacts').find({}).toArray()

        res.view('pages/index', {
            title: "Home",
            data: docs
         });
    },

    edit: async (req, res) => {
        var db = sails.getDatastore().manager
        var ObjectID = require('mongodb').ObjectID

        var doc = await db.collection('contacts').findOne({_id: new ObjectID(req.params.id)})

        res.view('pages/edit', {
            title: "Edit",
            data: doc
         });
    },

    create: async (req, res) => {
        var db = sails.getDatastore().manager

        await db.collection('contacts').insert({
            nome: req.body.nome,
            idade: req.body.idade,
        })

        res.redirect('/contact')
    },

    update: async (req, res) => {
        var db = sails.getDatastore().manager
        var ObjectID = require('mongodb').ObjectID

        await db.collection('contacts').updateOne({_id: new ObjectID(req.params.id)}).set({
            nome: req.body.nome,
            idade: req.body.idade
        })

        res.redirect('/contact')
    },

    delete: async (req, res) => {
        var db = sails.getDatastore().manager
        var ObjectID = require('mongodb').ObjectID

        await db.collection('contacts').deleteOne({_id: new ObjectID(req.params.id)})

        res.redirect('/contact')
    },
}

module.exports = ContactController
