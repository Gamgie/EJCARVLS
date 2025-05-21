

/* ********** GENERAL SCRIPTING **********************

		This templates shows what you can do in this is module script
		All the code outside functions will be executed each time this script is loaded, meaning at file load, when hitting the "reload" button or when saving this file
*/

var lineNames = ["Timestamp", "Nom et prénom", "Quel est le plus grand défi auquel tu as été confronté dans ta vie ?", "Si ce défi est passé, comment as-tu réussi à y faire face ?", "Un héros c'est quoi ?"];

var goodDefi = [];
var goodFace = [];
var goodHero = [];

var reponse1Target = script.addTargetParameter("Reponse 1 ", "");
var reponse2Target = script.addTargetParameter("Reponse 2 ", "");
var reponse3Target = script.addTargetParameter("Reponse 3 ", "");
var reponse4Target = script.addTargetParameter("Reponse 4 ", "");

var reponseParams = [];

function init() {
	
	local.sendGET("pub?gid=945766716&single=true&output=tsv");
}

function dataEvent(data, requestURL) {

	goodDefi = [];
	goodFace = [];
	goodHero = [];

	var lines = data.split("\n");
	for (var i = 1; i < lines.length; i++) {
		var line = lines[i].split("\t");
		if (line[0] == "") continue;
		goodDefi.push(line[0]);
		goodFace.push(line[1]);
		goodHero.push(line[2]);
	}

	//reinit response params
	responseParams = [];
	reponseParams.push(reponse1Target.getTarget());
	reponseParams.push(reponse2Target.getTarget());
	reponseParams.push(reponse3Target.getTarget());
	reponseParams.push(reponse4Target.getTarget());


	script.log("Got :", goodDefi.length + " defis", goodFace.length + " faces", goodHero.length + " heroes");
}

function setResponse(type, index, id) {
	if (type == 0) setDefi(index, id);
	else if (type == 1) setFace(index, id);
	else if (type == 2) setHero(index, id);
	else script.log("Unknown ID: " + id);
}

function setDefi(index, id) {
	script.log("Setting Defi " + id + " at clip " + index + " :" + goodDefi[id - 1]);

	reponseParams[index - 1].set(goodDefi[id - 1]);
}

function setFace(index, id) {
	script.log("Setting Face " + id + " at clip " + index + " :" + goodFace[id - 1]);

	reponseParams[index - 1].set(goodFace[id - 1]);
}

function setHero(index, id) {
	script.log("Setting Hero " + id + " at clip " + index + " :" + goodHero[id - 1]);
	reponseParams[index - 1].set(goodHero[id - 1]);
}