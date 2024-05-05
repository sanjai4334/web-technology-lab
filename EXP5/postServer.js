var http = require("http");
var querystring = require("querystring");

const postHandler = (req, resp) => {
    
    let query = "";

    req.on("data", (chunk) => {
        query += chunk;
    })

    req.on("end", () => {
        let qs = querystring.parse(query);
        console.log(qs);

        const generateRows = (obj) => {
            let html = '';
            
            for (key in obj) {
                html += `
                <tr>
                    <td>${key}</td>
                    <td>${qs[key]}</td>
                </tr>
                `
            }
    
            return html;
        }
    
        let htmlResponse = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>GET RESPONSE</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
                <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body>
                <div class="container">
                    <h1>Passed Data</h1>
                    <table class="table table-bordered w-50 border-1 border-dark">
                        <tr class="table-active">
                            <th>Key</th>
                            <th>Value</th>
                        </tr>
                        ${generateRows(qs)}
                    </table>
                </div>
            </body>
        </html>
        
        `
    
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.end(htmlResponse);
    });

}

http.createServer(postHandler).listen(3002);
console.log("Server running at http://127.0.0.1:3002");
