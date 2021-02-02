
//Its about uploading and deleting links of content you want publish in your myContent Section. Like a todo of itself. Only the submit form will be taken from context api, to manage the state of arrays holding data fro the string Urls of the content

const { check, validationResult } = require('express-validator')
const Content = require('../models/Content')

const express = require('express');
const auth =  require('../middleware/auth')
const router = express.Router()

//@route  POST   /myContent
//@details   To post links of your youtube and podcasts AND SOME HEADINGS
//@access   PRIVATE
router.post('/', auth,
    check('about', 'Write something about your content').isLength({ max: 30 }).notEmpty(),
    check('podcast_link', 'link should be porper').isLength({ max: 30 }).notEmpty(),
    check('video_link', 'Link should be proper').isLength({ max: 30 }).notEmpty(),
    async (req, res) =>
    {
        const errors = validationResult(req)
        if (!errors.isEmpty) {
            return res.status(400).json({ errors: errors.array() })
        }

        const {
            podcast_link,
            podcast_heading,
            podcast_description,
            about,
            video_link,
            video_heading,
            video_description
 } = req.body

        const myContent = {
            register: req.register.id,
            podcast: [
                {
                podcast_link,
                podcast_heading,
                    podcast_description,
                }
            ],
            about,
            video: [
                {
                video_link,
                video_heading,
                video_description
                }
            ]
        }

        try {
            let contentSection = await Content.findOneAndUpdate(
                { register: req.register.id },
                { $set: myContent },
                { new: true, upsert: true, setDefaultsOnInsert: true }
            )
            res.json(contentSection)


        } catch (err) {
            console.error(err.message)
            return res.status(400).json({msg:'Server Error'})
        }








})
//@route  PUT   /myContent
//@details   To update links of your youtube and podcasts, and some headings or description
//@access   PRIVATE
router.put('/', auth,
check('about', 'Write something about your content').isLength({ max: 30 }).notEmpty(),
    check('podcast_link', 'link should be porper').isLength({ max: 30 }).notEmpty(),
    check('video_link', 'Link should be proper').isLength({ max: 30 }).notEmpty(),
    async (req, res) =>
    {
        
        const errors = validationResult(req)
        if (!errors.isEmpty) {
            return res.status(400).json({ errors: errors.array() })
        }

            const {
                podcast_link,
                podcast_heading,
                podcast_description,
               
                video_link,
                video_heading,
                video_description
            } = req.body

        const newContent = {
            register: req.register.id,
            podcast: 
                {
                podcast_link,
                podcast_heading,
                    podcast_description,
                }
            ,
           
            video: 
                {
                video_link,
                video_heading,
                video_description
                }
            
        }
        try {
            let contentSection = await Content.findOne({ register: req.register.id }) 
            console.log(contentSection)
            contentSection.video.unshift(newContent.video)
            contentSection.podcast.unshift(newContent.podcast)
            await contentSection.save()

            res.json(contentSection);

        } catch (err) {
            console.error(err.message)
            return res.status(500).json({msg:'Server Error'})
        }
    
 }) 

//@route  DELETE    /myContent/:content_id
//@details   To REMOVE links of your youtube and podcasts, and some hedings
//@access   PRIVATE
router.delete('/:content_id', auth, async(req, res) =>
{
    try {
        const contentSection = await Content.findOne({ register: req.register.id })
        
        //remove content index via id
        const removePodcast = contentSection.podcast
            .map(item => item.id)
            .indexOf(req.params.content_id)
        const removeVideo = contentSection.video
            .map(item => item.id)
            .indexOf(req.params.content_id)
         console.log(`podcasetIndex: ${removePodcast} VideoIndex: ${removeVideo}`)
//splice method - remove 2 element from index 1   splice(1, 2)
       if(removePodcast !== -1 ) {
           contentSection.podcast.splice(removePodcast, 1)   //removePodcast is the index to be deleted  
        }
        if (removeVideo !== -1) {
            contentSection.video.splice(removeVideo, 1)  //removeVideo is the index to be deleted
        }
        await contentSection.save()

        res.json(contentSection)

    } catch (err) {
        console.error(err.message)
        return res.status(500).json({msg: 'Server Error'})
     }
})








module.exports = router;