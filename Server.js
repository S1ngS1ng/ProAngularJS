/**
 * Created by Xing on 10/13/15.
 */

var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("Project"));
app.listen(5000);
console.log("Server running on port 5000");

