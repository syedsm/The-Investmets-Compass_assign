const router = require('express').Router()
const Auth = require('../controller/Auth')
const { eventdetail, eventupdate, eventfullupdate, eventdelete } = require('../controller/eventcontroller')
const productcontroller = require('../controller/productcontroller')

const multer=require('multer')
const { userproduct, singlefetch, cartproducts, updateprofile, fetchUserData, updateUserProfile } = require('../controller/usercontroller')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/src/assets')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

let upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 4 }
})

router.post('/reg', Auth.reg)
router.post('/login', Auth.login)
router.post('/productadd', upload.single('productThumbnail'),productcontroller.add)
router.get('/courses',productcontroller.courses)
router.get('/event',productcontroller.events)
router.get('/coursedetail/:id',productcontroller.coursedetail)
router.get('/courseupdate/:id',productcontroller.courseupdate)
router.put('/courseupdate/:id',upload.single('productThumbnail'),productcontroller.coursefullupdate)
router.delete('/coursedelete/:courseid',productcontroller.coursedelete)
router.get('/eventdetail/:id',eventdetail)
router.get('/eventupdate/:id',eventupdate)
router.put('/eventupdate/:id',upload.single('thumbnail'),eventfullupdate)
router.delete('/eventdelete/:eventid',eventdelete)

//user api

router.get('/userproduct',userproduct)
router.get('/productdetail/:id',singlefetch)
router.post('/cartproducts',cartproducts)
router.post('/updateprofile',updateUserProfile)
router.get('/userprofile/:currentEmail',fetchUserData)


module.exports = router


