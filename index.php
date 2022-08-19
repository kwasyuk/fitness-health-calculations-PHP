<?php

/**
 * Calculates the basal metabolic rate.
 * @param {String} gender
 * @param {Number} age
 * @param {Number} height
 * @param {Number} weight 
 */
function bmr($gender, $age, $height, $weight) {

    $heightConverted = $height;
    $weightConverted = $weight;
    $genderVariable;

    if (!is_numeric($age) || !is_numeric($height) || !is_numeric($weight)) {
        throw new Exception('Age, height and weight must be a number');
    }

    /**Convert IMPERIAL UNITS */
    if($height < 10){
        $heightConverted = $height*30.48;
        $weightConverted = $weight/2.205;
    }

    /**Gender check */
    if ($gender === 'female') {
        $genderVariable = -161;
    } else if ($gender === 'male') {
        $genderVariable = 5;
    } else {
        throw new Exception('Gender must be either male or female');
    }

    $bmr = 10 * $weightConverted + 6.25 * $heightConverted - 5 * $age + $genderVariable;

    /**Return bmr with two decimal places */
    return $bmr = +$bmr.toFixed(2);
}

/**
 * Calculates the total daily energy expenditure.
 * @param {String} gender
 * @param {Number} age
 * @param {Number} height
 * @param {Number} weight
 * @param {String} activity_level 
 */
function tdee($gender, $age, $height, $weight, $activity_level) {

    $activityMap = [
        'sedentary' => 1.2,
        'light' => 1.375,
        'moderate' => 1.55,
        'high' => 1.725,
        'extreme' => 1.9
    ];

    if (!is_string($activity_level) || !array_key_exists($activity_level, $activityMap)) {
        throw new Exception('Value for activity level is not valid');
    }

    $tdee = bmr($gender, $age, $height, $weight) * $activityMap[$activity_level];

    /**Return tdee with two decimal places */
    return $tdee = +$tdee.toFixed(2);
}

/**
 * Calculates the total daily caloric needs.
 * @param {String} gender
 * @param {Number} age
 * @param {Number} height
 * @param {Number} weight
 * @param {String} activity_level
 * @param {String} goal
 * @param {String} [approach='normal']
 */
module.exports.caloricNeeds = function caloricNeeds(
    $gender,
    $age,
    $height,
    $weight,
    $activity_level,
    $goal,
    $approach = "normal"
  ) {
    $goalMap = [
      "reduction" => -200,
      "maintain" => 0,
      "gain" => 200,
    ];
  
    $approachMap = [
      "slow" => -0.75,
      "normal" => 1,
      "agressive" => 2,
      "very agressive" => 3,
    ];
  
    if (!array_key_exists($goal, $goalMap)) {
      throw new Exception("Value for goal is not valid");
    }
  
    if (!array_key_exists($approach, $approachMap)) {
      throw new Exception("Value for approach is not valid");
    }
  
    $tdee = $this->tdee($gender, $age, $height, $weight, $activity_level);
  
    $calNeeds = $tdee + $goalMap[$goal] * $approachMap[$approach];
  
    /**Return caloric needs with two decimal places */
    return ($calNeeds = +$calNeeds.toFixed(2));
  };

/**
 * Calculates the ideal weight.
 * @param {Number} height
 * @param {String} gender
 * @param {String} [units = 'metric']
 */
 function idealBodyWeight($height, $gender, $units = "metric") {
    if (!is_numeric($height)) {
        throw new Exception("Height must be a number");
    }

    $genderFactor = 50;
    $heightVal = $height;

    /**Gender check */
    if ($gender === "female") {
        $genderFactor = $genderFactor - 5;
    } else if ($gender === "male") {
    } else {
        throw new Exception("Gender must be either male or female");
    }

    if ($height > 10) {
        $heightVal = $height / 30.48;
    }

    $result = $genderFactor + ($heightVal - 5) * 12 * 2.3;
    $result = round($result, 2);

    if ($units === "metric") {
        return $result;
    } else if ($units === "imperial") {
        $imperialResult = $result * 2.2;
        return round($imperialResult, 2);
    } else {
        throw new Exception("Units parameter can only be metric or imperial");
    }
}

?>