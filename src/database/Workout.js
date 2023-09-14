const DB = require('./db.json');
const { saveToDatabase } = require('./utils');


const getAllWorkout = () => {
  try {
    return DB.workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};


const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Workout with the name '${newWorkout.name}' already exists`,
    };
    
  }

  try{
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
    }catch(error){
      throw { status: 500, message: error?.message || error };

    }

};

const updateOneWorkout = (workoutId, changes) => {
  try{
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    throw {
      status: 400,
      message: `Workout with the name '${newWorkout.name}' already exists`,
    };
  }}catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }

  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    changes,
    updateAt: new Date().toLocaleString('en-us', { timeZone: 'UTC' }),
  };
  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteOneWorkout=(workouId)=>{
   const indexForDelete =DB.workouts.findIndex((workout)=>workout.id===workoutId)
   if(indexForDelete===-1){
    return
   }
   DB.workouts.splice(indexForDelete,1);
   saveToDatabase(DB);
}

module.exports = { getAllWorkout, createNewWorkout, updateOneWorkout,deleteOneWorkout };
