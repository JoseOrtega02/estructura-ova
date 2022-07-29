//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien "; messageTime="se te acabo el tiempo"; messageError="fallaste intenta de nuevo"; messageErrorG="fallaste intenta de nuevo"; messageAttempts="no tienes más intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="VGVzdA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Cual es la unidad mínima de información?","¿Cual es el conjunto de ocho bits?","¿Cual es el conjunto de bits que se utiliza para realizar ciertas operaciones internas?"];
var answers1=["MWJpdA==","MGJ5dGU=","MHBhbGFicmE="];
var answers2=["MWJ5dGU=","MGJpdA==","MHBhbGFicmE="];
var answers3=["MXBhbGFicmE=","MGJpdA==","MGJ5dGU="];
var ans=[answers1,answers2,answers3];
var err=["","",""];
var ima=["","",""];
var mp4=["","",""];
var ogv=["","",""];
var alt=["","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Test_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
