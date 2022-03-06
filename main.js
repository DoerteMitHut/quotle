nfields = 5;
nattempts = 2;
const computeScore = function(answer){
    
    // Franchise correct
    // voicing actor also in correct movie
    // Release Date correct
    // gross revenue
    return Array(nfields).fill('s').map((el)=>{
        r = Math.random();
        console.log(r);
        if(r<0.3){
            return 0;
        }else if(r < 0.6){
            return 1;
        }
        else{
            return 2;
        }
    });
};
const submitAttemptHandler = function(){
    score = computeScore(document.getElementById('input_field').value);
    rows[current_attempt].forEach((el,idx)=>{
        switch(score[idx]){
            case 0:
                el.classList.remove('wrong');
                el.classList.remove('partly');
                el.classList.add('correct');
                break;
            case 1:
                el.classList.remove('partly');
                el.classList.remove('correct');
                el.classList.add('wrong');
                break;
            case 2:
                el.classList.remove('wrong');
                el.classList.remove('correct');
                el.classList.add('partly');
                break;
        }
    });
}
window.addEventListener('load',()=>{
    let playarea = document.getElementById('fieldgrid');
    playarea.style.gridTemplateColumns = Array(nfields).fill('auto').join(' ');
    rows = []
    current_attempt = 0;
    for(var attempt_idx = 0; attempt_idx<nattempts; attempt_idx++){
        rows.push([]);
        for(var field_idx = 0; field_idx<nfields; field_idx++){
            let field = document.createElement('div');
            field.id = `field_${attempt_idx}_${field_idx}`;
            field.classList.add('field');
            playarea.appendChild(field);
            rows[attempt_idx].push(field);
        }    
    }

    document.getElementById('submit_button').addEventListener('click',submitAttemptHandler);
});
