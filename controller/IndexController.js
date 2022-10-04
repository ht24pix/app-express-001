const index = (req,res) => {
	res.render('index', { title: 'Express', description : 'This is home page Controller' },);
}

module.exports = { index };