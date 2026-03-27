(function(){
    var menu=document.getElementById('mob-menu'),
        open=document.getElementById('burger-open'),
        close=document.getElementById('mob-close');
    if(!menu||!open||!close)return;

    function show(){menu.classList.add('--open');document.body.style.overflow='hidden'}
    function hide(){menu.classList.remove('--open');document.body.style.overflow=''}

    open.addEventListener('click',function(e){e.preventDefault();show()});
    close.addEventListener('click',function(e){e.preventDefault();hide()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')hide()});

    for(var els=menu.querySelectorAll('[data-close]'),i=0;i<els.length;i++)
        els[i].addEventListener('click',hide);

    for(var trigs=document.querySelectorAll('.mob-accordion__trigger'),j=0;j<trigs.length;j++)
        trigs[j].addEventListener('click',function(){
            var body=this.nextElementSibling,isOpen=body.classList.contains('--open');
            for(var b=document.querySelectorAll('.mob-accordion__body'),k=0;k<b.length;k++)b[k].classList.remove('--open');
            for(var t=document.querySelectorAll('.mob-accordion__trigger'),m=0;m<t.length;m++)t[m].classList.remove('--expanded');
            if(!isOpen){body.classList.add('--open');this.classList.add('--expanded')}
        });
})();