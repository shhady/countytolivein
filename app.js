let countryToLiveIn = (language, isIsland, population, country) => {
    if(language == 'english' && isIsland == false && population < 50){
        return `you should live in ${country}`;
    }
    else{
        return `${country} does not meet your criteria`;
    }
}

console.log(countryToLiveIn('english', false, 30,'England'));