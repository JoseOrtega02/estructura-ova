//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=4;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien, sos un  genio"; messageTime=""; messageError="Intenta de nuevo "; messageErrorG="Intenta de nuevo "; messageAttempts="Se acabaron los intentos! prueba de nuevo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1Y2lncmFtYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Qg==","VQ==","Uw==","RQ==","Uw==","","","","","","","UA==","","",""],["","Tg==","","","","","","","","UA==","","TA==","","Uw==",""],["TQ==","SQ==","Qw==","Ug==","Tw==","UA==","Ug==","Tw==","Qw==","RQ==","Uw==","QQ==","RA==","Tw==","Ug=="],["","RA==","","","","VQ==","","","","Ug==","","Qw==","","Rg==",""],["Rw==","QQ==","Qg==","SQ==","Tg==","RQ==","VA==","RQ==","","SQ==","","QQ==","","VA==",""],["","RA==","","","","Ug==","","","","Rg==","","TQ==","","Vw==",""],["","RA==","","","","VA==","","","","RQ==","","QQ==","","QQ==",""],["","RQ==","","","Ug==","Tw==","TQ==","","","Ug==","","RA==","","Ug==",""],["","Uw==","","","","Uw==","","","","SQ==","","Ug==","","RQ==",""],["","QQ==","","","Ug==","","","","","Qw==","","RQ==","","",""],["UA==","TA==","QQ==","Qw==","QQ==","Ug==","RQ==","RA==","","Tw==","","","","",""],["","SQ==","","","TQ==","","","","","Uw==","","","","",""],["","RA==","","","","","","","","","","","","",""],["SA==","QQ==","Ug==","RA==","Vw==","QQ==","Ug==","RQ==","","","","","","",""]];
var x1=[1,2,1,1,1,6,10,12,14,5,5];
var y1=[1,1,3,5,11,3,2,1,2,10,8];
var x2=[5,2,15,8,8,6,10,12,14,5,7];
var y2=[1,14,3,5,11,9,12,10,9,12,8];
var imaCW=["","","","","","","","","","",""];
var audioCW=["","","","","","","","","","",""];
var defCW=["conecta varios componentes entre sí.","Circuitos integrados que se encargan de gestionar el intercambio de información entre la CPU.","Chip que se encuentra integrado en la placa base.","Contiene los componentes que integran una computadora","Se encargan de preparar, transferir y controlar la información o datos que envía a los otros equipos que están conectados en una misma red","Interfaz a través de la cual se pueden enviar y recibir los diferentes tipos de datos","Accesorio o equipo que se conecta al CPU.","Tarjeta de circuito impreso a la que se conectan los componentes que constituyen la computadora.","Programas informáticos que hacen posible la ejecución de tareas específicas","Memoria de almacenamiento de datos a corto plazo"," se almacena de forma permanente en el chip."];
var altCW=["","","","","","","","","","",""];
var colNum=15;
var rowNum=14;
