function frames(page1, page2, page3) {
framecode = "<html>"
+"<head>"
+"<title>"+'cata'
+"</title>"
+"<meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'>"
+"</head>"
+"<frameset cols='155,*'frameborder='NO' border='0' framespacing='0' >"
+ "<frame src='" + page1 + "' scrolling='NO' noresize  frameborder='NO' marginwidth='0' marginheight='0' name='leftFrame' width='100%'>"
+"<frameset rows='108,*'frameborder='NO' border='0' framespacing='0' >"
+ "<frame src='" + page2 + "' scrolling='NO' noresize  frameborder='NO' marginwidth='0' marginheight='0' name=' topFrame ' width='100%'>"
+ "<frame name='mainFrame' src='" + page3 + "'frameborder='NO' scrolling='AUTO' marginwidth='0' marginheight='0'>"
+ "</frameset>"
+"<body bgcolor='#FFFFFF' text='#000000'>"
+"</body>"
+"</html>"
document.write(framecode);
}
