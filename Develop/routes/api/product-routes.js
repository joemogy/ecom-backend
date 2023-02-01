const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => { try{
  const getTag= await Tag.findAll({include:[{model:Product}]})

  res.status(200).json(getTag);
} catch(err){
  res.status(500).json(err);
}
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => { try{
  const getTagId= await Tag.findByPk(req.params.id ,{
    include:[{model:Product}]
  })
if(!getTagId){
  res.status(404).json({message:"Invalid Id"})
  return;
} res.status(200).json(getTagId);
} catch(err){
  res.status(500).json(err);
}
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => { try{
  const tagPost= await Tag.create({
    tag_name: req.body.tag_name})

  res.status(200).json(tagPost);
} catch(err){
  res.status(500).json(err);
}
  // create a new tag
});

router.put('/:id', async (req, res) => { try{
  const tagUpdate= await Tag.update(req.body,{
    where:{id: req.params.id}})

  if(!tagUpdate){
    res.status(404).json({message:"Invalid Id"})
    return;
  } res.status(200).json(tagUpdate);
} catch(err){
  res.status(500).json(err);
}
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => { try{
  const tagDelete= await Tag.destroy({where:{
    id: req.params.id
  }})

  if(!tagDelete){
    res.status(404).json({message:"Invalid Id"})
    return;
  } res.status(200).json(tagDelete);
} catch (err){
  res.status(500).json(err);
}
  
  // delete on tag by its `id` value
});

module.exports = router;
