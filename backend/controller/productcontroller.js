const Course = require('../model/course');
const Event = require('../model/event');

exports.add = (req, res) => {
    // console.log(req.body);  
    // console.log(req.file);

    if (req.body.servicetype === 'course') {
        const { productName, productPrice, productDescription } = req.body;
        // const { productThumbnail } = req.file || {};
        const newCourse = new Course({
            courseName: productName,
            coursePrice: productPrice,
            courseDescription: productDescription,
            thumbnail: req.file ? req.file.filename : ''
        });

        newCourse.save()
            // console.log(newCourse)
            .then(() => {
                res.status(201).json({ message: 'Course added successfully' });
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });
    } else if (req.body.servicetype === 'event') {
        const { eventName, eventDescription, eventStartDate } = req.body;
        // const { productThumbnail } = req.file || {};

        const newEvent = new Event({
            eventName: eventName,
            eventDescription: eventDescription,
            eventStartDate: eventStartDate,
            thumbnail: req.file ? req.file.filename : ''
        });

        newEvent.save()
            .then(() => {
                res.status(201).json({ message: 'Event added successfully' });
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });
    } else {
        res.status(400).json({ message: 'Invalid product type' });
    }
};
exports.courses = async (req, res) => {
    try {

        const record = await Course.find()

        res.json({
            status: 200,
            apidata: record,
            message: "Successfully data fetched"
        })

    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}

exports.events = async (req, res) => {
    try {

        const record = await Event.find()

        res.json({
            status: 200,
            apidata: record,
            message: "Successfully data fetched"
        })

    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}

exports.coursedetail = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Course.findById(id)
        res.json({
            status: 200,
            apidata: record,
            message: "Successfully data fetched"
        })

    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}
exports.courseupdate = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Course.findById(id)
        res.json({
            status: 200,
            apidata: record,
            message: "Successfully data fetched"
        })

    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}
exports.coursefullupdate = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const file = req.file;

    try {
        let updatedCourse;
        if (file) {
            // Update course with new thumbnail
            updatedCourse = await Course.findByIdAndUpdate(id, {
                courseName: data.courseName,
                coursedetail: data.coursedetail,
                coursePrice: data.coursePrice,
                thumbnail: file.path  
            });
        } else {
            // Update course without changing the thumbnail
            updatedCourse = await Course.findByIdAndUpdate(id, {
                courseName: data.courseName,
                coursedetail: data.coursedetail,
                coursePrice: data.coursePrice
            });
        }

        await updatedCourse.save();  
        res.json({
            status: 200,
            apidata: updatedCourse,
            message: "Successfully updated course"
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};


exports.coursedelete = async (req, res) => {
    const courseId = req.params.courseid; 
    try {
        await Course.findByIdAndDelete(courseId);
        res.json({
            status: 200,
            message: "Course successfully deleted"
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};
