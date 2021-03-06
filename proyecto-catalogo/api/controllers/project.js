'use strict'

var Project = require('../models/project');
var fs = require("fs");
var path = require("path");

var controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: 'Soy home'
        })
    },
    test: function(req, res) {
        return res.status(200).send({
            message: 'Soy test'
        })
    },
    saveProject: function(req, res) {
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStore) => {
            if (err) {
                return res.status(500).send({
                    message: "Error al guardar proyecto"
                })
            }

            if (!projectStore) {
                return res.status(404).send({
                    message: "No se ha logrado guardar proyecto"
                })
            }

            return res.status(200).send({
                project: projectStore
            })
        });
    },
    getProject: function(req, res) {
        var projectId = req.params.id;

        if (projectId == null) {
            return res.status(404).send({
                message: "No se ha logrado obtener proyecto"
            })
        }

        Project.findById(projectId, (err, project) => {
            if (err) {
                return res.status(500).send({
                    message: "Error al obtener proyecto"
                })
            }

            if (!project) {
                return res.status(404).send({
                    message: "No se ha logrado obtener proyecto"
                })
            }

            return res.status(200).send({
                project
            });
        });
    },
    getProjects: function(req, res) {
        Project.find({}).sort('year').exec((err, projects) => {
            if (err) {
                return res.status(500).send({
                    message: "Error al obtener proyectos"
                })
            }

            if (!projects) {
                return res.status(404).send({
                    message: "No hay proyectos para mostrar"
                })
            }

            return res.status(200).send({
                projects
            });
        });
    },
    updateProject: function(req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, { new: true }, (err, projectUpdate) => {
            if (err) {
                return res.status(500).send({
                    message: "Error al actualizar proyecto"
                })
            }

            if (!projectUpdate) {
                return res.status(404).send({
                    message: "No existe proyecto a actualizar"
                })
            }

            return res.status(200).send({
                projectUpdate
            });
        });
    },
    deleteProject: function(req, res) {
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
            if (err) {
                return res.status(500).send({
                    message: "Error al eliminar proyecto"
                })
            }

            if (!projectRemoved) {
                return res.status(404).send({
                    message: "No existe proyecto a eliminar"
                })
            }

            return res.status(200).send({
                projectRemoved
            });
        });
    },
    uploadImage: function(req, res) {
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';

        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split("\\");
            var fileName = fileSplit[1];
            var extSplit = fileName.split("\.");
            var extension = extSplit[1];

            if (extension == "png" || extension == "jpg" || extension == "jpeg" || extension == "gif") {
                Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (err, projectUpdated) => {
                    if (err) {
                        return res.status(500).send({
                            message: "Error al cargar archivo"
                        })
                    }

                    if (!projectUpdated) {
                        return res.status(404).send({
                            message: "No existe proyecto a actualizar"
                        })
                    }


                    return res.status(200).send({
                        project: projectUpdated
                    });
                });
            } else {
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({
                        messaage: "Extension no es valida"
                    });
                });
            }
        } else {
            return res.status(200).send({
                messaage: fileName
            });
        }
    },
    getImageFile: function(req, res) {
        var file = req.params.image;
        var pathFile = "./uploads/" + file;

        fs.exists(pathFile, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(pathFile));
            } else {
                return res.status(200).send({
                    message: "No existe imagen"
                })
            }
        });
    }
}

module.exports = controller;