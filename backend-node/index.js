const app = require('express')(),
{ Neighborhood, City, State } = require('./models'),
{addHeader} = require('./utilities');


//Neighborhoods
app.get('/neighborhoods',  (req, res) => {
  addHeader(res)
  Neighborhood.getNeighborhoodsByCity().then( result => res.end(JSON.stringify(result)))
})
app.get('/neighborhoods/:id',  (req, res) => {
  addHeader(res)
  const id = req.params.id
  Neighborhood.getNeighborhoodById(id).then( result => res.end(JSON.stringify(result)))
})

//Cities
app.get('/cities',  (req, res) => {
  addHeader(res)
  City.getCitiesByState().then( result => res.end(JSON.stringify(result)))
})
app.get('/cities/:id',  (req, res) => {
  addHeader(res)
  const id = req.params.id
  City.getCityById(id).then( result => res.end(JSON.stringify(result)))
})
app.get('/cities/:id/neighborhoods',  (req, res) => {
  addHeader(res)
  const id = req.params.id
  Neighborhood.getNeighborhoodsByCity(id).then( result => res.end(JSON.stringify(result)))
})

//States
app.get('/states',  (req, res) => {
  addHeader(res)
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  //  res.header('Access-Control-Allow-Headers', 'Content-Type');
  State.getStatesByCountry().then( result => res.end(JSON.stringify(result)))
})
app.get('/states/:id',  (req, res) => {
  addHeader(res)
  const id = req.params.id
  State.getStateById(id).then( result => res.end(JSON.stringify(result)))
})
app.get('/states/:id/cities',  (req, res) => {
  addHeader(res)
  const id = req.params.id
  City.getCitiesByState(id).then( result => res.end(JSON.stringify(result)))
})

//Listen server
const server = app.listen(8082, () => {
  const host = "localhost",
  port = "8082";
  console.log("Escuchando en http://%s:%s", host, port);
});
