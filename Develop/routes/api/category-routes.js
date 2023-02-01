const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const getCategory= await Category.findAll({
      include: [{model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']}]
    });

    res.status(200).json(getCategory);
  } catch (err){
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => { try{
  const getCategoryById= await Category.findByPk(req.params.id, {
    include: [{model:Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']}]
  });

  if(!getCategoryById){
    res.status(404).json({message:"Enter valid Id"})
    return
  } res.status(200).json(getCategoryById)
} catch(err){
  res.status(500).json(err);
}
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => { try{
  const postCategory= await Category.create({
    category_name:req.body.category_name
  });

  res.status(200).json(postCategory);
  // create a new category
} catch (err){
  res.status(500).json(err);

}

});

router.put('/:id', async (req, res) => {try{

  const putCategory= await Category.update(req.body,{
    where:{id: req.params.id}});

  res.status(200).json(putCategory);}
  catch (err){
    res.status(500).json(err)
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => { try{

  const deleteCategory= await Category.destroy({
    where: {
      id: req.params.id
    }
  })

  if(!deleteCategory){
    res.status(404).json({message:"Enter valid Id"})
  } res.status(200).json(deleteCategory)
} catch (err){
  res.status(500).json(err);
}

  // delete a category by its `id` value
});

module.exports = router;
