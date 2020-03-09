const express = require('express');
const router = express.Router();

//Navigation Requests Handle
router.get('/about-us', function(req, res){
    res.render('about_companyprofile');
});
router.get('/bofd', function(req, res){
    res.render('about_bofd');
});
router.get('/mission-vision', function(req, res){
    res.render('about_mission_vision');
});


router.get('/ongoing-projects', function(req, res){
    res.render('ongoing_project',{
        page:"Ongoing Projects"
    });
});

router.get('/upcoming-projects', function(req, res){
    res.render('upcoming_project',{
        page:"Upcoming Projects"
    });
});

router.get('/past-projects', function(req, res){
    res.render('past_project',{
        page:"Past Projects"
    });
});

router.get('/gallery', function(req, res){
    res.render('gallery',{
        page:"Gallery"
    });
});

router.get('/contact-us', function(req, res){
    res.render('contact',{
        page:"Contact"
    });
});

router.get('/contact-enquiry', function(req, res){
    res.render('contact_enquiry',{
        page:"Enquiry Form"
    });
});

router.get('/contact-feedback', function(req, res){
    res.render('contact_feedback',{
        page:"Contact Form"
    });
});


router.post('/enquiry-form-post', function(req, res){
    console.log(req);
    res.send("200");
});



module.exports = router;