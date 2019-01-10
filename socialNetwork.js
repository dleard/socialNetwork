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

	var followList = function() {
		followers = {}
		
		for (key in data) {
			followers[data[key].name] = {};
			followers[data[key].name].follows = [];
			for (var i = 0; i < data[key].follows.length; i++) {
				var id = data[key].follows[i]
				var name = getName(id);
				followers[data[key].name].follows.push(name);
			}
		}
		console.log(followers);
	}

	var getName = function(id) {
		return data[id].name;
	}


followList();

  /*
List everyone and for each of them, list the names of who they follow and who follows them
Identify who follows the most people
Identify who has the most followers
Identify who has the most followers over 30
Identify who follows the most people over 30
List those who follow someone that doesn't follow them back
List everyone and their reach (sum of # of followers and # of followers of followers)
*/