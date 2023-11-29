
tweeter.addPost("First post!")
tweeter.addPost("Aw man, I wanted to be first")
  
  tweeter.addComment("p1","First comment on first post!")
  tweeter.addComment("p1","Second comment on first post!!")
  tweeter.addComment("p1","Third comment on first post!!!")
renderer.renderPosts(tweeter.getPosts())

