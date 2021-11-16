# usregional-layered-data

### Intentions:
The goal is to show analysis of data grouped by region or geospatial location within the United States. Regardless of what is actually being considered, the aim is to platform a methodology for data structured by location and allow for further breakdown of these data sets for individual analysis.

### Dependencies:
JS
JQuery v3.2.1
HTML5
Bootstrap v4.0

### Function:
Using a tree data structure to group associated sites where the parent is the cumulation of the children (ie/ Iowa, Wisconson, and Michigan all belong to the MidWest, while MidWest can retain it's own ID and belong to an overarching dataset), grouped data can be seen and further investegated by going down the tree to isolate individual datasets. This is a general tree with bidirectional traversion so children have reference to parent nodes. 

In practice this uses a JSON object manually populate the interface with normalized coordinates. Using key reference points the coordinates can also be passed through an algorithm for normalization. This can be done by reverse engineering a linear transformation so that longitude & latitude values from an associated query can automatically convert to normalized units and keep the dataset dynamic. 

The goal is to have a reference table in SQL where a subsets' parent ID denotes a grouper (subset: Iowa, Wiscons, & Michigan. grouper: MidWest) and all affilliated locations have an associated lat/long information. No seeable constraints on depth.

To better visualize subsets, the background image is transformed to zoom on a buffered bounding box containing only the subset locations. For example, breaking down the MidWest to only see Iowa, Wisconson, and Michigan, we don't care to see Alaska or California so the image transforms to encapsulate areas of interest. This is automated to work for a dynamic list of data. As new sites are added, the image transformation will adjust accordingly.
