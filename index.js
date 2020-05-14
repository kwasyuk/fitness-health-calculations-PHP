'use strict';

/**Calculates the basal metabolic rate.
 * @param {String} gender
 * @param {Number} age
 * @param {Number} height
 * @param {Number} weight 
 */
module.exports.bmrCalculate = function bmrCalculate(gender, age, height, weight) {

    let genderVariable;

    if (typeof age !== 'number' || typeof height !== 'number' || typeof weight !== 'number') {
        throw new Error('Age, height and weight must be a number');
    }

    /**Gender check */
    if (gender === 'female') {
        genderVariable = -161;
    } else if (gender === 'male') {
        genderVariable = 5;
    } else {
        throw new Error('Gender must be either male or female');
    }

    let bmr = 10 * weight + 6.25 * height - 5 * age + genderVariable;

    /**Return bmr with two decimal places */
    return bmr = +bmr.toFixed(2);
}

/**Calculates the total daily energy expenditure.
 * @param {String} gender
 * @param {Number} age
 * @param {Number} height
 * @param {Number} weight
 * @param {String} activity_level 
 */
module.exports.tdeeCalculate = function tdeeCalculate(gender, age, height, weight, activity_level) {

    let activityMap = {
        'sedentary': 1.2,
        'light': 1.375,
        'moderate': 1.55,
        'high': 1.725,
        'extreme': 1.9
    }

    if (typeof activity_level !== 'string' || !(activity_level in activityMap)) {
        throw new Error('Value for activity level is not valid')
    }

    let tdee = this.bmrCalculate(gender, age, height, weight) * activityMap[activity_level];

    /**Return tdee with two decimal places */
    return tdee = +tdee.toFixed(2);
}

/**Calculates the total daily energy expenditure.
 * @param {String} gender
 * @param {Number} age
 * @param {Number} height
 * @param {Number} weight
 * @param {String} activity_level
 * @param {String} goal
 * @param {String} [approach='normal']
 */
module.exports.caloricNeeds = function caloricNeeds(gender, age, height, weight, activity_level, goal, approach = 'normal') {

    let goalMap = {
        'reduction': -200,
        'maintain': 0,
        'gain': 200
    }

    let approachMap = {
        'slow': -0.75,
        'normal': 1,
        'agressive': 2,
        'very agressive': 3
    }

    if (!(goal in goalMap)) {
        throw new Error('Value for goal is not valid')
    }

    if (!(approach in approachMap)) {
        throw new Error('Value for approach is not valid')
    }

    let tdee = this.tdeeCalculate(gender, age, height, weight, activity_level);

    let calNeeds = tdee + (goalMap[goal] * approachMap[approach]);

    /**Return caloric needs with two decimal places */
    return calNeeds = +calNeeds.toFixed(2);
}