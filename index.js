const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.get('/', (req, res) => {
	res.send(`Server is running at http://localhost:${PORT}`)
})

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});