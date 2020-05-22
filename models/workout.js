const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type:{
            type: String,
            trim: true,
            required: true
        },
        name:{
            type: String,
            trim: true,
            required: true
        },
        weight:Number,
        sets: Number,
        reps: Number,
        distance: Number,
        duration: Number,
    }],
},
{
    toJSON: {
      virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;