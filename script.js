
document.addEventListener("DOMContentLoaded",()=>{
 const loader=document.querySelector(".loader"); setTimeout(()=>loader?.classList.add("hide"),500);
 const menu=document.querySelector(".menu"), nav=document.querySelector(".nav-links");
 menu?.addEventListener("click",()=>nav?.classList.toggle("open"));
 nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
 const current=(location.pathname.split("/").pop()||"index.html");
 nav?.querySelectorAll("a").forEach(a=>{if(a.getAttribute("href")===current)a.classList.add("active")});

 const io=new IntersectionObserver(entries=>{
   entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}})
 },{threshold:.12});
 document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

 document.querySelectorAll("[data-count]").forEach(el=>{
   const target=Number(el.dataset.count); let started=false;
   const obs=new IntersectionObserver(es=>{
     if(es[0].isIntersecting&&!started){
       started=true;let n=0;const step=Math.max(1,Math.ceil(target/45));
       const t=setInterval(()=>{n=Math.min(target,n+step);el.textContent=n;if(n>=target)clearInterval(t)},24);
       obs.disconnect();
     }
   },{threshold:.6});obs.observe(el);
 });

 document.querySelectorAll("[data-wa-form]").forEach(form=>{
   form.addEventListener("submit",e=>{
     e.preventDefault();const fd=new FormData(form);
     const clean=v=>encodeURIComponent(v||"");
     const msg=`Hello Everest Journeys,%0A%0AI want to discuss my business growth.%0A%0AName: ${clean(fd.get("name"))}%0ACompany: ${clean(fd.get("company"))}%0APhone: ${clean(fd.get("phone"))}%0AService: ${clean(fd.get("service"))}%0ARequirement: ${clean(fd.get("message"))}`;
     window.open(`https://wa.me/919928728548?text=${msg}`,"_blank","noopener");
   });
 });

 const cursor=document.querySelector(".cursor");
 window.addEventListener("mousemove",e=>{if(cursor){cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"}});
 document.querySelectorAll("a,button,.card,details").forEach(el=>{
   el.addEventListener("mouseenter",()=>{if(cursor){cursor.style.width="27px";cursor.style.height="27px";cursor.style.background="rgba(22,135,232,.08)"}});
   el.addEventListener("mouseleave",()=>{if(cursor){cursor.style.width="12px";cursor.style.height="12px";cursor.style.background="transparent"}});
 });
 const visual=document.querySelector(".visual");
 if(visual&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
   visual.addEventListener("mousemove",e=>{
     const r=visual.getBoundingClientRect(),x=e.clientX/r.width-r.left/r.width-.5,y=e.clientY/r.height-r.top/r.height-.5;
     visual.style.transform=`translate(${x*7}px,${y*5}px)`;
   });
   visual.addEventListener("mouseleave",()=>visual.style.transform="");
 }
});
