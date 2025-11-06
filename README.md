# Tasca-S2.04.-MongoDB-queries

## 📄 Description - Exercise Statement

This practical exercise focuses on applying various MongoDB query features, including basic selection (`find`), projection, simple and complex filtering (`$gt`, `$lt`, `$ne`), implicit `$and` operations, and cursor methods (`limit`, `skip`, `sort`).

The database used is the standard `restaurants` dataset, a common tool for learning MongoDB's powerful querying capabilities.

## Task List 

1.  Write a query to display all documents in the **Restaurants** collection.
2.  Write a query to display the `restaurant_id`, `name`, `borough`, and `cuisine` for all documents in the **Restaurants** collection.
3.  Write a query to display the `restaurant_id`, `name`, `borough`, and `cuisine`, but **exclude** the `_id` field for all documents in the **Restaurants** collection.
4.  Write a query to display `restaurant_id`, `name`, `borough`, and **zip code** (assuming `address.zipcode`), but exclude the `_id` field for all documents in the **Restaurants** collection.
5.  Write a query to display all restaurants that are located in the **Bronx**.
6.  Write a query to display the **first 5** restaurants that are located in the Bronx.
7.  Write a query to display the **next 5** restaurants after skipping the first 5 from the Bronx.
8.  Write a query to find restaurants that have a score **greater than 90**.
9.  Write a query to find restaurants that have a score **greater than 80 but less than 100**.
10. Write a query to find restaurants that are located at a latitude value **less than -95.754168**. (Assuming latitude is the second coordinate in the `address.coord` array).
11. Write a MongoDB query to find restaurants that do **not** prepare any cuisine of **'American'** AND their score is **greater than 70** AND their longitude is **less than -65.754168**.
12. Write a query to find restaurants that do **not** prepare any cuisine of **'American'** AND achieved a score **greater than 70** AND are located at a longitude **less than -65.754168**. *Note: Perform this query **without** using the `$and` operator.*
13. Write a query to find restaurants that do **not** prepare any cuisine of **'American'** AND achieved an 'A' grade AND **do not belong to Brooklyn**. The documents must be displayed according to the cuisine in **descending order**.
14. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants whose name starts with **'Wil'** as the first three letters.
15. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants whose name ends with **'ces'** as the last three letters.
16. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants whose name contains **'Reg'** as three letters somewhere in the name.
17. Write a query to find restaurants that belong to the **Bronx** AND prepare any **'American'** OR **'Chinese'** dish.
18. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants that belong to **Staten Island** OR **Queens** OR **Bronx** OR **Brooklyn**.
19. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants that **do not** belong to **Staten Island** OR **Queens** OR **Bronx** OR **Brooklyn**.
20. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants whose score is **not more than 10**.
21. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants that prepare **'Seafood'** cuisine EXCEPT **'American'** and **'Chinese'** OR the restaurant name begins with the letters **'Wil'**.
22. Write a query to find the `restaurant_id`, `name`, and `grades` for those restaurants that achieved an "A" grade AND a score of **11** on the ISODate **"2014-08-11T00:00:00Z"**.
23. Write a query to find the `restaurant_id`, `name`, and `grades` for those restaurants where the **2nd element** of the `grades` array contains a grade of **"A"** AND a score of **9** on the ISODate **"2014-08-11T00:00:00Z"**.
24. Write a query to find the `restaurant_id`, `name`, `address`, and geographical location for those restaurants where the **second element** of the `coord` array contains a value that is **greater than 42 and up to 52**.
25. Write a query to sort the restaurant names in **ascending order** along with all columns.
26. Write a query to sort the restaurant names in **descending order** along with all columns.
27. Write a query to sort the cuisine name in **ascending order** AND the `borough` for the same cuisine in **descending order**.
28. Write a query to find all addresses that **do not contain the street** field.
29. Write a query that will select all documents in the restaurants collection where the value of the `coord` field is of BSON type **Double**.
30. Write a query that will select the `restaurant_id`, `name`, and `grade` for those restaurants that return **0 as a remainder** after dividing the score by **7**.
31. Write a query to find the restaurant `name`, `borough`, longitude and latitude, and `cuisine` for those restaurants that contain **'mon'** as three letters somewhere in their name.
32. Write a query to find the restaurant `name`, `borough`, longitude and latitude, and `cuisine` for those restaurants whose name starts with **'Mad'** as the first three letters.
---

## 💻 Used Technologies

| Technology | Version | Description |
| :--- | :--- | :--- |
| **MongoDB** | Latest Official Image | The NoSQL database server used to execute the queries. |
| **Docker** | Latest | Containerization platform for setting up the MongoDB environment. |
| **MongoDB Compass** | Latest | Graphical client used for connection and query execution (optional). |

---

## 📋 Requirements

- Operating System: Windows/macOS/Linux.
- **Docker Desktop:** Installed and running (essential for the database server setup).
- **Terminal/Shell:** To execute Docker commands and the Mongo CLI.

---

## 🛠️ Installation

This section details how to set up and run the MongoDB server that was used to perform the queries.

1.  **Pull/Verify the MongoDB Image:**

    ```bash
    docker pull mongo
    ```

2.  **Create the Persistent Volume:**
    (This ensures that database data is not lost when the container is stopped or removed).

    ```bash
    docker volume create mongodata
    ```

3.  **Start the MongoDB Container (Mapping Port and Volume):**
    This command starts the server in detached mode (`-d`), assigns a name (`my-mongo-db`), maps port `27017`, and connects the `mongodata` volume to Mongo's internal data folder (`/data/db`).

    ```bash 
    docker run -d --name mi-mongo-db -p 27017:27017 -v mongodata:/data/db mongo
    ```

4.  **Verification:**
    Confirm that the container is running:

    ```bash
    docker ps
    ```
    The output should show the `mi-mongo-db` container with an `Up` status.

---

## ▶️ Execution

Once the MongoDB container is running, you can execute the queries in two ways:

### 0. Data Loading (Initial Setup)

Before running queries, the `restaurants.json` file must be loaded into the MongoDB container.

1.  **Ensure the JSON file is accessible** on your host machine (e.g., placed in a `/database-assets` folder within your project).

2.  **Run the import command:** Use `docker exec` to run the `mongoimport` tool inside the container, loading the data into the `Restaurant_db` database and the `restaurants` collection.

    *Replace `/path/to/restaurants.json` with the actual path on your computer.*

    ```bash
    docker exec -i mi-mongo-db mongoimport --db Restaurant_db --collection restaurants --file /path/to/restaurants.json --jsonArray
    ```

    *(Note: The `--jsonArray` flag is often necessary for the common MongoDB dataset format.)*

### 1. Connection using MongoDB Compass
Use the following parameters to connect your Compass client:

| Parameter | Value |
| :--- | :--- |
| **Connection URI** | `mongodb://localhost:27017/` |
| **Database** | restaurants.json |

### 2. Connection via Docker Shell
To execute queries directly in the terminal:

1.  **Access the MongoDB Shell:**

    ```bash
    docker exec -it mi-mongo-db mongosh
    ```

2.  **Select the Database:**

    ```javascript
    use Restaurant_db;
    ```

3.  **Execute Queries:**
    From here, you can write and test each of the `db.Restaurants.find(...)` queries.

---

## 🤝 Contributions

Contributions are welcome. Please report any bugs by opening an issue or suggest improvements via a clear and concise Pull Request.