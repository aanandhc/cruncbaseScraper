var inputUrls = ["1-800-flowers-com","activision","adobe-systems","akamai-technologies","alarm-com","altera","amazon","analog-devices","anoto-group","apple","applied-materials","arrow-electronics","at-t","autodesk","adp","avago-technologies","avnet","baidu","broadcom","computer-associates","cerner-corporation","check-point","cisco","citrix-systems","clicktale","cogent","cognizant-technology-solutions","comcast","computer-sciences-corp","corning","cypress","danaher","dell","dropbox","eaton","ebay","electronicarts","emc","emerson-electric","endurance-international","expedia","facebook","fiserv","foxconn-technology-group","fresscale","garmin","google","groupon","hewlett-packard","hitachi-data-systems","ibm","illinois-tool-works","ims-health","infosys","ingram-micro","intel","intuit","jabil","juniper-networks","kla-tencor","kyocera-corporation","lam-research","lenovo","linear-technology-corporation","linkedin","maxim-integrated-products","microchip-technology","micron-technology","microsoft","mobileye-vision-technologies","motorola-solutions","netapp","netsuite","neustar","ntt-docomo","nvidia","nxp-semiconductors","omnicom-group","oracle","overstock-com","palo-alto-networks","panasonic","pandora","paypal","pc-connection","priceline","qualcomm","raycom-media","red-hat","salesforce","samsung-electronics","sandisk","sap","seagate","service-now-com","shutterfly","skyworks-solutions","sony","soundhound","symantec","tsmc","tech-data","texas-instruments","thermo-fisher-scientific","Toshiba","tripadvisor","Tune","twitter","unitedonline","vistaprint-limited","vmware","western-digital-technologies","wipro","Wordpress","workday","Xerox","xilinx","xo-group","yahoo","yelp","zynga"];


var i = 0;
function startRequest() {
	var crunchbase_url = "https://www.crunchbase.com/organization/"+inputUrls[i]+"/acquisitions";
	chrome.tabs.create({'url': crunchbase_url, 
                        'active': false}, function(tab){
        var selfTabId = tab.id;
        chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	            if (changeInfo.status == "complete" && tabId == selfTabId){
	                // send the data to the page's script:
	                chrome.tabs.executeScript(tabId, { file: "jquery.js" }, function() {
					    chrome.tabs.executeScript(tabId, { file: "contentscript.js" });
					});
	            }
	        });
	    });
	
	i++;
	
	if(i < inputUrls.length)
		window.setTimeout(startRequest, parseInt(Math.log(i)*1000));
}
chrome.browserAction.onClicked.addListener(function() {
 startRequest();   
    
});
var totalData = [];

chrome.runtime.onMessage.addListener(
  function(dataMessage, sender, infoHandler) {
    //not sure if we need anything about which tab it came from, but
    //this is good for debugging
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    //handle the info
    // function({alert("message received"); });
    
    for(var i = 0; i < dataMessage.length; i++)
    {
    	totalData.push(dataMessage[i]);
    }

    console.log(totalData);
  });
