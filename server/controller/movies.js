const express = require('express');
const router = express.Router();
const Movies = require('../model/movies')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload/movies/");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2024 * 2024 * 10 // 10 mb
    },
    fileFilter: fileFilter
});


/* ----------------------------------------------- *
 *                  ADD MOVIES                     *
 * ----------------------------------------------- */
router.post('/', upload.single("wallImg"), async (req, res, next) => {
    const movies = new Movies({
        name: req.body.name,
        details: req.body.details,
        // wallImg: req.file.path,
        wallImg: 'default.png',
        video: req.body.video,
        rating: req.body.rating,
    });
    movies.save().then(result => {
        res.status(201).json({
            success: true,
            message: "new movies added.",
        });
    }).catch(err => {
            console.log(err)
            return res.status(401).json({
                success: false,
                message: 'oops something went wrong'
            });
        }
    );

});

/* ----------------------------------------------- *
 *                   GET MOVIES                    *
 * ----------------------------------------------- */
router.get('/', async (req, res, next) => {
    Movies.find().select("_id name details wallImg video rating").exec().then(docs => {
        const response = {
            count: docs.length,
            success: true,
            data: docs.map(d => {
                return {
                    _id: d._id,
                    name: d.name,
                    details: d.details,
                    wallImg: 'http://localhost:4001/upload/movies/' + d.wallImg,
                    video: d.video,
                    rating: d.rating
                };
            })
        };
        res.status(200).json(response);
    }).catch(err => {
        console.log(err);
        return res.status(401).json({
            success: false,
            message: 'oops something went wrong'
        });
    });
});
module.exports = router;
