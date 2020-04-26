const express = require('express');
const aws = require( 'aws-sdk' );
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );
const router = express.Router();
const DOCUMENT = require('../models/Document');

const s3 = new aws.S3({
  accessKeyId: 'AKIAVLQWZQLIHGAZYPA2',
  secretAccessKey: '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',
  Bucket: 'riffs'
});

const profileImgUpload = multer({
  storage: multerS3({
   s3: s3,
   bucket: 'riffs',
   acl: 'public-read',
   key: function (req, file, cb) {
    cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
   }
  }),
  // limits:{ fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
  fileFilter: function( req, file, cb ){
   checkFileType( file, cb );
  }
 }).single('profileImage');

 function checkFileType( file, cb ){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
    // Check mime
    const mimetype = filetypes.test( file.mimetype );
    if( mimetype && extname ){
      return cb( null, true );
    } else {
      cb( 'Error: Images Only!' );
    } 
 }

// Get all Documents s Routes
router.route("/").get((req, res, next) => {
  DOCUMENT.find(
    {},
    null,
    {
      sort: { createdAt: 1 }
    },
    (err, docs) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(docs);
    }
  );
});

router.post( '/profile-img-upload', ( req, res ) => {profileImgUpload( req, res, ( error ) => {
  console.log( 'requestOkokok', req.file );
  console.log( 'error', error );
  if( error ){
   console.log( 'errors', error );
   res.json( { error: error } );
  } else {
   // If File not found
   if( req.file === undefined ){
    console.log( 'Error: No File Selected!' );
    res.json( 'Error: No File Selected' );
   } else {
    // If Success
    const imageName = req.file.key;
    const imageLocation = req.file.location;
    // Save the file name into database into profile model
    res.json({
     image: imageName,
     location: imageLocation
    });
    const newFileUploaded = {
      image: imageName,
      location: imageLocation
    }
    const document = new DOCUMENT(newFileUploaded);
    document.save();
   }
  }
 });
});

module.exports = router;