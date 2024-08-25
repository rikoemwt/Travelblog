"use strict";
{
  function callback(entries,obs){
    entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    entry.target.classList.add("appear");
    obs.unobserve(entry.target);
    });
  }
  const opsion = {
    threshold:0.2,
  };
  
  const observer = new IntersectionObserver(callback,opsion);
  const targets = document.querySelectorAll(".grid");
  targets.forEach(target => {
  observer.observe(target)
  });
}
{
  function scrollCallback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        header.classList.add("scrolled");
        toTop.classList.add("scrolled");
      }else{
        header.classList.remove("scrolled");
        toTop.classList.remove("scrolled");
      }
    });
  }
  const toTop = document.getElementById("to_top");

  toTop.addEventListener("click", e =>{
    e.preventDefault();
    window.scrollTo({
    top:0,
    behavior:"smooth",
    });

  });
  const header = document.querySelector("header");

  const scrollObserver = new IntersectionObserver(scrollCallback);
  scrollObserver.observe(document.getElementById("target2"));
}