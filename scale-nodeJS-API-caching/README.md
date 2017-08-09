# Managing NodeJS Caching with CloudBoost

CloudBoost has a Database Service, Queues, Cache and more built into one simple API

Caching  helps you to access data much faster when compared to the database. On the downside, querying is limited and it is very expensive 
because all the data is on the memory  instead of being on a disk. It is recommended that you use cache only for frequently accessed data.


1. Installation instructions:

 npm install cloudboost


2. Create a new App from here:

https://www.cloudboost.io


3. Create package.json file


4. Time to Cache

Cache is basically a key-value pair in memory. Every value has a key associated with it, and the key is used to retrieve or delete an item. 

Data resides in memory and this is why it is really fast when compared to a traditional disk based database. CloudBoost Cache is distributed which means you can scale it to store any amount of data you want.


i. Create a route to add item to the cache

When an item is added to the cache, it stays in the cache until you delete it. It is important that you don’t rely on cache as your primary data store and use it to compliment your existing infrastructure because sometimes machine goes down and when it does all the data in the cache is deleted.

You can use a primary database like MySQL or MongoDB to repopulate the cache.

As an example, If you request with key as "YourKey" and item with "YourItem" then the response will be:

```

{
  status: 200,
  body: {
            key : 'YourKey', 
            item : 'YourItem'
        }
}

,,,

ii. Route to retrieving an item from the cache.

GET /item/:key -> Gets an item from the cache.


If I request the item with key as "YourKey" then the response will be:


```

{
  status: 200,
  body: {
            key : 'YourKey', 
            item : 'YourItem'
        }
}


```

iii. Deleting an item from the cache:

To delete an item from the cache, You need to write the DELETE route. You need call the deleteItem function of the CloudCache instance with the key and value.

DELETE /item/:key -> Delete an item from the cache.

The response is:


```

{
  status: 200,
  body: {
            key : 'YourKey', 
            item : 'YourItem'
        }
}

```



