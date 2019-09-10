function digitSquareSum(x)
{

  var number = x.toString();
  //console.log( number.length );

  //var numberArray= [];
  var totalSum = 0;
  var digitSquare = 0;
  for(i=0; i< number.length; i++)
  {
    digitSquare = Number(number[i]) * Number(number[i]);
    totalSum = digitSquare + totalSum;
  }

  //console.log(totalSum);
  return totalSum;

}

//digitSquareSum(89);
//digitSquareSum(145);


function questionOne()
{

  var listOfDigitSquares = "";
  for(j=0; j<=500; j++)
  {
    //console.log(j)
    listOfDigitSquares = listOfDigitSquares+(j + ","+digitSquareSum(j))+"\n";
  }
  //console.log( listOfDigitSquares )
  return listOfDigitSquares;
}

//questionOne();


function digitSquareMultipleTimes(y,l2)
{
  digitSquareSum (y);
  var newValue = y;
  var listOfDigitSquaresXtimes = [ ]
  for(k=0; k<=l2; k++)
  {
    listOfDigitSquaresXtimes.push(newValue);
    //console.log(newValue)
    newValue = digitSquareSum(newValue)

  }
  //console.log(listOfDigitSquaresXtimes);
  return listOfDigitSquaresXtimes

}
//digitSquareMultipleTimes(7);


function ifListHasOneInIt( listOfDigitSquaresXtimes )
{

  for (l=0; l<=listOfDigitSquaresXtimes.length; l++)
  {
    //console.log(listOfDigitSquaresXtimes[1]);

    if(listOfDigitSquaresXtimes[l] ===1)
    {

      //console.log(true)
      return true;
    }
  }
  //console.log(false);
  return false;
}


function questionTwo()
{
  var newList = [];
  var constainsOne = false;
  var listOfIntegersWithOneAsDigitSquareSum = [];
  for (m=1; m<=500; m++)
  {
    newList = digitSquareMultipleTimes(m,50);
    constainsOne= ifListHasOneInIt(newList);
    //console.log(constainsOne);
    if (constainsOne === true)
    {
      listOfIntegersWithOneAsDigitSquareSum.push(m);
    }
  }
  return listOfIntegersWithOneAsDigitSquareSum;
}

//console.log(questionTwo());
//ifListHasOneInIt(digitSquareMultipleTimes(7))

function question3()
{
  var listOfSeven = [];
  var limit = 10000000;
  var listOfNumbersEndTo89 = []
  for (q=1; q<=limit; q++){
    //console.log(q)
    listOfSeven = digitSquareMultipleTimes(q,7);
    //console.log(listOfSeven + " : " +  listOfSeven[7])
    if(listOfSeven[7]===89)
    {
      listOfNumbersEndTo89.push(q);
    }

  }
  console.log(listOfNumbersEndTo89)
  console.log("total number of ints that end with 89 : " +listOfNumbersEndTo89.length );

}
question3();
