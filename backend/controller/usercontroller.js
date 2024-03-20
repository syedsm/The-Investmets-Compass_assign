const Auth = require('../model/Auth');
const Course = require('../model/course');
const Event = require('../model/event');

exports.userproduct = async (req, res) => {
    try {
        // Fetch data from the 'course' table
        const courses = await Course.find().exec();

        // Fetch data from the 'event' table
        const events = await Event.find().exec();

        // Combine the data from both tables into a single object
        const userData = {
            courses: courses,
            events: events
        };

        // Send the combined data in the response
        res.status(200).json(userData);
    } catch (error) {
        // Handle any errors that occur during data retrieval
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.singlefetch = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    try {
        // Initialize an empty object to store the combined data
        const combinedData = {};

        // Fetch data from the 'course' table
        const courseRecord = await Course.findById(id);
        if (courseRecord) {
            combinedData.courseRecord = courseRecord;
        }

        // Fetch data from the 'event' table
        const eventRecord = await Event.findById(id);
        if (eventRecord) {
            combinedData.eventRecord = eventRecord;
        }

        // Check if any record was found
        if (Object.keys(combinedData).length === 0) {
            // If no record is found in any table, return 404
            return res.status(404).json({ error: 'Record not found' });
        }

        // Send the combined data in the response
        res.status(200).json(combinedData);
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};




exports.cartproducts = async (req, res) => {
    console.log(req.body)
    const { ids } = req.body
    try {
        const record = await Course.find({ _id: { $in: ids } })
        console.log(record)
        res.json({
            status: 200,
            apiData: record,
            message: "Suucessfully cart data fetched"
        })
    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}

exports.fetchUserData = async (req, res) => {
    const email = req.params.currentEmail; 

    try {
        // Find the user record in the Auth collection based on the email
        const user = await Auth.findOne({ email });

        // Check if a user with the given email exists
        if (user) {
            // If user is found, send the user data in the response
            res.json(user);
        } else {
            // If user is not found, send an empty object in the response
            res.json({});
        }
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateUserProfile = async (req, res) => {
    const { email, newName, newPassword } = req.body;

    try {
        // Find the user based on the provided email
        const user = await Auth.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update the user's profile data
        if (newName) {
            user.name = newName;
        }
        if (newPassword) {
            user.password = newPassword;
        }

        // Save the updated user record
        await user.save();

        // Send success response to the client
        res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
        console.error("Error updating user profile:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
