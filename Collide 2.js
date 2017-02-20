#pragma strict

function Start () {
	
}

function Update () {
	
}
function OnCollisionEnter(coll: Collision) {
if (coll.gameObject.tag == "Death"){
Application.LoadLevel("Level 2");

}
      }  
