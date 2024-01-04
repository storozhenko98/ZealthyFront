const { createClient } = require('@supabase/supabase-js');
const express = require('express');
const cors = require('cors');
require('dotenv').config();




const supabaseUrl = 'https://oqmoghjxaphlwqeqxmms.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
    try {
        const { data, error } = await supabase
        .from('tickets')
        .select('*')
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
    }
//testConnection()

const app = express();
app.use(cors()); 
app.use(express.json({ limit: '50mb' }));
app.use(express.json());


// route to get all tickets
app.get('/api/getAllTickets', async (req, res) => {
    try {
        const { data, error } = await supabase
        .from('tickets')
        .select('*')
        res.send(data)
    }
    catch (error) {
        console.log(error)
    }
});

//route to get specific ticket
app.post('/api/getSpecificTicket', async (req, res) => {
    console.log(req.body)
    try {
        const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .eq('id', req.body.id)

        console.log(data)   
        res.send(data)
    }
    catch (error) {
        console.log(error)
    }
});


// route to modify ticker
app.post('/api/updateTicketStatus', async (req, res) => {
  try {
    const { data, error } = await supabase
    .from('tickets')
    .update({ status: req.body.status })
    .eq('id', req.body.id)
    res.json(data)
  }
    catch (error) {
        console.log(error)
    }
});

// route to post ticket
app.post('/api/newTicket', async (req, res) => {
    console.log(req.body)
    let image = req.body.image
    let status = "Pending"
    try {
        const { data, error } = await supabase
            .from('tickets')
            .insert([
                { name: req.body.name, email: req.body.email, description: req.body.description, image: image, status: status }
            ]);
        if (error) {
            throw error; 
        }
        res.status(200).json(data); 
    } catch (error) {
        console.log(error);
        res.status(500).send('An error occurred'); 
    }
});

app.post('/api/resolveTicket', async (req, res) => {
    console.log(req.body)
    try {
        const { data, error } = await supabase
        .from('tickets')
        .update({ status: req.body.status, resolution: req.body.resolution, status:'Resolved' })
        .eq('id', req.body.id)
        res.json(data)
    }
    catch (error) {
        console.log(error)
    }
}
);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
