# Backend-Test API REST CRUD

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/victorhcortes/API-REST.git
> cd API-REST
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/victorhcortes/API-REST) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```


## User's guide - Recommended Use Postman APP

[Postman](https://www.getpostman.com/)

#### Create Provider - POST
| Example | 
|:-------- |
|`http://localhost:3000/api/providers/` |
| Note 1: consult specialties `http://localhost:3000/api/specialties/` |
| Nota 2: specialty - Represents the collection of specialties (id) |

```
{ 
    "firstName" : "your info", 
    "lastName" : "your info", 
    "middleName" : "VHC", 
    "email" : "example@gmail.com", 
    "projectedStartDate" : "2017-09-25T11:57:54.809+0000", 
    "employerId" : 334, 
    "providerType" : "DO", 
    "staffStatus" : "AFFILIATE", 
    "assignedTo" : 87654, 
    "status" : "UNDER_REVIEW", 
    "createdBy" : 72965, 
    "createAt" : "",
    "updateAt" : "",
    "specialty" : "59c919d356fd344c4d82b5ea"
}
```

#### Read Providers - GET
| Example | 
|:-------- |
|`http://localhost:3000/api/providers/` |

#### Read a single Provider - GET
| Example | 
|:-------- |
|`http://localhost:3000/api/providers/59c9491aed07aa3e60512904` |

#### Update Provider - PUT
| Example | 
|:-------- |
|`http://localhost:3000/api/providers/59c9491aed07aa3e60512904` |
| Note: consult specialties `http://localhost:3000/api/specialties/` |
```
{ 
    "firstName" : "info",
        "lastName" : "info", 
    "middleName" : "VHC", 
    "email" : "example@gmail.com", 
    "projectedStartDate" : "2017-09-25T11:57:54.809+0000", 
    "employerId" : 334, 
    "providerType" : "DO", 
    "staffStatus" : "AFFILIATE", 
    "assignedTo" : 87654, 
    "status" : "UNDER_REVIEW", 
    "createdBy" : 72965,
    "specialty": "59c919d356fd344c4d82b5ec"
}
```
#### Delete Provider - DELETE
| Example | 
|:-------- |
|`http://localhost:3000/api/providers/59c9491aed07aa3e60512904` |
