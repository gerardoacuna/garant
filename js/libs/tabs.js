$(document).ready(function(){

	$('#post .content section').hide();
	$('#post .content section:first').show();
	$('#submenu ul li:first').addClass('active');

	$('#submenu ul li a').click(function(){
		$('#submenu ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#post .content section').hide();
		$(currentTab).fadeIn('slow');
		$('#product-models section').hide();
		$('#product-models section:first').show();
		$('#submenu-models ul li').removeClass('active');
		$('#submenu-specs ul li').removeClass('active');
		$('#submenu-models ul li:first').addClass('active');
		$('#submenu-specs ul li:first').addClass('active');
		$('#especificaciones section').hide();
		$('#especificaciones section:first').show();
		return false;
	});

	$('#product-models section').hide();
	$('#product-models section:first').show();
	$('#submenu-models ul li:first').addClass('active');

	$('#submenu-models ul li a').click(function(){
		$('#submenu-models ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#product-models section').hide();
		$(currentTab).fadeIn('slow');
		return false;
	});

	$('#submenu-specs ul li a').click(function(){
		$('#submenu-specs ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#especificaciones section').hide();
		$(currentTab).fadeIn('slow');
		return false;
	});
	
});