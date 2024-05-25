const blogPosts = [];

function displayBlogPosts() {
    const blogSection = document.getElementById('blog');
    blogSection.innerHTML = '';
    blogPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>Posted on ${post.date}</p>
            <p>${post.content}</p>
        `;
        blogSection.appendChild(postDiv);
    });
}

function addPost(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const newPost = { title, content, date: new Date().toDateString() };
    blogPosts.push(newPost);
    document.getElementById('post-form').reset();
    displayBlogPosts();
}

window.onload = displayBlogPosts;
document.getElementById('post-form').addEventListener('submit', addPost);
