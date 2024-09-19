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

### Dependencias

---

```javascript
router.get("/", index); // get http://localhost:3000/api/v1/dependencias
router.get("/:id", show); // get http://localhost:3000/api/v1/dependencias/:id
router.post("/", create); // post http://localhost:3000/api/v1/dependencias
router.put("/:id", update); // put http://localhost:3000/api/v1/dependencias/:id
router.delete("/:id", destroy); // delete http://localhost:3000/api/v1/dependencias/:id
```

---
