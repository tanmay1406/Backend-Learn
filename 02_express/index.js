import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());
let teaData = [];
let teaid = 1;
//add a new tea 
app.post('/tea', (req, res) => {
  const {name,price} = req.body;
  const newTea = { id: teaid++, name, price };
  teaData.push(newTea);
  res.status(201).json(newTea);
});
//get all teas
app.get('/teas', (req, res) => {
  res.json(teaData);
});
//get a tea by id
app.get('/tea/:id', (req, res) => {
  const tea = teaData.find(tea => tea.id === parseInt(req.params.id));
  if (tea) {
    res.json(tea);
  } else {
    res.status(404).json({ message: 'Tea not found' });
  }
});//params will be used in url , thats why we use req.params
//update tea
app.put('/tea/:id', (req, res) => {
  const tea = teaData.find(tea => tea.id === parseInt(req.params.id));
  if (tea) {
    const { name, price } = req.body;
    tea.name = name;
    tea.price = price;
    res.json(tea);
  } else {
    res.status(404).json({ message: 'Tea not found' });
  }
});
//delete tea
app.delete('/tea/:id', (req, res) => {
  const index = teaData.findIndex(tea => tea.id === parseInt(req.params.id));
  if (index !== -1) {
    teaData.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Tea not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
