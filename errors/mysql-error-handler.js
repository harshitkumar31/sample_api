/**
 * Util to handle Errors
 * @param  {[type]} res [description]
 * @param  {[type]} err [description]
 * @return {[type]}     [description]
 */
function handle_error(res, err) {
	console.log('err',err)
	var code_and_message = get_code_and_message(err)
	console.log('code_and_message', code_and_message)
	res.status(code_and_message.code).json({error: code_and_message.message})
}

function get_code_and_message(err) {
	if(!err) 
		return
	
	switch(err.code){
		case 'ER_DUP_ENTRY': return {
			code: 400,
			message: 'Duplicate item.'
		}
		case 'ER_BAD_NULL_ERROR': return {
			code: 400,
			message: 'Bad request. Are all the required paramters there?'
		}
		case 'ER_DATA_TOO_LONG': return {
			code: 400,
			message: 'Bad request. Data supplied is too long.'
		}
		case 'ER_NO_REFERENCED_ROW_2': return {
			code: 400,
			message: "Books category doesn't exist"
		}
		case 'NOT_FOUND':
		case 'ER_BAD_FIELD_ERROR':
		default: return {
			code: 500,
			message: 'Hmm, a bug on our side.'
		}
	}
}

module.exports = handle_error