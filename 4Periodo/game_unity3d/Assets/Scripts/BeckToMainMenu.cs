using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
 
public class BackToMainMenu : MonoBehaviour
{
   public string MainMenu;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            // Sai da cena atual
            SceneManager.LoadScene(MainMenu);
        }
    }
}