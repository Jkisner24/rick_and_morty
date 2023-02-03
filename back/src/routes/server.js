/* const http = require('http');
const characters = require('../utils/data'); // [{personaje 1, personaje2}]

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    if(req.url.includes('rickandmorty/character')){
        let id = req.url.split('/').at(-1);

        let characterFilter = characters.find(char => char.id === Number(id)) //find => me da el objeto directamente que coincide

        res
        .writeHead(200, {"Content-type": "application/json"})  //mando la rta con la info del personaje 
        .end(JSON.stringify(characterFilter))         //strigify lo parseo a json. paso de un obj a un json 
    }


}).listen(3001, 'localhost')
 */
const http = require('http');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    let id = req.url.split('/').at(-1);

    if(req.url.includes('onsearch')){      
        getCharById(res, id)
    }

    if(req.url.includes('detail')){
        getCharDetail(res, id)
    }

}).listen(3001, 'localhost');