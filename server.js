let path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
let bodyParser = require('body-parser')
let cors = require('cors')

dotenv.config();

const app = express()

app.use(cors())

// to use json
app.use(bodyParser.json())

// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('client'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 3001, function () {
    console.log('NLP app listening on port 3001!')
})

// Global variables.
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = process.env.API_KEY
const output = '&of=json';
const model = '&model=general';
const lang = '&lang=en';
const url = '&url=';

const analyzeTxt = async (req, res) => {
    let txt = req.body.name;
    console.log(txt)
    console.log(baseURL+apiKey+output+model+lang+url+txt);
    const resultPromise = await fetch(baseURL+apiKey+output+model+lang+url+txt)
    // Extract JSON payload from Promise.
    .then(res => res.json())
    // Send JSON object to client.
    .then(json => res.send(json))
    // Handling Error.
    .catch(error => console.log('something went wrong: ', error.message)
    );
};

app.post('/analyzeTxt', analyzeTxt);