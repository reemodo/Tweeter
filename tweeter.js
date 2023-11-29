
  const Tweeter = function(){
    let postIdCounter = 1;
    const posts = []
    let commentIdCounter = 1;
    const getPosts = function (){
      return posts
    }
    const addPost = function (text){
      let newPost = {id:"p" + postIdCounter, text:text,  comments:[] }
      postIdCounter +=1
      posts.push(newPost)
    }
    const removePost = function(postID){
      for(let index = 0; index < posts.length; index++)
        if(postID === posts[index].id)
          posts.splice(index,1)
    }
    const addComment = function (postID, text){
      let newComment = {id : "c"+commentIdCounter, text:text}
      commentIdCounter += 1
      for (let post of posts)
        if(post.id === postID){
          post.comments.push(newComment)
          break;
        }
    }
    const removeComment = function(postID, commentID){
      let commentInedx = parseInt(commentID.replace("c", ""))
      for (let post of posts)
      if(post.id === postID){
        for(let index = 0; index < post.comments.length; index++)
          if(post.comments[index].id === commentID){
              post.comments.splice(index,1)
              break;
          }
        }
      
    }
    return{
      getPosts, addPost, removePost, addComment, removeComment
    }
  
  }
 
  
  // tweeter.addComment("p1","First comment on first post!")
  // tweeter.addComment("p1","Second comment on first post!!")
  // tweeter.addComment("p1","Third comment on first post!!!")
  // tweeter.addComment("p2","Don't wory second poster, you'll be first one day.")
  // tweeter.addComment("p2","Yeah, believe in yourself!")
  // tweeter.addComment("p2","Haha second place what a joke.")
  
  // tweeter.addPost("This is my own post!")
  // console.log(tweeter.getPosts())
  // //This should be added to the posts array:
  // //{text: "This is my own post!", id: "p3", comments: []}
  
  // tweeter.removePost("p1")
  // console.log(tweeter.getPosts())
  // //There should only be two posts in the post's array:
  // //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
  // //{text: "This is my own post!", id: "p3", comments: []}
  
  // //============================
  // //============================
  // //Stop here
  // //Make sure everything works. Then keep going
  // //============================
  // //============================
  
  // tweeter.addComment("p3","Damn straight it is!")
  // tweeter.addComment("p2","Second the best!")
  // console.log(tweeter.getPosts())
  // //This should be added to the third post's comments array:
  // //{id: "c7", text: "Damn straight it is!"}
  
  // //This should be added to the second post's comments array:
  // //{id: "c8", text: "Second the best!"}
  
  // tweeter.removeComment("p2", "c6")
  // console.log(tweeter.getPosts())
  // //This comment should be removed:
  // //{id: "c6", text: "Haha second place what a joke."}
  


