const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://supermen96:madina98$@cluster0.calopfh.mongodb.net/"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connectioon MongoDB");
    else {
        console.log("MongoDB connection succeed");
        console.log(client);
        const app = require("./app");
        const server = http.createServer(app); 
        let PORT =3000;
        server.listen(PORT, function() {
        console.log(
            `The server is running succesfully on port: ${PORT}, http://localhost:{PORT}`
            );
         });
    }
 }
);

