# Product Table and API

## After cloning this repo:

Change to `./productsClass` directory and run `node ./backend/Api.js`. The API is now listening on `localhost:9000`.

## Using the API:

### GET /products

Returns all the products like so:

```
{
    "products": [
        {
            "id": "367aa781b5c44b65b97aa65fe7664f1f",
            "name": "widget",
            "price": 5.99,
            "orders": 35,
            "returns": 1,
            "rating": 4
        },
        {
            "id": "2a554c6975a14bff96db0777debf187c",
            "name": "noodles",
            "price": 1.75,
            "orders": 467,
            "returns": 20,
            "rating": 4.5
        },
        ...
    ]
}
```

### GET /products?sortedBy=

Supports `bestSelling`, `bestRating`, `leastReturned` as values for the `sortedBy` query param. When present, returns a max of 10 products, sorted accordingly.

`/products?sortedBy=bestSelling`

```
{
    "products": [
        {
            "id": "fee25273c8a24254bbf219d354b30a5b",
            "name": "nail polish",
            "price": 9.99,
            "orders": 345,
            "returns": 15,
            "rating": 3.75
        },
        {
            "id": "f5a23c735310474ab5e8a3106a4903e6",
            "name": "12 pk red bull",
            "price": 15.99,
            "orders": 213,
            "returns": 5,
            "rating": 4
        },
        {
            "id": "f59a366c1bc14c7bbcaeaffcc5ba7918",
            "name": "hairbrush",
            "price": 8.5,
            "orders": 111,
            "returns": 9,
            "rating": 3.75
        },
        ...
    ]
}
```

---

`/products?sortedBy=bestRating`

```
{
    "products": [
        {
            "id": "178aac30bcaf42859a901ea3189b29de",
            "name": "aphex twin, selected ambient works",
            "price": 19.99,
            "orders": 79,
            "returns": 0,
            "rating": 5
        },
        {
            "id": "c026452be4924c77b4c4d383f1677008",
            "name": "atlas shrugged, by ayn rand",
            "price": 29.99,
            "orders": 67,
            "returns": 0,
            "rating": 4.75
        },
        {
            "id": "f5a23c735310474ab5e8a3106a4903e6",
            "name": "12 pk red bull",
            "price": 15.99,
            "orders": 213,
            "returns": 5,
            "rating": 4
        },
        ...
    ]
}
```

---

`/products?sortedBy=leastReturned`

```
{
    "products": [
        {
            "id": "178aac30bcaf42859a901ea3189b29de",
            "name": "aphex twin, selected ambient works",
            "price": 19.99,
            "orders": 79,
            "returns": 0,
            "rating": 5
        },
        {
            "id": "367aa781b5c44b65b97aa65fe7664f1f",
            "name": "widget",
            "price": 5.99,
            "orders": 35,
            "returns": 1,
            "rating": 4
        },
        {
            "id": "2a554c6975a14bff96db0777debf187c",
            "name": "noodles",
            "price": 1.75,
            "orders": 78,
            "returns": 3,
            "rating": 4
        }
        ...
    ]
}
```

### PATCH /products

For updating a product. Accepts an object with an `id` and key value pairs for updates, like so:

```

{
  "id": "367aa781b5c44b65b97aa65fe7664f1f",
  "orders": 35,
  "returns": 1,
  "rating": 4
}

```

When successful, returns:

```

{
  "message": "widget has been updated",
  "product": {
    "id": "367aa781b5c44b65b97aa65fe7664f1f",
    "name": "widget",
    "price": 5.99,
    "orders": 35,
    "returns": 1,
    "rating": 4
  }
}

```

### POST /products

For creating a product. Accepts an object with a `name` and `price` key value pairs, like so:

```

{
  "name": "widget",
  "price": 5.99
}

```
