function zeigeObjekt(pObjekt){
   var para = 'height=400,width=500,scrollbars=1,resizable=1';
   Fenster=window.open('','Objekte',para);
   setTimeout('schreibeObjekt("'+pObjekt+'")',100); //die eigentliche Ausgabe etwas verzoegern
}

function schreibeObjekt(pObjekt){
   var Objekt = eval(pObjekt);
   var Eigenschaft = '';
   var Aus = '<html><head><title></title></head>';
   Aus += '<body><pre>\n';
   for(var i in Objekt){      
      if (isNaN(parseInt(i)))
         Eigenschaft += pObjekt+'.'+i;
      else
         Eigenschagt += pObjekt +'['+ i + ']';
         
      Aus += Eigenschaft +'=' +Objekt[i] + '\n';
      Eigenschaft = '';
   }
   Aus += '</pre></body></html>';
   Fenster.document.open();
   Fenster.document.write(Aus);
   Fenster.document.close();
}
