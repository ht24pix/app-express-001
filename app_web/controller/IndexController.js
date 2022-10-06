const index = (req,res) => {
	res.render('front_view/index', { title: 'Express', description : 'This is home page Controller' },);
}

const aboutPage = (req, res) => {
	res.render('front_view/about', {title: 'About Page', description : 'This is Second page in Index Controller'});
}

module.exports = { index, aboutPage };