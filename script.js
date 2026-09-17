
document.addEventListener("DOMContentLoaded",()=>{
  const loader=document.querySelector(".loader");
  setTimeout(()=>loader?.classList.add("hide"),450);

  const menu=document.querySelector(".menu"), links=document.querySelector(".nav-links");
  menu?.addEventListener("click",()=>links?.classList.toggle("open"));
  links?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

  const path=location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll(".nav-links a").forEach(a=>{
    const href=a.getAttribute("href");
    if(href===path) a.classList.add("active");
  });

  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}})
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  document.querySelectorAll("[data-count]").forEach(el=>{
    const target=Number(el.dataset.count); let started=false;
    const obs=new IntersectionObserver(es=>{
      if(es[0].isIntersecting&&!started){started=true;let n=0;const step=Math.max(1,Math.ceil(target/45));
        const timer=setInterval(()=>{n=Math.min(target,n+step);el.textContent=n; if(n>=target)clearInterval(timer)},24);obs.disconnect()}
    },{threshold:.6});obs.observe(el);
  });

  document.querySelectorAll("[data-wa-form]").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const fd=new FormData(form);
      const msg=`Hello Everest Journeys,%0A%0AI want a business growth audit.%0A%0AName: ${encodeURIComponent(fd.get("name")||"")}%0ACompany: ${encodeURIComponent(fd.get("company")||"")}%0APhone: ${encodeURIComponent(fd.get("phone")||"")}%0AService: ${encodeURIComponent(fd.get("service")||"")}%0ARequirement: ${encodeURIComponent(fd.get("message")||"")}`;
      window.open(`https://wa.me/919928728548?text=${msg}`,"_blank");
    });
  });

  const cursor=document.querySelector(".cursor");
  window.addEventListener("mousemove",e=>{if(cursor){cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"}});
  document.querySelectorAll("a,button,.card,details").forEach(el=>{
    el.addEventListener("mouseenter",()=>{if(cursor){cursor.style.width="28px";cursor.style.height="28px";cursor.style.background="rgba(18,103,214,.08)"}});
    el.addEventListener("mouseleave",()=>{if(cursor){cursor.style.width="14px";cursor.style.height="14px";cursor.style.background="transparent"}});
  });

  const visual=document.querySelector(".visual");
  if(visual && !matchMedia("(prefers-reduced-motion: reduce)").matches){
    visual.addEventListener("mousemove",e=>{
      const r=visual.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      visual.style.transform=`translate(${x*8}px,${y*6}px)`;
    });
    visual.addEventListener("mouseleave",()=>visual.style.transform="");
  }
});
