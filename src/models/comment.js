// Comment class
 
  class Comment {
    constructor(commentContent, imageId) {
      Comment.saveComment(this)
      this.id = Comment.all.length - 1 //minus 1 because index starts at 0.
      this.image = this.findImage(imageId) //sets image
      this.commentContent = commentContent //sets comment content
    }
  
    //Static method for saveComment calls are made directly on the class and 
    //are not callable on instances of the class.
    //assigns a value to a variable based on a condition. 
    //if this.all is defined, add comment
    static saveComment(comment) {
      this.all ? this.all.push(comment) : this.all = [comment]
    }
  
    findImage(int) {
      let image = Image.all[int]
      image.comments.push(this)
      return image
    }
  
    //assigns the comment to the right place via id with content and line break.
    commentEl() {
      return `<li id=comment-${this.id}>${this.commentContent}<br></li>`
    }
  }
  

