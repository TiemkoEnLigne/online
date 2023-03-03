<?xml version="1.0" encoding="iso-8859-1"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
	<title>Iframes</title>
	<script language="Javascript" type="text/javascript">
		<!-- Hide script from old browsers
		
		pageCount = new Array(0,0,0,0)
	
		function writeContent(thisPage) {
			pageCount[thisPage]++
		
			content.document.write("<html><head><\/head><body bgcolor='#FFFFFF'><h1>")
			content.document.write("You are now looking at page " + thisPage + ".<br \/>")
			content.document.write("You have been to this page " + pageCount[thisPage] + " times.")
			content.document.write("<\/h1><\/body><\/html>")
			content.document.close()
		}
		// End hiding script from old browsers -->
	</script> 
</head>
<body bgcolor="#FFFFFF">
<iframe src="frame10b.html" width="70%" height="100%" name="content" align="right" frameborder="0" marginheight="0">Your browser does not support iframes</iframe>
<h1>Navigation Bar</h1>
<h2>
<a href="javascript:writeContent(1)">Page 1</a><br />
<a href="javascript:writeContent(2)">Page 2</a><br />
<a href="javascript:writeContent(3)">Page 3</a>
</h2> 
</body>
</html>