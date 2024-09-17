function keyHasBeenPressed(){
    let textAreaContent=document.querySelector('textarea')
    let charCount = document.querySelector('.charCount');
    charCount.innerHTML = String(textAreaContent.value).length;
   let charLimit = 20;
    let charLimitElements=document.querySelector('.charLimitspan')
    charLimitElements.innerHTML = charLimit - textAreaContent.value.length;

    let wordCount = document.querySelector('.wordcount');
    let wordArray = String(textAreaContent.value).split(' ');
    wordCount.innerHTML = wordArray.length;
    console.log(wordArray);
    if(textAreaContent.value.length > 20){
        textAreaContent.value = String(textAreaContent.value).substring(0,charLimit);
    }
}
document.querySelector('.clearButton').addEventListener('click',()=>{
      document.querySelector('textarea').value='';
      document.querySelector('.charCount').innerHTML=0;
      document.querySelector('.wordcount').innerHTML = 0;
})