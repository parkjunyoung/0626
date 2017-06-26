import express from 'express';
import passwordHash from '../libs/passwordHash';
import models from '../models';

const router = express.Router();

router.post( '/join' , ( req,res ) => {
    models.Users.create({
        username : req.body.username,
        password : req.body.password ,
        displayname : req.body.password
    }).then(function() {
        res.json({ message : "success" });
    });
});

export default router;