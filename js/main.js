document.querySelector('button').addEventListener('click', horoscopeSign)


function horoscopeSign() {

const sign = document.querySelector("#horoscopes").value
const day = document.querySelector('#day').value


const URL = 'https://aztro.sameerkumar.website/?sign='+sign + "&day=" +day

fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.current_date;
    console.log(date);
    
    const compatibility = json.compatibility;
    document.querySelector('#compatibility').innerText = compatibility

    const lucky = json.lucky_time;
    document.querySelector('#luckyTime').innerText = lucky

    const luckyNumber = json.lucky_number;
    document.querySelector('#luckyNumber').innerText = luckyNumber

    const color = json.color;
    document.querySelector('#color').innerText = color

    const dateRange = json.date_range;
    document.querySelector("#dateRange").innerText = dateRange

    const mood = json.mood;
    document.querySelector("#mood").innerText = mood

    const description = json.description;
    document.querySelector("#description").innerText = description

   
    // if(sign === "gemini"){
    //     document.querySelector('#img__print').src = "img/gemini.png"
    // } else if (sign === "aries") {
    //     document.querySelector("#img__print").src ="img/aries.png"
    // }


    return sign === "aries" ? document.querySelector('#img__print').src = "img/aries.png"
        : sign === "gemini" ? document.querySelector('#img__print').src = "img/gemini.png"
        : sign === "taurus" ? document.querySelector('#img__print').src = "img/taurus.png"
        : sign === "cancer" ? document.querySelector('#img__print').src = "img/cancer.png"
        : sign === "leo" ? document.querySelector('#img__print').src = "img/leo.png"
        : sign === "virgo" ? document.querySelector('#img__print').src = "img/virgo.png"
        : sign === "libra" ? document.querySelector('#img__print').src = "img/libra.png"
        : sign === "scorpio" ? document.querySelector('#img__print').src = "img/scorpio.png"
        : sign === "sagittarius" ? document.querySelector('#img__print').src = "img/sagittarius.png"
        : sign === "capricorn" ? document.querySelector('#img__print').src = "img/capricorn.png"
        : sign === "aquarius" ? document.querySelector('#img__print').src = "img/aquarius.png"
        : sign === "pisces" ? document.querySelector('#img__print').src = "img/pisces.png"
        : console.log('nothing');

})
}


// return sign === "gemini" ? document.querySelector('#img__print').src = "img/gemini.png"
// : sign === "aries" ? document.querySelector('#img__print').src = "img/aries.png"
