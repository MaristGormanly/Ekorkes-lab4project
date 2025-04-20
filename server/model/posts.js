class Post 
{
  constructor(title, body, author) 
  {
    this.title = title;
    this.body = body;
    this.author = author;
    this.dateCreated = new Date();
  }
}

exports.createPost = (title, body, author) => 
{
  return new Post(title, body, author);
};

console.log("[postModel] initialized");
