const fs = require('fs');

const User = {
	filename : "../database/users.json",
	getData : function () {
        return fs.readFileSync(this.filename, 'utf8');
    },

    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id+1;
        } 
        return 1;
    },

    findAll: function () {
        return this.getData()
    }, 

    findByPK: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound
    },

    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound
    },

	create : function(userData) {
        let allUsers = this.findAll();
        let newUser = { 
            id: this.generateId(), 
            ...userData 
    }
        allUsers.push(userData);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '))
        return true
    },

    delete: function(id) {
        let allUsers = this.findAll();
        let findAllUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '));
        return true
    }
}

module.exports = User;