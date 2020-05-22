const db = require("../models")

module.exports = function(app){

    app.get("/api/workouts/", (req, res) => {
        db.Workout.find()
        .then(doc => res.json(doc))
        .catch(err => res.json(err));
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find()
        .then(doc => res.send(doc))
        .catch(err => res.json(err));
    });

    app.post("/api/workouts/", (req, res) => {
        const workout = {exercises: []}
        db.Workout.create(workout)
        .then(doc => res.json(doc))
        .catch(err => res.json(err));
    });

    app.put("/api/workouts/:id", ({params, body}, res) => {
        db.Workout.updateOne({_id: params.id}, {$push: { exercises: body }},  { new: true, runValidators: true })
        .then(doc => res.json(doc))
        .catch(err =>res.json(err));
    });
}