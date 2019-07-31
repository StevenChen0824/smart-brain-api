const handleProfileGet = (req, res, db) => {
	const { id } = req.params;
	let found = false;	
	database.users.forEach( user => {
		if (user.id === id) {
			found = true;
			return res.json(user);
		}
	})
	if(!found) {
		res.send('user not found')
	}
}

module.exports = {
	handleProfileGet
}