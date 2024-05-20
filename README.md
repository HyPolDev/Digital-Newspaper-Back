# Social Network Backend

¡Welcome all to my social media backend reporsitory! This the fifth project at GeeksHubs Academy, consisting in the back and database code of a social media site, in this case, one based on the old Tweetr.

<img src="./img/Captura de pantalla 2024-04-25 134107.png"/>

## 🛠️ Tech&Tolls used 

<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="HTML5" /><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="CSS" /><img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="CSS"/><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="CSS" />
<img src="https://img.shields.io/badge/DOCKER-2020BF?style=for-the-badge&logo=docker&logoColor=white" alt="CSS" />

## Install on local
1.  Clone this repository
2.  Run ` $ npm install ` in terminal
3.  Run and connect your mongooseDB
4.  Run seeders:  ` $ npm run seeds `
5.  Start server:  ` $ npm run dev `
6.  SEEDED USERS:
   - admin@admin.com -> 123456
   - user@user.com   -> 123456

##  ⚙️ Endpoints
<details>
<summary>🟢Auth</summary>
<details>
<summary>User Registration</summary>

-   Register new user
    
    Registers a new user. The username and email must be unique.

        POST /register

    Body:
    
    ```json
    {
        "userName": "User",
        "email": "user@adress.com",
        "realName": "user Real Name"
        "password": "password",
    }
    ```

</details>

<details>
<summary>User Login</summary>

-   Login user
    
    Logs in a user using their email and password. (Currently doesn't support login via username).

        POST /login
        
    Body:

    ```json
    {
        "email": "admin@admin.com",
        "password": "123456"
    }
    ```

</details>
</details>
<details>
<summary>🟢Posts</summary>
<details>
<summary>Post Management</summary>

-   Retrieve active posts
    
    Retrieves active posts. Default page is 0 and default page size is 5. If the user is an admin, retrieves all posts.

        GET /posts/
        
    Parameters:
    
    -   `page`: Page number (optional)
    -   `pageSize`: Number of posts per page (optional)

</details>

<details>
<summary>Retrieve Post</summary>

-   Retrieve post by ID
    
    Retrieves a post by its ID.

        GET /posts/:id

</details>

<details>
<summary>Post Creation</summary>

-   Create a new post
    
    Creates a new post.

        POST /posts/

    Body:

    ```json
    {   "region":"selected region",
        "relevance": "selected relevance 1-10",
        "title": "new title",
        "subTitle": "new subtitle",
        "content": "This is a new post."
    }
    ```

</details>

<details>
<summary>Post Update</summary>

-   Update post
    
    Updates a post. Requires post ID and updated text.

        PUT /posts/
        
    Body:

    ```json
    {
        "postId": "post_id_here",
        "text": "Updated post content."
    }
    ```

</details>

<details>
<summary>Post Deletion</summary>

-   Delete post
    
    Deletes a post. Only accessible to administrators or the post creator.

        DELETE /posts/:postId

</details>
</details>

## ✒️ Autor

- **Pol Montero** - Project Developer
  - [GitHub](https://github.com/hypoldev) 

## 🎓 Special Thanks

- To **Geekshubs Academy** for the trust, encouragement and knowledges to make me able to develop this first project.


## 📄 Add Ons - Bugs and Dreams

- Token storage is null, i'll change it to WebStorage at some point.
- Post Seeders are somewhat incomplete, they lack images, wich is very important in such a project
- The endpoint documentation is NOT complete, might do that later
- By now its really not important but a user panel would be great
- I'd been plaing to add a post serchbar before ending the project


