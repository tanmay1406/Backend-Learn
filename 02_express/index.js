import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());
let teaData = [];
let teaid = 1;

app.post('/tea', (req, res) => {
  const {name,price} = req.body;
  const newTea = { id: teaid++, name, price };
  teaData.push(newTea);
  res.status(201).json(newTea);
});

app.get('/teas', (req, res) => {
  res.json(teaData);
});

app.get('/tea/:id', (req, res) => {
  const tea = teaData.find(tea => tea.id === parseInt(req.params.id));
  if (tea) {
    res.json(tea);
  } else {
    res.status(404).json({ message: 'Tea not found' });
  }
});//params will be used in url , thats why we use req.params


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
