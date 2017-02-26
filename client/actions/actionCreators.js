// actions are regular js events that get fired
// redux actions are objects with a type and value(?)
// increment
export function increment(index){
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}
// add comment
export function addComment(postId, author, comment){
	return{
		type: 'ADD_COMMENT',
		postId,
		comment,
		author
	}
}
// remove comment
export function removeComment(postId, i){
	return{
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}