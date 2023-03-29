const express = require('express')

const router = express.Router()

const flightControl = require('../controllers/flightController')


// index
router.get('/', flightControl.index)

// // new
router.get('/new', flightControl.new)

// // show
router.get('/:id', flightControl.show)

// // create
router.post('/', flightControl.create)

// // delete
// router.delete('/:id', flightControl.delete)

// // update
// router.put('/:id', flightControl.update)



// // edit 
// router.get('/:id/edit', flightControl.edit)






// // EXTRA ROUTES (for comments)

// router.flight('/:id/comments', flightControl.createComment)

// router.delete('/:id/comments/:cid', flightControl.deleteComment)

// router.get('/:id/comments', flightControl.indexComment)

// router.get('/:id/comments/:cid', flightControl.showComment)

// router.put('/:id/comments/:cid', flightControl.updateComment)


module.exports = router