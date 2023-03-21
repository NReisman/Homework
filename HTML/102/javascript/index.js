/* global $ */

// SL - if not using webpack should have an IIFE to prevent unwanted globals...

'use strict';

// JSON data representing the blogs and their posts and comments
const userLink = "https://jsonplaceholder.typicode.com/users";
const postsLink = "https://jsonplaceholder.typicode.com/posts";
const commentsLink = "https://jsonplaceholder.typicode.com/comments";
let users;
let postsData;
let commentsData;


async function fetchData(url) {
  // SL - what if something goes wrong? No try catch and no check for response.ok.
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function main() {
    const urls = [
        userLink,
        postsLink,
        commentsLink
    ];

    // SL - impressive use of promises, but not sure its a great idea to download everything a user might possibly want at the start. This takes time and bandwidth - though once loaded selections are instant as everything is already loaded and nothing ever needs to be fetched
    // Argument can be made for loading in anticipation user might want it, but only in background not up front where user has to wait, and for things like posts and comments I dont think that argument really makes sense, user will likely just look at a few that interest them.
    const promises = urls.map(url => fetchData(url));
    const results = await Promise.all(promises);

    const [data1, data2, data3] = results;
    users = data1;
    postsData = data2;
    commentsData = data3;

    displayUsers(users);

    return results;
}

main();
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
    // SL - ok, but I think its frowned upon to use onClick. (In react it looks like this - but its not). Better would be to select the element after adding it and attach listener. This only works because your functions are unfortuantely global. If they werent global, onClick wouldnt find them
    blog += '<button onclick="backBtn()" id="back" class="btn btn-outline-primary back">Back</button>' + '<br>' + '<br>';
    blog += '<h2>Posts:</h2>';
    let myNum = Number(blogName);

    // SL - Labeled statements? Definitely legal but we didnt mention this in class and Ive never seen anyone use one before (doesnt add anything, remove Loop: and just call continue; will work exactly the same)
    // In any event, better here would be a filter to get only the posts you want rather then go through all and skip those (or fetch on demand only those asked for by user...)
    Loop:
    for (let i = myNum; i < postsData.length; i++) {
        if (postsData[i].userId !== myNum) continue Loop;
        blog += '<div class="posts"><p>' + postsData[i - 1].title + '</p></div>';
        blog += '<div class="posts"><button onclick="btnFunction(\'' + i + '\')" id=\'' + i + '\'>' + "Show Comments" + '</button></div>';
        // addBtnClass();
    }

    selectedBlog.innerHTML = blog;
    document.getElementById("blogList").style = "display:none";
}

function btnFunction(postIdNum) {
    let elem = document.getElementById(postIdNum);
    //$(elem).addClass("btn");

    // SL - selectedPost? strange name for soemthing that just holds comments...
    let selectedPost = document.getElementById('selectedPost');


    if (elem.innerHTML === "Show Comments") {
        $(elem).html("Hide Comments");
        selectedPost.innerHTML = ''; // Clear the previous content

        let postComment = '';
        let myNumCom = Number(postIdNum);
        postComment += '<div class="commentHeader"><h1>' + "Comments:" + '</h1></div>';

        Loop:
        for (let i = 0; i < commentsData.length; i++) {
            if (commentsData[i].postId !== myNumCom) continue Loop;

            postComment += '<div class="commentClass"><p>' + commentsData[i].name + '</p></div>';
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

// Sl - nice. The material icons were a nice touch.
// The hooking up of the event handling using onClick seems like cheating but cant argue with the results...
// nice and snappy (due to eager loading of all possible posts and comments)
