---
title: API example - Bflix
tags: [ tech writing, api, information architecture ]
description: Written for the API I wrote for the B-movie app that I've been developing.   
date: 10/08/2022
---

>**Project:** CareerFoundry Assignment; write an API for a movie app<br />
>**Description:**  Written for the API I wrote for the B-movie app that I've been developing. <br />
>**Date of the rewrite:** July 8, 2022   


![Movie Camera](../../static/img/movie-camera.png)

# My B-Movie Flix API
This API lets users access information about different B-movies, such as directors, actors, genre, and year of release. It also lets them sign up so they can create a list of their favorite B-movies. They can also remove movies from their favorites and even unregister from the movie app if they'd like.

## Get a list of all movies



| Endpoint | HTTP Method | Request | Response |
| --- | --- | --- | --- |
|  `/movies` |  GET | None | Body |

#### Request

None

#### Response  
A JSON object holding data about all the movies.



## Get data about a single movie by title


| Endpoint | HTTP Method | Request | Response |
| --- | --- | --- | --- |
|  `/movies/:Title` | GET | None | Body |



#### Request

None

#### Response 

A JSON object holding data about a single movie containing the description, genre, directory, image URL, and featured (true or false).

```json
{
    "Genre": {
        "Name": "Horror",
        "Description": "The final girl, the \"not dead yet\" scare, and the dystopian endings. Horror is famous for having story beats that we come to expect like jump scares. Lean into them and find ways to subvert. You have subsets like haunted houses, slashers, zombies, evil creatures, and other subgenres."
    },
    "Director": {
        "Name": "Dan O'Bannon",
        "Bio": "Was inspired at an early age by EC Comics like Tales from the Crypt and old horror films that he saw in St. Louis. He even wrote a few stories for Heavy Metal magazine (which also showed up in the film). O'Bannon got his start when he and John Carpenter collaborated on the cult sci-fi film Dark Star (1974). ",
        "Birth": "1946-09-30",
        "Death": "2009-12-17"
    },
    "_id": "62c355b6f3a3dc1a7e6952d2",
    "Title": "Return of the Living Dead",
    "Description": "When two bumbling employees at a medical supply warehouse accidentally release a deadly gas into the air, the vapors cause the dead to rise again as zombies.",
    "Released": "1985",
    "Actors": [
        "Clu Gulager",
        "James Karen",
        "Don Calfa",
        "Thom Mathews"
    ],
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BNmNlM2RmZTEtNGVhNS00MjU3LWI1OWUtMWI5MThlYTVjM2M5XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_UX140_CR0,0,140,209_AL_.jpg",
    "Featured": true
}
```

## Get data about a genre by name


| Endpoint | HTTP Method | Request | Response |
| --- | --- | --- | --- |
|  `/movies/genre/:Name` | GET  | None | Body |



#### Request

None

#### Response 
    
A JSON object that holds data about the genre of the movies in the database.


```json
{
    "Name": "Action",
    "Description": "A clear division between good and evil. Lots of fighting and set pieces. Their pacing and structure are built around scenes like car chases and their climaxes often have the biggest set-pieces."
}
```

## Get data about a director by name

| Endpoint | HTTP Method | Request | Response |
| --- | --- | --- | --- |
|  `/movies/directors/:Name` | GET | None | Body |



#### Request

None

#### Response 

    
A JSON object holding data about a director.

```json
{
    "Name": "Chang Cheh",
    "Bio": "He was the leading Martial Arts director in Hong Kong in the 1970s, now with close to 100 films to his name. He has influenced other directors such as John Woo and Liu Chiau Liang, and made famous such Hong Kong stars as Phillip Chung-Fung Kwok, Fu Sheng, and Lung Ti.",
    "Birth": "1923-02-10",
    "Death": "2002-06-22"
}
```

## User registration


| Endpoint | HTTP Method | Request | Response |
| --- | --- | --- | --- |
|  `/user` | POST  | Body | Body |



#### Request

A JSON object holding the data about the new user.

```json
{
    "Username": "bambammcgee",
    "Password": "NUng``GQE@c]",
    "Email": "bbmcgee@email.com"
}
```



#### Response 

A JSON object holding the new user's data with a system-generated ID.

```json
{
    "Username": "bambammcgee",
    "Password": "NUng``GQE@c]",
    "Email": "bbmcgee@email.com",
    "FavoriteMovies": [],
    "_id": "62c0764a5efee8cbbeadeee3",
    "__v": 0
}
```

## Update user info


| Endpoint | HTTP Method | Request | Response |
| --- | --- | --- | --- |
|  `/users/:Username` | PUT | Body | Body |



#### Request

A JSON object that holds the updated information about the user.

```json
{
    "Username": "patriciamcphee",
    "Password": "jFB6DGX7nhXfpxon"
}
```

#### Response 

A JSON object that holds the updated data for the user.

```json
{
    "_id": "62af73cd90779f9b519bda60",
    "Username": "patriciamcphee",
    "Password": "jFB6DGX7nhXfpxon",
     "Email": "somethingrandom@email.com",
      "FavoriteMovies": [
          "62c319b0b16106ca5a07b823"
      ],
      "__v": 0
}
```

## Unregister user (delete user)


| Endpoint | HTTP Method | Request | Response |
| --- | --- | --- | --- |
|  `/users/:Username` | DELETE  | None | Text |



#### Request

None

#### Response 

A text confirmation message indicating the user has been removed from the movie app. 

```
bambammcgee has been removed from the movie app.
```



## Add a movie to a user's "favorites" list


| Endpoint | HTTP Method | Request | Response |
| --- | --- | --- | --- |
|  `/users/:Username/movies/:MovieID` | PUT  | None | Text |



#### Request

None


#### Response 
A JSON object that holds the updated data for the user.

```json
{
    "_id": "62c346d4b258c5e174f0c93a",
    "Username": "patriciamcphee",
    "Password": "3)MFK+HZh%K-",
    "Email": "somethingrandom@email.com",
    "FavoriteMovies": [
        "62c31dfbb16106ca5a07b826"
    ],
    "__v": 0
}
```

## Remove a movie from the user's "favorites" list

| Endpoint | HTTP Method | Request | Response |
| --- | --- | --- | --- |
|  `/users/:Username/movies/:MovieID` | DELETE  | None | Text |



#### Request

None

#### Response 
A JSON object that holds the updated data for the user.
 

```json
{
    "_id": "62c346d4b258c5e174f0c93a",
    "Username": "patriciamcphee",
    "Password": "3)MFK+HZh%K-",
    "Email": "somethingrandom@email.com",
    "FavoriteMovies": [],
    "__v": 0
}
```
