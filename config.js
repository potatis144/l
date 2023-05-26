const firstName = 'First';
const lastName = 'Last';
const title = 'Title/Occupation'
const pronouns = 'They/Them'
const showPronouns = true;
const aboutMe = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, ullam laborum reprehenderit dolorem temporibus nesciunt modi facere sequi veritatis alias accusantium assumenda fuga reiciendis? Fuga quidem laudantium maxime minima libero non itaque perspiciatis possimus placeat est aliquam, iusto minus, maiores tenetur! Quasi explicabo expedita maiores odit necessitatibus ipsa officiis similique.'
const facebookUrl = 'https://facebook.com'
const twitterUrl = 'https://twitter.com'
const instagramUrl = 'https://instagram.com'
const mcmUrl = 'https://www.mc-market.org/members/23919/'

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
    document.getElementById("facebookUrl").setAttribute("href",facebookUrl);
    document.getElementById("instagramUrl").setAttribute("href",instagramUrl);
    document.getElementById("twitterUrl").setAttribute("href",twitterUrl);
}