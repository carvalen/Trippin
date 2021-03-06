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
- **List Info** - As a user I want to see all the list generated from the options I selected.
- **List Form** - As a user I want to create, edit and delete information on the "what to bring" list.
- **My profile** - As a user I want to see and edit my profile.
- **Downdload List** - As a user I want to download the finish list in my laptop/mobile.

 
## Backlog
 
User profile:
- Download/Share list.
- Edit user profile.
 
Homepage
- Dark version.
 
# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                                             |
| ------------------------- | -------------------- | --------------------------- | ------------------------------------------------------------------------------------ |
| `/`                       | HomePage             | public `<Route>`            | Home page                                                                            |
| `/signup`                 | SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup                        |
| `/login`                  | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login                         |
| `/logout`                 | LogoutPage           | anon only `<AnonRoute>`     | Logout page with option of login again                                               |
| `/trip`                   | TripPage             | user only `<PrivateRoute>`  | Page that shows options.                                                             |
| `/profile`                | ProfilePage          | user only  `<PrivateRoute>` | Shows the user profile, that also renders an edit form and the list of my options    |
| `/list/:id`               | listDetailPage       | user only `<PrivateRoute>`  | Page with a list with an edit form to edit a list                                    |

                                         


## Components

- HomePage
 
- LoginPage

- SignupPage


- Trips options page  
  * Types of travels
  * Days of travel


- ProfilePage
  * EditForm
  * TripList
  * AddListForm
  * DeleteListButton
 
- List page
  * EditListForm
  

- Routes
  * AnonRoute
  * PrivateRoute

- Common
  * Navbar
  * Footer


## Services

- Auth Service
  - authApi.login(user)
  - authApi.signup(user)
  - authApi.logout()

- List Service
  - projectsApi.trips()
  - projectsApi.addlist(list)
  - projectsApi.getListDetails(listId)
  - projectsApi.editList(listId, listBody)
  - projectsApi.deleteList(listId)

- User Service
  - userApi.editUser(userId, userBody)
  

<br>
  
# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true },
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  lists: [ { type: mongoose.Schema.Types.ObjectId, ref: "List" } ]
}
```

List model

```javascript
{
  type: String,
  days: String,
  items: [{String}],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } ,
  otherOptions: String,
},
```


Plantilla model

```javascript
{
  type: String,
  days: String,
  items: [{String}],
},
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/auth/signup`                | {username, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {email, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/api/list`               |                              |                | 400          | Sends all lists                                         |
| GET         | `/api/list/:listId`           | {id}                         |                |              | Sends one specific list         |
| GET         | `/api/list/plantilla/:type/:days`               | {type, days}       | 201            | 400          | Send the result and return a template                   |
| POST        | `/api/list/`               | {type, days, items, other options}       | 201            | 400          | Create and save a new list in the DB                  |
| PUT         | `/api/list/:listId`           | {type, days,items, other options}              | 200            | 400          | Edits list in the DB                           |
| DELETE      | `/api/list/:listId`          | {id}                         | 201            | 400          | Deletes list    |                                               |
| GET         | `/api/user`                 | {}                           | 201            | 400          | Sends user detauls                                             |
| PUT         | `/api/user/:userId`                  | {username ...}            |                |              | Edits user                           |



<br>
  
  ## Links
 
### Trello

https://trello.com/b/o6ZUr581/trippin
 
### Git
 
https://github.com/carvalen/Trippin

### Wireframes
https://www.figma.com/file/EKhZ11hPHqUUgfuMK6GDmw/Trippin?node-id=0%3A1




