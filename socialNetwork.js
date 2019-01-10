var data = {
    f01: {
      name: "Alice",
      age: 15,
      follows: ["f02", "f03", "f04"]
    },
    f02: {
      name: "Bob",
      age: 20,
      follows: ["f05", "f06"]
    },
    f03: {
      name: "Charlie",
      age: 35,
      follows: ["f01", "f04", "f06"]
    },
    f04: {
      name: "Debbie",
      age: 40,
      follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
      name: "Elizabeth",
      age: 45,
      follows: ["f04"]
    },
    f06: {
      name: "Finn",
      age: 25,
      follows: ["f05"]
    },
  };

var followList = function(flag) {
	followers = {}
	for (key in data) {
		
		followers[data[key].name] = {};
		followers[data[key].name].name = data[key].name;
		followers[data[key].name].follows = [];
		followers[data[key].name].isFollowed = [];
		for (var i = 0; i < data[key].follows.length; i++) {
			var id = data[key].follows[i]
			var name = getName(id);
			followers[data[key].name].follows.push(name);
		}
	}

	var keys = Object.keys(data);

	for (i = 0; i < keys.length; i++) {
		var currentId = keys[i];
		var names = [];
		for (key in data) {
			if (data[key].follows.includes(keys[i])) names.push(data[key].name);
		}
		followers[getName(currentId)].isFollowed = names;
	}
	if (!flag) {
		for (key in followers) {
			console.log(followers[key].name);
			console.log('  Follows :\n   ', ...followers[key].follows);
			console.log('  Is followed by:\n   ', ...followers[key].isFollowed)
		}
	} else return followers;
}

var followsMost = function() {
	var whoFollowsMost = [];
	var numberFollowed = 0;
	for (key in data) {
		var follows = data[key].follows.length;
		if (follows > numberFollowed) {
			numberFollowed = follows;
			whoFollowsMost = [];
			whoFollowsMost.push(data[key].name);
		}
		else if(follows === numberFollowed) whoFollowsMost.push(data[key].name);
	}
	console.log('Follows The Most People: ', ...whoFollowsMost);
	console.log('Number of people Followed: ' + numberFollowed);
}

var mostFollowed = function () {
	var list = followList('flag');
	var mostFollowed = [];
	numFollowers = 0;
	for (key in list) {
		var follows = list[key].isFollowed.length;
		if (follows > numFollowers) {
			numFollowers = follows;
			mostFollowed = [];
			mostFollowed.push(list[key].name);
		}
		else if(follows === numFollowers) mostFollowed.push(list[key].name);
	}
	console.log('Most Followed: ', ...mostFollowed);
	console.log('Number of Followers: ', numFollowers);
}

var getName = function(id) {
	return data[id].name;
}


followList();
followsMost();
mostFollowed();

  /*
XX List everyone and for each of them, list the names of who they follow and who follows them
XX Identify who follows the most people
Identify who has the most followers
Identify who has the most followers over 30
Identify who follows the most people over 30
List those who follow someone that doesn't follow them back
List everyone and their reach (sum of # of followers and # of followers of followers)
*/