document.addEventListener('DOMContentLoaded', () => 
    {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', () => 
    {
        // Toggle the type of the password field
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;

        // Toggle the button text
        togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
    });
});


//JavaScript Function for feed
// Hardcoded temporary posts
document.addEventListener('DOMContentLoaded', () => 
    {
        // Only populate posts if on the feed page
        if (window.location.pathname.includes('/feed')) 
        {
            const feedContainer = document.getElementById("posts");

            posts.forEach(post => 
                {
                // Create the post container
                const postElement = document.createElement("div");
                postElement.classList.add("feed-post");
            
                // Post Header
                const postHeader = document.createElement("div");
                postHeader.classList.add("post-header");
                const username = document.createElement("h2");
                username.textContent = post.username;
                const date = document.createElement("span");
                date.textContent = post.date;
                postHeader.appendChild(username);
                postHeader.appendChild(date);
                
                // Image 
                const image = document.createElement("img");
                image.src = post.image;  // Set the image source to the image URL from the post object
                image.alt = `${post.game} image`;  
                image.classList.add("post-image"); 
            
                // Post Content (Game, Description)
                const content = document.createElement("p");
                content.textContent = `${post.game} - ${post.description}`;
            
                // Append everything to the post
                postElement.appendChild(postHeader);
                postElement.appendChild(image);  // Append image here
                postElement.appendChild(content);
                
                // Add the post to the feed container
                feedContainer.appendChild(postElement);
            });
        }
    })

    //For post creation
    document.addEventListener('DOMContentLoaded', () => 
        {
        const openPostButton = document.getElementById("openPostButton");
    
        if (openPostButton) 
        {
            openPostButton.addEventListener("click", openPostModal);
        } else 
        {
            console.error("Button with id 'openPostButton' not found.");
        }
    });
    
    function openPostModal() 
    {
        document.getElementById("postModal").style.display = "block";
    }
    
    function closePostModal() 
    {
        document.getElementById("postModal").style.display = "none";
    }
    
    
    document.addEventListener('DOMContentLoaded', () => 
        {
        // Button to open the post modal
        const openPostButton = document.getElementById("openPostButton");
        openPostButton.addEventListener("click", openPostModal);
    
        // Open the post modal
        function openPostModal() 
        {
            document.getElementById("postModal").style.display = "block";
        }
    
        // Close the post modal
        function closePostModal() 
        {
            document.getElementById("postModal").style.display = "none";
        }
    
        // Submit the post
        function submitPost() 
        {
            const username = document.getElementById("postUsername").value.trim();
            const game = document.getElementById("postTitle").value.trim();
            const description = document.getElementById("postDescription").value.trim();
            const image = document.getElementById("postImage").value.trim();
    
            if (!username || !game || !description) {
                alert("Please fill in all required fields.");
                return;
            }
    
            const newPost = {
                username: username,
                game: game,
                description: description,
                date: new Date().toLocaleDateString(),
                image: image
            };
    
            // Add the post to the feed
            addPostToFeed(newPost);
    
            // Close the modal and clear the form
            closePostModal();
            clearPostForm();
        }
    
        // Add the post to the feed
        function addPostToFeed(post) 
        {
            const feedContainer = document.getElementById("posts");
    
            const postElement = document.createElement("div");
            postElement.classList.add("feed-post");
    
            const postHeader = document.createElement("div");
            postHeader.classList.add("post-header");
    
            const username = document.createElement("h2");
            username.textContent = post.username;
    
            const date = document.createElement("span");
            date.textContent = post.date;
    
            postHeader.appendChild(username);
            postHeader.appendChild(date);
    
            const content = document.createElement("p");
            content.textContent = `${post.game} - ${post.description}`;
    
            postElement.appendChild(postHeader);
            postElement.appendChild(content);
    
            if (post.image) {
                const image = document.createElement("img");
                image.src = post.image;
                image.alt = `${post.game} image`;
                image.classList.add("post-image");
                postElement.appendChild(image);
            }
    
            feedContainer.insertBefore(postElement, feedContainer.firstChild);
        }
    
        // Clear the form fields after submission
        function clearPostForm() 
        {
            document.getElementById("postUsername").value = '';
            document.getElementById("postTitle").value = '';
            document.getElementById("postDescription").value = '';
            document.getElementById("postImage").value = '';
        }
    });
    
    function renderPost(post) 
    {
        const postDiv = document.createElement("div");
        postDiv.classList.add("feed-post");
    
        postDiv.innerHTML = `
            <div class="post-header">
                <h2>${post.username} - ${post.game}</h2>
                <span>${post.date}</span>
            </div>
            <p>${post.description}</p>
            ${post.image ? `<img src="${post.image}" alt="${post.game} image" class="post-image">` : ''}
        `;
    
        const feed = document.getElementById("feed");
        feed.insertBefore(postDiv, feed.firstChild);
    }
    