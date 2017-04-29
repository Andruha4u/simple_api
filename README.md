# Courses
DAL Layer for Univercity project related for choosing courses
CRUD operations: 
- add: expect body as a entity                                      (PUT)
- find: expect body with optionList                                 (POST)
- delete: expect body as a entity but prefer body with _id prop     (DELETE)
- update: expect body as a entity                                   (POST)

Entities:
- User
- Group
- Discipline
- Cathedra

Route example:
http://ip:port/CRUD operation/Entitie

http://localhost:5000/add/User

body:
```
{ 
    "UserName" : "Andrew",
    "Email" : "Andrew",
    "Password" : "Andrew",
    "PhoneNumber" : "Andrew",
    "Roles" : ["Admin"],
    "GroupId" : "58f48d45e8556a1978ad8cdc"
}
```


## Setting up project

### Prerequisites
**NOTE:** Preferable dev environment for the service is Linux OS based.


### Installation

Useful extensions :
-  [ESLint] (https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). This extension highlights linting errors/warnings during development, so it is easier to fix linting problems.

Process :

- npm install
- node api/index  (your root should be main repo root) 
## IDE
We recommend installing [VS Code] (https://code.visualstudio.com) IDE.

### VS Code
For VS Code - set up user preferences file (contact maintainers or other developers to provide you with latests file version) 


## Maintainers
Andrew Roman (andrij4ik@gmail.com)
