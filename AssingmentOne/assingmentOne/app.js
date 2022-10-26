const express = require('express')
const bodyParser = require('body-parser')
const mongojs = require('mongojs')
const port =  process.env.port || 4444
const app = express()
const db = mongojs('acme', ['products', 'customers'])
app.use(bodyParser.json())

app.listen(port, () =>
{
    console.log(`App running on port ${port}`)
})

//Home Page
app.get('/', (req, res) =>
{
    res.send("Please use /api/products")
})

//Show All Routes
// Show All Products
app.get('/api/products', (req, res) =>
{
    db.products.find((err, docs) =>
    {
        if(err)
        {
            res.send(err)
        }
        console.log("Product Listing Found")
        res.json(docs)
    })
})
// Show All Customers
app.get('/api/customers', (req, res) =>
{
    db.customers.find((err, docs) =>
    {
        if(err)
        {
            res.send(err)
        }
        console.log("Customer Listing Found")
        res.json(docs)
    })
})

//Show Single Routes
//Show a Single Customer
app.get('/api/customers/:id', (req, res) =>
{
    db.customers.findOne({_id: mongojs.ObjectId(req.params.id)},
    (err, doc) =>
    {
        if(err)
        {
            res.send(err)
        }
        console.log("Customer Listing Found")
        res.json(doc)
    })
})
// Show single product
app.get('/api/products/:id', (req, res) =>
{
    db.products.findOne({_id: mongojs.ObjectId(req.params.id)},
    (err, doc) =>
    {
        if(err)
        {
            res.send(err)
        }
        console.log("Product Listing Found")
        res.json(doc)
    })
})


//Add New Routes
//Add new Product
app.post('/api/products', (req, res) =>
{
    db.products.insertOne(req.body, (err, doc) =>
    {
        if(err)
        {
            res.send(err)
        }

        console.log("Added A New Product")
        res.json(doc)
    }) 
})
// Add new customer
app.post('/api/customers', (req, res) =>
{
    db.customers.insertOne(req.body, (err, doc) =>
    {
        if(err)
        {
            res.send(err)
        }

        console.log("Added A New Customer")
        res.json(doc)
    }) 
})

//Update Routes
//Update Product using Put
app.put("/api/products/:id", (req, res) => {
    const id = req.params.id
    const name = req.body.productname
    const desc = req.body.productdesc
    const price = req.body.productprice
    const image = req.body.productimage
    const qty = req.body.productqty
  
    const updatedData = db.products.updateOne(
      { _id: mongojs.ObjectId(id) },
      {
        $set: {
          productname: name,
          productdesc: desc,
          productprice: price,
          productimage: image,
          productqty: qty,
        },
      }
    )
  
    res.json(req.body)
  })
  //Update Customer Using Put
  app.put("/api/customers/:id", (req, res) => {
    const id = req.params.id
    const first = req.body.firstName
    const last = req.body.lastName
    const address = req.body.streetaddress
    const city = req.body.city
    const state = req.body.state
    const zipcode = req.body.zipcode
    const phone = req.body.phone
  
    const updatedData = db.custom.updateOne(
      { _id: mongojs.ObjectId(id) },
      {
        $set: {
          firstName: first,
          lastName: last,
          streetaddress: address,
          city: city,
          state: state,
          zipcode: zipcode,
          phone: phone,
        },
      }
    )
  
    res.json(req.body)
  })
  

//Update Product Using Patch
app.patch('/api/products/:id', (req, res) =>
{
    let updateObject = req.body;
    const id = req.params.id;

    db.products.updateOne({_id : mongojs.ObjectId(id)}, {$set:updateObject})
})
app.patch('/api/customers/:id', (req, res) =>
{
    let updateObject = req.body;
    const id = req.params.id;

    db.customers.updateOne({_id : mongojs.ObjectId(id)}, {$set:updateObject})
})
//Delete Routes
//Delete A single Product
app.delete('/api/products/:id', (req, res) =>
{
    db.products.remove({_id: mongojs.ObjectId(req.params.id)},
    (err, doc) =>
    {
        if(err)
        {
            res.send(err)
        }
        console.log("Product Listing Deleted")
        res.json(doc)
    })
})
//Delete a Single Customer
app.delete('/api/customers/:id', (req, res) =>
{
    db.customers.remove({_id: mongojs.ObjectId(req.params.id)},
    (err, doc) =>
    {
        if(err)
        {
            res.send(err)
        }
        console.log("Customer Listing Deleted")
        res.json(doc)
    })
})