//Task 1
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
	return weapons.map(element => element.name);
}

function getCountReliableWeapons(number) {
	return weapons.filter(element => element.durability > number).length;
}

function hasReliableWeapons(number) {
	return weapons.some(element => element.durability > number);
}

function getReliableWeaponsNames(number) {
	return weapons.filter(element => element.durability > number).map(element => element.name);
}

function getTotalDamage() {
	return weapons.reduce((acc, weapon) => acc + weapon.attack, 0);
}


