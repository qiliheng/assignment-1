# Assignment 1 documention

For the assignment1's git hub, I created a github name assignment 1, inside it contain two branches, one is the master and the other name test.
The master braches only do to commit and push, first time for create and last time for everything is done.
The test braches I create is use for coding with errors and debugging with, the reason I use test to do this is to make sure I will have something that can submit for the assignment.
For the update part, except the last part I doing css with authorized for user, the rest time I update for each function has be done. That is includeing server.js, routes, components.

In phase 1, the assignment is using json to contain data and no need for socket to do chat, therefore I only have two json file.
In the client side, the data are represent as an property like id, username. But in server side, they are stroed in Json file to represent as a group of property.
One is user.json and the other one is group.json.
In user.json it contain the basic requirement from the task ask such as username, email, id, roles[ ], groups[ ], however the groups are not working for some reason.
In group file, it contain a channel, the reason I don't have other channel file is because for the phase 1, I put the channel underneath group, once user click group it will display the channel.
Based on no need chat component for now, wat I think is this design is enough for show the skill of the assignmnt need.


Until to now, I have used few Angular architecture that include component, services, and routes. 
The component have contain all the part that I want have a web to display like group, account.
The most importeant components are LoginComponent, this component do have the session storage that used in most time and the group component that contain both group and channels.
In phase 1, I used 4 services, for user services, that use on admin to promote or remove user. Group services that used for group-admin or superadmin create new group.
Channel services, that used for the group creater to create new channel. And lastly is auth services, that use for provide the authorized for login user or not logged in user.
The Routes are in the aoo route.ts, this file contain all the component like login, account profile, without the route it can't run.

The Modules used in phase 1 is fs and express.
The express is the primary framework used to handeling HTTP request and toutings, the fs is sed for file operations, such as reading and writing JSON files that store user, group data.
The function used for most is the session store and json.parse, one of them is store the data and the other one is used for exchange data to and from web server.
There are two type of files that is important, one is router files likepostLogin.js, postDelete.js, the other one is server.js.
The server.js sets up routes and starts the server and The rest is Separate files for handling different types of requests.

For the server side routes, there are postCreateChannel, postCreateGroup, postCreateUser, postDeleteGroup,
postDeleteChannel,postJoinChannel, postJoinGroup, postLogin, postLoginAfter, postPromoteToGroupAdmin, postPromote to super Admin and postRemoveuser.
Each of the fil doing the requests as their name does. 
For the Client Server Interaction, there are three different.
One is Login, once the user is logged in, the LaoinComponent will send a POST request to login page and save the data as the session storage.
The next one is group and channel, that when a user want to create or delete the group or channel, the groupComponent will send the request to the server route.
Then the server updates the group.json file, and the client updates its display based on the server's response.
Lastly is user management, this is only for super admin, when the super admin want remove user, the superadminComponent will sends a post request to the route,
then the server updates the users.json file, and the client reflects the changes accordingly.
