dragElement (document.getElementById ('plant1'));
dragElement (document.getElementById ('plant2'));
dragElement (document.getElementById ('plant3'));
dragElement (document.getElementById ('plant4'));
dragElement (document.getElementById ('plant5'));
dragElement (document.getElementById ('plant6'));
dragElement (document.getElementById ('plant7'));
dragElement (document.getElementById ('plant8'));
dragElement (document.getElementById ('plant9'));
dragElement (document.getElementById ('plant10'));
dragElement (document.getElementById ('plant11'));
dragElement (document.getElementById ('plant12'));
dragElement (document.getElementById ('plant14'));
dragElement (document.getElementById ('plant13'));

function dragElement (terrariumElement) {
    // Set 4 positions for screen positioning
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;
    terrariumElement.ondblclick = doubleClick;

    function pointerDrag (e) {
        e.preventDefault ();
        console.log (e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    
    function elementDrag (e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log (pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    
    function stopElementDrag () {
        document.onpointermove = null;
        document.onpointerup = null;
    }

    function doubleClick (e) {
        console.log ("double click captured on " + e.toElement.id + "!");
    }
}
