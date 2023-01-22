<!DOCTYPE html>
<html>
<body>

<div id="blogList"></div>
<div id="selectedBlog"></div>
<div id="selectedPost"></div>

<script>
  // JSON data representing the blogs and their posts and comments
  const data = {
    blogs: [
      {
        name: 'Blog 1',
        website: 'www.blog1.com',
        company: 'Company 1',
        posts: [
          {
            title: 'Post 1',
            comments: [
              'Comment 1',
              'Comment 2',
              'Comment 3'
            ]
          },
          {
            title: 'Post 2',
            comments: [
              'Comment 4',
              'Comment 5',
              'Comment 6'
            ]
          }
        ]
      },
      {
        name: 'Blog 2',
        website: 'www.blog2.com',
        company: 'Company 2',
        posts: [
          {
            title: 'Post 3',
            comments: [
              'Comment 7',
              'Comment 8',
              'Comment 9'
            ]
          },
          {
            title: 'Post 4',
            comments: [
              'Comment 10',
              'Comment 11',
              'Comment 12'
            ]
          }
        ]
      }
    ]
  };

  // Function to display the list of blogs
  function displayBlogList() {
    const blogList = document.getElementById('blogList');
    let list = '';
    for (let i = 0; i < data.blogs.length; i++) {
      list += '<p>' + data.blogs[i].name + '</p>';
    }
    blogList.innerHTML = list;
  }

  // Function to display the selected blog and its posts
  function displaySelectedBlog(blogName) {
    const selectedBlog = document.getElementById('selectedBlog');
    let blog = '';
    for (let i = 0; i < data.blogs.length; i++) {
      if (data.blogs[i].name === blogName) {
        blog += '<h1>' + data.blogs[i].name + '</h1>';
        blog += '<p>Website: ' + data.blogs[i].website + '</p>';
        blog += '<p>Company: ' + data.blogs[i].company + '</p>';
        blog += '<h2>Posts:</h2>';
        for (let j = 0; j < data.blogs[i].posts.length; j++) {
          blog += '<p>' + data.blogs[i].posts[j].title + '</p>';
          blog += '<button onclick="displayComments(' + i + ', ' + j + ')">Show Comments</button>';
        }
        break;
      }
    }
    selectedBlog.innerHTML = blog;
  }

  // Function to display the comments for a selected post
   function displayComments(blogIndex, postIndex) {
    const selectedPost = document.getElementById('selectedPost');
    let comments = '';
    comments += '<h2>Comments:</h2>';
    for (let i = 0; i < data.blogs[blogIndex].posts[postIndex].comments.length; i++) {
      comments += '<p>' + data.blogs[blogIndex].posts[postIndex].comments[i] + '</p>';
    }
    comments += '<button onclick="hideComments()">Hide Comments</button>';
    selectedPost.innerHTML = comments;
  }
  function hideComments(){
   const selectedPost = document.getElementById('selectedPost');
   selectedPost.innerHTML ='';
  }
  // Call the displayBlogList function to display the initial list of blogs
  displayBlogList();
  
  // Add event listeners to the blog list items to call the displaySelectedBlog function when clicked
  const blogListItems = document.querySelectorAll('#blogList p');
  for (let i = 0; i < blogListItems.length; i++) {
    blogListItems[i].addEventListener('click', function() {
      displaySelectedBlog(this.innerHTML);
    });
  }
</script>

</body>
</html>

