<a href="#maincontent" class="hidden-for-screen-readers">Skip to main content</a>

Due to a planned power outage on Wednesday, 10/27, between 8am-1pm PDT, some services may be impacted.

Internet Archive's 25th Anniversary Logo

Internet Archive logo

A line drawing of the Internet Archive headquarters building façade.

Search icon

An illustration of a magnifying glass.

Search icon

An illustration of a magnifying glass.

Upload icon

An illustration of a horizontal line over an up pointing arrow.

<span class="style-scope primary-nav">Upload</span>

User icon

An illustration of a person's head and chest.

<span class="style-scope login-button"> <a href="https://archive.org/account/signup" class="style-scope login-button">Sign up</a> | <a href="https://archive.org/account/login" class="style-scope login-button">Log in</a> </span>

Web icon

An illustration of a computer application window

<span class="label style-scope media-button">Wayback Machine</span>

Texts icon

An illustration of an open book.

<span class="label style-scope media-button">Books</span>

Video icon

An illustration of two cells of a film strip.

<span class="label style-scope media-button">Video</span>

Audio icon

An illustration of an audio speaker.

<span class="label style-scope media-button">Audio</span>

Software icon

An illustration of a 3.5" floppy disk.

<span class="label style-scope media-button">Software</span>

Images icon

An illustration of two photographs.

<span class="label style-scope media-button">Images</span>

Donate icon

An illustration of a heart shape

<span class="label style-scope media-button">Donate</span>

Ellipses icon

An illustration of text ellipses.

<span class="label style-scope media-button">More</span>

Hamburger icon

An icon used to represent a menu that can be toggled by interacting with this icon.

-   <a href="https://archive.org/about/" class="about style-scope desktop-subnav">About</a>
-   <a href="https://blog.archive.org/" class="blog style-scope desktop-subnav">Blog</a>
-   <a href="https://archive.org/projects/" class="projects style-scope desktop-subnav">Projects</a>
-   <a href="https://archive.org/about/faqs.php" class="help style-scope desktop-subnav">Help</a>
-   Donate
    Donate icon
    An illustration of a heart shape
-   <a href="https://archive.org/about/contact.php" class="contact style-scope desktop-subnav">Contact</a>
-   <a href="https://archive.org/about/jobs.php" class="jobs style-scope desktop-subnav">Jobs</a>
-   <a href="https://archive.org/about/volunteerpositions.php" class="volunteer style-scope desktop-subnav">Volunteer</a>
-   <a href="https://archive.org/about/bios.php" class="people style-scope desktop-subnav">People</a>

Search Metadata Search text contents Search TV news captions Search archived websites <a href="https://archive.org/advancedsearch.php" class="advanced-search style-scope search-menu">Advanced Search</a>

-   <a href="https://archive.org/account/signup" class="style-scope signed-out-dropdown">Sign up for free</a>
-   <a href="https://archive.org/account/login" class="style-scope signed-out-dropdown">Log in</a>

![](/web/images/logo_wayback_210x77.png)

Wayback Machine APIs
====================

The Internet Archive Wayback Machine supports a number of different APIs to make it easier for developers to retrieve information about Wayback capture data.

The following is a listing of currently supported APIs. This page is subject to change frequently, please check back for the latest info.

*Updated on September, 24, 2013*

Wayback Availability JSON API
-----------------------------

This simple API for Wayback is a test to see if a given url is archived and currenlty accessible in the Wayback Machine. This API is useful for providing a 404 or other error handler which checks Wayback to see if it has an archived copy ready to display. The API can be used as follows:

**`     http://archive.org/wayback/available?url=example.com`**

which might return:

    {
        "archived_snapshots": {
            "closest": {
                "available": true,
                "url": "http://web.archive.org/web/20130919044612/http://example.com/",
                "timestamp": "20130919044612",
                "status": "200"
            }
        }
    }

if the url is available. When available, the **url** is the link to the archived snapshot in the Wayback Machine At this time, archived\_snapshots just returns a single **closest** snapshot, but additional snapshots may be added in the future.

If the url is not available (not archived or currently not accessible), the response will be:

    {"archived_snapshots":{}}

### Other Options

Additional options which may be specified are **`timestamp`** and **`callback`**

-   `timestamp` is the timestamp to look up in Wayback. If not specified, the most recenty available capture in Wayback is returned. The format of the timestamp is 1-14 digits (YYYYMMDDhhmmss) ex:
-   **`callback`** is an optional callback which may be specified to produce a JSONP response.

Memento API
-----------

The Internet Archive Wayback Machine is also fully compliant with the [Memento Protocol](http://mementoweb.org) The Memento API provides additional interfaces for querying snapshots (eg 'Mementos') in the Wayback Machine. The Availability API is partially based on the Memento APIs.

Here are some [specific examples of Memento support in the Wayback Machine](http://ws-dl.blogspot.fr/2013/07/2013-07-15-wayback-machine-upgrades.html)

Wayback CDX Server API
----------------------

The CDX Server is another API which allows for complex querying, filtering and analysis of Wayback capture data. If you are looking for more in depth information about Wayback machine data, please take a look at the CDX server API.

The latest documentation on the CDX server can be found at: [Wayback CDX Server @ GitHub](https://github.com/internetarchive/wayback/tree/master/wayback-cdx-server)

![](//analytics.archive.org/0.gif?kind=track_js&track_js_case=control&cache_bust=740477579)

![](//analytics.archive.org/0.gif?kind=track_js&track_js_case=disabled&cache_bust=1160305568)
