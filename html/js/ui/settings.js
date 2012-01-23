
var server_limits =
{
		max_idents : 5,
}

var settings =
{
	search :
	{
		entries : Math.min(5, server_limits.max_idents),
	},

	query :
	{
		people_tag : 'names',
		firms_tag : 'orgs',
		nofilter_tags : [ 'names', 'orgs' ], // used in "All" views
	},
}