//declaration of the class CommentsController

//The constructor method is a special method for 
//creating and initializing an object. All classes in JS are just objects. 
//There can only be one special method with the name "constructor" //
//in a class.

class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  //initializes the newly created addCommentFormListener method.
  //called in index.js on document ready. 

  init() {
    // kicks off controller from here
    this.addCommentFormListener()
  }

  addCommentFormListener() {
  // using var _this = this preserves the reference to the class
  //each of the html form's submit event to be able to add comments. 
  //same as a “forEach” where its taking each form element, and its index, 
    var _this = this
    $('form').each((i, el) => {
      //iterates over each for submissions
      $(el).submit((event)=> {
        //this is what happens when you click the submit button
        event.preventDefault()
        //keeps from default behaviors from happening like page resets. 
        let imageId = $(el).attr('data-id')
        //grabs the id property
        //so can grab element later in the code by this selector
        let input = $(`#comment-description-${imageId}`)
        //where the input comes from
        let commentContent = input.val()
        //defines the comment content from input field's value
        //the rest of the code creates comment variable.
        //Note: every time you see the keyword new in JS, a new object is being instantaited
        var comment = new Comment(commentContent, imageId) //calls comment constrcutor from comment.js
        _this.render(comment)
        input.val('') //clears out the value in input field
      })
    })
  }

  //renders comment by appending it to the other comments for the specific picture
  render(comment) {
    $(`#comments-${comment.image.id}`).append(comment.commentEl())
  }

  }


