System.register(["single-spa","single-spa-layout"],function(y,r){"use strict";var o,a,l,c,p;return{setters:[e=>{o=e.registerApplication,a=e.start},e=>{l=e.constructRoutes,c=e.constructApplications,p=e.constructLayoutEngine}],execute:function(){const e="modulepreload",k=function(n,s){return new URL(n,s).href},v={},m=function(s,L,w){return Promise.resolve().then(()=>s()).catch(i=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=i,window.dispatchEvent(t),!t.defaultPrevented)throw i})},u=l(`<single-spa-router mode="hash">
  <!--

    This is the single-spa Layout Definition for your microfrontends.
    See https://single-spa.js.org/docs/layout-definition/ for more information.

  -->

  <!-- Example layouts you might find helpful:

  <nav>
    <application name="@org/navbar"></application>
  </nav>
  <route path="settings">
    <application name="@org/settings"></application>
  </route>

  -->

  <main>
    <route default>
      <application name="@single-spa/welcome"></application>
    </route>
    <route path="welcome">
      <application name="@single-spa/welcome"></application>
    </route>
  </main>
</single-spa-router>
`),d=c({routes:u,loadApp:({name:n})=>m(()=>r.import(n),void 0,r.meta.url)}),f=p({routes:u,applications:d});d.forEach(o),f.activate(),a()}}});
