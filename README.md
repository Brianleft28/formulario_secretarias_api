Rutas

### Secretarias

---

```javascript
router.get("/", index); // GET http://localhost:3000/api/v1/secretarias
router.get("/:id", show); // GET http://localhost:3000/api/v1/secretarias/:id
router.post("/", create); // POST http://localhost:3000/api/v1/secretarias
router.put("/:id", update); // PUT http://localhost:3000/api/v1/secretarias/:id
router.delete("/:id", destroy); // DELETE http://localhost:3000/api/v1/secretarias/:id

// cuerpo del POST - UPDATE
{
    "nombre": "Innovación"
    "correo": "sec.innovacionytecnologia@miituzaingo.gob.ar"
    "telefono" : 339
}
```

### jefaturas

---

```javascript
router.get("/", index); // GET http://localhost:3000/api/v1/jefaturas
router.get("/:id", show); // GET http://localhost:3000/api/v1/jefaturas/:id
router.post("/", create); // POST http://localhost:3000/api/v1/jefaturas
router.put("/:id", update); // PUT http://localhost:3000/api/v1/jefaturas/:id
router.delete("/:id", destroy); // DELETE http://localhost:3000/api/v1/jefaturas/:id

// Cuerpo del POST - UPDATE

{
    "nombre": "Jefatura de prueba",
    "secretaria_id": 109
    "correo": "test.pruebadepostman@miituzaingo.gob.ar",
    "telefono": 339
}

```

### Subsecretarias

```javascript
router.get("/", index); // GET http://localhost:3000/api/v1/subsecretarias
router.get("/:id", show); // GET http://localhost:3000/api/v1/subsecretarias/:id
router.post("/", create); // POST http://localhost:3000/api/v1/subsecretarias
router.put("/:id", update); // PUT http://localhost:3000/api/v1/subsecretarias/:id
router.delete("/:id", destroy); // DELETE http://localhost:3000/api/v1/subsecretarias/:id

// Cuerpo del POST - UPDATE

{
    "nombre": "Subsecretaria de prueba",
    "secretaria_id": 109
    "correo": "test.pruebadepostman@miituzaingo.gob.ar",
    "telefono": 339
}
```

### Direcciones

---

```javascript
router.get("/", index); // GET http://localhost:3000/api/v1/direciones
router.get("/:id", show); // GET http://localhost:3000/api/v1/direciones/:id
router.post("/", create); // POST http://localhost:3000/api/v1/direciones
router.put("/:id", update); // PUT http://localhost:3000/api/v1/direciones/:id
router.delete("/:id", destroy); // DELETE http://localhost:3000/api/v1/direciones/:id

// Cuerpo del POST - UPDATE

{
    "nombre": "Dirección de prueba",
    "secretaria_id": 109
    "correo": "test.pruebadepostman@miituzaingo.gob.ar",
    "telefono": 339
}
```

### Coordinaciones

```javascript
router.get("/", index); // GET http://localhost:3000/api/v1/coordinaciones
router.get("/:id", show); // GET http://localhost:3000/api/v1/coordinaciones/:id
router.post("/", create); // POST http://localhost:3000/api/v1/coordinaciones
router.put("/:id", update); // PUT http://localhost:3000/api/v1/coordinaciones/:id
router.delete("/:id", destroy); // DELETE http://localhost:3000/api/v1/coordinaciones/:id

// Cuerpo del POST - UPDATE

{
    "nombre": "Coordinacion de prueba",
    "secretaria_id": 109
    "correo": "test.pruebadepostman@miituzaingo.gob.ar",
    "telefono": 339
}
```
