import express from "express"
import { getData, getDataId, UpdateUser, DeleteUser } from './database.js'

const app = express()

// Middleware to parse JSON body (for POST/PUT requests)
app.use(express.json()); 

// Get all users
app.get("/get", async (req, res) => {
    try {
        const data = await getData();
        res.send(data);
    } catch (err) {
        res.status(500).send('Error fetching data');
    }
})

// Get user by ID
app.get("/get/:id", async (req, res) => {
    try {
        const getId = req.params.id;
        const getInfo = await getDataId(getId);
        if (getInfo.length === 0) {
            return res.status(404).send(`User with ID ${getId} not found`);
        }
        res.send(getInfo);
    } catch (err) {
        res.status(500).send('Error fetching user data');
    }
})

// Update user data
app.put("/update/:id", async (req, res) => {
    try {
        const { name, address } = req.body; // Get data from request body
        const id = req.params.id; // Get user ID from the URL

        // Ensure both name and address are provided
        if (!name || !address) {
            return res.status(400).send('Name and address are required');
        }

        const updatedUser = await UpdateUser(name, address, id);

        // If no user is found to update
        if (updatedUser.length === 0) {
            return res.status(404).send(`User with ID ${id} not found`);
        }

        res.send(updatedUser);
    } catch (err) {
        res.status(500).send('Error updating user data');
    }
})

// Delete user
app.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id; // Get user ID from the URL
        const result = await DeleteUser(id);

        // If no rows were deleted
        if (result.affectedRows === 0) {
            return res.status(404).send(`User with ID ${id} not found`);
        }

        res.send({ message: `User with ID ${id} deleted successfully` });
    } catch (err) {
        res.status(500).send('Error deleting user');
    }
})

// General error handling middleware
app.use((err, req, res, next) => {
    console.log(err); // Log the error details
    res.status(500).send('Something went wrong!');
})

// Start the server
app.listen(8080, () => {
    console.log("Server started on port 8080");
});
