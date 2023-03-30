# Serviready APIs

## Table of Contents

1. Introduction
2. queryAll
3. getById
4. createProfile
5. updatePartial
6. updateComplete
7. deleteProfile

### Introduction

The meaning of this repository is to develop the APIs for webpage project focused on the needs of a restaurant's crew and operation management. The main entities involved are the following:

* Employees Profiles (waiters,cooks,etc.)
* Tables status (people seated, location,id,food stage,integrity)
* Inventory management (food,alcohol,edibles,etc.)
* Dishes availabilty (recipe,max availability)

This repository uses Express framework to start the application and dotEnv for environment and deployment purposes. The web sevice is provided by Render.com for deployment testing. Postman is in charge to test directly the APIs, which are the following.

NOTE: a Profile Object refers to any entity main object such a waiter, cook, table, dish, edible, etc.

### queryAll

This API does not require any parameters, its duty is to get all data regarded to Profiles.

### getById

This API requires any id (integer number) to get the date of a single Profile.

### createProfile

This API requires Profile Object as a parameter to add a new profile to the database.

### updatePartial

This API requieres an Id parameter and a JSON code with the KEY-VALUE pair in a string list (["key","value"]) of the desired property to edit from an Profile Object.

### updateComplete

This API requires an Id and a Profile Object as parameters to erease the Id's Profile Object and to add a new profile to the database.

### deleteProfile

This API requires an Id parameter to erease an Profile Object from the database.
