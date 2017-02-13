
let Player = require('./player');
let Team = require('./team');
let Won = require('./won');

window.addEventListener('load', function () {

    // let chaserNames = ['Bob', 'Tom', 'Jim'];
    // let runnerNames = ['Wang', 'Thomas', 'Earl'];

    // let chasers = new Team('chasers');
    // let runners = new Team('runners');

    // let c = chasers.roster;
    // let r = runners.roster;

    // for (let i = 0; i < chaserNames.length; i++) {
    //     chasers.add(new Player(chaserNames[i]));
    // }

    // for (let i = 0; i < runnerNames.length; i++) {
    //     runners.add(new Player(runnerNames[i]));
    // }


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
    }

        Team.prototype.add = function (recruit) {
            this.roster.push(recruit);
            recruit.team = this.name;
        };


let Bob = new Player (name)
console.log(Bob);




        // console.log(c[0].tag(r[0]));
        // console.log(chasers.beat(runners));
        // console.log(runners.beat(chasers));
        // console.log(c[1].tag(r[1]));
        // console.log(r[0].getFlag());
        // console.log(c[0].getFlag());
        // //console.log(r[2].getFlag());
        // //console.log(runners.beat(chasers));
        // console.log(r[2].tag(r[1]));
        // console.log(r[2].tag(c[2]));
        // console.log(c[2].tag(c[1]));
        // console.log(c[2].tag(r[1]));
        // console.log(c[2].tag(r[1]));
        // console.log(c[1].tag(r[2]));
        // console.log(chasers.beat(runners));
    });