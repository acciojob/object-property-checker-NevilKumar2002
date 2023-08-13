const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	for(let i in hasKey)
		{
			if(hasKey[key]== sampleObject.key)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
}
hasKey(key);
// Do not change the code below
// const key = prompt("Enter Key.");
// alert(hasKey(key));
