# usregional-layered-data
### Intentions:
The goal is to show analysis of data grouped by region and geospatial location within the United States. Regardless of what is actually being considered, the aim is to platform a methodology for present data based on location and allow for breakdown. If a headquarters in Omaha, Nebraska is covering the entire west coast. It might be ideal to see how the entire west coast is performing in keeping up with training compliance for example. When expectations are not met, we can isolate sub groups of the west coast and determine if one site in particular is problematic or if the entire area is going rogue. 

### Dependencies:
JS, HTML5, and internet access. This code can be run in a browser with no downloads. the chart functionality does require internet access however

### Function:
Using a tree hierarchy to group associated sites (ie/ Iowa, Wisconson, and Michigan all belong to the MidWest) grouped data can be seen and further investegated by going down the tree to isolate individual datasets. This is a general tree with bidirectional traversion so children have reference to parent nodes. In practice this uses a JSON object manually populated with normalized coordinates but can be created from a SQL Table with longitude & latitude for ease of use. The goal is to have a reference table in SQL where a subsets' parent ID denotes a grouper (subset: Iowa, Wiscons, & Michigan. grouper: MidWest). No seeable constraints on depth.

To better visualize subsets, the background image is transformed to zoom on a buffered bounding box containing only the subset locations. In practice, breaking down the MidWest to only see Iowa, Wisconson, and Michigan, we don't care to see Alaska or California so the image transforms to encapsulate areas of interest. This is automated to work for a dynamic list of data. As new sites are added, the image transformation will adjust accordingly.
