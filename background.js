browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const currentUrl = details.url;
    
    if (currentUrl.includes("www.reddit.com")) {
      const newUrl = currentUrl.replace("www.reddit.com", "libreddit.bus-hit.me");
      return { redirectUrl: newUrl };
    }
  },
  {
    urls: ["*://www.reddit.com/*"]
  },
  ["blocking"]
);

