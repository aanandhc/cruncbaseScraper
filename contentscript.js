var i = 0; 
function scrollToEnd()	
{
	window.scrollTo(0, 5000);
	i++;
	var total = parseInt($(".collection-count").html().replace(/\D/g,''),10);

	var count = $(".section-list tbody tr").length;
	if(count<= total)
	{
		window.setTimeout(scrollToEnd, 400);
	}
	else
	{
		getData();
	}
	
}
function getData()
{
	var data = [];
	$(".section-list tbody tr").not(":first").each(function(){
		var dateObj = new Date($(this).children().html());
		var tempDate = dateObj.toString();
		data.push({"acquiror":$("#profile_header_heading a").attr("href"), "date": tempDate,"acquired":$(this).find("a.follow_card").attr("href")});
	});
	chrome.runtime.sendMessage(data);
	close();
}

scrollToEnd();
