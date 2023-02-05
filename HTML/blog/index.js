/* global $ */

'use strict';
// JSON data representing the blogs and their posts and comments
const userLink = "https://jsonplaceholder.typicode.com/users";
const postsLink = "https://jsonplaceholder.typicode.com/posts";
const commentsLink = "https://jsonplaceholder.typicode.com/comments";
let users;
let postsData;
let commentsData;

fetch(userLink)
    .then(response => response.json())
    .then(data => {
        users = data;
        return fetch(postsLink);
    })
    .then(response => response.json())
    .then(data => {
        postsData = data;
        return fetch(commentsLink);
    })
    .then(response => response.json())
    .then(data => {
        commentsData = data;
        // Display the initial list of blogs
        displayUsers(users);
    });

function displayUsers(data) {

    const blogList = document.getElementById('blogList');

    let list = '';
    for (let i = 0; i < data.length; i++) {

        list += '<p>' + '<i class="material-icons">' + "language" + '</i>' + "   " +
            '<a href=\'' + data[i].website + '\'/>' + data[i].website + '</a>';
        list += '<p>' + '<i class="material-icons">' + "business_center" + '</i>' + "   " +
            "Company Name: " + data[i].company.name + '</p > ';
        list += '<p>' + '<i class="material-icons" > ' + "phone" + '</i >' + "   " + "Phone: " + data[i].phone + '</p>';
        list += '<button onclick="displaySelectedBlog(\'' + data[i].id + '\')" class="btn btn-outline-primary">' + "Explore" + '</button>';
        list += '<hr>';
    }

    blogList.innerHTML = list;


}

//executes when user is selected
//takes userID as arg
function displaySelectedBlog(blogName) {

    const selectedBlog = document.getElementById('selectedBlog');
    selectedBlog.innerHTML = ''; // Clear the previous content
    document.getElementById("selectedBlog").style = "display:visible";

    let blog = '';
    blog += '<button onclick="backBtn()" id="back" class="back">Back</button>' + '<br>' + '<br>';
    blog += '<h2>Posts:</h2>';
    let myNum = Number(blogName);
    Loop:
    for (let i = myNum; i < postsData.length; i++) {
        if (postsData[i].userId !== myNum) continue Loop;
        blog += '<p>' + postsData[i - 1].title + '</p>';
        blog += '<button onclick="btnFunction(\'' + i + '\')" id=\'' + i + '\'>' + "Show Comments" + '</button>' + '<br>';
        // addBtnClass();
    }

    selectedBlog.innerHTML = blog;
    document.getElementById("blogList").style = "display:none";
}

function btnFunction(postIdNum) {
    let elem = document.getElementById(postIdNum);
    //$(elem).addClass("btn");
    let selectedPost = document.getElementById('selectedPost');


    if (elem.innerHTML === "Show Comments") {
        $(elem).html("Hide Comments");
        selectedPost.innerHTML = ''; // Clear the previous content

        let postComment = '';
        let myNumCom = Number(postIdNum);
        postComment += '<h1>' + "Comments:" + '</h1>';

        Loop:
        for (let i = 0; i < commentsData.length; i++) {
            if (commentsData[i].postId !== myNumCom) continue Loop;

            postComment += '<p>' + commentsData[i].name + '</p>';
            selectedPost.innerHTML = postComment;

        }
    }
    else if (elem.innerHTML === "Hide Comments") {
        $(elem).html("Show Comments");
        selectedPost.innerHTML = ''; // Clear the previous content
    }

}


function backBtn() {
    document.getElementById("blogList").style = "display:visible";
    document.getElementById("selectedBlog").style = "display:none";
    let selectedPost = document.getElementById('selectedPost');

    selectedPost.innerHTML = '';

}


