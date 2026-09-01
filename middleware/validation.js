
export const validatesStudent = (options) => {
  return (req, res, next) => {
  const { id, name, age } = req.body;

  // ============================ 
  // POST validation 
  // ============================

  if(options.requireAll){

    // Checks if all required filed exist
    if (
      id === undefined ||
      name === undefined ||
      age === undefined 
    ) {
      return res.status(400).json({
        message: 'id, name and age are required'
      });
    }

    
    // Checks type of data that was given
    if (
      typeof id !== 'number' ||
      typeof name !== 'string' ||
      typeof age !== 'number'
    ) {
      return res.status(400).json({
        message: 'Invalid student data'
      })
    }

    // Checks value
    if (
      id <= 0 ||
      name.trim().length === 0 ||
      age <= 0
    ) {
      return res.status(400).json({
        message: 'Invalid student data'
      })
    }

  }

  // ===============================
  // PATCH validation
  // ===============================
  else {

    // only validates fields that were actually provided
    if (
      id !== undefined ||
      (name !== undefined && typeof name !== 'string') ||
      (age !== undefined && typeof age !== 'number')
    ) {
      return res.status(400).json({
        message: 'Invalid student data'
      })
    }

    // Checks the value
    if (
      (name !== undefined && name.trim().length === 0) ||
      (age !== undefined && age <= 0)
    ) {
      return res.status(400).json({
        message: 'Invalid student data'
      })
    }

  }

  next();
}};