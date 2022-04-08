_satellite.pushAsyncScript(function(event, target, $variables){
  function doubleClick(src) {
  var axel = Math.random() + "",
    a = axel * 10000000000000,
    dclkFrame = document.createElement('iframe');
  dclkFrame.style.display = "none";
  dclkFrame.style.width = "1";
  dclkFrame.style.height = "1";
  dclkFrame.src = src + a + '?';
  //console.log(src);
  document.body.appendChild(dclkFrame);
}

var
  loadScript;

loadScript = function (src, onload) {

  var
    d = document,
    s = d.createElement('script'),
    first,
    parent,
    called = false;

  s.src = src;
  s.async = true;

  // if there is an onload callback
  if (onload) {
    s.onload = s.onreadystatechange = function (e) {
      var
        readyState = this.readyState;
      if (
        // only call the callback once
        !called &&
        (
          // either readyState doesn't exist
          !readyState ||
          // or it is set to complete or loaded
          (
            readyState === 'complete' ||
            readyState === 'loaded'
          )
        )
      ) {
        called = true;
        onload(e);
      }
    };
  }

  // find the first script
  first = d.getElementsByTagName('script')[0];

  // if we found the first script tag and it has a parentNode, insert the script
  if (
    first &&
    first.parentNode
  ) {
    parent = first.parentNode;
    parent.insertBefore(s, first);

    // if we didn't find it, try inserting into the head
  } else {
    parent = d.head;

    // if we found the head
    if (parent) {
      parent.appendChild(s);

      // if we didn't find the head, try the body
    } else if (d.body) {
      parent = d.body;
      parent.appendChild(s);

      // otherwise indicate we don't know where we can put this
    } else {
      // was not able to fire pixel...
    }
  }
};

loadScript('//www.googletagmanager.com/gtag/js?id=AW-987390658', function () {
  window.gTagdataLayer = window.dataLayer || [];

  function gtag() {
    gTagdataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'AW-987390658');
  gtag('config', 'AW-1004494713');
  gtag('config', 'AW-983956512');

});

//console.log('PageLoad - All Pages ThirdParty Tags');
var w = window,
  loc = w.location,
  host = loc.hostname,
  path = loc.pathname,
  href = unescape(unescape(unescape(loc.href))),
  referrer = unescape(unescape(unescape(document.referrer))),
  prod_dnld = '/products/download/',
  IPR_exclude = new RegExp(/^\/us\/en\/landing\/(acrobat-pro-ipm-pricing|acrobat-pro-in-app|pdf-pack-combine|exportpdf-pricing-b|pdf-pack|adobe-send-and-track|edit-pricing|reader-organize|reader-protect|acrobat-pricing|it-resources-alt|edit-pricing-sem|pricing-acrobat-trial|compare-files-pricing|pdf-pack-reader|exportpdf-pricing-reader).html/), // For acrobat pages
  isIpercept = false,
  isStockDisable = false,
  stockDomain = _satellite.getVar('isSite_AdobeStock'),
  index = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };

if (_satellite._readCookie("ff_1559257598") == 1 && stockDomain) {
  isStockDisable = true;
}

// Get Path
function getPathFromUrl(url) {
  return encodeURIComponent(url.split(/[?#]/)[0]);
}

// AdCloud Library
var script = document.createElement('script');
script.src = "https://www.everestjs.net/static/le/last-event-tag-latest.min.js";
document.body.appendChild(script);


if (!index(path, '/unsubscribe.html') && !index(path, '/wam/')) {
  /*Start of iPerceptions */
  if ((_satellite.getQueryParam("dtm_disable_ip") && _satellite.getQueryParam("dtm_disable_ip") === "1") || SL._readCookie("ff_7265981746") === "0") {
    isIpercept = false;
  } else if (path === '/ca/creativecloud/plans.html') {
    isIpercept = true;
  } else if (
    (
      (_satellite.getVar('isSite_AdobeDotCom') && !index(path, '/creativecloud/plans.html')) ||
      (_satellite.getVar('isSite_AdobeHelpX')) ||
      (_satellite.getVar('isSite_AdobeForums')) ||
      (index(host, 'www.cmo.com')) ||
      (_satellite.getVar('isSite_Acrobat') && !index(path, '/us/en/free-trial-download-b') && !IPR_exclude.test(path))) ||
    ((index(href, 'creative.adobe.com/')) &&
      ((index(href, '/plans')) ||
        (index(href, '/plans/photography')) ||
        (index(href, '/starter')) ||
        (index(href, prod_dnld + 'ccpp/starter')) ||
        (index(href, prod_dnld + 'photoshop/starter')) ||
        (index(href, prod_dnld + 'indesign/starter')) ||
        (index(href, prod_dnld + 'illustrator'))))) {
    isIpercept = true;
  }
  if(path.search (/\/((index2|index).html)|(\/content)\/(www|cc|offers-(health-check|homepage))\/us\/en\/(poc|test|homepage\/tests)?/) !== -1){ //ENB-2944
    isIpercept = false;  
  }
  if (isIpercept) {
    /* 2011-2014 iPerceptions, Inc. All rights reserved. Do not distribute.iPerceptions provides this code 'as is' without warranty of any kind, either express or implied. */
    window.iperceptionskey = '9AF84A3D-BB1E-4688-B83F-2FFD57725918';
    (function () {
      var a = document.createElement('script'),
        b = document.getElementsByTagName('body')[0];
      a.type = 'text/javascript';
      a.async = true;
      a.src = '//universal.iperceptions.com/wrapper.js';
      b.appendChild(a);
    })();
  }
  /*End of iPerceptions */


  /*Start of Universal IDSYNC & FB-AMO sync pixel */
  if (_satellite.getVar("useModule_DC") && !index(host, '.acrobat.com') &&
    !index(host, 'console.adobe.com') && !index(host, 'admintribe.com')) {
    //console.log('PageLoad - All Pages ThirdParty Tags');
    var signed_status = '',
      guid = '',
      uuid = '',
      mcid = '',
      loc = '',
      faas_id = _satellite.getQueryParam('faas_unique_submission_id') || '', // for u8 parameter
      p_name = '';


    _satellite._poll(function () {
      if (typeof s_adbadobenonacdc !== 'undefined' && (_satellite.getVar('isSite_cloudAcrobatLegacy') || (typeof adobeIMS === 'undefined'))) {
        signed_status = s_adbadobenonacdc.prop27;

        guid = s_adbadobenonacdc.eVar12 || '';
      }

      if (typeof adobeIMS !== 'undefined' && adobeIMS) {
        signed_status = adobeIMS.isSignedInUser() ? "SignedIn" : "NotSignedIn";
        var signedIn = adobeIMS.isSignedInUser(),
          profile = adobeIMS.getUserProfile(),
          userId = profile && profile.userId && profile.userId.replace('@AdobeID', '');

        guid = (signedIn && profile && userId ? userId : '');
      }
      // uuid
      uuid = _satellite.readCookie('aam_uuid') || '';
      //mcid
      if (typeof s_adbadobenonacdc !== 'undefined' && s_adbadobenonacdc && s_adbadobenonacdc.marketingCloudVisitorID !== undefined &&
        s_adbadobenonacdc.marketingCloudVisitorID) {
        mcid = s_adbadobenonacdc.marketingCloudVisitorID;
      }
      //Adobe Analytics page name & locale
      p_name = _satellite.getVar('adbadobenonacdc_pageName') || s_adbadobenonacdc.pageName;
      loc = s_adbadobenonacdc.prop4;
      /*FB Global Pageview Pixel*/

      if (!stockDomain) {
     function fbPageview(){
      fbq('init', '1772359959706965');
      fbq('track', 'PageView', { userType: signed_status, languageLocale: loc, pageName: p_name });      
    }
        if (typeof fbq === 'undefined') {
          ! function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      fbPageview();
        }
    _satellite._poll(function () {
      fbPageview();      
    }, [function () {
      if(typeof fbq !== 'undefined' && typeof fbq.instance !== 'undefined' && typeof fbq.instance.pixelsByID[1772359959706965] === 'undefined'){
        return true;
        }
    }], {
      timeout: 1000,
      interval: 100
    });

      /*Start Twitter Global pixel*/
        ! function (e, t, n, s, u, a) {
          e.twq || (s = e.twq = function () {
              s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
            },
            s.version = '1.1',
            s.queue = [],
            u = t.createElement(n),
            u.async = !0,
            u.src = '//static.ads-twitter.com/uwt.js',
            a = t.getElementsByTagName(n)[0],
            a.parentNode.insertBefore(u, a))
        }(window, document, 'script');
        // Insert Twitter Pixel ID and Standard Event data below
        twq('init', 'o1w4k');
        twq('track', 'PageView');
      /*End Twitter Global pixel*/
      }

      /*End Of FB Pixel*/

      if (mcid && p_name && guid !== 'undefined' && !isStockDisable) {
        guid = guid.replace(/@.*/i, "");
        doubleClick('https://8392543.fls.doubleclick.net/activityi;src=8392543;type=idsyn0;cat=uuidm0;u1=' + signed_status + ';u2=' + uuid + ';u3=' + mcid + ';u4=;u5=' + guid + ';u6=' + p_name + ';u7=;u8=' + faas_id + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=');

        var ftRandom = Math.random() * 1000000,
          Flashiframe = document.createElement('iframe');
        Flashiframe.style.display = "none";
        Flashiframe.style.width = "1px";
        Flashiframe.style.height = "1px";
        Flashiframe.src = window.location.protocol + '//servedby.flashtalking.com/container/10943;85008;8362;iframe/?spotName=Variables_Tag&ftXRef=&U1=' + mcid + '&U2=' + guid + '&U3=' + faas_id + '&U4=' + p_name + '&U5=&U6=&cachebuster=' + ftRandom;
        document.body.appendChild(Flashiframe);

        var ftRandom = Math.random() * 1000000,
          FlashONETAG = document.createElement('iframe');
        FlashONETAG.style.display = "none";
        FlashONETAG.style.width = "1px";
        FlashONETAG.style.height = "1px";
        FlashONETAG.src = "//servedby.flashtalking.com/container/13539;99030;10307;iframe/?ftXRef=&ftXValue=&ftXType=&ftXName=&ftXNumItems=&ftXCurrency=&U1=" + uuid + "&U2=" + guid + "&U3=" + mcid + "&U4=" + p_name + "&U5=&U6=&U7=&U8=&U9=&U10=&U11=" + faas_id + "&U12=&U13=&U14=&U15=&U16=&U17=&U18=&U19=&U20=&ft_referrer=" + getPathFromUrl(href) + "&ns=" + getPathFromUrl(referrer) + "&cb=" + ftRandom;
        document.body.appendChild(FlashONETAG);

        doubleClick('https://1295336.fls.doubleclick.net/activityi;src=1295336;type=idsync;cat=uuidm0;u1=' + signed_status + ';u2=' + uuid + ';u3=' + mcid + ';u4=;u5=' + guid + ';u6=' + p_name + ';u7=;u8=' + faas_id + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=');
      }

    }, [function () {
      if ((typeof adobeIMS !== 'undefined' && adobeIMS) ||
        (typeof s_adbadobenonacdc !== 'undefined' && s_adbadobenonacdc && s_adbadobenonacdc.prop27 !== 'undefined' && typeof _satellite.getVar('isSite_cloudAcrobatLegacy') !== 'undefined' && s_adbadobenonacdc.prop27 !== '')) {
        return true;
      }
    }], {
      timeout: 10000,
      interval: 200
    });


    //AdCloud Pixel
    _satellite._poll(function () {
      //console.log('project echo' + s_adbadobenonacdc.visitor.marketingCloudOrgID);
      AdCloudEvent(s_adbadobenonacdc.visitor.marketingCloudOrgID, s_adbadobenonacdc.account);
    }, [function () {
      if (typeof s_adbadobenonacdc.visitor.marketingCloudOrgID !== 'undefined' && typeof s_adbadobenonacdc.account !== 'undefined' && typeof AdCloudEvent == 'function') {
        return true;
      }
    }], {
      timeout: 10000,
      interval: 200
    });

    //Start of FB-AMO Sync pixel
    if ((typeof (_satellite.readCookie('Fb-Syc')) === 'undefined' || _satellite.readCookie('Fb-Syc') === '') && !isStockDisable) {
      document.cookie = "Fb-Syc=1;expires=;path=/;domain=.adobe.com;";
      FB_SyncPixel = new Image();
      FB_SyncPixel.src = '//sync-tm.everesttech.net/upi/pid/r7ifn0SL?redir=https%3A%2F%2Fwww.facebook.com%2Ffr%2Fb.php%3Fp%3D1531105787105294%26e%3D%24%7BTM_USER_ID%7D%26t%3D2592000%26o%3D0';
      FB_SyncPixel.width = "1";
      FB_SyncPixel.height = "1";
      FB_SyncPixel.style.display = 'none';
    } //End of FB-AMO Sync pixel

    /*Start of Linkedin */
    if (!isStockDisable) {
      if (path === '/opinion/articles/2018/5/9/engaging-consumers-starts-with-understanding-them.html' ||
        path === '/features/articles/2017/12/21/how-apacs-biggest-retailers-have-responded-to-disruption.html' ||
        path === '/features/articles/2018/3/19/apac-buys-into-mobile-payments.html' ||
        path === '/interviews/articles/2018/1/24/the-cmocom-interview-clare-smith-roadshow-films.html' ||
        path === '/features/articles/2018/2/12/apac-mobile-partnerships.html') {
        _linkedin_partner_id = "233107";
      } else if (host === 'acrobat.adobe.com' && path === '/de/de/mobile/scanner-app.html') {
        _linkedin_partner_id = "1371705";
      } else {
        _linkedin_partner_id = "872";
      }

      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);

      (function () {
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })();
    }

    /*End of Linkedin */
  }
  /*End of Universal IDSYNC, Linkedin Global  & FB-AMO sync pixel */

  if (_satellite.getVar('useTool_clicktale')) {
    (function (win, doc) {
      var scriptElement;
      if (typeof (win.ClickTaleCreateDOMElement) != "function") {
        win.ClickTaleCreateDOMElement = function (tagName) {
          if (doc.createElementNS) {
            return doc.createElementNS('http://www.w3.org/1999/xhtml', tagName);
          }
          return doc.createElement(tagName);
        };
      }
      win.WRInitTime = (new Date()).getTime();
      scriptElement = ClickTaleCreateDOMElement('script');
      scriptElement.type = "text/javascript";
      scriptElement.src = "//cdnssl.clicktale.net/www20/ptc/544fc825-311a-44c5-86f0-70581a36c216.js";
      doc.getElementsByTagName('body')[0].appendChild(scriptElement);
    })(window, document);
  }
  /*End of Clicktale */
}

/*Start of DoubleClick on PageLoad */

/*!  2019-05-22 21:34:35 */

!function(){var t=window,e=document,d=t.location,i=d.hostname.toLowerCase(),c=d.pathname,a=(d.href,d.hash,function(t,e){return-1!==t.indexOf(e)}),r=function(){},o=r.prototype;o.iframe=function(t){var d=1e13*Math.random(),i=["https://",t.id,".fls.doubleclick.net/activityi",";src="+t.id,";type="+t.t,";cat="+t.c,t.dc_lat?";dc_lat=":"",t.dc_rdid?";dc_rdid=":"",t.tfcdt?";tag_for_child_directed_treatment=":"",t.tfua?";tfua=;npa=;":"",t.q?";qty="+t.q:"",t.$?";cost="+t.$:"",t.u?(0!==t.u.indexOf(";")?";":"")+t.u:"",1===t.o?";ord="+d:2===t.o?";ord=1;num="+d:3===t.o?";ord="+(t.s||d):4===t.o?";ord="+(t.r||d):";ord="+d].join(""),c=document.createElement("iframe");c.src=i,c.width=1,c.height=1,c.style.display="none",e.body.appendChild(c)},o.img=function(){};var m,n,l,s=new r;if(m="2685741","www.adobe.com"!==i&&"www.stage.adobe.com"!==i||-1===c.search(/\/(au|nz|tw|kr|in|hk_zh|sea)\/information\/smb-cloud-solutions.html/)||s.iframe({id:m,t:"smb-cs",c:"cctla00",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),m="1295336","www.adobe.com"===i||"www.stage.adobe.com"===i){n="adobe00",-1!==c.search(/^\/(nz\/|au\/)creativecloud\/business\/teams.html/)&&s.iframe({id:"2685741",t:"remar339",c:"cctla0",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:1}),n="ccfor0","/creativecloud/teams/cc-for-teams.html"===c&&s.iframe({id:m,t:n,c:"ccfor0",o:2}),"/creativecloud/business/teams/creative-pros.html"===c&&s.iframe({id:m,t:n,c:"creat001",o:2}),"/creativecloud/business/teams/it.html"===c&&s.iframe({id:m,t:n,c:"creat000",o:2}),"/creativecloud/business/teams/managers.html"===c&&s.iframe({id:m,t:n,c:"creat00",o:2});var u=new Date;u.setTime(u.getTime()+31536e6),n="adobe994",-1===c.indexOf("/creativecloud/beginners.html")||_satellite.readCookie("dfaCBp")||(s.iframe({id:m,t:n,c:"ccbegin",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:1}),document.cookie="dfaCBp=1; expires="+u+"; domain=.adobe.com; path=/"),n="edu",-1!==c.search(/^\/(au|nz|sea|in)\/landing\/shortcuts.html/)&&-1!==c.indexOf("/nz/")&&s.iframe({id:m,t:n,c:"nz_ed0",dc_lat:!0,dc_rdid:!0,tfua:!0,o:2}),n="ccpho0","/products/lightroom-mobile.html"===c&&s.iframe({id:m,t:n,c:"ccp-l002",o:2}),"/products/photoshop-lightroom/features.html"===c&&s.iframe({id:m,t:n,c:"ccp-l001",o:2}),n="digit786","#best-buy"===window.location.hash&&"/enterprise/experience-makers.html"===c&&s.iframe({id:m,t:n,c:"adobe004",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"#caesars"===window.location.hash&&"/enterprise/experience-makers.html"===c&&s.iframe({id:m,t:n,c:"adobe005",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"#carnival"===window.location.hash&&"/enterprise/experience-makers.html"===c&&s.iframe({id:m,t:n,c:"adobe006",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"#franke"===window.location.hash&&"/enterprise/experience-makers.html"===c&&s.iframe({id:m,t:n,c:"adobe007",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"#holland"===window.location.hash&&"/enterprise/experience-makers.html"===c&&s.iframe({id:m,t:n,c:"adobe008",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"#nfl"===window.location.hash&&"/enterprise/experience-makers.html"===c&&s.iframe({id:m,t:n,c:"adobe00-",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"#pandora"===window.location.hash&&"/enterprise/experience-makers.html"===c&&s.iframe({id:m,t:n,c:"adobe00a",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"#princess"===window.location.hash&&"/enterprise/experience-makers.html"===c&&s.iframe({id:m,t:n,c:"adobe00b",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"#stjude"===window.location.hash&&"/enterprise/experience-makers.html"===c&&s.iframe({id:m,t:n,c:"adobe00c",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"#tmobile"===window.location.hash&&"/enterprise/experience-makers.html"===c&&s.iframe({id:m,t:n,c:"adobe00e",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"#ubs"===window.location.hash&&"/enterprise/experience-makers.html"===c&&s.iframe({id:m,t:n,c:"adobe00f",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/experience-cloud/overview.html"===c&&s.iframe({id:m,t:n,c:"adobe00h",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/campaign-management.html"===c&&s.iframe({id:m,t:n,c:"digit678",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/social-media-marketing.html"===c&&s.iframe({id:m,t:n,c:"digit212",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/enterprise-content-management.html"===c&&s.iframe({id:m,t:n,c:"digit146",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/web-analytics.html"===c&&s.iframe({id:m,t:n,c:"digit554",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/testing-targeting.html"===c&&s.iframe({id:m,t:n,c:"digit459",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/data-management-platform.html"===c&&s.iframe({id:m,t:n,c:"digit0",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/customer-experience.html"===c&&s.iframe({id:m,t:n,c:"digit001",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/data-driven-marketing.html"===c&&s.iframe({id:m,t:n,c:"digit002",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/mobile-marketing.html"===c&&s.iframe({id:m,t:n,c:"digit000",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/products/searchcenter.html"===c&&s.iframe({id:m,t:n,c:"digit182",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/sensei.html"===c&&s.iframe({id:m,t:n,c:"digit018",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/data-analytics-cloud/analytics.html"===c&&s.iframe({id:m,t:n,c:"adclo00",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/data-analytics-cloud/audience-manager.html"===c&&s.iframe({id:m,t:n,c:"adclo000",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/campaign.html"===c&&s.iframe({id:m,t:n,c:"adclo001",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/experience-manager.html"===c&&s.iframe({id:m,t:n,c:"adclo002",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/experience-cloud/products.html"===c&&s.iframe({id:m,t:n,c:"adclo007",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/advertising-cloud/media-optimizer/dynamic-creative-optimization.html"===c&&s.iframe({id:m,t:n,c:"adclo00-",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/advertising-cloud/media-optimizer/demand-side-platform.html"===c&&s.iframe({id:m,t:n,c:"adclo009",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/advertising-cloud/media-optimizer/search-advertising-management.html"===c&&s.iframe({id:m,t:n,c:"adclo008",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/primetime.html"===c&&s.iframe({id:m,t:n,c:"adclo004",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/social.html"===c&&s.iframe({id:m,t:n,c:"adclo005",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/target.html"===c&&s.iframe({id:m,t:n,c:"adclo006",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/customer-experience/connected-experiences.html"===c&&s.iframe({id:m,t:n,c:"digit01-",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/customer-experience/content-marketing.html"===c&&s.iframe({id:m,t:n,c:"digit019",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/customer-experience/digital-services-enrollment.html"===c&&s.iframe({id:m,t:n,c:"digit01b",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/customer-experience/retail-experience-driven-commerce.html"===c&&s.iframe({id:m,t:n,c:"digit01a",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/customer-experience/real-time-offer-management.html"===c&&s.iframe({id:m,t:n,c:"digit01c",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/online-marketing-solutions.html"===c&&s.iframe({id:m,t:n,c:"digit00s",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/online-advertising-management.html"===c&&s.iframe({id:m,t:n,c:"digit766",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/solutions/digital-analytics.html"===c&&s.iframe({id:m,t:n,c:"digit554",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/solutions/testing-targeting.html"===c&&s.iframe({id:m,t:n,c:"digit459",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/solutions/web-experience-management.html"===c&&s.iframe({id:m,t:n,c:"digit146",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/solutions/campaign-management.html"===c&&s.iframe({id:m,t:n,c:"digit678",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/cross-channel-marketing.html"===c&&s.iframe({id:m,t:n,c:"digit003",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud.html"===c&&s.iframe({id:m,t:n,c:"exper004",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/service-support/partners.html"===c&&s.iframe({id:m,t:n,c:"digit00h",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/why-adobe-saas.html"===c&&s.iframe({id:m,t:n,c:"digit00c",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/service-support/professional-consulting-training.html"===c&&s.iframe({id:m,t:n,c:"digit00i",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/products/request-consultation/thankyou.html"===c&&s.iframe({id:m,t:n,c:"digit010",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/data-driven-marketing/whole-customer.html"===c&&s.iframe({id:m,t:n,c:"digit00w",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/customer-experience/digital-foundation.html"===c&&s.iframe({id:m,t:n,c:"digit00x",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/cross-channel-marketing/next-best-offer.html"===c&&s.iframe({id:m,t:n,c:"digit012",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/cross-channel-marketing/audience-activation.html"===c&&s.iframe({id:m,t:n,c:"digit013",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/cross-channel-marketing/real-time-interaction-management.html"===c&&s.iframe({id:m,t:n,c:"digit014",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/programmatic-advertising.html"===c&&s.iframe({id:m,t:n,c:"digit00m",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/use-cases.html"===c&&s.iframe({id:m,t:n,c:"digit00n",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/cross-channel-marketing/campaign-orchestration.html"===c&&s.iframe({id:m,t:n,c:"digit00p",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/cross-channel-marketing/email-in-context.html"===c&&s.iframe({id:m,t:n,c:"digit00r",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/cross-channel-marketing/journey-management.html"===c&&s.iframe({id:m,t:n,c:"digit00q",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/digital-marketing-solutions.html"===c&&s.iframe({id:m,t:n,c:"marke00",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/marketing-cloud/primetime-tv-platform.html"===c&&s.iframe({id:m,t:n,c:"digit00",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/advertising-cloud.html"===c&&s.iframe({id:m,t:n,c:"exper002",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/data-analytics-cloud.html"===c&&s.iframe({id:m,t:n,c:"exper003",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),"/enterprise/cloud-platform.html"===c&&s.iframe({id:m,t:n,c:"exper00n",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2})}if(SL.getVar("isSite_AdobeHelpX")&&(n="ccpho0","/creative-cloud/tutorials-photography-jumpstart.html"===c&&s.iframe({id:m,t:n,c:"ccp-l0",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2}),n="retent",n="adobe994","/acrobat.html"===c&&s.iframe({id:m,t:"doccloud",c:"docum003",o:2})),SL.getVar("isSite_Acrobat")){n="docusign",-1!==c.search(/^\/(us|uk|in|au|nz|ca)\/en\/sign\/why-adobe.html/)&&s.iframe({id:m,t:n,c:"adobe0",dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:1}),n="doccloud",a(c,"/us/en/pricing/business-pricing.html")&&(s.iframe({id:m,t:"echos598",c:"echos406",o:2}),s.iframe({id:m,t:n,c:"docum00b",o:2}),s.iframe({id:m,t:n,c:"docum006",o:2})),a(c,"/us/en/acrobat/pdf-creator-create-pdf-files.html")&&s.iframe({id:m,t:n,c:"docum008",o:2}),a(c,"/us/en/documents/contact.html")&&s.iframe({id:m,t:"echos598",c:"EchoS000",o:2}),a(c,"/us/en/acrobat/edit-pdf-convert-pdf-to-office.html")&&s.iframe({id:m,t:n,c:"docum009",o:2}),a(c,"/us/en/documents/for-business.html")&&s.iframe({id:m,t:n,c:"docum00",o:2}),a(c,"/us/en/documents/it-features.html")&&s.iframe({id:m,t:n,c:"acrob0",o:2}),a(c,"/us/en/documents/it-resources.html")&&s.iframe({id:m,t:n,c:"acrob00",o:2}),a(c,"/us/en/pricing/pricing.html")&&s.iframe({id:m,t:n,c:"docum00a",o:2}),a(c,"/us/en/acrobat/e-sign-pdf-files.html")&&s.iframe({id:m,t:n,c:"docum00-",o:2}),a(c,"/us/en/acrobat/work-anywhere.html")&&s.iframe({id:m,t:n,c:"docum002",o:2}),(a(c,"/us/en/documents/enterprise.html")||a(c,"/us/en/documents/for-business.html")||a(c,"/us/en/documents/it-resources.html")||a(c,"/us/en/documents/request-tour.html")||a(c,"/us/en/documents/tour/productivity.html")||a(c,"/us/en/documents/features/productivity.html")||a(c,"/us/en/documents/features/sign-approve.html")||a(c,"/us/en/documents/features/mobile-document-management.html")||a(c,"/us/en/documents/features/manage-control.html")||a(c,"/us/en/documents/integrations.html")||a(c,"/us/en/documents/integrations/salesforce.html")||a(c,"/us/en/documents/integrations/ariba.html")||a(c,"/us/en/documents/integrations/apttus.html")||a(c,"/us/en/documents/integrations/microsoft-dynamic-crm.html")||a(c,"/us/en/documents/integrations/microsoft-sharepoint.html")||a(c,"/us/en/documents/integrations/workday.html"))&&s.iframe({id:m,t:"echos598",c:"EchoS008",o:2}),n="sign";var f=!1;a(c,"/us/en/why-adobe/integrations/microsoft.html")&&(f="adobe018"),a(c,"/us/en/why-adobe/integrations/microsoft-dynamic-crm.html")&&(f="adobe01b"),a(c,"/us/en/why-adobe/integrations/microsoft-office-365.html")&&(f="adobe01d"),a(c,"/us/en/why-adobe/integrations/microsoft-sharepoint.html")&&(f="adobe01f"),a(c,"/us/en/why-adobe/integrations/ariba.html")&&(f="adobe01i"),a(c,"/us/en/sign/how-to/digital-signatures.html")&&(f="adobe00-"),a(c,"/us/en/why-adobe/integrations/apttus.html")&&(f="adobe00h"),a(c,"/us/en/sign/capabilities/sign-send-documents.html")&&(f="adobe00k"),a(c,"/us/en/sign/capabilities/track-manage-documents.html")&&(f="adobe00l"),a(c,"/us/en/sign/capabilities/sign-approve.html")&&(f="adobe00j"),a(c,"/us/en/sign/use-cases/human-resources.html")&&(f="adobe007"),a(c,"/us/en/why-adobe/integrations.html")&&(f="adobe006"),a(c,"/us/en/sign/use-cases/procurement.html")&&(f="adobe009"),a(c,"/us/en/sign/use-cases/sales.html")&&(f="adobe008"),a(c,"/us/en/why-adobe/it-resources.html")&&(f="adobe00i"),a(c,"/us/en/why-adobe/integrations/salesforce.html")&&(f="adobe00f"),a(c,"/us/en/sign/use-cases/digital-enrollment.html")&&(f="adobe00a"),a(c,"/us/en/why-adobe/trust-center.html")&&(f="adobe00d"),a(c,"/us/en/sign/use-cases.html")&&(f="adobe000"),a(c,"/us/en/why-adobe/integrations/workday.html")&&(f="adobe00g"),a(c,"/us/en/why-adobe/business-partners.html")&&(f="adobe010"),a(c,"/us/en/sign/use-cases/legal.html")&&(f="adobe012"),a(c,"/us/en/why-adobe/system-status.html")&&(f="adobe013"),f&&s.iframe({id:m,t:n,c:f,dc_lat:!0,dc_rdid:!0,tfcdt:!0,o:2})}m="4167672","www.adobe.com"!==i&&"www.stage.adobe.com"!==i||("/de/marketing-cloud.html"===c&&s.iframe({id:m,t:"tl_de",c:"tl_de00a",u:";u20=170315"}),"/uk/marketing-cloud.html"===c&&s.iframe({id:m,t:"tl_uk",c:"tl_uk003",u:";u20=170315"}),a(c,"/de/creativecloud/business/teams/creative-pros.html")&&s.iframe({id:m,t:"cct_de",c:"cct_d0",u:";u20=210815"})),SL.getVar("isSite_AdobeHelpX")&&"/acrobat.html"===c&&s.iframe({id:m,t:"dc_uk",c:"dc_uk004",u:";u20=170315"}),SL.getVar("useTool_adbadobestock")&&"/uk/"===c&&s.iframe({id:m,t:"uk_stock",c:"cc_uk0",u:";u20=090615"}),SL.getVar("isSite_Acrobat")&&(n="dc_uk",l="u20=170315",a(c,"/uk/en/acrobat.html")&&s.iframe({id:m,t:n,c:"dc_uk0",u:l}),a(c,"/uk/en/pricing/business-pricing.html")&&s.iframe({id:m,t:n,c:"dc_uk00a",u:l}),a(c,"/uk/en/acrobat/pdf-creator-create-pdf-files.html")&&s.iframe({id:m,t:n,c:"dc_uk00-",u:l}),a(c,"/uk/en/acrobat/edit-pdf-convert-pdf-to-office.html")&&s.iframe({id:m,t:n,c:"dc_uk008",u:l}),a(c,"/uk/en/documents/for-business.html")&&s.iframe({id:m,t:n,c:"dc_uk000",u:l}),("/uk/en/"===c||a(c,"/uk/en/index.html"))&&s.iframe({id:m,t:n,c:"dc_uk005",u:l}),a(c,"/uk/en/pricing/pricing.html")&&s.iframe({id:m,t:n,c:"dc_uk00b",u:l}),a(c,"/uk/en/documents/request-tour.html")&&s.iframe({id:m,t:n,c:"dc_uk003",u:l}),a(c,"/uk/en/acrobat/e-sign-pdf-files.html")&&s.iframe({id:m,t:n,c:"dc_uk009",u:l}),a(c,"/uk/en/acrobat/work-anywhere.html")&&s.iframe({id:m,t:n,c:"dc_uk007",u:l}))}();

/*End of DoubleClick on PageLoad */
});
