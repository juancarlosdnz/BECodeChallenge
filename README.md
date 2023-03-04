![logo_marvel](https://cdn.ceoworld.biz/wp-content/uploads/2018/03/Marvel-logo.jpg)

# MARVEL API Backend Code Challenge

## Introduction

This is a simple microservice that focus on populating a Database using the Marvel API to then consume said DB to display information when given certain parameters.

## Installation

1.Clone the repository:
```
git clone https://github.com/juancarlosdnz/BECodeChallenge
```
2.Create a .env file in the root directory of the project and add the following:
```
PORT=5005
TS=Your timestamp goes here. (It must coincide with the hash and publick key)
PUBLIC_KEY=(your publick key goes here)
HASH=(your composed hash goes here)
```
You can generate your own Hash by using a MD5 hash generator and putting your TS (i.e=1) + Your Private key + Your Public key

3.Start the project with Docker Compose:

```

docker-compose build
docker-compose up
```

The server will start on port 5005.

3.1 Alternatively, run it in localhost by using

```
npm install
npm run dev
```
Since now we are running it locally, remember to modify your connection string located under db/index.js and changing {mongo} to your local IP or the namespace {localhost} depending on the version of Mongo you are running, as shown below:

```
const MONGO_URI = "mongodb://127.0.0.1:27017/BECodeChallenge"

or

const MONGO_URI = "mongodb://localhost:27017/BECodeChallenge";
```
## Testing

Using jest and supertest, I created 3 case scenarios to validate:

 *Providing an id retrieves the correct Character
 *Providing a name retrieves the correct Character
 *Providing a wrong name/not in the database returns a 404 with a message saying that it was not found.

To run this tests just run the command below

```
npm test
```


| METHOD        | URL                                 | DESCRIPTION                                                     |
| ------------- | ------------------------------------| --------------------------------------------------|
| GET           | /                                   | `Basic handlebar to show an input used for Character fetching`   |
| GET           | /character                          | `This method is both used to fetch by Id or Name, since it identifies the type (number or string) and then search by internalId or name`   |
