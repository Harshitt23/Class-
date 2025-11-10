/* Untill now we have been stroing data in memory. which is bad.
(1) - Data can't be dynamic, if u updqte in memory objects, the update are lost ifthe process restarts
(2) - There are multiple servers in the real-world. */

/* there are various types of DB-
Graph, Vector, No SQL, Sql DB's   */

//---------------------------------------------------------------------------------------------------------------

/*  MongoDB — Quick Notes
1️⃣ Definition:
MongoDB is a NoSQL database that stores data in JSON-like documents instead of tables.

2️⃣ Key Features:
Data is stored as collections of documents (like arrays of JSON objects).
Schema-less: You can store flexible data structures (no fixed columns).
Scalable & fast: Designed for high-performance apps and large data.

3️⃣ Usage in Node.js:
Used with the Mongoose library for easy CRUD operations (create, read, update, delete).
Commonly used for Express + MongoDB backend stacks (like MERN).
*/