using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{   
    private Rigidbody playerRb;
    public float gravityModifier;

    public float speed = 20.0f;
    public float turnSpeed = 45.0f;
    private float horizontalInput;
    private float forwardInput;
    private bool isOnGround = true;
    private bool isOnRoad = true;
    private Quaternion initialrot;
    private Vector3 initialpos;
    public bool GroundCheck = true;
    public bool RoadCheck = true;

    public ParticleSystem explosionParticle;
    public ParticleSystem dirtParticle;
    public ParticleSystem dirtParticle1;

    public static int SecondCount;
    public static float MilliCount;

    public AudioClip CarEngine;
    public AudioClip TireScreech;
    private AudioSource CarAudio;

    public float dot;

    public double FloorLimit = -0.6;


    // Start is called before the first frame update
    void Start()
    {
        CarAudio = GetComponent<AudioSource>();
        playerRb = GetComponent<Rigidbody>();
        Physics.gravity *= gravityModifier;
        initialrot = transform.rotation;
        initialpos = transform.position;
    }

    // Update is called once per frame
    void Update()
    {   dot = Vector3.Dot(transform.up, Vector3.up);
        if(dot >= 1 && dot < 2){
            isOnGround = true;
            GroundCheck = true;
        }else if(dot <= 0 || dot > 2){
            isOnGround = false;
            GroundCheck = false;
        }

        if(isOnGround == true){
            //Move the vehicle forward
            horizontalInput = Input.GetAxis("Horizontal");  //Recebe o imput da direção horizontal 
            forwardInput = Input.GetAxis("Vertical");       //Recebe o imput da direção vertical
            transform.Translate(Vector3.forward*Time.deltaTime*speed*forwardInput);         //Move o veiculo na vertical com base no input
            transform.Rotate(Vector3.up,turnSpeed*horizontalInput*Time.deltaTime);          //Move o veiculo na horizontal com base no input
            if(Input.GetKeyDown(KeyCode.W)){
                CarAudio.PlayOneShot(CarEngine,0.70f);
            }
            if(Input.GetKeyDown(KeyCode.S)){
                CarAudio.PlayOneShot(TireScreech,0.7f);
                CarAudio.PlayOneShot(CarEngine,0.7f);
            }
        }

        if(isOnRoad == false){
            MilliCount += Time.deltaTime * 10;
            if(MilliCount >= 10){ //progressão dos millisegundos até segundos
                MilliCount = 0;
                SecondCount += 1;
            }
            if((SecondCount == 3) && (isOnRoad == false)){ //depois de tantos segundos, volta para o início
                explosionParticle.Play();
                transform.rotation = initialrot;
                transform.position = initialpos;
                isOnGround = true;
                isOnRoad = true;
                GroundCheck = true;
                RoadCheck = true;
            
                LapTimeManager.MinuteCount = 0;
                LapTimeManager.SecondCount = 0;
                LapTimeManager.MilliCount = 0;
            }
        }else if(isOnRoad == true){
            MilliCount = 0;
        }

        if(Input.GetKeyDown(KeyCode.Space)){
            explosionParticle.Play();
            transform.rotation = initialrot;
            transform.position = initialpos;
            isOnGround = true;
            isOnRoad = true;
            GroundCheck = true;
            RoadCheck = true;

            LapTimeManager.MinuteCount = 0;
            LapTimeManager.SecondCount = 0;
            LapTimeManager.MilliCount = 0;
        }
        if(transform.rotation.z >=89 || transform.rotation.z <=-89){
            isOnGround = false;
            isOnRoad = false;
            GroundCheck = false;
            RoadCheck = false;

            dirtParticle.Stop();
            dirtParticle1.Stop();
        }

        if(transform.rotation.x >=89 || transform.rotation.x <=-89){  
            isOnGround = false;
            isOnRoad = false;
            GroundCheck = false;
            RoadCheck = false;

            dirtParticle.Stop();
            dirtParticle1.Stop();
        }


        if(transform.position.y < FloorLimit){
            gravityModifier = -50;
        }else if(transform.position.y > FloorLimit){   
            gravityModifier = 5;
        }

    }


    private void OnCollisionEnter(Collision collision){

        if(transform.rotation.z <=89 || transform.rotation.x <=89){ 
            if(transform.rotation.z >=-89 || transform.rotation.x >=-89){
                if(collision.gameObject.CompareTag("Road")){
                    isOnGround = true;
                    GroundCheck = true;
                    speed = 20.0f;
                    turnSpeed = 45.0f;
                    dirtParticle.Stop();
                    dirtParticle1.Stop();
                    CarAudio.PlayOneShot(TireScreech,0.7f);

                    explosionParticle.Play();
                }
            }
            else{
                isOnGround = false;
                isOnRoad = false;
                GroundCheck = false;
                RoadCheck = false;
            }
        }
        else{
            isOnGround = false;
            isOnRoad = false;
            GroundCheck = false;
            RoadCheck = false;
        }

        if(transform.rotation.z <=89 || transform.rotation.x <=89){ 
            if(transform.rotation.z >=-89 || transform.rotation.x >=-89){

                if(collision.gameObject.CompareTag("Ground")){

                    isOnGround = true;
                    GroundCheck = true;
                    speed = 15.0f;
                    turnSpeed = 35.0f;

                    dirtParticle.Play();
                    dirtParticle1.Play();

                    explosionParticle.Play();
                }
            }
            else{
                isOnGround = false;
                GroundCheck = false;
            }
        }
        else{
            isOnGround = false;
            GroundCheck = false;
        }
    }

    private void OnCollisionExit(Collision collision){
        if(transform.rotation.z >= 89 || transform.rotation.x >= 89){ 
            if(transform.rotation.z <= -89 || transform.rotation.x <= -89){
                if(collision.gameObject.CompareTag("Ground")){
                    isOnGround = false;
                    GroundCheck = false;
                    speed = 20.0f;
                    turnSpeed = 45.0f;
                    dirtParticle.Stop();
                    dirtParticle1.Stop();

                    explosionParticle.Play();
                }
            }
        }
                if(collision.gameObject.CompareTag("Road")){
                    isOnGround = false;
                    GroundCheck = false;
                    isOnRoad = false;
                    RoadCheck = false;

                    explosionParticle.Play();

                }
    }

}