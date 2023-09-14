const workoutService =require('../services/workoutservice')


const getAllWorkout=(req,res)=>{
    try{const allWorkouts =workoutService.getAllWorkout()
    
    res.send({status:'ok', data:allWorkouts})}
    catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
}


const getOneWorkout=(req,res)=>{
    const {params:{workoutId}} = req;
    if(!workoutId){
        return
    }
   try{

       const workout =workoutService.getOneWorkout(workoutId)
       res.status(200).send({staus:'ok',data:workout})
   }catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}
const createNewWorkout=(req,res)=>{
    const {body} =req
    if(!body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips){
            res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      });
            return}

        const newWorkout ={name: body.name,
            mode: body.mode,
            equipment: body.equipment,
            exercises: body.exercises,
            trainerTips: body.trainerTips,}
            try{

                const createNewWorkout =workoutService.createNewWorkout(newWorkout)
                res.staus(201).send({status:'ok', data:newWorkout})
            }catch(error){
                res.status(400).send({status:'fail', data:{error:error?.message || error}})
            }
}
const updateOneWorkout=(req,res)=>{
    const {body,params:{workoutId}} = req;
    if(!workoutId){
        return
    }
    try{const updateWorkout =workoutService.updateOneWorkout(workoutId,body)
    res.send({staus:'ok',data:updateWorkout})
    }catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
}
const deleteOneWorkout=(req,res)=>{
    const {params:{workoutId}} = req;
    if(!workoutId){
        return
    }
   try{ const deleteOneWorkout =workoutService.deleteOneWorkout(workoutId)
    res.status(204).send({status:'ok'})
   }catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}

module.exports ={getAllWorkout,getOneWorkout,createNewWorkout,updateOneWorkout,deleteOneWorkout

}