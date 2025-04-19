class Post 
{
  constructor(title, body) 
  {
    this.title = title;
    this.body = body;
  }
}

exports.createPost = function (title, body) 
{
  return new Post(title, body);
};

console.log("[post model] loaded");
