let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

$(document).keypress(function(event)
{
    if (event.keyCode === 32)
    {
        if (!started)
        {
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
        }
    }
});

$(".btn").keydown(function(event)
{
    if (event.keyCode === 32 && started)
    {
        let userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1);
    }
});

$(document).keypress(function(event)
{
    if (started)
    {
        switch (event.key)
        {
            case "w":
                userChosenColor = "red";
                break;
            case "a":
                userChosenColor = "blue";
                break;
            case "s":
                userChosenColor = "green";
                break;
            case "d":
                userChosenColor = "yellow";
                break;
            default:
                return;
        }
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1);
    }
});

function checkAnswer(currentLevel)
{
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
        if (userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function()
            {
                nextSequence();
            }, 1000);
        }}
    else
    {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Fim de jogo!, tente de novo");
        
        setTimeout(function()
        {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }}

function nextSequence()
{
    userClickedPattern = [];
    level++;
    $("#level-title").text("Nível " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor)
}

function animatePress (currentColor)
{
    $("#" + currentColor).addClass("pressed");
    setTimeout(function (){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function playSound(name)
{
let audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}

function startOver()
{
    level = 0;
    gamePattern = [];
    started = false;
}