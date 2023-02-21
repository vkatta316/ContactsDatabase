var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const contactsController = require('../controller/contactController.js');
//const contactsRepo = require('../src/contactsRepository');
//const contactsRepo = require('../src/contactsFileRepository');
const { body } = require('express-validator');

/* GET home page. */
router.get('/', contactsController.contacts_list);

/* GET Contact page. */
router.get('/add', contactsController.contacts_create_get);


/* POST Contact page. */
router.post('/add', 
  body('firstName').trim().notEmpty().withMessage('First Name cannot be empty') ,
  body('lastName').trim().notEmpty().withMessage('Last Name cannot be empty') ,
  contactsController.contacts_create_post);

/* GET Single Contact. */
router.get('/:uuid', contactsController.contacts_details_get);

/* Delete Contact. */
router.get('/:uuid/delete', contactsController.contacts_delete_get);

/* Confirm Delete Contact. */
router.post('/:uuid/delete', contactsController.contacts_delete_post);

/* Edit Contact page. */
router.get('/:uuid/edit', contactsController.contacts_edit_get);

/* POST Edit Contact page. */
router.post('/:uuid/edit',
  body('firstName').trim().notEmpty().withMessage('First Name cannot be empty') ,
  body('lastName').trim().notEmpty().withMessage('Last Name cannot be empty') ,
  contactsController.contacts_edit_post);

module.exports = router;
