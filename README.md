# Trippin

## Description
Trippin is an API where it helps you to organize what you need in your suitcase for your next trip.
 
## User Stories
 
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage to start using it.
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account.
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.
- **Trips section** - As a user I want to see all the trip filters.
- **List Info** - As a user I want to see all the list of options I need for a trip.
- **List Form** - As a user I want to create, edit and delete information on the "what to bring" list.
- **My profile** - As a user I want to see and edit my profile.
- **Downdload List** - As a user I want to download the finish list in my laptop/mobile.

 
## Backlog
 
User profile:
- Download/Share list.
- Add favourite lists.
- Edit profile
 
Homepage
- Dark version.
 
## ROUTES:
 
- GET / 
  - renders the homepage
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - email
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form (with flash msg)
- POST /auth/login
  - redirects to / if user logged in
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- GET /my-profile
  - Renders profile/view
  - URL /list/edit
  - URL /list/create
  
- GET /list
  - renders the  list 
-Get /list/create
  - render list-form-create 
- POST /list/create 
  - body: 
   - name
- POST /list/edit 
  - Render list-form-edit
  - Update and add list info
 
- GET /list/:id
  - renders the view and details of the list 
  - favorite button (backlog)
- POST /list/:id/favourites
-Add id list to user profile
  

  
  ## VIEWS
  
 -Auth
    -logIn
    -signUp
    -logOut
   
 -Home:  
   -Index
   -Layout
   -Error
 
  
  ## Models

-User model:
  email: {
    type: String,
    require: true,
    unique: true,
  },
  username: {
  type: String,
  require: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    require: true,
  },
  

-List model:
  
  title: {
    type: String,
    required: true,
  }
  
  
  ## Links
 
### Trello

https://trello.com/b/o6ZUr581/trippin
 
### Git
 
https://github.com/carvalen/Trippin

###Wireframes:
https://www.figma.com/file/EKhZ11hPHqUUgfuMK6GDmw/Trippin?node-id=0%3A1




