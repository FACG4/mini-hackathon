const app = require('./app');
app.listen(app.get('port'),()=>{
  console.log(" see magic on port 3000");
})
