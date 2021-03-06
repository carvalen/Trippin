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
| `/profile`                | ProfilePage          | user only  `<PrivateRoute>` | Shows the user profile, that also renders an edit form and the result of the options |
| `/projects/:id`           | ProjectDetailPage    | user only `<PrivateRoute>`  | Page with a list and a form to add new list                                          |

                                         


## Components

- HomePage
 
- LoginPage

- SignupPage

- LogoutPage

- Trips options page  
  * Types of travels
  * Days of travel

- AddListForm

- ProfilePage
  * EditForm
  * TripList
  * AddListForm
  * DeleteListButton
  
- ProfilePage
  * EditProfileForm
  * 

- Routes
  * AnonRoute
  * PrivateRoute

- Common
  * Navbar
  * Footer

-Models
 * User
 * List
 * Plantilla


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
  

<br>
  
  
  ## Links
 
### Trello

https://trello.com/b/o6ZUr581/trippin
 
### Git
 
https://github.com/carvalen/Trippin

###Wireframes:
https://www.figma.com/file/EKhZ11hPHqUUgfuMK6GDmw/Trippin?node-id=0%3A1




