(function(){
    'use strict';

    let comment = document.getElementById('comment');
    let label = document.getElementById('label');

    const LIMIT =20;
    const WARNING =10;

    label.innerHTML =LIMIT;

    comment.addEventListener('keyup',function(){
        let remaining = LIMIT - this.value.length;
        label.innerHTML =remaining;

        label.className = remaining < WARNING ? 'warning' : '';
    });

})();
