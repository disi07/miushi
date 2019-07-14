let BrowserDetect = { 
  init: function () { 
  this.browser = this.searchString(this.dataBrowser) || 'Неизвестный браузер'; 
  this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'Неизвестная версия браузера'; 
  this.OS = this.searchString(this.dataOS) || 'Неизвестная ОС'; 
}, 
  searchString: function (data) { 
    for (let i = 0; i < data.length; i++) { 
      let dataString = data[i].string; 
      let dataProp = data[i].prop; 
      this.versionSearchString = data[i].versionSearch || data[i].identity; 
    if (dataString) { 
      if (dataString.indexOf(data[i].subString) != -1) 
      return data[i].identity; 
    } else if (dataProp) 
      return data[i].identity; 
    } 
  }, 
  searchVersion: function (dataString) { 
    let index = dataString.indexOf(this.versionSearchString); 
    if (index == -1) return; 
    return parseFloat(dataString.substring(index+this.versionSearchString.length+1)); 
  }, 
  dataBrowser: [ 
    { 
      string: navigator.userAgent, 
      subString: 'Chrome', 
      identity: 'Chrome' 
    }, 
    { 
      string: navigator.userAgent, 
      subString: 'OmniWeb', 
      versionSearch: 'OmniWeb/', 
      identity: 'OmniWeb' 
    }, 
    { 
      string: navigator.vendor, 
      subString: 'Apple', 
      identity: 'Safari', 
      versionSearch: 'Version' 
    }, 
    { 
      prop: window.opera, 
      identity: 'Opera', 
      versionSearch: 'Version' 
    }, 
    { 
      string: navigator.vendor, 
      subString: 'iCab', 
      identity: 'iCab' 
    }, 
    { 
      string: navigator.vendor, 
      subString: 'KDE', 
      identity: 'Konqueror' 
    }, 
    { 
      string: navigator.userAgent, 
      subString: 'Firefox', 
      identity: 'Firefox' 
    }, 
    { 
      string: navigator.vendor, 
      subString: 'Camino', 
      identity: 'Camino' 
    }, 
    {  
    /* For Newer Netscapes (6+) */ 
      string: navigator.userAgent, 
      subString: 'Netscape', 
      identity: 'Netscape' 
    }, 
    { 
      string: navigator.userAgent, 
      subString: 'MSIE', 
      identity: 'Internet Explorer', 
      versionSearch: 'MSIE' 
    }, 
    { 
      string: navigator.userAgent, 
      subString: 'Gecko', 
      identity: 'Mozilla', 
      versionSearch: 'rv' 
    }, 
    {  
    /* For Older Netscapes (4-) */ 
      string: navigator.userAgent, 
      subString: 'Mozilla', 
      identity: 'Netscape', 
      versionSearch: 'Mozilla' 
    } 
    ], 
    dataOS : [ 
    { 
      string: navigator.platform, 
      subString: 'Win', 
      identity: 'Windows' 
    }, 
    { 
      string: navigator.platform, 
      subString: 'Mac', 
      identity: 'Mac' 
    }, 
    { 
      string: navigator.userAgent, 
      subString: 'iPhone', 
      identity: 'iPhone/iPod' 
    }, 
    { 
      string: navigator.platform, 
      subString: 'Linux', 
      identity: 'Linux' 
    } 
  ] 
}; 
BrowserDetect.init(); 

// Отсеиваем браузеры и их версии, которые не поддерживают формат WEBP

let browser;

if (BrowserDetect.browser === 'Mozilla' || BrowserDetect.browser === 'Safari' 
  || BrowserDetect.browser === 'BlackBerry' || BrowserDetect.browser === 'MSIE') {
  browser = false;
} else if (BrowserDetect.browser === 'Firefox' && BrowserDetect.version <= 64) {
  browser = false;
} else if (BrowserDetect.browser === 'Edge' && BrowserDetect.version <= 17) {
  browser = false;
} else if (BrowserDetect.browser === 'Неизвестный браузер' && BrowserDetect.version === 'Неизвестная версия браузера') {
  browser = false;
} else {
  browser = true;
}

// if (browser) {
//   console.log('Браузер подходит');
// } else {
//   console.log('Браузер не подходит');
// }

let scrWidth = window.screen.availWidth;

if (scrWidth < 425 && browser === true) {
  console.log('Браузер подходит, мобильный');
} else if (scrWidth < 1170 && browser === true) {
  console.log('Браузер подходит, планшет');
} else if (scrWidth >= 1170 && browser === true) {
  console.log('Браузер подходит, десктоп');
} else {
  console.log('Браузер не подходит слайдер');
}

window.addEventListener('resize', () => {
  scrWidth = window.screen.availWidth;

  if (scrWidth < 425 && browser === true) {
    console.log('Браузер подходит слайдер ресайз, мобильный');
  } else if (scrWidth < 1170 && browser === true) {
    console.log('Браузер подходит слайдер ресайз, планшет');
  } else if (scrWidth >= 1170 && browser === true) {
    console.log('Браузер подходит слайдер ресайз, десктоп');
  } else {
    console.log('Браузер не подходит слайдер ресайз');
  }
});

// let imagesSrc = '../../img/desktop/slides/slide-1--desktop@1x.jpg';

// let currentImg = document.querySelector('.slide');
// console.log(currentImg);

// currentImg.style.backgroundImage = "url('../../img/desktop/slides/slide-1--desktop@1x.jpg')";