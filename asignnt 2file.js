for (i=1; i<=100; i++){
  a = i / 15
  b = i / 3
  c = i / 5
  
  if (Number.isInteger(a)){
    console.log("FizzBuzz")
  }
  
  else if (Number.isInteger(b)){
    console.log("Fizz")
  }
 
  else if (Number.isInteger(c)){
    console.log("Buzz")
  }
  
  else
{
    console.log(i)
  }
  
}




s = "Mom and dad knows Malayalam "

s1 = "", s2 = ""
for (t of s) {
    if (t != " ") {
        s2 = s2 + t
        s1 = t + s1
    }
    
    else {
       
        if (s1.toLowerCase() == s2.toLowerCase()) console.log(s2)
        s1 = ""
     
        s2 = ""
    
   }
}
