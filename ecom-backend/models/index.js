const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasMany(Product,{
  foreignKey:'category_id',
  onDelete:'CASCADE'
})

Product.belongsTo (Category,{
  foreignKey:'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany (Tag, {through:ProductTag,
foreignKey:'product_id'})

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany (Product,{
  through: Product_tag,
  foreignKey:'tag_id'
})
module.exports = {
  Product,
