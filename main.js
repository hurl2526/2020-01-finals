const makeRunOn = function(str){
  let newStr = ''
  for (let i = 0; i < str.length; i++){
    if(str[i] === '.' && i !== str.length-1){
      newStr = newStr + ','
    }else {
      newStr = newStr + str[i]
    }
  }
  return newStr
}

const stringOut = function(str){
  let newStr = ''
  for (let i = 0; i < str.length; i++){
    if(str[i] !== ' ' && str[i+1]!== ' '){
      newStr = newStr + str[i] + ' '
    }else{
      newStr = newStr + str[i]
    }
  }
return newStr.slice(0,newStr.length-1)
}

const nightOwlsHelper = function(obj){
  const peopleCopy = {
    name: obj.name,
    localTime: obj.localTime,
    asleep: obj.asleep,
  }
  if(peopleCopy.localTime >=100 && peopleCopy.localTime<=400 && peopleCopy.asleep === false){
    return true
  }
}

const nightOwls = function(people){
  return people.filter(nightOwlsHelper)
}

const totalScore = function(list){
  let sum = 0
  for (let i = 0; i < list.length; i++)
  if (list[i].multiplier === 1 || list[i].multiplier === undefined){
    sum = sum + list[i].score
  }else if (list[i].multiplier > 1)
  {
    sum = sum + (list[i].score * list[i].multiplier)
  }
  return sum
}


const getToBedHelper = function(obj){
  const peopleCopy = {
    name: obj.name,
    localTime: obj.localTime,
    asleep: obj.asleep,
  }
  if(peopleCopy.localTime >=100 && peopleCopy.localTime<=400 && peopleCopy.asleep === false){
  peopleCopy.asleep = true
}else{
  peopleCopy.asleep = peopleCopy.asleep
}
return peopleCopy
}

const getToBed = function(people){
  return people.map(getToBedHelper)
}

const findIndices = function(arr,func){
  let newArr = []
  for (let i = 0; i < arr.length; i ++){
    if(func(arr[i]) === true){
      newArr.push(i)
    }
  }
  
  return newArr
}

const questionObj = function(str){
  return {
    text: str,
    answered: false,
    // id: this.questions.length, ??? it cant grab it because its in the below function. also tried just questions.length, also tried doing it underneath in the Faqtory function. gave up
    id: 0,
  }
}

const Faqtory = function(){
  return{
    questions: [],
    addQuestion: function(str){
      this.questions.push(questionObj(str))
      // for (const i = 0; i < this.questions.length; i++){
      //   return this.questions[i].id = i
      // }
    },
    answerQuestion: function(index, str){
      if (this.questions[index].answered === false){
      this.questions[index].answer = str
      }
    }
  }
}













if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof stringOut === 'undefined') {
  stringOut = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  stringOut,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
