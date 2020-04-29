const express = require('express');
const router = express.Router();

const aws = require( 'aws-sdk' );
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );
const DOCUMENT = require('../models/Document');
require('dotenv').config();

const s3 = new aws.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  Bucket: process.env.BUCKET
});

const fileUpload = multer({
  storage: multerS3({
   s3: s3,
   bucket: process.env.BUCKET,
   acl: 'public-read',
   key: function (req, file, callback) {
    callback(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
   }
  }),
  // // limits:{ fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
  // fileFilter: function( req, file, cb ){
  //  checkFileType( file, cb );
  // }
 }).single('file');

//  function checkFileType( file, cb ){
//     // Allowed ext
//     const filetypes = //;
//     console.log(file);
//     // Check ext
//     const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
//     // Check mime
//     const mimetype = filetypes.test( file.mimetype );
//     if( mimetype && extname ){
//       return cb( null, true );
//     } else {
//       cb( 'Error: Images Only!' );
//     } 
//  }

router.post( '/upload', ( req, res ) => {
  fileUpload( req, res, ( error ) => {
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
      const fileName = req.file.key;
      const fileUrl = req.file.location;
      const title = req.body.title;
      const description = req.body.description;
    
      res.json({
        fileName: fileName,
        fileUrl: fileUrl
      });

      const newFileUploaded = {
        fileName: fileName,
        fileUrl: fileUrl,
        title: title,
        description: description
      }
      console.log(newFileUploaded);
      const document = new DOCUMENT(newFileUploaded);
      document.save();
    }
    }
  });
});

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

router.route("/edit/:id").put((req, res, next) => {
 
  DOCUMENT.findByIdAndUpdate(
    req.params.id,  
    { $set: { title: req.body.title, description: req.body.description} },
    { new: true },
    (err, updateDoc) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(updateDoc);
    }
  );
});

module.exports = router;