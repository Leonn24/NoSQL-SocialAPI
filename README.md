# NoSQL-SocialAPI

## Description

NoSQL Social API is a Node.js application programming interface (API) that allows users to perform CRUD operations on social networking data models using a NoSQL database. The data models include friends, users, thoughts, and reaction data models, and they can be retrieved by ID or all of them.
## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#Challenge)
- [Screenshot](#screenshots)
- [Links](#links)

# Overview

## Challenge
The challenge was to build a RESTful API that allows a social media startup to perform CRUD operations on users, thoughts, and reactions data models using a NoSQL database. The API must be built using Node.js and Mongoose and must provide endpoints that can handle large amounts of unstructured data.

API must allow users to:

- Create and delete user accounts.
- Create, read, update, and delete thoughts.
- Add and remove reactions to thoughts.
- Add and remove friends to a user's friend list.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Screenshots

![MongoDB](/public/assets/images/MongoDB.png)
![Insomnia](/public/assets/images/Insomnia.png)

## Links

### Walkthrough Video
[Click Here to Watch:](https://www.youtube.com/watch?v=kPxzHbkLvCU)

Heres a demo video of the API at work


### GitHub Account
[GitHub:](https://github.com/Leonn24)

Follow me on github!

### Deployed Application Repo
[Repo](https://github.com/Leonn24/NoSQL-SocialAPI)

Here's the repository for the API, feel free to use it!
