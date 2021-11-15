;

var r = 10;
/** TODO: Global Expansion
 * swap image from North America to different country for increased analytics
 * var north_america_src = "../images/";
 * var europe_src = "../images/";
 * var far_east_src = "../images/";
*/


{/**
//C# (server side) Transformation of Latitude & Longitude into normalized x,y values for the North America SVG image
private float[] Coord2Norm(float lon, float lat, int rId)
{
    //if other regions have outlier subregions similar to Alaska&Hawaii of the U.S. rId should be an int[2] { rId, sub_rId } where parent is the region and child is the subset identifier. need to avoid double instance checks
    float x, y;
    if (rId == Array.IndexOf(regs, "United States"))
    {
        if (51.82 <= lat && lat <= 71.66            // Alaska
        && -167.7 <= lon && lon <= -130.18)
        {
            x = (float)(0.003726 * lon + 0.625098);
            y = (float)(2.286680945 * Math.Pow(10, -4) * Math.Pow(lat, 2) - 1.211667371 * Math.Pow(10, -2) * lat + 1.390370858 * Math.Pow(10, -2));
            return new float[] { x, y };
        }
        else
        if (19.04 <= lat && lat <= 22.35            // Hawaii
        && -160.25 <= lon && lon <= -154.8)
        {
            x = (float)(0.014833 * lon + 2.556042);
            y = (float)(-6.061806072 * Math.Pow(10, -4) * Math.Pow(lat, 2) + 5.672617062 * Math.Pow(10, -2) * lat - 8.303008482 * Math.Pow(10, -1));
            return new float[] { x, y };

        }
        else
        {
            x = (float)(0.014775 * lon + 1.886276);
            y = (float)(2.831746047 * Math.Pow(10, -4) * Math.Pow(lat, 2) + 1.610193452 * Math.Pow(10, -2) * lat - 5.464432461 * Math.Pow(10, -1));
            return new float[] { x, y };
        }
    }
    else
        return new float[] { 0.95f, 0.5f };
}
*/}

const frame = {
	//Scaffold the image, necessary for holding a 0:1 normalized window
	label: ["Frame"],
	backgroundColor: "rgba(255,255,255,0.3)",
	borderColor: "rgba(255,255,255,1.0)",
	data: [
		{x:0, y:0, r:0},
		{x:1, y:0, r:0},
		{x:0, y:1, r:0},
		{x:1, y:1, r:0},
	]	
};

const my_root = [{
    label: ["U.S. Regional Analytics"],
    children: [frame,
        {
            label: ["Capitol"],
            backgroundColor: "rgba(127,127,127,0.3)",
            borderColor: "rgba(200,175,255,1)",
            data: [
                {//Washington, D.C.
                    x: 0.7460,
                    y: 0.5186,
                    r: function (context) { return r; }
                }
            ],
            children: [frame,
                {
                    label: ["Midwest"],
                    backgroundColor: "rgba(127,127,127,0.3)",
                    borderColor: "rgba(200,175,255,1)",
                    data: [
                        {//Rock Island, IL
                            x: 0.5511,
                            y: 0.6200,
                            r: r
                        }
                    ],
                    children: [frame,
                        {
                            label: ["Davenport, IA"],
                            backgroundColor: "rgba(127,127,127,0.3)",
                            borderColor: "rgba(127,127,127,1)",
                            data: [
                                {//Rock Island, IL
                                    x: 0.5511,
                            		y: 0.6200,
                                    r: r
                                }
                            ]
                        },
                        {
                            label: ["Milwaukee, WI"],
                            backgroundColor: "rgba(127,127,127,0.3)",
                            borderColor: "rgba(127,127,127,1)",
                            data: [
                                {//Milwaukee, WI
                                    x: 0.5855,
                                    y: 0.7005,
                                    r: r
                                }
                            ]
                        },
                        {
                            label: ["Detroit, MI"],
                            backgroundColor: "rgba(127,127,127,0.3)",
                            borderColor: "rgba(127,127,127,1)",
                            data: [
                                {//Detroit, MI
                                    x: 0.6540,
                                    y: 0.6428,
                                    r: r
                                }
                            ]
                        }
                    ]
                },
                {
                    label: ["North East"],
                    backgroundColor: "rgba(127,127,127,0.3)",
                    borderColor: "rgba(127,127,127,1)",
                    data: [
                        {//Washington, D.C.
                            x: 0.7617,
                            y: 0.5233,
                            r: r
                        }
                    ]
                },
                {
                    label: ["South"],
                    backgroundColor: "rgba(127,127,127,0.3)",
                    borderColor: "rgba(127,127,127,1)",
                    data: [
                        {//Huntsville, AL
                            x: 0.64,
                            y: 0.36,
                            r: r
                        }
                    ]
                },
                {
                    label: ["West"],
                    backgroundColor: "rgba(127,127,127,0.3)",
                    borderColor: "rgba(127,127,127,1)",
                    data: [
                        {//Tucson, AZ
                            x: 0.2395,
                            y: 0.2768,
                            r: r
                        }
                    ]
                },
                /**{
                    label: ["Far East"],
                    backgroundColor: "rgba(127,127,127,0.3)",
                    borderColor: "rgba(127,127,127,1)",
                    data: [
                        {
                            x: 0.95,
                            y: 0.8,
                            r: r
                        }
                    ]
                },
                {
                    label: ["Europe"],
                    backgroundColor: "rgba(127,127,127,0.3)",
                    borderColor: "rgba(255,127,127,1)",
                    data: [
                        {
                            x: 0.95,
                            y: 0.68,
                            r: r
                        }
                    ]
                }*/
            ]
        },
        {
            label: ["North Carolina"],
            backgroundColor: "rgba(127,127,127,0.3)",
            borderColor: "rgba(127,127,127,1)",
            data: [
                {//Fayetville, NC
                    x: 0.7187,
                    y: 0.3885,
                    r: r
                }
            ]
        },
        {
            label: ["Huntsville, AL"],
            backgroundColor: "rgba(127,127,127,0.3)",
            borderColor: "rgba(127,127,127,1)",
            data: [
                {//Huntsville, AL
                    x: 0.6012,
                    y: 0.3657,
                    r: r
                }
            ]
        },
        {
            label: ["Austin, TX"],
            backgroundColor: "rgba(125,125,125,0.3)",
            borderColor: "rgba(255,255,0,1)",
            data: [
                {//Austin, TX
                    x: 0.4123,
                    y: 0.1697,
                    r: r
                }
            ],
            children: [frame,
                {
                    label: ["Austin, TX"],
                    backgroundColor: "rgba(127,127,127,0.3)",
                    borderColor: "rgba(127,127,127,1)",
                    data: [
                        {//Austin, TX
                            x: 0.4123,
                            y: 0.1697,
                            r: r
                        }
                    ]
                },
                {
                    label: ["Washington, D.C."],
                    backgroundColor: "rgba(127,127,127,0.3)",
                    borderColor: "rgba(127,255,127,1)",
                    data: [
                        {//Washington, DC
                            x: 0.7617,
                            y: 0.5233,
                            r: r
                        }
                    ],
                    children: [frame,
                        {
                            label: ["Judicial"],
                            backgroundColor: "rgba(127,127,127,0.3)",
                            borderColor: "rgba(127,127,127,1)",
                            data: [
                                {//Alexandria, VA
                                    x: 0.7580,
                                    y: 0.5211,
                                    r: r
                                }
                            ]
                        },
                        {
                            label: ["Legeslative"],
                            backgroundColor: "rgba(127,127,127,0.3)",
                            borderColor: "rgba(127,127,127,1)",
                            data: [
                                {//Washington, DC
                                    x: 0.7617,
                                    y: 0.5233,
                                    r: r
                                }
                            ]
                        },
                        {
                            label: ["Executive"],
                            backgroundColor: "rgba(127,127,127,0.3)",
                            borderColor: "rgba(127,127,127,1)",
                            data: [
                                {//Washington, DC
                                    x: 0.7620,
                                    y: 0.5222,
                                    r: r
                                }
                            ]
                        }

                    ]
                }
            ]
        }
    ]
}];

window.onload = function () {
	// Get Data (json)
	// -normalized coordinates of identified locations within a bounding region
	// -TODO: get coord->norm transformation equations from c# page!!!!
	
	//Clean it Up
	// -add parent to each node c#/c++ can't handle bidirectional tree
	//TODO: polish(my_root)
	polish(my_root);
	
	//Output for Verification
	console.log(my_root);
	
	//Map Display
	GeoSelector(my_root);
	
	//User Notes
	$('#notes').html("Click a Circle,\n Double Click a Colored One");
}

/**
 * Add bidirectional traversion of tree structure. 
 * json packet is top->down 
 */
function polish(temp) {
	temp.forEach(function(node) {
		for(var i = 1; i < node.children.length; i++) {
			addParent(node, node.children[i]);
		}
	});
}

function addParent(parent, child) {
	child.parent = parent;
	if(child.hasOwnProperty('children') && child.children != null) {
		for(var i = 1; i < child.children.length; i++){
			addParent(child, child.children[i]);
		}
	}
}

function GeoSelector(root) {
	
	//State tracking iterators
	let prev = root[0];
	let curr = prev;
	
	//State stack: cookie crumb trail for down the tree visitations
	let mod_stack = [];
	let transform_stack = [];
	
	//Local variables
	
	let delt_inv = false;
	let boundary = [-2, 8];
	
	let ctx = document.getElementById('geo');
	let bubbleChart = new Chart(ctx, 
		{
			type: 'bubble',
			data: 
			{
				datasets: root[0].children
			},
			options:
			{
				title:
				{
					display: false,
					text: curr.label,
					padding: 0
				},
				scales:
				{
					yAxes:
					[{
						scaleLabel:
						{
							display: false,
							padding: 0
						},
						gridLines:
						{
							display: false,//QA:true, Prod:false,
							drawBorder: false,
							tickMarkLength: 0 
						},
						ticks:
						{
							display: false//QA:true, Prod:false,
						}
					}],
					xAxes:
					[{
						scaleLabel:
						{
							display: false,
							padding: 0
						},
						gridLines:
						{
							display: false,//QA:true, Prod:false,
							drawBorder: false,
							tickMarkLength: 0 
						},
						ticks:
						{
							display: false//QA:true, Prod:false,
						}
					}]
				},
				legend: 
				{
					display: false
				},
				tooltips:
				{
					//filter: function (tooltipItem, data) {return (data.datasets[tooltipItem.datasetIndex] != curr)}
					//turn off tooltip for any item leading to a next dataset
					callbacks:
					{
						//only display tooptip label, not the x,y,r values
						label: function (tooltipItem, data) { return data.datasets[tooltipItem.datasetIndex].label}
					}					
				},
				animation:
				{
	                easing: 'easeOutQuad',
	                onProgress: function (anim) {
	                    if (anim.easing === 'linear' && curr.pulsing)
						{
							//linear easing animation is reserved for the pulsation
	                        anim.currentStep /= (anim.duration * 5);//extend the pulse animation by reducing the current step
	                    }
	                    step_radius();
	                },
	                onComplete: function (anim) {
	                    cancel_pulse();
	                }
				},
				events: ['click','mousemove']
			},
			plugins:
			[{//https://github.com/chartjs/Chart.js/blob/30cb91d2eb307718965d24efd46444a9ed8a3209/src/core/core.plugins.js#L174
            	beforeEvent: function (chartInstance, event) {

                    let id = EventId(chartInstance, event);

                    //Restore Defaults - if changes were made
                    if (mod_stack.length) {
                        let temp = mod_stack.pop();
                        chartInstance.config.options.hover.animationDuration = temp.animationDuration || 400;
                        chartInstance.config.options.animation.easing = temp.easing || 'easeOutCirc';
                        chartInstance.config.options.animation.duration = temp.duration || 1000;
                    }

                    //Event Plugins
                    if (event.type === 'click') {
                        if (id) {
                            if (curr.hasOwnProperty('children') && curr.children != null && curr == prev.children[id]) {
                                //prev = curr;
                                cancel_pulse();
                                zoomIn(curr);
                            } else {
                                curr = prev.children[id];
                                if (curr.hasOwnProperty('children') && curr.children != null) {
                                    init_pulse(chartInstance);
                                }
                            }
                        } else {
                            if (curr != prev) {
                                curr = prev;
                            } else if (prev.hasOwnProperty('parent') && prev.children != null) {
                                zoomOut(prev);
                            } else { ; }//do nothing;
                        }

                        //Update Display Figures
                        UpdateFigures(chartInstance);

                    }
                },
                resize: function (chartInstance, size) {
                    //force a redraw. 
                    while (transform_stack.length) { zoomOut(prev); }
                    UpdateFigures(chartInstance);

                    //o.w. handle size transformation changes to the stack, feels like a later date problem
                }
            }]
		});
	console.log(bubbleChart);
	
	/**
	 * Comments:
	 *
	 */

    //Helper Functions
    function EventId(chart, evt) {
        var activePoints = chart.getElementAtEvent(evt);
        if (activePoints[0]) {
            //var chartData = activePoints[0]['_chart'].config.data;
            var idx = activePoints[0]['_datasetIndex'];
            //var label = chartData.datasets[idx].label;
            return idx;
        } else {
            return 0;
        }
    }
    function UpdateFigures(chartInstance) {

        $('#geoheader').html(prev.label);
		$('#notes').html(curr.label);
        chartInstance.data.datasets = prev.children;
        // - update ext graphs to curr data
        chartInstance.update();
    }
    function init_pulse(chart) {

        //save state
        mod_stack.push({
            //empty state, null values are set to default values
        });

        //modify
        bubbleChart.options.animation.easing = 'linear' //linear - easing port for pulse animation configurations
        curr.pulsing = true;
    }
    function cancel_pulse() {
        curr.pulsing = false;
    }
    function step_radius() {
        let delt = 0.25;
        if (curr.hasOwnProperty('pulsing') && curr.pulsing) {
            if (curr._meta[0].data[0]._model.radius < r + boundary[0]) {
                delt_inv = false;
            } else if (r + boundary[1] < curr._meta[0].data[0]._model.radius) {
                delt_inv = true;
            }
            if (!delt_inv) {
                curr._meta[0].data[0]._model.radius += delt;
            } else {
                curr._meta[0].data[0]._model.radius -= delt;
            }
        }
    }
    function zoomIn(node) {

        //update pointers
        prev = curr;

        //determine variables
        let buff_px = 75;
        let h = bubbleChart.chartArea.bottom - bubbleChart.chartArea.top;
        let w = bubbleChart.chartArea.right - bubbleChart.chartArea.left;
        let max = { x: 0, y: 0 };
        let min = { x: 1, y: 1 };
        for (let i = 1; i < node.children.length; i++) {
            max.x = max.x < node.children[i].data[0].x ? node.children[i].data[0].x : max.x;
            max.y = max.y < node.children[i].data[0].y ? node.children[i].data[0].y : max.y;
            min.x = node.children[i].data[0].x < min.x ? node.children[i].data[0].x : min.x;
            min.y = node.children[i].data[0].y < min.y ? node.children[i].data[0].y : min.y;
        }

        //buffer the scope of the new frame
        min.x = Math.max(min.x - buff_px / w, 0);
        min.y = Math.max(min.y - buff_px / h, 0);
        max.x = Math.min(max.x + buff_px / w, 1);
        max.y = Math.min(max.y + buff_px / h, 1);

        let w_prime = (max.x - min.x);
        let h_prime = (max.y - min.y);

        //determine transformation values
        k = Math.min(1 / h_prime, 1 / w_prime);
        delt = { x: (min.x + max.x - 1) * w / 2, y: (min.y + max.y - 1) * h / 2 };

        //transform
        apply(delt.x, delt.y, k);//-money shot
        //else { --  !!save for cases don't want to zoom. ie/ click a region leading to a new src-map!!
        //    //no zoom
        //    let temp = transform_stack.pop();
        //    if (temp) {
        //        transform_stack.push(temp);
        //        apply(temp.x, temp.y, temp.k);
        //    }
        //}
    }
    function zoomOut(node) {

        //update frame and dataset
        if (transform_stack.length) {

            let temp = transform_stack.pop();
            inv_transform(temp.x, temp.y, temp.k);

            if (transform_stack.length) {
                temp = transform_stack.pop();
                zoom(temp.x, temp.y, temp.k);
                transform_stack.push(temp);
            } else {
                zoom(0, 0, 1);
            }
        }

        //update pointers
        if (prev.hasOwnProperty('parent') && prev.parent !== null) {
            curr = prev.parent;
            prev = curr;
        } else {
            console.log('tried zooming out above parent');
        }

    }
    function apply(x, y, k) {
        transform_stack.push({ x: x, y: y, k: k });  //save state
        zoom(x, y, k);                              //img transform
        transform(x, y, k);                        //data transform
    }
    function zoom(x, y, scalar) {
        //https://css-tricks.com/zooming-background-images/
        $('#geomap').css('transform', 'scale(' + scalar + ') ' + 'translate(' + -x + 'px,' + y + 'px) ');
        $('#geomap *').css('transform', 'translate(' + x + 'px,' + -y + 'px) ' + 'scale(' + (1 / scalar) + ') ');
    }
    function transform(x, y, scale) {
        //transform data HERE
        prev.children.forEach(function (child) {
            if (child.data.length == 1) {//don't transform the Frame
                child.data[0].x = xcanv2norm((xnorm2canv(child.data[0].x) * scale - (xnorm2canv(1) * (scale - 1)) / 2) - x * scale);
                child.data[0].y = ycanv2norm((ynorm2canv(child.data[0].y) * scale - (ynorm2canv(1) * (scale - 1)) / 2) - y * scale);
            }
        });
    }
    function inv_transform(x, y, scale) {
        //untransform data HERE
        prev.children.forEach(function (child) {
            if (child.data.length == 1) {
                child.data[0].x = xcanv2norm(((xnorm2canv(child.data[0].x) + (xnorm2canv(1) * (scale - 1)) / 2) + x * scale) / scale);
                child.data[0].y = ycanv2norm(((ynorm2canv(child.data[0].y) + (ynorm2canv(1) * (scale - 1)) / 2) + y * scale) / scale);
            }
        });
    }
    function xcanv2norm(x) {
        return x / (bubbleChart.chartArea.right - bubbleChart.chartArea.left);//bubbleChart.canvas.width;
    }
    function xnorm2canv(x) {
        return x * (bubbleChart.chartArea.right - bubbleChart.chartArea.left);//bubbleChart.canvas.width;
    }
    function ycanv2norm(y) {
        return y / (bubbleChart.chartArea.bottom - bubbleChart.chartArea.top);//bubbleChart.canvas.height;
    }
    function ynorm2canv(y) {
        return y * (bubbleChart.chartArea.bottom - bubbleChart.chartArea.top);//bubbleChart.canvas.height;
    }
}







