
//Its about uploading and deleting links of content you want publish in your myContent Section. Like a todo of itself. Only the submit form will be taken from context api, to manage the state of arrays holding data fro the string Urls of the content

const express = require('express');
const router = express.Router()

//@route  POST   /myContent
//@details   To post links of your youtube and podcasts AND SOME HEADINGS
//@access   PRIVATE
router.post


//@route  DELETE    /myContent
//@details   To REMOVE links of your youtube and podcasts, and some hedings
//@access   PRIVATE
router.delete




//@route  PUT   /myContent
//@details   To update links of your youtube and podcasts, and some headings or description
//@access   PRIVATE
router.deletes



module.exports = router;