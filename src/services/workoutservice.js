const workout = require('../database/Workout')
const {v4: uuid} = require('uuid')

const getAllWorkout=()=>{
   try{ const allWorkout = workout.getAllWorkout()
    return allWorkout}catch(error){
        throw error
     }
}
const getOneWorkout=()=>{
    
    return
}
const createNewWorkout=(newWorkout)=>{
      const workoutToInsert ={...newWorkout, id :uuid(),
     createdAt: new Date().toLocaleString('en-us', {timeZone:'UTC'}),
     updatedAt: new Date().toLocaleString('en-us', {timeZone:'UTC'})
    
    }
    try{
    const createWorkout = workout.createNewWorkout(workoutToInsert)

    return createWorkout
     }catch(error){
        throw error
     }
    
}
const updateOneWorkout=(workoutId,changes)=>{
    try{const updatedWorkout = workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout }catch(error){
        throw error
     }
}
const deleteOneWorkout=(workoutId)=>{
    try{
    workout.deleteOneWorkout(workoutId)
    }catch(error){
        throw error
     }
}
module.exports ={getAllWorkout,getOneWorkout,createNewWorkout,updateOneWorkout,deleteOneWorkout

}