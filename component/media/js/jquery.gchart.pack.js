/* http://keith-wood.name/gChart.html
   Google Chart interface for jQuery v1.3.1.
   See API details at http://code.google.com/apis/chart/.
   Written by Keith Wood (kbwood{at}iinet.com.au) September 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(T($){T 1Q(){U.1F={1i:0,1j:0,1G:\'2Q\',3I:1g,3J:6,3K:\'\',2R:\'\',2S:0,2b:0,3L:6,3M:6,2c:\'\',1R:\'2T\',2d:6,1e:\'3N\',2e:\'\',X:[U.X(\'4S 4T\',[60,40])],1S:0,1z:[],1H:[],1A:[],2U:[],2V:[],18:0,1a:1f,2f:[],2g:[],2h:[],1B:{},1T:6,2i:6,2j:6,2W:6,2X:0,2Y:\'2Z\',1U:[],2k:\'4U\',1I:[\'3O\',\'3P\'],1V:6,1W:6,2l:6,3Q:1g}};5 G=\'4V\';5 H={4W:\'3R\',4X:\'2m\',3O:\'4Y\',4Z:\'50\',3S:\'3T\',51:\'52\',53:\'3T\',54:\'55\',56:\'57\',58:\'59\',5a:\'5b\',5c:\'5d\',5e:\'5f\',3P:\'5g\',5h:\'5i\',5j:\'3R\',5k:\'5l\',5m:\'5n\',5o:\'5p\'};5 I={3U:\'30\',5q:\'2n\',3V:\'31\',5r:\'32\',5s:\'33\',5t:\'34\',5u:\'35\',5v:\'p\',3N:\'2o\',5w:\'36\',37:\'v\',38:\'s\',5x:\'r\',5y:\'39\',1X:\'t\',3a:\'3b\',3c:\'2p\',5z:\'3d\',30:\'30\',2n:\'2n\',31:\'31\',32:\'32\',33:\'33\',34:\'34\',35:\'35\',p:\'p\',2o:\'2o\',36:\'36\',v:\'v\',s:\'s\',r:\'r\',39:\'39\',t:\'t\',3b:\'3b\',2p:\'2p\',3d:\'3d\'};5 J={5A:\'A\',5B:\'a\',5C:\'F\',5D:\'o\',5E:\'x\',5F:\'d\',5G:\'v\',5H:\'E\',5I:\'f\',5J:\'F\',5K:\'H\',3W:\'h\',1o:\'N\',5L:\'c\',5M:\'C\',5N:\'B\',3V:\'D\',5O:\'b\',5P:\'s\',1J:\'t\',2q:\'V\'};5 K={5Q:-1,5R:-1,2T:0,5S:+1,5T:+1,\'-\':-1,\'+\':+1};5 L={5U:-45,5V:45,3W:0,2q:3X,5W:-45,5X:45,h:0,v:3X};5 M={3e:-1,3Y:0,3Z:0,41:+1,l:-1,c:0,r:+1};5 N={3U:\'l\',1C:\'t\',5Y:\'42\'};5 O={2T:\'l\',5Z:\'r\',62:\'a\',\'\':\'\',l:\'l\',r:\'r\',a:\'a\'};5 P={63:\'s\',65:\'c\',66:\'c\',67:\'e\',68:\'b\',3Y:\'h\',3Z:\'h\',3e:\'l\',69:\'v\',41:\'r\',43:\'t\',b:\'b\',c:\'c\',e:\'e\',h:\'h\',l:\'l\',r:\'r\',s:\'s\',t:\'t\',v:\'v\'};5 Q=\'44\';5 R=\'44-.\';$.1p(1Q.3f,{1Y:\'6a\',1t:-0.6b,6c:\'a\',3g:\'r\',6d:\'f\',6e:\'p\',6f:\'e\',6g:\'c\',6h:T(a){3h(U.1F,a||{})},X:T(a,b,c,d,e,f,g,h){7($.13(a)){h=g;g=f;f=e;e=d;d=c;c=b;b=a;a=\'\'}7(Z c==\'1o\'){h=f;g=e;f=d;e=c;d=6;c=6}7(Z d==\'1o\'){h=g;g=f;f=e;e=d;d=6}7($.13(f)){h=f;g=e;f=6;e=6}S{1D:a,14:b||[],12:c||\'\',1k:d,18:e,1a:f,1w:g,1x:h}},6i:T(h){5 j=[];7(!$.13(h)){h=h.3i(\'\\n\')}7(!h.W){S j}5 k=1g;5 l=[];5 m=[];5 n=[\'1D\',\'12\',\'1k\',\'18\',\'1a\',\'1w\',\'2r\',\'2s\'];$.1u(h,T(i,c){5 d=c.3i(\',\');7(i==0&&1K(46(d[0]))){$.1u(d,T(i,a){7($.3j(a,n)>-1){l[i]=a}1b 7(a.2t(/^x\\d+$/)){m[i]=a}})}1b{5 e={};5 f=[];5 g=6;$.1u(d,T(i,a){7(l[i]){5 b=$.3j(l[i],n);e[l[i]]=(b>2?$.Y.1q(a,0):a)}1b 7(m[i]){g=(a?$.Y.1q(a,-1):6);k=2u}1b{5 y=$.Y.1q(a,-1);f.1h(g!=6?[g,y]:y);g=6}});7(e.2r!=6&&e.2s!=6){e.1x=[e.2r,e.2s];e.2r=e.2s=6}j.1h($.1p(e,{14:f}))}});S(k?U.2v(j):j)},6j:T(f){7($.6k.6l&&Z f==\'1c\'){5 g=1Z 6m(\'6n.6o\');g.6p=1g;g.6q=1g;g.6r(f);f=g}f=$(f);5 h=[];5 j=1g;6s{f.2w(\'X\').1u(T(){5 b=$(U);5 c=[];b.2w(\'47\').1u(T(){5 a=$(U);5 x=a.1r(\'x\');7(x!=6){j=2u;x=$.Y.1q(x,-1)}y=$.Y.1q(a.1r(\'y\'),-1);c.1h(x?[x,y]:y)});5 d=b.1r(\'1x\');7(d){d=d.3i(\',\');11(5 i=0;i<d.W;i++){d[i]=$.Y.1q(d[i],1)}}h.1h({1D:b.1r(\'1D\'),14:c,12:b.1r(\'12\'),1k:b.1r(\'1k\'),18:$.Y.1q(b.1r(\'18\'),6),1a:$.Y.1q(b.1r(\'1a\'),6),1w:$.Y.1q(b.1r(\'1w\'),6),1x:d})})}6t(e){}S(j?U.2v(h):h)},1q:T(a,b){a=46(a);S(1K(a)?b:a)},6u:T(a){S U.2v(a)},2v:T(a){5 b=[];11(5 i=0;i<a.W;i++){5 c=!$.13(a[i].14[0]);5 d=(c?[6]:[]);5 e=[];11(5 j=0;j<a[i].14.W;j++){7(c){e.1h(a[i].14[j])}1b{d.1h(a[i].14[j][0]);e.1h(a[i].14[j][1])}}b.1h($.Y.X(a[i].1D,d,a[i].12,a[i].1k,a[i].18,a[i].1a,a[i].1w,a[i].1x));b.1h($.Y.X(a[i].1D,e,\'\',a[i].1k,a[i].18,a[i].1a,a[i].1w,a[i].1x))}S b},38:T(a,b,c,d){7(!$.13(b)){d=b;c=6;b=6}5 e=[[],[],[]];11(5 i=0;i<a.W;i++){e[0][i]=a[i][0];e[1][i]=a[i][1];e[2][i]=a[i][2]||1f}d=d||{};7(b){d.1B={3k:b.1l(\'|\')}}7(c){c=$.1X(c,T(v,i){S $.Y.12(v)});$.1p(d.1B,{2x:c.1l(\'|\')})}S $.1p({},d,{1e:\'38\',X:[$.Y.X(e[0]),$.Y.X(e[1]),$.Y.X(e[2])]})},37:T(a,b,c,d,e,f,g,h){S $.1p({},h||{},{1e:\'37\',X:[$.Y.X([a,b,c,d,e,f,g])]})},3a:T(a,b,c,d,e,f,g){7(Z a!=\'1c\'&&!$.13(a)){g=f;f=e;e=d;d=c;c=b;b=a;a=\'\'}7(Z c!=\'1o\'){g=f;f=e;e=d;d=c;c=6}7(!$.13(d)){g=f;f=e;e=d;d=6}7(!$.13(e)){g=f;f=e;e=6}7(!$.13(f)){g=f;f=6}b=($.13(b)?b:[b]);5 h=1g;11(5 i=0;i<b.W;i++){h=h||$.13(b[i])}5 j=(h?[]:[$.Y.X(b)]);7(h){11(5 i=0;i<b.W;i++){j.1h($.Y.X($.13(b[i])?b[i]:[b[i]]))}}b=j;7(d){5 k=\'\';$.1u(d,T(i,v){k+=\',\'+$.Y.12(v)});d=k.19(1)}7(f){5 l=[\'\',\'\'];$.1u(f,T(i,v){v=($.13(v)?v:[v]);l[0]+=\'|\'+$.Y.12(v.48(0,3).1l(\',\'));l[1]+=\'|\'+(v[3]||15)});f=l[0].19(1)+l[1]}5 m=(e&&e.W?$.Y.2y(\'y\',e):6);S $.1p({},g||{},{1e:\'3a\',1a:c||1f,X:b,1z:($.13(a)?a:[a||\'\'])},(d?{1B:{2x:d}}:{}),(m?{1H:[m]}:{}),(f?{1B:{49:f}}:{}))},1X:T(a,b,c,d,e,f){7(Z a==\'1L\'){f=e;e=d;d=c;c=b;b=a;a=\'2Z\'}7(Z c==\'1L\'){f=c;e=6;d=6;c=6}1b 7(Z d==\'1L\'&&!$.13(d)){f=d;e=6;d=6}1b 7(Z e==\'1L\'){f=e;e=6}5 g=[];5 h=[];5 i=0;11(5 j 3l b){g[i]=j;h[i]=b[j];i++}S $.1p({},f||{},{1e:\'1X\',2Y:a,1U:g,2k:c||$.Y.1F.2k,1I:($.13(d)?d:[d||$.Y.1F.1I[0],e||$.Y.1F.1I[1]]),X:[$.Y.X(\'\',h)]})},3c:T(a,b,c,d){5 e={};7(Z a==\'1L\'){e=a}1b{e={1z:[a],2e:b,1V:c,1W:d}}e.1e=\'3c\';7(e.1J){e.1z=[e.1J];e.1J=6}S e},12:T(r,g,b,a){5 c=T(a){7(Z a==\'1o\'&&(a<0||a>3m)){6v\'6w 6x 4a 1E (0-3m) \'+a;}};5 d=T(a){S(a.W==1?\'0\':\'\')+a};7(Z r==\'1c\'){c(g);S(r.2t(/^#([A-6y-6z-9]{2}){3,4}$/)?r.6A(1):(H[r]||r)+(g?d(g.1M(16)):\'\'))}c(r);c(g);c(b);c(a);S d(r.1M(16))+d(g.1M(16))+d(b.1M(16))+(a?d(a.1M(16)):\'\')},6B:T(a,b,c){5 d=[];7($.13(b)){5 e=1/(b.W-1);11(5 i=0;i<b.W;i++){d.1h([b[i],17.21(i*e*1f)/1f])}}1b{d=[[b,0],[c,1]]}S{22:a,23:d}},6C:T(a,b){5 c=[];5 d=17.21(1f/b.W)/1f;11(5 i=0;i<b.W;i++){c.1h([b[i],d])}S{22:a,4b:2u,23:c}},1E:T(a,b,c,d){7(Z a==\'1c\'){d=c;c=b;b=a;a=1g}S{2q:a,12:b,3n:c,3o:d}},6D:T(a,b,c,d,e,f,g,h,i,j){7(Z e==\'1N\'){j=g;i=f;h=e;g=6;f=6;e=6}7($.13(e)){7(Z e[0]==\'1c\'){j=f;i=e}1b{j=e;i=6}h=6;g=6;f=6;e=6}7(Z f==\'1N\'){j=h;i=g;h=f;g=6;f=6}7($.13(f)){7(Z f[0]==\'1c\'){j=g;i=f}1b{j=f;i=6}h=6;g=6;f=6}7(Z g==\'1N\'){j=i;i=h;h=g;g=6}7($.13(g)){7(Z g[0]==\'1c\'){j=h;i=g}1b{j=g;i=6}h=6;g=6}7($.13(h)){7(Z h[0]==\'1c\'){j=i;i=h}1b{j=h;i=6}h=6}7($.13(i)&&Z i[0]!=\'1c\'){j=i;i=6}S{3p:a,12:b,X:c,2z:(d||d==0?d:-1),2A:e||10,2B:(f!=6?f:0),1J:g,3q:h,3r:i,1m:j}},6E:T(a,b,c,d,e,f,g){7($.13(c)){g=d;f=c;e=6;d=6;c=6}7($.13(e)){g=f;f=e;e=6}S{24:a,14:b,X:c||0,2z:(d||d==0?d:\'3s\'),3t:e,2C:f,1m:g}},4c:T(a,b,c,d,e,f,g){5 h=3u(a,b,c,d,e,f,g);S h.4d+\'*\'+h.1e+h.4e+(h.4f?\'z\':\'\')+(h.4g?\'s\':\'\')+(h.4h?\'x\':\'\')+\'*\'+h.4i},2y:T(a,b,c,d,e,f,g,h,i,j){S 1Z 2D(a,b,c,d,e,f,g,h,i,j)},6F:T(c,d){7(!d||!d.1O){S 6}5 e=T(a){5 b=a.2t(/([^\\d]+)(\\d+)(?:25(\\d)+)?/);S{1e:b[1],X:26(b[2]),47:26(b[3]||-1)}};5 f=$(c.6G).6H();5 x=c.6I-f.3e;5 y=c.6J-f.43;11(5 i=0;i<d.1O.W;i++){5 g=d.1O[i];6K(g.1e){4j\'4k\':7(g.1d[0]<=x&&x<=g.1d[2]&&g.1d[1]<=y&&y<=g.1d[3]){S e(g.24)}4l;4j\'6L\':7($.Y.4m(g.1d,x,y)){S e(g.24)}4l}}S 6},4m:T(a,x,y){5 b=0;5 c=[a[0],a[1]];11(5 i=2;i<=a.W;i+=2){5 d=[a[i%a.W],a[i%a.W+1]];7(y>17.1n(c[1],d[1])&&y<=17.1s(c[1],d[1])){7(x<=17.1s(c[0],d[0])&&c[1]!=d[1]){5 e=(y-c[1])*(d[0]-c[0])/(d[1]-c[1])+c[0];7(c[0]==d[0]||x<=e){b++}}}c=d}S(b%2!=0)},4n:T(a,b){a=$(a);7(a.4o(\'.\'+U.1Y)){S}a.6M(U.1Y);b=b||{};5 c=b.1i||26(a.3v(\'1i\'),10);5 d=b.1j||26(a.3v(\'1j\'),10);5 e=$.1p({},U.1F,b,{1i:c,1j:d});$.14(a[0],G,e);U.3w(a[0],e)},6N:T(a,b,c){5 d=b||{};7(Z b==\'1c\'){d={};d[b]=c}5 e=$.14(a,G);3h(e||{},d);$.14(a,G,e);U.3w(a,e)},6O:T(a){a=$(a);7(!a.4o(\'.\'+U.1Y)){S}a.6P(U.1Y).4p();$.6Q(a[0],G)},4q:T(d){5 e=I[d.1e]||\'2o\';5 f=U[\'25\'+d.2e+\'6R\']||U[\'4r\'];5 g=\'\';11(5 i=0;i<d.1z.W;i++){g+=\'|\'+2E(d.1z[i]||\'\')}g=(g.W==d.1z.W?\'\':g);5 h=\'\';5 j=\'\';5 k=1g;5 l=\'\';11(5 i=0;i<d.X.W;i++){h+=\'|\'+2E(d.X[i].1D||\'\');5 m=\'\';7(e!=\'2n\'||i%2==0){5 n=\',\';$.1u(($.13(d.X[i].12)?d.X[i].12:[d.X[i].12]),T(i,v){5 a=$.Y.12(v||\'\');7(a){k=2u}m+=n+(a||\'2m\');n=\'|\'})}j+=(k?m:\'\');7(e.19(0,1)==\'l\'&&d.X[i].1w&&$.13(d.X[i].1x)){l+=\'|\'+d.X[i].1w+\',\'+d.X[i].1x.1l(\',\')}}5 o=T(a,b){S(b?a+b:\'\')};5 p=T(){d.1i=17.1s(10,17.1n(d.1i,4s));d.1j=17.1s(10,17.1n(d.1j,4s));7(e!=\'t\'&&d.1i*d.1j>4t){d.1j=17.3x(4t/d.1i)}S(e!=\'t\'?\'&4u=\'+d.1i+\'x\'+d.1j:\'&4u=\'+17.1n(6S,d.1i)+\'x\'+17.1n(6T,d.1j))};5 q=T(){5 a=d.3J;a=(a==6?6:(Z a==\'1o\'?[a,a,a,a]:(!$.13(a)?6:(a.W==4?a:(a.W==2?[a[0],a[0],a[1],a[1]]:6)))));S(!a?\'\':\'&6U=\'+a.1l(\',\')+(!d.2d||d.2d.W!=2?\'\':\'|\'+d.2d.1l(\',\')))};5 r=T(){S o(\'&6V=\',d.2e)+(d.1V||d.1W?\'&4v=\'+(d.1V?d.1V.1y(0):\'l\')+(d.1W!=6?\'|\'+d.1W:\'\'):\'\')+(g?\'&3y=\'+g.19(1):\'\')};5 s=T(){5 a=\'\';11(5 i=0;i<d.1I.W;i++){a+=\',\'+$.Y.12(d.1I[i])}S\'&6W=\'+(d.2Y||\'2Z\')+\'&4w=\'+f.1P($.Y,[d])+(d.1U&&d.1U.W?\'&4v=\'+d.1U.1l(\'\'):\'\')+\'&2x=\'+$.Y.12(d.2k)+a};5 t=T(){S(d.2X?\'&4x=\'+(d.2X/6X*17.6Y):\'\')+u()};5 u=T(){S\'&4w=\'+f.1P($.Y,[d])+(g?\'&3y=\'+g.19(1):\'\')};5 w=T(){S(e.19(0,1)!=\'b\'?\'\':(d.1T==6?\'\':\'&6Z=\'+d.1T+(d.2i==6?\'\':\',\'+(d.1T==$.Y.3g?17.1n(17.1s(d.2i,0.0),1.0):d.2i)+(d.2j==6?\'\':\',\'+(d.1T==$.Y.3g?17.1n(17.1s(d.2j,0.0),1.0):d.2j))))+(d.2W==6?\'\':\'&4x=\'+d.2W))};5 x=T(){S(e.1y(0)==\'l\'&&l?\'&49=\'+l.19(1):\'\')};5 y=T(){S(j.W>d.X.W?\'&2x=\'+j.19(1):\'\')};5 z=T(){S o(\'&4y=\',2E(d.3K))+(d.2R||d.2S?\'&70=\'+($.Y.12(d.2R)||\'2m\')+\',\'+(d.2S||20):\'\')};5 A=T(a,b){7(b==6){S\'\'}7(Z b==\'1c\'){S a+\',s,\'+$.Y.12(b)}5 c=a+\',l\'+(b.4b?\'s\':\'g\')+\',\'+(L[b.22]!=6?L[b.22]:b.22);11(5 i=0;i<b.23.W;i++){c+=\',\'+$.Y.12(b.23[i][0])+\',\'+b.23[i][1]}S c};5 B=T(){5 a=(!d.2b?6:\'2m\'+17.3x(d.2b/(d.2b>1?1f:1)*3m).1M(16));7(a&&a.W<8){a=\'0\'+a}5 b=A(\'|a\',a)+A(\'|71\',d.3L)+A(\'|c\',d.3M);S(b?\'&72=\'+b.19(1):\'\')};5 C=T(){S(d.2f.W==0?\'\':\'&73=\'+d.2f[0]+\',\'+d.2f[1]+(d.2g.W==0?\'\':\',\'+d.2g[0]+\',\'+d.2g[1]+(d.2h.W==0?\'\':\',\'+d.2h[0]+\',\'+d.2h[1])))};5 D=T(){5 a=(d.1R&&d.1R.2t(/^\\d+(,\\d+)*$/)?d.1R:O[d.1R])||\'\';S(!d.2c||h.W<=d.X.W?\'\':\'&3k=\'+h.19(1)+o(\'&74=\',d.2c.1y(0)+(d.2c.4z(\'V\')>-1?\'v\':\'\')+o(\'|\',a)))};5 E=T(){5 a=\'\';11(5 b 3l d.1B){a+=\'&\'+b+\'=\'+d.1B[b]}S a};5 F=d.1G||\'2Q\';S\'4A://2F.4B.4C.4D/2F?\'+(F!=\'2Q\'?\'4E=\'+F+\'&\':\'\')+\'75=\'+e+p()+q()+(e==\'2p\'?r():(e==\'t\'?s():(e.1y(0)==\'p\'?t():u())))+w()+x()+y()+z()+U.4F(d)+B()+C()+U.4G(d)+U.4H(d)+D()+E()},4F:T(a){5 b=\'\';5 c=\'\';5 d=\'\';5 e=\'\';5 f=\'\';5 g=\'\';11(5 i=0;i<a.1H.W;i++){5 h=(Z a.1H[i]==\'1c\'?1Z 2D(a.1H[i]):a.1H[i]);5 k=h.2y().1y(0);b+=\',\'+(k==\'b\'?\'x\':(k==\'l\'?\'y\':k));7(h.2G()){5 l=\'\';11(5 j=0;j<h.2G().W;j++){l+=\'|\'+2E(h.2G()[j]||\'\')}c+=(l?\'|\'+i+\':\'+l:\'\')}7(h.2H()){5 m=\'\';11(5 j=0;j<h.2H().W;j++){m+=\',\'+h.2H()[j]}d+=(m?\'|\'+i+m:\'\')}7(h.1E()){5 n=h.1E();e+=\'|\'+i+\',\'+n[0]+\',\'+n[1]+(n[2]?\',\'+n[2]:\'\')}7(h.3z()||h.27()||h.1C()||h.1G()){5 o=h.3z()||{};5 p=h.1C()||{};f+=\'|\'+i+(h.1G()?\'N\'+U.4c(h.1G()):\'\')+\',\'+$.Y.12(o.12||\'3S\')+\',\'+(o.2A||10)+\',\'+(M[o.3A]||o.3A||0)+(!h.27()&&!p.12?\'\':\',\'+(N[h.27()]||h.27()||\'42\')+(p.12?\',\'+$.Y.12(p.12):\'\'))}7(h.1C()&&h.1C().W){g+=\'|\'+i+\',\'+h.1C().W}}S(!b?\'\':\'&76=\'+b.19(1)+(!c?\'\':\'&4I=\'+c.19(1))+(!d?\'\':\'&77=\'+d.19(1))+(!e?\'\':\'&78=\'+e.19(1))+(!f?\'\':\'&79=\'+f.19(1))+(!g?\'\':\'&7a=\'+g.19(1)))},4G:T(e){5 f=\'\';5 g=T(a,b){7(a==\'3s\'){S-1}7(Z a==\'1c\'){5 c=/^2I(\\d+)(?:\\[(\\d+):(\\d+)\\])?$/.2J(a);7(c){5 d=26(c[1],10);S(c[2]&&c[3]?(b?17.1s(0.0,17.1n(1.0,c[2])):c[2])+\':\'+(b?17.1s(0.0,17.1n(1.0,c[3])):c[3])+\':\'+d:-d)}}7($.13(a)){a=$.1X(a,T(v,i){S(b?17.1s(0.0,17.1n(1.0,v)):v)});S a.1l(\':\')+(a.W<2?\':\':\'\')}S a};5 h=T(a){S a.4J(/,/g,\'\\\\,\')};11(5 i=0;i<e.2U.W;i++){5 k=e.2U[i];5 l=J[k.3p]||k.3p;5 m=\'\';7(k.3r){5 n=$.7b(k.3r);11(5 j=0;j<n.W;j++){m+=P[n[j]]||\'\'}}f+=\'|\'+(k.3q?\'@\':\'\')+l+(\'7c\'.4z(l)>-1?h(k.1J||\'\'):\'\')+\',\'+$.Y.12(k.12)+\',\'+k.X+\',\'+g(k.2z,k.3q)+\',\'+k.2A+\',\'+(K[k.2B]!=6?K[k.2B]:k.2B)+(m||k.1m?\',\'+m+\':\'+(k.1m&&k.1m[0]?k.1m[0]:\'\')+\':\'+(k.1m&&k.1m[1]?k.1m[1]:\'\'):\'\')}11(5 i=0;i<e.1A.W;i++){f+=\'|\'+(e.1A[i].2q?\'R\':\'r\')+\',\'+$.Y.12(e.1A[i].12)+\',0,\'+e.1A[i].3n+\',\'+(e.1A[i].3o||e.1A[i].3n+0.7d)}11(5 i=0;i<e.X.W;i++){7(e.X[i].1k){5 o=($.13(e.X[i].1k)?e.X[i].1k:[e.X[i].1k]);11(5 j=0;j<o.W;j++){7(Z o[j]==\'1c\'){f+=\'|b,\'+$.Y.12(e.X[i].1k)+\',\'+i+\',\'+(i+1)+\',0\'}1b{5 p=($.13(o[j])?o[j]:[o[j].12,o[j].1E]);f+=\'|B,\'+$.Y.12(p[0])+\',\'+i+\',\'+p[1]+\',0\'}}}}S(f?\'&7e=\'+f.19(1):\'\')},4H:T(b){5 c=\'\';5 d=T(a){7(a==\'3s\'){S a}7(Z a==\'1c\'){7(/^2I(\\d+)$/.2J(a)){S a.4J(/2I/,\'2I,\')}}7($.13(a)){S\'1E,\'+a.1l(\',\')}S a};11(5 i=0;i<b.2V.W;i++){5 e=b.2V[i];c+=\'|y;s=\'+e.24+\';d=\'+e.14+(e.2C?\'\':\';7f=\'+e.X+\';7g=\'+d(e.2z))+(e.3t?\';7h=\'+e.3t:\'\')+(e.2C?\';7i=\'+e.2C.1l(\',\'):\'\')+(e.1m?\';4a=\'+e.1m.1l(\',\'):\'\')}S(c?\'&7j=\'+c.19(1):\'\')},3w:T(b,c){c.28=U.4q(c);7(c.3I){5 d=\'<3B 7k="4A://2F.4B.4C.4D/2F?\'+17.3x(17.7l()*7m)+\'" 7n="7o">\';5 e=/(\\w+)=([^&]*)/g;5 f=e.2J(c.28);7p(f){d+=\'<7q 1e="7r" 24="\'+f[1]+\'" 7s="\'+($.3j(f[1],[\'3k\',\'3y\',\'4y\',\'4I\'])>-1?7t(f[2]):f[2])+\'">\';f=e.2J(c.28)}d+=\'</3B>\';b=$(b);b.4p();5 g=$(\'<4K></4K>\').7u(b).3v({1i:\'1f%\',1j:\'1f%\'});5 h=g.4L()[0];h.7v();h.7w(d);h.7x();g.7y().4L().2w(\'3B\').7z()}1b{5 i=$(1Z 7A());i.7B(T(){$(b).2w(\'7C\').7D().3o().7E(U);7(c.2l){7(c.3Q){$.7F(c.28+\'&4E=7G&7H=?\',T(a){c.2l.1P(b,[$.Y.4M(a)])})}1b{c.2l.1P(b,[])}}});$(i).1r(\'7I\',c.28)}},4M:T(a){7(a&&a.1O){11(5 i=0;i<a.1O.W;i++){5 b=a.1O[i];7(b.1e==\'4k\'){7(b.1d[0]>b.1d[2]){5 c=b.1d[0];b.1d[0]=b.1d[2];b.1d[2]=c}7(b.1d[1]>b.1d[3]){5 c=b.1d[1];b.1d[1]=b.1d[3];b.1d[3]=c}}}}S a},4r:T(a){5 b=(a.18==$.Y.1t?U.29(a.X):a.18);5 c=(a.1a==$.Y.1t?U.2a(a.X):a.1a);5 d=\'\';11(5 i=0;i<a.X.W;i++){d+=\'|\'+U.4N(a.X[i],b,c)}S\'t\'+(a.1S||\'\')+\':\'+d.19(1)},4N:T(a,b,c){b=(a.18!=6?a.18:b);c=(a.1a!=6?a.1a:c);5 d=1f/(c-b);5 e=\'\';11(5 i=0;i<a.14.W;i++){e+=\',\'+(a.14[i]==6||1K(a.14[i])?\'-1\':17.21(d*(a.14[i]-b)*1f)/1f)}S e.19(1)},7J:T(a){5 b=(a.18==$.Y.1t?U.29(a.X):a.18);5 c=(a.1a==$.Y.1t?U.2a(a.X):a.1a);5 d=\'\';5 e=\'\';11(5 i=0;i<a.X.W;i++){d+=\'|\'+U.4O(a.X[i],b);e+=\',\'+(a.X[i].18!=6?a.X[i].18:b)+\',\'+(a.X[i].1a!=6?a.X[i].1a:c)}S\'t\'+(a.1S||\'\')+\':\'+d.19(1)+\'&7K=\'+e.19(1)},4O:T(a,b){b=(a.18!=6?a.18:b);5 c=\'\';11(5 i=0;i<a.14.W;i++){c+=\',\'+(a.14[i]==6||1K(a.14[i])?(b-1):a.14[i])}S c.19(1)},7L:T(a){5 b=(a.18==$.Y.1t?U.29(a.X):a.18);5 c=(a.1a==$.Y.1t?U.2a(a.X):a.1a);5 d=\'\';11(5 i=0;i<a.X.W;i++){d+=\',\'+U.4P(a.X[i],b,c)}S\'s\'+(a.1S||\'\')+\':\'+d.19(1)},4P:T(a,b,c){b=(a.18!=6?a.18:b);c=(a.1a!=6?a.1a:c);5 d=61/(c-b);5 e=\'\';11(5 i=0;i<a.14.W;i++){e+=(a.14[i]==6||1K(a.14[i])?\'25\':Q.1y(17.21(d*(a.14[i]-b))))}S e},7M:T(a){5 b=(a.18==$.Y.1t?U.29(a.X):a.18);5 c=(a.1a==$.Y.1t?U.2a(a.X):a.1a);5 d=\'\';11(5 i=0;i<a.X.W;i++){d+=\',\'+U.4Q(a.X[i],b,c)}S\'e\'+(a.1S||\'\')+\':\'+d.19(1)},4Q:T(b,c,d){c=(b.18!=6?b.18:c);d=(b.1a!=6?b.1a:d);5 e=7N/(d-c);5 f=T(a){S R.1y(a/64)+R.1y(a%64)};5 g=\'\';11(5 i=0;i<b.14.W;i++){g+=(b.14[i]==6||1K(b.14[i])?\'7O\':f(17.21(e*(b.14[i]-c))))}S g},29:T(a){5 b=2K;11(5 i=0;i<a.W;i++){5 c=a[i].14;11(5 j=0;j<c.W;j++){b=17.1n(b,(c[j]==6?2K:c[j]))}}S b},2a:T(a){5 b=-2K;11(5 i=0;i<a.W;i++){5 c=a[i].14;11(5 j=0;j<c.W;j++){b=17.1s(b,(c[j]==6?-2K:c[j]))}}S b}});T 2D(a,b,c,d,e,f,g,h,i,j){7(Z b==\'1o\'){j=h;i=g;h=f;g=e;f=d;e=c;d=b;c=6;b=6}1b 7(!$.13(c)){j=i;i=h;h=g;g=f;f=e;e=d;d=c;c=6}7(Z d==\'1c\'){j=g;i=f;h=e;g=d;f=6;e=6;d=6}7(Z f==\'1c\'){j=i;i=h;h=g;g=f;f=6}7(Z h==\'1o\'){j=i;i=h;h=6}U.3C=a;U.3D=b;U.3E=c;U.3F=(d!=6?[d,e,f]:6);U.2L=g;U.2M=h;U.2N=i;U.3G=6;U.2O=6;U.2P=6;U.3H=j}$.1p(2D.3f,{2y:T(a){7(1v.W==0){S U.3C}U.3C=a;S U},2G:T(a){7(1v.W==0){S U.3D}U.3D=a;S U},2H:T(a){7(1v.W==0){S U.3E}U.3E=a;S U},1E:T(a,b,c){7(1v.W==0){S U.3F}U.3F=[a,b,c];S U},3z:T(a,b,c){7(1v.W==0){S(!U.2L&&!U.2M&&!U.2N?6:{12:U.2L,3A:U.2M,2A:U.2N})}U.2L=a;U.2M=b;U.2N=c;S U},27:T(a){7(1v.W==0){S U.3G}U.3G=a;S U},1C:T(a,b){7(1v.W==0){S(!U.2O&&!U.2P?6:{12:U.2O,W:U.2P})}U.2O=a;U.2P=b;S U},1G:T(a,b,c,d,e,f,g){7(1v.W==0){S U.3H}U.3H=3u(a,b,c,d,e,f,g);S U}});T 3u(a,b,c,d,e,f,g){7(Z a==\'1L\'){S a}7(Z b==\'1o\'){g=e;f=d;e=c;d=b;c=\'\';b=\'\'}7(Z b==\'1N\'){g=d;f=c;e=b;d=0;c=\'\';b=\'\'}7(Z c==\'1o\'){g=f;f=e;e=d;d=c;c=\'\'}7(Z c==\'1N\'){g=e;f=d;e=c;d=0;c=\'\'}7(Z d==\'1N\'){g=f;f=e;e=d;d=0}S{1e:a,4d:b||\'\',4i:c||\'\',4e:d||\'\',4h:e||1g,4f:f||1g,4g:g||1g}}T 3h(a,b){$.1p(a,b);11(5 c 3l b){7(b[c]==6){a[c]=6}}S a}$.7P.Y=T(a){5 b=7Q.3f.48.7R(1v,1);7(a==\'7S\'){S $.Y[\'25\'+a+\'1Q\'].1P($.Y,[U[0]].4R(b))}S U.1u(T(){7(Z a==\'1c\'){$.Y[\'25\'+a+\'1Q\'].1P($.Y,[U].4R(b))}1b{$.Y.4n(U,a)}})};$.Y=1Z 1Q()})(7T);',62,490,'|||||var|null|if|||||||||||||||||||||||||||||||||||||||||||||||return|function|this||length|series|gchart|typeof||for|color|isArray|data|||Math|minValue|substr|maxValue|else|string|coords|type|100|false|push|width|height|fillColor|join|offsets|min|number|extend|_numeric|attr|max|calculate|each|arguments|lineThickness|lineSegments|charAt|dataLabels|ranges|extension|ticks|label|range|_defaults|format|axes|mapColors|text|isNaN|object|toString|boolean|chartshape|apply|GChart|legendOrder|visibleSeries|barWidth|mapRegions|qrECLevel|qrMargin|map|markerClassName|new||round|angle|colorPoints|name|_|parseInt|drawing|_src|_calculateMinValue|_calculateMaxValue|opacity|legend|legendSize|encoding|gridSize|gridLine|gridOffsets|barSpacing|barGroupSpacing|mapDefaultColor|onLoad|000000|lxy|p3|qr|vertical|lineSegmentLine|lineSegmentGap|match|true|seriesForXYLines|find|chco|axis|item|size|priority|position|GChartAxis|encodeURIComponent|chart|labels|positions|every|exec|99999999|_color|_alignment|_size|_tickColor|_tickLength|png|titleColor|titleSize|normal|markers|icons|barZeroPoint|pieOrientation|mapArea|world|lc|ls|bhs|bvs|bhg|bvg|pc|venn|scatter|rs|meter|gom|qrCode|tx|left|prototype|barWidthRelative|extendRemove|split|inArray|chdl|in|255|start|end|shape|positioned|placement|all|zIndex|initNumberFormat|css|_updateChart|floor|chl|style|alignment|form|_axis|_labels|_positions|_range|_drawing|_format|usePost|margins|title|backgroundColor|chartColor|pie3D|blue|red|provideJSON|008080|gray|808080|line|sparkline|horizontal|90|center|centre||right|lt|top|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789||parseFloat|point|slice|chls|of|striped|numberFormat|prefix|precision|zeroes|separators|showX|suffix|case|RECT|break|_insidePolygon|_attachGChart|is|empty|_generateChart|_textEncoding|1000|300000|chs|chld|chd|chp|chtt|indexOf|http|apis|google|com|chof|_addAxes|_addMarkers|_addIcons|chxl|replace|iframe|contents|_normaliseRects|_textEncode|_scaledEncode|_simpleEncode|_extendedEncode|concat|Hello|World|bebebe|gChart|aqua|black|0000ff|fuchsia|ff00ff|green|008000|grey|lime|00ff00|maroon|800000|navy|000080|olive|808000|orange|ffa500|purple|800080|ff0000|silver|c0c0c0|teal|transparent|00000000|white|ffffff|yellow|ffff00|lineXY|barHoriz|barVert|barHorizGrouped|barVertGrouped|pie|pieConcentric|radar|radarCurved|formula|annotation|arrow|candlestick|circle|cross|diamond|down|errorbar|flag|financial|horizbar|plus|rectangle|sparkfill|sparkslice|square|behind|below|above|inFront|diagonalDown|diagonalUp|dd|du|both|reverse|||automatic|barbase||barcenter|barcentre|bartop|bottom|middle|hasGChart|123|barWidthAuto|formatFloat|formatPercent|formatScientific|formatCurrency|setDefaults|seriesFromCsv|seriesFromXml|browser|msie|ActiveXObject|Microsoft|XMLDOM|validateOnParse|resolveExternals|loadXML|try|catch|lineXYSeries|throw|Value|out|Fa|f0|substring|gradient|stripe|marker|icon|findRegion|target|offset|pageX|pageY|switch|POLY|addClass|_changeGChart|_destroyGChart|removeClass|removeData|Encoding|440|220|chma|choe|chtm|180|PI|chbh|chts|bg|chf|chg|chdlp|cht|chxt|chxp|chxr|chxs|chxtc|makeArray|AfNt|005|chm|ds|dp|py|po|chem|action|random|1e8|method|POST|while|input|hidden|value|decodeURIComponent|appendTo|open|write|close|show|submit|Image|load|img|remove|append|getJSON|json|callback|src|_scaledEncoding|chds|_simpleEncoding|_extendedEncoding|4095|__|fn|Array|call|current|jQuery'.split('|'),0,{}))