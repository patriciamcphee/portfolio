"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[6173],{19133:e=>{e.exports=JSON.parse('{"url":"api/v2.yaml","themeId":"theme-redoc-apiv1","isSpecFile":true,"spec":{"openapi":"3.0.1","info":{"title":"bFlix Movie API","version":"1.1.0","description":"- **Project**: CareerFoundry assignment; write an API for a movie app\\n- **Description**: Written for the b-movie app I\'ve been developing.\\n- **Date**: July 8, 2022\\n# Introduction\\nThis API lets users access information about different b-movies, such as directors, actors, genre, and year of release. It also allows them to sign up to create a list of their favorite b-movies. They can also remove movies from their favorites and even unregister from the movie app if they\'d like.\\n"},"servers":[{"url":"https://my-bmovie-app.herokuapp.com"}],"components":{"securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer"}}},"security":[{"bearerAuth":[]}],"tags":[{"name":"Users"},{"name":"Movies"}],"paths":{"/users":{"get":{"tags":["Users"],"summary":"Get ALL users","security":[{"bearerAuth":[]}],"responses":{"200":{"description":"Successful response","content":{"application/json":{}}}}},"post":{"tags":["Users"],"summary":"User registration","requestBody":{"content":{"application/json":{"schema":{"type":"object","example":{"Username":"blockhead","Password":"genieinabottl3","Email":"happycamper@email.com","Birthday":"1984-03-11"}}}}},"security":[{"bearerAuth":[]}],"responses":{"undefined":{"content":{"text/plain":{"schema":{"type":"string"},"example":null}}}}}},"/users/whatifi":{"delete":{"tags":["Users"],"summary":"Unregister user","security":[{"bearerAuth":[]}],"responses":{"200":{"description":"Successful response","content":{"application/json":{}}}}}},"/users/standinginwater/":{"put":{"tags":["Users"],"summary":"Update user info","requestBody":{"content":{"application/json":{"schema":{"type":"object","example":{"Email":"standinginwater@ecomdomain.com"}}}}},"security":[{"bearerAuth":[]}],"responses":{"200":{"description":"Successful response","content":{"application/json":{}}}}}},"/login":{"post":{"tags":["Users"],"summary":"Login user","requestBody":{"content":{"application/json":{"schema":{"type":"object","example":""}}}},"security":[{"bearerAuth":[]}],"parameters":[{"name":"Username","in":"query","schema":{"type":"string"},"example":"blockhead"},{"name":"Password","in":"query","schema":{"type":"string"},"example":"genieinabottl3"}],"responses":{"200":{"description":"Successful response","content":{"application/json":{}}}}}},"/users/landstander/":{"get":{"tags":["Users"],"summary":"GET single user by username","security":[{"bearerAuth":[]}],"responses":{"200":{"description":"Successful response","content":{"application/json":{}}}}}},"/movies":{"get":{"tags":["Movies"],"summary":"Get ALL movies","security":[{"bearerAuth":[]}],"responses":{"200":{"description":"Successful response","content":{"application/json":{}}}}}},"/movies/Miami Connection":{"get":{"tags":["Movies"],"summary":"Get single movie by title","security":[{"bearerAuth":[]}],"responses":{"200":{"description":"Successful response","content":{"application/json":{}}}}}},"/movies/genre/Drama":{"get":{"tags":["Movies"],"summary":"Get genre by name","security":[{"bearerAuth":[]}],"responses":{"200":{"description":"Successful response","content":{"application/json":{}}}}}},"/movies/director/Glenn Berggoetz":{"get":{"tags":["Movies"],"summary":"Get director info by name","security":[{"bearerAuth":[]}],"responses":{"200":{"description":"Successful response","content":{"application/json":{}}}}}},"/users/patriciamcphee/movies/62c354c2f3a3dc1a7e6952d1":{"put":{"tags":["Movies"],"summary":"Add movie to favorite list","requestBody":{"content":{"application/json":{"schema":{"type":"object","example":""}}}},"security":[{"bearerAuth":[]}],"responses":{"200":{"description":"Successful response","content":{"application/json":{}}}}}},"/users/patriciamcphee/movies/62c31f3ab16106ca5a07b82d":{"delete":{"tags":["Movies"],"summary":"Remove movie from favorite list","security":[{"bearerAuth":[]}],"responses":{"200":{"description":"Successful response","content":{"application/json":{}}}}}}}}}')}}]);