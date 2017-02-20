// Move object using accelerometer
	var speed = 10.0;
	var minX = -8;
var maxX = 8;
var minZ = -4;
var maxZ = 4;
var control : GameObject;
	function Update () {
		var dir : Vector3 = Vector3.zero;
		// we assume that device is held parallel to the ground
		// and Home button is in the right hand
		

		dir.z = Input.acceleration.y;
		dir.x = Input.acceleration.x;
		

		//dir *= Time.deltaTime;
			
		// Move object
		transform.Translate (dir * Time.deltaTime * speed);
		
		
	if(transform.position.x <= minX)
	{
	transform.position.x = minX;
	}
	if(transform.position.x >= maxX)
	{
	transform.position.x = maxX;
	}
	if(transform.position.z <= minZ)
	{
	transform.position.z = minZ;
	}
	if(transform.position.z >= maxZ)
	{
	transform.position.z = maxZ;
	}
	}