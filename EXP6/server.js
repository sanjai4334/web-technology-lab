const http = require("http");
const querystring = require("querystring");
const { MongoClient } = require("mongodb");

// MongoDB connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

try {
    client.connect();
    console.log("Connected to MongoDB...");
} catch (error) {
    console.log(`Error Connecting to MongoDB: ${error}`);
}

const database = client.db("web-technology-lab");
const collection = database.collection("EXP6");

const reqHandler = async (req, res) => {
    const path = req.url;

    let query = "";

    req.on("data", chunk => {
        query += chunk;
    });

    req.on("end", async () => {
        const params = querystring.parse(query);

        let htmlResponse = "<style> .container { display: flex; justify-content: center; align-items: center; height: 100%;} table, th, td {border: 1px solid black; border-collapse: collapse; padding: 10px;} th {background: grey} *{ font-family: monospace;}</style> <div class='container'>";
        let statusCode = 200;

        switch (path) {
            case "/insert":
                htmlResponse += insert(params);
                break;
            case "/view":
                htmlResponse += await view();
                break;
            case "/delete":
                htmlResponse += delete_(params);
                break;
            case "/update":
                htmlResponse += update(params);
                break;
            default:
                statusCode = 404;
                htmlResponse += "<h1 style='text-align: center;'>404 Page Not Found</h1>";
                break;
        }

        htmlResponse += "</div>";

        res.writeHead(statusCode, { "Content-Type" : "text/html"});
        res.end(htmlResponse);
    });
};
// TODO : handle errors of db operations (display 500 error page and log error on server log)
const insert = params => {
    collection.insertOne(params);
    return "<h1 style='text-align: center;'>Data Inserted Successfully</h1>";
};
const view = async () => {
    let htmlResponse = "<table><tr><th>Name</th><th>DOB</th><th>Register Number</th><th>Email</th><th>Phone</th><th>Year</th><th>Department</th></tr>";
    let cursor = collection.find({});
    let documents = await cursor.toArray();

    documents.forEach(document => {
        htmlResponse += `
            <tr>
                <td>${document["Name"]}</td>
                <td>${document["DOB"]}</td>
                <td>${document["Register Number"]}</td>
                <td>${document["Email"]}</td>
                <td>${document["Phone"]}</td>
                <td>${document["Year"]}</td>
                <td>${document["Department"]}</td>
            </tr>
        `;
    });

    htmlResponse += "</table>";

    return htmlResponse;
};

const update = params => {

    for (const key in params) {
        if (params[key] === "") {
            delete params[key];
        }
    }

    collection.updateOne({ "Register Number" : params["Register Number"] }, { $set: params });
    return "<h1 style='text-align: center;'>Data Updated Successfully</h1>";
};
const delete_ = params => {
    collection.deleteOne({ "Register Number" : params["Register Number"] });
    return "<h1 style='text-align: center;'>Data Deleted Successfully</h1>";
};

http
    .createServer(reqHandler)
    .listen(3001, () => console.log("Server is running on port 3001."));
