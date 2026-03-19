    const mobMenu  = document.getElementById('mob-menu');
    const mobOpen  = document.getElementById('mob-open');
    const mobClose = document.getElementById('mob-close');

    function openMob()  { mobMenu.classList.add('open');  document.body.style.overflow='hidden'; }
    function closeMob() { mobMenu.classList.remove('open'); document.body.style.overflow=''; }

    mobOpen.addEventListener('click',  openMob);
    mobClose.addEventListener('click', closeMob);
    document.addEventListener('keydown', e => { if(e.key==='Escape') closeMob(); });

    function mobAcc(btn) {
    const body   = btn.nextElementSibling;
    const isOpen = body.classList.contains('open');
    document.querySelectorAll('.mob-acc-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.mob-acc-btn').forEach(b => b.classList.remove('open'));
    if(!isOpen){ body.classList.add('open'); btn.classList.add('open'); }
}