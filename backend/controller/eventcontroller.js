const event = require("../model/event")

exports.eventdetail = async (req, res) => {
    const id = req.params.id
    try {
        const record = await event.findById(id)
        res.json({
            status: 200,
            apidata: record,
            message: "Successfully data fetched"
        })

    } catch (err) {
        res.json({
            status: 400,
            message: err.message
        })
    }
}

exports.eventupdate = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await event.findById(id)
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
exports.eventfullupdate = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const data = req.body;
    const file = req.file;

    try {
        let updatedevent;
        if (file) {
            updatedevent = await event.findByIdAndUpdate(id, {
                eventName: data.eventName,
                eventDescription: data.eventDescription,

                thumbnail: file.path,
                eventStartDate: data.eventStartDate
            });
        } else {
            updatedevent = await event.findByIdAndUpdate(id, {
                eventName: data.eventName,
                eventDescription: data.eventDescription,

                eventStartDate: data.eventStartDate
            });
        }

        await updatedevent.save();
        res.json({
            status: 200,
            apidata: updatedevent,
            message: "Successfully updated Event Detail"
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};

exports.eventdelete = async (req, res) => {
    const eventId = req.params.eventid;
    try {
        await event.findByIdAndDelete(eventId);
        res.json({
            status: 200,
            message: "Event Successfully remove"
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};