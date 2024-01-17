#include <stdio.h>
#include <math.h>
#include <stdlib.h>

int main()
{

    float resultado, horas, minutos;
    
        printf("Insert the amount of hours [0-23]: ");
        scanf("%f", &horas);
        printf("Insert the amount of minutes [0-59]: ");
        scanf("%f", &minutos);

    //tratamento de erro
    if (horas >= 24 || minutos >= 60)

        printf("Typing error, insert again the amount of time");
    
    else

        //calculo

        resultado = (horas * 100/24)+(minutos*0.016);

        printf("Daily time: %.1f%%\n", resultado);

    system("pause");
    return 0;
}