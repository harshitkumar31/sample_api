/**
 * Util to handle Errors
 * @param  {[type]} res [description]
 * @param  {[type]} err [description]
 * @return {[type]}     [description]
 */
function handleError(res, err){
	var err_type = typeOfError(err);
	console.log('err_type',err_type);
	res.status(err_type.code).json({error: err_type.message});
}

function typeOfError(err){

	switch(err.code){
		case 'ER_DUP_ENTRY': return {
			code: 400,
			message: 'DUPLICATE ENTRY'
		};
		case 'ER_BAD_NULL_ERROR': return{
			code: 400,
			message: 'ERROR in REQUEST.Make sure you are sending the required parameters'
		};
		case 'ER_DATA_TOO_LONG': return {
			code: 400,
			message: 'Data supplied is too long'
		};
		case 'NOT_FOUND': return {
			code: 404,
			message: 'NOT FOUND'
		};
		default: return{
			code: 500,
			message: 'Oops! Something went wrong!'
		};
	}

	
}

module.exports = handleError;