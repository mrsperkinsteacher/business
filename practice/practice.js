document.querySelectorAll('.quiz').forEach(function(quiz){
  var qs=quiz.querySelectorAll('.q'),done=0,right=0,score=quiz.querySelector('.score');
  qs.forEach(function(q){
    q.querySelectorAll('.opt').forEach(function(b){
      b.addEventListener('click',function(){
        if(q.dataset.done)return;q.dataset.done=1;done++;
        var ok=b.dataset.k===q.dataset.a;if(ok)right++;
        q.querySelectorAll('.opt').forEach(function(x){x.disabled=true;if(x.dataset.k===q.dataset.a)x.classList.add('right')});
        if(!ok)b.classList.add('wrong');
        var fb=q.querySelector('.fb');fb.hidden=false;fb.className='fb '+(ok?'ok':'no');
        fb.textContent=(ok?'Correct. ':'Not quite - the answer is '+q.dataset.a+'. ')+q.dataset.why;
        if(done===qs.length){score.hidden=false;score.textContent='You scored '+right+' out of '+qs.length+'. '+(right===qs.length?'Great work - now choose B, C or D.':'Re-read the feedback, then try again.');quiz.querySelector('.again').hidden=false}
      });
    });
  });
  quiz.querySelector('.again').addEventListener('click',function(){location.reload()});
});