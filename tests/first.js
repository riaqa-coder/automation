module.exports = {
    "main test" : function(browser) {
        browser.url("https://www.designory.com");
        browser.pause(3 * 1000);
        browser.end()
    },
    " first test(a) click test": function(browser)
    {
        browser.url("https://www.designory.com");
        browser.click("#nav-toggle");
        browser.pause(2 * 1000);
        browser.end()

    },

    "(b and c) work" : function(browser)
    {
        browser.url("https://www.designory.com");
        browser.click("#nav-toggle");
        browser.pause(1000);
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(1) > a");
        browser.pause(2 * 1000);
        browser.assert.visible("#nav-toggle");
        browser.end()
    },

    "(b and c) about" : function(browser)
    {
        browser.url("https://www.designory.com");
        browser.click("#nav-toggle");
        browser.pause(1000);
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(2) > a");
        browser.pause(2 * 1000);
        browser.assert.visible("#nav-toggle");
        browser.end()
    },

    "(b and c) careers" : function(browser)
    {
        browser.url("https://www.designory.com");
        browser.click("#nav-toggle");
        browser.pause(1000);
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(3) > a");
        browser.pause(2 * 1000);
        browser.assert.visible("#nav-toggle");
        browser.end()
    },

    "(b and c) locations" : function(browser)
    {
        browser.url("https://www.designory.com");
        browser.click("#nav-toggle");
        browser.pause(1000);
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a");
        browser.pause(2 * 1000);
        browser.assert.visible("#nav-toggle");
        browser.end()
    },


    "(b and c) contact" : function(browser)
    {
        browser.url("https://www.designory.com");
        browser.click("#nav-toggle");
        browser.pause(1000);
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(5) > a");
        browser.pause(2 * 1000);
        browser.assert.visible("#nav-toggle");
        browser.end()
    },


    "(b and c) news" :  function(browser)
    {
        browser.url("https://www.designory.com");
        browser.click("#nav-toggle");
        browser.pause(1000);
        browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(6) > a");
        browser.pause(2 * 1000);
        browser.assert.visible("#nav-toggle");
        browser.end()
    },

    "Second test cookies part 1" :  function(browser)
    {
      browser.url("https://www.designory.com");
      browser.pause(2 * 1000);
      browser.click("body > div.cookie-notice > div > p:nth-child(2) > button");
      browser.pause(10 * 1000);
      browser.end()
    },

    "Second test cookies part 2" : function(browser)
    {
      browser.url("https://www.designory.com");
      browser.pause(2 * 1000);
      browser.click("body > div.cookie-notice > button");
      browser.pause(10 * 1000);
      browser.end()
    },

    "Second test on cookies 3" :  function(browser)
    {
        browser.url("chrome://settings/cookies");
        browser.pause(2 * 1000);
        browser.url("https://www.designory.com");
        browser.pause(5 * 1000);
        browser.assert.visible("body > div.cookie-notice");
        browser.pause(4 * 1000);
    },

    "Third Test Location part (a)" : function(browser)
       {
        browser.url("https://www.designory.com");
        browser.assert.visible("#body > footer > div.location-list > div > div > div:nth-child(2) > div > h3 > a");
        browser.end()
       },
      
       "Test location part(1)" : function(browser)
       {
        browser.url("https://www.designory.com");
        browser.assert.containsText("#body > footer > div.location-list > div > div > div:nth-child(2) > div > h3 > a" , "CHICAGO");
        browser.end()
       },

       "Test location part(2)" :  function(browser)
       {
           browser.url("https://www.designory.com");
           browser.assert.containsText("#body > footer > div.location-list > div > div > div:nth-child(2) > div > span" ,"+1 312 729 4500" );
           browser.end()
       },

       "Test loacation part (3)" : function(browser)
       {
         browser.url("https://www.designory.com");
         browser.expect.element("#body > footer > div.location-list > div > div > div:nth-child(2) > div > h3 > a").to.not.be.active;
         browser.end()
       },

      "Test location part(b)" : function(browser)
       {
           browser.url("https://www.designory.com");
           browser.click("#nav-toggle");
           browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a");
           browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(1) > a");
           browser.pause(1000);
           

           browser.click("#nav-toggle");
           browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a");
           browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(2) > a");
           browser.pause(1000);
           
           browser.click("#nav-toggle");
           browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a");
           browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(3) > a");
           browser.pause(1000);
           
           
           browser.click("#nav-toggle");
           browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a");
           browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(4) > a");
           browser.pause(1000);
           
           browser.click("#nav-toggle");
           browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a");
           browser.click("#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(5) > a");
           browser.pause(1000);
           
           browser.end()
       },

       

};