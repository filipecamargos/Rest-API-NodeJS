

//Welcome Get router req= request res= response
exports.serviceMessage = (req, res, next) => {
    //variables
    const date_obj = new Date();
    const date = (date_obj.getMonth() + 1) + "-" + date_obj.getDay() + "-" + date_obj.getFullYear();
    const message = "Welcome to this simple Service ICS Friends";

    //result 200 sucessfull response
    res.status(200).json({
        message:[{
            title: "Service Message",
            message: message,
            date: date
        }]
    })
}

//Hello my little friend logic
exports.getHelloLittleFriendMessage = (req, res, next) => {

    //variables
    const name = req.param('name');
    const last_name = req.param('last_name');

    //Build the name
    const message = "Hello My Little Friend " + name + " " + last_name;

    //201 since the data will be processed
    res.status(201).json({
        firstApi: [{
            title: 'Hello Little Friend',
            message: message
        }]
    });
};

//Post who is my friend
exports.postWhoIsMyFriend = (req, res, next) => {
    //get variable
    const name = req.body.first_name;
    const friendIs = req.body.friend_is;

    //generate message
    const friend = getFriend();
    const message = "My name is " + name + "and my friend today is " + friend + " and he/she is " + friendIs;

    //201 since the data will be processed and a resource was created
    res.status(201).json({
        firstApi: [{
            title: 'My Friend',
            name: name,
            myFriend: friend,
            message: message
        }]
    });
}

//Get a friend generator
function getFriend() {

    const myfriend = ['Ted', 'Tonny', 'Justin', 'Chis', 'Chad', 'Tamera', 'Alan', 'Shawn', 'Kevin'];

    return myfriend[Math.floor(Math.random() * Math.floor(myfriend.length))];
}