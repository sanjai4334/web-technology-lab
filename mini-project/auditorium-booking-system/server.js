const express = require("express");
const { MongoClient, ObjectId } = require("mongodb"); // Import ObjectId
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

const mongoUri = "mongodb://localhost:27017";
const dbName = "auditoriumBooking";

let db, usersCollection, bookingsCollection;

MongoClient.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(client => {
        console.log("Connected to MongoDB");
        db = client.db(dbName);
        usersCollection = db.collection("users");
        bookingsCollection = db.collection("bookings");

        app.use(cors());
        app.use(bodyParser.json());
        app.use(express.static("public"));

        app.post("/signup", async (req, res) => {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    success: false,
                    message: "Email and password are required"
                });
            }

            try {
                const existingUser = await usersCollection.findOne({ email });
                if (existingUser) {
                    return res.status(409).json({
                        success: false,
                        message: "Email already exists"
                    });
                }

                const result = await usersCollection.insertOne({
                    email,
                    password
                });
                if (result.acknowledged) {
                    res.status(201).json({
                        success: true,
                        message: "User registered successfully"
                    });
                } else {
                    res.status(500).json({
                        success: false,
                        message: "Failed to register user"
                    });
                }
            } catch (error) {
                console.log(error);
                res
                    .status(500)
                    .json({ success: false, message: "Internal server error" });
            }
        });

        app.post("/login", async (req, res) => {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    success: false,
                    message: "Email and password are required"
                });
            }

            try {
                const user = await usersCollection.findOne({ email });
                if (!user) {
                    return res.status(401).json({
                        success: false,
                        message: "Invalid email or password"
                    });
                }

                if (user.password !== password) {
                    return res.status(401).json({
                        success: false,
                        message: "Invalid email or password"
                    });
                }

                res.status(200).json({ success: true, message: "Login successful" });
            } catch (error) {
                console.log(error);
                res
                    .status(500)
                    .json({ success: false, message: "Internal server error" });
            }
        });

        app.post("/api/book", async (req, res) => {
            const {
                name,
                email,
                date,
                startTime,
                endTime,
                phone,
                event,
                attendees
            } = req.body;

            if (
                !name ||
                !email ||
                !date ||
                !startTime ||
                !endTime ||
                !phone ||
                !event ||
                !attendees
            ) {
                return res
                    .status(400)
                    .json({ message: "All fields are required" });
            }

            try {
                const newBooking = {
                    name,
                    email,
                    date,
                    startTime,
                    endTime,
                    phone,
                    event,
                    attendees,
                    status: 'pending'  // Set default status to 'pending'
                };
                await bookingsCollection.insertOne(newBooking);
                res.status(200).json({ message: "Booking successful!" });
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    message:
                        "An error occurred while booking. Please try again."
                });
            }
        });

        app.get("/api/bookings", async (req, res) => {
            const email = req.query.email;

            if (!email) {
                return res
                    .status(400)
                    .json({ success: false, message: "Email is required" });
            }

            try {
                const bookings = await bookingsCollection
                    .find({ email })
                    .toArray();
                res.status(200).json({ success: true, bookings });
            } catch (error) {
                console.log(error);
                res
                    .status(500)
                    .json({ success: false, message: "Internal server error" });
            }
        });

        app.get('/api/admin/bookings', async (req, res) => {
            try {
                const bookings = await bookingsCollection.find({}).toArray();
                res.status(200).json({ success: true, bookings });
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, message: 'Internal server error' });
            }
        });

        app.put('/api/admin/bookings/:id', async (req, res) => {
            const bookingId = req.params.id;
            const { status } = req.body;

            if (!['approved', 'rejected', 'pending'].includes(status)) {
                return res.status(400).json({ success: false, message: 'Invalid status value' });
            }

            try {
                const result = await bookingsCollection.updateOne(
                    { _id: new ObjectId(bookingId) },
                    { $set: { status } }
                );

                if (result.modifiedCount === 1) {
                    res.status(200).json({ success: true, message: 'Booking updated successfully' });
                } else {
                    res.status(404).json({ success: false, message: 'Booking not found' });
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, message: 'Internal server error' });
            }
        });

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    });
