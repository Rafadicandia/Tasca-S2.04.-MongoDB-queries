//Escribe una consulta para mostrar todos los documentos en la colección Restaurantes.
db.restaurant.find({})

//Escribe una consulta para mostrar restaurante_id, name, borough y cuisine para todos los documentos en la colección Restaurantes.
db.restaurant.find({},{"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 1})

//Escribe una consulta para mostrar restaurante_id, name, borough y cuisine, pero excluye el campo _id para todos los documentos en la colección Restaurantes.
db.restaurant.find({},{"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0})

//Escribe una consulta para mostrar restaurant_id, name, borough y zip code, pero excluye el campo _id para todos los documentos en la colección Restaurantes.
db.restaurant.find({},{"restaurant_id": 1, "name": 1, "borough": 1, "address.zipcode": 1, "_id": 0})

//Escribe una consulta para mostrar todos los restaurantes que están en el Bronx.
db.restaurant.find({},{"borough": "Bronx"})


//Escribe una consulta para mostrar los primeros 5 restaurantes que están en el Bronx.
db.restaurant.find({"borough": "Bronx"}).limit(5)


//Escribe una consulta para mostrar el próximo 5 restaurantes después de saltar los primeros 5 del Bronx.
db.restaurant.find({"borough": "Bronx"}).skip(5).limit(5)


//Escribe una consulta para encontrar los restaurantes que tienen un resultado además de 90.
db.restaurant.find({"grades.score": { $gt: 90 }})


//Escribe una consulta para encontrar los restaurantes que tienen un resultado además de 80 pero menos que 100.
db.restaurant.find({"grades.score": { $gt: 80, $lt: 100  }})


//Escribe una consulta para encontrar a los restaurantes que se localizan en valor de latitud menos de -95.754168.
db.restaurant.find({"address.coord.0": { $lt: -95.754168}})

//Escribe una consulta de MongoDB para encontrar los restaurantes que no preparan ninguna cuisine de 'American' y su calificación es superior a 70 y longitud inferior a -65.754168.
db.restaurant.find({"cuisine": { $ne: 'American'}, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168} })

//Escribe una consulta para encontrar a los restaurantes que no preparan ninguna cuisine de 'American' y consiguieron un marcador más de 70 y localizado en la longitud menos que -65.754168. Nota : Realiza esta consulta sin utilizar $and operador.
db.restaurant.find({"cuisine": { $ne: 'American'}, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168} })

//Escribe una consulta para encontrar a los restaurantes que no preparan ninguna cuisine de 'American' y obtuvieron un punto de grado 'A' no pertenece a Brooklyn. Se debe mostrar el documento según la cuisine en orden descendente.
db.restaurant.find({"cuisine": { $ne: 'American'}, "grades.grade": 'A', "borough": { $ne: "Brooklyn" }}).sort({"cuisine": -1})

//Escribe una consulta para encontrar el restaurante_id, name, borough y cuisine para aquellos restaurantes que contienen 'Wil' como las tres primeras letras en su nombre.
db.restaurant.find({"name": {$regex: "^Wil"}},{"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0})

//Escribe una consulta para encontrar el restaurante_id, name, borough y cuisine para aquellos restaurantes que contienen 'ces' como las últimas tres letras en su nombre.
db.restaurant.find({"name": {$regex: "ces$"}},{"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0})

//Escribe una consulta para encontrar el restaurante_id, name, borough y cuisine para aquellos restaurantes que contienen 'Reg' como tres letras en algún sitio en su nombre.
db.restaurant.find({"name": {$regex: "Reg"}},{"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0})


//Escribe una consulta para encontrar los restaurantes que pertenecen al Bronx y prepararon cualquier plato americano o chino.
db.restaurant.find({"borough": "Bronx", $or: [{"cuisine": "American"}, {"cuisine": "Chinese"}]}, {})


//Escribe una consulta para encontrar el restaurant_id, nombre, distrito y tipo de cocina de aquellos restaurantes que pertenecen a Staten Island, Queens, Bronx o Brooklyn.
//Escriba una consulta para encontrar el restaurant_id, nombre, distrito y tipo de cocina de aquellos restaurantes que no pertenecen a Staten Island, Queens, Bronx o Brooklyn.
//Escribe una consulta para encontrar restaurante_id, name, borough y cuisine para aquellos restaurantes que consigan un marcador que no es más de 10.
//Escribe una consulta para encontrar el restaurante_id, name, borough y cuisine para aquellos restaurantes que preparan pescado excepto 'American' y 'Chinees' o el name del restaurante comienza con letras 'Wil'.
//Escribe una consulta para encontrar el restaurant_id, name, y gradas para aquellos restaurantes que consigan un grado "A" y un score 11 en datos de estudio ISODate "2014-08-11T00:00:00Z".
//Escribe una consulta para encontrar el restaurante_id, name y gradas para aquellos restaurantes donde el 2º elemento de variedad de grados contiene un grado de "A" y marcador 9 sobre un ISODate "2014-08-11T00:00:00Z".
//Escribe una consulta para encontrar el restaurante_id, name, dirección y ubicación geográfica para aquellos restaurantes en los que el segundo elemento del array coord contiene un valor que es más de 42 y hasta 52.
//Escribe una consulta para organizar el nombre de los restaurantes en orden ascendente junto a todas las columnas.
//Escribe una consulta para organizar el nombre de los restaurantes en orden descendente junto a todas las columnas.
//Escribe una consulta para organizar el nombre de la cuisine en orden ascendente y por el mismo barrio de cuisine. Orden descendente.
//Escribe una consulta para saber todas las direcciones que no contienen la calle.
//Escribe una consulta que seleccionará todos los documentos en la colección de restaurantes cuyo valor del campo coord es Double.
//Escribe una consulta que seleccionará el restaurante_id, name y grade para aquellos restaurantes que devuelvan 0 como resto después de dividir el marcador por 7.
//Escribe una consulta para encontrar el name de restaurante, borough, longitud y altitud y cuisine para aquellos restaurantes que contienen 'mon' como tres letras en algún sitio de su nombre.
//Escribe una consulta para encontrar el name de restaurante, borough, longitud y latitud y cuisine para aquellos restaurantes que contienen 'Mad' como primeras tres letras de su nombre.