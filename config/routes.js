
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
};
