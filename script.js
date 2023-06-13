function threeSum(arr, target) {
// write your code here
	let maxi=0;
	for(let i=0;i<arr.length;i++){
		let sum=0;
		for(let j=i;j<arr.length;j++){
			sum+=arr[j];
		}
		maxi=Math.max(sum,maxi);
	}
  return maxi;
}

module.exports = threeSum;
