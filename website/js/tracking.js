function getParam(p) {
    var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function addUTM() {
    var utmParams = {
        utm_source: getParam('utm_source'),
        utm_medium: getParam('utm_medium'),
        utm_campaign: getParam('utm_campaign'),
        utm_term: getParam('utm_term'),
        utm_content: getParam('utm_content'),
    };
    if ( !Cookies.get('apn_utm_data')) {
        if(utmParams.utm_source || utmParams.utm_medium || utmParams.utm_campaign || utmParams.utm_term || utmParams.utm_content){
            Cookies.set('apn_utm_data', JSON.stringify(utmParams), { expires: 90 });
        }else{
            Cookies.set('apn_utm_data', '0', { expires: 90 });
        }
    }
    utmData = Cookies.get('apn_utm_data') && Cookies.get('apn_utm_data') !== '0' ? JSON.parse(Cookies.get('apn_utm_data')) : {};
}

function getGoogleCid(){
    var match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
    var raw = (match) ? decodeURIComponent(match[1]) : null;
    if (raw){match = raw.match(/(\d+\.\d+)$/);}
    var gacid = (match) ? match[1] : null;
    return gacid || '';
}

function addLandingUrl() {
    if (!Cookies.get('landing_page_url')) {
        Cookies.set('landing_page_url', window.location.href, { expires: 90 });
    }
    if ((!Cookies.get('referrer_url') || Cookies.get('referrer_url')=='') && document.referrer!='apn.com') {
        Cookies.set('referrer_url', document.referrer, { expires: 90 });
    }else if(!Cookies.get('referrer_url') || Cookies.get('referrer_url')==''){
        Cookies.set('referrer_url', window.location.hostname, { expires: 90 });
    }
    if( typeof sessionStorage[ 'landing_page_url_last' ] === "undefined" ){
        sessionStorage['landing_page_url_last'] = window.location.href;
    }
    if( (typeof sessionStorage[ 'referrer_url_last' ] === "undefined" || sessionStorage[ 'referrer_url_last' ]=='' ) && document.referrer!='apn.com') {
        sessionStorage['referrer_url_last'] = document.referrer;
    }else if( typeof sessionStorage[ 'referrer_url_last' ] === "undefined" ||  sessionStorage[ 'referrer_url_last' ] == ""){
        sessionStorage['referrer_url_last'] = window.location.hostname;
    }
}

function addCustomVariables() {
    custom_variables = [
        { name: "landing_page_url", value: Cookies.get('landing_page_url') ? Cookies.get('landing_page_url') : '' },
        { name: "landing_page_url_last", value: sessionStorage[ 'landing_page_url_last' ] ? sessionStorage[ 'landing_page_url_last' ] : ''  },
        { name: "referrer_url", value: Cookies.get('referrer_url') ? Cookies.get('referrer_url') : '' },
        { name: "referrer_url_last", value: sessionStorage[ 'referrer_url_last' ] ? sessionStorage[ 'referrer_url_last' ] : ''  },
        { name: "custom_google_client_id", value: getGoogleCid() },
    ];
    if(typeof utmData !== 'undefined') {
        for (const property in utmData) {
            custom_variables.push({name: property, value: utmData[property]});
        }
    }
}

var __ctm_cvars = __ctm_cvars || [];
__ctm_cvars.push({
    landing_page_url: Cookies.get('landing_page_url') ? Cookies.get('landing_page_url') : window.location.href,
    landing_page_url_last: sessionStorage[ 'landing_page_url_last' ] ? sessionStorage[ 'landing_page_url_last' ] : window.location.href,
    referrer_url: Cookies.get('referrer_url') ? Cookies.get('referrer_url') : document.referrer,
    referrer_url_last: sessionStorage[ 'referrer_url_last' ] ? sessionStorage[ 'referrer_url_last' ] : window.location.hostname,
    converting_page_url: window.location.href,
    custom_google_client_id: getGoogleCid(),
});

addUTM();
addLandingUrl();
addCustomVariables();
setInterval(function(){
    if(!Cookies.get('google_cid') || Cookies.get('google_cid')=='') {
        Cookies.set('google_cid', getGoogleCid(), { expires: 90 });
    }
    var landing_page_url      = Cookies.get('landing_page_url');
    var referrer_url          = Cookies.get('referrer_url');
    var referrer_url_last     = sessionStorage.getItem("referrer_url_last");
    var landing_page_url_last = sessionStorage.getItem("landing_page_url_last");
    var current_url           = window.location.href;
    var converting_url        = decodeURI(current_url);
    jQuery( "textarea" ).each(function( index ) {
        var textarea_name = jQuery(this).attr("name");
        if( textarea_name == "field[3]" ) {
            jQuery(this).html( landing_page_url );
            jQuery(this).val( landing_page_url );
        } else if( textarea_name == "field[4]" ) {
            jQuery(this).html( landing_page_url_last );
            jQuery(this).val( landing_page_url_last );
        } else if( textarea_name == "field[5]" ) {
            jQuery(this).html( referrer_url );
            jQuery(this).val( referrer_url );
        } else if( textarea_name == "field[6]" ) {
            jQuery(this).html( referrer_url_last );
            jQuery(this).val( referrer_url_last );
        } else if( textarea_name == "field[2]" ) {
            jQuery(this).html( converting_url );
            jQuery(this).val( converting_url );
        }
    });
}, 3000);