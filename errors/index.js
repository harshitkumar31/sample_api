/**
 * Util to handle Errors
 * @param  {[type]} res [description]
 * @param  {[type]} err [description]
 * @return {[type]}     [description]
 */
function handleError(res, err){
	console.log('err',err);
	var err_type = typeOfError(err);
	console.log('err_type',err_type);
	res.status(err_type.code).json({error: err_type.message});
}

function typeOfError(err){
	if(err && err.code){
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
		case 'ER_BAD_FIELD_ERROR': return {
			code: 400,
			message: 'Field specified in the query doesn\'t exist in table'
		};
		case 'ER_NO_REFERENCED_ROW_2': return {
			code: 400,
			message: 'Trying to add a book to a category which doesn\'t exist'
		}
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

	return{
			code: 500,
			message: 'Oops! Something went wrong!'
		};
}

module.exports = handleError;