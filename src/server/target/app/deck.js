define(function(){var r=function(r){var n={},t=function(){var r=[];for(i=0;i<52;i++)r[i]=i+1;return r};return n.shuffle=function(){for(var r,n,f=t(),i=f.length-1;i;r=Math.floor(Math.random()*i),n=f[--i],f[i]=f[r],f[r]=n);return f},n};return r});