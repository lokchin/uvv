using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class OpcoesBotoes : MonoBehaviour
{

    public void PlayGame(){
        SceneManager.LoadScene(3);
    }

    public void TackSelect(){
        SceneManager.LoadScene(2);
    }

    public void MainMenu(){
        SceneManager.LoadScene(0);
    }

    // Os trechos abaixo são botões de celeção de pistas

    public void Tack01(){
        SceneManager.LoadScene(3);
    }

    public void Tack02(){
        SceneManager.LoadScene(4);
    }

    public void Tack03(){
        SceneManager.LoadScene(5);
    }

    public void Tack04(){
        SceneManager.LoadScene(6);
    }

    public void Tack05(){
        SceneManager.LoadScene(7);
    }

}
