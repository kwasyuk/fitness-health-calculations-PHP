# Fitness And Health Calculations

A library to help you make health and fitness related calculations.

## Installing

To use this library, simply install it with the node package manager

```
npm install fitness-health-calculations
```

# Usage

**Please note that the weight and height values must be either POUNDS and FEETS, or KILOGRAMS and CENTIMETERS**

### EXAMPLE 1 - Basal metabolic rate 

```
const calculate = require('fitness-health-calculations');

let myBmr = calculate.bmr('female', 22, 168, 65);
```

### EXAMPLE 2 - Total caloric needs 

```
const calculate = require('fitness-health-calculations');

let totalCaloricNeeds = calculate.caloricNeeds('male', 22, 195, 95, 'high', 'gain', 'agressive');
```

### Same calculation as in EXAMPLE 2 but in FEETS and POUNDS

```
const calculate = require('fitness-health-calculations');

let totalCaloricNeeds = calculate.caloricNeeds('male', 22, 6.3, 209, 'high', 'gain', 'agressive');
```

## API

```
Fitness and Health Calculations
```
* `bmr(gender, age, height, weight)`
    * `gender` - [REQUIRED] - your gender.
    * `age` - [REQUIRED] - your age.
    * `height` - [REQUIRED] - your height, can be either in **FEETS** or **CENTIMETERS**
    * `weight` - [REQUIRED] - your weight, can be either in **POUNDS** or **KILOGRAMS**

* `tdee(gender, age, height, weight, activity_level)`
    * `gender` - [REQUIRED] - your gender.
    * `age` - [REQUIRED] - your age.
    * `height` - [REQUIRED] - your height, can be either in **FEETS** or **CENTIMETERS**
    * `weight` - [REQUIRED] - your weight, can be either in **POUNDS** or **KILOGRAMS**  
    * `activity_level` - [REQUIRED] - how much active are u during the week
        - **sedentary** - little to no exercise + work a desk job
        - **light** - light exercise 1-3 days/week
        - **moderate** - moderate exercise 3-5 days/week
        - **high** - heavy exercise 6-7 days/week
        - **extreme** - very heavy exercise, hard labor job, training 2x/day

* `caloricNeeds(gender, age, height, weight, activity_level, goal, approach)`
    * `gender` - [REQUIRED] - your gender.
    * `age` - [REQUIRED] - your age.
    * `height` - [REQUIRED] - your height, can be either in **FEETS** or **CENTIMETERS**
    * `weight` - [REQUIRED] - your weight, can be either in **POUNDS** or **KILOGRAMS**  
    * `activity_level` - [REQUIRED] - how much active are u during the week
        - **sedentary** - little to no exercise + work a desk job
        - **light** - light exercise 1-3 days/week
        - **moderate** - moderate exercise 3-5 days/week
        - **high** - heavy exercise 6-7 days/week
        - **extreme** - very heavy exercise, hard labor job, training 2x/day
    * `goal` - [REQUIRED] - your weight goal
        - **reduction** - weightloss
        - **maintain** - maintain current weight
        - **gain** - gain weight
    * `approach` - [OPTIONAL] - your approach to the previously added goal. This will determine how fast you will lose or gain weight.(default - normal) *This parameter should only be added if the target parameter is 'reduction' or 'gain', otherwise this parameter will be ignored.*
        - **slow** - very slow weightloss/gain
        - **normal** - normal weightloss/gain, this is the default and recommended value
        - **agressive** - agressive weightloss/gain
        - **very agressive** - very agressive weightloss/gain, only recommended for professional athletes

## Authors

* **Selim Mesic** - [SelimMesic](https://github.com/SelimMeske)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
