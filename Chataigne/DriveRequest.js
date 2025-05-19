

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
	reponseParams.push(reponse1Target.getTarget());
	reponseParams.push(reponse2Target.getTarget());
	reponseParams.push(reponse3Target.getTarget());
	reponseParams.push(reponse4Target.getTarget());
}

function dataEvent(data, requestURL) {
	var lines = data.split("\n");
	for (var i = 1; i < lines.length; i++) {
		var line = lines[i].split("\t");
		if (line[0] == "") continue;
		goodDefi.push(line[2]);
		goodFace.push(line[3]);
		goodHero.push(line[4]);
	}
}

function setResponse(type, index, id)
{
	script.log(type);
}

function setDefi(index, id)
{
	reponseParams[index-1].set(goodDefi[id-1]);
}

function setFace(index, id)
{
	reponseParams[index-1].set(goodFace[id-1]);
}

function setHero(index, id)
{
	reponseParams[index-1].set(goodHero[id-1]);
}