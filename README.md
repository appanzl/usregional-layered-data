# usregional-layered-data

### Intentions:
The goal is to show an analysis of tiered data grouped by region or geospatial location within the United States.

### Dependencies:
JS
JQuery v3.2.1
HTML5
Bootstrap v4.0

### Function:
Using a tree data structure to group associated sites where the parent is the cumulation of the children (ie/ Iowa, Wisconson, and Michigan all belong to the MidWest, while MidWest can retain it's own ID and belong to an overarching dataset), grouped data can be seen and further investegated by going down the tree to isolate individual datasets. This is a general tree with bidirectional traversion so children have reference to parent nodes. 

In practice this uses a JSON object manually populate the interface with normalized coordinates. Using key reference points the coordinates can also be passed through an algorithm for normalization. This can be done by reverse engineering a linear transformation so that longitude & latitude values from an associated query can automatically convert to normalized units and keep the dataset dynamic. 

The goal is to have a reference table in SQL where a subsets' parent ID denotes a grouper (subset: Iowa, Wiscons, & Michigan. grouper: MidWest) and all affilliated locations have an associated lat/long information. No seeable constraints on depth. An obvious issue with a work around is that the United States map is modified for Alaska and Hawaii visibility. This requires the two states to have separate transformation functions for lat/long -> normalizes coordinates effectively tripling the work load scaled by desired accuracy. (More accurate transformations will require more known/verified transformation points. Prevously about eight to twelve known loctions were identified and used to plot a function with acceptable results)

To better visualize subsets, the background image is transformed to zoom on a buffered bounding box containing only the subset locations. For example, breaking down the MidWest to only see Iowa, Wisconson, and Michigan, we don't care to see Alaska or California so the image transforms to encapsulate areas of interest. This is automated to work for a dynamic list of data. As new sites are added, the image transformation will adjust accordingly.
