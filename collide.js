#pragma strict

var Control : GameObject;
var tokenSound : AudioClip;
function Start () {
	
}

function Update () {
	
}
function OnCollisionEnter(coll: Collision) {
if (coll.gameObject.tag == "Death"){
Application.LoadLevel("Maze");

}
if (coll.gameObject.tag == "Death 2"){
Application.LoadLevel("Level 2");

}
if(coll.gameObject.tag =="Score") {
		Control.gameObject.SendMessage("UpdateScore");

		Destroy(coll.gameObject);

		AudioSource.PlayClipAtPoint(tokenSound,transform.position);

      }
      }  
