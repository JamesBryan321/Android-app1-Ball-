//Original by Scott Kovacs @ http://answers.unity3d.com/questions/29183/2d-camera-smooth-follow.html
//Edited by Paul O'Callaghan to allow edits within the editor and slightly more customization(Edits will be marked with a 'P' in comment form.

@Tooltip("The wait time before camera starts following moving player")
 var dampTime : float = 0.3; //offset from the viewport center to fix damping
 private var velocity = Vector3.zero;
 private var target : Transform;

 private var ts:GameObject;//P

 @Tooltip("Set wheter or not the x-axis will be locked for the camera")
 var lockX : boolean = false;//P
 @Tooltip("The position that the X of the camera will stick to")
 var lockXpos : float;//P
 @Tooltip("Set wheter or not the y-axis will be locked for the camera")
 var lockY : boolean = false;//P
 @Tooltip("The position that the Y of the camera will stick to")
 var lockYpos : float;//P

 //P
 function Start(){
 ts = GameObject.Find("Player");
 target = ts.GetComponent(Transform);
 }//P

 function Update() {
     if(target) {
         var point : Vector3 = GetComponent.<Camera>().WorldToViewportPoint(target.position);
         var delta : Vector3 = target.position - GetComponent.<Camera>().ViewportToWorldPoint(Vector3(0.5, 0.5, point.z));
         var destination : Vector3 = transform.position + delta;
         
         // P
         if(lockY == true){
         destination.y = lockYpos; 
         }

         if(lockX == true){
         destination.x = lockXpos; 
         }

         if(lockX == true && lockY == true){
         Debug.Log("If you are seeing this you have locked both the X and Y of the camera, this is not neccesary as not using this script will have the same effect");
         }//Pa
         
         transform.position = Vector3.SmoothDamp(transform.position, destination, velocity, dampTime);
     }
 }