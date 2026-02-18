const textPath1 = document.querySelector("#text-path");
const textPathCurve3 = document.querySelector('textPath[href="#curve3"]');
{ const textPathCurve8 = document.querySelector('textPath[href="#curve8"]');
  const textPathCurve12 = document.querySelector('textPath[href="#curve12"]'); }

console.log(textPath1, textPathCurve3);
const h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

document.addEventListener("scroll", () => {
  let percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
  const offset = (-percent * 40) + 1200;
  console.log(offset);

  if (textPath1) textPath1.setAttribute("startOffset", offset);
  if (textPathCurve3) textPathCurve3.setAttribute("startOffset", offset);
  if (textPathCurve8) textPathCurve8.setAttribute("startOffset", offset);
  if (textPathCurve12) textPathCurve12.setAttribute("startOffset", offset);
});
