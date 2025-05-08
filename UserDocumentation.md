#  Game Buddy – User Documentation

---

## Sign Up

> 

1. Navigate to `/signup`.
2. Fill in a username, email, and password.
3. Click **Sign Up**.
4. You will be redirected to the login page.

---

## Log In

> 

1. Navigate to `/login`.
2. Enter your username and password.
3. Click **Log In**.
4. You are now redirected to the feed.
5. You should see **"Logged in as: [your username]"** at the top.

---

## View Posts

> 

1. On the feed page (`/feed`), the app automatically fetches all posts.
2. Posts display:
   - The poster's username
   - The content
   - The date/time the post was made
3. Posts are shown in reverse chronological order.

---

## Create a Post


1. Click the **Post** button to open the modal.
2. Enter:
   - A title
   - A description
   - (Optional) an image URL
3. Click **Submit**.
4. The new post appears in the feed without needing to refresh the page.

---

## How Session is Handled

- The app uses `localStorage` to store the logged-in user.
- This keeps you "logged in" across pages until the browser is closed or localStorage is cleared.

---


This concludes the user-facing documentation for Game Buddy. The system is fully operational for creating and viewing social gaming posts.
