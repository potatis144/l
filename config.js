const firstName = 'Edwin';
const lastName = 'W';
const title = 'Developer'
const pronouns = 'He/Him'
const showPronouns = true;
const aboutMe = 'Potatis#9133'
const mcmUrl = 'https://builtbybit.com/members/potatis144.270606/'

window.onload = function(){ 

    document.getElementById('firstName').textContent = firstName;
    document.getElementById('lastName').textContent = lastName;
    document.getElementById('title').textContent = title;
    document.getElementById('aboutMe').textContent = aboutMe;

    if(showPronouns == true) {
        document.getElementById('pronouns').textContent = pronouns;
    } else {
        document.getElementById('pronouns').textContent = '';
    }

    document.getElementById("mcmUrl").setAttribute("href",mcmUrl);
}
