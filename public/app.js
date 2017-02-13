(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

let Player = require('./player');
let Team = require('./team');
let Won = require('./won');

window.addEventListener('load', function () {

let chaserNames = ['Bob', 'Tom', 'Jim'];
let runnerNames = ['Wang', 'Thomas', 'Earl'];

let chasers = new Team('chasers');
let runners = new Team('runners');

let c = chasers.roster;
let r = runners.roster;

for (let i = 0; i < chaserNames.length; i++) {
    chasers.add(new Player(chaserNames[i]));
}

for (let i = 0; i < runnerNames.length; i++) {
    runners.add(new Player(runnerNames[i]));
}

console.log(c[0].tag(r[0]));
console.log(chasers.beat(runners));
console.log(runners.beat(chasers));
console.log(c[1].tag(r[1]));
console.log(r[0].getFlag());
console.log(c[0].getFlag());
//console.log(r[2].getFlag());
//console.log(runners.beat(chasers));
console.log(r[2].tag(r[1]));
console.log(r[2].tag(c[2]));
console.log(c[2].tag(c[1]));
console.log(c[2].tag(r[1]));
console.log(c[2].tag(r[1]));
console.log(c[1].tag(r[2]));
console.log(chasers.beat(runners));
});
},{"./player":2,"./team":3,"./won":4}],2:[function(require,module,exports){
module.exports = 
function Player(person) {
    this.name = person;
    this.isFrozen = false;
    this.flag = false;
    this.team = null;
 
    // get the flag function
    // this.getFlag = function () {
    //     if (this.team === 'runners' && this.isFrozen === false) {
    //         this.flag = true;
    //         return this.name + ' has the flag ';
    //     } else {
    //         if (this.isFrozen === true) {
    //             return this.name + ' can\'t capture the flag because ' + this.name + ' hasn\'t thawed out yet';
    //         } else {
    //             if (this.team === 'chasers') {
    //                 return this.team + ' can\'t capture the flag ';
    //             }
    //         }
    //     }
    // };




Player.prototype.tag = function (runner) {
        // a runner is frozen if tagged by a chaser or if runner accidently tags a chaser
        if (this.team === 'chasers' && runner.isFrozen === true) {
            return runner.name + ' is already frozen';
        } else {
            if (this.team === 'chasers' && runner.team === 'runners' || this.team === 'runners' && runner.team === 'chasers') {
                runner.isFrozen = true;
                return runner.name + ' was frozen by ' + this.name;
            } else {
                // this statement lets a runner unfreeze another runner
                if (this.team === 'runners' && this.isFrozen === false && runner.team === 'runners' && runner.isFrozen === true) {
                    runner.isFrozen = false;
                    return runner.name + ' was unfrozen by ' + this.name;
                } else {
                    // this statement logs if the tagger tries to unfreeze a runner that is not frozen
                    if (this.team === 'runners' && this.isFrozen === false && runner.team === 'runners' && runner.isFrozen === false) {
                        return runner.name + ' is not frozen';
                    } else {
                        if (this.team === 'chasers' && runner.isFrozen === true) {
                            return runner.name + ' is already frozen';
                        } else {
                            // this statement console.logs if runner is frozen and tries to unfreeze another frozen runner
                            if (this.team === 'runners' && this.isFrozen === true) {
                                runner.isFrozen;
                                return this.name + ' can\'t unfreeze ' + runner.name + ' because ' + this.name + ' is currently frozen ';
                                //  this statement runs if a chaser tags a chaser
                            } else {
                                runner.isFrozen;
                                return 'nothing happened';
                            }
                        }
                    }
                }
            }
        }
    };

    Player.prototype.getFlag = function () {
        if (this.team === 'runners' && this.isFrozen === false) {
            this.flag = true;
            return this.name + ' has the flag ';
        } else {
            if (this.isFrozen === true) {
                return this.name + ' can\'t capture the flag because ' + this.name + ' hasn\'t thawed out yet';
            } else {
                if (this.team === 'chasers') {
                    return this.team + ' can\'t capture the flag ';
                }
            }
        }
    };

// let bob = new Player('bob');
// bob.team();
// bob.isFrozen();
// bob.getFlag();


// Team.prototype.add = function (player) {
//     for (let i = 0; i < roster.length; i++) {
//         if (i <= (roster.length / 2)) {
//             chasers.push(player[i]);
//         } else {
//             runners.push(player[i]);
//         }
//     }
// };


 }



},{}],3:[function(require,module,exports){
module.exports = function Team(name) {
    this.name = name;
    this.roster = [];

    this.add = function (recruit) {
        this.roster.push(recruit);
        recruit.team = this.name;
    };

    this.beat = function (enemy) {
        if (this.name === 'chasers') {
            for (let i = 0; i < enemy.roster.length; i++) {
                if (enemy.roster[i].isFrozen === false) {
                    return 'chasers did not win';
                }
            }
            return 'chasers won';
        }

        if (this.name === 'runners') {
            for (let i = 0; i < this.roster.length; i++) {
                if (this.roster[i].flag === true) {
                    return 'runners won';
                }
            }
            return 'runners did not win';
        }
    }
    return this;
};
},{}],4:[function(require,module,exports){
 module.exports = function won (teams) {

     for(let i = 0; i < teams.length; i++) {
         let frozen = teams[i].isFrozen;
         
         // need to look at these lines, currently registers false
         let runners = teams[i].flag;
         let chasers = teams[i].flag;
         console.log(teams[i].flag);
      if (teams[i].team === 'runners' && frozen !== false || teams[i].team === 'chasers' && chasers === true) {
         return 'chasers won'; 
     } else {
         if (teams[i].team === 'runners' && runners === true) {
             return 'runners won';
         } else {
             return 'no one has won yet';
         }
     }
     }
 }
},{}]},{},[1]);
