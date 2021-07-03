// import express
const express = require('express');

// import express router
const router = express.Router();
const passport = require('passport');
const assignmentApi = require('../../../controllers/api/v1/assignment_api');

router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  assignmentApi.createAssignment
);

router.post(
  '/submit',
  passport.authenticate('jwt', { session: false }),
  assignmentApi.submitAssignment
);

router.get('/all-assignments', assignmentApi.getAllAssignments);

router.post(
  '/my-assign',
  passport.authenticate('jwt', { session: false }),
  assignmentApi.getAllAssignmentsbyId
);

router.post(
  '/evaluate',
  passport.authenticate('jwt', { session: false }),
  assignmentApi.evaluateAssignments
);

module.exports = router;
