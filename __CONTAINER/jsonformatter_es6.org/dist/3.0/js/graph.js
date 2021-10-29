let treeData = $.parseJSON(localStorage.getItem("jsondata"));
function traverse(e, t) {
  "object" == typeof e
    ? $.each(e, (e, r) => {
        const n = [];
        traverse(r, n), t.push({ name: e, children: n });
      })
    : t.push({ name: e });
}
const graph = [];
traverse(treeData, graph);
const graph1 = JSON.stringify(graph);
(treeData = graph1.substr(1, graph1.length - 2)),
  (treeData = $.parseJSON(treeData));
let root;
let totalNodes = 0;
let maxLabelLength = 0;
let selectedNode = null;
let draggingNode = null;
const panSpeed = 200;
const panBoundary = 20;
let i = 0;
const duration = 750;
const viewerWidth = $(document).width();
const viewerHeight = $(document).height();
let tree = d3.layout.tree().size([viewerHeight, viewerWidth]);

const diagonal = d3.svg.diagonal().projection(e => {
  return [e.y, e.x];
});

function visit(e, t, r) {
  if (e) {
    t(e);
    const n = r(e);
    if (n) for (let a = n.length, o = 0; o < a; o++) visit(n[o], t, r);
  }
}
function sortTree() {
  tree.sort((e, t) => {
    return t.name.toString().toLowerCase() < e.name.toString().toLowerCase()
      ? 1
      : -1;
  });
}
function sortTreeAndUpdate() {
  sortTree(), updateTree(root), centerNode(root);
}
function expandJTreeAll() {
  root.children.forEach(e => {
    expand(e), updateTree(e), centerNode(e);
  });
}
function collapseJTreeAll() {
  root.children.forEach(e => {
    collapse(e), updateTree(e), centerNode(e);
  });
}
function pan(e, t) {
  const r = panSpeed;
  panTimer &&
    (clearTimeout(panTimer),
    (translateCoords = d3.transform(svgGroup.attr("transform"))),
    "left" == t || "right" == t
      ? ((translateX =
          "left" == t
            ? translateCoords.translate[0] + r
            : translateCoords.translate[0] - r),
        (translateY = translateCoords.translate[1]))
      : ("up" != t && "down" != t) ||
        ((translateX = translateCoords.translate[0]),
        (translateY =
          "up" == t
            ? translateCoords.translate[1] + r
            : translateCoords.translate[1] - r)),
    (scaleX = translateCoords.scale[0]),
    (scaleY = translateCoords.scale[1]),
    (scale = zoomListener.scale()),
    svgGroup
      .transition()
      .attr(
        "transform",
        `translate(${translateX},${translateY})scale(${scale})`
      ),
    d3
      .select(e)
      .select("g.node")
      .attr("transform", `translate(${translateX},${translateY})`),
    zoomListener.scale(zoomListener.scale()),
    zoomListener.translate([translateX, translateY]),
    (panTimer = setTimeout(() => {
      pan(e, r, t);
    }, 50)));
}
function zoom() {
  svgGroup.attr(
    "transform",
    `translate(${d3.event.translate})scale(${d3.event.scale})`
  );
}
var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);
function initiateDrag(e, t) {
  (draggingNode = e),
    d3.select(t).select(".ghostCircle").attr("pointer-events", "none"),
    d3.selectAll(".ghostCircle").attr("class", "ghostCircle show"),
    d3.select(t).attr("class", "node activeDrag"),
    svgGroup.selectAll("g.node").sort((e, t) => {
      return e.id != draggingNode.id ? 1 : -1;
    }),
    nodes.length > 1 &&
      ((links = tree.links(nodes)),
      (nodePaths = svgGroup
        .selectAll("path.link")
        .data(links, e => {
          return e.target.id;
        })
        .remove()),
      (nodesExit = svgGroup
        .selectAll("g.node")
        .data(nodes, e => {
          return e.id;
        })
        .filter((e, t) => {
          return e.id != draggingNode.id;
        })
        .remove())),
    (parentLink = tree.links(tree.nodes(draggingNode.parent))),
    svgGroup
      .selectAll("path.link")
      .filter((e, t) => {
        return e.target.id == draggingNode.id;
      })
      .remove(),
    (dragStarted = null);
}
const baseSvg = d3
  .select("#tree-container")
  .append("svg")
  .attr("width", viewerWidth)
  .attr("height", viewerHeight)
  .attr("class", "overlay")
  .call(zoomListener);
function endDrag() {
  (selectedNode = null),
    d3.selectAll(".ghostCircle").attr("class", "ghostCircle"),
    d3.select(domNode).attr("class", "node"),
    d3.select(domNode).select(".ghostCircle").attr("pointer-events", ""),
    updateTempConnector(),
    null !== draggingNode &&
      (updateTree(root), centerNode(draggingNode), (draggingNode = null));
}
function collapse(e) {
  e.children &&
    ((e._children = e.children),
    e._children.forEach(collapse),
    (e.children = null));
}
function expand(e) {
  e._children &&
    ((e.children = e._children),
    e.children.forEach(expand),
    (e._children = null));
}
dragListener = d3.behavior
  .drag()
  .on("dragstart", e => {
    e != root &&
      ((dragStarted = !0),
      (nodes = tree.nodes(e)),
      d3.event.sourceEvent.stopPropagation());
  })
  .on("drag", function (e) {
    if (e != root) {
      if (
        (dragStarted && ((domNode = this), initiateDrag(e, domNode)),
        (relCoords = d3.mouse($("svg").get(0))),
        relCoords[0] < panBoundary)
      )
        (panTimer = !0), pan(this, "left");
      else if (relCoords[0] > $("svg").width() - panBoundary)
        (panTimer = !0), pan(this, "right");
      else if (relCoords[1] < panBoundary) (panTimer = !0), pan(this, "up");
      else if (relCoords[1] > $("svg").height() - panBoundary)
        (panTimer = !0), pan(this, "down");
      else
        try {
          clearTimeout(panTimer);
        } catch (e) {}
      (e.x0 += d3.event.dy),
        (e.y0 += d3.event.dx),
        d3
          .select(this)
          .attr("transform", `translate(${e.y0},${e.x0})`),
        updateTempConnector();
    }
  })
  .on("dragend", function (e) {
    if (e != root)
      if (((domNode = this), selectedNode)) {
        const t = draggingNode.parent.children.indexOf(draggingNode);
        t > -1 && draggingNode.parent.children.splice(t, 1),
          void 0 !== selectedNode.children || void 0 !== selectedNode._children
            ? void 0 !== selectedNode.children
              ? selectedNode.children.push(draggingNode)
              : selectedNode._children.push(draggingNode)
            : ((selectedNode.children = []),
              selectedNode.children.push(draggingNode)),
          expand(selectedNode),
          sortTree(),
          endDrag();
      } else endDrag();
  });

const overCircle = e => {
    (selectedNode = e), updateTempConnector();
  };

const outCircle = e => {
  (selectedNode = null), updateTempConnector();
};

var updateTempConnector = () => {
  let e = [];
  null !== draggingNode &&
    null !== selectedNode &&
    (e = [
      {
        source: { x: selectedNode.y0, y: selectedNode.x0 },
        target: { x: draggingNode.y0, y: draggingNode.x0 },
      },
    ]);
  const t = svgGroup.selectAll(".templink").data(e);
  t
    .enter()
    .append("path")
    .attr("class", "templink")
    .attr("d", d3.svg.diagonal())
    .attr("pointer-events", "none"),
    t.attr("d", d3.svg.diagonal()),
    t.exit().remove();
};

function centerNode(e) {
  (scale = zoomListener.scale()),
    (x = -e.y0),
    (y = -e.x0),
    (x = x * scale + viewerWidth / 2),
    (y = y * scale + viewerHeight / 2),
    d3
      .select("g")
      .transition()
      .duration(duration)
      .attr("transform", `translate(${x},${y})scale(${scale})`),
    zoomListener.scale(scale),
    zoomListener.translate([x, y]);
}
function toggleChildren(e) {
  return (
    e.children
      ? ((e._children = e.children), (e.children = null))
      : e._children && ((e.children = e._children), (e._children = null)),
    e
  );
}
function click(e) {
  d3.event.defaultPrevented ||
    (updateTree((e = toggleChildren(e))), centerNode(e));
}
function updateTree(e) {
  const t = [1],
        r = (e, n) => {
          n.children &&
            n.children.length > 0 &&
            (t.length <= e + 1 && t.push(0),
            (t[e + 1] += n.children.length),
            n.children.forEach(t => {
              r(e + 1, t);
            }));
        };
  r(0, root);
  const n = 25 * d3.max(t), a = (tree = tree.size([n, viewerWidth])).nodes(root).reverse(), o = tree.links(a);
  a.forEach(e => {
    e.y = e.depth * (10 * maxLabelLength);
  }),
    (node = svgGroup.selectAll("g.node").data(a, e => {
      return e.id || (e.id = ++i);
    }));
  const l = node
    .enter()
    .append("g")
    .call(dragListener)
    .attr("class", "node")
    .attr("transform", t => {
      return `translate(${e.y0},${e.x0})`;
    })
    .on("click", click);
  l
    .append("circle")
    .attr("class", "nodeCircle")
    .attr("r", 0)
    .style("fill", e => {
      return e._children ? "lightsteelblue" : "#fff";
    }),
    l
      .append("text")
      .attr("x", e => {
        return e.children || e._children ? -10 : 10;
      })
      .attr("dy", ".35em")
      .attr("class", "nodeText")
      .attr("text-anchor", e => {
        return e.children || e._children ? "end" : "start";
      })
      .text(e => {
        return e.name;
      })
      .style("fill-opacity", 0),
    l
      .append("circle")
      .attr("class", "ghostCircle")
      .attr("r", 30)
      .attr("opacity", 0.2)
      .style("fill", "red")
      .attr("pointer-events", "mouseover")
      .on("mouseover", e => {
        overCircle(e);
      })
      .on("mouseout", e => {
        outCircle(e);
      }),
    node
      .select("text")
      .attr("x", e => {
        return e.children || e._children ? -10 : 10;
      })
      .attr("text-anchor", e => {
        return e.children || e._children ? "end" : "start";
      })
      .text(e => {
        return e.name;
      }),
    node
      .select("circle.nodeCircle")
      .attr("r", 4.5)
      .style("fill", e => {
        return e._children ? "lightsteelblue" : "#fff";
      }),
    node
      .transition()
      .duration(duration)
      .attr("transform", e => {
        return `translate(${e.y},${e.x})`;
      })
      .select("text")
      .style("fill-opacity", 1);
  const d = node
    .exit()
    .transition()
    .duration(duration)
    .attr("transform", t => {
      return `translate(${e.y},${e.x})`;
    })
    .remove();
  d.select("circle").attr("r", 0), d.select("text").style("fill-opacity", 0);
  const s = svgGroup.selectAll("path.link").data(o, e => {
    return e.target.id;
  });
  s
    .enter()
    .insert("path", "g")
    .attr("class", "link")
    .attr("d", t => {
      const r = { x: e.x0, y: e.y0 };
      return diagonal({ source: r, target: r });
    }),
    s.transition().duration(duration).attr("d", diagonal),
    s
      .exit()
      .transition()
      .duration(duration)
      .attr("d", t => {
        const r = { x: e.x, y: e.y };
        return diagonal({ source: r, target: r });
      })
      .remove(),
    a.forEach(e => {
      (e.x0 = e.x), (e.y0 = e.y);
    });
}
visit(
  treeData,
  e => {
    totalNodes++;
    const t = maxLabelLength;
    (maxLabelLength = Math.max(e.name.length, maxLabelLength)),
      isNaN(maxLabelLength) && (maxLabelLength = t);
  },
  e => {
    return e.children && e.children.length > 0 ? e.children : null;
  }
);
var svgGroup = baseSvg.append("g");
((root = treeData).x0 = viewerHeight),
  (root.y0 = 0),
  root.children.forEach(e => {
    collapse(e);
  }),
  updateTree(root),
  centerNode(root);
