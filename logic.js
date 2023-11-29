const tweeter = Tweeter()
const renderer = Renderer()
$("#post").click(function (){
    tweeter.addPost($('#input').val()) 
    renderer.renderPosts(tweeter.getPosts())})

$("#posts").on("click","#deletePostButon",function (){
    tweeter.removePost($(this).closest("div").data().id) 
    renderer.renderPosts(tweeter.getPosts())})


$("#posts").on("click","#addCommentsButton",function (){
    let postId = $(this).closest("div").data().id
    let commentText = $(this).closest("div").find("#commentInput").val()
    tweeter.addComment(postId, commentText)
    renderer.renderPosts(tweeter.getPosts())})

$("#posts").on("click", "spin", function () {
    let postId = $(this).closest("div").data().id
    let commentId = $(this).closest('li').data().id
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
    })