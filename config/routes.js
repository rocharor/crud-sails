
module.exports.routes = {

    '/': {
        view: 'pages/homepage'
    },

    'GET /contact': {
        controller: 'contact',
        action: 'index'
    },

    'GET /contact/edit/:id': {
        controller: 'contact',
        action: 'edit'
    },

    'POST /contact': {
        controller: 'contact',
        action: 'create'
    },

    'POST /contact/:id': {
        controller: 'contact',
        action: 'update'
    },

    'GET /contact/delete/:id': {
        controller: 'contact',
        action: 'delete'
    },

    // API

    'GET /api/contact': {
        controller: 'api/contact',
        action: 'index'
    },

    'POST /api/contact': {
        controller: 'api/contact',
        action: 'create'
    },

    'PUT /api/contact/:id': {
        controller: 'api/contact',
        action: 'update'
    },

    'DELETE /api/contact/:id': {
        controller: 'api/contact',
        action: 'delete'
    },


};
