const checkBtn = document.getElementById('check-btn');
const input=document.getElementById('text-input');
const result=document.getElementById('result');
function checkPalindrome(chaine)
{
    const cleanedString = chaine.replace(/[\W_]/g, '').toLowerCase();
    const array=cleanedString.split('');
    let i=0;
    while (i < array.length / 2) {
        
        if (array[i] !== array[array.length - 1 - i]) {
            console.log('The word is not a palindrome');
            result.innerText=`${chaine} is not a palindrome.`
            return; 
        }

        i++;
    }

    console.log('The word is a palindrome');
    result.innerText=`${chaine} is a palindrome.`
}

checkBtn.addEventListener('click',()=>{
    if(input.value ==='')
    {
        alert('Please input a value');
    }
    else {
        
        //result.innerText=`you enter ${input.value}`;
        console.log(input.value.split(''))
        checkPalindrome(input.value);

    }
    
})