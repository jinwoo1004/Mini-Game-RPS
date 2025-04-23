/**
 * 
 */
var focusIdx = '';
var element = '';

function main() {
    log('확인');

    document.addEventListener('visibilitychange', function() {
        if(document.hidden){
            log('hidden');
        }
        else {
            log('visible');
        }
    });

    moveFocus(1);
}
function handleKeydown(event) {
    console.log('키입력 : ' + event.keyCode);

    switch(event.keyCode) {
        case 37: //Left
            if(focusIdx === 1) {
                moveFocus(3);
            }
            else if(focusIdx === 2) {
                moveFocus(1);
            }
            else if(focusIdx === 3) {
                moveFocus(2);
            }
            break;
        case 39: //Right
        	if(foucusIdx === 1){
        		movefocus(2);
        	}
        	else if(focusIdx===2){
        		movefocus(3);
        		}
        	else if(focusIdx===3){
        		movefocus(1);
      }
        	break;
        case 13: //Enter
        	if(focusIdx===1){
        		playGame(1);
        	}
        	else if(focusIdx===2){
        		playGame(2);
        	}
        	else if(focusIdx===3){
        		playGame(3);
        	}
        	break;
        case 10009:
            clickReturn();
        break;
        	break;
        default:
        break;
  }
}
function moveFocus(idx) {
    focusIdx = idx;

    if(focusIdx === 1) {
        document.getElementById('button1').style.backgroundColor = '#99ff99';
        document.getElementById('button2').style.backgroundColor = '#ffffff';
        document.getElementById('button3').style.backgroundColor = '#ffffff';
    }
    else if(focusIdx === 2) {
            document.getElementById('button1').style.backgroundColor = '#ffffff';
            document.getElementById('button2').style.backgroundColor = '#99ff99';
            document.getElementById('button3').style.backgroundColor = '#ffffff';
            }
    else if(focusIdx === 3) {
        document.getElementById('button1').style.backgroundColor = '#ffffff';
        document.getElementById('button2').style.backgroundColor = '#ffffff';
        document.getElementById('button3').style.backgroundColor = '#99ff99';
        }
    
    function clickReturn() {
        if(element) {
            document.getElementsByTagName('body')[0].removeChild(element);
            element = '';

            moveFocus(1);
        } else {
            displayExitPopup();
        }
    }
    
function playGame(choice){
	with(document.game){
		comp = Math.round((Math.random() * 2) + 1);
		
	var choicename;
	if(comp == 1) choicename="바위";
	if(comp == 2) choicename="보";
	if(comp == 3) choicename="가위";
	
	msg.value ='컴퓨터는' + choicename + '.';
	
	switch(choice){
	    case 1 : //rock
		if(comp == 1) { draw.value++; msg.value += '이번엔 무승부.'; break;}
	    if(comp == 2) { loss.value++; msg.value += '이번엔 졌습니다 '; break;}
	    if(comp == 3) { win.value++; msg.value += '이번엔 이겼습니다.'; break;}
	    
	    case 2 : //paper
	    	if(comp == 1) {win.value++; msg.value += '흠..이번엔 이였습니다.'; break;}
	        if(comp == 2) {draw.value++; msg.value += '아쉽게도 비겼습니다....'; break;}
	        if(comp == 3) {loss.value++; msg.value += '다음번엔 이기시길 !!! 화이팅!!'; break;}
	        
	        case 3 : //scissors
	        	if(comp == 1) {loss.value++; msg.value += '아쉽습니다 한번더 시도해보세요!!'; break;}
	            if(comp == 2) {win.value++; msg.value += '와우!! 대단해요!! 또 이겨보세요'; break;}
	            if(comp == 3) {draw.value++; msg.value += 'ㅠㅠ비겼습니다'; break;}
	}
	msg.value += '      ^___^';
	}
}