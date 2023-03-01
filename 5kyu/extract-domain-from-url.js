// // Task
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// Solution
function domainName(url) {
  // Step 1 & 2
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "http://" + url;
  }
  url = new URL(url);
  // Step 3
  let domain = url.hostname.split(".")[0];
  // Step 4 & 5
  if (domain === "www") {
    domain = url.hostname.split(".")[1];
  }
  return domain;
}

// Step 1: Make use of the URL object
// Step 2: If url does not start with 'http://' or 'https://', add it to the hostname so it can be a valid URL in the URL object
// Step 3: Use split() on the "." of the hostname to separate the domains.
// Step 4: select the hostname of choice as domain
// Step 5: if that first index comes back as 'www', use split() on the hostname to get the next index which should be the domain

// Test Cases
console.log(domainName("http://google.com"));
console.log(domainName("https://google.com"));
console.log(domainName("www.google.com"));
