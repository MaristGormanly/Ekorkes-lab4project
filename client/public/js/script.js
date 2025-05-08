document.addEventListener('DOMContentLoaded', () => 
    {
        // Show current user in navbar
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) 
        {
            const profileDiv = document.getElementById('user-profile');
            if (profileDiv) 
            {
                profileDiv.textContent = `Logged in as: ${user.username}`;
            }
        }
    
        // Load posts from backend
        fetch('/api/posts')
        .then(res => res.json())
        .then(posts => 
        {
            const postsContainer = document.getElementById("posts");
            postsContainer.innerHTML = '';
            
            posts.forEach(post => 
            {
                const postDiv = document.createElement("div");
                postDiv.classList.add("feed-post");
                postDiv.innerHTML = `
                    <div class="post-header">
                        <h2>${post.username}</h2>
                        <span>${new Date(post.timestamp).toLocaleString()}</span>
                    </div>
                    <p>${post.content}</p>
                `;
                postsContainer.appendChild(postDiv);
            });
        });
    
        // Modal open/close
        const modal = document.getElementById("postModal");
        const openPostButton = document.getElementById("openPostButton");
        const closePostModal = document.getElementById("closePostModal");
    
        openPostButton?.addEventListener('click', () => 
        {
            modal.style.display = "block";
        });
    
        closePostModal?.addEventListener('click', () => 
        {
            modal.style.display = "none";
        });
    
        // Handle post submit
        const submitPost = document.getElementById("submitPost");
    
        submitPost?.addEventListener('click', async () => 
        {
            const title = document.getElementById('postTitle').value.trim();
            const description = document.getElementById('postDescription').value.trim();
            const image = document.getElementById('postImage').value.trim();
    
            if (!user || !user.username) 
            {
                alert("You must be logged in to post.");
                return;
            }
    
            if (!title || !description) 
            {
                alert("Title and description are required.");
                return;
            }
    
            const content = `${title} - ${description}${image ? `\n<img src="${image}" alt="Game image" class="post-image">` : ''}`;
    
            const res = await fetch('/api/posts', 
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content, username: user.username })
            });
    
            if (res.ok) 
            {
                modal.style.display = "none";
                location.reload();
            } 
            else 
            {
                alert("Failed to post.");
            }
        });
    });
    
