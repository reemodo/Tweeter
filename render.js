const postsList = $("#posts")

const printComments = function(comments){
    let addedHtml = ""
    let HtmlDeleteCommentButon = "<spin class='delete-comment' id='deleteComment'> X </spin>"
        for (let comment of comments)
        addedHtml += "<li data-id='"+ comment.id +"'>"+ HtmlDeleteCommentButon + comment.text +"</li>"
    return   "<ul>"+ addedHtml+"</ul>"
}

const printPosts = function(post){
    return "<p class='post-text'>"+ post.text +"</p>"
}

const removePostsEleement = function(){
    postsList.empty()
}

const Renderer = function(posts){
    const renderPosts = function(posts){
        removePostsEleement()
        for(let post of posts){
            let HTMLPost =  printPosts(post)
            let HtmlCommenttext = " <input type='text' placeholder='Commint what's on your mind?' id='commentInput'>"
            let HtmlAddCommentsButton = "<input class='button' id='addCommentsButton' value='Add Comment' type='button'/>"
            let HtmlDeletePostButon = "<input class='delete' id='deletePostButon' value='Delete Post' type='button'/>"
            let HtmlCommentsList = printComments(post.comments)
            postsList.append("<div class='postContainer' data-id='"+ post.id +"'> "+HTMLPost +HtmlCommenttext+ HtmlAddCommentsButton + HtmlCommentsList + HtmlDeletePostButon+ "</div>")
        }
    }
    return{
        renderPosts
    }
}
