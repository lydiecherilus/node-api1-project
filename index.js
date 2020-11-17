// implement your API here
const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());

const Users = require('./data/db.js')

server.get('/', (req, res) => {
    res.json({ Hello: 'Users' })
})


// Get a list of users
server.get('/api/users', (req, res) => {
    Users.find().then(users => {
        res.status(200).json(users);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: 'The users information could not be retrieved.' })
    })
});


// GET users by id
server.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    Users.findById(userId).then(users => {
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ errorMessage: "The user with the specified ID does not exist." });
        }
    }).catch(error => {
        res.status(500).json({ errorMessage: "The user information could not be retrieved." });
    });
});


// POST/ADD a user
server.post('/api/users', (req, res) => {
    const { name, bio } = req.body;
    if (name && bio) {
        Users.insert({ name, bio }).then(users => {
            res.status(201).json(users);
        }).catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'There was an error while saving the user to the database' })
        })
    } else {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    }
})


// DELETE a user
server.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    Users.remove(userId).then(removed => {
        if (removed) {
            res.status(200).json(removed);
        } else {
            res.status(404).json({ errorMessage: "The user with the specified ID does not exist." })
        }
    }).catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: "The user could not be removed" })
    });
})


// PUT/UPDATE a user
server.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, bio } = req.body;
    if (name && bio) {
        Users.update(userId, { name, bio }).then(updated => {
            if (updated) {
                res.status(200).json(updated)
            } else {
                res.status(404).json({ errorMessage: "The user with the specified ID does not exist." })
            }
        }).catch(error => {
            res.status(500).json({ errorMessage: "The user information could not be modified." })
        })
    } else {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    }
});

const port = 5000;
server.listen(port, () => console.log(`\n** API on port ${port} \n`));