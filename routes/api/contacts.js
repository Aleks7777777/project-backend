const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../utils")

const { isValidId } = require("../../middlewares")

const schemas = require("../../modeis/contact")

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.delete("/:id", isValidId, ctrl.deleteById);



module.exports = router;


