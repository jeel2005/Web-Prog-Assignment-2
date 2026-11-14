var express = require('express');
var router = express.Router();

// Store project information in an array of objects (Chapter 8) and pass it to the view.
var projects = [
  {
    title: 'Scissor Lift',
    description: 'I made a scissor lift using solidworks with my group',
    tools: ['SolidWorks']
  },
  {
    title: 'Networking Case Study',
    description: 'Made a case study on networking using Cisco Packet Tracer with my team',
    tools: ['Cisco Packet Tracer']
  },
  {
    title: 'Electrical Circuit',
    description: 'Constructed a small electrical circuit using Arduino and breadboard with my team',
    tools: ['Arduino', 'Breadboard']
  }
];

// Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', active: 'home' });
});

// About Me page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me', active: 'about' });
});

// Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', active: 'projects', projects: projects });
});

// Contact Me page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', active: 'contact' });
});

module.exports = router;
