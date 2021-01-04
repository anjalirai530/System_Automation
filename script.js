var robot = require("robotjs");
var fs = require("fs");
//open openboard and say hii
setTimeout(startOpenboard, 2000);

function startOpenboard() {
    robot.moveMouseSmooth(59,704);
    robot.mouseClick();
    robot.typeString("openboard");
    robot.keyTap("enter");
    setTimeout(writeGreeting,2000);
}

function writeGreeting() {
    robot.moveMouseSmooth(400,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(400,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(400,350);
    robot.mouseToggle("down","left");
    robot.dragMouse(600,350);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(600,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(600,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(700,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(900,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(800,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(800,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(700,450);
    robot.mouseToggle("down","left");
    robot.dragMouse(900,450);
    robot.mouseToggle("up","left");
//for cross
    robot.moveMouseSmooth(1179,19);
    robot.mouseClick();
    setTimeout(openTeams,2000);
}
//Teams open
function openTeams() {
    robot.moveMouseSmooth(59,704);  
    setTimeout(function() {
        robot.mouseClick();
        robot.typeString("Microsoft Teams");
        robot.keyTap("enter");

        robot.moveMouseSmooth(427,60);
        robot.mouseClick();
        robot.typeString("Placement CSE");
        robot.keyTap("enter");
        robot.keyToggle("control","down");
        robot.keyTap("a");
        robot.keyTap("delete")
        robot.keyToggle("control","up");

        robot.typeString("Hey Friends !!! What about Today's class timing");
        robot.keyTap("enter");

        robot.moveMouseSmooth(500,500);  
        setTimeout(openOnenote,2000);
    },2000);
}
 
//open one note
function openOnenote() {
    robot.moveMouseSmooth(59,704);
    setTimeout(function() {
        robot.mouseClick();
        robot.typeString("onenote");
        robot.keyTap("enter");

        robot.moveMouseSmooth(500,500);
        setTimeout(openChrome,2000);
    },2000);
}

//open chromes with new tab and new windows
function openChrome() {
    robot.moveMouseSmooth(59,704);
    setTimeout(function() {
    robot.mouseClick();
    robot.typeString("chrome");
    robot.keyTap("enter");
     
        setTimeout(openTabs,2000);
    },2000);
}

function openTabs() {
    var rdata = fs.readFileSync("./chrome.json");
    //read the link name present in chrome.json
    var tabs = JSON.parse(rdata);


    for(var i = 0; i < tabs.length; i++) {
        for(var j  = 0 ; j <tabs[i].length; j++) {
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");

            if(j < tabs[i].length - 1) {
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
            } else if(i < tabs.length - 1){
                robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control","up");
            } 
        }
    }

    robot.moveMouseSmooth(500,500);
    robot.mouseClick();
    setTimeout(openNotepad,2000);
}

//open notepad
function openNotepad() {
    robot.moveMouseSmooth(59,704);
    setTimeout(function() {
    robot.mouseClick();
    robot.typeString("notepad");
    robot.keyTap("enter");

    setTimeout(writeNotepad,2000);
    },5000);

}

function  writeNotepad() {
    robot.typeString("Hey Anjali!!! Dear your system is ready to use!! Have a great day ahead :)");
}