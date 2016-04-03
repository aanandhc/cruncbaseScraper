# cruncbaseScraper
Chrome Extension that scrapes Crunchbase acquisitions pages

##Motivation
Crunchbase's acquisitions page has dynamic loading based on page scroll so it is difficult to utilize traditional scraping, and I needed to find acquisitions of a large list of acquiring firms for a research project. 

##Methodology
This is a chrome extension that opens a new tab for each acquiror in my input list, dynamically scrolls to the bottom of the page to finish loading all results, and then finally scrapes all relevant information for the acquisitions. Scraping for each acquiring firm is done in parallel through the use of multiple tabs communicating with a central background.js. As soon as one page is finished scraping, the tab corresponding to that page is closed. 

##Setup Instructions
1. Navigate to 		chrome://extensions 
2. Check Developer Mode
3. Load Unpacked extension
4. Voila
