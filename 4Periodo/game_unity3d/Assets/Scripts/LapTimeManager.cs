using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LapTimeManager : MonoBehaviour
{
    public static int MinuteCount;
    public static int SecondCount;
    public static float MilliCount;
    public static string MilliDisplay;

    public GameObject MinuteBox;
    public GameObject SecondBox;
    public GameObject MilliBox;


    // Update is called once per frame
    void Update()
    {
        MilliCount += Time.deltaTime * 10;
        MilliDisplay = MilliCount.ToString("F0");
        MilliBox.GetComponent<Text>().text = "" + MilliDisplay;

        if(MilliCount >= 10){ //progressão dos millisegundos até segundos
            MilliCount = 0;
            SecondCount += 1;
        }

        if(SecondCount <= 9){  //progressão dos segundos até 10 segundos
            SecondBox.GetComponent<Text>().text = "0" + SecondCount + ".";
        }else{
            SecondBox.GetComponent<Text>().text = "" + SecondCount + ".";
        }

        if(SecondCount >= 60){ //progressão dos segundos até 1 minutos
            SecondCount = 0;
            MinuteCount += 1;
        }
        
        if(MinuteCount <= 9){  //progressão dos minutos até 10 minutos
            MinuteBox.GetComponent<Text>().text = "0" + MinuteCount + ".";
        }else{
            MinuteBox.GetComponent<Text>().text = "" + MinuteCount + ".";
        }

    }
}