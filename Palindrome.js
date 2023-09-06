const highestValuePalindrome = () => {

    // Initial variables.
    let n = document.getElementById("n").value; //Gets the size of characters that string n should contain from index.html file.
    let intN;
    let k = document.getElementById("k").value; //Gets the number of changes allowed from index.html file.
    let intk;
    let s = document.getElementById("s").value; //Gets the string of numbers from index.html file. 


    // Show in console the data obtained by the user in html.
    console.log(n, k);
    console.log(s);

    const lengS = s.length; //Define the s length.


    /**
     * Code that allow define n and k variables like integer type.
     * And define the range.
     */
    if (!isNaN(n) && n.match(/^[0-9]+$/) && n > 0 && n <= Math.pow(10, 5)) {
        try {
            //Convert n value to integer.
            intN = parseInt(n); 
        } catch (error) {
        console.log(error);
        }
    } else {
        alert("Please enter a integer number for the first filed.");
        console.log("Please enter a integer number in n");
    }

    if (!isNaN(k) && k.match(/^[0-9]+$/) && k >= 0 && k <= Math.pow(10, 5)) {
        try {
            //Convert k value to integer.
            intk = parseInt(k);
        } catch (error) {
        console.log(error);
        }
    } else {
        alert("Please enter a integer number for the second filed.");
        console.log("Please enter a integer number in k");
    }
    
    //console.log(lengS);

    // Process the data.
    let highestValue = 0;
    let counter = 0;
    
    for (let i = 0; i < lengS && typeof intN !== 'undefined' && intN === lengS; i++) {

        const currentVal = parseInt(s[i]);
        const maxValueP = Math.max(currentVal, 9);

        if (counter < intk) {

            const newS = s.substring(0, i) + maxValueP.toString() + s.substring(i + 1);

            const isPalindrome = isPalindromeCheck(newS);
            
            if (isPalindrome && parseInt(newS) > parseInt(highestValue) ) {
                //console.log('Es palindrome');
                highestValue = newS;
                console.log(highestValue)
            }
        }

        if (counter === intk) {
            counter = 0;
        }
    }

}


// Function that allow check if the s value is palindrome. 
const isPalindromeCheck = (str) => {
    lengS =  str.length;
    for (var i = 0; i < lengS / 2; i++) {
        if (str[i] !== str[lengS - 1 - i]) {
            return false;
        }
    } return true;
}
