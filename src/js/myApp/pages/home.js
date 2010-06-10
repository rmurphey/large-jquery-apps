require.def(
	'pages/home', 
	[ "widgets/SearchInput", "widgets/Results", "services/Web" ], 
	function(SearchInput, Results, WebService) {
		return {
			results : new Results($('#search_results')),
			searchInput : new SearchInput($('#search_box')),
			services : [
				new WebService()
			]
		};
	}
);