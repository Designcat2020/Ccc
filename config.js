var config = {
    accessToken: 'pk.eyJ1IjoieWFuc3VuMjAyMCIsImEiOiJjazg4dmFsbGcwMGcwM2xxc2Zla21zZG91In0.Kkqjs0MWxmSEeqe7yO-k5g',
    style: 'mapbox://styles/yansun2020/ckhctf8q209ss19p7t46qjk00',
    theme: 'light',
    alignment: 'left',
    toptitle: 'Mapbox Storytelling | Columbia University WEAI',
    title: 'Complex and Conflict: Presidential Election Observe From New York Data',
    byline: 'By SunYan',
    image:'image/001.jpg',
    description:"As media projected President-elect Joseph R. Biden Jr. won the vote, and the recount of swing states eventually confirmed this result, President Trump still claimed, <em>\"it\'s going to be a very hard thing to concede.\"</em> Besides, many articles began to focus on the highest voter turnout nearly 160 million people ——the proportion not seen in more than a century. This year, the ongoing COVID-19 pandemic, the BLM movement after the killing of George Floyd, and the U.S. Supreme Court future after the death of Ruth Bader Ginsburg, and others, all of these may spur people to go out to vote，no matter what left or right. The geographic election data related to gender, ethnicities, classes show complexities and conflicts in nowaday American society. <p></p> <small>Illustration:  Wikipedia | Digital Vision Vectors via Getty Images</small>",
    footer: 'This story is based on data by the <a href="https://data.census.gov/">United States Census Bureu</a>, and the <a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VOQCHQ">MIT Election Data + Science Lab</a> and reporting by <a href="https://www.nytimes.com/interactive/2020/11/09/us/politics/2016-election-trump-counties.html?action=click&module=Top%20Stories&pgtype=Homepage">the New York Times</a>',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a>',

    chapters: [
         {//2 The first piece from the 2012 election
            id: '2012result',
            alignment: 'left',
            image:'image/002.jpg',
            image2:'image/002-1.jpg',
            title: 'The first piece from the 2012 election',
            description:"In the 2012 presidential election, President Obama won his second term despite dissatisfaction with the economy and a hard-fought challenge by Mr. Romney. In his address, the president challenged his opponents, asking them to work with him. According to <a href='https://www.nytimes.com/elections/2012/results/states/new-york.html'>the 2012 election result</a> of the New York State, President Obama won 39 of 62 counties in New York State and total more than 3,800,000 votes. That year Joseph R. Biden Jr. was vice president standing beside President Obama as a team. Today people may choose Joseph Biden as they nostalgia for that normalcy life in the Obama period.",
            imageCredit:"<a href='https://www.nytimes.com/2020/11/08/opinion/biden-obama-presidency.html?searchResultPosition=1'>The New York Times</a>",
            location: {
                center:[-78.300,42.860],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{
                layer: '2012result',
                opacity: 0.8
            }],
            onChapterExit: [{
                layer: '2012result',
                opacity: 0
            }]
        },
        {//picture1 
            id: 'picture1',
            alignments: 'full',
            image:'image/P01.jpg',
            title: '',
            quote: '“I believe we can seize this future together because we are not as divided as our politics suggests. We’re not as cynical as the pundits believe. We are greater than the sum of our individual ambitions and we remain more than a collection of red states and blue states. We are, and forever will be, the United States of America. And together, with your help and God’s grace, we will continue our journey forward and remind the world just why it is that we live in the greatest nation on earth. Thank you, America. God bless you. God bless these United States."<p></p> ——President Obama’s victory speech 2012.',
            audio: "<audio controls preload='none'><source src='https://www.americanrhetoric.com/mp3clipsXE/barackobama/barackobamasecondvictoryspeechARXE.mp3'></audio>",
            imageCredit: "<a href='https://www.npr.org/sections/itsallpolitics/2012/11/06/164362273/voters-to-settle-tight-and-turbulent-presidential-battle'>Win McNamee/Getty Images Times</a>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
         {//3 The Watershed  
            id: '2016result',
            alignment: 'left',
            image:'image/003.jpg',
            imageCredit: "Trump supporters at a campaign rally in November 2016. Credit Damon Winter/<a href='https://www.nytimes.com/interactive/2017/02/06/us/politics/06trump-supporters-callout.html'>The New York Times</a>",
            image2:'image/003-1.jpg',
            title: '<span>The Watershed',
            description:'Compared with the county election results of 2016 and 2012 in New York State, it seems many counties shifted to the right even in this traditionally blue state. Left swung to the right, and the right one became further right. The Democrats won less than 2012, except Manhattan, Westchester, and Tompkins. In the 2016 presidential election, there were 22 counties shifted from Democrats to Republicans, leading to Trump won 45 of 62 counties in New York State, although he did not win the state. Clinton <a href="https://www.nytimes.com/elections/2016/results/new-york"> won the state </a> on about 4,550,000 votes. It seems Democrats won fewer counties but more votes.',

                location: {
                center:[-78.300,42.860],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{
                layer: '2012result',
                opacity: 0
            },
            {
                layer: '2016result',
                opacity: 0.8
            }
        ],
        
        onChapterExit: [{
            layer: '2016result',
            opacity: 0
        }]
        },
               {//4  What does the election data tell us? 
                id: 'Compare result',
                alignment: 'left',
                image:'image/004.jpg',
                imageCredit: "The electorate has, in its plurality, decided to live in Trump’s world. <a href='https://www.newyorker.com/news/news-desk/an-american-tragedy-2'>Source Photograph by Joe Raedle / Getty</a>",
                image2:'image/004-1.jpg',
                title: '<span>  What does the election data tell us?',
                description:'In the 2016 election result of New York State, 17 counties that have less than 50000 population voted for Trump. While on the top ten population counties most of which population more than 500000, only two of them voted for Trump, as known as Richmond and Suffolk, which flipped to Republicans after 2012. According to population density, usually dense districts give us Democrats, and rural districts go to Republicans. The places in between swing from left to right or back. 16 of the rest 35 counties flipped to vote for Trump in the 2016 election. And <a href="https://www.bloomberg.com/news/articles/2018-10-05/the-suburbs-are-the-midterm-election-battleground">the analysis</a> shows that American electoral geography is complex than a simple divide between “urban” and “rural” areas.',
                location: {
                    center:[-78.300,42.860],
                    zoom: 6,
                    pitch: 0,
                    bearing: 0
                },
                onChapterEnter: [{
                    layer: '2012result',
                    opacity: 0
                },
                {
                    layer: '2016result',
                    opacity: 0.8
                },
                {
                    layer: 'Population',
                    opacity: 0.9
                },
                        ],
                onChapterExit: [
                    {
                        layer: '2016result',
                        opacity: 0
                    },
                    {
                        layer: 'Population',
                        opacity: 0
                    }]
                 },
                 {//picture2 
            id: 'picture2',
            title: "",
            description:"<span class='below'> Picture shows Nassau County, Long Island (above), is emblematic of continuous sprawl in an inner suburb of New York City; contrasted with Monroe Township, New Jersey (below), characteristic of an outer suburb of New York City, with a lower population density.<p></p><a href='https://commons.wikimedia.org/w/index.php?curid=24327910'>Photograph from wikipedia</a></span>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
         {//5 Suburban phenomenon
            id: 'suburban phenomenon',
            image:'image/005.jpg',
            imageCredit:"<a href='https://www.nytimes.com/2020/07/30/upshot/trump-suburban-voters.html'>Most Suburban Voters Disaoorove of Trump</a>",
            image2:'image/005-1.jpg',
            alignment: 'left',
            title: '<span> suburban phenomenon',
            description:"From<a href='https://www.nytimes.com/interactive/2020/11/03/us/elections/results-new-york.html'> the 2020 vote data </a>of New York State, we can see another alternation in the suburban areas compared to 2016 and 2012 election results. 4 of 62 counties——Essex, Rensselaer, Broome, and Saratoga—— flipped from Republicans to Democrats, with a population of 15000 to 150000. The most interesting thing is the four counties vote for Trump in 2016 and Obama in 2012. <a href='https://www.nytimes.com/2018/11/26/upshot/suburbs-changing-midterms-democrats-hopes.html'>The New York Times</a> discusses this phenomenon because <em> “the suburbs are lodged in between, with many economically conservative but socially liberal voters who have a foot in each party — or for whom neither party is a perfect fit.”</em> <p></p><small>*Suburbs are defined as urbanized parts of metropolitan areas outside of the central city.</small>",
            location: {
                center:[-78.300,42.860],
                    zoom: 6,
                    pitch: 0,
                    bearing: 0
            },
            onChapterEnter: [{
                layer: '2012result',
                opacity: 0
            },
            {
                layer: '2016result',
                opacity: 0
            },
            {
                layer: '2020result',
                opacity: 0.8
            },
            {
                layer: 'Population',
                opacity: 0
            },
            
        ],
            onChapterExit: [
                {
                    layer: '2020result',
                    opacity: 0
                },
              ]
        },
        {//6 Surburban Battle
        id: 'Surburban Battle',
        image:'image/006.jpg',
        imageCredit:"<a href='https://medium.com/rsjvote/demographic-check-white-suburban-mom-edition-f9879e7cd7b9'>By Merisse Garcia and Ian Cook</a>",
        alignment: 'left',
        title: 'Surburban Battle',
        description:"Look through the nationwide, according to a New York Times/Siena College <a href='https://www.nytimes.com/2020/07/30/upshot/trump-suburban-voters.htm'>poll in June,</a> suburban voters disapproved of Mr. Trump, especially on his handling of the BLM protest, and more had a favorable view of the Black Lives Matter movement. Another discussion on Trump‘s suburban strategy focuses on the suburban white mothers who supported him in 2016. But this time it is different, they think more about <a href='https://www.nytimes.com/2020/08/26/podcasts/the-daily/republican-convention-suburbs.html'>children’s future.</a> Not only suburban moms，— the pandemic and the economic recession and millions of Americans losing their health care make the whole suburbs concerned. The voting block is far away from what Donald Trump has in mind. ",
        location: {
            center:[-75.850,42.860],
            zoom: 7.5,
            pitch: 90,
            bearing: 0
        },
        onChapterEnter: [
            {   layer: '2012result',
                opacity: 0
            },
            {
                layer: '2016result',
                opacity: 0
                },
                {
                layer: 'Population',
                opacity: 0
                },
                {
                layer: '2020result',
                opacity: 0.8
                },
                {
                layer: 'electionname',
                opacity: 0.8
                }
        ],
        onChapterExit: [
            {
                layer: '2020result',
                opacity: 0
            },
            {
                layer: 'electionname',
                opacity: 0
            },
        ]},
        {//7 The situation in the City
            id: 'The situation in the City',
            image:'image/2020.gif',
            image2:'image/007.jpg',
            alignment: 'left',
            title: 'The situation in the City',
            description:"The situation in the city is even more complicated. If we examine the 2016 and 2020 election data in New York City, we may find a similar trend as counties, the left shifted to the right, and the right one became further right. It seems the Republican supports are growing in the city, especially in the conservative community and minority areas.<p></p> <small> Election Data Source: <a href='https://toddwschneider.com/maps/nyc-presidential-election-results/?year=2016#9.5/40.6888/-74.0892'>NYC presidential election results</a></small>",
            location: {
                center:[-74.215643, 40.705344],
                zoom:9.8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{
                layer: '2012result',
                opacity: 0
            },
            {
                layer: '2016result',
                opacity: 0
            },
                       {
                layer: 'Population',
                opacity: 0
            },
            {
                layer: 'electionname',
                opacity: 0
            },
            {
                layer: '2020result',
                opacity: 0
            },
            {
                layer: '2020NYC',
                opacity: 0
            },
            {
                layer: 'ethnity',
                opacity: 0.8
            },
        ],
            onChapterExit: [{
                layer: 'ethnity',
                opacity: 0}
    
            ]
        },

 {//8  The Orthodox Jewish Community
    id: ' The Orthodox Community',
    image:'image/008.jpg',
    imageCredit:"Bumper stickers supporting Donald J. Trump in the Orthodox Jewish community of Borough Park, Brooklyn. By<a href='https://www.nytimes.com/2016/11/11/nyregion/in-democratic-stronghold-of-new-york-city-trump-finds-support-among-orthodox-jews.html?searchResultPosition=1'>Christian Hansen for The New York Times</a>",
    alignment: 'left',
    title:'The Orthodox Community',
    description:"<span class='notes'>In the Democratic stronghold of New York City, the orthodox community, such as Williamsburg, Crown Heights, and Borough Park, always did not go the Democratic way. And during the New York City coronavirus crisis, many ultra-Orthodox Jewish communities refused to obey the rules imposed to protect public health for a religious reason. It is not the first time the orthodox community conflicted with the Democratic government. But this year seems more acute. Under this context, these communities vote more likesome red states.<p></p> <small>Election Data Source: <a href='https://toddwschneider.com/maps/nyc-presidential-election-results/?year=2016#9.5/40.6888/-74.0892'>NYC presidential election results</a></small>",
    location: {
        center: [-73.958909,40.699823],
                zoom: 16,
                pitch: 40,
                bearing: -15
    },
    onChapterEnter: [{
        layer: '2012result',
        opacity: 0
    },
    {
        layer: '2016result',
        opacity: 0
    },
               {
        layer: 'Population',
        opacity: 0
    },
    {
        layer: 'electionname',
        opacity: 0
    },
    {
        layer: '2020result',
        opacity: 0
    },
    {
        layer: '2020NYC',
        opacity: 0.6
    },
    {
        layer: 'ethnity',
        opacity: 0
    },
],
    onChapterExit: [
        {   layer: '2020NYC',
            opacity: 0}
    ]
},

         {//picture3 
            id: 'picture3',
            alignments: 'full',
            image:'image/P03.jpg',
            imageCredit:'',
            title: '',
            quote: 'Hundreds of members of the ultra-Orthodox Jewish community attend a funeral Sunday in the Borough Park neighborhood of Brooklyn for a rabbi who died from coronavirus complications.',
            imageCredit: "<a href='https://www.wsj.com/articles/new-yorks-ultra-orthodox-jewish-community-warned-about-large-funeral-crowds-11586210023'>SPENCER PLATT/GETTY IMAGES</a>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
 
        {//9 The complex demographic
            id: 'The complex demographic',
            image:'image/009.jpg',
            imageCredit:'<a href="https://commons.wikimedia.org/wiki/File:Defund_the_police.jpg">"Defund the Police,"</a> a phrase popularized by Black Lives Matter during the George Floyd protests',
            alignment: 'left',
            title: 'The complex demographic',
            description:"<span class='notes'><a href=''>Although nonwhites still vote about two to one for the Democrats,</a> Trump this year got a larger share of the nonwhite vote than any Republican since 1960. Like suburbs, besides pandemic, economy, and health, minorities in the city are more concerned about education, undocumented immigrant, and racial discrimination. The minority still the Democratic firmly support. In Queens, minorities' neighborhoods, like Jackson Heights, Jamaica, Richmond Hill, keep blue, but at the edge, the color begins to change. <p></p><small> Election Data Source: <a href='https://toddwschneider.com/maps/nyc-presidential-election-results/?year=2016#9.5/40.6888/-74.0892'>NYC presidential election results</a></small>",
            location: {
                center:[-73.891713,40.728636],
                zoom: 11.2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{
                layer: '2012result',
                opacity: 0
            },
            {
                layer: '2016result',
                opacity: 0
            },
                       {
                layer: 'Population',
                opacity: 0
            },
            {
                layer: 'electionname',
                opacity: 0
            },
            {
                layer: '2020result',
                opacity: 0
            },
            {
                layer: '2020NYC',
                opacity: 0.8
            },
            {
                layer: 'ethnity',
                opacity: 0
            },
                   ],
            onChapterExit: [
                {   layer: 'ethnity',
                    opacity: 0
                },
                {
                layer: '2020NYC',
                opacity: 0},
                ]},

      
         {//10 The Chinese American
            id: 'The Asian American',
            image:'image/010-1.jpeg',
            imageCredit:'Supporters of the SHSAT rally at Queens Borough Hall.<a href="https://queenseagle.com/all/shsat-protest-mayors-test-plan">PHOTO BY ANGEL TORRES</a>',
            image2:'image/010-2.jpg',
            alignment: 'left',
            title: '<span>The Asian American',
            description:"The majority of Asian Americans do identify as Democrats. However, we can see some change in the Chinese American community. Recently in the New York City SHSAT reform, chaos under the BLM movement, and racial hate crimes under the coronavirus crisis, all make  Chinese Americans feel disappointed with Democrats. A <a href='https://cn.nytimes.com/opinion/20201120/dont-laugh-at-chinese-trump-supporters/'> \"Chinese Americans for Trump\" </a>movement even was seen in a few areas, who believe the Americans need a strong and arbitrary leader like Trump. ",
            location: {
                center: [-73.831157, 40.713383],
                zoom: 16,
                pitch: 40,
                bearing: -7
            },
            onChapterEnter: [{
                layer: '2012result',
                opacity: 0
            },
            {
                layer: '2016result',
                opacity: 0
            },
                       {
                layer: 'Population',
                opacity: 0
            },
            {
                layer: 'electionname',
                opacity: 0
            },
            {
                layer: '2020result',
                opacity: 0
            },
            {
                layer: '2020NYC',
                opacity: 0
            },
        ],
            onChapterExit: [{
                layer: '2020NYC',
                opacity: 0}
    
            ]
          },
        
    ]
}