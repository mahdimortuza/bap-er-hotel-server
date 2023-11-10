const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000


const data = require('./chefdata.json')
const recipes = require('./recipe.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('bap er hotel is running')
})

app.get('/data', (req, res) => {
    res.send(data)
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})


app.get('/recipes/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const selectedRecipe = recipes.find(n => n._id === id)
    res.send(selectedRecipe)
})



app.listen(port, () => {
    console.log(`hotel in running on port ${port}`)
})