function stringChop(str, size) {
  // your code here
	let n=str.length;
	if(size>=n)
	{
		let arr=[str];
		return arr;
	}
	let i=0;
	let arr=[];
	while(i<n)
		{
			let lastIdx=i+size;
			if(i==n) {
				break;
			}
			if(lastIdx>n)
			{
				arr.push(str.substring(i,n));
				break;
			}
			arr.push(str.substring(i,lastIdx));
			i=lastIdx;
		}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
