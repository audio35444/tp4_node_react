# TP Node - React

Proyecto desarrollador con las tenologías Nodejs(backend) y Reactjs(frontend).
Con Nodejs se consume la parte publica de la API de mercadolibre para obtener: States, Cities y Neighborhoods.
Y con Reactjs se consume la API, hecha en Nodejs, para obtener los datos de estas entidades de una forma indirecta.

## Como Correr la aplicación ?

Se descarga el proyecto:

```bash
git clone repo

```

Terminal ServerAPINodejs

```bash
cd backend-node
npm i
npm start
```
De esta forma el servidor API se queda escuchando en http://localhost:8082


Terminal ServerWebReactjs


```bash
cd frontend-node
npm i
npm start
```
De esta forma el servidor Web se queda escuchando en http://localhost:8080

## Endpoints importantes

- curl -X GET http://localhost:8082/states devuelve los datos de los estados
- curl -X GET http://localhost:8082/states/:id devuelve los datos de un estado puntual
- curl -X GET http://localhost:8082/states/:id/cities devuelve las ciudades de un estado
- curl -X GET http://localhost:8082/cities/:id devuelve los datos de una ciudad
- curl -X GET http://localhost:8082/cities/:id/neighborhoods devuelve los barrios de una ciudad
- curl -X GET http://localhost:8082/neighborhoods/:id devuelve los datos de un barrio


### Detalles

- El sevidor Nodejs se encuentra escuchando, a la espera de peticiones cruzadas del dominio localhost:8080,
si el servidor web react se ejecuta en otro puerto, se debe modificar esta config

- Para los request a la API de Meli se utilizó el paquete npm => request
