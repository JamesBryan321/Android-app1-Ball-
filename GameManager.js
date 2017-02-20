#pragma strict
var score : int = 0;
var scoreText : UnityEngine.UI.Text; 
function Start () {
	
}

function Update () {
	scoreText.text = score.ToString();
}
function UpdateScore() {
	score = score + 1;
	Debug.Log("Current player score is" + score);
	if (score == 28) {
	Application.LoadLevel("GG");
}
}
