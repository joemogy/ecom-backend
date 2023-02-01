app.use(routes);

// sync sequelize models to the database, then turn on the server
sync.sequelize({force:true}).then(()=>{
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

})
