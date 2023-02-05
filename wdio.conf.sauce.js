export const config = {
    // ...
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnect: true,
    specs: [
        './test/specs/example.e2e.js'
    ],
    capabilities: [{
        browserName: 'chrome',
        platformName: 'Windows 10',
        browserVersion: 'latest'
    },
    {
        browserName: 'chrome',
        platformName: 'macOS 10.15',
        browserVersion: 'latest'        
    }]
    // ...
    
  }