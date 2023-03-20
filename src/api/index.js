import Chance from "chance";

const chance = new Chance();

export const fakeUserData = () =>{
    //return random user data
    console.log(chance.name({middle: true}));
    return chance.name({middle: true});
};

fakeUserData();