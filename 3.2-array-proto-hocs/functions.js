//Task 1
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames(array) {
	return array.map(element => element.name);
}

function getCountReliableWeapons(array,number) {
	return array.filter(element => element.durability > number).length;
}

function hasReliableWeapons(array,number) {
	return array.some(element => element.durability > number);
}

function getReliableWeaponsNames(array,number) {
	return array.filter(element => element.durability > number).map(element => element.name);
}

function getTotalDamage(array) {
	return weapons.reduce((acc, weapon) => acc + weapon.attack, 0);
}


