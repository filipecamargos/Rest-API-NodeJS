exports.getPost = (req, res, next) => {
    res.status(200).json({
        firstApi: [{
            title: 'Fist API',
            content: 'This is the Fist API',
        }]
    });
};