// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of the current state
// and edits state
// all reducers run on an action. which means each reducer should filter

// state default value is []
function posts(state=[], action){
	console.log(state, action);
	return state;
}

export default posts;