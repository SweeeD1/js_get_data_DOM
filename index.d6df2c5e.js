var t=document.querySelectorAll(".population"),e=[];t.forEach(function(t){var r=t.textContent.trim(),o=parseFloat(r=r.replace(/,/g,""));isNaN(o)||e.push(o)});var r=0,o=!0,a=!1,n=void 0;try{for(var l,u=e[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var c=l.value;r+=c}}catch(t){a=!0,n=t}finally{try{o||null==u.return||u.return()}finally{if(a)throw n}}var i=(r/e.length).toString().replace(/(\d)(?=(\d{3})+$)/g,"$1,"),p=r.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1,");document.querySelector(".total-population").textContent=p,document.querySelector(".average-population").textContent=i;
//# sourceMappingURL=index.d6df2c5e.js.map