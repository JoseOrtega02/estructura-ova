//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy Bien"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1c2lncmFtYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Qg==","VQ==","Uw==","RQ==","Uw==","","","UA==","","","","UA==","","",""],["","Tg==","","","","","","Ug==","","UA==","","TA==","","Uw==",""],["TQ==","SQ==","Qw==","Ug==","Tw==","UA==","Ug==","Tw==","Qw==","RQ==","Uw==","QQ==","RA==","Tw==","Ug=="],["","RA==","","","","VQ==","","Qw==","","Ug==","","Qw==","","Rg==",""],["Rw==","QQ==","Qg==","SQ==","Tg==","RQ==","VA==","RQ==","","SQ==","","QQ==","","VA==",""],["","RA==","","","","Ug==","","Uw==","","Rg==","","TQ==","","Vw==",""],["","RQ==","","","","VA==","","QQ==","","RQ==","","QQ==","","QQ==",""],["","RA==","","","","Tw==","","RA==","","Ug==","","RA==","","Ug==",""],["","RQ==","","","","Uw==","","Tw==","","SQ==","","Ug==","","RQ==",""],["","Uw==","","","","","","Ug==","","Qw==","","RQ==","","",""],["","QQ==","","","Ug==","","","","","Tw==","","","","",""],["UA==","TA==","QQ==","Qw==","QQ==","Ug==","RQ==","RA==","","Uw==","","","","",""],["","SQ==","","","TQ==","","","","","","","","","",""],["","RA==","","","","","","","","","","","","",""],["SA==","QQ==","Ug==","RA==","Vw==","QQ==","Ug==","RQ==","","","","","","",""]];
var x1=[1,1,1,1,1,2,8,12,10,14,6,5];
var y1=[1,3,5,12,15,1,1,1,2,2,3,11];
var x2=[5,15,8,8,8,2,8,12,10,14,6,5];
var y2=[1,3,5,12,15,15,10,10,12,9,9,13];
var imaCW=["","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","",""];
var defCW=["conecta varios componentes entre sí","chip que se encuentra integrado en la placa base","contiene los componentes que integran una computadora","se encargan de preparar, transferir y controlar la información o datos que envía a los otros equipos que están conectados en una misma red","equipo o soporte físico","circuitos integrados que se encargan de gestionar el intercambio de información entre la CPU","permite que tu computadora interactúe con todas las aplicaciones y programas instalados"," tarjeta de circuito impreso a la que se conectan los componentes que constituyen la computadora.","accesorio o equipo que se conecta al CPU","programas informáticos que hacen posible la ejecución de tareas específicas","interfaz a través de la cual se pueden enviar y recibir datos"," memoria de almacenamiento de datos a corto plazo"];
var altCW=["","","","","","","","","","","",""];
var colNum=15;
var rowNum=15;
