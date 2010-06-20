require.def(
	'pages/home', 
	[ 
		"widgets/SearchInput", 
		"widgets/Results", 
		"services/Web"
	], 
	function(SearchInput, Results, Web) {
		new SearchInput($('#search_box'));
		new Results($('#search_results'));
	}
);
