// Shared enhancements loaded by every slide deck:
//  1. "Course home" link + H key to exit the deck back to the portal
//  2. Playable video cues: ▶ boxes get Play-here (embedded), Open-link, and
//     Find-on-YouTube buttons from the manifest in videos.js
//  3. Any `path.md` code reference inside slides becomes a link that opens
//     in the site's document viewer
(function(){
  // --- 1. Navigation out of the deck -------------------------------------
  var home=document.createElement('a');
  home.className='homelink';
  home.href='../index.html';
  home.textContent='⌂ Course home';
  document.body.appendChild(home);
  addEventListener('keydown',function(e){
    if(e.key==='h'||e.key==='H')location.href='../index.html';
  });

  // --- 2. Playable videos -------------------------------------------------
  var V=window.COURSE_VIDEOS||{};
  function ytEmbed(url){
    var m=url.match(/[?&]v=([\w-]{11})/)||url.match(/youtu\.be\/([\w-]{11})/)||url.match(/shorts\/([\w-]{11})/);
    if(m)return 'https://www.youtube.com/embed/'+m[1];
    m=url.match(/[?&]list=([\w-]+)/);
    if(m)return 'https://www.youtube.com/embed/videoseries?list='+m[1];
    return null;
  }
  document.querySelectorAll('.video').forEach(function(box){
    box.addEventListener('click',function(e){e.stopPropagation();}); // don't advance slide
    var m=box.textContent.match(/Video\s+(\d+\.\d+)/);
    var v=m&&V[m[1]];
    if(!v)return;
    var bar=document.createElement('div');
    bar.className='videobar';
    var emb=v.url?ytEmbed(v.url):null;
    if(emb){
      var b=document.createElement('button');
      b.className='vbtn';b.textContent='▶ Play here';
      var frame=null;
      b.addEventListener('click',function(){
        if(frame){frame.remove();frame=null;b.textContent='▶ Play here';return;}
        frame=document.createElement('div');
        frame.className='videoframe';
        frame.innerHTML='<iframe src="'+emb+'" allow="autoplay; fullscreen; encrypted-media" allowfullscreen></iframe>';
        box.after(frame);
        b.textContent='✕ Close video';
      });
      bar.appendChild(b);
    }
    if(v.url){
      var a=document.createElement('a');
      a.className='vbtn ghost';a.href=v.url;a.target='_blank';a.rel='noopener';
      a.textContent='Open link ↗';
      bar.appendChild(a);
    }
    if(v.search){
      var s=document.createElement('a');
      s.className='vbtn ghost';s.target='_blank';s.rel='noopener';
      s.href='https://www.youtube.com/results?search_query='+encodeURIComponent(v.search);
      s.textContent=(v.url?'':'▶ ')+'Find on YouTube ↗';
      bar.appendChild(s);
    }
    if(v.title){
      var t=document.createElement('span');
      t.className='vtitle';
      t.textContent=v.title+(v.channel?' — '+v.channel:'');
      bar.appendChild(t);
    }
    box.appendChild(bar);
  });

  // --- 3. Document references become viewer links -------------------------
  document.querySelectorAll('.slide code').forEach(function(c){
    var txt=c.textContent.trim();
    if(/^(curriculum|practicals|assessments|resources)\/[\w\-\/\.]+\.md$/.test(txt)){
      var a=document.createElement('a');
      a.href='../viewer.html?file='+txt;
      a.target='_blank';a.rel='noopener';
      a.style.color='inherit';
      c.parentNode.insertBefore(a,c);
      a.appendChild(c);
      c.style.textDecoration='underline';
    }
  });
})();
