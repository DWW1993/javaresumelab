var name = "dan walker"
var capName = name.toUpperCase();
var printName = "Name: " + capName;
var career = "Full Stack Developer";
var printCareer = "Career: " + career;
var description = "My name is Dan. I am a 24 year old from the state of Alabama. On all levels except physical, I am a wolf. I am taking a coding class at the moment so I can graduate and make one million dollars as a top tier web developer.";
var printDescription = "Description: " + description
var interests = ["veganism", "Young Thug", "Hiking", "La Croix"]
function displayPosition(companyName, jobTitle, description) {
    console.log("* " + jobTitle + " at " + companyName + " - " + description);
}
function displaySkill(skillName, skillCool){
    if(skillCool === true) {
        console.log("* " + "Check It: " + skillName)
    } else { 
        console.log("* " + skillName)
    }
}
console.log("`````````````````````````")
console.log(printName);
console.log(printCareer);
console.log(printDescription);
console.log("My Interests:");
for (i = 0; i < interests.length; i++){
    console.log("* " + interests[i]);
};
console.log("My Previous Experience");
displayPosition("Coast to Coast Events", "Retail Sales Associate", "Sold DirecTV in big box retailers");
displayPosition("Whole Foods Market", "Booth TM", "Took calls, made schedules, processed returns, etc");
displayPosition("Daxko", "MET", "Took calls, made schedules, processed returns, etc", "Did inbound and outbound calling for over 20 YMCA branches around the country");
console.log("My Skills:")
displaySkill("Coding", true);
displaySkill("Cooking", false)
displaySkill("Drumming", true)
displaySkill("Dark Souls", true)
displaySkill("Writing", false)
displaySkill("HTML", false)
displaySkill("CSS", false)
displaySkill("Sleeping", false)
displaySkill("Being Vegan", true)
console.log("`````````````````````````")