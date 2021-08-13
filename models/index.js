const User = require('./User.js')
const Item = require('./Item.js')

// write relationships

// user has many items
User.hasMany(Item, {
  foreignKey: 'user_id'
})

// item belongs to user
Item.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User }
